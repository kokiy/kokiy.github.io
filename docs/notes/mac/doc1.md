# 初始化教程

## description

Laptop is a script to set up your Mac OS X development environment.

## Requirements

---

1. XCode and Command Line Tools

2. `chsh -s /bin/zsh`

## Install

---

`zsh <(curl -sL https://raw.githubusercontent.com/kokiy/kokiy.github.io/master/bootstrap.sh)`

## config zsh theme

`cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc`

`ZSH_THEME="robbyrussell"`

## brew 换镜像

```bash
cd "$(brew --repo)"

git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git

cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"

git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git

brew update
```
