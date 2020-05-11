/* eslint-disable camelcase */

type ArrayOneOrMore<T> = {
    0: T;
} & T[];

export type IMarketOrdersData = IMarketOrdersDataUnit[];

export interface IMarketOrdersDataUnit {
    order_id: number;
    type_id: number;
    location_id: number;
    volume_total: number;
    volume_remain: number;
    min_volume: number;
    price: number;
    is_buy_order: boolean;
    duration: number;
    issued: string;
    range: string;
    system_id: number;
}

export interface IUniverseTypeData {
    capacity?: number;

    description: string;

    dogma_attributes?: IDogmaAttributes[];

    dogma_effects?: IDogmaEffects[];

    graphic_id?: number;

    group_id: number;

    icon_id?: number;

    // This only exists for types that can be put on the market.
    market_group_id?: number;

    mass?: number;

    name: string;

    packaged_volume?: number;

    portion_size?: number;

    published: boolean;

    radius?: number;

    type_id: number;

    volume?: number;
}

export interface IDogmaAttributes {
    attribute_id: number;
    value: number;
}

export interface IDogmaEffects {
    effect_id: number;
    is_default: boolean;
}

export type IMarketHistoryData = IMarketHistoryDataUnit[];

export interface IMarketHistoryDataUnit {
    // Date of the historic data
    date: string;

    // Amount of completed transactions
    order_count: number;

    // Amount of items traded hands
    volume: number;

    // ??
    highest: number;

    // Average price of the item during the day
    average: number;

    // ??
    lowest: number;
}

export type IUniverseNamesCategory =
    'alliance'
    | 'character'
    | 'constellation'
    | 'corporation'
    | 'inventory_type'
    | 'region'
    | 'solar_system'
    | 'station'
    | 'faction';

export type IUniverseNamesData = IUniverseNamesDataUnit[];

export interface IUniverseNamesDataUnit {
    category: IUniverseNamesCategory;
    id: number;
    name: string;
}

export interface ICharacterShipData {
    ship_item_id: number;
    ship_name: string;
    ship_type_id: number;
}

export interface IUniverseCategoryData {
    category_id: number;
    name: string;
    published: boolean;
    groups: number[];
}

export interface IUniverseGroupData {
    group_id: number;
    name: string;
    published: boolean;
    category_id: number;
    types: number[];
}

export interface ISkillsData {
    active_skill_level: number;
    skill_id: number;
    skillpoints_in_skill: number;
    trained_skill_level: number;
}

export interface ICharacterSkillsData {
    skills: ISkillsData[];
    total_sp: number;
    unallocated_sp?: number;
}

export type ICharacterSkillQueueData = ICharacterSkillQueueDataUnit[];

export interface ICharacterSkillQueueDataUnit {
    finish_date?: string;

    finished_level: number;

    level_end_sp?: number;

    // Amount of SP that was in the skill when it started training it’s current level. Used to calculate % of current level complete.
    level_start_sp?: number;

    queue_position: number;

    skill_id: number;

    start_date?: string;

    training_start_sp?: number;
}

export interface IStatusData {
    start_time: string;
    players: number;
    server_version: string;
}

export interface ICharacterAttributesData {
    // Neural remapping cooldown after a character uses remap accrued over time
    accrued_remap_cooldown_date?: string;

    // Number of available bonus character neural remaps
    bonus_remaps?: number;

    // Datetime of last neural remap, including usage of bonus remaps
    last_remap_date?: string;

    charisma: number;
    intelligence: number;
    memory: number;
    perception: number;
    willpower: number;
}

export type contextIdType =
    'structure_id'
    | 'station_id'
    | 'market_transaction_id'
    | 'character_id'
    | 'corporation_id'
    | 'alliance_id'
    | 'eve_system'
    | 'industry_job_id'
    | 'contract_id'
    | 'planet_id'
    | 'system_id'
    | 'type_id';

export type refType =
    'acceleration_gate_fee'
    | 'advertisement_listing_fee'
    | 'agent_donation'
    | 'agent_location_services'
    | 'agent_miscellaneous'
    | 'agent_mission_collateral_paid'
    | 'agent_mission_collateral_refunded'
    | 'agent_mission_reward'
    | 'agent_mission_reward_corporation_tax'
    | 'agent_mission_time_bonus_reward'
    | 'agent_mission_time_bonus_reward_corporation_tax'
    | 'agent_security_services'
    | 'agent_services_rendered'
    | 'agents_preward'
    | 'alliance_maintainance_fee'
    | 'alliance_registration_fee'
    | 'asset_safety_recovery_tax'
    | 'bounty'
    | 'bounty_prize'
    | 'bounty_prize_corporation_tax'
    | 'bounty_prizes'
    | 'bounty_reimbursement'
    | 'bounty_surcharge'
    | 'brokers_fee'
    | 'clone_activation'
    | 'clone_transfer'
    | 'contraband_fine'
    | 'contract_auction_bid'
    | 'contract_auction_bid_corp'
    | 'contract_auction_bid_refund'
    | 'contract_auction_sold'
    | 'contract_brokers_fee'
    | 'contract_brokers_fee_corp'
    | 'contract_collateral'
    | 'contract_collateral_deposited_corp'
    | 'contract_collateral_payout'
    | 'contract_collateral_refund'
    | 'contract_deposit'
    | 'contract_deposit_corp'
    | 'contract_deposit_refund'
    | 'contract_deposit_sales_tax'
    | 'contract_price'
    | 'contract_price_payment_corp'
    | 'contract_reversal'
    | 'contract_reward'
    | 'contract_reward_deposited'
    | 'contract_reward_deposited_corp'
    | 'contract_reward_refund'
    | 'contract_sales_tax'
    | 'copying'
    | 'corporate_reward_payout'
    | 'corporate_reward_tax'
    | 'corporation_account_withdrawal'
    | 'corporation_bulk_payment'
    | 'corporation_dividend_payment'
    | 'corporation_liquidation'
    | 'corporation_logo_change_cost'
    | 'corporation_payment'
    | 'corporation_registration_fee'
    | 'courier_mission_escrow'
    | 'cspa'
    | 'cspaofflinerefund'
    | 'datacore_fee'
    | 'dna_modification_fee'
    | 'docking_fee'
    | 'duel_wager_escrow'
    | 'duel_wager_payment'
    | 'duel_wager_refund'
    | 'factory_slot_rental_fee'
    | 'gm_cash_transfer'
    | 'industry_job_tax'
    | 'infrastructure_hub_maintenance'
    | 'inheritance'
    | 'insurance'
    | 'item_trader_payment'
    | 'jump_clone_activation_fee'
    | 'jump_clone_installation_fee'
    | 'kill_right_fee'
    | 'lp_store'
    | 'manufacturing'
    | 'market_escrow'
    | 'market_fine_paid'
    | 'market_transaction'
    | 'medal_creation'
    | 'medal_issued'
    | 'mission_completion'
    | 'mission_cost'
    | 'mission_expiration'
    | 'mission_reward'
    | 'office_rental_fee'
    | 'operation_bonus'
    | 'opportunity_reward'
    | 'planetary_construction'
    | 'planetary_export_tax'
    | 'planetary_import_tax'
    | 'player_donation'
    | 'player_trading'
    | 'project_discovery_reward'
    | 'project_discovery_tax'
    | 'reaction'
    | 'release_of_impounded_property'
    | 'repair_bill'
    | 'reprocessing_tax'
    | 'researching_material_productivity'
    | 'researching_technology'
    | 'researching_time_productivity'
    | 'resource_wars_reward'
    | 'reverse_engineering'
    | 'security_processing_fee'
    | 'shares'
    | 'skill_purchase'
    | 'sovereignity_bill'
    | 'store_purchase'
    | 'store_purchase_refund'
    | 'structure_gate_jump'
    | 'transaction_tax'
    | 'upkeep_adjustment_fee'
    | 'war_ally_contract'
    | 'war_fee'
    | 'war_fee_surrender';
export type ICharacterWalletJournalData = ICharacterWalletJournalDataUnit[];

export interface ICharacterWalletJournalDataUnit {
    // The amount of ISK given or taken from the wallet as a result of the given transaction. Positive when ISK is deposited into the wallet
    // and negative when ISK is withdrawn
    amount?: number;

    // Wallet balance after transaction occurred
    balance?: number;

    // An ID that gives extra context to the particular transaction. Because of legacy reasons the context is completely different per
    // ref_type and means different things. It is also possible to not have a context_id
    context_id?: number;

    // The type of the given context_id if present
    context_id_type?: contextIdType;

    // Date and time of transaction
    date: string;

    // The reason for the transaction, mirrors what is seen in the client
    description: string;

    // The id of the first party involved in the transaction. This attribute has no consistency and is different or non existent for
    // particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID
    // it can be dropped into the /universe/names/ ESI route to determine its type and name
    first_party_id?: number;

    // The id of the second party involved in the transaction. This attribute has no consistency and is different or non existent for
    // particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID
    // it can be dropped into the /universe/names/ ESI route to determine its type and name
    second_party_id?: number;

    // Unique journal reference ID
    id: number;

    // The user stated reason for the transaction. Only applies to some ref_types
    reason?: string;

    // The transaction type for the given transaction. Different transaction types will populate different attributes.
    ref_type: refType;

    // Tax amount received. Only applies to tax related transactions
    tax?: number;

    // The corporation ID receiving any tax paid. Only applies to tax related transactions
    tax_receiver_id?: number;
}

type IIndustryStatus = 'active' | 'cancelled' | 'delivered' | 'paused' | 'ready' | 'reverted';

export type ICharacterIndustryJobsData = ICharacterIndustryJobsDataUnit[];

export interface ICharacterIndustryJobsDataUnit {
    // Job activity ID
    activity_id: IndustryActivity;

    // blueprint_id integer
    blueprint_id: number;

    // Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container)
    // or corporation facility
    blueprint_location_id: number;

    // blueprint_type_id integer
    blueprint_type_id: number;

    // ID of the character which completed this job
    completed_character_id?: number;

    // Date and time when this job was completed
    completed_date?: string;

    // The sum of job installation fee and industry facility tax
    cost: number;

    // Job duration in seconds
    duration: number;

    // Date and time when this job finished
    end_date: string;

    // ID of the facility where this job is running
    facility_id: number;

    // ID of the character which installed this job
    installer_id: number;

    // Unique job ID
    job_id: number;

    // Number of runs blueprint is licensed for
    licensed_runs: number;

    // Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a
    // corporation facility.
    output_location_id: number;

    // Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
    pause_date?: string;

    // Chance of success for invention
    probability?: number;

    // Type ID of product (manufactured, copied or invented)
    product_type_id?: number;

    // Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
    runs: number;

    // Date and time when this job started
    start_date: string;

    // ID of the station where industry facility is located
    station_id: number;

    // Status string
    status: IIndustryStatus;

    // Number of successful runs for this job. Equal to runs unless this is an invention job
    successful_runs?: number;
}

export type ICharacterBlueprintsData = ICharacterBlueprintsDataUnit[];

export interface ICharacterBlueprintsDataUnit {
    // Unique ID for this item.
    item_id: number;

    // Type of the location_id
    location_flag: ICharacterBlueprintsLocationFlag;

    // References a solar system, station or item_id if this blueprint is located within a container.
    // If the return value is an item_id, then the Character AssetList API must be queried to find the container using
    // the given item_id to determine the correct location of the Blueprint.
    location_id: number;

    // Material Efficiency Level of the blueprint.
    material_efficiency: number;

    // A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy.
    // It can be a positive integer if it is a stack of blueprint originals fresh from the market
    // (e.g. no activities performed on them yet).
    quantity: number;

    // Number of runs remaining if the blueprint is a copy, -1 if it is an original.
    runs: number;

    // Time Efficiency Level of the blueprint.
    time_efficiency: number;

    type_id: number;
}

export interface IPosition {
    x: number;
    y: number;
    z: number;
}

export interface IUniverseStructureData {
    // The full name of the structure
    name: string;

    // The ID of the corporation who owns this particular structure
    owner_id: number;

    // Position of the structure with x/y/z coordinates.
    position: IPosition;

    // Id of the solar system where the structure is located.
    solar_system_id: number;

    // Type id of the structure
    type_id?: number;
}

export interface IUniverseStationData {

    max_dockable_ship_volume: number;

    name: string;

    office_rental_cost: number;

    // ID of the corporation that controls this station
    owner?: number;

    position: IPosition;

    race_id?: number;

    reprocessing_efficiency: number;

    reprocessing_stations_take: number;

    services: IUniverseStationServicesType[];

    station_id: number;

    // The solar system this station is in
    system_id: number;

    type_id: number;
}

export type IUniverseStationServicesType =
    'bounty-missions'
    | 'assasination-missions'
    | 'courier-missions'
    | 'interbus'
    | 'reprocessing-plant'
    | 'refinery'
    | 'market'
    | 'black-market'
    | 'stock-exchange'
    | 'cloning'
    | 'surgery'
    | 'dna-therapy'
    | 'repair-facilities'
    | 'factory'
    | 'labratory'
    | 'gambling'
    | 'fitting'
    | 'paintshop'
    | 'news'
    | 'storage'
    | 'insurance'
    | 'docking'
    | 'office-rental'
    | 'jump-clone-facility'
    | 'loyalty-point-store'
    | 'navy-offices'
    | 'security-offices';

export interface IUniverseRegionData {
    constellations: number[];
    description?: string;
    name: string;
    region_id: number;
}

export interface IUniverseConstellationData {
    constellation_id: number;
    name: string;
    position: IPosition;
    region_id: number;
    systems: number[];
}

export interface IUniverseSystemData {
    constellation_id: number;
    name: string;
    planets?: IUniverseSystemPlanetData;
    position: IPosition;
    security_class?: string;
    security_status: number;
    star_id?: number;
    stargates?: number[];
    stations?: number[];
    system_id: number;
}

export interface IUniverseSystemPlanetData {
    asteroid_belts?: number[];
    moons?: number[];
    planet_id: number;
}

export type IIndustryActivityProductsData = IIndustryActivityProductsDataUnit[];

export interface IIndustryActivityProductsDataUnit {
    typeID: number;
    activityID: number;
    productTypeID: number;
    quantity: number;
}

export type IIndustryActivitySkillsData = IIndustryActivitySkillsDataUnit[];

export interface IIndustryActivitySkillsDataUnit {
    typeID: number;
    activityID: number;
    skillID: number;
    level: number;
}

export type IIndustryActivityMaterialsData = IIndustryActivityMaterialsDataUnit[];

export interface IIndustryActivityMaterialsDataUnit {
    typeID: number;
    activityID: number;
    materialTypeID: number;
    quantity: number;
}

export type IInvTypeMaterialsData = IInvTypeMaterialsDataUnit[];

export interface IInvTypeMaterialsDataUnit {
    typeID: number;
    materialTypeID: number;
    quantity: number;
}

export type IIndustryActivityData = IIndustryActivityDataUnit[];

export interface IIndustryActivityDataUnit {
    typeID: number;
    activityID: number;
    time: number;
}

export type IIndustrySystemsData = IIndustrySystemsDataUnit[];

export interface IIndustrySystemsDataUnit {
    cost_indices: IIndustrySystemsCostIndices;
    solar_system_id: number;
}

export type IIndustrySystemsCostIndices = IIndustrySystemsCostIndex[];

export interface IIndustrySystemsCostIndex {
    activity: IIndustrySystemsCostIndexActivity;
    cost_index: number;
}

export enum IIndustrySystemsCostIndexActivity {
    COPYING = 'copying',
    DUPLICATING = 'duplicating',
    INVENTION = 'invention',
    MANUFACTURING = 'manufacturing',
    NONE = 'none',
    REACTION = 'reaction',
    RESEARCHING_MATERIAL_EFFICIENCY = 'researching_material_efficiency',
    RESEARCHING_TECHNOLOGY = 'researching_technology',
    RESEARCHING_TIME_EFFICIENCY = 'researching_time_efficiency',
    REVERSE_ENGINEERING = 'reverse_engineering',
}

export enum IndustryActivity {
    NONE = 0,
    MANUFACTURING = 1,
    RESEARCH_TIME_EFFICIENCY = 3,
    RESEARCH_MATERIAL_EFFICIENCY = 4,
    COPYING = 5,
    DUPLICATING = 6,
    REVERSE_ENGINEERING = 7,
    INVENTION = 8,
    REACTIONS = 11,
}

export type MarketGroupsData = IMarketGroupData[];

export interface IMarketGroupData {
    description: string;
    market_group_id: number;
    name: string;
    parent_group_id?: number;
    types: number[];
}

export interface ICharacterData {
    // The character’s alliance ID
    alliance_id?: number;

    ancestry_id?: number;

    // Creation date of the character
    birthday: string;

    bloodline_id: number;

    // The character’s corporation ID
    corporation_id: number;

    description?: string;

    // ID of the faction the character is fighting for, if the character is enlisted in Factional Warfare
    faction_id?: number;

    gender: 'male' | 'female';

    name: string;

    race_id: number;

    security_status?: number;

    // The individual title of the character
    title?: string;
}

export type ICharacterAssetsData = ICharacterAssetsDataUnit[];

export interface ICharacterAssetsDataUnit {
    is_blueprint_copy?: boolean;
    is_singleton: boolean;
    item_id: number;
    location_flag: ICharacterAssetsLocationFlag;
    location_id: number;
    location_type: ICharacterAssetsLocationType;
    quantity: number;
    type_id: number;
}

export interface ICharacterAssetsLocationsPosition {
    x: number;
    y: number;
    z: number;
}

export type ICharacterAssetsLocationsData = ICharacterAssetsLocationsDataUnit[];

export interface ICharacterAssetsLocationsDataUnit {
    item_id: number;
    position: ICharacterAssetsLocationsPosition;
}

export type ICharacterAssetsNamesData = ICharacterAssetsNamesDataUnit[];

export interface ICharacterAssetsNamesDataUnit {
    item_id: number;
    name: string;
}

export type ICharacterAssetsLocationType =
    'station'
    | 'solar_system'
    | 'other';

export type ICharacterAssetsLocationFlag =
    'AssetSafety'
    | 'AutoFit'
    | 'BoosterBay'
    | 'Cargo'
    | 'CorpseBay'
    | 'Deliveries'
    | 'DroneBay'
    | 'FighterBay'
    | 'FighterTube0'
    | 'FighterTube1'
    | 'FighterTube2'
    | 'FighterTube3'
    | 'FighterTube4'
    | 'FleetHangar'
    | 'FrigateEscapeBay'
    | 'Hangar'
    | 'HangarAll'
    | 'HiSlot0'
    | 'HiSlot1'
    | 'HiSlot2'
    | 'HiSlot3'
    | 'HiSlot4'
    | 'HiSlot5'
    | 'HiSlot6'
    | 'HiSlot7'
    | 'HiddenModifiers'
    | 'Implant'
    | 'LoSlot0'
    | 'LoSlot1'
    | 'LoSlot2'
    | 'LoSlot3'
    | 'LoSlot4'
    | 'LoSlot5'
    | 'LoSlot6'
    | 'LoSlot7'
    | 'Locked'
    | 'MedSlot0'
    | 'MedSlot1'
    | 'MedSlot2'
    | 'MedSlot3'
    | 'MedSlot4'
    | 'MedSlot5'
    | 'MedSlot6'
    | 'MedSlot7'
    | 'QuafeBay'
    | 'RigSlot0'
    | 'RigSlot1'
    | 'RigSlot2'
    | 'RigSlot3'
    | 'RigSlot4'
    | 'RigSlot5'
    | 'RigSlot6'
    | 'RigSlot7'
    | 'ShipHangar'
    | 'Skill'
    | 'SpecializedAmmoHold'
    | 'SpecializedCommandCenterHold'
    | 'SpecializedFuelBay'
    | 'SpecializedGasHold'
    | 'SpecializedIndustrialShipHold'
    | 'SpecializedLargeShipHold'
    | 'SpecializedMaterialBay'
    | 'SpecializedMediumShipHold'
    | 'SpecializedMineralHold'
    | 'SpecializedOreHold'
    | 'SpecializedPlanetaryCommoditiesHold'
    | 'SpecializedSalvageHold'
    | 'SpecializedShipHold'
    | 'SpecializedSmallShipHold'
    | 'SubSystemBay'
    | 'SubSystemSlot0'
    | 'SubSystemSlot1'
    | 'SubSystemSlot2'
    | 'SubSystemSlot3'
    | 'SubSystemSlot4'
    | 'SubSystemSlot5'
    | 'SubSystemSlot6'
    | 'SubSystemSlot7'
    | 'Unlocked'
    | 'Wardrobe';

export type ICharacterBlueprintsLocationFlag =
    'AutoFit'
    | 'Cargo'
    | 'CorpseBay'
    | 'DroneBay'
    | 'FleetHangar'
    | 'Deliveries'
    | 'HiddenModifiers'
    | 'Hangar'
    | 'HangarAll'
    | 'LoSlot0'
    | 'LoSlot1'
    | 'LoSlot2'
    | 'LoSlot3'
    | 'LoSlot4'
    | 'LoSlot5'
    | 'LoSlot6'
    | 'LoSlot7'
    | 'MedSlot0'
    | 'MedSlot1'
    | 'MedSlot2'
    | 'MedSlot3'
    | 'MedSlot4'
    | 'MedSlot5'
    | 'MedSlot6'
    | 'MedSlot7'
    | 'HiSlot0'
    | 'HiSlot1'
    | 'HiSlot2'
    | 'HiSlot3'
    | 'HiSlot4'
    | 'HiSlot5'
    | 'HiSlot6'
    | 'HiSlot7'
    | 'AssetSafety'
    | 'Locked'
    | 'Unlocked'
    | 'Implant'
    | 'QuafeBay'
    | 'RigSlot0'
    | 'RigSlot1'
    | 'RigSlot2'
    | 'RigSlot3'
    | 'RigSlot4'
    | 'RigSlot5'
    | 'RigSlot6'
    | 'RigSlot7'
    | 'ShipHangar'
    | 'SpecializedFuelBay'
    | 'SpecializedOreHold'
    | 'SpecializedGasHold'
    | 'SpecializedMineralHold'
    | 'SpecializedSalvageHold'
    | 'SpecializedShipHold'
    | 'SpecializedSmallShipHold'
    | 'SpecializedMediumShipHold'
    | 'SpecializedLargeShipHold'
    | 'SpecializedIndustrialShipHold'
    | 'SpecializedAmmoHold'
    | 'SpecializedCommandCenterHold'
    | 'SpecializedPlanetaryCommoditiesHold'
    | 'SpecializedMaterialBay'
    | 'SubSystemSlot0'
    | 'SubSystemSlot1'
    | 'SubSystemSlot2'
    | 'SubSystemSlot3'
    | 'SubSystemSlot4'
    | 'SubSystemSlot5'
    | 'SubSystemSlot6'
    | 'SubSystemSlot7'
    | 'FighterBay'
    | 'FighterTube0'
    | 'FighterTube1'
    | 'FighterTube2'
    | 'FighterTube3'
    | 'FighterTube4'
    | 'Module';

export interface ISearchData {
    agent?: number[];
    alliance?: number[];
    character?: number[];
    constellation?: number[];
    corporation?: number[];
    faction?: number[];
    inventory_type?: number[];
    region?: number[];
    solar_system?: number[];
    station?: number[];
}

export type IMailRecipientType = 'alliance' | 'character' | 'corporation' | 'mailing_list';

export interface IMailRecipient {
    recipient_id: number;
    recipient_type: IMailRecipientType;
}

export type ICharacterMailsData = ICharacterMailsDataUnit[];

export interface ICharacterMailsDataUnit {
    from?: number;
    is_read?: boolean;
    labels?: number[];
    mail_id?: number;
    recipients?: ArrayOneOrMore<IMailRecipient>;
    subject?: string;
    timestamp?: string;
}

export interface ICharacterMailData {
    body?: string;
    from?: number;
    labels?: number[];
    read?: boolean;
    recipients?: ArrayOneOrMore<IMailRecipient>;
    subject?: string;
    timestamp?: string;
}

export interface ICharacterMailPost {
    approved_cost?: number;
    body: string;
    recipients: ArrayOneOrMore<IMailRecipient>;
    subject: string;
}

export interface ICharacterMailPut {
    labels?: number[];
    read: boolean;
}

export type IMailLabelColor =
    '#0000fe'
    | '#006634'
    | '#0099ff'
    | '#00ff33'
    | '#01ffff'
    | '#349800'
    | '#660066'
    | '#666666'
    | '#999999'
    | '#99ffff'
    | '#9a0000'
    | '#ccff9a'
    | '#e6e6e6'
    | '#fe0000'
    | '#ff6600'
    | '#ffff01'
    | '#ffffcd'
    | '#ffffff';

export interface ICharacterMailLabel {
    color?: IMailLabelColor;
    label_id?: string;
    name?: string;
    unread_count?: number;
}

export interface ICharacterMailLabelsData {
    labels?: ICharacterMailLabel[];
    total_unread_count?: number;
}

export type ICharacterMailListsData = ICharacterMailListsDataUnit[];

export interface ICharacterMailListsDataUnit {
    mailing_list_id: number;
    name: string;
}

export type IMarketPricesData = IMarketPrice[];

export interface IMarketPrice {
    adjusted_price: number;
    average_price: number;
    type_id: number;
}

export enum SearchCategory {
    AGENT = 'agent',
    ALLIANCE = 'alliance',
    CHARACTER = 'character',
    CONSTELLATION = 'constellation',
    CORPORATION = 'corporation',
    FACTION = 'faction',
    INVENTORY_TYPE = 'inventory_type',
    REGION = 'region',
    SOLAR_SYSTEM = 'solar_system',
    STATION = 'station',
}

export type IPlanetSchematicsData = IPlanetSchematic[];

export interface IPlanetSchematic {
    schematicID: number;
    schematicName: string;
    cycleTime: number;
}

export type IPlanetSchematicsTypeMapData = IPlanetSchematicsTypeMap[];

export interface IPlanetSchematicsTypeMap {
    schematicID: number;
    typeID: number;
    quantity: number;
    isInput: 1 | 0;
}
