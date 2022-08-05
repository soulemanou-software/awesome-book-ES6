const navigator = document.querySelectorAll('.listNav');
const mainContent = document.querySelector('.main-Content');
const addBook = document.querySelector('.addBookForm');
const contactinfo = document.querySelector('.contact');
// navigation in the page
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
        }
    });
});
window.onload = mainContent.classList.add('main-contentActive');
// navigation in the page

//data for the element
const data =[
    {
        Title:'Sunshine',
        Author:'soulemanou kunchiefuh'
    },
    {
    
        Title:'Google',
        Author:'User Account'
    },
    {
        Title:'Soodely',
        Author:'Babanou '
    },
    {
        Title:'Live trails',
        Author:'davide living stone'
    },
    {
        Title:'Bloque',
        Author:'Fally Ipupa'
    },
   
];
function display(data){
    const bookItem = document.querySelector('.bookItem');
    for(let i=0; i<= data.length; ++i){
        const div = document.createElement('div');
        div.className = 'bookItem';
        // div.className = 'indexBookItem';
        const div2 = document.createElement('div');
        div2.className = 'about-Book';
        div2.innerHTML =`<q>${data[i].Title}</q> 
        &nbsp; By &nbsp;
        <span>${data[i].Author}</span>`;     
        const btnEl = document.createElement('button');
        btnEl.className = 'btnRemove';
        btnEl.innerHTML = 'Remove'
        div.appendChild(div2);
        div.appendChild(btnEl);
        mainContent.appendChild(div);
        console.log(i);
    };
    // console.log(arrElement);
};

display(data);
// 