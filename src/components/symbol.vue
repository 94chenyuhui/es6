<template>
  <div>
    <h3>{{a}}</h3>
    <div @click="add">声明Symbol,并判断数据类型</div>
    <div @click="add1">Symbol控制台得区别</div>
    <div @click="add2">Symbol构建对象的Key，并调用和赋值</div>
    <div @click="add3">Symbol对象元素的循环保护作用</div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        a:"Symbol在对象中得作用"
      }
    },
   methods:{
     add(){
       let b=Symbol();
       console.log(typeof(b))//判断数据类型
     },
     //Symbol控制台得区别
     add1(){
       var g = Symbol('jspang');
       console.log(g);
       console.log(g.toString());//没有toString的是红字，toString的是黑字
     },
     //Symbol构建对象的Key，并调用和赋值
     add2(){
       let jspang=Symbol();
       let obj={
         [jspang]:'陈宇辉'
       }
       console.log(obj[jspang])
       obj[jspang]='web'
       console.log(obj[jspang])
     },
     //Symbol对象元素的保护作用
     //不想别人知道我的年龄，这时候我就可以使用Symbol来进行循环保护。
     add3(){
       let obj={name:'陈宇辉',skill:'web',age:18}
       for(let item in obj){
         console.log(`没有进行保护的写法：${obj[item]}`)
       }
       let obj1={name:'陈宇辉',skill:'web'}
       let age=Symbol();
       obj1[age]=18;
       for(let item in obj1){
         console.log(`进行保护的写法：${obj1[item]}`)
       }
     }
   }
  }
</script>

<style>
</style>
