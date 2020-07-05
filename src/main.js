import Vue from 'vue'
import App from './App.vue'
import store from './store'

// Import Plugins
require('./plugins/index');

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
