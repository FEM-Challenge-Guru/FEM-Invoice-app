// All authentication related state management is done here
import { create } from "zustand";

// This store is used to manage the user authentication state
export const useAuthenticationStore = create((set) => ({
  isAuthenticated: false,
  setUserAuthentication: (bool) => set({isAuthenticated: bool})
}))

// This store is used to manage user password reset state
export const usePasswordResetStore = create((set) => ({
  linkSent: false,
  resetSuccessful: false,
  setLinkSent: (bool) => set({linkSent: bool}),
  setResetSuccessful: (bool) => set({resetSuccessful: bool})
}))

// This store is used to manage the user login state
export const useLoginStore = create((set) => ({
  passwordInCorrect: false,
  rememberLogin: false,
  setPasswordInCorrect: (bool) => set({passwordInCorrect: bool}),
  setRememberLogin: (bool) => set({rememberLogin: bool})
}))
