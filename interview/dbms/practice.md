-- ============================================================
-- ===============   DATABASE STRUCTURE   ======================
-- ============================================================

DROP TABLE IF EXISTS Shippings;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Customers;

CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    age INT,
    country VARCHAR(100)
);

CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    item VARCHAR(100),
    amount INT,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE Shippings (
    shipping_id INT PRIMARY KEY,
    status INT,
    customer INT,
    FOREIGN KEY (customer) REFERENCES Customers(customer_id)
);

-- ============================================================
-- ===================  SAMPLE DATA INSERTS  ===================
--         Indian + US + UK + Europe + Middle East mix
-- ============================================================

-- ================  Customers (15 rows) =======================

INSERT INTO Customers (customer_id, first_name, last_name, age, country) VALUES
(1, 'Arun', 'Kumar', 28, 'India'),
(2, 'Sophia', 'Johnson', 34, 'USA'),
(3, 'Ravi', 'Menon', 42, 'India'),
(4, 'Emma', 'Thompson', 27, 'UK'),
(5, 'Aarav', 'Shah', 31, 'India'),
(6, 'Liam', 'Williams', 45, 'USA'),
(7, 'Noah', 'Brown', 39, 'Canada'),
(8, 'Isabella', 'Martinez', 29, 'Spain'),
(9, 'Fatima', 'Al Hassan', 33, 'UAE'),
(10, 'David', 'Green', 50, 'Australia'),
(11, 'Meera', 'Nair', 26, 'India'),
(12, 'Lucas', 'Anderson', 41, 'Denmark'),
(13, 'Sara', 'Lopez', 30, 'Mexico'),
(14, 'Yusuf', 'Rahman', 37, 'Malaysia'),
(15, 'Emily', 'Stone', 43, 'USA');

-- ================  Orders (15 rows) ==========================

INSERT INTO Orders (order_id, item, amount, customer_id) VALUES
(101, 'Laptop', 58000, 1),
(102, 'Mobile Phone', 23000, 2),
(103, 'Smartwatch', 9000, 3),
(104, 'Tablet', 30000, 3),
(105, 'Camera', 45000, 4),
(106, 'Bluetooth Speaker', 7000, 5),
(107, 'Gaming Mouse', 2500, 6),
(108, 'Monitor', 15000, 7),
(109, 'Headphones', 3500, 8),
(110, 'Gaming Laptop', 95000, 9),
(111, 'AC Unit', 38000, 10),
(112, 'Microwave Oven', 12000, 11),
(113, 'SSD 1TB', 6000, 12),
(114, 'Refrigerator', 52000, 13),
(115, 'Graphics Card', 78000, 15);

-- ================  Shippings (10 rows) =======================

-- status: 0 = Pending, 1 = Shipped, 2 = Delivered, 3 = Cancelled
INSERT INTO Shippings (shipping_id, status, customer) VALUES
(201, 1, 1),
(202, 2, 2),
(203, 0, 3),
(204, 1, 4),
(205, 3, 5),
(206, 2, 6),
(207, 1, 7),
(208, 2, 8),
(209, 0, 9),
(210, 1, 10);

-- ============================================================
-- ===================  USEFUL QUERIES  ========================
-- ============================================================

-- 1. All customers
SELECT * FROM Customers;

-- 2. All orders
SELECT * FROM Orders;

-- 3. Get orders with customer names
SELECT o.order_id, o.item, o.amount, c.first_name, c.last_name
FROM Orders o
JOIN Customers c ON o.customer_id = c.customer_id;

-- 4. Total amount spent by each customer
SELECT customer_id, SUM(amount) AS total_spent
FROM Orders
GROUP BY customer_id;

-- 5. Customers with no orders
SELECT c.*
FROM Customers c
LEFT JOIN Orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;

-- 6. Count orders per country
SELECT c.country, COUNT(o.order_id) AS total_orders
FROM Customers c
LEFT JOIN Orders o ON c.customer_id = o.customer_id
GROUP BY c.country;

-- 7. Highest order amount
SELECT MAX(amount) AS highest_order FROM Orders;

-- 8. Lowest order amount
SELECT MIN(amount) AS lowest_order FROM Orders;

-- 9. Average order amount
SELECT AVG(amount) AS avg_amount FROM Orders;

-- 10. Customers who ordered items above 50k
SELECT c.*, o.*
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
WHERE o.amount > 50000;

-- 11. Orders with shipping status
SELECT o.order_id, o.item, s.status
FROM Orders o
JOIN Shippings s ON o.customer_id = s.customer;

-- 12. Count shipping by status
SELECT status, COUNT(*) FROM Shippings GROUP BY status;

-- 13. Customers by country
SELECT country, COUNT(*) AS total_customers
FROM Customers
GROUP BY country;

-- 14. Items ordered most frequently
SELECT item, COUNT(*) AS frequency
FROM Orders
GROUP BY item
ORDER BY frequency DESC;

-- 15. Orders by customers older than 40
SELECT c.first_name, c.age, o.item, o.amount
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
WHERE c.age > 40;

-- 16. Countries with the highest spenders
SELECT c.country, SUM(o.amount) AS total_spend
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
GROUP BY c.country
ORDER BY total_spend DESC;

-- 17. Top 5 expensive orders
SELECT * FROM Orders ORDER BY amount DESC LIMIT 5;

-- 18. Customers from India with orders
SELECT c.first_name, o.item
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
WHERE c.country = 'India';

-- 19. Customers who have both orders & shipping
SELECT DISTINCT c.*
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN Shippings s ON c.customer_id = s.customer;

-- 20. Total orders per item
SELECT item, COUNT(*) AS total_orders
FROM Orders
GROUP BY item;

-- 21. Running total of order values (window function)
SELECT order_id, item, amount,
       SUM(amount) OVER(ORDER BY order_id) AS running_total
FROM Orders;

-- 22. Rank customers by spending
SELECT customer_id, SUM(amount) AS total_spent,
       RANK() OVER(ORDER BY SUM(amount) DESC) AS rank_position
FROM Orders
GROUP BY customer_id;

-- 23. Customers with shipping pending
SELECT c.*, s.status
FROM Customers c
JOIN Shippings s ON c.customer_id = s.customer
WHERE s.status = 0;

-- 24. Orders without shipping records
SELECT o.*
FROM Orders o
LEFT JOIN Shippings s ON o.customer_id = s.customer
WHERE s.shipping_id IS NULL;

-- 25. Items costing less than 10k
SELECT * FROM Orders WHERE amount < 10000;

-- 26. Shipping summary by country
SELECT c.country, COUNT(s.shipping_id) AS shipments
FROM Customers c
JOIN Shippings s ON c.customer_id = s.customer
GROUP BY c.country;

-- 27. Customers aged 25–35
SELECT * FROM Customers WHERE age BETWEEN 25 AND 35;

-- 28. Customers with names starting with A
SELECT * FROM Customers WHERE first_name LIKE 'A%';

-- 29. Total spend per customer (only high spenders >50k)
SELECT customer_id, SUM(amount) AS total
FROM Orders
GROUP BY customer_id
HAVING total > 50000;

-- 30. Most recent shipments by status
SELECT * FROM Shippings ORDER BY shipping_id DESC;

-- 31. Customers with multiple orders (>1)
SELECT c.customer_id, c.first_name, c.last_name, COUNT(o.order_id) AS order_count
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name
HAVING COUNT(o.order_id) > 1;

-- 32. Second highest order amount (subquery approach)
SELECT MAX(amount) AS second_highest
FROM Orders
WHERE amount < (SELECT MAX(amount) FROM Orders);

-- 33. Nth highest salary pattern - 3rd highest order amount
SELECT DISTINCT amount
FROM Orders o1
WHERE 2 = (SELECT COUNT(DISTINCT amount) FROM Orders o2 WHERE o2.amount > o1.amount);

-- 34. Self-join: Customers from the same country
SELECT c1.first_name AS customer1, c2.first_name AS customer2, c1.country
FROM Customers c1
JOIN Customers c2 ON c1.country = c2.country AND c1.customer_id < c2.customer_id
ORDER BY c1.country;

-- 35. UNION: Combine different age groups
SELECT first_name, last_name, age, 'Young' AS age_group FROM Customers WHERE age < 30
UNION
SELECT first_name, last_name, age, 'Middle' AS age_group FROM Customers WHERE age BETWEEN 30 AND 40
UNION
SELECT first_name, last_name, age, 'Senior' AS age_group FROM Customers WHERE age > 40;

-- 36. CASE statement: Categorize order amounts
SELECT order_id, item, amount,
    CASE 
        WHEN amount < 10000 THEN 'Low'
        WHEN amount BETWEEN 10000 AND 50000 THEN 'Medium'
        ELSE 'High'
    END AS order_category
FROM Orders;

-- 37. EXISTS: Customers who have placed orders
SELECT c.*
FROM Customers c
WHERE EXISTS (SELECT 1 FROM Orders o WHERE o.customer_id = c.customer_id);

-- 38. NOT EXISTS: Customers who haven't placed orders
SELECT c.*
FROM Customers c
WHERE NOT EXISTS (SELECT 1 FROM Orders o WHERE o.customer_id = c.customer_id);

-- 39. IN: Customers from specific countries
SELECT * FROM Customers 
WHERE country IN ('India', 'USA', 'UK');

-- 40. Subquery in SELECT: Customer with their order count
SELECT c.first_name, c.last_name,
    (SELECT COUNT(*) FROM Orders o WHERE o.customer_id = c.customer_id) AS order_count
FROM Customers c;

-- 41. Window function: ROW_NUMBER for orders per customer
SELECT customer_id, order_id, item, amount,
    ROW_NUMBER() OVER(PARTITION BY customer_id ORDER BY amount DESC) AS order_rank
FROM Orders;

-- 42. Window function: DENSE_RANK by amount
SELECT order_id, item, amount,
    DENSE_RANK() OVER(ORDER BY amount DESC) AS dense_rank
FROM Orders;

-- 43. LAG: Compare current order with previous order amount
SELECT order_id, item, amount,
    LAG(amount, 1, 0) OVER(ORDER BY order_id) AS previous_amount,
    amount - LAG(amount, 1, 0) OVER(ORDER BY order_id) AS difference
FROM Orders;

-- 44. LEAD: Compare current order with next order amount
SELECT order_id, item, amount,
    LEAD(amount, 1, 0) OVER(ORDER BY order_id) AS next_amount
FROM Orders;

-- 45. NTILE: Divide orders into 4 quartiles
SELECT order_id, item, amount,
    NTILE(4) OVER(ORDER BY amount) AS quartile
FROM Orders;

-- 46. CTE (Common Table Expression): High value customers
WITH HighValueCustomers AS (
    SELECT customer_id, SUM(amount) AS total_spent
    FROM Orders
    GROUP BY customer_id
    HAVING SUM(amount) > 50000
)
SELECT c.first_name, c.last_name, h.total_spent
FROM Customers c
JOIN HighValueCustomers h ON c.customer_id = h.customer_id;

-- 47. Recursive CTE: Number series (1 to 10)
WITH RECURSIVE Numbers AS (
    SELECT 1 AS n
    UNION ALL
    SELECT n + 1 FROM Numbers WHERE n < 10
)
SELECT * FROM Numbers;

-- 48. Multiple CTEs: Customer spending analysis
WITH CustomerSpending AS (
    SELECT customer_id, SUM(amount) AS total_spent
    FROM Orders
    GROUP BY customer_id
),
AvgSpending AS (
    SELECT AVG(total_spent) AS avg_amount
    FROM CustomerSpending
)
SELECT c.first_name, c.last_name, cs.total_spent, a.avg_amount
FROM Customers c
JOIN CustomerSpending cs ON c.customer_id = cs.customer_id
CROSS JOIN AvgSpending a
WHERE cs.total_spent > a.avg_amount;

-- 49. Correlated subquery: Customers with above-average spending
SELECT c.first_name, c.last_name, 
    (SELECT SUM(amount) FROM Orders o WHERE o.customer_id = c.customer_id) AS total_spent
FROM Customers c
WHERE (SELECT SUM(amount) FROM Orders o WHERE o.customer_id = c.customer_id) > 
    (SELECT AVG(amount) FROM Orders);

-- 50. String functions: Concatenate name and format
SELECT 
    customer_id,
    CONCAT(UPPER(first_name), ' ', UPPER(last_name)) AS full_name_upper,
    CONCAT(first_name, ' ', last_name, ' (', country, ')') AS formatted_name,
    LENGTH(first_name) AS name_length,
    SUBSTRING(first_name, 1, 1) AS initial
FROM Customers;

-- 51. Date functions example (if we had dates)
-- SELECT DATE_FORMAT(order_date, '%Y-%m-%d') FROM Orders;
-- SELECT YEAR(order_date), MONTH(order_date) FROM Orders;

-- 52. COALESCE: Handle NULL values
SELECT customer_id, 
    COALESCE(first_name, 'Unknown') AS first_name,
    COALESCE(country, 'Not Specified') AS country
FROM Customers;

-- 53. GROUP BY with ROLLUP: Hierarchical totals
SELECT country, SUM(amount) AS total_amount
FROM Customers c
LEFT JOIN Orders o ON c.customer_id = o.customer_id
GROUP BY country WITH ROLLUP;

-- 54. HAVING vs WHERE: Filter before and after grouping
SELECT country, COUNT(*) AS customer_count
FROM Customers
WHERE age > 25
GROUP BY country
HAVING COUNT(*) >= 1;

-- 55. Cross join: All possible customer-item combinations (cartesian product)
SELECT c.first_name, o.item
FROM Customers c
CROSS JOIN Orders o
LIMIT 10;

-- 56. Set operations: INTERSECT pattern (countries with both customers and orders)
SELECT DISTINCT c1.country
FROM Customers c1
WHERE country IN (
    SELECT c2.country FROM Customers c2
    JOIN Orders o ON c2.customer_id = o.customer_id
);

-- 57. EXCEPT/MINUS pattern: Customers without specific items
SELECT customer_id FROM Customers
WHERE customer_id NOT IN (
    SELECT customer_id FROM Orders WHERE item = 'Laptop'
);

-- 58. Find duplicates (if any existed in items)
SELECT item, COUNT(*) AS count
FROM Orders
GROUP BY item
HAVING COUNT(*) > 1;

-- 59. Pivot-like query: Count orders by country and status
SELECT c.country,
    SUM(CASE WHEN s.status = 0 THEN 1 ELSE 0 END) AS pending,
    SUM(CASE WHEN s.status = 1 THEN 1 ELSE 0 END) AS shipped,
    SUM(CASE WHEN s.status = 2 THEN 1 ELSE 0 END) AS delivered,
    SUM(CASE WHEN s.status = 3 THEN 1 ELSE 0 END) AS cancelled
FROM Customers c
LEFT JOIN Shippings s ON c.customer_id = s.customer
GROUP BY c.country;

-- 60. Complex join with aggregation: Customer summary
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    c.country,
    COUNT(DISTINCT o.order_id) AS total_orders,
    COALESCE(SUM(o.amount), 0) AS total_spent,
    COALESCE(AVG(o.amount), 0) AS avg_order_value,
    COUNT(DISTINCT s.shipping_id) AS total_shipments
FROM Customers c
LEFT JOIN Orders o ON c.customer_id = o.customer_id
LEFT JOIN Shippings s ON c.customer_id = s.customer
GROUP BY c.customer_id, c.first_name, c.last_name, c.country
ORDER BY total_spent DESC;