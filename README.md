# 跨平台小程序之菜谱小程序(uniapp)

最近小程序比较活跃，各大平台陆续推出了自己的小程序，像前段时间比较火的微信小程序, 为商家带来一波新生流量。百度小程序, qq小程序, 抖音小程序陆续上线使小程序更火了起来。随着小程序的火热, 跨平台, 多端兼容框架也应运而生。 uniapp跨平台, 多端兼容的优秀能力使很多前端人员关注。最近做小白, 也体验一把uniapp的强大能力, 空闲的时间, 自己捣鼓了一下, 做了一个菜谱的uniapp跨平台小程序, 基本完整的走了一遍uniapp小程序开发的简单流程,  本篇文章就是对这次实践的简单介绍。目前微信小程序, 支付宝小程序, 抖音小程序均以上线, 微信抖音小程序(印记菜谱), 支付宝小程序(美食秘籍)。

先上小程序二维码
<img src="https://github.com/anyrzm/demo-app/blob/master/m/20200424230936851.png" width="240" height="240" alt=""/>
<img src="https://github.com/anyrzm/demo-app/blob/master/m/20200424225428179.jpg" width="240" height="240" alt=""/>
<img src="https://github.com/anyrzm/demo-app/blob/master/m/20200424230237910.jpg" width="240" height="240" alt=""/>

## 项目准备
申请微信开发者账号 [微信开发者平台](https://mp.weixin.qq.com/).<br/>
申请抖音小程序开发者账号 [抖音小程序开发者平台](https://developer.toutiao.com/homepage)<br/>
申请支付宝开发者账号 [支付宝开发者平台](https://mini.open.alipay.com/channel/miniIndex.htm)<br/>
。。。<br/>

注意:本项目申请选择服务类目为 服务>餐饮>菜谱


## 业务逻辑

 1. 首页：常规轮播, 每天推荐导航, 推荐精选菜谱展示<br/>
 2. 搜索：模糊，精准搜索, 展示搜索菜谱列表<br/>
 3. 菜谱分类页：对菜谱进行分类, 点击检索展示相应的分类菜谱列表<br/>
 4. 菜谱详情页：具体菜谱的简单介绍，图片，步骤，配料，辅料等明细

## 项目采坑
uniapp主要基于vue开发, uni-app 编译H5时支持所有vue的语法, App和小程序，由于平台限制，无法实现全部小程序的api。不用担心, uni-app为各平台独有的app提供了#ifdef #ifndef 条件编译, 可对不同的平台进行兼容处理[uniapp文档](https://uniapp.dcloud.io/platform)。

注意: 在uniapp中组件间传参props在子组件中created, mounted中无法获取到值, 可在computed或者watch中监听注册赋值给data。处理接口返回数据数据,  小技巧可以用filters进行过滤。[vue文档](https://cn.vuejs.org/v2/api/?#filters)

