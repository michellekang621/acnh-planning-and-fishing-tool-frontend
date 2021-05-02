<template>
<div>
    <div class="split left">
        <div class="left-container">
        <h1>Welcome {{this.username}}!</h1>
        </div>
    </div>
    <div class="split right">
        <div class="right-container">
            <div v-if="displayedGoals">
                <div v-for="goal in displayedGoals" :key="goal._id">
                    <md-button @click="$router.push(`/goal-details/${goal._id}`)">{{goal.title}}</md-button>
                </div>
            </div>
            <h2 class="more-link" @click="$router.push('goals-list')">More...</h2>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'profile',
    computed: {
        ...mapState( 'user', {
            username: state => state.username,
            goals: state => state.goals,
        }),
        printUsername() {
            return this.username;
        },
        displayedGoals() {
            if (this.goals.length > 3) {
                return this.goals.slice(0, 3);
            } else {
                return this.goals;
            }
        },
    }
    
}
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
}

.right-container {
    margin-top: 30%;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 2%;
    margin-left: 5%;
    margin-right: 5%;
    background-color: white;
}

.more-link {
    cursor: pointer;
    text-align: right;
}

</style>