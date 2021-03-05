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
import itemDetails from './pages/item-details';
import goalDetails from './pages/goal-details';
import goalsList from './pages/goals-list';
import searchItems from './pages/search-items';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueMaterial);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
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
      path: '/goals-list',
      name: 'goals-list',
      component: goalsList,
    },
    {
      path: '/item-details/:itemId',
      component: itemDetails,
    },
    {
      path: '/goal-details/:goalId',
      component: goalDetails,
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
  store: store,
  components: {
    App,
  },
  router,
  render: h => h(App),
}).$mount('#app')
