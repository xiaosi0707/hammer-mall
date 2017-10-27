<template>
<div>
  <header-nav></header-nav>
  <div id="main">
    <div class="sku-box store-content">
      <div class="sort-option">
        <ul class="line clear">
          <li><a href="javascript:;" class="active">综合排序</a></li>
          <li><a href="javascript:;" class="">销量排序</a></li>
          <li><a href="javascript:;" class="">价格低到高</a></li>
          <li><a href="javascript:;" class="">价格高到低</a></li>
        </ul>
      </div>
      <div class="gray-box">
        <div class="item-box">
          <goods-item key="index" v-for="item,index in goodsList" :item="item"></goods-item>
        </div>
      </div>
    </div>
  </div>
  <prompt v-if="maxStock"></prompt>
</div>
</template>

<script>
  import headerNav from '@/components/header-nav'
  import goodsItem from '@/components/goods-item'
  import prompt from '@/components/prompt'
  import Axios from 'axios'
  export default {
    components: {
      headerNav,
      goodsItem,
      prompt
    },
    data () {
      return {
        goodsList: []
      }
    },
    computed: {
      maxStock () {
        return this.$store.state.maxStock
      }
    },
    created () {
      Axios.get('http://www.easy-mock.com/mock/59f1df9dd00d13585e251066/hammer/goodsData').then((response) => {
        this.goodsList = response.data
      }).catch((err) => {
        alert(err)
      })
    }
  }
</script>

<style>

</style>
