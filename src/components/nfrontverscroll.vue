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
		props: ['off'], 
		data () {
			return {
				vs: null,
				resize: null
			}
		},
		mounted () {
			//console.log(document.getElementById('section-2').offsetTop)
			this.vs = scrollPaneY(this.select('.vertical-scroll-container',this.$el), null, (t) => {
				Event.$emit('threshholdThrowY', t)
			})
		    this.vs.on()
		    //this.$el.getElementById('section')
		},
		methods: {
			refresh () {
				clearTimeout(this.resize)
				this.resize = setTimeout(this.vs.refresh, 200)
			}
		},
		watch: {
			'off' (val) {
				val ? this.vs.off() : this.vs.on()
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