/* tslint:disable:no-big-function */

import { AxiosResponse } from 'axios';

import { CacheController } from '..';
import mockAxios from '../__mocks__/axios';
import { PublicESIService } from './public-esi.service';

describe('PublicESIService tests', () => {

    const url = 'https://esi.evetech.net/v3/universe/types/34';

    interface ITypeData {
        name: string;
    }

    const expectedResult: ITypeData = {
        name: 'Tritanium',
    };

    let warningSpy: jest.SpyInstance;

    beforeEach(() => {
        warningSpy = jest.spyOn(process, 'emitWarning');
    });

    afterEach(() => {
        warningSpy.mockClear();
        mockAxios.get.mockRestore();
    });

    function axiosCreateMock() {
        return {
            get: mockAxios.get,
        };
    }

    function axiosGetMock(returnValue: AxiosResponse) {
        const validateStatusFunction = mockAxios.get.mock.calls[0][1].validateStatus;
        if (validateStatusFunction(returnValue.status)) {
            return returnValue;
        }

        // This would normally be an Axios error.
        throw new Error('HTTP Error');
    }

    test('new PublicESIService no parameters', async () => {

        mockAxios.create.mockImplementationOnce(axiosCreateMock);

        mockAxios.get.mockImplementationOnce(async () => axiosGetMock({
            config: {url},
            data: expectedResult,
            headers: {},
            status: 200,
            statusText: 'OK',
        }));

        const esi = new PublicESIService();

        const result = await esi.fetchESIData<ITypeData>(url);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(url, expect.anything());
        expect(result).toBeTruthy();
        expect(result!.name).toEqual('Tritanium');
    });

    test('new PublicESIService default axios', async () => {

        mockAxios.create.mockImplementationOnce(axiosCreateMock);

        mockAxios.get.mockImplementationOnce(async () => axiosGetMock({
            config: {url},
            data: expectedResult,
            headers: {
                expires: Date.now() + 60000,
            },
            status: 200,
            statusText: 'OK',
        }));

        const cache = new CacheController();
        const esi = new PublicESIService({cacheController: cache});

        const result = await esi.fetchESIData<ITypeData>(url);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(url, expect.anything());
        expect(result).toBeTruthy();
        expect(result!.name).toEqual('Tritanium');
    });

    test('new PublicESIService default CacheController', async () => {

        // @ts-ignore
        new PublicESIService({axiosInstance: mockAxios});

        expect(warningSpy).toHaveBeenCalledWith('No CacheController instance given to PublicESIService, requests will not be cached!');
    });

    test('fetchESIData', async () => {

        mockAxios.get.mockImplementationOnce(async () => axiosGetMock({
            config: {url},
            data: expectedResult,
            headers: {},
            status: 200,
            statusText: 'OK',
        }));

        // @ts-ignore
        const esi = new PublicESIService({axiosInstance: mockAxios});

        const result = await esi.fetchESIData<ITypeData>(url);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(url, expect.anything());
        expect(result).toBeTruthy();
        expect(result!.name).toEqual('Tritanium');
    });

    test('fetchESIData expiry caching', async () => {

        mockAxios.get.mockImplementationOnce(async () => axiosGetMock({
            config: {url},
            data: expectedResult,
            headers: {
                expires: Date.now() + 60000,
            },
            status: 200,
            statusText: 'OK',
        }));

        const cache = new CacheController();

        // @ts-ignore
        const esi = new PublicESIService({axiosInstance: mockAxios, cacheController: cache});

        const result = await esi.fetchESIData<ITypeData>(url);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(url, expect.anything());
        expect(result).toBeTruthy();
        expect(result!.name).toEqual('Tritanium');

        // Result should have been cached.

        const result2 = await esi.fetchESIData<ITypeData>(url);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(result2).toBeTruthy();
        expect(result2!.name).toEqual('Tritanium');
    });

    test('fetchESIData etag caching', async () => {

        mockAxios.get.mockImplementationOnce(async () => axiosGetMock({
            config: {url},
            data: expectedResult,
            headers: {
                etag: '12345',
                expires: Date.now() - 60000,
            },
            status: 200,
            statusText: 'OK',
        }));

        const cache = new CacheController();

        // @ts-ignore
        const esi = new PublicESIService({axiosInstance: mockAxios, cacheController: cache});

        const result = await esi.fetchESIData<ITypeData>(url);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(url, expect.anything());
        expect(result).toBeTruthy();
        expect(result!.name).toEqual('Tritanium');

        // Result should have been cached.

        mockAxios.get.mockImplementationOnce(async () => axiosGetMock({
            config: {url},
            data: '',
            headers: {
                etag: '12345',
                expires: Date.now() - 60000,
            },
            status: 304,
            statusText: 'NOT MODIFIED',
        }));

        const result2 = await esi.fetchESIData<ITypeData>(url);
        expect(mockAxios.get).toHaveBeenCalledTimes(2);
        expect(mockAxios.get).toHaveBeenCalledWith(url, expect.anything());
        expect(result2).toBeTruthy();
        expect(result2!.name).toEqual('Tritanium');
    });

    test('fetchESIData error', async () => {

        mockAxios.get.mockImplementationOnce(async () => axiosGetMock({
            config: {url},
            data: 'Something went wrong!',
            headers: {},
            status: 500,
            statusText: 'Internal Server Error',
        }));

        // @ts-ignore
        const esi = new PublicESIService({axiosInstance: mockAxios});

        await expect(esi.fetchESIData<ITypeData>(url)).rejects.toThrow('HTTP Error');
    });

    test('fetchESIData no response', async () => {

        mockAxios.get.mockImplementationOnce(() => Promise.resolve());

        // @ts-ignore
        const esi = new PublicESIService({axiosInstance: mockAxios});

        const result = await esi.fetchESIData<ITypeData>(url);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(url, expect.anything());
        expect(result).toBeUndefined();
    });

    test('fetchESIData warning', async () => {

        mockAxios.get.mockImplementationOnce(async () => axiosGetMock({
            config: {url},
            data: expectedResult,
            headers: {
                warning: 'You have been warned!',
            },
            status: 200,
            statusText: 'OK',
        }));

        // @ts-ignore
        const esi = new PublicESIService({axiosInstance: mockAxios});

        const result = await esi.fetchESIData<ITypeData>(url);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(url, expect.anything());
        expect(result).toBeTruthy();
        expect(result!.name).toEqual('Tritanium');

        expect(warningSpy).toHaveBeenCalledWith(`HTTP request warning. ${url}: You have been warned!`);
    });

    test('validateStatus', async () => {

        mockAxios.get.mockImplementationOnce(async () => axiosGetMock({
            config: {url},
            data: expectedResult,
            headers: {},
            status: 200,
            statusText: 'OK',
        }));

        // @ts-ignore
        const esi = new PublicESIService({axiosInstance: mockAxios});
        await esi.fetchESIData<ITypeData>(url);

        const validateStatusFunction = mockAxios.get.mock.calls[0][1].validateStatus;

        [200, 304].forEach((status) => {
            const valid = validateStatusFunction(status);
            expect(valid).toBe(true);
        });

        [204, 400, 401, 403, 404, 500, 502, 503, 504].forEach((status) => {
            const valid = validateStatusFunction(status);
            expect(valid).toBe(false);
        });
    });
});
