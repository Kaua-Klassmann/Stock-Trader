import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/StockTrader'
    },
    {
      path: '/StockTrader',
      children: [
        {
          path: '',
          component: () => import('../views/StockTrader.vue')
        },
        {
          path: ':id',
          component: () => import('../views/Product.vue')
        }
      ]
    },
    {
      path: '/Stock',
      component: () => import('../views/Stock.vue')
    },
    {
      path: '/Error',
      component: () => import('../views/Error.vue')
    }
  ]
})

export default router
