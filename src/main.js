import Vue from 'vue'
import App from './App.vue'

import Liste from './MachinesList.vue'
import Carte from './MachinesMap.vue'

Vue.component('liste',Liste)
Vue.component('carte',Carte )

new Vue({
  el: '#app',
  render: h => h(App)
})
