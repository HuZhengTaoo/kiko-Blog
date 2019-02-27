# 第一版

## 上线时间

- 2019-3-5

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

### 获取token
| api |   类型 |
| ------ | ------ |  
|/weixinmini/kid/signin/code | GET |

| 请求参数 | | | |
| ------ | ------ | ------ | ------ |
| 参数名 | 类型 | 必填	 |说明 |
| js_code | string | true | 调用微信wx.login返回值里面有js_code|
| phone | string | true | 用户手机 |
| version |string |true|formal,commercial(不同的版本会对应不同的小程序的AppId) |

|返回示例值|
| ------ |
```json
{
    "Status":0,
    "Data":{
        "iqidao_wxmini_token":"spwcqsu6ubl8lmu9mxevpx9qly69t2n4",
        "wxmini_kid_openid":"oa8y45b01IDITyWx28xY781BlcBQ",
        "wxmini_kid_unionid":"",
        "wxmini_session_key":"bO/TQjrwWytYEcMnuTgSgg=="
    }
}
```
### 校验登录
| api |   类型 |
| ------ | ------ |  
|/weixinmini/kid/signin/bind | POST |

| 请求参数 | | | |
| ------ | ------ | ------ | ------ |
| 参数名 | 类型 | 必填	 |说明 |
| phone | string | true | 用户手机 |
| password |string |true|formal,commercial(不同的版本会对应不同的小程序的AppId) |

|返回示例值|
| ------ |
```js
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
### 获取活动列表

| api |   类型 |
| ------ | ------ |  
|/json/weixin/kid/activity | GET |

| 请求参数 | | |
| ------ | ------ | ------ |
| 参数名 | 类型 | 必填	 |
| token | string | true |

|返回示例值|
| ------ |
```json
{
    "Status":0,
    "Data":{
        "List":[
            {
                "Id":863,
                "Name":"【启蒙-8级新春福利】",
                "Logo1":"/static_resources/image/ce/a2/cea27d5e1ad5400e1646360b39aa2581.jpg",
                "Logo2":"",
                "Logo3":"",
                "Description":"<p>zl启蒙小程序活动0222</p>",
                "SignupStartTime":1549100460,
                "SignupEndTime":1551254340,
                "StartTime":1551254340,
                "EndTime":1551427200,
                "Ct":1550828614,
                "Status":1,
                "Type":8,
                "UserLimit":10,
                "Price":100,
                "LowerDuan":0,
                "UpperDuan":-2,
                "Category":1,
                "TeacherId":18133,
                "Online":false,
                "Rank":0,
                "ViewCount":0,
                "SignupCount":1,
                "EnableSignup":true,
                "Remainder":9,
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
                    "Int64":3,
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
        "Uid":19934
    }
}
```
### 获取任务卡列表
| api |   类型 |
| ------ | ------ |  
|/json/weixin/kid/item | GET |

| 请求参数 | | |
| ------ | ------ | ------ |
| 参数名 | 类型 | 必填	 |
| token | string | true |
| activityId | string | true |


|返回示例值|
| ------ |
```json
{
    "Status":0,
    "Data":{
        "List":[
            {
                "ActivityItemId":10523,
                "StartTime":1550642400,
                "Duration":45,
                "Status":2,
                "Name":"第16课时——常型吃子手筋与技巧——利用对方气紧吃子的技巧",
                "PolyvVideoId":"3aabb46692ec26e21edab15c864adf15_3"
            }
        ],
        "Percent":23,
        "UserKidGameInfo":{
            "Score":129,
            "AiLevel":2,
            "MinScore":101,
            "MaxScore":200
        },
        "Activity":{
            "Id":860,
            "Type":8,
            "Status":2,
            "LowerDuan":-2,
            "Category":1,
            "Logo1":"/static_resources/image/93/f8/93f8cefa94a1b2f18d5e333708809139.jpg",
            "Name":"【测试数据】启蒙小程序活动20180220",
            "Description":"<p>启蒙小程序活动_修改内容</p>",
            "SignupStartTime":1550543580,
            "SignupEndTime":1552200300,
            "StartTime":1550561340,
            "EndTime":1551943740,
            "Price":100,
            "SignupCount":3,
            "Remainder":997,
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
                    "Id":1003,
                    "ActivityId":860,
                    "StartTime":1550645700,
                    "EndTime":1551336360,
                    "Price":1,
                    "Status":2,
                    "Name":"0220-0229赛季",
                    "EnableSignup":true,
                    "Signuped":true
                }
            ],
            "Items":[
                {
                    "Id":10577,
                    "Type":4,
                    "Status":0,
                    "UserItemStatus":0,
                    "ActivityId":860,
                    "SeasonId":1006,
                    "ExamPaperId":null,
                    "PractisePaperId":null,
                    "PreparePaperId":null,
                    "CourseId":null,
                    "StartTime":1551100740,
                    "Duration":45,
                    "Name":"第二节aaaaaaaaaa",
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
                "ItemCount":17,
                "CompleteItemCount":4
            }
        }
    }
}
```
### 创建用户视频条目
| api |   类型 |
| ------ | ------ |  
|/json/weixin/kid/item/create | GET |

| 请求参数 | | |
| ------ | ------ | ------ |
| 参数名 | 类型 | 必填	 |
| token | string | true |
| activityItemId | string | true |


|返回示例值|
| ------ |

```json
{
    "Status":0,
    "Data":null
}
```

### 用户条目状态
| api |   类型 |
| ------ | ------ |  
|/json/weixin/kid/item/finish | GET |

| 请求参数 | | |
| ------ | ------ | ------ |
| 参数名 | 类型 | 必填	 |
| token | string | true |
| activityItemId | string | true |


|返回示例值|
| ------ |
```json
{
    "Status":0,
    "Data":null
}
```


### 启蒙吃子获得对局id
| api |   类型 |
| ------ | ------ |  
|/json/kidgame/new | GET |

| 请求参数 | | |
| ------ | ------ | ------ |
| 参数名 | 类型 | 必填	 |
| token | string | true |
| activityId | string | true |
| seasonId |string | true |


|返回示例值|
| ------ |
```json
{
    "Status":0,
    "Data":480
}
```
### 获取用户对弈基本信息
| api |   类型 |
| ------ | ------ |  
|/json/kidgame/user/info | GET |

| 请求参数 | | |
| ------ | ------ | ------ |
| 参数名 | 类型 | 必填	 |
| token | string | true |
