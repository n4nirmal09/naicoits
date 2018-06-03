<template>
	<div class="page-banner" :style="'height:' + this.breakpoint.height + 'px'">
		<div class="banner-background" :style="'height:' + this.breakpoint.height + 'px'">
			<div class="banner-background-image"></div>
			<video id="mainVideo" autoplay="" loop="">
	            <source v-for="video in videoLinks" :src="video.url">
	        </video>
	        <span class="overlay-mask"></span>
		</div>
		<div class="banner-content d-flex align-items-center">
			<slot name="content"></slot>
		</div>
	</div>	
</template>

<script>
	export default {
		props: ['videoLinks','bg','parallax']
	}
</script>