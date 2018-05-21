<template>
  <div id="app">
   <main>
      <ul class="demo-nav">
        <li><router-link to="/hor">Hor scrolls</router-link></li>
        <li><router-link to="/ver">Ver scrolls</router-link></li>
      </ul>
      <router-link to="/" class="close" title="close">X</router-link>
      <router-view></router-view>
   </main> 
  </div>
</template>
<style>
  .demo-nav
  {
    list-style: none;
    padding:0px;
    margin:0;
    display: flex;
    align-items:center;
    justify-content: space-around;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    width:100%;
  }

  .demo-nav li
  {
    
      font-size: 2vw;
    
  }
  .close{
    position: fixed;
    z-index: 2;
    font-size: 2vw;
    right: 20px;
    top: 20px;
    text-decoration: none;
  }
</style>
<script>
import {scrollPaneX, scrollPaneY} from './virtualscroll/scrollpane'

export default {
  name: 'App',
  mounted () {
    // let hs = scrollPaneX(document.querySelector('.horizontal-scroll-container'), null, null)
    // hs.on()
    // window.addEventListener('resize', () => {
    //   hs.refresh()
    // })
  }
}
</script>

