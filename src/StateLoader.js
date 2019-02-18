import { isEqual } from 'lodash/lang';
import { pick } from 'lodash/object';

const KEY = 'state';

class StateLoader {
  constructor(keys = []) {
    this.state = {};
    this.keys = keys;
  }

  filterState(state) {
    return this.keys.length === 0 ? state : pick(state, this.keys);
  }

  saveState(newState) {
    const filtered = this.filterState(newState);

    // Only store state in local storage if it has changed.
    if (!isEqual(this.state, filtered)) {
      const serializedState = JSON.stringify(filtered);
      localStorage.setItem(KEY, serializedState);
      this.state = filtered;
    }
  }

  loadState() {
    const serializedState = localStorage.getItem(KEY);
    if (serializedState) {
      this.state = JSON.parse(serializedState);
    }

    return this.state;
  }
}

export default StateLoader;
