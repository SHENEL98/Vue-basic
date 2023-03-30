const app = Vue.createApp({
     data(){
        return {
            showBooks: true,
            //data passing by array
            books:[
                {title: 'title 1', author:'author 1'},
                {title: 'title 2', author:'author 2'},
                {title: 'title 3', author:'author 3'},
            ]
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