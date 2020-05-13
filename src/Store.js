/*
  Store.jsx
  This provides global state to the entire SPA app.
  For documentation on Treble Global State Management go to https://hjrdave.github.io/get-treble-gsm/
*/

import { createStore } from 'treble-gsm';

const Store = createStore([

  //lets the main nav know what page it is on so it sets active tab accordingly
  {
    action: 'updateActiveNavPath',
    state: { activeNavPath: '/' }
  },

  //sets the active state on the mobile nav
  {
    action: 'updateMobileNavState',
    state: { mobileNavState: false }
  },

  //categories
  {
    action: 'updateCategories',
    state: { categories: [] }
  },

  //dark mode
  {
    action: 'darkMode',
    state: { darkMode: false },
    features: {
      persist: false
    }
  },

  {
    action: 'updateTestMain',
    state: { mainTest: 'mainFoo' }
  }
]);

export default Store;