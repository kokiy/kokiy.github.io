# 配置 demo

### 主文件

```shell
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;
    proxy_hide_header X-Powered-By;
    proxy_hide_header Server;

    client_max_body_size  10m;  #最大限制为10m

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    include /etc/nginx/conf.d/*.conf;

    gzip on;
    gzip_buffers 32 4K;
    gzip_comp_level 6;
    gzip_min_length 100;
    gzip_types application/javascript text/css text/xml;
    gzip_disable "MSIE [1-6]\.";
    gzip_vary on;

    ssl_certificate cert/cert.pem;
    ssl_certificate_key cert/cert.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        rewrite ^(.*)$ https://$host$1 permanent;   #将所有http请求通过rewrite重定向到https。
        root         /usr/share/nginx/html;
        server_tokens off;
        ssl_protocols TLSv1.2;

        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
}
```

### web spa server

```shell
server {
  listen 80;
  server_name  www.com;
  root /home/web/www;

  #when not specify request uri, redirect to /index;
  location = / {
    try_files $uri /index.html;
  }

  #server assets

  location ^~ /assets/ {
    #break;
    try_files $uri $uri/;
  }

  location ^~ /fonts/ {
    try_files $uri $uri/;
  }


  location ~ /(.*)\.html {
    try_files $uri /index.html;
  }


  location ^~ /images/ {
    try_files $uri $uri/;
  }


  location ^~ /api/ {
    proxy_pass http://127.0.0.1:8100;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $host;
  }

  # set url to url.html
  location ~ /(.*) {
    try_files $uri $uri.html;
  }
}


```

### node serer

```shell
server {
  listen 443 ssl;
  server_name   fdy-bff.huanbaoyun.cloud;
  location / {
    proxy_pass http://127.0.O.1:7001;
    proxy_http_version 1.1;
    proxy_set_header X_FORWARDED_PROTO https;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $host;
    proxy_headers_hash_max_size 51200;
    proxy_headers_hash_bucket_size 6400;
  }
}
```

### pc 转 h5

#### pc config

```shell
server {
    listen       80;
    server_name  pc.cn;
    if ($http_user_agent ~* (mobile|nokia|iphone|ipad|android|samsung|htc|blackberry)) {
            rewrite  ^(.*)    http://m.cn$1 permanent;
        }
    location / {
        root   www;
        index  index.html index.htm;
    }
}
```

#### h5 config

```shell
server {
    listen       80;
    server_name  m.cn;
    if ($http_user_agent !~* (mobile|nokia|iphone|ipad|android|samsung|htc|blackberry)) {
            rewrite  ^(.*)    http://pc.cn$1 permanent;
        }
    location / {
        root   m;
        index  index.html index.htm;
    }
}
```
