const app = Vue.createApp({
     data(){
        return {
            showBooks: true,
            title: 'The Tile one', // dynamic changing value
            author: 'W.S.A.Kurera',
            number: 25,
            x: 0,
            y: 0
        }
     },
     methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
     },
     
})

app.mount('#app')