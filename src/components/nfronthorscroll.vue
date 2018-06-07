<template>
	<div class="vs-section">
		<section class="horizontal-scroll-container">
	        <slot name="content"></slot>
	    </section>
	</div>
</template>

<script>
	import {scrollPaneX} from '@/virtualscroll/scrollpane'
	export default {
		props: ['off'],
		data () {
			return {
				hs: null,
				resize: null
			}
		},
		mounted () {
			this.hs = scrollPaneX(this.select('.horizontal-scroll-container', this.$el), null, (t) => {
				Event.$emit('threshholdThrowX', t)
				
			})
			const container = this.select('.horizontal-scroll-container', this.$el)
			if( container.clientWidth > window.innerWidth) {
				const offset = container.clientWidth - window.innerWidth
				const tl = new TimelineMax({onComplete: () => {
					if(this.select('.banner-background',this.$el)){
						this.select('.banner-background',this.$el).classList.remove('transitioning')
					}
					
					this.hs.on()
					this.hoverEnableAfterAnim()
				}})
				tl.fromTo(container,0.5,{
					x: -(offset - 200 )
					},{
					x: -offset,
					//delay: 0.2
					ease: Power3.easeOut
					})
				.to(container,1,{
					x:0,
					ease: Power3.easeInOut
				})

			} else {
				if(this.select('.banner-background',this.$el)){
						this.select('.banner-background',this.$el).classList.remove('transitioning')
				}
				this.hs.on()
				this.hoverEnableAfterAnim()
			}
		},
		methods: {
			hoverEnableAfterAnim () {
				const cards = this.selectAll('.cta-link-card', this.$el)
				cards.forEach(card => card.classList.add('hover-enabled'))
			},

			refresh () {
				clearTimeout(this.resize)
				this.resize = setTimeout(this.hs.refresh, 200)
			}
		},
		watch: {
			'off' (val) {
				val ? this.hs.off() : this.hs.on()
			},
			'breakpoint.height' (val) {
				this.refresh()
			},
			'breakpoint.width' (val) {
				this.refresh()
			}
		}
	}
</script>