<template>
    <div>
        <div v-if='loggedIn'>
            <md-toolbar>
                <md-button @click="$router.push({name: 'profile'})">Profile</md-button>
                <md-button @click="$router.push({name: 'search-items'})">Browse</md-button>
                <md-button @click="$router.push({name: 'fishing-tool'})">Fishing Tool</md-button>
                <md-button @click="logout(); $router.push({name: 'home'})">Log Out</md-button>
            </md-toolbar>
        </div>
        <div v-else>
            <md-toolbar>
                <md-button @click="$router.push({name: 'home'})">Home</md-button>
                <md-button @click="$router.push({name: 'login'})">Log In</md-button>
                <md-button @click="$router.push({name: 'register'})">Register</md-button>
            </md-toolbar>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'navbar',
    computed: {
        ...mapState('user', {
            loggedIn: state => state.loggedIn
        })
    },
    methods: {
        logout() {
                sessionStorage.clear();
        },
    },
}
</script>

<style scoped>

</style>