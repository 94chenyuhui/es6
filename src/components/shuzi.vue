<template>
  <div>{{aa}}</div>
</template>

<script>
  export default{
    data(){
      return{
        aa:'数字操作'
      }
    },
    mounted(){
      let erJinZhi=0B010101;//二进制 输出21
      console.log('二进制'+erJinZhi)
      let baJinZhi=0o666;//八进制 输出438
      console.log('八进制'+baJinZhi)

      /*
      ** 数字验证Number.isFinite( xx )**

      可以使用Number.isFinite( )来进行数字验证，只要是数字，不论是浮点型还是整形都会返回true，其他时候会返回false。
      */
     console.log('数字验证，只要是数字，不论是浮点型还是整形都会返回true，其他时候会返回false')
      let a= 11/4;
      console.log(Number.isFinite(a));//true
      console.log(Number.isFinite('jspang'));//false
      console.log(Number.isFinite(NaN));//false
      console.log(Number.isFinite(undefined));//false

      //NaN验证  NaN是特殊的非数字，可以使用Number.isNaN()来进行验证。下边的代码控制台返回了true。
      console.log('NaN验证')
      console.log(Number.isNaN(NaN));//ture

      //判断是否为整数  Number.isInteger(xx)
      console.log('判断是否为整数 ')
      let bb= 123.1;
      console.log(Number.isInteger(bb)); //false

      //整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
      console.log('整数转换--浮点型转换')
      let c='9.18';
      console.log(Number.parseInt(c));//9
      console.log(Number.parseFloat(c));//9.18

      //** 整数取值范围操作 **
      //整数的操作是有一个取值范围的，它的取值范围就是2的53次方。9007199254740991
      //在我们计算时会经常超出这个值，所以我们要进行判断，ES6提供了一个常数，叫做最大安全整数，以后就不需要我们计算了。
      console.log('整数取值范围操作')
      let d = Math.pow(2,53)-1;
      console.log(d); //9007199254740991
      console.log(Number.MAX_SAFE_INTEGER);//最大安全整数
      console.log(Number.MIN_SAFE_INTEGER);//最小安全整数
      //判断值是否为安全整数
      console.log('判断值是否为安全整数')
      let y=9007199254740992;
      console.log(Number.isSafeInteger(y))//false

    }
  }
</script>

<style>
</style>
