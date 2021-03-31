<template>
  <div>
    <p>Hello!</p>
    {{ goal.title }}
    <div v-for="content in goal.contents" :key="content._id">
      <md-card>
    <md-card-header>
      <div @click="$router.push({name: 'item-details', params: {itemId: content.itemId}})">
        {{ content.item.name["name-USen"] }}
        <img :src="content.item.image_uri" />
      </div>
      <div>
        <md-button @click="removeContentByGoal({goalId: goal._id, contentId: content._id})">
          Delete
        </md-button>
      </div>
    </md-card-header>
  </md-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "goal-details",
  computed: {
    ...mapGetters("user", ["getGoalById"]),
    goal() {
      const specificGoal = this.getGoalById(this.$route.params.goalId);
      console.log(specificGoal);
      console.log(specificGoal.contents);
      console.log(specificGoal._id);
      return specificGoal;
    }
  },
  methods: {
    ...mapActions("user", [
      'removeContentByGoal',
    ]),
  }
};
</script>

<style scoped>
</style>