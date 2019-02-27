# 小程序通用代码块



## 小程序分享(utils.js)

```js
const onShareAppMessage = ({path,title,imageUrl,cb})=>{
  let nickName = 'xixi'
  let defaultImageUrl = 'https://iqidao.oss-cn-shanghai.aliyuncs.com/static_resources/weapp/share-bg.jpg'
  let defaultPath = '/pages/activityList/activityList'
  try {
    nickName = getApp().globalData.userInfo.nickName
  }catch(e){
    nickName = '有人'
  }
  let defaultTitle = `[${nickName}@我]快来和我一起学习围棋知识吧`
  return {
    title : title || defaultTitle,
    path : path || defaultPath,
    imageUrl : imageUrl || defaultImageUrl,
    success(res){
      if(!res.shareTickets){
        //分享到好友
        cb && cb()
      }
    },
    fail(res){
      
    }
  }
}
```
使用
```js
//page里面的js文件中
onShareAppMessage(){
    return utils.onShareAppMessage({})
}
```
效果
<img src="https://iqidao.oss-cn-shanghai.aliyuncs.com/static_resources/docs/WX20190227-120021%402x.png" width="200" hegiht="200" style="display:block"/>

## request封装(http.js)

```js
let config = require('../config.js')
const tips = {
  100:'用户不存在'
}

class HTTP {
  request({ url, data = {}, method = 'GET'}){
        return new Promise((resolve,reject)=>{
          this._request(url,resolve,reject,data,method)
        })
  }
  _request(url,resolve,reject,data={},method='GET') {
    wx.request({
      url: config.default.host + url,
      method: method,
      data: data,
      header: {
        "content-type": "application/x-www-form-urlencoded",
        "Cookie": wx.getStorageSync('cookie'),
        "iqidao_wxmini_token": wx.getStorageSync('iqidao_wxmini_kid_token')
      },
      success: (res) => {
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          resolve(res.data)
        } else {
          reject()
          const error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail: (err) => {
        reject()
        this._show_error(1)
      }
    })
  }
  _show_error(error_code) {
    if (!error_code) {
      error_code = 1
    }
    const tip = tips[error_code]
    wx.showToast({
      title: tip?tip:tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export { HTTP }
```
