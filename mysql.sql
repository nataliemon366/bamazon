DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  itemId INT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT (10) NOT NULL,
  PRIMARY KEY(itemid)
);

INSERT INTO products(itemId,product_name, department_name, price, stock_quantity)
VALUES (2453,"Call of Duty:Black Ops", "Video Game", 49.95, 150),
(3736,"coffee table", "Appliances", 89.30, 26),
(1838,"Reebook shoes", "Shoes", 76.40, 12),
(2293,"Tomatoes (3pk)", "Food", 6.40, 126),
(3455,"Notebook", "Supplies", 2.40, 57),
(1928,"Picture Frame", "Home Goods", 12.40, 10),
(3422,"Bike", "Outdoor", 106.40, 35),
(2388,"7 daughters, 7 sons", "Book", 9.99, 5);
