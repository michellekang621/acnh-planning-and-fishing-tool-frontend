<template>
<div>
    <div class="split left">
        <div class="left-container">
        <h1>Welcome {{this.username}}!</h1>
        </div>
    </div>
    <div class="split right">
        <div class="right-container">
            <md-button @click="$router.push('goals-list')">Click to see your full list of goals!</md-button>
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
        }),
        printUsername() {
            return this.username;
        }

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
    padding-top: 30%;
}

</style>