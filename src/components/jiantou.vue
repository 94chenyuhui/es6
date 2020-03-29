<template>
  <div>
    <h3>{{a}}</h3>
    <div @click="add(1)">参数默认值</div>
    <div @click="add1(0)">主动抛出错误</div>
    <div @click="add2(2,2)">函数中的严谨模式</div>
    <div @click='add3(6)'>箭头函数</div>
    <div @click='add5(json)'>对象的函数解构</div>
    <div @click='add6(...shuzu)'>数组的函数解构</div>
    <div @click='add7(json)'>in判断对象是否存在某个值</div>
    <div @click='add8(shuzu)'>in判断数组是否存在某个值</div>
    <div @click='add9(shuzu)'>数组遍历forEach方法</div>
    <div @click='add10(shuzu)'>数组遍历filter方法</div>
    <div @click='add11(shuzu)'>数组遍历some方法</div>
    <div @click='add12(shuzu)'>数组join方法,数组元素间加入一些间隔</div>
    <div @click='add13(shuzu)'>数组toString方法,用逗号将数组隔开</div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        a:'箭头函数跟扩展',
        json:{a:1,b:2,c:3},
        shuzu:['陈宇辉','孟丽娟']
      }
    },
    methods:{
      //函数参数默认值
      add(a,b=1){

        console.log(a+b)//只有一个参数的情况下，参数a值加b的默认值

      },
      //主动控制台抛出错误
      add1(a,b=1){
        if(a==0){//a参数==0的情况 就在控制台抛出错误
          throw new Error('这是错误')
        }
        console.log(a+b)
      },
      //函数中的严谨模式
      add2(a,b){//严谨模式不能使用默认值,否则会报错
          'use strict'
          if(a == 0){
              throw new Error('This is error');
          }
          console.log(a+b);
      },
      //箭头函数 错误的示范
      add3(a){
       //(a,b)=>console.log(a+b)
      console.log(a=>console.log(a))
      },
      //对象的函数解构
      add5({a,b,c}){
        console.log(a)
        console.log(b)
        console.log(c)
      },
      //数组的函数解构
      add6(a,b,c){
        console.log(a)
        console.log(b)
        console.log(c)
      },
      //in的用法用来判断对象或者数组是否存在某个值 返回ture false
      add7(obj){
        console.log('a' in obj)
      },
      //数组判断
      add8(arr){
        console.log(0 in arr)//这里的0指的是数组下标位置是否为空。
      },
      //数组的遍历方法
      //forEach方法
      add9(arr){
        arr.forEach(x=>console.log(x))
      },
      add10(arr){
        arr.filter(x=>console.log(x))
      },
      add11(arr){
        arr.some(x=>console.log(x))
      },
      add12(arr){
        console.log(arr.join('|'))
      },
      add13(arr){
        console.log(arr.toString())
      }

    },
    mounted() {
      /*
      获得函数必须传递的参数的个数
      但是如果我们去掉严谨模式，并给第二个参数加上默认值的话，这时候add.length的值就变成了1，
      也就是说它得到的是必须传入的参数。
      */
     function add(a,b=1){
        // 'use strict'
         if(a == 0){
             throw new Error('This is error');
         }
          return a+b;
     }
      console.log(add.length);

      //箭头函数
      let add4=(a,b=9)=>{
         console.log(a+b)
       }
       add4(5)

       //对象的函数解构


    }
  }
</script>

<style>
</style>
