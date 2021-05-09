<template>
  <div class="bg">
    <h1 class="left-text first-text">
      Hello! Welcome to the Animal Crossing: New Horizons planning tool!
    </h1>
    <h2 class="left-text second-text">
      If you're here to figure out what creatures you can catch right now, or
      what items you can afford, feel free to use any of the tools below by
      choosing the appropriate creature category!
    </h2>
    <div class="left-text tools">
      <div
        class="tool-card"
        @click="$router.push({ name: 'fishing-tool' }).catch((err) => {})"
      >
        <fishIcon class="tool-icon" />
        <h2 class="tool-label">Fish</h2>
      </div>
      <div
        class="tool-card"
        @click="$router.push({ name: 'sea-creatures-tool' }).catch((err) => {})"
      >
        <seaIcon class="tool-icon" />
        <h2 class="tool-label">Sea Creatures</h2>
      </div>
      <div
        class="tool-card"
        @click="$router.push({ name: 'bugs-tool' }).catch((err) => {})"
      >
        <bugIcon class="tool-icon" />
        <h2 class="tool-label">Bugs</h2>
      </div>
      <div class="tool-card">
        <calculatorIcon class="tool-icon" />
        <h2 class="tool-label">Items Calculator</h2>
      </div>
    </div>
    <h3 class="left-text third-text">
      Or, additionally, if you'd like to keep track of the different creatures
      you'd like to catch, different types of items you'd like to obtain, or
      just be able to index any item in the game, you can also create your own
      (free) account
      <a
        class="link"
        @click="$router.push({ name: 'register' }).catch((err) => {})"
        >here</a
      >!
    </h3>
  </div>
</template>

<script>
import fishIcon from "../assets/icons/fish.vue";
import seaIcon from "../assets/icons/sea-creatures.vue";
import bugIcon from "../assets/icons/bug.vue";
import calculatorIcon from "../assets/icons/calculator.vue";

export default {
  name: "home",
  components: {
    fishIcon,
    seaIcon,
    bugIcon,
    calculatorIcon,
  },
};
</script>

<style scoped>
.bg {
  background-image: url("../assets/acnh.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100%;
}

.left-text {
  margin-left: 4%;
  margin-right: 4%;
  text-align: left;
  line-height: 1.1em;
}

.first-text {
  margin-top: 3%;
}

.second-text {
  margin-top: 3%;
}

.third-text {
  width: 50%;
  margin-top: 6%;
}

.tools {
  width: 50%;
  margin-top: 5%;
  margin-left: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.tool-card {
  display: flex;
  flex-direction: column;
  width: 20%;
  cursor: pointer;
  text-align: center;
  background-color: rgba(180, 180, 180, 0.5);
}

.tool-card:hover {
  background-color: rgba(180, 180, 180, 0.8);
}

.tool-icon {
  margin-left: 18%;
  margin-top: 6%;
  color: rgba(250, 250, 250, 0.5);
}

.tool-label {
  font-size: 100%;
  color: rgba(120, 120, 120);
}

.link {
  cursor: pointer;
}
</style>