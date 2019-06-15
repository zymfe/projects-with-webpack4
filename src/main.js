import Vue from 'vue';
import App from '@/components/App';
import router from '@/router/index';
import Resource from 'vue-resource';

Vue.use(Resource);

import { 
  Button, Message, Table, TableColumn, Pagination, Input
} from 'element-ui';

Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('TableColumn', TableColumn);
Vue.component('Pagination', Pagination);
Vue.component('Input', Input);
Vue.component('Button', Button);

Vue.prototype.$Message = Message;

new Vue({
  el: '#app',
  render: h => h(App),
  router
});