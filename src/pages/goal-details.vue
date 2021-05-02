<template>
  <div>
    <h2>
      {{ goal.title }}
    </h2>
    <div class="contents" v-for="content in goal.contents" :key="content._id">
      <md-card class="content-card-container">
        <md-card-header>
          <div class="content-card">
            <img class="img-sizer" :src="content.item.image_uri" />
            <div class="content-card-text">
            {{ content.item.name["name-USen"] }}
            </div>
            <div>
            <md-button
            class="delete-button"
              @click="
                removeContentByGoal({
                  goalId: goal._id,
                  contentId: content._id,
                })
              "
            >
              Delete
            </md-button>
          </div>
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
    },
  },
  methods: {
    ...mapActions("user", ["removeContentByGoal"]),
  },
};
</script>

<style scoped>
.contents {
  padding: 5%;
  padding-top: 15%;
}

.content-card-container {
  margin-bottom: 5%;
  /* padding-right: 3%; */
}

.content-card {
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
}

.content-card-text {
  text-align: left;
  padding: 5%;
}

.img-sizer {
  max-width: 150px;
  width: 100%;
  height: auto;
  cursor: pointer;
}

.delete-button {
  justify-self: right;
}
</style>