<template>
<div class="bg">
  <div class="card-container">
    <md-card class="login-card">
      <h2 class="card-header">Login</h2>
      <md-card-content>
        <p v-if="this.errorMsg" class="error-msg"><i>Sorry! That username/email or password could not be found.</i></p>
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
        <md-button class="md-raised" @click="login()">Login</md-button>
      </md-card-content>
    </md-card>
    <p class="sign-up-link" @click="$router.push({name: 'register'}).catch(err => {})" >First time here? Click here to sign up</p>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: "navbar",
  data: () => ({
      email: '',
      password: '',
      token: null,
      errorMsg: false,
  }),
  methods: {
    ...mapActions('user', [
      'setUserByToken',
    ]),
    async login() {
      const app = this;
        const config = {headers: {'Content-Type': 'application/json'}}
        const formData = {'email': this.email, 'password': this.password};
        // const baseUrl = 'http://localhost:4000'
        const baseUrl = 'https://acnh-tool-backend.herokuapp.com'
        await axios.post(`${baseUrl}/auth/login`, formData, config)
        .then((response) => {
          this.token = response.data;
          this.setUserByToken(this.token.token);
          this.$router.push('profile');
        })
        .catch(function(error) {
          app.errorMsg = true;
          return error;
        });
    },
  }
};
</script>

<style scoped>
/* Control the left side */
.bg {
    background-image: url('../assets/acnh.jpg');
    background-size: cover;
        background-position: bottom;
    height: 100%;
}

.card-container {
  padding-top: 8%;
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: 10%;
}

.login-card {
  background-color: #ebdacc;
}

.card-header {
  text-align: left;
  margin-left: 1em;
  margin-top: 1em;
}

.error-msg {
  color: red;
  margin: 0;
}

.sign-up-link {
  cursor: pointer;
  margin-left: 19em;
}
</style>