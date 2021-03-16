-- Create Visitor TABLE
CREATE TABLE visitor (
    idV int AUTO_INCREMENT  PRIMARY  KEY,
    email VARCHAR (255),
    login_password VARCHAR (255)
);

-- Create Administrator TABLE
CREATE TABLE administrator (
    idA int AUTO_INCREMENT  PRIMARY  KEY,
    idV int,
    FOREIGN KEY (idV) REFERENCES visitor(idV)
);

-- Create Student TABLE
CREATE TABLE student (
    idStu int AUTO_INCREMENT  PRIMARY  KEY,
    full_name VARCHAR (255),
    gender VARCHAR (255),
    age int,
    adress VARCHAR (255),
    parent_phone int,
    class VARCHAR (255),
    idV int,
    FOREIGN KEY (idV) REFERENCES visitor(idV)
);

-- Create Subjects TABLE
CREATE TABLE subjects (
    idSub int AUTO_INCREMENT  PRIMARY  KEY,
    subject_name VARCHAR (255)
);

-- Create Marks TABLE
CREATE TABLE marks (
    idStu int NOT  NULL,
    idSub int NOT  NULL,
    mark FLOAT,
    FOREIGN KEY (idStu) REFERENCES student(idStu),
    FOREIGN KEY (idSub) REFERENCES subjects(idSub)
);

-- Insert data into Visitor Table
INSERT INTO visitor (email, login_password) values ('administrator@gmail.com','admin123'),('hicham@gmail.com','hicham123'),('med@gmail.com','med123'),('test@gmail.com','test123');

-- Insert data into Student Table
INSERT INTO student (full_name, gender, age, adress, parent_phone, class, idV) values ('Hicham', 'M', 24, 'Safi', 0633445566, 'ADA_1', 1),('Med', 'M', 21, 'Keni', 0677889900, 'ADA_2', 2),('Test', 'F', 20, 'Casa', 06123456789, 'ADA_1', 3);

-- Insert data into Subjects Table
INSERT INTO subjects (subject_name) values ('Math'), ('English');

-- Insert data into Marks Table
INSERT INTO marks (mark, idStu, idSub) values(12, 1 , 1), (18, 1, 2), (14, 2, 1),(12, 2, 2), (15, 3, 1),(12, 3, 2);

-- Select by condition (Class ADA_1)
SELECT * FROM student, visitor WHERE student.idV = visitor.idV AND student.class = 'ADA_1';

-- Select by condition (Hicham's mark in Math)
select student.full_name, subjects.subject_name, marks.mark FROM student, subjects, marks  WHERE student.idStu=marks.idStu and subjects.idSub=marks.idSub and subjects.subject_name ="math" and student.full_name="hicham";

-- Inner Join Selection (English marks)
select student.full_name, subjects.subject_name, marks.mark
FROM marks
INNER JOIN student ON student.idStu=marks.idStu
INNER JOIN subjects ON  subjects.idSub=marks.idSub
WHERE subjects.subject_name = 'english';

-- Add column to existing table
ALTER TABLE student
ADD Hobbies varchar(255);

-- Change name & data type of column
ALTER TABLE student
CHANGE Hobbies Birthday DATE;

-- Delete column from table
ALTER TABLE student
DROP COLUMN Birthday;

-- Update existing data in a table
UPDATE  student
SET age = 23,
  adress = 'Toulouse'
WHERE full_name = "Test";

-- Delete a row from a table
DELETE FROM `student`
WHERE `full_name` = "Test"