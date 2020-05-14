/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const setupRouter = {
  path: '/setting',
  component: Layout,
  redirect: '/setting/BasicSettings',
  name: 'setting',
  meta: {
    title: '设置',
    icon: 'shezhi1'
  },
  children: [
    {
      path: 'BasicSettings',
      name: 'BasicSettings',
      component: () => import('@/views/setting/BasicSettings'),
      meta: { title: '基本设置' }
    },
    {
      path: 'imgSettings',
      component: () => import('@/views/setting/imgSettings'),
      name: 'imgSettings',
      meta: { title: '图片设置' }
    },
    { 
        path: 'Applet',
        component: () => import('@/views/setting/Applet/index'), // Parent router-view
        name: 'Applet',
        meta: { title: '小程序设置' },
        redirect: '/setting/Applet/Parameter',
        children: [
          {
            path: 'Parameter',
            component: () => import('@/views/setting/Applet/Parameter'),
            name: 'Parameter',
            meta: { title: '参数设置' }
          },
          {
            path: 'Template',
            component: () => import('@/views/setting/Applet/Template'),
            name: 'Template',
            //  hidden: true, // 不在侧边栏线上
            meta: { title: '模板消息设置' }
          },
       
          {
            path: 'BottomMenu',
            component: () => import('@/views/setting/Applet/BottomMenu'),
            name: 'BottomMenu',
        
            meta: { title: '底部菜单设置' }
          }
         
        ]
      }, {
        path: 'payment',
        component: () => import('@/views/setting/payment'),
        name: 'payment',
        meta: { title: '支付设置' }
      },
      {
        path: 'indexSetting',
        component: () => import('@/views/setting/indexSetting/index'), // Parent router-view父路由器视图
        name: 'indexSetting',
        meta: { title: '首页设置' },
        redirect: '/setting/imgSettings/slide',
        children: [
          {
            path: 'slide',
            component: () => import('@/views/setting/indexSetting/slide'),
            name: 'slide',
            meta: { title: '幻灯片' }
          },
          {
            path: 'addslide',
            component: () => import('@/views/setting/indexSetting/addslide'),
            hidden:true,
            name: 'addslide',
            meta: { title: '添加幻灯片' }
          },
          {
            path: 'editslide',
            component: () => import('@/views/setting/indexSetting/editslide'),
            hidden:true,
            name: 'editslide',
            meta: { title: '编辑幻灯片' }
          },
          {
            path: 'Notice',
            component: () => import('@/views/setting/indexSetting/Notice'),
            name: 'Notice',
            //  hidden: true, // 不在侧边栏线上
            meta: { title: '公告' }
          },
          {
            path: 'addNotice',
            component: () => import('@/views/setting/indexSetting/addNotice'),
            name: 'addNotice',
             hidden: true, // 不在侧边栏线上
            meta: { title: '添加公告' }
          },
          {
            path: 'editNotice',
            component: () => import('@/views/setting/indexSetting/editNotice'),
            name: 'editNotice',
             hidden: true, // 不在侧边栏线上
            meta: { title: '编辑公告' }
          },
          {
            path: 'addDHicon',
            component: () => import('@/views/setting/indexSetting/addDHicon'),
            name: 'addDHicon',
            hidden:true,  
            meta: { title: '添加导航图标' }
          },
          {
            path: 'editDHicon',
            component: () => import('@/views/setting/indexSetting/editDHicon'),
            name: 'editDHicon',
            hidden:true,
            meta: { title: '编辑导航图标' }
          },
          {
            path: 'DHicon',
            component: () => import('@/views/setting/indexSetting/DHicon'),
            name: 'DHicon',
   
            meta: { title: '导航图标' }
          }
         
        ]
      },
      {
        path: 'LogisticsSettings',
        component: () => import('@/views/marketing/management/index'), // Parent router-view
        name: 'LogisticsSettings',
        meta: { title: '物流设置' },
        redirect: '/setting/LogisticsSettings/FreightTemplate',
        children: [
          {
            path: 'FreightTemplate',
            component: () => import('@/views/setting/LogisticsSettings/FreightTemplate'),
            name: 'FreightTemplate',
            meta: { title: '运费模板'}
          },
          {
            path: 'addFreightTemplate',
            component: () => import('@/views/setting/LogisticsSettings/addFreightTemplate'),
            name: 'addFreightTemplate',
            hidden: true,
            meta: { title: '添加运费模板'}
          },
          {
            path: 'editFreightTemplate',
            component: () => import('@/views/setting/LogisticsSettings/editFreightTemplate'),
            hidden: true,
            name: 'editFreightTemplate',
            meta: { title: '编辑运费模板'}
          },
          
          {
            path: 'interface',
            component: () => import('@/views/setting/LogisticsSettings/interface'),
            name: 'interface',
            meta: { title: '物流接口' }
          },
          {
            path: 'delivery',
            component: () => import('@/views/setting/LogisticsSettings/delivery'),
            name: 'delivery',
            //  hidden: true, // 不在侧边栏线上
            meta: { title: '快递方式' }
          },
          {
            path: 'addDelivery',
            component: () => import('@/views/setting/LogisticsSettings/addDelivery'),
            name: 'addDelivery',
             hidden: true, // 不在侧边栏线上
            meta: { title: '添加快递' }
          },
          {
            path: 'editDelivery',
            component: () => import('@/views/setting/LogisticsSettings/editDelivery'),
            name: 'editDelivery',
             hidden: true, // 不在侧边栏线上
            meta: { title: '编辑快递' }
          },
          {
            path: 'Delivery2',
            component: () => import('@/views/setting/LogisticsSettings/Delivery2'),
            name: 'Delivery2',
     
            meta: { title: '配送方式设置' }
          }
         
        ]
      },
      {
        path: 'Center',
        component: () => import('@/views/marketing/management/index'), // Parent router-view
        name: 'Center',
        meta: { title: '个人中心' },
        redirect: '/setting/Center/copyright',
        children: [
          {
            path: 'copyright',
            component: () => import('@/views/setting/Center/copyright'),
            name: 'copyright',
            meta: { title: '版权'}
          },
        
         
          
          {
            path: 'About',
            component: () => import('@/views/setting/Center/About'),
            name: 'About',
            meta: { title: '关于我们' }
          }
        
         
       
        
         
        ]
      }
    
    
  ]
}

export default setupRouter
