<template>
	<div class="nfront-container service-single-page">
		<n-v-scroll>
			<template slot="content">
				<div class="inner-wrapper section-grid">
		          <div> section 1 {{ breakpoint.width + ' x ' + breakpoint.height }} <span id="animate">animate this</span></div>
		          <div> section 2 </div>
		          <div id="section-2" class="reveal-contents"> section 3 </div>
		          <div> section 4 </div>
		          <div> section 5 </div>
		          <div> section 6 </div>
		        </div>
			</template>
		</n-v-scroll>
 	</div>
</template>