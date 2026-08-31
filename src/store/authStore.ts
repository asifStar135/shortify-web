import { create } from "zustand";

export interface User {
  user_id: number;
  username: string;
  // add other profile fields
}

interface AuthState {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;

  setUser: (user: User) => void;
  clearUser: () => void;
  setLoading: (loading: boolean) => void;
  setIsAuthenticated: (authenticated: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
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
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));
