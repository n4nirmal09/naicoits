<template>
	<div class="nfront-container service-page service-cat-page">
		<n-h-scroll :off="scrollOff">
			<template slot="content">
		        <div class="nav-hor-grid bg-primary">
		          <cta-link-card
		          class="parent-item"
		          :parent="true"
		          :image="parentCat.thumb"
		          :title="parentCat.name"></cta-link-card>

		          <cta-link-card
		          v-for="service in services"
		          :key="service.serviceId"
		          :link="'/services/' + service.category + '/' + service.serviceId"
		          :image="service.thumb"
		          @goTo="transitionTo"
		          :title="service.name"></cta-link-card>
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
			navigateTo (url) {
				this.$router.push(url)
			}
		},

		computed: {
			parentCat () {
				const catId = this.$route.params.catId
				return this.$store.getters.getServiceCategories(catId)
			},
			services () {
				return this.$store.getters.getServices(this.$route.params.catId)
			}
		}
	}
</script>