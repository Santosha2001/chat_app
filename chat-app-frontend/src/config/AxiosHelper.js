import axios from 'axios';

// Base URL for the API
const BASE_URL = 'http://localhost:8082';

export const AxiosHelper = axios.create({
    BASE_URL: BASE_URL,
    // headers: {
    //     'Content-Type': 'text/plain',
    // },
    headers: { 'Content-Type': 'application/json' }

});