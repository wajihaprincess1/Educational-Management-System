CREATE DATABASE educational_management;

USE educational_management;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email, password) VALUES
('Nadia', 'Nadia@gmail.com', 'Nad1'),
('Hania', 'Hania@gmail.com', 'Hani4'),
('Hina', 'Hina@gmail.com', 'Hina6'),
('Humaira', 'Humaira@gmail.com', 'Hum7'),
('Hadia', 'Hadia@gmail.com', 'Hadia8'),
('Kiran', 'Kiran@gmail.com', 'Kiran2');
