

module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    
    themeConfig: {
        base:'/',
        lastUpdated: 'Last Updated', 
        activeHeaderLinks: false,
        displayAllHeaders: true,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'foo', link: '/foo/' },
          { text: 'bar', link: '/bar/' }
         
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

  