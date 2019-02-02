<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link :to="{ name: 'Index' }">
          <span class="nav-title">Nav smoothies</span>
        </router-link>
        <a href="" class="btn-floating btn-large halfway-fab pink">
          <router-link :to="{ name: 'AddSmoothie' }">
            <i class="material-icon">Add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
    }
  }
}
</script>

<style>
.navber nav {
  padding: 0 10px;
}
</style>

