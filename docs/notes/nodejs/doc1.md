## npm 命令

| 命令                                                                               | 说明                                                      |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `npm config set registry https://registry.npm.taobao.org`                          |                                                           |
| `npm init -y`                                                                      | 生成默认 package.json                                     |
| `npm cache clean`                                                                  |                                                           |
| `–save`可以简写成`-S`                                                              |
| `–save-dev`可以简写成`-D`                                                          |
| `-global` 可以简写成 `-g`                                                          |
| `npm i package@latest`                                                             |
| `npm i`                                                                            | 安装                                                      |
| `npm un`                                                                           | 卸载                                                      |
| `npm info package`                                                                 | 查看包                                                    |
| `npm dist-tags ls package`                                                         | 直接列出 package 发布过哪些 tag                           |
| `npm outdated`                                                                     | 会检测当前安装的所有 npm 包是否有更新，并列出可以更新的包 |
| `npm dedupe`                                                                       | 命令做的事就是重新计算依赖关系，然后将包结构整理得更合理  |
| `~`的意思是匹配最近的小版本 比如`~1.0.2`将会匹配所有的`1.0.x`版本，但不匹配`1.1.0` |
| `^`的意思是最近的一个大版本 比如`1.0.2` 将会匹配所有`1.x.x`, 但不包括`2.x.x`       |
