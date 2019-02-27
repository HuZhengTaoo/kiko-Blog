# 多人合作

## 1.项目目录
- 需要放在/static/weapp/xxx
## 2.图片托管
- [阿里云oss(类cdn)服务管理](http://www.net.cn/)
- **使用方式可搜索-->阿里云使用方法**
## 3.账号管理
- 小程序开发一般会申请两个小程序,请事先商量好**formal(正式版本)**和**commerial(商用测试版本)**所对应的**AppId**和**AppSecret** **(可在小程序管理后台查询)** ,并且也要告知后端同事在**config**表里面配置相应的字段
## 4.上传代码管理
- 开发者在微信开发者工具点击上传时,请事先定义好版本号的书写规则
![img](https://iqidao.oss-cn-shanghai.aliyuncs.com/static_resources/docs/WX20190227-155825.png)
## 5.目录结构
- 请根据具体项目定义好项目目录结构(可参考**项目结构**进行设计)
## 6.注意事项
- 具体项目中的appid，项目安装方式，以及所使用的第三方插件需要在小程序所在目录下的README.md进行补充

```md
### 项目安装
cd static/weapp
npm install

### 开发配置项

#### 正式版本
formal
appid xxxxxxxxxxxxxxxxxxx

#### 商用版本
commercial
appid xxxxxxxxxxxxxxxxxxx
 
### 项目中所用到的第三方资源

- 时间处理moment.js
    - [npm](https://www.npmjs.com/package/moment)
    - [github](https://github.com/moment/moment)
    - [docs](http://momentjs.cn/docs/#/utilities/)

- 原生全局状态管理
   - [github](https://github.com/yx675258207/wxMiniStore)

- 生成自定义海报
   - [github](https://github.com/kuckboy1994/mp_canvas_drawer)
   
- 小程序骨架屏
   - [github](https://github.com/jayZOU/skeleton)
```
