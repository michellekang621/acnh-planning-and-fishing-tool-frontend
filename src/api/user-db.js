import axios from 'axios';

const getUserByToken = async (token) => {
    const user = await axios.get('http://localhost:4000/auth/me', {
        headers: {
            'Content-Type': 'application/json',
            'token': token,
        }
    })
    return user;
}

const getGoalsByUser = async (id) => {
    const user = await axios.get(`http://localhost:4000/users/${id}/goals`);
    return user;
}

const addGoalByUser = async (id, goal) => {
    const user = await axios.post(`http://localhost:4000/users/${id}/goals`, {
            goal: goal,
    })
    return user;
}

const getContentsByGoal = async (id, goalId) => {
    const contents = await axios.get(`http://localhost:4000/users/${id}/goals/${goalId}/contents`);
    return contents;
}

const addContentByGoal = async (id, goalId, content) => {
    const contents = await axios.post(`http://localhost:4000/users/${id}/goals/${goalId}/contents`, {
        content: content,
    })
    return contents;
}

const removeContentByGoal = async (id, goalId, contentId) => {
    const contents = await axios.delete(`http://localhost:4000/users/${id}/goals/${goalId}/contents/${contentId}`)
    return contents;
}


export default {
    getUserByToken,
    getGoalsByUser,
    addGoalByUser,
    getContentsByGoal,
    addContentByGoal,
    removeContentByGoal,
}