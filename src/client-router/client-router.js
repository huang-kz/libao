import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import index from '../li-components/index/index.vue';
import fixNav from '../li-components/fixNav/fixNav.vue';



const router = new VueRouter({
    routes:[
        {path:'/index',name:'index',component:index},
        {path:'/fixNav',name:'fixNav',component:fixNav}
    ]
})
export default router; 