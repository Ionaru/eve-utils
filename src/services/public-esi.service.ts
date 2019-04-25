import { HttpsAgent } from 'agentkeepalive';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import chalk, { Chalk, ColorSupport } from 'chalk';
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

    private static getStatusColor(statusCode: number): Chalk & { supportsColor: ColorSupport } {
        if (statusCode >= 500) {
            return chalk.red;
        } else if (statusCode >= 400) {
            return chalk.yellow;
        } else if (statusCode >= 300) {
            return chalk.cyan;
        } else if (statusCode >= 200) {
            return chalk.green;
        } else {
            return chalk.whiteBright;
        }
    }

    private static validateStatus = (status: number) => status === httpStatus.OK || status === httpStatus.NOT_MODIFIED;

    private readonly axiosInstance: AxiosInstance;
    private readonly cacheController?: CacheController;

    constructor({axiosInstance, cacheController}: IConstructorParameters = {}) {

        if (axiosInstance) {
            this.axiosInstance = axiosInstance;
        } else {
            // Create a new axios instance with default optimizations.
            this.axiosInstance = axios.create({
                // 60 sec timeout
                timeout: 60000,

                // KeepAlive pools and reuses TCP connections, so it's faster.
                httpsAgent: new HttpsAgent(),

                // Follow up to 10 HTTP 3xx redirects.
                maxRedirects: 10,

                // Cap the maximum content length we'll accept to 50MBs, just in case.
                maxContentLength: 50 * 1000 * 1000,
            });
        }

        this.cacheController = cacheController;
        if (!this.cacheController) {
            process.emitWarning('No CacheController instance given to BaseESIService, requests will not be cached!');
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
            PublicESIService.debug(`${url} => ${PublicESIService.getStatusColor(response.status)(statusMessage)}`);
            if (response.status === httpStatus.OK || response.status === httpStatus.NOT_MODIFIED) {

                if (response.headers.warning) {
                    PublicESIService.logWarning(url, response.headers.warning);
                }

                if (this.cacheController) {
                    this.cacheController.saveToCache(response);
                    return this.cacheController.responseCache[url].data as T;
                }

                return response.data as T;

            } else {
                const errorMessage = `${url} ${response.status} ${response.statusText}\n${response.data}`;
                throw new Error(`Request not OK: ${errorMessage}`);
            }
        }

        return;
    }
}
