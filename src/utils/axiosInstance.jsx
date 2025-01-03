import axios from "axios";

// Create axios instance with default baseURL
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Replace with your backend API URL
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 1000, // Request timeout
});

// Add a request interceptor to include the token in every request
axiosInstance.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem('token'); // Directly get the token if it's a plain string
        console.log('axiosInstance token ', token)
        if (token) {
            request.headers.Authorization = `Bearer ${token}`; // Attach token
            console.log("token attached")
            console.log('Headers:', axiosInstance.defaults.headers);

        }
        console.log('axiosInstance request ', request );
        
        return request; // Return the updated request
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
