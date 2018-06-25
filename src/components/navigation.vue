<template>
	<nav id="main-navigation">
		<div class="nav-bg">
			<svg id="nav-menu-bg" xmlns="http://www.w3.org/2000/svg" viewBox="270 197 1151 400">
			  <defs>
			 	<mask id="text-nav-mask" x="0" y="0" width="100%" height="100%" >
			 		<g id="mask-group" stroke="#fff" stroke-width="60">
					    <path id="poda" class="st1" d="M320.5 561.5l21-296.5 42.5-1 66.5 253 25.5-2.5L551 263l41.5 1 7.5 263.5 3.5 31"/>
					    <path class="st1" d="M872 515c-76.8 23.6-142 15-172-50-10.2-51.7 10.1-94.1 59-128 59.7 3.9 91.5 33.4 93 91l1 9-128-4.7"/>
					    <path class="st1" d="M1096.5 555V391.5c-6.5-23-20.7-41.4-48.5-51.5-34.6 3.1-64.1 21-91.5 45l-5.9 10.5-1.1-94 1.1 94 1.9 158.5"/>
					    <path class="st1" d="M1358.5 321l1.3 139.3 6.3 94.3-6.9-95L1316 514c-39.5 26.6-98.7 20.7-103.3-56.7l-1.3-152.7"/>
					</g>
			 	</mask>	
			  </defs>
			  <g stroke="#fff" stroke-width=5 id="text-nav-group">
			  	<path class="st0" d="M568.4 422.2c-1.8-39.9-4.1-88.2-3.7-129.9h-1.4c-10.1 37.7-23 79.4-36.7 118.5l-45 134.1H438l-41.3-132.2c-11.9-39.5-23-81.7-31.2-120.3h-.9c-1.4 40.4-3.2 89.5-5.5 131.8l-6.9 124.4h-52.8L320 239h74.4l40.4 124.4c11 36.3 20.7 73 28.5 107.4h1.4c8.3-33.5 18.8-71.6 30.8-107.9l42.7-124h73.5l17.9 309.5h-55.1l-6.1-126.2z"/>
			    <path class="st0" d="M726.8 452.5c1.4 40.4 33.1 57.9 68.9 57.9 26.2 0 45-3.7 62-10.1l8.3 39c-19.3 7.8-45.9 13.8-78.1 13.8-72.6 0-115.3-44.5-115.3-113 0-62 37.7-120.3 109.3-120.3 72.6 0 96.4 59.7 96.4 108.8 0 10.6-.9 18.8-1.8 23.9H726.8zm98.3-39.5c.5-20.7-8.7-54.6-46.4-54.6-34.9 0-49.6 31.7-51.9 54.6h98.3z"/>
			    <path class="st0" d="M923.8 391.5c0-25.7-.5-47.3-1.8-66.6h49.6l2.8 33.5h1.4c9.6-17.4 34-38.6 71.2-38.6 39 0 79.4 25.3 79.4 96v132.7h-56.5V422.2c0-32.1-11.9-56.5-42.7-56.5-22.5 0-38.1 16.1-44.1 33.1-1.8 5.1-2.3 11.9-2.3 18.4v131.3h-56.9l-.1-157z"/>
			    <path class="st0" d="M1386.6 481.5c0 26.6.9 48.7 1.8 67h-49.6l-2.8-34h-.9c-9.6 16.1-31.7 39-71.6 39-40.9 0-78.1-24.3-78.1-97.3V324.9h56.5v121.7c0 37.2 11.9 61.1 41.8 61.1 22.5 0 37.2-16.1 43.2-30.3 1.8-5.1 3.2-11 3.2-17.4V325h56.5v156.5z"/>
			  </g>
			  
			</svg>
		</div>
		<div class="nav-container h-100 d-flex align-items-center justify-content-center">
			<ul class="nav-list list-unstyled" style="opacity:0">
				<li class="nav-item"><span class="nav-link" @click.stop="navigateTo('/')">Home</span></li>
				<li class="nav-item">
					<span class="nav-link" @click.stop="navigateTo('/about')">About Us</span>
				</li>
				<li class="nav-item">
					<span class="nav-link" @click.stop="navigateTo('/services')">Services</span>
				</li>
				<li class="nav-item">
					<span class="nav-link" @click.stop="navigateTo('/cases')">Case Studies</span>
				</li>
				<li class="nav-item">
					<span class="nav-link" @click.stop="navigateTo('/products')">Products</span>
				</li>
				<li class="nav-item">
					<span class="nav-link" @click.stop="navigateTo('/contact')">Contact</span>
				</li>
			</ul>
		</div>


	</nav>
</template>

<style lang="scss">
	.nav-bg
	{
		position: absolute;
		left: 0;
		top:0;
		width: 100%;
		height: 100%;
		opacity: 0.2;
		#nav-menu-bg
		{
			display: block;
			width: 100%;
			height: 100%;
		}
	}
</style>

<script>
	export default {
		mounted () {
			this.select('#naico-web').classList.add('nav-on')
			TweenLite.set(this.select('.nav-list', this.$el), {autoAlpha: 1})
			this.entryAnim()
			this.pathPrepare()
		},

		beforeDestroy () {
			this.select('#naico-web').classList.remove('nav-on')
		},

		methods: {
			pathPrepare () {
				const maskTexts = this.selectAll('#text-nav-group path', this.$el)
    			maskTexts.forEach(text => {
    				text.style.strokeDasharray = text.getTotalLength() 
    				text.style.strokeDashoffset = text.getTotalLength()
    				text.dataset.strokeoffset = text.getTotalLength()
    			})
			},
			entryAnim () {
				let tl = new TimelineMax()
				tl.staggerTo(this.selectAll('#text-nav-group path', this.$el), 1, {
					strokeDashoffset: 0,
					ease: Linear.easeNone
				},0.05)
				.to(this.selectAll('#text-nav-group path', this.$el),0.5, {
					fill: '#fff'
				})
				.staggerFrom(this.selectAll('.nav-item', this.$el), 0.5,{
					y: 50,
					autoAlpha: 0
				},0.05, 0)
			},

			closeAnim () {
				let tl = new TimelineMax()
				tl.staggerTo(this.selectAll('#text-nav-group path', this.$el), 1, {
					cycle: {
						strokeDashoffset (i, el) {
							return  el.dataset.strokeoffset
						}
					},
					fill: 'none',
					ease: Linear.easeNone
				},-0.05)
				.staggerTo(this.selectAll('.nav-item', this.$el),0.5,{
							y: 50,
							autoAlpha: 0
						},-0.05,0)

				return tl
			},

			navigateTo (url) {
				new TimelineMax({
					onComplete: () => {
						this.$emit('closeNav')
						this.$router.push(url)
					}
				})
				.add(this.closeAnim())
				
			}
		}
	}
</script>