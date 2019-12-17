CREATE DATABASE recyclerie;

USE recyclerie;

CREATE TABLE func_content (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50),
    content VARCHAR(8000)
);


CREATE TABLE counters (
    id INT PRIMARY KEY AUTO_INCREMENT,
    count_name VARCHAR(50),
    count_values FLOAT
);

CREATE TABLE contact (
    id INT PRIMARY KEY AUTO_INCREMENT,
    contact_name VARCHAR(50),
    adress VARCHAR(100),
    phone VARCHAR(20),
    mail VARCHAR(50)
);

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50),
    user_password VARCHAR(50)
);

CREATE TABLE events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    event_name VARCHAR(50),
    event_desc VARCHAR(8000),
    event_date DATE,
    start_hour TIME,
    end_hour TIME,
    price FLOAT,
    remain_place INT
);

CREATE TABLE events_images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    events_id INT NOT NULL,
    images_id INT NOT NULL
);

CREATE TABLE images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    image_name VARCHAR(50),
    image_file VARCHAR(8000),
    category VARCHAR(20)
);

CREATE TABLE schedule (
    id INT PRIMARY KEY AUTO_INCREMENT,
    schedule_name VARCHAR(50),
    day DATE,
    start_hour TIME,
    end_hour TIME
);


INSERT INTO func_content (title, content)  VALUES ("Fonctionnement", "La recyclerie fonctionne comme blabla"), ("Ce que je veux", "C'est ça !") ,("Ce que tu peux te garder", "C'est ceci !");
