# deno-open-create-new-shim-bug

1. Via deno

```sh
deno run --allow-read --allow-write index.ts
```

2. Build shim
```sh
deno run -A ./build.ts 
```

3. Via node
```sh
node node/esm/index.js
```