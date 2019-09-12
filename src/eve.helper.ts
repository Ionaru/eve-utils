interface IQueryParams {
    [key: string]: string | number;
}

/**
 * Several static helper functions for the EVE Online ESI.
 */
export class EVE {

    public static readonly ESIURL = 'https://esi.evetech.net';
    public static readonly SDEURL = 'https://sde.zzeve.com';

    public static readonly skillCategoryId = 16;

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
        all: Object.values(EVE.gas),
        boosterGasClouds: [
            EVE.gas['Amber Cytoserocin'],
            EVE.gas['Amber Mykoserocin'],
            EVE.gas['Azure Cytoserocin'],
            EVE.gas['Azure Mykoserocin'],
            EVE.gas['Celadon Cytoserocin'],
            EVE.gas['Celadon Mykoserocin'],
            EVE.gas['Golden Cytoserocin'],
            EVE.gas['Golden Mykoserocin'],
            EVE.gas['Lime Cytoserocin'],
            EVE.gas['Lime Mykoserocin'],
            EVE.gas['Malachite Cytoserocin'],
            EVE.gas['Malachite Mykoserocin'],
            EVE.gas['Vermillion Cytoserocin'],
            EVE.gas['Vermillion Mykoserocin'],
            EVE.gas['Viridian Cytoserocin'],
            EVE.gas['Viridian Mykoserocin'],
        ],
        fullerenes: [
            EVE.gas['Fullerite-C28'],
            EVE.gas['Fullerite-C32'],
            EVE.gas['Fullerite-C50'],
            EVE.gas['Fullerite-C60'],
            EVE.gas['Fullerite-C70'],
            EVE.gas['Fullerite-C72'],
            EVE.gas['Fullerite-C84'],
            EVE.gas['Fullerite-C320'],
            EVE.gas['Fullerite-C540'],
        ],
    });

    /* tslint:disable:object-literal-sort-keys */
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
    /* tslint:enable:object-literal-sort-keys */

    public static readonly minerals = Object.freeze([
        EVE.mineral.tritanium,
        EVE.mineral.pyerite,
        EVE.mineral.mexallon,
        EVE.mineral.isogen,
        EVE.mineral.nocxium,
        EVE.mineral.zydrine,
        EVE.mineral.megacyte,
        EVE.mineral.morphite,
    ]);

    /* tslint:disable:object-literal-sort-keys */
    public static readonly ore = Object.freeze({

        veldspar: 1230,
        concentratedVeldspar: 17470,
        denseVeldspar: 17471,
        stableVeldspar: 46689,

        scordite: 1228,
        condensedScordite: 17459,
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
        all: Object.values(EVE.ore),
        highSec: {
            base: [
                EVE.ore.veldspar,
                EVE.ore.scordite,
                EVE.ore.pyroxeres,
                EVE.ore.plagioclase,
                EVE.ore.omber,
                EVE.ore.kernite,
            ],
            beltVariants: [
                EVE.ore.concentratedVeldspar, EVE.ore.denseVeldspar,
                EVE.ore.condensedScordite, EVE.ore.massiveScordite,
                EVE.ore.solidPyroxeres, EVE.ore.viscousPyroxeres,
                EVE.ore.azurePlagioclase, EVE.ore.richPlagioclase,
                EVE.ore.silveryOmber, EVE.ore.goldenOmber,
                EVE.ore.luminousKernite, EVE.ore.fieryKernite,
            ],
            moonVariants: [
                EVE.ore.stableVeldspar,
                EVE.ore.glossyScordite,
                EVE.ore.opulentPyroxeres,
                EVE.ore.sparklingPlagioclase,
                EVE.ore.platinoidOmber,
                EVE.ore.resplendantKernite,
            ],
        },
        lowSec: {
            base: [
                EVE.ore.jaspet,
                EVE.ore.hemorphite,
                EVE.ore.hedbergite,
            ],
            beltVariants: [
                EVE.ore.pureJaspet, EVE.ore.pristineJaspet,
                EVE.ore.vividHemorphite, EVE.ore.radiantHemorphite,
                EVE.ore.vitricHedbergite, EVE.ore.glazedHedbergite,
            ],
            moonVariants: [
                EVE.ore.immaculateJaspet,
                EVE.ore.scintillatingHemorphite,
                EVE.ore.lustrousHedbergite,
            ],
        },
        nullSec: {
            base: [
                EVE.ore.gneiss,
                EVE.ore.darkOchre,
                EVE.ore.spodumain,
                EVE.ore.crokite,
                EVE.ore.bistot,
                EVE.ore.arkonor,
                EVE.ore.mercoxit,
            ],
            beltVariants: [
                EVE.ore.iridescentGneiss, EVE.ore.prismaticGneiss,
                EVE.ore.onyxOchre, EVE.ore.obsidianOchre,
                EVE.ore.brightSpodumain, EVE.ore.gleamingSpodumain,
                EVE.ore.sharpCrokite, EVE.ore.crystallineCrokite,
                EVE.ore.triclinicBistot, EVE.ore.monoclinicBistot,
                EVE.ore.crimsonArkonor, EVE.ore.primeArkonor,
                EVE.ore.magmaMercoxit, EVE.ore.vitreousMercoxit,
            ],
            moonVariants: [
                EVE.ore.brilliantGneiss,
                EVE.ore.jetOchre,
                EVE.ore.dazzlingSpodumain,
                EVE.ore.pellucidCrokite,
                EVE.ore.cubicBistot,
                EVE.ore.flawlessArkonor,
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
     * Return a list of the characters assets (paginated).
     * API return type: ICharacterAssetsData
     */
    public static getCharacterAssetsUrl(characterId: number, page: number) {
        return EVE.constructESIUrl(3, ['characters', characterId, 'assets'], {page});
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

    public static getUniverseRegionsUrl() {
        // number[]
        return EVE.constructESIUrl(1, ['universe', 'regions']);
    }

    public static getUniverseSystemsUrl() {
        // number[]
        return EVE.constructESIUrl(1, ['universe', 'systems']);
    }

    public static getStatusUrl() {
        // IStatusData
        return EVE.constructESIUrl(1, ['status']);
    }
}
