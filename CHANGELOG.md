# Changelog
All notable changes to the eve-utils project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
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

[Unreleased]: https://github.com/Ionaru/eve-utils/compare/4.1.2...HEAD
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
