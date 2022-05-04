import { defineStore, storeToRefs } from 'pinia'


// EXPORT STORE
export const useGithubStore = defineStore('githubStore', {

  state: () => ({
    user: useRuntimeConfig().public.githubUser,
  }),

  getters: {
    // getter here
  },

  actions: {
    // actions here
  }
});