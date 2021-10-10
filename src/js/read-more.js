let products__button = document.querySelectorAll('.products__button');
for (let i = 0; i<products__button.length; i++) {
    products__button[i].addEventListener('click', function(){
        products__button[i].parentNode.classList.toggle('active')
    })
}