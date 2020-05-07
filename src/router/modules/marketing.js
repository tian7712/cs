/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const marketingRouter = {
  path: '/marketing',
  component: Layout,
  redirect: '/marketing/menu1/menu1-1',
  name: 'marketing',
  meta: {
    title: '营销',
    icon: 'nested'
  },
  children: [
    {
        path: 'menu1',
        component: () => import('@/views/marketing/management/index'), // Parent router-view
        name: '优惠券管理',
        meta: { title: '优惠券管理' },
        redirect: '/supply/management/menu1-1',
        children: [
          {
            path: 'sh-order',
            component: () => import('@/views/marketing/management/shouhou'),
            name: '优惠券',
            meta: { title: '优惠券' }
          },
          {
            path: 'dd-settings1',
            component: () => import('@/views/marketing/management/settings1'),
            name: '优惠券分类',
            //  hidden: true, // 不在侧边栏线上
            meta: { title: '优惠券分类' }
          }
        ]
      },
    {
      path: 'list',
      name: '满减',
      component: () => import('@/views/marketing/order/list'),
      meta: { title: '满减' }
    },
    {
      path: 'dd-settings',
      component: () => import('@/views/marketing/management/settings'),
      name: '余额充值满送',
      meta: { title: '余额充值满送' }
    }
    
    
  ]
}

export default marketingRouter
