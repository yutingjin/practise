create table if not exists `consult_record` (
    `uuid` varchar(64) not null,
    `user_id` varchar(64) not null,
    `title` varchar(256),
    `status` tinyint default 0,
    `doctor_id` varchar(64),
    `description` varchar(512),
    `medicines` varchar(512),
    `create_time` bigint NULL COMMENT 'create time',
    `update_time` bigint NULL COMMENT 'update time',
    primary key (`uuid`)
) engine=InnoDB default charset=utf8 comment='consult records';

insert into `consult_record` (`uuid`, `user_id`, `title`, `status`, `doctor_id`, `description`, `medicines`, `create_time`, `update_time`)
values ('200001', '60000001', 'Mock title', 0, '60000002', 'mock description', 'M1, M2, M3, M4, M5...', 1463368542000, 1463368542000),
       ('200002', '60000003', 'Mock title', 0, '60000002', 'mock description', 'M1, M2, M3, M4, M5...', 1463368542000, 1463368542000),
       ('200003', '60000004', 'Mock title', 0, '60000002', 'mock description', 'M1, M2, M3, M4, M5...', 1463368542000, 1463368542000),
       ('200004', '60000005', 'Mock title', 0, '60000002', 'mock description', 'M1, M2, M3, M4, M5...', 1463368542000, 1463368542000);