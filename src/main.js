import Vue from 'vue';
import router from './router';
import App from './App';

const axios = require('axios');

Vue.prototype.$Request = axios;

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});