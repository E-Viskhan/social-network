import axios from "axios";

const API_KEY = '202f3d8b-c44c-42e6-8f07-376d668cf4c9';

const defaultOptions = {
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
};

const api = axios.create(defaultOptions);

const requestInterceptor = (config) => {
    const GET = 'get';
    const { method } = config;

    if (method !== GET) {
        config.headers['API-KEY'] = API_KEY;
    }

    return config;
};

const responseInterceptor = (response) => response.data;

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(responseInterceptor);

const usersApi = {
    getUsers: (count = 8, page = 1) => api.get('users', {params: {count, page}}),
    follow: userId => api.post('follow/' + userId),
    unfollow: userId => api.delete('follow/' + userId)
};

const profileApi = {
    getProfile: userId => api.get('profile/' + userId)
};

const authApi = {
    getAuth: () => api.get('auth/me')
};

export { usersApi, profileApi, authApi };