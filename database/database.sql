CREATE DATABASE recipes;

CREATE TABLE recipes (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);