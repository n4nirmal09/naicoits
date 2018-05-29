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
			},

			fadeEase: "Power1.easeOut"
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
		},

		fadeIn (o, t, c) {
			let time = t || 0.5
			return TweenLite.from(o,time,{autoAlpha: 0, 
					onComplete () {
						if(c) c()
					}})
		},

		fadeOut (o, t, c) {
			let time = t || 0.5
			return TweenLite.to(o,time,{autoAlpha: 0, 
					onComplete () {
						if(c) c()
					}})
		},

		splitWord (w) {
			let content = document.querySelector(w)
			var chars = content.innerHTML.split("")
			content.innerHTML = "<span>" + content.innerHTML.split("").join("</span><span>") + "</span>"
			return chars
		},

		shuffleArray (array) {
		    for (var i = array.length - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var temp = array[i];
		        array[i] = array[j];
		        array[j] = temp;
		    }
		    return array;
		}
	}
}