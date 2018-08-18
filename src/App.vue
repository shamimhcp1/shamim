<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>

  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      'navbar': Navbar,
      'my-footer': Footer
    }
  }

</script>

<style>

</style>
