---
tags : 
- Docker
---



docker image build ./ -t hello-docker:1.0.0 *# 打包镜像*

`docker image build ./ -t hello-docker:1.0.0`的意思是：基于路径`./`（当前路径）打包一个镜像，镜像的名字是`hello-docker`，版本号是`1.0.0`。该命令会自动寻找`Dockerfile`来打包出一个镜像

1.  使用`docker image build`来将`Dockerfile`打包成镜像
    
2.  使用`docker container create`来根据镜像创建一个容器
    
3.  使用`docker container start`来启动一个创建好的容器
    

## 常用指令

docker version

docker info

docker --help

docker pull [] `下载镜像`

docker search [] `搜索镜像`

docker rmi [] `删除镜像`

docker rmi -f $(docker images -aq) `删除所有镜像`

docker images `查看镜像`

## 新建容器并启动

docker run [可选参数] [image]

--name="name01" `容器名字`

// 参数写在 image 前面

-d `后台方式运行`

-it `使用交互式运行，进入容器查看内容`

-p `指定容器端口，-p 8080:8080（主机端口:容器端口）`

-P `随机端口`

## container 指令

docker ps #查看当前运行中的容器     -a 查看所有容器  
docker start/stop/restart containner-id # 启动/停止/重启 容器  
docker rmi image-id #删除指定 id 的镜像  
docker kill container-id # 杀死进程  
docker stop $(docker ps -aq) # 停止并且杀死所有容器

## images 指令

docker images # 查看镜像  
docker rmi images-id # 删除镜像

## commit 镜像

docker commit `提交镜像成为一个新的副本`

docker commit -m="提交内容" -a="作者名" 容器 id 目标镜像名:[TAG]

**Docker 构建步骤**

1.  编写一个 dockerfile 文件
    
2.  docker build -t 镜像名称 构建成一个镜像
    
3.  docker run 运行镜像 docker run -p 8080:80 -d 镜像名称
    
4.  docker push 发布镜像（DockerHub，阿里云……）
    

-p 端口(主机端口:容器端口) -d(--detached) 让容器在后台运行

## volume

docker volume rm $(docker volume ls -qf dangling=true) #一键删除所有volume

## Docker-Compose

在后台运行只需要加一个 -d 参数docker-compose up -d  
查看运行状态：docker-compose ps  
停止运行：docker-compose stop  
重启：docker-compose restart  
重启单个服务：docker-compose restart service-name  
进入容器命令行：docker-compose exec service-name sh  
查看容器运行log：docker-compose logs [service-name]

## DockerFile 指令

指令

说明

FROM

基础镜像，一切从这里开始

MAINTAINER

镜像是谁写的，姓名+邮箱

RUN

运行命令

ADD

添加内容，可解压 tar 包（不同于 COPY 的地方）

WORKDIR

镜像工作目录

VOLUME

挂载的目录

EXPOSE

指定暴露端口（同-P 指令）

CMD

指定容器启动时运行的命令

ENTRYPOINT

同 CMD，CMD 只有最后一个指令会生效，可被替代，ENTRYPOINT 可追加命令

ONBUILD

当构建一个被继承 DockerFile 这个时候就会运行 ONBUILD 指令。触发指令

COPY

类似 ADD，将我们的文件拷贝到镜像中

ENV

构建时设置环境变量