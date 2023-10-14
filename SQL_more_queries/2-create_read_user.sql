-- Script to create database hbtn_0d_2
CREATE DATABASE IF NOT EXISTS hbtn_0d_2;
-- Script to create user user 0_2 in the database
CREATE USER IF NOT EXISTS 'user_0d_2'@'localhost';
-- Script to set password of user_0d_2 as user_0d_2_pwd
ALTER USER 'user_0d_2'@'localhost' IDENTIFIED BY 'user_0d_2_pwd';
-- Script to give only the privilege SELECT to user user_0d_2
GRANT SELECT ON hbtn_0d_2.* TO 'user_0d_2'@'localhost';
