<template>
  <div>
    <div class="split left"></div>
    <div class="split right">
      <div class="card-container">
        <md-card class="register-card">
          <h2 class="card-header">Register</h2>
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
            <md-button class="md-raised" v-on:click="register()"
              >Register</md-button
            >
          </md-card-content>
        </md-card>
        <p
          class="sign-in-link"
          @click="$router.push({ name: 'login' }).catch((err) => {})"
        >
          Been here before? Click here to sign in
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "navbar",
  data: () => ({
    username: "",
    email: "",
    password: "",
  }),
  methods: {
    async register() {
      const config = { headers: { "Content-Type": "application/json" } };
      const formData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      // const baseUrl = 'http://localhost:4000'
      const baseUrl = 'https://acnh-tool-backend.herokuapp.com'
      await axios.post(`${baseUrl}/auth/register`, formData, config)
      .then(() => {
        this.$router.push({name: 'login'})
      });
    },
  },
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
  background-image: url("../assets/acnh.jpg");
  background-position: bottom right;
  background-size: cover;
  height: 100%;
}

/* Control the right side */
.right {
  right: 0;
  background-color: #ebdacc;
}

.register-card {
  width: 75%;
  padding-top: 2%;
  padding-bottom: 2%;
}

.card-container {
  padding-top: 25%;
  padding-left: 20%;
}

.card-header {
  text-align: left;
  margin-left: 1em;
}

.sign-in-link {
  cursor: pointer;
}
</style>