---
title: Rust中r#的含义
description: Rust中r#的含义, 两种情况用到r#, 字符串字面量中包含特殊字符
pubDate: 2024-08-20
author: 'sunqp'
minRead: 4 min read
image:
    url: '/assets/images/rust-language.png'
    alt: 'Rust Language'
tags: ["string", "rust"]
---

Rust中r#的含义

# 两种情况用到r#
1. 使用Rust关键字作为变量名、函数名、模块名等标识符，可以在关键字前面加上前缀r#，这样编译器就会将其解析为标识符而非关键字。
```
pub struct Tool {
    /// The schema of the tool. Currently, only functions are supported.
    r#type: ToolType,
    /// The schema of the tool. Currently, only functions are supported.
    function: FunctionInfo,
}
```
2. 字符串字面量中包含特殊字符，也可以在字符串前添加r#，结尾添加#.
```
fn main(){

    let website = r#"
        "xiachedan.cn"
    "#;

    println!("{}",website);
}
```