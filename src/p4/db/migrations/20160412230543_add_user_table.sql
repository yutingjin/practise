
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied

CREATE TABLE IF NOT EXISTS `user` (
  `uuid` VARCHAR(64) NOT NULL COMMENT 'uuid',
  `mobile` VARCHAR(20) NOT NULL COMMENT 'user mobile number',
  `wechat_id` VARCHAR(20) NULL COMMENT 'wechat unique open id',
  `status` int(10) NOT NULL DEFAULT '0' COMMENT '0: default, 1: active, 2: deactivate, 3: deleted',
  `password` VARCHAR(10) NOT NULL COMMENT 'password',
  `lock_time` INT NULL COMMENT 'locked time',
  `create_time` INT NULL COMMENT 'registered time',
  `update_time` INT NULL COMMENT 'last modify time',
  PRIMARY KEY (`uuid`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='user';

CREATE TABLE IF NOT EXISTS `doctor` (
  `uuid` VARCHAR(64) NOT NULL COMMENT 'uuid',
  `department_id` VARCHAR(64) NOT NULL COMMENT 'hospital department id'
  PRIMARY KEY (`uuid`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='doctor';



-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

