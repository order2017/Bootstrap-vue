import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Add from '@/components/Add'
import Details from '@/components/Details'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  mode: "history",
  base:__dirname,

  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
        path: '/add',
        name: 'Add',
        component: Add
    },
    {
       path: '/details/:id',
       name: 'Details',
       component: Details
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: Edit
    }
  ]
})
