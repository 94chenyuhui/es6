<template>
  <div>
    <h3>{{a}}</h3>
    <div @click="obj">变量直接赋值给对象</div>
    <div @click="obj1">对象key值构造</div>
    <div @click="obj3">Object.is对象比较</div>
    <div @click="obj4">Object.assign对象合并</div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        a:'es6中的对象',
        b:'陈宇辉',
        c:'孟丽娟',
        d:{}
      }
    },
    methods:{
      //变量直接赋值给对象
      obj(){
       let b=this.b,c=this.c
        this.d={b,c};
        console.log(this.d)
        console.log(this.d.b)
        console.log(this.d.c)
      },
      //对象key值构造
      obj1(){
        this.d={
          [this.b]:this.c
        }
        console.log(this.d)
      },
      //Object.is对象比较
      //===为同值相等，is()为严格相等。
      obj3(){
        let b=this.b,c=this.c
        this.d={b,c};
        console.log(Object.is(this.d.b,this.d.c));//值不相等，返回false
        console.log(+0 === -0);  //true
        console.log(NaN === NaN ); //false
        console.log(Object.is(+0,-0)); //false
        console.log(Object.is(NaN,NaN)); //true
      },
      //Object.assign( )合并对象
      //操作数组时我们经常使用数组合并，那对象也有合并方法，那就是assgin( )
      obj4(){
        let a={a:'陈宇辉',b:'孟丽娟'}
        let b={c:'孟丽君',d:'喻军'}
        let d=Object.assign(a,b)
        console.log(d)
      }
    },
    mounted(){
      //自定义对象方法
       var obj2={
         add:function(a,b){
            return a+b
         }
       }
       console.log("自定义对象方法："+obj2.add(1,2));
      // console.log(1,2);

    }
  }
</script>

<style>
</style>
