<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">首页</router-link>
    <router-link to="/jiegoufuzhi">变量解构赋值</router-link>
    <router-link to="/yunsuanfu">扩展运算符和rest运算符</router-link>
    <router-link to="/zifuchuan">字符串模板</router-link>
    <router-link to="/shuzi">数字操作</router-link>
    <router-link to="/shuzu">新增数组知识</router-link>
    <router-link to="/jiantou">箭头函数跟扩展</router-link>
    <router-link to="/duixiang">es6中的对象</router-link>
    <router-link to="/symbol">symbol在对象中得作用</router-link>
    <router-link to="/shujujiegou">Set和WeakSet数据结构</router-link>
    <router-link to="/map">map数据结构</router-link>
    <router-link to="/proxy">proxy对象预处理</router-link>
    <router-link to="/promise">promise对象的使用</router-link>
    <router-link to="/class1">class类的使用</router-link>
    <router-link to="/mokuai">模块化操作</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* html *{ css调试代码
  outline: 1px solid red;
} */
</style>
