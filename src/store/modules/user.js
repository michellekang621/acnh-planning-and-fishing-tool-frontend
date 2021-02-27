import userDb from '../../api/user-db';

const state = () => ({
    username: '',
    email: '',
    token: '',
    goals: {},
    loggedIn: false,
})

const getters = {
    getUsername(state) {
        return state.username;
    }
}

const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setUserByToken(state) {
        userDb.getUserByToken(state.token)
        .then(user => {
            console.log(user);
            state.username = user.data.username;
            state.email = user.data.email;
            state.goals = user.data.goals;
            state.loggedIn = true;
            console.log(state);
        });
        console.log(state);
    },
    addGoalToGoals(state, goal) {
        state.goals.push(goal);
    },
}

const actions = {
    setToken({commit}, token) {
        commit('setToken', token);
    },
    setUserByToken({commit}) {
        commit('setUserByToken');
    },
    addGoalToGoals({commit}, goal) {
        commit('addGoalToGoals', {title: goal, contents: []})
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}