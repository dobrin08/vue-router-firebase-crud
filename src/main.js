import './firebase'
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import router from './router'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(firestorePlugin)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')