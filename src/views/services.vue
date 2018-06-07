<template>
	<div class="nfront-container service-page">
		<n-h-scroll :off="scrollOff">
			<template slot="content">
		        <div class="nav-hor-grid bg-primary">
		          <cta-link-card
		          v-for="serviceCategory in serviceCategories"
		          :key="serviceCategory.catId"
		          :link="'/services/' + serviceCategory.catId"
		          :image="serviceCategory.thumb"
		          :title="serviceCategory.name"
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
			serviceCategories () {
				return this.$store.getters.getServiceCategories
			}
		}
	}
</script>