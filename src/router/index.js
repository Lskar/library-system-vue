import { createRouter, createWebHistory } from 'vue-router'

import IndexView from '../views/index/index.vue'
import LoginView from '../views/login/index.vue'
import BookView from '../views/book/index.vue'
import RecordView from '../views/record/index.vue'
import ReaderView from '../views/reader/index.vue'
import AdministratorView from '../views/administrator/index.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'index',
      component: IndexView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/book',
      name: 'book',
      component: BookView
    },
    {
      path: '/reader',
      name: 'reader',
      component: ReaderView
    },

    {
      path: '/record',
      name: 'record',
      component: RecordView
    }
    ,
    {
      path: '/administrator',
      name: 'administrator',
      component: AdministratorView
    }
  ]
})

export default router
