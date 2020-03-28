use `>>>fresh_start`;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `user_data`;
CREATE TABLE `user_data` (
  `user_data_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) default null,
  `username` varchar(45) default null,
  `patrol_name` varchar(45) default null,
  PRIMARY KEY (`user_data_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;

insert into `user_data` values
('100', 'Bruce', 'Banner', 'banner@gmail.com', null, null),
('200', 'Tony', 'Stark', 'stark@gmail.com', null, null);

