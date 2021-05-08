<template>
  <div>
      <h2>Here's all your goals so far:</h2>
    <div class="goals-list-container" v-for="goal in goals" :key="goal._id">
      <md-card class="goal">
      <md-card-title>
        {{ goal.title }}
        <md-button @click="$router.push(`/goal-details/${goal._id}`)">Edit</md-button>
      </md-card-title>
      </md-card>
    </div>
    <div class="add-goal-bar">
      <md-field class="add-goal-input">
        <label>Add a new goal here!</label>
        <md-textarea md-autogrow v-model="newGoal"></md-textarea>
      </md-field>
      <md-button @click="addGoal()" class="add-goal-button">Add Goal!</md-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "goals-list",
  data: () => ({
    newGoal: null,
  }),
  computed: {
    ...mapState("user", {
      id: (state) => state.id,
      goals: (state) => state.goals,
    }),
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
.goals-list-container {
    display: flex;
    flex-direction: row;
}

.goal {
    width: 20%;
    margin: 1%;
    padding: 1%;
    display: flex;
    justify-content: space-between;
}

.add-goal-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3%;
}

.add-goal-button {
    margin-top: 2%;
}

.add-goal-input {
    margin-left: 2%;
    margin-right: 2%;
}
</style>