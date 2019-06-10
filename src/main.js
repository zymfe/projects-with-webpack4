import Vue from 'vue';
import App from '@/components/App';
import router from '@/router/index';
import Resource from 'vue-resource';
import 'iview/dist/styles/iview.css';

Vue.use(Resource);

import { Button } from 'iview';

Vue.component('Button', Button);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});