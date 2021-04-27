<template>
  <div>
    <div class="split left"></div>
    <div class="split right">
      <div class="card-container">
    <md-card class="register-card">
      <md-card-header> Register </md-card-header>
      <md-card-content>
          <md-field>
          <label>Username</label>
          <md-input v-model="username"></md-input>
          <span class="md-helper-text">8 character minimum</span>
        </md-field>
        <md-field>
          <label>Email</label>
          <md-input v-model="email"></md-input>
          <span class="md-helper-text">8 character minimum</span>
        </md-field>
        <md-field>
          <label>Password</label>
          <md-input v-model="password" type="password"></md-input>
          <span class="md-helper-text">8 character minimum</span>
        </md-field>
        <md-button class="md-raised" v-on:click="register()">Register</md-button>
      </md-card-content>
    </md-card>
    <p>Been here before? Click here to Sign in</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: "navbar",
  data: () => ({
      username: '',
      email: '',
      password: '',
  }),
  methods: {
      async register() {
          const config = {headers: {'Content-Type': 'application/json'}}
          const formData = {'username': this.username, 'email': this.email, 'password': this.password};
          await axios.post('http://localhost:4000/auth/register', formData, config);
      }
  }
};
</script>

<style scoped>

/* Split the screen in half */
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
  background-image: url('../assets/pattern-bgs/acnh-leaf-cream-green.png');
  background-position: center;
  background-size: cover;
  height: 100%;
}

/* Control the right side */
.right {
  right: 0;
    background-color: lightyellow;

}

.register-card {
  width: 75%;
  padding-top: 5%;
  padding-bottom: 5%;
}

.card-container {
  padding-top: 20%;
  padding-left: 20%;
}

</style>