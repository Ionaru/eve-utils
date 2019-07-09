# Changelog
All notable changes to the eve-utils project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
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

[Unreleased]: https://github.com/Ionaru/eve-utils/compare/3.2.0...HEAD
[3.2.0]: https://github.com/Ionaru/eve-utils/compare/3.1.1...3.2.0
[3.1.1]: https://github.com/Ionaru/eve-utils/compare/3.1.0...3.1.1
[3.1.0]: https://github.com/Ionaru/eve-utils/compare/3.0.0...3.1.0
[3.0.0]: https://github.com/Ionaru/eve-utils/compare/2.0.0...3.0.0
[2.0.0]: https://github.com/Ionaru/eve-utils/compare/1.0.1...2.0.0
[1.0.1]: https://github.com/Ionaru/eve-utils/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/Ionaru/eve-utils/compare/6afcfb8...1.0.0
