<template>
	<header id="main-header">
		<transition name="fade">
			<navigation v-if="navigation" @closeNav="navigation = false"></navigation>
		</transition>
		<div class="header-container d-flex flex-row justify-content-between align-items-center">
			<div class="hamburger">
		      <button type="button" :class="{active: navigation}" @click.stop="navigation = !navigation">
		        <span></span>
		        <span></span>
		        <span></span>
		      </button>
		    </div>

		    <div id="main-logo">
		    	<router-link to="/">
		    		<img src="@/assets/logo.png" alt="Naico">
		    	</router-link>
		    </div>
		</div>
	</header>
</template>

<script>
	export default {
		data () {
			return {
				navigation: false
			}
		},

		methods: {
		}
	}
</script>