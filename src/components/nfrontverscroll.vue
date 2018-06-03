<template>
    <div class="vs-section">
    	<section class="vertical-scroll-container">
	        <slot name="content"></slot>
	    </section>
    </div>
</template>
<script>
	import {scrollPaneY} from '@/virtualscroll/scrollpane'

	export default {
		mounted () {
			//console.log(document.getElementById('section-2').offsetTop)
			let vs = scrollPaneY(this.select('.vertical-scroll-container',this.$el), null,null)
		    vs.on()
		    //this.$el.getElementById('section')
		    window.addEventListener('resize', () => {
		      vs.refresh()
		    })
		}
	}
</script>