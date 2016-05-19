DROP DATABASE leaderboard;
CREATE DATABASE leaderboard;

USE leaderboard;

CREATE TABLE  `a7385043_2910`.`Leaderboard` (
`id` INT( 4 ) NOT NULL ,
`name` CHAR( 100 ) NOT NULL ,
`time` CHAR( 100 ) NOT NULL,
PRIMARY KEY (id)
) ENGINE = MYISAM