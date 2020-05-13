/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const commanderRouter = {
  path: '/commander',
  component: Layout,
  redirect: '/commander/list',
  name: 'commander',
  meta: {
    title: '团长',
    icon: 'hg'
  },
  children: [
    {
      path: 'list',
      name: '团长列表',
      component: () => import('@/views/commander/list'),
      meta: { title: '团长列表' }
    },
    {
      path: 'settings',
      component: () => import('@/views/commander/management/settings'),
      name: '团长设置',
      meta: { title: '团长设置' }
    },
    {
      path: 'Grade',
      name: '团长等级',
      component: () => import('@/views/commander/grade'),
      meta: { title: '团长等级' }
    },
    {
      path: 'commanderAdd',
      component: () => import('@/views/commander/add'),
      name: '添加团长',
      hidden: true, 
      meta: { title: '添加团长', icon: 'documentation' }
    },
    {
      path: 'commanderEdit',
      component: () => import('@/views/commander/edit'),
      name: '编辑团长',
      hidden: true, 
      meta: { title: '编辑团长', icon: 'documentation' }
    },
    {
      path: 'commanderSale',
      component: () => import('@/views/commander/commanderSale'),
      name: '团长在售商品管理',
      hidden: true, 
      meta: { title: '团长在售商品管理', icon: 'documentation' }
    },
    {
      path: 'WriteoffList',
      component: () => import('@/views/commander/WriteoffList'),
      name: '核销人员列表',
      hidden: true, 
      meta: { title: '核销人员列表', icon: 'documentation' }
    },
    {
      path: 'WriteoffVip',
      component: () => import('@/views/commander/WriteoffVip'),
      name: '添加核销人员',
      hidden: true, 
      meta: { title: '添加核销人员', icon: 'documentation' }
    },
    {
      path: 'WriteoffJL',
      component: () => import('@/views/commander/WriteoffJL'),
      name: '核销订单记录',
      hidden: true, 
      meta: { title: '核销订单记录', icon: 'documentation' }
    },
   
    {
      path: 'management',
      component: () => import('@/views/commander/management/index'), // Parent router-view
      name: '提现管理',
      meta: { title: '提现管理' },
      redirect: '/commander/management',
      children: [
        {
          path: 'Withdrawallist',
          component: () => import('@/views/commander/management/Withdrawallist'),
          name: 'Withdrawallist',
          meta: { title: '提现列表' }
        },
        {
          path: 'CashSettings',
          component: () => import('@/views/commander/management/CashSettings'),
          name: 'CashSettings',
          //  hidden: true, // 不在侧边栏线上
          meta: { title: '提现设置' }
        }
      ]
    }
    
  ]
}

export default commanderRouter
