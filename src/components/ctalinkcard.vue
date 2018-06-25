<template>
	<div @click="navigateTo(link)" class="cta-link-card" 
	@mouseover="mouseOn" @mouseleave="mouseOff"
	:style="'height:' + breakpoint.height + 'px'">
		<div class="cta-bg" v-if="image" 
		v-bgimage="image"></div>
		<span class="overlay-mask"></span>
		
		<div class="cta-detail">
			<article>
				<h2 class="title" v-html="splitWord(title)"></h2>
			    <span class="btn btn-outline-light"
			    v-if="!parent">View more <i class="icon-right-open"></i></span>
			</article>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['link', 'image', 'title', 'subText', 'parent'],
		data () {
			return {
				hovering: true
			}
		},

		methods: {
			navigateTo (url) {
				this.$emit("goTo",url,this.$el)
				//this.$router.push(url)
			},

			mouseOn () {
				if(this.$el.classList.contains('hover-enabled') && !Modernizr.touchevents && this.hovering)
				{

					this.$el.classList.add('hovering')
					TweenMax.staggerTo(this.selectAll('.title>span',this.$el),0.3,{
						y:-100,
						delay:0.1,
						ease: Power2.easeInOut
					},0.1)
				}

				this.hovering = false
			},

			mouseOff () {
				if(!Modernizr.touchevents) {
					this.$el.classList.remove('hovering')
					TweenMax.staggerTo(this.selectAll('.title>span',this.$el),0.3,{
						y:0,
						overwrite:"all",
						ease: Power2.easeInOut
					},-0.1)
				}

				this.hovering = true
			}
		}
	}
</script>