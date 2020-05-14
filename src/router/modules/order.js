/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const orderRouter = {
  path: '/order',
  component: Layout,
  redirect: '/order/list',

  name: 'Nested',
  meta: {
    title: '订单',
    icon: 'documentation'
  },
  children: [
    {
      path: 'list',
      name: '订单列表',
      component: () => import('@/views/order/order/list'),
      meta: { title: '订单列表' }
    },
    // {
    //   path: 'list1',
    //   name: '订单列表1',
    //   component: () => import('@/views/order/order/list1'),
    //   meta: { title: '订单列表1' }
    // },
    {
      path: 'details',
      name: '订单详情',
      hidden:true,
      component: () => import('@/views/order/order/details'),
      meta: { title: '订单详情' }
    },
    {
      path: 'Deliver',
      name: 'Deliver',
      component: () => import('@/views/order/order/deliver'),
      meta: { title: '批量发货' }
    },
    {
      path: 'salesManagement',
      component: () => import('@/views/order/management/index'), // Parent router-view父路由器视图
      name: 'salesManagement',
      meta: { title: '售后管理' },
      redirect: '/order/management/index',
      children: [
        {
          path: 'sh-order',
          component: () => import('@/views/order/management/shouhou'),
          name: 'sh-order',
          meta: { title: '售后订单' }
        },
        {
          path: 'dd-settings',
          component: () => import('@/views/order/management/settings'),
          name: '订单设置',
           hidden: true, // 不在侧边栏线上  
          meta: { title: '订单设置' }
        }
      ]
    },
    {
      path: 'EvaluationManagement',
      component: () => import('@/views/order/evaluation/index'), // Parent router-view
      name: 'EvaluationManagement',
      meta: { title: '评价管理' },
      redirect: '/order/EvaluationManagement/evaluation-list',
      children: [
        {
          path: 'evaluation-list',
          component: () => import('@/views/order/evaluation/Evaluationlist'),
          name: 'list',
          meta: { title: '评价列表' }
        },{
          path: 'addEvaluationlist',
          component: () => import('@/views/order/evaluation/addEvaluationlist'),
          name: 'addEvaluationlist',
          hidden:true,
          meta: { title: '添加评价' }
        },{
          path: 'editEvaluationlist',
          component: () => import('@/views/order/evaluation/editEvaluationlist'),
          name: 'editEvaluationlist',
          hidden:true,
          meta: { title: '编辑评价' }
        },
        
        {
          path: 'evaluationSettings',
          component: () => import('@/views/order/evaluation/settings'),
          name: 'evaluationSettings',
          meta: { title: '评价设置' }
        }
      ]
    },
    {
      path: 'OrderSettings',
      component: () => import('@/views/order/management/settings'),
      name: 'OrderSettings',
      meta: { title: '订单设置' }
    }
  ]
}

export default orderRouter
