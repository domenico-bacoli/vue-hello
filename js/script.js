const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Benvenuto!',
        name: "Domenico",
        lastName : "Bacoli",
        
      }
    }
  }).mount('#app')