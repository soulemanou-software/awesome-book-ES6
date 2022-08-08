import { DateTime } from './src/modules/luxon.js';
import { navbar } from './src/modules/nav.js';
import { display, data } from './src/modules/book-list.js';
// navigation function called
navbar();
// end of navigation function
// data function called
const now = DateTime.now();
const dateTime = document.getElementById('dateTime');
dateTime.innerHTML = `${now.hour}h:${now.minute}m:${now.second}s , ${now.day}-${now.month}-${now.year}`;
//  end date here
// display book list here
display(data);
// end of display book here