import axios from 'axios';

export default axios.create({
    baseURL: 'https://chefbooking.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json',
    },
});