<template>
  <div>
    <h3>{{w}}</h3>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        aa:'孟丽娟',
        w:'字符串模版的出现让我们再也不用拼接变量了，而且支持在模板里有简单计算操作'
      }
    },
    mounted(){

      let c='陈宇辉'
      let a=`女:${this.aa}--男:${c}`
      console.log(a)
      let jspang='技术胖';
      let blog = `非常高兴你能看到这篇文章，我是你的老朋友${jspang}。这节课我们学习字符串模版。`;
     // document.write(blog);
     console.log(blog)
    console.log(blog.includes('文章'))//判断此字符串是否存在，返回true false

    console.log(blog.startsWith(jspang))//判断开头是否存在

    console.log(blog.endsWith(jspang))//判断结尾是否存在

    console.log(jspang.repeat(3));//复制字符串，赋值几次
    }
  }
</script>

<style>
</style>
