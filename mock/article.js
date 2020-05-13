import Mock from 'mockjs'

const List = []


// for (let i = 0; i < count; i++) {}
 
  List.push(Mock.mock( {
    id: "12212",
    CellName: "软件园二区",
    SuperiorLeader: "暂无上级",
    phone: 15659123951,
    Quantityofgoods: 397,
    confirmed: 369.4,
    commanderimg:
      "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBrqTKvvrFictbhPvRb5nQ1saesHU4ic6cxS9lNwGoKic25dKGENWEO3H9gnB462icwOMtQpocYcdjJg/132",
    Withdrawable: 0.0,
    Paid: 0.0,
    Withdrawing: 0.0,
    revenue: 0,
    address: "福建省厦门市思明区观日路4号软件园二期",
    ApplicationTime: "2020-03-25 15:38:46",
    AuditTime: "2020-03-30 11:55:39",
    rest: true,
    state: false,
    operation: true,
    commanderID: 0,
    commanderName: "林晓晖",
    commanderNickname: "火焰VS天堂",
    currentMembersNumber: 1,
    invitationsNumber: 1,
    consumedNumber: 0,
    amount: 893.14,
    grade: ""
  }))

export default [
  {
    url: '/vue-element-admin/article/list',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/article/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]































// import Mock from 'mockjs'

// const List = []
// const count = 100

// const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
// const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

// for (let i = 0; i < count; i++) {
//   List.push(Mock.mock({
//     id: '@increment',
//     timestamp: +Mock.Random.date('T'),
//     author: '@first',
//     reviewer: '@first',
//     title: '@title(5, 10)',
//     content_short: 'mock data',
//     content: baseContent,
//     forecast: '@float(0, 100, 2, 2)',
//     importance: '@integer(1, 3)',
//     'type|1': ['CN', 'US', 'JP', 'EU'],
//     'status|1': ['published', 'draft'],
//     display_time: '@datetime',
//     comment_disabled: true,
//     pageviews: '@integer(300, 5000)',
//     image_uri,
//     platforms: ['a-platform']
//   }))
// }

// export default [
//   {
//     url: '/vue-element-admin/article/list',
//     type: 'get',
//     response: config => {
//       const { importance, type, title, page = 1, limit = 20, sort } = config.query

//       let mockList = List.filter(item => {
//         if (importance && item.importance !== +importance) return false
//         if (type && item.type !== type) return false
//         if (title && item.title.indexOf(title) < 0) return false
//         return true
//       })

//       if (sort === '-id') {
//         mockList = mockList.reverse()
//       }

//       const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

//       return {
//         code: 20000,
//         data: {
//           total: mockList.length,
//           items: pageList
//         }
//       }
//     }
//   },

//   {
//     url: '/vue-element-admin/article/detail',
//     type: 'get',
//     response: config => {
//       const { id } = config.query
//       for (const article of List) {
//         if (article.id === +id) {
//           return {
//             code: 20000,
//             data: article
//           }
//         }
//       }
//     }
//   },

//   {
//     url: '/vue-element-admin/article/pv',
//     type: 'get',
//     response: _ => {
//       return {
//         code: 20000,
//         data: {
//           pvData: [
//             { key: 'PC', pv: 1024 },
//             { key: 'mobile', pv: 1024 },
//             { key: 'ios', pv: 1024 },
//             { key: 'android', pv: 1024 }
//           ]
//         }
//       }
//     }
//   },

//   {
//     url: '/vue-element-admin/article/create',
//     type: 'post',
//     response: _ => {
//       return {
//         code: 20000,
//         data: 'success'
//       }
//     }
//   },

//   {
//     url: '/vue-element-admin/article/update',
//     type: 'post',
//     response: _ => {
//       return {
//         code: 20000,
//         data: 'success'
//       }
//     }
//   }
// ]

