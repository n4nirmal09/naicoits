export default {
	state: {
		mainEntryAnim: false,
		scrollTargetY: 0
	},

	mutations: {
		setScrollTargetY (state, payload) {
			state.scrollTargetY = payload
		},

		setMainEntryAnim (state, payload) {
			state.mainEntryAnim = payload
		}
	},

	actions: {
		setMainEntryAnim ({commit}, payload) {
			commit('setMainEntryAnim', payload)
		},

		setScrollTargetY ({commit}, payload) {
			commit('setScrollTargetY', payload)
		}
	},

	getters: {
		getMainEntryAnim (state) {
			return state.mainEntryAnim
		},
		
		getScrollTargetY (state) {
			return state.scrollTargetY
		}
	}
}