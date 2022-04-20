/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SearchCategory } from './interface.helper';
import { Gas } from './types/gas';
import { Ice } from './types/ice';
import { Mineral } from './types/mineral';
import { Ore } from './types/ore';

interface IQueryParams {
    [key: string]: string | number | boolean;
}

type ArrayOneOrMore<T> = {
    0: T;
} & T[];

/**
 * Several static helper functions for the EVE Online ESI.
 */
export class EVE {

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public static readonly ESIURL = 'https://esi.evetech.net';
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public static readonly SDEURL = 'https://sde.zzeve.com';

    // noinspection JSUnusedGlobalSymbols
    public static readonly skillCategoryId = 16;

    public static readonly gasses = Object.freeze({
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

    public static readonly ores = Object.freeze({
        abyssal: [
            Ore.Bezdnacine,
            Ore.Rakovene,
            Ore.Talassonite,
        ],

        belt: {
            highSec: [
                Ore.Veldspar, Ore['Concentrated Veldspar'], Ore['Dense Veldspar'],
                Ore.Scordite, Ore['Condensed Scordite'], Ore['Massive Scordite'],
                Ore.Pyroxeres, Ore['Solid Pyroxeres'], Ore['Viscous Pyroxeres'],
                Ore.Plagioclase, Ore['Azure Plagioclase'], Ore['Rich Plagioclase'],
                Ore.Omber, Ore['Silvery Omber'], Ore['Golden Omber'],
                Ore.Kernite, Ore['Luminous Kernite'], Ore['Fiery Kernite'],
            ],
            lowSec: [
                Ore.Jaspet, Ore['Pure Jaspet'], Ore['Pristine Jaspet'],
                Ore.Hemorphite, Ore['Vivid Hemorphite'], Ore['Radiant Hemorphite'],
                Ore.Hedbergite, Ore['Vitric Hedbergite'], Ore['Glazed Hedbergite'],
            ],
            nullSec: [
                Ore.Gneiss, Ore['Iridescent Gneiss'], Ore['Prismatic Gneiss'],
                Ore['Dark Ochre'], Ore['Onyx Ochre'], Ore['Obsidian Ochre'],
                Ore.Spodumain, Ore['Bright Spodumain'], Ore['Gleaming Spodumain'],
                Ore.Crokite, Ore['Sharp Crokite'], Ore['Crystalline Crokite'],
                Ore.Bistot, Ore['Triclinic Bistot'], Ore['Monoclinic Bistot'],
                Ore.Arkonor, Ore['Crimson Arkonor'], Ore['Prime Arkonor'],
                Ore.Mercoxit, Ore['Magma Mercoxit'], Ore['Vitreous Mercoxit'],
            ],
        },

        moon: {
            common: [
                Ore.Cobaltite,
                Ore['Copious Cobaltite'],
                Ore['Twinkling Cobaltite'],

                Ore.Euxenite,
                Ore['Copious Euxenite'],
                Ore['Twinkling Euxenite'],

                Ore.Scheelite,
                Ore['Copious Scheelite'],
                Ore['Twinkling Scheelite'],

                Ore.Titanite,
                Ore['Copious Titanite'],
                Ore['Twinkling Titanite'],
            ],
            exceptional: [
                Ore.Monazite,
                Ore['Bountiful Monazite'],
                Ore['Shining Monazite'],

                Ore.Loparite,
                Ore['Bountiful Loparite'],
                Ore['Shining Loparite'],

                Ore.Xenotime,
                Ore['Bountiful Xenotime'],
                Ore['Shining Xenotime'],

                Ore.Ytterbite,
                Ore['Bountiful Ytterbite'],
                Ore['Shining Ytterbite'],
            ],
            rare: [
                Ore.Carnotite,
                Ore['Replete Carnotite'],
                Ore['Glowing Carnotite'],

                Ore.Cinnabar,
                Ore['Replete Cinnabar'],
                Ore['Glowing Cinnabar'],

                Ore.Pollucite,
                Ore['Replete Pollucite'],
                Ore['Glowing Pollucite'],

                Ore.Zircon,
                Ore['Replete Zircon'],
                Ore['Glowing Zircon'],
            ],
            standard: [
                Ore['Stable Veldspar'],
                Ore['Glossy Scordite'],
                Ore['Opulent Pyroxeres'],
                Ore['Sparkling Plagioclase'],
                Ore['Platinoid Omber'],
                Ore['Resplendant Kernite'],
                Ore['Immaculate Jaspet'],
                Ore['Scintillating Hemorphite'],
                Ore['Lustrous Hedbergite'],
                Ore['Brilliant Gneiss'],
                Ore['Jet Ochre'],
                Ore['Dazzling Spodumain'],
                Ore['Pellucid Crokite'],
                Ore['Cubic Bistot'],
                Ore['Flawless Arkonor'],
            ],
            ubiquitous: [
                Ore.Bitumens,
                Ore['Brimful Bitumens'],
                Ore['Glistening Bitumens'],

                Ore.Coesite,
                Ore['Brimful Coesite'],
                Ore['Glistening Coesite'],

                Ore.Sylvite,
                Ore['Brimful Sylvite'],
                Ore['Glistening Sylvite'],

                Ore.Zeolites,
                Ore['Brimful Zeolites'],
                Ore['Glistening Zeolites'],
            ],
            uncommon: [
                Ore.Chromite,
                Ore['Lavish Chromite'],
                Ore['Shimmering Chromite'],

                Ore.Otavite,
                Ore['Lavish Otavite'],
                Ore['Shimmering Otavite'],

                Ore.Sperrylite,
                Ore['Lavish Sperrylite'],
                Ore['Shimmering Sperrylite'],

                Ore.Vanadinite,
                Ore['Lavish Vanadinite'],
                Ore['Shimmering Vanadinite'],
            ],
        },
    });

    public static readonly ice = Object.freeze({
        enriched: [
            Ice['Enriched Clear Icicle'],
            Ice['Pristine White Glaze'],
            Ice['Thick Blue Ice'],
            Ice['Smooth Glacial Mass'],
        ],

        faction: [
            Ice['Clear Icicle'],
            Ice['White Glaze'],
            Ice['Blue Ice'],
            Ice['Glacial Mass'],
        ],

        standard: [
            Ice['Glare Crust'],
            Ice['Dark Glitter'],
            Ice.Gelidus,
            Ice.Krystallos,
        ],
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

    /**
     * GET
     * /planetSchematics.json -> IPlanetSchematicsData
     */
    public static getPlanetSchematicsUrl() {
        return `${EVE.SDEURL}/planetSchematics.json`;
    }

    /**
     * GET
     * /planetSchematicsTypeMap.json -> IPlanetSchematicsTypeMapData
     */
    public static getPlanetSchematicsTypeMapUrl() {
        return `${EVE.SDEURL}/planetSchematicsTypeMap.json`;
    }

    // Character

    public static getCharacterUrl(characterId: number) {
        // ICharacterData
        return EVE.constructESIUrl(5, ['characters', characterId]);
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
        return EVE.constructESIUrl(3, ['characters', characterId, 'blueprints'], {page});
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

    /**
     * GET
     * https://esi.evetech.net/ui/#/Market/get_markets_groups_market_group_id
     * /v1/markets/groups/{market_group_id}/ -> MarketGroupsData
     */
    public static getMarketGroupUrl(groupId: number) {
        return EVE.constructESIUrl(1, ['markets', 'groups', groupId]);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/#/Market/get_markets_groups
     * /v1/markets/groups/ -> number[]
     */
    public static getMarketGroupsUrl() {
        return EVE.constructESIUrl(1, ['markets', 'groups']);
    }

    /**
     * GET
     * https://esi.evetech.net/ui/#/Market/get_markets_region_id_history
     * /v1/markets/{region_id}/history/ -> IMarketHistoryData
     */
    public static getMarketHistoryUrl(regionId: number, typeId: number) {
        return EVE.constructESIUrl(
            1,
            ['markets', regionId, 'history'],
            {
                type_id: typeId,
            },
        );
    }

    /**
     * GET
     * https://esi.evetech.net/ui/#/Market/get_markets_region_id_orders
     * /v1/markets/{region_id}/orders/ -> IMarketOrdersData
     */
    public static getMarketOrdersUrl(
        {regionId, typeId, page = 1, orderType = 'all'}:
            { regionId: number; typeId?: number; page?: number; orderType?: 'buy' | 'sell' | 'all' }
    ) {
        const params = {
            order_type: orderType,
            page,
        };

        if (typeId) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            params.type_id = typeId;
        }

        return EVE.constructESIUrl(1, ['markets', regionId, 'orders'], params);
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

    /**
     * POST
     * https://esi.evetech.net/ui/#/Universe/post_universe_names
     * /v3/universe/names/ -> IUniverseNamesData
     */
    public static getUniverseNamesUrl() {
        return EVE.constructESIUrl(3, ['universe', 'names']);
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
    public static getSearchUrl(search: string, searchCategories?: ArrayOneOrMore<SearchCategory>, strict = false) {
        return EVE.constructESIUrl(2, ['search'], {
            categories: (searchCategories || Object.values(SearchCategory)).join(','),
            search,
            strict,
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

    /**
     * GET
     * https://esi.evetech.net/ui/#/Contracts/get_contracts_public_region_id
     * /v1/contracts/public/{region_id}/ -> IContractsData
     */
    public static getContractsUrl(region: number, page = 1) {
        return EVE.constructESIUrl(1, ['contracts', 'public', region], {page});
    }

    /**
     * GET
     * https://esi.evetech.net/ui/#/Contracts/get_contracts_public_bids_contract_id
     * /v1/contracts/public/bids/{contract_id}/ -> IContractBidsData
     */
    public static getContractBidsUrl(contractId: number, page = 1) {
        return EVE.constructESIUrl(1, ['contracts', 'public', 'bids', contractId], {page});
    }

    /**
     * GET
     * https://esi.evetech.net/ui/#/Contracts/get_contracts_public_items_contract_id
     * /v1/contracts/public/items/{contract_id}/ -> IContractItemsData
     */
    public static getContractItemsUrl(contractId: number, page = 1) {
        return EVE.constructESIUrl(1, ['contracts', 'public', 'items', contractId], {page});
    }

    /**
     * GET
     * https://esi.evetech.net/ui/#/Routes/get_route_origin_destination
     * /v1/route/{origin}/{destination}/ -> number[]
     */
    public static getRouteUrl(origin: number, destination: number) {
        return EVE.constructESIUrl(1, ['route', origin, destination]);
    }
}
