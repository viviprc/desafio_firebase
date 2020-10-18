import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Add from '../components/Add.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [{
  path: '*',
  redirect: '/login'
  },
  {
  path: '/',
  redirect: '/login'
  },
  {
  path: '/login',
  name: 'login',
  component: Login
  },
  {
  path: '/home',
  name: 'home',
  component: Home,
    meta: {
      login: true
    }
  },
  {
    path: '/add',
    name: 'add',
    component: Add,
      meta: {
        login: true
      }
  }
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  router.beforeEach((to, from, next) => {
    let user = firebase.auth().currentUser;
    let authRequired = to.matched.some(route => route.meta.login);
    if (!user && authRequired){
      next('login');
    }else if (user && !authRequired){
      next('home');
    }else {
      next();
    }
  });



export default router
