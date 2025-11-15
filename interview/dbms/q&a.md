# DBMS Interview Questions & Answers

## Basic Concepts

### 1. What is a Database Management System (DBMS)?

A DBMS is software that enables users to create, maintain, and manipulate databases. It provides an interface between the database and end users or application programs, ensuring data is consistently organized and easily accessible.

### 2. What are the advantages of using a DBMS?

- Data independence
- Efficient data access
- Data integrity and security
- Concurrent access and crash recovery
- Reduced application development time
- Data consistency

### 3. What is the difference between DBMS and RDBMS?

DBMS stores data as files, while RDBMS stores data in tabular form (tables with rows and columns). RDBMS follows normalization and supports relationships between tables, while traditional DBMS may not.

### 4. What is a Database?

A database is an organized collection of structured data stored electronically in a computer system, typically controlled by a DBMS.

### 5. What are the different types of databases?

- Relational databases (RDBMS)
- NoSQL databases (Document, Key-Value, Column-family, Graph)
- Object-oriented databases
- Hierarchical databases
- Network databases

### 6. What is Data Independence?

Data independence is the ability to modify schema at one level without affecting schema at the next higher level. There are two types: Physical and Logical data independence.

### 7. What is a Schema?

A schema is the logical structure or design of a database. It defines how data is organized and how relationships among data are associated.

### 8. What are the three levels of data abstraction?

- Physical Level: How data is actually stored
- Logical Level: What data is stored and relationships
- View Level: Application programs hide details of data types

### 9. What is an Entity?

An entity is a real-world object or thing that has an independent existence and can be distinctly identified (e.g., a person, place, or thing).

### 10. What is an Attribute?

An attribute is a property or characteristic of an entity (e.g., name, age, address of a person).

## Keys and Constraints

### 11. What is a Primary Key?

A primary key is a column or set of columns that uniquely identifies each row in a table. It cannot contain NULL values.

**Example:**

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    email VARCHAR(100)
);
```

**Follow-up Questions:**

- Can a table have multiple primary keys?
- What happens if you try to insert a duplicate primary key value?

### 12. What is a Foreign Key?

A foreign key is a column or set of columns in one table that refers to the primary key in another table, establishing a relationship between the two tables.

**Example:**

```sql
CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50)
);

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(50),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
```

**Follow-up Questions:**

- What happens when you try to delete a record that is referenced by a foreign key?
- What are CASCADE, SET NULL, and RESTRICT options in foreign keys?

### 13. What is a Candidate Key?

A candidate key is a minimal set of attributes that can uniquely identify a tuple. A table can have multiple candidate keys, and one is chosen as the primary key.

### 14. What is a Super Key?

A super key is a set of one or more attributes that can uniquely identify a tuple in a relation. It may contain additional attributes that are not necessary for unique identification.

### 15. What is a Composite Key?

A composite key is a primary key composed of two or more attributes that together uniquely identify a record.

### 16. What is a Unique Key?

A unique key ensures that all values in a column are different. Unlike primary keys, unique keys can contain NULL values (typically one NULL).

### 17. What is an Alternate Key?

An alternate key is a candidate key that is not selected as the primary key.

### 18. What are Constraints in SQL?

Constraints are rules enforced on data columns to ensure data integrity. Types include NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, and DEFAULT.

### 19. What is Referential Integrity?

Referential integrity ensures that a foreign key value always points to an existing row in the referenced table, maintaining consistency between related tables.

### 20. What is Domain Constraint?

Domain constraint specifies that the value of an attribute must be from a specific domain or set of values.

## Normalization

### 21. What is Normalization?

Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity by dividing larger tables into smaller ones and defining relationships.

### 22. What is Denormalization?

Denormalization is the process of adding redundant data to a database to improve read performance by reducing the number of joins needed.

### 23. What is 1NF (First Normal Form)?

A table is in 1NF if it contains only atomic (indivisible) values and each column contains values of a single type.

**Example (NOT in 1NF):**

```
Student Table:
| StudentID | Name  | Courses           |
|-----------|-------|-------------------|
| 1         | John  | Math, Science     |
| 2         | Jane  | English, History  |
```

**After converting to 1NF:**

```
Student_Courses Table:
| StudentID | Name  | Course   |
|-----------|-------|----------|
| 1         | John  | Math     |
| 1         | John  | Science  |
| 2         | Jane  | English  |
| 2         | Jane  | History  |
```

**Follow-up Questions:**

- Can a table be in 2NF without being in 1NF?
- How do you identify violations of 1NF?

### 24. What is 2NF (Second Normal Form)?

A table is in 2NF if it is in 1NF and all non-key attributes are fully functionally dependent on the primary key (no partial dependency).

### 25. What is 3NF (Third Normal Form)?

A table is in 3NF if it is in 2NF and has no transitive dependencies (non-key attributes depend only on the primary key).

### 26. What is BCNF (Boyce-Codd Normal Form)?

A table is in BCNF if it is in 3NF and for every functional dependency X→Y, X must be a super key.

### 27. What is 4NF (Fourth Normal Form)?

A table is in 4NF if it is in BCNF and has no multi-valued dependencies.

### 28. What is 5NF (Fifth Normal Form)?

A table is in 5NF if it is in 4NF and cannot be decomposed into smaller tables without losing information.

### 29. What is Functional Dependency?

A functional dependency X→Y means that the value of X uniquely determines the value of Y.

### 30. What is a Partial Dependency?

A partial dependency occurs when a non-prime attribute is dependent on part of a candidate key (not the whole key).

## SQL Basics

### 31. What is SQL?

SQL (Structured Query Language) is a standard language for managing and manipulating relational databases.

### 32. What are the different types of SQL commands?

- DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE
- DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE
- DCL (Data Control Language): GRANT, REVOKE
- TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT

### 33. What is the difference between DELETE and TRUNCATE?

DELETE removes rows one at a time and can be rolled back; TRUNCATE removes all rows at once, is faster, and cannot be rolled back (in most DBMS).

**Example:**

```sql
-- DELETE (can use WHERE clause, can be rolled back)
DELETE FROM employees WHERE department = 'IT';

-- TRUNCATE (removes all rows, faster, no WHERE clause)
TRUNCATE TABLE employees;

-- DROP (removes table structure completely)
DROP TABLE employees;
```

**Comparison:**

```
Feature         | DELETE    | TRUNCATE  | DROP
----------------|-----------|-----------|--------
Speed           | Slower    | Faster    | Fast
WHERE Clause    | Yes       | No        | N/A
Rollback        | Yes       | No*       | No
Table Structure | Keeps     | Keeps     | Removes
Triggers        | Fires     | Doesn't   | N/A
```

**Follow-up Questions:**

- Which command resets auto-increment values?
- Can you use TRUNCATE on a table with foreign key constraints?

### 34. What is the difference between WHERE and HAVING?

WHERE filters rows before grouping; HAVING filters groups after GROUP BY has been applied.

**Example:**

```sql
-- WHERE: Filters rows before aggregation
SELECT department, COUNT(*) as emp_count
FROM employees
WHERE salary > 50000  -- Filter rows first
GROUP BY department;

-- HAVING: Filters groups after aggregation
SELECT department, AVG(salary) as avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 60000;  -- Filter groups after aggregation

-- BOTH: WHERE first, then HAVING
SELECT department, AVG(salary) as avg_salary
FROM employees
WHERE hire_date > '2020-01-01'  -- Filter rows first
GROUP BY department
HAVING AVG(salary) > 50000;      -- Then filter groups
```

**Execution Order:**

```
WHERE → GROUP BY → HAVING → SELECT → ORDER BY
```

**Follow-up Questions:**

- Can you use aggregate functions in WHERE clause?
- Why is HAVING executed after GROUP BY?

### 35. What is a JOIN?

A JOIN combines rows from two or more tables based on a related column between them.

### 36. What are the types of JOINs?

- INNER JOIN: Returns matching rows from both tables
- LEFT JOIN: Returns all rows from left table and matching rows from right
- RIGHT JOIN: Returns all rows from right table and matching rows from left
- FULL OUTER JOIN: Returns all rows when there's a match in either table
- CROSS JOIN: Returns Cartesian product of both tables

**Sample Tables:**

```
Employees:                    Departments:
| emp_id | name  | dept_id |  | dept_id | dept_name |
|--------|-------|---------|  |---------|-----------|
| 1      | John  | 10      |  | 10      | IT        |
| 2      | Jane  | 20      |  | 20      | HR        |
| 3      | Bob   | NULL    |  | 30      | Sales     |
```

**Examples:**

```sql
-- INNER JOIN: Only matching records
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;
/* Result:
| name  | dept_name |
|-------|-----------|
| John  | IT        |
| Jane  | HR        |
*/

-- LEFT JOIN: All from left + matches from right
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id;
/* Result:
| name  | dept_name |
|-------|-----------|
| John  | IT        |
| Jane  | HR        |
| Bob   | NULL      |
*/

-- RIGHT JOIN: All from right + matches from left
SELECT e.name, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.dept_id;
/* Result:
| name  | dept_name |
|-------|-----------|
| John  | IT        |
| Jane  | HR        |
| NULL  | Sales     |
*/

-- FULL OUTER JOIN: All records from both tables
SELECT e.name, d.dept_name
FROM employees e
FULL OUTER JOIN departments d ON e.dept_id = d.dept_id;
/* Result:
| name  | dept_name |
|-------|-----------|
| John  | IT        |
| Jane  | HR        |
| Bob   | NULL      |
| NULL  | Sales     |
*/
```

**Visual Representation:**

```
INNER JOIN:        LEFT JOIN:         RIGHT JOIN:       FULL OUTER:
   ┌───┐              ┌───┐              ┌───┐              ┌───┐
   │ A │              │ A │              │ A │              │ A │
   └─┬─┘              └─┬─┘              └─┬─┘              └─┬─┘
     │                  │                  │                  │
   ┌─▼─┐              ┌─▼─┐              ┌─▼─┐              ┌─▼─┐
   │ ■ │              │ █ │              │ █ │              │ █ │
   └─┬─┘              └─┬─┘              └─┬─┘              └─┬─┘
     │                  │                  │                  │
   ┌─▼─┐              ┌─▼─┐              ┌─▼─┐              ┌─▼─┐
   │ B │              │ B │              │ B │              │ B │
   └───┘              └───┘              └───┘              └───┘
  (Match only)       (All A + Match)   (All B + Match)   (All records)
```

**Follow-up Questions:**

- What's the difference between INNER JOIN and WHERE clause with multiple tables?
- How can you simulate FULL OUTER JOIN in MySQL?
- When would you use CROSS JOIN?

### 37. What is a Self Join?

A self join is a join where a table is joined with itself to compare rows within the same table.

**Example:**

```sql
-- Employee table with manager_id referencing employee_id
Employees:
| emp_id | name    | manager_id |
|--------|---------|------------|
| 1      | Alice   | NULL       | (CEO)
| 2      | Bob     | 1          | (Reports to Alice)
| 3      | Charlie | 1          | (Reports to Alice)
| 4      | David   | 2          | (Reports to Bob)

-- Find employees and their managers
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.emp_id;

/* Result:
| employee | manager |
|----------|---------|
| Alice    | NULL    |
| Bob      | Alice   |
| Charlie  | Alice   |
| David    | Bob     |
*/
```

**Follow-up Questions:**

- How would you find all employees who earn more than their manager?
- Can you find the hierarchical level of each employee?

### 38. What is a Subquery?

A subquery is a query nested inside another query, used to return data that will be used in the main query.

**Examples:**

```sql
-- Subquery in WHERE clause
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Subquery with IN
SELECT name, department
FROM employees
WHERE department IN (SELECT dept_name FROM departments WHERE location = 'NYC');

-- Subquery in SELECT (scalar subquery)
SELECT name, salary,
       (SELECT AVG(salary) FROM employees) AS company_avg
FROM employees;

-- Subquery in FROM (derived table)
SELECT dept, avg_sal
FROM (
    SELECT department AS dept, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY department
) AS dept_stats
WHERE avg_sal > 50000;
```

**Follow-up Questions:**

- What's the difference between a subquery and a JOIN?
- Can a subquery return multiple columns?

### 39. What is a Correlated Subquery?

A correlated subquery is a subquery that references columns from the outer query and is executed once for each row processed by the outer query.

**Example:**

```sql
-- Find employees earning more than average in their department
SELECT e1.name, e1.salary, e1.department
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department = e1.department  -- References outer query
);

-- Using EXISTS with correlated subquery
SELECT d.dept_name
FROM departments d
WHERE EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.dept_id = d.dept_id
    AND e.salary > 100000
);
```

**Comparison:**

```
Regular Subquery:         Correlated Subquery:
- Executes once          - Executes for each outer row
- Independent            - Depends on outer query
- Generally faster       - Can be slower
- Returns same result    - Result varies per row
```

**Follow-up Questions:**

- Can you convert a correlated subquery to a JOIN?
- When is EXISTS more efficient than IN?

### 40. What is the difference between UNION and UNION ALL?

UNION removes duplicate rows from the result set; UNION ALL includes all rows, including duplicates.

**Example:**

```sql
-- Sample Tables:
Table A:        Table B:
| id | name |   | id | name |
|----|------|   |----|------|
| 1  | John |   | 1  | John |  (duplicate)
| 2  | Jane |   | 3  | Bob  |

-- UNION: Removes duplicates
SELECT id, name FROM table_a
UNION
SELECT id, name FROM table_b;
/* Result (3 rows):
| id | name |
|----|------|
| 1  | John |
| 2  | Jane |
| 3  | Bob  |
*/

-- UNION ALL: Keeps all rows including duplicates
SELECT id, name FROM table_a
UNION ALL
SELECT id, name FROM table_b;
/* Result (4 rows):
| id | name |
|----|------|
| 1  | John |
| 2  | Jane |
| 1  | John | (duplicate kept)
| 3  | Bob  |
*/
```

**Performance Comparison:**

```
UNION:                    UNION ALL:
- Slower (sorts/dedupes) - Faster (no processing)
- Removes duplicates     - Keeps duplicates
- More memory usage      - Less memory usage
- Use when unique needed - Use when duplicates OK
```

**Follow-up Questions:**

- When would you prefer UNION ALL over UNION?
- Do the SELECT statements need the same column names?

## Indexes and Performance

### 41. What is an Index?

An index is a database object that improves the speed of data retrieval operations on a table at the cost of additional storage and slower writes.

**Example:**

```sql
-- Create an index
CREATE INDEX idx_employee_name ON employees(last_name);

-- Create a unique index
CREATE UNIQUE INDEX idx_employee_email ON employees(email);

-- Create a composite index
CREATE INDEX idx_dept_salary ON employees(department, salary);

-- View query execution plan
EXPLAIN SELECT * FROM employees WHERE last_name = 'Smith';

-- Drop an index
DROP INDEX idx_employee_name ON employees;
```

**With vs Without Index:**

```
Without Index (Table Scan):    With Index (Index Seek):
Time: 100ms (scan 1M rows)     Time: 5ms (scan 100 rows)

┌──────────────────┐            ┌─────────┐
│  Full Table Scan │            │  Index  │
│  Row 1...1000000 │            │  Search │ → Specific Rows
└──────────────────┘            └─────────┘
```

**Follow-up Questions:**

- When would an index hurt performance?
- What is the difference between clustered and non-clustered indexes?

### 42. What are the types of Indexes?

- Clustered Index: Determines physical order of data
- Non-clustered Index: Logical order separate from physical order
- Unique Index: Ensures uniqueness
- Composite Index: Index on multiple columns
- Full-text Index: For text searching

### 43. What is a Clustered Index?

A clustered index determines the physical order of data in a table. A table can have only one clustered index.

### 44. What is a Non-clustered Index?

A non-clustered index creates a separate structure from the data rows, containing index keys and pointers to the actual data.

### 45. When should you use an Index?

Use indexes on columns frequently used in WHERE clauses, JOIN conditions, or ORDER BY clauses, especially on large tables.

### 46. What are the disadvantages of Indexes?

- Require additional storage space
- Slow down INSERT, UPDATE, and DELETE operations
- Need maintenance and can become fragmented

### 47. What is Query Optimization?

Query optimization is the process of selecting the most efficient way to execute a SQL query by analyzing different execution plans.

### 48. What is an Execution Plan?

An execution plan shows how the database engine will execute a query, including the order of operations and methods used.

### 49. What is a View?

A view is a virtual table based on the result of a SQL query. It doesn't store data itself but displays data from one or more tables.

### 50. What are the advantages of Views?

- Simplify complex queries
- Provide security by restricting access to specific data
- Present data in different formats
- Maintain logical data independence

## Transactions and Concurrency

### 51. What is a Transaction?

A transaction is a sequence of database operations that are treated as a single unit of work, which either completes entirely or not at all.

**Example:**

```sql
-- Bank transfer transaction
START TRANSACTION;

-- Deduct from Account A
UPDATE accounts SET balance = balance - 500 WHERE account_id = 1;

-- Add to Account B
UPDATE accounts SET balance = balance + 500 WHERE account_id = 2;

-- If both succeed
COMMIT;

-- If any fails
ROLLBACK;
```

**Real-world Example:**

```sql
BEGIN TRANSACTION;

    -- Step 1: Create order
    INSERT INTO orders (customer_id, total) VALUES (101, 250.00);
    SET @order_id = LAST_INSERT_ID();

    -- Step 2: Add order items
    INSERT INTO order_items (order_id, product_id, quantity)
    VALUES (@order_id, 5, 2);

    -- Step 3: Update inventory
    UPDATE products SET stock = stock - 2 WHERE product_id = 5;

    -- Step 4: Check if stock went negative
    IF (SELECT stock FROM products WHERE product_id = 5) < 0 THEN
        ROLLBACK;
    ELSE
        COMMIT;
    END IF;
```

**Follow-up Questions:**

- What happens if a transaction is not committed?
- Can you have nested transactions?

### 52. What are ACID properties?

- Atomicity: All or nothing execution
- Consistency: Database remains in valid state
- Isolation: Concurrent transactions don't interfere
- Durability: Committed changes are permanent

**Visual Representation:**

```
ACID Properties:

┌─────────────────────────────────────────────────────────┐
│  A - Atomicity: All operations succeed or all fail      │
│     ┌────┐  ┌────┐  ┌────┐                              │
│     │ Op1│→ │ Op2│→ │ Op3│  →  All or Nothing           │
│     └────┘  └────┘  └────┘                              │
├─────────────────────────────────────────────────────────┤
│  C - Consistency: Valid state before & after            │
│     State A [Valid] → Transaction → State B [Valid]     │
├─────────────────────────────────────────────────────────┤
│  I - Isolation: Transactions don't interfere            │
│     Transaction 1  ║  Transaction 2                     │
│          ↓         ║        ↓                           │
│       Independent  ║  Independent                       │
├─────────────────────────────────────────────────────────┤
│  D - Durability: Committed changes permanent            │
│     COMMIT → [Saved to Disk] → Survives crashes        │
└─────────────────────────────────────────────────────────┘
```

**Example Scenarios:**

```sql
-- Atomicity Example: Either both updates happen or neither
BEGIN TRANSACTION;
    UPDATE accounts SET balance = balance - 100 WHERE id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;  -- Both succeed or both fail

-- Consistency Example: Constraints are maintained
BEGIN TRANSACTION;
    INSERT INTO orders VALUES (1, 999);  -- customer_id 999 doesn't exist
    -- Foreign key violation! Transaction fails, consistency maintained
ROLLBACK;

-- Isolation Example: Transactions don't see each other's uncommitted changes
-- Transaction 1:           Transaction 2:
BEGIN;                      BEGIN;
UPDATE balance = 1000       SELECT balance  -- Sees old value
WHERE id = 1;              WHERE id = 1;
COMMIT;                     -- Now sees new value
                           COMMIT;

-- Durability Example: After commit, data survives system crash
COMMIT;  -- Data written to disk, safe even if system crashes
```

**Follow-up Questions:**

- Which ACID property prevents dirty reads?
- Can you sacrifice any ACID properties for performance?

### 53. What is Atomicity?

Atomicity ensures that a transaction is treated as a single unit, which either succeeds completely or fails completely.

### 54. What is Consistency?

Consistency ensures that a transaction brings the database from one valid state to another, maintaining all defined rules and constraints.

### 55. What is Isolation?

Isolation ensures that concurrent transactions execute independently without interfering with each other.

### 56. What is Durability?

Durability ensures that once a transaction is committed, its changes are permanent, even in case of system failure.

### 57. What are Transaction States?

- Active: Initial state during execution
- Partially Committed: After final statement execution
- Committed: After successful completion
- Failed: When transaction cannot proceed
- Aborted: After rollback

### 58. What is Concurrency Control?

Concurrency control manages simultaneous operations on the database without conflicts, ensuring data consistency.

### 59. What are the problems of Concurrent Transactions?

- Dirty Read: Reading uncommitted data
- Non-repeatable Read: Different values on re-reading
- Phantom Read: New rows appearing in re-query
- Lost Update: One transaction overwrites another's changes

**Visual Examples:**

**1. Dirty Read:**

```
Time  Transaction 1                Transaction 2
─────────────────────────────────────────────────
T1    UPDATE balance = 1000
T2    (uncommitted)                READ balance  ← Reads 1000 (dirty!)
T3    ROLLBACK  (undo)
T4                                 Uses wrong value!
```

**2. Non-Repeatable Read:**

```
Time  Transaction 1                Transaction 2
─────────────────────────────────────────────────
T1    READ balance → 500
T2                                 UPDATE balance = 1000
T3                                 COMMIT
T4    READ balance → 1000          (Different value!)
```

**3. Phantom Read:**

```
Time  Transaction 1                Transaction 2
─────────────────────────────────────────────────
T1    SELECT COUNT(*) → 10
T2                                 INSERT new row
T3                                 COMMIT
T4    SELECT COUNT(*) → 11         (New phantom row!)
```

**4. Lost Update:**

```
Time  Transaction 1                Transaction 2
─────────────────────────────────────────────────
T1    READ balance = 500
T2                                 READ balance = 500
T3    UPDATE balance = 600
T4    COMMIT
T5                                 UPDATE balance = 700
T6                                 COMMIT  ← T1's update lost!
```

**SQL Examples:**

```sql
-- Dirty Read Prevention: Use READ COMMITTED
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION;
    SELECT balance FROM accounts WHERE id = 1;
    -- Only sees committed data
COMMIT;

-- Non-Repeatable Read Prevention: Use REPEATABLE READ
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
BEGIN TRANSACTION;
    SELECT balance FROM accounts WHERE id = 1;  -- 500
    -- Other transactions can't modify this row
    SELECT balance FROM accounts WHERE id = 1;  -- Still 500
COMMIT;

-- Phantom Read Prevention: Use SERIALIZABLE
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN TRANSACTION;
    SELECT COUNT(*) FROM orders WHERE status = 'pending';  -- 10
    -- Other transactions can't insert/delete matching rows
    SELECT COUNT(*) FROM orders WHERE status = 'pending';  -- Still 10
COMMIT;
```

**Follow-up Questions:**

- Which isolation level prevents which problem?
- How do locks solve these concurrency issues?

### 60. What is a Lock?

A lock is a mechanism to control concurrent access to data, preventing conflicts when multiple transactions access the same data.

### 61. What are the types of Locks?

- Shared Lock (S): Multiple transactions can read
- Exclusive Lock (X): Only one transaction can write
- Intent Lock: Indicates intention to acquire locks at finer granularity

### 62. What is Deadlock?

A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a circular dependency.

### 63. How can Deadlocks be prevented?

- Lock timeout
- Deadlock detection and resolution
- Ordering resources consistently
- Using lower isolation levels

### 64. What are Isolation Levels?

- Read Uncommitted: Lowest isolation, allows dirty reads
- Read Committed: Prevents dirty reads
- Repeatable Read: Prevents dirty and non-repeatable reads
- Serializable: Highest isolation, prevents all anomalies

### 65. What is Two-Phase Locking (2PL)?

2PL is a concurrency control protocol with two phases: growing phase (acquiring locks) and shrinking phase (releasing locks).

## Advanced Concepts

### 66. What is a Stored Procedure?

A stored procedure is a prepared SQL code that can be saved and reused, accepting parameters and containing control-flow logic.

**Example:**

```sql
-- Create a stored procedure (MySQL/SQL Server)
DELIMITER //
CREATE PROCEDURE GetEmployeesByDepartment(IN dept_name VARCHAR(50))
BEGIN
    SELECT emp_id, name, salary
    FROM employees
    WHERE department = dept_name
    ORDER BY salary DESC;
END //
DELIMITER ;

-- Call the stored procedure
CALL GetEmployeesByDepartment('IT');

-- Stored procedure with OUT parameter
DELIMITER //
CREATE PROCEDURE GetDepartmentStats(
    IN dept_name VARCHAR(50),
    OUT emp_count INT,
    OUT avg_salary DECIMAL(10,2)
)
BEGIN
    SELECT COUNT(*), AVG(salary)
    INTO emp_count, avg_salary
    FROM employees
    WHERE department = dept_name;
END //
DELIMITER ;

-- Call with OUT parameters
CALL GetDepartmentStats('IT', @count, @avg_sal);
SELECT @count AS EmployeeCount, @avg_sal AS AverageSalary;

-- Stored procedure with conditional logic
DELIMITER //
CREATE PROCEDURE GiveSalaryRaise(IN emp_id INT, IN raise_pct DECIMAL(5,2))
BEGIN
    DECLARE current_sal DECIMAL(10,2);

    SELECT salary INTO current_sal
    FROM employees
    WHERE employee_id = emp_id;

    IF current_sal < 100000 THEN
        UPDATE employees
        SET salary = salary * (1 + raise_pct/100)
        WHERE employee_id = emp_id;
        SELECT 'Raise applied' AS result;
    ELSE
        SELECT 'Salary already at maximum' AS result;
    END IF;
END //
DELIMITER ;
```

**Follow-up Questions:**

- What's the difference between a stored procedure and a function?
- How do stored procedures improve security?

### 67. What are the advantages of Stored Procedures?

- Improved performance (pre-compiled)
- Reduced network traffic
- Reusability
- Enhanced security
- Centralized business logic

### 68. What is a Trigger?

A trigger is a stored procedure that automatically executes in response to specific events (INSERT, UPDATE, DELETE) on a table.

**Example:**

```sql
-- AFTER INSERT Trigger: Audit log
DELIMITER //
CREATE TRIGGER audit_employee_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (action, table_name, record_id, timestamp)
    VALUES ('INSERT', 'employees', NEW.emp_id, NOW());
END //
DELIMITER ;

-- BEFORE UPDATE Trigger: Validate salary
DELIMITER //
CREATE TRIGGER validate_salary_update
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary < OLD.salary THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Salary cannot be decreased';
    END IF;

    -- Auto-update modified timestamp
    SET NEW.updated_at = NOW();
END //
DELIMITER ;

-- AFTER DELETE Trigger: Archive deleted records
DELIMITER //
CREATE TRIGGER archive_deleted_employee
AFTER DELETE ON employees
FOR EACH ROW
BEGIN
    INSERT INTO employees_archive
    VALUES (OLD.emp_id, OLD.name, OLD.salary, OLD.department, NOW());
END //
DELIMITER ;

-- Trigger to maintain calculated field
DELIMITER //
CREATE TRIGGER update_order_total
BEFORE INSERT ON order_items
FOR EACH ROW
BEGIN
    UPDATE orders
    SET total = total + (NEW.quantity * NEW.unit_price)
    WHERE order_id = NEW.order_id;
END //
DELIMITER ;
```

**Real-world Use Cases:**

```sql
-- 1. Enforce business rules
CREATE TRIGGER check_stock_before_order
BEFORE INSERT ON order_items
FOR EACH ROW
BEGIN
    DECLARE available_stock INT;
    SELECT stock INTO available_stock
    FROM products WHERE product_id = NEW.product_id;

    IF available_stock < NEW.quantity THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient stock';
    END IF;
END;

-- 2. Maintain derived data
CREATE TRIGGER update_department_count
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
    UPDATE departments
    SET employee_count = employee_count + 1
    WHERE dept_id = NEW.dept_id;
END;
```

**Follow-up Questions:**

- Can triggers call other triggers?
- What are the performance implications of triggers?
- How do you debug triggers?

### 69. What are the types of Triggers?

- BEFORE Trigger: Executes before the event
- AFTER Trigger: Executes after the event
- INSTEAD OF Trigger: Executes instead of the event

### 70. What is a Cursor?

A cursor is a database object used to retrieve, manipulate, and navigate through a result set row by row.

### 71. What is the difference between Function and Stored Procedure?

Functions must return a value and can be used in SELECT statements; procedures may not return a value and cannot be used in SELECT statements.

### 72. What is a Materialized View?

A materialized view is a database object that stores the result of a query physically, unlike regular views which are virtual.

### 73. What is Partitioning?

Partitioning divides a large table into smaller, more manageable pieces while maintaining the logical table structure.

### 74. What are the types of Partitioning?

- Range Partitioning: Based on value ranges
- List Partitioning: Based on discrete values
- Hash Partitioning: Based on hash function
- Composite Partitioning: Combination of methods

### 75. What is Sharding?

Sharding is a database architecture pattern that horizontally partitions data across multiple database instances.

### 76. What is Replication?

Replication is the process of copying and maintaining database objects in multiple databases to improve availability and performance.

### 77. What are the types of Replication?

- Snapshot Replication: Periodic full copy
- Transactional Replication: Real-time changes
- Merge Replication: Bidirectional synchronization

### 78. What is a Data Warehouse?

A data warehouse is a centralized repository that stores integrated data from multiple sources for analysis and reporting.

### 79. What is OLTP?

OLTP (Online Transaction Processing) systems handle day-to-day transactional operations with emphasis on fast query processing and data integrity.

### 80. What is OLAP?

OLAP (Online Analytical Processing) systems handle complex queries and analysis on large volumes of historical data.

## Database Design

### 81. What is ER Model?

The Entity-Relationship model is a conceptual data model that represents the structure of a database using entities, attributes, and relationships.

**ER Diagram Components:**

```
┌─────────────────────────────────────────────────────┐
│  ENTITY (Rectangle)                                  │
│  ┌───────────┐                                       │
│  │  Student  │  - Represents a real-world object    │
│  └───────────┘                                       │
│                                                      │
│  ATTRIBUTE (Oval)                                    │
│       ○  - Descriptive properties                    │
│      Name                                            │
│                                                      │
│  RELATIONSHIP (Diamond)                              │
│      ◇  - Associations between entities              │
│   Enrolls                                            │
│                                                      │
│  PRIMARY KEY (Underlined)                            │
│     Student_ID                                       │
└─────────────────────────────────────────────────────┘
```

**Complete ER Diagram Example:**

```
     ┌───────────┐
     │  STUDENT  │
     └─────┬─────┘
           │ * (many)
     ┌─────▼─────┐
     │  Enrolls  │ (Relationship)
     └─────┬─────┘
           │ * (many)
     ┌─────▼─────┐
     │  COURSE   │
     └───────────┘

Attributes:
STUDENT: student_id (PK), name, email, dob
COURSE:  course_id (PK), title, credits
Enrolls: grade, enrollment_date
```

**SQL Implementation:**

```sql
-- Entities as Tables
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    dob DATE
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    title VARCHAR(100),
    credits INT
);

-- Relationship as Table (Many-to-Many)
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    grade VARCHAR(2),
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
```

**Follow-up Questions:**

- How do you convert an ER diagram to relational tables?
- What's the difference between a strong entity and a weak entity in ER diagrams?

### 82. What is Cardinality?

Cardinality defines the number of occurrences of one entity related to occurrences of another entity (one-to-one, one-to-many, many-to-many).

**Visual Representation:**

**1. One-to-One (1:1):**

```
  ┌─────────┐       1       ┌─────────┐
  │ PERSON  │───────────────│ PASSPORT│
  └─────────┘               └─────────┘
  One person has one passport
```

**SQL Example:**

```sql
CREATE TABLE persons (
    person_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE passports (
    passport_id INT PRIMARY KEY,
    person_id INT UNIQUE,  -- UNIQUE ensures 1:1
    passport_number VARCHAR(20),
    FOREIGN KEY (person_id) REFERENCES persons(person_id)
);
```

**2. One-to-Many (1:N):**

```
  ┌────────────┐     1     ∞     ┌──────────┐
  │ DEPARTMENT │───────────────→│ EMPLOYEE │
  └────────────┘                 └──────────┘
  One department has many employees
```

**SQL Example:**

```sql
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100)
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    dept_id INT,  -- Foreign key, many employees per department
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);
```

**3. Many-to-Many (M:N):**

```
  ┌─────────┐     ∞           ∞     ┌─────────┐
  │ STUDENT │←──────────────────────→│ COURSE  │
  └─────────┘                        └─────────┘
         ↓                               ↑
         └────────→ ┌──────────┐ ←──────┘
                    │ Enrolls  │  (Bridge Table)
                    └──────────┘
  Many students enroll in many courses
```

**SQL Example:**

```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    title VARCHAR(100)
);

-- Bridge/Junction table for M:N relationship
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
```

**Follow-up Questions:**

- How do you implement a many-to-many relationship?
- Can you have a relationship with a cardinality of 0:N?

### 83. What is a Weak Entity?

A weak entity is an entity that cannot be uniquely identified by its own attributes and depends on a strong entity for identification.

**Visual Representation:**

```
  ┌──────────┐     1      ∞   ╔══════════╗
  │ EMPLOYEE │═══════════════║ DEPENDENT║ (Weak Entity - double box)
  │ (Strong) │                ╚══════════╝
  └──────────┘
  PK: emp_id               Partial Key: dependent_name
                          Full Key: emp_id + dependent_name
```

**Example:**

```
Employee (Strong Entity):
- emp_id (Primary Key)
- name, salary

Dependent (Weak Entity):
- dependent_name (Partial Key)
- relationship, dob
- Depends on Employee for full identification
```

**SQL Implementation:**

```sql
-- Strong Entity
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10,2)
);

-- Weak Entity
CREATE TABLE dependents (
    emp_id INT,              -- Foreign key (identifying relationship)
    dependent_name VARCHAR(100),  -- Partial key
    relationship VARCHAR(50),
    dob DATE,
    PRIMARY KEY (emp_id, dependent_name),  -- Composite key
    FOREIGN KEY (emp_id) REFERENCES employees(emp_id)
        ON DELETE CASCADE  -- If employee deleted, dependents also deleted
);
```

**Real-world Examples:**

- Order → Order Items (Order Item depends on Order)
- Building → Apartments (Apartment depends on Building)
- Course → Course Sections (Section depends on Course)

**Follow-up Questions:**

- What happens to weak entities when the strong entity is deleted?
- Can a weak entity exist without a strong entity?

### 84. What is an Aggregation?

Aggregation is an abstraction where a relationship is treated as an entity, allowing relationships between relationships.

### 85. What is Generalization?

Generalization is a bottom-up approach where multiple entities are combined into a higher-level entity based on common attributes.

### 86. What is Specialization?

Specialization is a top-down approach where an entity is divided into sub-entities based on distinguishing characteristics.

### 87. What is the difference between Generalization and Specialization?

Generalization combines similar entities into a superclass; specialization divides an entity into subclasses.

### 88. What is a Relationship?

A relationship is an association between two or more entities that represents how they interact or are connected.

### 89. What are the types of Relationships?

- One-to-One (1:1)
- One-to-Many (1:N)
- Many-to-Many (M:N)

### 90. What is Participation Constraint?

Participation constraint specifies whether all entities must participate in a relationship (total participation) or not (partial participation).

## NoSQL and Modern Databases

### 91. What is NoSQL?

NoSQL databases are non-relational databases designed for distributed data storage, offering flexible schemas and horizontal scalability.

### 92. What are the types of NoSQL databases?

- Document databases (MongoDB)
- Key-Value stores (Redis)
- Column-family stores (Cassandra)
- Graph databases (Neo4j)

### 93. What is CAP Theorem?

CAP theorem states that a distributed system can provide only two of three guarantees: Consistency, Availability, and Partition tolerance.

**Visual Representation:**

```
                    CAP Theorem

                   ┌─────────────┐
                   │ Consistency │
                   └──────┬──────┘
                         /│\
                        / │ \
                       /  │  \
                      /   │   \
                     /    │    \
           ┌────────┴─┐  │  ┌──┴──────────┐
           │Available │  │  │ Partition   │
           │          │  │  │ Tolerant    │
           └──────────┘  │  └─────────────┘
                         │
             Choose Only 2 of 3
```

**Three Guarantees:**

**1. Consistency (C):**

- All nodes see the same data at the same time
- Every read receives the most recent write

**2. Availability (A):**

- Every request receives a response (success or failure)
- System remains operational even if some nodes fail

**3. Partition Tolerance (P):**

- System continues to operate despite network partitions
- Communication breakage between nodes doesn't stop the system

**Possible Combinations:**

```
┌─────────────────────────────────────────────────────────┐
│  CA (Consistency + Availability)                        │
│  - Traditional RDBMS (MySQL, PostgreSQL)                │
│  - Works when no network partition                      │
│  - Example: Single-server database                      │
├─────────────────────────────────────────────────────────┤
│  CP (Consistency + Partition Tolerance)                 │
│  - MongoDB, HBase, Redis                                │
│  - Sacrifices availability during partition             │
│  - Better for: Banking, financial systems               │
├─────────────────────────────────────────────────────────┤
│  AP (Availability + Partition Tolerance)                │
│  - Cassandra, DynamoDB, CouchDB                         │
│  - Sacrifices consistency (eventual consistency)        │
│  - Better for: Social media, real-time feeds            │
└─────────────────────────────────────────────────────────┘
```

**Real-world Example:**

```
Scenario: Banking System with 2 Data Centers

Network Partition Occurs:
DC1 (New York)    │    DC2 (London)
    ↓             │        ↓
Can't communicate │

CP System (MongoDB):
- Blocks writes to maintain consistency
- Some users can't access accounts
- Prevents overdrafts

AP System (Cassandra):
- Both allow writes
- Temporary inconsistency
- Risk of overdrafts
```

**Example Scenario:**

```sql
-- User has $1000 balance
-- Network partition occurs
-- User withdraws $600 in NY and $600 in London simultaneously

-- CP System:
-- One operation blocked → Consistency maintained
-- Final balance: $400 (correct)

-- AP System:
-- Both operations succeed → Temporary inconsistency
-- Final balance after sync: $400 or -$200? (needs conflict resolution)
```

**Follow-up Questions:**

- Why can't we have all three guarantees?
- In modern distributed systems, which property is usually sacrificed?
- How does eventual consistency relate to CAP?

### 94. What is BASE in NoSQL?

BASE stands for Basically Available, Soft state, Eventually consistent - an alternative to ACID for distributed systems.

### 95. What is Eventual Consistency?

Eventual consistency is a consistency model where updates propagate through the system and all replicas eventually become consistent.

### 96. What is a Document Database?

A document database stores data in document format (JSON, BSON, XML), allowing flexible and nested data structures.

### 97. What is a Graph Database?

A graph database uses graph structures with nodes, edges, and properties to represent and store data, optimized for relationship queries.

### 98. What is Database Scaling?

Database scaling is the process of increasing database capacity to handle more load, either vertically (more powerful hardware) or horizontally (more servers).

### 99. What is the difference between Vertical and Horizontal Scaling?

Vertical scaling adds more resources to a single server; horizontal scaling adds more servers to distribute the load.

### 100. What is a Connection Pool?

A connection pool is a cache of database connections maintained to improve performance by reusing connections rather than creating new ones for each request.

**Visual Representation:**

```
Without Connection Pool:          With Connection Pool:
Request 1 → New Connection        Request 1 ──┐
Request 2 → New Connection        Request 2 ──┼─→ ┌──────────────┐
Request 3 → New Connection        Request 3 ──┘   │ Connection   │
(Expensive overhead)                              │ Pool (Cache) │
                                                  └──────────────┘
                                                  (Reuse connections)
```

**Example (Java):**

```java
// Configure connection pool
HikariConfig config = new HikariConfig();
config.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
config.setUsername("user");
config.setPassword("pass");
config.setMaximumPoolSize(10);      // Max 10 connections
config.setMinimumIdle(2);           // Min 2 idle connections
config.setConnectionTimeout(30000); // 30 seconds

HikariDataSource dataSource = new HikariDataSource(config);

// Use connection from pool
try (Connection conn = dataSource.getConnection()) {
    // Execute queries
    // Connection automatically returned to pool
}
```

**Benefits:**

- Reduced connection creation overhead
- Better resource management
- Improved application performance
- Controlled database load

**Follow-up Questions:**

- What happens when the pool is exhausted?
- How do you determine the optimal pool size?

---

## Quick Reference Guide

### SQL Command Categories

```
DDL (Data Definition)  | DML (Data Manipulation) | DCL (Data Control) | TCL (Transaction)
-----------------------|-------------------------|--------------------|-----------------
CREATE                 | SELECT                  | GRANT              | COMMIT
ALTER                  | INSERT                  | REVOKE             | ROLLBACK
DROP                   | UPDATE                  |                    | SAVEPOINT
TRUNCATE               | DELETE                  |                    |
```

### JOIN Types Quick Reference

```
INNER JOIN: A ∩ B (matching only)
LEFT JOIN:  A + (A ∩ B)
RIGHT JOIN: B + (A ∩ B)
FULL JOIN:  A ∪ B (all records)
CROSS JOIN: A × B (Cartesian product)
```

### Normal Forms Checklist

```
1NF: ✓ Atomic values
2NF: ✓ 1NF + No partial dependency
3NF: ✓ 2NF + No transitive dependency
BCNF: ✓ 3NF + Every determinant is a candidate key
```

### ACID vs BASE

```
ACID (RDBMS)              BASE (NoSQL)
------------------------  ------------------------
Atomicity                 Basically Available
Consistency               Soft state
Isolation                 Eventually consistent
Durability
```

### Isolation Levels

```
Level              | Dirty Read | Non-Repeatable | Phantom Read
-------------------|------------|----------------|-------------
READ UNCOMMITTED   | Yes        | Yes            | Yes
READ COMMITTED     | No         | Yes            | Yes
REPEATABLE READ    | No         | No             | Yes
SERIALIZABLE       | No         | No             | No
```

### Index Types

```
Clustered: Physical order of data (1 per table)
Non-Clustered: Separate structure with pointers
Unique: Enforces uniqueness
Composite: Multiple columns
Full-text: Text search optimization
```

### Constraints Summary

```
PRIMARY KEY:  Unique identifier, NOT NULL
FOREIGN KEY:  References another table
UNIQUE:       All values different (allows 1 NULL)
NOT NULL:     Must have value
CHECK:        Custom validation rule
DEFAULT:      Default value if not specified
```

### CAP Theorem

```
CA: Traditional RDBMS (MySQL, PostgreSQL)
CP: MongoDB, HBase, Redis
AP: Cassandra, DynamoDB, CouchDB
```

### Performance Optimization Checklist

```
✓ Use indexes on WHERE, JOIN, ORDER BY columns
✓ Avoid SELECT *, specify needed columns
✓ Use EXPLAIN to analyze queries
✓ Minimize subqueries in SELECT
✓ Use JOINs instead of subqueries when possible
✓ Partition large tables
✓ Use appropriate data types
✓ Batch operations when possible
✓ Regular maintenance (VACUUM, OPTIMIZE)
✓ Monitor slow queries
```

### Common Interview Patterns

```
Find Nth highest salary:
SELECT DISTINCT salary FROM employees
ORDER BY salary DESC LIMIT 1 OFFSET N-1;

Find duplicates:
SELECT column, COUNT(*)
FROM table
GROUP BY column
HAVING COUNT(*) > 1;

Delete duplicates (keep one):
DELETE e1 FROM employees e1
INNER JOIN employees e2
WHERE e1.id > e2.id AND e1.email = e2.email;

Running total:
SELECT date, amount,
SUM(amount) OVER (ORDER BY date) as running_total
FROM sales;
```

---

## Tips for Interview Success

### Before the Interview:

1. Understand the difference between theoretical concepts and practical implementation
2. Practice writing SQL queries by hand
3. Know when to use which type of JOIN
4. Understand indexing trade-offs
5. Be familiar with your DBMS-specific syntax

### During the Interview:

1. Clarify requirements before writing queries
2. Think about edge cases (NULL values, duplicates)
3. Consider performance implications
4. Explain your thought process
5. Be ready to optimize your initial solution

### Common Topics to Prepare:

- SQL query writing (JOINs, subqueries, aggregates)
- Normalization and denormalization
- Indexing strategies
- Transaction management and ACID properties
- Query optimization
- Database design (ER diagrams)
- Differences between RDBMS and NoSQL
- Concurrency control
- Stored procedures and triggers

### Red Flags to Avoid:

- ❌ Using SELECT \* in production
- ❌ Not understanding the difference between WHERE and HAVING
- ❌ Forgetting about NULL handling
- ❌ Over-indexing or under-indexing
- ❌ Not considering transaction boundaries
- ❌ Ignoring data types and constraints
- ❌ Not knowing when to denormalize

---

**Good luck with your interviews! 🎯**
