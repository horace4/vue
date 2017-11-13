import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import firstcomponents from '@/components/firstcomponents.vue'
import book from '@/components/book.vue'
import movie from '@/components/movie.vue'
import group from '@/components/group.vue'
import broadcast from '@/components/broadcast.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: broadcast
    }
  ]
})
