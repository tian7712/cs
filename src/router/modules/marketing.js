/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const marketingRouter = {
  path: '/marketing',
  component: Layout,
  redirect: '/marketing/CouponManagement/coupon',
  name: 'marketing',
  meta: {
    title: '营销',
    icon: 'marketing'
  },
  children: [
    {
        path: 'CouponManagement',
        component: () => import('@/views/marketing/management/index'), // Parent router-view
        name: '优惠券管理',
        meta: { title: '优惠券管理' },
        redirect: '/marketing/CouponManagement/coupon',
        children: [
          {
            path: 'coupon',
            component: () => import('@/views/marketing/management/coupon/index'),
            name: '优惠券',
            meta: { title: '优惠券' }
          },
          {
            path: 'couponClassification',
            component: () => import('@/views/marketing/management/classification'),
            name: '优惠券分类',
            //  hidden: true, // 不在侧边栏线上
            meta: { title: '优惠券分类' }
          },
          {
            path: 'couponadd',
            component: () => import('@/views/marketing/management/coupon/add'),
            name: '添加优惠券',
        hidden: true, // 不在侧边栏线上
            meta: { title: '添加优惠券' }
          },
          {
            path: 'couponEdit',
            component: () => import('@/views/marketing/management/coupon/edit'),
            name: '编辑优惠券',
        hidden: true, // 不在侧边栏线上
            meta: { title: '编辑优惠券' }
          }
         
        ]
      },
    {
      path: 'reduction',
      name: '满减',
      component: () => import('@/views/marketing/reduction/index'),
      meta: { title: '满减' }
    },
    {
      path: 'delivery',
      component: () => import('@/views/marketing/management/delivery'),
      name: '余额充值满送',
      meta: { title: '余额充值满送' }
    }
    
    
  ]
}

export default marketingRouter
