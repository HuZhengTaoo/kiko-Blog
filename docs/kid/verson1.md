# 第一版

## 上线时间

- 开发:2019-1-22 
- 上线:2019-3-5

## 设计开发人员
| 职位|人员 | 
| ---|---|
|  产品  | 祥瑞  |
|  后端  | 星龙  |
|  前端  | 洋神  |
|  前端  | 政涛  |
|  测试  | 璐哥  |
|  测试  | 小雅  |
|  设计  | 祥瑞  |
 
## 功能页截图
    页面包括 ：登录 活动列表  个人主页  吃子总动员  视频列表

![img](https://iqidao.oss-cn-shanghai.aliyuncs.com/static_resources/docs/WX20190227-180121.png)
## 版本功能说明

## 相关文档
- [原型图](https://iqidao.oss-cn-shanghai.aliyuncs.com/static_resources/docs/weixin_kid/%E7%88%B1%E6%A3%8B%E9%81%93%E2%80%94%E5%90%AF%E8%92%99%E5%B0%8F%E7%A8%8B%E5%BA%8F.rp)
- [需求文档](https://iqidao.oss-cn-shanghai.aliyuncs.com/static_resources/docs/weixin_kid/%E5%90%AF%E8%92%99%E5%B0%8F%E7%A8%8B%E5%BA%8F%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A3.xlsx)
- [冒烟测试](https://iqidao.oss-cn-shanghai.aliyuncs.com/static_resources/docs/weixin_kid/%E5%86%92%E7%83%9F-%E5%90%AF%E8%92%99%E5%B0%8F%E7%A8%8B%E5%BA%8F.xls)
## 版本所用插件
- 时间处理moment.js
    [npm](https://www.npmjs.com/package/moment)
    [github](https://github.com/moment/moment)
    [docs](http://momentjs.cn/docs/#/utilities/)
- 原生全局状态管理
    [github](https://github.com/yx675258207/wxMiniStore)
- vant-app
    [github](https://github.com/youzan/vant-weapp)
    [docs](https://youzan.github.io/vant-weapp/#/quickstart)
- regenerator-runtime(让小程序可以使用await/async)
    [使用简介](https://pluwen.com/archives/397)
## 后端接口说明

### 获取用户token

| API | METHOD | 
| ------| ------ | 
|/weixinmini/kid/signin/code|GET |

- 请求所携带的参数

| 参数名	| 类型 | 必填 | 备注 |
| ------| ------ | ------ | ------ | 
| js_code|string |true| js_code是通过调用wx.login方法的返回值里获取 | 
| phone |string |true| 用户手机号码| 
| version |string |true| formal/commercial对应不同的appid(商用版本和正式版本)| 

- 返回示例值

```json
{
    "Status":0,
    "Data":{
        "iqidao_wxmini_token":"spwcqsu6ubl8lmu9mxevpx9qly69t2n4",
        "wxmini_kid_openid":"oa8y45b01IDITyWx28xY781BlcBQ",
        "wxmini_kid_unionid":"",
        "wxmini_session_key":"zf31tAREjsjXdhg6kt9Xkg=="
    }
}
```

### 小程序登录

| API | METHOD | 
| ------| ------ | 
|/weixinmini/kid/signin/bind|Post |

- 请求所携带的参数

| 参数名	| 类型 | 必填 | 备注 |
| ------| ------ | ------ | ------ | 
| phone|string |true|-  | 
| password|string |true|- | 
 

- 返回示例值

```json
{
    "Status":0,
    "Data":{
        "Id":39351,
        "Group":0,
        "Duan":0,
        "RealName":"测试专用1",
        "Pinyin":"ceshizhuanyong1",
        "Icon1":"/static/img/avatar/default.65.jpg",
        "Icon2":"/static/img/avatar/default.100.jpg",
        "Icon3":"/static/img/avatar/default.300.jpg",
        "Gender":null
    }
}
```

### 活动列表

| API | METHOD | 
| ------| ------ | 
|/json/weixin/kid/activity|GET |

- 请求所携带的参数

| 参数名	| 类型 | 必填 | 备注 |
| ------| ------ | ------ | ------ | 
| iqidao_wxmini_token|string |true|-  | 


- 返回示例值

```json
{
    "Status":0,
    "Data":{
        "List":[
            {
                "Id":860,
                "Name":"【测试数据】启蒙小程序活动20180220",
                "Logo1":"/static_resources/image/93/f8/93f8cefa94a1b2f18d5e333708809139.jpg",
                "Logo2":"",
                "Logo3":"",
                "Description":"<p>启蒙小程序活动_修改内容</p>",
                "SignupStartTime":1550543580,
                "SignupEndTime":1552200300,
                "StartTime":1550561340,
                "EndTime":1551943740,
                "Ct":1550645169,
                "Status":2,
                "Type":8,
                "UserLimit":1000,
                "Price":100,
                "LowerDuan":-2,
                "UpperDuan":-2,
                "Category":1,
                "TeacherId":18133,
                "Online":false,
                "Rank":0,
                "ViewCount":0,
                "SignupCount":3,
                "EnableSignup":false,
                "Remainder":997,
                "WxGroupQr":{
                    "String":"",
                    "Valid":false
                },
                "IntroVideoId":{
                    "Int64":0,
                    "Valid":false
                },
                "ActivityVersion":2,
                "CanUseCoupon":true,
                "Quarter":{
                    "Int64":1,
                    "Valid":true
                },
                "EnableCombo":false,
                "ComboStartTime":{
                    "Int64":0,
                    "Valid":true
                },
                "ComboEndTime":{
                    "Int64":0,
                    "Valid":true
                },
                "EnableTest":false,
                "EnableSmsNotify":false,
                "EnableAudit":false,
                "DisableGame":false
            }
        ],
        "Uid":39351
    }
}
```
### 任务卡列表

| API | METHOD | 
| ------| ------ | 
|/json/weixin/kid/item|GET |

- 请求所携带的参数

| 参数名	| 类型 | 必填 | 备注 |
| ------| ------ | ------ | ------ | 
|activityId |string |true|-| 
|iqidao_wxmini_token |string |true|- | 


- 返回示例值

```json
{
    "Status":0,
    "Data":{
        "List":[
            {
                "ActivityItemId":10541,
                "StartTime":1550646120,
                "Duration":45,
                "Status":2,
                "Name":"第一节a",
                "PolyvVideoId":"3aabb46692cb0a2cac64cf7b7426fc8c_3"
            } 
        ],
        "Percent":50,
        "UserKidGameInfo":{
            "Score":129,
            "AiLevel":2,
            "MinScore":101,
            "MaxScore":200
        },
        "Activity":{
            "Id":862,
            "Type":8,
            "Status":1,
            "LowerDuan":-2,
            "Category":1,
            "Logo1":"/static_resources/image/93/f8/93f8cefa94a1b2f18d5e333708809139.jpg",
            "Name":"ccca小程序活动-copy-11435555656565",
            "Description":"<p>启蒙小程序活动_修改内容</p>",
            "SignupStartTime":1550543580,
            "SignupEndTime":1552200300,
            "StartTime":1550113260,
            "EndTime":1552185120,
            "Price":100,
            "SignupCount":4,
            "Remainder":996,
            "UserLimit":1000,
            "EnableSignup":false,
            "Online":false,
            "CanUseCoupon":true,
            "TeacherId":0,
            "TeacherName":"赵老师1",
            "TeacherIcon2":"/static/img/avatar/default.100.jpg",
            "IntroVideoId":null,
            "Quarter":1,
            "WxGroupQr":null,
            "EnableCombo":false,
            "EnableTest":false,
            "EnableSmsNotify":false,
            "ComboStartTime":0,
            "ComboEndTime":0,
            "Teacher":null,
            "IntroVideo":null,
            "Discount":null,
            "Seasons":[
                {
                    "Id":1007,
                    "ActivityId":862,
                    "StartTime":1550649420,
                    "EndTime":1550980920,
                    "Price":1,
                    "Status":2,
                    "Name":"0220-0229赛季",
                    "EnableSignup":true,
                    "Signuped":true
                }
            ],
            "Items":[
                {
                    "Id":10541,
                    "Type":4,
                    "Status":0,
                    "UserItemStatus":2,
                    "ActivityId":862,
                    "SeasonId":1007,
                    "ExamPaperId":null,
                    "PractisePaperId":null,
                    "PreparePaperId":null,
                    "CourseId":null,
                    "StartTime":1550646120,
                    "Duration":45,
                    "Name":"第一节a",
                    "ActivityName":"",
                    "Outline":null,
                    "RecordVideo":null,
                    "PreparePaper":null,
                    "PractisePaper":null,
                    "ExamPaper":null,
                    "GameCount":-1,
                    "UserGameCount":0,
                    "GameDuan":null,
                    "GameRuleId":0
                }
            ],
            "ItemScores":null,
            "CurrentRound":null,
            "CurrentRoundGroup":null,
            "ClassProgress":{
                "ItemCount":4,
                "CompleteItemCount":2
            }
        }
    }
}
```
### 创建用户视频条目

| API | METHOD | 
| ------| ------ | 
|/json/weixin/kid/item/create|GET|

- 请求所携带的参数

| 参数名	| 类型 | 必填 | 备注 |
| ------| ------ | ------ | ------ | 
|activityItemId |string |true|-| 
| iqidao_wxmini_token |string |true|- | 

- 返回示例值

```json
{
    "Status":0,
    "Data":null
}
```

### 修改用户条目状态

| API | METHOD | 
| ------| ------ | 
|/json/weixin/kid/item/finish|GET|

- 请求所携带的参数

| 参数名	| 类型 | 必填 | 备注 |
| ------| ------ | ------ | ------ | 
|activityItemId |string |true|-| 
|iqidao_wxmini_token  |string |true|- | 

- 返回示例值

```json
{
    "Status":0,
    "Data":null
}
```

### 

| API | METHOD | 
| ------| ------ | 
||GET|

- 请求所携带的参数

| 参数名	| 类型 | 必填 | 备注 |
| ------| ------ | ------ | ------ | 
| |string |true|-| 
|iqidao_wxmini_token  |string |true|- | 
|  |string |true|- | 

- 返回示例值

```json

```

