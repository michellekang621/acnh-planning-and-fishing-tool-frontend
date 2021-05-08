<template>
  <div>
    <div class="split left">
      <div class="left-container">
        <h1>Welcome {{ this.username }}!</h1>
        <p>You can either edit your list of goals to the right,</p>
        <p>Or you can search for more items here!</p>
        <md-button
          @click="$router.push({ name: 'search-items' }).catch((err) => {})"
          >Search Items!</md-button
        >
        <p>
          Or, if you're looking for information on creatures you can catch right
          now, feel free to use any of the tools below!
        </p>
        <md-button
          @click="$router.push({ name: 'fishing-tool' }).catch((err) => {})"
          >Fishing</md-button
        >
        <md-button
          @click="$router.push({ name: 'bugs-tool' }).catch((err) => {})"
          >Bugs</md-button
        >
        <md-button
          @click="
            $router.push({ name: 'sea-creatures-tool' }).catch((err) => {})
          "
          >Sea Creatures</md-button
        >
      </div>
    </div>
    <div class="split right">
      <h2 class="right-header-container">Here's your full list of goals:</h2>
      <div class="right-container">
        <div v-if="goals">
          <md-card
            v-for="goal in goals"
            :key="goal._id"
            class="goal-card-container"
          >
            <h2>{{ goal.title }}</h2>
            <md-button @click="$router.push(`/goal-details/${goal._id}`)"
              >Edit</md-button
            >
          </md-card>
        </div>
      </div>
      <div class="right-bottom-container">
          <md-field class="add-goal-input">
            <label>Add a new goal here!</label>
            <md-textarea md-autogrow v-model="newGoal"></md-textarea>
          </md-field>
          <md-button @click="addGoal()" class="add-goal-button"
            >Add Goal!</md-button
          >
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "profile",
  data: () => ({
    newGoal: null,
  }),
  computed: {
    ...mapState("user", {
      username: (state) => state.username,
      goals: (state) => state.goals,
    }),

    printUsername() {
      return this.username;
    },
  },
  methods: {
    ...mapActions("user", ["addGoalByUser"]),
    async addGoal() {
      this.addGoalByUser(this.newGoal);
    },
  },
};
</script>

<style scoped>
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  /* padding-top: 20px; */
}

/* Control the left side */
.left {
  left: 0;
  background-color: lightyellow;
}

/* Control the right side */
.right {
  right: 0;
  background-image: url("../assets/pattern-bgs/acnh-leaf-brown.png");
  background-position: center;
  background-size: cover;
  height: 100%;
}

.left-container {
  padding-top: 30%;
  padding-left: 5%;
  padding-right: 5%;
}

.right-container {
  /* margin-top: 3%; */
  /* padding-top: 5%; */
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 2%;
  margin-left: 5%;
  margin-right: 5%;
  /* background-color: white; */
}

.right-header-container {
  margin-top: 10%;
  background-color: rgba(242, 233, 225, 0.8);
  padding: 5%;
  font-size: 2.5em;
}

.goal-card-container {
  background-color: #f2e9e1;
  margin: 2%;
  padding-left: 4%;
  display: flex;
  justify-content: space-between;
}

.right-bottom-container {
  /* margin-top: 10%; */
  background-color: rgba(242, 233, 225, 0.8);
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 1%;
  /* font-size: 2.5em; */
}

.more-link {
  cursor: pointer;
  text-align: right;
}
</style>