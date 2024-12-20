---
title: astro给BLOG添加排序功能
description: 给BLOG添加排序功能，实现按照时间排序
pubDate: 2024-12-19
author: 'sunqp'
minRead: 6 min read
image:
    url: '/assets/images/image-post4.jpeg'
    alt: 'Image post 4'
tags: ["astro", "blogging", "博客", "排序", "sort"]
---

# 给BLOG添加排序功能，实现按照时间排序
## 实现思路：
1. 遍历posts目录下的所有md文件，获取文件的创建时间和文件名。
2. 按照创建时间排序，获取排序后的blog列表。

### 代码实现：
将获取的allPosts按照时间排序。   
</br>
```js
const allPosts = await getCollection("blog");
allPosts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
```  
</br>
仅一行代码就实现了排序功能。