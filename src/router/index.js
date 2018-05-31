import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import HS from '@/views/horscrollpage'
import VS from '@/views/verscrollpage'

Vue.use(Router)

export default new Router({
  routes: [
  	  {
  	  	path: '/',
  	  	component: home,
  	  	name: 'home'
  	  },
	  {
	  	path: '/hor',
	  	component: HS,
	  	name: 'hor'
	  },
	  {
	  	path: '/ver',
	  	component: VS,
	  	name: 'ver'
	  }
  ],
  mode: 'history'
})
