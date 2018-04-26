# ReduxExample

学习 redux 时自己写的例子

## 本地启动项目

npm install
npm start

open http://localhost:3000/

hello 这个小项目是自己学习 redux 时，自己写的。

## 来源

这个例子是学习[Redux 中文文档](http://cn.redux.js.org/docs/introduction/Examples.html)时写的例子，更多例子可以查看该文档。

## 在 github 上更新个人项目的在线演示 demo

* 写好的代码切换到`gh-pages`分支： `git checkout gh-pages`
* 执行 `npm run build`命令，构建代码
* 将 build / dist 目录下的所有文件夹推送至远程仓库的 gh-pages 分支，执行以下命令：

```shell
# 强制添加dist文件夹，因为.gitignore文件中定义了忽略该文件
git add -f build

# 提交到本地暂存区
git commit -m 'Initial the page of project'

# 部署dist目录下的代码
git subtree push --prefix build origin gh-pages
```
