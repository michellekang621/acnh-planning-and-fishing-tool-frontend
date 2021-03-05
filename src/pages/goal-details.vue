<template>
  <div>
    <p>Hello!</p>
    {{ goal().title }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "goal-details",
  computed: {
    ...mapGetters("user", ["getGoalById"]),
  },
  methods: {
    goal() {
        console.log(this.getGoalById(this.$route.params.goalId));
      return this.getGoalById(this.$route.params.goalId);
    },
  },
};
</script>

<style scoped>
</style>