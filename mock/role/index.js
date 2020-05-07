import Mock from 'mockjs'
import { deepClone } from '../../src/utils/index.js'
import { asyncRoutes, constantRoutes } from './routes.js'

const routes = deepClone([...constantRoutes, ...asyncRoutes])
//tian
const addtian=[{
  phoneRadio:false,
    vipRadio:false,
    fromRadio:false
}]

const roles = [
  {
    key: 'admin',
    name: 'admin',
    description: 'Super Administrator. Have access to view all pages.',
    id:'101',
    phone:'12345347891',
    shelf:true,
    img:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    price:'21.2',
    Salesvolume:'26',
    stock:'92',
    phoneRadio:false,
    vipRadio:false,
    fromRadio:false,
    dengjiname:'一级【默认等级】',
    money:1,
    routes: routes
  },
  {
    key: 'editor',
    name: 'editor',
    id:'102',
    shelf:false,
    phone:'41575347891',
    price:'41.2',
    Salesvolume:'122',
    stock:'922',
    img:'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    phoneRadio:false,
    vipRadio:false,
    fromRadio:false,
    dengjiname:'一级【默认等级】',
    description: 'Normal Editor. Can see all pages except permission page',
    routes: routes.filter(i => i.path !== '/permission')// just a mock
  },
  {
    key: 'visitor',
    name: 'visitor',
    phone:'10235210891',
    id:'103',
    price:'45',
    shelf:true,
    Salesvolume:'12',
    stock:'52',
    dengjiname:'一级【默认等级】',
    money:1,
    img:'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    phoneRadio:false,
    vipRadio:false,
    fromRadio:false,
    description: 'Just a visitor. Can only see the home page and the document page',
    routes: [{
      path: '',
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: 'dashboard', icon: 'dashboard' }
        }
      ]
    }]
  }
]

export default [
  // mock get all routes form server模拟获取所有路由表单服务器
  {
    url: '/vue-element-admin/routes',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: routes
      }
    }
  },

  // mock get all roles form server
  {
    url: '/vue-element-admin/roles',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: roles
      }
    }
  },

  
  // add role添加角色
  {
    url: '/vue-element-admin/role',
    type: 'post',
    response: {
      code: 20000,
      data: {
        key: Mock.mock('@integer(300, 5000)')
      }
    }
  },

  // update role
  {
    url: '/vue-element-admin/role/[A-Za-z0-9]',
    type: 'put',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  },

  // delete role
  {
    url: '/vue-element-admin/role/[A-Za-z0-9]',
    type: 'delete',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
]
