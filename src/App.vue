<template>
  <div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script scoped type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style lang="less">
  div, h1, h2, h3, h4, h5, h6, ul, li, div, p, span, img, a {
    margin: 0;
    padding: 0
  }
  .fade-enter-active,
	.fade-leave-active { 
    transition: all 0.3s ease-out;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>
