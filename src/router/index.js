import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import User from '@/components/User.vue'
import Address from '@/components/Address.vue'
import Order from '@/components/Order.vue'

const router = new VueRouter({
    routes:[
        {path:'/login',component:Login},
        {path:'/register',component:Register},
        {path:'/user',component:User,children:[
            {path:'address',component:Address},
            {path:'order',component:Order},
        ]}
    ]
})

export default router;