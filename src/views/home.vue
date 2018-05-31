<template>
		<div  class="nfront-container landing-page">
			<div class="page-detail vs-section">
			    <div class="page-banner" :style="'height:' + this.breakpoint.height + 'px'">
			    	<div class="banner-background" :style="'height:' + this.breakpoint.height + 'px'">
						<div class="banner-background-image"></div>
						<video id="mainVideo" autoplay="" loop="">
	                        <source src="@/assets/Blueplanet.mp4">
	                    </video>
	                    <span class="overlay-mask"></span>
					</div>
					<div class="banner-content d-flex align-items-center">
						<div class="home-text-card" >
							<div class="logo-text">
								<h1 class="title">Naico ITS</h1>
								<div class="sub-title">TECHNOLOGY SOLUTIONS</div>
							</div>
							<div class="card-action">
								<a href="" class="btn btn-outline-light">View more 
								 <i class="icon-right-open"></i></a>
							</div>
						</div>
					</div>
			    </div>	
			</div>
	    </div>
</template>

<script>
	export default {
		created () {
			this.$store.dispatch('setPageName', 'home-page')
		},

		computed: {
			mainEntryAnim () {
				return this.$store.getters.getMainEntryAnim
			}
		}
	}
</script>