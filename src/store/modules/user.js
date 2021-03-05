import userDb from '../../api/user-db';

const state = () => ({
    id: '',
    username: '',
    email: '',
    token: '',
    goals: [],
    loggedIn: false,
})

const getters = {
    getGoalById: (state) => (goalId) => {
        console.log(state.goals);
        return state.goals.find(goal => goal._id === goalId);
    }
}

const mutations = {
    setUserByToken(state, token) {
        userDb.getUserByToken(token)
        .then(user => {
            console.log(user);
            state.id = user.data._id;
            state.username = user.data.username;
            state.email = user.data.email;
            state.goals = user.data.goals;
            state.loggedIn = true;
            console.log(state);
        });
        console.log(state);
    },
    addGoalByUser(state, goal) {
        userDb.addGoalByUser(state.id, goal)
        .then((user) => {
            console.log(user);
            userDb.getGoalsByUser(user.data._id)
            .then((goals) => {
                state.goals = goals.data;
                console.log(state.goals);
            });
        });
    },
    addContentByGoal(state, payload) {
        userDb.addContentByGoal(state.id, payload.goalId, payload.content)
        .then((user) => {
            console.log(user);
            userDb.getContentsByGoal(state.id, payload.goalId)
            .then((contents) => {
                const goal = state.goals.find(goal => goal._id === payload.goalId);
                console.log(state.goals);
                goal.contents = contents;
                console.log(state.goals);
            })
        });
    },
}

const actions = {
    setUserByToken({commit}, token) {
        commit('setUserByToken', token);
    },
    addGoalByUser({commit}, goal) {
        commit('addGoalByUser', goal);
    },
    addContentByGoal({commit}, payload) {
        commit('addContentByGoal', payload);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}