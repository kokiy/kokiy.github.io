## nvm 命令

| 命令                                                    | 说明                                                                                     |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `nvm install <version>`                                 | 安装指定版本，可模糊安装，如：安装 v4.4.0，既可 nvm install v4.4.0，又可 nvm install 4.4 |
| `nvm uninstall <version>`                               | 删除已安装的指定版本，语法与 install 类似                                                |
| `nvm use <version>`                                     | 切换使用指定的版本 node                                                                  |
| `nvm ls`                                                | 列出所有安装的版本                                                                       |
| `nvm ls-remote`                                         | 列出所以远程服务器的版本（官方 node version list                                         |
| `nvm current`                                           | 显示当前的版本                                                                           |
| `nvm alias default <version>`                           | 如： nvm alias default v11.1.0                                                           |
| `nvm install v8.10.0 --reinstall-packages-from=v6.10.0` | 举个例子你之前使用 node v6.10.0 并有相关全局包，现在想使用 v8.10.0：                     |
