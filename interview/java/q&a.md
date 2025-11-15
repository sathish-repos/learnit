# Java Interview Questions & Answers

## Table of Contents

1. [Java Basics](#java-basics)
2. [OOP Concepts](#oop-concepts)
3. [String and Wrapper Classes](#string-and-wrapper-classes)
4. [Collections Framework](#collections-framework)
5. [Exception Handling](#exception-handling)
6. [Multithreading and Concurrency](#multithreading-and-concurrency)
7. [Java 8+ Features](#java-8-features)
8. [JVM and Memory Management](#jvm-and-memory-management)
9. [Design Patterns](#design-patterns)
10. [Advanced Topics](#advanced-topics)

---

## Java Basics

### 1. What is Java?

Java is a high-level, object-oriented, platform-independent programming language developed by Sun Microsystems (now Oracle) in 1995. It follows the principle of "Write Once, Run Anywhere" (WORA).

**Key Features:**

- Object-oriented
- Platform-independent
- Robust and secure
- Multithreaded
- Architecture-neutral
- High performance

**Follow-up Questions:**

- How does Java achieve platform independence?
- What is the difference between JDK, JRE, and JVM?

### 2. What is the difference between JDK, JRE, and JVM?

**Visual Representation:**

```
┌─────────────────────────────────────────┐
│              JDK (Java Development Kit)  │
│  ┌────────────────────────────────────┐ │
│  │         JRE (Java Runtime Env)     │ │
│  │  ┌──────────────────────────────┐  │ │
│  │  │     JVM (Java Virtual Machine)│  │ │
│  │  │  - Class Loader               │  │ │
│  │  │  - Bytecode Verifier          │  │ │
│  │  │  - Interpreter/JIT Compiler   │  │ │
│  │  └──────────────────────────────┘  │ │
│  │  + Java Class Libraries            │ │
│  └────────────────────────────────────┘ │
│  + Development Tools (javac, jar, etc)  │
└─────────────────────────────────────────┘
```

**Explanation:**

- **JVM**: Executes Java bytecode
- **JRE**: JVM + Libraries (for running Java applications)
- **JDK**: JRE + Development Tools (for developing Java applications)

**Follow-up Questions:**

- Can you run Java applications without JDK?
- What is bytecode?

### 3. What are the main principles of Object-Oriented Programming (OOP)?

The four main principles are:

**1. Encapsulation:**

```java
public class BankAccount {
    private double balance;  // Private data

    // Public methods to access private data
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public double getBalance() {
        return balance;
    }
}
```

**2. Inheritance:**

```java
// Parent class
class Animal {
    void eat() {
        System.out.println("This animal eats food");
    }
}

// Child class
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}
```

**3. Polymorphism:**

```java
// Method Overloading (Compile-time)
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}

// Method Overriding (Runtime)
class Animal {
    void sound() { System.out.println("Animal makes sound"); }
}
class Dog extends Animal {
    @Override
    void sound() { System.out.println("Dog barks"); }
}
```

**4. Abstraction:**

```java
// Abstract class
abstract class Shape {
    abstract double area();  // Abstract method
}

class Circle extends Shape {
    double radius;

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

// Interface
interface Drawable {
    void draw();
}
```

**Follow-up Questions:**

- What is the difference between abstraction and encapsulation?
- Can you achieve multiple inheritance in Java?

### 4. What is the difference between == and equals()?

**Example:**

```java
public class EqualsVsDoubleEquals {
    public static void main(String[] args) {
        // Primitive types: == compares values
        int a = 5;
        int b = 5;
        System.out.println(a == b);  // true (value comparison)

        // Objects: == compares references
        String s1 = new String("Hello");
        String s2 = new String("Hello");
        System.out.println(s1 == s2);      // false (different objects)
        System.out.println(s1.equals(s2)); // true (content comparison)

        // String pool
        String s3 = "Hello";
        String s4 = "Hello";
        System.out.println(s3 == s4);      // true (same reference in pool)

        // Custom objects
        Person p1 = new Person("John", 25);
        Person p2 = new Person("John", 25);
        System.out.println(p1 == p2);      // false (different objects)
        System.out.println(p1.equals(p2)); // depends on equals() implementation
    }
}

class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Person person = (Person) obj;
        return age == person.age && name.equals(person.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}
```

**Comparison:**

```
Operator    | ==                        | equals()
------------|---------------------------|---------------------------
Type        | Operator                  | Method
Use         | Primitives & References   | Objects only
Compares    | Memory address/value      | Content/logical equality
Override    | Cannot override           | Can override
```

**Follow-up Questions:**

- Why should you override hashCode() when overriding equals()?
- What is the contract between equals() and hashCode()?

### 5. What is the difference between final, finally, and finalize()?

**Example:**

```java
// 1. final keyword
final class FinalClass { }  // Cannot be inherited
// class Child extends FinalClass { }  // Error!

class Example {
    final int MAX_VALUE = 100;  // Constant
    // MAX_VALUE = 200;  // Error! Cannot modify

    final void finalMethod() { }  // Cannot be overridden
}

class SubExample extends Example {
    // void finalMethod() { }  // Error! Cannot override
}

// 2. finally block
public class FinallyExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Exception caught");
        } finally {
            System.out.println("Finally always executes");
            // Cleanup code (close resources, etc.)
        }
    }
}

// 3. finalize() method
class FinalizeExample {
    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("Finalize called before garbage collection");
            // Cleanup resources
        } finally {
            super.finalize();
        }
    }
}
```

**Comparison:**

```
Keyword    | Usage                          | Purpose
-----------|--------------------------------|---------------------------
final      | Variable, Method, Class        | Immutability/Prevent override
finally    | Exception handling block       | Cleanup code
finalize() | Method (deprecated in Java 9+) | Called before GC
```

**Follow-up Questions:**

- When does the finally block not execute?
- Why is finalize() deprecated?

### 6. What is the difference between abstract class and interface?

**Example:**

```java
// Abstract Class
abstract class Vehicle {
    String brand;  // Can have instance variables

    // Constructor
    public Vehicle(String brand) {
        this.brand = brand;
    }

    // Concrete method
    public void start() {
        System.out.println("Vehicle starting...");
    }

    // Abstract method
    abstract void accelerate();
}

class Car extends Vehicle {
    public Car(String brand) {
        super(brand);
    }

    @Override
    void accelerate() {
        System.out.println("Car accelerating...");
    }
}

// Interface
interface Flyable {
    // public static final by default
    int MAX_ALTITUDE = 50000;

    // public abstract by default
    void fly();
    void land();

    // Default method (Java 8+)
    default void checkWeather() {
        System.out.println("Weather is clear");
    }

    // Static method (Java 8+)
    static void info() {
        System.out.println("Flyable interface");
    }
}

class Airplane extends Vehicle implements Flyable {
    public Airplane(String brand) {
        super(brand);
    }

    @Override
    void accelerate() {
        System.out.println("Airplane accelerating on runway");
    }

    @Override
    public void fly() {
        System.out.println("Airplane flying");
    }

    @Override
    public void land() {
        System.out.println("Airplane landing");
    }
}
```

**Comparison:**

```
Feature            | Abstract Class           | Interface
-------------------|--------------------------|---------------------------
Methods            | Abstract + Concrete      | Abstract (+ default/static)
Variables          | Any type                 | public static final only
Constructor        | Yes                      | No
Inheritance        | Single                   | Multiple
Access Modifiers   | Any                      | public (or default)
When to use        | IS-A relationship        | CAN-DO capability
```

**Follow-up Questions:**

- Can an interface extend a class?
- When would you choose abstract class over interface?

### 7. What is method overloading vs method overriding?

**Example:**

```java
// Method Overloading (Compile-time Polymorphism)
class Calculator {
    // Same method name, different parameters
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    // Not overloading - only return type differs
    // double add(int a, int b) { return a + b; }  // Error!
}

// Method Overriding (Runtime Polymorphism)
class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }

    void eat() {
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Dog barks");
    }

    // Covariant return type (Java 5+)
    @Override
    Animal eat() {
        System.out.println("Dog eats meat");
        return this;
    }
}

// Usage
public class PolymorphismDemo {
    public static void main(String[] args) {
        // Overloading
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 3));        // 8
        System.out.println(calc.add(5.5, 3.2));    // 8.7
        System.out.println(calc.add(1, 2, 3));     // 6

        // Overriding
        Animal animal = new Dog();  // Upcasting
        animal.makeSound();  // Dog barks (runtime decision)
    }
}
```

**Comparison:**

```
Feature              | Overloading              | Overriding
---------------------|--------------------------|---------------------------
When                 | Compile-time             | Runtime
Where                | Same class               | Parent-child classes
Method Signature     | Must differ              | Must be same
Return Type          | Can differ               | Same (or covariant)
Access Modifier      | Can differ               | Same or less restrictive
Static Methods       | Yes                      | No (method hiding instead)
Private Methods      | Yes                      | No
final Methods        | Yes                      | No
```

**Follow-up Questions:**

- Can you override static methods?
- What are the rules for overriding methods?

### 8. What is a constructor in Java?

**Example:**

```java
public class ConstructorExample {
    private String name;
    private int age;

    // Default Constructor (if not defined, Java provides one)
    public ConstructorExample() {
        this.name = "Unknown";
        this.age = 0;
        System.out.println("Default constructor called");
    }

    // Parameterized Constructor
    public ConstructorExample(String name) {
        this();  // Calling default constructor
        this.name = name;
        System.out.println("Parameterized constructor 1 called");
    }

    // Overloaded Constructor
    public ConstructorExample(String name, int age) {
        this(name);  // Calling parameterized constructor
        this.age = age;
        System.out.println("Parameterized constructor 2 called");
    }

    // Copy Constructor
    public ConstructorExample(ConstructorExample other) {
        this.name = other.name;
        this.age = other.age;
        System.out.println("Copy constructor called");
    }

    public static void main(String[] args) {
        ConstructorExample obj1 = new ConstructorExample();
        ConstructorExample obj2 = new ConstructorExample("John", 25);
        ConstructorExample obj3 = new ConstructorExample(obj2);
    }
}

// Constructor Chaining with Inheritance
class Parent {
    Parent() {
        System.out.println("Parent constructor");
    }

    Parent(String msg) {
        System.out.println("Parent: " + msg);
    }
}

class Child extends Parent {
    Child() {
        super("Called from child");  // Must be first statement
        System.out.println("Child constructor");
    }
}
```

**Key Points:**

- Same name as class
- No return type (not even void)
- Called automatically when object is created
- Can be overloaded
- Cannot be inherited, but can be called via super()

**Follow-up Questions:**

- Can constructors be private?
- What is constructor chaining?

### 9. What is the difference between static and instance variables/methods?

**Example:**

```java
public class StaticVsInstance {
    // Static variable (class variable)
    static int staticCounter = 0;

    // Instance variable (object variable)
    int instanceCounter = 0;

    // Static block (executed once when class is loaded)
    static {
        System.out.println("Static block executed");
        staticCounter = 10;
    }

    // Instance block (executed for each object creation)
    {
        System.out.println("Instance block executed");
        instanceCounter = 5;
    }

    // Static method
    static void staticMethod() {
        System.out.println("Static counter: " + staticCounter);
        // System.out.println(instanceCounter);  // Error! Can't access instance variable
        // instanceMethod();  // Error! Can't call instance method
    }

    // Instance method
    void instanceMethod() {
        System.out.println("Instance counter: " + instanceCounter);
        System.out.println("Static counter: " + staticCounter);  // OK
        staticMethod();  // OK
    }

    public static void main(String[] args) {
        // Accessing static members
        StaticVsInstance.staticMethod();
        System.out.println(StaticVsInstance.staticCounter);

        // Creating objects
        StaticVsInstance obj1 = new StaticVsInstance();
        StaticVsInstance obj2 = new StaticVsInstance();

        // Each object has its own instance variables
        obj1.instanceCounter = 100;
        obj2.instanceCounter = 200;
        System.out.println("obj1: " + obj1.instanceCounter);  // 100
        System.out.println("obj2: " + obj2.instanceCounter);  // 200

        // Static variable is shared across all objects
        obj1.staticCounter = 50;
        System.out.println("obj1 static: " + obj1.staticCounter);  // 50
        System.out.println("obj2 static: " + obj2.staticCounter);  // 50
    }
}
```

**Visual Representation:**

```
Memory Layout:

Method Area (Class Data):
┌────────────────────────────┐
│  staticCounter = 50        │  ← Shared by all objects
│  staticMethod()            │
└────────────────────────────┘

Heap (Object Data):
┌────────────────────────────┐
│  obj1:                     │
│    instanceCounter = 100   │
└────────────────────────────┘
┌────────────────────────────┐
│  obj2:                     │
│    instanceCounter = 200   │
└────────────────────────────┘
```

**Comparison:**

```
Feature          | Static                    | Instance
-----------------|---------------------------|---------------------------
Memory           | Method Area (once)        | Heap (per object)
Access           | Class name or object      | Object only
Belongs to       | Class                     | Object
Shared           | Yes                       | No
this/super       | Cannot use                | Can use
```

**Follow-up Questions:**

- Can you override static methods?
- What is a static import?

### 10. What is the difference between String, StringBuilder, and StringBuffer?

**Example:**

```java
public class StringComparison {
    public static void main(String[] args) {
        // String (Immutable)
        String str = "Hello";
        str = str + " World";  // Creates new object, original "Hello" remains
        System.out.println(str);  // Hello World

        // StringBuilder (Mutable, Not thread-safe)
        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World");  // Modifies same object
        sb.insert(5, ",");
        sb.delete(0, 6);
        System.out.println(sb);  // World

        // StringBuffer (Mutable, Thread-safe)
        StringBuffer sbf = new StringBuffer("Hello");
        sbf.append(" World");
        System.out.println(sbf);  // Hello World

        // Performance Test
        long start, end;

        // String concatenation (slow)
        start = System.currentTimeMillis();
        String s = "";
        for (int i = 0; i < 10000; i++) {
            s += "a";  // Creates 10000 new objects
        }
        end = System.currentTimeMillis();
        System.out.println("String: " + (end - start) + "ms");

        // StringBuilder (fast)
        start = System.currentTimeMillis();
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < 10000; i++) {
            builder.append("a");  // Modifies same object
        }
        end = System.currentTimeMillis();
        System.out.println("StringBuilder: " + (end - start) + "ms");
    }
}
```

**Visual Representation:**

```
String (Immutable):
str = "Hello"  →  [Hello]
str += " World"  →  [Hello]  [Hello World]  (new object created)
                     ↑ garbage

StringBuilder (Mutable):
sb = "Hello"  →  [Hello     capacity:16]
sb.append(" World")  →  [Hello World capacity:16]  (same object)
```

**Comparison:**

```
Feature          | String        | StringBuilder  | StringBuffer
-----------------|---------------|----------------|---------------
Mutability       | Immutable     | Mutable        | Mutable
Thread-safe      | Yes           | No             | Yes
Performance      | Slow          | Fast           | Moderate
Use Case         | Few changes   | Single thread  | Multi-thread
Memory           | More          | Less           | Less
```

**Follow-up Questions:**

- Why is String immutable?
- When would you use StringBuffer over StringBuilder?

---

## OOP Concepts

### 11. What is encapsulation?

Encapsulation is bundling data (variables) and methods that operate on that data within a single unit (class), and restricting direct access to some components.

**Example:**

```java
public class BankAccount {
    // Private data members
    private String accountNumber;
    private double balance;
    private String password;

    // Constructor
    public BankAccount(String accountNumber, String password) {
        this.accountNumber = accountNumber;
        this.password = password;
        this.balance = 0.0;
    }

    // Public methods with validation
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            System.out.println("Invalid amount");
        }
    }

    public boolean withdraw(double amount, String pwd) {
        if (!password.equals(pwd)) {
            System.out.println("Invalid password");
            return false;
        }
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            return true;
        } else {
            System.out.println("Insufficient balance or invalid amount");
            return false;
        }
    }

    // Read-only access to balance
    public double getBalance(String pwd) {
        if (password.equals(pwd)) {
            return balance;
        }
        return -1;
    }

    // No direct setter for balance
    // No getter for password (security)
}

// Usage
public class EncapsulationDemo {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("123456", "secret");

        // Cannot access directly
        // account.balance = 1000000;  // Error! private field

        // Must use public methods
        account.deposit(1000);
        account.withdraw(500, "secret");
        System.out.println("Balance: $" + account.getBalance("secret"));
    }
}
```

**Benefits:**

- Data hiding and security
- Flexibility to change implementation
- Increased reusability
- Better testing and maintainability

**Follow-up Questions:**

- What is the difference between encapsulation and abstraction?
- Can you have public variables in an encapsulated class?

### 12. What is inheritance and its types?

**Example:**

```java
// Single Inheritance
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

// Multilevel Inheritance
class Mammal extends Animal {
    void breathe() {
        System.out.println("Mammal breathes");
    }
}

class Cat extends Mammal {
    void meow() {
        System.out.println("Cat meows");
    }
}

// Hierarchical Inheritance
class Bird extends Animal {
    void fly() {
        System.out.println("Bird flies");
    }
}

class Fish extends Animal {
    void swim() {
        System.out.println("Fish swims");
    }
}

// Multiple Inheritance (via Interfaces)
interface Walkable {
    void walk();
}

interface Swimmable {
    void swim();
}

class Duck extends Animal implements Walkable, Swimmable {
    @Override
    public void walk() {
        System.out.println("Duck walks");
    }

    @Override
    public void swim() {
        System.out.println("Duck swims");
    }
}

// Demonstrating super keyword
class Vehicle {
    String brand = "Generic";
    int speed = 0;

    Vehicle(String brand) {
        this.brand = brand;
    }

    void accelerate() {
        speed += 10;
        System.out.println("Vehicle speed: " + speed);
    }
}

class Car extends Vehicle {
    String model;

    Car(String brand, String model) {
        super(brand);  // Call parent constructor
        this.model = model;
    }

    @Override
    void accelerate() {
        super.accelerate();  // Call parent method
        speed += 20;  // Additional acceleration
        System.out.println("Car speed: " + speed);
    }

    void display() {
        System.out.println("Brand: " + super.brand);  // Access parent variable
        System.out.println("Model: " + this.model);
    }
}
```

**Visual Representation:**

```
Single Inheritance:
Animal
  ↑
  Dog

Multilevel Inheritance:
Animal
  ↑
Mammal
  ↑
  Cat

Hierarchical Inheritance:
    Animal
   ↗  ↑  ↖
Dog  Cat  Bird

Multiple Inheritance (Interface):
Walkable  Swimmable
      ↖    ↗
       Duck
```

**Follow-up Questions:**

- Why doesn't Java support multiple inheritance with classes?
- What is the diamond problem?

### 13. What is polymorphism?

Polymorphism means "many forms" - the ability of an object to take many forms.

**Example:**

```java
// Runtime Polymorphism (Method Overriding)
class Payment {
    void processPayment(double amount) {
        System.out.println("Processing payment: $" + amount);
    }
}

class CreditCardPayment extends Payment {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing credit card payment: $" + amount);
        // Credit card specific logic
    }
}

class PayPalPayment extends Payment {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing PayPal payment: $" + amount);
        // PayPal specific logic
    }
}

class CashPayment extends Payment {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing cash payment: $" + amount);
        // Cash specific logic
    }
}

// Compile-time Polymorphism (Method Overloading)
class MathOperations {
    // Same method name, different parameters
    int calculate(int a, int b) {
        return a + b;
    }

    double calculate(double a, double b) {
        return a + b;
    }

    int calculate(int a, int b, int c) {
        return a + b + c;
    }

    String calculate(String a, String b) {
        return a + b;
    }
}

// Demonstration
public class PolymorphismExample {
    public static void main(String[] args) {
        // Runtime Polymorphism
        Payment payment;

        payment = new CreditCardPayment();
        payment.processPayment(100);  // Credit card payment

        payment = new PayPalPayment();
        payment.processPayment(200);  // PayPal payment

        payment = new CashPayment();
        payment.processPayment(50);   // Cash payment

        // Using in array
        Payment[] payments = {
            new CreditCardPayment(),
            new PayPalPayment(),
            new CashPayment()
        };

        for (Payment p : payments) {
            p.processPayment(100);  // Different behavior for each
        }

        // Compile-time Polymorphism
        MathOperations math = new MathOperations();
        System.out.println(math.calculate(5, 3));        // int version
        System.out.println(math.calculate(5.5, 3.2));    // double version
        System.out.println(math.calculate(1, 2, 3));     // three parameters
        System.out.println(math.calculate("Hello", "World"));  // String version
    }
}
```

**Types:**

```
Polymorphism
├── Compile-time (Static)
│   ├── Method Overloading
│   └── Operator Overloading (not in Java)
└── Runtime (Dynamic)
    ├── Method Overriding
    └── Interface implementation
```

**Follow-up Questions:**

- What is dynamic method dispatch?
- Can you achieve polymorphism with private methods?

### 14. What is abstraction?

Abstraction is hiding implementation details and showing only functionality to the user.

**Example:**

```java
// Abstract class
abstract class DatabaseConnection {
    String connectionString;

    // Concrete method
    public void setConnectionString(String conn) {
        this.connectionString = conn;
    }

    // Abstract methods
    abstract void connect();
    abstract void disconnect();
    abstract void executeQuery(String query);

    // Template method pattern
    public final void performOperation(String query) {
        connect();
        executeQuery(query);
        disconnect();
    }
}

class MySQLConnection extends DatabaseConnection {
    @Override
    void connect() {
        System.out.println("Connecting to MySQL: " + connectionString);
    }

    @Override
    void disconnect() {
        System.out.println("Disconnecting from MySQL");
    }

    @Override
    void executeQuery(String query) {
        System.out.println("Executing MySQL query: " + query);
    }
}

class MongoDBConnection extends DatabaseConnection {
    @Override
    void connect() {
        System.out.println("Connecting to MongoDB: " + connectionString);
    }

    @Override
    void disconnect() {
        System.out.println("Disconnecting from MongoDB");
    }

    @Override
    void executeQuery(String query) {
        System.out.println("Executing MongoDB query: " + query);
    }
}

// Interface abstraction
interface Vehicle {
    void start();
    void stop();
    void accelerate(int speed);

    // Default method (Java 8+)
    default void honk() {
        System.out.println("Beep beep!");
    }
}

class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car engine started");
    }

    @Override
    public void stop() {
        System.out.println("Car stopped");
    }

    @Override
    public void accelerate(int speed) {
        System.out.println("Car accelerating to " + speed + " km/h");
    }
}

// Usage
public class AbstractionDemo {
    public static void main(String[] args) {
        // User doesn't need to know connection details
        DatabaseConnection mysql = new MySQLConnection();
        mysql.setConnectionString("localhost:3306/mydb");
        mysql.performOperation("SELECT * FROM users");

        DatabaseConnection mongo = new MongoDBConnection();
        mongo.setConnectionString("mongodb://localhost:27017");
        mongo.performOperation("db.users.find()");

        // Interface abstraction
        Vehicle car = new Car();
        car.start();
        car.accelerate(60);
        car.honk();
        car.stop();
    }
}
```

**Levels of Abstraction:**

```
High Level (Abstract)
    ↓
Vehicle.start()  ← User sees only this
    ↓
Implementation hidden:
- Ignition system
- Fuel injection
- Engine startup
- Electrical checks
    ↓
Low Level (Concrete)
```

**Follow-up Questions:**

- What percentage of abstraction should be in abstract class vs interface?
- Can abstract class have constructor?

### 15. What is the difference between composition and aggregation?

**Example:**

```java
// Composition (Strong "has-a" relationship)
// Car HAS-A Engine (Engine cannot exist without Car)
class Engine {
    private String type;

    public Engine(String type) {
        this.type = type;
    }

    public void start() {
        System.out.println(type + " engine started");
    }
}

class Car {
    private String model;
    private Engine engine;  // Car owns Engine

    public Car(String model, String engineType) {
        this.model = model;
        this.engine = new Engine(engineType);  // Engine created inside Car
    }

    public void startCar() {
        System.out.println(model + " starting...");
        engine.start();
    }
    // When Car is destroyed, Engine is also destroyed
}

// Aggregation (Weak "has-a" relationship)
// Department HAS-A Professor (Professor can exist without Department)
class Professor {
    private String name;
    private String subject;

    public Professor(String name, String subject) {
        this.name = name;
        this.subject = subject;
    }

    public void teach() {
        System.out.println(name + " teaches " + subject);
    }
}

class Department {
    private String name;
    private List<Professor> professors;  // Department has Professors

    public Department(String name) {
        this.name = name;
        this.professors = new ArrayList<>();
    }

    public void addProfessor(Professor prof) {
        professors.add(prof);  // Professor exists independently
    }

    public void showProfessors() {
        System.out.println("Department: " + name);
        for (Professor prof : professors) {
            prof.teach();
        }
    }
    // When Department is destroyed, Professors still exist
}

// Usage
public class CompositionVsAggregation {
    public static void main(String[] args) {
        // Composition
        Car car = new Car("Toyota", "V6");
        car.startCar();
        // If car is garbage collected, engine is also destroyed

        // Aggregation
        Professor prof1 = new Professor("Dr. Smith", "Mathematics");
        Professor prof2 = new Professor("Dr. Jones", "Physics");

        Department dept = new Department("Science");
        dept.addProfessor(prof1);
        dept.addProfessor(prof2);
        dept.showProfessors();

        // Professors exist independently
        prof1.teach();  // Still works even if dept is destroyed
    }
}
```

**Visual Representation:**

```
Composition (Strong):
┌─────────────────┐
│      Car        │
│  ┌───────────┐  │
│  │  Engine   │  │  ← Engine inside Car
│  └───────────┘  │     Lifecycle dependent
└─────────────────┘

Aggregation (Weak):
┌─────────────────┐
│   Department    │
└────────┬────────┘
         │ references
    ┌────▼────┐
    │Professor│  ← Professor exists independently
    └─────────┘     Independent lifecycle
```

**Comparison:**

```
Feature          | Composition           | Aggregation
-----------------|-----------------------|----------------------
Relationship     | Strong "has-a"        | Weak "has-a"
Lifecycle        | Dependent             | Independent
Creation         | Created inside        | Created outside
Deletion         | Both destroyed        | Child survives
Example          | Car-Engine            | Department-Professor
```

**Follow-up Questions:**

- Which is better: composition or inheritance?
- What does "favor composition over inheritance" mean?

---

## String and Wrapper Classes

### 16. Why is String immutable in Java?

**Example:**

```java
public class StringImmutability {
    public static void main(String[] args) {
        // String immutability
        String str1 = "Hello";
        String str2 = str1;
        str1 = str1 + " World";  // Creates new object

        System.out.println(str1);  // Hello World
        System.out.println(str2);  // Hello (unchanged)

        // String pool example
        String s1 = "Java";
        String s2 = "Java";
        String s3 = new String("Java");

        System.out.println(s1 == s2);  // true (same reference in pool)
        System.out.println(s1 == s3);  // false (different objects)
        System.out.println(s1.equals(s3));  // true (same content)

        // Demonstrating security
        String password = "secret123";
        authenticateUser(password);
        System.out.println("Password: " + password);  // Still "secret123"
    }

    static void authenticateUser(String pwd) {
        // Even if we try to modify, original is safe
        pwd = pwd + "_modified";
        System.out.println("Inside method: " + pwd);
    }
}
```

**Reasons for Immutability:**

1. **String Pool Optimization:**

```
String Pool:
┌──────────────────┐
│  "Hello"  ←─┬─── s1
│            └─── s2 (same reference)
└──────────────────┘
Memory saved! Multiple references to same object
```

2. **Security:**

```java
// Immutability prevents security risks
String username = "admin";
databaseConnection.connect(username);
// username cannot be changed by malicious code
```

3. **Thread Safety:**

```java
// Multiple threads can safely share string
String sharedString = "Thread-safe";
// No synchronization needed
```

4. **HashCode Caching:**

```java
HashMap<String, Integer> map = new HashMap<>();
String key = "myKey";
map.put(key, 100);
// hashCode is calculated once and cached
// If String was mutable, hashCode could change!
```

**Follow-up Questions:**

- How to create mutable strings?
- What is String interning?

### 17. What is the String pool?

**Example:**

```java
public class StringPoolExample {
    public static void main(String[] args) {
        // String literals - stored in String pool
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = "Hello";

        // All point to same object in pool
        System.out.println(s1 == s2);  // true
        System.out.println(s2 == s3);  // true

        // new keyword - creates object in heap
        String s4 = new String("Hello");
        String s5 = new String("Hello");

        System.out.println(s1 == s4);  // false (different locations)
        System.out.println(s4 == s5);  // false (different objects)
        System.out.println(s1.equals(s4));  // true (same content)

        // intern() method - moves to pool or returns reference
        String s6 = new String("Hello").intern();
        System.out.println(s1 == s6);  // true (s6 now points to pool)

        // Concatenation
        String s7 = "Hel" + "lo";  // Compile-time constant
        System.out.println(s1 == s7);  // true (optimized to "Hello")

        String s8 = "Hel";
        String s9 = s8 + "lo";  // Runtime concatenation
        System.out.println(s1 == s9);  // false (new object created)

        // Memory analysis
        String s10 = "Hello";
        String s11 = "Hello";
        String s12 = new String("Hello");

        System.out.println("Objects created in pool: 1");
        System.out.println("Objects created in heap: 1");
        System.out.println("Total references: 3");
    }
}
```

**Visual Representation:**

```
Memory Layout:

String Pool (PermGen/Metaspace):
┌────────────────────────┐
│  "Hello"  ←─────┬───── s1
│            ├───── s2
│            └───── s3
└────────────────────────┘

Heap:
┌────────────────────────┐
│  "Hello"  ←───── s4    │
└────────────────────────┘
┌────────────────────────┐
│  "Hello"  ←───── s5    │
└────────────────────────┘
```

**Follow-up Questions:**

- Where is the String pool located in different Java versions?
- How does intern() work?

### 18. What are wrapper classes?

**Example:**

```java
public class WrapperClassExample {
    public static void main(String[] args) {
        // Primitive types
        int primitiveInt = 10;
        double primitiveDouble = 20.5;
        boolean primitiveBool = true;

        // Wrapper classes
        Integer wrapperInt = Integer.valueOf(10);
        Double wrapperDouble = Double.valueOf(20.5);
        Boolean wrapperBool = Boolean.valueOf(true);

        // Autoboxing (primitive to wrapper)
        Integer autoBoxed = 100;  // Automatically converted

        // Unboxing (wrapper to primitive)
        int unBoxed = autoBoxed;  // Automatically converted

        // Wrapper class methods
        String numberStr = "123";
        int parsedInt = Integer.parseInt(numberStr);
        Integer convertedInt = Integer.valueOf(numberStr);

        System.out.println("Parsed: " + parsedInt);
        System.out.println("Converted: " + convertedInt);

        // Comparison
        Integer a = 100;
        Integer b = 100;
        Integer c = 200;
        Integer d = 200;

        System.out.println(a == b);  // true (cached)
        System.out.println(c == d);  // false (not cached)
        System.out.println(a.equals(b));  // true
        System.out.println(c.equals(d));  // true

        // Integer cache (-128 to 127)
        Integer x = 127;
        Integer y = 127;
        System.out.println(x == y);  // true (cached)

        Integer z = 128;
        Integer w = 128;
        System.out.println(z == w);  // false (not cached)

        // Utility methods
        System.out.println("Max int: " + Integer.MAX_VALUE);
        System.out.println("Min int: " + Integer.MIN_VALUE);
        System.out.println("Binary: " + Integer.toBinaryString(10));
        System.out.println("Hex: " + Integer.toHexString(255));
        System.out.println("Compare: " + Integer.compare(10, 20));

        // Collections require wrapper classes
        List<Integer> list = new ArrayList<>();
        list.add(10);  // Autoboxing
        int value = list.get(0);  // Unboxing
    }
}
```

**Wrapper Classes:**

```
Primitive  | Wrapper Class | Example
-----------|---------------|------------------
byte       | Byte          | Byte b = 10;
short      | Short         | Short s = 100;
int        | Integer       | Integer i = 1000;
long       | Long          | Long l = 10000L;
float      | Float         | Float f = 10.5f;
double     | Double        | Double d = 20.5;
char       | Character     | Character c = 'A';
boolean    | Boolean       | Boolean b = true;
```

**Integer Cache:**

```
Cache Range: -128 to 127

Integer a = 127;  ┐
Integer b = 127;  ├→ Same object (cached)
a == b → true     ┘

Integer c = 128;  ┐
Integer d = 128;  ├→ Different objects (not cached)
c == d → false    ┘
```

**Follow-up Questions:**

- What is the purpose of wrapper classes?
- What are the performance implications of autoboxing/unboxing?

### 19. What is autoboxing and unboxing?

**Example:**

```java
public class AutoboxingUnboxingExample {
    public static void main(String[] args) {
        // Autoboxing (primitive → wrapper)
        int primitiveInt = 50;
        Integer wrapperInt = primitiveInt;  // Autoboxing
        // Equivalent to: Integer wrapperInt = Integer.valueOf(primitiveInt);

        // Unboxing (wrapper → primitive)
        Integer wrapperValue = 100;
        int primitiveValue = wrapperValue;  // Unboxing
        // Equivalent to: int primitiveValue = wrapperValue.intValue();

        // In expressions
        Integer a = 10;
        Integer b = 20;
        Integer sum = a + b;  // Unboxing → addition → autoboxing
        // Equivalent to: Integer sum = Integer.valueOf(a.intValue() + b.intValue());

        // In collections
        List<Integer> numbers = new ArrayList<>();
        numbers.add(10);  // Autoboxing: 10 → Integer.valueOf(10)
        int first = numbers.get(0);  // Unboxing: Integer → int

        // Potential issues

        // Issue 1: NullPointerException
        Integer nullValue = null;
        try {
            int value = nullValue;  // Unboxing null → NullPointerException
        } catch (NullPointerException e) {
            System.out.println("Cannot unbox null");
        }

        // Issue 2: Performance in loops
        long start, end;

        // Bad: Unnecessary boxing/unboxing
        start = System.nanoTime();
        Integer sumBad = 0;
        for (int i = 0; i < 1000000; i++) {
            sumBad += i;  // Unboxing → addition → autoboxing (1M times!)
        }
        end = System.nanoTime();
        System.out.println("With autoboxing: " + (end - start) + "ns");

        // Good: Use primitives
        start = System.nanoTime();
        int sumGood = 0;
        for (int i = 0; i < 1000000; i++) {
            sumGood += i;  // Pure primitive operation
        }
        end = System.nanoTime();
        System.out.println("Without autoboxing: " + (end - start) + "ns");

        // Issue 3: Unexpected behavior with ==
        Integer i1 = 1000;
        Integer i2 = 1000;
        System.out.println(i1 == i2);  // false (different objects)
        System.out.println(i1.equals(i2));  // true (correct way)

        // Ternary operator gotcha
        Integer value1 = null;
        Integer value2 = 0;
        boolean condition = true;
        // Integer result = condition ? value1 : value2;  // NullPointerException!
        // Because: condition ? value1.intValue() : value2.intValue()
    }

    // Method overloading with primitive vs wrapper
    static void process(int value) {
        System.out.println("Processing int: " + value);
    }

    static void process(Integer value) {
        System.out.println("Processing Integer: " + value);
    }

    public static void testOverloading() {
        int primitive = 10;
        Integer wrapper = 20;

        process(primitive);  // Calls int version
        process(wrapper);    // Calls Integer version
        process(30);         // Calls int version (primitive literal)
    }
}
```

**Autoboxing/Unboxing Flow:**

```
Autoboxing:
int (primitive) → Integer.valueOf() → Integer (wrapper)

Unboxing:
Integer (wrapper) → intValue() → int (primitive)

In Collection:
list.add(10)
   ↓ autoboxing
list.add(Integer.valueOf(10))

int x = list.get(0)
   ↓ unboxing
int x = list.get(0).intValue()
```

**Follow-up Questions:**

- What are the performance implications of autoboxing in loops?
- How can autoboxing cause NullPointerException?

### 20. What is the difference between String, StringBuffer, and StringBuilder? (Detailed)

**Performance Comparison:**

```java
public class StringPerformanceTest {
    public static void main(String[] args) {
        int iterations = 50000;

        // Test 1: String concatenation
        long start = System.currentTimeMillis();
        String str = "";
        for (int i = 0; i < iterations; i++) {
            str += "a";  // Creates new object each time
        }
        long end = System.currentTimeMillis();
        System.out.println("String time: " + (end - start) + "ms");

        // Test 2: StringBuffer (thread-safe)
        start = System.currentTimeMillis();
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < iterations; i++) {
            sb.append("a");  // Modifies same object
        }
        end = System.currentTimeMillis();
        System.out.println("StringBuffer time: " + (end - start) + "ms");

        // Test 3: StringBuilder (not thread-safe)
        start = System.currentTimeMillis();
        StringBuilder sBuilder = new StringBuilder();
        for (int i = 0; i < iterations; i++) {
            sBuilder.append("a");  // Fastest
        }
        end = System.currentTimeMillis();
        System.out.println("StringBuilder time: " + (end - start) + "ms");

        // StringBuffer thread-safety demo
        StringBuffer buffer = new StringBuffer();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                buffer.append("A");
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                buffer.append("B");
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("StringBuffer length: " + buffer.length());  // Always 2000

        // StringBuilder methods
        StringBuilder builder = new StringBuilder("Hello");
        builder.append(" World");
        builder.insert(5, ",");
        builder.delete(0, 6);
        builder.reverse();
        System.out.println(builder);  // dlroW

        builder.replace(0, 5, "Hello");
        System.out.println(builder);

        // Capacity management
        StringBuilder sb2 = new StringBuilder();  // Default capacity: 16
        System.out.println("Initial capacity: " + sb2.capacity());

        sb2.append("This is a longer string");
        System.out.println("After append capacity: " + sb2.capacity());  // Auto-expanded

        sb2.ensureCapacity(100);
        System.out.println("After ensure capacity: " + sb2.capacity());
    }
}
```

**Memory Representation:**

```
String (Immutable):
str = "A" → [A]
str += "B" → [A] [AB]  ← new object
str += "C" → [A] [AB] [ABC]  ← new object
                ↑garbage
Memory: O(n²) for n concatenations

StringBuilder (Mutable):
sb = "A" → [A        capacity:16]
sb.append("B") → [AB       capacity:16]
sb.append("C") → [ABC      capacity:16]
Memory: O(n) for n concatenations
```

**Detailed Comparison:**

```
Feature              | String        | StringBuffer  | StringBuilder
---------------------|---------------|---------------|---------------
Immutable            | Yes           | No            | No
Thread-safe          | Yes           | Yes           | No
Performance          | Slow          | Moderate      | Fast
Memory               | More (new obj)| Less          | Less
Synchronized         | N/A           | Yes           | No
Introduced           | Java 1.0      | Java 1.0      | Java 5
Use when             | Few changes   | Multi-thread  | Single-thread
Methods              | Limited       | Full set      | Full set
```

**Follow-up Questions:**

- When would you use StringBuffer instead of StringBuilder?
- How does StringBuilder handle capacity?

---

## Collections Framework

### 21. What is the Java Collections Framework?

**Hierarchy:**

```
Collection (Interface)
├── List (Interface)
│   ├── ArrayList
│   ├── LinkedList
│   └── Vector
│       └── Stack
├── Set (Interface)
│   ├── HashSet
│   ├── LinkedHashSet
│   └── SortedSet (Interface)
│       └── TreeSet
└── Queue (Interface)
    ├── PriorityQueue
    ├── Deque (Interface)
    │   ├── ArrayDeque
    │   └── LinkedList
    └── BlockingQueue (Interface)

Map (Interface) - separate hierarchy
├── HashMap
├── LinkedHashMap
├── Hashtable
└── SortedMap (Interface)
    └── TreeMap
```

**Example:**

```java
import java.util.*;

public class CollectionsOverview {
    public static void main(String[] args) {
        // List - ordered, allows duplicates
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Apple");  // Duplicate allowed
        System.out.println("ArrayList: " + arrayList);

        List<String> linkedList = new LinkedList<>();
        linkedList.add("First");
        linkedList.add("Second");
        System.out.println("LinkedList: " + linkedList);

        // Set - no duplicates
        Set<String> hashSet = new HashSet<>();
        hashSet.add("Red");
        hashSet.add("Blue");
        hashSet.add("Red");  // Duplicate ignored
        System.out.println("HashSet: " + hashSet);  // Order not guaranteed

        Set<String> treeSet = new TreeSet<>();
        treeSet.add("Zebra");
        treeSet.add("Apple");
        treeSet.add("Mango");
        System.out.println("TreeSet: " + treeSet);  // Sorted: [Apple, Mango, Zebra]

        // Queue - FIFO
        Queue<String> queue = new LinkedList<>();
        queue.offer("First");
        queue.offer("Second");
        queue.offer("Third");
        System.out.println("Queue poll: " + queue.poll());  // First

        // Map - key-value pairs
        Map<String, Integer> hashMap = new HashMap<>();
        hashMap.put("Alice", 85);
        hashMap.put("Bob", 90);
        hashMap.put("Charlie", 78);
        System.out.println("HashMap: " + hashMap);

        // Iterating
        for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
```

**Follow-up Questions:**

- What is the difference between Collection and Collections?
- Why is Map not part of Collection interface?

### 22. What is the difference between ArrayList and LinkedList?

**Example:**

```java
import java.util.*;

public class ArrayListVsLinkedList {
    public static void main(String[] args) {
        // ArrayList - backed by array
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.add("A");  // Fast
        arrayList.add("B");
        arrayList.add("C");
        arrayList.get(1);    // Fast - O(1)
        arrayList.add(1, "X");  // Slow - shifts elements
        arrayList.remove(0);    // Slow - shifts elements

        // LinkedList - backed by doubly-linked list
        LinkedList<String> linkedList = new LinkedList<>();
        linkedList.add("A");  // Fast
        linkedList.add("B");
        linkedList.add("C");
        linkedList.get(1);    // Slow - O(n) traversal
        linkedList.add(1, "X");  // Fast - just change pointers
        linkedList.removeFirst();  // Fast
        linkedList.removeLast();   // Fast

        // LinkedList as Queue
        linkedList.offerFirst("First");
        linkedList.offerLast("Last");
        System.out.println(linkedList.pollFirst());
        System.out.println(linkedList.pollLast());

        // Performance comparison
        int n = 100000;

        // ArrayList: Fast access
        ArrayList<Integer> al = new ArrayList<>();
        long start = System.nanoTime();
        for (int i = 0; i < n; i++) {
            al.add(i);
        }
        for (int i = 0; i < 10000; i++) {
            al.get(i);  // Random access
        }
        long end = System.nanoTime();
        System.out.println("ArrayList access: " + (end - start));

        // LinkedList: Fast insertion at beginning
        LinkedList<Integer> ll = new LinkedList<>();
        start = System.nanoTime();
        for (int i = 0; i < n; i++) {
            ll.addFirst(i);  // Insert at beginning
        }
        end = System.nanoTime();
        System.out.println("LinkedList insertions: " + (end - start));
    }
}
```

**Visual Representation:**

```
ArrayList (Array-based):
┌───┬───┬───┬───┬───┬───┬───┬───┐
│ A │ B │ C │ D │   │   │   │   │  Contiguous memory
└───┴───┴───┴───┴───┴───┴───┴───┘
 [0] [1] [2] [3]              capacity: 8

Access: arr[index] → O(1)
Insert middle: Shift all elements → O(n)

LinkedList (Node-based):
┌─────┐   ┌─────┐   ┌─────┐   ┌─────┐
│  A  │←→│  B  │←→│  C  │←→│  D  │
└──┬──┘   └──┬──┘   └──┬──┘   └──┬──┘
   ↓         ↓         ↓         ↓
 Node      Node      Node      Node

Access: Traverse from head → O(n)
Insert middle: Change pointers → O(1)
```

**Comparison:**

```
Operation        | ArrayList  | LinkedList
-----------------|------------|------------
get(index)       | O(1)       | O(n)
add(element)     | O(1)*      | O(1)
add(index, elem) | O(n)       | O(1)**
remove(index)    | O(n)       | O(1)**
remove(element)  | O(n)       | O(n)
Memory           | Less       | More (pointers)
Cache locality   | Better     | Poor
Use case         | Random     | Sequential
                 | access     | operations
* Amortized O(1), O(n) when resizing
** O(1) if position known, O(n) to find position
```

**Follow-up Questions:**

- When would you use LinkedList over ArrayList?
- What is the initial capacity of ArrayList?

### 23. What is the difference between HashSet and TreeSet?

**Example:**

```java
import java.util.*;

public class HashSetVsTreeSet {
    public static void main(String[] args) {
        // HashSet - unordered, uses HashMap
        HashSet<Integer> hashSet = new HashSet<>();
        hashSet.add(50);
        hashSet.add(20);
        hashSet.add(70);
        hashSet.add(10);
        hashSet.add(30);
        System.out.println("HashSet: " + hashSet);  // Unordered: [50, 20, 70, 10, 30]

        // TreeSet - sorted, uses TreeMap (Red-Black Tree)
        TreeSet<Integer> treeSet = new TreeSet<>();
        treeSet.add(50);
        treeSet.add(20);
        treeSet.add(70);
        treeSet.add(10);
        treeSet.add(30);
        System.out.println("TreeSet: " + treeSet);  // Sorted: [10, 20, 30, 50, 70]

        // HashSet with custom objects
        HashSet<Person> personHashSet = new HashSet<>();
        personHashSet.add(new Person("Alice", 25));
        personHashSet.add(new Person("Bob", 30));
        personHashSet.add(new Person("Alice", 25));  // Duplicate (if equals/hashCode properly implemented)
        System.out.println("Person HashSet size: " + personHashSet.size());

        // TreeSet with custom objects (requires Comparable or Comparator)
        TreeSet<Person> personTreeSet = new TreeSet<>(
            Comparator.comparing(Person::getName)
        );
        personTreeSet.add(new Person("Charlie", 28));
        personTreeSet.add(new Person("Alice", 25));
        personTreeSet.add(new Person("Bob", 30));
        System.out.println("Person TreeSet: " + personTreeSet);  // Sorted by name

        // TreeSet operations
        TreeSet<Integer> numbers = new TreeSet<>();
        numbers.addAll(Arrays.asList(5, 2, 8, 1, 9, 3, 7));

        System.out.println("First: " + numbers.first());     // 1
        System.out.println("Last: " + numbers.last());       // 9
        System.out.println("Lower than 5: " + numbers.lower(5));   // 3
        System.out.println("Higher than 5: " + numbers.higher(5)); // 7
        System.out.println("Floor of 6: " + numbers.floor(6));     // 5
        System.out.println("Ceiling of 6: " + numbers.ceiling(6)); // 7

        // SubSet operations
        System.out.println("HeadSet(<5): " + numbers.headSet(5));      // [1, 2, 3]
        System.out.println("TailSet(>=5): " + numbers.tailSet(5));     // [5, 7, 8, 9]
        System.out.println("SubSet[2,8): " + numbers.subSet(2, 8));    // [2, 3, 5, 7]

        // Performance comparison
        int n = 100000;

        // HashSet performance
        HashSet<Integer> hs = new HashSet<>();
        long start = System.nanoTime();
        for (int i = 0; i < n; i++) {
            hs.add(i);
        }
        long end = System.nanoTime();
        System.out.println("HashSet insertion: " + (end - start));

        // TreeSet performance
        TreeSet<Integer> ts = new TreeSet<>();
        start = System.nanoTime();
        for (int i = 0; i < n; i++) {
            ts.add(i);
        }
        end = System.nanoTime();
        System.out.println("TreeSet insertion: " + (end - start));
    }
}

class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age && Objects.equals(name, person.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

    @Override
    public String toString() {
        return name + "(" + age + ")";
    }
}
```

**Visual Representation:**

```
HashSet (Hash Table):
┌─────────────────────┐
│  Hash Bucket Array  │
│ [0] → null          │
│ [1] → [30]          │
│ [2] → [10]→[50]     │  ← Collision handling (chaining)
│ [3] → null          │
│ [4] → [20]          │
│ [5] → [70]          │
│ ... │
└─────────────────────┘

TreeSet (Red-Black Tree):
        50 (Black)
       /  \
      /    \
   20(R)   70(R)
   /  \
 10(B) 30(B)

Balanced, sorted structure
```

**Comparison:**

```
Feature          | HashSet         | TreeSet
-----------------|-----------------|------------------
Ordering         | No order        | Sorted (natural or Comparator)
Implementation   | HashMap         | TreeMap (Red-Black Tree)
Performance      | O(1) avg        | O(log n)
Null elements    | Allows one null | No null
Comparable       | Not required    | Required
Methods          | Basic Set ops   | + NavigableSet methods
Use case         | Fast lookup     | Sorted iteration
```

**Follow-up Questions:**

- What is a Red-Black tree?
- Can TreeSet contain null values?

### 24. What is the difference between HashMap and Hashtable?

**Example:**

```java
import java.util.*;
import java.util.concurrent.*;

public class HashMapVsHashtable {
    public static void main(String[] args) {
        // HashMap - not synchronized
        HashMap<String, Integer> hashMap = new HashMap<>();
        hashMap.put("Apple", 100);
        hashMap.put("Banana", 200);
        hashMap.put(null, 300);      // null key allowed
        hashMap.put("Cherry", null); // null value allowed
        System.out.println("HashMap: " + hashMap);

        // Hashtable - synchronized
        Hashtable<String, Integer> hashtable = new Hashtable<>();
        hashtable.put("Apple", 100);
        hashtable.put("Banana", 200);
        // hashtable.put(null, 300);      // NullPointerException
        // hashtable.put("Cherry", null); // NullPointerException
        System.out.println("Hashtable: " + hashtable);

        // ConcurrentHashMap - modern alternative
        ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
        concurrentMap.put("Apple", 100);
        concurrentMap.put("Banana", 200);
        // concurrentMap.put(null, 300);  // NullPointerException

        // Thread safety demonstration
        Map<Integer, Integer> unsafeMap = new HashMap<>();
        Map<Integer, Integer> safeMap = Collections.synchronizedMap(new HashMap<>());
        Map<Integer, Integer> concMap = new ConcurrentHashMap<>();

        // HashMap without synchronization (unsafe)
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                unsafeMap.put(i, i);
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 1000; i < 2000; i++) {
                unsafeMap.put(i, i);
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Unsafe map size: " + unsafeMap.size());  // May be < 2000

        // Performance comparison
        int n = 100000;

        // HashMap performance
        HashMap<Integer, Integer> hm = new HashMap<>();
        long start = System.nanoTime();
        for (int i = 0; i < n; i++) {
            hm.put(i, i);
        }
        long end = System.nanoTime();
        System.out.println("HashMap insertion: " + (end - start));

        // Hashtable performance
        Hashtable<Integer, Integer> ht = new Hashtable<>();
        start = System.nanoTime();
        for (int i = 0; i < n; i++) {
            ht.put(i, i);
        }
        end = System.nanoTime();
        System.out.println("Hashtable insertion: " + (end - start));

        // ConcurrentHashMap performance
        ConcurrentHashMap<Integer, Integer> chm = new ConcurrentHashMap<>();
        start = System.nanoTime();
        for (int i = 0; i < n; i++) {
            chm.put(i, i);
        }
        end = System.nanoTime();
        System.out.println("ConcurrentHashMap insertion: " + (end - start));

        // HashMap internal working
        System.out.println("\nHashMap internal demonstration:");
        HashMap<String, String> map = new HashMap<>();
        map.put("Key1", "Value1");  // hashCode() → bucket index → store

        // Custom hashCode demonstration
        HashMap<CustomKey, String> customMap = new HashMap<>();
        CustomKey key1 = new CustomKey("A");
        CustomKey key2 = new CustomKey("A");

        customMap.put(key1, "First");
        System.out.println("Get with key1: " + customMap.get(key1));
        System.out.println("Get with key2: " + customMap.get(key2));  // Same if equals/hashCode proper
    }
}

class CustomKey {
    String key;

    CustomKey(String key) {
        this.key = key;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CustomKey customKey = (CustomKey) o;
        return Objects.equals(key, customKey.key);
    }

    @Override
    public int hashCode() {
        return Objects.hash(key);
    }
}
```

**HashMap Internal Working:**

```
HashMap Structure:

1. Put Operation:
   key.hashCode() → hash → index = hash % capacity

2. Bucket Array:
   ┌─────────────────────────┐
   │ [0] → null              │
   │ [1] → Node(k1, v1)      │
   │ [2] → Node(k2, v2) →    │  ← Collision (chaining)
   │         Node(k3, v3)    │
   │ [3] → null              │
   │ ...                     │
   └─────────────────────────┘

3. Node Structure:
   ┌────────────────────┐
   │ hash: int          │
   │ key: K             │
   │ value: V           │
   │ next: Node         │  ← Points to next node in bucket
   └────────────────────┘

4. Tree Node (after threshold):
   If bucket size > 8 → Convert to TreeNode (Red-Black Tree)
```

**Comparison:**

```
Feature          | HashMap           | Hashtable      | ConcurrentHashMap
-----------------|-------------------|----------------|-------------------
Thread-safe      | No                | Yes            | Yes
Null key         | One null allowed  | Not allowed    | Not allowed
Null value       | Allowed           | Not allowed    | Not allowed
Performance      | Fast              | Slow           | Fast
Synchronization  | No                | Method level   | Segment level
Inheritance      | AbstractMap       | Dictionary     | AbstractMap
Introduced       | Java 1.2          | Java 1.0       | Java 1.5
Iterator         | Fail-fast         | Fail-safe      | Fail-safe
Use case         | Single thread     | Legacy code    | Multi-thread
```

**Follow-up Questions:**

- How does HashMap handle collisions?
- What is the load factor in HashMap?
- When does HashMap convert LinkedList to Tree?

### 25. How does HashMap work internally?

**Detailed Example:**

```java
import java.util.*;

public class HashMapInternals {
    public static void main(String[] args) {
        // Creating HashMap
        HashMap<Integer, String> map = new HashMap<>();
        // Default initial capacity: 16
        // Default load factor: 0.75
        // Threshold = capacity * load factor = 16 * 0.75 = 12

        // Put operation
        map.put(1, "One");    // hash(1) → index → store
        map.put(2, "Two");
        map.put(17, "Seventeen");  // 17 % 16 = 1 (collision with key 1)

        // Get operation
        String value = map.get(1);  // hash(1) → index → traverse linked list → compare keys

        // Demonstrating hash collision
        HashMap<KeyWithBadHash, String> collisionMap = new HashMap<>();
        collisionMap.put(new KeyWithBadHash(1), "First");
        collisionMap.put(new KeyWithBadHash(2), "Second");  // Same hash, different key
        collisionMap.put(new KeyWithBadHash(3), "Third");   // Same hash, different key

        System.out.println("Size: " + collisionMap.size());  // 3

        // Capacity and Load Factor
        HashMap<Integer, Integer> sizedMap = new HashMap<>(32, 0.5f);
        System.out.println("Initial capacity: 32, Load factor: 0.5");
        System.out.println("Threshold: " + (32 * 0.5));  // Will resize at 16 elements

        // Demonstrating resizing
        HashMap<Integer, String> resizeDemo = new HashMap<>(4);
        System.out.println("\nInserting elements to demonstrate resizing:");
        for (int i = 1; i <= 10; i++) {
            resizeDemo.put(i, "Value" + i);
            System.out.println("Size: " + resizeDemo.size());
            // Resize happens at size > capacity * 0.75
        }

        // Hash function demonstration
        System.out.println("\nHash function results:");
        Integer key1 = 15;
        System.out.println("Key: " + key1);
        System.out.println("hashCode: " + key1.hashCode());
        System.out.println("hash(): " + hash(key1));
        System.out.println("Index (capacity 16): " + (hash(key1) & 15));

        // TreeNode conversion (Java 8+)
        // When bucket size > 8, LinkedList converts to Red-Black Tree
        HashMap<KeyWithSameHash, String> treeDemo = new HashMap<>();
        for (int i = 0; i < 10; i++) {
            treeDemo.put(new KeyWithSameHash(i), "Value" + i);
        }
        System.out.println("\nTreeDemo size: " + treeDemo.size());
        System.out.println("(After 8 collisions, LinkedList converts to Tree)");
    }

    // Simplified hash function (similar to Java 8 HashMap)
    static int hash(Object key) {
        int h;
        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
    }
}

// Class with bad hash (all objects have same hash)
class KeyWithBadHash {
    int value;

    KeyWithBadHash(int value) {
        this.value = value;
    }

    @Override
    public int hashCode() {
        return 1;  // Bad practice! All objects hash to same bucket
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        KeyWithBadHash that = (KeyWithBadHash) o;
        return value == that.value;
    }
}

// Class where all instances hash to same value
class KeyWithSameHash {
    int value;

    KeyWithSameHash(int value) {
        this.value = value;
    }

    @Override
    public int hashCode() {
        return 1;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        KeyWithSameHash that = (KeyWithSameHash) o;
        return value == that.value;
    }
}
```

**HashMap Internal Structure (Java 8+):**

```
HashMap Structure:

┌────────────────────────────────────────────────────────────┐
│  HashMap                                                   │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Node<K,V>[] table (bucket array)                    │ │
│  │  int size (number of entries)                        │ │
│  │  int threshold (capacity * loadFactor)               │ │
│  │  float loadFactor (default 0.75)                     │ │
│  └──────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────┘

Bucket Array (table):
┌───────────────────────────────────────────────────────────┐
│ [0]  →  null                                              │
│ [1]  →  Node → Node → Node  (LinkedList for collisions)  │
│ [2]  →  TreeNode (Red-Black Tree if size > 8)            │
│ [3]  →  Node                                              │
│ [4]  →  null                                              │
│ ...                                                       │
│ [15] →  Node → Node                                       │
└───────────────────────────────────────────────────────────┘

Node Structure:
┌────────────────────┐
│ final int hash     │  ← Cached hash value
│ final K key        │
│ V value            │
│ Node<K,V> next     │  ← Next node in bucket
└────────────────────┘
```

**Put Operation Flow:**

```
1. Calculate hash:
   hash = hash(key.hashCode())

2. Calculate index:
   index = (n - 1) & hash
   where n = table.length

3. Check if bucket empty:
   if (table[index] == null)
       table[index] = new Node(hash, key, value, null)

4. If collision (bucket not empty):
   a) Check if first node matches:
      if (firstNode.hash == hash && firstNode.key.equals(key))
          update value

   b) If TreeNode:
      Use tree put operation

   c) Else (LinkedList):
      Traverse list:
      - If key found: update value
      - If not found: append new node
      - If list size > 8: convert to tree

5. Check if resize needed:
   if (++size > threshold)
       resize()  // Double capacity, rehash all entries
```

**Get Operation Flow:**

```
1. Calculate hash:
   hash = hash(key.hashCode())

2. Calculate index:
   index = (n - 1) & hash

3. Check first node:
   if (first.hash == hash && first.key.equals(key))
       return first.value

4. If more nodes:
   if (TreeNode)
       Use tree search: O(log n)
   else
       Traverse LinkedList: O(n)
```

**Resize Operation:**

```
When size > threshold:

Old Table (capacity 4):                New Table (capacity 8):
┌────────────────────┐                ┌────────────────────┐
│ [0] → Node(0)      │                │ [0] → Node(0)      │
│ [1] → Node(1) → 5  │  ────rehash→→  │ [1] → Node(1)      │
│ [2] → Node(2)      │                │ [2] → Node(2)      │
│ [3] → Node(3)      │                │ [3] → Node(3)      │
└────────────────────┘                │ [4] → null         │
                                      │ [5] → Node(5)      │
                                      │ [6] → null         │
                                      │ [7] → null         │
                                      └────────────────────┘

Rehashing distributes entries into new buckets
```

**Key Points:**

1. **Load Factor**: 0.75 balances time and space
2. **Capacity**: Always power of 2 (for efficient modulo)
3. **Treeify Threshold**: 8 (LinkedList → Tree)
4. **Untreeify Threshold**: 6 (Tree → LinkedList)
5. **Hash Function**: XOR with >>> 16 for better distribution

**Follow-up Questions:**

- Why is HashMap capacity always a power of 2?
- What happens if hashCode() always returns the same value?
- How does HashMap handle concurrent modification?

---

## Exception Handling

### 26. What is Exception Handling in Java?

Exception handling is a mechanism to handle runtime errors, maintaining the normal flow of the application.

**Exception Hierarchy:**

```
Throwable
├── Error (Unchecked - System errors)
│   ├── OutOfMemoryError
│   ├── StackOverflowError
│   └── VirtualMachineError
└── Exception
    ├── IOException (Checked)
    │   ├── FileNotFoundException
    │   └── EOFException
    ├── SQLException (Checked)
    ├── ClassNotFoundException (Checked)
    └── RuntimeException (Unchecked)
        ├── NullPointerException
        ├── ArrayIndexOutOfBoundsException
        ├── ArithmeticException
        ├── IllegalArgumentException
        └── NumberFormatException
```

**Example:**

```java
import java.io.*;

public class ExceptionHandlingExample {
    public static void main(String[] args) {
        // Basic try-catch
        try {
            int result = 10 / 0;  // ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero: " + e.getMessage());
        }

        // Multiple catch blocks
        try {
            String str = null;
            System.out.println(str.length());  // NullPointerException

            int[] arr = new int[5];
            arr[10] = 50;  // ArrayIndexOutOfBoundsException
        } catch (NullPointerException e) {
            System.out.println("Null pointer: " + e.getMessage());
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index error: " + e.getMessage());
        } catch (Exception e) {  // Generic catch (should be last)
            System.out.println("General exception: " + e.getMessage());
        }

        // Multi-catch (Java 7+)
        try {
            // Some code
        } catch (IOException | SQLException e) {
            System.out.println("IO or SQL exception: " + e.getMessage());
        }

        // try-catch-finally
        try {
            System.out.println("In try block");
            return;  // Finally still executes!
        } catch (Exception e) {
            System.out.println("In catch block");
        } finally {
            System.out.println("In finally block - always executes");
        }

        // try-with-resources (Java 7+)
        try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
            String line = br.readLine();
        } catch (IOException e) {
            System.out.println("File error: " + e.getMessage());
        }
        // Resource automatically closed (no need for finally)

        // Throwing exceptions
        try {
            validateAge(15);
        } catch (InvalidAgeException e) {
            System.out.println("Age validation failed: " + e.getMessage());
        }

        // Exception propagation
        try {
            method1();
        } catch (IOException e) {
            System.out.println("Caught in main: " + e.getMessage());
        }
    }

    // Custom exception
    static void validateAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above");
        }
    }

    // Exception propagation
    static void method1() throws IOException {
        method2();
    }

    static void method2() throws IOException {
        throw new IOException("IOException from method2");
    }
}

// Custom exception class
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}
```

**Exception Handling Flow:**

```
Try Block
   ↓
Exception Occurs?
   ├─ No  → Finally Block → Continue
   └─ Yes → Catch Block → Finally Block → Continue

Exception Propagation:
main()
  ↓ calls
method1()
  ↓ calls
method2()
  ↓ throws
Exception
  ↑ propagates
method1() (throws)
  ↑ propagates
main() (catches)
```

**Follow-up Questions:**

- What is the difference between checked and unchecked exceptions?
- Can we have try without catch?
- When does finally block not execute?

### 27. What is the difference between Checked and Unchecked Exceptions?

**Example:**

```java
import java.io.*;
import java.sql.*;

public class CheckedVsUnchecked {
    public static void main(String[] args) {
        // Unchecked Exceptions (RuntimeException and subclasses)
        // Compiler doesn't force you to handle

        // 1. NullPointerException
        String str = null;
        try {
            str.length();
        } catch (NullPointerException e) {
            System.out.println("NPE: " + e.getMessage());
        }

        // 2. ArrayIndexOutOfBoundsException
        int[] arr = {1, 2, 3};
        try {
            System.out.println(arr[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Index error: " + e.getMessage());
        }

        // 3. ArithmeticException
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic error: " + e.getMessage());
        }

        // Checked Exceptions (Exception and subclasses except RuntimeException)
        // Compiler forces you to handle or declare

        // 1. IOException - must handle or declare
        try {
            FileInputStream fis = new FileInputStream("file.txt");
            fis.close();
        } catch (IOException e) {
            System.out.println("IO error: " + e.getMessage());
        }

        // 2. SQLException - must handle or declare
        try {
            // Connection conn = DriverManager.getConnection(...);
        } catch (Exception e) {  // Catching general exception for demo
            System.out.println("SQL error");
        }

        // Method with checked exception
        try {
            readFile("data.txt");
        } catch (IOException e) {
            System.out.println("File read error: " + e.getMessage());
        }

        // Method with unchecked exception (no need to catch)
        divide(10, 2);
    }

    // Checked exception - must declare or handle
    static void readFile(String filename) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(filename));
        reader.readLine();
        reader.close();
    }

    // Unchecked exception - optional to declare
    static int divide(int a, int b) /* can optionally add: throws ArithmeticException */ {
        return a / b;  // May throw ArithmeticException
    }

    // Handling multiple exceptions
    static void processFile(String filename) {
        try {
            FileReader fr = new FileReader(filename);  // Checked: FileNotFoundException
            int data = fr.read();  // Checked: IOException
            fr.close();

            int result = 10 / 0;  // Unchecked: ArithmeticException
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("IO error: " + e.getMessage());
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic error: " + e.getMessage());
        }
    }
}
```

**Visual Representation:**

```
Exception Hierarchy:

Throwable
    ↓
Exception (Checked)
    ├── IOException ────────────→ Must handle or declare
    ├── SQLException ──────────→ Must handle or declare
    ├── ClassNotFoundException →  Must handle or declare
    └── RuntimeException (Unchecked)
            ├── NullPointerException ─────→ Optional to handle
            ├── ArrayIndexOutOfBounds ────→ Optional to handle
            ├── ArithmeticException ──────→ Optional to handle
            └── IllegalArgumentException →  Optional to handle

Error (Unchecked - System errors)
    ├── OutOfMemoryError ─→ Should not catch
    └── StackOverflowError →  Should not catch
```

**Comparison:**

```
Feature          | Checked Exception        | Unchecked Exception
-----------------|--------------------------|---------------------------
Inheritance      | Exception (not Runtime)  | RuntimeException, Error
Compile-time     | Must handle/declare      | Not required
When to use      | Recoverable conditions   | Programming errors
Examples         | IOException, SQLException| NPE, ArithmeticException
Best practice    | External resources       | Logic bugs
Recovery         | Can recover              | Usually can't recover
```

**Decision Tree:**

```
Is the error recoverable?
   ├─ Yes → Checked Exception
   │        (IOException, SQLException)
   │        Caller can handle
   │
   └─ No  → Is it a programming bug?
            ├─ Yes → Unchecked Exception
            │        (NullPointerException, IllegalArgumentException)
            │        Fix the code
            │
            └─ No  → System error (Error)
                     (OutOfMemoryError, StackOverflowError)
                     Application should terminate
```

**Follow-up Questions:**

- Should you catch Error class exceptions?
- What is exception chaining?
- When would you create a custom checked vs unchecked exception?

### 28. What is try-with-resources?

Try-with-resources automatically closes resources that implement AutoCloseable interface.

**Example:**

```java
import java.io.*;
import java.sql.*;

public class TryWithResourcesExample {
    public static void main(String[] args) {
        // Traditional way - manual resource management
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader("file.txt"));
            String line = reader.readLine();
            System.out.println(line);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (reader != null) {
                    reader.close();  // Must manually close
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        // Try-with-resources (Java 7+) - automatic resource management
        try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
            String line = br.readLine();
            System.out.println(line);
        } catch (IOException e) {
            e.printStackTrace();
        }
        // Resource automatically closed, even if exception occurs

        // Multiple resources
        try (
            FileInputStream fis = new FileInputStream("input.txt");
            FileOutputStream fos = new FileOutputStream("output.txt");
            BufferedReader br = new BufferedReader(new InputStreamReader(fis))
        ) {
            String line;
            while ((line = br.readLine()) != null) {
                fos.write(line.getBytes());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        // All resources closed in reverse order: br → fos → fis

        // Custom AutoCloseable resource
        try (MyResource resource = new MyResource()) {
            resource.doSomething();
        } catch (Exception e) {
            e.printStackTrace();
        }
        // MyResource.close() automatically called

        // Java 9: Effectively final variables
        MyResource res = new MyResource();
        try (res) {  // Java 9+: can use already initialized variable
            res.doSomething();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

// Custom resource implementing AutoCloseable
class MyResource implements AutoCloseable {
    public MyResource() {
        System.out.println("Resource opened");
    }

    public void doSomething() {
        System.out.println("Doing something");
    }

    @Override
    public void close() {
        System.out.println("Resource closed");
    }
}

// Demonstrating suppressed exceptions
class SuppressedExceptionDemo {
    public static void main(String[] args) {
        try (ResourceWithException res = new ResourceWithException()) {
            throw new RuntimeException("Exception in try block");
        } catch (Exception e) {
            System.out.println("Main exception: " + e.getMessage());

            // Close() exception is suppressed
            Throwable[] suppressed = e.getSuppressed();
            for (Throwable t : suppressed) {
                System.out.println("Suppressed: " + t.getMessage());
            }
        }
    }
}

class ResourceWithException implements AutoCloseable {
    @Override
    public void close() throws Exception {
        throw new Exception("Exception in close()");
    }
}
```

**Execution Flow:**

```
Try-with-resources Flow:

1. Initialize resource(s)
   ↓
2. Execute try block
   ↓
3. Exception occurs?
   ├─ Yes → Save exception
   │         ↓
   │    Close resources (reverse order)
   │         ↓
   │    Close throws exception?
   │    ├─ Yes → Add as suppressed
   │    └─ No  → Continue
   │         ↓
   │    Throw original exception
   │
   └─ No  → Close resources (reverse order)
             ↓
        Continue execution
```

**Follow-up Questions:**

- What is the AutoCloseable interface?
- What happens if both try block and close() throw exceptions?
- Can you use try-with-resources without catch block?

### 29. What is exception chaining?

Exception chaining allows you to relate one exception with another exception.

**Example:**

```java
import java.io.*;

public class ExceptionChainingExample {
    public static void main(String[] args) {
        try {
            processOrder(123);
        } catch (OrderProcessingException e) {
            System.out.println("Main exception: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());

            // Print full stack trace with causes
            e.printStackTrace();
        }
    }

    static void processOrder(int orderId) throws OrderProcessingException {
        try {
            validateOrder(orderId);
        } catch (ValidationException e) {
            // Chain the exception
            throw new OrderProcessingException("Failed to process order " + orderId, e);
        }
    }

    static void validateOrder(int orderId) throws ValidationException {
        try {
            checkInventory(orderId);
        } catch (IOException e) {
            // Chain the exception
            throw new ValidationException("Validation failed", e);
        }
    }

    static void checkInventory(int orderId) throws IOException {
        throw new IOException("Database connection failed");
    }

    // Example with initCause()
    static void demonstrateInitCause() {
        try {
            Exception originalException = new Exception("Original exception");
            Exception chainedException = new Exception("New exception");
            chainedException.initCause(originalException);

            throw chainedException;
        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
            System.out.println("Cause: " + e.getCause().getMessage());
        }
    }
}

// Custom exceptions
class OrderProcessingException extends Exception {
    public OrderProcessingException(String message, Throwable cause) {
        super(message, cause);
    }
}

class ValidationException extends Exception {
    public ValidationException(String message, Throwable cause) {
        super(message, cause);
    }
}
```

**Visual Representation:**

```
Exception Chain:

main()
  ↓ calls
processOrder()
  ↓ calls
validateOrder()
  ↓ calls
checkInventory()
  ↓ throws
IOException: "Database connection failed"
  ↑ wrapped by
ValidationException: "Validation failed"
  Cause: IOException
  ↑ wrapped by
OrderProcessingException: "Failed to process order"
  Cause: ValidationException
    Cause: IOException
  ↑ caught in
main()

Stack Trace:
OrderProcessingException: Failed to process order 123
    at processOrder(...)
Caused by: ValidationException: Validation failed
    at validateOrder(...)
Caused by: IOException: Database connection failed
    at checkInventory(...)
```

**Follow-up Questions:**

- How do you access the original cause of an exception?
- What is the benefit of exception chaining?

### 30. What are custom exceptions?

**Example:**

```java
public class CustomExceptionExample {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("123456", 1000);

        try {
            account.withdraw(1500);
        } catch (InsufficientFundsException e) {
            System.out.println("Error: " + e.getMessage());
            System.out.println("Attempted: $" + e.getAttemptedAmount());
            System.out.println("Available: $" + e.getAvailableBalance());
        }

        try {
            account.setInterestRate(-5);
        } catch (InvalidInterestRateException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}

// Custom checked exception with additional data
class InsufficientFundsException extends Exception {
    private double attemptedAmount;
    private double availableBalance;

    public InsufficientFundsException(String message, double attempted, double available) {
        super(message);
        this.attemptedAmount = attempted;
        this.availableBalance = available;
    }

    public double getAttemptedAmount() {
        return attemptedAmount;
    }

    public double getAvailableBalance() {
        return availableBalance;
    }
}

// Custom unchecked exception
class InvalidInterestRateException extends RuntimeException {
    public InvalidInterestRateException(String message) {
        super(message);
    }
}

class BankAccount {
    private String accountNumber;
    private double balance;
    private double interestRate;

    public BankAccount(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(
                "Insufficient funds for withdrawal",
                amount,
                balance
            );
        }
        balance -= amount;
    }

    public void setInterestRate(double rate) {
        if (rate < 0 || rate > 100) {
            throw new InvalidInterestRateException(
                "Interest rate must be between 0 and 100"
            );
        }
        this.interestRate = rate;
    }
}
```

**Follow-up Questions:**

- When should you create a custom exception?
- Should custom exceptions be checked or unchecked?

---

## Multithreading and Concurrency

### 31. What is a thread in Java?

A thread is a lightweight subprocess, the smallest unit of processing. Java supports multithreading through the Thread class and Runnable interface.

**Example:**

```java
public class ThreadExample {
    public static void main(String[] args) {
        // Method 1: Extending Thread class
        MyThread thread1 = new MyThread("Thread-1");
        thread1.start();  // Starts a new thread

        // Method 2: Implementing Runnable interface
        Thread thread2 = new Thread(new MyRunnable("Thread-2"));
        thread2.start();

        // Method 3: Anonymous class
        Thread thread3 = new Thread(new Runnable() {
            @Override
            public void run() {
                for (int i = 0; i < 5; i++) {
                    System.out.println("Anonymous thread: " + i);
                }
            }
        });
        thread3.start();

        // Method 4: Lambda expression (Java 8+)
        Thread thread4 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Lambda thread: " + i);
            }
        });
        thread4.start();

        // Main thread
        for (int i = 0; i < 5; i++) {
            System.out.println("Main thread: " + i);
        }

        // Thread states demonstration
        demonstrateThreadStates();
    }

    static void demonstrateThreadStates() {
        Thread thread = new Thread(() -> {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        System.out.println("State after creation: " + thread.getState());  // NEW

        thread.start();
        System.out.println("State after start: " + thread.getState());     // RUNNABLE

        try {
            Thread.sleep(100);
            System.out.println("State while sleeping: " + thread.getState());  // TIMED_WAITING

            thread.join();
            System.out.println("State after completion: " + thread.getState());  // TERMINATED
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

// Method 1: Extending Thread class
class MyThread extends Thread {
    private String name;

    public MyThread(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(name + ": " + i);
            try {
                Thread.sleep(100);  // Sleep for 100ms
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

// Method 2: Implementing Runnable interface (Preferred)
class MyRunnable implements Runnable {
    private String name;

    public MyRunnable(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(name + ": " + i);
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
```

**Thread Lifecycle:**

```
Thread States:

NEW
 ↓ start()
RUNNABLE ←──────┐
 ↓               │
RUNNING          │
 ↓               │
 ├→ sleep()   → TIMED_WAITING ──→┘
 ├→ wait()    → WAITING ─────────→┘
 ├→ I/O block → BLOCKED ─────────→┘
 ↓
TERMINATED

State Transitions:
NEW           : Thread created but not started
RUNNABLE      : Ready to run or running
RUNNING       : Currently executing
TIMED_WAITING : Waiting for specified time
WAITING       : Waiting indefinitely
BLOCKED       : Waiting for monitor lock
TERMINATED    : Completed execution
```

**Thread vs Runnable:**

```
Feature          | Thread               | Runnable
-----------------|----------------------|----------------------
Inheritance      | Extends Thread       | Implements Runnable
Multiple inherit | Not possible         | Can extend other class
Reusability      | Less flexible        | More flexible
Best practice    | Avoid                | Preferred
Resource sharing | Difficult            | Easy
```

**Follow-up Questions:**

- What is the difference between start() and run()?
- Why is implementing Runnable preferred over extending Thread?
- What are daemon threads?

### 32. What is synchronization in Java?

Synchronization is the capability to control the access of multiple threads to shared resources.

**Example:**

```java
public class SynchronizationExample {
    public static void main(String[] args) {
        // Problem without synchronization
        Counter unsafeCounter = new Counter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                unsafeCounter.increment();
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                unsafeCounter.increment();
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Unsafe counter: " + unsafeCounter.getCount());  // May be < 2000

        // Solution with synchronization
        SynchronizedCounter safeCounter = new SynchronizedCounter();

        Thread t3 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                safeCounter.increment();
            }
        });

        Thread t4 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                safeCounter.increment();
            }
        });

        t3.start();
        t4.start();

        try {
            t3.join();
            t4.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Safe counter: " + safeCounter.getCount());  // Always 2000

        // Synchronized block example
        demonstrateSynchronizedBlock();
    }

    static void demonstrateSynchronizedBlock() {
        final Object lock = new Object();

        Thread t1 = new Thread(() -> {
            synchronized (lock) {
                System.out.println("Thread 1: Inside synchronized block");
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("Thread 1: Exiting synchronized block");
            }
        });

        Thread t2 = new Thread(() -> {
            synchronized (lock) {
                System.out.println("Thread 2: Inside synchronized block");
            }
        });

        t1.start();
        t2.start();
    }
}

// Unsafe counter
class Counter {
    private int count = 0;

    public void increment() {
        count++;  // Not atomic! (read, increment, write)
    }

    public int getCount() {
        return count;
    }
}

// Safe counter with synchronized method
class SynchronizedCounter {
    private int count = 0;

    public synchronized void increment() {
        count++;  // Thread-safe
    }

    public synchronized int getCount() {
        return count;
    }
}

// Synchronized at block level
class BankAccount {
    private double balance;
    private final Object lock = new Object();

    public void deposit(double amount) {
        synchronized (lock) {
            double newBalance = balance + amount;
            try {
                Thread.sleep(10);  // Simulate processing time
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            balance = newBalance;
        }
    }

    public void withdraw(double amount) {
        synchronized (lock) {
            if (balance >= amount) {
                balance -= amount;
            }
        }
    }

    public double getBalance() {
        synchronized (lock) {
            return balance;
        }
    }
}

// Static synchronization
class StaticSynchronizationExample {
    private static int staticCount = 0;

    // Synchronized on class object
    public static synchronized void incrementStatic() {
        staticCount++;
    }

    // Equivalent to:
    public static void incrementStaticBlock() {
        synchronized (StaticSynchronizationExample.class) {
            staticCount++;
        }
    }
}
```

**Visual Representation:**

```
Without Synchronization:

Thread 1: count = 0
Thread 2: count = 0
  ↓
Thread 1: read count (0) → increment (1) → write (1)
Thread 2: read count (0) → increment (1) → write (1)
  ↓
Result: count = 1 (Lost update!)


With Synchronization:

Thread 1: acquire lock → count = 0
Thread 2: waiting for lock...
  ↓
Thread 1: read (0) → increment (1) → write (1) → release lock
Thread 2: acquire lock → read (1) → increment (2) → write (2) → release lock
  ↓
Result: count = 2 (Correct!)


Monitor Lock:

synchronized (object) {
    ┌─────────────────────┐
    │  Critical Section   │  ← Only one thread at a time
    │  Shared Resource    │
    └─────────────────────┘
}
```

**Types of Synchronization:**

```
1. Method Level Synchronization:
   public synchronized void method() { }
   → Locks on "this" object

2. Block Level Synchronization:
   synchronized (object) { }
   → Locks on specified object

3. Static Synchronization:
   public static synchronized void method() { }
   → Locks on Class object
```

**Follow-up Questions:**

- What is a monitor in Java?
- What is the difference between synchronized method and synchronized block?
- Can two threads execute two different synchronized methods simultaneously?

### 33. What is the difference between wait() and sleep()?

**Example:**

```java
public class WaitVsSleep {
    public static void main(String[] args) {
        // sleep() demonstration
        demonstrateSleep();

        // wait() and notify() demonstration
        demonstrateWaitNotify();
    }

    static void demonstrateSleep() {
        System.out.println("=== sleep() Demo ===");
        Thread thread = new Thread(() -> {
            synchronized (WaitVsSleep.class) {
                System.out.println("Thread acquired lock");
                try {
                    System.out.println("Thread sleeping for 2 seconds...");
                    Thread.sleep(2000);  // Holds the lock while sleeping
                    System.out.println("Thread woke up");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("Thread releasing lock");
            }
        });

        thread.start();

        try {
            Thread.sleep(500);  // Give thread1 time to acquire lock
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // This will wait for thread to finish sleeping
        synchronized (WaitVsSleep.class) {
            System.out.println("Main thread acquired lock (after thread finished)");
        }
    }

    static void demonstrateWaitNotify() {
        System.out.println("\n=== wait() and notify() Demo ===");
        final Object lock = new Object();

        Thread waiter = new Thread(() -> {
            synchronized (lock) {
                try {
                    System.out.println("Waiter: Acquired lock");
                    System.out.println("Waiter: Calling wait() - releases lock");
                    lock.wait();  // Releases the lock and waits
                    System.out.println("Waiter: Woke up and reacquired lock");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        Thread notifier = new Thread(() -> {
            try {
                Thread.sleep(2000);  // Wait before notifying
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            synchronized (lock) {
                System.out.println("Notifier: Acquired lock");
                System.out.println("Notifier: Calling notify()");
                lock.notify();  // Wakes up waiting thread
                System.out.println("Notifier: Releasing lock");
            }
        });

        waiter.start();
        notifier.start();
    }
}

// Producer-Consumer problem using wait() and notify()
class ProducerConsumerExample {
    public static void main(String[] args) {
        SharedResource resource = new SharedResource();

        Thread producer = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                resource.produce(i);
            }
        });

        Thread consumer = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                resource.consume();
            }
        });

        producer.start();
        consumer.start();
    }
}

class SharedResource {
    private int data;
    private boolean hasData = false;

    public synchronized void produce(int value) {
        while (hasData) {
            try {
                wait();  // Wait if data already exists
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        this.data = value;
        hasData = true;
        System.out.println("Produced: " + value);
        notify();  // Notify consumer
    }

    public synchronized void consume() {
        while (!hasData) {
            try {
                wait();  // Wait if no data available
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        System.out.println("Consumed: " + data);
        hasData = false;
        notify();  // Notify producer
    }
}
```

**Visual Representation:**

```
sleep():

Thread with lock
    ↓ sleep()
Thread sleeping (HOLDS LOCK)
    ↓ time expires
Thread continues (STILL HAS LOCK)


wait():

Thread with lock
    ↓ wait()
Thread waiting (RELEASES LOCK) ← Other threads can acquire
    ↓ notify()/notifyAll()
Thread wakes up (TRIES TO REACQUIRE LOCK)
    ↓ lock acquired
Thread continues


Producer-Consumer Flow:

Producer          | Buffer      | Consumer
─────────────────────────────────────────────
produce(1)        |             | wait()
notify()          | [1]         | ↓
wait()            |             | consume(1)
↓                 | []          | notify()
produce(2)        |             | wait()
notify()          | [2]         | ↓
                  |             | consume(2)
```

**Comparison:**

```
Feature          | wait()                    | sleep()
-----------------|---------------------------|---------------------------
Class            | Object class              | Thread class
Synchronized     | Must be in synchronized   | Can be anywhere
Lock             | Releases lock             | Holds lock
Wake up          | notify()/notifyAll()      | Time expires
Usage            | Inter-thread communication| Pause execution
Exception        | InterruptedException      | InterruptedException
```

**Follow-up Questions:**

- What is the difference between notify() and notifyAll()?
- Why must wait() be called inside synchronized block?
- What is spurious wakeup?

### 34. What is a deadlock?

A deadlock is a situation where two or more threads are blocked forever, waiting for each other.

**Example:**

```java
public class DeadlockExample {
    private static final Object lock1 = new Object();
    private static final Object lock2 = new Object();

    public static void main(String[] args) {
        // Create deadlock
        Thread thread1 = new Thread(() -> {
            synchronized (lock1) {
                System.out.println("Thread 1: Holding lock 1...");

                try {Thread.sleep(100);} catch (InterruptedException e) {}

                System.out.println("Thread 1: Waiting for lock 2...");
                synchronized (lock2) {
                    System.out.println("Thread 1: Holding lock 1 & 2");
                }
            }
        });

        Thread thread2 = new Thread(() -> {
            synchronized (lock2) {
                System.out.println("Thread 2: Holding lock 2...");

                try {Thread.sleep(100);} catch (InterruptedException e) {}

                System.out.println("Thread 2: Waiting for lock 1...");
                synchronized (lock1) {
                    System.out.println("Thread 2: Holding lock 1 & 2");
                }
            }
        });

        thread1.start();
        thread2.start();
        // Deadlock! Both threads wait forever
    }

    // Solution: Lock ordering
    static class DeadlockPrevention {
        public static void main(String[] args) {
            Thread thread1 = new Thread(() -> {
                synchronized (lock1) {  // Always acquire lock1 first
                    System.out.println("Thread 1: Holding lock 1...");
                    synchronized (lock2) {
                        System.out.println("Thread 1: Holding lock 1 & 2");
                    }
                }
            });

            Thread thread2 = new Thread(() -> {
                synchronized (lock1) {  // Same order: lock1 then lock2
                    System.out.println("Thread 2: Holding lock 1...");
                    synchronized (lock2) {
                        System.out.println("Thread 2: Holding lock 1 & 2");
                    }
                }
            });

            thread1.start();
            thread2.start();
            // No deadlock!
        }
    }
}
```

**Visual Representation:**

```
Deadlock Scenario:

Thread 1          |          Thread 2
──────────────────────────────────────
Lock lock1        |
                  |        Lock lock2
Wait for lock2 ←──|──→ Wait for lock1
    (BLOCKED)     |     (BLOCKED)

    ↓ Both waiting forever ↓

        DEADLOCK!


Prevention (Lock Ordering):

Thread 1          |          Thread 2
──────────────────────────────────────
Lock lock1        |        Wait for lock1
Lock lock2        |              ↓
Release locks     |        Lock lock1
                  |        Lock lock2
                  |        Release locks

    No Deadlock!
```

**Follow-up Questions:**

- How can you detect deadlocks?
- What are the conditions for deadlock?

### 35. What are volatile variables?

The `volatile` keyword ensures visibility of changes to variables across threads.

**Example:**

```java
public class VolatileExample {
    // Without volatile - may not see changes
    private static boolean flag = false;

    // With volatile - guarantees visibility
    private static volatile boolean volatileFlag = false;

    public static void main(String[] args) {
        // Problem without volatile
        demonstrateNonVolatile();

        // Solution with volatile
        demonstrateVolatile();
    }

    static void demonstrateNonVolatile() {
        Thread writer = new Thread(() -> {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {}
            flag = true;  // May be cached, reader might not see
            System.out.println("Writer: flag set to true");
        });

        Thread reader = new Thread(() -> {
            while (!flag) {
                // May loop forever if flag is cached
            }
            System.out.println("Reader: flag is true");
        });

        reader.start();
        writer.start();
    }

    static void demonstrateVolatile() {
        Thread writer = new Thread(() -> {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {}
            volatileFlag = true;  // Immediately visible to all threads
            System.out.println("Writer: volatile flag set to true");
        });

        Thread reader = new Thread(() -> {
            while (!volatileFlag) {
                // Will exit when writer sets flag
            }
            System.out.println("Reader: volatile flag is true");
        });

        reader.start();
        writer.start();
    }
}

// Real-world example: Singleton with volatile
class Singleton {
    private static volatile Singleton instance;

    private Singleton() {}

    // Double-checked locking
    public static Singleton getInstance() {
        if (instance == null) {  // First check (no locking)
            synchronized (Singleton.class) {
                if (instance == null) {  // Second check (with locking)
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

**Follow-up Questions:**

- When should you use volatile?
- Does volatile guarantee atomicity?

---

## Java 8+ Features

### 36. What are Lambda Expressions?

Lambda expressions provide a clear and concise way to represent a method interface using an expression.

**Example:**

```java
import java.util.*;
import java.util.function.*;

public class LambdaExample {
    public static void main(String[] args) {
        // Before Java 8: Anonymous inner class
        Runnable runnable1 = new Runnable() {
            @Override
            public void run() {
                System.out.println("Running in anonymous class");
            }
        };

        // Java 8: Lambda expression
        Runnable runnable2 = () -> System.out.println("Running with lambda");

        // Comparator example
        List<String> names = Arrays.asList("John", "Alice", "Bob", "Charlie");

        // Before Java 8
        Collections.sort(names, new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                return s1.compareTo(s2);
            }
        });

        // Java 8: Lambda
        Collections.sort(names, (s1, s2) -> s1.compareTo(s2));

        // Even shorter with method reference
        Collections.sort(names, String::compareTo);

        // Functional interfaces with lambdas

        // Predicate<T>: boolean test(T t)
        Predicate<Integer> isEven = n -> n % 2 == 0;
        System.out.println("10 is even: " + isEven.test(10));

        // Function<T, R>: R apply(T t)
        Function<String, Integer> stringLength = s -> s.length();
        System.out.println("Length: " + stringLength.apply("Hello"));

        // Consumer<T>: void accept(T t)
        Consumer<String> printer = s -> System.out.println(s);
        printer.accept("Hello Consumer");

        // Supplier<T>: T get()
        Supplier<Double> randomSupplier = () -> Math.random();
        System.out.println("Random: " + randomSupplier.get());

        // BiFunction<T, U, R>: R apply(T t, U u)
        BiFunction<Integer, Integer, Integer> adder = (a, b) -> a + b;
        System.out.println("Sum: " + adder.apply(5, 3));

        // Multiple statements in lambda
        BinaryOperator<Integer> calculator = (a, b) -> {
            int sum = a + b;
            System.out.println("Calculating: " + a + " + " + b);
            return sum;
        };

        // Using lambdas with collections
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        // forEach with lambda
        numbers.forEach(n -> System.out.println(n * 2));

        // removeIf with lambda
        numbers.removeIf(n -> n % 2 == 0);

        // Custom functional interface
        MathOperation addition = (a, b) -> a + b;
        MathOperation subtraction = (a, b) -> a - b;

        System.out.println("10 + 5 = " + operate(10, 5, addition));
        System.out.println("10 - 5 = " + operate(10, 5, subtraction));
    }

    // Method that accepts functional interface
    private static int operate(int a, int b, MathOperation operation) {
        return operation.calculate(a, b);
    }
}

// Custom functional interface
@FunctionalInterface
interface MathOperation {
    int calculate(int a, int b);
}
```

**Lambda Syntax:**

```
(parameters) -> expression

or

(parameters) -> { statements; }

Examples:
() -> 42
() -> { return 42; }
(int x) -> x + 1
(x, y) -> x + y
(String s) -> System.out.println(s)
```

**Follow-up Questions:**

- What is a functional interface?
- Can lambda expressions access local variables?
- What is variable capture in lambdas?

### 37. What are Streams?

Streams provide a functional approach to processing collections of objects.

**Example:**

```java
import java.util.*;
import java.util.stream.*;

public class StreamExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // Filter: even numbers
        List<Integer> evens = numbers.stream()
                                    .filter(n -> n % 2 == 0)
                                    .collect(Collectors.toList());
        System.out.println("Evens: " + evens);

        // Map: square each number
        List<Integer> squares = numbers.stream()
                                      .map(n -> n * n)
                                      .collect(Collectors.toList());
        System.out.println("Squares: " + squares);

        // Reduce: sum all numbers
        int sum = numbers.stream()
                        .reduce(0, (a, b) -> a + b);
        System.out.println("Sum: " + sum);

        // Chaining operations
        int result = numbers.stream()
                           .filter(n -> n % 2 == 0)  // Even numbers
                           .map(n -> n * n)          // Square them
                           .reduce(0, Integer::sum);  // Sum
        System.out.println("Sum of squares of evens: " + result);

        // Working with objects
        List<Person> people = Arrays.asList(
            new Person("Alice", 25),
            new Person("Bob", 30),
            new Person("Charlie", 25),
            new Person("David", 35)
        );

        // Filter and map
        List<String> names = people.stream()
                                  .filter(p -> p.getAge() > 25)
                                  .map(Person::getName)
                                  .collect(Collectors.toList());
        System.out.println("Names (age > 25): " + names);

        // Sorted
        List<Person> sortedByAge = people.stream()
                                        .sorted(Comparator.comparing(Person::getAge))
                                        .collect(Collectors.toList());

        // Distinct
        List<Integer> ages = people.stream()
                                  .map(Person::getAge)
                                  .distinct()
                                  .collect(Collectors.toList());

        // Limit and skip
        List<Integer> limited = numbers.stream()
                                      .limit(5)
                                      .collect(Collectors.toList());

        List<Integer> skipped = numbers.stream()
                                      .skip(5)
                                      .collect(Collectors.toList());

        // anyMatch, allMatch, noneMatch
        boolean hasAdult = people.stream().anyMatch(p -> p.getAge() >= 18);
        boolean allAdults = people.stream().allMatch(p -> p.getAge() >= 18);
        boolean noTeens = people.stream().noneMatch(p -> p.getAge() < 18);

        // findFirst, findAny
        Optional<Person> firstPerson = people.stream()
                                            .filter(p -> p.getAge() > 30)
                                            .findFirst();

        // Collectors

        // Grouping by age
        Map<Integer, List<Person>> byAge = people.stream()
                                                .collect(Collectors.groupingBy(Person::getAge));

        // Partitioning (boolean)
        Map<Boolean, List<Person>> partitioned = people.stream()
                                                      .collect(Collectors.partitioningBy(p -> p.getAge() >= 30));

        // Joining strings
        String joined = people.stream()
                             .map(Person::getName)
                             .collect(Collectors.joining(", "));

        // Statistics
        IntSummaryStatistics stats = people.stream()
                                          .mapToInt(Person::getAge)
                                          .summaryStatistics();
        System.out.println("Average age: " + stats.getAverage());
        System.out.println("Max age: " + stats.getMax());

        // Parallel streams
        long count = numbers.parallelStream()
                           .filter(n -> n % 2 == 0)
                           .count();

        // Creating streams
        Stream<String> streamFromValues = Stream.of("a", "b", "c");
        Stream<Integer> streamFromArray = Arrays.stream(new Integer[]{1, 2, 3});
        Stream<Integer> infiniteStream = Stream.iterate(0, n -> n + 2).limit(10);
        Stream<Double> randomStream = Stream.generate(Math::random).limit(5);

        // flatMap: flatten nested structures
        List<List<Integer>> nested = Arrays.asList(
            Arrays.asList(1, 2),
            Arrays.asList(3, 4),
            Arrays.asList(5, 6)
        );

        List<Integer> flattened = nested.stream()
                                       .flatMap(List::stream)
                                       .collect(Collectors.toList());
        System.out.println("Flattened: " + flattened);
    }
}

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }

    @Override
    public String toString() {
        return name + " (" + age + ")";
    }
}
```

**Stream Operations:**

```
Stream Operations:

Intermediate (lazy):        Terminal (eager):
├── filter()                ├── forEach()
├── map()                   ├── collect()
├── flatMap()               ├── reduce()
├── distinct()              ├── count()
├── sorted()                ├── anyMatch()
├── limit()                 ├── allMatch()
├── skip()                  ├── noneMatch()
└── peek()                  ├── findFirst()
                            ├── findAny()
                            └── toArray()
```

**Follow-up Questions:**

- What is the difference between intermediate and terminal operations?
- When should you use parallel streams?
- What is lazy evaluation in streams?

### 38. What is Optional?

Optional is a container object that may or may not contain a value, used to avoid null pointer exceptions.

**Example:**

```java
import java.util.Optional;

public class OptionalExample {
    public static void main(String[] args) {
        // Creating Optionals
        Optional<String> empty = Optional.empty();
        Optional<String> nonEmpty = Optional.of("Hello");
        Optional<String> nullable = Optional.ofNullable(null);

        // Checking if value is present
        if (nonEmpty.isPresent()) {
            System.out.println("Value: " + nonEmpty.get());
        }

        // ifPresent with lambda
        nonEmpty.ifPresent(value -> System.out.println("Value: " + value));

        // orElse: provide default value
        String value1 = empty.orElse("Default");
        System.out.println(value1);  // Default

        // orElseGet: lazy evaluation
        String value2 = empty.orElseGet(() -> "Computed Default");

        // orElseThrow: throw exception if empty
        try {
            String value3 = empty.orElseThrow(() -> new IllegalArgumentException("Value not present"));
        } catch (IllegalArgumentException e) {
            System.out.println("Exception: " + e.getMessage());
        }

        // map: transform value if present
        Optional<Integer> length = nonEmpty.map(String::length);
        System.out.println("Length: " + length.orElse(0));

        // flatMap: avoid nested Optionals
        Optional<String> opt1 = Optional.of("Hello");
        Optional<String> result = opt1.flatMap(s -> Optional.of(s.toUpperCase()));

        // filter: keep value only if it matches predicate
        Optional<String> filtered = nonEmpty.filter(s -> s.length() > 3);

        // Real-world example
        User user = findUserById(1);

        // Without Optional (traditional)
        if (user != null) {
            Address address = user.getAddress();
            if (address != null) {
                String city = address.getCity();
                if (city != null) {
                    System.out.println("City: " + city);
                }
            }
        }

        // With Optional (cleaner)
        String city = getUserById(1)
                        .flatMap(User::getAddress)
                        .flatMap(Address::getCity)
                        .orElse("Unknown");
        System.out.println("City: " + city);

        // Stream of Optional
        List<Optional<String>> optionals = Arrays.asList(
            Optional.of("A"),
            Optional.empty(),
            Optional.of("B")
        );

        List<String> values = optionals.stream()
                                      .filter(Optional::isPresent)
                                      .map(Optional::get)
                                      .collect(Collectors.toList());

        // Java 9+: stream()
        List<String> values2 = optionals.stream()
                                       .flatMap(Optional::stream)
                                       .collect(Collectors.toList());
    }

    static User findUserById(int id) {
        return new User("John", new Address("NYC"));
    }

    static Optional<User> getUserById(int id) {
        return Optional.ofNullable(findUserById(id));
    }
}

class User {
    private String name;
    private Address address;

    public User(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    public Optional<Address> getAddress() {
        return Optional.ofNullable(address);
    }
}

class Address {
    private String city;

    public Address(String city) {
        this.city = city;
    }

    public Optional<String> getCity() {
        return Optional.ofNullable(city);
    }
}
```

**Follow-up Questions:**

- Should you use Optional as method parameters?
- What is the performance impact of Optional?

### 39. What are Method References?

Method references provide a shorthand notation of a lambda expression to call a method.

**Example:**

```java
import java.util.*;
import java.util.function.*;

public class MethodReferenceExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Alice", "Bob");

        // 1. Static method reference
        // Lambda: (args) -> ClassName.staticMethod(args)
        List<Integer> numbers = Arrays.asList("1", "2", "3").stream()
                                     .map(Integer::parseInt)  // Integer.parseInt(s)
                                     .collect(Collectors.toList());

        // 2. Instance method reference of a particular object
        // Lambda: (args) -> object.instanceMethod(args)
        String prefix = "Hello ";
        Function<String, String> greeter = prefix::concat;  // prefix.concat(s)
        System.out.println(greeter.apply("World"));

        // 3. Instance method reference of an arbitrary object
        // Lambda: (obj, args) -> obj.instanceMethod(args)
        names.sort(String::compareToIgnoreCase);  // s1.compareToIgnoreCase(s2)

        // 4. Constructor reference
        // Lambda: (args) -> new ClassName(args)
        Supplier<List<String>> listSupplier = ArrayList::new;  // new ArrayList<>()
        List<String> list = listSupplier.get();

        // Examples

        // Static method reference
        Consumer<String> printer1 = System.out::println;
        printer1.accept("Hello");

        // Instance method reference
        String str = "HELLO";
        Supplier<String> toLower = str::toLowerCase;

        // Constructor reference
        Function<String, Person> personCreator = Person::new;
        Person person = personCreator.apply("John");

        // Array constructor reference
        IntFunction<int[]> arrayCreator = int[]::new;
        int[] array = arrayCreator.apply(10);  // new int[10]
    }
}
```

**Types of Method References:**

```
Type                               | Syntax              | Lambda Equivalent
-----------------------------------|---------------------|--------------------
Static method                      | Class::staticMethod | (args) -> Class.staticMethod(args)
Instance method (specific object)  | obj::instanceMethod | (args) -> obj.instanceMethod(args)
Instance method (arbitrary object) | Class::instanceMethod| (obj, args) -> obj.instanceMethod(args)
Constructor                        | Class::new          | (args) -> new Class(args)
Array constructor                  | Type[]::new         | (size) -> new Type[size]
```

**Follow-up Questions:**

- When would you use method reference over lambda?
- Can you use method references with overloaded methods?

### 40. What are Functional Interfaces?

A functional interface is an interface with exactly one abstract method (SAM - Single Abstract Method).

**Example:**

```java
import java.util.function.*;

// Custom functional interface
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);

    // Can have default methods
    default int add(int a, int b) {
        return a + b;
    }

    // Can have static methods
    static int multiply(int a, int b) {
        return a * b;
    }
}

public class FunctionalInterfaceExample {
    public static void main(String[] args) {
        // Using custom functional interface
        Calculator addition = (a, b) -> a + b;
        Calculator subtraction = (a, b) -> a - b;

        System.out.println("Addition: " + addition.calculate(10, 5));
        System.out.println("Subtraction: " + subtraction.calculate(10, 5));

        // Built-in functional interfaces

        // Predicate<T>: T -> boolean
        Predicate<String> isEmpty = String::isEmpty;
        Predicate<Integer> isPositive = x -> x > 0;

        // Function<T, R>: T -> R
        Function<String, Integer> length = String::length;
        Function<Integer, String> toString = String::valueOf;

        // Consumer<T>: T -> void
        Consumer<String> print = System.out::println;

        // Supplier<T>: () -> T
        Supplier<Double> random = Math::random;

        // UnaryOperator<T>: T -> T (extends Function<T, T>)
        UnaryOperator<Integer> square = x -> x * x;

        // BinaryOperator<T>: (T, T) -> T (extends BiFunction<T, T, T>)
        BinaryOperator<Integer> max = Math::max;

        // BiPredicate<T, U>: (T, U) -> boolean
        BiPredicate<String, String> equals = String::equals;

        // BiFunction<T, U, R>: (T, U) -> R
        BiFunction<Integer, Integer, Integer> sum = (a, b) -> a + b;

        // BiConsumer<T, U>: (T, U) -> void
        BiConsumer<String, Integer> printWithCount = (s, i) ->
            System.out.println(s + ": " + i);

        // Primitive specializations
        IntPredicate isEven = x -> x % 2 == 0;
        IntFunction<String> intToString = String::valueOf;
        IntSupplier randomInt = () -> (int)(Math.random() * 100);
        IntConsumer printInt = System.out::println;
        IntUnaryOperator increment = x -> x + 1;
        IntBinaryOperator multiply = (a, b) -> a * b;

        // Composing functions
        Function<Integer, Integer> multiplyBy2 = x -> x * 2;
        Function<Integer, Integer> add3 = x -> x + 3;
        Function<Integer, Integer> composed = multiplyBy2.andThen(add3);
        System.out.println(composed.apply(5));  // (5 * 2) + 3 = 13

        // Composing predicates
        Predicate<Integer> greaterThan5 = x -> x > 5;
        Predicate<Integer> lessThan10 = x -> x < 10;
        Predicate<Integer> between5And10 = greaterThan5.and(lessThan10);
        System.out.println(between5And10.test(7));  // true
    }
}
```

**Common Functional Interfaces:**

```
Interface              | Method              | Description
-----------------------|---------------------|---------------------------
Predicate<T>           | boolean test(T)     | Condition check
Function<T,R>          | R apply(T)          | Transform T to R
Consumer<T>            | void accept(T)      | Consume value
Supplier<T>            | T get()             | Supply value
UnaryOperator<T>       | T apply(T)          | T -> T transformation
BinaryOperator<T>      | T apply(T, T)       | (T, T) -> T operation
BiPredicate<T,U>       | boolean test(T, U)  | Two-argument condition
BiFunction<T,U,R>      | R apply(T, U)       | (T, U) -> R
BiConsumer<T,U>        | void accept(T, U)   | Consume two values
```

**Follow-up Questions:**

- Can a functional interface have multiple default methods?
- What is @FunctionalInterface annotation for?

---

## JVM and Memory Management

### 41. What are the different memory areas in JVM?

**Visual Representation:**

```
JVM Memory Structure:

┌────────────────────────────────────────────────────┐
│              Java Virtual Machine                  │
├────────────────────────────────────────────────────┤
│                                                    │
│  ┌──────────────────────────────────────────┐     │
│  │        Method Area (Metaspace)           │     │
│  │  - Class metadata                        │     │
│  │  - Static variables                      │     │
│  │  - Constant pool                         │     │
│  │  - Method bytecode                       │     │
│  └──────────────────────────────────────────┘     │
│                                                    │
│  ┌──────────────────────────────────────────┐     │
│  │              Heap                        │     │
│  │  ┌────────────────┬──────────────────┐  │     │
│  │  │  Young Gen     │   Old Gen        │  │     │
│  │  │  ┌──────┬────┐ │                  │  │     │
│  │  │  │Eden │S0│S1│ │                  │  │     │
│  │  │  └──────┴────┘ │                  │  │     │
│  │  └────────────────┴──────────────────┘  │     │
│  │  - Objects                               │     │
│  │  - Instance variables                    │     │
│  └──────────────────────────────────────────┘     │
│                                                    │
│  ┌──────────────────────────────────────────┐     │
│  │          Stack (per thread)              │     │
│  │  - Local variables                       │     │
│  │  - Method calls                          │     │
│  │  - Partial results                       │     │
│  └──────────────────────────────────────────┘     │
│                                                    │
│  ┌──────────────────────────────────────────┐     │
│  │          PC Register                     │     │
│  │  - Current instruction address           │     │
│  └──────────────────────────────────────────┘     │
│                                                    │
│  ┌──────────────────────────────────────────┐     │
│  │        Native Method Stack               │     │
│  │  - Native method calls                   │     │
│  └──────────────────────────────────────────┘     │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Example:**

```java
public class JVMMemoryExample {
    // Stored in Method Area
    static int staticVar = 100;

    // Stored in Heap
    int instanceVar = 200;

    public static void main(String[] args) {
        // Local variables stored in Stack
        int localVar = 50;

        // Object stored in Heap, reference in Stack
        JVMMemoryExample obj = new JVMMemoryExample();

        // Array stored in Heap
        int[] array = new int[10];

        // Method call - new frame in Stack
        obj.method1(localVar);
    }

    void method1(int param) {
        // param in Stack
        int localInMethod = 10;
        method2();
    }

    void method2() {
        // New frame in Stack
        int anotherLocal = 20;
    }
}
```

**Memory Areas:**

```
Area              | Shared | Contains                    | GC
------------------|--------|-----------------------------|---------
Method Area       | Yes    | Class data, static vars     | Rarely
Heap              | Yes    | Objects, instance vars      | Yes
Stack             | No     | Local vars, method calls    | No
PC Register       | No     | Current instruction         | No
Native Stack      | No     | Native method calls         | No
```

**Follow-up Questions:**

- Where are String literals stored?
- What is Metaspace?
- What happens when Stack overflows?

### 42. What is Garbage Collection?

Garbage Collection automatically manages memory by reclaiming objects that are no longer in use.

**Example:**

```java
public class GarbageCollectionExample {
    public static void main(String[] args) {
        // Object created in heap
        Person person1 = new Person("John");

        // Another reference to same object
        Person person2 = person1;

        // person1 no longer references object
        person1 = null;
        // Object still alive (person2 references it)

        // person2 also null
        person2 = null;
        // Object is now eligible for GC

        // Suggest GC (doesn't guarantee)
        System.gc();

        // Objects eligible for GC
        createTemporaryObjects();
    }

    static void createTemporaryObjects() {
        for (int i = 0; i < 1000; i++) {
            Person temp = new Person("Temp" + i);
            // temp becomes eligible for GC after loop iteration
        }
        // All temp objects eligible for GC after method
    }
}

class Person {
    String name;

    Person(String name) {
        this.name = name;
    }

    // Called by GC before object is destroyed
    @Override
    protected void finalize() throws Throwable {
        System.out.println("Finalizing: " + name);
        super.finalize();
    }
}
```

**GC Process:**

```
Garbage Collection Process:

1. Mark Phase:
   - Start from GC Roots (static vars, stack references, etc.)
   - Mark all reachable objects

   GC Roots → Object A → Object B
                     ↓
                  Object C

   Object D (unreachable) ← Garbage

2. Sweep Phase:
   - Reclaim memory of unmarked objects
   - Object D memory freed

3. Compact Phase (optional):
   - Move surviving objects together
   - Reduce fragmentation
```

**Generational GC:**

```
Young Generation:
┌─────────────────────────────┐
│ Eden │ Survivor 0│ Survivor 1│
└──────┴───────────┴───────────┘
    ↓ Minor GC
Old Generation:
┌───────────────────────────────┐
│   Long-lived objects          │
└───────────────────────────────┘
    ↓ Major GC (Full GC)

Flow:
1. New objects → Eden
2. Minor GC → Survivors (S0/S1)
3. After multiple GCs → Old Gen
4. Old Gen full → Major GC
```

**Follow-up Questions:**

- What are GC roots?
- What is the difference between Minor GC and Major GC?
- What are different GC algorithms?

### 43. What is the difference between Stack and Heap memory?

**Example:**

```java
public class StackVsHeapExample {
    // Static variable - Method Area
    static int staticValue = 100;

    public static void main(String[] args) {
        // Primitive - Stack
        int stackVar = 10;

        // Object reference - Stack, Object - Heap
        MyClass obj = new MyClass(20);

        // Array reference - Stack, Array - Heap
        int[] array = new int[5];

        method1(stackVar, obj);
    }

    static void method1(int value, MyClass object) {
        // Parameters - Stack (new frame)
        int localVar = 30;

        // New object - Heap
        MyClass localObj = new MyClass(40);

        method2();
        // After method2 returns, its stack frame is removed
    }

    static void method2() {
        // New stack frame
        int anotherVar = 50;
    }
}

class MyClass {
    int instanceVar;  // Heap

    MyClass(int value) {
        this.instanceVar = value;
    }
}
```

**Memory Layout:**

```
Stack (Thread-specific):              Heap (Shared):
┌──────────────────────┐              ┌──────────────────────┐
│  main() frame        │              │  MyClass object      │
│  - stackVar: 10      │              │  instanceVar: 20 ────┼─┐
│  - obj: 0x1234 ──────┼──────────────→                      │ │
│  - array: 0x5678 ────┼──┐           └──────────────────────┘ │
├──────────────────────┤  │                                     │
│  method1() frame     │  │           ┌──────────────────────┐ │
│  - value: 10         │  │           │  int[5] array        │ │
│  - object: 0x1234 ───┼──┘           │  [0][0][0][0][0]     │ │
│  - localVar: 30      │              └──────────────────────┘ │
│  - localObj: 0x9ABC ─┼──────────────→                        │
├──────────────────────┤              ┌──────────────────────┐ │
│  method2() frame     │              │  MyClass object      │ │
│  - anotherVar: 50    │              │  instanceVar: 40 ────┼─┘
└──────────────────────┘              └──────────────────────┘
    ↑ Grows down                          ↑ Grows up
```

**Comparison:**

```
Feature          | Stack                | Heap
-----------------|----------------------|----------------------
Storage          | Primitives, refs     | Objects, arrays
Size             | Smaller              | Larger
Speed            | Faster               | Slower
Lifetime         | Method scope         | Until GC
Thread           | Per thread           | Shared
Allocation       | LIFO                 | Random
Management       | Automatic            | GC
Error            | StackOverflowError   | OutOfMemoryError
```

**Follow-up Questions:**

- What causes StackOverflowError?
- What causes OutOfMemoryError?
- Can objects be stored on stack?

### 44. What is Class Loading?

**Example:**

```java
public class ClassLoadingExample {
    static {
        System.out.println("Static block executed");
    }

    public static void main(String[] args) throws Exception {
        // 1. Loading
        // 2. Linking (Verification, Preparation, Resolution)
        // 3. Initialization

        System.out.println("Main method started");

        // Load class at runtime
        Class<?> clazz = Class.forName("com.example.MyClass");

        // Create instance
        Object obj = clazz.getDeclaredConstructor().newInstance();

        // ClassLoader hierarchy demonstration
        ClassLoader appLoader = ClassLoadingExample.class.getClassLoader();
        System.out.println("App ClassLoader: " + appLoader);
        System.out.println("Parent: " + appLoader.getParent());
        System.out.println("Grandparent: " + appLoader.getParent().getParent());
    }
}

// Lazy loading example
class LazyClass {
    static {
        System.out.println("LazyClass loaded");
    }

    static int value = 42;
}

class LoadingDemo {
    public static void main(String[] args) {
        System.out.println("Before accessing LazyClass");
        // LazyClass not loaded yet

        System.out.println(LazyClass.value);
        // Now LazyClass is loaded
    }
}
```

**Class Loading Process:**

```
Class Loading Phases:

1. Loading:
   - Find class bytecode
   - Create Class object
   - Store in Method Area

2. Linking:
   a) Verification:
      - Verify bytecode
      - Check format

   b) Preparation:
      - Allocate memory for static variables
      - Initialize to default values

   c) Resolution:
      - Resolve symbolic references

3. Initialization:
   - Execute static initializers
   - Initialize static variables
```

**ClassLoader Hierarchy:**

```
┌─────────────────────────┐
│ Bootstrap ClassLoader   │ (loads rt.jar, JRE classes)
└───────────┬─────────────┘
            │ parent
┌───────────▼─────────────┐
│ Extension ClassLoader   │ (loads jre/lib/ext)
└───────────┬─────────────┘
            │ parent
┌───────────▼─────────────┐
│ Application ClassLoader │ (loads classpath)
└───────────┬─────────────┘
            │ parent
┌───────────▼─────────────┐
│ Custom ClassLoader      │ (user-defined)
└─────────────────────────┘

Parent Delegation Model:
1. Check if class already loaded
2. Delegate to parent
3. If parent can't load, load itself
```

**Follow-up Questions:**

- What is the parent delegation model?
- Can you load a class multiple times?
- What is ClassNotFoundException vs NoClassDefFoundError?

### 45. What are Generics?

Generics provide compile-time type safety and eliminate the need for casting.

**Example:**

```java
import java.util.*;

// Generic class
class Box<T> {
    private T content;

    public void set(T content) {
        this.content = content;
    }

    public T get() {
        return content;
    }
}

// Generic class with multiple type parameters
class Pair<K, V> {
    private K key;
    private V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() { return key; }
    public V getValue() { return value; }
}

// Generic interface
interface Container<T> {
    void add(T item);
    T get(int index);
}

// Generic method
class Util {
    // Generic method
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.println(element);
        }
    }

    // Generic method with bounded type
    public static <T extends Comparable<T>> T findMax(T[] array) {
        T max = array[0];
        for (T element : array) {
            if (element.compareTo(max) > 0) {
                max = element;
            }
        }
        return max;
    }
}

public class GenericsExample {
    public static void main(String[] args) {
        // Without generics (before Java 5)
        List list1 = new ArrayList();
        list1.add("Hello");
        list1.add(123);  // No compile-time error
        String str = (String) list1.get(0);  // Casting required
        // String str2 = (String) list1.get(1);  // Runtime error!

        // With generics
        List<String> list2 = new ArrayList<>();
        list2.add("Hello");
        // list2.add(123);  // Compile-time error!
        String str2 = list2.get(0);  // No casting needed

        // Generic class usage
        Box<Integer> intBox = new Box<>();
        intBox.set(123);
        Integer value = intBox.get();

        Box<String> strBox = new Box<>();
        strBox.set("Hello");
        String strValue = strBox.get();

        // Generic pair
        Pair<String, Integer> pair = new Pair<>("Age", 25);
        System.out.println(pair.getKey() + ": " + pair.getValue());

        // Generic method
        Integer[] numbers = {1, 2, 3, 4, 5};
        Util.printArray(numbers);

        String[] words = {"Hello", "World"};
        Util.printArray(words);

        // Bounded type parameter
        Integer max = Util.findMax(numbers);
        String maxWord = Util.findMax(words);

        // Wildcards
        demonstrateWildcards();
    }

    static void demonstrateWildcards() {
        // Upper bounded wildcard (? extends Type)
        List<Integer> ints = Arrays.asList(1, 2, 3);
        List<Double> doubles = Arrays.asList(1.1, 2.2, 3.3);

        printNumbers(ints);
        printNumbers(doubles);

        // Lower bounded wildcard (? super Type)
        List<Object> objects = new ArrayList<>();
        addIntegers(objects);

        // Unbounded wildcard (?)
        printList(Arrays.asList(1, 2, 3));
        printList(Arrays.asList("A", "B", "C"));
    }

    // Upper bounded wildcard - can read as Number
    static void printNumbers(List<? extends Number> list) {
        for (Number num : list) {
            System.out.println(num);
        }
        // list.add(new Integer(1));  // Error! Can't add
    }

    // Lower bounded wildcard - can add Integer
    static void addIntegers(List<? super Integer> list) {
        list.add(1);
        list.add(2);
        // Integer val = list.get(0);  // Error! Can't read as Integer
    }

    // Unbounded wildcard
    static void printList(List<?> list) {
        for (Object obj : list) {
            System.out.println(obj);
        }
    }
}

// Type erasure example
class TypeErasure<T> {
    // At runtime, T is replaced with Object
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }

    // Cannot do:
    // T obj = new T();  // Error! Can't create instance
    // T[] array = new T[10];  // Error! Can't create array
    // if (value instanceof T)  // Error! Can't use instanceof
}
```

**Wildcards:**

```
Type                  | Syntax          | Usage
----------------------|-----------------|---------------------------
Upper bounded         | ? extends T     | Read only (producer)
Lower bounded         | ? super T       | Write only (consumer)
Unbounded             | ?               | Unknown type
No wildcard           | T               | Read and write

PECS Principle:
Producer Extends, Consumer Super

List<? extends Number>  → Read as Number (producer)
List<? super Integer>   → Write Integer (consumer)
```

**Follow-up Questions:**

- What is type erasure?
- Why can't you create a generic array?
- What is the difference between <? extends T> and <? super T>?

---

## Design Patterns

### 46. What is Singleton Pattern?

Singleton ensures a class has only one instance and provides a global point of access to it.

**Example:**

```java
// 1. Eager Initialization
class EagerSingleton {
    private static final EagerSingleton instance = new EagerSingleton();

    private EagerSingleton() {}

    public static EagerSingleton getInstance() {
        return instance;
    }
}

// 2. Lazy Initialization (not thread-safe)
class LazySingleton {
    private static LazySingleton instance;

    private LazySingleton() {}

    public static LazySingleton getInstance() {
        if (instance == null) {
            instance = new LazySingleton();
        }
        return instance;
    }
}

// 3. Thread-Safe Singleton (synchronized)
class ThreadSafeSingleton {
    private static ThreadSafeSingleton instance;

    private ThreadSafeSingleton() {}

    public static synchronized ThreadSafeSingleton getInstance() {
        if (instance == null) {
            instance = new ThreadSafeSingleton();
        }
        return instance;
    }
}

// 4. Double-Checked Locking
class DoubleCheckedSingleton {
    private static volatile DoubleCheckedSingleton instance;

    private DoubleCheckedSingleton() {}

    public static DoubleCheckedSingleton getInstance() {
        if (instance == null) {  // First check (no locking)
            synchronized (DoubleCheckedSingleton.class) {
                if (instance == null) {  // Second check (with locking)
                    instance = new DoubleCheckedSingleton();
                }
            }
        }
        return instance;
    }
}

// 5. Bill Pugh Singleton (best approach)
class BillPughSingleton {
    private BillPughSingleton() {}

    // Inner static class - loaded only when getInstance() is called
    private static class SingletonHelper {
        private static final BillPughSingleton INSTANCE = new BillPughSingleton();
    }

    public static BillPughSingleton getInstance() {
        return SingletonHelper.INSTANCE;
    }
}

// 6. Enum Singleton (best for serialization)
enum EnumSingleton {
    INSTANCE;

    public void doSomething() {
        System.out.println("Enum Singleton");
    }
}
```

**Follow-up Questions:**

- How to prevent breaking Singleton with reflection?
- How to make Singleton serializable?

### 47. What is Factory Pattern?

Factory Pattern creates objects without exposing the instantiation logic to the client.

**Example:**

```java
// Product interface
interface Shape {
    void draw();
}

// Concrete products
class Circle implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Circle");
    }
}

class Rectangle implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Rectangle");
    }
}

class Square implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Square");
    }
}

// Factory class
class ShapeFactory {
    public Shape getShape(String shapeType) {
        if (shapeType == null) {
            return null;
        }
        if (shapeType.equalsIgnoreCase("CIRCLE")) {
            return new Circle();
        } else if (shapeType.equalsIgnoreCase("RECTANGLE")) {
            return new Rectangle();
        } else if (shapeType.equalsIgnoreCase("SQUARE")) {
            return new Square();
        }
        return null;
    }
}

// Usage
public class FactoryPatternDemo {
    public static void main(String[] args) {
        ShapeFactory factory = new ShapeFactory();

        Shape circle = factory.getShape("CIRCLE");
        circle.draw();

        Shape rectangle = factory.getShape("RECTANGLE");
        rectangle.draw();
    }
}
```

**Follow-up Questions:**

- What is the difference between Factory and Abstract Factory patterns?
- When would you use Factory pattern?

### 48. What is Observer Pattern?

Observer Pattern defines a one-to-many dependency where when one object changes state, all its dependents are notified.

**Example:**

```java
import java.util.*;

// Subject interface
interface Subject {
    void attach(Observer observer);
    void detach(Observer observer);
    void notifyObservers();
}

// Observer interface
interface Observer {
    void update(String message);
}

// Concrete Subject
class NewsAgency implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String news;

    @Override
    public void attach(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void detach(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(news);
        }
    }

    public void setNews(String news) {
        this.news = news;
        notifyObservers();
    }
}

// Concrete Observers
class NewsChannel implements Observer {
    private String name;

    public NewsChannel(String name) {
        this.name = name;
    }

    @Override
    public void update(String message) {
        System.out.println(name + " received news: " + message);
    }
}

// Usage
public class ObserverPatternDemo {
    public static void main(String[] args) {
        NewsAgency agency = new NewsAgency();

        NewsChannel channel1 = new NewsChannel("Channel 1");
        NewsChannel channel2 = new NewsChannel("Channel 2");

        agency.attach(channel1);
        agency.attach(channel2);

        agency.setNews("Breaking News!");  // Both channels notified
    }
}
```

**Follow-up Questions:**

- How does Java's built-in Observer pattern work?
- What is the difference between Observer and Pub-Sub patterns?

### 49. What is Builder Pattern?

Builder Pattern constructs complex objects step by step.

**Example:**

```java
// Product class
class Computer {
    // Required parameters
    private String CPU;
    private String RAM;

    // Optional parameters
    private String storage;
    private String graphicsCard;
    private String powerSupply;

    private Computer(Builder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.storage = builder.storage;
        this.graphicsCard = builder.graphicsCard;
        this.powerSupply = builder.powerSupply;
    }

    // Builder class
    public static class Builder {
        // Required parameters
        private String CPU;
        private String RAM;

        // Optional parameters - initialized to default values
        private String storage = "256GB SSD";
        private String graphicsCard = "Integrated";
        private String powerSupply = "500W";

        public Builder(String CPU, String RAM) {
            this.CPU = CPU;
            this.RAM = RAM;
        }

        public Builder storage(String storage) {
            this.storage = storage;
            return this;
        }

        public Builder graphicsCard(String graphicsCard) {
            this.graphicsCard = graphicsCard;
            return this;
        }

        public Builder powerSupply(String powerSupply) {
            this.powerSupply = powerSupply;
            return this;
        }

        public Computer build() {
            return new Computer(this);
        }
    }

    @Override
    public String toString() {
        return "Computer [CPU=" + CPU + ", RAM=" + RAM + ", Storage=" + storage +
               ", GPU=" + graphicsCard + ", PSU=" + powerSupply + "]";
    }
}

// Usage
public class BuilderPatternDemo {
    public static void main(String[] args) {
        // Basic computer
        Computer basicPC = new Computer.Builder("Intel i5", "8GB")
                                      .build();

        // Gaming computer
        Computer gamingPC = new Computer.Builder("Intel i9", "32GB")
                                       .storage("1TB NVMe")
                                       .graphicsCard("RTX 4090")
                                       .powerSupply("1000W")
                                       .build();

        System.out.println(basicPC);
        System.out.println(gamingPC);
    }
}
```

**Follow-up Questions:**

- When should you use Builder pattern?
- What is the difference between Builder and Factory patterns?

### 50. What is Dependency Injection?

Dependency Injection is a design pattern where dependencies are provided to an object rather than the object creating them.

**Example:**

```java
// Dependency interface
interface MessageService {
    void sendMessage(String message, String receiver);
}

// Concrete implementations
class EmailService implements MessageService {
    @Override
    public void sendMessage(String message, String receiver) {
        System.out.println("Email sent to " + receiver + ": " + message);
    }
}

class SMSService implements MessageService {
    @Override
    public void sendMessage(String message, String receiver) {
        System.out.println("SMS sent to " + receiver + ": " + message);
    }
}

// Consumer class
class NotificationService {
    private MessageService messageService;

    // Constructor Injection (preferred)
    public NotificationService(MessageService messageService) {
        this.messageService = messageService;
    }

    // Setter Injection
    public void setMessageService(MessageService messageService) {
        this.messageService = messageService;
    }

    public void sendNotification(String message, String receiver) {
        messageService.sendMessage(message, receiver);
    }
}

// Usage
public class DependencyInjectionDemo {
    public static void main(String[] args) {
        // Constructor injection
        MessageService emailService = new EmailService();
        NotificationService notificationService = new NotificationService(emailService);
        notificationService.sendNotification("Hello", "john@example.com");

        // Can easily switch implementation
        MessageService smsService = new SMSService();
        notificationService = new NotificationService(smsService);
        notificationService.sendNotification("Hello", "+1234567890");
    }
}
```

**Types of DI:**

```
1. Constructor Injection (Preferred):
   - Dependencies required at construction
   - Immutable dependencies
   - Easy to test

2. Setter Injection:
   - Optional dependencies
   - Allows changing dependencies

3. Interface Injection:
   - Rarely used
   - Client implements interface for injection
```

**Follow-up Questions:**

- What are the benefits of Dependency Injection?
- What is Inversion of Control (IoC)?

---

## Advanced Topics

### 51. What is Reflection?

Reflection allows inspection and manipulation of classes, methods, and fields at runtime.

**Example:**

```java
import java.lang.reflect.*;

class Person {
    private String name;
    private int age;

    public Person() {}

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }

    private void privateMethod() {
        System.out.println("Private method called");
    }
}

public class ReflectionExample {
    public static void main(String[] args) throws Exception {
        // Get Class object
        Class<?> clazz = Person.class;
        // OR: Class<?> clazz = Class.forName("Person");
        // OR: Class<?> clazz = new Person().getClass();

        System.out.println("Class name: " + clazz.getName());
        System.out.println("Simple name: " + clazz.getSimpleName());
        System.out.println("Package: " + clazz.getPackage());

        // Get constructors
        Constructor<?>[] constructors = clazz.getConstructors();
        for (Constructor<?> constructor : constructors) {
            System.out.println("Constructor: " + constructor);
        }

        // Create instance using reflection
        Constructor<?> constructor = clazz.getConstructor(String.class, int.class);
        Object person = constructor.newInstance("John", 25);

        // Get methods
        Method[] methods = clazz.getDeclaredMethods();
        for (Method method : methods) {
            System.out.println("Method: " + method.getName());
        }

        // Invoke method
        Method displayMethod = clazz.getMethod("displayInfo");
        displayMethod.invoke(person);

        // Access private method
        Method privateMethod = clazz.getDeclaredMethod("privateMethod");
        privateMethod.setAccessible(true);  // Bypass access control
        privateMethod.invoke(person);

        // Get fields
        Field[] fields = clazz.getDeclaredFields();
        for (Field field : fields) {
            System.out.println("Field: " + field.getName() + " (" + field.getType() + ")");
        }

        // Access private field
        Field nameField = clazz.getDeclaredField("name");
        nameField.setAccessible(true);
        nameField.set(person, "Jane");
        System.out.println("Modified name: " + nameField.get(person));

        // Check modifiers
        int modifiers = clazz.getModifiers();
        System.out.println("Is public: " + Modifier.isPublic(modifiers));
        System.out.println("Is final: " + Modifier.isFinal(modifiers));

        // Get annotations (if any)
        Annotation[] annotations = clazz.getAnnotations();
        for (Annotation annotation : annotations) {
            System.out.println("Annotation: " + annotation);
        }
    }
}
```

**Common Use Cases:**

```
1. Frameworks (Spring, Hibernate)
   - Bean creation
   - Dependency injection

2. Testing frameworks (JUnit)
   - Test discovery
   - Mock creation

3. Serialization/Deserialization
   - JSON mapping (Jackson, Gson)

4. ORM frameworks
   - Entity mapping
```

**Follow-up Questions:**

- What are the performance implications of Reflection?
- What are the security concerns with Reflection?
- How does Reflection bypass access modifiers?

### 52. What are Annotations?

Annotations provide metadata about the program that can be processed at compile-time or runtime.

**Example:**

```java
import java.lang.annotation.*;
import java.lang.reflect.*;

// Custom annotation
@Retention(RetentionPolicy.RUNTIME)  // Available at runtime
@Target(ElementType.METHOD)           // Can be applied to methods
@interface MyAnnotation {
    String value() default "Default value";
    int priority() default 0;
}

// Another custom annotation
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@interface Entity {
    String tableName();
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@interface Column {
    String name();
    boolean nullable() default true;
}

// Using annotations
@Entity(tableName = "users")
class User {
    @Column(name = "user_id", nullable = false)
    private int id;

    @Column(name = "user_name")
    private String name;

    @MyAnnotation(value = "Save user", priority = 1)
    public void save() {
        System.out.println("Saving user...");
    }

    @MyAnnotation(value = "Delete user", priority = 2)
    public void delete() {
        System.out.println("Deleting user...");
    }

    @Deprecated
    public void oldMethod() {
        System.out.println("This method is deprecated");
    }
}

public class AnnotationExample {
    public static void main(String[] args) throws Exception {
        Class<User> clazz = User.class;

        // Get class-level annotation
        if (clazz.isAnnotationPresent(Entity.class)) {
            Entity entity = clazz.getAnnotation(Entity.class);
            System.out.println("Table name: " + entity.tableName());
        }

        // Get field-level annotations
        Field[] fields = clazz.getDeclaredFields();
        for (Field field : fields) {
            if (field.isAnnotationPresent(Column.class)) {
                Column column = field.getAnnotation(Column.class);
                System.out.println("Field: " + field.getName() +
                                 ", Column: " + column.name() +
                                 ", Nullable: " + column.nullable());
            }
        }

        // Get method-level annotations
        Method[] methods = clazz.getDeclaredMethods();
        for (Method method : methods) {
            if (method.isAnnotationPresent(MyAnnotation.class)) {
                MyAnnotation annotation = method.getAnnotation(MyAnnotation.class);
                System.out.println("Method: " + method.getName() +
                                 ", Value: " + annotation.value() +
                                 ", Priority: " + annotation.priority());
            }
        }
    }
}
```

**Built-in Annotations:**

```
@Override          - Method overrides superclass method
@Deprecated        - Marks as deprecated
@SuppressWarnings  - Suppress compiler warnings
@FunctionalInterface - Marks functional interface
@SafeVarargs       - Suppress varargs warnings

Meta-annotations (for creating custom annotations):
@Retention         - How long annotation is retained
@Target            - Where annotation can be applied
@Documented        - Include in JavaDoc
@Inherited         - Inherited by subclasses
@Repeatable        - Can be applied multiple times
```

**Follow-up Questions:**

- What is the difference between @Retention policies?
- How do frameworks like Spring use annotations?

### 53. What is Serialization?

Serialization converts an object into a byte stream; deserialization recreates the object from the stream.

**Example:**

```java
import java.io.*;

// Serializable class
class Employee implements Serializable {
    private static final long serialVersionUID = 1L;

    private String name;
    private int age;
    private transient String password;  // transient = won't be serialized
    private static String company = "ABC Corp";  // static = won't be serialized

    public Employee(String name, int age, String password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    @Override
    public String toString() {
        return "Employee{name='" + name + "', age=" + age +
               ", password='" + password + "', company='" + company + "'}";
    }
}

public class SerializationExample {
    public static void main(String[] args) {
        Employee emp = new Employee("John", 30, "secret123");
        System.out.println("Before serialization: " + emp);

        // Serialization
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream("employee.ser"))) {
            oos.writeObject(emp);
            System.out.println("Object serialized");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Deserialization
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream("employee.ser"))) {
            Employee deserializedEmp = (Employee) ois.readObject();
            System.out.println("After deserialization: " + deserializedEmp);
            // Note: password is null (transient)
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}

// Custom serialization
class CustomSerializable implements Serializable {
    private String data;
    private transient int sensitiveData;

    // Custom serialization method
    private void writeObject(ObjectOutputStream out) throws IOException {
        out.defaultWriteObject();
        // Custom logic - encrypt before serialization
        out.writeInt(sensitiveData * 2);  // Simple transformation
    }

    // Custom deserialization method
    private void readObject(ObjectInputStream in) throws IOException, ClassNotFoundException {
        in.defaultReadObject();
        // Custom logic - decrypt after deserialization
        sensitiveData = in.readInt() / 2;
    }
}
```

**Key Concepts:**

```
serialVersionUID:
- Unique ID for versioning
- If not defined, auto-generated
- If changed, deserialization fails with InvalidClassException

transient keyword:
- Field won't be serialized
- Value becomes default after deserialization
- Use for sensitive data, derived fields

Serializable interface:
- Marker interface (no methods)
- Enables serialization mechanism
```

**Follow-up Questions:**

- What is serialVersionUID?
- What is Externalizable interface?
- How does serialization work with inheritance?

### 54. What are Enums?

Enums are special classes that represent a group of constants.

**Example:**

```java
// Basic enum
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

// Enum with fields and methods
enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    EARTH(5.976e+24, 6.37814e6),
    MARS(6.421e+23, 3.3972e6);

    private final double mass;
    private final double radius;

    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    public double getMass() { return mass; }
    public double getRadius() { return radius; }

    public double surfaceGravity() {
        final double G = 6.67300E-11;
        return G * mass / (radius * radius);
    }
}

// Enum with abstract method
enum Operation {
    PLUS {
        public double apply(double x, double y) { return x + y; }
    },
    MINUS {
        public double apply(double x, double y) { return x - y; }
    },
    TIMES {
        public double apply(double x, double y) { return x * y; }
    },
    DIVIDE {
        public double apply(double x, double y) { return x / y; }
    };

    public abstract double apply(double x, double y);
}

public class EnumExample {
    public static void main(String[] args) {
        // Basic usage
        Day day = Day.MONDAY;
        System.out.println("Day: " + day);

        // Enum methods
        System.out.println("Ordinal: " + day.ordinal());  // Position in enum
        System.out.println("Name: " + day.name());

        // values() - all enum constants
        for (Day d : Day.values()) {
            System.out.println(d);
        }

        // valueOf() - get enum from string
        Day friday = Day.valueOf("FRIDAY");

        // Switch with enum
        switch (day) {
            case MONDAY:
                System.out.println("Start of work week");
                break;
            case FRIDAY:
                System.out.println("Almost weekend!");
                break;
            case SATURDAY:
            case SUNDAY:
                System.out.println("Weekend!");
                break;
            default:
                System.out.println("Midweek");
        }

        // Enum with fields
        Planet earth = Planet.EARTH;
        System.out.println("Earth gravity: " + earth.surfaceGravity());

        // Enum with abstract method
        double result = Operation.PLUS.apply(5, 3);
        System.out.println("5 + 3 = " + result);

        // Enum in EnumSet and EnumMap
        EnumSet<Day> weekend = EnumSet.of(Day.SATURDAY, Day.SUNDAY);
        EnumMap<Day, String> dayActivities = new EnumMap<>(Day.class);
        dayActivities.put(Day.MONDAY, "Work");
        dayActivities.put(Day.SATURDAY, "Relax");
    }
}
```

**Enum Features:**

```
- Type-safe constants
- Cannot be extended (implicitly final)
- Can implement interfaces
- Can have fields, methods, constructors
- Can override methods
- Singleton by nature
- Serializable by default
```

**Follow-up Questions:**

- Can enums implement interfaces?
- Why can't enums extend other classes?

### 55. What is the difference between Comparable and Comparator?

**Example:**

```java
import java.util.*;

// Comparable - natural ordering
class Employee implements Comparable<Employee> {
    String name;
    int age;
    double salary;

    public Employee(String name, int age, double salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    // Natural ordering by name
    @Override
    public int compareTo(Employee other) {
        return this.name.compareTo(other.name);
    }

    @Override
    public String toString() {
        return name + "(" + age + ", $" + salary + ")";
    }
}

// Comparators - custom ordering
class AgeComparator implements Comparator<Employee> {
    @Override
    public int compare(Employee e1, Employee e2) {
        return Integer.compare(e1.age, e2.age);
    }
}

class SalaryComparator implements Comparator<Employee> {
    @Override
    public int compare(Employee e1, Employee e2) {
        return Double.compare(e1.salary, e2.salary);
    }
}

public class ComparableVsComparatorExample {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee("John", 30, 60000),
            new Employee("Alice", 25, 55000),
            new Employee("Bob", 35, 75000)
        );

        // Comparable - natural ordering (by name)
        Collections.sort(employees);
        System.out.println("Sorted by name (natural): " + employees);

        // Comparator - custom ordering (by age)
        Collections.sort(employees, new AgeComparator());
        System.out.println("Sorted by age: " + employees);

        // Comparator - custom ordering (by salary)
        Collections.sort(employees, new SalaryComparator());
        System.out.println("Sorted by salary: " + employees);

        // Lambda comparator (Java 8+)
        employees.sort((e1, e2) -> e1.name.compareTo(e2.name));

        // Comparator utility methods
        employees.sort(Comparator.comparing(e -> e.name));
        employees.sort(Comparator.comparingInt(e -> e.age));
        employees.sort(Comparator.comparingDouble(e -> e.salary));

        // Method reference
        employees.sort(Comparator.comparing(Employee::getName));

        // Multiple criteria
        employees.sort(Comparator.comparing(Employee::getAge)
                                .thenComparing(Employee::getSalary));

        // Reverse order
        employees.sort(Comparator.comparing(Employee::getSalary).reversed());

        // Null-safe comparator
        Comparator<Employee> nullSafeComparator =
            Comparator.nullsFirst(Comparator.comparing(Employee::getName));
    }
}
```

**Comparison:**

```
Feature          | Comparable              | Comparator
-----------------|-------------------------|---------------------------
Package          | java.lang               | java.util
Method           | compareTo(T)            | compare(T, T)
Sorting logic    | In the class itself     | Separate class
Modification     | Modifies original class | Doesn't modify class
Use case         | Natural ordering        | Multiple orderings
Collections.sort | Collections.sort(list)  | Collections.sort(list, comp)
```

**Follow-up Questions:**

- Can a class implement both Comparable and have Comparators?
- What does compareTo() return?

### 56. What is ExecutorService?

ExecutorService manages a pool of threads for executing tasks asynchronously.

**Example:**

```java
import java.util.concurrent.*;

public class ExecutorServiceExample {
    public static void main(String[] args) throws Exception {
        // 1. Fixed Thread Pool
        ExecutorService fixedPool = Executors.newFixedThreadPool(3);

        for (int i = 0; i < 5; i++) {
            final int taskId = i;
            fixedPool.submit(() -> {
                System.out.println("Task " + taskId + " executed by " +
                                 Thread.currentThread().getName());
            });
        }

        // 2. Cached Thread Pool (creates threads as needed)
        ExecutorService cachedPool = Executors.newCachedThreadPool();

        // 3. Single Thread Executor
        ExecutorService singleExecutor = Executors.newSingleThreadExecutor();

        // 4. Scheduled Thread Pool
        ScheduledExecutorService scheduledPool = Executors.newScheduledThreadPool(2);

        // Schedule task with delay
        scheduledPool.schedule(() -> {
            System.out.println("Delayed task executed");
        }, 2, TimeUnit.SECONDS);

        // Schedule task at fixed rate
        scheduledPool.scheduleAtFixedRate(() -> {
            System.out.println("Periodic task");
        }, 0, 1, TimeUnit.SECONDS);

        // Submit Callable (returns result)
        Future<Integer> future = fixedPool.submit(() -> {
            Thread.sleep(1000);
            return 42;
        });

        // Get result (blocking)
        Integer result = future.get();
        System.out.println("Result: " + result);

        // Check status
        System.out.println("Done: " + future.isDone());
        System.out.println("Cancelled: " + future.isCancelled());

        // Submit multiple tasks
        List<Callable<String>> tasks = Arrays.asList(
            () -> "Task 1",
            () -> "Task 2",
            () -> "Task 3"
        );

        // invokeAll - wait for all
        List<Future<String>> results = fixedPool.invokeAll(tasks);

        // invokeAny - wait for first
        String first = fixedPool.invokeAny(tasks);

        // Shutdown gracefully
        fixedPool.shutdown();
        fixedPool.awaitTermination(1, TimeUnit.MINUTES);

        // Shutdown immediately
        scheduledPool.shutdownNow();
    }
}
```

**Follow-up Questions:**

- What is the difference between submit() and execute()?
- What is the difference between shutdown() and shutdownNow()?

### 57. What is CountDownLatch?

CountDownLatch allows threads to wait until a set of operations complete.

**Example:**

```java
import java.util.concurrent.*;

public class CountDownLatchExample {
    public static void main(String[] args) throws InterruptedException {
        int workerCount = 3;
        CountDownLatch latch = new CountDownLatch(workerCount);

        // Start workers
        for (int i = 0; i < workerCount; i++) {
            final int workerId = i;
            new Thread(() -> {
                System.out.println("Worker " + workerId + " starting");
                try {
                    Thread.sleep((long)(Math.random() * 1000));
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("Worker " + workerId + " done");
                latch.countDown();  // Decrement count
            }).start();
        }

        // Wait for all workers to complete
        latch.await();
        System.out.println("All workers completed!");

        // With timeout
        boolean completed = latch.await(5, TimeUnit.SECONDS);
    }
}
```

**Follow-up Questions:**

- Can CountDownLatch be reused?
- What is the difference between CountDownLatch and CyclicBarrier?

### 58. What is ConcurrentHashMap?

ConcurrentHashMap is a thread-safe HashMap without locking the entire map.

**Example:**

```java
import java.util.concurrent.*;

public class ConcurrentHashMapExample {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();

        // Basic operations (thread-safe)
        map.put("A", 1);
        map.put("B", 2);

        // Atomic operations
        map.putIfAbsent("C", 3);
        map.remove("A", 1);  // Remove only if value matches
        map.replace("B", 2, 20);  // Replace only if old value matches

        // Compute methods (atomic)
        map.compute("D", (key, value) -> value == null ? 1 : value + 1);
        map.computeIfAbsent("E", key -> 10);
        map.computeIfPresent("E", (key, value) -> value * 2);

        // Merge (atomic)
        map.merge("F", 5, (oldVal, newVal) -> oldVal + newVal);

        // Bulk operations
        map.forEach((key, value) -> System.out.println(key + ": " + value));

        // Parallel operations
        map.forEachValue(1, value -> System.out.println(value));

        // Search
        String result = map.search(1, (key, value) -> value > 10 ? key : null);

        // Reduce
        int sum = map.reduce(1, (key, value) -> value, (v1, v2) -> v1 + v2);
    }
}
```

**Comparison:**

```
HashMap              | ConcurrentHashMap      | Hashtable
---------------------|------------------------|------------------
Not thread-safe      | Thread-safe            | Thread-safe
Allows null key/value| No null key/value      | No null key/value
Fast                 | Fast                   | Slow
No locking           | Segment locking        | Full locking
Fail-fast iterator   | Fail-safe iterator     | Fail-safe iterator
```

**Follow-up Questions:**

- How does ConcurrentHashMap achieve thread-safety?
- What is segment locking?

### 59. What are Atomic classes?

Atomic classes provide lock-free thread-safe operations on single variables.

**Example:**

```java
import java.util.concurrent.atomic.*;

public class AtomicExample {
    public static void main(String[] args) throws InterruptedException {
        // AtomicInteger
        AtomicInteger atomicInt = new AtomicInteger(0);

        // Basic operations
        atomicInt.set(10);
        int value = atomicInt.get();

        // Atomic operations
        atomicInt.incrementAndGet();  // ++i
        atomicInt.getAndIncrement();  // i++
        atomicInt.decrementAndGet();  // --i
        atomicInt.getAndDecrement();  // i--
        atomicInt.addAndGet(5);       // i += 5
        atomicInt.getAndAdd(5);       // i += 5, return old

        // Compare and set
        boolean success = atomicInt.compareAndSet(10, 20);  // If 10, set to 20

        // Thread-safe counter example
        AtomicInteger counter = new AtomicInteger(0);

        Thread[] threads = new Thread[10];
        for (int i = 0; i < 10; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    counter.incrementAndGet();
                }
            });
            threads[i].start();
        }

        for (Thread thread : threads) {
            thread.join();
        }

        System.out.println("Counter: " + counter.get());  // Always 10000

        // Other atomic classes
        AtomicLong atomicLong = new AtomicLong(0L);
        AtomicBoolean atomicBoolean = new AtomicBoolean(false);
        AtomicReference<String> atomicRef = new AtomicReference<>("Initial");

        // Atomic array
        AtomicIntegerArray atomicArray = new AtomicIntegerArray(10);
        atomicArray.set(0, 100);
        atomicArray.incrementAndGet(0);
    }
}
```

**Follow-up Questions:**

- How do Atomic classes work internally?
- When would you use Atomic classes over synchronized?

### 60. What is ThreadLocal?

ThreadLocal provides thread-local variables where each thread has its own independent copy.

**Example:**

```java
public class ThreadLocalExample {
    // ThreadLocal variable
    private static ThreadLocal<Integer> threadLocal = new ThreadLocal<Integer>() {
        @Override
        protected Integer initialValue() {
            return 0;
        }
    };

    // Java 8+ with lambda
    private static ThreadLocal<Integer> threadLocal2 = ThreadLocal.withInitial(() -> 0);

    public static void main(String[] args) throws InterruptedException {
        // Thread 1
        Thread thread1 = new Thread(() -> {
            threadLocal.set(100);
            System.out.println("Thread 1: " + threadLocal.get());  // 100
            try { Thread.sleep(1000); } catch (InterruptedException e) {}
            System.out.println("Thread 1 after sleep: " + threadLocal.get());  // Still 100
            threadLocal.remove();  // Clean up
        });

        // Thread 2
        Thread thread2 = new Thread(() -> {
            threadLocal.set(200);
            System.out.println("Thread 2: " + threadLocal.get());  // 200
        });

        thread1.start();
        thread2.start();

        thread1.join();
        thread2.join();

        // Real-world example: Database connection per thread
        demonstrateConnectionManager();
    }

    static class ConnectionManager {
        private static ThreadLocal<Connection> connectionHolder =
            ThreadLocal.withInitial(() -> createConnection());

        public static Connection getConnection() {
            return connectionHolder.get();
        }

        public static void closeConnection() {
            Connection conn = connectionHolder.get();
            if (conn != null) {
                // Close connection
                connectionHolder.remove();
            }
        }

        private static Connection createConnection() {
            // Create and return database connection
            return new Connection();
        }
    }

    static class Connection {
        // Database connection class
    }

    static void demonstrateConnectionManager() {
        // Each thread gets its own connection
        Connection conn = ConnectionManager.getConnection();
        // Use connection
        ConnectionManager.closeConnection();
    }
}
```

**Follow-up Questions:**

- What are memory leak risks with ThreadLocal?
- When should you use ThreadLocal?

### 61. What is the difference between FileInputStream and FileReader?

**Example:**

```java
import java.io.*;

public class FileIOExample {
    public static void main(String[] args) throws IOException {
        // FileInputStream - reads bytes
        try (FileInputStream fis = new FileInputStream("data.txt")) {
            int byteData;
            while ((byteData = fis.read()) != -1) {
                System.out.print((char) byteData);
            }
        }

        // FileReader - reads characters
        try (FileReader fr = new FileReader("data.txt")) {
            int charData;
            while ((charData = fr.read()) != -1) {
                System.out.print((char) charData);
            }
        }

        // BufferedReader for efficient reading
        try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        }

        // FileOutputStream - writes bytes
        try (FileOutputStream fos = new FileOutputStream("output.txt")) {
            String data = "Hello World";
            fos.write(data.getBytes());
        }

        // FileWriter - writes characters
        try (FileWriter fw = new FileWriter("output.txt")) {
            fw.write("Hello World");
        }

        // BufferedWriter for efficient writing
        try (BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"))) {
            bw.write("Line 1");
            bw.newLine();
            bw.write("Line 2");
        }
    }
}
```

**Comparison:**

```
Feature          | InputStream/OutputStream | Reader/Writer
-----------------|--------------------------|------------------
Data type        | Bytes                    | Characters
Encoding         | No encoding              | Character encoding
Use case         | Binary data              | Text data
Examples         | Images, audio, video     | Text files
```

**Follow-up Questions:**

- When would you use InputStream over Reader?
- What is the purpose of Buffered classes?

### 62. What is NIO (New I/O)?

**Example:**

```java
import java.nio.*;
import java.nio.file.*;
import java.nio.channels.*;
import java.io.*;

public class NIOExample {
    public static void main(String[] args) throws IOException {
        // 1. Path and Files (NIO.2)
        Path path = Paths.get("example.txt");

        // Create file
        Files.createFile(path);

        // Write to file
        Files.write(path, "Hello NIO".getBytes());

        // Read from file
        byte[] data = Files.readAllBytes(path);
        System.out.println(new String(data));

        // Read all lines
        List<String> lines = Files.readAllLines(path);

        // Copy file
        Files.copy(path, Paths.get("copy.txt"), StandardCopyOption.REPLACE_EXISTING);

        // Move file
        Files.move(path, Paths.get("moved.txt"), StandardCopyOption.REPLACE_EXISTING);

        // Delete file
        Files.delete(Paths.get("copy.txt"));

        // Check file existence
        boolean exists = Files.exists(path);

        // File attributes
        BasicFileAttributes attrs = Files.readAttributes(path, BasicFileAttributes.class);
        System.out.println("Size: " + attrs.size());
        System.out.println("Created: " + attrs.creationTime());

        // 2. Channels and Buffers
        try (FileChannel channel = FileChannel.open(path, StandardOpenOption.READ)) {
            ByteBuffer buffer = ByteBuffer.allocate(1024);
            int bytesRead = channel.read(buffer);

            buffer.flip();  // Switch to read mode

            while (buffer.hasRemaining()) {
                System.out.print((char) buffer.get());
            }

            buffer.clear();  // Clear for next use
        }

        // 3. Directory operations
        Path dir = Paths.get("mydir");
        Files.createDirectory(dir);

        // List directory contents
        try (DirectoryStream<Path> stream = Files.newDirectoryStream(dir)) {
            for (Path entry : stream) {
                System.out.println(entry.getFileName());
            }
        }

        // Walk file tree
        Files.walk(dir).forEach(System.out::println);
    }
}
```

**Follow-up Questions:**

- What are the advantages of NIO over traditional I/O?
- What is a Channel?

### 63. What is Serialization versioning?

**Example:**

```java
import java.io.*;

class Employee implements Serializable {
    private static final long serialVersionUID = 1L;  // Version control

    private String name;
    private int age;
    // If you add new field, old serialized objects can still be deserialized
    private String department = "IT";  // New field with default

    // Custom serialization for backward compatibility
    private void writeObject(ObjectOutputStream out) throws IOException {
        out.defaultWriteObject();
    }

    private void readObject(ObjectInputStream in)
            throws IOException, ClassNotFoundException {
        in.defaultReadObject();
        // Handle missing fields from old versions
        if (department == null) {
            department = "Unknown";
        }
    }
}
```

**Follow-up Questions:**

- What happens if serialVersionUID changes?
- How to maintain backward compatibility?

### 64. What is the Date-Time API (Java 8)?

**Example:**

```java
import java.time.*;
import java.time.format.*;
import java.time.temporal.*;

public class DateTimeExample {
    public static void main(String[] args) {
        // LocalDate - date without time
        LocalDate date = LocalDate.now();
        LocalDate specificDate = LocalDate.of(2024, Month.JANUARY, 15);
        LocalDate parsed = LocalDate.parse("2024-01-15");

        // Date operations
        LocalDate tomorrow = date.plusDays(1);
        LocalDate nextMonth = date.plusMonths(1);
        LocalDate lastYear = date.minusYears(1);

        // Get components
        int year = date.getYear();
        Month month = date.getMonth();
        int day = date.getDayOfMonth();
        DayOfWeek dayOfWeek = date.getDayOfWeek();

        // LocalTime - time without date
        LocalTime time = LocalTime.now();
        LocalTime specificTime = LocalTime.of(14, 30, 0);

        // Time operations
        LocalTime later = time.plusHours(2);
        LocalTime earlier = time.minusMinutes(30);

        // LocalDateTime - date and time
        LocalDateTime datetime = LocalDateTime.now();
        LocalDateTime specific = LocalDateTime.of(2024, 1, 15, 14, 30);

        // ZonedDateTime - with timezone
        ZonedDateTime zonedNow = ZonedDateTime.now();
        ZonedDateTime nyTime = ZonedDateTime.now(ZoneId.of("America/New_York"));
        ZonedDateTime tokyoTime = zonedNow.withZoneSameInstant(ZoneId.of("Asia/Tokyo"));

        // Instant - timestamp
        Instant instant = Instant.now();
        Instant fromEpoch = Instant.ofEpochMilli(System.currentTimeMillis());

        // Duration - time-based amount
        Duration duration = Duration.between(time, time.plusHours(2));
        long hours = duration.toHours();
        long minutes = duration.toMinutes();

        // Period - date-based amount
        Period period = Period.between(date, date.plusYears(1));
        int years = period.getYears();
        int months = period.getMonths();

        // Formatting
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String formatted = datetime.format(formatter);
        LocalDateTime parsedDateTime = LocalDateTime.parse("15/01/2024 14:30:00", formatter);

        // Predefined formatters
        String iso = datetime.format(DateTimeFormatter.ISO_DATE_TIME);

        // Temporal adjusters
        LocalDate firstDayOfMonth = date.with(TemporalAdjusters.firstDayOfMonth());
        LocalDate lastDayOfYear = date.with(TemporalAdjusters.lastDayOfYear());
        LocalDate nextMonday = date.with(TemporalAdjusters.next(DayOfWeek.MONDAY));
    }
}
```

**Follow-up Questions:**

- What are the advantages over java.util.Date?
- Why are Date-Time classes immutable?

### 65. What are default methods in interfaces?

**Example:**

```java
interface Vehicle {
    // Abstract method
    void start();

    // Default method (Java 8+)
    default void stop() {
        System.out.println("Vehicle stopped");
    }

    // Static method (Java 8+)
    static void checkSpeed(int speed) {
        if (speed > 100) {
            System.out.println("Too fast!");
        }
    }
}

class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car started");
    }

    // Can override default method
    @Override
    public void stop() {
        System.out.println("Car stopped with brakes");
    }
}

// Diamond problem resolution
interface A {
    default void method() {
        System.out.println("A");
    }
}

interface B {
    default void method() {
        System.out.println("B");
    }
}

class C implements A, B {
    // Must override to resolve conflict
    @Override
    public void method() {
        A.super.method();  // Call specific interface method
        // Or provide custom implementation
    }
}
```

**Follow-up Questions:**

- Why were default methods added?
- How do default methods solve the diamond problem?

### 66. What is the difference between Callable and Runnable?

**Example:**

```java
import java.util.concurrent.*;

public class CallableVsRunnable {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(2);

        // Runnable - doesn't return value, can't throw checked exceptions
        Runnable runnable = () -> {
            System.out.println("Runnable executed");
            // Cannot return value
            // Cannot throw checked exceptions
        };

        executor.submit(runnable);

        // Callable - returns value, can throw checked exceptions
        Callable<Integer> callable = () -> {
            Thread.sleep(1000);
            return 42;  // Returns value
        };

        Future<Integer> future = executor.submit(callable);
        Integer result = future.get();  // Get result
        System.out.println("Result: " + result);

        executor.shutdown();
    }
}
```

**Comparison:**

```
Feature          | Runnable        | Callable<V>
-----------------|-----------------|------------------
Return type      | void            | V
Exception        | No checked      | Can throw checked
Method           | run()           | call()
Introduced       | Java 1.0        | Java 5
Use with         | Thread          | ExecutorService
```

**Follow-up Questions:**

- Can you convert Runnable to Callable?
- How do you handle exceptions in Runnable?

### 67. What is immutability?

An immutable object's state cannot be changed after creation.

**Example:**

```java
// Immutable class
public final class ImmutablePerson {
    private final String name;
    private final int age;
    private final Address address;

    public ImmutablePerson(String name, int age, Address address) {
        this.name = name;
        this.age = age;
        // Deep copy for mutable objects
        this.address = new Address(address.getCity(), address.getStreet());
    }

    public String getName() { return name; }
    public int getAge() { return age; }

    // Return copy, not original
    public Address getAddress() {
        return new Address(address.getCity(), address.getStreet());
    }
}

// Mutable class (for comparison)
class Address {
    private String city;
    private String street;

    public Address(String city, String street) {
        this.city = city;
        this.street = street;
    }

    public String getCity() { return city; }
    public String getStreet() { return street; }
    public void setCity(String city) { this.city = city; }
}

// Usage
class ImmutabilityDemo {
    public static void main(String[] args) {
        Address addr = new Address("NYC", "5th Ave");
        ImmutablePerson person = new ImmutablePerson("John", 30, addr);

        // Try to modify
        addr.setCity("LA");  // Doesn't affect person's address

        Address personAddr = person.getAddress();
        personAddr.setCity("Chicago");  // Doesn't affect person's address

        System.out.println(person.getAddress().getCity());  // Still NYC
    }
}
```

**Benefits of Immutability:**

```
1. Thread-safe (no synchronization needed)
2. Can be safely shared
3. Good for HashMa keys
4. Simpler to understand
5. Prevents accidental modification
6. Inherently thread-safe
```

**Follow-up Questions:**

- How does String achieve immutability?
- Can you make a class with mutable fields immutable?

### 68. What is the difference between fail-fast and fail-safe iterators?

**Example:**

```java
import java.util.*;
import java.util.concurrent.*;

public class IteratorExample {
    public static void main(String[] args) {
        // Fail-fast Iterator (ArrayList, HashMap)
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));

        try {
            for (Integer num : list) {
                System.out.println(num);
                if (num == 3) {
                    list.remove(num);  // ConcurrentModificationException!
                }
            }
        } catch (ConcurrentModificationException e) {
            System.out.println("Fail-fast: " + e.getClass().getSimpleName());
        }

        // Correct way with Iterator
        Iterator<Integer> iterator = list.iterator();
        while (iterator.hasNext()) {
            Integer num = iterator.next();
            if (num == 3) {
                iterator.remove();  // Safe removal
            }
        }

        // Fail-safe Iterator (CopyOnWriteArrayList, ConcurrentHashMap)
        CopyOnWriteArrayList<Integer> safeList =
            new CopyOnWriteArrayList<>(Arrays.asList(1, 2, 3, 4, 5));

        // No exception - operates on copy
        for (Integer num : safeList) {
            System.out.println(num);
            if (num == 3) {
                safeList.remove(num);  // No exception
            }
        }
    }
}
```

**Comparison:**

```
Feature          | Fail-Fast              | Fail-Safe
-----------------|------------------------|------------------
Exception        | ConcurrentModification | No exception
Collections      | ArrayList, HashMap     | ConcurrentHashMap
Modification     | Not allowed            | Allowed
Performance      | Fast                   | Slower
Memory           | Less                   | More (copy)
Iterator         | Works on original      | Works on copy
```

**Follow-up Questions:**

- How does fail-fast detection work?
- What is CopyOnWriteArrayList?

### 69. What is cloning?

**Example:**

```java
// Shallow cloning
class Address implements Cloneable {
    String city;

    public Address(String city) {
        this.city = city;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

class Person implements Cloneable {
    String name;
    int age;
    Address address;

    public Person(String name, int age, Address address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // Shallow clone
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();  // Address is shared
    }
}

// Deep cloning
class Employee implements Cloneable {
    String name;
    int age;
    Address address;

    public Employee(String name, int age, Address address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // Deep clone
    @Override
    protected Object clone() throws CloneNotSupportedException {
        Employee cloned = (Employee) super.clone();
        cloned.address = (Address) address.clone();  // Clone nested object
        return cloned;
    }
}

public class CloningExample {
    public static void main(String[] args) throws CloneNotSupportedException {
        // Shallow clone
        Address addr = new Address("NYC");
        Person person1 = new Person("John", 30, addr);
        Person person2 = (Person) person1.clone();

        // Modify address
        person2.address.city = "LA";
        System.out.println(person1.address.city);  // LA (shared!)

        // Deep clone
        Address addr2 = new Address("NYC");
        Employee emp1 = new Employee("Jane", 25, addr2);
        Employee emp2 = (Employee) emp1.clone();

        // Modify address
        emp2.address.city = "LA";
        System.out.println(emp1.address.city);  // NYC (independent!)
    }
}
```

**Follow-up Questions:**

- What is the Cloneable interface?
- How to implement deep cloning?

### 70. What is the difference between pass-by-value and pass-by-reference?

Java is **always pass-by-value**, even for objects.

**Example:**

```java
public class PassByValueExample {
    public static void main(String[] args) {
        // Primitives - pass by value
        int x = 10;
        modifyPrimitive(x);
        System.out.println("x after method: " + x);  // Still 10

        // Objects - pass by value (of reference)
        Person person = new Person("John");
        modifyObject(person);
        System.out.println("Name after modify: " + person.name);  // Jane (modified)

        reassignObject(person);
        System.out.println("Name after reassign: " + person.name);  // Still Jane (not Alice)

        // Array - pass by value (of reference)
        int[] array = {1, 2, 3};
        modifyArray(array);
        System.out.println("Array[0]: " + array[0]);  // 100 (modified)

        reassignArray(array);
        System.out.println("Array length: " + array.length);  // Still 3 (not reassigned)
    }

    static void modifyPrimitive(int num) {
        num = 20;  // Modifies copy
    }

    static void modifyObject(Person p) {
        p.name = "Jane";  // Modifies object (reference value copied)
    }

    static void reassignObject(Person p) {
        p = new Person("Alice");  // Reassigns local copy of reference
    }

    static void modifyArray(int[] arr) {
        arr[0] = 100;  // Modifies array
    }

    static void reassignArray(int[] arr) {
        arr = new int[10];  // Reassigns local copy
    }
}

class Person {
    String name;
    Person(String name) { this.name = name; }
}
```

**Visual Representation:**

```
Pass by Value (Primitives):
main: x = 10
        ↓ copy value
method: num = 10
method: num = 20  ← Local change
main: x = 10      ← Original unchanged


Pass by Value of Reference (Objects):
main: person ──→ [Object: name="John"]
        ↓ copy reference
method: p ──→ [Object: name="John"]
method: p.name = "Jane"  ← Modifies object
main: person ──→ [Object: name="Jane"]  ← Sees change


Reassignment (doesn't affect original):
main: person ──→ [Object: name="John"]
        ↓ copy reference
method: p ──→ [Object: name="John"]
method: p = new Person("Alice")
method: p ──→ [New Object: name="Alice"]
main: person ──→ [Object: name="John"]  ← Still original
```

**Follow-up Questions:**

- Is Java pass-by-reference?
- Why can you modify object contents but not reassign?

### 71. What is the difference between Checked and Runtime exceptions in practice?

**Example:**

```java
import java.io.*;

public class ExceptionPractice {
    // Checked exception - must declare or handle
    public void readFile(String filename) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(filename));
        reader.readLine();
        reader.close();
    }

    // Runtime exception - optional to declare
    public void divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Divisor cannot be zero");
        }
        int result = a / b;
    }

    // Best practice: Use checked for recoverable, unchecked for programming errors
    public void processPayment(double amount) throws PaymentFailedException {
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be positive");  // Unchecked
        }

        try {
            // External service call
            chargeCard(amount);
        } catch (IOException e) {
            throw new PaymentFailedException("Payment failed", e);  // Checked
        }
    }

    private void chargeCard(double amount) throws IOException {
        // Simulate external call
    }
}

class PaymentFailedException extends Exception {
    public PaymentFailedException(String message, Throwable cause) {
        super(message, cause);
    }
}
```

**Follow-up Questions:**

- When should you use checked vs unchecked exceptions?
- Can you catch multiple exceptions in one catch block?

### 72. What is the difference between Iterator and ListIterator?

**Example:**

```java
import java.util.*;

public class IteratorVsListIterator {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C", "D"));

        // Iterator - forward only
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            String element = iterator.next();
            System.out.println(element);
            if (element.equals("B")) {
                iterator.remove();  // Remove current element
            }
        }

        // ListIterator - bidirectional
        ListIterator<String> listIterator = list.listIterator();

        // Forward iteration
        while (listIterator.hasNext()) {
            int index = listIterator.nextIndex();
            String element = listIterator.next();
            System.out.println(index + ": " + element);

            // Can add, remove, or set
            if (element.equals("C")) {
                listIterator.set("C_modified");  // Replace
                listIterator.add("C_new");       // Add after current
            }
        }

        // Backward iteration
        while (listIterator.hasPrevious()) {
            String element = listIterator.previous();
            System.out.println(element);
        }
    }
}
```

**Comparison:**

```
Feature          | Iterator         | ListIterator
-----------------|------------------|------------------
Direction        | Forward only     | Bidirectional
Methods          | hasNext(), next()| + hasPrevious(), previous()
Modification     | remove()         | + add(), set()
Index            | No               | nextIndex(), previousIndex()
Collections      | All              | List only
```

**Follow-up Questions:**

- Can you modify a list while iterating?
- What is the Enumeration interface?

### 73. What are immutable collections?

**Example:**

```java
import java.util.*;

public class ImmutableCollectionsExample {
    public static void main(String[] args) {
        // Java 9+ - Immutable factory methods
        List<String> immutableList = List.of("A", "B", "C");
        Set<Integer> immutableSet = Set.of(1, 2, 3);
        Map<String, Integer> immutableMap = Map.of("A", 1, "B", 2);

        // Trying to modify throws UnsupportedOperationException
        try {
            immutableList.add("D");
        } catch (UnsupportedOperationException e) {
            System.out.println("Cannot modify immutable list");
        }

        // Collections.unmodifiableX() - wrapper approach
        List<String> mutableList = new ArrayList<>(Arrays.asList("A", "B"));
        List<String> unmodifiable = Collections.unmodifiableList(mutableList);

        mutableList.add("C");  // Modifies original
        System.out.println(unmodifiable);  // Shows change (just a view)

        // True immutable - copy
        List<String> trulyImmutable = new ArrayList<>(mutableList);
        List<String> immutableCopy = Collections.unmodifiableList(trulyImmutable);

        // Map entries (Java 9+)
        Map<String, Integer> map = Map.ofEntries(
            Map.entry("A", 1),
            Map.entry("B", 2),
            Map.entry("C", 3)
        );
    }
}
```

**Follow-up Questions:**

- What's the difference between Collections.unmodifiableList() and List.of()?
- Are immutable collections thread-safe?

### 74. What is the diamond operator?

**Example:**

```java
import java.util.*;

public class DiamondOperatorExample {
    public static void main(String[] args) {
        // Before Java 7 - repetitive type declaration
        Map<String, List<String>> map1 = new HashMap<String, List<String>>();

        // Java 7+ Diamond operator <> - type inference
        Map<String, List<String>> map2 = new HashMap<>();

        // Works with any generic class
        List<String> list = new ArrayList<>();
        Set<Integer> set = new HashSet<>();
        Map<String, Integer> map = new HashMap<>();

        // Nested generics
        List<Map<String, List<Integer>>> complex = new ArrayList<>();

        // With anonymous classes (Java 9+)
        List<String> anonymousList = new ArrayList<>() {
            {
                add("A");
                add("B");
            }
        };
    }
}
```

**Follow-up Questions:**

- Can you use diamond operator with anonymous classes before Java 9?

### 75. What are varargs?

**Example:**

```java
public class VarargsExample {
    // Varargs method
    public static int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }

    // Varargs with other parameters (must be last)
    public static void printInfo(String prefix, String... messages) {
        for (String message : messages) {
            System.out.println(prefix + message);
        }
    }

    // Generic varargs
    @SafeVarargs
    public static <T> void printAll(T... elements) {
        for (T element : elements) {
            System.out.println(element);
        }
    }

    public static void main(String[] args) {
        // Can call with any number of arguments
        System.out.println(sum());           // 0
        System.out.println(sum(5));          // 5
        System.out.println(sum(1, 2, 3));    // 6
        System.out.println(sum(1, 2, 3, 4, 5));  // 15

        // Can pass array
        int[] arr = {1, 2, 3, 4};
        System.out.println(sum(arr));

        // With prefix
        printInfo("Message: ", "Hello", "World");

        // Generic varargs
        printAll("A", "B", "C");
        printAll(1, 2, 3, 4, 5);
    }
}
```

**Rules:**

```
1. Only one varargs parameter per method
2. Must be the last parameter
3. Treated as array internally
4. Can be called with 0 or more arguments
```

**Follow-up Questions:**

- What is @SafeVarargs?
- Can you overload varargs methods?

### 76. What is static import?

**Example:**

```java
import static java.lang.Math.*;  // Static import
import static java.lang.System.out;

public class StaticImportExample {
    public static void main(String[] args) {
        // Without static import
        double result1 = Math.sqrt(16);
        double result2 = Math.pow(2, 3);
        System.out.println(result1);

        // With static import
        double result3 = sqrt(16);  // No Math. prefix
        double result4 = pow(2, 3);
        out.println(result3);  // No System. prefix

        // Use sparingly to avoid confusion
        double pi = PI;  // Instead of Math.PI
        double e = E;    // Instead of Math.E
    }
}
```

**Follow-up Questions:**

- When should you use static import?
- Can static import cause naming conflicts?

### 77. What is the difference between shallow copy and deep copy?

**Example:**

```java
import java.util.*;

class Address {
    String city;

    public Address(String city) {
        this.city = city;
    }

    // Copy constructor for deep copy
    public Address(Address other) {
        this.city = other.city;
    }
}

class Person implements Cloneable {
    String name;
    Address address;

    public Person(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    // Shallow copy
    public Person shallowCopy() {
        return new Person(this.name, this.address);  // Shares Address object
    }

    // Deep copy
    public Person deepCopy() {
        return new Person(this.name, new Address(this.address));  // New Address object
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        Person cloned = (Person) super.clone();
        cloned.address = new Address(this.address);  // Deep copy
        return cloned;
    }
}

public class CopyExample {
    public static void main(String[] args) {
        Address addr = new Address("NYC");
        Person original = new Person("John", addr);

        // Shallow copy
        Person shallowCopy = original.shallowCopy();
        shallowCopy.address.city = "LA";
        System.out.println("Original city: " + original.address.city);  // LA (shared)

        // Deep copy
        addr = new Address("NYC");
        original = new Person("John", addr);
        Person deepCopy = original.deepCopy();
        deepCopy.address.city = "LA";
        System.out.println("Original city: " + original.address.city);  // NYC (independent)
    }
}
```

**Visual Representation:**

```
Shallow Copy:
original ──→ [Person: name="John", address=0x1234]
                                              ↓
shallowCopy ──→ [Person: name="John", address=0x1234]
                                              ↓
                    [Address: city="NYC"] ←──┘
                    (Shared object)

Deep Copy:
original ──→ [Person: name="John", address=0x1234] ──→ [Address: city="NYC"]

deepCopy ──→ [Person: name="John", address=0x5678] ──→ [Address: city="NYC"]
                                                        (Separate object)
```

**Follow-up Questions:**

- How do you perform deep copy of complex objects?
- What are the challenges of deep copying?

### 78. What is the instanceof operator?

**Example:**

```java
public class InstanceofExample {
    public static void main(String[] args) {
        Object obj = "Hello";

        // Basic instanceof
        if (obj instanceof String) {
            String str = (String) obj;
            System.out.println("Length: " + str.length());
        }

        // Inheritance hierarchy
        Animal animal = new Dog();

        System.out.println(animal instanceof Dog);     // true
        System.out.println(animal instanceof Animal);  // true
        System.out.println(animal instanceof Object);  // true
        System.out.println(animal instanceof Cat);     // false

        // With null
        Animal nullAnimal = null;
        System.out.println(nullAnimal instanceof Animal);  // false

        // Interface check
        System.out.println(animal instanceof Runnable);  // Depends on implementation

        // Pattern matching (Java 16+)
        if (obj instanceof String s) {  // Combines check and cast
            System.out.println("Length: " + s.length());
        }

        // Polymorphism with instanceof
        processAnimal(new Dog());
        processAnimal(new Cat());
    }

    static void processAnimal(Animal animal) {
        if (animal instanceof Dog) {
            ((Dog) animal).bark();
        } else if (animal instanceof Cat) {
            ((Cat) animal).meow();
        }
    }
}

class Animal {}
class Dog extends Animal {
    void bark() { System.out.println("Woof!"); }
}
class Cat extends Animal {
    void meow() { System.out.println("Meow!"); }
}
```

**Follow-up Questions:**

- What does instanceof return for null?
- What is pattern matching with instanceof?

### 79. What is the transient keyword?

**Example:**

```java
import java.io.*;

class User implements Serializable {
    private static final long serialVersionUID = 1L;

    private String username;
    private transient String password;  // Not serialized
    private transient int sessionId;    // Not serialized

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        this.sessionId = (int)(Math.random() * 1000);
    }

    @Override
    public String toString() {
        return "User{username='" + username + "', password='" + password +
               "', sessionId=" + sessionId + "}";
    }
}

public class TransientExample {
    public static void main(String[] args) throws Exception {
        User user = new User("john", "secret123");
        System.out.println("Before: " + user);

        // Serialize
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("user.ser"));
        oos.writeObject(user);
        oos.close();

        // Deserialize
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("user.ser"));
        User deserializedUser = (User) ois.readObject();
        ois.close();

        System.out.println("After: " + deserializedUser);
        // password and sessionId are null/0 (transient fields not serialized)
    }
}
```

**Follow-up Questions:**

- When should you use transient?
- Are static fields serialized?

### 80. What is Covariant return type?

**Example:**

```java
class Animal {
    Animal reproduce() {
        return new Animal();
    }
}

class Dog extends Animal {
    @Override
    Dog reproduce() {  // Covariant return type (subtype of Animal)
        return new Dog();
    }
}

public class CovariantReturnExample {
    public static void main(String[] args) {
        Animal animal = new Animal();
        Animal baby1 = animal.reproduce();  // Returns Animal

        Dog dog = new Dog();
        Dog puppy = dog.reproduce();  // Returns Dog (no casting needed)
    }
}
```

**Follow-up Questions:**

- What are the rules for covariant return types?
- Can you have covariant parameter types?

### 81. What is the difference between Array and ArrayList?

**Example:**

```java
import java.util.*;

public class ArrayVsArrayList {
    public static void main(String[] args) {
        // Array - fixed size
        int[] array = new int[5];
        array[0] = 10;
        array[1] = 20;
        System.out.println("Array length: " + array.length);  // 5 (fixed)

        // Can't resize
        // array[5] = 30;  // ArrayIndexOutOfBoundsException

        // Can hold primitives
        int[] primitives = {1, 2, 3};

        // ArrayList - dynamic size
        ArrayList<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);
        list.add(30);  // Automatically grows
        System.out.println("ArrayList size: " + list.size());  // 3 (dynamic)

        // Can't hold primitives directly (needs wrapper)
        // ArrayList<int> invalid;  // Error!
        ArrayList<Integer> valid = new ArrayList<>();  // Uses Integer wrapper

        // Performance
        int[] arr = new int[1000000];
        ArrayList<Integer> arrList = new ArrayList<>();

        // Array access - faster
        long start = System.nanoTime();
        for (int i = 0; i < arr.length; i++) {
            arr[i] = i;
        }
        System.out.println("Array: " + (System.nanoTime() - start));

        // ArrayList access - slower (autoboxing overhead)
        start = System.nanoTime();
        for (int i = 0; i < 1000000; i++) {
            arrList.add(i);
        }
        System.out.println("ArrayList: " + (System.nanoTime() - start));

        // Array is covariant
        Object[] objArray = new String[5];  // OK
        // objArray[0] = 10;  // Runtime error: ArrayStoreException

        // ArrayList with generics - type safe
        // ArrayList<Object> objList = new ArrayList<String>();  // Compile error
    }
}
```

**Comparison:**

```
Feature          | Array              | ArrayList
-----------------|--------------------|-----------------
Size             | Fixed              | Dynamic
Primitives       | Yes                | No (uses wrappers)
Type safety      | Runtime            | Compile-time (generics)
Performance      | Faster             | Slower
Methods          | length             | size(), add(), remove(), etc.
Multi-dimensional| Yes                | Nested lists
Memory           | Less               | More (overhead)
```

**Follow-up Questions:**

- What is an array covariance?
- When would you use array over ArrayList?

### 82. What is the difference between throw and throws?

**Example:**

```java
import java.io.*;

public class ThrowVsThrows {
    // throws - declares exceptions method might throw
    public void readFile(String filename) throws IOException, FileNotFoundException {
        if (filename == null) {
            throw new IllegalArgumentException("Filename cannot be null");  // throw
        }

        FileReader reader = new FileReader(filename);  // May throw FileNotFoundException
        reader.read();  // May throw IOException
        reader.close();
    }

    // throw - actually throws an exception
    public void validateAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
        if (age < 18) {
            throw new RuntimeException("Must be 18 or older");
        }
    }

    // Multiple exceptions with throws
    public void processData() throws IOException, SQLException {
        // Method body
    }

    // Rethrowing exception
    public void wrapException() throws CustomException {
        try {
            readFile("data.txt");
        } catch (IOException e) {
            throw new CustomException("Failed to read file", e);  // throw
        }
    }

    public static void main(String[] args) {
        ThrowVsThrows example = new ThrowVsThrows();

        try {
            example.readFile("test.txt");
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            example.validateAge(15);
        } catch (RuntimeException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}

class CustomException extends Exception {
    public CustomException(String message, Throwable cause) {
        super(message, cause);
    }
}

class SQLException extends Exception {}
```

**Comparison:**

```
Feature          | throw                    | throws
-----------------|--------------------------|---------------------------
Type             | Keyword                  | Keyword
Purpose          | Throw exception instance | Declare possible exceptions
Location         | Inside method body       | Method signature
Usage            | throw new Exception()    | void method() throws Exception
Multiple         | One at a time            | Multiple exceptions possible
```

**Follow-up Questions:**

- Can you use both throw and throws in same method?
- Can you throw checked exceptions without declaring them?

### 83. What is method hiding?

**Example:**

```java
class Parent {
    // Static method
    static void staticMethod() {
        System.out.println("Parent static method");
    }

    // Instance method
    void instanceMethod() {
        System.out.println("Parent instance method");
    }
}

class Child extends Parent {
    // Method hiding (not overriding)
    static void staticMethod() {
        System.out.println("Child static method");
    }

    // Method overriding
    @Override
    void instanceMethod() {
        System.out.println("Child instance method");
    }
}

public class MethodHidingExample {
    public static void main(String[] args) {
        Parent parent = new Parent();
        Child child = new Child();
        Parent parentRef = new Child();

        // Static methods - no polymorphism (method hiding)
        parent.staticMethod();      // Parent static method
        child.staticMethod();       // Child static method
        parentRef.staticMethod();   // Parent static method (based on reference type!)

        // Instance methods - polymorphism (method overriding)
        parent.instanceMethod();    // Parent instance method
        child.instanceMethod();     // Child instance method
        parentRef.instanceMethod(); // Child instance method (based on object type!)
    }
}
```

**Comparison:**

```
Feature          | Method Overriding    | Method Hiding
-----------------|----------------------|----------------------
Method type      | Instance             | Static
Polymorphism     | Yes (runtime)        | No (compile-time)
Resolution       | Object type          | Reference type
@Override        | Used                 | Not applicable
```

**Follow-up Questions:**

- Can you override static methods?
- What is the difference between overriding and hiding?

### 84. What is tight coupling vs loose coupling?

**Example:**

```java
// Tight Coupling - bad design
class TightCoupledService {
    private MySQLDatabase database = new MySQLDatabase();  // Tightly coupled

    public void saveData(String data) {
        database.save(data);
    }
}

class MySQLDatabase {
    public void save(String data) {
        System.out.println("Saving to MySQL: " + data);
    }
}

// Loose Coupling - good design
interface Database {
    void save(String data);
}

class MySQLDatabaseImpl implements Database {
    @Override
    public void save(String data) {
        System.out.println("Saving to MySQL: " + data);
    }
}

class MongoDBImpl implements Database {
    @Override
    public void save(String data) {
        System.out.println("Saving to MongoDB: " + data);
    }
}

class LooseCoupledService {
    private Database database;  // Loosely coupled

    // Dependency Injection
    public LooseCoupledService(Database database) {
        this.database = database;
    }

    public void saveData(String data) {
        database.save(data);
    }
}

public class CouplingExample {
    public static void main(String[] args) {
        // Tight coupling - can't easily change database
        TightCoupledService tight = new TightCoupledService();
        tight.saveData("data");

        // Loose coupling - easy to change database
        Database mysql = new MySQLDatabaseImpl();
        LooseCoupledService service1 = new LooseCoupledService(mysql);
        service1.saveData("data");

        Database mongo = new MongoDBImpl();
        LooseCoupledService service2 = new LooseCoupledService(mongo);
        service2.saveData("data");
    }
}
```

**Follow-up Questions:**

- How do you achieve loose coupling?
- What are the benefits of loose coupling?

### 85. What are the SOLID principles?

**SOLID Principles Overview:**

**S - Single Responsibility Principle:**

```java
// Bad - multiple responsibilities
class User {
    void saveToDatabase() { }
    void sendEmail() { }
    void generateReport() { }
}

// Good - single responsibility
class User {
    String name;
    String email;
}

class UserRepository {
    void save(User user) { }
}

class EmailService {
    void sendEmail(User user) { }
}

class ReportGenerator {
    void generate(User user) { }
}
```

**O - Open/Closed Principle:**

```java
// Open for extension, closed for modification

// Bad
class AreaCalculator {
    double calculateArea(Object shape) {
        if (shape instanceof Circle) {
            Circle circle = (Circle) shape;
            return Math.PI * circle.radius * circle.radius;
        } else if (shape instanceof Rectangle) {
            Rectangle rect = (Rectangle) shape;
            return rect.width * rect.height;
        }
        return 0;
    }
}

// Good
interface Shape {
    double calculateArea();
}

class Circle implements Shape {
    double radius;

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle implements Shape {
    double width, height;

    @Override
    public double calculateArea() {
        return width * height;
    }
}
```

**L - Liskov Substitution Principle:**

```java
// Subclasses should be substitutable for their base classes

class Bird {
    void fly() {
        System.out.println("Flying");
    }
}

// Bad - Penguin can't fly, violates LSP
class Penguin extends Bird {
    @Override
    void fly() {
        throw new UnsupportedOperationException("Penguins can't fly");
    }
}

// Good - proper abstraction
interface Bird {
    void eat();
}

interface FlyingBird extends Bird {
    void fly();
}

class Sparrow implements FlyingBird {
    @Override
    public void fly() { System.out.println("Flying"); }
    @Override
    public void eat() { System.out.println("Eating"); }
}

class Penguin implements Bird {
    @Override
    public void eat() { System.out.println("Eating"); }
}
```

**I - Interface Segregation Principle:**

```java
// Bad - fat interface
interface Worker {
    void work();
    void eat();
    void sleep();
}

// Good - segregated interfaces
interface Workable {
    void work();
}

interface Eatable {
    void eat();
}

interface Sleepable {
    void sleep();
}

class Human implements Workable, Eatable, Sleepable {
    public void work() { }
    public void eat() { }
    public void sleep() { }
}

class Robot implements Workable {
    public void work() { }
    // Doesn't need eat() and sleep()
}
```

**D - Dependency Inversion Principle:**

```java
// High-level modules should not depend on low-level modules

// Bad
class MySQLDatabase {
    void connect() { }
}

class UserService {
    private MySQLDatabase database = new MySQLDatabase();  // Depends on concrete class
}

// Good
interface Database {
    void connect();
}

class MySQLDatabase implements Database {
    @Override
    public void connect() { }
}

class UserService {
    private Database database;  // Depends on abstraction

    public UserService(Database database) {
        this.database = database;
    }
}
```

**Follow-up Questions:**

- Which SOLID principle does Dependency Injection follow?
- How do SOLID principles improve code quality?

### 86. What is the difference between Heap pollution and Memory leak?

**Example:**

```java
import java.util.*;

public class HeapPollutionVsMemoryLeak {
    // Heap Pollution - mixing parameterized types
    static void heapPollution() {
        List<String>[] stringLists = new List[10];  // Unchecked warning
        Object[] objects = stringLists;
        objects[0] = Arrays.asList(42);  // Heap pollution

        // String s = stringLists[0].get(0);  // ClassCastException at runtime
    }

    // Memory Leak - objects not garbage collected
    static List<Object> leakyList = new ArrayList<>();

    static void memoryLeak() {
        for (int i = 0; i < 1000000; i++) {
            leakyList.add(new Object());  // Objects never removed
        }
        // Objects stay in memory even if not needed
    }

    // Common memory leak: Not closing resources
    static void resourceLeak() {
        try {
            FileInputStream fis = new FileInputStream("file.txt");
            // Forgot to close - memory leak
        } catch (Exception e) {
        }
    }

    // Fix with try-with-resources
    static void noResourceLeak() {
        try (FileInputStream fis = new FileInputStream("file.txt")) {
            // Automatically closed
        } catch (Exception e) {
        }
    }
}
```

**Follow-up Questions:**

- How do you detect memory leaks?
- What tools can help identify memory issues?

### 87. What is the purpose of the finalize() method?

**Example:**

```java
class Resource {
    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("Finalizing resource...");
            // Cleanup code
        } finally {
            super.finalize();
        }
    }
}

public class FinalizeExample {
    public static void main(String[] args) {
        Resource resource = new Resource();
        resource = null;

        System.gc();  // Suggest garbage collection
        System.runFinalization();  // Suggest finalizing

        // Note: finalize() is deprecated in Java 9+
        // Use try-with-resources or explicit close() instead
    }
}
```

**Why finalize() is deprecated:**

```
Problems with finalize():
1. Unpredictable execution time
2. Performance overhead
3. Can cause deadlocks
4. Resurrection possible
5. No guarantee of execution

Better alternatives:
1. try-with-resources (AutoCloseable)
2. Cleaner API (Java 9+)
3. Explicit close() methods
```

**Follow-up Questions:**

- When is finalize() called?
- What is the Cleaner API?

### 88. What is the difference between this and super?

**Example:**

```java
class Parent {
    int value = 10;

    Parent() {
        System.out.println("Parent constructor");
    }

    Parent(int value) {
        this.value = value;
    }

    void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    int value = 20;  // Hides parent's value

    Child() {
        super();  // Call parent's no-arg constructor (must be first)
        System.out.println("Child constructor");
    }

    Child(int value) {
        super(value);  // Call parent's parameterized constructor
        this.value = value;
    }

    @Override
    void display() {
        System.out.println("Child display");
        super.display();  // Call parent's method
    }

    void showValues() {
        System.out.println("this.value: " + this.value);    // 20 (child's)
        System.out.println("super.value: " + super.value);  // 10 (parent's)

        this.display();   // Child display
        super.display();  // Parent display
    }
}

public class ThisVsSuperExample {
    public static void main(String[] args) {
        Child child = new Child();
        child.showValues();
    }
}
```

**Usage:**

```
this keyword:
- Refers to current object
- Access current class members
- Call current class constructor: this()
- Pass current object as parameter

super keyword:
- Refers to parent object
- Access parent class members
- Call parent class constructor: super()
- Call parent class methods
```

**Follow-up Questions:**

- Can you use this and super in static methods?
- What happens if you don't call super() explicitly?

### 89. What are access modifiers?

**Example:**

```java
// File: AccessModifierExample.java
package com.example;

public class AccessModifierExample {
    public int publicVar = 1;        // Accessible everywhere
    protected int protectedVar = 2;  // Accessible in package and subclasses
    int defaultVar = 3;              // Package-private (no modifier)
    private int privateVar = 4;      // Only in this class

    public void publicMethod() {
        System.out.println("Public method");
    }

    protected void protectedMethod() {
        System.out.println("Protected method");
    }

    void defaultMethod() {
        System.out.println("Default method");
    }

    private void privateMethod() {
        System.out.println("Private method");
    }

    void testAccess() {
        // All accessible within same class
        System.out.println(publicVar);
        System.out.println(protectedVar);
        System.out.println(defaultVar);
        System.out.println(privateVar);
    }
}

// Same package
class SamePackageClass {
    void test() {
        AccessModifierExample obj = new AccessModifierExample();
        obj.publicVar = 10;      // OK
        obj.protectedVar = 20;   // OK
        obj.defaultVar = 30;     // OK
        // obj.privateVar = 40;  // Error
    }
}

// Different package
package com.other;
import com.example.AccessModifierExample;

class DifferentPackageClass {
    void test() {
        AccessModifierExample obj = new AccessModifierExample();
        obj.publicVar = 10;      // OK
        // obj.protectedVar = 20;  // Error (not subclass)
        // obj.defaultVar = 30;    // Error
        // obj.privateVar = 40;    // Error
    }
}

// Subclass in different package
package com.other;
import com.example.AccessModifierExample;

class SubclassInDifferentPackage extends AccessModifierExample {
    void test() {
        publicVar = 10;       // OK
        protectedVar = 20;    // OK (subclass)
        // defaultVar = 30;   // Error
        // privateVar = 40;   // Error
    }
}
```

**Access Level Table:**

```
Modifier    | Class | Package | Subclass | World
------------|-------|---------|----------|-------
public      | Yes   | Yes     | Yes      | Yes
protected   | Yes   | Yes     | Yes      | No
default     | Yes   | Yes     | No       | No
private     | Yes   | No      | No       | No
```

**Follow-up Questions:**

- What is the default access modifier for interface methods?
- Can top-level classes be private?

### 90. What is marker interface?

**Example:**

```java
import java.io.*;

// Marker interfaces in Java
// 1. Serializable
class SerializableExample implements Serializable {
    private String data;
}

// 2. Cloneable
class CloneableExample implements Cloneable {
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

// 3. Remote (in RMI)
import java.rmi.Remote;
interface MyRemoteInterface extends Remote {
    void remoteMethod() throws java.rmi.RemoteException;
}

// Custom marker interface
interface Deletable {
    // No methods - just marks the class
}

class Document implements Deletable {
    String content;
}

public class MarkerInterfaceExample {
    public static void deleteIfAllowed(Object obj) {
        if (obj instanceof Deletable) {
            System.out.println("Deleting object");
            // Perform deletion
        } else {
            System.out.println("Object cannot be deleted");
        }
    }

    public static void main(String[] args) {
        Document doc = new Document();
        deleteIfAllowed(doc);  // Can delete

        String str = "test";
        deleteIfAllowed(str);  // Cannot delete
    }
}
```

**Common Marker Interfaces:**

```
1. Serializable  - Marks class as serializable
2. Cloneable     - Marks class as cloneable
3. Remote        - Marks interface for RMI
4. RandomAccess  - Indicates fast random access (ArrayList)
```

**Follow-up Questions:**

- Are marker interfaces still used in modern Java?
- What is the alternative to marker interfaces?

### 91. What is autoboxing performance impact?

**Example:**

```java
import java.util.*;

public class AutoboxingPerformance {
    public static void main(String[] args) {
        int iterations = 10_000_000;

        // Bad - Autoboxing in loop
        long start = System.currentTimeMillis();
        Long sum1 = 0L;  // Wrapper
        for (long i = 0; i < iterations; i++) {
            sum1 += i;  // Unbox → add → box (3 operations each iteration!)
        }
        long end = System.currentTimeMillis();
        System.out.println("With autoboxing: " + (end - start) + "ms");

        // Good - Using primitive
        start = System.currentTimeMillis();
        long sum2 = 0L;  // Primitive
        for (long i = 0; i < iterations; i++) {
            sum2 += i;  // Direct addition
        }
        end = System.currentTimeMillis();
        System.out.println("Without autoboxing: " + (end - start) + "ms");

        // ArrayList performance
        List<Integer> list = new ArrayList<>();
        start = System.currentTimeMillis();
        for (int i = 0; i < iterations; i++) {
            list.add(i);  // Autoboxing
        }
        end = System.currentTimeMillis();
        System.out.println("ArrayList with autoboxing: " + (end - start) + "ms");
    }
}
```

**Performance Impact:**

```
Operation              | Time (relative)
-----------------------|----------------
Primitive arithmetic   | 1x (baseline)
Wrapper arithmetic     | 5-10x slower
Collection operations  | Additional overhead
Memory                 | Wrappers use more memory
```

**Follow-up Questions:**

- When is autoboxing beneficial?
- How can you avoid autoboxing in performance-critical code?

### 92. What is the CompletableFuture?

**Example:**

```java
import java.util.concurrent.*;

public class CompletableFutureExample {
    public static void main(String[] args) throws Exception {
        // Simple async operation
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            sleep(1000);
            return "Hello";
        });

        System.out.println("Doing other work...");
        String result = future.get();  // Blocks until complete
        System.out.println("Result: " + result);

        // Chaining operations
        CompletableFuture<String> chain = CompletableFuture
            .supplyAsync(() -> "Hello")
            .thenApply(s -> s + " World")
            .thenApply(String::toUpperCase);

        System.out.println(chain.get());  // HELLO WORLD

        // thenAccept - consume result
        CompletableFuture.supplyAsync(() -> "Data")
            .thenAccept(data -> System.out.println("Received: " + data));

        // thenRun - run after completion
        CompletableFuture.supplyAsync(() -> "Task")
            .thenRun(() -> System.out.println("Task completed"));

        // Combining futures
        CompletableFuture<Integer> future1 = CompletableFuture.supplyAsync(() -> 10);
        CompletableFuture<Integer> future2 = CompletableFuture.supplyAsync(() -> 20);

        CompletableFuture<Integer> combined = future1.thenCombine(future2, (a, b) -> a + b);
        System.out.println("Combined: " + combined.get());  // 30

        // Exception handling
        CompletableFuture<String> withException = CompletableFuture
            .supplyAsync(() -> {
                if (true) throw new RuntimeException("Error");
                return "Success";
            })
            .exceptionally(ex -> "Handled: " + ex.getMessage());

        System.out.println(withException.get());

        // allOf - wait for all
        CompletableFuture<Void> all = CompletableFuture.allOf(future1, future2);
        all.join();

        // anyOf - wait for any
        CompletableFuture<Object> any = CompletableFuture.anyOf(future1, future2);
    }

    static void sleep(long ms) {
        try { Thread.sleep(ms); } catch (InterruptedException e) { }
    }
}
```

**Follow-up Questions:**

- What is the difference between thenApply and thenCompose?
- How does CompletableFuture differ from Future?

### 93. What is the difference between List, Set, and Map?

**Quick Comparison:**

```java
import java.util.*;

public class CollectionTypes {
    public static void main(String[] args) {
        // List - ordered, allows duplicates
        List<String> list = new ArrayList<>();
        list.add("A");
        list.add("B");
        list.add("A");  // Duplicate allowed
        System.out.println("List: " + list);  // [A, B, A]

        // Set - no duplicates, may be ordered
        Set<String> set = new HashSet<>();
        set.add("A");
        set.add("B");
        set.add("A");  // Duplicate ignored
        System.out.println("Set: " + set);  // [A, B] (order not guaranteed)

        // Map - key-value pairs, unique keys
        Map<String, Integer> map = new HashMap<>();
        map.put("A", 1);
        map.put("B", 2);
        map.put("A", 3);  // Overwrites previous value
        System.out.println("Map: " + map);  // {A=3, B=2}
    }
}
```

**Comparison:**

```
Feature          | List              | Set               | Map
-----------------|-------------------|-------------------|------------------
Duplicates       | Allowed           | Not allowed       | Unique keys
Order            | Insertion order   | Depends on impl   | Depends on impl
Null             | Multiple nulls    | One null (HashSet)| One null key
Access           | By index          | By element        | By key
Implementation   | ArrayList, Linked | HashSet, TreeSet  | HashMap, TreeMap
```

**Follow-up Questions:**

- When would you use each collection type?
- What is the difference between HashSet and TreeSet?

### 94. What is the purpose of the static block?

**Example:**

```java
public class StaticBlockExample {
    static int staticVar;
    static String config;

    // Static block - executed once when class is loaded
    static {
        System.out.println("Static block 1 executed");
        staticVar = 100;

        // Can have complex initialization
        try {
            config = loadConfiguration();
        } catch (Exception e) {
            config = "default";
        }
    }

    // Can have multiple static blocks (executed in order)
    static {
        System.out.println("Static block 2 executed");
        staticVar += 50;
    }

    // Instance block (executed for each object)
    {
        System.out.println("Instance block executed");
    }

    public StaticBlockExample() {
        System.out.println("Constructor executed");
    }

    static String loadConfiguration() {
        return "loaded config";
    }

    public static void main(String[] args) {
        System.out.println("Main method");
        System.out.println("Static var: " + staticVar);  // 150

        StaticBlockExample obj1 = new StaticBlockExample();
        StaticBlockExample obj2 = new StaticBlockExample();
    }
}

/* Output:
Static block 1 executed
Static block 2 executed
Main method
Static var: 150
Instance block executed
Constructor executed
Instance block executed
Constructor executed
*/
```

**Execution Order:**

```
1. Static blocks (once, when class loaded)
2. Instance blocks (each object creation)
3. Constructor (each object creation)

For inheritance:
1. Parent static block
2. Child static block
3. Parent instance block
4. Parent constructor
5. Child instance block
6. Child constructor
```

**Follow-up Questions:**

- Can you have multiple static blocks?
- When are static blocks executed?

### 95. What is var keyword (Java 10+)?

**Example:**

```java
import java.util.*;

public class VarExample {
    public static void main(String[] args) {
        // Type inference with var
        var number = 10;              // int
        var message = "Hello";        // String
        var price = 19.99;            // double
        var flag = true;              // boolean

        // Collections
        var list = new ArrayList<String>();  // ArrayList<String>
        var map = new HashMap<String, Integer>();  // HashMap<String, Integer>

        // Must be initialized
        // var x;  // Error! Cannot infer type

        // Cannot be null
        // var y = null;  // Error! Cannot infer type

        // Works with complex types
        var stream = list.stream();
        var optional = Optional.of("value");

        // In loops
        var numbers = List.of(1, 2, 3, 4, 5);
        for (var num : numbers) {
            System.out.println(num);
        }

        // Lambda - cannot use var for lambda parameters in Java 10
        // Java 11+ allows var in lambda
        list.forEach((var item) -> System.out.println(item));

        // Restrictions
        // - Cannot use for fields
        // - Cannot use for method parameters
        // - Cannot use for method return types
        // - Only for local variables
    }
}
```

**Follow-up Questions:**

- Is var dynamically typed?
- Where can you not use var?

### 96. What is the difference between >> and >>> operators?

**Example:**

```java
public class ShiftOperatorExample {
    public static void main(String[] args) {
        int positive = 8;   // Binary: 00000000 00000000 00000000 00001000
        int negative = -8;  // Binary: 11111111 11111111 11111111 11111000

        // Right shift >> - preserves sign (arithmetic shift)
        System.out.println(positive >> 1);  // 4  (divides by 2)
        System.out.println(negative >> 1);  // -4 (divides by 2, preserves sign)

        // Unsigned right shift >>> - fills with 0 (logical shift)
        System.out.println(positive >>> 1); // 4
        System.out.println(negative >>> 1); // 2147483644 (fills with 0)

        // Left shift << - same for both
        System.out.println(positive << 1);  // 16 (multiplies by 2)
        System.out.println(negative << 1);  // -16 (multiplies by 2)

        // Demonstrating difference
        int num = -16;
        System.out.println("Original: " + Integer.toBinaryString(num));
        System.out.println(">>  : " + Integer.toBinaryString(num >> 2));
        System.out.println(">>> : " + Integer.toBinaryString(num >>> 2));
    }
}
```

**Follow-up Questions:**

- What is the difference between signed and unsigned shift?
- When would you use >>> over >>?

### 97. What is the Comparator.comparing() method?

**Example:**

```java
import java.util.*;

class Employee {
    String name;
    int age;
    double salary;

    public Employee(String name, int age, double salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
    public double getSalary() { return salary; }

    @Override
    public String toString() {
        return name + "(" + age + ", $" + salary + ")";
    }
}

public class ComparatorComparingExample {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee("John", 30, 60000),
            new Employee("Alice", 25, 70000),
            new Employee("Bob", 30, 55000),
            new Employee("Charlie", 25, 70000)
        );

        // Sort by name
        employees.sort(Comparator.comparing(Employee::getName));
        System.out.println("By name: " + employees);

        // Sort by age
        employees.sort(Comparator.comparingInt(Employee::getAge));
        System.out.println("By age: " + employees);

        // Sort by salary
        employees.sort(Comparator.comparingDouble(Employee::getSalary));
        System.out.println("By salary: " + employees);

        // Multiple criteria - age, then salary
        employees.sort(Comparator.comparing(Employee::getAge)
                                .thenComparing(Employee::getSalary));
        System.out.println("By age, then salary: " + employees);

        // Reverse order
        employees.sort(Comparator.comparing(Employee::getSalary).reversed());
        System.out.println("By salary desc: " + employees);

        // Null-safe
        Comparator<Employee> nullSafe = Comparator.nullsLast(
            Comparator.comparing(Employee::getName)
        );

        // Natural order
        List<String> names = Arrays.asList("Charlie", "Alice", "Bob");
        names.sort(Comparator.naturalOrder());
        System.out.println("Natural order: " + names);

        names.sort(Comparator.reverseOrder());
        System.out.println("Reverse order: " + names);
    }
}
```

**Follow-up Questions:**

- What is the difference between comparing() and comparingInt()?
- How does thenComparing() work?

### 98. What is Collection.stream() vs parallelStream()?

**Example:**

```java
import java.util.*;
import java.util.stream.*;

public class StreamVsParallelStream {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        for (int i = 1; i <= 1000; i++) {
            numbers.add(i);
        }

        // Sequential stream
        long start = System.currentTimeMillis();
        long sum1 = numbers.stream()
                          .mapToLong(i -> {
                              sleep(1);  // Simulate work
                              return i;
                          })
                          .sum();
        long end = System.currentTimeMillis();
        System.out.println("Sequential: " + (end - start) + "ms");

        // Parallel stream
        start = System.currentTimeMillis();
        long sum2 = numbers.parallelStream()
                          .mapToLong(i -> {
                              sleep(1);  // Simulate work
                              return i;
                          })
                          .sum();
        end = System.currentTimeMillis();
        System.out.println("Parallel: " + (end - start) + "ms");

        // When to use parallel
        // Good: CPU-intensive independent operations
        List<Integer> squares = numbers.parallelStream()
                                      .map(n -> n * n)
                                      .collect(Collectors.toList());

        // Bad: Small datasets or I/O operations
        // Bad: Order-dependent operations

        // Custom parallel
        ForkJoinPool customPool = new ForkJoinPool(4);
        customPool.submit(() ->
            numbers.parallelStream().forEach(System.out::println)
        ).join();
    }

    static void sleep(long ms) {
        try { Thread.sleep(ms); } catch (InterruptedException e) { }
    }
}
```

**When to Use Parallel Streams:**

```
Use Parallel:                  Use Sequential:
✓ Large datasets              ✓ Small datasets
✓ CPU-intensive operations    ✓ I/O operations
✓ Independent operations      ✓ Order matters
✓ Stateless operations        ✓ Shared mutable state
```

**Follow-up Questions:**

- What is the ForkJoinPool?
- When does parallel stream hurt performance?

### 99. What are common String manipulation methods?

**Example:**

```java
public class StringMethods {
    public static void main(String[] args) {
        String str = "  Hello World  ";

        // Case conversion
        System.out.println(str.toUpperCase());  // "  HELLO WORLD  "
        System.out.println(str.toLowerCase());  // "  hello world  "

        // Trim whitespace
        System.out.println(str.trim());         // "Hello World"
        System.out.println(str.strip());        // "Hello World" (Java 11+, Unicode-aware)

        // Substring
        System.out.println(str.substring(2, 7));  // "Hello"

        // Replace
        System.out.println(str.replace("World", "Java"));  // "  Hello Java  "
        System.out.println(str.replaceAll("\\s+", " "));  // " Hello World "

        // Split
        String[] words = str.trim().split(" ");  // ["Hello", "World"]

        // Contains, starts, ends
        System.out.println(str.contains("Hello"));      // true
        System.out.println(str.trim().startsWith("Hello"));  // true
        System.out.println(str.trim().endsWith("World"));    // true

        // Index
        System.out.println(str.indexOf("World"));      // 8
        System.out.println(str.lastIndexOf("l"));      // 11

        // Char operations
        System.out.println(str.charAt(2));             // 'H'
        System.out.println(str.length());              // 15

        // isEmpty vs isBlank (Java 11+)
        System.out.println("".isEmpty());              // true
        System.out.println("".isBlank());              // true
        System.out.println("   ".isEmpty());           // false
        System.out.println("   ".isBlank());           // true

        // Join (Java 8+)
        String joined = String.join(", ", "A", "B", "C");  // "A, B, C"

        // Repeat (Java 11+)
        System.out.println("Ha".repeat(3));  // "HaHaHa"

        // Format
        String formatted = String.format("Name: %s, Age: %d", "John", 25);

        // Comparison
        System.out.println("ABC".compareTo("ABD"));    // -1
        System.out.println("ABC".compareToIgnoreCase("abc"));  // 0
    }
}
```

**Follow-up Questions:**

- What is the difference between trim() and strip()?
- What is intern() method?

### 100. What are best practices in Java?

**Code Examples:**

```java
import java.util.*;
import java.util.stream.*;

public class JavaBestPractices {
    // 1. Use meaningful names
    // Bad
    int d;  // What is d?

    // Good
    int daysUntilExpiration;

    // 2. Use proper access modifiers
    public class BankAccount {
        private double balance;  // Encapsulation

        public double getBalance() {
            return balance;
        }
    }

    // 3. Use StringBuilder for concatenation in loops
    public String badConcatenation(List<String> words) {
        String result = "";
        for (String word : words) {
            result += word;  // Creates new object each iteration
        }
        return result;
    }

    public String goodConcatenation(List<String> words) {
        StringBuilder sb = new StringBuilder();
        for (String word : words) {
            sb.append(word);  // Modifies same object
        }
        return sb.toString();
    }

    // 4. Use try-with-resources
    public void readFile(String filename) throws IOException {
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            String line = br.readLine();
        }  // Automatically closed
    }

    // 5. Use proper collections
    // Bad - checking contains in ArrayList (O(n))
    public boolean checkExists(List<String> list, String item) {
        return list.contains(item);  // Slow for large lists
    }

    // Good - use HashSet (O(1))
    public boolean checkExistsFast(Set<String> set, String item) {
        return set.contains(item);  // Fast
    }

    // 6. Avoid unnecessary object creation
    // Bad
    public void badExample() {
        for (int i = 0; i < 1000; i++) {
            String temp = new String("temp");  // Unnecessary
        }
    }

    // Good
    public void goodExample() {
        String temp = "temp";  // String pool
        for (int i = 0; i < 1000; i++) {
            // Use temp
        }
    }

    // 7. Use enums for constants
    // Bad
    public static final int MONDAY = 1;
    public static final int TUESDAY = 2;

    // Good
    enum Day { MONDAY, TUESDAY, WEDNESDAY }

    // 8. Override equals() and hashCode() together
    class Person {
        String name;
        int age;

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Person person = (Person) o;
            return age == person.age && Objects.equals(name, person.name);
        }

        @Override
        public int hashCode() {
            return Objects.hash(name, age);
        }
    }

    // 9. Use Optional to avoid null checks
    public Optional<String> findUserEmail(int userId) {
        // return null;  // Bad
        return Optional.ofNullable(/* lookup user */);  // Good
    }

    // 10. Use specific exceptions
    public void processData(String data) {
        if (data == null) {
            throw new IllegalArgumentException("Data cannot be null");  // Specific
            // throw new Exception("Error");  // Too generic
        }
    }
}
```

**Key Best Practices:**

```
1.  ✓ Use meaningful variable names
2.  ✓ Follow naming conventions
3.  ✓ Use proper access modifiers (encapsulation)
4.  ✓ Prefer composition over inheritance
5.  ✓ Program to interfaces, not implementations
6.  ✓ Use generics for type safety
7.  ✓ Close resources properly (try-with-resources)
8.  ✓ Override equals() and hashCode() together
9.  ✓ Use StringBuilder for string concatenation in loops
10. ✓ Use appropriate collection types
11. ✓ Avoid unnecessary object creation
12. ✓ Use enums instead of constants
13. ✓ Prefer immutability
14. ✓ Use Optional to avoid null
15. ✓ Handle exceptions appropriately
16. ✓ Use streams for functional style
17. ✓ Make classes final if not designed for inheritance
18. ✓ Use @Override annotation
19. ✓ Avoid public fields (use getters/setters)
20. ✓ Keep methods small and focused
```

**Follow-up Questions:**

- What are Java naming conventions?
- How do you make code more testable?

---

## Quick Reference Guide

### Java Keywords

```
Access Modifiers:  public, private, protected, (default)
Class/Method:      class, interface, enum, abstract, final, static
Control Flow:      if, else, switch, case, default, break, continue
Loops:             for, while, do, foreach
Exception:         try, catch, finally, throw, throws
Object:            new, this, super, instanceof
Other:             package, import, extends, implements, native, strictfp,
                   synchronized, transient, volatile, assert, void, return
Literals:          true, false, null
Unused:            goto, const (reserved but not used)
```

### Primitive Data Types

```
Type      | Size    | Range                        | Default | Wrapper
----------|---------|------------------------------|---------|----------
byte      | 1 byte  | -128 to 127                  | 0       | Byte
short     | 2 bytes | -32,768 to 32,767            | 0       | Short
int       | 4 bytes | -2^31 to 2^31-1              | 0       | Integer
long      | 8 bytes | -2^63 to 2^63-1              | 0L      | Long
float     | 4 bytes | ±3.4E+38                     | 0.0f    | Float
double    | 8 bytes | ±1.7E+308                    | 0.0d    | Double
char      | 2 bytes | 0 to 65,535                  | '\u0000'| Character
boolean   | 1 bit   | true or false                | false   | Boolean
```

### Collection Hierarchy

```
Collection
├── List (ordered, duplicates allowed)
│   ├── ArrayList       - Fast random access
│   ├── LinkedList      - Fast insertion/deletion
│   └── Vector (legacy) - Synchronized ArrayList
│       └── Stack       - LIFO
├── Set (no duplicates)
│   ├── HashSet         - Fast, unordered
│   ├── LinkedHashSet   - Insertion order
│   └── TreeSet         - Sorted
└── Queue (FIFO)
    ├── PriorityQueue   - Priority-based
    ├── ArrayDeque      - Double-ended queue
    └── LinkedList      - Also implements Queue

Map (separate hierarchy)
├── HashMap           - Fast, unordered, one null key
├── LinkedHashMap     - Insertion order
├── TreeMap           - Sorted by keys
├── Hashtable (legacy)- Synchronized, no null
└── ConcurrentHashMap - Thread-safe
```

### String Methods Quick Reference

```
Manipulation:  concat(), substring(), replace(), trim(), strip()
Case:          toUpperCase(), toLowerCase()
Search:        indexOf(), lastIndexOf(), contains()
Comparison:    equals(), equalsIgnoreCase(), compareTo()
Validation:    isEmpty(), isBlank(), startsWith(), endsWith()
Conversion:    valueOf(), toString(), toCharArray(), getBytes()
Splitting:     split(), join()
```

### Stream Operations

```
Intermediate (lazy, returns stream):
filter(), map(), flatMap(), distinct(), sorted(), limit(), skip(), peek()

Terminal (eager, triggers execution):
forEach(), collect(), reduce(), count(), anyMatch(), allMatch(), noneMatch(),
findFirst(), findAny(), min(), max(), toArray()
```

### Functional Interfaces

```
Interface          | Method          | Purpose
-------------------|-----------------|---------------------------
Predicate<T>       | test(T)         | boolean condition
Function<T,R>      | apply(T)        | T → R transformation
Consumer<T>        | accept(T)       | void operation
Supplier<T>        | get()           | () → T generation
UnaryOperator<T>   | apply(T)        | T → T operation
BinaryOperator<T>  | apply(T,T)      | (T,T) → T operation
```

### Thread States

```
NEW → RUNNABLE → RUNNING → TERMINATED
              ↓          ↑
              BLOCKED ────┘
              WAITING ────┘
              TIMED_WAITING ┘
```

### Exception Hierarchy (Key Classes)

```
Throwable
├── Error (unchecked)
│   ├── OutOfMemoryError
│   └── StackOverflowError
└── Exception
    ├── RuntimeException (unchecked)
    │   ├── NullPointerException
    │   ├── ArrayIndexOutOfBoundsException
    │   ├── IllegalArgumentException
    │   └── ArithmeticException
    └── Checked Exceptions
        ├── IOException
        ├── SQLException
        └── ClassNotFoundException
```

### Memory Areas

```
Stack:  Local variables, method calls (per thread)
Heap:   Objects, instance variables (shared)
Method: Class metadata, static variables (shared)
```

### GC Types

```
Young Generation GC (Minor GC):
- Frequent, fast
- Eden → Survivor spaces

Old Generation GC (Major/Full GC):
- Infrequent, slow
- Affects entire heap
```

### Common Patterns

```
Find second highest number:
numbers.stream()
       .distinct()
       .sorted(Comparator.reverseOrder())
       .skip(1)
       .findFirst();

Count occurrences:
Map<String, Long> frequency = list.stream()
    .collect(Collectors.groupingBy(
        Function.identity(),
        Collectors.counting()
    ));

Remove duplicates:
List<Integer> unique = list.stream()
                          .distinct()
                          .collect(Collectors.toList());

Reverse a string:
String reversed = new StringBuilder(str).reverse().toString();

Check palindrome:
boolean isPalindrome = str.equals(
    new StringBuilder(str).reverse().toString()
);
```

### Access Modifiers Matrix

```
Modifier    | Class | Package | Subclass | World
------------|-------|---------|----------|-------
public      | ✓     | ✓       | ✓        | ✓
protected   | ✓     | ✓       | ✓        | ✗
default     | ✓     | ✓       | ✗        | ✗
private     | ✓     | ✗       | ✗        | ✗
```

### Operator Precedence (High to Low)

```
1. Postfix:         expr++, expr--
2. Unary:           ++expr, --expr, +, -, !, ~
3. Multiplicative:  *, /, %
4. Additive:        +, -
5. Shift:           <<, >>, >>>
6. Relational:      <, >, <=, >=, instanceof
7. Equality:        ==, !=
8. Bitwise AND:     &
9. Bitwise XOR:     ^
10. Bitwise OR:     |
11. Logical AND:    &&
12. Logical OR:     ||
13. Ternary:        ? :
14. Assignment:     =, +=, -=, *=, /=, etc.
```

---

## Tips for Interview Success

### Before the Interview:

1. **Review Core Concepts**: OOP, collections, multithreading
2. **Practice Coding**: Write code by hand, no IDE
3. **Understand Why**: Don't just memorize, understand the reasoning
4. **Know Your Resume**: Be ready to discuss projects in detail
5. **Study Company Stack**: Research technologies they use
6. **Prepare Questions**: Ask about team, projects, tech stack

### During the Interview:

1. **Clarify Requirements**: Ask questions before coding
2. **Think Out Loud**: Explain your thought process
3. **Start Simple**: Write basic solution first, then optimize
4. **Test Your Code**: Walk through with examples
5. **Handle Edge Cases**: Consider null, empty, negative values
6. **Discuss Trade-offs**: Time vs space complexity
7. **Be Honest**: Say "I don't know" if you don't, then reason through it
8. **Write Clean Code**: Proper naming, formatting, comments

### Common Coding Questions:

```java
// 1. Reverse a string
public String reverse(String str) {
    return new StringBuilder(str).reverse().toString();
}

// 2. Check palindrome
public boolean isPalindrome(String str) {
    String cleaned = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
    return cleaned.equals(new StringBuilder(cleaned).reverse().toString());
}

// 3. Find duplicates
public Set<Integer> findDuplicates(int[] arr) {
    Set<Integer> seen = new HashSet<>();
    Set<Integer> duplicates = new HashSet<>();
    for (int num : arr) {
        if (!seen.add(num)) {
            duplicates.add(num);
        }
    }
    return duplicates;
}

// 4. Two sum problem
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    return new int[] {};
}

// 5. Fibonacci sequence
public int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// With memoization
public int fibonacciMemo(int n, Map<Integer, Integer> memo) {
    if (n <= 1) return n;
    if (memo.containsKey(n)) return memo.get(n);
    int result = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    memo.put(n, result);
    return result;
}

// 6. Factorial
public int factorial(int n) {
    return (n == 0) ? 1 : n * factorial(n - 1);
}

// Iterative version
public int factorialIterative(int n) {
    int result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 7. Prime number check
public boolean isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// 8. Count words in string
public Map<String, Long> countWords(String text) {
    return Arrays.stream(text.split("\\s+"))
                .collect(Collectors.groupingBy(
                    Function.identity(),
                    Collectors.counting()
                ));
}

// 9. Remove duplicates from array
public int[] removeDuplicates(int[] arr) {
    return Arrays.stream(arr).distinct().toArray();
}

// 10. Find max in array
public int findMax(int[] arr) {
    return Arrays.stream(arr).max().orElse(Integer.MIN_VALUE);
}

// 11. Merge two sorted arrays
public int[] mergeSortedArrays(int[] arr1, int[] arr2) {
    int[] result = new int[arr1.length + arr2.length];
    int i = 0, j = 0, k = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result[k++] = arr1[i++];
        } else {
            result[k++] = arr2[j++];
        }
    }

    while (i < arr1.length) result[k++] = arr1[i++];
    while (j < arr2.length) result[k++] = arr2[j++];

    return result;
}

// 12. Singleton pattern
public class Singleton {
    private static volatile Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

### Common Topics to Prepare:

**Core Java:**

- OOP concepts (inheritance, polymorphism, abstraction, encapsulation)
- Collections framework (List, Set, Map implementations)
- Exception handling
- String manipulation
- Multithreading basics

**Advanced Java:**

- Concurrency utilities (ExecutorService, locks, atomic classes)
- Java 8+ features (lambdas, streams, Optional)
- JVM internals (memory management, garbage collection)
- Design patterns
- Generics and reflection

**Practical Coding:**

- Array/string manipulation
- Data structure problems
- Algorithm basics (sorting, searching)
- Common patterns (two pointers, sliding window)

### Red Flags to Avoid:

```
❌ Not knowing the difference between == and equals()
❌ Confusing overloading with overriding
❌ Not understanding collections performance
❌ Forgetting to close resources
❌ Not handling exceptions properly
❌ Using raw types (pre-generics style)
❌ Not knowing when to use which collection
❌ Ignoring thread safety in multithreaded code
❌ Using String instead of StringBuilder in loops
❌ Not understanding immutability
❌ Confusing static and instance members
❌ Not knowing basic time/space complexity
```

### Interview Question Patterns:

**Pattern 1: Comparison Questions**

- "What is the difference between X and Y?"
- Always mention: when to use each, trade-offs, examples

**Pattern 2: Code Output Questions**

- Trace through the code mentally
- Watch for: initialization order, static blocks, exception handling

**Pattern 3: Find the Bug**

- Look for: null checks, thread safety, resource leaks, logic errors

**Pattern 4: Design Questions**

- Clarify requirements first
- Discuss trade-offs
- Start with simple design, then enhance

**Pattern 5: Optimization**

- Identify bottlenecks
- Suggest improvements
- Discuss complexity

### Sample Interview Q&A Flow:

**Q: "Explain HashMap internals"**

```
Good Answer Structure:
1. High-level: Hash table with buckets
2. Details: Array of nodes, hash function, collision handling
3. Example: Put/get operations with hash calculation
4. Advanced: Load factor, resizing, tree conversion
5. Complexity: O(1) average, O(n) worst case
```

**Q: "Reverse a linked list"**

```
Good Approach:
1. Clarify: Singly or doubly linked? In-place or new list?
2. Examples: Draw with 1, 2, 3 elements
3. Algorithm: Iterative vs recursive
4. Code: Write clean, working code
5. Test: Walk through with example
6. Complexity: Time O(n), Space O(1)
```

### Time Complexity Reference:

```
Operation              | ArrayList | LinkedList | HashSet | TreeSet
-----------------------|-----------|------------|---------|----------
add()                  | O(1)*     | O(1)       | O(1)    | O(log n)
remove()               | O(n)      | O(1)**     | O(1)    | O(log n)
get(index)             | O(1)      | O(n)       | N/A     | N/A
contains()             | O(n)      | O(n)       | O(1)    | O(log n)
size()                 | O(1)      | O(1)       | O(1)    | O(1)

* Amortized O(1), O(n) when resizing
** O(1) if position known, O(n) to find position
```

### Common Mistakes to Avoid:

```java
// 1. Modifying collection while iterating
for (String item : list) {
    list.remove(item);  // ConcurrentModificationException
}
// Fix: Use iterator.remove()

// 2. Comparing objects with ==
String s1 = new String("test");
String s2 = new String("test");
if (s1 == s2) { }  // Wrong - compares references
if (s1.equals(s2)) { }  // Correct - compares content

// 3. Not overriding equals() and hashCode() together
// If you override equals(), you MUST override hashCode()

// 4. Using == with Integer
Integer a = 128;
Integer b = 128;
if (a == b) { }  // false (not cached)
// Fix: Use equals()

// 5. Swallowing exceptions
try {
    // code
} catch (Exception e) { }  // Bad - silent failure
// Fix: At least log the exception

// 6. Not closing resources
FileInputStream fis = new FileInputStream("file.txt");
// Forgot to close - resource leak
// Fix: Use try-with-resources

// 7. Using raw types
List list = new ArrayList();  // Raw type, not type-safe
// Fix: List<String> list = new ArrayList<>();

// 8. Calling run() instead of start()
Thread t = new Thread(() -> System.out.println("Hello"));
t.run();  // Wrong - runs in current thread
t.start();  // Correct - starts new thread
```

### Final Checklist:

```
✓ Understand OOP principles deeply
✓ Master collections framework
✓ Know exception handling best practices
✓ Understand multithreading basics
✓ Familiar with Java 8+ features
✓ Practice common coding problems
✓ Review design patterns
✓ Understand JVM basics
✓ Know when to use which data structure
✓ Practice explaining concepts clearly
✓ Review recent projects
✓ Prepare questions for interviewer
```

---

**Good luck with your Java interviews! 🚀**
