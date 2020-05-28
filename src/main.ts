import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

Vue.config.productionTip = false;
import '@/config/assets';

import 'normalize.css';
import 'bootstrap-4-grid/scss/grid.scss';
import 'vue-select/src/scss/vue-select.scss';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
