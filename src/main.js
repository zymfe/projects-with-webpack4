import Vue from 'vue';
import App from '@/components/App';
import router from '@/router/index';
import Resource from 'vue-resource';

Vue.use(Resource);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});