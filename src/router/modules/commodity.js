/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const commodityRouter = {
    
        path: '/commodity',
        component: Layout,
        redirect: '/commodity/list',
        name: '商品',
        meta: {
          title: '商品',
          icon: 'shangpin',
          roles: ['admin', 'editor'] // you can set roles in root nav
        },
        children: [
          {
            path: 'list',
            component: () => import('@/views/commodity/list'),
            name: '商品列表',
            meta: { title: '商品列表' }
          }, {
            path: 'classification',
            component: () => import('@/views/commodity/classification'),
            name: 'classification',
            meta: { title: '商品分类' }
          },
          {
            path: 'addclassification',
            component: () => import('@/views/commodity/addclassification'),
            name: 'addclassification',
            hidden:true,
            meta: { title: '添加商品分类'}
          }, 
          {
            path: 'editclassification',
            component: () => import('@/views/commodity/editclassification'),
            name: 'editclassification',
            hidden:true,
            meta: { title: '编辑商品分类' }
          },  {
            path: 'specifications',
            component: () => import('@/views/commodity/specifications'),
            name: 'specifications',
            meta: { title: '商品规格'}
          },
          {
            path: 'addspecifications',
            component: () => import('@/views/commodity/addspecifications'),
            name: 'addspecifications',
            hidden:true,
            meta: { title: '添加商品规格' }
          },
          {
            path: 'editspecifications',
            component: () => import('@/views/commodity/editspecifications'),
            name: 'editspecifications',
            hidden:true,
            meta: { title: '编辑商品规格'}
          }, {
            path: 'lable',
            component: () => import('@/views/commodity/label'),
            name: 'label',
            meta: { title: '商品标签'}
          },{
            path: 'addlabel',
            component: () => import('@/views/commodity/addlabel'),
            name: 'addlabel',
            hidden:true,
            meta: { title: '添加商品标签'}
          },{
            path: 'editlabel',
            component: () => import('@/views/commodity/editlabel'),
            name: 'editlabel',
            hidden:true,
            meta: { title: '编辑商品标签'}
          }, {
            path: 'setup',
            component: () => import('@/views/commodity/setup/index'),
            name: 'seetup',
            meta: { title: '商品设置' },
            children: [
              {
                path: 'setup',
                component: () => import('@/views/commodity/setup/sz'),
                name: 'setup',
                meta: { title: '基本设置' }
              },
              {
                path: 'time',
                component: () => import('@/views/commodity/setup/time'),
                name: 'time',
                meta: { title: '统一时间' }
              }
            ]
          }
    
    
        ]
      
}

export default commodityRouter
