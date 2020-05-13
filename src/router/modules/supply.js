/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const supplyRouter = {
  path: '/supply',
  component: Layout,
  redirect: '/supply/list',
  name: 'supply',
  meta: {
    title: '供应',
    icon: 'supply'
  },
  children: [
    {
      path: 'list',
      name: '供应商列表',
      component: () => import('@/views/supply/list'),
      meta: { title: '供应商列表' }
    },
    {
      path: 'addlist',
      name: '添加供应商',
      component: () => import('@/views/supply/addlist'),
      hidden:true,
      meta: { title: '添加供应商' }
    },
    {
      path: 'editlist',
      name: '编辑供应商',
      component: () => import('@/views/supply/editlist'),
      hidden:true,
      meta: { title: '编辑供应商' }
    },
    {
      path: 'dd-settings',
      component: () => import('@/views/supply/management/settings'),
      name: '提现申请',
      meta: { title: '提现申请' }
    },
    {
      path: 'menu1',
      component: () => import('@/views/supply/management/index'), // Parent router-view
      name: 'Menu1',
      meta: { title: '供应商设置' },
      redirect: '/supply/management/menu1-1',
      children: [
        {
          path: 'sh-order',
          component: () => import('@/views/supply/management/shouhou'),
          name: '基本设置',
          meta: { title: '基本设置' }
        },
        {
          path: 'dd-settings1',
          component: () => import('@/views/supply/management/settings1'),
          name: 'dd-settings1',
          //  hidden: true, // 不在侧边栏线上
          meta: { title: '申请页面内容' }
        }
      ]
    }
    
  ]
}

export default supplyRouter
