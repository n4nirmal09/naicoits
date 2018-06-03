<template>
	<div id="main-footer">
		<div class="footer-container d-flex flex-row justify-content-between align-items-center">
			<ul class="social-share list-unstyled d-flex flex-row">
				<li>
					<a href="" class="btn btn-outline-light fab">
						<i class="icon-facebook"></i>
					</a>
				</li>
				<li>
					<a href="" class="btn btn-outline-light fab">
						<i class="icon-twitter"></i>
					</a>
				</li>
				<li>
					<a href="" class="btn btn-outline-light fab">
						<i class="icon-linkedin"></i>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		mounted () {
			TweenMax.staggerFrom(this.selectAll('.social-share>li', this.$el),0.5,{
				x: -50,
				autoAlpha: 0,
				delay:1.5,
				ease: Power3.easeOut
			},0.1)
		},
	}
</script>