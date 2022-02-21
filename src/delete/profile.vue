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
      <md-toolbar md-elevation="0" class="right-header-container"><h2 class="right-header">Here's your full list of goals:</h2></md-toolbar>
      <div class="right-container">
        <div v-if="goals">
          <md-card
            v-for="goal in goals"
            :key="goal._id"
            class="goal-card-container"
          >
            <h2>{{ goal.title }}</h2>
            <div>
              <span @click="seeGoalDetails(goal._id)"><editIcon class="icon" /></span>
              <!-- will do this once i can update backend -->
              <!-- <span @click="deleteGoal(goal._id)"><deleteIcon class="icon" /></span> -->
            </div>
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
import editIcon from "../assets/icons/edit.vue";
// import deleteIcon from "../assets/icons/delete.vue";

export default {
  name: "profile",
  data: () => ({
    newGoal: null,
  }),
  components: {
    editIcon,
    // deleteIcon
  },
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
    async addGoal() { this.addGoalByUser(this.newGoal); },
    seeGoalDetails(goalId) { this.$router.push({ name: 'goal-details', params: { goalId: goalId }}) },
    deleteGoal(goalId) { this.$router.push({ name: 'goal-details', params: { goalId: goalId }}) }
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
  background-color: #ebdacc;
}

/* Control the right side */
.right {
  right: 0;
  background-image: url("../assets/acnh.jpg");
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
  margin-top: 25%;
  /* background-color: white; */
}

.right-header-container {
  margin-top: 4%;
  background-color: rgba(242, 233, 225, 0.8);
  position: fixed;
    left: 50%;
    right: 0;
}

.right-header {
  margin-left: 1.5%;
}

.goal-card-container {
  background-color: #f2e9e1;
  margin: 2%;
  padding-left: 4%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}


.icon {
  color: rgba(120, 120, 120, 0.5);
}

.icon:hover {
  cursor: pointer;
  color: rgba(120, 120, 120, 0.8);
}

.right-bottom-container {
  /* margin-top: 10%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(242, 233, 225, 0.8);
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 1%;
  /* font-size: 2.5em; */
}

.add-goal-button {
  margin-top: 3%;
}

.more-link {
  cursor: pointer;
  text-align: right;
}
</style>