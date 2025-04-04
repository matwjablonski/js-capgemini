## Zadanie nr 16

**Zainstaluj zależność:** 
`npm install --save-dev jest jest-environment-jsdom`

**Zmodyfikuj plik package.json**

```json
{
  "type": "module",
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
  }
}
```

**jest.config.js**
```js
export default {
  transform: {},
  testEnvironment: 'jsdom',
  moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  verbose: true,
  injectGlobals: true,
};
```

**w pliku testu**

```js
/**
 * @jest-environment jsdom
 */
import { jest } from '@jest/globals';
```
