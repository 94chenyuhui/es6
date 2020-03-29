<template>
  <div>
    <h3>{{aa}}</h3>
    <div @click="add">数组解构</div>
    <div @click="add1">对象的解构赋值</div>
    <div @click="add2">字符串解构</div>
    <div @click="add3">解构的默认值：</div>
  </div>
</template>

<script >
  export default{
    data(){
      return{
        aa:'变量解构赋值'
      }
    },
    methods:{
      //数组解构
      add(){
        //let a=1;let b=2;let c=3;    es5是这样为变量赋值的
        //let [a,b,c]=[1,2,3];  es6可以这样赋值
        let [a,[b,c],d]=[1,[2,3],4]//123undefined  如果两边形式不一样 会报错或者获得undefined
        console.log(a,b,c,d)


      },
      //对象的解构赋值
      add1(){
        let {fooo,bar='孟丽娟'}={fooo:'陈宇辉',bar};//对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
        console.log(fooo+bar)//陈宇辉 孟丽娟

        let chen;//如果在解构之前就定义了变量，只要在解构的语句外边加一个圆括号就可以
        ({chen}={chen:'陈宇辉'})//控制台输出 陈宇辉
      },
      //字符串解构
      add2(){
        let [q,w,e]='陈宇辉';
        console.log(q)//陈
        console.log(w)//宇
        console.log(e)//辉
      },
      //解构的默认值：
      add3(){
        let [foo=true]=[];//tuer  es6可以允许默认值，
        console.log(foo)
        let [ag,bfds='陈宇辉']=['孟丽娟']  //控制台显示 孟丽娟 陈宇辉
        console.log(ag+bfds)
        let [a1,b1='陈宇辉']=['孟丽娟',undefined]//控制台显示孟丽娟 陈宇辉 因为undefined相当于什么都没有，所有显示默认值
        console.log(a1+b1)
        let [a2,b2='陈宇辉']=['孟丽娟',null]//控制台显示孟丽娟 null 因为null相当于有值，所有没有取默认值，而是解构成为null
        console.log(a2+b2)
      }
    }
  }

</script>

<style>
</style>
