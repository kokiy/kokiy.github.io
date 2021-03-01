#### 如何让 `iterms2` 这类终端走代理

## 配置修改

#### 通过命令打开文件，然后在后续添加你的代理地址

## 打开配置文件

`vim ~/.bash_profile`

#### 如果用了`oh-my-zsh` 那么修改`~/.zshrc`

### 在后面新增配置

```bash
export http_proxy=http://127.0.0.1:1087
export https_proxy=$http_proxy
```

### 同理，可能执行` source ~/.zshrc`

`source ~/.bash_profile`

修改测试

#####可以通过如下方式进行测试

##### 方式 1：输入如下命令,看看显示的运行商是什么，如果是国外那么就 ok

`curl cip.cc`

##### 方式 2：通过 google 测试，有结果，说明 Ok

`curl -i https://google.com`

[转自](https://www.hicode.club/articles/2019/04/16/1555396878221.html)
