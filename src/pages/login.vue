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
        <md-button class="md-raised" @click="login(); $router.push('profile')">Login</md-button>
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
      token: null,
  }),
  computed: {
    routing() {
      if (this.token) {
        return '/profile'
      } else {
        return ''
      }
    },
  },
  methods: {
      async login() {
          const config = {headers: {'Content-Type': 'application/json'}}
          const formData = {'email': this.email, 'password': this.password};
          const response = await axios.post('http://localhost:4000/auth/login', formData, config);
          this.token = response.data;
          console.log(this.token);
      },
  }
};
</script>

<style scoped>
</style>