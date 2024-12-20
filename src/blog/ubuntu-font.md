---
title: ubuntu 24.04 字体相关
description: ubuntu 24.04 安装字体，Ubuntu在英文系统上汉字字形不正确问题
pubDate: 2024-12-02
author: 'sunqp'
minRead: 4 min read
image:
    url: ''
    alt: ''
tags: ["ubuntu", "font", "中文显示"]
---

1. 安装微软字体
```
sudo apt-get install ttf-mscorefonts-installer
```
2. 汉字字形不正确问题
```
sudo vim /usr/share/fontconfig/conf.avail/64-language-selector-cjk-prefer.conf 
```
将JP和KR的项目往下调，因为是中文系统，所以只需要将JP和KR的项目往下调，将其放到最后即可。
重启电脑或者gnome即可。
