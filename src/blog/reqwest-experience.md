---
title: reqwest 一些经验
description: reqwest 一些经验
pubDate: 2024-09-23
author: 'sunqp'
minRead: 4 min read
image:
    url: '/assets/images/image-post4.jpeg'
    alt: 'Image post 4'
tags: ["reqwest", "rust", "博客", "https证书"]
---

不用验证SSL本地的证书

```
  use reqwest::{Client, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let clinet = Client::builder().danger_accept_invalid_certs(true)
    .build()
    .unwrap();
  let url = "https://example.com";
  let result = client
    .get(url)
    .send()
    .await?
    .text()
    .await?;
    println!("result is {:?}",result);
    Ok(())
}
```

打出更多的信息用 Debug Trait

Debug output ("{:?}") may show more. Chasing .source() recursively may show more.
