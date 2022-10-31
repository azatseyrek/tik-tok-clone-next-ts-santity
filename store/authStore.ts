// create store with zustand

import axios from 'axios';
import create from 'zustand';
import { persist } from 'zustand/middleware'; // persist is used to persist the store in local storage

const authStore = (set: any) => ({
  userProfile: null,
  addUser: (user: any) => set({ userProfile: user }),
  logoutUser: () => set({ userProfile: null }),
});

const useAuthstore = create(
  persist(authStore, {
    name: 'auth',
  }),
);

export default useAuthstore;
