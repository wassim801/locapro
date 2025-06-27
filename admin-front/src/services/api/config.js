// API Configuration
export const API_BASE_URL = 'http://localhost:3000/api';

// Request timeout in milliseconds
export const REQUEST_TIMEOUT = 30000;

// API Endpoints
export const ENDPOINTS = {
  AUTH: '/auth',
  USERS: '/users',
  DRIVERS: '/drivers',
  ORDERS: '/orders',
  RESTAURANTS: '/restaurants',
  SETTINGS: '/settings',
  ADMIN: {
    RESTAURANTS: '/admin/restaurants',
    USERS: '/admin/users',
    DRIVERS: '/admin/drivers',
    ORDERS: '/admin/orders',
    SETTINGS: '/admin/settings',
    DASHBOARD: '/admin/dashboard',
  },
};

// Response status codes
export const STATUS_CODES = {
  SUCCESS: '1',
  ERROR: '0',
};

// Default headers
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error occurred. Please check your connection.',
  TIMEOUT_ERROR: 'Request timed out. Please try again.',
  SERVER_ERROR: 'Server error occurred. Please try again later.',
  UNAUTHORIZED: 'Unauthorized access. Please login again.',
  NOT_FOUND: 'Resource not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  DUPLICATE_ERROR: 'This resource already exists.',
  PERMISSION_ERROR: 'You do not have permission to perform this action.',
};

// Authentication
export const AUTH_CONFIG = {
  TOKEN_KEY: 'admin_token',
  REFRESH_TOKEN_KEY: 'admin_refresh_token',
  TOKEN_TYPE: 'Bearer',
};

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
};