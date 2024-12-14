let cate = document.querySelector('#cate')
let pin = document.querySelector('#pin')
let ham = document.querySelector('#ham')
cate.addEventListener('click',()=>{
    cate.children[1].classList.toggle('show')
})
ham.addEventListener('click', ()=>{
    pin.classList.toggle('pin')
    ham.children[0].classList.toggle('ch1')
    ham.children[1].classList.toggle('ch2')
    ham.children[2].classList.toggle('ch3')
})