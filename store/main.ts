import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    brandName: useRuntimeConfig().public.githubUser + ' Pages',
    items: [
      { id: 0, title: "test item 1", body: "item 1 body" },
      { id: 1, title: "test item 2", body: "item 2 body" },
    ],
  }),
  getters: {
    // getter here
  },
  actions: {
    // actions here
  },
});
