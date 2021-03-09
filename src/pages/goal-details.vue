<template>
  <div>
    <p>Hello!</p>
    {{ goal.title }}
    <div v-for="content in goal.contents" :key="content._id">
      <goal-item-card v-bind:content="content" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GoalItemCard from '../components/goal-item-card.vue';

export default {
  name: "goal-details",
  components: {
    'goal-item-card': GoalItemCard,
  },
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