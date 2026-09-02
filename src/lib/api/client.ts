import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Create a centralized Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // Optional: 10 second timeout
});

// Global request interceptor (e.g., for adding Auth tokens dynamically)
axiosInstance.interceptors.request.use(
  (config) => {
    // If you use client-side tokens (like localStorage or cookies)
    // const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

// Global response interceptor for unified error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Custom error formatting to replace the native fetch response.ok check
    const status = error.response?.status || "Unknown";
    const message =
      error.response?.data?.message || error.message || "API Error";

    return Promise.reject(new Error(`API Error [${status}]: ${message}`));
  },
);

/**
 * Core apiClient wrapper matching your original signature
 */
export async function apiClient<T>(
  endpoint: string,
  options?: AxiosRequestConfig,
): Promise<T> {
  const response: AxiosResponse<T> = await axiosInstance({
    url: endpoint,
    withCredentials: true,
    ...options,
  });

  return response.data;
}
