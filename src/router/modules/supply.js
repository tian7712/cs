/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const supplyRouter = {
  path: '/supply',
  component: Layout,
  redirect: '/supply/supplylist',
  name: 'supply',
  meta: {
    title: '供应',
    icon: 'supply'
  },
  children: [
    {
      path: 'supplylist',
      name: 'supplylist',
      component: () => import('@/views/supply/supplyList'),
      meta: { title: '供应商列表' }
    },
    {
      path: 'addsupplylist',
      name: 'addsupplylist',
      component: () => import('@/views/supply/addlist'),
      hidden:true,
      meta: { title: '添加供应商' }
    },
    {
      path: 'editsupplylist',
      name: 'editsupplylist',
      component: () => import('@/views/supply/editlist'),
      hidden:true,
      meta: { title: '编辑供应商' }
    },
    {
      path: 'supplyApplication',
      component: () => import('@/views/supply/supplyApplication'),
      name: 'supplyApplication',
      meta: { title: '提现申请' }
    },
    {
      path: 'supplySettings',
      component: () => import('@/views/supply/supplySettings/index'), // Parent router-view
      name: 'supplySettings',
      meta: { title: '供应商设置' },
      redirect: '/supply/supplySettings/basicsupplySettings',
      children: [
        {
          path: 'basicsupplySettings',
          component: () => import('@/views/supply/supplySettings/basicsupplySettings'),
          name: '基本设置',
          meta: { title: '基本设置' }
        },
        {
          path: 'pageContent',
          component: () => import('@/views/supply/supplySettings/pageContent'),
          name: 'pageContent',
          //  hidden: true, // 不在侧边栏线上
          meta: { title: '申请页面内容' }
        }
      ]
    }
    
  ]
}

export default supplyRouter
