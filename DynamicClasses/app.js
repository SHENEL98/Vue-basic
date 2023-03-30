const app = Vue.createApp({
     data(){
        return {
            showBooks: true,
            url :'https://www.w3schools.com/',
            //data passing by array
            books:[
                {title: 'title 1', author:'author 1' ,img:'assets/1.jpg', isFav:true},
                {title: 'title 2', author:'author 2' ,img:'assets/2.jpg', isFav:false},
                {title: 'title 3', author:'author 3' ,img:'assets/3.jpg', isFav:true},
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