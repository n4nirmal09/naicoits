export default {
	state: {
		activeService: {},
		services: [
			{
				name: "Web Application Development",
				serviceId: "web_app_development",
				category: "applications",
				thumb: require('../../assets/thumbs/ep_thumb.jpg')
			},
			{
				name: "Website Development",
				serviceId: "website_development",
				category: "applications",
				thumb: require('../../assets/thumbs/products_thumb.jpg')
			},
			{
				name: "Mobile Application Development",
				serviceId: "mob_app_development",
				category: "applications",
				thumb: require('../../assets/thumbs/mobile-app-thumb.jpg')
			},
			{
				name: "Business Intelligence",
				serviceId: "business_intelligence",
				category: "applications",
				thumb: require('../../assets/thumbs/products_thumb.jpg')
			},
			{
				name: "SaaS Product Development",
				serviceId: "saas_product_development",
				category: "applications"
			},
			{
				name: "Software Quality Assurance",
				serviceId: "sw_quality_assurance",
				category: "applications"
			},
			{
				name: "GIS Consulting",
				serviceId: "GIS_consulting",
				category: "geospatials"
			},
			{
				name: "GIS Application Development",
				serviceId: "GIS_app_development",
				category: "geospatials",
				thumb: require('../../assets/thumbs/Aflex-HR_thumb.jpg')
			},
			{
				name: "Data Architecture and Modeling",
				serviceId: "data_archetecture_modelling",
				category: "geospatials",
				thumb: require('../../assets/thumbs/product_eng_thumb.jpg')
			},
			{
				name: "System Design",
				serviceId: "system_design",
				category: "product_engineerings",
				thumb: require('../../assets/thumbs/products_thumb.jpg')
			},
			{
				name: "Embedded software services",
				serviceId: "embedded_sw_services",
				category: "product_engineerings"
			},
			{
				name: "IoT",
				serviceId: "IoT",
				category: "product_engineerings"
			}
		],
		activeServiceCategory: {},
		serviceCategoryies:[
			{
				name: "Application Development",
				catId: "applications",
				thumb: require('../../assets/thumbs/ep_thumb.jpg')
			},
			{
				name: "Geospatial Services",
				catId: "geospatials",
				thumb: require('../../assets/thumbs/Geo_spatial_sol_thumb.jpg')
			},
			{
				name: "Product Engineering Services",
				catId: "product_engineerings",
				thumb: require('../../assets/thumbs/product_eng_thumb.jpg')
			},
			{
				name: "Technology",
				catId: "technology",
				thumb: require('../../assets/thumbs/tech_thumb.jpg')
			}
		],
	},

	mutations: {
		setActiveService (state, payload) {
			state.activeService = payload
		},
		setActiveServiceCategory (state, payload) {
			state.activeServiceCategory = payload
		}
	},

	actions: {

		setActiveService ({commit}, payload) {
			commit('setActiveService',payload)
		},

		setActiveCategory ({commit}, payload) {
			commit('setActiveServiceCategory',payload)
		}
	},

	getters: {
		getActiveService (state) {
			return state.activeService
		},

		getActiveServiceCategory (state) {
			return state.activeServiceCategory
		},

		getServices (state) {
			return (catId) => {
				if (catId) {
					return state.services.filter(s => s.category === catId)
				} else {
					return state.services
				}
			}
		},

		getServiceCategories (state) {
			return state.serviceCategoryies
		},

	}
}