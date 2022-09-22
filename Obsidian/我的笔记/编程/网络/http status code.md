---
tags : 
- http
- 状态码
---

## 200

###  200 OK
200 表示请求成功
如果是 GET 请求,代表资源获取成功

```sh
HTTP/1.1 200 OK
Accept-Ranges: bytes
Cache-Control: private, no-cache, no-store, proxy-revalidate, no-transform
Connection: keep-alive
Content-Length: 277
Content-Type: text/html
Date: Thu, 22 Sep 2022 07:16:45 GMT
Etag: "575e1f72-115"
Last-Modified: Mon, 13 Jun 2016 02:50:26 GMT
Pragma: no-cache
Server: bfe/1.0.8.18
```

### 201 Created

一般用以 `POST` 请求，代表服务器**资源创建成功**。

###  204 No Content

它有以下场景：

1.  `PUT` 请求，**修改资源的某个状态**，此时 204 代表修改成功，无需响应体。见 [RFC7231之 204 状态码(opens new window)](https://httpwg.org/specs/rfc7231.html#status.204)
2.  `DELETE`/`OPTION` 请求
3.  打点 API

### 206 Partial Content

当客户端指定 `Range` 范围请求头时，服务器端将会返回部分资源，即 `Partial Content`，此时状态码为 206。

当请求音视频资源体积过大时，一般使用 `206` 较多。

> 如果你现在去哔哩哔哩随便去看几个视频，打开浏览器控制台网络面板，会发现诸多

与之相关的有以下 Header

-   range/content-range: 客户端发送 `range` 请求头指定范围，若满足范围，服务器返回响应头 `content-range` 以及状态码 206。若不满足，则返回 `416 Range Not Satisfiable` 状态码。

```sh
range: bytes=1-20

content-range: bytes 1-20/33229
```


```sh
curl https://q.shanyue.tech -H 'Range: bytes=1-29' --include
HTTP/2 206
server: Tengine
content-type: text/html; charset=utf-8
content-length: 29
strict-transport-security: max-age=5184000
date: Tue, 16 Aug 2022 07:22:05 GMT
vary: Accept-Encoding
x-oss-request-id: 62FB459D0925293935AC120C
x-oss-cdn-auth: success
accept-ranges: bytes
etag: "CEE08C7240A168CDB08EBD34B48CB8F7"
last-modified: Mon, 15 Aug 2022 11:08:49 GMT
x-oss-object-type: Normal
x-oss-hash-crc64ecma: 6247728796594318031
x-oss-storage-class: Standard
cache-control: no-cache
content-md5: zuCMckChaM2wjr00tIy49w==
x-oss-server-time: 34
ali-swift-global-savetime: 1660634525
via: cache22.l2cn2635[55,54,200-0,M], cache50.l2cn2635[56,0], kunlun9.cn1593[92,92,206-0,M], kunlun1.cn1593[94,0]
x-cache: MISS TCP_MISS dirn:-2:-2
x-swift-savetime: Tue, 16 Aug 2022 07:22:05 GMT
x-swift-cachetime: 0
content-range: bytes 1-29/7887
timing-allow-origin: *
eagleid: 76b4381516606345255583297e

!DOCTYPE html>
<html lang="en%

$ curl --head 'https://cn-hbyc2-dx-v-11.bilivideo.com/upgcxcode/77/99/797809977/797809977-1-30032.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1660634696&gen=playurlv2&os=vcache&oi=0&trid=0001a24d8b3329634dce8b8358b5bb862468u&mid=0&platform=pc&upsig=ff3ba7dabdea568ad472092000d89dba&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=9263&bvc=vod&nettype=0&orderid=0,3&agrr=1&bw=68979&logo=80000000' \
  -H 'authority: cn-hbyc2-dx-v-11.bilivideo.com' \
  -H 'if-range: c803156a' \
  -H 'origin: https://www.bilibili.com' \
  -H 'range: bytes=290774-645317' \
  -H 'referer: https://www.bilibili.com/' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
HTTP/2 206
server: openresty
date: Tue, 16 Aug 2022 07:19:53 GMT
content-type: video/mp4
content-length: 354544
x-upsig-version: 20220222
etag: c803156a
content-range: bytes 290774-645317/5725276
last-modified: Tue, 09 Aug 2022 04:41:49 GMT
access-control-allow-headers: Origin, Referer, Range, Pragma
access-control-allow-methods: GET, HEAD, OPTIONS
access-control-allow-credentials: true
access-control-max-age: 21600
access-control-allow-origin: https://www.bilibili.com
access-control-expose-headers: X-Service-Module, Content-Length, Content-Range
x-server: cn-hbyc2-dx-v-11
x-service-module: bvc-h2-server
alt-svc: h3=":443"; ma=900, h3-29=":443"; ma=900, h3-Q050=":443"; ma=900,h3-27=":443"; ma=900,h3-T051=":443"; ma=900,h3-T050=":443"; ma=900,h3-Q046=":443"; ma=900,h3-Q043=":443"; ma=900, quic=":443"; ma=900; v="46,43"
```

## 300

-   301，`Moved Permanently`。永久重定向，该操作比较危险，需要谨慎操作：**如果设置了 301，但是一段时间后又想取消，但是浏览器中已经有了缓存，还是会重定向**。
-   302，`Found`。临时重定向，但是会在重定向的时候改变 method：把 POST 改成 GET，于是有了 307。
-   307，`Temporary Redirect`。临时重定向，在重定向时不会改变 method。
-   308，`Permanent Redirect`。永久重定向，在重定向时不会改变 method。

## 400

### 400 Bad Request
对于服务器无法理解的参数，将会使用 400 作为返回码

### 401 Unauthorized
当没有权限的用户请求需要带有权限的资源时，会返回 401，此时携带正确的权限凭证再试一次可以解决问题

有时认证失败也会返回 401

### 403 Forbidden
我就是不想让你访问，不管你的权限凭证是否正确！


### 404 Not Found

未找到资源

### 405 Method Not Allowed

我需要 POST 这条资源，你去 GET 个锤子

### 413 Payload Too Large

不要给我扔这么大的 Body，我处理不过来

### 418 I'm A Teapot

我是一个茶壶

我要抛咖啡，你却扔给我一个茶壶？

也可以用来处理不合法的参数校验，我想要个字符串，你给了我一个整数？

### 422 Unprocessable Entity

常用来处理不合法的参数校验。

Github 上给某个项目点赞时，故意设置一个不正确的参数命名，会返回状态码 422


### 429 Too Many Request

请求过多被限流。

超过某一个 API 的 Rate Limit 规则，会被限流，返回 429 状态码

示例: 在 Sentry 中异常上报过于频繁被限流

## 500

### 500 Internal Server Error

服务器内部错误，很有可能是应用层未捕获错误而导致整个服务挂掉

### Bad Gateway

Nginx 上常见，从上游应用层未返回响应，上游应用层挂了

### 503 Service Unavailable

由于大量流量造成服务忙，稍等一下说不定就能用了

### 504 Gateway Timeout

网关超时，上游应用层迟迟未响应


## 参考

[301/302/307/308 与重定向 | 大厂面试题每日一题](https://q.shanyue.tech/http/30x.html#location-header)

[【Q035】http 常见的状态码有哪些 | http高频面试题 | 大厂面试题每日一题](https://q.shanyue.tech/base/http/36.html#_101-switch-protocol)