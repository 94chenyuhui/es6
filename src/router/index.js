import Vue from 'vue'
import Router from 'vue-router'
import jiegoufuzhi from '@/components/jiegoufuzhi'
import yunsuanfu from '@/components/yunsuanfu'
import zifuchuan from '@/components/zifuchuan'
import shuzi from '@/components/shuzi'
import shuzu from '@/components/shuzu'
import jiantou from '@/components/jiantou'
import duixiang from '@/components/duixiang'
import symbol from '@/components/symbol'
import shujujiegou from '@/components/shujujiegou'
import map from '@/components/map'
import proxy from '@/components/proxy'
import promise from '@/components/promise'
import class1 from '@/components/class1'
import mokuai from '@/components/mokuai'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path:'/jiegoufuzhi',
      component:jiegoufuzhi
    },
    {
      path:'/yunsuanfu',
      component:yunsuanfu
    },
    {
    path:'/zifuchuan',
    component:zifuchuan
    },{
      path:'/shuzi',
      component:shuzi
    },{
      path:'/shuzu',
      component:shuzu
    },{
      path:'/jiantou',
      component:jiantou
    },{
      path:'/duixiang',
      component:duixiang
    },{
      path:'/symbol',
      component:symbol
    },{
      path:'/shujujiegou',
      component:shujujiegou
    },{
      path:'/map',
      component:map
    },{
      path:'/proxy',
      component:proxy
    },{
      path:'/promise',
      component:promise
    },{
      path:'/class1',
      component:class1
    },{
      path:'/mokuai',
      component:mokuai
    }
  ]
})
