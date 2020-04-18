CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  watched BOOLEAN DEFAULT 0
);

INSERT INTO movies (title, watched) VALUES
('Jurassic Park', false),
('Interstellar', false),
('Star Wars: The Empire Strikes Back', false),
('Star Wars: The Return of the Jedi', false),
('Star Wars: A New Hope', false),
('Doctor Strange', false);