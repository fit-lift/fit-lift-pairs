DROP DATABASE IF EXISTS meals;

CREATE DATABASE meals;

USE meals;

/* FOOD TABLE FOR VISITOR VIEW  */

CREATE TABLE food(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(20) NOT NULL,
    calories decimal(10,2) NOT NULL,
    PRIMARY KEY (ID)
);

/* USERS TABLE  */

CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(20) NOT NULL,
    email varchar(30) NOT NULL,
    password varchar(20) NOT NULL,
    PRIMARY KEY (ID)
);

/* USE INFO TABLE */

CREATE TABLE informations(
    id int NOT NULL AUTO_INCREMENT,
    weight decimal(10,2) NOT NULL,
    bmi decimal(10,2) NOT NULL,
    date varchar(50) NOT NULL,
    user_id int NOT NULL,
    PRIMARY KEY (ID),
    CONSTRAINT FK_userID FOREIGN KEY (user_id) REFERENCES users(id)
);

/* OVERWEIGHT MEAL PLAN */

CREATE TABLE overweight(
    id int NOT NULL AUTO_INCREMENT,
    carbs varchar(20) NOT NULL,
    protein varchar(20) NOT NULL,
    fats varchar(20) NOT NULL,
    PRIMARY KEY (ID)
);

/* UNDERWEIGHT */

CREATE TABLE underweight(
    id int NOT NULL AUTO_INCREMENT,
    carbs varchar(20) NOT NULL,
    protein varchar(20) NOT NULL,
    fats varchar(20) NOT NULL,
    PRIMARY KEY (ID)
);

/* OPTIMAL WEIGHT */

CREATE TABLE optimal(
    id int NOT NULL AUTO_INCREMENT,
    carbs varchar(20) NOT NULL,
    protein varchar(20) NOT NULL,
    fats varchar(20) NOT NULL,
    PRIMARY KEY (ID)
);

/*  FOOD TABLE ITEMS  */


INSERT INTO food(id,name,calories) VALUES(1,'Rice',130);
INSERT INTO food(id,name,calories) VALUES(2,'Bread',265);
INSERT INTO food(id,name,calories) VALUES(3,'Milk',42);
INSERT INTO food(id,name,calories) VALUES(4,'Pasta',131);
INSERT INTO food(id,name,calories) VALUES(5,'Banana',89);
INSERT INTO food(id,name,calories) VALUES(6,'Apple',52);
INSERT INTO food(id,name,calories) VALUES(7,'Oatmeal',68);
INSERT INTO food(id,name,calories) VALUES(8,'Cereal',379);
INSERT INTO food(id,name,calories) VALUES(9,'Fish',206);
INSERT INTO food(id,name,calories) VALUES(10,'Red Meat',250);
INSERT INTO food(id,name,calories) VALUES(11,'Chicken',239);

/*     ADMIN USER              */

INSERT INTO users(id,name,email,password) VALUES(1,'admin','admin@admin.com','12345');

/* INSERT MEAL FOR OVERWEIGHT */

INSERT INTO overweight(id,carbs,protein,fats) VALUES(1,'oatmeal 70g','3 eggs','omega 3 1tsp');
INSERT INTO overweight(id,carbs,protein,fats) VALUES(2,'rice 150g','chicken 200g','olive oil 1tsp');
INSERT INTO overweight(id,carbs,protein,fats) VALUES(3,'rice 100g','fish 150g','no fats');

/* INSERT MEAL FOR UNDERWEIGHT */

INSERT INTO underweight(id,carbs,protein,fats) VALUES(1,'cereal 120g','6 eggs','omega 3 1tsp');
INSERT INTO underweight(id,carbs,protein,fats) VALUES(2,'rice 250g','chicken 200g','olive oil 1tsp');
INSERT INTO underweight(id,carbs,protein,fats) VALUES(3,'rice 200g','beef 200g','olive oil 1tsp');
INSERT INTO underweight(id,carbs,protein,fats) VALUES(4,'3 mid potatoes','3 eggs','olive oil 1tsp');
INSERT INTO underweight(id,carbs,protein,fats) VALUES(5,'rice 70g','2 eggs','no fats');

/* INSERT MEAL FOR OPTIMAL  */

INSERT INTO optimal(id,carbs,protein,fats) VALUES(1,'2 slice toast','4 eggs','omega 3 1tsp');
INSERT INTO optimal(id,carbs,protein,fats) VALUES(2,'rice 250g','beef 200g','olive oil 1tsp');
INSERT INTO optimal(id,carbs,protein,fats) VALUES(3,'pasta 200g','chicken 200g','olive oil 1tsp');
INSERT INTO optimal(id,carbs,protein,fats) VALUES(4,'cookies','nuts','no fats');
