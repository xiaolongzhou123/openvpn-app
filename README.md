###  使用方法 

1. git clone https://github.com/xiaolongzhou123/openvpn-app openvpn 
2. cd openvpn 
3. docker-compose up -d 
4. vim run/client.ovpn  需要修改域名地址和端口,因为外网地址和端口是你做nat，指定的ip和port 
5. vim run/server.conf  修改你要开放的内网网段 比如： push "route 172.25.1.0 255.255.255.0"


### 关于运维需要注意的点 

> 如果机器硬盘挂了。会导致openvpn不可以用。其它任何情况都不需要 
> 通过docker安装，操作系统和业务系统分离，操作系统选任何linux都可以(x86平台) 


1. 用户数据是存在openldap当中，只需要每天备份用户数据即可。 
2. 备份easy-rsa下的证书。 每天备份即可 
3. mysql数据库。只存了log和qos限速策略。不重要。数据量存一年。也少。主观推荐不备份 
4. 占用端口情况 前端:9998(必须开放),phpldapadmin:9009(测试用),promethues(9092),openvpn(20005必须开放) 


### openvpn相关的配置(其实不需要动,只动server.conf push route下发路由网段相关) 
>run目录下 

1. ccd 目录下，可以为用户写策略路由 
2. log目录，Openvpn下的log日志 
3. server.conf是openvpn的主要配置文件，里面增加了3个自定义个字段，只改push "route 比如192.168.1.0 255.255.255.0"


### 端口映射 

你的外网ip 外网端口   当前服务器ip:端口20005 
vim run/client.ovpn 需要修改域名地址和端口,因为外网地址和端口是你做nat，指定的ip和port 


默认用户 
admin Xxxxx.ai@123 
二次密钥：HFCGCZSMKFRDASSM 

新添加的用户默认密码都是：Xxxxx.ai@123,普通用户可以登陆网页。自行更改 

 


### 关于替换easy-rsa相关证书
docker run --rm --network=host  --privileged=true --cap-add=NET_ADMIN  --name easy-rsa3  --device=/dev/net/tun -it centos:7 bash

yum install -y lzo openssl pam tree
yum install -y epel-release
yum install -y openvpn easy-rsa


mkdir  /etc/openvpn/easy-rsa && cp -r /usr/share/easy-rsa/3.0.8/* /etc/openvpn/easy-rsa


cd /etc/openvpn/easy-rsa


./easyrsa init-pki
./easyrsa build-ca nopass
./easyrsa gen-req server nopass
./easyrsa sign-req server server
./easyrsa gen-dh
./easyrsa gen-crl
openvpn --genkey --secret  pki/ta.key


最后把docker cp 容器id:/etc/openvpn/easy-rsa copy出来
