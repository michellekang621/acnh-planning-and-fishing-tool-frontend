<template>
<div>
    <md-field>
      <label>Textarea with Autogrow</label>
      <md-textarea md-autogrow v-model="newGoal"></md-textarea>
    </md-field>
    <md-button @click="addGoal()">addGoal!</md-button>
    <div v-for="goal in goals" :key="goal._id">
        <md-button @click="$router.push(`/goal-details/${goal._id}`)">
        {{goal.title}}
        </md-button>
    </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'goals-list',
    data: () => ({
        newGoal: null,
    }),
    computed: {
        ...mapState( 'user', {
            id: state => state.id,
            goals: state => state.goals,
        }),
    },
    methods: {
        ...mapActions('user', [
            'addGoalByUser'
        ]),
        async addGoal() {
            this.addGoalByUser(this.newGoal);
        }
    }
}
</script>

<style scoped>

</style>