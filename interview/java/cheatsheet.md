# Java Quick Reference Cheat Sheet

> **Purpose:** Fast reference for Java syntax, concepts, and interview questions. Everything you need at a glance!

---

## 📋 Table of Contents

1. [Data Types & Variables](#data-types--variables)
2. [Operators](#operators)
3. [Control Flow](#control-flow)
4. [Arrays](#arrays)
5. [Strings](#strings)
6. [OOP Concepts](#oop-concepts)
7. [Collections Framework](#collections-framework)
8. [Exception Handling](#exception-handling)
9. [Java 8+ Features](#java-8-features)
10. [Multithreading](#multithreading)
11. [Common Algorithms](#common-algorithms)
12. [Interview Quick Answers](#interview-quick-answers)

---

## Data Types & Variables

### Primitive Types

| Type      | Size   | Range             | Default  | Wrapper   |
| --------- | ------ | ----------------- | -------- | --------- |
| `byte`    | 8 bit  | -128 to 127       | 0        | Byte      |
| `short`   | 16 bit | -32,768 to 32,767 | 0        | Short     |
| `int`     | 32 bit | -2³¹ to 2³¹-1     | 0        | Integer   |
| `long`    | 64 bit | -2⁶³ to 2⁶³-1     | 0L       | Long      |
| `float`   | 32 bit | ~±3.4e38          | 0.0f     | Float     |
| `double`  | 64 bit | ~±1.7e308         | 0.0d     | Double    |
| `char`    | 16 bit | 0 to 65,535       | '\u0000' | Character |
| `boolean` | 1 bit  | true/false        | false    | Boolean   |

### Variable Declaration

```java
// Declaration
int age;
String name;

// Initialization
int age = 25;
String name = "John";

// Multiple variables
int a = 1, b = 2, c = 3;

// Constants
final double PI = 3.14159;
final int MAX_SIZE = 100;

// Type inference (Java 10+)
var list = new ArrayList<String>();  // Inferred as ArrayList<String>
var name = "John";                   // Inferred as String
```

### Type Casting

```java
// Implicit (widening)
int i = 100;
long l = i;      // int to long
double d = l;    // long to double

// Explicit (narrowing)
double d = 100.5;
int i = (int) d;    // i = 100 (truncated)

// Object casting
Object obj = "Hello";
String str = (String) obj;

// Check before casting
if (obj instanceof String) {
    String str = (String) obj;
}

// Pattern matching (Java 16+)
if (obj instanceof String str) {
    System.out.println(str.toUpperCase());  // Auto-cast
}
```

---

## Operators

### Arithmetic Operators

```java
+  Addition         : a + b
-  Subtraction      : a - b
*  Multiplication   : a * b
/  Division         : a / b
%  Modulus          : a % b
++ Increment        : a++ or ++a
-- Decrement        : a-- or --a
```

### Comparison Operators

```java
==  Equal to        : a == b
!=  Not equal       : a != b
>   Greater than    : a > b
<   Less than       : a < b
>=  Greater or equal: a >= b
<=  Less or equal   : a <= b
```

### Logical Operators

```java
&&  AND  : (a > 5 && b < 10)
||  OR   : (a > 5 || b < 10)
!   NOT  : !(a > 5)
```

### Bitwise Operators

```java
&   AND  : a & b
|   OR   : a | b
^   XOR  : a ^ b
~   NOT  : ~a
<<  Left shift  : a << 2
>>  Right shift : a >> 2
>>> Unsigned right shift : a >>> 2
```

### Ternary Operator

```java
condition ? valueIfTrue : valueIfFalse

int max = (a > b) ? a : b;
String result = (score >= 60) ? "Pass" : "Fail";
```

---

## Control Flow

### If-Else

```java
if (condition) {
    // code
} else if (anotherCondition) {
    // code
} else {
    // code
}

// Short form
if (condition) statement;
```

### Switch Statement

```java
// Traditional switch
switch (variable) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}

// Switch expression (Java 12+)
String result = switch (day) {
    case "MON", "TUE", "WED", "THU", "FRI" -> "Weekday";
    case "SAT", "SUN" -> "Weekend";
    default -> "Invalid";
};
```

### Loops

```java
// For loop
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}

// Enhanced for (for-each)
for (String item : collection) {
    System.out.println(item);
}

// While loop
while (condition) {
    // code
}

// Do-while loop
do {
    // code
} while (condition);

// Break and continue
for (int i = 0; i < 10; i++) {
    if (i == 5) continue;  // Skip 5
    if (i == 8) break;     // Exit loop
    System.out.println(i);
}
```

---

## Arrays

### Declaration & Initialization

```java
// Declaration
int[] arr;
int arr[];  // Also valid but less common

// Initialization
int[] arr = new int[5];                    // [0, 0, 0, 0, 0]
int[] arr = {1, 2, 3, 4, 5};              // Array literal
int[] arr = new int[]{1, 2, 3, 4, 5};     // Also valid

// 2D Array
int[][] matrix = new int[3][4];
int[][] matrix = {{1, 2}, {3, 4}, {5, 6}};

// Jagged array
int[][] jagged = new int[3][];
jagged[0] = new int[2];
jagged[1] = new int[3];
```

### Common Operations

```java
// Length
int len = arr.length;

// Access
int first = arr[0];
int last = arr[arr.length - 1];

// Arrays utility methods
Arrays.sort(arr);                          // Sort
Arrays.binarySearch(arr, value);          // Binary search (sorted array)
Arrays.equals(arr1, arr2);                // Compare
Arrays.fill(arr, value);                  // Fill with value
Arrays.copyOf(arr, newLength);            // Copy array
Arrays.toString(arr);                     // Convert to string
Arrays.asList(arr);                       // Convert to List

// Streams (Java 8+)
int sum = Arrays.stream(arr).sum();
int max = Arrays.stream(arr).max().getAsInt();
double avg = Arrays.stream(arr).average().orElse(0.0);
```

---

## Strings

### Creation

```java
String s1 = "Hello";              // String literal (in string pool)
String s2 = new String("Hello");  // New object (not in pool)
String s3 = String.valueOf(123);  // Convert to string
```

### Common Methods

| Method                  | Description               | Example                       | Result          |
| ----------------------- | ------------------------- | ----------------------------- | --------------- |
| `length()`              | String length             | `"Hello".length()`            | `5`             |
| `charAt(i)`             | Character at index        | `"Hello".charAt(1)`           | `'e'`           |
| `substring(start, end)` | Extract substring         | `"Hello".substring(1, 4)`     | `"ell"`         |
| `toUpperCase()`         | Uppercase                 | `"hello".toUpperCase()`       | `"HELLO"`       |
| `toLowerCase()`         | Lowercase                 | `"HELLO".toLowerCase()`       | `"hello"`       |
| `trim()`                | Remove whitespace         | `" hi ".trim()`               | `"hi"`          |
| `replace(old, new)`     | Replace all               | `"hello".replace('l', 'r')`   | `"herro"`       |
| `split(regex)`          | Split to array            | `"a,b,c".split(",")`          | `["a","b","c"]` |
| `contains(str)`         | Check contains            | `"hello".contains("ell")`     | `true`          |
| `startsWith(str)`       | Check prefix              | `"hello".startsWith("he")`    | `true`          |
| `endsWith(str)`         | Check suffix              | `"hello".endsWith("lo")`      | `true`          |
| `equals(str)`           | Compare content           | `"hi".equals("hi")`           | `true`          |
| `equalsIgnoreCase(str)` | Ignore case               | `"Hi".equalsIgnoreCase("hi")` | `true`          |
| `indexOf(str)`          | Find position             | `"hello".indexOf("l")`        | `2`             |
| `isEmpty()`             | Check if empty            | `"".isEmpty()`                | `true`          |
| `isBlank()`             | Check if blank (Java 11+) | `"  ".isBlank()`              | `true`          |

### String vs StringBuilder vs StringBuffer

| Feature     | String             | StringBuilder                      | StringBuffer                      |
| ----------- | ------------------ | ---------------------------------- | --------------------------------- |
| Mutability  | Immutable          | Mutable                            | Mutable                           |
| Thread-safe | ✅ Yes             | ❌ No                              | ✅ Yes                            |
| Performance | Slow (creates new) | ⚡ Fast                            | 🐌 Slower (synchronized)          |
| Use when    | Few modifications  | Many modifications (single thread) | Many modifications (multi-thread) |

```java
// String (immutable)
String str = "Hello";
str = str + " World";  // Creates new String object

// StringBuilder (mutable, fast)
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");  // Modifies same object
sb.insert(0, "Say: ");
sb.reverse();
String result = sb.toString();

// StringBuffer (mutable, thread-safe)
StringBuffer sbf = new StringBuffer("Hello");
sbf.append(" World");
```

---

## OOP Concepts

### 4 Pillars of OOP

#### 1. Encapsulation

```java
class BankAccount {
    private double balance;  // Private field

    public double getBalance() {      // Getter
        return balance;
    }

    public void deposit(double amount) {  // Setter with validation
        if (amount > 0) {
            balance += amount;
        }
    }
}
```

#### 2. Inheritance

```java
class Animal {
    void eat() { System.out.println("Eating"); }
}

class Dog extends Animal {
    void bark() { System.out.println("Barking"); }
}

Dog dog = new Dog();
dog.eat();   // Inherited from Animal
dog.bark();  // Own method
```

#### 3. Polymorphism

```java
// Method Overloading (Compile-time polymorphism)
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}

// Method Overriding (Runtime polymorphism)
class Animal {
    void sound() { System.out.println("Animal sound"); }
}

class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }
}

Animal animal = new Dog();  // Upcasting
animal.sound();  // Outputs: "Bark" (runtime binding)
```

#### 4. Abstraction

```java
// Abstract class
abstract class Shape {
    abstract double area();  // Abstract method

    void display() {  // Concrete method
        System.out.println("Area: " + area());
    }
}

class Circle extends Shape {
    double radius;

    @Override
    double area() { return Math.PI * radius * radius; }
}

// Interface
interface Drawable {
    void draw();  // Implicitly public abstract
}

class Rectangle implements Drawable {
    @Override
    public void draw() { System.out.println("Drawing rectangle"); }
}
```

### Access Modifiers

| Modifier                | Same Class | Same Package | Subclass | Other Packages |
| ----------------------- | ---------- | ------------ | -------- | -------------- |
| `private`               | ✅         | ❌           | ❌       | ❌             |
| `default` (no modifier) | ✅         | ✅           | ❌       | ❌             |
| `protected`             | ✅         | ✅           | ✅       | ❌             |
| `public`                | ✅         | ✅           | ✅       | ✅             |

### Keywords

```java
static    // Class-level (not instance)
final     // Cannot be changed/extended/overridden
abstract  // Incomplete (must be extended/implemented)
this      // Current object reference
super     // Parent class reference
instanceof // Check object type
new       // Create object
extends   // Inherit from class
implements // Implement interface
```

---

## Collections Framework

### Collection Hierarchy

```
Collection (Interface)
├── List (Interface)
│   ├── ArrayList (Fast access, slow insert/delete)
│   ├── LinkedList (Fast insert/delete, slow access)
│   └── Vector (Thread-safe ArrayList)
├── Set (Interface)
│   ├── HashSet (No order, fast O(1))
│   ├── LinkedHashSet (Insertion order)
│   └── TreeSet (Sorted, O(log n))
└── Queue (Interface)
    ├── PriorityQueue (Min heap by default)
    └── ArrayDeque (Double-ended queue)

Map (Interface, not in Collection)
├── HashMap (No order, fast O(1))
├── LinkedHashMap (Insertion/access order)
├── TreeMap (Sorted by keys, O(log n))
└── Hashtable (Thread-safe HashMap)
```

### Quick Reference

| Collection    | Ordered | Sorted | Duplicates | Null     | Thread-Safe | Performance       |
| ------------- | ------- | ------ | ---------- | -------- | ----------- | ----------------- |
| ArrayList     | ✅      | ❌     | ✅         | ✅       | ❌          | O(1) access       |
| LinkedList    | ✅      | ❌     | ✅         | ✅       | ❌          | O(1) insert       |
| HashSet       | ❌      | ❌     | ❌         | ✅ (one) | ❌          | O(1) add/contains |
| LinkedHashSet | ✅      | ❌     | ❌         | ✅ (one) | ❌          | O(1) add/contains |
| TreeSet       | ✅      | ✅     | ❌         | ❌       | ❌          | O(log n)          |
| HashMap       | ❌      | ❌     | ❌ (keys)  | ✅ (one) | ❌          | O(1) get/put      |
| TreeMap       | ✅      | ✅     | ❌ (keys)  | ❌       | ❌          | O(log n)          |

### Common Operations

```java
// ArrayList
List<String> list = new ArrayList<>();
list.add("item");           // Add
list.get(0);                // Get by index
list.set(0, "new");         // Update
list.remove(0);             // Remove by index
list.size();                // Size
list.isEmpty();             // Check empty
list.contains("item");      // Check contains
list.clear();               // Remove all

// HashMap
Map<String, Integer> map = new HashMap<>();
map.put("key", 100);        // Add/Update
map.get("key");             // Get value
map.remove("key");          // Remove
map.containsKey("key");     // Check key exists
map.containsValue(100);     // Check value exists
map.keySet();               // Get all keys
map.values();               // Get all values
map.entrySet();             // Get key-value pairs
map.getOrDefault("key", 0); // Get or default

// HashSet
Set<String> set = new HashSet<>();
set.add("item");            // Add
set.remove("item");         // Remove
set.contains("item");       // Check
set.size();                 // Size

// Iteration
for (String item : list) { }
list.forEach(item -> System.out.println(item));
map.forEach((k, v) -> System.out.println(k + ": " + v));
```

---

## Exception Handling

### Exception Hierarchy

```
Throwable
├── Error (JVM errors - don't catch)
│   ├── OutOfMemoryError
│   └── StackOverflowError
└── Exception
    ├── RuntimeException (Unchecked)
    │   ├── NullPointerException
    │   ├── ArrayIndexOutOfBoundsException
    │   ├── ArithmeticException
    │   ├── IllegalArgumentException
    │   └── NumberFormatException
    └── IOException (Checked)
        ├── FileNotFoundException
        └── SQLException
```

### Try-Catch-Finally

```java
try {
    // Code that might throw exception
    int result = 10 / 0;
} catch (ArithmeticException e) {
    // Handle specific exception
    System.out.println("Cannot divide by zero");
} catch (Exception e) {
    // Handle any exception
    System.out.println("Error: " + e.getMessage());
} finally {
    // Always executes (cleanup code)
    System.out.println("Finally block");
}
```

### Try-with-Resources

```java
// Automatic resource management
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    String line = br.readLine();
} catch (IOException e) {
    e.printStackTrace();
}
// br.close() called automatically
```

### Throw vs Throws

```java
// throw: Explicitly throw exception
public void checkAge(int age) {
    if (age < 18) {
        throw new IllegalArgumentException("Must be 18+");
    }
}

// throws: Declare method might throw
public void readFile() throws IOException {
    BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
}
```

### Custom Exception

```java
class InsufficientBalanceException extends Exception {
    public InsufficientBalanceException(String message) {
        super(message);
    }
}

// Usage
public void withdraw(double amount) throws InsufficientBalanceException {
    if (amount > balance) {
        throw new InsufficientBalanceException("Insufficient balance");
    }
    balance -= amount;
}
```

---

## Java 8+ Features

### Lambda Expressions

```java
// Syntax: (parameters) -> expression
// or (parameters) -> { statements; }

// No parameters
() -> System.out.println("Hello")

// One parameter (parentheses optional)
x -> x * x
(x) -> x * x

// Multiple parameters
(a, b) -> a + b
(a, b) -> {
    int sum = a + b;
    return sum;
}

// Examples
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.forEach(n -> System.out.println(n));

// Comparator
list.sort((a, b) -> a.compareTo(b));
list.sort(String::compareTo);  // Method reference
```

### Stream API

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter
numbers.stream()
       .filter(n -> n % 2 == 0)
       .forEach(System.out::println);  // 2, 4, 6, 8, 10

// Map
numbers.stream()
       .map(n -> n * n)
       .forEach(System.out::println);  // 1, 4, 9, 16, ...

// Reduce
int sum = numbers.stream()
                 .reduce(0, (a, b) -> a + b);

// Collect
List<Integer> evens = numbers.stream()
                            .filter(n -> n % 2 == 0)
                            .collect(Collectors.toList());

// Common operations
.filter(predicate)      // Filter elements
.map(function)          // Transform
.flatMap(function)      // Flatten nested streams
.distinct()             // Remove duplicates
.sorted()               // Sort
.limit(n)               // Take first n
.skip(n)                // Skip first n
.count()                // Count elements
.anyMatch(predicate)    // Any match?
.allMatch(predicate)    // All match?
.findFirst()            // First element
.max(comparator)        // Maximum
.min(comparator)        // Minimum
```

### Optional

```java
Optional<String> optional = Optional.of("value");
Optional<String> empty = Optional.empty();

// Check and get
if (optional.isPresent()) {
    String value = optional.get();
}

// Better way
optional.ifPresent(value -> System.out.println(value));

// Or else
String value = optional.orElse("default");
String value = optional.orElseGet(() -> "default");
String value = optional.orElseThrow(() -> new Exception());

// Map
Optional<Integer> length = optional.map(String::length);
```

### Method References

```java
// Static method reference
Function<String, Integer> parseInt = Integer::parseInt;

// Instance method reference
list.forEach(System.out::println);

// Constructor reference
Supplier<List<String>> listSupplier = ArrayList::new;
```

### Functional Interfaces

```java
// Predicate<T> - boolean test(T t)
Predicate<Integer> isEven = n -> n % 2 == 0;

// Function<T, R> - R apply(T t)
Function<String, Integer> stringLength = String::length;

// Consumer<T> - void accept(T t)
Consumer<String> printer = System.out::println;

// Supplier<T> - T get()
Supplier<Double> randomValue = Math::random;

// BiFunction<T, U, R> - R apply(T t, U u)
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
```

---

## Multithreading

### Creating Threads

```java
// Method 1: Extend Thread
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running");
    }
}
new MyThread().start();

// Method 2: Implement Runnable (preferred)
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread running");
    }
}
new Thread(new MyRunnable()).start();

// Method 3: Lambda
new Thread(() -> System.out.println("Thread running")).start();
```

### Thread Methods

```java
thread.start();          // Start thread
thread.run();            // Call run() directly (don't do this!)
thread.sleep(1000);      // Sleep for 1 second
thread.join();           // Wait for thread to complete
thread.interrupt();      // Interrupt thread
thread.isAlive();        // Check if running
thread.setPriority(n);   // Set priority (1-10)
Thread.currentThread();  // Get current thread
```

### Synchronization

```java
// Synchronized method
public synchronized void increment() {
    count++;
}

// Synchronized block
public void increment() {
    synchronized(this) {
        count++;
    }
}

// Wait and notify
synchronized(obj) {
    obj.wait();    // Release lock and wait
    obj.notify();  // Wake one waiting thread
    obj.notifyAll(); // Wake all waiting threads
}
```

### Concurrent Collections

```java
ConcurrentHashMap<K, V>   // Thread-safe HashMap
CopyOnWriteArrayList<E>   // Thread-safe ArrayList
BlockingQueue<E>          // Thread-safe queue
AtomicInteger             // Thread-safe integer
```

### ExecutorService

```java
ExecutorService executor = Executors.newFixedThreadPool(3);

// Submit task
executor.submit(() -> System.out.println("Task"));

// Shutdown
executor.shutdown();
executor.awaitTermination(1, TimeUnit.MINUTES);
```

---

## Common Algorithms

### Sorting Algorithms

| Algorithm      | Time (Avg) | Time (Worst) | Space    | Stable | Use Case                     |
| -------------- | ---------- | ------------ | -------- | ------ | ---------------------------- |
| Bubble Sort    | O(n²)      | O(n²)        | O(1)     | ✅     | Small data, teaching         |
| Selection Sort | O(n²)      | O(n²)        | O(1)     | ❌     | Small data                   |
| Insertion Sort | O(n²)      | O(n²)        | O(1)     | ✅     | Nearly sorted data           |
| Merge Sort     | O(n log n) | O(n log n)   | O(n)     | ✅     | Large data, stability needed |
| Quick Sort     | O(n log n) | O(n²)        | O(log n) | ❌     | General purpose, fastest     |
| Heap Sort      | O(n log n) | O(n log n)   | O(1)     | ❌     | Memory constrained           |

### Searching Algorithms

```java
// Linear Search - O(n)
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
}

// Binary Search - O(log n) - array must be sorted
int left = 0, right = arr.length - 1;
while (left <= right) {
    int mid = left + (right - left) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
}
```

### Common Patterns

```java
// Two Pointer
int left = 0, right = arr.length - 1;
while (left < right) {
    // Process
    left++;
    right--;
}

// Sliding Window
int start = 0, maxLen = 0;
for (int end = 0; end < arr.length; end++) {
    // Expand window
    while (/* condition violated */) {
        start++;  // Shrink window
    }
    maxLen = Math.max(maxLen, end - start + 1);
}

// HashMap for frequency
Map<Integer, Integer> freq = new HashMap<>();
for (int num : arr) {
    freq.put(num, freq.getOrDefault(num, 0) + 1);
}
```

---

## Interview Quick Answers

### 1. **== vs equals()?**

```java
String s1 = new String("Hello");
String s2 = new String("Hello");

s1 == s2           // false (different objects in memory)
s1.equals(s2)      // true (same content)

// For primitives, use ==
int a = 5, b = 5;
a == b             // true

// For objects, use equals()
Integer x = 128, y = 128;
x == y             // false (not cached, > 127)
x.equals(y)        // true (same value)
```

### 2. **String vs StringBuilder vs StringBuffer?**

| Feature     | String    | StringBuilder | StringBuffer |
| ----------- | --------- | ------------- | ------------ |
| Mutability  | Immutable | Mutable       | Mutable      |
| Thread-safe | Yes       | No            | Yes          |
| Performance | Slowest   | Fastest       | Moderate     |

### 3. **ArrayList vs LinkedList?**

| Operation    | ArrayList | LinkedList           |
| ------------ | --------- | -------------------- |
| Get by index | O(1) ⚡   | O(n) 🐌              |
| Add at end   | O(1) ⚡   | O(1) ⚡              |
| Add at start | O(n) 🐌   | O(1) ⚡              |
| Remove       | O(n) 🐌   | O(n) 🐌              |
| Memory       | Less      | More (node overhead) |

**Use ArrayList:** Random access, iteration  
**Use LinkedList:** Frequent insert/delete at ends

### 4. **HashMap vs TreeMap vs LinkedHashMap?**

| Feature     | HashMap     | TreeMap       | LinkedHashMap   |
| ----------- | ----------- | ------------- | --------------- |
| Order       | None        | Sorted (keys) | Insertion order |
| Null keys   | 1 allowed   | Not allowed   | 1 allowed       |
| Performance | O(1)        | O(log n)      | O(1)            |
| Use when    | Fast access | Sorted keys   | Order matters   |

### 5. **Checked vs Unchecked Exceptions?**

| Type               | Checked                   | Unchecked                                            |
| ------------------ | ------------------------- | ---------------------------------------------------- |
| Extends            | Exception                 | RuntimeException                                     |
| Compile-time check | ✅ Must handle            | ❌ Optional                                          |
| Examples           | IOException, SQLException | NullPointerException, ArrayIndexOutOfBoundsException |
| Purpose            | Recoverable               | Programming errors                                   |

```java
// Checked - must handle
public void readFile() throws IOException {  // Declare
    // or
    try {
        new FileReader("file.txt");
    } catch (IOException e) {  // Handle
        e.printStackTrace();
    }
}

// Unchecked - optional
public void process(String str) {
    str.length();  // Can throw NullPointerException, no need to catch
}
```

### 6. **final, finally, finalize?**

| Keyword      | Usage                   | Purpose                                 |
| ------------ | ----------------------- | --------------------------------------- |
| `final`      | Variable, method, class | Cannot modify/override/extend           |
| `finally`    | Try-catch block         | Always executes (cleanup)               |
| `finalize()` | Method                  | Called before GC (deprecated in Java 9) |

```java
final int MAX = 100;        // Cannot change
final void method() { }     // Cannot override
final class MyClass { }     // Cannot extend

try { } finally { }         // Always executes

@Override
protected void finalize() { }  // Before garbage collection (avoid using)
```

### 7. **Abstract Class vs Interface?**

| Feature          | Abstract Class      | Interface                             |
| ---------------- | ------------------- | ------------------------------------- |
| Methods          | Abstract + concrete | Abstract + default + static (Java 8+) |
| Variables        | Any                 | public static final only              |
| Inheritance      | Single              | Multiple                              |
| Constructor      | ✅ Yes              | ❌ No                                 |
| Access modifiers | Any                 | public only                           |
| When to use      | IS-A relationship   | CAN-DO ability                        |

```java
abstract class Animal {
    String name;
    abstract void sound();
    void eat() { }  // Concrete method
}

interface Flyable {
    void fly();  // Abstract
    default void glide() { }  // Default (Java 8+)
    static void info() { }    // Static (Java 8+)
}
```

### 8. **Static vs Non-static?**

```java
class Example {
    static int count = 0;        // Class variable (shared)
    int instanceVar = 0;         // Instance variable (per object)

    static void staticMethod() {
        // Can access only static members
        count++;
    }

    void instanceMethod() {
        // Can access both static and instance members
        count++;
        instanceVar++;
    }
}

Example.staticMethod();     // Call without object
Example e = new Example();
e.instanceMethod();         // Need object
```

### 9. **Shallow Copy vs Deep Copy?**

```java
// Shallow copy (copies references)
int[] arr1 = {1, 2, 3};
int[] arr2 = arr1;  // Both point to same array
arr2[0] = 10;       // Affects arr1 too!

// Deep copy (creates new copy)
int[] arr3 = arr1.clone();          // For arrays
int[] arr4 = Arrays.copyOf(arr1, arr1.length);

// For objects
class Person implements Cloneable {
    public Object clone() throws CloneNotSupportedException {
        return super.clone();  // Shallow clone
    }
}
```

### 10. **this vs super?**

```java
class Parent {
    int x = 10;
    void display() { System.out.println("Parent"); }
}

class Child extends Parent {
    int x = 20;

    void show() {
        System.out.println(this.x);   // 20 (current class)
        System.out.println(super.x);  // 10 (parent class)

        this.display();   // Calls Child's display() if overridden
        super.display();  // Calls Parent's display()
    }
}
```

---

## Important Concepts

### Immutability

```java
// Immutable class
public final class ImmutablePerson {
    private final String name;
    private final int age;

    public ImmutablePerson(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }

    // No setters!
}

// Benefits: Thread-safe, cacheable, predictable
```

### Generics

```java
// Generic class
class Box<T> {
    private T value;
    public void set(T value) { this.value = value; }
    public T get() { return value; }
}

Box<Integer> intBox = new Box<>();
Box<String> strBox = new Box<>();

// Generic method
public <T> void printArray(T[] arr) {
    for (T element : arr) {
        System.out.println(element);
    }
}

// Bounded type
class NumberBox<T extends Number> {
    private T value;
}

// Wildcards
List<?> list;                    // Unknown type
List<? extends Number> list;     // Number or subclass
List<? super Integer> list;      // Integer or superclass
```

### Enum

```java
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

// With constructor and methods
enum Season {
    SPRING("Warm"), SUMMER("Hot"), FALL("Cool"), WINTER("Cold");

    private String description;

    Season(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}

// Usage
Day today = Day.MONDAY;
Season season = Season.SUMMER;
System.out.println(season.getDescription());  // "Hot"

// In switch
switch (today) {
    case MONDAY -> System.out.println("Start of week");
    case FRIDAY -> System.out.println("TGIF!");
    default -> System.out.println("Midweek");
}
```

---

## Common Mistakes to Avoid

### 1. NullPointerException

```java
// ❌ Bad
String str = null;
System.out.println(str.length());  // NullPointerException

// ✅ Good
if (str != null) {
    System.out.println(str.length());
}

// Or use Optional
Optional.ofNullable(str).ifPresent(s -> System.out.println(s.length()));
```

### 2. String Concatenation in Loops

```java
// ❌ Bad (creates many objects)
String result = "";
for (int i = 0; i < 1000; i++) {
    result += i;  // Inefficient!
}

// ✅ Good
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i);
}
String result = sb.toString();
```

### 3. Comparing Strings with ==

```java
// ❌ Bad
String s1 = new String("test");
String s2 = new String("test");
if (s1 == s2) { }  // false (different objects)

// ✅ Good
if (s1.equals(s2)) { }  // true (same content)
```

### 4. Integer Cache

```java
Integer a = 127, b = 127;
a == b;  // true (cached -128 to 127)

Integer x = 128, y = 128;
x == y;  // false (not cached)
x.equals(y);  // true (correct way)
```

### 5. Array Index Out of Bounds

```java
// ❌ Bad
int[] arr = {1, 2, 3};
System.out.println(arr[3]);  // Exception!

// ✅ Good
if (index >= 0 && index < arr.length) {
    System.out.println(arr[index]);
}
```

### 6. Not Closing Resources

```java
// ❌ Bad
FileReader reader = new FileReader("file.txt");
// Forgot to close - resource leak!

// ✅ Good (try-with-resources)
try (FileReader reader = new FileReader("file.txt")) {
    // Use reader
}  // Automatically closed
```

### 7. Modifying Collection While Iterating

```java
// ❌ Bad
for (String item : list) {
    list.remove(item);  // ConcurrentModificationException!
}

// ✅ Good
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    String item = it.next();
    it.remove();  // Safe
}

// Or use removeIf (Java 8+)
list.removeIf(item -> item.equals("remove"));
```

---

## Regular Expressions (Regex)

### Common Patterns

```java
\\d      // Digit [0-9]
\\w      // Word character [a-zA-Z0-9_]
\\s      // Whitespace
.        // Any character
^        // Start of string
$        // End of string
*        // 0 or more
+        // 1 or more
?        // 0 or 1
{n}      // Exactly n times
{n,m}    // Between n and m times
[abc]    // Any of a, b, or c
[^abc]   // Not a, b, or c
(a|b)    // a or b
```

### Examples

```java
String email = "test@example.com";
String phone = "123-456-7890";

// Email validation
boolean isEmail = email.matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$");

// Phone validation
boolean isPhone = phone.matches("\\d{3}-\\d{3}-\\d{4}");

// Extract all numbers
Pattern pattern = Pattern.compile("\\d+");
Matcher matcher = pattern.matcher("abc123def456");
while (matcher.find()) {
    System.out.println(matcher.group());  // 123, 456
}

// Replace
String cleaned = "Hello123World456".replaceAll("\\d", "");  // "HelloWorld"
```

---

## Date and Time API (java.time)

### Main Classes

```java
LocalDate      // Date without time (2024-11-15)
LocalTime      // Time without date (14:30:00)
LocalDateTime  // Date and time (2024-11-15T14:30:00)
ZonedDateTime  // Date, time, and timezone
Period         // Date-based duration (years, months, days)
Duration       // Time-based duration (hours, minutes, seconds)
```

### Common Operations

```java
// Current date/time
LocalDate today = LocalDate.now();
LocalTime now = LocalTime.now();
LocalDateTime dateTime = LocalDateTime.now();

// Create specific date
LocalDate date = LocalDate.of(2024, 12, 25);
LocalTime time = LocalTime.of(14, 30, 0);

// Parse from string
LocalDate parsed = LocalDate.parse("2024-12-25");

// Arithmetic
LocalDate tomorrow = today.plusDays(1);
LocalDate nextWeek = today.plusWeeks(1);
LocalDate lastMonth = today.minusMonths(1);

// Comparison
today.isBefore(tomorrow);
today.isAfter(yesterday);

// Formatting
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
String formatted = today.format(formatter);

// Calculate age
Period age = Period.between(birthDate, LocalDate.now());
int years = age.getYears();

// Days between
long days = ChronoUnit.DAYS.between(start, end);
```

---

## Object-Oriented Concepts Quick Reference

### Inheritance Types

```java
// Single inheritance
class Dog extends Animal { }

// Multilevel inheritance
class Animal { }
class Dog extends Animal { }
class Puppy extends Dog { }

// Hierarchical inheritance
class Animal { }
class Dog extends Animal { }
class Cat extends Animal { }

// Multiple inheritance (via interfaces only)
interface A { }
interface B { }
class C implements A, B { }
```

### Method Overloading vs Overriding

| Feature         | Overloading                            | Overriding                         |
| --------------- | -------------------------------------- | ---------------------------------- |
| Definition      | Same method name, different parameters | Same signature in parent and child |
| Occurs in       | Same class                             | Different classes (inheritance)    |
| Polymorphism    | Compile-time                           | Runtime                            |
| Return type     | Can be different                       | Must be same or covariant          |
| Access modifier | Any                                    | Same or less restrictive           |

```java
// Overloading
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}

// Overriding
class Parent {
    void display() { System.out.println("Parent"); }
}
class Child extends Parent {
    @Override
    void display() { System.out.println("Child"); }
}
```

---

## Design Patterns (Quick Reference)

### Singleton

```java
class Singleton {
    private static Singleton instance;
    private Singleton() { }

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

### Factory

```java
interface Vehicle { void create(); }
class Car implements Vehicle { public void create() { } }
class Bike implements Vehicle { public void create() { } }

class VehicleFactory {
    public static Vehicle getVehicle(String type) {
        return switch (type) {
            case "car" -> new Car();
            case "bike" -> new Bike();
            default -> throw new IllegalArgumentException();
        };
    }
}
```

### Builder

```java
class Computer {
    private String CPU;
    private String RAM;

    private Computer(Builder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
    }

    static class Builder {
        private String CPU;
        private String RAM;

        Builder setCPU(String CPU) { this.CPU = CPU; return this; }
        Builder setRAM(String RAM) { this.RAM = RAM; return this; }
        Computer build() { return new Computer(this); }
    }
}

// Usage
Computer pc = new Computer.Builder()
                .setCPU("Intel i9")
                .setRAM("32GB")
                .build();
```

### Observer

```java
interface Observer {
    void update(String message);
}

class Subject {
    private List<Observer> observers = new ArrayList<>();

    void attach(Observer obs) { observers.add(obs); }
    void notifyObservers(String msg) {
        observers.forEach(obs -> obs.update(msg));
    }
}
```

---

## Time Complexity Quick Reference

### Common Operations

```
O(1)        Constant      - Array access, HashMap get/put
O(log n)    Logarithmic   - Binary search, TreeMap operations
O(n)        Linear        - Linear search, single loop
O(n log n)  Linearithmic  - Merge sort, Quick sort (avg)
O(n²)       Quadratic     - Bubble sort, nested loops
O(2^n)      Exponential   - Fibonacci (recursive)
O(n!)       Factorial     - Permutations
```

### ArrayList Operations

```java
add(element)      // O(1) amortized
add(index, elem)  // O(n)
get(index)        // O(1)
remove(index)     // O(n)
contains(elem)    // O(n)
size()            // O(1)
```

### HashMap Operations

```java
put(key, value)   // O(1) average
get(key)          // O(1) average
remove(key)       // O(1) average
containsKey(key)  // O(1) average
containsValue(v)  // O(n)
```

---

## Input/Output

### Scanner (Input)

```java
Scanner sc = new Scanner(System.in);

int num = sc.nextInt();        // Read integer
double d = sc.nextDouble();    // Read double
String word = sc.next();       // Read word
String line = sc.nextLine();   // Read line
boolean b = sc.nextBoolean();  // Read boolean
char c = sc.next().charAt(0);  // Read character

// Check before reading
if (sc.hasNextInt()) {
    int num = sc.nextInt();
}

sc.close();  // Always close
```

**Common Pitfall:**

```java
int age = sc.nextInt();
sc.nextLine();  // Clear buffer before reading string!
String name = sc.nextLine();
```

### File I/O

```java
// Write to file
try (FileWriter writer = new FileWriter("file.txt")) {
    writer.write("Hello, World!");
} catch (IOException e) {
    e.printStackTrace();
}

// Read from file
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

---

## Quick Code Snippets

### Reverse an Array

```java
// Two pointer approach
int left = 0, right = arr.length - 1;
while (left < right) {
    int temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
}
```

### Check Palindrome

```java
// String
boolean isPalindrome = str.equals(new StringBuilder(str).reverse().toString());

// Number
int reversed = 0, original = num;
while (num != 0) {
    reversed = reversed * 10 + num % 10;
    num /= 10;
}
boolean isPalindrome = (original == reversed);
```

### Find Duplicates

```java
// Using HashSet
Set<Integer> seen = new HashSet<>();
Set<Integer> duplicates = new HashSet<>();
for (int num : arr) {
    if (!seen.add(num)) {
        duplicates.add(num);
    }
}
```

### Two Sum Problem

```java
Map<Integer, Integer> map = new HashMap<>();
for (int i = 0; i < arr.length; i++) {
    int complement = target - arr[i];
    if (map.containsKey(complement)) {
        return new int[]{map.get(complement), i};
    }
    map.put(arr[i], i);
}
```

### Fibonacci

```java
// Iterative O(n)
int a = 0, b = 1;
for (int i = 2; i < n; i++) {
    int next = a + b;
    a = b;
    b = next;
}

// Recursive O(2^n) - inefficient
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

// With memoization O(n)
int fibMemo(int n, int[] memo) {
    if (n <= 1) return n;
    if (memo[n] != 0) return memo[n];
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    return memo[n];
}
```

### Prime Number Check

```java
boolean isPrime(int n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;

    for (int i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}
```

---

## Modern Java Features (11+)

### Records (Java 14+)

```java
// Traditional way (verbose)
class Person {
    private final String name;
    private final int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getters, equals(), hashCode(), toString()...
}

// Record (concise)
record Person(String name, int age) { }

// Auto-generates: constructor, getters, equals(), hashCode(), toString()
Person p = new Person("John", 30);
System.out.println(p.name());  // Getter
```

### Text Blocks (Java 13+)

```java
// Old way
String json = "{\n" +
             "  \"name\": \"John\",\n" +
             "  \"age\": 30\n" +
             "}";

// New way (text blocks)
String json = """
    {
      "name": "John",
      "age": 30
    }
    """;
```

### Switch Expressions (Java 12+)

```java
// Old
String type;
switch (day) {
    case "MON":
    case "TUE":
        type = "Weekday";
        break;
    default:
        type = "Other";
}

// New
String type = switch (day) {
    case "MON", "TUE", "WED", "THU", "FRI" -> "Weekday";
    case "SAT", "SUN" -> "Weekend";
    default -> "Invalid";
};
```

### Pattern Matching (Java 16+)

```java
// Old
if (obj instanceof String) {
    String str = (String) obj;
    System.out.println(str.toUpperCase());
}

// New
if (obj instanceof String str) {
    System.out.println(str.toUpperCase());  // Auto-cast
}
```

---

## Memory Management

### Heap vs Stack

| Feature  | Stack                         | Heap                        |
| -------- | ----------------------------- | --------------------------- |
| Stores   | Method calls, local variables | Objects, instance variables |
| Size     | Smaller (MB)                  | Larger (GB)                 |
| Speed    | ⚡ Faster                     | 🐌 Slower                   |
| Lifetime | Method scope                  | Until GC                    |
| Thread   | Per thread                    | Shared                      |

### Garbage Collection

```java
// Suggest GC (doesn't guarantee)
System.gc();

// Object eligible for GC when:
// 1. No references to it
obj = null;

// 2. Reference reassigned
obj1 = obj2;

// 3. Object created inside method (after method ends)

// 4. Island of isolation
```

---

## Interview Coding Patterns

### 1. Two Pointer Technique

```java
// Use for: Arrays, palindromes, pair sums
int left = 0, right = arr.length - 1;
while (left < right) {
    // Process
    left++;
    right--;
}
```

### 2. Sliding Window

```java
// Use for: Subarray/substring problems
int start = 0, maxLen = 0;
for (int end = 0; end < arr.length; end++) {
    // Expand window
    while (/* condition violated */) {
        start++;  // Shrink window
    }
    maxLen = Math.max(maxLen, end - start + 1);
}
```

### 3. HashMap for O(1) Lookup

```java
// Use for: Frequency counting, pair sum, duplicates
Map<Key, Value> map = new HashMap<>();
for (element : collection) {
    map.put(key, map.getOrDefault(key, 0) + 1);
}
```

### 4. Binary Search

```java
// Use for: Sorted arrays
int left = 0, right = arr.length - 1;
while (left <= right) {
    int mid = left + (right - left) / 2;  // Avoid overflow
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
}
```

### 5. Recursion with Memoization

```java
// Use for: Fibonacci, DP problems
int[] memo = new int[n + 1];

int recursive(int n) {
    if (base_case) return value;
    if (memo[n] != 0) return memo[n];
    memo[n] = /* recursive calculation */;
    return memo[n];
}
```

---

## Quick Interview Prep

### Top 20 Most Asked Java Questions

1. ✅ **Reverse a string** - StringBuilder, loops, char array
2. ✅ **Check palindrome** - Two pointers, reverse and compare
3. ✅ **Fibonacci series** - Iterative O(n), recursive O(2^n), memoized O(n)
4. ✅ **Factorial** - Loop or recursion
5. ✅ **Prime number** - Check divisibility up to √n
6. ✅ **Two Sum** - HashMap for O(n)
7. ✅ **Anagram check** - Sort both strings, or frequency map
8. ✅ **Find duplicates** - HashSet
9. ✅ **Reverse array** - Two pointers
10. ✅ **Second largest** - Single pass tracking
11. ✅ **Missing number** - XOR or sum formula
12. ✅ **Armstrong number** - Sum of digits^power
13. ✅ **Count vowels** - Loop and check
14. ✅ **Binary search** - Must know!
15. ✅ **Merge sort** - Divide and conquer
16. ✅ **Bubble sort** - For concepts
17. ✅ **Singleton pattern** - Private constructor
18. ✅ **Thread creation** - Runnable vs Thread
19. ✅ **Custom exception** - Extend Exception
20. ✅ **Lambda expressions** - Functional interfaces

### Common Interview Scenarios

#### Find Second Largest in Array

```java
int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
for (int num : arr) {
    if (num > first) {
        second = first;
        first = num;
    } else if (num > second && num != first) {
        second = num;
    }
}
```

#### Remove Duplicates from Sorted Array

```java
int index = 1;
for (int i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i-1]) {
        arr[index++] = arr[i];
    }
}
return index;  // New length
```

#### Kadane's Algorithm (Max Subarray Sum)

```java
int maxSum = arr[0], currentSum = arr[0];
for (int i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
}
```

---

## JVM Architecture

```
┌─────────────────────────────────────┐
│         Java Application            │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│    JVM (Java Virtual Machine)       │
│  ┌────────────────────────────────┐ │
│  │   Class Loader Subsystem       │ │
│  └────────────────────────────────┘ │
│  ┌────────────────────────────────┐ │
│  │   Runtime Data Areas           │ │
│  │  - Method Area                 │ │
│  │  - Heap (Objects)              │ │
│  │  - Stack (Method frames)       │ │
│  │  - PC Register                 │ │
│  │  - Native Method Stack         │ │
│  └────────────────────────────────┘ │
│  ┌────────────────────────────────┐ │
│  │   Execution Engine             │ │
│  │  - Interpreter                 │ │
│  │  - JIT Compiler                │ │
│  │  - Garbage Collector           │ │
│  └────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## Java Keywords (All 51)

### Access & Modifiers

```
public, private, protected, default
static, final, abstract, synchronized, volatile, transient, native, strictfp
```

### Class-Related

```
class, interface, enum, extends, implements
new, this, super, instanceof
```

### Control Flow

```
if, else, switch, case, default
for, while, do
break, continue, return
```

### Exception Handling

```
try, catch, finally, throw, throws
assert
```

### Package & Import

```
package, import
```

### Others

```
void, null, true, false
```

### Unused (Reserved)

```
goto, const
```

---

## Commonly Used Classes

### Object Class Methods

```java
toString()       // String representation
equals(obj)      // Content equality
hashCode()       // Hash value
clone()          // Copy object
getClass()       // Runtime class
finalize()       // Before GC (deprecated)
wait()           // Thread synchronization
notify()         // Wake waiting thread
notifyAll()      // Wake all waiting threads
```

### Math Class

```java
Math.abs(x)           // Absolute value
Math.max(a, b)        // Maximum
Math.min(a, b)        // Minimum
Math.pow(base, exp)   // Power
Math.sqrt(x)          // Square root
Math.ceil(x)          // Round up
Math.floor(x)         // Round down
Math.round(x)         // Round to nearest
Math.random()         // Random [0.0, 1.0)
```

### System Class

```java
System.out.println()     // Print with newline
System.out.print()       // Print without newline
System.err.println()     // Print to error stream
System.currentTimeMillis() // Current time in ms
System.nanoTime()        // High precision time
System.exit(0)           // Exit program
System.gc()              // Suggest garbage collection
System.arraycopy()       // Copy array
```

---

## Best Practices

### Naming Conventions

```java
// Classes - PascalCase
class MyClass { }

// Variables/Methods - camelCase
int myVariable;
void myMethod() { }

// Constants - UPPER_SNAKE_CASE
final int MAX_SIZE = 100;

// Packages - lowercase
package com.example.myapp;

// Interfaces - Adjective ending with 'able'
interface Runnable, Comparable, Serializable
```

### Code Quality

```java
✅ Use meaningful names
✅ Keep methods small (< 20 lines)
✅ DRY (Don't Repeat Yourself)
✅ Handle exceptions properly
✅ Close resources (use try-with-resources)
✅ Use generics for type safety
✅ Prefer composition over inheritance
✅ Use interfaces for abstraction
✅ Write unit tests
✅ Add comments for complex logic
```

---

## Performance Tips

### ✅ DO

1. **Use StringBuilder for string concatenation in loops**
2. **Use primitive types when possible** (int vs Integer)
3. **Use ArrayList over LinkedList** (unless frequent insert/delete at start)
4. **Use HashMap for O(1) lookups**
5. **Close resources with try-with-resources**
6. **Use lazy initialization when expensive**
7. **Cache frequently used values**
8. **Use appropriate collection** (HashSet for uniqueness, TreeSet for sorting)

### ❌ DON'T

1. ❌ Use String + in loops (use StringBuilder)
2. ❌ Create unnecessary objects in loops
3. ❌ Use == for String comparison
4. ❌ Ignore exceptions (empty catch blocks)
5. ❌ Use raw types (List instead of List<String>)
6. ❌ Access private fields via reflection (unless needed)
7. ❌ Use synchronized everywhere (overhead)
8. ❌ Create threads manually (use ExecutorService)

---

## Common Pitfalls

### 1. Integer Comparison

```java
// ❌ Wrong
Integer a = 128, b = 128;
if (a == b) { }  // false! (not cached)

// ✅ Right
if (a.equals(b)) { }  // true

// Note: -128 to 127 are cached
Integer x = 100, y = 100;
x == y;  // true (cached)
```

### 2. ArrayList Remove in Loop

```java
// ❌ Wrong
for (int i = 0; i < list.size(); i++) {
    if (condition) {
        list.remove(i);  // Skips elements!
    }
}

// ✅ Right
for (int i = list.size() - 1; i >= 0; i--) {
    if (condition) {
        list.remove(i);
    }
}

// Or use Iterator
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    if (condition) it.remove();
}

// Or removeIf (Java 8+)
list.removeIf(item -> condition);
```

### 3. Null Checks

```java
// ❌ Risky
if (str.equals("test")) { }  // NullPointerException if str is null

// ✅ Safe
if ("test".equals(str)) { }  // Won't throw NPE
if (str != null && str.equals("test")) { }
```

### 4. Array Initialization

```java
// ❌ Wrong
int[] arr = new int[];  // Compile error

// ✅ Right
int[] arr = new int[5];
int[] arr = {1, 2, 3};
int[] arr = new int[]{1, 2, 3};
```

---

## Complexity Cheat Sheet

### String Operations

```java
charAt(i)           // O(1)
length()            // O(1)
substring(i, j)     // O(n)
indexOf(str)        // O(n*m)
equals(str)         // O(n)
compareTo(str)      // O(n)
replace(old, new)   // O(n)
split(regex)        // O(n)
```

### ArrayList Operations

```java
get(index)          // O(1)
set(index, value)   // O(1)
add(element)        // O(1) amortized
add(index, elem)    // O(n)
remove(index)       // O(n)
contains(elem)      // O(n)
indexOf(elem)       // O(n)
```

### Common Algorithms

```java
Linear search       // O(n)
Binary search       // O(log n)
Bubble sort        // O(n²)
Selection sort     // O(n²)
Insertion sort     // O(n²)
Merge sort         // O(n log n)
Quick sort         // O(n log n) avg, O(n²) worst
Heap sort          // O(n log n)
```

---

## Quick Reference Cards

### For Interviews Remember

#### Before Coding:

1. ✅ Clarify problem and constraints
2. ✅ Ask about edge cases (null, empty, negative)
3. ✅ Think out loud
4. ✅ Start with brute force

#### While Coding:

1. ✅ Use meaningful variable names
2. ✅ Handle edge cases
3. ✅ Write clean, readable code
4. ✅ Add comments for complex parts

#### After Coding:

1. ✅ Test with examples
2. ✅ Analyze time/space complexity
3. ✅ Discuss optimizations
4. ✅ Walk through edge cases

### Edge Cases to Always Check

```java
- null input
- empty array/string
- single element
- all same elements
- negative numbers
- zero
- Integer.MAX_VALUE / MIN_VALUE
- duplicate elements
```

---

## Useful One-Liners

```java
// Reverse array
Collections.reverse(Arrays.asList(arr));

// Array to List
List<Integer> list = Arrays.stream(arr).boxed().collect(Collectors.toList());

// Find max in array
int max = Arrays.stream(arr).max().getAsInt();

// Remove duplicates
Set<Integer> unique = new HashSet<>(list);

// Sort descending
Arrays.sort(arr, Collections.reverseOrder());  // For Integer[], not int[]

// Count frequency
Map<Integer, Long> freq = list.stream()
    .collect(Collectors.groupingBy(i -> i, Collectors.counting()));

// Filter even numbers
List<Integer> evens = list.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

// Sum of list
int sum = list.stream().mapToInt(Integer::intValue).sum();
```

---

## Common Interview Code Templates

### Swap Two Numbers

```java
// Using temp
int temp = a; a = b; b = temp;

// Without temp (arithmetic)
a = a + b; b = a - b; a = a - b;

// Without temp (XOR)
a = a ^ b; b = a ^ b; a = a ^ b;
```

### GCD (Euclidean Algorithm)

```java
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}
```

### LCM

```java
int lcm(int a, int b) {
    return (a * b) / gcd(a, b);
}
```

### Power

```java
// O(n)
long power(int base, int exp) {
    long result = 1;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

// O(log n) - Fast exponentiation
long fastPower(int base, int exp) {
    if (exp == 0) return 1;
    long half = fastPower(base, exp / 2);
    if (exp % 2 == 0) return half * half;
    else return base * half * half;
}
```

---

## Modern Java Checklist (For Interviews)

### Java 8 (Must Know)

- [ ] Lambda expressions
- [ ] Stream API (filter, map, reduce, collect)
- [ ] Optional
- [ ] Method references
- [ ] Functional interfaces
- [ ] Default methods in interfaces
- [ ] forEach()

### Java 11+

- [ ] var (local variable type inference)
- [ ] isBlank(), lines(), strip() for String
- [ ] Collection.toArray(IntFunction)

### Java 14+

- [ ] Records
- [ ] Switch expressions
- [ ] Text blocks
- [ ] Pattern matching for instanceof

### Java 17 (LTS)

- [ ] Sealed classes

---

## Final Tips for Interviews

### During Coding Interview:

1. **Listen Carefully** - Understand problem completely
2. **Ask Questions** - Clarify assumptions
3. **Think Out Loud** - Explain your approach
4. **Start Simple** - Brute force first
5. **Optimize** - Discuss time/space trade-offs
6. **Write Clean Code** - Meaningful names, proper structure
7. **Test** - Walk through examples
8. **Handle Edge Cases** - null, empty, negative

### Time Management:

- First 5 min: Understand and clarify
- Next 5 min: Plan approach
- Next 20 min: Code solution
- Last 10 min: Test and optimize

### Red Flags to Avoid:

- ❌ Starting to code immediately
- ❌ Not testing code
- ❌ Ignoring edge cases
- ❌ Not explaining approach
- ❌ Getting defensive about suggestions
- ❌ Giving up too quickly

---

## Checklist: Am I Ready?

### Core Java

- [ ] Data types and operators
- [ ] Control flow (if, switch, loops)
- [ ] OOP (4 pillars)
- [ ] Exception handling
- [ ] Collections framework
- [ ] Strings and arrays

### Advanced

- [ ] Multithreading basics
- [ ] Lambda and streams
- [ ] Generics
- [ ] Design patterns (at least 3-4)
- [ ] File I/O

### Algorithms

- [ ] Binary search
- [ ] At least one O(n log n) sort
- [ ] Two pointers technique
- [ ] HashMap usage
- [ ] Recursion

### Can You Explain?

- [ ] How HashMap works internally
- [ ] How ArrayList resizes
- [ ] Difference between == and equals()
- [ ] Why String is immutable
- [ ] How garbage collection works
- [ ] What is JVM, JRE, JDK

---

**Good luck with your interviews! 🚀**

_For detailed programs and explanations, see:_

- [Java Programs](programs.md) - 170 programs with solutions
- [Java Q&A](q&a.md) - Interview questions and answers
