let index = require('./lib/index.js')

import index1 from './lib/index1.js'

// import css from './css/css.css'

// import sass from './css/color.scss'

import acator from './images/1.jpg'


// console.log(sass)
// console.log(css)
console.log(index);
console.log(index1);



const img = new Image()
img.src = acator;
img.classList.add('imgtitle')
document.body.appendChild(img)