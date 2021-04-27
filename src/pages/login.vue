<template>
<div class="bg">
  <div class="card-container">
    <md-card class="login-card">
      <md-card-header> Login </md-card-header>
      <md-card-content>
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
    <p class="sign-up-link">First time here? Click here to sign up</p>
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
  }),
  methods: {
    ...mapActions('user', [
      'setUserByToken',
    ]),
      async login() {
          const config = {headers: {'Content-Type': 'application/json'}}
          const formData = {'email': this.email, 'password': this.password};
          await axios.post('http://localhost:4000/auth/login', formData, config)
          .then((response) => {
            this.token = response.data;
            this.setUserByToken(this.token.token);
            this.$router.push('profile');
          })
          .catch(function(error) {
            return error;
          });
      },
  }
};
</script>

<style scoped>
/* Control the left side */
.bg {
    background-image: url('../assets/pattern-bgs/acnh-leaf-teal.png');
    background-position: top;
    background-size: cover;
    height: 100%;
}

.card-container {
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: 10%;
}

.login-card {
  background-color: lightseagreen;
}
</style>