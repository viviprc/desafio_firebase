import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import firebase from 'firebase'
import Element from 'element-ui'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


var firebaseConfig = {
  apiKey: "AIzaSyCupIKpwJaIhkS0VZFwHcclndQuCU22hXs",
  authDomain: "desafio-autenticacion.firebaseapp.com",
  databaseURL: "https://desafio-autenticacion.firebaseio.com",
  projectId: "desafio-autenticacion",
  storageBucket: "desafio-autenticacion.appspot.com",
  messagingSenderId: "919096810956",
  appId: "1:919096810956:web:32bcb7b19172660efd5169"
};

firebase.initializeApp(firebaseConfig);

Vue.use(BootstrapVue);
Vue.use(Element);
Vue.use(axios);
Vue.use(Vuex);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount('#app')
