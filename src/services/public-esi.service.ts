import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Debug from 'debug';
import * as httpStatus from 'http-status-codes';

import { CacheController } from '..';

interface IConstructorParameters {
    axiosInstance?: AxiosInstance;
    cacheController?: CacheController;
}

export class PublicESIService {

    public static logWarning(route: string, text?: string) {
        if (!PublicESIService.deprecationsLogged.includes(route)) {
            process.emitWarning(`HTTP request warning. ${route}: ${text}`);
            PublicESIService.deprecationsLogged.push(route);
        }
    }

    private static readonly deprecationsLogged: string[] = [];

    private static readonly debug = Debug('eve-utils:BaseESIService');

    private static readonly acceptedStatusCodes = [
        httpStatus.OK,
        httpStatus.NOT_MODIFIED,
    ];

    private static validateStatus = (status: number) => PublicESIService.acceptedStatusCodes.includes(status);

    private readonly axiosInstance: AxiosInstance;
    private readonly cacheController?: CacheController;

    constructor({axiosInstance, cacheController}: IConstructorParameters = {}) {

        this.axiosInstance = axiosInstance ? axiosInstance : axios.create();

        this.cacheController = cacheController;
        if (!this.cacheController) {
            const esiClassName = this.constructor.name;
            process.emitWarning(`No CacheController instance given to ${esiClassName}, requests will not be cached!`);
        }
    }

    public async fetchESIData<T>(url: string): Promise<T | undefined> {

        // Return cached data if it exists and is still valid.
        if (this.cacheController && !CacheController.isExpired(this.cacheController.responseCache[url])) {
            return this.cacheController.responseCache[url].data as T;
        }

        const requestConfig: AxiosRequestConfig = {
            // Make sure 304 responses are not treated as errors.
            validateStatus: PublicESIService.validateStatus,
        };

        // Set the etag header if a cached response exists.
        if (this.cacheController && this.cacheController.responseCache[url] && this.cacheController.responseCache[url].etag) {
            requestConfig.headers = {
                'If-None-Match': `${this.cacheController.responseCache[url].etag}`,
            };
        }

        const response = await this.axiosInstance.get<T | undefined>(url, requestConfig);

        if (response) {
            const statusMessage = `${response.status} ${response.statusText}`;
            PublicESIService.debug(`${url} => ${statusMessage}`);

            if (response.headers.warning) {
                PublicESIService.logWarning(url, response.headers.warning);
            }

            if (this.cacheController) {
                this.cacheController.saveToCache(response);
                return this.cacheController.responseCache[url].data as T;
            }

            return response.data as T;
        }

        return;
    }
}
