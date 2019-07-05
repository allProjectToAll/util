


0.分享，发送给别人自己的小程序
// step1:在需要转发功能的wxml中定义一个button按钮，按钮的属性中加上open-type="share"
// step2:在js中加上onShareAppMessage函数 //这不是写在methods里面的，是单独的勾子函数
onShareAppMessage(res) {
    if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
    }
    return {
        title: '来自' + this.userInfo.name + '的名片',
        path: '/pages/indexOther/indexOther?cardId=' + this.userInfo.cardId + '&indexFlag=true'
    };
},




1.配置
{
    // 用于设置应用的状态栏、导航条、标题、窗口背景色等
    // globalStyle
    // navigationBarBackgroundColor	HexColor	#000000	导航栏背景颜色	
    // navigationBarTextStyle	String	white	导航栏标题颜色，仅支持 black/white	
    // navigationBarTitleText	String		导航栏标题文字内容	
    // navigationStyle	String	default	导航栏样式，仅支持 default/custom。custom即取消默认的原生导航栏	 
    // backgroundColor	HexColor	#ffffff	窗口的背景色	微信小程序
    // backgroundTextStyle	String	dark	下拉 loading 的样式，仅支持 dark / light	 
    // enablePullDownRefresh	Boolean	false	是否开启下拉刷新，详见页面生命周期。	
    // onReachBottomDistance	Number	50	页面上拉触底事件触发时距页面底部距离，单位只支持px，详见页面生命周期	
    // backgroundColorTop	HexColor	#ffffff	顶部窗口的背景色。	仅 iOS 平台
    // backgroundColorBottom	HexColor	#ffffff	底部窗口的背景色。	仅 iOS 平台
    // pageOrientation	String	portrait	屏幕旋转设置，仅支持 auto / portrait 详见 响应显示区域变化	微信小程序
    // animationType	String	pop-in	窗口显示的动画效果，详见：窗口动画	App
    // animationDuration	Number	300	窗口显示动画的持续时间，单位为 ms	App
    // usingComponents	Object		引用小程序组件，参考 小程序组件
}


2.请求
{
    // 发起请求
    uni.request({
        url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
        data: {
            text: 'uni.request'
        },
        header: {
            'custom-header': 'hello' //自定义请求头信息
        },
        success: (res) => {
            console.log(res.data);
            this.text = 'request success';
        }
    });
}

3.1.app.vue
{
    // onLaunch	当uni-app 初始化完成时触发（全局只触发一次）
    // onShow	当 uni-app 启动，或从后台进入前台显示
    // onHide	当 uni-app 从前台进入后台
    // onUniNViewMessage	对 nvue 页面发送的数据进行监听，可参考 nvue 向 vue 通讯
}

3.2 页面生命周期
{
    // onLoad （初始化记载）	监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参），参考示例		
    // onShow （初始化或针对每次返回上一步到当前页面的时候的）	监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面		
    // onReady 	监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发		
    // onHide (跳转到别的路由，离开当前路由也执行)	监听页面隐藏		
    // onUnload	监听页面卸载		
    // onResize	监听窗口尺寸变化	5+App、微信小程序	
    // onPullDownRefresh	监听用户下拉动作，一般用于下拉刷新，参考示例		
    // onReachBottom	页面上拉触底事件的处理函数		
    // onTabItemTap	点击 tab 时触发，参数为Object，具体见下方注意事项	微信小程序、百度小程序、H5、5+App（自定义组件模式）	
    // onShareAppMessage	用户点击右上角分享	微信小程序、百度小程序、头条小程序、支付宝小程序	
    // onPageScroll	监听页面滚动，参数为Object		 scrollTop	Number	页面在垂直方向已滚动的距离（单位px）
    // onNavigationBarButtonTap	监听原生标题栏按钮点击事件，参数为Object	5+ App、H5	
    // onBackPress	监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack ；详细说明及使用：onBackPress 详解	5+App、H5	
    // onNavigationBarSearchInputChanged	监听原生标题栏搜索输入框输入内容变化事件	5+App、H5	1.6.0
    // onNavigationBarSearchInputConfirmed	监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。	5+App、H5	1.6.0
    // onNavigationBarSearchInputClicked	监听原生标题栏搜索输入框点击事件
}

4.获取信息
{
    // 获取系统信息同步接口。
    uni.getSystemInfoSync()
    // 获取系统信息。
    uni.getSystemInfo({
        success: function (res) {
            console.log(res.model);
            console.log(res.pixelRatio);
            console.log(res.windowWidth);
            console.log(res.windowHeight);
            console.log(res.language);
            console.log(res.version);
            console.log(res.platform);
        }
    });
    // brand	手机品牌
    // model	手机型号	
    // pixelRatio	设备像素比	
    // screenWidth	屏幕宽度	
    // screenHeight	屏幕高度	
    // windowWidth	可使用窗口宽度	
    // windowHeight	可使用窗口高度	
    // windowTop	可使用窗口的顶部位置
    // windowBottom	可使用窗口的底部位置
    // statusBarHeight	状态栏的高度	
    // language	应用设置的语言	
    // version	引擎版本号
    // system	操作系统版本	
    // platform	客户端平台，值域为：ios、android	
    // fontSizeSetting	用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px	
    // SDKVersion	客户端基础库版本


    //服务端获取登录态,微信登录
    uni.login({
        provider: 'weixin',
        success: function (loginRes) {
        console.log(loginRes.authResult);
        // 获取用户信息
        uni.getUserInfo({
            provider: 'weixin',
            success: function (infoRes) {
            console.log('用户昵称为：' + infoRes.userInfo.nickName);
            }
        });
        }
  });
}

5.跳转页面
{
    页面栈
    // 框架以栈的形式管理当前所有页面， 当发生路由切换的时候，页面栈的表现如下：

    // 路由方式	          页面栈表现	触发时机
    // 初始化	          新页面入栈	uni-app 打开的第一个页面
    // navigateTo 打开新页面	      新页面入栈	调用 API（跳转到单独的页面，跟tabBar没有联系）
    // redirectTo 页面重定向	      当前页面出栈，新页面入栈	  调用 API   uni.redirectTo  、使用组件  <navigator open-type="redirectTo"/>
    // navigateBack 页面返回	          页面不断出栈，直到目标返回页	调用 API  uni.navigateBack   、使用组件 <navigator open-type="navigateBack"/> 、用户按左上角返回按钮、安卓用户点击物理back按键
    // switchTab Tab 切换	          页面全部出栈，只留下新的 Tab 页面	调用 API  uni.switchTab  、使用组件  <navigator open-type="switchTab"/>  、用户切换 Tab
    // reLaunch 重加载	          页面全部出栈，只留下新的页面	调用 API  uni.reLaunch  、使用组件  <navigator open-type="reLaunch"/>
    //navigateBack 路由跳转            保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面


    uni.navigateTo({
        url: 'test?id=1&name=uniapp'
    });
    // onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
    //     console.log(option.id); //打印出上个页面传递的参数。
    //     console.log(option.name); //打印出上个页面传递的参数。
    // }



    // 跳转页面
    uni.reLaunch({
        url:'../index/index?id=1',
        success:function(e){
            // console.log(e);
        },
        fail:function(e){
            console.log(e);
        },
        complete:function(e){
            // console.log(e);
        }
    })
}

5. 窗口动画
{
    <navigator animation-type="pop-in" animation-duration="300" url="../test/test">navigator</navigator>
    <navigator animation-type="pop-out" animation-duration="300" open-type="navigateBack" >navigator</navigator>
    // pages.json 中配置的是窗口显示的动画
    // "style": {
    //     "app-plus": {
    //         "animationType": "fade-in",
    //         "animationDuration": 300
    //     }
    // }
}

6.存储
{
    // 存储在本地缓存中 同步缓存，完成之后再下一个
    uni.setStorageSync('storage_key', 'hello');
    //异步缓存 不停顿
    uni.setStorage({
        key: 'storage_key',
        data: 'hello',
        success: function () {
            console.log('success');
        }
    });
    //异步获取当前 storage 的相关信息
    uni.getStorageInfo({
        success: function (res) {
            console.log(res.keys);//当前 storage 中所有的 key
            console.log(res.currentSize);//当前占用的空间大小, 单位：kb
            console.log(res.limitSize);//限制的空间大小, 单位：kb
        }
    });
    //同步获取当前 storage 的相关信息
    const res = uni.getStorageInfoSync();
    console.log(res.keys);
    console.log(res.currentSize);
    console.log(res.limitSize);
    //从本地缓存中异步移除指定 key
    uni.removeStorage({
        key: 'storage_key',
        success: function (res) {
            console.log('success');
        }
    });
    //从本地缓存中同步移除指定 key。
    uni.removeStorageSync('storage_key');
    //清理本地数据缓存。
    uni.clearStorage()
    //同步清理本地数据缓存
    uni.clearStorageSync()
}

7.标签高度
{
    let view = uni.createSelectorQuery().select(`.index`);
    view.fields(
        {
            size: true
        },
        data => {
            // console.log('onReady:%s', data.height);
            this.$set(this.height, index, data.height);
        }
    ).exec();
}