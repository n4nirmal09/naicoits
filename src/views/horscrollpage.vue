<template>
	<section class="horizontal-scroll-container">
        <div class="inner-wrapper flex-grid nav-grid">
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
	import {scrollPaneX} from '@/virtualscroll/scrollpane'
	export default {
		mounted () {
			let hs = scrollPaneX(this.$el, null, null)
		    hs.on()
		    window.addEventListener('resize', () => {
		      hs.refresh()
		    })
		}
	}
</script>