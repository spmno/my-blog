---
title: 在Ubuntu下安装VsCode
description: snap商店带的vscode，不好用。需要加一下microsoft的apt list去安装
pubDate: 2024-09-15
author: 'sunqp'
minRead: 4 min read
image:
    url: '/assets/images/image-post4.jpeg'
    alt: 'Image post 4'
tags: ["ubuntu", "Vscode", "apt"]
---

Ubuntu安装完成后发现VsCode中的中文输入法不好用，查找资料发现snap中的VsCode是被裁剪过的，所以安重新安装，就可以了。步骤如下：

```
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
rm -f packages.microsoft.gpg
sudo apt install apt-transport-https
sudo apt update
sudo apt install code
```

https://code.visualstudio.com/docs/setup/linux