## Zadanie nr 18

**zainstaluj pakiety**
`npm install cypress --save-dev`

**package.json**
```json
{
  "scripts": {
    "e2e:open": "npx cypress open",
    "e2e:run": "npx cypress run"
  }
}
```

**konfiguracja**
- uruchom polecenie `npm run e2e:open` i przejdź przez konfigurację

**cypress.config.js**

```js
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000'
  },
});
```
