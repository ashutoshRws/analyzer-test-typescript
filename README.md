# analyzer-test-typescript

Minimal TypeScript + Node project for analyzer language-detection testing.

## Expected analyzer behavior

- **Primary language**: TypeScript
- **Secondary/config**: JavaScript (compiled output optional), YAML, JSON
- **Min source files detected**: 3
- **Key paths**: `src/`, `tests/`, `package.json`, `tsconfig.json`

## Run locally

```bash
npm install
npm run build
npm test
```
