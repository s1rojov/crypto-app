import { defineStore } from 'pinia'
// import {ref} from 'vue'
export const useCryptoStore = defineStore('crypto', () => {
    // const excelData = ref<any>([])
  
    function reset() {
    //   count.value = 0
    }
  
    return { reset }
  })