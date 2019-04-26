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
}

export interface IUniverseTypesData {
    capacity: number;
    description: string;
    dogma_attributes: IDogmaAttributes[];
    dogma_effects: IDogmaEffects[];
    graphic_id: number;
    group_id: number;
    icon_id: number;
    market_group_id: number;
    mass: number;
    name: string;
    packaged_volume: number;
    portion_size: number;
    published: boolean;
    radius: number;
    type_id: number;
    volume: number;
}

export interface IDogmaAttributes {
    attribute_id: number;
    value: number;
}

export interface IDogmaEffects {
    effect_id: number;
    is_default: boolean;
}

export type IUniverseNamesData = IUniverseNamesDataUnit[];
export interface IUniverseNamesDataUnit {
    category: string;
    id: number;
    name: string;
}

export interface ICharacterShipData {
    ship_item_id: number;
    ship_name: string;
    ship_type_id: number;
}

export interface IUniverseCategoriesData {
    category_id: number;
    name: string;
    published: boolean;
    groups: number[];
}

export interface IUniverseGroupsData {
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
    accrued_remap_cooldown_date?: Date;

    // Number of available bonus character neural remaps
    bonus_remaps?: number;

    // Datetime of last neural remap, including usage of bonus remaps
    last_remap_date?: Date;

    charisma: number;
    intelligence: number;
    memory: number;
    perception: number;
    willpower: number;
}

export type ICharacterWalletJournalData = ICharacterWalletJournalDataUnit;
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
    context_id_type?: string;

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

    // The transaction type for the given transaction. Different transaction types will populate different attributes. Note: If you have an
    // existing XML API application that is using ref_types, you will need to know which string ESI ref_type maps to which integer. You can
    // look at the following file to see string->int mappings:
    // https://github.com/ccpgames/eve-glue/blob/master/eve_glue/wallet_journal_ref.py
    ref_type: string;

    // Tax amount received. Only applies to tax related transactions
    tax?: number;

    // The corporation ID receiving any tax paid. Only applies to tax related transactions
    tax_receiver_id?: number;
}

type IIndustryStatus = 'active' | 'cancelled' | 'delivered' | 'paused' | 'ready' | 'reverted';

export type ICharacterIndustryJobsData = ICharacterIndustryJobsDataUnit;
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

export type ICharacterBlueprintsData = ICharacterBlueprintsDataUnit;
export interface ICharacterBlueprintsDataUnit {
    // Unique ID for this item.
    item_id: number;

    // Type of the location_id
    location_flag: string;

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

export interface IStructurePosition {
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
    position: IStructurePosition;

    // Id of the solar system where the structure is located.
    solar_system_id: number;

    // Type id of the structure
    type_id?: number;
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

export enum IndustryActivity {
    none = 0,
    manufacturing = 1,
    research_time_efficiency = 3,
    research_material_efficiency = 4,
    copying = 5,
    duplicating = 6,
    reverse_engineering = 7,
    invention = 8,
    reactions = 11,
}

export type MarketGroupsData = IMarketGroupData[];
export interface IMarketGroupData {
    description: string;
    market_group_id: number;
    name: string;
    parent_group_id: number;
    types: number[];
}
