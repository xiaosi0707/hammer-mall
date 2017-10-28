/**
 * Created by wyunfei on 2017/10/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartPanelData: [],
    maxStock: false,
    cartShow: false
  },
  getters: {
    totalCount (state) {
      let count = 0
      state.cartPanelData.forEach((goods) => {
        count += goods.count
      })
      return count
    },
    totalPrice (state) {
      let price = 0
      state.cartPanelData.forEach((goods) => {
        price += goods.price
      })
      return price
    },
    stockCount (state) {
      state.cartPanelData.forEach((goods) => {
        if (goods.count > goods.limit_num) {
          goods.count--
          state.maxStock = true
        }
      })
      return state.maxStock
    }
  },
  mutations: {
    addCartPanelData (state, skuItem) { // 添加到购物车
      let bFlag = true
      state.cartPanelData.forEach((goods) => {
        if (goods.sku_id === skuItem.sku_id) {
          goods.count ++
          bFlag = false
        }
      })
      if (bFlag) {
        state.cartPanelData.push(skuItem)
        Vue.set(skuItem, 'count', 1)
        state.cartShow = true
      }
    },
    removeCartPanelData (state, index) {
      state.cartPanelData.splice(index, 1)
    },
    closePrompt (state) {
      state.maxStock = false
    },
    showCart (state) {
      state.cartShow = true
    },
    hideCart (state) {
      state.cartShow = false
    }
  }
})

export default store
