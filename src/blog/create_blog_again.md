---
title: Astro从头搭建个人博客
description: 通过Astro搭建个人博客，第一次不同，这次没有用模板，而是从头开始搭建。
pubDate: 2024-12-21
author: 'sunqp'
minRead: 6 min read
image:
    url: ''
    alt: ''
tags: ["astro", "blogging", "博客"]
---
## 背景
使用了一段时间的Astro，感觉还是挺好用的。但是想修改一些功能，就比较麻烦了。这次从头开始搭建，记录下过程。  

## 过程
1. 这次从头开始搭建，参考了官方的教程的文档。  
[搭建你的第一个 Astro 博客](https://docs.astro.build/zh-cn/tutorial)  
使用最小化的模板，没有使用blog模板。命令如下：
    </br>
    ```
    pnpm create astro@latest --template minimal
    ```
    </br>  

    选择安排依赖和GIT项目的初始化。