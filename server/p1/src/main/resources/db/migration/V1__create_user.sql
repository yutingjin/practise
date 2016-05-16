
CREATE TABLE IF NOT EXISTS `user` (
  `uuid` VARCHAR(64) NOT NULL COMMENT 'uuid',
  `mobile` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(255) NOT NULL,
  `status` int(10) NOT NULL DEFAULT '0' COMMENT '0:ok, 1:disabled',
  `name` VARCHAR(64) NULL,
  `avatar` VARCHAR(200) NULL comment 'user avatar picture url',
  `gender` INT NULL COMMENT '0:female, 1:male',
  `type` tinyint default 0 comment '0: normal user',
  `create_time` bigint NULL,
  `update_time` bigint NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='User table';
