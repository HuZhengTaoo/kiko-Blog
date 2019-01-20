

module.exports = {
    title: '爱棋道技术组',
    head: [
      ['link', { rel: 'icon',href: `/logo.jpeg` }]
   ],
    markdown: {
      lineNumbers: true
    },
    themeConfig: {
        base:'/',
        lastUpdated: 'Last Updated', 
        activeHeaderLinks: false,
        displayAllHeaders: true,
        nav: [
          { text:'微信小程序简介',link:'/weapp/'},
          { text:'前端开发',link:'/frontend/'},
          { text: '其他人员须知', link: '/articles/' },
          { text: '项目汇总', items:[
            {text:'启蒙小程序',link:'/javascript/'},
            {text:'爱棋道家长中心',link:'/css/'}
           ] 
          },
          { text: '其他链接', items:[
            {
              text:'vant-weapp',link:'https://youzan.github.io/vant-weapp/#/intro'
            },
            {
              text:'慕课实战视频',link:"https://coding.imooc.com/learn/list/251.html"
            }
          ] 
        }
         
        ],
        sidebar: {
          '/weapp/':[
            ['','微信小程序注册流程'],
            ['publish','微信小程序发布流程'],
            ['cowork','小程序如何多人写作开发']
          ],
          '/javascript/':[
            ['','js学习心得'],
            ['es6','es6学习']
          ],
          '/articles/':[
            ['','全员须知'],
            ['backend','后端人员'],
            ['tester','测试人员'],
            ['productor','产品'],
            ['designer','设计人员'],
            ['manager','项目经理']
          ]
        }
    }     
  }

  