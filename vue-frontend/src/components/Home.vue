<template>
  <div class="main-wrapper">
    <!-- PART 1: Pass in a "complete" prop here -->
    <Instructions complete="true"/>
    <!-- PART 4: Modify the Show component to accept all of these props -->
    <div>
    <Show
      v-for="show in shows"
      :key="show.id"
      :id="show.id"
      :name="show.name"
      :episodes_seen="show.episodes_seen"
    />
    </div>
    <div class="add-show-wrapper">
      <p class="text-for-new-show"> Please type the name of the show you wish to add below</p>
      <input type="text" placeholder="Show name" v-model="show_name">
      <p>the message is {{show_name}} </p>
      <button type= "button" v-on:click="add_to_shows" class="addShow">Add show </button>
    </div>

  </div>
</template>

<script>
import Instructions from "./Instructions.vue";
import Show from "./Show.vue";

export default {
  components: {
    Instructions,
    Show
  },
  data() {
    return {
      show_name: '',
      shows: [
        { id: 1, name: "Game of Thrones", episodes_seen: 0 },
        { id: 2, name: "Naruto", episodes_seen: 220 },
        { id: 3, name: "Black Mirror", episodes_seen: 3 }
      ]
    };
  },

  methods: {
    add_to_shows(e) {
        this.shows.push({id:(this.shows.length + 1), name: this.show_name, episodes_seen: 0});
      },
  }
};
</script>

<style>
.addShow{
  background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
  color:white;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 50px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  
}

.main-wrapper{
  background-color: #0F1624;
}

.add-show-wrapper{
   box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  height: 50vh;
  width: 100vh;
  margin-top: 50px;
  margin-left: 300px;
}
.text-for-new-show{
  padding-top: 30px;
}
</style>


