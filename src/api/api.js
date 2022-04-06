import axios from "axios";

const API_KEY = '59d4eb3d-d7aa-41c1-ae85-cd77a1d55ca1';

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

const usersAPI = {
    getUsers: (count, page) => api.get('users', {params: { count, page }}),
    follow: userId => api.post('follow/' + userId),
    unfollow: userId => api.delete('follow/' + userId)
};

const profileAPI = {
    getProfile: userId => api.get('profile/' + userId),
    getStatus: userId => api.get('profile/status/' + userId),
    updateStatus: status => api.put('profile/status/', { status })
};

const authAPI = {
    me: () => api.get('auth/me'),
    login: (email, password, rememberMe) => api.post('auth/login', {email, password, rememberMe}),
    logout: () => api.delete('auth/login')
};

export { usersAPI, profileAPI, authAPI };