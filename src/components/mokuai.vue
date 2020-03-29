<template>
  <div>
    <h3>{{a}}</h3>
    <h4>{{b}}</h4>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        a:'模块化操作，export :负责进行模块化，也是模块的输出。import : 负责把模块引，也是模块的引入操作。',
        b:'模块化很简单，稍微百度一下就明白了，这里演示不出来，类似于vue路由器引用组件'
      }
    }
  }
</script>

<style>
</style>
