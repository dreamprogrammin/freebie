const giftItems = document.querySelectorAll('.gift__item')

for(giftItem of giftItems){
    giftItem.addEventListener('click', function () {
       if(this.classList.contains('active')) {
        this.classList.remove('active')
       } else {
         for(giftItemCheck of giftItems){
            giftItemCheck.classList.remove('active')
         }
         this.classList.add('active')
       }
    })
}

const blogsItems = document.querySelectorAll('.blogs__item')

for(blogsItem of blogsItems){
    blogsItem.addEventListener('click', function(){
        if(this.classList.contains('active')){
            this.classList.remove('active')
        } else{
            for(blogsItemCheked of blogsItems){
                blogsItemCheked.classList.remove('active')
            }
            this.classList.add('active')
        }
    })
}