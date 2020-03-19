import { createStore } from 'treble-gsm';

const Store = createStore([
  {
    action: 'updateActiveNavPath',
    state: { activeNavPath: '/' }
  },
  {
    action: 'updateMobileNavState',
    state: { mobileNavState: false }
  }
], {});

export default Store;