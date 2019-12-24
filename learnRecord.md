2012/12/10
总结：
1. 数组方法 filter过滤，map映射，分别用于需要删除和修改数据的情景
2. 试图更改对象的属性，可以新建一个对象，然后object.keys(obj)，然后使用数组方法遍历所有属性，并在方法内设置新对象的值
3. 使用vs Code，鼠标方法函数上面可以看输入参数的提示信息
##  count *

4. ant design Form 自定义组件， 自定义组件经包裹后会传入 onchange函数，需要在值变化的时候将值传入onchange,这样才可以检测到
5. 文件上传，有onchange 和 onRemove accept指定接收类型 
6. 现有文件上传模式，
    a: 转换为base64之后，当做字符串传给后端，适用于小图片
    b: 直接上传，后端返回保存的地址，前台在 onchange 函数里面 获取 后台响应值，再从响应值中取出想要的数据传回后端
##  count *

7. dispatch 或许是异步操作，使用async await 可使其顺序执行，适用于 reset 之后才能获取model中某些值的情景
8. ant design Form 可以监控 onFieldsChange 值变换 并从中获取值保存在redux
    @Form.create({
    //修改字段值，同步到State
    onFieldsChange(props, changedFields) {
        const key = Object.keys(changedFields)[0];
        const ImgInfo = {};

        ImgInfo[key] = changedFields[key].value;

        if (key && (key.indexOf('Path') !== -1) ) {
            props.dispatch({
                type: 'parametersSettingModel/updateState',
                payload: {
                ...ImgInfo, 
                },
            });
            }
        },
    })

## 2012/12/11  ## 标题
9. 使用CTRL + F  / P 查找 
10. 使用 简洁易懂的命名，简洁易懂的代码 有利于改bug
11. 新增less文件，增加多个选择器依旧无效，经查看source,无此文件，重启后成功
    总结：**调试时css样式， 先使用目标的class 找到elements** 
        **再使用class，过滤样式，如果找不到，就是没加载上**
        **考虑重启服务**
##  count *

12. 自定义表单控件，应传入接收 **value**和**onchange**,形成受控组件
13. 表单自定义验证 **callback返回空**，表示没得问题
14. upload 组件，handleBeforeUpload 返回false 不能阻止上传，使用**promise, return reject** 可以阻止上传
##  count **

## MarkDown 语法
  **加粗**
  *斜体*
  ***斜体加粗***
  ~~删除~~
=========================================
-----------------------------------------
+ 列表1
+ 列表2
   + 二级列表
   + 二级列表
   + 二级列表
+ 列表3
=========================================
    `<div>
        <span>我是代码块</span>
    </div>`
=========================================
15. Form 内加入 非 from.item, 调整样式 后发现，自己写的部分被后面的元素覆盖掉，
    原因： <Col> 加了span之后自动添加了浮动，导致后面的元素覆盖在前一个元素上
16. 自定义上传组件，组件自身需要的数据，跟form需要的数据不一致，自身所需数据存state,导致重置表单不能重置掉state,
    处理办法： 由父组件传入一个 reset，重置表单的时候，同时改变reset，
        在子组件的 **component Will Receive Props**周期判断reset，
        根据reset重置state
17. 弹出的模态框的表单，点击取消之后之前的信息依旧显示，
    原因：1. 数据录入控件，自带state, 使用时未对其值进行控制，所有一直保留了 state
          2. upload 组件，state中存在fileList, 未对fileList进行控制
    处理办法： 对fileList 进行控制
    收获： F12 调试，可以查看组件内state, 组件不从新生成 state不重置

## 2019/12/16
18. react 路由监控，在layout里面的**componentWillReceiveProps** 对比pathname,
19. model中 **Subscription**: 订阅一个数据源，然后根据需要dispatch相应的action 
    数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等
20. 基于action 进行页面跳转 
    // Inside Effects
    yield put(routerRedux.push('/logout'));

    // Outside Effects
    dispatch(routerRedux.push('/logout'));
    
    // With query
    routerRedux.push({
        pathname: '/logout',
        query: {
            page: 2,
        },
    });
21. 使用take监听事件
### 2019/12/18
22. antd组件 table 可伸缩列，配置时。列宽必须设置

### 2019/12/23
23. git 删除之前的某个提交的方法：
    1. 从要删的提交前新建分支，然后cheery pick
    2. 现有分支添加标签，然后回退，然后cheery pick
23. git 修改某次提交，
    1. 修改提交，=》 提交，更改最后一次提交 =》  衍合 ：结果就只有一条提交
