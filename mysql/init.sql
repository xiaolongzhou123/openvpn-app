SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE DATABASE `vpn` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `vpn`;

DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
      `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
      `name` varchar(32) NOT NULL COMMENT '用户名',
      `src` varchar(25) NOT NULL,
      `ip` varchar(16) NOT NULL,
      `action` varchar(6) NOT NULL COMMENT '登出？登陆',
      `sess` varchar(16) NOT NULL COMMENT '会话id',
      `timestamp` int(11) NOT NULL COMMENT '北京时间',
      PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



DROP TABLE IF EXISTS `qos`;
CREATE TABLE `qos` (
      `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
      `user` varchar(30) NOT NULL COMMENT '用户名',
      `limit` varchar(20) NOT NULL,
      `mark` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '备注',
      `created` bigint(20) NOT NULL COMMENT '创建时间',
      `updated` bigint(20) NOT NULL COMMENT '修改时间',
      PRIMARY KEY (`id`),
      UNIQUE KEY `user` (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



DROP TABLE IF EXISTS `client`;
CREATE TABLE `client` (
      `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增长id',
      `domain` varchar(30) COLLATE utf8_bin NOT NULL,
      `port` int(11) NOT NULL COMMENT '端口',
      PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `client` (`id`, `domain`, `port`) VALUES
(1,     'www.zhouxiaolong.top', 20005)
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `domain` = VALUES(`domain`), `port` = VALUES(`port`);
