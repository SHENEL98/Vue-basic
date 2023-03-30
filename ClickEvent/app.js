const app = Vue.createApp({
     data(){
        return {
            showBooks: true,
            title: 'The Tile one', // dynamic changing value
            author: 'W.S.A.Kurera',
            number: 25
        }
     },
     methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
     },
     
})

app.mount('#app')