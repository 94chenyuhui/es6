<template>
  <div>
    <h3>{{a}}</h3>
    <div @click="add">set数组的声明,Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。</div>
    <div @click="add1">Set数组值的add()追加</div>
    <div @click="add2">Set数组值的delete删除</div>
    <div @click="add3">Set数组查找has：返回的是true或者false。</div>
    <div @click="add4">Set数组清空set数组clear。</div>
    <div @click="add5">size属性可以获得Set值的数量</div>
    <div @click="add6">WeakSet对象的声明，不常用</div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        a:'Set数组和WeakSet对象数据结构'
      }
    },
    methods:{
      //set的声明,Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。
      add(){
        let setArr=new Set(['陈宇辉','孟丽娟','陈宇辉','孟丽娟']);
        console.log(setArr);
      },
      //Set值的add()追加
      add1(){
        let setArr=new Set(['陈宇辉','孟丽娟','陈宇辉','孟丽娟']);
        console.log(setArr);
        setArr.add('一家人');
        console.log(setArr)
      },
      //Set值的delete删除
      add2(){
        let setArr=new Set(['陈宇辉','孟丽娟','陈宇辉','孟丽娟']);
        setArr.add('一家人');
        setArr.delete('一家人');
        console.log(setArr);
      },
      //Set查找has：返回的是true或者false
      add3(){
        let setArr=new Set(['陈宇辉','孟丽娟','陈宇辉','孟丽娟']);
        console.log(setArr);//Set {'陈宇辉','孟丽娟'}

        console.log(setArr.has('陈宇辉'));//true
      },
      //Set清空set数组clear
      add4(){
        let setArr = new Set(['jspang','技术胖','web','jspang']);
        console.log(setArr);//Set {"jspang", "技术胖", "web"}
        setArr.clear();
        console.log(setArr);//0
      },
      //size属性可以获得Set值的数量。
      add5(){
        let setArr = new Set(['jspang','技术胖','web','jspang']);
        for (let item of setArr){
            console.log(item);
        }
        console.log(setArr.size);//3
      },
      //WeakSet对象的声明
      add6(){
        let weakObj=new WeakSet();
        let obj={a:'jspang',b:'技术胖'}
        weakObj.add(obj);

        console.log(weakObj);
      }
    }
  }
</script>

<style>
</style>
