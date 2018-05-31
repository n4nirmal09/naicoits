import 'babel-polyfill'
import 'nodelist-foreach-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mixins from './mixins'
import './sass/main.scss'
import './utilities/modernizr'
import './utilities/bodymovin'
import "GSAP"

// Components
import entryAnim from './components/entryanim'
import header from './components/header'
import footer from './components/footer'
import navigation from './components/navigation'


Vue.config.productionTip = false

// Define global components
Vue.component('entry-anim', entryAnim)
Vue.component('main-header', header)
Vue.component('main-footer', footer)
Vue.component('navigation', navigation)

// define a mixin object
Vue.mixin(mixins)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  created () {
  	
  },
  template: '<App/>'
})
