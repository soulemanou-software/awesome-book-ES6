const navigator = document.querySelectorAll('.listNav');
const addBook = document.querySelector('.addBookForm');
const contactinfo = document.querySelector('.contact');
const mainContent = document.querySelector('.main-Content');
const navbar = () => {
  // navigation in the page
  navigator.forEach((element) => {
    element.addEventListener('click', () => {
      if (element.id === 'list') {
        mainContent.classList.add('main-contentActive');
        addBook.classList.remove('addBookFormActive');
        contactinfo.classList.remove('contactActive');
      } else if (element.id === 'addBook') {
        addBook.classList.add('addBookFormActive');
        contactinfo.classList.remove('contactActive');
        mainContent.classList.remove('main-contentActive');
      } else if (element.id === 'contact') {
        contactinfo.classList.add('contactActive');
        mainContent.classList.remove('main-contentActive');
        addBook.classList.remove('addBookFormActive');
      }
    });
  });
  window.onload = mainContent.classList.add('main-contentActive');
  // navigation in the page
};
export {
  navbar, mainContent, navigator, addBook, contactinfo,
};