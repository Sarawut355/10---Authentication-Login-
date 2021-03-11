import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  var firebaseConfig = {
    apiKey: "AIzaSyC7ZJ_Uub_DXc6KNz2TfpEQp2iSlksMS8w",
    authDomain: "cs313-10-355.firebaseapp.com",
    projectId: "cs313-10-355",
    storageBucket: "cs313-10-355.appspot.com",
    messagingSenderId: "847965646853",
    appId: "1:847965646853:web:8707b846d9460b892bec6c"
  };
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
export const auth = firebase.auth()

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
