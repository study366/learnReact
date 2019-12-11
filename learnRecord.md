2012/12/10
总结：
1. 数组方法 filter过滤，map映射，分别用于需要删除和修改数据的情景
2. 试图更改对象的属性，可以新建一个对象，然后object.keys(obj)，然后使用数组方法遍历所有属性，并在方法内设置新对象的值
3. 使用vs Code，鼠标方法函数上面可以看输入参数的提示信息
4. ant design Form 自定义组件， 自定义组件经包裹后会传入 onchange函数，需要在值变化的时候将值传入onchange,这样才可以检测到
5. 文件上传，有onchange 和 onRemove accept指定接收类型 
6. 现有文件上传模式，
    a: 转换为base64之后，当做字符串传给后端，适用于小图片
    b: 直接上传，后端返回保存的地址，前台在 onchange 函数里面 获取 后台响应值，再从响应值中取出想要的数据传回后端
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
12. 自定义表单控件，应传入接收 **value**和**onchange**,形成受控组件
13. 表单自定义验证 **callback返回空**，表示没得问题
14. upload 组件，handleBeforeUpload 返回false 不能阻止上传，使用**promise, return reject** 可以阻止上传

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
```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&```