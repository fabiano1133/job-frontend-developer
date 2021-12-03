import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'

Vue.filter("numeroPreco", valor => {
  valor = Number(valor);
  if(!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  }
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
