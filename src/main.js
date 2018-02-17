// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'



let getLang = "en"

import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'


let messages = "require('./i18n/en/global.js')";

import VeeValidate from 'vee-validate';


Vue.use(Vuetify)
Vue.use(VeeValidate, {errorBagName: "errors",locale: 'en'})


Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})



Vue.config.lang = 'en';
//Vue.config.productionTip = process.env.NODE_ENV


/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
}).$mount('#app')
