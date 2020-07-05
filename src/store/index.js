import Vue from 'vue'
import Vuex from 'vuex'
import products from '../modules/products.module';
import cart from '../modules/cart.module'



// Plugins
import VuexPersistence from 'vuex-persist'
import LocalForage from 'localforage';


const vuexLocal = new VuexPersistence({

  //storage: window.localStorage,
  storage: LocalForage,
  asyncStorage: true,
  // indica que módulos va a guardar,
  // si no se indican los o el modulo a guardar en el modules
  // de aquí se guarda todos los módulos que estén especificados e el Vuex.Store
  // en automatico
  modules:['cart']
})

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    products,
    cart
  },
  plugins: [vuexLocal.plugin]

})
