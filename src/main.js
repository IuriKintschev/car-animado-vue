import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

// imports

// estilo
import './scss/Estilos.scss'
// estilo end

// imports end

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
