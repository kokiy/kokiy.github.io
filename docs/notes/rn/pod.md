### 创建默认的 Podfile

`pod init`

### 第一次使用安装框架

`pod install`

### 安装框架，不更新本地索引，速度快，但是不会升级本地代码库

`pod install --no-repo-update`

### 今后升级、添加、删除框架

`pod update`

### 更新框架，不更新本地索引，速度快

### 可以安装新框架或者删除不用的框架，但是不会升级项目已经安装的框架

`pod update --no-repo-update`

### 查看哪些框架有更新版本，如果习惯使用 `--no-repo-update` 参数，这个命令就显得格外重要了

`pod outdated`

### 搜索框架

### - 空格 下一页

### - q 退出

### - / 搜索

`pod search AFNetworking`

### 只搜索复合名字的框架，这个对于搜索结果非常多时，尤其有用

`pod search AFNetworking --simple`

### 帮助

`pod --help`
`pod` 安装和升级

### 安装测试版

`sudo gem install cocoapods --pre`

### 删除老版本的程序包

`sudo gem cleanup`

### 升级所有程序包

`sudo gem update`

### 升级 gem

`sudo gem update --system Podfile` 格式说明
