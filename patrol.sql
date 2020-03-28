use `>>>fresh_start`;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `patrol`;
CREATE TABLE `patrol` (
  `patrol_id` int(11) NOT NULL AUTO_INCREMENT,
  `patrol_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`patrol_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;

insert into `patrol`
values
('1', 'poi'),
('2', 'lkj');