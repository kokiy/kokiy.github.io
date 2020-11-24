# 常用命令

| 命令                                            | 说明                   |
| ----------------------------------------------- | ---------------------- |
| `sudo nginx -t`                                 | 测试配置是否有语法错误 |
| `sudo nginx`                                    | 启动                   |
| `sudo nginx -c /usr/local/etc/nginx/nginx.conf` | 启动                   |
| `sudo nginx -s reload`                          | 重启                   |
| `lsof -i:8099`                                  | 查看当前端口占用情况   |
| `kill -9 pid`                                   | 杀进程                 |

## 查看 nginx 进程数

`ps -ef | grep nginx`
