import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '../douban/login'
import reg from '../douban/reg'
import index from '../douban/index'
import move from '../douban/move'
import book from '../douban/book'
import bc from '../douban/bc'
import team from '../douban/team'
import icon from '../douban/icon'
import usa from '../douban/usa'
import news from '../douban/news'
import cont from '../douban/cont'
// import clear from '../components/clear'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/index"
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/move',
      name: 'move',
      component: move
    },
    {
      path: '/bc',
      name: 'bc',
      component: bc
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/icon',
      name: 'icon',
      component: icon
    },   
    {
      path: '/usa',
      name: 'usa',
      component: usa
    }, 
    {
      path: '/news',
      name: 'news',
      component: news
    },  
    {
      path: '/cont/:arr',
      name: 'cont',
      component: cont
    }
  ]
})
