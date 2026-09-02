import { create } from "zustand";

export interface User {
  userId: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  totalUrls: number;
  totalVisits: number;
  activeUrls: number;
  // add other profile fields
}

interface AuthState {
  user: User | null;
  loading: boolean;
  loadingData: boolean;
  isAuthenticated: boolean;

  setUser: (user: User) => void;
  clearUser: () => void;
  setLoading: (loading: boolean) => void;
  setLoadingData: (loading: boolean) => void;
  setIsAuthenticated: (authenticated: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  loadingData: true,
  isAuthenticated: false,

  setUser: (user) => set({ user, loading: false }),
  clearUser: () =>
    set({
      user: null,
      loading: false,
    }),

  setLoading: (loading) => {
    set({ loading });
  },
  setLoadingData: (loadingData) => {
    set({ loadingData });
  },
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));
