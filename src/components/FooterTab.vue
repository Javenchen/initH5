<template>
  <div class="FooterTab">
    <div>首页</div>
    <div>分类</div>
    <div>购物车</div>
    <div>我的</div>
  </div>
</template>

<script>


export default {
  name: 'FooterTab',
  components: {
    
  }
}
</script>


<style lang="scss">

.FooterTab{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.2rem;
    display: flex;
    background: #666;
    justify-content: space-around;
    div{
        color: #fff;
        width: 1.2rem;
        height: 1.2rem;
        line-height: 1.2rem
    }
}
</style>