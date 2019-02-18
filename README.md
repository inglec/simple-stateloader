# Simple Stateloader

## Installation

``` bash
npm install --save git+https://github.com/inglec/simple-stateloader.git
```

## Usage

Initialisation:
``` js
const StateLoader = require('simple-stateloader');
const stateLoader = new StateLoader();
```

Saving state:
``` js
const state = {
  auth: {
    user: 'test',
    token: 'abcdefg',
  },
}

stateLoader.saveState(state);
```

Loading state:
``` js
const state = stateLoader.loadState();
```

## API

### Constructor

``` js
new StateLoader([state][, keys])
```
* `state` `<object>` The state to return if no state can be loaded. Defaults to `{}`.
* `keys` `<array>` An array of keys to whitelist. An empty array means that all keys are saved / loaded. Useful if you don't want to save cached data to localStorage. Defaults to `[]`.

### Save

``` js
save(state)
```
* `state` `<object>` The state to save to localStorage.

### Load

``` js
load()
```
* Returns: `<object>`.
