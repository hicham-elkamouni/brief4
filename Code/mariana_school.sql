DROP TABLE IF EXISTS administrator;
CREATE TABLE `administrator` (
  `idA` int(11) NOT NULL AUTO_INCREMENT,
  `idV` int(11) DEFAULT NULL,
  PRIMARY KEY (`idA`),
  KEY `idV` (`idV`),
  CONSTRAINT `administrator_ibfk_1` FOREIGN KEY (`idV`) REFERENCES `visitor` (`idV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS marks;
CREATE TABLE `marks` (
  `idStu` int(11) NOT NULL,
  `idSub` int(11) NOT NULL,
  `mark` float DEFAULT NULL,
  KEY `idStu` (`idStu`),
  KEY `idSub` (`idSub`),
  CONSTRAINT `marks_ibfk_1` FOREIGN KEY (`idStu`) REFERENCES `student` (`idStu`),
  CONSTRAINT `marks_ibfk_2` FOREIGN KEY (`idSub`) REFERENCES `subjects` (`idSub`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS student;
CREATE TABLE `student` (
  `idStu` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `parent_phone` int(11) DEFAULT NULL,
  `class` varchar(255) DEFAULT NULL,
  `idV` int(11) DEFAULT NULL,
  PRIMARY KEY (`idStu`),
  KEY `idV` (`idV`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`idV`) REFERENCES `visitor` (`idV`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS subjects;
CREATE TABLE `subjects` (
  `idSub` int(11) NOT NULL AUTO_INCREMENT,
  `subject_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idSub`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS visitor;
CREATE TABLE `visitor` (
  `idV` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `login_password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idV`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;





INSERT INTO marks(idStu,idSub,mark) VALUES(1,1,12),(1,2,18),(2,1,14),(2,2,12),(3,1,15),(3,2,12);

INSERT INTO student(idStu,full_name,gender,age,adress,parent_phone,class,idV) VALUES(1,'Hicham','M',24,'Safi',633445566,'ADA_1',1),(2,'Med','M',21,'Keni',677889900,'ADA_2',2),(3,'Test','F',23,'Toulouse',2147483647,'ADA_1',3);

INSERT INTO subjects(idSub,subject_name) VALUES(1,'Math'),(2,'English');
INSERT INTO visitor(idV,email,login_password) VALUES(1,'administrator@gmail.com','admin123'),(2,'hicham@gmail.com','hicham123'),(3,'med@gmail.com','med123'),(4,'test@gmail.com','test123');







