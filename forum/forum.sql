CREATE DATABASE formulaires;



CREATE TABLE IF NOT EXISTS `inscriptions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `date_inscription` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 

USE foru;

CREATE TABLE sections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE threads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    section_id INT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_path VARCHAR(255),
    FOREIGN KEY (section_id) REFERENCES sections(id)
);

INSERT INTO sections (name) VALUES ('Destinations Populaires'), ('Astuces de Voyage'), ('Évaluations d’Hôtels et de Restaurants'), ('Culture et Traditions'), ('Gastronomie Locale'), ('Langues et Communication'), ('Histoires de Voyage'), ('Itinéraires Conseillés'), ('Photos et Vidéos');

CREATE TABLE images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    thread_id INT,
    image_path VARCHAR(255),
    FOREIGN KEY (thread_id) REFERENCES threads(id)
);
