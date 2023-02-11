

import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => {
    return { products: [] }
  },
  
  actions: {
    async fetchProducts() {
        try {
          const {data} = await axios.get('https://api.escuelajs.co/api/v1/products')
          this.products = data
          console.log(this.products)
        } catch (error) {
          return error
        }
      }
   
  },
})
