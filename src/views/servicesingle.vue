<template>
	<div class="nfront-container service-single-page">
		<n-v-scroll :off="scrollOff" >
			<template slot="content">
				<!-- Banner Content -->
				<page-banner 
				:bg="require('../assets/Enterprise_AD_Innerpage_Banner.jpg')" 
				:shutter="true"
				:parallax__Y="true"
				>
			    	<template slot='content'>
			    		<div class="w-100 d-flex justify-content-center">
			    			<article class="page-head-article text-light col-lg-6 text-center p-3">
				    			<h1 class="page-title">
				    				Services Single Title
				    			</h1>
				    			<p>Ut voluptate nulla deserunt nostrud dolor consectetur amet occaecat in dolore mollit ex exercitation id dolore id cillum dolore. Lorem ipsum nostrud dolor non laboris velit culpa sed esse anim mollit exercitation duis laborum ut veniam reprehenderit. Lorem ipsum exercitation laboris eu magna ex quis ex quis in dolor cupidatat proident.</p>
				    		</article>
			    		</div>
			    	</template>
			    </page-banner>
			    <!-- The other section -->
			    <div style="height:100vh" class="bg-primary">
			    	<div class="container">
			    		<div class="row">
			    			<div class="col-sm-6">col-6</div>
			    		    <div class="col-sm-6">col-6</div>
			    		</div>
			    	</div>
			    </div>
			</template>
		</n-v-scroll>
 	</div>
</template>

<script>
	import SPmixins from "@/mixins/singlepagemixins"
	export default {
		mixins: [SPmixins]
	}
</script>