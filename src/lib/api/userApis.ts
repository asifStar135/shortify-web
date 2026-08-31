import { apiClient } from "./client";

export default {
  registerUser: async ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => {
    return apiClient<any>("/api/user/register", {
      method: "POST",
      data: JSON.stringify({ username, email, password }),
    });
  },
  loginUser: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    return apiClient<any>("/api/user/login", {
      method: "POST",
      data: JSON.stringify({ username, password }),
    });
  },
  getUserProfile: async () => {
    return apiClient<any>("/api/user/profile", {
      method: "GET",
    });
  },
};
