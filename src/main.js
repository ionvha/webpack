// let index = require('./lib/index.js')

import index1 from './lib/index1.js'

import css from './css/css.css'

import sass from './css/color.scss'

import acator from './images/1.jpg'

import Vue from 'vue';

import router from '@/router/index.js'

import App from './App.vue'

import axios from '@/api/index';
import {httpGet,httpPost} from '@/util/tool'

// 挂载axios 
Vue.prototype.$axios = axios; // 会走请求和响应拦截器
Vue.prototype.$httpGet = httpGet; // 不会走请求和响应拦截器
Vue.prototype.$httpPost = httpPost; // 不会走请求和响应拦截器

new Vue({
    data:{
        message:'我是root组件'
    },
    router,
    render: h => h(App)
}).$mount('#app')

// console.log(sass)
// console.log(css)
// console.log(index);
// console.log(index1);



const img = new Image()
img.src = acator;
img.classList.add('imgtitle')
document.body.appendChild(img)

