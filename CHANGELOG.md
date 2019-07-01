# Changelog
All notable changes to the eve-utils project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- /v4/characters/{id} URL and typings.

## [3.1.1] 2019-05-09
### Removed
- Gamboge Cytoserocin from Booster Gas Clouds because it's not available on the market.

## [3.1.0] 2019-05-08
### Added
- Gasses

## [3.0.0] 2019-04-29
### BREAKING CHANGES
- Updated getCharacterWalletJournalUrl to v6.
- Updated ICharacterWalletJournalDataUnit to match v6 route.
- Added types for ref_type and context_id_type to ICharacterWalletJournalDataUnit.

## [2.0.0] 2019-04-29
### BREAKING CHANGES
- Moved PublicEsiService and CacheController to esi-service package.

## [1.0.1] 2019-04-26
### Fixed
- Some data interfaces not being arrays of their units.

## [1.0.0] 2019-04-26
### Added
- Initial codebase, most copied from <https://github.com/Ionaru/evie>
- Setup for this project

[Unreleased]: https://github.com/Ionaru/eve-utils/compare/3.0.1...HEAD
[3.0.1]: https://github.com/Ionaru/eve-utils/compare/3.0.0...3.0.1
[3.0.0]: https://github.com/Ionaru/eve-utils/compare/2.0.0...3.0.0
[2.0.0]: https://github.com/Ionaru/eve-utils/compare/1.0.1...2.0.0
[1.0.1]: https://github.com/Ionaru/eve-utils/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/Ionaru/eve-utils/compare/6afcfb8...1.0.0
