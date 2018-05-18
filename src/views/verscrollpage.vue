<template>
	<section class="vertical-scroll-container">
        <div class="inner-wrapper section-grid">
          <div> section 1</div>
          <div> section 2 </div>
          <div> section 4 </div>
          <div> section 5 </div>
          <div> section 6 </div>
          <div> section 7 </div>
        </div>
    </section>
</template>

<script>
	import {scrollPaneY} from '@/virtualscroll/scrollpane'
	export default {
		mounted () {
			let vs = scrollPaneY(this.$el, null, null)
		    vs.on()
		    window.addEventListener('resize', () => {
		      vs.refresh()
		    })
		}
	}
</script>