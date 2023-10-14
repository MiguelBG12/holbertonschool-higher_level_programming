-- Script to create the user hbtn_0d_usa.
CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;
-- Script to change current usage context to database hbtn_0d_usa
USE hbtn_0d_usa;
-- Script to create the table cities with id, state_id, name columns and establishes a relationship between tables 'cities' and 'states'
CREATE TABLE IF NOT EXISTS cities (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	state_id INT NOT NULL,
	name VARCHAR(256),
	FOREIGN KEY (state_id) REFERENCES states(id)
);
