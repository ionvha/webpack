import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import Login from '@/components/Login.vue'
// import Register from '@/components/Register.vue'
// import User from '@/components/User.vue'
// import Address from '@/components/Address.vue'
// import Order from '@/components/Order.vue'



const router = new VueRouter({
    routes: [
        { path: '/login', component: () => import('@/components/Login') }, // 使用懒加载
        { path: '/register', component: () => import('@/components/Register') },
        {
            path: '/user', component: () => import('@/components/User'), children: [
                { path: 'address', component: () => import('@/components/Address') },
                { path: 'order', component: () => import('@/components/Order') },
            ]
        }
    ]
})

export default router;