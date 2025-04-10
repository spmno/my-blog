---
title: rust header 基本认证
description: 在Rust中实现HTTP基本认证的完整指南，包括代码示例与安全建议
pubDate: 2024-09-20
author: 'sunqp'
minRead: 1 min read
image:
    url: '/assets/images/rust-language.png'
    alt: 'Rust Language'
tags: ["reqwest", "rust"]
---

```
let response = client.get("http://example.com/resource")
        .header(reqwest::header::AUTHORIZATION, auth)
        .send()
        .await?;

```

HTTP认证基础: https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication
