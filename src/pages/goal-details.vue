<template>
  <div class="bg">
    <h1 class="goal-title">
      {{ goal.title }}
    </h1>
    <div class="contents" v-for="content in goal.contents" :key="content._id">
      <md-card class="content-card-container">
        <md-card-header>
          <div class="content-card-content"> 
          <div class="content-card-content-text">
            <p>Name: {{ content.item.name["name-USen"] }}</p>
            <p>Type: {{ content.type }}</p>
            <p
              class="details-link"
              @click="
                $router.push({
                  name: 'item-details',
                  params: { itemId: content._id },
                })
              "
            >
              More Details...
            </p>
            <md-button
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
          <img
                @click="
                  $router.push({
                    name: 'item-details',
                    params: { itemId: content._id },
                  })
                "
                class="img-sizer"
                :src="content.item.image_uri"
              />
              </div>
          <!-- <div class="content-card">
            <img class="img-sizer" :src="content.item.image_uri" />
            <div class="content-card-text">
            {{ content.item.name["name-USen"] }}
            </div>
            <div>

          </div> -->
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
.bg {
    background-image: url('../assets/acnh.jpg');
    background-size: cover;
    background-position: bottom right;
    height: 100%;

}

.goal-title {
  margin-top: 5%;
  text-align: left;
  margin-left: 10%;
}

.contents {
  padding: 2%;
  /* padding-top: 15%; */
}

.content-card-container {
    background-color: #f2e9e1;
  width: 80%;
  margin-left: 8%;
  margin-bottom: 2%;
  padding-right: 2%;
  padding-left: 5%;
}

.content-card-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.content-card-content-text {
  text-align: left;
}

.details-link {
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.9em;
}

.img-sizer {
  max-width: 13em;
  cursor: pointer;
}


.img-sizer {
  max-width: 150px;
  width: 100%;
  height: auto;
  cursor: pointer;
}
</style>