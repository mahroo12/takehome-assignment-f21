<template>
  <!-- PART 4: Add your code here -->
  <div class="show-box">
    <p>the show name is {{name}}</p>
    <p>the id is {{id}} </p>
    <Counter v-bind:initialCounter="episodes_seen" />
  </div>
</template>

<script>
// PART 4: Add your code here
import Counter from "./Counter.vue";
export default {
  components: {
    Counter
},
props: {id: Number, name: String, episodes_seen: Number},

data() {
    return {
      id: this.id,
      name: this.name,
      episodes_seen: this.episodes_seen
    };
  }
};
</script>

<style>
.show-box{
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  height: 50vh;
  width: 100vh;
  margin-top: 50px;
  margin-left: 300px;
}
</style>
