<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link to="">
          <span class="nav-title">Nav smoothies</span>
        </router-link>
        <a href="" class="btn-floating btn-large halfway-fab pink">
          <router-link to="">
            <i class="material-icon">Add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'Navbar',
  data() {
    return {

    }
  },
  methods: {

  },
  created() {
    //fetch data from firestore
    db.collection('smoothies').get().
    then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.data(), doc.id)
        let smoothie = doc.data()
        smoothie.id = doc.id
        this.smoothies.push
      })
    })
  }
}
</script>

<style>
.navber nav {
  padding: 0 10px;
}
</style>

