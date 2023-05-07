import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
const AboutView = () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
import EventSingleView from '@/views/EventSingleView.vue'
import EventDetails from '@/views/Event/Detail.vue'
import EventEdit from '@/views/Event/Edit.vue'
import EventRegister from '@/views/Event/Register.vue'
import EventLayout from '@/views/Event/Layout.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'
import NProgress from 'nprogress'
import gStore from '@/stores'
import EventService from '@/services/event.service.js'

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
      path: '/about-us',
      name: 'about',
      component: AboutView,
      alias: '/about'
    },
    {
      path: '/event/:id',
      name: 'event-single',
      component: EventLayout,
      beforeEnter: async (to) => {
        try {
          const result = await EventService.getEvent(to.params.id)
          if (result) {
            gStore.event = result.data
          }
        } catch (error) {
          console.log(error)
          if (error.response && error.response.status == 404) {
            console.log('okko')
            return { name: '404resource', params: { resource: 'event' } }
          } else {
            console.log('network')
            return { name: 'network-error' }
          }
        }
      },
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetails
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit,
          meta: { requireAuth: true }
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister
        }
      ]
    },
    {
      path: '/events/:afterEvent(.*)',
      redirect: (to) => {
        return { path: '/event/' + to.params.afterEvent }
      }
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/404/:resource',
      name: '404resource',
      props: true,
      component: NotFound
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkError
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else
      return {
        top: 0
      }
  }
})

router.beforeEach((to, from) => {
  NProgress.start()
  const notAuthorized = true
  if (to.meta.requireAuth && notAuthorized) {
    gStore.flashMessage = 'Sorry, You dont have authorize to access this page'
    setTimeout(() => {
      gStore.flashMessage = ''
    }, 3000)
    if (from.href) {
      return false
    } else {
      return { path: '/' }
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})
export default router
