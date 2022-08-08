import { mainContent } from './nav.js';

const data = [
  {
    Title: 'Sunshine',
    Author: 'soulemanou kunchiefuh',
  },
  {

    Title: 'Google',
    Author: 'User Account',
  },
  {
    Title: 'Soodely',
    Author: 'Babanou ',
  },
  {
    Title: 'Live trails',
    Author: 'davide living stone',
  },
  {
    Title: 'Bloque',
    Author: 'Fally Ipupa',
  },
];
const display = (data) => {
  // const bookItem = document.querySelector('.bookItem');
  for (let i = 0; i <= data.length; i += 1) {
    const div = document.createElement('div');
    div.className = 'bookItem';
    // div.className = 'indexBookItem';
    const div2 = document.createElement('div');
    div2.className = 'about-Book';
    div2.innerHTML = `<q>${data[i].Title}</q> 
              &nbsp; By &nbsp;
              <span>${data[i].Author}</span>`;
    const btnEl = document.createElement('button');
    btnEl.className = 'btnRemove';
    btnEl.innerHTML = 'Remove';
    div.appendChild(div2);
    div.appendChild(btnEl);
    mainContent.appendChild(div);
  }
};
export { display, data };