create database luikiKart;
use luikiKart;

create table `luikiKart`.`user`(
  idUser int not null primary key,
  nickname varchar(40),
  ip varchar(30)
);

create table `luikiKart`.`track`(
  idTrack int not null primary key,
  pathTrack varchar(100),
  thematic varchar(15)
);

create table `luikiKart`.`gameType`(
  idGameType int not null primary key,
  gameType varchar(30)
);

create table `luikiKart`.`game`(
  idGame int not null primary key,
  ipGame varchar(60),
  cantVueltas tinyint,
  idGameType int not null,
  idTrack int not null,
  key `fk_gameType`(`idGameType`),
  constraint `fk_gameType` foreign key(`idGameType`) references `gameType`(`idGameType`) ,
  key `fk_idTrack`(`idTrack`),
  constraint `fk_idTrack` foreign key(`idTrack`) references `track`(`idTrack`)
);

create table `luikiKart`.`userXgames`(
  idUserXGames int not null primary key,
  idGame int not null,
  idUser int not null,
  key `fk_idGame`(`idGame`),
  constraint `fk_idGame` foreign key(`idGame`) references `game`(`idGame`) ,
  key `fk_idUser`(`idUser`),
  constraint `fk_idUser` foreign key(`idUser`) references `user`(`idUser`)
);