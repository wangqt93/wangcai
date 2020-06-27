import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from '../views/Money.vue'
import Labels from '../views/Labels.vue'
import Statistics from '../views/Statistics.vue'
import NotFound from '../views/NotFound.vue'
import EditLable from '@/components/editlabel.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/money'
    },
    {
      path: '/money',
      component: Money
    },
    {
      path: '/labels',
      component: Labels
    },
    {
      path: '/statistics',
      component: Statistics
    },
    {
      path: '/labels/edit',
      component: EditLable
    },
    {
      path: '/*',
      component: NotFound
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
