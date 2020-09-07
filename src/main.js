import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import vuelidate from '@/plugins/vuelidate'
import moment from '@/plugins/moment'
import { errorHandler } from '@/utils'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.config.errorHandler = errorHandler

new Vue({
  router,
  store,
  vuetify,
  vuelidate,
  moment,
  render: h => h(App)
}).$mount('#app')
