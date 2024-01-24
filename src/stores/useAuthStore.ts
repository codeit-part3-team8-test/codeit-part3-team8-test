import { create } from 'zustand';
import getUsers from '@/apis/getUsers';
import signin from '@/apis/signin';

interface AuthStoreState {
  isLoggedIn: boolean;
  user: any;
}

interface AuthStoreActions {
  setUser: (user: any) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthStoreState & AuthStoreActions>((set) => ({
  isLoggedIn: false,

  user: null,
  setUser: (user: any) => set({ user }),

  login: async (email: string, password: string) => {
    await signin(email, password);

    const user = await getUsers();
    set({ isLoggedIn: true, user });
  },

  logout: () => {
    set({ isLoggedIn: false, user: null });
    localStorage.clear();
  },
}));

export default useAuthStore;
