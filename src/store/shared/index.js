export default {
	state: {
		scrollTargetY: 0
	},

	mutations: {
		setScrollTargetY (state, payload) {
			state.scrollTargetY = payload
		}
	},

	actions: {
		setScrollTargetY ({commit}, payload) {
			commit('setScrollTargetY', payload)
		}
	},

	getters: {
		getScrollTargetY (state) {
			return state.scrollTargetY
		}
	}
}