<template>
  <div>
    <md-card>
      <md-card-header> Login </md-card-header>
      <md-card-content>
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
        <md-button class="md-raised" v-on:click="login()">Log in</md-button>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: "navbar",
  data: () => ({
      email: '',
      password: '',
  }),
  methods: {
      async login() {
          const config = {headers: {'Content-Type': 'application/json'}}
          const formData = {'email': this.email, 'password': this.password};
          const response = await axios.post('http://localhost:4000/auth/login', formData, config);
          console.log(response.data);
      }
  }
};
</script>

<style scoped>
</style>