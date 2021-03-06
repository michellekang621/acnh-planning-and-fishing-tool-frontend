<template>
  <div>
    <md-card>
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
          <md-input v-model="password"></md-input>
          <span class="md-helper-text">8 character minimum</span>
        </md-field>
        <md-button class="md-raised" v-on:click="register()">Register</md-button>
      </md-card-content>
    </md-card>
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
</style>