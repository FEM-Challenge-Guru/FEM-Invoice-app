// All url related state management is done here
import {create} from "zustand";

// store for the url path of the current page 
export const useUrlPathStore = create((set) => ({
  urlPath: '/',
  setUrlPath: (path) => set({ urlPath: path })
}));