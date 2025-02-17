import { create } from 'zustand';

type User = {
  username: string;
  email: string;
};

type AuthState = {
  isLoggedIn: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

const useAuthStore = create<AuthState>(set => ({
  isLoggedIn: false,
  user: null,

  login: userData => set({ isLoggedIn: true, user: userData }),

  logout: () => set({ isLoggedIn: false, user: null }),
}));

export default useAuthStore;
