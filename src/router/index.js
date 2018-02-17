import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/home');
const Page404 = () => import('@/pages/P404');


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: 'P404',
      component: Page404
    }
  ],
  mode:'history',
  localized:true
});
