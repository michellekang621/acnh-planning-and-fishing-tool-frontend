import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './App.vue';

import home from './pages/home';
import login from './pages/login';
import register from './pages/register';
import profile from './pages/profile';
import fishingTool from './pages/fishingTool';
import itemDetails from './pages/itemDetails';
import listDetails from './pages/listDetails';
import searchItems from './pages/searchItems';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueMaterial);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/login',
      component: login,
    },
    {
      path: '/register',
      component: register,
    },
    {
      path: '/profile',
      component: profile,
    },
    {
      path: '/fishing-tool',
      component: fishingTool,
    },
    {
      path: '/item-details/:itemId',
      component: itemDetails,
    },
    {
      path: '/list-details/:listId',
      component: listDetails,
    },
    {
      path: '/search-items',
      component: searchItems,
    },
  ]
})

new Vue({
  el: '#app',
  components: {
    App,
  },
  router,
  render: h => h(App),
}).$mount('#app')
