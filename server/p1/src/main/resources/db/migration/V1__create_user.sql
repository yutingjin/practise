
CREATE TABLE IF NOT EXISTS `user` (
  `uuid` VARCHAR(64) NOT NULL COMMENT '唯一标识',
  `mobile` VARCHAR(255) NOT NULL COMMENT 'mobile',
  `email` VARCHAR(255) NULL COMMENT '登录邮箱',
  `password` VARCHAR(255) NOT NULL COMMENT '登录密码',
  `status` int(10) NOT NULL DEFAULT '0' COMMENT '状态: 1好 2锁定 3已删除',
  `name` VARCHAR(64) NULL COMMENT '用户昵称',
  `avatar` VARCHAR(200) NULL COMMENT '用户头像',
  `gender` INT NULL COMMENT '性别：0女；1男',
  `role` VARCHAR(255) NULL COMMENT '用户角色',
  `lock_time` INT NULL COMMENT '锁定时间',
  `delete_time` INT NULL COMMENT '账号删除时间',
  `create_time` INT NULL COMMENT '用户注册时间',
  `update_time` INT NULL COMMENT '最近修改时间',
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';
