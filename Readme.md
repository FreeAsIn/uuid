# @freeasin/uuid

A simple UUID v4 generation module

## Origins

This module is based on the fewest-byte answer to https://stackoverflow.com/a/2117523.

That answer has been modifed to:

+ Be well commented
+ Run in **both** the browsers **and NodeJS**
    + *browser packaging as an ES6 module*

## Usage

`npm install @freeasin/uuid`

### NodeJS

`const { v4 } = require("@freeasin/uuid");`

### Typescript/Browser via module loader

`import { v4 } from "@freeasin/uuid";`

### Browser without a module loader

Use `@freeasin/uuid/dist/es6.js` as an ES6 module

## Where's AMD, UMD, UNPKG, etc?

Isn't that the point of ES6 modules?

Maybe we'll add additional packaging down the road if there's a need...

## Compiling

We're deleting and renaming files as part of build, so different build paths for POSIX and Windows (*cough* **WSL** *cough*).

*For POSIX environments:* `npm run build`

*If you're on **Windows**:* `npm run build:windows`

## License

MIT

See [LICENSE](./LICENSE) for further details.
