import Vue from "vue"
import Vuex from 'vuex'

import products from './products'
import services from './services'
import shared from './shared'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		products: products,
		services: services,
		shared: shared,
	}
})