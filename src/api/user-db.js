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

export default {
    getUserByToken,
}