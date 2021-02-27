<template>
    <p :v-bind="printUsername">{{this.username}}</p>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'profile',
    computed: {
        ...mapState( 'user', {
            username: state => state.username,
        }),
        printUsername() {
            console.log(this.username);
            return this.username;
        }

    }
    
}
</script>

<style scoped>

</style>