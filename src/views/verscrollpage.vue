<template>
    <div class="vs-section">
    	<section class="vertical-scroll-container">
	        <div class="inner-wrapper section-grid">
	          <div> section 1 {{ breakpoint.width + ' x ' + breakpoint.height }} <span id="animate">animate this</span></div>
	          <div> section 2 </div>
	          <div id="section-2" class="reveal-contents"> section 3 <span id="animate2" style="opacity: 0">animate this</span></div>
	          <div> section 4 </div>
	          <div> section 5 </div>
	          <div> section 6 </div>
	        </div>
	    </section>
    </div>
</template>
<style>
	
</style>
<script>
	import {scrollPaneY} from '@/virtualscroll/scrollpane'

	export default {
		created () {
			this.$store.dispatch('setPageName','single-page')
		},

		data () {
			return {
				animate: true
			}
		},
		mounted () {
			//console.log(document.getElementById('section-2').offsetTop)
			let vs = scrollPaneY(this.select('.vertical-scroll-container',this.$el), null,null)
		    vs.on()
		    //this.$el.getElementById('section')
		    window.addEventListener('resize', () => {
		      vs.refresh()
		    })
		},

		computed: {
			scrollTargetY () {
				return this.$store.getters.getScrollTargetY
			}
		},

		watch: {
			scrollTargetY (val) {
				
				if (val > this.select('#section-2',this.$el).offsetTop) {
					if(this.animate){
						TweenLite.to('#animate2',1,{autoAlpha: 1})
						this.animate = false
					}
				 }
			}
		}
	}
</script>