-- Data exporting was unselected.
-- Dumping structure for table skeleton.reasons
CREATE TABLE IF NOT EXISTS `reasons` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table skeleton.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `born_on` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- Dumping structure for table skeleton.operations
CREATE TABLE IF NOT EXISTS `operations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` char(1) NOT NULL,
  `reason_id` int(10) unsigned NOT NULL,
  `sum` decimal(5,2) unsigned NOT NULL,
  `notes` varchar(255) NOT NULL,
  `on_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `for_date` date DEFAULT NULL,
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `operations_reasons_fk` (`reason_id`),
  KEY `operations_users_fk` (`user_id`),
  CONSTRAINT `operations_reasons_fk` FOREIGN KEY (`reason_id`) REFERENCES `reasons` (`id`),
  CONSTRAINT `operations_users_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;


