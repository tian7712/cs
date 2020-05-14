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
import settingRouter from './modules/setting'
import commodityRouter from './modules/commodity'

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
        name: 'dashboard',
        meta: { title: '首页', icon: 'fangzi', affix: true }
      }
    ]
  },

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
        meta: { title: '商品管理'}
      }, {
        path: 'index',
        component: () => import('@/views/integral/index'),
        name: 'Documentation2',
        meta: { title: '签到设置' }
      },
      {
        path: 'add',
        component: () => import('@/views/integral/add'),
        name: '添加',
        hidden: true, 
        meta: { title: '添加商品'}
      },
      {
        path: 'edit',
        component: () => import('@/views/integral/edit'),
        name: '修改',
        hidden: true, 
        meta: { title: '修改商品'}
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
      icon: 'wuzi1',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'management',
        component: () => import('@/views/material/management'),
        name: 'management',
        meta: { title: '物资管理'}
      }, {
        path: 'apply',
        component: () => import('@/views/material/apply'),
        name: 'apply',
        meta: { title: '物资申请'}
      },
      {
        path: 'add',
        component: () => import('@/views/material/add'),
        name: 'add',
        hidden: true, 
        meta: { title: '物资添加' }
      },
      {
        path: 'edit',
        component: () => import('@/views/material/edit'),
        hidden: true, 
        name: 'edit',
        meta: { title: '物资修改' }
      }
    ]
  },
  commodityRouter,
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
      icon: 'vip',
      roles: ['admin', 'editor'] 
    },
    children: [
      {
        path: 'viplist',
        component: () => import('@/views/vip/list'),
        name: 'viplist',
        meta: {
          title: '会员列表',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'page',
        component: () => import('@/views/vip/page'),
        name: 'page',
        meta: {
          title: '虚拟会员',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'addpage',
        component: () => import('@/views/vip/addpage'),
        name: 'addpage',
        hidden:true,
        meta: {
          title: '添加虚拟会员',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'editpage',
        component: () => import('@/views/vip/editpage'),
        name: 'editpage',
        hidden:true,
        meta: {
          title: '编辑虚拟会员',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/vip/directive'),
        name: 'directive',
        meta: { 
          title: '会员设置'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/vip/role'),
        name: 'role',
        meta: {
          title: '会员等级',
          roles: ['admin']
        }
      }, {
        path: 'vipdetails',
        component: () => import('@/views/vip/vipdetails'),
        name: 'vipdetails',
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
    icon: 'wenzhang',
    roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/article/index'),
      name: 'index',
      meta: { title: '文章'}
    }
    , {
      path: 'articleadd',
      component: () => import('@/views/article/add'),
      name: 'articleadd',
      hidden:true,
      meta: { title: '添加文章', }
    }
  ]
},


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
      icon: 'delivery',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'delivery-management',
        component: () => import('@/views/delivery/management'),
        name: 'deliveryManagement',
        meta: { title: '配送单管理'}
      }, {
        path: 'Delivery-note',
        component: () => import('@/views/delivery/note'),
        name: 'DeliveryNote',
        meta: { title: '生成配送单'}
      },
      {
        path: 'delivery-route',
        component: () => import('@/views/delivery/route'),
        name: 'route',
        meta: { title: '配送路线'}
      }, {
        path: 'delivery-personnel',
        component: () => import('@/views/delivery/personnel'),
        name: 'deliveryPersonnel',
        meta: { title: '配送人员'}
      }, {
        path: 'delivery-managementList',
        component: () => import('@/views/delivery/managementList'),
        name: ' managementList',
        hidden:true,
        meta: { title: '配送单商品管理' }
      }, {
        path: 'delivery-addRoute',
        component: () => import('@/views/delivery/addRoute'),
        name: 'addRoute',
        hidden:true,
        meta: { title: '添加路线' }
      }, 
      {
        path: 'delivery-editRoute',
        component: () => import('@/views/delivery/editRoute'),
        name: 'editRoute',
        hidden:true,
        meta: { title: '编辑路线' }
      }, {
        path: 'delivery-addPersonnel',
        component: () => import('@/views/delivery/addPersonnel'),
        name: 'addPersonnel',
        hidden:true,
        meta: { title: '添加配送人员' }
      },{
        path: 'delivery-editPersonnel',
        component: () => import('@/views/delivery/editPersonnel'),
        name: 'editPersonnel',
        hidden:true,
        meta: { title: '添加配送人员' }
      }
      
    ]
  },
  {
    path: '/Jurisdiction',
    component: Layout,
    redirect: '/Jurisdiction/roleManagement',
    // alwaysShow:true , // 将始终显示根菜单
    name: '权限',
    meta: {
      title: '权限',
      icon: 'jurisdiction',
      roles: ['admin'] // you can set roles in root nav
    },
    children: [
      {
        path: 'roleManagement',
        component: () => import('@/views/Jurisdiction/roleManagement'),
        name: 'roleManagement',
        meta: { title: '角色管理'}
      }, {
        path: 'userManagement',
        component: () => import('@/views/Jurisdiction/userManagement'),
        name: 'userManagement',
        meta: { title: '后台用户管理' }
      },
      {
        path: 'adduser',
        component: () => import('@/views/Jurisdiction/adduser'),
        name: 'adduser',
        hidden:true,
        meta: { title: '添加用户' }
      },

      {
        path: 'edituser',
        component: () => import('@/views/Jurisdiction/edituser'),
        name: 'edituser',
        hidden:true,
        meta: { title: '编辑用户' }
      },


      {
        path: 'add',
        component: () => import('@/views/Jurisdiction/add'),
        name: '添加角色',
        hidden: true, 
        meta: { title: '添加角色' }
      },
      {
        path: 'edit',
        component: () => import('@/views/Jurisdiction/edit'),
        name: '编辑角色',
        hidden: true, 
        meta: { title: '编辑角色'}
      }
    ]
  },
  
  {
    path: '/Enclosure',
    component: Layout,
    name: 'enclosure',
    meta: {
      title: '附件',
      icon: 'enclosure',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'fjindex',
        component: () => import('@/views/enclosure/index'),
        name: 'fjindex',
        meta: { title: '附件设置' }
      }
     
    ]
  },
  
  settingRouter,
  

 

  

  


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
