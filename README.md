# @ionaru/eve-utils

[![npm version](https://img.shields.io/npm/v/@ionaru/eve-utils.svg?style=for-the-badge)](https://www.npmjs.com/package/@ionaru/eve-utils)
[![npm version](https://img.shields.io/npm/v/@ionaru/eve-utils/next.svg?style=for-the-badge)](https://www.npmjs.com/package/@ionaru/eve-utils/v/next)
[![Build Status](https://img.shields.io/travis/Ionaru/eve-utils/master.svg?style=for-the-badge)](https://travis-ci.org/Ionaru/eve-utils)
[![codecov](https://img.shields.io/codecov/c/github/Ionaru/eve-utils/master.svg?style=for-the-badge)](https://codecov.io/gh/Ionaru/eve-utils)

## Description
A package containing various utilities for working with EVE Online's ESI and SDE.

## Usage (Typescript)
```
npm install @ionaru/eve-utils
```

```ts
import { EVE } from '@ionaru/eve-utils'

const url = EVE.getCharacterUrl(90735619);
console.log(url) // 
const response = fetch(url);
```

```ts
import { EVE } from '@ionaru/eve-utils'

console.log(EVE.mineral.tritanium); // 34
console.log(EVE.ore.mercoxit); // 11396
console.log(EVE.gas['Fullerite-C50']); // 30370
```

```ts
import { IUniverseTypeData } from '@ionaru/eve-utils'

const type: IUniverseTypeData;
```
