export default {
	state: {
		pageName: '',
		mainEntryAnim: false,
		scrollTargetY: 0
	},

	mutations: {
		setPageName (state, payload) {
			state.pageName = payload
		},

		setScrollTargetY (state, payload) {
			state.scrollTargetY = payload
		},

		setMainEntryAnim (state, payload) {
			state.mainEntryAnim = payload
		}
	},

	actions: {
		setPageName ({commit}, payload) {
			commit('setPageName', payload)
		},

		setMainEntryAnim ({commit}, payload) {
			commit('setMainEntryAnim', payload)
		},

		setScrollTargetY ({commit}, payload) {
			commit('setScrollTargetY', payload)
		}
	},

	getters: {
		getPageName (state) {
			return state.pageName
		},
		
		getMainEntryAnim (state) {
			return state.mainEntryAnim
		},
		
		getScrollTargetY (state) {
			return state.scrollTargetY
		}
	}
}