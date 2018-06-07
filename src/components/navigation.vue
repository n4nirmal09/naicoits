<template>
	<nav id="main-navigation">
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

<script>
	export default {
		mounted () {
			this.select('#naico-web').classList.add('nav-on')
			TweenLite.set(this.select('.nav-list', this.$el), {autoAlpha: 1})
			this.entryAnim()
		},

		beforeDestroy () {
			this.select('#naico-web').classList.remove('nav-on')
		},

		methods: {
			entryAnim () {
				TweenMax.staggerFrom(this.selectAll('.nav-item', this.$el),0.5,{
					y: 50,
					autoAlpha: 0
				},0.05)
			},

			closeAnim () {
				return	TweenMax.staggerTo(this.selectAll('.nav-item', this.$el),0.5,{
							y: 50,
							autoAlpha: 0
						},-0.05)
			},

			navigateTo (url) {
				this.$emit('closeNav')
				new TimelineMax({
					onComplete: () => {
						this.$router.push(url)
					}
				})
				.add(this.closeAnim())
				
			}
		}
	}
</script>