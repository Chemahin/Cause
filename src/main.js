import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
//add router vue
import VueRouter from 'vue-router'
import Routes from './routers/router';

import * as uiv from 'uiv'

Vue.use(uiv)
Vue.use(VueRouter)
//add bootstrap grid and registrate him gor Vue
Vue.use(BootstrapVue);







const router = new VueRouter({
    routes:Routes,
    mode:'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    router:router,
});

