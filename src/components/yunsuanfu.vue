<template>
  <div>
    <h3>{{aa}}</h3>

  </div>
</template>

<script>
  export default{
    data(){
      return{
        aa:'对象扩展运算符（...）当编写一个方法 时，允许它传入的参数时不确定的'
      }
    },
    mounted(){
      //对象扩展运算符（...）当编写一个方法 时，允许它传入的参数时不确定的
      function chen (...arr){
        console.log(arr[0]);
        console.log(arr[1]);
        console.log(arr[2]);
      }
      chen(1,2)//输出1，2，undefined 说明可以传入多个值 并且方法引用多了也不会报错

      //扩展运算符的用处
      //我们把arr1赋值给arr2，然后我们改变arr2的值，你会发现arr1的值也改变了，因为我们这是对内存堆栈的引用，而不是真正的赋值。
      let arr1=['陈宇辉','孟丽娟','不错'];
      let arr2=arr1;
      console.log('arr2:'+arr2);//输出arr2:陈宇辉,孟丽娟,不错
      arr2.push('good');
      console.log('arr1:'+arr1);//输出arr1:陈宇辉,孟丽娟,不错,good
      //解决方法
      let ar1=['陈宇辉','孟丽娟','不错'];
      let ar2=[...ar1];
      console.log(ar2)//输出陈宇辉,孟丽娟,不错
      ar2.push("good");
      console.log(ar1+'--'+ar2)//输出陈宇辉,孟丽娟,不错--陈宇辉,孟丽娟,不错,good 不会区改变ar1的值

      //rest运算符
      function yu(...ar){
        console.log(ar.length)
        for(let i of ar){//for..of  数组循环
          console.log(i)//输出123456789
        }
      }
      yu(1,2,3,4,5,6,7,8,9)
    }
  }

</script>

<style scoped="scoped">
</style>
