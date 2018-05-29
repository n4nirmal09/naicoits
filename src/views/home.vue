<template>
	<div class="text-primary">Naico landing page</div>
</template>

<script>
	export default {
		created () {
			this.$store.dispatch('setMainEntryAnim', true)
		}
	}
</script>