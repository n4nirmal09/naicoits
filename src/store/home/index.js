import axios from "axios"
axios.defaults.baseURL = 'http://localhost:8080/';

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
		AddNavLinks (state, payload) {
			state.homeLinks = payload
		}
	},

	actions: {
		AddNavLinks ({commit}){
			const req = axios.get('/static/jsonResponse.txt')

			req.then((res) => {
				let links = []
				res.data.forEach(item => {
					let linkObj = {
						name: item.title.rendered,
						url: item.link,
						date: item.date,
						uid: item.slug
					}

					links.push(linkObj)
				}) 
				console.log(links)
				// Now commit the mutation AddNavlinks with the above formated array
				commit('AddNavLinks', links)
			})
			.catch(err => {
				console.log(err)
			})
		}
	},

	getters: {
		getHomeLinks (state) {
			return state.homeLinks
		}
	}
	
}