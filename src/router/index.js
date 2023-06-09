import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import EventSingleView from '@/views/EventSingleView.vue'
import EventDetails from '@/views/Event/Detail.vue'
import EventEdit from '@/views/Event/Edit.vue'
import EventRegister from '@/views/Event/Register.vue'
import EventLayout from '@/views/Event/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/event/:id',
      name: 'event-single',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetails
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister
        }
      ]
    }
  ]
})

export default router
