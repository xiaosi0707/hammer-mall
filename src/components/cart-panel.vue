<template>
  <div class="nav-cart-wrapper" v-show="cartShow">
    <div class="nav-cart-list">
      <div class="empty" v-if="!goodsTotalCount">
        <h3>购物车为空</h3>
        <p>您还没有选购任何商品，现在前往商城选购吧!</p>
      </div>
      <div class="full" v-if="goodsTotalCount">
        <div class="nav-cart-items">
          <ul>
            <li class="clear" v-for="cartItem,index in cartGoodsData">
              <div class="cart-item js-cart-item cart-item-sell">
                <div class="cart-item-inner">
                  <div class="item-thumb">
                    <img :src="cartItem.ali_image">
                  </div>
                  <div class="item-desc">
                    <div class="cart-cell">
                      <h4>
                        <a href="#/item/100027401">{{ cartItem.title }}</a>
                      </h4>
                      <p class="attrs">
                        <span>{{ cartItem.spec_json.show_name }}</span>
                      </p>
                      <h6>
                        <span class="price-icon">¥</span><span class="price-num">{{  cartItem.price}}</span><span class="item-num">x {{ cartItem.count }}</span>
                      </h6>
                    </div>
                  </div>
                  <div class="del-btn" @click="removeCartPanelDataHandle(index)">删除</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="nav-cart-total">
          <p>共 <strong class="ng-binding">{{ goodsTotalCount }}</strong> 件商品</p>
          <h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{ goodsTotalPrice }}</span></h5>
          <h6>
            <a ng-href="http://www.smartisan.com/shop/#/cart" class="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      cartGoodsData () {
        return this.$store.state.cartPanelData
      },
      goodsTotalCount () {
        return this.$store.getters.totalCount
      },
      goodsTotalPrice () {
        return this.$store.getters.totalPrice
      },
      cartShow () {
        return this.$store.getters.stockCount
      }
    },
    methods: {
      removeCartPanelDataHandle (index) {
        console.log(index)
        this.$store.commit('removeCartPanelData', index)
      }
    }
  }
</script>

<style>

</style>
