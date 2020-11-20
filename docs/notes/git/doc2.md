# 使用命令

| 语法                                                         | 说明                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------- |
| `git init`                                                   | 初始化仓库                                           |
| `git status`                                                 | 查看仓库状态                                         |
| `git add index.html`                                         | 向暂存区中添加文件                                   |
| `git commit -m 'my submit'`                                  | 保存仓库的历史记录,记录一行提交信息                  |
| `git commit -am 'my submit'`                                 | 一步完成添加和提交                                   |
| `git log`                                                    | 查看以当前状态为终点的提交日志                       |
| `git reflog`                                                 | 查看当前仓库的操作日志                               |
| `git log -p index.html`                                      | 查看一个文件的修改记录                               |
| `git branch`                                                 | 显示分支一览表                                       |
| `git branch branchname`                                      | 创建分支                                             |
| `git checkout -b branchname`                                 | 创建并切换到新分支                                   |
| `git checkout branchname`                                    | 切换分支                                             |
| `git checkout -`                                             | 切换到上一个分支                                     |
| `git merge branchname`                                       | 合并分支                                             |
| `git reset --hard hash`                                      | 回溯到目标节点                                       |
| `git remote add origin url`                                  | 添加到远程仓库                                       |
| `git remote set-url origin url`                              | 修改远程仓库                                         |
| `git remote -v`                                              | 查看远程仓库地址                                     |
| `git push -u origin branchname `                             | 推送至远程仓库 //第一次推送添加参数- u               |
| `git push origin 分支名字:远程分支名字`                      | 推送本地分支作为远程分支名字                         |
| `git clone url`                                              | 获取远程仓库                                         |
| `git branch -a `                                             | 同时显示本地仓库和远程仓库的分支信息                 |
| `git checkout -b 本地分支名字 origin/远程分支名字 `          | 将远程分支获取到本地,命名为本地分支设置的名字        |
| `git pull origin 分支名字`                                   | 获取最新的远程仓库分支                               |
| `git branch -d 分支名字`                                     | 删除分支                                             |
| `git branch -D 分支名字`                                     | 强行删除没有合并的分支                               |
| `git branch -m oldbranchname newbranchname`                  | 修改分支名字                                         |
| `git push origin :test`                                      | 删除远程分支                                         |
| `git branch --set-upstream 本地分支名字 origin/远端分支名字` | 建立本地分支与远端分支的链接                         |
| `git cherry-pick commit-hash`                                | 单独摘取某次提交                                     |
| `git show commit-hash (filename 可选)`                       | 查看某次提交的修改                                   |
| `git update-ref -d HEAD`                                     | 撤销所有的提交                                       |
| 保留现场与恢复                                               |
| `git stash`                                                  | 保存工作现场                                         |
| `git stash apply`                                            | 恢复工作现场 stash 还保留                            |
| `git stash pop`                                              | 恢复工作现场 stash 删除                              |
| `git stash list `                                            | 查看现场列表                                         |
| tag 管理                                                     |                                                      |
| `git tag`                                                    | 列出所有标签                                         |
| `git tag v1.0`                                               | 打标签                                               |
| `git tag -a v1.0 -m 'my version 1.0'`                        | 创建一个含附注类型的标签                             |
| `git show v1.0`                                              | 查看相应标签的版本信息，并连同显示打标签时的提交对象 |
| `git push origin <tagname>`                                  | 推送某个标签到远程                                   |
| `git push origin --tags`                                     | 一次性推送全部尚未推送到远程的本地标签               |
| `git tag -d v0.1`                                            | 删除标签                                             |
| `git push origin :refs/tags/v0.9`                            | 删除远端标签(先删除本地,在删除远端)                  |
| git 常用简写                                                 |                                                      |
| `gco `                                                       | `git checkout`                                       |
| `gup`                                                        | `git pull --rebase`                                  |
| `gp`                                                         | `git push`                                           |
| `gb`                                                         | `git branch`                                         |
| `gcp`                                                        | `git cherry-pick`                                    |
