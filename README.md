# is-program-installed

Check if a program is installed.

--------

## Installation

`npm i is-program-installed`

## Usage

```javascript
const isInstalled = require('is-program-installed')
isInstalled('ls') // => true
isInstalled('Slack.app') // => true
isInstalled('powershell.exe') // => true
isInstalled('valid-linux-app.desktop') // => true
isInstalled('something-that-does-not-exist') // => false
```

[LICENSE](./LICENSE.md)
