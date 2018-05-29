// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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


Vue.config.productionTip = false

// Define global components
Vue.component('entry-anim', entryAnim)

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
