function debounce (func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			}
}

export default {
	created () {
		var resize = debounce(() => {
			this.breakpoint.width = window.innerWidth
			this.breakpoint.height = window.innerHeight
		}, 250);

		window.addEventListener('resize', resize)
	},
	data () {
		return {
			breakpoint: {
				width: window.innerWidth || 0,
				height: window.innerHeight || 0
			}
		}
	},

	methods: {
		select (s, o) {
			if (o) {
				return o.querySelector(s)
			} else {
				return document.querySelector(s)
			}
		},

		selectAll (s, o) {
			if (o) {
				return o.querySelectorAll(s)
			} else {
				return document.querySelectorAll(s)
			}
		}
	}
}