import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Home from '@/views/Home.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/about',
      name: 'about',
      //コンポーネントが増えロードに時間がかかる場合下記importのコメントのやり方（関数でコンポーネントを返す）にすることで
      //ページが表示するタイミングでコンポーネントが読み込まれるようになる。
      //webpackChunkName:に名前を指定することでバンドル後のコンポーネントファイルを１つにまとめず別に分けることができる（下記はabout.jsになる）
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})
