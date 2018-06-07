import Vue from "vue"
import Vuex from 'vuex'

import home from './home'
import products from './products'
import services from './services'
import shared from './shared'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		home: home,
		products: products,
		services: services,
		shared: shared,
	}
})