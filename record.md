测试 git 使用
# h1 bug 记录 
1. 普通搜索 不支持  **已解决**
2. 顺序问题，
3. 四个导出 **已解决**
4. 协会修改后的报告文号显示的是更新前的， 记录查询 detail 等界面 
5.  0 协会 3 = 会计师 不要评估 4 = 评估机构 不要报告类型 **已解决**

6. 协会作废一条数据，作废报告数量显示正常，进入作废统计 无数据 且所有作废的数据量比统计少 1 
7. 修改作废日期 显示的是报告出具日期   **已解决**
8. 协会作废 显示未作废 且无法查询到  
9. 进入二级查询页面 导出数据 是一级查询页面的 **已解决**
10. 二级查询页面导出数据 修改作废均 缺少防伪编码 作废 多了 是否作废  **已解决**

11. 作废报告查询 重置后显示两条数据 导出四条数据 **已解决**
12. 作废报告查询 管理员权限 导出数据缺少机构名称 申请时间显示错误 状态 待审核 显示为 无需审批
13. 机构修改作废汇总： 第一级 修改报告数量 **3** ，点进去第二级 **4**条数据，修改报告记录查询 里面 **5条**，
    作废**数据五条**，**四种状态**，其中同意**一条 协会作废一条** 统计结果作废**两条** 点进入只有**一条**，未展示**协会作废**的记录
14. 未修改 **直接** 申请作废，需要审核，是否作废没得 **无需审核**状态
15. 协会作废的 报告文号D1211-8, 是否作废 返回 否
16. 机构修改作废汇总，报告详情 控制台 警告，  **已解决**
17. 系统参数设置 绑定图片地址错误  **已解决**
18. 系统参数设置，除bgImg外，上传其他图片会报错，且传回的地址//\\都有
19. 诚信管理 / 基础数据 搜索页面，切换菜单再切换回来，搜索值还在 ok **已解决**
20. 诚信管理 / 基础数据 提示信息 搜索功能操作失败 ok **已解决**
21. 系统参数设置 图片上边距缩小，只设置高度不设置宽度   **已解决**
2019/12/16
#  批量导入报告 测试
22. 审计报告 操作失败
#  修改作废管理
23. 修改作废报告申请，取消后跳转位置不是修改作废报告申请
24. 作废申请，上传文件类型可选其他类型    **已解决**
25. 新建审计报告，金额可以小数，申请修改不能小数
26. 修改审计报告报错后，依旧跳转防伪编号打印    **已解决**

#  批量导入报告
27. 有数据，删除数据后的 excel 会显示空数据
28. 只能检测是否填，不能检测填写字段是否符合要求
29. 导入失败
30. 上传错误模板，无报错信息，无提示信息

# 本地调试，使用时需要调整的 
31. 下载链接地址，写的绝对地址，需要更改

# 修改作废管理 > 机构修改作废汇总
32. 作废报告数量不正确

# 诚信基础数据
33. 表彰内容 可以为空
# 开具诚信证明 
34. 上传文件提示消息 '请上传附件' ok
35. 三年，五年保存后跳转pdf ok
36. 高级搜索 冒号，ok
37. 列表 没显示可下载附件 ok
38. 审核不通过 列表显示 审核不通过 ok

# 上周五bug
39.	1. excel 加上下拉 ok **testOver**
	2. 导入页加明显标题 **testOver**
	3. 导入页面弹出框提示，建议将报表审计，专项审计，验资报告，评估报告分类型导入，每次不超过100条 **ok**  **testOver**
       导入页面添加loading  **ok**  **testOver**
    4. 判断报告文号是否在本机构唯一 验证 **ExceltestOver**
    5. 导入加入过滤， 显示错误项 **ok**   **testOver**
	6. 导出的时候，没有按照搜索条件  如果只选择条件， //  !没点击搜索，直接点击导出就直接下载所有
	7. 用户loading 图片去掉
	8. 用户姓名重复
	9. 导入时间，检查格式，增加格式提示 // 有检查，无提示
    10. 批量导入后 ，“是否将本次导入报告   的防伪码页打包下载” **ok**  **testOver**
	11. 导入 签字注册会计师，提示用什么分割 // 有检查，无提示
    12. 下载压缩包，处理中的问题  **testOver** // 确定下载加loading 直到后端返回地址
    13. 日期验证 出具在创建之前 **testOver**

    14. 机构下拉改搜索 **testOver**
    15. 第三方查询 复用代码问题 评估 签字注册会计师
	16. 修改详细页面报错，菜单问题  //
    17. 第一次修改 本次修改无需审核 确定修改吗 成功后回到列表  //**testOver**

    18. 被拒绝 的申请，加一个重新提价申请按钮 到修改界面 **ok****testOver**
	19. 导入顺序是什么，按顺序写入，先写入在后面  **excel顺序1234567 列表顺序7654321**
    20. 机构显示修改申请的时候，默认显示所有申请  **仅qc_admin 有默认值**
	21. 欢迎验证，机构每天能导入的最大数量999
	22. 欢迎图片去掉，小一点，欢迎登陆系统 -加banner
31. 业务报告管理，查询审计报告 导出功能API 已经修改 前端待修改
32. 1. 机构搜索剩下的地方 **ok**
	2. 基础数据导入API
	3. 证明开具反馈
	4. 四个汇总后的两个
    ### 开具诚信证明
	1. 默认选中当前机构 **ok**//1**testOver**
	2. 微信扫一扫再 靠上一点，字体统一，章靠右一点，需要章的尺寸，表格每行高一点
	3. 附件地址 还没有改成 按照防伪编码的格式
	4. 开具诚信证明的loading **ok**//4 **testOver**
	5. 收入证明模版，地址还是doc，名称改为收入证明模版.docx  **ok** //2 **testOver**
	6. 自定义证明按钮文字，申请生成诚信证明， 申请生成收入证明
		成功后提示， “XX证明申请已提交，请等待管理员审核”  **ok**//
	7. 自定义审核界面再考虑考虑
	8. 自定义审核界面，按钮对其问题  **ok** // **testOver**
	9. 批准的时候没上传就 通过了， 能否没上传就取机构自己上传的？ ， 拒绝的时候加个弹出提示 “请在备注中填入拒绝理由”  **拒绝必须输入备注** //
	10. 批准上传文件格式限定  **.doc .docx**
	11. 自定义上传打印PDF 出错  **无错误**

    ### 基础数据
	1. 表彰时间 换成 表彰年度。 。。 所有的 XX 时间 -》 xx年度  **ok** //
	2. 基础数据排序问题
       基础数据搜索问题，除优良团体外都需要改 **ok** //  
	   2

