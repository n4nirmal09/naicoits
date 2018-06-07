export default {
	state: {
		homeLinks: [
			{
				name: "Home Link 1",
				url: "/",
				thumb: require('../../assets/thumbs/AflexCity_thumb.jpg')
			},
			{
				name: "2 Home Link",
				url: "/",
				thumb: require('../../assets/thumbs/Careers_thumb.jpg')
			},
			{
				name: "3 Home Link",
				url: "/",
				thumb: require('../../assets/thumbs/product_eng_thumb.jpg')
			},
			{
				name: "4 Home Link",
				url: "/",
				thumb: require('../../assets/thumbs/Aflex-HR_thumb.jpg')
			},
			{
				name: "Products",
				url: "/products",
				thumb: require('../../assets/thumbs/products_thumb.jpg')
			}
		]
	},

	mutations: {

	},

	actions: {

	},

	getters: {
		getHomeLinks (state) {
			return state.homeLinks
		}
	}
	
}