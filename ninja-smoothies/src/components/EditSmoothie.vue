<template>
  <div class="edit-smoothie container">
    <h2>edit {{ this.$route.params.smoothie_slug }}</h2>
    <h2>aaa</h2>
    <!-- <form @submit.prevent="EditSmoothie">
      <div class="field-title">
        <label for="title">smoothie Title:</label>
        <input type="text" name="title" v-model="smoothie.title">
      </div>
      <div v-for="(ing, index) in smoothie.ingredients" :key="index" class="field">
        <lavel for="ingredients">Ingredient:</lavel>
        <input type="text" name="ingredients" v-model="smoothie.ingredients[index]">
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add ingredient:</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Update Smoothie</button>
      </div>
    </form> -->
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'EditSmoothie',
  data() {
    return {
      smoothie: null
      // another: null,
      // feedback: null
    }
  },
  // methods: {
  //   EditSmoothie() {
  //     // console.log(this.smoothie.title, this.smoothie.ingredient)
  //   },
  //   addIng() {
  //     if (this.another) {
  //       this.smoothie.ingredients.push(this.another)
  //       this.another = null
  //       this.feedback = null
  //     } else {
  //       this.feedback = "You must enter a value to add ingredients"
  //     }
  //   },
  //   deleteIng(ing) {
  //     this.smoothie.ingredients = this.smoothie.ingredients.filter( ingredient => {
  //       return ingredient != ing
  //     })
  //   }
  // },
  created() {
    let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        let smoothie = doc.data()
        this.smoothie.id = doc.id
      })
    })
  }
}
</script>

<style scoped>
.edit-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.edit-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.edit-smoothie .field {
  margin: 20px auto;
  position: relative;
}
.edit-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaaaaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
