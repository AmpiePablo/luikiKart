create database luikiKart;
use luikiKart;

create table `luikiKart`.`track`(
  idTrack int not null primary key,
  pathTrack varchar(100),
  thematic varchar(15)
);

create table `luikiKart`.`game`(
  idGame int not null primary key,
  ipGame varchar(60),
  cantVueltas tinyint,
  gameType varchar(40),
  nickName varchar(50),
  idTrack int not null,
  key `fk_idTrack`(`idTrack`),
  constraint `fk_idTrack` foreign key(`idTrack`) references `track`(`idTrack`)
);
