export default {
	state: {
		activeProduct: {},
		products: [
			{
				name: "AflexCity",
				productId: "AflexCity",
				thumb: require('../../assets/thumbs/AflexCity_thumb.jpg')
			},
			{
				name: "Aflex HR",
				productId: "AflexHR",
				thumb: require('../../assets/thumbs/Aflex-HR_thumb.jpg')
			},
			{
				name: "AflexMap",
				productId: "AflexMap",
				thumb: require('../../assets/thumbs/ep_thumb.jpg')
			},
			{
				name: "Aflex Archive",
				productId: "Aflex_Archive",
				thumb: require('../../assets/thumbs/Careers_thumb.jpg')
			},
			{
				name: "Aflex Doc",
				productId: "Aflex_Doc",
				thumb: require('../../assets/thumbs/products_thumb.jpg')
			},
			{
				name: "Aflex GIS",
				productId: "Aflex_GIS",
				thumb: require('../../assets/thumbs/Aflex_GIS_thumb.jpg')
			},
		]
	},

	mutations: {
		setActiveProduct (state, payload) {
			state.activeProduct = payload
		}
	},

	actions: {

		setActiveProduct ({commit}, payload) {
			commit('setActiveProduct',payload)
		}
	},

	getters: {
		getActiveProduct (state) {
			return state.activeProduct
		},

		getProducts (state) {
			return state.products
		}

	}
}