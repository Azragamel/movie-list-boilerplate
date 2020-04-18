CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL
);

INSERT INTO movies (title) VALUES
('Jurrassic Park'),
('Interstellar'),
('Star Wars: The Empire Strikes Back');