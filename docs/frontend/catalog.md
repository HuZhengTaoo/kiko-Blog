# 项目结构

```js
   weapp
   ├─ component
   │  └─...(存放组件)
   ├─ images
   ├─ models
   │  └─...(page页面的网络请求统一处理js)
   ├─ pages
   ├─ utils
   ├─ node_modules
   ├─ miniprogram_npm
   ├─ .gitignore
   ├─ app.js
   ├─ config.js
   ├─ app.json
   ├─ package.json
   ├─ app.wxss
   └─ README.md
```
## app.js

```js
//通用配置项

//store为全局管理的统一申明
//使用细节请看  插件管理
const Store = require('./utils/store.js');
let store = new Store({
  a:'',
  b:''
})
App({
   onLaunch() {
    //获取用户信息
    wx.getUserInfo({
      success: res => {
        getApp().globalData.userInfo = res.userInfo 
      }
    })
  },
  //将常用的文件挂载到全局对象globalData
  //在所有文件下面就可以通过 let app = getApp()的拿到,这样就可以不使用require的方式每次引入加载
  //eg : config = getApp().globalData.config
  globalData: {
    userInfo: null,
    regeneratorRuntime:require('./utils/runtime.js'),
    config:require('./config.js')
  },
  store: store
})

```

## config.js

```js
const env = {
    devLocal:'https://localhost:8989',
    devTest:'https://test.iqidao.com',
    testing:'https://testing.iqidao.com',
    prod:'https://www.iqidao.com'
}
const upload = {
  formal:'formal', //formal为正式发布版本小程序
  commercial:'commercial' //commercial为商业测试版本小程序
}
const host = env.devLocal // 通过host来回去不同域名的数据,真机无法获取localhost的数据
const verson = upload.commercial  // verson用于区分所上传代码的版本(正式,商业)
const config = {
  verson,
  host
}
export default config
```

