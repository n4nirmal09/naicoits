<template>
	<div id="main-entry-anim-canvas" class="entry-anim-canvas bg-primary" 
	:style="'height:' + breakpoint.height + 'px'">
	  
	  <div id="entry-top" class="entry-anim-panel col-top" style="transform:translateX(100%);">
	  	<div id="text-intel" style="opacity: 0" class="title">Intellegence</div>
	  </div>
	  <div id="entry-bottom" class="entry-anim-panel col-bottom" style="transform:translateX(-100%)">
	  	<div id="text-info" style="opacity: 0" class="title">Informations</div>
	  </div>

	  <div id="text-connect" class="title-connect" >
	  	<svg id="svg-text-connect" 
	  	viewBox="0 0 305 60"
	  	style="opacity:0"  width="400" height="80"  xmlns="http://www.w3.org/2000/svg">
	  	  <defs>
	  	  	<mask id="text-connect-mask-top" x="0" y="0" width="100%" height="100%" >
	  	  		<rect x="0" y="0" fill="#fff" width="100%" height="50%" />
	  	  	</mask>
	  	  	<mask id="text-connect-mask-bottom" x="0" y="0" width="100%" height="100%" >
	  	  		<rect x="0" y="30" fill="#fff" width="100%" height="50%" />
	  	  	</mask>
	  	  </defs>
		  <text x="0" y="42" class="text-1"  mask="url('#text-connect-mask-top')">Connecting</text>
		  <text x="0" y="42" class="text-2" mask="url('#text-connect-mask-bottom')">Connecting</text>
		</svg>
	  </div>
	  <!-- icon section-->
	  <div id="iconAnimationWindow"></div>
	</div>
</template>
<style>
	
</style>
<script>
	export default {
		mounted () {
			this.fadeIn(this.$el, 0.5, () => {
				this.mainTimeLine()
			})
		},

		beforeDestroy () {
		},

		methods: {
			// Icon Animation
			iconAnimation () {
				let animationWindow = this.select('#iconAnimationWindow'),    
		        animData = {
					wrapper: animationWindow,
					animType: 'svg',
					loop: false,
					prerender: true,
					autoplay: false,
					path: '/static/animdata/naico-logo-icon-animate.json',   
				}, anim

				anim = bodymovin.loadAnimation(animData)
				//anim.setSpeed(1)
				let iconTl = null
				let onDOMLoaded = (e) => {
				  let iconTl = new TimelineMax()
				  iconTl.to({frame: 0}, 2, {
				     frame: anim.totalFrames - 1,
				     onUpdate: function () {
				       anim.goToAndStop(Math.round(this.target.frame), true)
				     },
				     ease: Linear.easeNone,
				   })
				  .to(animationWindow,0.2,{scale:2, autoAlpha:0})
				}

				anim.addEventListener('DOMLoaded', onDOMLoaded)
			},

			// Split text anim
			splitTextAnim (t) {
				TweenLite.to(this.select(t),0.2,{autoAlpha: 1})
				let tl = new TimelineLite()
				let chars = this.splitWord(t)
				let originalText = chars
				let spans = this.selectAll(t + ">span")
				console.log(spans.forEach)
				spans.forEach((span, index) => {
					tl.from(span,0.2, {autoAlpha: 0}, index*0.1)
					.to({frame: 0},0.2,{
						frame: 6,
						onUpdate () {
							let text = chars[Math.floor(Math.random() * chars.length)]
							if( text !== originalText[index] ){
								span.innerHTML= text
							}
						},
						onComplete () {
							span.innerHTML = originalText[index]
						}
					}, index*0.1)
				})

				return tl

			},

			// Panel animation
			panelAnimation () {
				let panelTop = this.select('#entry-top'),
					panelBottom = this.select('#entry-bottom'),
					panelTextInfo = this.select('#text-info'),
					panelTextIntel = this.select('#text-intel'),
					panelTextConnect = this.select('#text-connect'),
					tl = new TimelineMax()

					tl.to(panelTop,0.8,{
						x:0,
						ease: Power4.easeInOut
					})
					.to(panelTextIntel,10,{
						x:'-100%'
					},0.3)
					.add(this.splitTextAnim('#text-intel'),0.3)
					.to(panelBottom,0.8,{
						x:0,
						ease: Power4.easeInOut
					},0.5)
					.to(panelTextInfo,10,{
						x:'100%'
					},0.5)
					.add(this.splitTextAnim('#text-info'),0.5)
					.from(panelTextConnect,0.2,{x:'-=100'}, 0)
					.add(() => {
						panelTextConnect.classList.add('reveal-connect')
					},0)
					.add(() => {
						panelTextInfo.classList.add('remove-title')
					},2.8)
					.add(() => {
						panelTextIntel.classList.add('remove-title')
					},3)
					.add(() => {
						panelTextConnect.classList.add('remove-connect')
					},3.1)
					.to(panelBottom,1,{height:"100%",ease: Power4.easeIn},2.9)

					return tl
			},

			// Main animation
			mainTimeLine () {
				let mainTl = new TimelineMax({paused: false})
				mainTl.add(this.panelAnimation())
					  //.add(this.splitTextAnim('#text-intel'))
					  .add(this.iconAnimation,3.5)
					  .add(this.fadeOut(this.$el,0.5,() => {
					  	this.$store.dispatch('setMainEntryAnim', false)
					  }),5.8)

				//mainTl.seek(1.5)	  
			}
		}
	}
</script>