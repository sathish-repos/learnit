# SQL Commands - Complete Guide (Beginner to Advanced)

## Table of Contents

1. [Introduction](#introduction)
2. [Beginner Level](#beginner-level)
   - [SELECT Statement](#select-statement)
   - [WHERE Clause](#where-clause)
   - [INSERT Statement](#insert-statement)
   - [UPDATE Statement](#update-statement)
   - [DELETE Statement](#delete-statement)
   - [UPSERT (INSERT or UPDATE)](#upsert-insert-or-update)
   - [ORDER BY](#order-by)
   - [LIMIT / FETCH FIRST](#limit--fetch-first)
   - [DISTINCT](#distinct)
   - [NULL Handling](#null-handling)
3. [Intermediate Level](#intermediate-level)
   - [Aggregate Functions](#aggregate-functions)
   - [GROUP BY](#group-by)
   - [HAVING Clause](#having-clause)
   - [JOINs](#joins)
   - [UNION](#union)
   - [Subqueries](#subqueries)
   - [CASE Statement](#case-statement)
   - [String Functions](#string-functions)
   - [Date Functions](#date-functions)
4. [Advanced Level](#advanced-level)
   - [Window Functions](#window-functions)
   - [Common Table Expressions (CTEs)](#common-table-expressions-ctes)
   - [Recursive CTEs](#recursive-ctes)
   - [Views](#views)
   - [Indexes](#indexes)
   - [Transactions](#transactions)
   - [Stored Procedures](#stored-procedures)
   - [Triggers](#triggers)
   - [Pivot and Unpivot](#pivot-and-unpivot)
   - [Advanced Joins](#advanced-joins)
   - [Query Optimization](#query-optimization)
5. [Additional Advanced Topics](#additional-advanced-topics)
   - [Table Creation and Constraints](#table-creation-and-constraints)
   - [Sequences and Identity Columns](#sequences-and-identity-columns)
   - [Temporary Tables](#temporary-tables)
   - [Variables and Dynamic SQL](#variables-and-dynamic-sql)
   - [JSON Operations](#json-operations)
   - [Database Security and Permissions](#database-security-and-permissions)
   - [SQL Query Execution Order](#sql-query-execution-order)

---

## Introduction

SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. This guide covers SQL commands from basic to advanced concepts with practical examples.

---

## Beginner Level

### SELECT Statement

The `SELECT` statement retrieves data from a database.

**Basic Syntax:**

```sql
SELECT column1, column2, ...
FROM table_name;
```

**Examples:**

```sql
-- Select all columns from a table
SELECT * FROM employees;

-- Select specific columns
SELECT first_name, last_name, salary
FROM employees;

-- Select with column aliases
SELECT first_name AS "First Name",
       last_name AS "Last Name",
       salary * 12 AS "Annual Salary"
FROM employees;
```

**Explanation:** The asterisk (\*) selects all columns. You can specify column names for specific data. Use `AS` to give columns meaningful names in the output.

---

### WHERE Clause

The `WHERE` clause filters records based on conditions.

**Syntax:**

```sql
SELECT column1, column2
FROM table_name
WHERE condition;
```

**Examples:**

```sql
-- Basic comparison
SELECT * FROM employees
WHERE salary > 50000;

-- Multiple conditions with AND
SELECT * FROM employees
WHERE salary > 50000 AND department = 'IT';

-- Multiple conditions with OR
SELECT * FROM employees
WHERE department = 'IT' OR department = 'Sales';

-- Using IN operator
SELECT * FROM employees
WHERE department IN ('IT', 'Sales', 'Marketing');

-- Using BETWEEN operator
SELECT * FROM employees
WHERE salary BETWEEN 40000 AND 60000;

-- Using LIKE for pattern matching
SELECT * FROM employees
WHERE first_name LIKE 'J%';  -- Starts with 'J'

SELECT * FROM employees
WHERE email LIKE '%@gmail.com';  -- Ends with '@gmail.com'

-- Using IS NULL / IS NOT NULL
SELECT * FROM employees
WHERE manager_id IS NULL;

SELECT * FROM employees
WHERE phone_number IS NOT NULL;
```

**Explanation:**

- `AND` requires all conditions to be true
- `OR` requires at least one condition to be true
- `IN` checks if a value matches any value in a list
- `BETWEEN` checks if a value is within a range (inclusive)
- `LIKE` uses wildcards: `%` (any characters), `_` (single character)
- `IS NULL` checks for NULL values (cannot use `= NULL`)

---

### INSERT Statement

The `INSERT` statement adds new records to a table.

**Syntax:**

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

**Examples:**

```sql
-- Insert a single row
INSERT INTO employees (employee_id, first_name, last_name, email, salary, department)
VALUES (101, 'John', 'Doe', 'john.doe@company.com', 55000, 'IT');

-- Insert multiple rows
INSERT INTO employees (employee_id, first_name, last_name, salary, department)
VALUES
    (102, 'Jane', 'Smith', 60000, 'Sales'),
    (103, 'Mike', 'Johnson', 58000, 'IT'),
    (104, 'Sarah', 'Williams', 62000, 'Marketing');

-- Insert from another table
INSERT INTO employees_backup
SELECT * FROM employees
WHERE hire_date < '2020-01-01';
```

**Explanation:** You specify the table name, columns to insert into, and corresponding values. You can insert multiple rows at once or insert data from another query.

---

### UPDATE Statement

The `UPDATE` statement modifies existing records.

**Syntax:**

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

**Examples:**

```sql
-- Update a single column
UPDATE employees
SET salary = 60000
WHERE employee_id = 101;

-- Update multiple columns
UPDATE employees
SET salary = 65000,
    department = 'Senior IT'
WHERE employee_id = 101;

-- Update with calculation
UPDATE employees
SET salary = salary * 1.10
WHERE department = 'Sales';

-- Update based on another table
UPDATE employees e
SET salary = (SELECT AVG(salary) FROM employees WHERE department = e.department)
WHERE performance_rating = 'Excellent';
```

**Explanation:** Always use a `WHERE` clause unless you want to update all rows. The `SET` clause specifies what to change.

⚠️ **Warning:** Without a `WHERE` clause, ALL rows will be updated!

---

### DELETE Statement

The `DELETE` statement removes records from a table.

**Syntax:**

```sql
DELETE FROM table_name
WHERE condition;
```

**Examples:**

```sql
-- Delete specific rows
DELETE FROM employees
WHERE employee_id = 101;

-- Delete based on condition
DELETE FROM employees
WHERE hire_date < '2015-01-01';

-- Delete all rows (use with caution!)
DELETE FROM temp_employees;

-- Delete with subquery
DELETE FROM employees
WHERE department_id IN (
    SELECT department_id
    FROM departments
    WHERE location = 'Closed Office'
);
```

**Explanation:** The `WHERE` clause determines which rows to delete.

⚠️ **Warning:** Without a `WHERE` clause, ALL rows will be deleted!

---

### UPSERT (INSERT or UPDATE)

UPSERT operations insert a new row or update if it already exists.

**Examples:**

```sql
-- PostgreSQL - INSERT ... ON CONFLICT
INSERT INTO employees (employee_id, first_name, last_name, salary)
VALUES (101, 'John', 'Doe', 55000)
ON CONFLICT (employee_id)
DO UPDATE SET
    first_name = EXCLUDED.first_name,
    last_name = EXCLUDED.last_name,
    salary = EXCLUDED.salary;

-- MySQL - INSERT ... ON DUPLICATE KEY UPDATE
INSERT INTO employees (employee_id, first_name, last_name, salary)
VALUES (101, 'John', 'Doe', 55000)
ON DUPLICATE KEY UPDATE
    first_name = VALUES(first_name),
    salary = VALUES(salary);

-- MySQL - REPLACE (deletes then inserts)
REPLACE INTO employees (employee_id, first_name, last_name, salary)
VALUES (101, 'John', 'Doe', 55000);

-- SQL Server - MERGE statement
MERGE INTO employees AS target
USING (SELECT 101 AS employee_id, 'John' AS first_name, 'Doe' AS last_name, 55000 AS salary) AS source
ON target.employee_id = source.employee_id
WHEN MATCHED THEN
    UPDATE SET
        first_name = source.first_name,
        salary = source.salary
WHEN NOT MATCHED THEN
    INSERT (employee_id, first_name, last_name, salary)
    VALUES (source.employee_id, source.first_name, source.last_name, source.salary);

-- MERGE with DELETE
MERGE INTO inventory AS target
USING updates AS source
ON target.product_id = source.product_id
WHEN MATCHED AND source.quantity = 0 THEN DELETE
WHEN MATCHED THEN UPDATE SET quantity = source.quantity
WHEN NOT MATCHED THEN INSERT VALUES (source.product_id, source.quantity);
```

**Explanation:** UPSERT prevents duplicate key errors and simplifies insert-or-update logic. Each database system has different syntax.

---

### ORDER BY

The `ORDER BY` clause sorts the result set.

**Syntax:**

```sql
SELECT column1, column2
FROM table_name
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC];
```

**Examples:**

```sql
-- Sort ascending (default)
SELECT * FROM employees
ORDER BY salary;

-- Sort descending
SELECT * FROM employees
ORDER BY salary DESC;

-- Sort by multiple columns
SELECT * FROM employees
ORDER BY department ASC, salary DESC;

-- Sort by column position
SELECT first_name, last_name, salary
FROM employees
ORDER BY 3 DESC;  -- Sort by 3rd column (salary)

-- Sort with expression
SELECT first_name, last_name, salary
FROM employees
ORDER BY LENGTH(first_name);
```

**Explanation:** `ASC` is ascending (default), `DESC` is descending. When sorting by multiple columns, it sorts by the first column, then by the second for ties, etc.

---

### LIMIT / FETCH FIRST

The `LIMIT` clause restricts the number of rows returned.

**Syntax:**

```sql
-- LIMIT (MySQL, PostgreSQL)
SELECT column1, column2
FROM table_name
LIMIT number;

-- FETCH FIRST (ANSI SQL standard - PostgreSQL, Oracle, SQL Server 2012+)
SELECT column1, column2
FROM table_name
FETCH FIRST number ROWS ONLY;

-- With offset
SELECT column1, column2
FROM table_name
LIMIT number OFFSET offset_value;

-- FETCH with OFFSET (ANSI SQL)
SELECT column1, column2
FROM table_name
OFFSET offset_value ROWS
FETCH NEXT number ROWS ONLY;
```

**Examples:**

```sql
-- Get first 10 employees (LIMIT)
SELECT * FROM employees
LIMIT 10;

-- Get first 10 employees (FETCH FIRST - ANSI standard)
SELECT * FROM employees
FETCH FIRST 10 ROWS ONLY;

-- Get top 5 highest paid employees
SELECT * FROM employees
ORDER BY salary DESC
LIMIT 5;

-- Pagination: Skip first 10, get next 10 (LIMIT)
SELECT * FROM employees
ORDER BY employee_id
LIMIT 10 OFFSET 10;

-- Pagination with FETCH FIRST (more portable)
SELECT * FROM employees
ORDER BY employee_id
OFFSET 10 ROWS
FETCH NEXT 10 ROWS ONLY;

-- Alternative pagination syntax (MySQL)
SELECT * FROM employees
ORDER BY employee_id
LIMIT 10, 10;  -- LIMIT offset, count

-- SQL Server TOP
SELECT TOP 10 * FROM employees;

-- SQL Server TOP with PERCENT
SELECT TOP 10 PERCENT * FROM employees ORDER BY salary DESC;

-- FETCH with ties (include rows with same value as last row)
SELECT * FROM employees
ORDER BY salary DESC
FETCH FIRST 5 ROWS WITH TIES;
```

**Explanation:**

- `LIMIT` is common in MySQL and PostgreSQL
- `FETCH FIRST` is the ANSI SQL standard (more portable)
- SQL Server uses `TOP` or `OFFSET...FETCH`
- Oracle uses `ROWNUM` or `FETCH FIRST`

---

### DISTINCT

The `DISTINCT` keyword removes duplicate rows from results.

**Syntax:**

```sql
SELECT DISTINCT column1, column2
FROM table_name;
```

**Examples:**

```sql
-- Get unique departments
SELECT DISTINCT department
FROM employees;

-- Get unique combinations
SELECT DISTINCT department, job_title
FROM employees;

-- Count unique values
SELECT COUNT(DISTINCT department) AS unique_departments
FROM employees;
```

**Explanation:** `DISTINCT` operates on the entire row. If you select multiple columns, it returns unique combinations of those columns.

---

### NULL Handling

Working with NULL values requires special functions and operators.

**Examples:**

```sql
-- Check for NULL
SELECT * FROM employees WHERE manager_id IS NULL;
SELECT * FROM employees WHERE bonus IS NOT NULL;

-- COALESCE: Return first non-null value
SELECT first_name,
       COALESCE(phone, mobile, email, 'No contact') AS contact_info
FROM employees;

-- COALESCE with multiple columns
SELECT employee_id,
       COALESCE(commission, 0) AS commission,
       salary + COALESCE(commission, 0) AS total_compensation
FROM employees;

-- NULLIF: Return NULL if two values are equal
SELECT product_name,
       price,
       NULLIF(discount_price, price) AS discount  -- Returns NULL if no discount
FROM products;

-- Avoid division by zero
SELECT order_id,
       total_amount,
       total_amount / NULLIF(quantity, 0) AS price_per_unit
FROM orders;

-- IFNULL / ISNULL (MySQL / SQL Server)
SELECT first_name, IFNULL(bonus, 0) AS bonus FROM employees;  -- MySQL
SELECT first_name, ISNULL(bonus, 0) AS bonus FROM employees;  -- SQL Server

-- NVL (Oracle)
SELECT first_name, NVL(bonus, 0) AS bonus FROM employees;

-- NULL in comparisons (results in NULL, not TRUE or FALSE)
SELECT * FROM employees WHERE salary > NULL;  -- Returns no rows
SELECT * FROM employees WHERE salary = NULL;  -- Wrong! Use IS NULL

-- NULL in calculations
SELECT
    salary,
    bonus,
    salary + bonus AS wrong_total,           -- NULL if bonus is NULL
    salary + COALESCE(bonus, 0) AS correct_total  -- Treats NULL as 0
FROM employees;

-- NULL in aggregates (ignored by aggregate functions)
SELECT
    COUNT(*) AS total_rows,
    COUNT(manager_id) AS employees_with_manager,  -- Excludes NULLs
    AVG(commission) AS avg_commission  -- Calculates average of non-NULL values only
FROM employees;

-- NULL-safe equality operator (MySQL)
SELECT * FROM employees WHERE bonus <=> NULL;  -- Same as IS NULL

-- CASE with NULL handling
SELECT first_name,
       CASE
           WHEN bonus IS NULL THEN 'No Bonus'
           WHEN bonus = 0 THEN 'Zero Bonus'
           ELSE CONCAT('$', bonus)
       END AS bonus_status
FROM employees;
```

**Important NULL Rules:**

- NULL is not equal to anything, including NULL
- NULL in any arithmetic operation results in NULL
- Use `IS NULL` or `IS NOT NULL`, never `= NULL`
- Aggregate functions ignore NULL values (except `COUNT(*)`)
- `COALESCE` is standard SQL and preferred over database-specific functions

---

## Intermediate Level

### Aggregate Functions

Aggregate functions perform calculations on multiple rows and return a single value.

**Common Functions:**

- `COUNT()` - Counts rows
- `SUM()` - Sums values
- `AVG()` - Calculates average
- `MIN()` - Finds minimum
- `MAX()` - Finds maximum

**Examples:**

```sql
-- Count all employees
SELECT COUNT(*) AS total_employees
FROM employees;

-- Count non-null values
SELECT COUNT(manager_id) AS employees_with_managers
FROM employees;

-- Sum of salaries
SELECT SUM(salary) AS total_payroll
FROM employees;

-- Average salary
SELECT AVG(salary) AS average_salary
FROM employees;

-- Min and Max salary
SELECT
    MIN(salary) AS lowest_salary,
    MAX(salary) AS highest_salary
FROM employees;

-- Multiple aggregates
SELECT
    COUNT(*) AS total_employees,
    AVG(salary) AS avg_salary,
    MIN(salary) AS min_salary,
    MAX(salary) AS max_salary,
    SUM(salary) AS total_payroll
FROM employees;

-- Aggregate with condition
SELECT COUNT(*) AS high_earners
FROM employees
WHERE salary > 70000;
```

**Explanation:** Aggregate functions ignore NULL values (except `COUNT(*)`). They're often used with `GROUP BY` to calculate statistics for groups.

---

### GROUP BY

The `GROUP BY` clause groups rows with the same values into summary rows.

**Syntax:**

```sql
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1;
```

**Examples:**

```sql
-- Count employees by department
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;

-- Average salary by department
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;

-- Multiple grouping columns
SELECT department, job_title, COUNT(*) AS count
FROM employees
GROUP BY department, job_title;

-- Group by with ORDER BY
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;

-- Group by with WHERE (filters before grouping)
SELECT department, COUNT(*) AS count
FROM employees
WHERE hire_date > '2020-01-01'
GROUP BY department;
```

**Explanation:** Every column in the `SELECT` that isn't in an aggregate function must be in the `GROUP BY` clause. `WHERE` filters rows before grouping.

---

### HAVING Clause

The `HAVING` clause filters groups after aggregation (like `WHERE` but for groups).

**Syntax:**

```sql
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1
HAVING condition;
```

**Examples:**

```sql
-- Departments with more than 5 employees
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;

-- Departments with average salary > 60000
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 60000;

-- Combining WHERE and HAVING
SELECT department, AVG(salary) AS avg_salary
FROM employees
WHERE hire_date > '2018-01-01'  -- Filter rows first
GROUP BY department
HAVING AVG(salary) > 55000;      -- Filter groups after

-- Multiple HAVING conditions
SELECT department,
       COUNT(*) AS emp_count,
       AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING COUNT(*) > 3
   AND AVG(salary) > 50000;
```

**Explanation:**

- `WHERE` filters rows before grouping
- `HAVING` filters groups after aggregation
- Order: WHERE → GROUP BY → HAVING → ORDER BY

---

### JOINs

JOINs combine rows from two or more tables based on a related column.

#### INNER JOIN

Returns records with matching values in both tables.

```sql
-- Basic INNER JOIN
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id;

-- Join multiple tables
SELECT e.first_name, e.last_name, d.department_name, l.city
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id
INNER JOIN locations l ON d.location_id = l.location_id;

-- Join with WHERE clause
SELECT e.first_name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > 60000;
```

#### LEFT JOIN (LEFT OUTER JOIN)

Returns all records from the left table and matching records from the right table.

```sql
-- Get all employees and their departments (including employees without departments)
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.department_id;

-- Find employees without departments
SELECT e.first_name, e.last_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.department_id
WHERE d.department_id IS NULL;
```

#### RIGHT JOIN (RIGHT OUTER JOIN)

Returns all records from the right table and matching records from the left table.

```sql
-- Get all departments and their employees (including departments without employees)
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.department_id;

-- Find departments without employees
SELECT d.department_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.department_id
WHERE e.employee_id IS NULL;
```

#### FULL OUTER JOIN

Returns all records when there's a match in either table.

```sql
-- Get all employees and departments (including unmatched from both)
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
FULL OUTER JOIN departments d ON e.department_id = d.department_id;
```

#### CROSS JOIN

Returns the Cartesian product of both tables (all possible combinations).

```sql
-- Every employee paired with every department
SELECT e.first_name, d.department_name
FROM employees e
CROSS JOIN departments d;
```

#### SELF JOIN

A table joined with itself.

```sql
-- Find employees and their managers
SELECT e.first_name AS employee_name,
       m.first_name AS manager_name
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;
```

**Explanation:**

- **INNER JOIN**: Only matching rows from both tables
- **LEFT JOIN**: All from left table + matching from right
- **RIGHT JOIN**: All from right table + matching from left
- **FULL OUTER JOIN**: All rows from both tables
- **CROSS JOIN**: All possible combinations
- **SELF JOIN**: Table joins with itself

---

### UNION

The `UNION` operator combines result sets from multiple SELECT statements.

**Syntax:**

```sql
SELECT column1, column2 FROM table1
UNION [ALL]
SELECT column1, column2 FROM table2;
```

**Examples:**

```sql
-- Combine employees from two departments
SELECT first_name, last_name FROM employees WHERE department = 'IT'
UNION
SELECT first_name, last_name FROM employees WHERE department = 'Sales';

-- UNION removes duplicates, UNION ALL keeps them
SELECT city FROM customers
UNION ALL
SELECT city FROM suppliers;

-- Union with ORDER BY (must be at the end)
SELECT first_name, last_name, 'Employee' AS type FROM employees
UNION
SELECT first_name, last_name, 'Contractor' AS type FROM contractors
ORDER BY last_name;

-- INTERSECT (common rows)
SELECT employee_id FROM project_a
INTERSECT
SELECT employee_id FROM project_b;

-- EXCEPT/MINUS (rows in first but not in second)
SELECT employee_id FROM all_employees
EXCEPT
SELECT employee_id FROM terminated_employees;
```

**Explanation:**

- `UNION` removes duplicates, `UNION ALL` keeps all rows
- All SELECT statements must have the same number of columns
- Columns must have compatible data types
- Column names come from the first SELECT

---

### Subqueries

A subquery is a query nested inside another query.

**Examples:**

```sql
-- Subquery in WHERE clause
SELECT first_name, last_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Subquery with IN
SELECT first_name, last_name
FROM employees
WHERE department_id IN (
    SELECT department_id
    FROM departments
    WHERE location = 'New York'
);

-- Subquery in FROM clause (derived table)
SELECT dept_stats.department, dept_stats.avg_salary
FROM (
    SELECT department, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
) AS dept_stats
WHERE dept_stats.avg_salary > 60000;

-- Correlated subquery (references outer query)
SELECT e1.first_name, e1.salary, e1.department
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department = e1.department
);

-- EXISTS operator
SELECT d.department_name
FROM departments d
WHERE EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.department_id = d.department_id
    AND e.salary > 100000
);

-- NOT EXISTS
SELECT d.department_name
FROM departments d
WHERE NOT EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.department_id = d.department_id
);
```

**Explanation:**

- **Simple subquery**: Executed once, returns a value
- **Correlated subquery**: Executed for each row of outer query
- **EXISTS**: Checks if subquery returns any rows (returns TRUE/FALSE)
- Subqueries can be in SELECT, FROM, WHERE, or HAVING clauses

---

### CASE Statement

The `CASE` statement provides if-then-else logic in SQL.

**Syntax:**

```sql
-- Simple CASE
CASE expression
    WHEN value1 THEN result1
    WHEN value2 THEN result2
    ELSE default_result
END

-- Searched CASE
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ELSE default_result
END
```

**Examples:**

```sql
-- Simple CASE
SELECT first_name, last_name,
       CASE department
           WHEN 'IT' THEN 'Technology'
           WHEN 'HR' THEN 'Human Resources'
           WHEN 'Sales' THEN 'Revenue'
           ELSE 'Other'
       END AS department_category
FROM employees;

-- Searched CASE (more flexible)
SELECT first_name, last_name, salary,
       CASE
           WHEN salary < 40000 THEN 'Low'
           WHEN salary BETWEEN 40000 AND 70000 THEN 'Medium'
           WHEN salary > 70000 THEN 'High'
           ELSE 'Unknown'
       END AS salary_grade
FROM employees;

-- CASE in ORDER BY
SELECT first_name, last_name, department
FROM employees
ORDER BY CASE department
    WHEN 'Executive' THEN 1
    WHEN 'Management' THEN 2
    WHEN 'IT' THEN 3
    ELSE 4
END;

-- CASE with aggregate functions
SELECT department,
       COUNT(*) AS total_employees,
       SUM(CASE WHEN salary > 60000 THEN 1 ELSE 0 END) AS high_earners,
       SUM(CASE WHEN salary <= 60000 THEN 1 ELSE 0 END) AS regular_earners
FROM employees
GROUP BY department;

-- Conditional UPDATE
UPDATE employees
SET salary = CASE
    WHEN performance_rating = 'Excellent' THEN salary * 1.15
    WHEN performance_rating = 'Good' THEN salary * 1.10
    WHEN performance_rating = 'Average' THEN salary * 1.05
    ELSE salary
END;
```

**Explanation:** `CASE` allows conditional logic in queries. Use simple CASE for exact matches, searched CASE for complex conditions.

---

### String Functions

SQL provides various functions for manipulating strings.

**Examples:**

```sql
-- CONCAT: Concatenate strings
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM employees;

-- Alternative concatenation (SQL Server)
SELECT first_name + ' ' + last_name AS full_name
FROM employees;

-- UPPER and LOWER: Change case
SELECT UPPER(first_name) AS upper_name,
       LOWER(last_name) AS lower_name
FROM employees;

-- LENGTH/LEN: Get string length
SELECT first_name, LENGTH(first_name) AS name_length
FROM employees;

-- SUBSTRING: Extract part of string
SELECT email,
       SUBSTRING(email, 1, POSITION('@' IN email) - 1) AS username
FROM employees;

-- LEFT and RIGHT: Extract from start or end
SELECT first_name,
       LEFT(first_name, 3) AS first_three,
       RIGHT(first_name, 3) AS last_three
FROM employees;

-- TRIM: Remove leading/trailing spaces
SELECT TRIM('  hello  ') AS trimmed;
SELECT LTRIM('  hello') AS left_trimmed;
SELECT RTRIM('hello  ') AS right_trimmed;

-- REPLACE: Replace substring
SELECT phone_number,
       REPLACE(phone_number, '-', '') AS cleaned_phone
FROM employees;

-- POSITION/CHARINDEX: Find substring position
SELECT email,
       POSITION('@' IN email) AS at_position
FROM employees;

-- COALESCE: Return first non-null value
SELECT first_name,
       COALESCE(middle_name, '') AS middle_name,
       last_name
FROM employees;
```

**Explanation:** String functions vary slightly between database systems (MySQL, PostgreSQL, SQL Server, Oracle). Always check your specific database documentation.

---

### Date Functions

Functions for working with dates and times.

**Examples:**

```sql
-- Current date and time
SELECT CURRENT_DATE AS today;
SELECT CURRENT_TIME AS now_time;
SELECT CURRENT_TIMESTAMP AS now;
SELECT NOW(); -- MySQL

-- Extract parts of date
SELECT hire_date,
       EXTRACT(YEAR FROM hire_date) AS hire_year,
       EXTRACT(MONTH FROM hire_date) AS hire_month,
       EXTRACT(DAY FROM hire_date) AS hire_day
FROM employees;

-- Alternative (MySQL)
SELECT hire_date,
       YEAR(hire_date) AS hire_year,
       MONTH(hire_date) AS hire_month,
       DAY(hire_date) AS hire_day
FROM employees;

-- Date arithmetic
SELECT hire_date,
       hire_date + INTERVAL '1 year' AS next_year,
       hire_date - INTERVAL '30 days' AS thirty_days_ago
FROM employees;

-- MySQL date arithmetic
SELECT hire_date,
       DATE_ADD(hire_date, INTERVAL 1 YEAR) AS next_year,
       DATE_SUB(hire_date, INTERVAL 30 DAY) AS thirty_days_ago
FROM employees;

-- Calculate age/tenure
SELECT first_name,
       hire_date,
       EXTRACT(YEAR FROM AGE(CURRENT_DATE, hire_date)) AS years_employed
FROM employees;

-- Date difference
SELECT DATEDIFF(CURRENT_DATE, hire_date) AS days_employed
FROM employees;

-- Format date
SELECT hire_date,
       TO_CHAR(hire_date, 'YYYY-MM-DD') AS formatted_date,
       TO_CHAR(hire_date, 'Month DD, YYYY') AS readable_date
FROM employees;

-- MySQL date format
SELECT hire_date,
       DATE_FORMAT(hire_date, '%Y-%m-%d') AS formatted_date,
       DATE_FORMAT(hire_date, '%M %d, %Y') AS readable_date
FROM employees;
```

**Explanation:** Date functions vary significantly between database systems. The examples above show both standard SQL and MySQL-specific syntax.

---

## Advanced Level

### Window Functions

Window functions perform calculations across a set of rows related to the current row.

**Syntax:**

```sql
function_name() OVER (
    [PARTITION BY column]
    [ORDER BY column]
    [ROWS or RANGE clause]
)
```

**Examples:**

```sql
-- ROW_NUMBER: Assign unique row numbers
SELECT first_name, last_name, salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num
FROM employees;

-- RANK: Assign ranks (same values get same rank, gaps after ties)
SELECT first_name, last_name, salary,
       RANK() OVER (ORDER BY salary DESC) AS rank
FROM employees;

-- DENSE_RANK: Like RANK but no gaps
SELECT first_name, last_name, salary,
       DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank
FROM employees;

-- PARTITION BY: Group rows for window function
SELECT first_name, last_name, department, salary,
       RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank
FROM employees;

-- Running total
SELECT first_name, last_name, salary,
       SUM(salary) OVER (ORDER BY employee_id) AS running_total
FROM employees;

-- Moving average
SELECT order_date, sales_amount,
       AVG(sales_amount) OVER (
           ORDER BY order_date
           ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
       ) AS moving_avg_3day
FROM sales;

-- LAG: Access previous row
SELECT first_name, salary,
       LAG(salary, 1) OVER (ORDER BY salary) AS previous_salary,
       salary - LAG(salary, 1) OVER (ORDER BY salary) AS difference
FROM employees;

-- LEAD: Access next row
SELECT first_name, salary,
       LEAD(salary, 1) OVER (ORDER BY salary) AS next_salary
FROM employees;

-- FIRST_VALUE and LAST_VALUE
SELECT first_name, department, salary,
       FIRST_VALUE(salary) OVER (
           PARTITION BY department
           ORDER BY salary DESC
       ) AS highest_salary_in_dept,
       LAST_VALUE(salary) OVER (
           PARTITION BY department
           ORDER BY salary DESC
           ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
       ) AS lowest_salary_in_dept
FROM employees;

-- NTILE: Divide rows into n groups
SELECT first_name, salary,
       NTILE(4) OVER (ORDER BY salary DESC) AS quartile
FROM employees;

-- Percent rank
SELECT first_name, salary,
       PERCENT_RANK() OVER (ORDER BY salary) AS percent_rank,
       CUME_DIST() OVER (ORDER BY salary) AS cumulative_distribution
FROM employees;
```

**Explanation:**

- Window functions don't reduce rows (unlike GROUP BY)
- `PARTITION BY` creates separate groups
- `ORDER BY` defines the order within partitions
- Frame clauses (ROWS/RANGE) define which rows to include

**Common Window Functions:**

- `ROW_NUMBER()` - Sequential numbering
- `RANK()` - Ranking with gaps
- `DENSE_RANK()` - Ranking without gaps
- `LAG()`/`LEAD()` - Access adjacent rows
- `FIRST_VALUE()`/`LAST_VALUE()` - First/last value in frame
- `NTILE(n)` - Divide into n buckets

---

### Common Table Expressions (CTEs)

CTEs create temporary named result sets that exist only during query execution.

**Syntax:**

```sql
WITH cte_name AS (
    SELECT ...
)
SELECT * FROM cte_name;
```

**Examples:**

```sql
-- Basic CTE
WITH high_earners AS (
    SELECT first_name, last_name, salary
    FROM employees
    WHERE salary > 70000
)
SELECT * FROM high_earners
ORDER BY salary DESC;

-- Multiple CTEs
WITH
dept_avg AS (
    SELECT department, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
),
emp_with_avg AS (
    SELECT e.first_name, e.last_name, e.salary, e.department, d.avg_salary
    FROM employees e
    JOIN dept_avg d ON e.department = d.department
)
SELECT * FROM emp_with_avg
WHERE salary > avg_salary;

-- CTE with window functions
WITH ranked_employees AS (
    SELECT first_name, last_name, department, salary,
           RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank
    FROM employees
)
SELECT * FROM ranked_employees
WHERE dept_rank <= 3;

-- CTE for complex calculations
WITH monthly_sales AS (
    SELECT
        DATE_TRUNC('month', order_date) AS month,
        SUM(amount) AS total_sales
    FROM orders
    GROUP BY DATE_TRUNC('month', order_date)
),
sales_with_prev AS (
    SELECT month, total_sales,
           LAG(total_sales) OVER (ORDER BY month) AS prev_month_sales
    FROM monthly_sales
)
SELECT month, total_sales, prev_month_sales,
       ROUND(((total_sales - prev_month_sales) / prev_month_sales * 100), 2) AS growth_percentage
FROM sales_with_prev;
```

**Explanation:** CTEs improve readability, allow for easier query debugging, and can be referenced multiple times in the main query. They're similar to temporary views that exist only for the duration of the query.

---

### Recursive CTEs

Recursive CTEs reference themselves and are useful for hierarchical or tree-structured data.

**Syntax:**

```sql
WITH RECURSIVE cte_name AS (
    -- Anchor member (base case)
    SELECT ...

    UNION ALL

    -- Recursive member (references cte_name)
    SELECT ...
    FROM cte_name
    WHERE ...
)
SELECT * FROM cte_name;
```

**Examples:**

```sql
-- Employee hierarchy (organizational chart)
WITH RECURSIVE employee_hierarchy AS (
    -- Anchor: Start with top-level managers
    SELECT employee_id, first_name, last_name, manager_id, 1 AS level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive: Get employees reporting to previous level
    SELECT e.employee_id, e.first_name, e.last_name, e.manager_id, eh.level + 1
    FROM employees e
    JOIN employee_hierarchy eh ON e.manager_id = eh.employee_id
)
SELECT * FROM employee_hierarchy
ORDER BY level, employee_id;

-- Generate sequence of numbers
WITH RECURSIVE numbers AS (
    SELECT 1 AS n

    UNION ALL

    SELECT n + 1
    FROM numbers
    WHERE n < 100
)
SELECT * FROM numbers;

-- Date series generation
WITH RECURSIVE date_series AS (
    SELECT DATE '2024-01-01' AS date

    UNION ALL

    SELECT date + INTERVAL '1 day'
    FROM date_series
    WHERE date < DATE '2024-12-31'
)
SELECT * FROM date_series;

-- Calculate factorial
WITH RECURSIVE factorial AS (
    SELECT 1 AS n, 1 AS fact

    UNION ALL

    SELECT n + 1, fact * (n + 1)
    FROM factorial
    WHERE n < 10
)
SELECT n, fact FROM factorial;

-- File/folder hierarchy
WITH RECURSIVE folder_tree AS (
    SELECT folder_id, folder_name, parent_folder_id, 0 AS depth
    FROM folders
    WHERE parent_folder_id IS NULL

    UNION ALL

    SELECT f.folder_id, f.folder_name, f.parent_folder_id, ft.depth + 1
    FROM folders f
    JOIN folder_tree ft ON f.parent_folder_id = ft.folder_id
)
SELECT REPEAT('  ', depth) || folder_name AS folder_structure
FROM folder_tree
ORDER BY folder_id;
```

**Explanation:** Recursive CTEs must have:

1. An anchor member (base case) - starting point
2. A recursive member that references the CTE itself
3. A termination condition to prevent infinite recursion

They're perfect for:

- Organizational hierarchies
- Bill of materials
- Graph traversal
- Tree structures
- Date/number series generation

---

### Views

Views are virtual tables based on SQL queries.

**Syntax:**

```sql
CREATE VIEW view_name AS
SELECT ...;
```

**Examples:**

```sql
-- Create a simple view
CREATE VIEW high_earners AS
SELECT employee_id, first_name, last_name, salary, department
FROM employees
WHERE salary > 70000;

-- Query the view
SELECT * FROM high_earners;

-- View with joins
CREATE VIEW employee_details AS
SELECT e.employee_id, e.first_name, e.last_name,
       d.department_name, l.city, l.country
FROM employees e
JOIN departments d ON e.department_id = d.department_id
JOIN locations l ON d.location_id = l.location_id;

-- View with aggregation
CREATE VIEW department_statistics AS
SELECT department,
       COUNT(*) AS employee_count,
       AVG(salary) AS avg_salary,
       MIN(salary) AS min_salary,
       MAX(salary) AS max_salary
FROM employees
GROUP BY department;

-- Updatable view (can INSERT, UPDATE, DELETE)
CREATE VIEW it_employees AS
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE department = 'IT';

-- Update through view
UPDATE it_employees
SET salary = salary * 1.10
WHERE employee_id = 101;

-- Create or replace view
CREATE OR REPLACE VIEW active_employees AS
SELECT employee_id, first_name, last_name, hire_date
FROM employees
WHERE status = 'Active';

-- Drop a view
DROP VIEW IF EXISTS high_earners;

-- Materialized view (PostgreSQL) - physically stores results
CREATE MATERIALIZED VIEW monthly_sales_summary AS
SELECT DATE_TRUNC('month', order_date) AS month,
       SUM(amount) AS total_sales,
       COUNT(*) AS order_count
FROM orders
GROUP BY DATE_TRUNC('month', order_date);

-- Refresh materialized view
REFRESH MATERIALIZED VIEW monthly_sales_summary;
```

**Explanation:**

- **Regular views**: Virtual tables, no data storage, always show current data
- **Materialized views**: Physical storage, faster queries, need manual refresh
- Views can simplify complex queries and provide security by limiting data access
- Some views are updatable if they meet certain criteria (no aggregates, no DISTINCT, etc.)

---

### Indexes

Indexes improve query performance by creating fast lookup structures.

**Examples:**

```sql
-- Create a simple index
CREATE INDEX idx_employee_last_name
ON employees(last_name);

-- Create a unique index
CREATE UNIQUE INDEX idx_employee_email
ON employees(email);

-- Composite index (multiple columns)
CREATE INDEX idx_employee_dept_salary
ON employees(department, salary);

-- Partial/Filtered index (PostgreSQL/SQL Server)
CREATE INDEX idx_high_earners
ON employees(salary)
WHERE salary > 70000;

-- Index with included columns (SQL Server)
CREATE INDEX idx_employee_name
ON employees(last_name, first_name)
INCLUDE (salary, department);

-- Create index on expression
CREATE INDEX idx_employee_lower_email
ON employees(LOWER(email));

-- Show all indexes on a table (MySQL)
SHOW INDEX FROM employees;

-- Show all indexes (PostgreSQL)
SELECT * FROM pg_indexes
WHERE tablename = 'employees';

-- Drop an index
DROP INDEX idx_employee_last_name;

-- Analyze index usage (PostgreSQL)
EXPLAIN ANALYZE
SELECT * FROM employees WHERE last_name = 'Smith';

-- Rebuild index (to defragment)
REINDEX INDEX idx_employee_last_name;  -- PostgreSQL
ALTER INDEX idx_employee_last_name REBUILD;  -- SQL Server
```

**Index Types:**

- **B-Tree** (default): General purpose, good for equality and range queries
- **Hash**: Only for equality comparisons
- **GiST/GIN** (PostgreSQL): For full-text search, arrays, JSON
- **Full-text**: For text search
- **Spatial**: For geographic data

**Best Practices:**

- Index foreign keys
- Index columns used in WHERE, JOIN, ORDER BY
- Don't over-index (slows INSERT/UPDATE/DELETE)
- Consider composite indexes for multi-column queries
- Monitor and remove unused indexes
- Choose column order carefully in composite indexes

---

### Transactions

Transactions ensure data integrity by grouping operations into atomic units.

**ACID Properties:**

- **Atomicity**: All or nothing
- **Consistency**: Database remains in valid state
- **Isolation**: Transactions don't interfere with each other
- **Durability**: Committed changes are permanent

**Examples:**

```sql
-- Basic transaction
BEGIN TRANSACTION;  -- or BEGIN; or START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

COMMIT;  -- Save changes

-- Transaction with rollback
BEGIN TRANSACTION;

INSERT INTO orders (order_id, customer_id, total) VALUES (1001, 5, 500);
INSERT INTO order_items (order_id, product_id, quantity) VALUES (1001, 10, 2);

-- Something went wrong, undo everything
ROLLBACK;

-- Transaction with error handling (SQL Server)
BEGIN TRANSACTION;
BEGIN TRY
    UPDATE inventory SET quantity = quantity - 5 WHERE product_id = 100;
    INSERT INTO orders (customer_id, total) VALUES (5, 250);

    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    -- Log error
    SELECT ERROR_MESSAGE() AS error_message;
END CATCH;

-- Savepoints (partial rollback)
BEGIN TRANSACTION;

INSERT INTO customers (name) VALUES ('John Doe');
SAVEPOINT sp1;

INSERT INTO customers (name) VALUES ('Jane Smith');
SAVEPOINT sp2;

INSERT INTO customers (name) VALUES ('Invalid Data');

-- Rollback to sp2 (keeps 'John Doe' and 'Jane Smith')
ROLLBACK TO sp2;

COMMIT;

-- Isolation levels
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;  -- Dirty reads allowed
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;    -- Default, no dirty reads
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;   -- Consistent reads
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;      -- Full isolation

-- Example with isolation level
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN TRANSACTION;
    SELECT * FROM accounts WHERE account_id = 1;
    -- Other operations
COMMIT;
```

**Isolation Levels:**

1. **READ UNCOMMITTED**: Lowest isolation, allows dirty reads
2. **READ COMMITTED**: Default, prevents dirty reads
3. **REPEATABLE READ**: Prevents non-repeatable reads
4. **SERIALIZABLE**: Highest isolation, full locking

**Best Practices:**

- Keep transactions short
- Don't include user interaction in transactions
- Handle errors and always close transactions
- Choose appropriate isolation level
- Use savepoints for complex transactions

---

### Stored Procedures

Stored procedures are reusable SQL code blocks stored in the database.

**Examples:**

```sql
-- Create a simple stored procedure (SQL Server/MySQL)
CREATE PROCEDURE GetEmployeesByDepartment
    @DepartmentName VARCHAR(50)
AS
BEGIN
    SELECT employee_id, first_name, last_name, salary
    FROM employees
    WHERE department = @DepartmentName
    ORDER BY last_name;
END;

-- Execute stored procedure
EXEC GetEmployeesByDepartment @DepartmentName = 'IT';

-- Stored procedure with output parameter
CREATE PROCEDURE GetDepartmentStats
    @DepartmentName VARCHAR(50),
    @EmployeeCount INT OUTPUT,
    @AvgSalary DECIMAL(10,2) OUTPUT
AS
BEGIN
    SELECT @EmployeeCount = COUNT(*),
           @AvgSalary = AVG(salary)
    FROM employees
    WHERE department = @DepartmentName;
END;

-- Execute with output parameters
DECLARE @Count INT, @AvgSal DECIMAL(10,2);
EXEC GetDepartmentStats 'IT', @Count OUTPUT, @AvgSal OUTPUT;
SELECT @Count AS EmployeeCount, @AvgSal AS AverageSalary;

-- Stored procedure with IF/ELSE
CREATE PROCEDURE GiveSalaryRaise
    @EmployeeID INT,
    @RaisePercentage DECIMAL(5,2)
AS
BEGIN
    DECLARE @CurrentSalary DECIMAL(10,2);

    SELECT @CurrentSalary = salary
    FROM employees
    WHERE employee_id = @EmployeeID;

    IF @CurrentSalary < 100000
    BEGIN
        UPDATE employees
        SET salary = salary * (1 + @RaisePercentage / 100)
        WHERE employee_id = @EmployeeID;

        PRINT 'Salary raise applied successfully.';
    END
    ELSE
    BEGIN
        PRINT 'Employee salary already at maximum threshold.';
    END
END;

-- Stored procedure with error handling
CREATE PROCEDURE TransferFunds
    @FromAccount INT,
    @ToAccount INT,
    @Amount DECIMAL(10,2)
AS
BEGIN
    BEGIN TRANSACTION;
    BEGIN TRY
        -- Deduct from source account
        UPDATE accounts
        SET balance = balance - @Amount
        WHERE account_id = @FromAccount;

        -- Add to destination account
        UPDATE accounts
        SET balance = balance + @Amount
        WHERE account_id = @ToAccount;

        -- Log transaction
        INSERT INTO transactions (from_account, to_account, amount, trans_date)
        VALUES (@FromAccount, @ToAccount, @Amount, GETDATE());

        COMMIT TRANSACTION;
        PRINT 'Transfer completed successfully.';
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        PRINT 'Transfer failed: ' + ERROR_MESSAGE();
    END CATCH;
END;

-- PostgreSQL stored procedure (function)
CREATE OR REPLACE FUNCTION get_employee_count(dept_name VARCHAR)
RETURNS INTEGER AS $$
DECLARE
    emp_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO emp_count
    FROM employees
    WHERE department = dept_name;

    RETURN emp_count;
END;
$$ LANGUAGE plpgsql;

-- Call PostgreSQL function
SELECT get_employee_count('IT');

-- Drop stored procedure
DROP PROCEDURE IF EXISTS GetEmployeesByDepartment;
```

**Benefits:**

- Reusability and maintainability
- Performance (precompiled)
- Security (parameterized, prevent SQL injection)
- Reduced network traffic
- Encapsulation of business logic

---

### Triggers

Triggers are automatically executed in response to database events.

**Examples:**

```sql
-- Create AFTER INSERT trigger
CREATE TRIGGER trg_after_employee_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (table_name, action, record_id, timestamp)
    VALUES ('employees', 'INSERT', NEW.employee_id, NOW());
END;

-- BEFORE UPDATE trigger (MySQL)
CREATE TRIGGER trg_before_salary_update
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary < OLD.salary THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Salary cannot be decreased';
    END IF;

    -- Log changes
    INSERT INTO salary_history (employee_id, old_salary, new_salary, change_date)
    VALUES (NEW.employee_id, OLD.salary, NEW.salary, NOW());
END;

-- AFTER DELETE trigger
CREATE TRIGGER trg_after_employee_delete
AFTER DELETE ON employees
FOR EACH ROW
BEGIN
    -- Archive deleted employee data
    INSERT INTO employees_archive
    SELECT * FROM deleted;  -- SQL Server uses 'deleted' table
    -- MySQL uses OLD.column_name
END;

-- INSTEAD OF trigger (for views)
CREATE TRIGGER trg_instead_of_insert_on_view
INSTEAD OF INSERT ON employee_view
FOR EACH ROW
BEGIN
    -- Custom logic before actual insert
    INSERT INTO employees (first_name, last_name, department)
    VALUES (NEW.first_name, NEW.last_name, UPPER(NEW.department));
END;

-- SQL Server trigger with multiple statements
CREATE TRIGGER trg_employee_changes
ON employees
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    SET NOCOUNT ON;

    -- For INSERT
    IF EXISTS (SELECT * FROM inserted) AND NOT EXISTS (SELECT * FROM deleted)
    BEGIN
        INSERT INTO audit_log (action, employee_id, timestamp)
        SELECT 'INSERT', employee_id, GETDATE()
        FROM inserted;
    END

    -- For UPDATE
    IF EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
    BEGIN
        INSERT INTO audit_log (action, employee_id, old_value, new_value, timestamp)
        SELECT 'UPDATE', i.employee_id, d.salary, i.salary, GETDATE()
        FROM inserted i
        JOIN deleted d ON i.employee_id = d.employee_id
        WHERE i.salary <> d.salary;
    END

    -- For DELETE
    IF NOT EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
    BEGIN
        INSERT INTO audit_log (action, employee_id, timestamp)
        SELECT 'DELETE', employee_id, GETDATE()
        FROM deleted;
    END
END;

-- PostgreSQL trigger
CREATE OR REPLACE FUNCTION audit_employee_changes()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO audit_log VALUES (NEW.employee_id, 'INSERT', NOW());
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO audit_log VALUES (NEW.employee_id, 'UPDATE', NOW());
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO audit_log VALUES (OLD.employee_id, 'DELETE', NOW());
        RETURN OLD;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER employee_audit_trigger
AFTER INSERT OR UPDATE OR DELETE ON employees
FOR EACH ROW EXECUTE FUNCTION audit_employee_changes();

-- Disable/Enable triggers
ALTER TABLE employees DISABLE TRIGGER trg_after_employee_insert;
ALTER TABLE employees ENABLE TRIGGER trg_after_employee_insert;

-- Drop trigger
DROP TRIGGER IF EXISTS trg_after_employee_insert;
```

**Trigger Types:**

- **BEFORE**: Executes before the operation
- **AFTER**: Executes after the operation
- **INSTEAD OF**: Replaces the operation (mainly for views)

**Common Uses:**

- Auditing changes
- Enforcing complex business rules
- Maintaining calculated columns
- Preventing invalid operations
- Cascading changes

**Best Practices:**

- Keep triggers simple and fast
- Avoid recursive triggers
- Document trigger logic
- Consider alternatives (constraints, defaults)
- Be careful with trigger chains

---

### Pivot and Unpivot

Transform rows into columns (PIVOT) and vice versa (UNPIVOT).

**Examples:**

```sql
-- PIVOT: Rows to columns
-- Before: department | year | revenue
-- After: department | 2021 | 2022 | 2023

-- SQL Server PIVOT
SELECT department, [2021], [2022], [2023]
FROM (
    SELECT department, year, revenue
    FROM sales_data
) AS source_data
PIVOT (
    SUM(revenue)
    FOR year IN ([2021], [2022], [2023])
) AS pivot_table;

-- PostgreSQL/MySQL alternative using CASE
SELECT department,
       SUM(CASE WHEN year = 2021 THEN revenue ELSE 0 END) AS "2021",
       SUM(CASE WHEN year = 2022 THEN revenue ELSE 0 END) AS "2022",
       SUM(CASE WHEN year = 2023 THEN revenue ELSE 0 END) AS "2023"
FROM sales_data
GROUP BY department;

-- UNPIVOT: Columns to rows
-- Before: department | 2021 | 2022 | 2023
-- After: department | year | revenue

-- SQL Server UNPIVOT
SELECT department, year, revenue
FROM sales_pivot
UNPIVOT (
    revenue FOR year IN ([2021], [2022], [2023])
) AS unpivot_table;

-- PostgreSQL/MySQL alternative using UNION
SELECT department, '2021' AS year, year_2021 AS revenue FROM sales_pivot
UNION ALL
SELECT department, '2022' AS year, year_2022 AS revenue FROM sales_pivot
UNION ALL
SELECT department, '2023' AS year, year_2023 AS revenue FROM sales_pivot;

-- Dynamic PIVOT with multiple aggregates
SELECT *
FROM (
    SELECT department, product, quantity, revenue
    FROM sales
) AS source
PIVOT (
    SUM(quantity) AS total_qty,
    SUM(revenue) AS total_revenue
    FOR product IN ([ProductA], [ProductB], [ProductC])
) AS pivot_result;

-- Conditional aggregation (alternative to PIVOT)
SELECT
    DATE_TRUNC('month', order_date) AS month,
    COUNT(*) AS total_orders,
    COUNT(*) FILTER (WHERE status = 'Completed') AS completed,
    COUNT(*) FILTER (WHERE status = 'Pending') AS pending,
    COUNT(*) FILTER (WHERE status = 'Cancelled') AS cancelled
FROM orders
GROUP BY DATE_TRUNC('month', order_date);
```

**Explanation:**

- **PIVOT**: Converts row values into columns (wide format)
- **UNPIVOT**: Converts columns into rows (long format)
- Use CASE statements for database-agnostic pivoting
- Useful for reporting and data presentation

---

### Advanced Joins

Complex join patterns and techniques.

**Examples:**

```sql
-- Lateral Join (PostgreSQL) - like a correlated subquery in FROM
SELECT d.department_name, top_earner.*
FROM departments d
CROSS JOIN LATERAL (
    SELECT first_name, last_name, salary
    FROM employees e
    WHERE e.department_id = d.department_id
    ORDER BY salary DESC
    LIMIT 3
) AS top_earner;

-- APPLY (SQL Server equivalent of LATERAL)
SELECT d.department_name, top_earner.*
FROM departments d
CROSS APPLY (
    SELECT TOP 3 first_name, last_name, salary
    FROM employees e
    WHERE e.department_id = d.department_id
    ORDER BY salary DESC
) AS top_earner;

-- Non-equi join (join condition not using =)
SELECT e1.first_name AS employee,
       e2.first_name AS similar_salary_employee
FROM employees e1
JOIN employees e2
    ON e1.salary BETWEEN e2.salary - 5000 AND e2.salary + 5000
    AND e1.employee_id <> e2.employee_id;

-- Conditional join (different join conditions)
SELECT o.order_id, p.product_name, d.discount_rate
FROM orders o
JOIN products p ON o.product_id = p.product_id
LEFT JOIN discounts d
    ON p.category = d.category
    AND o.order_date BETWEEN d.start_date AND d.end_date;

-- Join with aggregation before joining
SELECT e.first_name, e.last_name, proj.project_count
FROM employees e
LEFT JOIN (
    SELECT employee_id, COUNT(*) AS project_count
    FROM project_assignments
    GROUP BY employee_id
) proj ON e.employee_id = proj.employee_id;

-- Multiple join paths (join same table multiple times)
SELECT e.first_name AS employee,
       m.first_name AS manager,
       d1.department_name AS employee_dept,
       d2.department_name AS manager_dept
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id
LEFT JOIN departments d1 ON e.department_id = d1.department_id
LEFT JOIN departments d2 ON m.department_id = d2.department_id;

-- Join with window functions
SELECT e.first_name, e.salary, dept_avg.avg_salary
FROM employees e
JOIN (
    SELECT DISTINCT department_id,
           AVG(salary) OVER (PARTITION BY department_id) AS avg_salary
    FROM employees
) dept_avg ON e.department_id = dept_avg.department_id;

-- Anti-join (find rows without matches)
-- Method 1: LEFT JOIN with NULL check
SELECT e.*
FROM employees e
LEFT JOIN project_assignments pa ON e.employee_id = pa.employee_id
WHERE pa.employee_id IS NULL;

-- Method 2: NOT EXISTS
SELECT e.*
FROM employees e
WHERE NOT EXISTS (
    SELECT 1 FROM project_assignments pa
    WHERE pa.employee_id = e.employee_id
);

-- Semi-join (check for existence)
SELECT DISTINCT e.*
FROM employees e
WHERE EXISTS (
    SELECT 1 FROM projects p
    WHERE p.manager_id = e.employee_id
);
```

**Explanation:**

- **LATERAL/APPLY**: Allows subquery to reference outer query columns
- **Non-equi joins**: Use operators other than = (>, <, BETWEEN, etc.)
- **Anti-joins**: Find rows without matching rows in another table
- **Semi-joins**: Check for existence without returning joined data

---

### Query Optimization

Techniques to improve query performance.

**Examples:**

```sql
-- Use EXPLAIN to analyze query execution plan
EXPLAIN ANALYZE
SELECT e.first_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > 60000;

-- Avoid SELECT * - specify only needed columns
-- Bad
SELECT * FROM employees WHERE department = 'IT';

-- Good
SELECT employee_id, first_name, last_name FROM employees WHERE department = 'IT';

-- Use indexes effectively
-- Create index on frequently filtered columns
CREATE INDEX idx_emp_salary ON employees(salary);
CREATE INDEX idx_emp_dept ON employees(department);

-- Use EXISTS instead of IN for large subqueries
-- Less efficient
SELECT * FROM employees
WHERE department_id IN (SELECT department_id FROM departments WHERE location = 'NYC');

-- More efficient
SELECT * FROM employees e
WHERE EXISTS (
    SELECT 1 FROM departments d
    WHERE d.department_id = e.department_id AND d.location = 'NYC'
);

-- Use JOIN instead of subquery in SELECT
-- Less efficient
SELECT first_name,
       (SELECT department_name FROM departments d WHERE d.department_id = e.department_id) AS dept
FROM employees e;

-- More efficient
SELECT e.first_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id;

-- Avoid functions on indexed columns in WHERE
-- Bad - can't use index
SELECT * FROM employees WHERE YEAR(hire_date) = 2020;

-- Good - can use index
SELECT * FROM employees
WHERE hire_date >= '2020-01-01' AND hire_date < '2021-01-01';

-- Use LIMIT for large result sets
SELECT * FROM employees ORDER BY salary DESC LIMIT 100;

-- Partition large tables
CREATE TABLE orders_2023 PARTITION OF orders
FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');

-- Use covering indexes (include all needed columns)
CREATE INDEX idx_emp_cover
ON employees(department, salary)
INCLUDE (first_name, last_name);

-- Batch updates/inserts
-- Bad - many individual inserts
INSERT INTO employees VALUES (1, 'John', 'Doe');
INSERT INTO employees VALUES (2, 'Jane', 'Smith');

-- Good - single batch insert
INSERT INTO employees VALUES
(1, 'John', 'Doe'),
(2, 'Jane', 'Smith');

-- Use appropriate data types
-- Bad - storing numbers as VARCHAR
CREATE TABLE products (price VARCHAR(20));

-- Good - using numeric type
CREATE TABLE products (price DECIMAL(10,2));

-- Avoid correlated subqueries
-- Bad - runs subquery for each row
SELECT e.first_name, e.salary,
    (SELECT AVG(salary) FROM employees WHERE department = e.department) AS avg_dept_salary
FROM employees e;

-- Good - use JOIN or window function
SELECT e.first_name, e.salary,
    AVG(e.salary) OVER (PARTITION BY e.department) AS avg_dept_salary
FROM employees e;

-- Use UNION ALL instead of UNION when duplicates are acceptable
-- UNION removes duplicates (slower)
SELECT first_name FROM employees WHERE department = 'IT'
UNION
SELECT first_name FROM employees WHERE salary > 70000;

-- UNION ALL keeps duplicates (faster)
SELECT first_name FROM employees WHERE department = 'IT'
UNION ALL
SELECT first_name FROM contractors WHERE department = 'IT';

-- Regular maintenance
-- PostgreSQL
VACUUM ANALYZE employees;

-- MySQL
OPTIMIZE TABLE employees;

-- Update statistics
ANALYZE TABLE employees;
```

**Performance Tips:**

1. **Indexing**: Create indexes on frequently queried columns
2. **Query Structure**: Avoid unnecessary complexity
3. **Data Types**: Use appropriate, smallest data types
4. **Joins vs Subqueries**: JOINs are often faster
5. **WHERE vs HAVING**: Filter early with WHERE
6. **LIMIT Results**: Don't fetch more than needed
7. **Avoid Functions on Columns**: Prevents index usage
8. **Batch Operations**: Group multiple operations
9. **Partitioning**: Split large tables
10. **Regular Maintenance**: Update statistics, rebuild indexes

**Monitoring Tools:**

- `EXPLAIN` / `EXPLAIN ANALYZE` - Query execution plan
- `SHOW PROFILE` (MySQL) - Detailed timing
- `pg_stat_statements` (PostgreSQL) - Track query performance
- Database-specific monitoring tools

---

## Additional Advanced Topics

### Table Creation and Constraints

```sql
-- Create table with various constraints
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    hire_date DATE DEFAULT CURRENT_DATE,
    salary DECIMAL(10,2) CHECK (salary >= 0),
    department_id INT,
    manager_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- Foreign key constraints
    CONSTRAINT fk_department
        FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,

    CONSTRAINT fk_manager
        FOREIGN KEY (manager_id)
        REFERENCES employees(employee_id)
        ON DELETE SET NULL,

    -- Table-level check constraint
    CONSTRAINT chk_salary_range
        CHECK (salary BETWEEN 20000 AND 500000)
);

-- Alter table - add column
ALTER TABLE employees ADD COLUMN middle_name VARCHAR(50);

-- Alter table - modify column
ALTER TABLE employees MODIFY COLUMN salary DECIMAL(12,2);

-- Alter table - add constraint
ALTER TABLE employees ADD CONSTRAINT unique_email UNIQUE (email);

-- Alter table - drop column
ALTER TABLE employees DROP COLUMN middle_name;

-- Drop table
DROP TABLE IF EXISTS employees;

-- Truncate table (delete all data, keep structure)
TRUNCATE TABLE employees;
```

---

### Sequences and Identity Columns

Sequences generate unique numeric values, commonly used for primary keys.

**Examples:**

```sql
-- PostgreSQL - SERIAL (auto-creates sequence)
CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50)
);

-- PostgreSQL - Explicit sequence creation
CREATE SEQUENCE emp_id_seq
    START WITH 1000
    INCREMENT BY 1
    MINVALUE 1000
    MAXVALUE 999999
    CACHE 20;

-- Use sequence
INSERT INTO employees (employee_id, first_name)
VALUES (nextval('emp_id_seq'), 'John');

-- Get current sequence value (last value returned by nextval)
SELECT currval('emp_id_seq');

-- Get next value without incrementing (peek)
SELECT last_value FROM emp_id_seq;

-- Reset sequence
ALTER SEQUENCE emp_id_seq RESTART WITH 1000;

-- Set sequence to max existing value
SELECT setval('emp_id_seq', (SELECT MAX(employee_id) FROM employees));

-- Drop sequence
DROP SEQUENCE IF EXISTS emp_id_seq;

-- MySQL - AUTO_INCREMENT
CREATE TABLE employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50)
);

-- Set AUTO_INCREMENT starting value
ALTER TABLE employees AUTO_INCREMENT = 1000;

-- Get last inserted ID
SELECT LAST_INSERT_ID();

-- Reset AUTO_INCREMENT
ALTER TABLE employees AUTO_INCREMENT = 1;

-- SQL Server - IDENTITY
CREATE TABLE employees (
    employee_id INT IDENTITY(1,1) PRIMARY KEY,  -- IDENTITY(start, increment)
    first_name VARCHAR(50)
);

-- Get last identity value
SELECT SCOPE_IDENTITY();  -- Current scope
SELECT @@IDENTITY;        -- Current session
SELECT IDENT_CURRENT('employees');  -- Specific table

-- Reseed identity
DBCC CHECKIDENT ('employees', RESEED, 1000);

-- Insert specific identity value
SET IDENTITY_INSERT employees ON;
INSERT INTO employees (employee_id, first_name) VALUES (5000, 'John');
SET IDENTITY_INSERT employees OFF;

-- Oracle - Sequence (traditional)
CREATE SEQUENCE emp_id_seq
    START WITH 1000
    INCREMENT BY 1
    NOCACHE;

-- Use in INSERT
INSERT INTO employees (employee_id, first_name)
VALUES (emp_id_seq.NEXTVAL, 'John');

-- Use in SELECT
SELECT emp_id_seq.NEXTVAL FROM DUAL;
SELECT emp_id_seq.CURRVAL FROM DUAL;

-- Oracle 12c+ - Identity column
CREATE TABLE employees (
    employee_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR2(50)
);

-- Or with options
CREATE TABLE employees (
    employee_id NUMBER GENERATED BY DEFAULT AS IDENTITY (START WITH 1000) PRIMARY KEY,
    first_name VARCHAR2(50)
);
```

**Best Practices:**

- Use `SERIAL`/`IDENTITY`/`AUTO_INCREMENT` for simple auto-incrementing keys
- Use explicit sequences when you need more control (multiple tables sharing sequence, gaps allowed)
- Always handle concurrent inserts properly
- Don't rely on gaps being filled - sequences can skip values

---

### Temporary Tables

```sql
-- Create temporary table
CREATE TEMPORARY TABLE temp_high_earners AS
SELECT * FROM employees WHERE salary > 70000;

-- Use temporary table
SELECT department, COUNT(*)
FROM temp_high_earners
GROUP BY department;

-- Temporary tables are automatically dropped at session end
```

### Variables and Dynamic SQL

```sql
-- SQL Server variables
DECLARE @MinSalary DECIMAL(10,2) = 50000;
DECLARE @Department VARCHAR(50) = 'IT';

SELECT * FROM employees
WHERE salary > @MinSalary AND department = @Department;

-- MySQL variables
SET @min_salary = 50000;
SET @department = 'IT';

SELECT * FROM employees
WHERE salary > @min_salary AND department = @department;

-- Dynamic SQL (SQL Server)
DECLARE @sql NVARCHAR(MAX);
DECLARE @tablename NVARCHAR(50) = 'employees';

SET @sql = 'SELECT * FROM ' + @tablename + ' WHERE salary > 50000';
EXEC sp_executesql @sql;

-- Prepared statements (MySQL)
PREPARE stmt FROM 'SELECT * FROM employees WHERE salary > ?';
SET @min_sal = 50000;
EXECUTE stmt USING @min_sal;
DEALLOCATE PREPARE stmt;
```

### JSON Operations

```sql
-- PostgreSQL JSON operations
-- Store JSON data
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    data JSONB
);

INSERT INTO users (data) VALUES
('{"name": "John", "age": 30, "city": "NYC"}');

-- Query JSON data
SELECT data->>'name' AS name FROM users;
SELECT * FROM users WHERE data->>'age' = '30';

-- Update JSON field
UPDATE users
SET data = jsonb_set(data, '{city}', '"San Francisco"')
WHERE id = 1;

-- JSON aggregation
SELECT jsonb_agg(first_name) AS employee_names
FROM employees;
```

---

### Database Security and Permissions

Managing user access and permissions is critical for database security.

**Examples:**

```sql
-- CREATE USER
-- MySQL
CREATE USER 'john_doe'@'localhost' IDENTIFIED BY 'secure_password123';
CREATE USER 'app_user'@'%' IDENTIFIED BY 'password';  -- % allows from any host

-- PostgreSQL
CREATE USER john_doe WITH PASSWORD 'secure_password123';
CREATE USER readonly_user WITH PASSWORD 'password' LOGIN;

-- SQL Server
CREATE LOGIN john_doe WITH PASSWORD = 'secure_password123';
CREATE USER john_doe FOR LOGIN john_doe;

-- GRANT privileges
-- MySQL - Grant specific privileges
GRANT SELECT, INSERT, UPDATE ON database_name.* TO 'app_user'@'localhost';
GRANT SELECT ON database_name.employees TO 'readonly_user'@'localhost';
GRANT ALL PRIVILEGES ON database_name.* TO 'admin_user'@'localhost';

-- PostgreSQL
GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO app_user;
GRANT SELECT ON employees TO readonly_user;
GRANT ALL PRIVILEGES ON DATABASE company_db TO admin_user;

-- SQL Server
GRANT SELECT, INSERT, UPDATE ON employees TO app_user;
GRANT EXECUTE ON SCHEMA::dbo TO app_user;

-- Grant with grant option (allow user to grant to others)
GRANT SELECT ON employees TO manager_user WITH GRANT OPTION;

-- REVOKE privileges
-- MySQL
REVOKE INSERT, UPDATE ON database_name.employees FROM 'app_user'@'localhost';
REVOKE ALL PRIVILEGES ON database_name.* FROM 'old_admin'@'localhost';

-- PostgreSQL
REVOKE INSERT, UPDATE ON employees FROM app_user;

-- SQL Server
REVOKE SELECT ON employees FROM readonly_user;

-- Create and assign roles
-- PostgreSQL
CREATE ROLE readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;
GRANT readonly TO john_doe;

CREATE ROLE app_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON employees TO app_role;
GRANT app_role TO app_user;

-- MySQL
CREATE ROLE 'app_readonly';
GRANT SELECT ON database_name.* TO 'app_readonly';
GRANT 'app_readonly' TO 'user1'@'localhost';

-- SQL Server
CREATE ROLE app_readonly;
GRANT SELECT ON SCHEMA::dbo TO app_readonly;
ALTER ROLE app_readonly ADD MEMBER app_user;

-- View user privileges
-- MySQL
SHOW GRANTS FOR 'app_user'@'localhost';
SHOW GRANTS FOR CURRENT_USER;

-- PostgreSQL
SELECT * FROM information_schema.role_table_grants
WHERE grantee = 'app_user';

-- SQL Server
SELECT * FROM sys.database_permissions
WHERE grantee_principal_id = USER_ID('app_user');

-- Change password
-- MySQL
ALTER USER 'john_doe'@'localhost' IDENTIFIED BY 'new_password123';
SET PASSWORD FOR 'john_doe'@'localhost' = PASSWORD('new_password123');

-- PostgreSQL
ALTER USER john_doe WITH PASSWORD 'new_password123';

-- SQL Server
ALTER LOGIN john_doe WITH PASSWORD = 'new_password123';

-- Drop user
-- MySQL
DROP USER 'old_user'@'localhost';

-- PostgreSQL
DROP USER IF EXISTS old_user;

-- SQL Server
DROP USER old_user;
DROP LOGIN old_user;

-- Row-level security (PostgreSQL)
CREATE POLICY employee_policy ON employees
    FOR SELECT
    USING (department = current_user);

ALTER TABLE employees ENABLE ROW LEVEL SECURITY;

-- SQL Server Row-Level Security
CREATE FUNCTION dbo.fn_securitypredicate(@Department AS VARCHAR(50))
    RETURNS TABLE
WITH SCHEMABINDING
AS
    RETURN SELECT 1 AS fn_securitypredicate_result
    WHERE @Department = USER_NAME();

CREATE SECURITY POLICY DepartmentFilter
ADD FILTER PREDICATE dbo.fn_securitypredicate(department)
ON dbo.employees;
```

**Security Best Practices:**

1. **Principle of Least Privilege**: Grant only necessary permissions
2. **Use Roles**: Group permissions into roles rather than granting to individual users
3. **Never Use Root/SA in Applications**: Create dedicated application users
4. **Rotate Passwords Regularly**: Change passwords periodically
5. **Use Strong Passwords**: Enforce password complexity requirements
6. **Audit Access**: Regularly review user permissions
7. **Prevent SQL Injection**: Always use parameterized queries/prepared statements
8. **Encrypt Sensitive Data**: Use encryption for passwords, SSNs, etc.
9. **Limit Network Access**: Restrict database access to specific IP addresses
10. **Regular Backups**: Maintain secure backups with restricted access

**SQL Injection Prevention:**

```sql
-- ❌ DANGEROUS - SQL Injection vulnerable
-- Bad: String concatenation
query = "SELECT * FROM users WHERE username = '" + userInput + "'";

-- ✅ SAFE - Use parameterized queries
-- Python with parameterized query
cursor.execute("SELECT * FROM users WHERE username = ?", (userInput,))

-- Java PreparedStatement
PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE username = ?");
stmt.setString(1, userInput);

-- PHP PDO
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
$stmt->execute(['username' => $userInput]);
```

---

### SQL Query Execution Order

Understanding the order in which SQL processes clauses helps write better queries.

**Logical Processing Order:**

```
1. FROM (including JOINs)
2. WHERE
3. GROUP BY
4. HAVING
5. SELECT
6. DISTINCT
7. ORDER BY
8. LIMIT / OFFSET / FETCH
```

**Examples:**

```sql
-- This query is processed in the following order:
SELECT department, AVG(salary) AS avg_salary          -- 5. SELECT calculated
FROM employees                                         -- 1. FROM table
WHERE hire_date > '2020-01-01'                        -- 2. WHERE filter applied
GROUP BY department                                    -- 3. GROUP BY aggregation
HAVING AVG(salary) > 60000                            -- 4. HAVING filter groups
ORDER BY avg_salary DESC                              -- 6. ORDER BY sort results
LIMIT 10;                                             -- 7. LIMIT restrict rows

-- Why you can't use SELECT aliases in WHERE
SELECT salary * 1.1 AS adjusted_salary
FROM employees
WHERE adjusted_salary > 50000;  -- ❌ ERROR: adjusted_salary not yet calculated

-- Fix: Use the expression directly or subquery
SELECT salary * 1.1 AS adjusted_salary
FROM employees
WHERE salary * 1.1 > 50000;  -- ✅ Works

-- Or use a subquery/CTE
WITH adjusted AS (
    SELECT salary * 1.1 AS adjusted_salary
    FROM employees
)
SELECT * FROM adjusted
WHERE adjusted_salary > 50000;  -- ✅ Works

-- Why you CAN use SELECT aliases in ORDER BY and HAVING
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING avg_salary > 50000      -- ✅ Works (HAVING after SELECT in some DBs)
ORDER BY avg_salary DESC;      -- ✅ Works (ORDER BY after SELECT)

-- Window functions are calculated after WHERE but with full result set
SELECT
    employee_id,
    salary,
    department,
    AVG(salary) OVER (PARTITION BY department) AS dept_avg
FROM employees
WHERE hire_date > '2020-01-01'  -- Filters before window function
ORDER BY department, salary;

-- Execution order affects performance
-- Good: Filter early with WHERE
SELECT department, COUNT(*)
FROM employees
WHERE status = 'Active'  -- Reduces rows before grouping
GROUP BY department;

-- Less efficient: Filter late with HAVING
SELECT department, COUNT(*)
FROM employees
GROUP BY department
HAVING MAX(CASE WHEN status = 'Active' THEN 1 ELSE 0 END) = 1;
```

**Key Takeaways:**

1. **WHERE before GROUP BY**: Filter rows before aggregation
2. **HAVING after GROUP BY**: Filter groups after aggregation
3. **SELECT after WHERE/GROUP BY**: Can't use aliases in WHERE
4. **ORDER BY is last**: Most expensive operation, happens after everything else
5. **JOINs in FROM**: Happen before WHERE filtering
6. **Subqueries**: Follow same rules within their scope

**Common Mistakes:**

```sql
-- ❌ Can't use column alias in WHERE
SELECT employee_id, salary * 1.1 AS new_salary
FROM employees
WHERE new_salary > 50000;  -- Error

-- ❌ Can't use aggregate in WHERE
SELECT department, AVG(salary)
FROM employees
WHERE AVG(salary) > 50000  -- Error: Use HAVING instead
GROUP BY department;

-- ❌ Can't reference aggregated column in SELECT when not in GROUP BY
SELECT department, employee_id, AVG(salary)  -- Error: employee_id not aggregated
FROM employees
GROUP BY department;

-- ✅ Correct: Include in GROUP BY or aggregate it
SELECT department, COUNT(employee_id), AVG(salary)
FROM employees
GROUP BY department;
```

---

## Summary

This guide covered SQL from beginner to advanced:

**Beginner**: SELECT, WHERE, INSERT, UPDATE, DELETE, UPSERT, ORDER BY, LIMIT/FETCH FIRST, DISTINCT, NULL Handling

**Intermediate**: Aggregates, GROUP BY, HAVING, JOINs, UNION, Subqueries, CASE, String/Date functions

**Advanced**: Window functions, CTEs, Recursive CTEs, Views, Indexes, Transactions, Stored Procedures, Triggers, PIVOT, Query Optimization

**Additional Topics**: Table Creation, Constraints, Sequences/Identity, Temporary Tables, Variables, Dynamic SQL, JSON Operations, Security & Permissions, Query Execution Order

**Key Takeaways:**

- Start with simple queries and build complexity
- Understand join types and when to use each
- Use window functions for advanced analytics
- Optimize queries with proper indexing
- Use transactions for data integrity
- Choose the right tool: views, procedures, or triggers
- Always test and optimize performance
- Practice regularly with real-world scenarios
- Understand SQL execution order (FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT)
- Never concatenate user input - always use parameterized queries
- Handle NULL values explicitly with COALESCE, IS NULL, etc.

**Best Practices:**

1. Write readable, well-formatted SQL
2. Use meaningful aliases
3. Comment complex queries
4. Test queries on small datasets first
5. Always include WHERE with UPDATE/DELETE
6. Use transactions for critical operations
7. Monitor and optimize slow queries
8. Keep database schema normalized (usually)
9. Use constraints to enforce data integrity
10. Regular backups and maintenance
11. Apply principle of least privilege for user permissions
12. Use UPSERT operations to avoid duplicate key errors
13. Prefer FETCH FIRST over LIMIT for portability
14. Always handle NULL values explicitly in calculations
15. Use sequences/identity columns for auto-incrementing IDs

**Security Reminders:**

- ❌ Never: `"SELECT * FROM users WHERE id = " + userInput`
- ✅ Always: Use parameterized queries/prepared statements
- Grant minimum necessary permissions to application users
- Rotate passwords regularly and use strong passwords
- Implement row-level security when needed
- Regularly audit user access and permissions

**Performance Tips:**

- Index foreign keys and frequently queried columns
- Filter early with WHERE, not late with HAVING
- Use EXISTS instead of IN for large subqueries
- Avoid functions on indexed columns in WHERE clause
- Use covering indexes when possible
- Choose appropriate isolation levels for transactions
- Regular maintenance: VACUUM, ANALYZE, OPTIMIZE

**Common Mistakes to Avoid:**

- Using `= NULL` instead of `IS NULL`
- Forgetting WHERE clause in UPDATE/DELETE (updates/deletes everything!)
- Not handling NULL in calculations (results in NULL)
- Using SELECT aliases in WHERE clause
- Using aggregates in WHERE instead of HAVING
- Over-indexing (slows INSERT/UPDATE/DELETE)
- Not using parameterized queries (SQL injection risk)

Happy querying! 🚀

---

## Quick Reference: Database-Specific Syntax

Common operations across different database systems:

| Operation            | MySQL                         | PostgreSQL                 | SQL Server                 | Oracle                          |
| -------------------- | ----------------------------- | -------------------------- | -------------------------- | ------------------------------- |
| **Auto-increment**   | `AUTO_INCREMENT`              | `SERIAL` or `GENERATED`    | `IDENTITY(1,1)`            | `GENERATED AS IDENTITY`         |
| **String concat**    | `CONCAT()` or `+`             | `\|\|` or `CONCAT()`       | `+`                        | `\|\|` or `CONCAT()`            |
| **Limit rows**       | `LIMIT n`                     | `LIMIT n`                  | `TOP n` or `FETCH FIRST`   | `FETCH FIRST n ROWS`            |
| **Current date**     | `CURDATE()` or `NOW()`        | `CURRENT_DATE`             | `GETDATE()`                | `SYSDATE`                       |
| **String length**    | `LENGTH()` or `CHAR_LENGTH()` | `LENGTH()`                 | `LEN()`                    | `LENGTH()`                      |
| **Substring**        | `SUBSTRING()`                 | `SUBSTRING()`              | `SUBSTRING()`              | `SUBSTR()`                      |
| **If null**          | `IFNULL(col, val)`            | `COALESCE(col, val)`       | `ISNULL(col, val)`         | `NVL(col, val)`                 |
| **Date add**         | `DATE_ADD()`                  | `+ INTERVAL`               | `DATEADD()`                | `+ INTERVAL`                    |
| **Upsert**           | `ON DUPLICATE KEY`            | `ON CONFLICT`              | `MERGE`                    | `MERGE`                         |
| **Temp table**       | `CREATE TEMPORARY TABLE`      | `CREATE TEMP TABLE`        | `CREATE TABLE #temp`       | `CREATE GLOBAL TEMPORARY TABLE` |
| **Show tables**      | `SHOW TABLES`                 | `\dt` or query `pg_tables` | `SELECT * FROM sys.tables` | `SELECT * FROM user_tables`     |
| **Describe table**   | `DESCRIBE table`              | `\d table`                 | `sp_help table`            | `DESCRIBE table`                |
| **Regex match**      | `REGEXP` or `RLIKE`           | `~`                        | `LIKE` (limited)           | `REGEXP_LIKE()`                 |
| **Case insensitive** | Collation-dependent           | `ILIKE`                    | `COLLATE`                  | `UPPER()` comparison            |
| **Boolean type**     | `TINYINT(1)` or `BOOLEAN`     | `BOOLEAN`                  | `BIT`                      | `NUMBER(1)`                     |
| **Last insert ID**   | `LAST_INSERT_ID()`            | `RETURNING` or `currval()` | `SCOPE_IDENTITY()`         | `RETURNING`                     |

**Common Function Equivalents:**

| Function          | MySQL                   | PostgreSQL              | SQL Server              | Oracle         |
| ----------------- | ----------------------- | ----------------------- | ----------------------- | -------------- |
| Convert to string | `CAST()` or `CONVERT()` | `CAST()` or `::text`    | `CAST()` or `CONVERT()` | `TO_CHAR()`    |
| Convert to number | `CAST()`                | `CAST()` or `::integer` | `CAST()` or `CONVERT()` | `TO_NUMBER()`  |
| Convert to date   | `STR_TO_DATE()`         | `TO_DATE()` or `::date` | `CONVERT()`             | `TO_DATE()`    |
| Random number     | `RAND()`                | `RANDOM()`              | `RAND()`                | `DBMS_RANDOM`  |
| Row number        | `ROW_NUMBER()`          | `ROW_NUMBER()`          | `ROW_NUMBER()`          | `ROW_NUMBER()` |
| String replace    | `REPLACE()`             | `REPLACE()`             | `REPLACE()`             | `REPLACE()`    |
| Round number      | `ROUND()`               | `ROUND()`               | `ROUND()`               | `ROUND()`      |
| Absolute value    | `ABS()`                 | `ABS()`                 | `ABS()`                 | `ABS()`        |

**Transaction Syntax:**

| Operation | MySQL               | PostgreSQL       | SQL Server              | Oracle           |
| --------- | ------------------- | ---------------- | ----------------------- | ---------------- |
| Begin     | `START TRANSACTION` | `BEGIN`          | `BEGIN TRANSACTION`     | `BEGIN`          |
| Commit    | `COMMIT`            | `COMMIT`         | `COMMIT`                | `COMMIT`         |
| Rollback  | `ROLLBACK`          | `ROLLBACK`       | `ROLLBACK`              | `ROLLBACK`       |
| Savepoint | `SAVEPOINT name`    | `SAVEPOINT name` | `SAVE TRANSACTION name` | `SAVEPOINT name` |

**Note**: Always refer to official documentation for your specific database version as syntax may vary.
