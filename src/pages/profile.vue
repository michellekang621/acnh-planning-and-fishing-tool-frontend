<template>
<div>
    <p :v-bind="printUsername">{{this.username}}</p>
    <md-button @click="$router.push('goals-list')">Goals!</md-button>
</div>
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
            return this.username;
        }

    }
    
}
</script>

<style scoped>

</style>