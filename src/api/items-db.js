import axios from 'axios';

const getItemById = async (id) => {
    return await axios.get(`http://localhost:4000/items/${id}`)
    .then((item) => item)
    .catch(function(error) {
        console.log(error);
      });
}

const getItemsBySearchString = async (searchString) => {
    return await axios.get(`http://localhost:4000/items/search-items?searchString=${searchString}`)
    .then((items) => items)
    .catch(function(error) {
        console.log(error);
      });
}

const findAvailableFish = async (hemisphere, month, time) => {
    return await axios.get('http://localhost:4000/items/search-fish', {
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
    return await axios.get('http://localhost:4000/items/search-bugs', {
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
    return await axios.get('http://localhost:4000/items/search-seas', {
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

export default {
    getItemById,
    getItemsBySearchString,
    findAvailableFish,
    findAvailableBugs,
    findAvailableSeaCreatures,
}