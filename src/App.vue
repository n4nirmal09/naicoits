<template>
  <div id="app">
   <!-- Main Site loader long -->
   <entry-anim v-if="mainEntryAnim"></entry-anim>
   <main id="main-content-wrapper">
      <router-view></router-view>
   </main> 
  </div>
</template>
<style>
  
</style>
<script>
export default {
  name: 'App',
  mounted () {
  },

  computed: {
    mainEntryAnim () {
      return this.$store.getters.getMainEntryAnim
    }
  }
}
</script>

