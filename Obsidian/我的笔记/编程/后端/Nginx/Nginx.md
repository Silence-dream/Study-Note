---
tags:
  - Nginx
---

## Nginx 简介

Nginx（发音为“engine-x”）是一款高性能的开源反向代理服务器和Web服务器。它由Igor Sysoev于2004年首次创建，现在由NGINX公司进行维护。Nginx以其高性能、稳定性和低资源消耗而闻名，并被广泛用于构建高流量的网站、负载均衡、反向代理、缓存服务器和HTTP加速器。

以下是Nginx的一些主要特点和功能：

1. 高性能：Nginx采用事件驱动的异步非阻塞架构，能够处理大量并发连接，高效地处理请求和响应。
    
2. 反向代理：Nginx支持反向代理，可以代理后端多个服务器，并实现负载均衡、故障转移和健康检查等功能。
    
3. 静态文件服务：Nginx可以快速、高效地提供静态文件的访问，对静态资源进行缓存、压缩和分发。
    
4. 动态HTTP内容：Nginx通过与其他应用程序（如PHP、Python、Java）的集成，可以处理动态的HTTP内容。
    
5. SSL/TLS支持：Nginx支持SSL/TLS协议，能够为网站提供安全的HTTPS连接。
    
6. URL重写和重定向：Nginx支持灵活的URL重写和重定向规则，可以实现URL的美化和转发。
    
7. 缓存加速：Nginx具有缓存功能，可以缓存静态内容和动态内容，提高网站的访问速度和性能。
    
8. 高可靠性：Nginx具有自动故障检测和自动恢复功能，能够保证服务器的高可用性。


## 安装


MacOS

```sh
brew install nginx
nginx #如果没有任何提示就是启动成功了,浏览器输入 localhost 查看启动情况
nginx -s stop #停止服务
nginx -t #验证配置文件是否正确

```

查看 nginx 的信息
```sh
nginx -V #查看 nginx 配置信息同时也能查看配置文件存放的位置
```

```sh
nginx version: nginx/1.25.2
built by clang 14.0.3 (clang-1403.0.22.14.1)
built with OpenSSL 3.1.2 1 Aug 2023
TLS SNI support enabled
configure arguments: --prefix=/opt/homebrew/Cellar/nginx/1.25.2 --sbin-path=/opt/homebrew/Cellar/nginx/1.25.2/bin/nginx --with-cc-opt='-I/opt/homebrew/opt/pcre2/include -I/opt/homebrew/opt/openssl@3/include' --with-ld-opt='-L/opt/homebrew/opt/pcre2/lib -L/opt/homebrew/opt/openssl@3/lib' --conf-path=/opt/homebrew/etc/nginx/nginx.conf --pid-path=/opt/homebrew/var/run/nginx.pid --lock-path=/opt/homebrew/var/run/nginx.lock --http-client-body-temp-path=/opt/homebrew/var/run/nginx/client_body_temp --http-proxy-temp-path=/opt/homebrew/var/run/nginx/proxy_temp --http-fastcgi-temp-path=/opt/homebrew/var/run/nginx/fastcgi_temp --http-uwsgi-temp-path=/opt/homebrew/var/run/nginx/uwsgi_temp --http-scgi-temp-path=/opt/homebrew/var/run/nginx/scgi_temp --http-log-path=/opt/homebrew/var/log/nginx/access.log --error-log-path=/opt/homebrew/var/log/nginx/error.log --with-compat --with-debug --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_degradation_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-http_v3_module --with-ipv6 --with-mail --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module
```