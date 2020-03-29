<template>
  <div>
    <h3>{{a}}</h3>
    <div @click="add">proxy的get属性:get属性是在你得到某对象属性值时预处理的方法</div>
    <div @click="add1">proxy的set属性:set属性是值你要改变Proxy属性值时，进行的预先处理</div>
    <div @click="add2">proxy的apply属性:调用内部的方法，它使用在方法体是一个匿名函数时</div>
    <div @click="add3">声明proxy</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 'proxy预处理:在运行函数，对象前初始化一些数据，在改变对象值后做一些善后处理,你也可以理解为在执行方法前预处理一些代码。你可以简单的理解为他是函数或者对象的生命周期。'
      }
    },
    methods: {
      /*
      get属性是在你得到某对象属性值时预处理的方法，他接受三个参数

      target：得到的目标值
      key：目标的key值，相当于对象的属性
      property：这个不太常用，用法还在研究中，还请大神指教。
      */
      add() {
        let pro = new Proxy({

          name: 'I am Jspang'
        }, {
          get: function(target, key, property) {
            console.log('come in Get');
            pro.name='预处理'
            return target[key];
          }
        });

        console.log(pro.name);
      },
      /*
      set属性是值你要改变Proxy属性值时，进行的预先处理。它接收四个参数。
      target:目标值。
      key：目标的Key值。
      value：要改变的值。
      receiver：改变前的原始值。
      */
      add1() {
        let pro = new Proxy({
          name: 'I am Jspang'
        }, {
          get: function(target, key) {
            console.log('come in Get');
            return target[key];
          },
          set: function(target, key, value, receiver) {
            console.log(`    setting ${key} = ${value}`);
            return target[key] = value;
          }

        });

        console.log(pro.name);
        pro.name = '技术胖';
        console.log(pro.name);
      },
      /*
      apply的作用是调用内部的方法，它使用在方法体是一个匿名函数时
      */
      add2() {
        let get = function() {
          return 'I am JSPang';
        };
        let handler = {
          apply(target, ctx, args) {
            console.log('do apply');
            return Reflect.apply(...arguments);
          }
        }

        let pro = new Proxy(get, handler);

        console.log(pro());
      },
      add3(){
        let obj=new Proxy({},{})//需要注意的是这里是两个花括号，第一个花括号就相当于我们方法的主体，后边的花括号就是Proxy代理处理区域
        //let obj = new Proxy(对象变量, 对象变量);
        /*let obj=new Proxy({
          方法主题代码
        },{
          预处理代码
        })*/
      }
    },
    mounted() {

    }
  }
</script>

<style>
</style>
