import axios from 'axios';

// Base URL for the API
export const BASE_URL = 'http://localhost:8082';

export const AxiosHelper = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }

});