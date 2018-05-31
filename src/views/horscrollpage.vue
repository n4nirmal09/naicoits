<template>
	<div class="vs-section">
		<section class="horizontal-scroll-container">
	        <div class="inner-wrapper flex-grid nav-grid">
	          <div @click="navigateTo('/ver')"> section 1</div>
	          <div @click="navigateTo('/ver')"> section 2 </div>
	          <div @click="navigateTo('/ver')"> section 4 </div>
	          <div @click="navigateTo('/ver')"> section 5 </div>
	          <div @click="navigateTo('/ver')"> section 6 </div>
	          <div @click="navigateTo('/ver')"> section 7 </div>
	        </div>
	    </section>
	</div>
</template>

<script>
	import {scrollPaneX} from '@/virtualscroll/scrollpane'
	export default {
		created () {
			this.$store.dispatch('setPageName','listing-page')
		},
		mounted () {
			let hs = scrollPaneX(this.select('.horizontal-scroll-container', this.$el), null, null)
		    hs.on()
		    window.addEventListener('resize', () => {
		      hs.refresh()
		    })
		},

		methods: {
			navigateTo (url) {
				this.$router.push(url)
			}
		}
	}
</script>