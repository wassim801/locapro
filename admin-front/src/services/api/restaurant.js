import axios from 'axios';
import { API_BASE_URL, ENDPOINTS, DEFAULT_HEADERS, AUTH_CONFIG } from './config';


const RESTAURANT_API = `${API_BASE_URL}${ENDPOINTS.ADMIN.RESTAURANTS}`;

// Add auth token to requests
const getAuthHeader = () => {
  const token = localStorage.getItem(AUTH_CONFIG.TOKEN_KEY);
  return token ? { Authorization: `${AUTH_CONFIG.TOKEN_TYPE} ${token}` } : {};
};

const restaurantAPI = {
  // Get all restaurants with optional filters
  getRestaurants: async (params = {}) => {
    const response = await axios.get(RESTAURANT_API, {
      params,
      headers: {
        ...DEFAULT_HEADERS,
        ...getAuthHeader(),
      },
    });
    return response.data;
  },

  // Get a single restaurant by ID
  getRestaurant: async (id) => {
    const response = await axios.get(`${RESTAURANT_API}/${id}`, {
      headers: {
        ...DEFAULT_HEADERS,
        ...getAuthHeader(),
      },
    });
    return response.data;
  },

  // Create a new restaurant
  createRestaurant: async (data) => {
    const formData = new FormData();
    
    // Append all restaurant data to FormData
    Object.keys(data).forEach(key => {
      if (key === 'image' && data[key] instanceof File) {
        formData.append('image', data[key]);
      } else {
        formData.append(key, data[key]);
      }
    });

    const response = await axios.post(RESTAURANT_API, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...getAuthHeader(),
      },
    });
    return response.data;
  },

  // Update a restaurant
  updateRestaurant: async (id, data) => {
    const formData = new FormData();
    
    // Append all restaurant data to FormData
    Object.keys(data).forEach(key => {
      if (key === 'image' && data[key] instanceof File) {
        formData.append('image', data[key]);
      } else {
        formData.append(key, data[key]);
      }
    });

    const response = await axios.put(`${RESTAURANT_API}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...getAuthHeader(),
      },
    });
    return response.data;
  },

  // Delete a restaurant
  deleteRestaurant: async (id) => {
    const response = await axios.delete(`${RESTAURANT_API}/${id}`, {
      headers: {
        ...DEFAULT_HEADERS,
        ...getAuthHeader(),
      },
    });
    return response.data;
  },

  // Update restaurant image
  updateRestaurantImage: async (id, imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await axios.put(`${RESTAURANT_API}/${id}/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...getAuthHeader(),
      },
    });
    return response.data;
  },

  // Get restaurant menu
  getRestaurantMenu: async (id) => {
    const response = await axios.get(`${RESTAURANT_API}/${id}/menu`, {
      headers: {
        ...DEFAULT_HEADERS,
        ...getAuthHeader(),
      },
    });
    return response.data;
  },

  // Get restaurant categories
  getRestaurantCategories: async (id) => {
    const response = await axios.get(`${RESTAURANT_API}/${id}/categories`, {
      headers: {
        ...DEFAULT_HEADERS,
        ...getAuthHeader(),
      },
    });
    return response.data;
  },

  // Update restaurant status (open/closed)
  updateRestaurantStatus: async (id, isOpen) => {
    const response = await axios.patch(
      `${RESTAURANT_API}/${id}/status`,
      { is_open: isOpen },
      {
        headers: {
          ...DEFAULT_HEADERS,
          ...getAuthHeader(),
        },
      }
    );
    return response.data;
  },

  // Get restaurant statistics
  getRestaurantStats: async (id, params = {}) => {
    const response = await axios.get(`${RESTAURANT_API}/${id}/stats`, {
      params,
      headers: {
        ...DEFAULT_HEADERS,
        ...getAuthHeader(),
      },
    });
    return response.data;
  },
};

export default restaurantAPI;