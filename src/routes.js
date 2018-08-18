import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'
import Portfolio from './components/Portfolio.vue'

Vue.use(VueRouter)

const router = new VueRouter ({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/gallery',
      component: Gallery
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/portfolio',
      component: Portfolio
    }
  ]
})

export default router
