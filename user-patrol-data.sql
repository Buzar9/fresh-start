use `>>>fresh_start`;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) not null,
  `password` char(68) NOT NULL, 
  `enabled` TINYINT NOT NULL default 1,
  `roles` varchar(45) not null,
  `patrol_id` int(11) default null,
  `patrol_name` varchar(45) default null,
  `user_data_id` int(11) default null,
  
  PRIMARY KEY (`user_id`),
  key `FK_patrol_idx` (`patrol_id`),
  
  constraint `FK_patrol`
  foreign key (`patrol_id`)
  references `patrol` (`patrol_id`),
  
  constraint `FK_user_data`
  foreign key (`user_data_id`)
  references `user_data` (`user_data_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;

insert into `user`
values
('1', 'qwe', '$2a$10$wNTzKFs3Y9vgG3DTgKF8VOizgSSQXA3Flompy8R0NBhMf6OrLdc6O', '1', 'user, admin', null, null, null),
('2', 'asd', '$2a$10$7DwHOetEbgs2fVwVxcgQRebjsKnNWwTM1tNfgDPO.1VhbX1z.jJKK', '1', 'user', null, null, null),
('3', 'zxc', '$2a$10$jfNPkN/6nQSPRtuhZ6IESuYPQEaMvf5dcT6rnj94i837Y5TjcbyTa', '1', 'admin', null, null, null);
