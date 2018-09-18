import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
//add router vue
import VueRouter from 'vue-router'
import Routes from './routers/router';
//add v-calendar, v-date-picker
import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';


// Use v-calendar, v-date-picker & v-popover components
Vue.use(VCalendar, {
  firstDayOfWeek: 1,  //  2 -Monday
             // ...other defaults
});


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
    router:router
});

