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

#### new StateLoader([state][, keys])

* `state` `<object>`
The state to return if no state can be loaded.
Defaults to `{}`.
* `keys` `<array>`
An array of keys to whitelist.
An empty array means that all keys are saved / loaded.
Defaults to `[]`.

The `keys` array is useful if you want to omit certain fields of your state from localStorage (e.g. cached data).

### Methods

#### saveState(state)

* `state` `<object>` The state to save to localStorage.

#### loadState()

* Returns: `<object>`.
