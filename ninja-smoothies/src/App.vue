<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Index from '@/components/Index'
import db from '@/firebase/init'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
