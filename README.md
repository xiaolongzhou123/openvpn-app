### 介绍 
1. 使用它的场景 
   - 公司员工。通过它，连接到公司内部,办公访问业务系统 
   -  你在家有nas。有软路由，有一些linux或windows。从外面连接到家 
   - 如果我在新马泰玩儿。我想看、Youku、爱奇艺、腾讯视频 
   - 我在家，想访问公司的电脑，远程管理我的mac或windows办公电脑。完成未完成的工作 
2. 为什么要用云枢openvpn
   - 安装方便，已经封装成docker镜像。通过docker-compose启动，只需要一个命令,搭建即可完成 
   - 管理方便 ，方便为不同用户创建帐户和创建或撤销证书 
   - 审计方便、只要用户连接，必有日志。 
   - 实时会话，可以踢用户下线。
   - Qos限速控制 
3. 怎么安装
   - 拉取镜像 docker-compose pull 
   - 启动  docker-compose up -d
   - 查询服务状态  docker-compose ps
4. 怎么使用
   - 确定你有的外网ip 
   - nat映射 
   - 确定，你要开放的内网网段 
   - 确定。
5. 后续运维相关 
   -  相关组件6个 promethues（9092<=>9090）,mysql（3306）,openldap（389）,phpldapadmin（9009<=>80）,api(9091),ui（9998<=>80） 
   -  备份证书 
   -  备份用户 
   -  创建自己的easy-rsa相关证书 (提升安全性) 

###  安装方法 

1. git clone https://github.com/xiaolongzhou123/openvpn-app openvpn 
2. cd openvpn 
3. docker-compose up -d 
4. vim run/client.ovpn  需要外网地址和端口是你做nat，指定的ip和port 
5. vim run/server.conf  修改你要开放的内网网段 比如： push "route 18.18.1.0 255.255.255.0"


浏览器访问: http://yourip:9998

### 关于运维需要注意的点 



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

1. 做nat映射,你的外网ip 外网端口 <==>  当前内网服务器ip:端口20005  
2. 修改 vim run/client.ovpn 第4行 home.zhouxiaolong.top 9526


### 用户密码相关
1. 默认用户: admin 
2. 默认密码：Xxxxx.ai@123  
3. 二次密钥：HFCGCZSMKFRDASSM 
4. 普通用户修改密码，可以登陆网页。自行更改 
5. 某个用户需要提升为管理员：cd vpnapi下 vim sso.yaml ,第九行， 手动添加用户。 (这里是数组,例如["admin","admin1","admin2"])

 


### 关于替换默认easy-rsa相关证书 
1. docker run --rm --network=host  --privileged=true --cap-add=NET_ADMIN  --name easy-rsa3  --device=/dev/net/tun -it centos:7 bash 
2. yum install -y lzo openssl pam tree 
3. yum install -y epel-release 
4. yum install -y openvpn easy-rsa 
5. mkdir /etc/openvpn/easy-rsa && cp -r /usr/share/easy-rsa/3.0.8/\* /etc/openvpn/easy-rsa  
6. cd /etc/openvpn/easy-rsa 
7. ./easyrsa init-pki 
8. ./easyrsa build-ca nopass 
9. ./easyrsa gen-req server nopass 
10. ./easyrsa sign-req server server 
11. ./easyrsa gen-dh 
12. ./easyrsa gen-crl 
13. openvpn --genkey --secret  pki/ta.key 


容器外执行： 
docker cp easy-rsa3:/etc/openvpn/easy-rsa . 


