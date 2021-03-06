import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'


import Liste from './MachinesList.vue'
import Carte from './MachinesMap.vue'
import Machine from './Machine.vue'

import config from './cle.js'

Vue.component('liste',Liste)
Vue.component('carte',Carte )
Vue.component('machine',Machine)

Vue.use(VueRouter)

Vue.use(VueGoogleMaps, {
   load : {
   	key : config.key_api
   }
})

const routes = [
{ path : '/machines', component: Liste},
{ path : '/map', component : Carte },
{ path : '/machine', component : Machine },
]

const router = new VueRouter ({
	routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})



