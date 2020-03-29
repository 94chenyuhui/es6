<template>
  <div>
    <h3>{{chen}}</h3>
    <div @click="add">Array.from方法：JSON数组格式转换为数组</div>
    <div @click="add1">Array.of()方法：负责将一堆文本或者变量转换为数组</div>
    <div @click="add2">find( )实例方法:数组查找，所谓的实例方法就是并不是以Array对象开始的，而是必须有一个已经存在的数组</div>
    <div @click="add3">fill( )实例方法：它的作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。</div>
    <div @click="add4">数组遍历 for...of循环</div>
    <div @click="add5">entries( )实例方法：生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。</div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        chen:'数组知识'
      }
    },methods:{
        add(){
          //JSON数组格式转换为数组
          let json={//标准的JSON数组格式，跟普通的JSON对比是在最后多了一个length属性
          //只要是这种特殊的json格式都可以轻松使用ES6的语法转变成数组
            '0':'陈宇辉',
            '1':'跟',
            '2':'孟丽娟',
            length:3
          }
          let arr=Array.from(json);
          console.log(arr)
        },
        add1(){
          //Array.of()方法：负责将一堆文本或者变量转换为数组
          let arr1 =Array.of(3,4,5,6);
          console.log(arr1);//[3, 4, 5, 6]
          let arr2 =Array.of('技术胖','jspang','大胖逼逼叨');
          console.log(arr2);//["技术胖", "jspang", "大胖逼逼叨"]
        },
        add2(){
          /*数组中查找
           find( )实例方法:所谓的实例方法就是并不是以Array对象开始的，而是必须有一个已经存在的数组，然后使用的方法
               value：表示当前查找的值。
               index：表示当前查找的数组索引。
               arr：表示当前数组。
           */
          let arr3=[1,'陈',3,4,5,6,7,8,9];
          console.log(arr3.find(function(value,index,arr){
             let a1=value == '陈';//数组中查找是否有这个值
             let a2=index==a1;//数组中获取这个值的下标
              return a2//返回这个值的下标
          }))

        },
        add3(){
          //fill( )实例方法：
          //它的作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。
          let arr4=['宇','辉'];
          let arr3=[1,'陈',3,4,5,6,7,8,9];
          arr3.fill(arr4,2,3);
          console.log(arr3)//[1, "陈", Array(2), 4, 5, 6, 7, 8, 9]
          console.log(arr3[2])//["宇", "辉"]
          console.log(arr3[2][0])//宇
        },
        add4(){
          //数组遍历 for...of循环
          let arr3=[1,'陈',3,4,5,6,7,8,9];
          for(let i of arr3){//普通数组循环遍历
            console.log(i)
          }
          for(let i of arr3.keys()){//遍历数组的索引
            console.log(i)
          }
          for (let [index,i] of arr3.entries()) {//同时遍历数组索引和内容
            console.log(index+':'+i)
          }
        },
        add5(){
          //entries( )实例方法：
          //生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。
          let arr5=['jspang','技术胖','大胖逼逼叨']
          let list=arr5.entries();
          console.log(list.next().value);
          console.log(list.next().value);
          console.log(list.next().value);
        }

    },
    mounted(){











    }
  }
</script>

<style>
</style>
