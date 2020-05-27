import Vue from 'vue';

import vSelect from 'vue-select';
import VModal from 'vue-js-modal';
import Notifications from 'vue-notification';

Vue.use(VModal);
Vue.use(Notifications);
Vue.component('v-select', vSelect);
