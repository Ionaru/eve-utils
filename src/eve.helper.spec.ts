/* tslint:disable:max-line-length */

import { EVE } from './';

describe('URL tests', () => {

    test.each([

        [[1, []], 'https://esi.evetech.net/v1/'],
        [[2, ['thing']], 'https://esi.evetech.net/v2/thing/'],
        [[3, ['thing', 'other']], 'https://esi.evetech.net/v3/thing/other/'],
        [[4, ['thing', 'other', 6]], 'https://esi.evetech.net/v4/thing/other/6/'],

    ])('constructESIURL %j', (parameters, expected) => {
        expect(EVE.constructESIUrl(parameters[0] as number, parameters[1] as string[], {})).toEqual(expected);
        expect(EVE.constructESIUrl(parameters[0] as number, parameters[1] as string[])).toEqual(expected);
    });

    test('constructESIURL advanced', () => {
        const url1 = EVE.constructESIUrl(1, [], {param1: 1});
        expect(url1).toEqual('https://esi.evetech.net/v1/?param1=1');

        const url2 = EVE.constructESIUrl(1, ['thing'], {param1: 1});
        expect(url2).toEqual('https://esi.evetech.net/v1/thing/?param1=1');

        const url3 = EVE.constructESIUrl(1, [], {param1: 1, param2: 'something'});
        expect(url3).toEqual('https://esi.evetech.net/v1/?param1=1&param2=something');

        const url4 = EVE.constructESIUrl(1, ['thing'], {param1: 1, param2: 'something'});
        expect(url4).toEqual('https://esi.evetech.net/v1/thing/?param1=1&param2=something');
    });
});

describe('URL creators', () => {

    test.each([

        [EVE.getCharacterUrl(5), 'https://esi.evetech.net/v4/characters/5/'],
        [EVE.getCharacterAttributesUrl(5), 'https://esi.evetech.net/v1/characters/5/attributes/'],
        [EVE.getCharacterAssetsUrl(5, 6), 'https://esi.evetech.net/v5/characters/5/assets/?page=6'],
        [EVE.getCharacterAssetsLocationsUrl(5), 'https://esi.evetech.net/v2/characters/5/assets/locations/'],
        [EVE.getCharacterAssetsNamesUrl(5), 'https://esi.evetech.net/v1/characters/5/assets/names/'],
        [EVE.getCharacterBlueprintsUrl(5, 6), 'https://esi.evetech.net/v2/characters/5/blueprints/?page=6'],
        [EVE.getCharacterShipUrl(5), 'https://esi.evetech.net/v1/characters/5/ship/'],
        [EVE.getCharacterSkillQueueUrl(5), 'https://esi.evetech.net/v2/characters/5/skillqueue/'],
        [EVE.getCharacterSkillsUrl(5), 'https://esi.evetech.net/v4/characters/5/skills/'],
        [EVE.getCharacterWalletJournalUrl(5), 'https://esi.evetech.net/v6/characters/5/wallet/journal/'],
        [EVE.getCharacterWalletUrl(5), 'https://esi.evetech.net/v1/characters/5/wallet/'],
        [EVE.getCharacterIndustryJobsUrl(5), 'https://esi.evetech.net/v1/characters/5/industry/jobs/?include_completed=false'],
        [EVE.getCharacterIndustryJobsUrl(5, false), 'https://esi.evetech.net/v1/characters/5/industry/jobs/?include_completed=false'],
        [EVE.getCharacterIndustryJobsUrl(5, true), 'https://esi.evetech.net/v1/characters/5/industry/jobs/?include_completed=true'],

        [EVE.getCharacterMailsUrl(5), 'https://esi.evetech.net/v1/characters/5/mail/'],
        [EVE.getCharacterMailsUrl(5, [1, 2, 3]), 'https://esi.evetech.net/v1/characters/5/mail/?labels=1,2,3'],
        [EVE.getCharacterMailsUrl(5, undefined, 50), 'https://esi.evetech.net/v1/characters/5/mail/?last_mail_id=50'],
        [EVE.getCharacterMailsUrl(5, [1, 2, 3], 50), 'https://esi.evetech.net/v1/characters/5/mail/?labels=1,2,3&last_mail_id=50'],
        [EVE.getCharacterMailUrl(5, 6), 'https://esi.evetech.net/v1/characters/5/mail/6/'],
        [EVE.getCharacterMailLabelsGETUrl(5), 'https://esi.evetech.net/v3/characters/5/mail/labels/'],
        [EVE.getCharacterMailLabelsPOSTUrl(5), 'https://esi.evetech.net/v2/characters/5/mail/labels/'],
        [EVE.getCharacterMailLabelUrl(5, 6), 'https://esi.evetech.net/v1/characters/5/mail/labels/6/'],
        [EVE.getCharacterMailListsUrl(5), 'https://esi.evetech.net/v1/characters/5/mail/lists/'],

        [EVE.getIndustryActivityMaterialsUrl(), 'https://sde.zzeve.com/industryActivityMaterials.json'],
        [EVE.getIndustryActivityProductsUrl(), 'https://sde.zzeve.com/industryActivityProducts.json'],
        [EVE.getIndustryActivitySkillsUrl(), 'https://sde.zzeve.com/industryActivitySkills.json'],
        [EVE.getIndustryActivityUrl(), 'https://sde.zzeve.com/industryActivity.json'],
        [EVE.getInvTypeMaterialsUrl(), 'https://sde.zzeve.com/invTypeMaterials.json'],

        [EVE.getIndustrySystemsUrl(), 'https://esi.evetech.net/v1/industry/systems/'],

        [EVE.getMarketGroupsUrl(), 'https://esi.evetech.net/v1/markets/groups/'],
        [EVE.getMarketGroupUrl(5), 'https://esi.evetech.net/v1/markets/groups/5/'],

        [EVE.getMarketOrdersUrl(5, 6, 7, 'buy'), 'https://esi.evetech.net/v1/markets/5/orders/?order_type=buy&page=7&type_id=6'],
        [EVE.getMarketOrdersUrl(5, 6, 7, 'sell'), 'https://esi.evetech.net/v1/markets/5/orders/?order_type=sell&page=7&type_id=6'],
        [EVE.getMarketOrdersUrl(5, 6, 7, 'all'), 'https://esi.evetech.net/v1/markets/5/orders/?order_type=all&page=7&type_id=6'],
        [EVE.getMarketOrdersUrl(5, 6, 7), 'https://esi.evetech.net/v1/markets/5/orders/?order_type=all&page=7&type_id=6'],

        [EVE.getMarketHistoryUrl(5, 6), 'https://esi.evetech.net/v1/markets/5/history/?type_id=6'],

        [EVE.getMarketPricesUrl(), 'https://esi.evetech.net/v1/markets/prices/'],

        [EVE.getStatusUrl(), 'https://esi.evetech.net/v1/status/'],

        [EVE.getSearchUrl('something'), 'https://esi.evetech.net/v2/search/?categories=agent,alliance,character,constellation,corporation,faction,inventory_type,region,solar_system,station&search=something'],
        [EVE.getSearchUrl('something', ['region']), 'https://esi.evetech.net/v2/search/?categories=region&search=something'],
        [EVE.getSearchUrl('something', ['region', 'faction']), 'https://esi.evetech.net/v2/search/?categories=region,faction&search=something'],

        [EVE.getUniverseCategoryUrl(5), 'https://esi.evetech.net/v1/universe/categories/5/'],
        [EVE.getUniverseCategoriesUrl(), 'https://esi.evetech.net/v1/universe/categories/'],
        [EVE.getUniverseConstellationsUrl(), 'https://esi.evetech.net/v1/universe/constellations/'],
        [EVE.getUniverseConstellationUrl(5), 'https://esi.evetech.net/v1/universe/constellations/5/'],
        [EVE.getUniverseGroupUrl(5), 'https://esi.evetech.net/v1/universe/groups/5/'],
        [EVE.getUniverseGroupsUrl(), 'https://esi.evetech.net/v1/universe/groups/'],
        [EVE.getUniverseNamesUrl(), 'https://esi.evetech.net/v2/universe/names/'],
        [EVE.getUniverseRegionsUrl(), 'https://esi.evetech.net/v1/universe/regions/'],
        [EVE.getUniverseRegionUrl(5), 'https://esi.evetech.net/v1/universe/regions/5/'],
        [EVE.getUniverseStructureUrl(5), 'https://esi.evetech.net/v2/universe/structures/5/'],
        [EVE.getUniverseStructuresUrl(), 'https://esi.evetech.net/v2/universe/structures/'],
        [EVE.getUniverseStationUrl(5), 'https://esi.evetech.net/v2/universe/stations/5/'],
        [EVE.getUniverseSystemsUrl(), 'https://esi.evetech.net/v1/universe/systems/'],
        [EVE.getUniverseSystemUrl(5), 'https://esi.evetech.net/v4/universe/systems/5/'],
        [EVE.getUniverseTypeUrl(5), 'https://esi.evetech.net/v3/universe/types/5/'],
        [EVE.getUniverseTypesUrl(5), 'https://esi.evetech.net/v1/universe/types/?page=5'],

    ])('URL creator %p', (url, expected) => {
        expect(url).toEqual(expected);
    });
});

describe('Ores & minerals', () => {
    test('ores', () => {
        expect(EVE.ores.highSec.base).toContain(EVE.ore.veldspar);
        expect(EVE.ores.highSec.beltVariants).toContain(EVE.ore.concentratedVeldspar);
        expect(EVE.ores.highSec.beltVariants).toContain(EVE.ore.denseVeldspar);
        expect(EVE.ores.highSec.moonVariants).toContain(EVE.ore.stableVeldspar);

        expect(EVE.ores.all).toContain(EVE.ore.veldspar);
        expect(EVE.ores.all).toContain(EVE.ore.concentratedVeldspar);
        expect(EVE.ores.all).toContain(EVE.ore.denseVeldspar);
        expect(EVE.ores.all).toContain(EVE.ore.stableVeldspar);

        expect((new Set(EVE.ores.all)).size).toBe(EVE.ores.all.length);
    });

    test('minerals', () => {
        expect(EVE.minerals).toContain(EVE.mineral.tritanium);

        expect((new Set(EVE.minerals)).size).toBe(EVE.minerals.length);
    });

    test('gasses', () => {
        expect(EVE.gasses.fullerenes).toContain(EVE.gas['Fullerite-C72']);
        expect(EVE.gasses.boosterGasClouds).toContain(EVE.gas['Viridian Cytoserocin']);
        expect(EVE.gasses.all).toContain(EVE.gas['Gamboge Cytoserocin']);

        expect((new Set(EVE.gasses.all)).size).toBe(EVE.gasses.all.length);
    });
});
