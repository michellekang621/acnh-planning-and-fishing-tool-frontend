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
        return state.goals.find(goal => goal._id === goalId);
    },
    getContentsByGoalId: (state) => (goalId) => {
        return state.goals.find(goal => goal._id === goalId).contents;
    }
}

const mutations = {
    setUserByToken(state, token) {
        userDb.getUserByToken(token)
        .then(user => {
            state.id = user.data._id;
            state.username = user.data.username;
            state.email = user.data.email;
            state.goals = user.data.goals;
            state.loggedIn = true;
        });
    },
    addGoalByUser(state, goal) {
        userDb.addGoalByUser(state.id, goal)
        .then((user) => {
            state.goals = user.data.goals;
            // userDb.getGoalsByUser(user.data._id)
            // .then((goals) => {
            //     state.goals = goals.data;
            // });
        });
    },
    addContentByGoal(state, payload) {
        userDb.addContentByGoal(state.id, payload.goalId, payload.content)
        .then((user) => {
            console.log(user);
            state.goals = user.data.goals;
        });
    },
    removeContentByGoal(state, payload) {
        userDb.removeContentByGoal(state.id, payload.goalId, payload.contentId)
        .then((user) => {
            console.log(user);
            userDb.getGoalsByUser(state.id)
            .then((goals) => {
                console.log(goals);
                state.goals = goals.data;
            })
        })
    },
    logout(state) {
        sessionStorage.clear();
        state.loggedIn = false;
    }
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
    removeContentByGoal({commit}, payload) {
        commit('removeContentByGoal', payload);
    },
    logout({commit}) {
        commit('logout');
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}