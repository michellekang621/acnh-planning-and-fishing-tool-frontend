import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './App.vue';
import store from './store';

import home from './pages/home';
import login from './pages/login';
import register from './pages/register';
import profile from './pages/profile';
import fishingTool from './pages/fishing-tool';
import bugsTool from './pages/bugs-tool';
import seaCreaturesTool from './pages/sea-creatures-tool';
import itemsCalculator from './pages/items-calculator';
import itemDetails from './pages/item-details';
import goalDetails from './pages/goal-details';
import searchItems from './pages/search-items';
import searchItemsGuest from './pages/search-items-guest';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueMaterial);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
    },
    {
      path: '/fishing-tool',
      name: 'fishing-tool',
      component: fishingTool,
    },
    {
      path: '/bugs-tool',
      name: 'bugs-tool',
      component: bugsTool,
    },
    {
      path: '/sea-creatures-tool',
      name: 'sea-creatures-tool',
      component: seaCreaturesTool,
    },
    {
      path: '/items-calculator',
      name: 'items-calculator',
      component: itemsCalculator,
    },
    {
      path: '/item-details/:itemId',
      name: 'item-details',
      component: itemDetails,
    },
    {
      path: '/goal-details/:goalId',
      name: 'goal-details',
      component: goalDetails,
    },
    {
      path: '/search-items-guest',
      name: 'search-items-guest',
      component: searchItemsGuest,
    },
    {
      path: '/search-items',
      name: 'search-items',
      component: searchItems,
    },
  ]
})

new Vue({
  el: '#app',
  store,
  components: {
    App,
  },
  router,
  render: h => h(App),
}).$mount('#app')
