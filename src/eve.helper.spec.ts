/* eslint-disable max-len */
import { EVE, Gas, Ice, Mineral, Ore, SearchCategory } from './';

// eslint-disable-next-line jest/lowercase-name
describe('URL tests', () => {

    it.each([

        [[1, []], 'https://esi.evetech.net/v1/'],
        [[2, ['thing']], 'https://esi.evetech.net/v2/thing/'],
        [[3, ['thing', 'other']], 'https://esi.evetech.net/v3/thing/other/'],
        [[4, ['thing', 'other', 6]], 'https://esi.evetech.net/v4/thing/other/6/'],

    ])('constructESIURL %j', (parameters, expected) => {
        expect.assertions(2);

        expect(EVE.constructESIUrl(parameters[0] as number, parameters[1] as string[], {})).toStrictEqual(expected);
        expect(EVE.constructESIUrl(parameters[0] as number, parameters[1] as string[])).toStrictEqual(expected);
    });

    it('constructESIURL advanced', () => {
        expect.assertions(4);

        const url1 = EVE.constructESIUrl(1, [], {param1: 1});
        expect(url1).toBe('https://esi.evetech.net/v1/?param1=1');

        const url2 = EVE.constructESIUrl(1, ['thing'], {param1: 1});
        expect(url2).toBe('https://esi.evetech.net/v1/thing/?param1=1');

        const url3 = EVE.constructESIUrl(1, [], {param1: 1, param2: 'something'});
        expect(url3).toBe('https://esi.evetech.net/v1/?param1=1&param2=something');

        const url4 = EVE.constructESIUrl(1, ['thing'], {param1: 1, param2: 'something'});
        expect(url4).toBe('https://esi.evetech.net/v1/thing/?param1=1&param2=something');
    });
});

// eslint-disable-next-line jest/lowercase-name
describe('URL creators', () => {

    it.each([

        [EVE.getCharacterUrl(5), 'https://esi.evetech.net/v5/characters/5/'],
        [EVE.getCharacterAttributesUrl(5), 'https://esi.evetech.net/v1/characters/5/attributes/'],
        [EVE.getCharacterAssetsUrl(5, 6), 'https://esi.evetech.net/v5/characters/5/assets/?page=6'],
        [EVE.getCharacterAssetsLocationsUrl(5), 'https://esi.evetech.net/v2/characters/5/assets/locations/'],
        [EVE.getCharacterAssetsNamesUrl(5), 'https://esi.evetech.net/v1/characters/5/assets/names/'],
        [EVE.getCharacterBlueprintsUrl(5, 6), 'https://esi.evetech.net/v3/characters/5/blueprints/?page=6'],
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
        [EVE.getPlanetSchematicsUrl(), 'https://sde.zzeve.com/planetSchematics.json'],
        [EVE.getPlanetSchematicsTypeMapUrl(), 'https://sde.zzeve.com/planetSchematicsTypeMap.json'],

        [EVE.getIndustrySystemsUrl(), 'https://esi.evetech.net/v1/industry/systems/'],

        [EVE.getMarketGroupsUrl(), 'https://esi.evetech.net/v1/markets/groups/'],
        [EVE.getMarketGroupUrl(5), 'https://esi.evetech.net/v1/markets/groups/5/'],

        [EVE.getMarketOrdersUrl({orderType: 'buy', page: 7, regionId: 5, typeId: 6}), 'https://esi.evetech.net/v1/markets/5/orders/?order_type=buy&page=7&type_id=6'],
        [EVE.getMarketOrdersUrl({orderType: 'sell', page: 7, regionId: 5, typeId: 6}), 'https://esi.evetech.net/v1/markets/5/orders/?order_type=sell&page=7&type_id=6'],
        [EVE.getMarketOrdersUrl({orderType: 'all', page: 7, regionId: 5, typeId: 6}), 'https://esi.evetech.net/v1/markets/5/orders/?order_type=all&page=7&type_id=6'],
        [EVE.getMarketOrdersUrl({page: 7, regionId: 5, typeId: 6}), 'https://esi.evetech.net/v1/markets/5/orders/?order_type=all&page=7&type_id=6'],
        [EVE.getMarketOrdersUrl({regionId: 5, typeId: 6}), 'https://esi.evetech.net/v1/markets/5/orders/?order_type=all&page=1&type_id=6'],
        [EVE.getMarketOrdersUrl({page: 6, regionId: 5}), 'https://esi.evetech.net/v1/markets/5/orders/?order_type=all&page=6'],
        [EVE.getMarketOrdersUrl({orderType: 'sell', regionId: 5}), 'https://esi.evetech.net/v1/markets/5/orders/?order_type=sell&page=1'],
        [EVE.getMarketOrdersUrl({regionId: 5}), 'https://esi.evetech.net/v1/markets/5/orders/?order_type=all&page=1'],

        [EVE.getMarketHistoryUrl(5, 6), 'https://esi.evetech.net/v1/markets/5/history/?type_id=6'],

        [EVE.getMarketPricesUrl(), 'https://esi.evetech.net/v1/markets/prices/'],

        [EVE.getStatusUrl(), 'https://esi.evetech.net/v1/status/'],

        [EVE.getSearchUrl('something'), 'https://esi.evetech.net/v2/search/?categories=agent,alliance,character,constellation,corporation,faction,inventory_type,region,solar_system,station&search=something&strict=false'],
        [EVE.getSearchUrl('something', [SearchCategory.REGION]), 'https://esi.evetech.net/v2/search/?categories=region&search=something&strict=false'],
        [EVE.getSearchUrl('something', [SearchCategory.REGION], true), 'https://esi.evetech.net/v2/search/?categories=region&search=something&strict=true'],
        [EVE.getSearchUrl('something', [SearchCategory.REGION, SearchCategory.FACTION]), 'https://esi.evetech.net/v2/search/?categories=region,faction&search=something&strict=false'],

        [EVE.getUniverseCategoryUrl(5), 'https://esi.evetech.net/v1/universe/categories/5/'],
        [EVE.getUniverseCategoriesUrl(), 'https://esi.evetech.net/v1/universe/categories/'],
        [EVE.getUniverseConstellationsUrl(), 'https://esi.evetech.net/v1/universe/constellations/'],
        [EVE.getUniverseConstellationUrl(5), 'https://esi.evetech.net/v1/universe/constellations/5/'],
        [EVE.getUniverseGroupUrl(5), 'https://esi.evetech.net/v1/universe/groups/5/'],
        [EVE.getUniverseGroupsUrl(), 'https://esi.evetech.net/v1/universe/groups/'],
        [EVE.getUniverseNamesUrl(), 'https://esi.evetech.net/v3/universe/names/'],
        [EVE.getUniverseRegionsUrl(), 'https://esi.evetech.net/v1/universe/regions/'],
        [EVE.getUniverseRegionUrl(5), 'https://esi.evetech.net/v1/universe/regions/5/'],
        [EVE.getUniverseStructureUrl(5), 'https://esi.evetech.net/v2/universe/structures/5/'],
        [EVE.getUniverseStructuresUrl(), 'https://esi.evetech.net/v2/universe/structures/'],
        [EVE.getUniverseStationUrl(5), 'https://esi.evetech.net/v2/universe/stations/5/'],
        [EVE.getUniverseSystemsUrl(), 'https://esi.evetech.net/v1/universe/systems/'],
        [EVE.getUniverseSystemUrl(5), 'https://esi.evetech.net/v4/universe/systems/5/'],
        [EVE.getUniverseTypeUrl(5), 'https://esi.evetech.net/v3/universe/types/5/'],
        [EVE.getUniverseTypesUrl(5), 'https://esi.evetech.net/v1/universe/types/?page=5'],

        [EVE.getContractsUrl(5), 'https://esi.evetech.net/v1/contracts/public/5/?page=1'],
        [EVE.getContractsUrl(5, 6), 'https://esi.evetech.net/v1/contracts/public/5/?page=6'],
        [EVE.getContractBidsUrl(5), 'https://esi.evetech.net/v1/contracts/public/bids/5/?page=1'],
        [EVE.getContractBidsUrl(5, 6), 'https://esi.evetech.net/v1/contracts/public/bids/5/?page=6'],
        [EVE.getContractItemsUrl(5), 'https://esi.evetech.net/v1/contracts/public/items/5/?page=1'],
        [EVE.getContractItemsUrl(5, 6), 'https://esi.evetech.net/v1/contracts/public/items/5/?page=6'],

        [EVE.getRouteUrl(5, 6), 'https://esi.evetech.net/v1/route/5/6/'],

    ])('URL creator %p', (url, expected) => {
        expect.assertions(1);
        expect(url).toBe(expected);
    });
});

describe('ores & minerals', () => {
    it('ores', () => {
        expect.assertions(11);

        expect((new Set(EVE.ores.belt.highSec)).size).toBe(EVE.ores.belt.highSec.length);
        expect((new Set(EVE.ores.belt.lowSec)).size).toBe(EVE.ores.belt.lowSec.length);
        expect((new Set(EVE.ores.belt.nullSec)).size).toBe(EVE.ores.belt.nullSec.length);
        expect((new Set(EVE.ores.abyssal)).size).toBe(EVE.ores.abyssal.length);
        expect((new Set(EVE.ores.moon.common)).size).toBe(EVE.ores.moon.common.length);
        expect((new Set(EVE.ores.moon.exceptional)).size).toBe(EVE.ores.moon.exceptional.length);
        expect((new Set(EVE.ores.moon.rare)).size).toBe(EVE.ores.moon.rare.length);
        expect((new Set(EVE.ores.moon.standard)).size).toBe(EVE.ores.moon.standard.length);
        expect((new Set(EVE.ores.moon.ubiquitous)).size).toBe(EVE.ores.moon.ubiquitous.length);
        expect((new Set(EVE.ores.moon.uncommon)).size).toBe(EVE.ores.moon.uncommon.length);

        expect(Object.keys(Ore)).toHaveLength((
            EVE.ores.belt.highSec.length +
            EVE.ores.belt.lowSec.length +
            EVE.ores.belt.nullSec.length +
            EVE.ores.abyssal.length +
            EVE.ores.moon.common.length +
            EVE.ores.moon.exceptional.length +
            EVE.ores.moon.rare.length +
            EVE.ores.moon.standard.length +
            EVE.ores.moon.ubiquitous.length +
            EVE.ores.moon.uncommon.length
        ) * 2);
    });

    it('minerals', () => {
        expect.assertions(10);

        expect(EVE.minerals).toContain(Mineral.Tritanium);
        expect(EVE.minerals).toContain(Mineral.Pyerite);
        expect(EVE.minerals).toContain(Mineral.Morphite);
        expect(EVE.minerals).toContain(Mineral.Megacyte);
        expect(EVE.minerals).toContain(Mineral.Isogen);
        expect(EVE.minerals).toContain(Mineral.Nocxium);
        expect(EVE.minerals).toContain(Mineral.Mexallon);
        expect(EVE.minerals).toContain(Mineral.Zydrine);

        expect((new Set(EVE.minerals)).size).toBe(EVE.minerals.length);
        expect(Object.keys(Mineral)).toHaveLength(EVE.minerals.length * 2);
    });

    it('gasses', () => {
        expect.assertions(3);

        expect((new Set(EVE.gasses.boosterGasClouds)).size).toBe(EVE.gasses.boosterGasClouds.length);
        expect((new Set(EVE.gasses.fullerenes)).size).toBe(EVE.gasses.fullerenes.length);

        expect(Object.keys(Gas)).toHaveLength((
            EVE.gasses.boosterGasClouds.length + EVE.gasses.fullerenes.length
        ) * 2);
    });

    it('ice', () => {
        expect.assertions(4);

        expect((new Set(EVE.ice.faction)).size).toBe(EVE.ice.faction.length);
        expect((new Set(EVE.ice.enriched)).size).toBe(EVE.ice.enriched.length);
        expect((new Set(EVE.ice.standard)).size).toBe(EVE.ice.standard.length);

        expect(Object.keys(Ice)).toHaveLength((
            EVE.ice.faction.length + EVE.ice.enriched.length + EVE.ice.standard.length
        ) * 2);
    });
});
