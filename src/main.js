import 'babel-polyfill'
import 'nodelist-foreach-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './sass/main.scss'
import './utilities/modernizr'
import './utilities/bodymovin'
import "GSAP"

// Mixins
import globalMixins from './mixins/mixins'

// Components
import entryAnim from './components/entryanim'
import header from './components/header'
import footer from './components/footer'
import pageBanner from './components/pagebanner'
import horScroll from './components/nfronthorscroll'
import verScroll from './components/nfrontverscroll'
import navigation from './components/navigation'
import ctaLinkCard from './components/ctalinkcard'

import bgImage from './directives/bgimage'

Vue.config.productionTip = false

// Define global components
Vue.component('entry-anim', entryAnim)
Vue.component('main-header', header)
Vue.component('main-footer', footer)
Vue.component('navigation', navigation)
Vue.component('page-banner', pageBanner)
Vue.component('n-h-scroll', horScroll)
Vue.component('n-v-scroll', verScroll)
Vue.component('cta-link-card', ctaLinkCard)


// Defining Globale directives
Vue.directive('bgimage',bgImage)

// define a mixin object
Vue.mixin(globalMixins)

// Global event Bus
window.Event = new Vue()
/* eslint-disable no-new */

const root = new Vue({
	  el: '#app',
	  router,
	  store,
	  //components: { App },
	  created () {
	  	
	  },
	  //template: '<App/>',
	  render: h => h(App)
})


// document.addEventListener('DOMContentLoaded', function () {
//   root.$mount('#app')
  
//   document.dispatchEvent(new Event('vue-post-render'))
// })