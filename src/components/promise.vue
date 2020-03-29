<template>
  <div>
    <h3>{{a}}</h3>

  </div>
</template>

<script>
  export default{
    data(){
      return{
        a:'Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值,promise的出现给我们很好的解决了回调地狱的问题',


      }
    },
    methods:{

    },
    mounted() {
      let myFirstPromise = new Promise((resolve,reject)=>{
          //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
          //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
          setTimeout(function(){
              resolve("成功!"); //代码正常执行！
          }, 250);
      });

      myFirstPromise.then((successMessage)=>{
          //successMessage的值是上面调用resolve(...)方法传入的值.
          //successMessage参数不一定非要是字符串类型，这里只是举个例子
          console.log("Yay! " + successMessage);
      });

      let state=1;
      function step1(resolve,reject){
          console.log('1.开始-洗菜做饭');
          if(state==1){
              resolve('洗菜做饭--完成');
          }else{
              reject('洗菜做饭--出错');
          }
      }


      function step2(resolve,reject){
          console.log('2.开始-坐下来吃饭');
          if(state==1){
              resolve('坐下来吃饭--完成');
          }else{
              reject('坐下来吃饭--出错');
          }
      }


      function step3(resolve,reject){
          console.log('3.开始-收拾桌子洗完');
           if(state==1){
              resolve('收拾桌子洗完--完成');
          }else{
              reject('收拾桌子洗完--出错');
          }
      }

      new Promise(step1).then(function(val){
          console.log(val);
          return new Promise(step2);

      }).then(function(val){
           console.log(val);
          return new Promise(step3);
      }).then(function(val){
          console.log(val);
          return val;
      });


    }
  }
</script>

<style>
</style>
