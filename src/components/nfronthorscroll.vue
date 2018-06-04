<template>
	<div class="vs-section bg-primary">
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
				hs: null
			}
		},
		mounted () {
			this.hs = scrollPaneX(this.select('.horizontal-scroll-container', this.$el), null, null)
			const container = this.select('.horizontal-scroll-container', this.$el)
			if( container.clientWidth > window.innerWidth) {
				const offset = container.clientWidth - window.innerWidth
				const tl = new TimelineMax({onComplete: () => {
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
				this.hs.on()
				this.hoverEnableAfterAnim()
			}
		    
		    window.addEventListener('resize', () => {
		      this.hs.refresh()
		    })
		},
		methods: {
			hoverEnableAfterAnim () {
				const cards = this.selectAll('.cta-link-card', this.$el)
				cards.forEach(card => card.classList.add('hover-enabled'))
			}
		},
		watch: {
			'off' (val) {
				val ? this.hs.off() : this.hs.on()
			}
		}
	}
</script>