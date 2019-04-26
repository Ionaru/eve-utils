/* tslint:disable:no-duplicate-string no-identical-functions no-big-function */

import * as fs from 'fs';

import { CacheController } from './cache.controller';

jest.mock('fs');

function setReadFileSyncOutput(output: string) {
    require('fs').readFileSync = () => {
        return output;
    };
}

function setWriteFileSyncOutput() {
    require('fs').writeFileSync = () => { /* Nothing to do */ };
}

function throwReadFileSyncOutput(throwable: any) {
    require('fs').readFileSync = () => {
        throw throwable;
    };
}

function throwWriteFileSyncOutput(throwable: any) {
    require('fs').writeFileSync = () => {
        throw throwable;
    };
}

function setCacheFileExists(exists: boolean) {
    require('fs').existsSync = () => exists;
}

describe('CacheController tests', () => {

    let warningSpy: jest.SpyInstance;
    let debugSpy: jest.SpyInstance;

    beforeEach(() => {
        warningSpy = jest.spyOn(process, 'emitWarning');
        // @ts-ignore
        debugSpy = jest.spyOn(CacheController, 'debug');
    });

    afterEach(() => {
        warningSpy.mockClear();
        debugSpy.mockClear();
    });

    const simpleCacheFileContent = {
        'https://some.url/': {
            data: 1,
        },
    };

    test('new CacheController no parameters', () => {
        const cache = new CacheController();
        expect(cache.responseCache).toBeTruthy();
    });

    test('new CacheController with path, no file', () => {
        setCacheFileExists(false);

        const cache = new CacheController('data/cache.json');
        expect(cache.responseCache).toBeTruthy();
    });

    test('new CacheController with path, unreadable file', () => {
        setCacheFileExists(true);
        throwReadFileSyncOutput(new Error('Unreadable'));

        expect(() => new CacheController('data/cache.json')).toThrow('Unreadable');
    });

    test('new CacheController with path, malformed JSON', () => {
        setCacheFileExists(true);
        setReadFileSyncOutput('This is in no way valid JSON!!');

        const cache = new CacheController('data/cache.json');
        expect(cache.responseCache).toBeTruthy();
        expect(warningSpy).toHaveBeenCalledWith('Unexpected token T in JSON at position 0');
    });

    test('new CacheController with path, file exists', () => {
        setCacheFileExists(true);
        setReadFileSyncOutput(JSON.stringify(simpleCacheFileContent));

        const cache = new CacheController('data/cache.json');
        expect(cache.responseCache).toBeTruthy();
        expect(debugSpy).toHaveBeenCalledWith('1 cached items loaded into memory');
        expect(Object.keys(cache.responseCache).length).toBe(1);
        expect(Object.keys(cache.responseCache)).toContain('https://some.url/');
        expect(Object.values(cache.responseCache)).toContainEqual(simpleCacheFileContent['https://some.url/']);
    });

    test('new CacheController with path no extension', () => {
        setCacheFileExists(true);
        setReadFileSyncOutput(JSON.stringify(simpleCacheFileContent));

        const cache = new CacheController('data/cache');
        expect(cache.responseCache).toBeTruthy();
        expect(debugSpy).toHaveBeenCalledWith('1 cached items loaded into memory');
        expect(Object.keys(cache.responseCache).length).toBe(1);
        expect(Object.keys(cache.responseCache)).toContain('https://some.url/');
        expect(Object.values(cache.responseCache)).toContainEqual(simpleCacheFileContent['https://some.url/']);
    });

    test('dumpCache', () => {
        setCacheFileExists(true);
        setReadFileSyncOutput(JSON.stringify(simpleCacheFileContent));

        const cache = new CacheController('data/cache.json');
        expect(cache.responseCache).toBeTruthy();
        expect(debugSpy).toHaveBeenCalledWith('1 cached items loaded into memory');
        expect(Object.keys(cache.responseCache).length).toBe(1);
        expect(Object.keys(cache.responseCache)).toContain('https://some.url/');
        expect(Object.values(cache.responseCache)).toContainEqual(simpleCacheFileContent['https://some.url/']);

        setWriteFileSyncOutput();

        const writeSpy = jest.spyOn(fs, 'writeFileSync');

        cache.dumpCache();
        expect(writeSpy).toBeCalledWith('data/cache.json', JSON.stringify(simpleCacheFileContent));
    });

    test('dumpCache', () => {
        setCacheFileExists(true);
        setReadFileSyncOutput(JSON.stringify(simpleCacheFileContent));

        const cache = new CacheController('data/cache.json');
        expect(cache.responseCache).toBeTruthy();
        expect(debugSpy).toHaveBeenCalledWith('1 cached items loaded into memory');
        expect(Object.keys(cache.responseCache).length).toBe(1);
        expect(Object.keys(cache.responseCache)).toContain('https://some.url/');
        expect(Object.values(cache.responseCache)).toContainEqual(simpleCacheFileContent['https://some.url/']);

        throwWriteFileSyncOutput(new Error('Unwritable!'));
        expect(() => cache.dumpCache()).toThrow('Unwritable!');
    });

    test('saveToCache with expiry', () => {
        const cache = new CacheController();
        expect(cache.responseCache).toBeTruthy();

        const expires = Date.now() + 60000;

        cache.saveToCache({
            config: {url: 'https://some.url/'},
            data: 'some data',
            headers: {expires},
            status: 200,
            statusText: 'OK',
        });

        expect(Object.keys(cache.responseCache).length).toBe(1);
        expect(Object.keys(cache.responseCache)).toContain('https://some.url/');
        expect(Object.values(cache.responseCache)).toContainEqual({data: 'some data', expiry: expires});
    });

    test('saveToCache with etag', () => {
        const cache = new CacheController();
        expect(cache.responseCache).toBeTruthy();

        cache.saveToCache({
            config: {url: 'https://some.url/'},
            data: 'some data',
            headers: {etag: '12645'},
            status: 200,
            statusText: 'OK',
        });

        expect(Object.keys(cache.responseCache).length).toBe(1);
        expect(Object.keys(cache.responseCache)).toContain('https://some.url/');
        expect(cache.responseCache['https://some.url/'].data).toEqual('some data');
        expect(cache.responseCache['https://some.url/'].etag).toEqual('12645');
        expect(cache.responseCache['https://some.url/'].expiry).toBeTruthy();
    });

    test('saveToCache with etag and expiry', () => {
        const cache = new CacheController();
        expect(cache.responseCache).toBeTruthy();

        const expires = Date.now() + 60000;

        cache.saveToCache({
            config: {url: 'https://some.url/'},
            data: 'some data',
            headers: {etag: '12645', expires},
            status: 200,
            statusText: 'OK',
        });

        expect(Object.keys(cache.responseCache).length).toBe(1);
        expect(Object.keys(cache.responseCache)).toContain('https://some.url/');
        expect(Object.values(cache.responseCache)).toContainEqual({data: 'some data', etag: '12645', expiry: expires});
    });

    test('saveToCache no url', () => {
        const cache = new CacheController();
        expect(cache.responseCache).toBeTruthy();

        const expires = Date.now() + 60000;

        expect(() => {
            cache.saveToCache({
                config: {},
                data: 'some data',
                headers: {expires},
                status: 200,
                statusText: 'OK',
            });
        }).toThrow('Unable to save to cache, no URL given');

        expect(Object.keys(cache.responseCache).length).toBe(0);
    });

    test('saveToCache not modified', () => {
        const cache = new CacheController();
        expect(cache.responseCache).toBeTruthy();

        const expires = Date.now() + 60000;

        cache.saveToCache({
            config: {url: 'https://some.url/'},
            data: 'some data',
            headers: {expires},
            status: 200,
            statusText: 'OK',
        });

        expect(Object.keys(cache.responseCache).length).toBe(1);
        expect(Object.keys(cache.responseCache)).toContain('https://some.url/');
        expect(Object.values(cache.responseCache)).toContainEqual({data: 'some data', expiry: expires});

        const updatedExpiry = Date.now() + 120000;

        cache.saveToCache({
            config: {url: 'https://some.url/'},
            data: '',
            headers: {expires: updatedExpiry},
            status: 304,
            statusText: 'Not Modified',
        });

        expect(Object.keys(cache.responseCache).length).toBe(1);
        expect(Object.keys(cache.responseCache)).toContain('https://some.url/');
        expect(Object.values(cache.responseCache)).toContainEqual({data: 'some data', expiry: updatedExpiry});
    });

    test('saveToCache not modified without expiry', () => {
        const cache = new CacheController();
        expect(cache.responseCache).toBeTruthy();

        const expires = Date.now() + 60000;

        cache.saveToCache({
            config: {url: 'https://some.url/'},
            data: 'some data',
            headers: {expires},
            status: 200,
            statusText: 'OK',
        });

        expect(Object.keys(cache.responseCache).length).toBe(1);
        expect(Object.keys(cache.responseCache)).toContain('https://some.url/');
        expect(Object.values(cache.responseCache)).toContainEqual({data: 'some data', expiry: expires});

        cache.saveToCache({
            config: {url: 'https://some.url/'},
            data: '',
            headers: {},
            status: 304,
            statusText: 'Not Modified',
        });

        expect(Object.keys(cache.responseCache).length).toBe(1);
        expect(Object.keys(cache.responseCache)).toContain('https://some.url/');
        expect(cache.responseCache['https://some.url/'].data).toEqual('some data');
        expect(cache.responseCache['https://some.url/'].expiry).toBeTruthy();
    });
});
