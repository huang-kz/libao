import Vue from 'vue';

import router from './client-router/client-router'

import libaoComponent from './li-components/libao/libao.vue'

new Vue({
    el: '#libao',
    router,
    render: h => h(libaoComponent)
})