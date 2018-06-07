export default {
	data () {
			return {
				scrollOff: false
			}
	},

	beforeRouteEnter (to, from, next) {
	  const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
	  next(vm => {
	    TweenLite.from(vm.select('.horizontal-scroll-container',vm.$el),1,{
	    		//y: 100,
				scale:1.5,
				onComplete () {
					
				}
			})
	  })
	},

	beforeRouteLeave (to, from, next) {
		this.scrollOff = true
		const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        if(toDepth > fromDepth || to.path === "/") {
        	TweenLite.to(this.select('.horizontal-scroll-container',this.$el),0.5,{
				scale:1.2,
				onComplete () {
					
				}
			})
        } 
			
		next()
	},

	methods: {
		transitionTo (url, el) {
			this.scrollOff = true
			const tl = new TimelineMax({onComplete: () => {
				//this.$router.push(url)
			}})
			const innerWidth = this.breakpoint.width
			const offsetLeft = el.offsetLeft
			el.classList.remove('hover-enabled')
			el.classList.add('card-transition')
			tl.staggerTo(this.selectAll('.title>span',el),0.3,{
				y:0,
				overwrite:"all",
				autoAlpha:0,
				ease: Power1.easeIn
			},-0.1)
			.to(el,0.4,{
				width: innerWidth,
				ease: Power3.easeIn
			},0.4)
			.to(this.select('.horizontal-scroll-container',this.$el),0.4,{
				x: -offsetLeft,
				ease: Power3.easeIn
			},0.4)
			.add(() => {
				this.$router.push(url)
			},0.8)
			
		}
	}
}