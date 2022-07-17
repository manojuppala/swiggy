CREATE DATABASE swiggy;

CREATE TABLE customer(
customer_id SERIAL PRIMARY KEY,
customer_name VARCHAR(255),
customer_city VARCHAR(255)
);

CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    order_date DATE NOT NULL DEFAULT CURRENT_DATE,
    customer_id INT,
    CONSTRAINT fk_ord_cus FOREIGN KEY(customer_id) REFERENCES customer(customer_id),
    order_status VARCHAR(255)
);

CREATE TABLE items(
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(255),
    item_img VARCHAR(255),
    item_caption VARCHAR(255),
    item_time NUMERIC,
    item_count NUMERIC,
    item_rating NUMERIC,
    item_cost NUMERIC
);