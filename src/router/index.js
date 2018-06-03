import Vue from 'vue'
import Router from 'vue-router'
//Views
import home from '@/views/home'
import about from '@/views/about'
import cases from '@/views/casestudies'
import caseSingle from '@/views/casesingle'
import careers from '@/views/careers'
import contact from '@/views/contact'
import products from '@/views/products'
import productSingle from '@/views/productsingle'
import services from '@/views/services'
import servicesCategory from '@/views/servicescat'
import serviceSingle from '@/views/servicesingle'
import technology from '@/views/technology'

Vue.use(Router)

/*
* Home
* About Us
* Services
* Case Studies
* Careers
* Contact Us
*/

export default new Router({
  routes: [
  	  {
  	  	path: '/',
  	  	component: home,
  	  	name: 'home'
  	  },
	  {
	  	path: '/services',
	  	component: services,
	  	name: 'Services'
	  },
	  {
	  	path: '/services/:catId',
	  	component: servicesCategory,
	  	name: "Services category"
	  },
	  {
	  	path: '/services/:catId/:serviceId',
	  	component: serviceSingle,
	  	name: "Services single"
	  },
	  {
	  	path: '/about',
	  	component: about,
	  	name: 'About us'
	  },
	  {
	  	path: '/cases',
	  	component: cases,
	  	name: 'Case studies'
	  },
	  {
	  	path: '/cases/:caseId',
	  	component: caseSingle,
	  	name: 'Case single'
	  },
	  {
	  	path: '/products',
	  	component: products,
	  	name: 'Products'
	  },
	  {
	  	path: '/products/:productId',
	  	component: productSingle,
	  	name: 'Products single'
	  },
	  {
	  	path: '/technology',
	  	component: technology,
	  	name: 'Technology'
	  },
	  {
	  	path: '/careers',
	  	component: careers,
	  	name: 'Careers'
	  },
	  {
	  	path: '/contact',
	  	component: contact,
	  	name: 'Contact us'
	  }
  ],
  mode: 'history'
})
