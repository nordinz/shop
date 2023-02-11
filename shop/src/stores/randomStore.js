import { defineStore } from "pinia";

export const useRandomStore = defineStore("randomStore", {
  state: () => ({
    productpage: "Welcome to the product section!",
    producttext:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est culpa officiis vel natus doloremque, aliquid dignissimos expedita nihil incidunt ad dolor voluptatem maiores possimus cupiditate quaerat. Nemo velit soluta incidunt asperiores similique ab est, amet esse architecto ad eum officia.",
  }),
});
