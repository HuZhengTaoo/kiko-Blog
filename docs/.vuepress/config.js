

module.exports = {
    title: 'npm里面加点糖',
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
          { text: '专题', items:[
            {text:'javascript',link:'/javascript/'},
            {text:'css',link:'/css/'},
            {text:'vue',link:'/vue/'},
            {text:'动画',link:'/animation/'},
            {text:'node',link:'/node/'},
            {text:'前端工程化',link:'/project/'},
            {text:'http',link:'/http/'},
            {text:'杂七杂八',link:'/anothers/'}
           ] 
          },
          { text: '发表的文章', link: '/articles/' },
          { text:'算法学习',link:'/algorithm/'},
          { text: '其他链接', items:[
            {
              text:'gayhub',link:'https://github.com/HuZhengTaoo'
            }
          ] }
         
        ],
        sidebar: {
          '/javascript/':[
            ['','js学习心得'],
            ['es6','es6学习']
          ]
        }
    }     
  }

  