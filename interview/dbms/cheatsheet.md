# DBMS Quick Reference Cheat Sheet

> **Purpose:** Fast reference for SQL commands, concepts, and interview questions. Everything you need at a glance!

---

## 📋 Table of Contents

1. [SQL Commands Quick Reference](#sql-commands-quick-reference)
2. [Join Types Visual](#join-types-visual)
3. [Keys & Constraints](#keys--constraints)
4. [Normalization Forms](#normalization-forms)
5. [ACID Properties](#acid-properties)
6. [Indexes](#indexes)
7. [Transaction Isolation Levels](#transaction-isolation-levels)
8. [Common Interview Questions](#common-interview-questions)
9. [Database-Specific Syntax](#database-specific-syntax)
10. [Performance Optimization Tips](#performance-optimization-tips)

---

## SQL Commands Quick Reference

### DML (Data Manipulation Language)

```sql
-- SELECT
SELECT column1, column2 FROM table_name WHERE condition;
SELECT * FROM employees WHERE salary > 50000;
SELECT DISTINCT department FROM employees;

-- INSERT
INSERT INTO table_name (col1, col2) VALUES (val1, val2);
INSERT INTO employees VALUES (101, 'John', 'Doe', 50000);

-- UPDATE
UPDATE table_name SET col1 = val1 WHERE condition;
UPDATE employees SET salary = 60000 WHERE id = 101;

-- DELETE
DELETE FROM table_name WHERE condition;
DELETE FROM employees WHERE id = 101;

-- UPSERT (PostgreSQL)
INSERT INTO table_name VALUES (...)
ON CONFLICT (id) DO UPDATE SET col = val;

-- MERGE (SQL Server)
MERGE INTO target USING source ON condition
WHEN MATCHED THEN UPDATE SET ...
WHEN NOT MATCHED THEN INSERT VALUES (...);
```

### DDL (Data Definition Language)

```sql
-- CREATE TABLE
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    salary DECIMAL(10,2) CHECK (salary > 0),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(id)
);

-- ALTER TABLE
ALTER TABLE employees ADD COLUMN phone VARCHAR(20);
ALTER TABLE employees DROP COLUMN phone;
ALTER TABLE employees MODIFY COLUMN salary DECIMAL(12,2);

-- DROP TABLE
DROP TABLE IF EXISTS employees;

-- TRUNCATE (Delete all data, keep structure)
TRUNCATE TABLE employees;

-- CREATE INDEX
CREATE INDEX idx_name ON employees(last_name);
CREATE UNIQUE INDEX idx_email ON employees(email);

-- CREATE VIEW
CREATE VIEW high_earners AS
SELECT * FROM employees WHERE salary > 70000;
```

### DCL (Data Control Language)

```sql
-- GRANT
GRANT SELECT, INSERT ON database.table TO 'user'@'host';
GRANT ALL PRIVILEGES ON database.* TO 'admin'@'localhost';

-- REVOKE
REVOKE INSERT, UPDATE ON database.table FROM 'user'@'host';
```

### TCL (Transaction Control Language)

```sql
-- Transaction
BEGIN TRANSACTION;  -- or START TRANSACTION; or BEGIN;
    UPDATE accounts SET balance = balance - 100 WHERE id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;  -- Save changes

-- Rollback
BEGIN TRANSACTION;
    DELETE FROM orders WHERE id = 100;
ROLLBACK;  -- Undo changes

-- Savepoint
SAVEPOINT sp1;
ROLLBACK TO sp1;
```

---

## Join Types Visual

### INNER JOIN

```
Table A          Table B          Result
   1  ────────────  1               1
   2  ────────────  2               2
   3                3               3
   4

Returns: Only matching rows from both tables
```

### LEFT JOIN (LEFT OUTER JOIN)

```
Table A          Table B          Result
   1  ────────────  1               1
   2  ────────────  2               2
   3                3               3
   4                                4 (NULL from B)

Returns: All from left + matching from right
```

### RIGHT JOIN

```
Table A          Table B          Result
   1  ────────────  1               1
   2  ────────────  2               2
                    3               3 (NULL from A)
                    4               4 (NULL from A)

Returns: All from right + matching from left
```

### FULL OUTER JOIN

```
Returns: All rows from both tables (NULLs where no match)
```

### CROSS JOIN

```
Returns: Cartesian product (all combinations)
A(3 rows) × B(4 rows) = 12 rows
```

### SELF JOIN

```
Joining table with itself (e.g., employees + their managers)
```

### Examples

```sql
-- INNER JOIN
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;

-- LEFT JOIN (Find employees without departments)
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id
WHERE d.id IS NULL;

-- SELF JOIN (Find employees and their managers)
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

-- CROSS JOIN
SELECT * FROM colors CROSS JOIN sizes;
```

---

## Keys & Constraints

### Types of Keys

| Key Type          | Description                                   | Example                                            |
| ----------------- | --------------------------------------------- | -------------------------------------------------- |
| **Primary Key**   | Uniquely identifies each row                  | `employee_id INT PRIMARY KEY`                      |
| **Foreign Key**   | References primary key in another table       | `FOREIGN KEY (dept_id) REFERENCES departments(id)` |
| **Unique Key**    | Ensures all values are unique (allows NULL)   | `email VARCHAR(100) UNIQUE`                        |
| **Candidate Key** | Could be primary key                          | SSN, Email, Employee_ID                            |
| **Composite Key** | Primary key with multiple columns             | `PRIMARY KEY (order_id, product_id)`               |
| **Super Key**     | Set of attributes that uniquely identify rows | {id}, {id, name}, {email, phone}                   |

### Constraints

```sql
-- NOT NULL
name VARCHAR(100) NOT NULL

-- UNIQUE
email VARCHAR(100) UNIQUE

-- PRIMARY KEY
id INT PRIMARY KEY

-- FOREIGN KEY
dept_id INT,
FOREIGN KEY (dept_id) REFERENCES departments(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE

-- CHECK
salary DECIMAL(10,2) CHECK (salary >= 0)
age INT CHECK (age BETWEEN 18 AND 65)

-- DEFAULT
hire_date DATE DEFAULT CURRENT_DATE
status VARCHAR(20) DEFAULT 'Active'
```

### Referential Integrity Actions

```sql
ON DELETE CASCADE      -- Delete child rows when parent deleted
ON DELETE SET NULL     -- Set FK to NULL when parent deleted
ON DELETE RESTRICT     -- Prevent deletion if child rows exist
ON DELETE NO ACTION    -- Same as RESTRICT

ON UPDATE CASCADE      -- Update FK when parent PK changes
ON UPDATE SET NULL     -- Set FK to NULL when parent PK changes
```

---

## Normalization Forms

### 1NF (First Normal Form)

✅ **Rules:**

- Each column contains atomic (indivisible) values
- Each column contains values of single type
- Each column has unique name
- Order doesn't matter

❌ **Bad:**

```
| id | name | phones           |
|----|------|------------------|
| 1  | John | 123-456, 789-012 |
```

✅ **Good:**

```
| id | name | phone    |
|----|------|----------|
| 1  | John | 123-456  |
| 1  | John | 789-012  |
```

### 2NF (Second Normal Form)

✅ **Rules:**

- Must be in 1NF
- No partial dependency (non-key attributes must depend on entire primary key)

❌ **Bad:** (Partial dependency)

```
| order_id | product_id | product_name | quantity |
```

_product_name depends only on product_id, not full key (order_id, product_id)_

✅ **Good:** (Split into two tables)

```
Orders: | order_id | product_id | quantity |
Products: | product_id | product_name |
```

### 3NF (Third Normal Form)

✅ **Rules:**

- Must be in 2NF
- No transitive dependency (non-key attributes must depend only on primary key)

❌ **Bad:**

```
| emp_id | emp_name | dept_id | dept_name |
```

_dept_name depends on dept_id (transitive)_

✅ **Good:**

```
Employees: | emp_id | emp_name | dept_id |
Departments: | dept_id | dept_name |
```

### BCNF (Boyce-Codd Normal Form)

✅ **Rules:**

- Must be in 3NF
- For every functional dependency X → Y, X must be a super key

### Quick Normalization Checklist

- [ ] **1NF**: Atomic values only?
- [ ] **2NF**: No partial dependencies?
- [ ] **3NF**: No transitive dependencies?
- [ ] **BCNF**: All determinants are candidate keys?

---

## ACID Properties

| Property        | Description                                               | Example Violation                                  |
| --------------- | --------------------------------------------------------- | -------------------------------------------------- |
| **Atomicity**   | All or nothing - transaction completely succeeds or fails | Transfer: Debit from A succeeds, credit to B fails |
| **Consistency** | Database remains in valid state                           | Balance becomes negative (violates constraint)     |
| **Isolation**   | Concurrent transactions don't interfere                   | Two users booking same seat simultaneously         |
| **Durability**  | Committed changes are permanent                           | Power failure after COMMIT loses data              |

### Transaction Example

```sql
BEGIN TRANSACTION;
    UPDATE accounts SET balance = balance - 100 WHERE id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;  -- Both succeed together

-- If error occurs
ROLLBACK;  -- Both fail together
```

---

## Indexes

### Types of Indexes

| Type              | Description                      | Use Case                                 |
| ----------------- | -------------------------------- | ---------------------------------------- |
| **B-Tree**        | Default, balanced tree           | General purpose, range queries           |
| **Hash**          | Hash table based                 | Exact match lookups only                 |
| **Bitmap**        | Bit arrays                       | Low cardinality columns (gender, status) |
| **Full-Text**     | Text search optimized            | Search in text content                   |
| **Clustered**     | Sorts data physically            | One per table, usually on PK             |
| **Non-Clustered** | Separate structure with pointers | Multiple per table                       |

### Index Commands

```sql
-- Create index
CREATE INDEX idx_lastname ON employees(last_name);

-- Unique index
CREATE UNIQUE INDEX idx_email ON employees(email);

-- Composite index
CREATE INDEX idx_name_dept ON employees(last_name, first_name, dept_id);

-- Partial/Filtered index
CREATE INDEX idx_high_earners ON employees(salary) WHERE salary > 70000;

-- Drop index
DROP INDEX idx_lastname;

-- Check index usage
EXPLAIN SELECT * FROM employees WHERE last_name = 'Smith';
```

### When to Index

✅ **Index These:**

- Primary keys (automatic)
- Foreign keys
- Columns in WHERE clause
- Columns in JOIN conditions
- Columns in ORDER BY
- Columns frequently searched

❌ **Don't Index:**

- Small tables (< 1000 rows)
- Columns rarely used in queries
- Columns with frequent updates
- Columns with low cardinality (few unique values)
- Tables with heavy INSERT/UPDATE operations

---

## Transaction Isolation Levels

| Level                | Dirty Read | Non-Repeatable Read | Phantom Read | Performance    |
| -------------------- | ---------- | ------------------- | ------------ | -------------- |
| **READ UNCOMMITTED** | ❌ Yes     | ❌ Yes              | ❌ Yes       | ⚡⚡⚡ Fastest |
| **READ COMMITTED**   | ✅ No      | ❌ Yes              | ❌ Yes       | ⚡⚡ Fast      |
| **REPEATABLE READ**  | ✅ No      | ✅ No               | ❌ Yes       | ⚡ Moderate    |
| **SERIALIZABLE**     | ✅ No      | ✅ No               | ✅ No        | 🐌 Slowest     |

### Definitions

- **Dirty Read**: Reading uncommitted changes from another transaction
- **Non-Repeatable Read**: Same query returns different data within transaction
- **Phantom Read**: New rows appear that weren't there before

### Set Isolation Level

```sql
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

---

## Aggregate Functions

| Function         | Description        | Example                                     |
| ---------------- | ------------------ | ------------------------------------------- |
| `COUNT()`        | Count rows         | `SELECT COUNT(*) FROM employees;`           |
| `SUM()`          | Sum values         | `SELECT SUM(salary) FROM employees;`        |
| `AVG()`          | Average            | `SELECT AVG(salary) FROM employees;`        |
| `MIN()`          | Minimum            | `SELECT MIN(salary) FROM employees;`        |
| `MAX()`          | Maximum            | `SELECT MAX(salary) FROM employees;`        |
| `GROUP_CONCAT()` | Concatenate values | `SELECT GROUP_CONCAT(name) FROM employees;` |

### GROUP BY & HAVING

```sql
-- Group by department, count employees
SELECT department, COUNT(*) as emp_count
FROM employees
GROUP BY department;

-- Filter groups (HAVING)
SELECT department, AVG(salary) as avg_sal
FROM employees
GROUP BY department
HAVING AVG(salary) > 60000;

-- Execution order: WHERE → GROUP BY → HAVING → ORDER BY
SELECT department, COUNT(*) as count
FROM employees
WHERE status = 'Active'        -- Filter rows first
GROUP BY department             -- Then group
HAVING COUNT(*) > 5             -- Filter groups
ORDER BY count DESC;            -- Finally sort
```

---

## Window Functions

```sql
-- ROW_NUMBER: Assign unique row numbers
SELECT name, salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC) as row_num
FROM employees;

-- RANK: Assign ranks (gaps after ties)
SELECT name, salary,
       RANK() OVER (ORDER BY salary DESC) as rank
FROM employees;

-- DENSE_RANK: No gaps
SELECT name, salary,
       DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank
FROM employees;

-- PARTITION BY: Rank within groups
SELECT name, department, salary,
       RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank
FROM employees;

-- LAG/LEAD: Access previous/next row
SELECT name, salary,
       LAG(salary) OVER (ORDER BY salary) as prev_salary,
       LEAD(salary) OVER (ORDER BY salary) as next_salary
FROM employees;

-- Running total
SELECT name, salary,
       SUM(salary) OVER (ORDER BY id) as running_total
FROM employees;

-- Moving average (last 3 rows)
SELECT date, sales,
       AVG(sales) OVER (ORDER BY date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_avg
FROM sales;
```

---

## Common Table Expressions (CTEs)

```sql
-- Basic CTE
WITH high_earners AS (
    SELECT * FROM employees WHERE salary > 70000
)
SELECT * FROM high_earners ORDER BY salary DESC;

-- Multiple CTEs
WITH
dept_avg AS (
    SELECT department, AVG(salary) as avg_sal
    FROM employees
    GROUP BY department
),
above_avg AS (
    SELECT e.name, e.salary, d.avg_sal
    FROM employees e
    JOIN dept_avg d ON e.department = d.department
    WHERE e.salary > d.avg_sal
)
SELECT * FROM above_avg;

-- Recursive CTE (Hierarchical data)
WITH RECURSIVE emp_hierarchy AS (
    SELECT id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    SELECT e.id, e.name, e.manager_id, h.level + 1
    FROM employees e
    JOIN emp_hierarchy h ON e.manager_id = h.id
)
SELECT * FROM emp_hierarchy;
```

---

## Subqueries

```sql
-- WHERE clause
SELECT name FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- IN operator
SELECT name FROM employees
WHERE dept_id IN (SELECT id FROM departments WHERE location = 'NYC');

-- EXISTS
SELECT d.name FROM departments d
WHERE EXISTS (SELECT 1 FROM employees e WHERE e.dept_id = d.id);

-- FROM clause (derived table)
SELECT dept, avg_sal
FROM (
    SELECT department as dept, AVG(salary) as avg_sal
    FROM employees
    GROUP BY department
) dept_stats
WHERE avg_sal > 60000;

-- Correlated subquery
SELECT e1.name, e1.salary
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department = e1.department
);
```

---

## String Functions

| Function                      | Description          | Example                                  |
| ----------------------------- | -------------------- | ---------------------------------------- |
| `CONCAT(s1, s2)`              | Concatenate strings  | `CONCAT(first_name, ' ', last_name)`     |
| `UPPER(str)`                  | Convert to uppercase | `UPPER('hello')` → `'HELLO'`             |
| `LOWER(str)`                  | Convert to lowercase | `LOWER('HELLO')` → `'hello'`             |
| `LENGTH(str)`                 | String length        | `LENGTH('hello')` → `5`                  |
| `SUBSTRING(str, start, len)`  | Extract substring    | `SUBSTRING('hello', 2, 3)` → `'ell'`     |
| `TRIM(str)`                   | Remove spaces        | `TRIM('  hello  ')` → `'hello'`          |
| `REPLACE(str, find, replace)` | Replace substring    | `REPLACE('hello', 'l', 'r')` → `'herro'` |
| `POSITION(substr IN str)`     | Find position        | `POSITION('o' IN 'hello')` → `5`         |

---

## Date Functions

| Function                           | Description           | Example                                |
| ---------------------------------- | --------------------- | -------------------------------------- |
| `CURRENT_DATE`                     | Current date          | `2024-11-15`                           |
| `CURRENT_TIME`                     | Current time          | `14:30:00`                             |
| `CURRENT_TIMESTAMP`                | Current date and time | `2024-11-15 14:30:00`                  |
| `EXTRACT(YEAR FROM date)`          | Extract part          | `EXTRACT(YEAR FROM hire_date)`         |
| `DATE_ADD(date, INTERVAL 1 MONTH)` | Add time              | MySQL                                  |
| `date + INTERVAL '1 month'`        | Add time              | PostgreSQL                             |
| `DATEDIFF(date1, date2)`           | Difference in days    | `DATEDIFF('2024-12-31', '2024-01-01')` |

---

## CASE Statement

```sql
-- Simple CASE
SELECT name,
       CASE department
           WHEN 'IT' THEN 'Technology'
           WHEN 'HR' THEN 'Human Resources'
           ELSE 'Other'
       END as dept_category
FROM employees;

-- Searched CASE
SELECT name, salary,
       CASE
           WHEN salary < 40000 THEN 'Low'
           WHEN salary BETWEEN 40000 AND 70000 THEN 'Medium'
           WHEN salary > 70000 THEN 'High'
       END as salary_grade
FROM employees;

-- CASE in aggregation
SELECT department,
       SUM(CASE WHEN salary > 60000 THEN 1 ELSE 0 END) as high_earners,
       SUM(CASE WHEN salary <= 60000 THEN 1 ELSE 0 END) as regular_earners
FROM employees
GROUP BY department;
```

---

## Keys & Constraints Cheat Sheet

```sql
-- Primary Key
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    -- or
    PRIMARY KEY (id)
);

-- Composite Primary Key
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);

-- Foreign Key with actions
CREATE TABLE employees (
    id INT PRIMARY KEY,
    dept_id INT,
    CONSTRAINT fk_department
        FOREIGN KEY (dept_id)
        REFERENCES departments(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- Unique Constraint
ALTER TABLE employees ADD CONSTRAINT unique_email UNIQUE (email);

-- Check Constraint
ALTER TABLE employees ADD CONSTRAINT chk_salary CHECK (salary >= 0);

-- Default Constraint
ALTER TABLE employees ALTER COLUMN status SET DEFAULT 'Active';
```

---

## Common Interview Questions

### 1. **Difference between DELETE, TRUNCATE, and DROP?**

| Command  | Type | Rollback | WHERE  | Speed   | Identity Reset   |
| -------- | ---- | -------- | ------ | ------- | ---------------- |
| DELETE   | DML  | ✅ Yes   | ✅ Yes | 🐌 Slow | ❌ No            |
| TRUNCATE | DDL  | ❌ No\*  | ❌ No  | ⚡ Fast | ✅ Yes           |
| DROP     | DDL  | ❌ No    | ❌ No  | ⚡ Fast | N/A (table gone) |

\*Some DBs allow rollback in transactions

```sql
DELETE FROM employees WHERE id = 101;  -- Delete specific rows
TRUNCATE TABLE employees;               -- Delete all, keep structure
DROP TABLE employees;                   -- Delete table completely
```

### 2. **What is the difference between HAVING and WHERE?**

| Clause | Used With | Filters           | Can Use Aggregates |
| ------ | --------- | ----------------- | ------------------ |
| WHERE  | Rows      | Before grouping   | ❌ No              |
| HAVING | Groups    | After aggregation | ✅ Yes             |

```sql
SELECT department, AVG(salary)
FROM employees
WHERE status = 'Active'          -- Filter rows
GROUP BY department
HAVING AVG(salary) > 50000;      -- Filter groups
```

### 3. **PRIMARY KEY vs UNIQUE KEY?**

| Feature         | Primary Key           | Unique Key            |
| --------------- | --------------------- | --------------------- |
| NULL values     | ❌ Not allowed        | ✅ Allowed (one NULL) |
| Per table       | One only              | Multiple allowed      |
| Clustered index | ✅ Creates by default | ❌ Non-clustered      |
| Purpose         | Unique identifier     | Ensure uniqueness     |

### 4. **INNER JOIN vs OUTER JOIN?**

- **INNER JOIN**: Only matching rows
- **LEFT OUTER JOIN**: All from left + matching from right
- **RIGHT OUTER JOIN**: All from right + matching from left
- **FULL OUTER JOIN**: All from both (NULLs where no match)

### 5. **What are Indexes? Types?**

**Purpose:** Speed up data retrieval (like book index)

**Types:**

- **Clustered**: Determines physical order (1 per table)
- **Non-Clustered**: Separate structure with pointers (many per table)
- **Unique**: Ensures uniqueness
- **Composite**: Multiple columns
- **Full-Text**: For text search

**Trade-off:** Faster SELECT, slower INSERT/UPDATE/DELETE

### 6. **Normalization vs Denormalization?**

| Aspect   | Normalization        | Denormalization            |
| -------- | -------------------- | -------------------------- |
| Purpose  | Eliminate redundancy | Improve read performance   |
| Joins    | More joins needed    | Fewer joins                |
| Storage  | Less storage         | More storage               |
| Updates  | Easier, consistent   | Risk of inconsistency      |
| Use Case | OLTP (transactions)  | OLAP (analytics/reporting) |

### 7. **What is a View?**

Virtual table based on SQL query result.

```sql
CREATE VIEW active_employees AS
SELECT id, name, email FROM employees WHERE status = 'Active';

-- Use like a table
SELECT * FROM active_employees;

-- Materialized View (PostgreSQL) - stores results
CREATE MATERIALIZED VIEW monthly_sales AS
SELECT DATE_TRUNC('month', date) as month, SUM(amount) as total
FROM sales
GROUP BY DATE_TRUNC('month', date);

REFRESH MATERIALIZED VIEW monthly_sales;
```

### 8. **Stored Procedure vs Function?**

| Feature             | Stored Procedure          | Function          |
| ------------------- | ------------------------- | ----------------- |
| Return value        | Optional (via OUT params) | Must return value |
| Call in SELECT      | ❌ No                     | ✅ Yes            |
| DML operations      | ✅ Yes                    | ❌ Limited        |
| Transaction control | ✅ Yes                    | ❌ No             |
| Purpose             | Business logic            | Calculations      |

### 9. **Trigger Types?**

- **BEFORE**: Execute before INSERT/UPDATE/DELETE
- **AFTER**: Execute after operation
- **INSTEAD OF**: Replace operation (for views)

```sql
CREATE TRIGGER update_modified_date
BEFORE UPDATE ON employees
FOR EACH ROW
SET NEW.modified_date = NOW();
```

### 10. **CAP Theorem (Distributed Databases)**

Can only achieve 2 of 3:

- **C**onsistency: All nodes see same data
- **A**vailability: System always responds
- **P**artition Tolerance: Works despite network issues

---

## Query Execution Order

```
1. FROM (including JOINs)
2. WHERE
3. GROUP BY
4. HAVING
5. SELECT
6. DISTINCT
7. ORDER BY
8. LIMIT/OFFSET
```

**Why this matters:**

- Can't use SELECT aliases in WHERE
- CAN use aliases in HAVING/ORDER BY
- WHERE filters before aggregation
- HAVING filters after aggregation

```sql
SELECT department, AVG(salary) as avg_sal  -- 5. Executed
FROM employees                              -- 1. Start here
WHERE status = 'Active'                     -- 2. Filter rows
GROUP BY department                         -- 3. Group
HAVING AVG(salary) > 50000                  -- 4. Filter groups
ORDER BY avg_sal DESC                       -- 6. Sort (can use alias!)
LIMIT 10;                                   -- 7. Limit results
```

---

## Database-Specific Syntax

| Feature            | MySQL              | PostgreSQL           | SQL Server         | Oracle                  |
| ------------------ | ------------------ | -------------------- | ------------------ | ----------------------- |
| **Auto-increment** | `AUTO_INCREMENT`   | `SERIAL`             | `IDENTITY(1,1)`    | `GENERATED AS IDENTITY` |
| **Limit rows**     | `LIMIT n`          | `LIMIT n`            | `TOP n`            | `FETCH FIRST n ROWS`    |
| **String concat**  | `CONCAT()`         | `\|\|`               | `+`                | `\|\|`                  |
| **Current date**   | `NOW()`            | `CURRENT_DATE`       | `GETDATE()`        | `SYSDATE`               |
| **If null**        | `IFNULL(col, val)` | `COALESCE(col, val)` | `ISNULL(col, val)` | `NVL(col, val)`         |
| **Upsert**         | `ON DUPLICATE KEY` | `ON CONFLICT`        | `MERGE`            | `MERGE`                 |

---

## Performance Optimization Tips

### ✅ DO

1. **Use indexes on frequently queried columns**

   ```sql
   CREATE INDEX idx_email ON users(email);
   ```

2. **Select only needed columns**

   ```sql
   SELECT id, name FROM employees;  -- Good
   SELECT * FROM employees;          -- Bad
   ```

3. **Use EXISTS instead of IN for subqueries**

   ```sql
   WHERE EXISTS (SELECT 1 FROM ...) -- Faster
   WHERE id IN (SELECT id FROM ...) -- Slower for large sets
   ```

4. **Filter early with WHERE, not HAVING**

   ```sql
   WHERE status = 'Active'   -- Good: filter before grouping
   HAVING status = 'Active'  -- Bad: filter after grouping
   ```

5. **Avoid functions on indexed columns in WHERE**

   ```sql
   WHERE hire_date >= '2020-01-01'           -- Good: uses index
   WHERE YEAR(hire_date) = 2020              -- Bad: can't use index
   ```

6. **Use UNION ALL instead of UNION if duplicates are OK**

   ```sql
   SELECT name FROM table1 UNION ALL SELECT name FROM table2;  -- Faster
   ```

7. **Use LIMIT for large result sets**
   ```sql
   SELECT * FROM employees ORDER BY id LIMIT 100;
   ```

### ❌ DON'T

1. ❌ Don't use `SELECT *` in production
2. ❌ Don't forget WHERE in UPDATE/DELETE
3. ❌ Don't over-index (slows INSERT/UPDATE)
4. ❌ Don't use correlated subqueries if JOIN possible
5. ❌ Don't nest views more than 2-3 levels
6. ❌ Don't fetch data you don't need

---

## NULL Handling

```sql
-- Check for NULL
WHERE column IS NULL
WHERE column IS NOT NULL

-- COALESCE: Return first non-null
SELECT COALESCE(phone, mobile, email, 'No contact') as contact
FROM users;

-- NULLIF: Return NULL if equal
SELECT NULLIF(discount_price, price) as discount  -- NULL if no discount
FROM products;

-- NULL in calculations
SELECT salary + bonus as total;              -- NULL if bonus is NULL
SELECT salary + COALESCE(bonus, 0) as total; -- Treats NULL as 0

-- NULL in aggregates (ignored except COUNT(*))
SELECT AVG(bonus) FROM employees;  -- Averages only non-NULL values
```

---

## Index vs Full Table Scan

### When Index is Used

✅ Equality: `WHERE id = 5`  
✅ Range: `WHERE salary BETWEEN 40000 AND 60000`  
✅ LIKE prefix: `WHERE name LIKE 'John%'`  
✅ IN list: `WHERE id IN (1, 2, 3)`

### When Index is NOT Used

❌ Function on column: `WHERE UPPER(name) = 'JOHN'`  
❌ LIKE with leading wildcard: `WHERE name LIKE '%john'`  
❌ OR with non-indexed column: `WHERE indexed_col = 5 OR non_indexed_col = 10`  
❌ Inequality on low selectivity: `WHERE status != 'Active'` (if most are active)

---

## EXPLAIN/ANALYZE

```sql
-- PostgreSQL
EXPLAIN ANALYZE SELECT * FROM employees WHERE salary > 50000;

-- MySQL
EXPLAIN SELECT * FROM employees WHERE salary > 50000;

-- SQL Server
SET STATISTICS TIME ON;
SET STATISTICS IO ON;
```

**Look for:**

- Index usage vs Full Table Scan
- Number of rows scanned
- Join types
- Execution time

---

## Quick SQL Patterns

### Find Duplicates

```sql
SELECT email, COUNT(*) as count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

### Delete Duplicates (Keep One)

```sql
DELETE FROM users
WHERE id NOT IN (
    SELECT MIN(id)
    FROM users
    GROUP BY email
);
```

### Nth Highest Salary

```sql
-- Using LIMIT
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;  -- 3rd highest

-- Using Subquery
SELECT MAX(salary)
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);  -- 2nd highest
```

### Rank Dense (No gaps)

```sql
SELECT name, salary,
       DENSE_RANK() OVER (ORDER BY salary DESC) as rank
FROM employees;
```

### Find Gaps in Sequence

```sql
SELECT id + 1 as gap_start
FROM employees e1
WHERE NOT EXISTS (SELECT 1 FROM employees e2 WHERE e2.id = e1.id + 1)
AND id < (SELECT MAX(id) FROM employees);
```

### Running Total

```sql
SELECT date, amount,
       SUM(amount) OVER (ORDER BY date) as running_total
FROM transactions;
```

### Top N per Group

```sql
WITH ranked AS (
    SELECT name, department, salary,
           ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as rn
    FROM employees
)
SELECT * FROM ranked WHERE rn <= 3;
```

---

## Constraints Cheat Sheet

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18),
    status VARCHAR(20) DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT unique_email UNIQUE (email),
    CONSTRAINT chk_age_range CHECK (age BETWEEN 18 AND 100)
);
```

---

## Common SQL Errors & Solutions

### 1. Division by Zero

```sql
-- Bad
SELECT amount / quantity FROM orders;

-- Good
SELECT amount / NULLIF(quantity, 0) FROM orders;
```

### 2. NULL in Calculations

```sql
-- Bad: Returns NULL if bonus is NULL
SELECT salary + bonus as total FROM employees;

-- Good
SELECT salary + COALESCE(bonus, 0) as total FROM employees;
```

### 3. Ambiguous Column

```sql
-- Bad
SELECT id, name FROM employees e JOIN departments d ON e.dept_id = d.id;

-- Good
SELECT e.id, e.name, d.name as dept_name
FROM employees e JOIN departments d ON e.dept_id = d.id;
```

### 4. Forgetting WHERE in UPDATE/DELETE

```sql
-- DANGEROUS: Updates ALL rows
UPDATE employees SET salary = 100000;

-- Safe
UPDATE employees SET salary = 100000 WHERE id = 101;
```

---

## SQL Injection Prevention

### ❌ VULNERABLE

```sql
-- Never concatenate user input!
query = "SELECT * FROM users WHERE username = '" + userInput + "'";
```

### ✅ SAFE

```python
# Python - Use parameterized query
cursor.execute("SELECT * FROM users WHERE username = ?", (userInput,))

# Java - PreparedStatement
PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE username = ?");
stmt.setString(1, userInput);

# PHP - PDO
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
$stmt->execute(['username' => $userInput]);
```

---

## Database Design Principles

### ✅ Best Practices

1. **Use meaningful names**: `customer_id` not `cid`
2. **Consistent naming**: `created_at`, `updated_at` (not `creation_date`, `modify_date`)
3. **Normalize to 3NF** (usually)
4. **Index foreign keys**
5. **Use constraints** (enforce data integrity at DB level)
6. **Avoid NULL when possible** (use defaults)
7. **Choose appropriate data types** (INT not VARCHAR for numbers)
8. **Document your schema**

### Common Patterns

**Soft Delete:**

```sql
-- Don't delete, mark as deleted
ALTER TABLE users ADD COLUMN deleted_at TIMESTAMP NULL;
UPDATE users SET deleted_at = NOW() WHERE id = 101;
SELECT * FROM users WHERE deleted_at IS NULL;  -- Active users
```

**Audit Trail:**

```sql
CREATE TABLE audit_log (
    id INT PRIMARY KEY AUTO_INCREMENT,
    table_name VARCHAR(50),
    action VARCHAR(10),  -- INSERT, UPDATE, DELETE
    record_id INT,
    old_value TEXT,
    new_value TEXT,
    user_id INT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Many-to-Many Relationship:**

```sql
CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(100));
CREATE TABLE courses (id INT PRIMARY KEY, name VARCHAR(100));

-- Junction/Bridge table
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);
```

---

## Quick Formulas

```
Sum of n numbers: n × (n + 1) / 2
Sum of squares: n × (n + 1) × (2n + 1) / 6
Cartesian product: rows(A) × rows(B)
Index size estimate: rows × key_size × 1.2
```

---

## Time Complexity of Operations

| Operation           | Heap Table | B-Tree Index | Hash Index |
| ------------------- | ---------- | ------------ | ---------- |
| SELECT (no index)   | O(n)       | -            | -          |
| SELECT (with index) | O(1)       | O(log n)     | O(1)       |
| INSERT              | O(1)       | O(log n)     | O(1)       |
| UPDATE (no index)   | O(n)       | -            | -          |
| UPDATE (with index) | O(log n)   | O(log n)     | O(1)       |
| DELETE (no index)   | O(n)       | -            | -          |
| DELETE (with index) | O(log n)   | O(log n)     | O(1)       |

---

## Important SQL Keywords

### Filtering & Sorting

```sql
WHERE, AND, OR, NOT, IN, BETWEEN, LIKE, IS NULL, IS NOT NULL
ORDER BY ASC/DESC, LIMIT, OFFSET, FETCH FIRST
```

### Aggregation

```sql
GROUP BY, HAVING, COUNT, SUM, AVG, MIN, MAX
```

### Joins

```sql
INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, SELF JOIN
```

### Set Operations

```sql
UNION, UNION ALL, INTERSECT, EXCEPT (or MINUS)
```

### Advanced

```sql
CASE WHEN, WITH (CTE), PARTITION BY, OVER, RANK, ROW_NUMBER
```

---

## Quick Reference: Common Queries

### Get Table Structure

```sql
-- MySQL
DESCRIBE table_name;
SHOW CREATE TABLE table_name;

-- PostgreSQL
\d table_name
SELECT column_name, data_type FROM information_schema.columns
WHERE table_name = 'table_name';

-- SQL Server
sp_help table_name;
```

### Copy Table

```sql
-- Structure + Data
CREATE TABLE new_table AS SELECT * FROM old_table;

-- Structure only
CREATE TABLE new_table AS SELECT * FROM old_table WHERE 1=0;
```

### Add Column with Default

```sql
ALTER TABLE users ADD COLUMN status VARCHAR(20) DEFAULT 'Active';
```

### Rename Table/Column

```sql
-- Rename table
ALTER TABLE old_name RENAME TO new_name;

-- Rename column
ALTER TABLE users RENAME COLUMN old_col TO new_col;
```

---

## Monitoring & Maintenance

```sql
-- Show running queries (PostgreSQL)
SELECT * FROM pg_stat_activity;

-- Show table sizes
SELECT table_name, pg_size_pretty(pg_total_relation_size(table_name))
FROM information_schema.tables;

-- Analyze table
ANALYZE TABLE employees;

-- Optimize table (MySQL)
OPTIMIZE TABLE employees;

-- Vacuum (PostgreSQL)
VACUUM ANALYZE employees;

-- Update statistics
ANALYZE employees;
```

---

## Quick Tips for Interviews

### Before Writing Query:

1. ✅ Understand the question completely
2. ✅ Identify tables needed
3. ✅ Determine join conditions
4. ✅ Think about edge cases (NULLs, duplicates)
5. ✅ Consider performance (indexes, joins vs subqueries)

### Common Mistakes to Avoid:

- ❌ Using `= NULL` instead of `IS NULL`
- ❌ Forgetting WHERE in UPDATE/DELETE
- ❌ Not handling NULL in calculations
- ❌ Using SELECT aliases in WHERE clause
- ❌ Confusing HAVING with WHERE
- ❌ Not considering query performance

### Interview Checklist:

- [ ] Know all join types and when to use each
- [ ] Understand normalization (at least up to 3NF)
- [ ] Know difference between DELETE, TRUNCATE, DROP
- [ ] Understand indexes and when to use them
- [ ] Can write window functions
- [ ] Know ACID properties
- [ ] Understand transaction isolation levels
- [ ] Can optimize slow queries
- [ ] Know difference between clustered and non-clustered indexes
- [ ] Understand stored procedures and triggers

---

## Sample Interview Scenarios

### Scenario 1: Find Second Highest Salary

```sql
-- Method 1: Subquery
SELECT MAX(salary) FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- Method 2: LIMIT
SELECT DISTINCT salary FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;

-- Method 3: Window function
WITH ranked AS (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank
    FROM employees
)
SELECT salary FROM ranked WHERE rank = 2;
```

### Scenario 2: Find Duplicate Records

```sql
SELECT email, COUNT(*) as count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

### Scenario 3: Department with Highest Average Salary

```sql
SELECT department, AVG(salary) as avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC
LIMIT 1;
```

### Scenario 4: Employees Earning More Than Their Department Average

```sql
SELECT e.name, e.salary, e.department
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department = e.department
);

-- Or using window function
WITH dept_avg AS (
    SELECT name, salary, department,
           AVG(salary) OVER (PARTITION BY department) as avg_dept_salary
    FROM employees
)
SELECT * FROM dept_avg WHERE salary > avg_dept_salary;
```

### Scenario 5: Find Employees Without Any Projects

```sql
-- Method 1: LEFT JOIN + NULL check
SELECT e.name
FROM employees e
LEFT JOIN projects p ON e.id = p.employee_id
WHERE p.employee_id IS NULL;

-- Method 2: NOT EXISTS
SELECT e.name
FROM employees e
WHERE NOT EXISTS (
    SELECT 1 FROM projects p WHERE p.employee_id = e.id
);

-- Method 3: NOT IN (careful with NULLs!)
SELECT name FROM employees
WHERE id NOT IN (SELECT employee_id FROM projects WHERE employee_id IS NOT NULL);
```

---

## Final Tips

### For Interviews:

- 📝 **Always clarify requirements** before writing query
- 🎯 **Think out loud** - explain your approach
- ⚡ **Start with brute force**, then optimize
- 📊 **Discuss trade-offs** (time vs space, simplicity vs performance)
- ✅ **Test with examples** (walk through your query)
- 🔍 **Consider edge cases** (empty tables, NULLs, duplicates)

### For Production:

- 🔒 **Use parameterized queries** (prevent SQL injection)
- 📈 **Monitor query performance** (slow query log)
- 🎯 **Index strategically** (not too many, not too few)
- 💾 **Regular backups**
- 🔧 **Maintain statistics** (ANALYZE regularly)
- 📊 **Use EXPLAIN** to understand query plans

---

**Good luck with your interviews! 🎯**

_For detailed examples, see:_

- [SQL Commands Guide](commands.md) - Comprehensive examples
- [DBMS Q&A](q&a.md) - Interview questions and answers
