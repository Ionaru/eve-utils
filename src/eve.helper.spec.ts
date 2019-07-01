import { EVE } from './';

describe('URL tests', () => {

    test.each([

        [[1, []], 'https://esi.evetech.net/v1/'],
        [[2, ['thing']], 'https://esi.evetech.net/v2/thing/'],
        [[3, ['thing', 'other']], 'https://esi.evetech.net/v3/thing/other/'],
        [[4, ['thing', 'other', 6]], 'https://esi.evetech.net/v4/thing/other/6/'],

    ])('constructESIURL %j', (parameters, expected) => {
        expect(EVE.constructESIURL(parameters[0] as number, ...parameters[1] as string[])).toEqual(expected);
    });
});

describe('URL creators', () => {

    test.each([

        [EVE.getCharacterUrl(5), 'https://esi.evetech.net/v4/characters/5/'],
        [EVE.getCharacterAttributesUrl(5), 'https://esi.evetech.net/v1/characters/5/attributes/'],
        [EVE.getCharacterBlueprintsUrl(5), 'https://esi.evetech.net/v2/characters/5/blueprints/'],
        [EVE.getCharacterShipUrl(5), 'https://esi.evetech.net/v1/characters/5/ship/'],
        [EVE.getCharacterSkillQueueUrl(5), 'https://esi.evetech.net/v2/characters/5/skillqueue/'],
        [EVE.getCharacterSkillsUrl(5), 'https://esi.evetech.net/v4/characters/5/skills/'],
        [EVE.getCharacterWalletJournalUrl(5), 'https://esi.evetech.net/v6/characters/5/wallet/journal/'],
        [EVE.getCharacterWalletUrl(5), 'https://esi.evetech.net/v1/characters/5/wallet/'],
        [EVE.getCharacterIndustryJobsUrl(5), 'https://esi.evetech.net/v1/characters/5/industry/jobs/'],

        [EVE.getIndustryActivityMaterialsUrl(), 'https://sde.zzeve.com/industryActivityMaterials.json'],
        [EVE.getIndustryActivityProductsUrl(), 'https://sde.zzeve.com/industryActivityProducts.json'],
        [EVE.getIndustryActivitySkillsUrl(), 'https://sde.zzeve.com/industryActivitySkills.json'],
        [EVE.getIndustryActivityUrl(), 'https://sde.zzeve.com/industryActivity.json'],
        [EVE.getInvTypeMaterialsUrl(), 'https://sde.zzeve.com/invTypeMaterials.json'],

        [EVE.getMarketGroupsUrl(), 'https://esi.evetech.net/v1/markets/groups/'],
        [EVE.getMarketGroupUrl(5), 'https://esi.evetech.net/v1/markets/groups/5/'],

        [EVE.getMarketOrdersURL(5, 6, 7, 'buy'), 'https://esi.evetech.net/v1/markets/5/orders/?type_id=6&page=7&order_type=buy'],
        [EVE.getMarketOrdersURL(5, 6, 7, 'sell'), 'https://esi.evetech.net/v1/markets/5/orders/?type_id=6&page=7&order_type=sell'],
        [EVE.getMarketOrdersURL(5, 6, 7, 'all'), 'https://esi.evetech.net/v1/markets/5/orders/?type_id=6&page=7&order_type=all'],
        [EVE.getMarketOrdersURL(5, 6, 7), 'https://esi.evetech.net/v1/markets/5/orders/?type_id=6&page=7&order_type=all'],

        [EVE.getStatusUrl(), 'https://esi.evetech.net/v1/status/'],

        [EVE.getUniverseRegions(), 'https://esi.evetech.net/v1/universe/regions/'],
        [EVE.getUniverseNamesUrl(), 'https://esi.evetech.net/v2/universe/names/'],

        [EVE.getUniverseCategoriesUrl(5), 'https://esi.evetech.net/v1/universe/categories/5/'],
        [EVE.getUniverseGroupsUrl(5), 'https://esi.evetech.net/v1/universe/groups/5/'],
        [EVE.getUniverseStructuresUrl(5), 'https://esi.evetech.net/v2/universe/structures/5/'],
        [EVE.getUniverseTypesUrl(5), 'https://esi.evetech.net/v3/universe/types/5/'],

    ])('get URL %p', (url, expected) => {
        expect(url).toEqual(expected);
    });
});

describe('Ores & minerals', () => {
    test('ores', () => {
        expect(EVE.ores.highSec.base).toContain(EVE.ore.veldspar);
        expect(EVE.ores.highSec.beltVariants).toContain(EVE.ore.concentratedVeldspar);
        expect(EVE.ores.highSec.beltVariants).toContain(EVE.ore.denseVeldspar);
        expect(EVE.ores.highSec.moonVariants).toContain(EVE.ore.stableVeldspar);
    });

    test('minerals', () => {
        expect(EVE.minerals).toContain(EVE.mineral.tritanium);
    });

    test('gasses', () => {
        expect(EVE.gasses.Fullerenes).toContain(EVE.gas['Fullerite-C72']);
        expect(EVE.gasses['Booster Gas Clouds']).toContain(EVE.gas['Viridian Cytoserocin']);
        expect(EVE.gasses.ALL).toContain(EVE.gas['Gamboge Cytoserocin']);
    });
});
