import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
import orderRouter from './modules/order'
import commanderRouter from './modules/commander'
import supplyRouter from './modules/supply'
import marketingRouter from './modules/marketing'


/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
/**
 * 免权限路由
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/submission',
    component: () => import('@/views/integral/Submission'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },

  // {
  //   path: '/dashboard',
  //   component: Layout,
  //   name: 'dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import('@/views/dashboard/index'),
  //       name: 'dashboard1',
  //       meta: { title: '首页', icon: 'documentation' }
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   // redirect: '/permission/page',
  //   // alwaysShow:true , // 将始终显示根菜单
  //   name: 'dashboard',
  //   meta: {
  //     title: '首页',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'Commodity-management',
  //       component: () => import('@/views/Survey/index'),
  //       name: 'Documentation1',
  //       meta: { title: '概况', icon: 'documentation' }
  //     },
  //     {
  //       path: 'Commodity-management',
  //       component: () => import('@/views/Survey/index'),
  //       name: 'Documentation1',
  //       meta: { title: '统计', icon: 'documentation' }
  //     }
  //   ]
  // },
  {
    path: '/integral',
    component: Layout,
    redirect: '/integral/Commodity-management',
    // alwaysShow:true , // 将始终显示根菜单
    name: '积分系统',
    meta: {
      title: '积分系统',
      icon: 'jifen',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'Commodity-management',
        component: () => import('@/views/integral/management'),
        name: 'Documentation1',
        meta: { title: '商品管理', icon: 'documentation' }
      }, {
        path: 'index',
        component: () => import('@/views/integral/index'),
        name: 'Documentation2',
        meta: { title: '签到设置', icon: 'documentation' }
      },
      {
        path: 'add',
        component: () => import('@/views/integral/add'),
        name: '添加',
        hidden: true, 
        meta: { title: '添加商品', icon: 'documentation' }
      },
      {
        path: 'edit',
        component: () => import('@/views/integral/edit'),
        name: '修改',
        hidden: true, 
        meta: { title: '修改商品', icon: 'documentation' }
      }
    ]
  },
  {
    path: '/material',
    component: Layout,
    redirect: '/material/management',
    name: '物资',
    meta: {
      title: '物资',
      icon: 'wuzi',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'management',
        component: () => import('@/views/material/management'),
        name: 'management',
        meta: { title: '物资管理', icon: 'documentation' }
      }, {
        path: 'apply',
        component: () => import('@/views/material/apply'),
        name: 'apply',
        meta: { title: '物资申请', icon: 'documentation' }
      },
      {
        path: 'add',
        component: () => import('@/views/material/add'),
        name: 'add',
        hidden: true, 
        meta: { title: '物资添加', icon: 'documentation' }
      },
      {
        path: 'edit',
        component: () => import('@/views/material/edit'),
        hidden: true, 
        name: 'edit',
        meta: { title: '物资修改', icon: 'documentation' }
      }
    ]
  },
  {
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
        meta: { title: '商品列表', icon: 'documentation' }
      }, {
        path: 'classification',
        component: () => import('@/views/commodity/classification'),
        name: 'classification',
        meta: { title: '商品分类', icon: 'documentation' }
      }, {
        path: 'specifications',
        component: () => import('@/views/commodity/specifications'),
        name: 'specifications',
        meta: { title: '商品规格', icon: 'documentation' }
      }, {
        path: 'lable',
        component: () => import('@/views/commodity/label'),
        name: 'label',
        meta: { title: '商品标签', icon: 'documentation' }
      }, {
        path: 'setup',
        component: () => import('@/views/commodity/setup/index'),
        name: 'seetup',
        meta: { title: '商品设置', icon: 'documentation' },
        children: [
          {
            path: 'setup',
            component: () => import('@/views/commodity/setup/sz'),
            name: 'setup',
            meta: { title: '基本设置', icon: 'documentation' }
          },
          {
            path: 'time',
            component: () => import('@/views/commodity/setup/time'),
            name: 'time',
            meta: { title: '统一时间', icon: 'documentation' }
          }
        ]
      }


    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
/**
 * 权限路由
 */

export const asyncRoutes = [
  orderRouter,
  {
    path: '/vip',
    component: Layout,
    redirect: '/vip/viplist',
    alwaysShow: true, // will always show the root menu
    name: '会员',
    meta: {
      title: '会员',
      icon: 'lock',
      roles: ['admin', 'editor'] 
    },
    children: [
      {
        path: 'viplist',
        component: () => import('@/views/vip/list'),
        name: '会员列表',
        meta: {
          title: '会员列表',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'page',
        component: () => import('@/views/vip/page'),
        name: '虚拟会员',
        meta: {
          title: '虚拟会员',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/vip/directive'),
        name: '会员设置',
        meta: { 
          title: '会员设置'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/vip/role'),
        name: '会员等级',
        meta: {
          title: '会员等级',
          roles: ['admin']
        }
      }, {
        path: 'vipdetails',
        component: () => import('@/views/vip/vipdetails'),
        name: '会员详情',
        hidden: true,
        meta: {
          title: '会员详情',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  commanderRouter,
  supplyRouter,

{
  path: '/Article',
  component: Layout,
  name: 'article',
  meta: {
    title: '文章列表',
    icon: 'wuzi',
    roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/article/index'),
      name: 'index',
      meta: { title: '文章', icon: 'documentation' }
    }
    , {
      path: 'articleadd',
      component: () => import('@/views/article/add'),
      name: 'articleadd',
      hidden:true,
      meta: { title: '添加文章', icon: 'documentation' }
    }
  ]
},
  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'Icons', icon: 'icon', noCache: true }
  //     }
  //   ]
  // },

  /** when your routing map is too long, you can split it into small modules **/
  marketingRouter,
  // componentsRouter,
  // chartsRouter,
  
  // tableRouter,

  {
    path: '/delivery',
    component: Layout,
    redirect: '/delivery/delivery-management',
    // alwaysShow:true , // 将始终显示根菜单
    name: '配送',
    meta: {
      title: '配送',
      icon: 'jifen',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'delivery-management',
        component: () => import('@/views/delivery/management'),
        name: 'deliveryManagement',
        meta: { title: '配送单管理', icon: 'documentation' }
      }, {
        path: 'Delivery-note',
        component: () => import('@/views/delivery/note'),
        name: 'DeliveryNote',
        meta: { title: '生成配送单', icon: 'documentation' }
      },
      {
        path: 'delivery-route',
        component: () => import('@/views/delivery/route'),
        name: 'route',
        meta: { title: '配送路线', icon: 'documentation' }
      }, {
        path: 'delivery-personnel',
        component: () => import('@/views/delivery/personnel'),
        name: 'deliveryPersonnel',
        meta: { title: '配送人员', icon: 'documentation' }
      }, {
        path: 'delivery-managementList',
        component: () => import('@/views/delivery/managementList'),
        name: ' managementList',
        hidden:true,
        meta: { title: '配送单商品管理', icon: 'documentation' }
      }, {
        path: 'delivery-addRoute',
        component: () => import('@/views/delivery/addRoute'),
        name: 'addRoute',
        hidden:true,
        meta: { title: '添加路线', icon: 'documentation' }
      }
      
    ]
  },

  
 

  

 

  

  


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
