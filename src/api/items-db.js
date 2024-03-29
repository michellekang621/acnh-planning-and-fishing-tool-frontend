import axios from 'axios';

const env = {
    // baseUrl: 'http://localhost:4000'
    baseUrl: 'https://acnh-tool-backend.herokuapp.com'
}

const getItemById = async (id) => {
    return await axios.get(`${env.baseUrl}/items/${id}`)
    .then((item) => item)
    .catch(function(error) {
        console.log(error);
      });
}

const getItemsBySearchString = async (searchString) => {
    return await axios.get(`${env.baseUrl}/items/search-items?searchString=${searchString}`)
    .then((items) => items)
    .catch(function(error) {
        console.log(error);
      });
}

const findAvailableFish = async (hemisphere, month, time) => {
    return await axios.get(`${env.baseUrl}/items/search-fish`, {
        params: {
            hemisphere: hemisphere,
            month: month,
            time: time,
        }
    })
    .then((fish) => fish)
    .catch(function(error) {
        console.log(error);
    })
}

const findAvailableBugs = async (hemisphere, month, time) => {
    return await axios.get(`${env.baseUrl}/items/search-bugs`, {
        params: {
            hemisphere: hemisphere,
            month: month,
            time: time,
        }
    })
    .then((bugs) => bugs)
    .catch(function(error) {
        console.log(error);
    })
}

const findAvailableSeaCreatures = async (hemisphere, month, time) => {
    return await axios.get(`${env.baseUrl}/items/search-seas`, {
        params: {
            hemisphere: hemisphere,
            month: month,
            time: time,
        }
    })
    .then((seas) => seas)
    .catch(function(error) {
        console.log(error);
    })
}

// const findRandomVillager = async () => {
//     return await axios.get(`${env.baseUrl}/items/random-villager`)
//     .then((villager) => console.log(villager))
//     .catch(function(error) {
//         console.log(error);
//     })

// }

export default {
    getItemById,
    getItemsBySearchString,
    findAvailableFish,
    findAvailableBugs,
    findAvailableSeaCreatures,
    // findRandomVillager,
}