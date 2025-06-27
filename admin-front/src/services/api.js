import axios from 'axios';

const BASE_URL = 'http://localhost:3002/api';

// Configure axios to work with the backend's CORS settings
axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (data) => api.post('/auth/register', data),
  logout: () => api.post('/auth/logout'),
  verifyToken: () => api.post('/auth/verify'),
  refreshToken: () => api.post('/auth/refresh'),
  changePassword: (data) => api.post('/auth/change-password', data),
};

export const adminAPI = {
  // Restaurant management
  getRestaurants: () => api.get('/admin/restaurants'),
  addRestaurant: (data) => api.post('/admin/restaurant_add', data),
  updateRestaurant: (data) => api.post('/admin/restaurant_update', data),
  updateRestaurantImage: (data) => api.post('/admin/restaurant_update_image', data),
  deleteRestaurant: (data) => api.post('/admin/restaurant_delete', data),
  
  // Menu management
  addMenuItem: (data) => api.post('/admin/menu/add', data),
  updateMenuItem: (id, data) => api.put(`/admin/menu/${id}`, data),
  deleteMenuItem: (id) => api.delete(`/admin/menu/${id}`),
  getMenuCategories: () => api.get('/admin/menu/categories'),
  
  // Category management
  addCategory: (data) => api.post('/admin/category/add', data),
  updateCategory: (id, data) => api.put(`/admin/category/${id}`, data),
  deleteCategory: (id) => api.delete(`/admin/category/${id}`),
  
  // Order management
  getOrders: () => api.get('/admin/orders'),
  updateOrderStatus: (id, status) => api.put(`/admin/orders/${id}/status`, { status }),
  
  // User management
  getUsers: () => api.get('/admin/users'),
  updateUserStatus: (id, status) => api.put(`/admin/users/${id}/status`, { status }),
  
  // Dashboard statistics
  getDashboardStats: () => api.get('/admin/stats/dashboard'),
  getSalesStats: () => api.get('/admin/stats/sales'),
  getOrderStats: () => api.get('/admin/stats/orders'),
};

export const settingsAPI = {
  getAllSettings: () => api.get('/settings'),
  updateSettings: (data) => api.put('/settings', data),
  getNightDeliverySettings: () => api.get('/settings/night-delivery'),
  updateNightDeliverySettings: (data) => api.put('/settings/night-delivery', data),
  getPaymentSettings: () => api.get('/settings/payment'),
  updatePaymentSettings: (data) => api.put('/settings/payment', data),
};

export default api;