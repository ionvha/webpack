// let index = require('./lib/index.js')

import index1 from './lib/index1.js'

import css from './css/css.css'

import sass from './css/color.scss'

import acator from './images/1.jpg'

import Vue from 'vue';

import router from '@/router/index.js'

import api from './api' 

import App from './App.vue'
new Vue({
    data:{
        message:'我是root组件'
    },
    router,
    render: h => h(App)
}).$mount('#app')

Vue.prototype.$api = api;
// console.log(sass)
// console.log(css)
// console.log(index);
// console.log(index1);



const img = new Image()
img.src = acator;
img.classList.add('imgtitle')
document.body.appendChild(img)

