<template>
		<div  class="nfront-container landing-page bg-primary">
			<div class="page-detail vs-section">
			    <page-banner :videoLinks="[{url: require('../assets/Blueplanet.mp4')}]">
			    	<template slot='content'>
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
			    	</template>
			    </page-banner>	
			</div>
	    </div>
</template>

<script>
	export default {
		created () {
			this.$store.dispatch('setPageName', 'home-page')
		},

		mounted () {
			TweenMax.staggerFrom(this.selectAll('.title,.sub-title,.card-action',this.$el),0.5,{
				y:100,
				autoAlpha:0,
				delay:1,
				ease: Power3.easeOut
			}, 0.1)
		},

		beforeRouteLeave (to, from, next) {
	        TweenMax.staggerTo(this.selectAll('.title,.sub-title,.card-action',this.$el),0.5,{
					x:-100,
					autoAlpha: 0,
					ease: Power3.easeIn
				},0.1)
	        TweenMax.delayedCall(0.5,() => {
	        	next()
	        })
		},

		computed: {
			mainEntryAnim () {
				return this.$store.getters.getMainEntryAnim
			}
		}
	}
</script>