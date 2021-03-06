<template>
  <div>
    <p>Hello!</p>
    {{ goal.title }}
    <div v-for="content in goal.contents" :key="content._id">
      {{content.item.name['name-USen']}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "goal-details",
  computed: {
    ...mapGetters("user", ["getGoalById"]),
    goal() {
      const specificGoal = this.getGoalById(this.$route.params.goalId);
      console.log(specificGoal);
      return specificGoal;
    }
  },
};
</script>

<style scoped>
</style>