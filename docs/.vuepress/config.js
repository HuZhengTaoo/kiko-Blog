const testItem = [
    { text: 'Chinese', link: '/language/chinese/' },
    { text: 'Japanese', link: '/language/japanese/' }
  ]

module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    configureWebpack: {
        resolve: {
          alias: {
            '@imgs': './public/images'
          }
        }
    },
    themeConfig: {
        lastUpdated: 'Last Updated', 
        activeHeaderLinks: false,
        displayAllHeaders: true,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'foo', link: '/foo/' },
          { text: 'bar', link: '/bar/' },
          {
            text: 'Languages',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', items:testItem }
            ]
          }
        ],
        sidebar: [
            {
            title: 'home',
            collapsable: false,
            children: [
              '/',
              ['/about','haha'],
              ['/contact','test']
            ]
          },
          {
            title: 'foo',
            children: [
                ['/foo/','niko'],
                ['/foo/one','ouou'],
                ['/foo/two','aa']
            ]
          }
        ]
    }     
  }

  