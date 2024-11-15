// axiosConfig.js

import axios from 'axios';
import { Cookies } from 'react-cookie';

// Create an instance of Axios with custom configuration
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL || 'http://localhost:4000/', // Your API base URL
    timeout: 10000, // Request timeout in milliseconds
    // headers: {
    // 'Content-Type': 'application/json',
    // You can add any other default headers here
    // },
});

// Add a request interceptor to add the token to the headers
axiosInstance.interceptors.request.use(
    (config) => {
        // Fetch the token from your authentication system or local storage
        const cookies = new Cookies();
        const userCookie = cookies.get('user');
        console.log(userCookie, 'helloooooo');
        const token = userCookie?.token || '';

        // // If a token exists, add it to the Authorization header
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        // config.headers.Authorization = `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzNzVmNDJjN2FiNjU2OWE2OWEzYmIiLCJlbWFpbCI6InZpcHVsLnJAZ29ydG5tLmluIiwiZGVzaWduYXRpb24iOiJhZG1pbiIsImlhdCI6MTcxNjg3MTUwMiwiZXhwIjoxNzE2OTU3OTAyfQ.5df3oHOyIq2ofTtFSTir9h4eDH79CJig6ioWq6oDh4o'}`;
        return config;
    },
    (error) => {
        console.log(error, 'eeeeeeeee');
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle errors globally
        console.error('Global Error Handler:', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
