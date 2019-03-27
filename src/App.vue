<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/login">About</router-link> -->
    <router-view/>
  </div>
</template>
<style lang="stylus">
html,body,#app
  width 100%
  height 100%
  background-image url(/images/bg.png)
  background-repeat no-repeat
  background-size 100% 100%
  background-position center
  position relative
</style>
<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
<style lang="stylus">
@import './assets/styl/common.styl'
</style>

