const { createApp } = Vue

  createApp({
    data() {

      return {
        title: 'Titolo inserito da',
        name: "Domenico",
        lastName : "Bacoli",
        image: "https://fastly.picsum.photos/id/26/400/300.jpg?hmac=kT8L13wPBGnPU46rd2Qb6ToAR1O9ML5UvdYTJS3Y7pU",
        nameLastNameColor: "red",
      }

    }
  }).mount('#app')