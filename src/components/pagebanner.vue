<template>
	<div class="page-detail">
		<div v-if="shutter" class="overlay-shutter">
			<div class="page-logo">
				<img src="@/assets/logo.png" alt="naico-logo">
			</div>
			<div class="page-masks">
				<span class="shutter bg-primary"></span>
				<span class="shutter bg-primary"></span>
				<span class="shutter bg-primary"></span>
				<span class="shutter bg-primary"></span>
			</div>
		</div>
		<div class="page-banner" :style="'height:' + this.breakpoint.height + 'px'">
			<div class="banner-background transitioning" 
			:style="'height:' + this.breakpoint.height + 'px'">
				<div class="banner-background-image" v-if="bg" v-bgimage= "bg" ></div>
				<video v-if="videoLinks" id="mainVideo" muted autoplay loop="">
		            <source v-for="video in videoLinks" :src="video.url">
		        </video>
		        <span class="overlay-mask"></span>
			</div>
			<div class="banner-content d-flex align-items-center">
				<slot name="content"></slot>
			</div>
		</div>	
	</div>
</template>

<script>
	export default {
		data () {
			return {
				scrollThreshholdY: 0,
				scrollThreshholdX: 0
			}
		},
		props: ['videoLinks','bg','parallax__X','parallax__Y','shutter'],

		mounted () {
			let vid = this.select('#mainVideo',this.$el)
			// let promise = vid.play()
			// if (promise !== undefined) {
			//   promise.then(_ => {
			//     // Autoplay started!
			//   }).catch(error => {
			//   	vid.play()
			//     // Autoplay was prevented.
			//     // Show a "Play" button so that user can start playback.
			//   });
			//}
			let bg = this.select('.banner-background', this.$el)
			TweenLite.set(bg,{x: 0,y: 0})

			if(this.parallax__Y) {

				Event.$on('threshholdThrowY', (t) => {

					this.scrollThreshholdY = t
				})
			}

			if(this.parallax__X) {
				Event.$on('threshholdThrowX', (t) => {
					this.scrollThreshholdX = t
				})
			}

			
		},

		watch: {
			'scrollThreshholdY' (val) {
				//console.log(this.scrollThreshholdX + ' ' + this.scrollThreshholdY)
				let bg = this.select('.banner-background', this.$el)
				TweenLite.set(bg,{y: val * 100})
				
			},

			'scrollThreshholdX' (val) {
				//console.log(this.scrollThreshholdX + ' ' + this.scrollThreshholdY)
				let bg = this.select('.banner-background', this.$el)
				TweenLite.set(bg,{x: val * 600})
				
			}
		}
	}
</script>