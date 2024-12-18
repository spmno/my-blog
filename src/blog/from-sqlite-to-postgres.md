---
title: actix数据库从sqlite到postgres
description: 用actix框架做的服务，从sqlite迁移到postgres
pubDate: 2024-12-18
author: 'sunqp'
minRead: 6 min read
image:
    url: '/assets/images/image-post4.jpeg'
    alt: 'Image post 4'
tags: ["actix", "actix-web", "sqlite", "postgres"]
---

## 背景
用actix框架做的服务， 因为是简单的服务一直用的sqlite， 但是随着数据量的增加，和云数据库的要求，sqlite已经不能满足需求了。 所以就迁移到了postgres。


## 迁移
在写actix-web的服务时，用了orm的框架， [sea-orm](https://www.sea-ql.org/)。

sea-orm 支持sqlite、mysql、postgres、mssql、sqlserver。

### 修改数据库驱动
修改cargo.toml文件
```
sea-orm ={ version = "1.1.0", features = ["sqlx-sqlite", "macros", "runtime-tokio-rustls", "with-chrono"] }
```
改为
```
sea-orm ={ version = "1.1.0", features = ["sqlx-postgres", "macros", "runtime-tokio-rustls"] }
```

### 修改数据库地址
```
DATABASE_URL=sqlite://datebase.sqlite?mode=rwc
```
改为
```
DATABASE_URL=postgres://username:password@localhost:5432/database_name
```

### 重新生成库和相关代码
```
sea-orm-cli migrate up
sea-orm-cli generate entity -o entity/src
```

重新启动服务，就可以了。有了ORM，迁移就是很方便。