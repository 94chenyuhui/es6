<template>
  <div>
    <h3>{{a}}</h3>
    <div @click='add'>类的声明和使用</div>
    <div @click='add1'>类的多方法声明和使用</div>
    <div @click='add2'>类的传参</div>
    <div @click='add3'>类的继承</div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        a:'class'
      }
    },
    methods:{
        add(){
          class coder{//类的声明
            name(val){
              console.log(val)
            }
          }
          //类的使用
          let jspang=new coder;
          jspang.name('陈宇辉');
        },
        //类的多方法声明
        //这里需要注意的是两个方法中间不要写逗号了，还有这里的this指类本身，还有要注意return 的用法。
        add1(){
          class coder{
            name(val){
              console.log(val);
              return val
            }
            skill(val){
              console.log(`${this.name('fdg')}--skill:${val}`)
              return val
            }
            cc(val){
              console.log(this.name('fdg')+val)
            }
          }
          let jspang=new coder;
          jspang.name('陈宇辉');
          jspang.skill('web');
          jspang.cc('孟丽娟');
        },
        //类的传参
        //在类的参数传递中我们用constructor( )进行传参。传递参数后可以直接使用this.xxx进行调用。
        add2(){
          class coder{
            constructor(a,b) {
                this.a=a;
                this.b=b;
            }
            add(){
              return this.a+this.b;
            }
          }
          let jspang=new coder(1,2);
          console.log(jspang.add())
        },
        //类的继承
        add3(){
          class coder{
            name(val){
              console.log(val)
            }
          }
          class htmler extends coder{}//声明一个htmler的新类并继承Coder类，htmler新类里边为空
          let jspang=new coder;
          let chenyuhui=new htmler;
          chenyuhui.name('陈宇辉')//调用新class 的name方法，结果显示 继承了旧class 的name方法
        }
    },
    mounted(){

    }
  }
</script>

<style>
</style>
