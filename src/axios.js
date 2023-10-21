import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api', //API URL (cloud function)
    headers: {
        'Content-Type': 'application/json', // Set default headers
    }
})

export default instance