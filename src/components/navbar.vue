<template>
    <div>
        <div v-if='loggedIn'>
            <md-toolbar>
                <md-button @click="$router.push({name: 'profile'}).catch(err => {})">Profile</md-button>
                <md-button @click="$router.push({name: 'search-items'}).catch(err => {})">Browse</md-button>
                <md-button @click="$router.push({name: 'fishing-tool'}).catch(err => {})">Fishing Tool</md-button>
                <md-button @click="$router.push({name: 'bugs-tool'}).catch(err => {})">Bugs Tool</md-button>
                <md-button @click="$router.push({name: 'sea-creatures-tool'}).catch(err => {})">Sea Creatures Tool</md-button>
                <md-button @click="logout(); $router.push({name: 'home'}).catch(err => {})">Log Out</md-button>
            </md-toolbar>
        </div>
        <div v-else>
            <md-toolbar>
                <md-button @click="$router.push({name: 'home'}).catch(err => {})">Home</md-button>
                <md-button @click="$router.push({name: 'login'}).catch(err => {})">Log In</md-button>
                <md-button @click="$router.push({name: 'register'}).catch(err => {})">Register</md-button>
                <md-button @click="$router.push({name: 'fishing-tool'})">Fishing Tool</md-button>
                <md-button @click="$router.push({name: 'bugs-tool'}).catch(err => {})">Bugs Tool</md-button>
                <md-button @click="$router.push({name: 'sea-creatures-tool'}).catch(err => {})">Sea Creatures Tool</md-button>
            </md-toolbar>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'navbar',
    computed: {
        ...mapState('user', {
            loggedIn: state => state.loggedIn
        })
    },
    methods: {
        ...mapActions('user', [
            'logout',
        ])
    },
}
</script>

<style scoped>

</style>