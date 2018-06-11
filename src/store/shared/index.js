export default {
	state: {
		pageName: '',
		mainEntryAnim: false,
		scrollTargetX: 0,
		scrollTargetY: 0
	},

	mutations: {
		setPageName (state, payload) {
			state.pageName = payload
		},

		setScrollTargetY (state, payload) {
			state.scrollTargetY = payload
		},

		setScrollTargetX (state, payload) {
			state.scrollTargetX = payload
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

		setScrollTargetX ({commit}, payload) {
			commit('setScrollTargetX', payload)
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
		
		getScrollTargetX (state) {
			return state.scrollTargetX
		},
		
		getScrollTargetY (state) {
			return state.scrollTargetY
		}
	}
}