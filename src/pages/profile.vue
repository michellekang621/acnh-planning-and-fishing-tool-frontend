<template>
  <div>
    <div class="split left">
      <div class="left-container">
        <h1>Welcome {{ this.username }}!</h1>
        <p>You can either edit your list of goals here,</p>
        <p>Or you can see details about each of them to the right!</p>
      </div>
      <div class="user-goal-list">
        <div v-if="goals">
          <md-card
            v-for="goal in goals"
            :key="goal._id"
            class="goal-card-container"
          >
            <h2>{{ goal.title }}</h2>
            <div class="goal-card-icons">
              <span @click="seeGoalDetails(goal)"><editIcon class="icon"/></span>
              <!-- will do this once i can update backend -->
              <!-- <span @click="deleteGoal(goal)"><deleteIcon class="icon" /></span> -->
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
    <div class="split right">
      <div v-if="selectedGoal" class="goals-list">
      <h1 class="goal-title">
      {{ selectedGoal.title }}
      </h1>
      <div class="contents" v-for="content in selectedGoal.contents" :key="content._id">
        <md-card class="content-card-container">
          <md-card-header>
            <div class="content-card-content"> 
            <div class="content-card-content-text">
              <p>Name: {{ content.item.name["name-USen"] }}</p>
              <p>Type: {{ content.type }}</p>
              <!-- TODO: NEED TO ADD BACK MORE DETAILS PAGE -->
              <!-- <p
                class="details-link"
                @click="
                  $router.push({
                    name: 'item-details',
                    params: { itemId: content._id },
                  })
                "
              >
                More Details...
              </p> -->
              <!-- TODO: ADD DELETION FUNCTIONALITY -->
              <!-- <md-button @click="updateGoalDetails(content)">
                Delete
              </md-button> -->
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
    selectedGoal: null,
    selectedGoalList: [],
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
    ...mapActions("user", ["addGoalByUser", "removeContentByGoal"]),
    async addGoal() {
      this.addGoalByUser(this.newGoal);
    },
    seeGoalDetails(goal) {
      // this.$router.push({ name: "goal-details", params: { goalId: goalId } });
      this.selectedGoal = goal;
      this.selectedGoalList = goal.contents;
    },
    updateGoalDetails(content) {
      const goalId = this.selectedGoal._id;
      this.removeContentByGoal({ goalId: this.selectedGoal._id, contentId: content._id });
      this.selectedGoal = this.getGoalById(goalId);
      this.selectedGoalList = this.selectedGoal.contents; 
    },
    deleteGoal(goal) {
      // placeholder
      return goal;
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
  padding-top: 5em;
  padding-left: 5%;
  padding-right: 5%;
}

.user-goal-list {
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
}

.goal-card-icons {
  display: flex;
  margin-top: 1em;
  margin-right: 1em;
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

.goal-title {
  margin-top: 3em;
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