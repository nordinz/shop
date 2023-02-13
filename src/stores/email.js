import { defineStore } from "pinia";

export const useMailStore = defineStore("email", {
  state: () => {
    return { email: "" };
  },

  actions: {
    submitEmail(arg) {
      this.email = arg;
    },
  },
});
