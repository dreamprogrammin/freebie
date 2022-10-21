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

const headerBurger = document.querySelector('.header__burger'),
      headerMenu = document.querySelector('.header__menu').cloneNode(1),
      popup = document.querySelector('.popup'),
      body = document.querySelector('body')

const renderPopup = () =>{
    popup.appendChild(headerMenu)
} 

const initBurger = () => {
    headerBurger.classList.toggle('active')
    popup.classList.toggle('open')
    body.classList.toggle('lock')
    renderPopup()
}


window.addEventListener('click',initBurger)


