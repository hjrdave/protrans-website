import { createStore } from 'treble-gsm';

const Store = createStore([
  {
    action: 'updateActiveNavPath',
    state: { activeNavPath: '/' }
  }
], {});

export default Store;