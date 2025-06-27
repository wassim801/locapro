import axios from 'axios';
import { API_BASE_URL } from './config';

const DRIVERS_URL = `${API_BASE_URL}/drivers`;

export const driversAPI = {
  getDrivers: async () => {
    const response = await axios.get(DRIVERS_URL);
    return response.data.payload;
  },

  getDriver: async (id) => {
    const response = await axios.get(`${DRIVERS_URL}/${id}`);
    return response.data.payload;
  },

  updateDriver: async (data) => {
    const response = await axios.put(`${DRIVERS_URL}/${data.id}`, data);
    return response.data.payload;
  },

  deleteDriver: async (id) => {
    const response = await axios.delete(`${DRIVERS_URL}/${id}`);
    return response.data.payload;
  },

  updateDriverStatus: async (id, status) => {
    const response = await axios.patch(`${DRIVERS_URL}/${id}/status`, { status });
    return response.data.payload;
  },

  updateDriverLocation: async (id, location) => {
    const response = await axios.patch(`${DRIVERS_URL}/${id}/location`, location);
    return response.data.payload;
  },

  getDriverDeliveries: async (id) => {
    const response = await axios.get(`${DRIVERS_URL}/${id}/deliveries`);
    return response.data.payload;
  },

  getDriverStats: async (id) => {
    const response = await axios.get(`${DRIVERS_URL}/${id}/stats`);
    return response.data.payload;
  },
};