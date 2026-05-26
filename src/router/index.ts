import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/portfolio-first-iteration/'),
  routes: [
    {
      path: '/',
      name: 'Root',
      component: () => import('../views/About.vue')
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import('../views/Resume.vue')
    },
    {
      path: '/game-projects',
      name: 'GameProjects',
      component: () => import('../views/GameProjects.vue')
    },
    {
      path: '/other-projects',
      name: 'OtherProjects',
      component: () => import('../views/OtherProjects.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('../views/404.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

export default router
