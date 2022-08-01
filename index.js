const navigator = document.querySelectorAll('.listNav');
const mainContent = document.querySelector('.main-Content');
const addBook = document.querySelector('.addBookForm');
const contactinfo = document.querySelector('.contact');
navigator.forEach(element => {
    element.addEventListener('click',()=>{
        if(element.id == 'list'){
            mainContent.classList.add('main-contentActive');
            addBook.classList.remove('addBookFormActive');
            contactinfo.classList.remove('contactActive');
        }else if(element.id == 'addBook'){
            addBook.classList.add('addBookFormActive');
            contactinfo.classList.remove('contactActive');
            mainContent.classList.remove('main-contentActive');
        }else if( element.id =='contact'){
            contactinfo.classList.add('contactActive');
            mainContent.classList.remove('main-contentActive');
            addBook.classList.remove('addBookFormActive');
        }else{
            console.log('ces pas les lol');
        }
    });
});
window.onload = mainContent.classList.add('main-contentActive');