import { Gas } from './gas';
import { ISearchCategories, SearchCategory } from './interface.helper';
import { Mineral } from './mineral';
import { Ore } from './ore';

interface IQueryParams {
    [key: string]: string | number;
}

type ArrayOneOrMore<T> = {
    0: T;
} & T[];

/**
 * Several static helper functions for the EVE Online ESI.
 */
export class EVE {

    public static readonly ESIURL = 'https://esi.evetech.net';
    public static readonly SDEURL = 'https://sde.zzeve.com';

    public static readonly skillCategoryId = 16;

    /**
     * @deprecated Use SearchCategory from interface.helper.ts
     */
    public static readonly searchCategories: readonly ISearchCategories[] = Object.freeze([
        'agent', 'alliance', 'character', 'constellation', 'corporation', 'faction',
        'inventory_type', 'region', 'solar_system', 'station',
    ]);

    /**
     * @deprecated Use Ore from ore.ts
     */
    public static readonly gas = Object.freeze({
        'Fullerite-C28': 30375,
        'Fullerite-C32': 30376,
        'Fullerite-C320': 30377,
        'Fullerite-C50': 30370,
        'Fullerite-C540': 30378,
        'Fullerite-C60': 30371,
        'Fullerite-C70': 30372,
        'Fullerite-C72': 30373,
        'Fullerite-C84': 30374,

        'Amber Cytoserocin': 25268,
        'Amber Mykoserocin': 28694,
        'Azure Cytoserocin': 25279,
        'Azure Mykoserocin': 28695,
        'Celadon Cytoserocin': 25275,
        'Celadon Mykoserocin': 28696,
        'Chartreuse Cytoserocin': 28630, // Unavailable on market.
        'Gamboge Cytoserocin': 28629, // Unavailable on market.
        'Golden Cytoserocin': 25273,
        'Golden Mykoserocin': 28697,
        'Hiemal Tricarboxyl Vapor': 49787, // In Materials - Raw Materials - Standard Ores - Veldspar ?
        'Lime Cytoserocin': 25277,
        'Lime Mykoserocin': 28698,
        'Malachite Cytoserocin': 25276,
        'Malachite Mykoserocin': 28699,
        'Vermillion Cytoserocin': 25278,
        'Vermillion Mykoserocin': 28700,
        'Viridian Cytoserocin': 25274,
        'Viridian Mykoserocin': 28701,
    });

    public static readonly gasses = Object.freeze({
        all: Object.values(Gas).filter((gas) => !isNaN(Number(gas))).map((gas) => Number(gas)),
        boosterGasClouds: [
            Gas['Amber Cytoserocin'],
            Gas['Amber Mykoserocin'],
            Gas['Azure Cytoserocin'],
            Gas['Azure Mykoserocin'],
            Gas['Celadon Cytoserocin'],
            Gas['Celadon Mykoserocin'],
            Gas['Golden Cytoserocin'],
            Gas['Golden Mykoserocin'],
            Gas['Lime Cytoserocin'],
            Gas['Lime Mykoserocin'],
            Gas['Malachite Cytoserocin'],
            Gas['Malachite Mykoserocin'],
            Gas['Vermillion Cytoserocin'],
            Gas['Vermillion Mykoserocin'],
            Gas['Viridian Cytoserocin'],
            Gas['Viridian Mykoserocin'],
        ],
        fullerenes: [
            Gas['Fullerite-C28'],
            Gas['Fullerite-C32'],
            Gas['Fullerite-C50'],
            Gas['Fullerite-C60'],
            Gas['Fullerite-C70'],
            Gas['Fullerite-C72'],
            Gas['Fullerite-C84'],
            Gas['Fullerite-C320'],
            Gas['Fullerite-C540'],
        ],
    });

    /* tslint:disable:object-literal-sort-keys */
    /**
     * @deprecated Use Mineral from mineral.ts
     */
    public static readonly mineral = Object.freeze({
        tritanium: 34,
        pyerite: 35,
        mexallon: 36,
        isogen: 37,
        nocxium: 38,
        zydrine: 39,
        megacyte: 40,
        morphite: 11399,
    });

    public static readonly minerals = Object.freeze([
        Mineral.Tritanium,
        Mineral.Pyerite,
        Mineral.Mexallon,
        Mineral.Isogen,
        Mineral.Nocxium,
        Mineral.Zydrine,
        Mineral.Megacyte,
        Mineral.Morphite,
    ]);

    /* tslint:disable:object-literal-sort-keys */
    /**
     * @deprecated Use Ore from ore.ts
     */
    public static readonly ore = Object.freeze({

        veldspar: 1230,
        concentratedVeldspar: 17470,
        denseVeldspar: 17471,
        stableVeldspar: 46689,

        scordite: 1228,
        condensedScordite: 17463,
        massiveScordite: 17464,
        glossyScordite: 46687,

        pyroxeres: 1224,
        solidPyroxeres: 17459,
        viscousPyroxeres: 17460,
        opulentPyroxeres: 46686,

        plagioclase: 18,
        azurePlagioclase: 17455,
        richPlagioclase: 17456,
        sparklingPlagioclase: 46685,

        omber: 1227,
        silveryOmber: 17867,
        goldenOmber: 17868,
        platinoidOmber: 46684,

        kernite: 20,
        luminousKernite: 17452,
        fieryKernite: 17453,
        resplendantKernite: 46683,

        jaspet: 1226,
        pureJaspet: 17448,
        pristineJaspet: 17449,
        immaculateJaspet: 46682,

        hemorphite: 1231,
        vividHemorphite: 17444,
        radiantHemorphite: 17445,
        scintillatingHemorphite: 46681,

        hedbergite: 21,
        vitricHedbergite: 17440,
        glazedHedbergite: 17441,
        lustrousHedbergite: 46680,

        gneiss: 1229,
        iridescentGneiss: 17865,
        prismaticGneiss: 17866,
        brilliantGneiss: 46679,

        darkOchre: 1232,
        onyxOchre: 17436,
        obsidianOchre: 17437,
        jetOchre: 46675,

        spodumain: 19,
        brightSpodumain: 17466,
        gleamingSpodumain: 17467,
        dazzlingSpodumain: 46688,

        crokite: 1225,
        sharpCrokite: 17432,
        crystallineCrokite: 17433,
        pellucidCrokite: 46677,

        bistot: 1223,
        triclinicBistot: 17428,
        monoclinicBistot: 17429,
        cubicBistot: 46676,

        arkonor: 22,
        crimsonArkonor: 17425,
        primeArkonor: 17426,
        flawlessArkonor: 46678,

        mercoxit: 11396,
        magmaMercoxit: 17869,
        vitreousMercoxit: 17870,
    });
    /* tslint:enable:object-literal-sort-keys */

    public static readonly ores = Object.freeze({
        all: Object.values(Ore).filter((ore) => !isNaN(Number(ore))).map((ore) => Number(ore)),
        highSec: {
            base: [
                Ore.Veldspar,
                Ore.Scordite,
                Ore.Pyroxeres,
                Ore.Plagioclase,
                Ore.Omber,
                Ore.Kernite,
            ],
            beltVariants: [
                Ore['Concentrated Veldspar'], Ore['Dense Veldspar'],
                Ore['Condensed Scordite'], Ore['Massive Scordite'],
                Ore['Solid Pyroxeres'], Ore['Viscous Pyroxeres'],
                Ore['Azure Plagioclase'], Ore['Rich Plagioclase'],
                Ore['Silvery Omber'], Ore['Golden Omber'],
                Ore['Luminous Kernite'], Ore['Fiery Kernite'],
            ],
            moonVariants: [
                Ore['Stable Veldspar'],
                Ore['Glossy Scordite'],
                Ore['Opulent Pyroxeres'],
                Ore['Sparkling Plagioclase'],
                Ore['Platinoid Omber'],
                Ore['Resplendant Kernite'],
            ],
        },
        lowSec: {
            base: [
                Ore.Jaspet,
                Ore.Hemorphite,
                Ore.Hedbergite,
            ],
            beltVariants: [
                Ore['Pure Jaspet'], Ore['Pristine Jaspet'],
                Ore['Vivid Hemorphite'], Ore['Radiant Hemorphite'],
                Ore['Vitric Hedbergite'], Ore['Glazed Hedbergite'],
            ],
            moonVariants: [
                Ore['Immaculate Jaspet'],
                Ore['Scintillating Hemorphite'],
                Ore['Lustrous Hedbergite'],
            ],
        },
        nullSec: {
            base: [
                Ore.Gneiss,
                Ore['Dark Ochre'],
                Ore.Spodumain,
                Ore.Crokite,
                Ore.Bistot,
                Ore.Arkonor,
                Ore.Mercoxit,
            ],
            beltVariants: [
                Ore['Iridescent Gneiss'], Ore['Prismatic Gneiss'],
                Ore['Onyx Ochre'], Ore['Obsidian Ochre'],
                Ore['Bright Spodumain'], Ore['Gleaming Spodumain'],
                Ore['Sharp Crokite'], Ore['Crystalline Crokite'],
                Ore['Triclinic Bistot'], Ore['Monoclinic Bistot'],
                Ore['Crimson Arkonor'], Ore['Prime Arkonor'],
                Ore['Magma Mercoxit'], Ore['Vitreous Mercoxit'],
            ],
            moonVariants: [
                Ore['Brilliant Gneiss'],
                Ore['Jet Ochre'],
                Ore['Dazzling Spodumain'],
                Ore['Pellucid Crokite'],
                Ore['Cubic Bistot'],
                Ore['Flawless Arkonor'],
            ],
        },
    });

    public static constructESIUrl(version: number | string, path: Array<string | number>, params?: IQueryParams): string {
        let url = `${EVE.ESIURL}/v${version}/`;

        if (path.length) {
            url += `${path.join('/')}/`;
        }

        if (params) {
            const paramKeys = Object.keys(params);
            if (paramKeys.length) {
                url += '?';
                url += paramKeys.map((key) => `${key}=${params[key]}`).join('&');
            }
        }

        return url;
    }

    // SDE

    public static getInvTypeMaterialsUrl() {
        return `${EVE.SDEURL}/invTypeMaterials.json`;
    }

    public static getIndustryActivityUrl() {
        return `${EVE.SDEURL}/industryActivity.json`;
    }

    public static getIndustryActivityProductsUrl() {
        return `${EVE.SDEURL}/industryActivityProducts.json`;
    }

    public static getIndustryActivityMaterialsUrl() {
        return `${EVE.SDEURL}/industryActivityMaterials.json`;
    }

    public static getIndustryActivitySkillsUrl() {
        return `${EVE.SDEURL}/industryActivitySkills.json`;
    }

    // Character

    public static getCharacterUrl(characterId: number) {
        // ICharacterData
        return EVE.constructESIUrl(4, ['characters', characterId]);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Assets/get_characters_character_id_assets
     * /v3/characters/{character_id}/mail/labels/ -> ICharacterAssetsData
     */
    public static getCharacterAssetsUrl(characterId: number, page: number) {
        return EVE.constructESIUrl(5, ['characters', characterId, 'assets'], {page});
    }

    /**
     * Return locations for a set of item ids, which you can get from character assets endpoint.
     * Coordinates for items in hangars or stations are set to (0,0,0).
     * API return type: ICharacterAssetsLocationsData
     */
    public static getCharacterAssetsLocationsUrl(characterId: number) {
        return EVE.constructESIUrl(2, ['characters', characterId, 'assets', 'locations']);
    }

    /**
     * Return names for a set of item ids, which you can get from character assets endpoint.
     * Typically used for items that can customize names, like containers or ships.
     * API return type: ICharacterAssetsNamesData
     */
    public static getCharacterAssetsNamesUrl(characterId: number) {
        return EVE.constructESIUrl(1, ['characters', characterId, 'assets', 'names']);
    }

    public static getCharacterIndustryJobsUrl(characterId: number, includeCompleted = false) {
        // ICharacterIndustryJobsData
        return EVE.constructESIUrl(1, ['characters', characterId, 'industry', 'jobs'], {
            include_completed: includeCompleted.toString(),
        });
    }

    /**
     * Return a list of blueprints the character owns.
     * API return type: ICharacterBlueprintsData
     */
    public static getCharacterBlueprintsUrl(characterId: number, page: number) {
        // ICharacterBlueprintsData
        return EVE.constructESIUrl(2, ['characters', characterId, 'blueprints'], {page});
    }

    public static getCharacterAttributesUrl(characterId: number) {
        // ICharacterAttributesData
        return EVE.constructESIUrl(1, ['characters', characterId, 'attributes']);
    }

    public static getCharacterSkillQueueUrl(characterId: number) {
        // ICharacterSkillQueueData
        return EVE.constructESIUrl(2, ['characters', characterId, 'skillqueue']);
    }

    public static getCharacterSkillsUrl(characterId: number) {
        // ICharacterSkillsData
        return EVE.constructESIUrl(4, ['characters', characterId, 'skills']);
    }

    public static getCharacterWalletUrl(characterId: number) {
        // number
        return EVE.constructESIUrl(1, ['characters', characterId, 'wallet']);
    }

    public static getCharacterWalletJournalUrl(characterId: number) {
        // ICharacterWalletJournalData
        return EVE.constructESIUrl(6, ['characters', characterId, 'wallet', 'journal']);
    }

    public static getCharacterShipUrl(characterId: number) {
        // ICharacterShipData
        return EVE.constructESIUrl(1, ['characters', characterId, 'ship']);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Mail/get_characters_character_id_mail
     * /v1/characters/{character_id}/mail/ -> ICharacterMailsData
     *
     * POST
     * https://esi.evetech.net/ui/?version=_latest#/Mail/post_characters_character_id_mail
     * ICharacterMailPost -> /v1/characters/{character_id}/mail/ -> number
     */
    public static getCharacterMailsUrl(characterId: number, labels: number[] = [], lastMailId?: number) {

        const params: IQueryParams = {};
        if (labels.length) {
            params.labels = labels.join(',');
        }

        if (lastMailId) {
            params.last_mail_id = lastMailId;
        }

        return EVE.constructESIUrl(1, ['characters', characterId, 'mail'], params);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Mail/get_characters_character_id_mail_mail_id
     * /v1/characters/{character_id}/mail/{mail_id} -> ICharacterMailData
     *
     * PUT
     * https://esi.evetech.net/ui/?version=_latest#/Mail/put_characters_character_id_mail_mail_id
     * ICharacterMailPut -> /v1/characters/{character_id}/mail/{mail_id}/ -> void
     *
     * DELETE
     * https://esi.evetech.net/ui/?version=_latest#/Mail/delete_characters_character_id_mail_mail_id
     * /v1/characters/{character_id}/mail/{mail_id} -> void
     */
    public static getCharacterMailUrl(characterId: number, mailId: number) {
        return EVE.constructESIUrl(1, ['characters', characterId, 'mail', mailId]);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Mail/get_characters_character_id_mail_labels
     * /v3/characters/{character_id}/mail/labels/ -> ICharacterMailLabelsData
     */
    public static getCharacterMailLabelsGETUrl(characterId: number) {
        return EVE.constructESIUrl(3, ['characters', characterId, 'mail', 'labels']);
    }

    /**
     * POST
     * https://esi.evetech.net/ui/?version=_latest#/Mail/put_characters_character_id_mail_mail_id
     * /v2/characters/{character_id}/mail/labels/ -> number
     */
    public static getCharacterMailLabelsPOSTUrl(characterId: number) {
        return EVE.constructESIUrl(2, ['characters', characterId, 'mail', 'labels']);
    }

    /**
     * DELETE
     * https://esi.evetech.net/ui/?version=_latest#/Mail/delete_characters_character_id_mail_labels_label_id
     * /v1/characters/{character_id}/mail/labels/{label_id}/ -> void
     */
    public static getCharacterMailLabelUrl(characterId: number, labelId: number) {
        return EVE.constructESIUrl(1, ['characters', characterId, 'mail', 'labels', labelId]);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Mail/get_characters_character_id_mail_lists
     * /v1/characters/{character_id}/mail/lists/ -> ICharacterMailListsData
     */
    public static getCharacterMailListsUrl(characterId: number) {
        return EVE.constructESIUrl(1, ['characters', characterId, 'mail', 'lists']);
    }

    // Market

    public static getMarketGroupUrl(groupId: number) {
        // MarketGroupsData
        return EVE.constructESIUrl(1, ['markets', 'groups', groupId]);
    }

    public static getMarketGroupsUrl() {
        // number[]
        return EVE.constructESIUrl(1, ['markets', 'groups']);
    }

    public static getMarketHistoryUrl(regionId: number, typeId: number) {
        // IMarketHistoryData
        return EVE.constructESIUrl(
            1,
            ['markets', regionId, 'history'],
            {
                type_id: typeId,
            },
        );
    }

    public static getMarketOrdersUrl(regionId: number, typeId: number, page: number, orderType: 'buy' | 'sell' | 'all' = 'all') {
        // IMarketOrdersData
        return EVE.constructESIUrl(
            1,
            ['markets', regionId, 'orders'],
            {
                order_type: orderType,
                page,
                type_id: typeId,
            },
        );
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Market/get_markets_prices
     * /v1/markets/prices/ -> IMarketPricesData
     */
    public static getMarketPricesUrl() {
        return EVE.constructESIUrl(1, ['markets', 'prices']);
    }

    // Universe

    public static getUniverseGroupUrl(groupId: number) {
        // IUniverseGroupData
        return EVE.constructESIUrl(1, ['universe', 'groups', groupId]);
    }

    public static getUniverseGroupsUrl() {
        // number[]
        return EVE.constructESIUrl(1, ['universe', 'groups']);
    }

    public static getUniverseStructureUrl(structureId: number) {
        // IUniverseStructureData
        return EVE.constructESIUrl(2, ['universe', 'structures', structureId]);
    }

    public static getUniverseStructuresUrl() {
        return EVE.constructESIUrl(2, ['universe', 'structures']);
    }

    public static getUniverseStationUrl(stationId: number) {
        // IUniverseStationData
        return EVE.constructESIUrl(2, ['universe', 'stations', stationId]);
    }

    public static getUniverseTypeUrl(typeId: number) {
        // IUniverseTypeData
        return EVE.constructESIUrl(3, ['universe', 'types', typeId]);
    }

    public static getUniverseTypesUrl(page: number) {
        // number[]
        return EVE.constructESIUrl(1, ['universe', 'types'], {page});
    }

    public static getUniverseNamesUrl() {
        // IUniverseNamesData
        return EVE.constructESIUrl(2, ['universe', 'names']);
    }

    public static getUniverseCategoryUrl(categoryId: number) {
        // IUniverseCategoryData
        return EVE.constructESIUrl(1, ['universe', 'categories', categoryId]);
    }

    public static getUniverseCategoriesUrl() {
        // number[]
        return EVE.constructESIUrl(1, ['universe', 'categories']);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Universe/get_universe_regions_region_id
     * /v1/universe/regions/{region_id}/ -> IUniverseRegionData
     */
    public static getUniverseRegionUrl(regionId: number) {
        return EVE.constructESIUrl(1, ['universe', 'regions', regionId]);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Universe/get_universe_regions
     * /v1/universe/regions/ -> number[]
     */
    public static getUniverseRegionsUrl() {
        return EVE.constructESIUrl(1, ['universe', 'regions']);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Universe/get_universe_constellations_constellation_id
     * /v1/universe/constellations/{constellation_id}/ -> IUniverseConstellationData
     */
    public static getUniverseConstellationUrl(constellationId: number) {
        return EVE.constructESIUrl(1, ['universe', 'constellations', constellationId]);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Universe/get_universe_constellations
     * /v1/universe/constellations/ -> number[]
     */
    public static getUniverseConstellationsUrl() {
        return EVE.constructESIUrl(1, ['universe', 'constellations']);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Universe/get_universe_systems_system_id
     * /v4/universe/systems/{system_id}/ -> IUniverseSystemData
     */
    public static getUniverseSystemUrl(systemId: number) {
        return EVE.constructESIUrl(4, ['universe', 'systems', systemId]);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Universe/get_universe_systems
     * /v1/universe/systems/ -> number[]
     */
    public static getUniverseSystemsUrl() {
        return EVE.constructESIUrl(1, ['universe', 'systems']);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Status/get_status
     * /v1/status/ -> IStatusData
     */
    public static getStatusUrl() {
        return EVE.constructESIUrl(1, ['status']);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Search/get_search
     * /v2/search/ -> ISearchData
     */
    public static getSearchUrl(search: string, searchCategories?: ArrayOneOrMore<SearchCategory | ISearchCategories>) {
        return EVE.constructESIUrl(2, ['search'], {
            categories: (searchCategories || Object.values(SearchCategory)).join(','),
            search,
        });
    }

    /**
     * GET
     * https://esi.evetech.net/ui/?version=_latest#/Industry/get_industry_systems
     * /v1/industry/systems/ -> IIndustrySystemsData
     */
    public static getIndustrySystemsUrl() {
        return EVE.constructESIUrl(1, ['industry', 'systems']);
    }
}
