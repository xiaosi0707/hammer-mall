<template>
  <div class="item">
    <div>
      <div class="item-img"><img :alt="item.name_title" :src=" item.sku_info[imgIndex].ali_image + '?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
      </div>
      <h6>{{ item.name }}</h6>
      <h3 >{{ item.name_title }}</h3>
      <div class="params-colors">
        <ul class="colors-list">
          <li v-for="sku,index in item.sku_info" key="skuIndex"><a href="javascript:;" :class="{'active': index === imgIndex}" @click="switchImg(index)"><img :src="'http://img01.smartisanos.cn/' + sku.spec_json.image + '20X20.jpg'"></a></li>
        </ul>
      </div>
      <div class="item-btns clearfix">
        <span class="item-gray-btn"><a href="javascript:;" target="_blank">查看详情</a> </span><span class="item-blue-btn" @click="addCartPanelHandle(item.sku_info[imgIndex])">加入购物车 </span><span></span>
      </div>
      <div class="item-price clearfix">
        <i>¥</i><span>{{ item.price }}</span>
      </div>
      <div class="discount-icon">false</div>
      <div class="item-cover">
        <a href="javascript:;" target="_blank"></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object
      }
    },
    data () {
      return {
        imgIndex: 0
      }
    },
    computed: {
      aaa () {
        return this.$store.state.cartPanelData
      }
    },
    methods: {
      switchImg (index) {
        this.imgIndex = index
      },
      addCartPanelHandle (skuItem) {
        this.$store.commit('addCartPanelData', skuItem)
      }
    }
  }
</script>

<style>

</style>
