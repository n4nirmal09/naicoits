<template>
  <div id="naico-web" :class="pageName">
   <!-- Main header -->
   <transition name="fade">
     <main-header v-if="!mainEntryAnim"></main-header>
   </transition>
   <!-- Main Site loader long -->
   <entry-anim v-if="mainEntryAnim"></entry-anim>
   <!-- Main Content -->
   <main id="nfront-wrapper">
     <transition :name="pageTransition">
        <router-view v-if="!mainEntryAnim"></router-view>
     </transition>
   </main>
   <!-- Main Footer -->
   <transition  name="fade">
     <main-footer v-if="!mainEntryAnim"></main-footer>
   </transition>
  </div>
</template>
<style>
  
</style>
<script>
export default {
  name: 'App',
  data () {
    return {
      pageTransition: 'fade'
    }
  },
  created () {
    // Activatie main entry animation
    this.$store.dispatch('setMainEntryAnim', true)
  },
  computed: {
    mainEntryAnim () {
      return this.$store.getters.getMainEntryAnim
    },

    pageName () {
      return this.$store.getters.getPageName
    }
  },

  watch: {
    '$route' (to, from) {
      to.meta.transitionAnimation === "no-fade" ? this.pageTransition = "" : this.pageTransition = "fade"
    }
  }
}
</script>

