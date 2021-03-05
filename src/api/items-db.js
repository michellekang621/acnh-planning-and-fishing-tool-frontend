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

export default {
    getItemById,
    getItemsBySearchString,
}