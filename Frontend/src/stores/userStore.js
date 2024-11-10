// All user related state management is done here
import { create } from "zustand";

// This store is used to manage the user authentication state
export const useAuthenticationStore = create((set) => ({
  isAuthenticated: false,
  setUserAuthentication: (bool) => set({isAuthenticated: bool})
}))