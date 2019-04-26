import { AxiosResponse } from 'axios';
import Debug from 'debug';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import * as httpStatus from 'http-status-codes';

interface IResponseCache {
    [index: string]: ICacheObject;
}

interface ICacheObject {
    expiry?: number;
    etag?: string;
    data: any;
}

export class CacheController {

    public static isExpired = (cache?: ICacheObject) => cache && cache.expiry ? cache.expiry < Date.now() : true;

    private static readonly debug = Debug('eve-utils:CacheController');

    public readonly responseCache: IResponseCache = {};

    private readonly savePath?: string;

    constructor(savePath?: string) {
        this.savePath = savePath;

        if (this.savePath) {
            this.responseCache = this.readCache();
        }
    }

    public dumpCache() {
        if (this.savePath) {
            const cacheString = JSON.stringify(this.responseCache);
            writeFileSync(this.savePath, cacheString);
        }
    }

    public readCache(): IResponseCache {
        if (this.savePath && existsSync(this.savePath)) {
            const cacheString = readFileSync(this.savePath).toString();
            let cacheJson;
            try {
                cacheJson = JSON.parse(cacheString);
            } catch (error) {
                process.emitWarning(error.message);
            }

            if (cacheJson) {
                CacheController.debug(`${Object.keys(cacheJson).length} cached items loaded into memory`);
                return cacheJson;
            }
        }
        return {};
    }

    public saveToCache(response: AxiosResponse) {
        const url = response.config.url;

        if (!url) {
            throw new Error('Unable to save to cache, no URL given');
        }

        if (response.status === httpStatus.OK) {

            if (response.headers.expires || response.headers.etag) {
                this.responseCache[url] = {
                    data: response.data,
                };

                if (response.headers.etag) {
                    this.responseCache[url].etag = response.headers.etag;
                }

                this.responseCache[url].expiry =
                    response.headers.expires ? new Date(response.headers.expires).getTime() : (Date.now() + 300000);
            }

        } else if (response.status === httpStatus.NOT_MODIFIED) {

            this.responseCache[url].expiry =
                response.headers.expires ? new Date(response.headers.expires).getTime() : (Date.now() + 300000);
        }
    }
}
