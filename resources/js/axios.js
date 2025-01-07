import axios from "axios";

const api = axios.create({
    baseURL: "/api", // Adjust based on your API prefix
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true, // Required for CSRF protection
});

// Add a request interceptor to include CSRF token
api.interceptors.request.use(
    (config) => {
        const token = document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute("content");
        if (token) {
            config.headers["X-CSRF-TOKEN"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
