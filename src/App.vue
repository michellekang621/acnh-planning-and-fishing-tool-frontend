<template>
  <div id="app" class="container">
    <navbar />
    <div class="content">
    <router-view :key="$route.path"/>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar';

export default {
  name: 'app',
  components: {
    navbar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  /* margin-top: 60px; */
}

.container {
  display: flex;
  flex-direction: column;
}

/* .nav {
    position: fixed;
} */

.content {
  height:100%;
  overflow: auto;
  position: relative;
}
</style>
