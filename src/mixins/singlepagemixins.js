export default {
	data () {
		return {
				scrollOff: false
			}
	},
	mounted () {
		this.$nextTick(() => {
			new TimelineMax({
				onComplete: () => {
					if(this.select('.banner-background',this.$el)){
						this.select('.banner-background',this.$el).classList.remove('transitioning')
					}
					this.scrollOff = false
				}
			})
			.add(this.shutterAnimation())
		})
	},

	beforeRouteLeave (to, from, next) {
		this.scrollOff = true
		new TimelineMax({
			onComplete () {
				next()
			}
		})
		.add(this.shutterCloseAnimation())

	},

	methods: {
		shutterAnimation () {
			this.scrollOff = true
			let shutter = this.selectAll('.shutter ', this.$el),
				overlayShutter = this.selectAll('.overlay-shutter ', this.$el),
				pageLogo = this.select('.page-logo ', this.$el),
				pageDetails = this.selectAll('.page-head-article>*', this.$el),
				pageBg = this.select('.banner-background', this.$el),
				tl = new TimelineMax()

				TweenLite.set(pageLogo,{x:'-50%', y:'-50%'})

				tl.from(pageLogo, 0.5, {
					y: '+=100',
					autoAlpha: 0,
					ease:Power3.easeInOut
				})
				.to(pageLogo, 0.5, {
					y: '-=100',
					autoAlpha: 0,
					ease:Power3.easeInOut
				})
				.to([shutter[0],shutter[2]],1,{
					height: 50,
					ease:Power4.easeInOut
				},'shutter')
				.to([shutter[1],shutter[3]],1,{
					width: 50,
					ease:Power4.easeInOut
				},'shutter')
				.to(shutter,0.5,{
					height:0,
					width:0,
					ease:Power2.easeIn
				})
				.staggerFrom(pageDetails,0.5,{
					y: 100,
					autoAlpha: 0,
					ease:Power4.easeInOut
				},0.1,'shutter+=0.5')
				.set(overlayShutter,{autoAlpha: 0})

				return tl
		},

		shutterCloseAnimation () {
			this.scrollOff = true
			let scrollContainer = this.select('.vertical-scroll-container ', this.$el),
				shutter = this.selectAll('.shutter ', this.$el),
				overlayShutter = this.selectAll('.overlay-shutter ', this.$el),
				pageDetails = this.selectAll('.page-head-article>*', this.$el),
				pageLogo = this.select('.page-logo ', this.$el),
				pageBg = this.select('.banner-background', this.$el),
				tl = new TimelineMax()

				TweenLite.set([shutter[0],shutter[2]],{width: '100%'})
				TweenLite.set([shutter[1],shutter[3]],{height: '100%'})
				TweenLite.set(overlayShutter,{autoAlpha: 1})

				tl.to(scrollContainer, 1, {y: 0,ease:Power3.easeInOut})
				.to(pageBg, 0.2, {y: 0, overwrite:"all", ease:Linear.easeNone},0)
				.staggerTo(pageDetails,0.5,{
					y: 100,
					autoAlpha: 0,
					ease:Power4.easeIn
				},-0.1)
				.to([shutter[0],shutter[2]],1,{
					height: '100%',
					ease:Power4.easeInOut
				},'shutter')
				.to([shutter[1],shutter[3]],1,{
					width: '100%',
					ease:Power4.easeInOut
				},'shutter')

				return tl
		}
	}
}