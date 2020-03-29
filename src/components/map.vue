<template>
  <div>
    <h3>{{a}}</h3>
    <div @click='add'>map增值set()</div>
    <div @click='add1'>map取值get()</div>
    <div @click='add2'>map删除delete()</div>
    <div @click='add3'>map的size属性</div>
    <div @click='add4'>map查找是否存在has()</div>
    <div @click='add5'>map清除所有元素clear()</div>
    <div @click='add6'>map取增值对象中的key和值keys()</div>
    <div @click='add7'>map取增值的key和值entries()</div>
    <div @click='add8'>map遍历forEach()</div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        a:"map数据结构"
      }
    },
    methods:{
      //map增值set()
      add(){
        let json = {
            name:'jspang',
            skill:'web'
        }
        let aa={
          x:'陈宇辉',
          c:'孟丽娟'
        }
        let map=new Map();//声明map对象
        map.set(json,'iam');
        map.set(aa,'add');
        console.log(map);
      },
      //map取值get()
      add1(){
        let json = {
            name:'jspang',
            skill:'web'
        }
        let map=new Map();
        map.set(json,'iam');
        console.log(map.get(json));
      },
      //map删除delete()
      add2(){
        let json = {
            name:'jspang',
            skill:'web'
        }

        let map=new Map();
        map.set(json,'iam');

        map.delete(json);
        console.log(map)
      },
      //map的size属性
      add3(){
        let json = {
            name:'jspang',
            skill:'web'
        }
        let aa={
          x:'陈宇辉',
          c:'孟丽娟'
        }
        let map=new Map();
        map.set(json,'iam');
        map.set(aa,'add');
        console.log(map.size);
      },
      //map查找是否存在has()
      add4(){
        let json = {
            name:'jspang',
            skill:'web'
        }
        let aa={
          x:'陈宇辉',
          c:'孟丽娟'
        }
        let map=new Map();
        map.set(json,'iam');
        map.set(aa,'add');
        console.log(map.has(aa));//ture
        console.log(map.has('aa'));//false
      },
      //map清除所有元素clear()
      add5(){
        let json = {
            name:'jspang',
            skill:'web'
        }
        let aa={
          x:'陈宇辉',
          c:'孟丽娟'
        }
        let map=new Map();
        map.set(json,'iam');
        map.set(aa,'add');
        map.clear()
        console.log(map);//false
      },
      //map取增值对象中的key和值keys()
      add6(){
        let json = {
            name:'jspang',
            skill:'web'
        }
        let aa={
          x:'陈宇辉',
          c:'孟丽娟'
        }
        let map=new Map();//声明map对象
        map.set(json,'iam');
        map.set(aa,'add');
        let maps=map.keys();
        console.log(maps.next().value);
        console.log(maps.next().value);
        console.log(maps);
        //console.log(map.get(json).);
      },
//map取增值的key和值entries()
      add7(){
        let json = {
            name:'jspang',
            skill:'web'
        }
        let aa={
          x:'陈宇辉',
          c:'孟丽娟'
        }
        let map=new Map();//声明map对象
        map.set(json,'iam');
        map.set(aa,'add');
        map.set('xx','add');
        let maps=map.entries();
        console.log(maps.next().value);
        console.log(maps.next().value);
        console.log(maps.next().value);
      },
      //map遍历
      add8(){
        let json = {
            name:'jspang',
            skill:'web'
        }
        let aa={
          x:'陈宇辉',
          c:'孟丽娟'
        }
        let map=new Map();//声明map对象
        map.set(json,'陈');
        map.set(aa,'宇');
        map.set('xx','辉');
        map.forEach(x=>console.log(x))

      }
    }
  }
</script>

<style>
</style>
