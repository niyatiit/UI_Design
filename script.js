const menu = document.querySelector('#icon')
const close = document.querySelector('#closeicon')
const navbar = document.querySelector('#navside')

menu.addEventListener('click',()=>{
 navbar.style.display = 'block';
 menu.style.display = 'none';
 close.style.display = 'block';
})

close.addEventListener('click',()=>{
    navbar.style.display = 'none';
    close.style.display = 'none';
    menu.style.display ='block';
})