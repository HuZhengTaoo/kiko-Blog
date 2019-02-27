# 已经开发的开发接口

## [获取用户手机号码](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html)

**wxml** 

```html
<button wx:if="{{!phone}}" open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber"> 获取手机号码</button>
```
**js**

```js
//host 当前域名
getPhoneNumber(event){
   let data =  this.request({
       if(event.detail.iv){
         return  this.request({
                    url:`${host}/wxmini/get/phone`, //  后端接口WeixinMini.go 下面的 app.Post("/wxmini/get/phone"
                    method:'POST',
                    data:{
                          encryptedData: event.detail.encryptedData,
                          iv: event.detail.iv,
                          //wxmini_session_key是在获取token的时候，要保存在本地
                          sessionKey: wx.getStorageSync('wxmini_session_key')
                    }
            })
        }
   })
}
```
**效果**
<img src="https://iqidao.oss-cn-shanghai.aliyuncs.com/static_resources/docs/WX20190227-124008%402x.png" width="200" hegiht="200" style="display:block"/>

## [消息通知](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/template-message.html)

**wxml**

```html
<form report-submit="{{true}}" catchsubmit="submitFormId" class='form'>
    <button form-type="submit" class='form-btn'>获取formid</button>
</form>
```
**go**
```golang
//WxMini_test.go
func TestSendTemplateMessage12
```

**效果**
<img src="https://iqidao.oss-cn-shanghai.aliyuncs.com/static_resources/docs/WX20190227-124731%402x.png" width="200" hegiht="200" style="display:block"/>

