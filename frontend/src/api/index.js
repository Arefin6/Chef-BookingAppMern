import axios from 'axios';

export default axios.create({
    baseURL: 'https://chefbooking.herokuapp.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});