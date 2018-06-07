<template>
	<div class="nfront-container products-page">
		<n-h-scroll :off="scrollOff">
			<template slot="content">
		        <div class="nav-hor-grid bg-primary">
		          <cta-link-card
		          v-for="product in products"
		          :key="product.productId"
		          :link="'/products/' + product.catId"
		          :image="product.thumb"
		          :title="product.name"
		          @goTo="transitionTo"></cta-link-card>
		        </div>
			</template>
		</n-h-scroll>
	</div>
</template>

<script>
	import transitionMixins from "@/mixins/hornavmixins"
	export default {
		mixins: [transitionMixins],
		methods: {

		},

		computed: {
			products () {
				return this.$store.getters.getProducts
			}
		}
	}
</script>