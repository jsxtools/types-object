# Types Object <a href="https://www.npmjs.com/package/types-object" target="_blank"><img src="https://img.shields.io/npm/v/types-object?color=%23444&label=&labelColor=%23CB0000&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjE1MCAxNTAgNDAwIDQwMCIgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTE1MCA1NTBoMjAwVjI1MGgxMDB2MzAwaDEwMFYxNTBIMTUweiIvPjwvc3ZnPg==&style=for-the-badge" alt="" align="right" valign="middle" height="32" /></a>

Literally just supporting JavaScript `Object()` in TypeScript.

This includes typing for:
- `Object()`
- `new Object()`
- `Object.create()`
- `Object.hasOwn()`
- `Object.getPrototypeOf()`
- `Object.setPrototypeOf()`

```ts
const love = { is: 'real' } as const
const real = Object(love)
const know = Object.hasOwn(love, 'is')

love.is /* (property) is: "real" */

real /* const real: {
  readonly is: "real";
} */

know /* const know: true */
```

### Usage

Add `types-object` to the array of `types` in `compilerOptions`, in either `tsconfig.json` or `jsconfig.json`.

```ts
{
  "compilerOptions": {
    "types": ["types-object"]
  }
}
```

Alternatively, use `types-object/constructor` if you only wish to include types for `Object()` and `new Object()`

```ts
{
  "compilerOptions": {
    "types": ["types-object/constructor"]
  }
}
```
