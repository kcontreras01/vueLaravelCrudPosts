require('./bootstrap');

window.Vue = require('vue');
window.VueRouter = require('vue-router').default;
window.VueAxios = require('vue-axios').default;
window.Axios = require('axios').default;

let AppLayout = require('./components/App.vue');

// show the list of posts template
const Index = Vue.component('Index', require('./components/Index'));

// add posts template
const Add = Vue.component('Add', require('./components/Add'));

// edit post template
const Edit = Vue.component('Edit', require('./components/Edit'));

// delete post template
const Delete = Vue.component('Delete', require('./components/Delete'));

// view single post template
const Show = Vue.component('Show', require('./components/Show'));


Vue.use(VueRouter, VueAxios, axios);

const routes = [
    {
        name: 'Index',
        path: '/',
        component: Index
    },
    {
        name: 'Add',
        path: '/add-post',
        component: Add
    },
    {
        name: 'Edit',
        path: '/edit/:id',
        component: Edit
    },
    {
        name: 'Delete',
        path: '/post-delete',
        component: Delete
    },
    {
        name: 'Show',
        path: '/view/:id',
        component: Show
    }
];

const router = new VueRouter({mode: 'history', routes: routes})

new Vue (
    Vue.util.extend(
        {router},
        AppLayout
    )
).$mount('#app');
