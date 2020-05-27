import Vue from 'vue';
import Vuex from 'vuex';

import AuthStore from '@/views/auth/store';
import ProfileStore from '@/views/profile/store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth: AuthStore,
    profile: ProfileStore,
  },
});

export default store;
