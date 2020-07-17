# Changelog
All notable changes to the eve-utils project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- /v1/contracts/public/{region_id}/ URL and typings.
- /v1/contracts/public/bids/{contract_id}/ URL and typings.
- /v1/contracts/public/items/{contract_id}/ URL and typings.

## [7.1.0] - 2020-05-18
### Added
- 'strict' parameter to getSearchUrl.

## [7.0.0] - 2020-04-29
### BREAKING CHANGES
- Removed EVE.ore.
- Removed EVE.gas.
- Removed EVE.mineral.
- Removed ISearchCategories.
- Removed 'Gamboge Cytoserocin', 'Hiemal Tricarboxyl Vapor' and 'Chartreuse Cytoserocin' from gasses list.
- Removed lowercase values of IndustryActivity.
- Removed 'all' values of EVE.ores and EVE.gasses.
- Restructured EVE.ores to include moon and trig ores.
- Updated getUniverseNamesUrl to v3.

### Added
- Enum with ore types.
- Enum with ice types.
- Enum with gas types.
- Enum with mineral types.
- Enum with search categories.
- Uppercase values of IndustryActivity.
- /planetSchematicsTypeMap.json URL and typings.
- /planetSchematics.json URL and typings.

### Changed
- Made typeId in getMarketOrdersUrl optional.
- Made page in getMarketOrdersUrl optional.

## [6.0.0] - 2020-04-29
### BREAKING CHANGES
- Updated getCharacterAssetsUrl and typings to v5.

### Added
- Support for Node.js 14.

## [5.1.0] - 2020-04-20
### Added
- /v1/markets/prices/ URL and typings.
- /v1/industry/systems/ URL and typings.
- Typings for IUniverseNamesDataUnit.category.
- system_id to IMarketOrdersDataUnit.

### Fixed
- Condensed Scordite ID.

## [5.0.0] - 2020-01-03
### BREAKING CHANGES
- Dropped Node.js 11 support.
- Dropped Node.js 8 support.
- Renamed IStructurePosition to IPosition.

### Added
- /v1/characters/{character_id}/mail/ URL and typings.
- /v1/characters/{character_id}/mail/{mail_id} URL and typings.
- (GET) /v3/characters/{character_id}/mail/labels URL and typings.
- (POST) /v2/characters/{character_id}/mail/labels URL and typings.
- /v1/characters/{character_id}/mail/labels/{label_id} URL and typings.
- /v1/characters/{character_id}/mail/lists URL and typings.
- /v1/universe/regions/{region_id}/ URL and typings.
- /v1/universe/constellations/ URL.
- /v1/universe/constellations/{constellation_id}/ URL and typings.

## [4.4.0] - 2019-10-31
### Added
- /v4/universe/systems/{system_id}/ URL and typings.
- /v2/search/ URL and typings.

## [4.3.0] - 2019-09-13
### Added
- includeCompleted flag for v1/characters/{character_id}/industry/jobs.
- /v2/universe/stations/{station_id}}/ URL and typings.

## [4.2.0] - 2019-09-12
### Added
- Types for blueprint route location_flag property.

### Fixed
- Typings of dates that were incorrectly set as "Date" or "Number".

## [4.1.3] - 2019-08-18
### Added
- Forgotten pagination support for /v2/characters/{character_id}/blueprints/.
- Docstrings for blueprints URL function that describes the API type.

## [4.1.2] - 2019-08-18
### Added
- Forgotten pagination support for /v3/characters/{character_id}/assets/.

## [4.1.1] - 2019-08-17
### Fixed
- Errors in typings and forgotten string types.

## [4.1.0] - 2019-08-17
### Added
- Docstrings for assets URL functions that describe the API type.
- /v3/characters/{character_id}/assets/ URL and typings.
- /v2/characters/{character_id}/assets/locations/ URL and typings.
- /v1/characters/{character_id}/assets/names/ URL and typings.

## [4.0.1] - 2019-07-10
### Fixed
- MarketHistory typings which is a list by default.

## [4.0.0] - 2019-07-09
### BREAKING CHANGES
- Renamed constructESIURL to constructESIUrl.
- Changed constructESIUrl to accept query parameters, path arguments must now by passed as an array.
- Fixed multiple mistakes in ESI typings.
- Renamed getMarketOrdersURL to getMarketOrdersUrl.
- Renamed getUniverseRegions to getUniverseRegionsUrl.
- Renamed getUniverseCategoriesUrl to getUniverseCategoryUrl.
- Renamed getUniverseGroupsUrl to getUniverseGroupUrl.
- Renamed getUniverseStructuresUrl to getUniverseStructureUrl.
- Renamed getUniverseTypesUrl to getUniverseTypeUrl.
- Renamed gasses object keys to be consistent with ores.

### Added
- New getUniverseGroupsUrl that fetches the list of groups.
- New getUniverseCategoriesUrl that fetches the list of categories.
- New getUniverseStructuresUrl that fetches the list of structures.
- New getUniverseTypesUrl that fetches the list of types.
- New getUniverseSystemsUrl that fetches the list of systems.

## [3.2.0] - 2019-07-01
### Added
- /v4/characters/{id} URL and typings.

## [3.1.1] - 2019-05-09
### Removed
- Gamboge Cytoserocin from Booster Gas Clouds because it's not available on the market.

## [3.1.0] - 2019-05-08
### Added
- Gasses

## [3.0.0] - 2019-04-29
### BREAKING CHANGES
- Updated getCharacterWalletJournalUrl to v6.
- Updated ICharacterWalletJournalDataUnit to match v6 route.
- Added types for ref_type and context_id_type to ICharacterWalletJournalDataUnit.

## [2.0.0] - 2019-04-29
### BREAKING CHANGES
- Moved PublicEsiService and CacheController to esi-service package.

## [1.0.1] - 2019-04-26
### Fixed
- Some data interfaces not being arrays of their units.

## [1.0.0] - 2019-04-26
### Added
- Initial codebase, most copied from <https://github.com/Ionaru/evie>
- Setup for this project

[Unreleased]: https://github.com/Ionaru/eve-utils/compare/7.1.0...HEAD
[7.1.0]: https://github.com/Ionaru/eve-utils/compare/7.0.0...7.1.0
[7.0.0]: https://github.com/Ionaru/eve-utils/compare/6.0.0...7.0.0
[6.0.0]: https://github.com/Ionaru/eve-utils/compare/5.1.0...6.0.0
[5.1.0]: https://github.com/Ionaru/eve-utils/compare/5.0.0...5.1.0
[5.0.0]: https://github.com/Ionaru/eve-utils/compare/4.4.0...5.0.0
[4.4.0]: https://github.com/Ionaru/eve-utils/compare/4.3.0...4.4.0
[4.3.0]: https://github.com/Ionaru/eve-utils/compare/4.2.0...4.3.0
[4.2.0]: https://github.com/Ionaru/eve-utils/compare/4.1.3...4.2.0
[4.1.3]: https://github.com/Ionaru/eve-utils/compare/4.1.2...4.1.3
[4.1.2]: https://github.com/Ionaru/eve-utils/compare/4.1.1...4.1.2
[4.1.1]: https://github.com/Ionaru/eve-utils/compare/4.1.0...4.1.1
[4.1.0]: https://github.com/Ionaru/eve-utils/compare/4.0.1...4.1.0
[4.0.1]: https://github.com/Ionaru/eve-utils/compare/4.0.0...4.0.1
[4.0.0]: https://github.com/Ionaru/eve-utils/compare/3.2.0...4.0.0
[3.2.0]: https://github.com/Ionaru/eve-utils/compare/3.1.1...3.2.0
[3.1.1]: https://github.com/Ionaru/eve-utils/compare/3.1.0...3.1.1
[3.1.0]: https://github.com/Ionaru/eve-utils/compare/3.0.0...3.1.0
[3.0.0]: https://github.com/Ionaru/eve-utils/compare/2.0.0...3.0.0
[2.0.0]: https://github.com/Ionaru/eve-utils/compare/1.0.1...2.0.0
[1.0.1]: https://github.com/Ionaru/eve-utils/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/Ionaru/eve-utils/compare/6afcfb8...1.0.0
