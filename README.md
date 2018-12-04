# is-program-installed

Check if a program is installed, on Unix-like systems.

--------

## Installation

`npm i is-program-installed`

## Usage

```javascript
const isInstalled = require('is-program-installed')
isInstalled('ls') // => true
isInstalled('something-that-does-not-exist') // => false
```

## License

[MIT](./LICENSE.md)
