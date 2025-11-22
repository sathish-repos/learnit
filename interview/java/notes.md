# Java Interview Notes

## Table of Contents

### [1. Java Basics](#1-java-basics)
   - [History and Features of Java](#history-and-features-of-java)
     - [History](#history)
     - [Key Features](#key-features)
   - [JDK, JRE, JVM – Differences](#jdk-jre-jvm--differences)
     - [JVM (Java Virtual Machine)](#jvm-java-virtual-machine)
     - [JRE (Java Runtime Environment)](#jre-java-runtime-environment)
     - [JDK (Java Development Kit)](#jdk-java-development-kit)
     - [Relationship](#relationship)
   - [Java Program Structure](#java-program-structure)
     - [Basic Structure](#basic-structure)
     - [Key Points](#key-points)
   - [Data Types and Variables](#data-types-and-variables)
     - [Primitive Data Types](#primitive-data-types)
     - [Reference Data Types](#reference-data-types)
     - [Variable Types](#variable-types)
     - [Variable Naming Rules](#variable-naming-rules)
   - [Operators and Expressions](#operators-and-expressions)
     - [Arithmetic Operators](#1-arithmetic-operators)
     - [Unary Operators](#2-unary-operators)
     - [Relational Operators](#3-relational-operators)
     - [Logical Operators](#4-logical-operators)
     - [Bitwise Operators](#5-bitwise-operators)
     - [Assignment Operators](#6-assignment-operators)
     - [Ternary Operator](#7-ternary-operator)
     - [instanceof Operator](#8-instanceof-operator)
     - [Operator Precedence](#operator-precedence-highest-to-lowest)
   - [Type Casting](#type-casting)
     - [Implicit Casting (Widening/Automatic)](#1-implicit-casting-wideningautomatic)
     - [Explicit Casting (Narrowing/Manual)](#2-explicit-casting-narrowingmanual)
     - [Type Promotion in Expressions](#3-type-promotion-in-expressions)
     - [String Conversions](#4-string-conversions)
   - [Input and Output](#input-and-output)
     - [Output Methods](#1-output-methods)
     - [Scanner Class (Input)](#2-scanner-class-input)
     - [BufferedReader Class](#3-bufferedreader-class)
     - [Scanner vs BufferedReader](#scanner-vs-bufferedreader)
     - [Console Class](#4-console-class)
  - [Comments and Naming Conventions](#comments-and-naming-conventions)
    - [Comments](#comments)
    - [Naming Conventions](#naming-conventions)
    - [Best Practices](#best-practices)
  - [Packages and Imports](#packages-and-imports)
    - [Packages](#packages)
    - [Imports](#imports)
    - [Fully Qualified Name](#fully-qualified-name)
    - [Package Access Levels](#package-access-levels)
    - [Common Built-in Packages](#common-built-in-packages)
    - [Best Practices](#best-practices-1)
   - [Summary](#summary)

### [2. Control Statements](#2-control-statements)
  - [Decision Making](#decision-making)
    - [if Statement](#1-if-statement)
    - [if-else Statement](#2-if-else-statement)
    - [if-else-if Ladder](#3-if-else-if-ladder)
    - [Nested if Statement](#4-nested-if-statement)
    - [switch Statement](#5-switch-statement)
    - [if-else vs switch](#if-else-vs-switch)
  - [Loops](#loops)
    - [for Loop](#1-for-loop)
    - [while Loop](#2-while-loop)
    - [do-while Loop](#3-do-while-loop)
    - [Loop Comparison](#loop-comparison)
  - [Enhanced for Loop (for-each)](#enhanced-for-loop-for-each)
    - [Arrays](#arrays)
    - [Collections](#collections)
    - [2D Arrays](#2d-arrays)
    - [Limitations of Enhanced for Loop](#limitations-of-enhanced-for-loop)
    - [Traditional vs Enhanced for Loop](#traditional-vs-enhanced-for-loop)
  - [Jump Statements](#jump-statements)
    - [break Statement](#1-break-statement)
      - [break in Loops](#break-in-loops)
      - [break in Nested Loops](#break-in-nested-loops)
      - [Labeled break](#labeled-break)
      - [break in switch](#break-in-switch)
    - [continue Statement](#2-continue-statement)
      - [continue in while Loop](#continue-in-while-loop)
      - [continue in Nested Loops](#continue-in-nested-loops)
      - [Labeled continue](#labeled-continue)
    - [return Statement](#3-return-statement)
      - [return in void Method](#return-in-void-method)
      - [return with Value](#return-with-value)
      - [return in Loops](#return-in-loops)
      - [return vs break vs continue](#return-vs-break-vs-continue)
  - [Practical Examples](#practical-examples)
  - [Summary](#summary-1)

### [3. Object-Oriented Programming (OOP)](#3-object-oriented-programming-oop)
   - [Four Pillars of OOP](#four-pillars-of-oop)
   - [Class and Object](#class-and-object)
     - [Class](#class)
     - [Object](#object)
     - [Ways to Initialize Objects](#ways-to-initialize-objects)
     - [Anonymous Objects](#anonymous-objects)
   - [Constructors and this Keyword](#constructors-and-this-keyword)
     - [Constructors](#constructors)
     - [Types of Constructors](#types-of-constructors)
     - [Constructor Overloading](#constructor-overloading)
     - [Copy Constructor](#copy-constructor)
     - [this Keyword](#this-keyword)
       - [Uses of this Keyword](#uses-of-this-keyword)
   - [Access Modifiers](#access-modifiers)
     - [Types of Access Modifiers](#types-of-access-modifiers)
       - [1. public](#1-public)
       - [2. private](#2-private)
       - [3. protected](#3-protected)
       - [4. default (Package-Private)](#4-default-package-private)
     - [Access Modifiers for Classes](#access-modifiers-for-classes)
     - [Best Practices](#best-practices-2)
   - [Static Keyword](#static-keyword)
     - [Static Variables (Class Variables)](#1-static-variables-class-variables)
     - [Static Methods](#2-static-methods)
     - [Static Block](#3-static-block)
     - [Static Nested Class](#4-static-nested-class)
     - [Static vs Instance](#static-vs-instance)
     - [Common Static Examples](#common-static-examples)
   - [final Keyword](#final-keyword)
     - [final Variables (Constants)](#1-final-variables-constants)
     - [final Methods](#2-final-methods)
     - [final Classes](#3-final-classes)
     - [final with References](#final-with-references)
     - [final, finally, finalize](#final-finally-finalize)
   - [Inheritance and super Keyword](#inheritance-and-super-keyword)
     - [Inheritance](#inheritance)
     - [Types of Inheritance](#types-of-inheritance)
     - [Inheritance Example](#inheritance-example)
     - [super Keyword](#super-keyword)
     - [Constructor Chaining in Inheritance](#constructor-chaining-in-inheritance)
     - [Method Overriding in Inheritance](#method-overriding-in-inheritance)
     - [this vs super](#this-vs-super)
   - [Polymorphism](#polymorphism)
     - [Compile-time Polymorphism (Method Overloading)](#1-compile-time-polymorphism-method-overloading)
     - [Runtime Polymorphism (Method Overriding)](#2-runtime-polymorphism-method-overriding)
     - [Covariant Return Type](#covariant-return-type)
   - [Method Overloading vs Method Overriding](#method-overloading-vs-method-overriding)
   - [Encapsulation](#encapsulation)
     - [Implementation](#implementation)
     - [Example](#example)
     - [Read-Only Class](#read-only-class)
     - [Write-Only Class](#write-only-class)
     - [Benefits of Encapsulation](#benefits-of-encapsulation)
   - [Abstraction](#abstraction)
     - [Abstract Class](#1-abstract-class)
     - [Interface](#2-interface)
     - [Java 8+ Interface Features](#java-8-interface-features)
     - [Java 9+ Interface Features](#java-9-interface-features)
     - [Abstract Class vs Interface](#abstract-class-vs-interface)
     - [When to Use What?](#when-to-use-what-1)
   - [Packages and Encapsulation Principles](#packages-and-encapsulation-principles)
     - [Packages for Encapsulation](#packages-for-encapsulation)
     - [Encapsulation with Packages](#encapsulation-with-packages)
     - [Access Control in Packages](#access-control-in-packages)
     - [Encapsulation Best Practices](#encapsulation-best-practices)
       - [1. Information Hiding](#1-information-hiding)
       - [2. Validation in Setters](#2-validation-in-setters)
       - [3. Immutable Classes](#3-immutable-classes)
       - [4. Package Organization](#4-package-organization)
     - [Encapsulation Principles](#encapsulation-principles)
   - [Summary](#summary-2)

### [4. String Handling](#4-string-handling)
   - [String, StringBuilder, StringBuffer](#string-stringbuilder-stringbuffer)
     - [String](#string)
     - [String Pool (String Constant Pool)](#string-pool-string-constant-pool)
     - [StringBuilder](#stringbuilder)
     - [StringBuffer](#stringbuffer)
     - [String vs StringBuilder vs StringBuffer](#string-vs-stringbuilder-vs-stringbuffer)
     - [When to Use What?](#when-to-use-what)
     - [Performance Comparison](#performance-comparison)
   - [String Methods](#string-methods)
     - [1. Length and Character Access](#1-length-and-character-access)
     - [2. Comparison Methods](#2-comparison-methods)
     - [3. Search Methods](#3-search-methods)
     - [4. Extraction Methods](#4-extraction-methods)
     - [5. Modification Methods](#5-modification-methods)
     - [6. Case Conversion Methods](#6-case-conversion-methods)
     - [7. Trimming Methods](#7-trimming-methods)
     - [8. Checking Methods](#8-checking-methods)
     - [9. Formatting Methods](#9-formatting-methods)
     - [10. Conversion Methods](#10-conversion-methods)
     - [11. Other Useful Methods](#11-other-useful-methods)
     - [String Method Chaining](#string-method-chaining)
   - [String Immutability](#string-immutability)
     - [What is Immutability?](#what-is-immutability)
   - [String Comparison](#string-comparison)
   - [Regular Expressions (Pattern, Matcher)](#regular-expressions-pattern-matcher)
     - [Pattern Class](#pattern-class)
     - [Matcher Class](#matcher-class)
     - [Basic Regex Syntax](#basic-regex-syntax)
   - [Summary](#summary-3)

### [5. Arrays and Collections](#5-arrays-and-collections)
   - [🧩 Arrays](#-arrays)
   - [🧺 Collections Framework](#-collections-framework)
   - [List Interface](#list-interface)
     - [ArrayList](#arraylist)
     - [LinkedList](#linkedlist)
     - [Vector](#vector)
     - [Stack](#stack)
     - [ArrayList vs LinkedList](#arraylist-vs-linkedlist)
   - [Set Interface](#set-interface)
     - [HashSet](#hashset)
     - [LinkedHashSet](#linkedhashset)
     - [TreeSet](#treeset)
   - [Map Interface](#map-interface)
     - [HashMap](#hashmap)
     - [LinkedHashMap](#linkedhashmap)
     - [TreeMap](#treemap)
     - [Hashtable](#hashtable)
   - [Queue Interface](#queue-interface)
     - [PriorityQueue](#priorityqueue)
     - [ArrayDeque](#arraydeque)
   - [Iterator, ListIterator, Enumeration](#iterator-listiterator-enumeration)
   - [Comparable vs Comparator](#comparable-vs-comparator)
   - [Stream API and Lambda Expressions (Java 8)](#stream-api-and-lambda-expressions-java-8)
   - [Summary](#summary-4)

### [6. Exception Handling](#6-exception-handling)
   - [Exception Hierarchy](#exception-hierarchy)
     - [Key Classes](#key-classes)
   - [Types of Exceptions](#types-of-exceptions)
     - [1. Checked Exceptions](#1-checked-exceptions)
     - [2. Unchecked Exceptions (Runtime Exceptions)](#2-unchecked-exceptions-runtime-exceptions)
     - [3. Errors](#3-errors)
     - [Checked vs Unchecked Exceptions](#checked-vs-unchecked-exceptions)
   - [Try-Catch-Finally](#try-catch-finally)
     - [try-catch Block](#try-catch-block)
     - [finally Block](#finally-block)
     - [Exception Information Methods](#exception-information-methods)
   - [throw Keyword](#throw-keyword)
   - [throws Keyword](#throws-keyword)
     - [throws vs throw](#throws-vs-throw)
   - [Custom Exceptions](#custom-exceptions)
   - [try-with-resources](#try-with-resources)
   - [Exception Handling Best Practices](#exception-handling-best-practices)
   - [Common Exception Scenarios](#common-exception-scenarios)
   - [Summary](#summary-5)

### [7. Multithreading and Concurrency](#7-multithreading-and-concurrency)
   - [What is a Thread?](#what-is-a-thread)
   - [Thread Lifecycle](#thread-lifecycle)
     - [Thread States](#thread-states)
     - [States Explained](#states-explained)
     - [State Transitions](#state-transitions)
     - [Thread State Methods](#thread-state-methods)
   - [Thread Creation](#thread-creation)
     - [Thread Class vs Runnable Interface](#thread-class-vs-runnable-interface)
     - [Important Thread Methods](#important-thread-methods)
     - [Thread Priority](#thread-priority)
     - [Daemon Threads](#daemon-threads)
   - [Synchronization](#synchronization)
     - [Problems Without Synchronization](#problems-without-synchronization)
   - [Inter-thread Communication](#inter-thread-communication)
     - [wait(), notify(), notifyAll()](#wait-notify-notifyall)
   - [Thread Pool and Executor Framework](#thread-pool-and-executor-framework)
     - [Why Thread Pools?](#why-thread-pools)
     - [ExecutorService](#executorservice)
   - [Callable and Future](#callable-and-future)
   - [volatile and Atomic Variables](#volatile-and-atomic-variables)
   - [Concurrent Collections](#concurrent-collections)
   - [Best Practices](#best-practices-3)
   - [Summary](#summary-6)

### [8. Java I/O (Input/Output)](#8-java-io-inputoutput)
   - [I/O Stream Hierarchy](#io-stream-hierarchy)
   - [File Handling](#file-handling)
   - [Byte Streams vs Character Streams](#byte-streams-vs-character-streams)
   - [Buffered Streams](#buffered-streams)
   - [Serialization and Deserialization](#serialization-and-deserialization)
     - [Performance Comparison](#performance-comparison-1)
   - [NIO (New I/O)](#nio-new-io)
   - [Best Practices](#best-practices-4)
   - [Summary](#summary-7)

### [9. Java Database Connectivity (JDBC)](#9-java-database-connectivity-jdbc)
   - [What is JDBC?](#what-is-jdbc)
   - [JDBC Architecture](#jdbc-architecture)
   - [Types of JDBC Drivers](#types-of-jdbc-drivers)
   - [Connecting to Databases](#connecting-to-databases)
   - [DriverManager](#drivermanager)
   - [Connection](#connection)
   - [Statement](#statement)
   - [PreparedStatement](#preparedstatement)
   - [ResultSet](#resultset)
   - [Transaction Management](#transaction-management)
   - [Batch Processing](#batch-processing)
   - [DatabaseMetaData](#databasemetadata)
   - [Connection Pooling](#connection-pooling)
   - [Best Practices](#best-practices-5)
   - [Complete CRUD Example](#complete-crud-example)
   - [Summary](#summary-8)

### [10. Java 8+ Features](#10-java-8-features)
   - [Major Java 8+ Features](#major-java-8-features)
   - [Lambda Expressions](#lambda-expressions)
     - [Syntax](#syntax)
     - [Basic Examples](#basic-examples)
   - [Functional Interfaces](#functional-interfaces)
   - [Stream API](#stream-api)
   - [Method References](#method-references)
     - [Types of Method References](#types-of-method-references)
   - [Optional Class](#optional-class)
     - [Practical Examples](#practical-examples-1)
   - [Default and Static Methods in Interfaces](#default-and-static-methods-in-interfaces)
   - [Date & Time API](#date--time-api)
     - [LocalDate](#localdate)
     - [LocalTime](#localtime)
     - [LocalDateTime](#localdatetime)
     - [ZonedDateTime](#zoneddatetime)
     - [Period and Duration](#period-and-duration)
     - [DateTimeFormatter](#datetimeformatter)
   - [Summary](#summary-9)

### [11. Java Networking (Basics)](#11-java-networking-basics)
   - [11.1 InetAddress](#111-inetaddress)
     - [Basic Usage](#basic-usage)
   - [11.2 Socket Programming (TCP)](#112-socket-programming-tcp)
     - [TCP Server](#tcp-server)
     - [TCP Client](#tcp-client)
   - [11.3 Socket Programming (UDP)](#113-socket-programming-udp)
     - [UDP Server](#udp-server)
     - [UDP Client](#udp-client)
     - [TCP vs UDP](#tcp-vs-udp)
   - [11.4 URL and HttpURLConnection](#114-url-and-httpurlconnection)
     - [URL Class](#url-class)
     - [HttpURLConnection - GET Request](#httpurlconnection---get-request)
     - [HttpURLConnection - POST Request](#httpurlconnection---post-request)
   - [11.5 Java HTTP Client (Java 11+)](#115-java-http-client-java-11)
     - [GET Request](#get-request)
     - [POST Request](#post-request)
     - [Async Request](#async-request)
     - [HttpClient Builder Options](#httpclient-builder-options)
     - [Comparison](#comparison)
   - [11.6 Summary](#116-summary)
     - [InetAddress](#inetaddress)
     - [Socket Programming](#socket-programming)
     - [URL & HttpURLConnection](#url--httpurlconnection)
     - [Java HTTP Client (Java 11+)](#java-http-client-java-11-1)
     - [Key Classes](#key-classes)

### [12. Java Memory and Performance (Basics)](#12-java-memory-and-performance-basics)
   - [12.1 JVM Architecture](#121-jvm-architecture)
     - [1. Class Loader Subsystem](#1-class-loader-subsystem)
     - [2. Runtime Data Areas](#2-runtime-data-areas)
     - [Memory Allocation Example](#memory-allocation-example)
     - [Stack vs Heap](#stack-vs-heap)
   - [12.2 Garbage Collection](#122-garbage-collection)
     - [How GC Works](#how-gc-works)
     - [GC Roots](#gc-roots)
     - [Heap Generations](#heap-generations)
     - [Making Object Eligible for GC](#making-object-eligible-for-gc)
     - [finalize() Method](#finalize-method)
     - [GC Types](#gc-types)
     - [GC Monitoring](#gc-monitoring)
   - [12.3 Memory Leaks](#123-memory-leaks)
     - [Common Causes](#common-causes)
     - [Detecting Memory Leaks](#detecting-memory-leaks)
   - [12.4 Profiling and Optimization](#124-profiling-and-optimization)
     - [Basic JVM Options](#basic-jvm-options)
     - [Common Performance Tips](#common-performance-tips)
     - [Performance Monitoring Tools](#performance-monitoring-tools)
     - [Quick Performance Checklist](#quick-performance-checklist)
   - [12.5 Summary](#125-summary)
     - [JVM Architecture](#jvm-architecture)
     - [Garbage Collection](#garbage-collection)
     - [Memory Leaks](#memory-leaks)
     - [Optimization](#optimization)
     - [Tools](#tools)

### [13. Java Security (Basics)](#13-java-security-basics)
   - [13.1 Encryption and Decryption](#131-encryption-and-decryption)
     - [Symmetric Encryption (AES)](#symmetric-encryption-aes)
     - [Asymmetric Encryption (RSA)](#asymmetric-encryption-rsa)
     - [Symmetric vs Asymmetric](#symmetric-vs-asymmetric)
   - [13.2 Hashing](#132-hashing)
     - [MessageDigest (SHA-256)](#messagedigest-sha-256)
     - [Hashing with Salt](#hashing-with-salt)
     - [Hash Algorithms](#hash-algorithms)
   - [13.3 SecureRandom](#133-securerandom)
     - [Basic Usage](#basic-usage-1)
     - [Generate Random Token](#generate-random-token)
     - [Random Password Generator](#random-password-generator)
     - [SecureRandom vs Random](#securerandom-vs-random)
   - [13.4 Digital Signatures](#134-digital-signatures)
     - [Creating and Verifying Signature](#creating-and-verifying-signature)
     - [Digital Signature with DSA](#digital-signature-with-dsa)
     - [How Digital Signatures Work](#how-digital-signatures-work)
     - [Signature Algorithms](#signature-algorithms)
   - [13.5 Password Security Best Practices](#135-password-security-best-practices)
     - [Storing Passwords Securely](#storing-passwords-securely)
   - [13.6 Security Best Practices](#136-security-best-practices)
     - [1. Never Store Passwords in Plain Text](#1-never-store-passwords-in-plain-text)
     - [2. Use Strong Algorithms](#2-use-strong-algorithms)
     - [3. Use SecureRandom for Security](#3-use-securerandom-for-security)
     - [4. Use Salt for Password Hashing](#4-use-salt-for-password-hashing)
     - [5. Use HTTPS for Transmission](#5-use-https-for-transmission)
     - [6. Validate Input](#6-validate-input)
     - [7. Use Proper Key Management](#7-use-proper-key-management)
     - [8. Clear Sensitive Data](#8-clear-sensitive-data)
   - [13.7 Summary](#137-summary)
     - [Encryption](#encryption)
     - [Hashing](#hashing)
     - [SecureRandom](#securerandom)
     - [Digital Signatures](#digital-signatures)
     - [Best Practices](#best-practices)

### [14. Advanced Topics](#14-advanced-topics)
   - [14.1 Reflection API](#141-reflection-api)
     - [Basic Reflection](#basic-reflection)
     - [Accessing Fields](#accessing-fields)
     - [Invoking Methods](#invoking-methods)
     - [Creating Objects](#creating-objects)
     - [Practical Use Cases](#practical-use-cases)
   - [14.2 Annotations](#142-annotations)
     - [Built-in Annotations](#built-in-annotations)
     - [Custom Annotations](#custom-annotations)
     - [Annotation Elements](#annotation-elements)
     - [Meta-Annotations](#meta-annotations)
   - [14.3 Generics](#143-generics)
     - [Generic Class](#generic-class)
     - [Generic Method](#generic-method)
     - [Bounded Type Parameters](#bounded-type-parameters)
     - [Wildcards](#wildcards)
     - [Generic Interface](#generic-interface)
     - [Type Erasure](#type-erasure)
   - [14.4 Inner and Anonymous Classes](#144-inner-and-anonymous-classes)
     - [Member Inner Class](#member-inner-class)
     - [Static Nested Class](#static-nested-class)
     - [Local Inner Class](#local-inner-class)
     - [Anonymous Class](#anonymous-class)
     - [Comparison](#comparison-1)
   - [14.5 Enum Types](#145-enum-types)
     - [Basic Enum](#basic-enum)
     - [Enum with Fields and Methods](#enum-with-fields-and-methods)
     - [Enum with Abstract Method](#enum-with-abstract-method)
     - [EnumSet and EnumMap](#enumset-and-enummap)
   - [14.6 Records (Java 14+)](#146-records-java-14)
     - [Basic Record](#basic-record)
     - [Record with Methods](#record-with-methods)
     - [Record with Interfaces](#record-with-interfaces)
     - [Record Benefits](#record-benefits)
   - [14.7 Modules (Java 9+)](#147-modules-java-9)
     - [Module Structure](#module-structure)
     - [Basic Module](#basic-module)
     - [Module Directives](#module-directives)
     - [Module Types](#module-types)
   - [14.8 Summary](#148-summary)

### [15. Frameworks (Basics for Real Projects)](#15-frameworks-basics-for-real-projects)
   - [15.1 🧩 Spring Framework](#151-🧩-spring-framework)
     - [Spring Core (IoC and Dependency Injection)](#spring-core-ioc-and-dependency-injection)
     - [Spring Boot Basics](#spring-boot-basics)
     - [REST API Development](#rest-api-development)
     - [Spring Data JPA](#spring-data-jpa)
     - [Spring Security and JWT](#spring-security-and-jwt)
     - [Spring MVC](#spring-mvc)
     - [Logging (SLF4J and Logback)](#logging-slf4j-and-logback)
   - [15.2 💾 Hibernate (ORM Basics)](#152-💾-hibernate-orm-basics)
     - [Entity Mappings](#entity-mappings)
     - [HQL (Hibernate Query Language)](#hql-hibernate-query-language)
     - [Criteria API](#criteria-api)
     - [Caching](#caching)
   - [15.3 Summary](#153-summary)
     - [Spring Framework](#spring-framework)
     - [Hibernate ORM](#hibernate-orm)
     - [Key Concepts](#key-concepts)

### [16. Testing & Build Tools (Basics)](#16-testing--build-tools-basics)
   - [JUnit](#junit)
   - [Mockito](#mockito)
   - [Maven](#maven)
   - [Gradle](#gradle)
   - [Logging Frameworks](#logging-frameworks)
   - [Code Coverage (JaCoCo)](#code-coverage-jacoco)
   - [Testing Best Practices](#testing-best-practices)
   - [Complete Test Example](#complete-test-example)
   - [Summary](#summary-15)

### [17. Interview / DSA Integration](#17-interview--dsa-integration)
   - [Java-based Data Structures Implementation](#java-based-data-structures-implementation)
   - [Collections Internal Working](#collections-internal-working)
   - [Algorithm Questions Using Java](#algorithm-questions-using-java)
   - [Common Interview Patterns (Design Patterns)](#common-interview-patterns-design-patterns)
   - [Interview Tips](#interview-tips)
   - [Summary](#summary-16)

---

# 1. Java Basics

## History and Features of Java

### History
- **Created by**: James Gosling at Sun Microsystems (now owned by Oracle)
- **Released**: 1995
- **Original name**: Oak (later renamed to Java)
- **Purpose**: Initially designed for interactive television but was too advanced for the digital cable industry at that time
- **Philosophy**: "Write Once, Run Anywhere" (WORA)

### Key Features
1. **Simple**: Easy to learn, removed complex features like pointers, operator overloading
2. **Object-Oriented**: Everything is an object (except primitives)
3. **Platform Independent**: Bytecode can run on any platform with JVM
4. **Secure**: No explicit pointers, programs run inside sandbox
5. **Robust**: Strong memory management, exception handling, garbage collection
6. **Architecture Neutral**: Compiler generates bytecode, not native code
7. **Portable**: Platform-independent bytecode
8. **Multi-threaded**: Built-in support for concurrent programming
9. **Interpreted**: Bytecode is interpreted by JVM
10. **High Performance**: Just-In-Time (JIT) compilation
11. **Distributed**: Supports networking (RMI, EJB)
12. **Dynamic**: Supports dynamic loading of classes

---

## JDK, JRE, JVM – Differences

### JVM (Java Virtual Machine)
- **What**: Runtime environment that executes Java bytecode
- **Purpose**: Provides platform independence
- **Components**:
  - Class Loader
  - Memory Area (Heap, Stack, Method Area, etc.)
  - Execution Engine (Interpreter, JIT Compiler)
  - Garbage Collector
- **Note**: JVM is platform-dependent (different for Windows, Linux, Mac)

### JRE (Java Runtime Environment)
- **What**: Package that includes JVM + libraries + other files
- **Purpose**: Provides runtime environment to execute Java applications
- **Components**:
  - JVM
  - Core Java libraries (rt.jar)
  - Supporting files
- **Use**: Only for running Java applications (not development)

### JDK (Java Development Kit)
- **What**: Complete development toolkit
- **Purpose**: For developing and running Java applications
- **Components**:
  - JRE (which includes JVM)
  - Development tools (javac, java, javadoc, jar, etc.)
  - Debuggers and profilers
- **Use**: For Java development

### Relationship
```
JDK = JRE + Development Tools
JRE = JVM + Libraries
```

---

## Java Program Structure

### Basic Structure
```java
package com.example;          // Package declaration (optional)

import java.util.*;           // Import statements (optional)

public class HelloWorld {     // Class declaration
    
    // Instance variables
    private int count;
    
    // Constructor
    public HelloWorld() {
        count = 0;
    }
    
    // Main method (entry point)
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
    
    // Other methods
    public void display() {
        System.out.println("Count: " + count);
    }
}
```

### Key Points
- **Package declaration**: Must be first statement (if present)
- **Import statements**: Come after package, before class
- **Class declaration**: Public class name must match filename
- **Main method**: Entry point, must be `public static void main(String[] args)`
- **Case sensitive**: Java is case-sensitive

---

## Data Types and Variables

### Primitive Data Types

#### 1. Integer Types
```java
byte b = 127;          // 8-bit, range: -128 to 127
short s = 32000;       // 16-bit, range: -32,768 to 32,767
int i = 100000;        // 32-bit, range: -2^31 to 2^31-1
long l = 100000L;      // 64-bit, range: -2^63 to 2^63-1
```

#### 2. Floating-Point Types
```java
float f = 3.14f;       // 32-bit, single precision
double d = 3.14159;    // 64-bit, double precision (default)
```

#### 3. Character Type
```java
char c = 'A';          // 16-bit Unicode character
```

#### 4. Boolean Type
```java
boolean flag = true;   // true or false
```

### Reference Data Types
- **Classes**: `String`, custom classes
- **Interfaces**: `List`, `Map`, etc.
- **Arrays**: `int[]`, `String[]`, etc.

### Variable Types

#### 1. Local Variables
```java
public void method() {
    int x = 10;  // Local variable - declared inside method
}
```

#### 2. Instance Variables
```java
public class MyClass {
    int x = 10;  // Instance variable - belongs to object
}
```

#### 3. Static Variables (Class Variables)
```java
public class MyClass {
    static int x = 10;  // Static variable - belongs to class
}
```

### Variable Naming Rules
- Must start with letter, `$`, or `_`
- Cannot use reserved keywords
- Case-sensitive
- Use camelCase convention

---

## Operators and Expressions

### 1. Arithmetic Operators
```java
int a = 10, b = 3;
int sum = a + b;       // Addition: 13
int diff = a - b;      // Subtraction: 7
int prod = a * b;      // Multiplication: 30
int quot = a / b;      // Division: 3
int rem = a % b;       // Modulus: 1
```

### 2. Unary Operators
```java
int x = 10;
int y = +x;            // Unary plus: 10
int z = -x;            // Unary minus: -10
int a = ++x;           // Pre-increment: x=11, a=11
int b = x++;           // Post-increment: b=11, x=12
int c = --x;           // Pre-decrement: x=11, c=11
int d = x--;           // Post-decrement: d=11, x=10
```

### 3. Relational Operators
```java
int a = 10, b = 20;
boolean r1 = a == b;   // Equal to: false
boolean r2 = a != b;   // Not equal: true
boolean r3 = a > b;    // Greater than: false
boolean r4 = a < b;    // Less than: true
boolean r5 = a >= b;   // Greater than or equal: false
boolean r6 = a <= b;   // Less than or equal: true
```

### 4. Logical Operators
```java
boolean a = true, b = false;
boolean r1 = a && b;   // Logical AND: false
boolean r2 = a || b;   // Logical OR: true
boolean r3 = !a;       // Logical NOT: false
```

### 5. Bitwise Operators
```java
int a = 5;  // 0101
int b = 3;  // 0011
int r1 = a & b;        // Bitwise AND: 1 (0001)
int r2 = a | b;        // Bitwise OR: 7 (0111)
int r3 = a ^ b;        // Bitwise XOR: 6 (0110)
int r4 = ~a;           // Bitwise Complement
int r5 = a << 2;       // Left shift: 20
int r6 = a >> 2;       // Right shift: 1
```

### 6. Assignment Operators
```java
int x = 10;
x += 5;  // x = x + 5
x -= 5;  // x = x - 5
x *= 5;  // x = x * 5
x /= 5;  // x = x / 5
x %= 5;  // x = x % 5
```

### 7. Ternary Operator
```java
int a = 10, b = 20;
int max = (a > b) ? a : b;  // max = 20
```

### 8. instanceof Operator
```java
String str = "Hello";
boolean result = str instanceof String;  // true
```

### Operator Precedence (Highest to Lowest)
1. Postfix: `expr++`, `expr--`
2. Unary: `++expr`, `--expr`, `+`, `-`, `!`, `~`
3. Multiplicative: `*`, `/`, `%`
4. Additive: `+`, `-`
5. Shift: `<<`, `>>`, `>>>`
6. Relational: `<`, `>`, `<=`, `>=`, `instanceof`
7. Equality: `==`, `!=`
8. Bitwise AND: `&`
9. Bitwise XOR: `^`
10. Bitwise OR: `|`
11. Logical AND: `&&`
12. Logical OR: `||`
13. Ternary: `? :`
14. Assignment: `=`, `+=`, `-=`, etc.

---

## Type Casting

### 1. Implicit Casting (Widening/Automatic)
- Smaller type to larger type
- No data loss
- Automatic conversion

```java
byte b = 10;
short s = b;        // byte to short
int i = s;          // short to int
long l = i;         // int to long
float f = l;        // long to float
double d = f;       // float to double

// Hierarchy: byte -> short -> int -> long -> float -> double
//                      char -> int
```

### 2. Explicit Casting (Narrowing/Manual)
- Larger type to smaller type
- Possible data loss
- Manual conversion required

```java
double d = 100.04;
long l = (long) d;      // l = 100
int i = (int) l;        // i = 100
short s = (short) i;    // s = 100
byte b = (byte) s;      // b = 100

// Potential data loss
int x = 130;
byte y = (byte) x;      // y = -126 (overflow)
```

### 3. Type Promotion in Expressions
```java
byte a = 40;
byte b = 50;
int result = a * b;     // Result is promoted to int

byte x = 10;
byte y = 20;
// byte z = x + y;      // Error: incompatible types
byte z = (byte)(x + y); // OK with explicit cast
```

### 4. String Conversions
```java
// Primitive to String
int num = 100;
String str1 = String.valueOf(num);
String str2 = Integer.toString(num);
String str3 = "" + num;

// String to Primitive
String str = "100";
int i = Integer.parseInt(str);
double d = Double.parseDouble(str);
boolean b = Boolean.parseBoolean("true");
```

---

## Input and Output

### 1. Output Methods

#### System.out.print()
```java
System.out.print("Hello ");
System.out.print("World");  // Output: Hello World
```

#### System.out.println()
```java
System.out.println("Hello");
System.out.println("World");
// Output:
// Hello
// World
```

#### System.out.printf() (Formatted Output)
```java
String name = "John";
int age = 25;
double salary = 50000.50;

System.out.printf("Name: %s, Age: %d, Salary: %.2f\n", name, age, salary);
// Output: Name: John, Age: 25, Salary: 50000.50
```

### 2. Scanner Class (Input)
```java
import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Reading different types
        System.out.print("Enter name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter age: ");
        int age = scanner.nextInt();
        
        System.out.print("Enter salary: ");
        double salary = scanner.nextDouble();
        
        System.out.print("Enter character: ");
        char ch = scanner.next().charAt(0);
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: " + salary);
        System.out.println("Character: " + ch);
        
        scanner.close();
    }
}
```

#### Scanner Methods
- `next()`: Reads a word (until space)
- `nextLine()`: Reads entire line
- `nextInt()`: Reads an integer
- `nextDouble()`: Reads a double
- `nextFloat()`: Reads a float
- `nextBoolean()`: Reads a boolean
- `nextByte()`, `nextShort()`, `nextLong()`: Other numeric types

#### Common Pitfall
```java
Scanner sc = new Scanner(System.in);
int num = sc.nextInt();
sc.nextLine();  // Consume newline left by nextInt()
String str = sc.nextLine();
```

### 3. BufferedReader Class
```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class BufferedReaderExample {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        
        System.out.print("Enter name: ");
        String name = reader.readLine();
        
        System.out.print("Enter age: ");
        int age = Integer.parseInt(reader.readLine());
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        
        reader.close();
    }
}
```

### Scanner vs BufferedReader

| Feature | Scanner | BufferedReader |
|---------|---------|----------------|
| Speed | Slower | Faster |
| Buffer Size | 1KB | 8KB |
| Type Methods | Has methods for all types | Only readLine() (returns String) |
| Exception | No throws needed | Throws IOException |
| Parsing | Automatic | Manual (parseInt, parseDouble) |
| Use Case | Simple programs | Large input, performance critical |

### 4. Console Class
```java
import java.io.Console;

public class ConsoleExample {
    public static void main(String[] args) {
        Console console = System.console();
        if (console != null) {
            String username = console.readLine("Enter username: ");
            char[] password = console.readPassword("Enter password: ");
            
            System.out.println("Username: " + username);
            // Don't print password in real applications
        }
    }
}
```

---

## Comments and Naming Conventions

### Comments

#### 1. Single-Line Comments
```java
// This is a single-line comment
int x = 10;  // This is an inline comment
```

#### 2. Multi-Line Comments
```java
/*
 * This is a multi-line comment
 * It can span multiple lines
 */
int y = 20;
```

#### 3. Documentation Comments (Javadoc)
```java
/**
 * This class demonstrates Java documentation comments.
 * 
 * @author John Doe
 * @version 1.0
 * @since 2024
 */
public class MyClass {
    
    /**
     * This method calculates the sum of two numbers.
     * 
     * @param a the first number
     * @param b the second number
     * @return the sum of a and b
     */
    public int add(int a, int b) {
        return a + b;
    }
}
```

### Naming Conventions

#### 1. Classes and Interfaces
- **Convention**: PascalCase (UpperCamelCase)
- **Examples**: `MyClass`, `StudentRecord`, `ArrayList`

```java
public class EmployeeDetails { }
public interface Serializable { }
```

#### 2. Methods and Variables
- **Convention**: camelCase (lowerCamelCase)
- **Examples**: `calculateSalary`, `firstName`, `totalAmount`

```java
public void calculateTotal() { }
int studentAge = 20;
String userName = "John";
```

#### 3. Constants
- **Convention**: UPPER_SNAKE_CASE
- **Examples**: `MAX_SIZE`, `DEFAULT_VALUE`, `PI`

```java
public static final int MAX_SIZE = 100;
public static final double PI = 3.14159;
private static final String DEFAULT_NAME = "Unknown";
```

#### 4. Packages
- **Convention**: lowercase, separated by dots
- **Examples**: `com.company.project`, `java.util`

```java
package com.example.myproject;
package org.apache.commons;
```

#### 5. Generic Type Parameters
- **Convention**: Single uppercase letter
- **Examples**: `T` (Type), `E` (Element), `K` (Key), `V` (Value)

```java
public class Box<T> { }
public interface List<E> { }
public class HashMap<K, V> { }
```

### Best Practices

1. **Class Names**: Should be nouns (e.g., `Customer`, `Account`)
2. **Interface Names**: Can be nouns or adjectives (e.g., `Runnable`, `Serializable`)
3. **Method Names**: Should be verbs (e.g., `run()`, `calculate()`, `getName()`)
4. **Boolean Variables**: Should sound like questions (e.g., `isValid`, `hasChildren`, `canExecute`)
5. **Meaningful Names**: Use descriptive names instead of abbreviations
6. **Avoid Single Letters**: Except for loop counters (`i`, `j`, `k`) and generics

```java
// Good examples
boolean isActive = true;
boolean hasPermission = false;
int studentCount = 30;
String firstName = "John";

// Poor examples
boolean b = true;
int x = 30;
String s = "John";
```

---

## Packages and Imports

### Packages

#### What are Packages?
- **Definition**: A namespace that organizes classes and interfaces
- **Purpose**: 
  - Prevent naming conflicts
  - Control access
  - Make searching/locating classes easier
  - Group related classes

#### Types of Packages

##### 1. Built-in Packages (Java API)
```java
java.lang     // Fundamental classes (String, Math, System)
java.util     // Utilities (Collections, Date, Scanner)
java.io       // Input/Output
java.net      // Networking
java.sql      // Database
```

##### 2. User-defined Packages
```java
package com.company.project;

public class MyClass {
    // class content
}
```

#### Creating a Package
```java
// File: com/company/project/MyClass.java
package com.company.project;

public class MyClass {
    public void display() {
        System.out.println("Hello from package!");
    }
}
```

#### Compiling with Package
```bash
javac -d . MyClass.java
# -d . means create directory structure in current directory
```

#### Running with Package
```bash
java com.company.project.MyClass
```

### Imports

#### 1. Importing a Specific Class
```java
import java.util.Scanner;
import java.util.ArrayList;

public class MyClass {
    Scanner sc = new Scanner(System.in);
    ArrayList<String> list = new ArrayList<>();
}
```

#### 2. Importing All Classes from a Package
```java
import java.util.*;

public class MyClass {
    Scanner sc = new Scanner(System.in);
    ArrayList<String> list = new ArrayList<>();
    HashMap<String, Integer> map = new HashMap<>();
}
```

#### 3. Static Import
```java
import static java.lang.Math.*;
import static java.lang.System.out;

public class MyClass {
    public static void main(String[] args) {
        out.println(sqrt(16));  // No need for Math.sqrt() or System.out
        out.println(PI);        // No need for Math.PI
    }
}
```

#### 4. Importing from User-defined Package
```java
import com.company.project.MyClass;
import com.company.project.*;
```

### Fully Qualified Name
```java
// Without import
public class Test {
    public static void main(String[] args) {
        java.util.Scanner sc = new java.util.Scanner(System.in);
        java.util.ArrayList<String> list = new java.util.ArrayList<>();
    }
}
```

### Package Access Levels

| Modifier | Class | Package | Subclass | World |
|----------|-------|---------|----------|-------|
| public | Yes | Yes | Yes | Yes |
| protected | Yes | Yes | Yes | No |
| default (no modifier) | Yes | Yes | No | No |
| private | Yes | No | No | No |

### Common Built-in Packages

#### java.lang (Automatically Imported)
```java
String str = "Hello";      // java.lang.String
int x = Math.max(10, 20);  // java.lang.Math
System.out.println();      // java.lang.System
```

#### java.util
```java
import java.util.*;

Scanner sc = new Scanner(System.in);
ArrayList<Integer> list = new ArrayList<>();
HashMap<String, Integer> map = new HashMap<>();
Date date = new Date();
```

#### java.io
```java
import java.io.*;

BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
FileReader fr = new FileReader("file.txt");
PrintWriter pw = new PrintWriter("output.txt");
```

### Best Practices

1. **Organize by Domain**: Use reverse domain naming (e.g., `com.company.project`)
2. **Use Specific Imports**: Prefer specific imports over wildcard when possible
3. **One Public Class per File**: File name should match public class name
4. **Package Names**: All lowercase, no underscores
5. **Logical Grouping**: Group related classes in same package

```java
// Good package structure
com.company.ecommerce.model
com.company.ecommerce.service
com.company.ecommerce.controller
com.company.ecommerce.util
```

---

## Summary

Java is a powerful, platform-independent, object-oriented programming language with the following key concepts:

- **JVM, JRE, JDK** form the foundation of Java's architecture
- **Data types** include primitives (byte, short, int, long, float, double, char, boolean) and reference types
- **Operators** provide various ways to manipulate data (arithmetic, logical, relational, etc.)
- **Type casting** allows conversion between types (implicit and explicit)
- **Input/Output** can be handled using Scanner, BufferedReader, or Console classes
- **Comments** help document code (single-line, multi-line, Javadoc)
- **Naming conventions** ensure code readability and consistency
- **Packages** organize classes and prevent naming conflicts
- **Imports** allow using classes from other packages

These fundamentals form the building blocks for more advanced Java programming concepts.

---

# 2. Control Statements

Control statements are used to control the flow of execution in a program. They allow you to make decisions, repeat actions, and jump to different parts of code.

## Decision Making

Decision-making statements evaluate conditions and execute code blocks based on whether the condition is true or false.

### 1. if Statement

Executes a block of code only if the specified condition is true.

**Syntax:**
```java
if (condition) {
    // code to execute if condition is true
}
```

**Example:**
```java
int age = 18;

if (age >= 18) {
    System.out.println("You are eligible to vote");
}
```

### 2. if-else Statement

Executes one block if condition is true, another block if false.

**Syntax:**
```java
if (condition) {
    // code if condition is true
} else {
    // code if condition is false
}
```

**Example:**
```java
int number = 15;

if (number % 2 == 0) {
    System.out.println(number + " is even");
} else {
    System.out.println(number + " is odd");
}
```

### 3. if-else-if Ladder

Tests multiple conditions in sequence.

**Syntax:**
```java
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else if (condition3) {
    // code if condition3 is true
} else {
    // code if all conditions are false
}
```

**Example:**
```java
int marks = 85;

if (marks >= 90) {
    System.out.println("Grade: A+");
} else if (marks >= 80) {
    System.out.println("Grade: A");
} else if (marks >= 70) {
    System.out.println("Grade: B");
} else if (marks >= 60) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}
```

### 4. Nested if Statement

An if statement inside another if statement.

**Syntax:**
```java
if (condition1) {
    if (condition2) {
        // code if both conditions are true
    }
}
```

**Example:**
```java
int age = 25;
boolean hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        System.out.println("You can drive");
    } else {
        System.out.println("You need a license");
    }
} else {
    System.out.println("You are too young to drive");
}
```

**Complex Nested Example:**
```java
int num = 0;

if (num > 0) {
    System.out.println("Positive number");
} else {
    if (num < 0) {
        System.out.println("Negative number");
    } else {
        System.out.println("Zero");
    }
}
```

### 5. switch Statement

Selects one of many code blocks to execute based on the value of an expression.

**Syntax:**
```java
switch (expression) {
    case value1:
        // code for value1
        break;
    case value2:
        // code for value2
        break;
    case value3:
        // code for value3
        break;
    default:
        // code if no case matches
}
```

**Example:**
```java
int day = 3;
String dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

System.out.println("Day: " + dayName);
```

**Switch with char:**
```java
char grade = 'B';

switch (grade) {
    case 'A':
        System.out.println("Excellent!");
        break;
    case 'B':
        System.out.println("Good!");
        break;
    case 'C':
        System.out.println("Average");
        break;
    case 'D':
        System.out.println("Below Average");
        break;
    case 'F':
        System.out.println("Failed");
        break;
    default:
        System.out.println("Invalid grade");
}
```

**Switch with String (Java 7+):**
```java
String month = "January";

switch (month) {
    case "January":
    case "February":
    case "December":
        System.out.println("Winter");
        break;
    case "March":
    case "April":
    case "May":
        System.out.println("Spring");
        break;
    case "June":
    case "July":
    case "August":
        System.out.println("Summer");
        break;
    case "September":
    case "October":
    case "November":
        System.out.println("Fall");
        break;
    default:
        System.out.println("Invalid month");
}
```

**Fall-through Behavior:**
```java
int num = 2;

switch (num) {
    case 1:
        System.out.println("One");
        // No break - falls through
    case 2:
        System.out.println("Two");
        // No break - falls through
    case 3:
        System.out.println("Three");
        break;
    default:
        System.out.println("Other");
}
// Output: Two
//         Three
```

**Switch Expression (Java 14+):**
```java
int day = 3;
String dayType = switch (day) {
    case 1, 2, 3, 4, 5 -> "Weekday";
    case 6, 7 -> "Weekend";
    default -> "Invalid";
};
System.out.println(dayType);
```

### if-else vs switch

| Feature | if-else | switch |
|---------|---------|--------|
| Conditions | Can test any boolean expression | Only equality checks |
| Data Types | Any boolean condition | int, byte, short, char, String, enum |
| Range Testing | Yes (e.g., x > 10 && x < 20) | No |
| Readability | Better for few conditions | Better for many specific values |
| Performance | Slower for many conditions | Faster for many cases |
| Default | else block | default case |

---

## Loops

Loops are used to execute a block of code repeatedly until a specified condition is met.

### 1. for Loop

Used when the number of iterations is known beforehand.

**Syntax:**
```java
for (initialization; condition; update) {
    // code to execute
}
```

**Flow:**
1. Initialization (executed once)
2. Condition check
3. If true: execute body, then update
4. Repeat from step 2
5. If false: exit loop

**Example:**
```java
// Print numbers 1 to 5
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

**Multiple Variables:**
```java
for (int i = 0, j = 10; i < j; i++, j--) {
    System.out.println("i = " + i + ", j = " + j);
}
```

**Infinite Loop:**
```java
for (;;) {
    System.out.println("Infinite loop");
    // Need break to exit
}
```

**Nested for Loop:**
```java
// Print multiplication table
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
        System.out.print((i * j) + "\t");
    }
    System.out.println();
}
```

**Pattern Printing:**
```java
// Print pyramid
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
// Output:
// * 
// * * 
// * * * 
// * * * * 
// * * * * *
```

### 2. while Loop

Used when the number of iterations is not known, and the loop should continue as long as a condition is true.

**Syntax:**
```java
while (condition) {
    // code to execute
}
```

**Flow:**
1. Check condition
2. If true: execute body
3. Repeat from step 1
4. If false: exit loop

**Example:**
```java
int count = 1;

while (count <= 5) {
    System.out.println("Count: " + count);
    count++;
}
```

**Reading Input:**
```java
Scanner sc = new Scanner(System.in);
int sum = 0;
int num;

System.out.println("Enter numbers (0 to stop):");
num = sc.nextInt();

while (num != 0) {
    sum += num;
    num = sc.nextInt();
}

System.out.println("Sum: " + sum);
```

**Infinite Loop:**
```java
while (true) {
    System.out.println("Infinite loop");
    // Need break to exit
}
```

### 3. do-while Loop

Similar to while loop, but executes the body at least once before checking the condition.

**Syntax:**
```java
do {
    // code to execute
} while (condition);
```

**Flow:**
1. Execute body
2. Check condition
3. If true: repeat from step 1
4. If false: exit loop

**Example:**
```java
int count = 1;

do {
    System.out.println("Count: " + count);
    count++;
} while (count <= 5);
```

**Menu-Driven Program:**
```java
Scanner sc = new Scanner(System.in);
int choice;

do {
    System.out.println("\n--- Menu ---");
    System.out.println("1. Add");
    System.out.println("2. Subtract");
    System.out.println("3. Multiply");
    System.out.println("4. Divide");
    System.out.println("5. Exit");
    System.out.print("Enter choice: ");
    choice = sc.nextInt();
    
    switch (choice) {
        case 1:
            System.out.println("Addition selected");
            break;
        case 2:
            System.out.println("Subtraction selected");
            break;
        case 3:
            System.out.println("Multiplication selected");
            break;
        case 4:
            System.out.println("Division selected");
            break;
        case 5:
            System.out.println("Exiting...");
            break;
        default:
            System.out.println("Invalid choice");
    }
} while (choice != 5);
```

**Key Difference: while vs do-while**
```java
// while loop - may not execute at all
int x = 10;
while (x < 5) {
    System.out.println("This won't print");
}

// do-while loop - executes at least once
int y = 10;
do {
    System.out.println("This will print once");
} while (y < 5);
```

### Loop Comparison

| Loop Type | When to Use | Entry Check | Minimum Executions |
|-----------|-------------|-------------|-------------------|
| for | Known iterations | Entry-controlled | 0 |
| while | Unknown iterations, may not execute | Entry-controlled | 0 |
| do-while | Unknown iterations, must execute once | Exit-controlled | 1 |

---

## Enhanced for Loop (for-each)

Simplified loop for iterating through arrays and collections.

**Syntax:**
```java
for (dataType variable : array/collection) {
    // code to execute
}
```

### Arrays

**Example:**
```java
int[] numbers = {10, 20, 30, 40, 50};

for (int num : numbers) {
    System.out.println(num);
}
```

**String Array:**
```java
String[] names = {"Alice", "Bob", "Charlie"};

for (String name : names) {
    System.out.println("Hello, " + name);
}
```

### Collections

**ArrayList:**
```java
import java.util.ArrayList;

ArrayList<String> list = new ArrayList<>();
list.add("Java");
list.add("Python");
list.add("C++");

for (String language : list) {
    System.out.println(language);
}
```

### 2D Arrays

**Example:**
```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

for (int[] row : matrix) {
    for (int element : row) {
        System.out.print(element + " ");
    }
    System.out.println();
}
```

### Limitations of Enhanced for Loop

1. **Cannot modify array elements:**
```java
int[] arr = {1, 2, 3, 4, 5};

// This won't modify the original array
for (int num : arr) {
    num = num * 2;  // Only modifies local variable
}
```

2. **No access to index:**
```java
// Can't do this with enhanced for loop
for (int i = 0; i < arr.length; i++) {
    System.out.println("Index " + i + ": " + arr[i]);
}
```

3. **Cannot iterate backwards:**
```java
// Need regular for loop
for (int i = arr.length - 1; i >= 0; i--) {
    System.out.println(arr[i]);
}
```

4. **Cannot iterate multiple arrays simultaneously:**
```java
int[] arr1 = {1, 2, 3};
int[] arr2 = {4, 5, 6};

// Need regular for loop
for (int i = 0; i < arr1.length; i++) {
    System.out.println(arr1[i] + " + " + arr2[i]);
}
```

### Traditional vs Enhanced for Loop

| Feature | Traditional for | Enhanced for |
|---------|----------------|--------------|
| Index Access | Yes | No |
| Modify Elements | Yes | No (for primitives) |
| Backward Iteration | Yes | No |
| Readability | Less | More |
| Use Case | Complex iteration | Simple traversal |

---

## Jump Statements

Jump statements are used to transfer control to another part of the program.

### 1. break Statement

Terminates the loop or switch statement and transfers control to the statement immediately following the loop/switch.

#### break in Loops

**Example:**
```java
// Exit loop when condition is met
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;  // Exit loop when i is 5
    }
    System.out.println(i);
}
// Output: 1 2 3 4
```

**Finding First Match:**
```java
int[] numbers = {10, 20, 30, 40, 50};
int target = 30;
boolean found = false;

for (int num : numbers) {
    if (num == target) {
        found = true;
        break;  // Stop searching once found
    }
}

if (found) {
    System.out.println("Found " + target);
}
```

#### break in Nested Loops

**Example:**
```java
// break only exits the innermost loop
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) {
            break;  // Only breaks inner loop
        }
        System.out.println("i = " + i + ", j = " + j);
    }
}
// Output:
// i = 1, j = 1
// i = 2, j = 1
// i = 3, j = 1
```

#### Labeled break

Used to break out of outer loops.

**Syntax:**
```java
labelName:
for (...) {
    for (...) {
        break labelName;  // Breaks outer loop
    }
}
```

**Example:**
```java
outer:
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            break outer;  // Breaks outer loop
        }
        System.out.println("i = " + i + ", j = " + j);
    }
}
// Output:
// i = 1, j = 1
// i = 1, j = 2
// i = 1, j = 3
// i = 2, j = 1
```

#### break in switch

```java
int day = 3;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;  // Prevents fall-through
    default:
        System.out.println("Other day");
}
```

### 2. continue Statement

Skips the current iteration and continues with the next iteration of the loop.

**Example:**
```java
// Skip even numbers
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;  // Skip even numbers
    }
    System.out.println(i);
}
// Output: 1 3 5 7 9
```

**Skip Specific Values:**
```java
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;  // Skip 5
    }
    System.out.println(i);
}
// Output: 1 2 3 4 6 7 8 9 10
```

#### continue in while Loop

**Example:**
```java
int count = 0;

while (count < 10) {
    count++;
    if (count % 2 == 0) {
        continue;  // Skip even numbers
    }
    System.out.println(count);
}
// Output: 1 3 5 7 9
```

#### continue in Nested Loops

**Example:**
```java
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) {
            continue;  // Skip when j is 2
        }
        System.out.println("i = " + i + ", j = " + j);
    }
}
// Output:
// i = 1, j = 1
// i = 1, j = 3
// i = 2, j = 1
// i = 2, j = 3
// i = 3, j = 1
// i = 3, j = 3
```

#### Labeled continue

**Example:**
```java
outer:
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) {
            continue outer;  // Continue outer loop
        }
        System.out.println("i = " + i + ", j = " + j);
    }
}
// Output:
// i = 1, j = 1
// i = 2, j = 1
// i = 3, j = 1
```

### 3. return Statement

Exits from the current method and optionally returns a value.

#### return in void Method

**Example:**
```java
public static void printPositive(int num) {
    if (num <= 0) {
        System.out.println("Not a positive number");
        return;  // Exit method
    }
    System.out.println("Positive number: " + num);
}
```

#### return with Value

**Example:**
```java
public static int add(int a, int b) {
    return a + b;  // Return result
}

public static int max(int a, int b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Simplified
public static int max2(int a, int b) {
    return (a > b) ? a : b;
}
```

#### return in Loops

**Example:**
```java
public static boolean contains(int[] arr, int target) {
    for (int num : arr) {
        if (num == target) {
            return true;  // Exit method immediately
        }
    }
    return false;  // Not found
}
```

**Multiple return Statements:**
```java
public static String getGrade(int marks) {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    return "F";
}
```

#### return vs break vs continue

| Statement | Scope | Effect |
|-----------|-------|--------|
| break | Loop/Switch | Exits loop/switch |
| continue | Loop only | Skips current iteration |
| return | Method | Exits entire method |

### Practical Examples

#### Example 1: Prime Number Check
```java
public static boolean isPrime(int num) {
    if (num <= 1) {
        return false;
    }
    
    for (int i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;  // Not prime
        }
    }
    
    return true;  // Prime
}
```

#### Example 2: Sum of Odd Numbers
```java
public static int sumOddNumbers(int n) {
    int sum = 0;
    
    for (int i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            continue;  // Skip even numbers
        }
        sum += i;
    }
    
    return sum;
}
```

#### Example 3: Matrix Search
```java
public static boolean searchMatrix(int[][] matrix, int target) {
    for (int[] row : matrix) {
        for (int element : row) {
            if (element == target) {
                return true;  // Found
            }
        }
    }
    return false;  // Not found
}
```

#### Example 4: Input Validation
```java
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    while (true) {
        System.out.print("Enter a positive number (0 to exit): ");
        int num = sc.nextInt();
        
        if (num == 0) {
            break;  // Exit loop
        }
        
        if (num < 0) {
            System.out.println("Please enter a positive number!");
            continue;  // Skip to next iteration
        }
        
        System.out.println("You entered: " + num);
    }
    
    System.out.println("Program ended");
}
```

---

## Summary

Control statements are essential for controlling program flow:

### Decision Making
- **if**: Single condition
- **if-else**: Two alternatives
- **if-else-if**: Multiple conditions
- **nested if**: Conditions within conditions
- **switch**: Multiple specific values

### Loops
- **for**: Known iterations, entry-controlled
- **while**: Unknown iterations, entry-controlled
- **do-while**: Unknown iterations, exit-controlled (executes at least once)
- **Enhanced for**: Simple traversal of arrays/collections

### Jump Statements
- **break**: Exit loop or switch
- **continue**: Skip current iteration
- **return**: Exit method with/without value

### Best Practices
1. Use **for** when iterations are known
2. Use **while** when iterations depend on a condition
3. Use **do-while** when code must execute at least once
4. Use **enhanced for** for simple array/collection traversal
5. Use **switch** for multiple specific value checks
6. Use **break** to exit loops early when condition is met
7. Use **continue** to skip iterations
8. Avoid excessive nesting (max 3 levels)
9. Use labeled break/continue sparingly
10. Ensure loops have termination conditions (avoid infinite loops)

These control structures enable you to write complex logic and handle various program flows effectively.

---

# 3. Object-Oriented Programming (OOP)

Object-Oriented Programming is a programming paradigm based on the concept of "objects" that contain data (fields/attributes) and code (methods). Java is a fully object-oriented language (except for primitive types).

## Four Pillars of OOP
1. **Encapsulation** - Bundling data and methods together, hiding internal details
2. **Inheritance** - Creating new classes from existing classes
3. **Polymorphism** - Same interface, different implementations
4. **Abstraction** - Hiding implementation details, showing only functionality

---

## Class and Object

### Class

A class is a blueprint or template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of that type will have.

**Syntax:**
```java
class ClassName {
    // Fields (attributes/variables)
    dataType fieldName;
    
    // Methods (behaviors/functions)
    returnType methodName(parameters) {
        // method body
    }
}
```

**Example:**
```java
class Student {
    // Fields/Attributes
    String name;
    int rollNumber;
    int age;
    
    // Method
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Age: " + age);
    }
}
```

### Object

An object is an instance of a class. It represents a real-world entity with state and behavior.

**Creating Objects:**
```java
// Syntax: ClassName objectName = new ClassName();
Student student1 = new Student();
```

**Complete Example:**
```java
class Student {
    String name;
    int rollNumber;
    int age;
    
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Age: " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating objects
        Student student1 = new Student();
        Student student2 = new Student();
        
        // Setting values
        student1.name = "Alice";
        student1.rollNumber = 101;
        student1.age = 20;
        
        student2.name = "Bob";
        student2.rollNumber = 102;
        student2.age = 21;
        
        // Calling methods
        student1.display();
        System.out.println();
        student2.display();
    }
}
```

### Ways to Initialize Objects

#### 1. By Reference Variable
```java
Student s = new Student();
s.name = "Alice";
s.rollNumber = 101;
```

#### 2. By Method
```java
class Student {
    String name;
    int rollNumber;
    
    void setData(String n, int r) {
        name = n;
        rollNumber = r;
    }
}

Student s = new Student();
s.setData("Alice", 101);
```

#### 3. By Constructor
```java
class Student {
    String name;
    int rollNumber;
    
    Student(String n, int r) {
        name = n;
        rollNumber = r;
    }
}

Student s = new Student("Alice", 101);
```

### Anonymous Objects

Objects without reference, used for one-time operations.

```java
// Normal object
Student s = new Student();
s.display();

// Anonymous object
new Student().display();  // Object is created and used immediately
```

---

## Constructors and this Keyword

### Constructors

A constructor is a special method that is called when an object is instantiated. It initializes the object.

**Characteristics:**
- Same name as class
- No return type (not even void)
- Called automatically when object is created
- Cannot be abstract, static, or final

### Types of Constructors

#### 1. Default Constructor

Provided by Java if no constructor is defined. Initializes fields with default values.

```java
class Student {
    String name;
    int age;
}

// Java automatically provides:
// Student() { }

Student s = new Student();  // Default constructor called
```

#### 2. No-Argument Constructor

Explicitly defined constructor with no parameters.

```java
class Student {
    String name;
    int age;
    
    // No-argument constructor
    Student() {
        name = "Unknown";
        age = 0;
        System.out.println("Constructor called");
    }
}

Student s = new Student();  // Output: Constructor called
```

#### 3. Parameterized Constructor

Constructor that accepts parameters to initialize object with specific values.

```java
class Student {
    String name;
    int age;
    
    // Parameterized constructor
    Student(String n, int a) {
        name = n;
        age = a;
    }
    
    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

Student s1 = new Student("Alice", 20);
Student s2 = new Student("Bob", 21);
s1.display();  // Output: Name: Alice, Age: 20
s2.display();  // Output: Name: Bob, Age: 21
```

### Constructor Overloading

Multiple constructors with different parameter lists.

```java
class Student {
    String name;
    int age;
    String course;
    
    // Constructor 1: No parameters
    Student() {
        name = "Unknown";
        age = 0;
        course = "None";
    }
    
    // Constructor 2: Two parameters
    Student(String n, int a) {
        name = n;
        age = a;
        course = "None";
    }
    
    // Constructor 3: Three parameters
    Student(String n, int a, String c) {
        name = n;
        age = a;
        course = c;
    }
    
    void display() {
        System.out.println("Name: " + name + ", Age: " + age + ", Course: " + course);
    }
}

Student s1 = new Student();
Student s2 = new Student("Alice", 20);
Student s3 = new Student("Bob", 21, "Computer Science");
```

### Copy Constructor

Constructor that creates an object using another object of the same class.

```java
class Student {
    String name;
    int age;
    
    // Parameterized constructor
    Student(String n, int a) {
        name = n;
        age = a;
    }
    
    // Copy constructor
    Student(Student s) {
        name = s.name;
        age = s.age;
    }
    
    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

Student s1 = new Student("Alice", 20);
Student s2 = new Student(s1);  // Copy of s1
s2.display();  // Output: Name: Alice, Age: 20
```

### this Keyword

`this` is a reference variable that refers to the current object.

#### Uses of this Keyword

#### 1. Refer to Current Class Instance Variables

```java
class Student {
    String name;
    int age;
    
    Student(String name, int age) {
        this.name = name;  // this.name refers to instance variable
        this.age = age;    // name and age are parameters
    }
}
```

#### 2. Invoke Current Class Method

```java
class Student {
    void display() {
        System.out.println("Display method");
    }
    
    void show() {
        this.display();  // Calling display() using this
        // Can also be called without this
        display();
    }
}
```

#### 3. Invoke Current Class Constructor (Constructor Chaining)

```java
class Student {
    String name;
    int age;
    String course;
    
    Student() {
        this("Unknown", 0, "None");  // Calls 3-parameter constructor
    }
    
    Student(String name, int age) {
        this(name, age, "None");  // Calls 3-parameter constructor
    }
    
    Student(String name, int age, String course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
}
```

**Note:** `this()` must be the first statement in constructor.

#### 4. Pass as Argument in Method Call

```java
class Student {
    void display(Student s) {
        System.out.println("Student object received");
    }
    
    void show() {
        display(this);  // Passing current object
    }
}
```

#### 5. Return Current Class Instance

```java
class Student {
    String name;
    
    Student setName(String name) {
        this.name = name;
        return this;  // Returning current object
    }
    
    void display() {
        System.out.println("Name: " + name);
    }
}

// Method chaining
Student s = new Student();
s.setName("Alice").display();  // Output: Name: Alice
```

---

## Access Modifiers

Access modifiers control the visibility and accessibility of classes, methods, and variables.

### Types of Access Modifiers

| Modifier | Class | Package | Subclass | World |
|----------|-------|---------|----------|-------|
| **public** | Yes | Yes | Yes | Yes |
| **protected** | Yes | Yes | Yes | No |
| **default** (no modifier) | Yes | Yes | No | No |
| **private** | Yes | No | No | No |

### 1. public

Accessible from anywhere.

```java
public class Student {
    public String name;
    
    public void display() {
        System.out.println("Name: " + name);
    }
}

// Can be accessed from any class
Student s = new Student();
s.name = "Alice";
s.display();
```

### 2. private

Accessible only within the same class.

```java
class Student {
    private String name;
    private int age;
    
    // Public methods to access private fields
    public void setName(String name) {
        this.name = name;
    }
    
    public String getName() {
        return name;
    }
    
    private void secretMethod() {
        System.out.println("This is private");
    }
}

Student s = new Student();
s.setName("Alice");  // OK
// s.name = "Alice";  // Error: name has private access
// s.secretMethod();  // Error: secretMethod has private access
```

### 3. protected

Accessible within the same package and subclasses (even if in different packages).

```java
// File: Student.java
package com.example;

public class Student {
    protected String name;
    
    protected void display() {
        System.out.println("Name: " + name);
    }
}

// File: GraduateStudent.java
package com.example.other;

import com.example.Student;

public class GraduateStudent extends Student {
    void show() {
        name = "Alice";  // OK: inherited protected member
        display();       // OK: inherited protected method
    }
}
```

### 4. default (Package-Private)

Accessible only within the same package. No keyword is used.

```java
// File: Student.java (in package com.example)
package com.example;

class Student {  // Default access
    String name;  // Default access
    
    void display() {  // Default access
        System.out.println("Name: " + name);
    }
}

// File: Test.java (in package com.example)
package com.example;

class Test {
    void method() {
        Student s = new Student();  // OK: same package
        s.name = "Alice";           // OK: same package
    }
}

// File: Other.java (in different package)
package com.other;

class Other {
    void method() {
        // Student s = new Student();  // Error: different package
    }
}
```

### Access Modifiers for Classes

- **Top-level classes**: Can only be `public` or `default`
- **Inner classes**: Can use all four access modifiers

```java
// Top-level class
public class OuterClass {
    // Inner classes can have any access modifier
    public class PublicInner { }
    protected class ProtectedInner { }
    class DefaultInner { }
    private class PrivateInner { }
}
```

### Best Practices

1. Use `private` for fields (encapsulation)
2. Use `public` for methods that form the class interface
3. Use `protected` for methods/fields that subclasses need
4. Use default for package-internal classes/methods
5. Principle of least privilege: Start with most restrictive, loosen as needed

---

## Static Keyword

`static` is a keyword used to create class-level members that belong to the class rather than instances.

### 1. Static Variables (Class Variables)

Shared by all instances of the class. Only one copy exists.

```java
class Student {
    String name;           // Instance variable
    static String school;  // Static variable (shared)
    
    Student(String name) {
        this.name = name;
    }
    
    void display() {
        System.out.println("Name: " + name + ", School: " + school);
    }
}

Student s1 = new Student("Alice");
Student s2 = new Student("Bob");

Student.school = "ABC School";  // Set once, shared by all

s1.display();  // Name: Alice, School: ABC School
s2.display();  // Name: Bob, School: ABC School
```

**Example: Counter**
```java
class Counter {
    static int count = 0;  // Shared counter
    
    Counter() {
        count++;
        System.out.println("Object " + count + " created");
    }
}

Counter c1 = new Counter();  // Object 1 created
Counter c2 = new Counter();  // Object 2 created
Counter c3 = new Counter();  // Object 3 created
```

### 2. Static Methods

Belong to the class, can be called without creating an object.

```java
class Calculator {
    // Static method
    static int add(int a, int b) {
        return a + b;
    }
    
    static int multiply(int a, int b) {
        return a * b;
    }
}

// Call without creating object
int sum = Calculator.add(10, 20);
int product = Calculator.multiply(5, 6);
```

**Restrictions on Static Methods:**
```java
class MyClass {
    int instanceVar = 10;
    static int staticVar = 20;
    
    static void staticMethod() {
        // System.out.println(instanceVar);  // Error: can't access instance variable
        System.out.println(staticVar);       // OK: can access static variable
        
        // instanceMethod();  // Error: can't call instance method
        // this.instanceVar;  // Error: can't use 'this' in static context
    }
    
    void instanceMethod() {
        System.out.println(instanceVar);  // OK
        System.out.println(staticVar);    // OK
        staticMethod();                   // OK
    }
}
```

### 3. Static Block

Used to initialize static variables. Executed when class is loaded (before main method).

```java
class Student {
    static String school;
    static int totalStudents;
    
    // Static block
    static {
        school = "ABC School";
        totalStudents = 0;
        System.out.println("Static block executed");
    }
    
    Student() {
        totalStudents++;
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Main method started");
        Student s1 = new Student();
        Student s2 = new Student();
    }
}
// Output:
// Static block executed
// Main method started
```

**Multiple Static Blocks:**
```java
class Test {
    static int a;
    static int b;
    
    static {
        a = 10;
        System.out.println("First static block");
    }
    
    static {
        b = 20;
        System.out.println("Second static block");
    }
}
// Blocks execute in order
```

### 4. Static Nested Class

A nested class that is static.

```java
class Outer {
    static int x = 10;
    int y = 20;
    
    static class Inner {
        void display() {
            System.out.println("x = " + x);  // OK: static member
            // System.out.println("y = " + y);  // Error: non-static member
        }
    }
}

// Creating object of static nested class
Outer.Inner obj = new Outer.Inner();
obj.display();
```

### Static vs Instance

| Feature | Static | Instance |
|---------|--------|----------|
| Belongs to | Class | Object |
| Memory allocation | Once (class loading) | Each object creation |
| Access | ClassName.member | objectName.member |
| Can access | Only static members | Both static and instance |
| Use 'this' | No | Yes |

### Common Static Examples

```java
// Math class methods are static
double result = Math.sqrt(16);
double max = Math.max(10, 20);

// System class
System.out.println("Hello");

// Arrays class
Arrays.sort(arr);
```

---

## final Keyword

`final` is a keyword used to restrict modifications.

### 1. final Variables (Constants)

Cannot be reassigned once initialized.

```java
final int MAX_VALUE = 100;
// MAX_VALUE = 200;  // Error: cannot assign a value to final variable

final double PI = 3.14159;

// Convention: Use UPPER_CASE for final variables
final int MIN_AGE = 18;
```

**Blank final Variable:**
```java
class Student {
    final int rollNumber;
    
    Student(int rollNumber) {
        this.rollNumber = rollNumber;  // Initialized in constructor
    }
}
```

**static final (Constant):**
```java
class Constants {
    static final double PI = 3.14159;
    static final int MAX_SIZE = 100;
}

// Access without creating object
double area = Constants.PI * radius * radius;
```

### 2. final Methods

Cannot be overridden by subclasses.

```java
class Parent {
    final void display() {
        System.out.println("This is final method");
    }
}

class Child extends Parent {
    // void display() { }  // Error: cannot override final method
}
```

**Use Case: Prevent modification of critical methods**
```java
class BankAccount {
    private double balance;
    
    final void deposit(double amount) {
        balance += amount;  // Critical logic, shouldn't be changed
    }
}
```

### 3. final Classes

Cannot be inherited.

```java
final class ImmutableClass {
    // Class content
}

// class SubClass extends ImmutableClass { }  // Error: cannot inherit from final class
```

**Examples of final Classes in Java:**
- `String`
- `Integer`, `Double`, `Float` (Wrapper classes)
- `Math`
- `System`

### final with References

```java
class Student {
    String name;
}

final Student s = new Student();
s.name = "Alice";     // OK: Can modify object's content
// s = new Student(); // Error: Cannot reassign reference

final int[] arr = {1, 2, 3};
arr[0] = 10;         // OK: Can modify array content
// arr = new int[5]; // Error: Cannot reassign reference
```

### final, finally, finalize

| Keyword | Purpose | Category |
|---------|---------|----------|
| `final` | Make variables constant, prevent method override, prevent inheritance | Modifier |
| `finally` | Code that executes after try-catch (exception handling) | Block |
| `finalize()` | Method called by garbage collector before object destruction | Method |

```java
// final
final int x = 10;

// finally
try {
    // code
} catch (Exception e) {
    // handle
} finally {
    // always executes
}

// finalize
protected void finalize() {
    // cleanup before garbage collection
}
```

---

## Inheritance and super Keyword

### Inheritance

Inheritance is a mechanism where a new class (child/subclass) acquires properties and behaviors of an existing class (parent/superclass).

**Benefits:**
- Code reusability
- Method overriding
- Establishes IS-A relationship

**Syntax:**
```java
class Parent {
    // parent class members
}

class Child extends Parent {
    // child class members
}
```

### Types of Inheritance

#### 1. Single Inheritance

One child class inherits from one parent class.

```java
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking");
    }
}

Dog d = new Dog();
d.eat();   // Inherited method
d.bark();  // Own method
```

#### 2. Multilevel Inheritance

Chain of inheritance: A → B → C

```java
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking");
    }
}

class Puppy extends Dog {
    void weep() {
        System.out.println("Puppy is weeping");
    }
}

Puppy p = new Puppy();
p.eat();   // From Animal
p.bark();  // From Dog
p.weep();  // Own method
```

#### 3. Hierarchical Inheritance

Multiple child classes inherit from one parent class.

```java
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println("Cat is meowing");
    }
}

Dog d = new Dog();
Cat c = new Cat();
d.eat();  // Inherited
c.eat();  // Inherited
```

#### 4. Multiple Inheritance (Through Interfaces)

Java doesn't support multiple inheritance with classes (to avoid ambiguity), but supports it through interfaces.

```java
// Not allowed with classes
// class C extends A, B { }  // Error

// Allowed with interfaces
interface A {
    void methodA();
}

interface B {
    void methodB();
}

class C implements A, B {
    public void methodA() {
        System.out.println("Method A");
    }
    
    public void methodB() {
        System.out.println("Method B");
    }
}
```

#### 5. Hybrid Inheritance

Combination of multiple inheritance types. Achieved through interfaces in Java.

### Inheritance Example

```java
class Employee {
    String name;
    double salary;
    
    void work() {
        System.out.println(name + " is working");
    }
    
    void displaySalary() {
        System.out.println("Salary: " + salary);
    }
}

class Manager extends Employee {
    String department;
    
    void manage() {
        System.out.println(name + " is managing " + department);
    }
}

Manager m = new Manager();
m.name = "Alice";
m.salary = 50000;
m.department = "IT";
m.work();           // Inherited method
m.displaySalary();  // Inherited method
m.manage();         // Own method
```

### super Keyword

`super` is a reference variable used to refer to the immediate parent class object.

#### Uses of super Keyword

#### 1. Access Parent Class Variables

```java
class Parent {
    int x = 10;
}

class Child extends Parent {
    int x = 20;
    
    void display() {
        System.out.println("Child x: " + x);        // 20
        System.out.println("Parent x: " + super.x); // 10
    }
}
```

#### 2. Call Parent Class Methods

```java
class Parent {
    void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    void display() {
        System.out.println("Child display");
    }
    
    void show() {
        display();        // Calls child's display()
        super.display();  // Calls parent's display()
    }
}
```

#### 3. Call Parent Class Constructor

```java
class Parent {
    Parent() {
        System.out.println("Parent constructor");
    }
    
    Parent(String name) {
        System.out.println("Parent: " + name);
    }
}

class Child extends Parent {
    Child() {
        super();  // Calls Parent()
        System.out.println("Child constructor");
    }
    
    Child(String name) {
        super(name);  // Calls Parent(String)
        System.out.println("Child: " + name);
    }
}

Child c = new Child("Test");
// Output:
// Parent: Test
// Child: Test
```

**Note:** `super()` must be the first statement in child constructor.

### Constructor Chaining in Inheritance

```java
class GrandParent {
    GrandParent() {
        System.out.println("GrandParent constructor");
    }
}

class Parent extends GrandParent {
    Parent() {
        super();  // Implicit if not specified
        System.out.println("Parent constructor");
    }
}

class Child extends Parent {
    Child() {
        super();  // Implicit if not specified
        System.out.println("Child constructor");
    }
}

Child c = new Child();
// Output:
// GrandParent constructor
// Parent constructor
// Child constructor
```

### Method Overriding in Inheritance

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

Animal a = new Dog();
a.sound();  // Output: Dog barks (runtime polymorphism)
```

### this vs super

| Feature | this | super |
|---------|------|-------|
| Refers to | Current class object | Parent class object |
| Variables | this.variable | super.variable |
| Methods | this.method() | super.method() |
| Constructor | this() | super() |
| Use | Differentiate instance var from local | Access parent class members |

---

## Polymorphism

Polymorphism means "many forms". It allows objects to be treated as instances of their parent class, enabling one interface to be used for different data types.

**Types:**
1. Compile-time Polymorphism (Static Binding)
2. Runtime Polymorphism (Dynamic Binding)

### 1. Compile-time Polymorphism (Method Overloading)

Resolved at compile time. Multiple methods with the same name but different parameters.

**Ways to Overload:**
- Different number of parameters
- Different types of parameters
- Different order of parameters

#### Example: Different Number of Parameters

```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
    
    int add(int a, int b, int c, int d) {
        return a + b + c + d;
    }
}

Calculator calc = new Calculator();
System.out.println(calc.add(10, 20));          // 30
System.out.println(calc.add(10, 20, 30));      // 60
System.out.println(calc.add(10, 20, 30, 40));  // 100
```

#### Example: Different Types of Parameters

```java
class Display {
    void show(int x) {
        System.out.println("Integer: " + x);
    }
    
    void show(double x) {
        System.out.println("Double: " + x);
    }
    
    void show(String x) {
        System.out.println("String: " + x);
    }
}

Display d = new Display();
d.show(10);       // Integer: 10
d.show(10.5);     // Double: 10.5
d.show("Hello");  // String: Hello
```

#### Example: Different Order of Parameters

```java
class Demo {
    void display(int a, String b) {
        System.out.println("int, String: " + a + ", " + b);
    }
    
    void display(String a, int b) {
        System.out.println("String, int: " + a + ", " + b);
    }
}

Demo d = new Demo();
d.display(10, "Hello");    // int, String: 10, Hello
d.display("Hello", 10);    // String, int: Hello, 10
```

#### Constructor Overloading

```java
class Student {
    String name;
    int age;
    
    Student() {
        name = "Unknown";
        age = 0;
    }
    
    Student(String name) {
        this.name = name;
        this.age = 0;
    }
    
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

#### Rules for Method Overloading

```java
class Test {
    // Valid overloading
    void method(int x) { }
    void method(double x) { }
    void method(int x, int y) { }
    
    // Invalid overloading - only return type differs
    // int method(int x) { }  // Error
    
    // Valid - parameter names don't matter, only types
    void display(int a) { }
    void display(int b) { }  // Error: already defined
}
```

### 2. Runtime Polymorphism (Method Overriding)

Resolved at runtime. Child class provides specific implementation of a method already defined in parent class.

**Requirements:**
- Inheritance relationship
- Method signature must be same
- Cannot override private, static, or final methods

#### Example

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
    
    void sleep() {
        System.out.println("Animal sleeps");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows");
    }
}

// Runtime polymorphism
Animal a1 = new Dog();
Animal a2 = new Cat();

a1.sound();  // Dog barks
a2.sound();  // Cat meows
```

#### Dynamic Method Dispatch

```java
class Shape {
    void draw() {
        System.out.println("Drawing shape");
    }
    
    double area() {
        return 0;
    }
}

class Circle extends Shape {
    double radius = 5;
    
    @Override
    void draw() {
        System.out.println("Drawing circle");
    }
    
    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double length = 10;
    double width = 5;
    
    @Override
    void draw() {
        System.out.println("Drawing rectangle");
    }
    
    @Override
    double area() {
        return length * width;
    }
}

// Dynamic method dispatch
Shape s1 = new Circle();
Shape s2 = new Rectangle();

s1.draw();  // Drawing circle
s2.draw();  // Drawing rectangle

System.out.println("Circle area: " + s1.area());      // 78.5398...
System.out.println("Rectangle area: " + s2.area());   // 50.0
```

### Covariant Return Type

Overriding method can return subtype of the return type in parent method (Java 5+).

```java
class A {
    A get() {
        return new A();
    }
}

class B extends A {
    @Override
    B get() {  // B is subtype of A
        return new B();
    }
}
```

---

## Method Overloading vs Method Overriding

| Feature | Overloading | Overriding |
|---------|-------------|------------|
| **Purpose** | Multiple methods, same name | Redefine parent method |
| **Binding** | Compile-time (early) | Runtime (late) |
| **Polymorphism** | Compile-time | Runtime |
| **Class** | Same class | Parent-child relationship |
| **Parameters** | Must differ | Must be same |
| **Return Type** | Can differ | Same or covariant |
| **Access Modifier** | Can differ | Same or less restrictive |
| **static/private/final** | Can overload | Cannot override |
| **@Override** | Not used | Should use |

### Example Combining Both

```java
class Parent {
    void display(int x) {
        System.out.println("Parent: " + x);
    }
}

class Child extends Parent {
    // Overriding
    @Override
    void display(int x) {
        System.out.println("Child: " + x);
    }
    
    // Overloading
    void display(int x, int y) {
        System.out.println("Child: " + x + ", " + y);
    }
    
    // Overloading
    void display(String s) {
        System.out.println("Child: " + s);
    }
}

Child c = new Child();
c.display(10);          // Child: 10 (overriding)
c.display(10, 20);      // Child: 10, 20 (overloading)
c.display("Hello");     // Child: Hello (overloading)
```

---

## Encapsulation

Encapsulation is the bundling of data (variables) and methods that operate on the data into a single unit (class), and restricting direct access to some components.

**Benefits:**
- Data hiding
- Increased flexibility
- Reusability
- Easy to test

### Implementation

1. Declare variables as `private`
2. Provide `public` getter and setter methods

### Example

```java
class Student {
    // Private fields
    private String name;
    private int age;
    private double gpa;
    
    // Public getter for name
    public String getName() {
        return name;
    }
    
    // Public setter for name
    public void setName(String name) {
        this.name = name;
    }
    
    // Public getter for age
    public int getAge() {
        return age;
    }
    
    // Public setter for age with validation
    public void setAge(int age) {
        if (age > 0 && age < 150) {
            this.age = age;
        } else {
            System.out.println("Invalid age");
        }
    }
    
    // Public getter for gpa
    public double getGpa() {
        return gpa;
    }
    
    // Public setter for gpa with validation
    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        } else {
            System.out.println("Invalid GPA");
        }
    }
}

// Usage
Student s = new Student();
s.setName("Alice");
s.setAge(20);
s.setGpa(3.8);

System.out.println("Name: " + s.getName());
System.out.println("Age: " + s.getAge());
System.out.println("GPA: " + s.getGpa());
```

### Read-Only Class

Only getters, no setters.

```java
class ImmutableStudent {
    private final String name;
    private final int age;
    
    public ImmutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // No setters - immutable
}
```

### Write-Only Class

Only setters, no getters.

```java
class WriteOnlyData {
    private String password;
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    // No getter for security
}
```

### Benefits of Encapsulation

```java
class BankAccount {
    private double balance;
    
    public double getBalance() {
        return balance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient balance");
        }
    }
}

// Cannot directly modify balance
BankAccount account = new BankAccount();
// account.balance = -1000;  // Error: balance has private access
account.deposit(1000);
account.withdraw(500);
```

---

## Abstraction

Abstraction is hiding implementation details and showing only functionality to the user.

**Ways to Achieve:**
1. Abstract Class (0-100% abstraction)
2. Interface (100% abstraction)

### 1. Abstract Class

A class declared with `abstract` keyword. Cannot be instantiated.

**Characteristics:**
- Can have abstract methods (no body) and concrete methods (with body)
- Can have constructors
- Can have static methods
- Can have instance variables
- Can have final methods

**Syntax:**
```java
abstract class ClassName {
    abstract returnType methodName();  // Abstract method
    
    void concreteMethod() {  // Concrete method
        // implementation
    }
}
```

#### Example

```java
abstract class Animal {
    // Abstract method (no body)
    abstract void sound();
    
    // Concrete method (with body)
    void sleep() {
        System.out.println("Animal is sleeping");
    }
}

class Dog extends Animal {
    // Must implement abstract method
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows");
    }
}

// Animal a = new Animal();  // Error: Cannot instantiate abstract class
Animal dog = new Dog();
Animal cat = new Cat();

dog.sound();  // Dog barks
dog.sleep();  // Animal is sleeping

cat.sound();  // Cat meows
cat.sleep();  // Animal is sleeping
```

#### Abstract Class with Constructor

```java
abstract class Vehicle {
    String brand;
    
    // Constructor
    Vehicle(String brand) {
        this.brand = brand;
    }
    
    abstract void start();
    
    void displayBrand() {
        System.out.println("Brand: " + brand);
    }
}

class Car extends Vehicle {
    Car(String brand) {
        super(brand);
    }
    
    @Override
    void start() {
        System.out.println("Car is starting");
    }
}

Car car = new Car("Toyota");
car.displayBrand();  // Brand: Toyota
car.start();         // Car is starting
```

### 2. Interface

A blueprint of a class. Contains abstract methods and constants.

**Characteristics (Pre-Java 8):**
- All methods are `public abstract` by default
- All variables are `public static final` by default
- Cannot have constructors
- Cannot be instantiated
- A class can implement multiple interfaces

**Syntax:**
```java
interface InterfaceName {
    returnType methodName();
}
```

#### Example

```java
interface Animal {
    void sound();  // public abstract by default
    void eat();
}

class Dog implements Animal {
    @Override
    public void sound() {
        System.out.println("Dog barks");
    }
    
    @Override
    public void eat() {
        System.out.println("Dog eats");
    }
}

Animal dog = new Dog();
dog.sound();  // Dog barks
dog.eat();    // Dog eats
```

#### Multiple Interfaces

```java
interface Printable {
    void print();
}

interface Showable {
    void show();
}

class Document implements Printable, Showable {
    @Override
    public void print() {
        System.out.println("Printing document");
    }
    
    @Override
    public void show() {
        System.out.println("Showing document");
    }
}

Document doc = new Document();
doc.print();  // Printing document
doc.show();   // Showing document
```

#### Interface Inheritance

```java
interface A {
    void methodA();
}

interface B extends A {
    void methodB();
}

class C implements B {
    @Override
    public void methodA() {
        System.out.println("Method A");
    }
    
    @Override
    public void methodB() {
        System.out.println("Method B");
    }
}
```

#### Constants in Interface

```java
interface Constants {
    int MAX_VALUE = 100;      // public static final
    double PI = 3.14159;      // public static final
    String APP_NAME = "MyApp";  // public static final
}

class Test {
    void display() {
        System.out.println(Constants.MAX_VALUE);
        System.out.println(Constants.PI);
        // Constants.MAX_VALUE = 200;  // Error: cannot modify final variable
    }
}
```

### Java 8+ Interface Features

#### 1. Default Methods

Methods with implementation in interface.

```java
interface Vehicle {
    void start();  // Abstract method
    
    // Default method
    default void stop() {
        System.out.println("Vehicle stopped");
    }
}

class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car started");
    }
    
    // Can optionally override default method
    @Override
    public void stop() {
        System.out.println("Car stopped");
    }
}
```

#### 2. Static Methods

```java
interface MathOperations {
    static int add(int a, int b) {
        return a + b;
    }
    
    static int multiply(int a, int b) {
        return a * b;
    }
}

// Call using interface name
int sum = MathOperations.add(10, 20);
int product = MathOperations.multiply(5, 6);
```

### Java 9+ Interface Features

#### Private Methods in Interface

```java
interface Calculator {
    default int addAndPrint(int a, int b) {
        int result = add(a, b);
        print(result);
        return result;
    }
    
    default int multiplyAndPrint(int a, int b) {
        int result = multiply(a, b);
        print(result);
        return result;
    }
    
    private int add(int a, int b) {
        return a + b;
    }
    
    private int multiply(int a, int b) {
        return a * b;
    }
    
    private void print(int result) {
        System.out.println("Result: " + result);
    }
}
```

### Abstract Class vs Interface

| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| **Methods** | Abstract + Concrete | Abstract (default/static in Java 8+) |
| **Variables** | Any type | public static final only |
| **Constructor** | Yes | No |
| **Multiple Inheritance** | No | Yes |
| **Access Modifiers** | Any | public (methods), public static final (variables) |
| **extends/implements** | extends | implements |
| **Use Case** | IS-A relationship | CAN-DO relationship |
| **When to Use** | Share code among related classes | Unrelated classes implement common behavior |

### When to Use What?

**Use Abstract Class:**
- Share code among closely related classes
- Need non-static or non-final fields
- Need non-public members
- Common base with default behavior

```java
abstract class Employee {
    String name;
    double salary;
    
    abstract double calculateBonus();
    
    void displayInfo() {
        System.out.println("Name: " + name + ", Salary: " + salary);
    }
}
```

**Use Interface:**
- Unrelated classes implement common behavior
- Specify behavior without implementation
- Multiple inheritance
- Define a contract

```java
interface Flyable {
    void fly();
}

class Bird implements Flyable {
    public void fly() { /* implementation */ }
}

class Airplane implements Flyable {
    public void fly() { /* implementation */ }
}
```

---

## Packages and Encapsulation Principles

### Packages for Encapsulation

Packages help organize classes and provide access protection.

#### Package Structure Example

```
com.company.project
├── model
│   ├── User.java
│   ├── Product.java
│   └── Order.java
├── service
│   ├── UserService.java
│   ├── ProductService.java
│   └── OrderService.java
├── dao
│   ├── UserDAO.java
│   ├── ProductDAO.java
│   └── OrderDAO.java
└── util
    ├── DateUtils.java
    └── StringUtils.java
```

### Encapsulation with Packages

```java
// File: com/company/model/User.java
package com.company.model;

public class User {
    private String username;
    private String password;
    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    // Package-private method (default access)
    void resetPassword() {
        this.password = "default";
    }
}

// File: com/company/service/UserService.java
package com.company.service;

import com.company.model.User;

public class UserService {
    public void createUser(String username) {
        User user = new User();
        user.setUsername(username);  // OK: public method
        // user.resetPassword();     // Error: different package
    }
}
```

### Access Control in Packages

```java
package com.example;

public class AccessDemo {
    public int publicVar = 1;       // Accessible everywhere
    protected int protectedVar = 2;  // Same package + subclasses
    int defaultVar = 3;              // Same package only
    private int privateVar = 4;      // Same class only
    
    public void publicMethod() { }
    protected void protectedMethod() { }
    void defaultMethod() { }
    private void privateMethod() { }
}
```

### Encapsulation Best Practices

#### 1. Information Hiding

```java
public class BankAccount {
    private double balance;
    private String accountNumber;
    private List<Transaction> transactions;
    
    // Expose only necessary functionality
    public void deposit(double amount) {
        if (isValidAmount(amount)) {
            balance += amount;
            recordTransaction("DEPOSIT", amount);
        }
    }
    
    public void withdraw(double amount) {
        if (isValidAmount(amount) && hasSufficientBalance(amount)) {
            balance -= amount;
            recordTransaction("WITHDRAW", amount);
        }
    }
    
    public double getBalance() {
        return balance;
    }
    
    // Hide implementation details
    private boolean isValidAmount(double amount) {
        return amount > 0;
    }
    
    private boolean hasSufficientBalance(double amount) {
        return balance >= amount;
    }
    
    private void recordTransaction(String type, double amount) {
        // Internal implementation
    }
}
```

#### 2. Validation in Setters

```java
public class Student {
    private String name;
    private int age;
    private String email;
    
    public void setName(String name) {
        if (name != null && !name.trim().isEmpty()) {
            this.name = name;
        } else {
            throw new IllegalArgumentException("Name cannot be empty");
        }
    }
    
    public void setAge(int age) {
        if (age >= 0 && age <= 150) {
            this.age = age;
        } else {
            throw new IllegalArgumentException("Invalid age");
        }
    }
    
    public void setEmail(String email) {
        if (email != null && email.contains("@")) {
            this.email = email;
        } else {
            throw new IllegalArgumentException("Invalid email");
        }
    }
}
```

#### 3. Immutable Classes

```java
public final class ImmutablePerson {
    private final String name;
    private final int age;
    private final List<String> hobbies;
    
    public ImmutablePerson(String name, int age, List<String> hobbies) {
        this.name = name;
        this.age = age;
        // Create defensive copy
        this.hobbies = new ArrayList<>(hobbies);
    }
    
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public List<String> getHobbies() {
        // Return unmodifiable copy
        return Collections.unmodifiableList(hobbies);
    }
}
```

#### 4. Package Organization

```java
// Public API - Stable interface
package com.company.api;

public interface UserService {
    User createUser(String username);
    User getUser(String username);
    void deleteUser(String username);
}

// Internal implementation - Can change
package com.company.internal;

class UserServiceImpl implements UserService {
    // Implementation details hidden from API users
}
```

### Encapsulation Principles

1. **Single Responsibility**: Each class should have one responsibility
2. **Information Hiding**: Hide implementation details
3. **Minimal Exposure**: Expose only what's necessary
4. **Immutability**: Make objects immutable when possible
5. **Validation**: Validate data in setters
6. **Defensive Copying**: Return copies of mutable objects
7. **Package Privacy**: Use package-private for internal classes

---

## Summary

Object-Oriented Programming in Java encompasses:

### Core Concepts
- **Class**: Blueprint for objects
- **Object**: Instance of a class with state and behavior
- **Constructor**: Special method to initialize objects
- **this**: Reference to current object
- **super**: Reference to parent object

### Access Control
- **public**: Accessible everywhere
- **private**: Accessible only within class
- **protected**: Accessible in package and subclasses
- **default**: Accessible within package

### Keywords
- **static**: Class-level members shared by all instances
- **final**: Constant values, prevent method override, prevent inheritance

### Inheritance
- Code reusability through parent-child relationship
- Types: Single, Multilevel, Hierarchical, Multiple (interfaces)
- Method overriding for runtime polymorphism

### Polymorphism
- **Compile-time**: Method overloading (same name, different parameters)
- **Runtime**: Method overriding (parent reference, child object)

### Encapsulation
- Bundle data and methods together
- Private fields with public getters/setters
- Data validation and protection

### Abstraction
- **Abstract Class**: Partial abstraction, can have concrete methods
- **Interface**: Complete abstraction, contract for implementation
- Hide implementation, show functionality

### Best Practices
1. Favor composition over inheritance
2. Program to interface, not implementation
3. Keep classes small and focused
4. Use encapsulation to protect data
5. Follow access modifier principles (least privilege)
6. Use abstract classes for IS-A, interfaces for CAN-DO
7. Organize code logically with packages

OOP enables creation of modular, reusable, and maintainable code through proper abstraction and encapsulation.

---

# 4. String Handling

Strings are sequences of characters used extensively in Java programming. The `String` class is one of the most commonly used classes in Java.

## String, StringBuilder, StringBuffer

### String

A `String` is an immutable sequence of characters. Once created, its value cannot be changed.

**Creating Strings:**

#### 1. String Literal
```java
String str1 = "Hello";
String str2 = "Hello";
// Both point to same object in String Pool
```

#### 2. Using new Keyword
```java
String str1 = new String("Hello");
String str2 = new String("Hello");
// Creates separate objects in heap memory
```

#### Example
```java
String name = "Alice";
String greeting = "Hello, World!";
String empty = "";

// Multi-line strings (Java 15+)
String multiLine = """
    This is a
    multi-line
    string
    """;
```

### String Pool (String Constant Pool)

A special memory region in Java heap where String literals are stored.

```java
String s1 = "Hello";      // Created in String Pool
String s2 = "Hello";      // Points to same object in String Pool
String s3 = new String("Hello");  // Created in heap (outside pool)

System.out.println(s1 == s2);  // true (same reference)
System.out.println(s1 == s3);  // false (different references)
System.out.println(s1.equals(s3));  // true (same content)
```

**intern() Method:**
```java
String s1 = new String("Hello");
String s2 = s1.intern();  // Returns reference from String Pool
String s3 = "Hello";

System.out.println(s2 == s3);  // true (both in pool)
```

### StringBuilder

A mutable sequence of characters. Not thread-safe but faster than StringBuffer.

**Characteristics:**
- Mutable (can be modified)
- Not synchronized (not thread-safe)
- Faster performance
- Introduced in Java 5

**Creating StringBuilder:**
```java
StringBuilder sb = new StringBuilder();           // Empty, capacity 16
StringBuilder sb1 = new StringBuilder(50);        // Empty, capacity 50
StringBuilder sb2 = new StringBuilder("Hello");   // Initial string
```

**Common Operations:**
```java
StringBuilder sb = new StringBuilder("Hello");

// Append
sb.append(" World");           // "Hello World"
sb.append(123);                // "Hello World123"

// Insert
sb.insert(5, ",");             // "Hello, World123"

// Delete
sb.delete(5, 6);               // "Hello World123"

// Replace
sb.replace(6, 11, "Java");     // "Hello Java123"

// Reverse
sb.reverse();                  // "321avaJ olleH"

// Convert to String
String result = sb.toString();
```

### StringBuffer

A mutable sequence of characters. Thread-safe but slower than StringBuilder.

**Characteristics:**
- Mutable (can be modified)
- Synchronized (thread-safe)
- Slower performance due to synchronization
- Available since Java 1.0

**Creating StringBuffer:**
```java
StringBuffer sbf = new StringBuffer();
StringBuffer sbf1 = new StringBuffer(50);
StringBuffer sbf2 = new StringBuffer("Hello");
```

**Common Operations:**
```java
StringBuffer sbf = new StringBuffer("Hello");

sbf.append(" World");          // "Hello World"
sbf.insert(5, ",");            // "Hello, World"
sbf.delete(5, 6);              // "Hello World"
sbf.replace(6, 11, "Java");    // "Hello Java"
sbf.reverse();                 // "avaJ olleH"

String result = sbf.toString();
```

### String vs StringBuilder vs StringBuffer

| Feature | String | StringBuilder | StringBuffer |
|---------|--------|---------------|--------------|
| **Mutability** | Immutable | Mutable | Mutable |
| **Thread-Safe** | Yes (immutable) | No | Yes |
| **Performance** | Slow (creates new objects) | Fast | Moderate |
| **Memory** | Uses more memory | Efficient | Efficient |
| **Synchronization** | N/A | Not synchronized | Synchronized |
| **Since** | Java 1.0 | Java 5 | Java 1.0 |
| **Use Case** | Fixed strings | Single-threaded | Multi-threaded |

### When to Use What?

#### Use String:
- Content doesn't change
- Thread-safety through immutability needed

```java
String name = "Alice";
String constant = "Fixed Value";
```

#### Use StringBuilder:
- Frequent modifications needed
- Single-threaded environment
- Performance is critical

```java
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i);  // Efficient
}
```

#### Use StringBuffer:
- Frequent modifications needed
- Multi-threaded environment
- Thread-safety required

```java
StringBuffer sbf = new StringBuffer();
// Used in multi-threaded scenarios
```

### Performance Comparison

```java
// String - Slow (creates 10,000 objects)
String str = "";
long start = System.currentTimeMillis();
for (int i = 0; i < 10000; i++) {
    str += i;
}
long end = System.currentTimeMillis();
System.out.println("String: " + (end - start) + "ms");

// StringBuilder - Fast
StringBuilder sb = new StringBuilder();
start = System.currentTimeMillis();
for (int i = 0; i < 10000; i++) {
    sb.append(i);
}
end = System.currentTimeMillis();
System.out.println("StringBuilder: " + (end - start) + "ms");

// StringBuffer - Moderate
StringBuffer sbf = new StringBuffer();
start = System.currentTimeMillis();
for (int i = 0; i < 10000; i++) {
    sbf.append(i);
}
end = System.currentTimeMillis();
System.out.println("StringBuffer: " + (end - start) + "ms");
```

---

## String Methods

String class provides numerous methods for string manipulation.

### 1. Length and Character Access

#### length()
```java
String str = "Hello World";
int len = str.length();  // 11
```

#### charAt(int index)
```java
String str = "Hello";
char ch = str.charAt(0);   // 'H'
char ch2 = str.charAt(4);  // 'o'
// str.charAt(10);  // StringIndexOutOfBoundsException
```

#### toCharArray()
```java
String str = "Hello";
char[] chars = str.toCharArray();  // ['H', 'e', 'l', 'l', 'o']

for (char ch : chars) {
    System.out.println(ch);
}
```

#### getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)
```java
String str = "Hello World";
char[] dest = new char[5];
str.getChars(0, 5, dest, 0);  // Copies "Hello" to dest
```

### 2. Comparison Methods

#### equals(Object obj)
```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = "hello";

System.out.println(s1.equals(s2));   // true
System.out.println(s1.equals(s3));   // false (case-sensitive)
```

#### equalsIgnoreCase(String str)
```java
String s1 = "Hello";
String s2 = "HELLO";

System.out.println(s1.equalsIgnoreCase(s2));  // true
```

#### compareTo(String str)
```java
String s1 = "Apple";
String s2 = "Banana";
String s3 = "Apple";

System.out.println(s1.compareTo(s2));  // Negative (Apple < Banana)
System.out.println(s1.compareTo(s3));  // 0 (equal)
System.out.println(s2.compareTo(s1));  // Positive (Banana > Apple)
```

#### compareToIgnoreCase(String str)
```java
String s1 = "apple";
String s2 = "APPLE";

System.out.println(s1.compareToIgnoreCase(s2));  // 0
```

### 3. Search Methods

#### contains(CharSequence s)
```java
String str = "Hello World";
boolean result = str.contains("World");  // true
boolean result2 = str.contains("Java");  // false
```

#### startsWith(String prefix)
```java
String str = "Hello World";
boolean result = str.startsWith("Hello");  // true
boolean result2 = str.startsWith("World"); // false
```

#### endsWith(String suffix)
```java
String str = "Hello World";
boolean result = str.endsWith("World");  // true
boolean result2 = str.endsWith("Hello"); // false
```

#### indexOf(String str)
```java
String str = "Hello World Hello";
int index = str.indexOf("o");        // 4 (first occurrence)
int index2 = str.indexOf("World");   // 6
int index3 = str.indexOf("Java");    // -1 (not found)
int index4 = str.indexOf("o", 5);    // 7 (search from index 5)
```

#### lastIndexOf(String str)
```java
String str = "Hello World Hello";
int index = str.lastIndexOf("o");      // 16 (last occurrence)
int index2 = str.lastIndexOf("Hello"); // 12
```

### 4. Extraction Methods

#### substring(int beginIndex)
```java
String str = "Hello World";
String sub = str.substring(6);  // "World"
```

#### substring(int beginIndex, int endIndex)
```java
String str = "Hello World";
String sub = str.substring(0, 5);   // "Hello"
String sub2 = str.substring(6, 11); // "World"
```

#### split(String regex)
```java
String str = "Apple,Banana,Cherry";
String[] fruits = str.split(",");
// ["Apple", "Banana", "Cherry"]

for (String fruit : fruits) {
    System.out.println(fruit);
}

String str2 = "Hello World Java Programming";
String[] words = str2.split(" ");
// ["Hello", "World", "Java", "Programming"]
```

#### split(String regex, int limit)
```java
String str = "A,B,C,D,E";
String[] parts = str.split(",", 3);
// ["A", "B", "C,D,E"]
```

### 5. Modification Methods

#### concat(String str)
```java
String s1 = "Hello";
String s2 = " World";
String result = s1.concat(s2);  // "Hello World"

// Equivalent to
String result2 = s1 + s2;
```

#### replace(char oldChar, char newChar)
```java
String str = "Hello World";
String result = str.replace('o', 'a');  // "Hella Warld"
```

#### replace(CharSequence target, CharSequence replacement)
```java
String str = "Hello World World";
String result = str.replace("World", "Java");  // "Hello Java Java"
```

#### replaceFirst(String regex, String replacement)
```java
String str = "Hello World World";
String result = str.replaceFirst("World", "Java");  // "Hello Java World"
```

#### replaceAll(String regex, String replacement)
```java
String str = "Hello123World456";
String result = str.replaceAll("\\d+", "");  // "HelloWorld" (removes digits)
```

### 6. Case Conversion Methods

#### toLowerCase()
```java
String str = "Hello World";
String lower = str.toLowerCase();  // "hello world"
```

#### toUpperCase()
```java
String str = "Hello World";
String upper = str.toUpperCase();  // "HELLO WORLD"
```

### 7. Trimming Methods

#### trim()
```java
String str = "   Hello World   ";
String trimmed = str.trim();  // "Hello World"
```

#### strip() (Java 11+)
```java
String str = "   Hello World   ";
String stripped = str.strip();  // "Hello World" (handles Unicode whitespace)
```

#### stripLeading() (Java 11+)
```java
String str = "   Hello World   ";
String result = str.stripLeading();  // "Hello World   "
```

#### stripTrailing() (Java 11+)
```java
String str = "   Hello World   ";
String result = str.stripTrailing();  // "   Hello World"
```

### 8. Checking Methods

#### isEmpty()
```java
String str1 = "";
String str2 = "Hello";

System.out.println(str1.isEmpty());  // true
System.out.println(str2.isEmpty());  // false
```

#### isBlank() (Java 11+)
```java
String str1 = "";
String str2 = "   ";
String str3 = "Hello";

System.out.println(str1.isBlank());  // true
System.out.println(str2.isBlank());  // true (only whitespace)
System.out.println(str3.isBlank());  // false
```

### 9. Formatting Methods

#### format(String format, Object... args)
```java
String name = "Alice";
int age = 25;
double salary = 50000.50;

String formatted = String.format("Name: %s, Age: %d, Salary: %.2f", name, age, salary);
// "Name: Alice, Age: 25, Salary: 50000.50"

String hex = String.format("Hex: %x", 255);  // "Hex: ff"
String octal = String.format("Octal: %o", 8);  // "Octal: 10"
```

#### join(CharSequence delimiter, CharSequence... elements)
```java
String joined = String.join(", ", "Apple", "Banana", "Cherry");
// "Apple, Banana, Cherry"

List<String> list = Arrays.asList("A", "B", "C");
String result = String.join("-", list);  // "A-B-C"
```

### 10. Conversion Methods

#### valueOf()
```java
int num = 123;
double d = 45.67;
boolean b = true;
char ch = 'A';

String s1 = String.valueOf(num);   // "123"
String s2 = String.valueOf(d);     // "45.67"
String s3 = String.valueOf(b);     // "true"
String s4 = String.valueOf(ch);    // "A"
```

#### toString()
```java
String str = "Hello";
String result = str.toString();  // "Hello" (same object)
```

### 11. Other Useful Methods

#### repeat(int count) (Java 11+)
```java
String str = "Ha";
String repeated = str.repeat(3);  // "HaHaHa"
```

#### lines() (Java 11+)
```java
String multiLine = "Line1\nLine2\nLine3";
multiLine.lines().forEach(System.out::println);
// Output:
// Line1
// Line2
// Line3
```

#### indent(int n) (Java 12+)
```java
String str = "Hello\nWorld";
String indented = str.indent(4);
// "    Hello\n    World\n"
```

### String Method Chaining

```java
String str = "  Hello World  ";
String result = str.trim()
                   .toUpperCase()
                   .replace("WORLD", "JAVA");
// "HELLO JAVA"
```

---

## String Immutability

### What is Immutability?

Once a String object is created, its value cannot be changed. Any modification creates a new String object.

### Example

```java
String str = "Hello";
System.out.println(str);           // "Hello"
System.out.println(str.hashCode()); // Some hash code

str.concat(" World");  // Creates new object, but not assigned
System.out.println(str);           // "Hello" (unchanged)

str = str.concat(" World");  // Now assigned to new object
System.out.println(str);           // "Hello World"
System.out.println(str.hashCode()); // Different hash code
```

### Why Strings are Immutable?

#### 1. Security
```java
// Immutable strings prevent modification after creation
String username = "admin";
void authenticate(String username) {
    // username cannot be changed inside method
    // if it were mutable, it could be modified elsewhere
}
```

#### 2. Thread Safety
```java
// Immutable objects are automatically thread-safe
String sharedString = "Shared Data";
// Multiple threads can safely read without synchronization
```

#### 3. String Pool Optimization
```java
String s1 = "Hello";
String s2 = "Hello";
// Both point to same object in pool
// Only possible because strings are immutable
```

#### 4. Caching Hash Code
```java
// Hash code is cached and can be reused
String str = "Hello";
int hash1 = str.hashCode();  // Calculated once
int hash2 = str.hashCode();  // Cached value returned
// Useful in HashMap, HashSet
```

### Memory Impact

```java
// Inefficient - creates many objects
String str = "Hello";
for (int i = 0; i < 1000; i++) {
    str = str + i;  // Creates 1000 new String objects
}

// Efficient - uses mutable StringBuilder
StringBuilder sb = new StringBuilder("Hello");
for (int i = 0; i < 1000; i++) {
    sb.append(i);  // Modifies same object
}
String result = sb.toString();
```

### Proof of Immutability

```java
public class StringImmutableTest {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = s1;
        
        System.out.println(s1 == s2);  // true (same reference)
        
        s1 = s1.concat(" World");
        
        System.out.println(s1);        // "Hello World"
        System.out.println(s2);        // "Hello" (unchanged)
        System.out.println(s1 == s2);  // false (different references)
    }
}
```

### Making Custom Immutable Class

```java
public final class ImmutablePerson {
    private final String name;
    private final int age;
    
    public ImmutablePerson(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // No setters - immutable
}
```

---

## String Comparison

### 1. Using == Operator

Compares references (memory addresses), not content.

```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

System.out.println(s1 == s2);  // true (same reference in pool)
System.out.println(s1 == s3);  // false (different references)
```

### 2. Using equals() Method

Compares content (character by character).

```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

System.out.println(s1.equals(s2));  // true (same content)
System.out.println(s1.equals(s3));  // true (same content)
```

### 3. Using equalsIgnoreCase() Method

Compares content, ignoring case differences.

```java
String s1 = "Hello";
String s2 = "HELLO";
String s3 = "hello";

System.out.println(s1.equalsIgnoreCase(s2));  // true
System.out.println(s1.equalsIgnoreCase(s3));  // true
```

### 4. Using compareTo() Method

Compares strings lexicographically (dictionary order).

```java
String s1 = "Apple";
String s2 = "Banana";
String s3 = "Apple";

int result1 = s1.compareTo(s2);  // Negative (Apple < Banana)
int result2 = s1.compareTo(s3);  // 0 (equal)
int result3 = s2.compareTo(s1);  // Positive (Banana > Apple)

if (result1 < 0) {
    System.out.println("s1 comes before s2");
} else if (result1 == 0) {
    System.out.println("s1 equals s2");
} else {
    System.out.println("s1 comes after s2");
}
```

**How compareTo() Works:**
```java
String s1 = "abc";
String s2 = "abd";

// Compares character by character
// 'a' == 'a', 'b' == 'b', 'c' < 'd'
// Returns: 'c' - 'd' = -1
System.out.println(s1.compareTo(s2));  // -1
```

### 5. Using compareToIgnoreCase() Method

```java
String s1 = "apple";
String s2 = "BANANA";

int result = s1.compareToIgnoreCase(s2);  // Negative
```

### 6. Using Objects.equals()

Null-safe comparison (Java 7+).

```java
String s1 = "Hello";
String s2 = null;

// System.out.println(s2.equals(s1));  // NullPointerException

// Null-safe comparison
System.out.println(Objects.equals(s1, s2));  // false
System.out.println(Objects.equals(s2, s1));  // false
System.out.println(Objects.equals(null, null));  // true
```

### Comparison Summary

```java
public class StringComparisonDemo {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = new String("Hello");
        String s4 = "HELLO";
        
        // Reference comparison
        System.out.println("== comparison:");
        System.out.println(s1 == s2);    // true
        System.out.println(s1 == s3);    // false
        
        // Content comparison
        System.out.println("\nequals() comparison:");
        System.out.println(s1.equals(s2));    // true
        System.out.println(s1.equals(s3));    // true
        System.out.println(s1.equals(s4));    // false
        
        // Case-insensitive comparison
        System.out.println("\nequalsIgnoreCase() comparison:");
        System.out.println(s1.equalsIgnoreCase(s4));  // true
        
        // Lexicographic comparison
        System.out.println("\ncompareTo() comparison:");
        System.out.println(s1.compareTo(s2));   // 0
        System.out.println(s1.compareTo("Hi")); // Negative
        System.out.println(s1.compareTo("Ha")); // Positive
    }
}
```

### Best Practices

1. **Use equals() for content comparison**
```java
// Good
if (str1.equals(str2)) { }

// Bad
if (str1 == str2) { }
```

2. **Handle null values**
```java
// Good
if (str != null && str.equals("Hello")) { }

// Better (null-safe)
if ("Hello".equals(str)) { }

// Best (Java 7+)
if (Objects.equals(str, "Hello")) { }
```

3. **Use equalsIgnoreCase() for case-insensitive comparison**
```java
// Good
if (str.equalsIgnoreCase("hello")) { }

// Bad
if (str.toLowerCase().equals("hello")) { }  // Creates new object
```

---

## Regular Expressions (Pattern, Matcher)

Regular expressions (regex) are patterns used to match character combinations in strings.

### Pattern Class

Compiled representation of a regular expression.

**Creating Pattern:**
```java
import java.util.regex.Pattern;
import java.util.regex.Matcher;

Pattern pattern = Pattern.compile("regex");
```

### Matcher Class

Engine that performs match operations on a character sequence.

**Creating Matcher:**
```java
Pattern pattern = Pattern.compile("regex");
Matcher matcher = pattern.matcher("input string");
```

### Basic Regex Syntax

| Pattern | Meaning | Example |
|---------|---------|---------|
| `.` | Any character | `a.c` matches "abc", "a1c" |
| `^` | Start of string | `^Hello` matches strings starting with "Hello" |
| `$` | End of string | `World$` matches strings ending with "World" |
| `*` | 0 or more | `ab*c` matches "ac", "abc", "abbc" |
| `+` | 1 or more | `ab+c` matches "abc", "abbc", not "ac" |
| `?` | 0 or 1 | `ab?c` matches "ac", "abc" |
| `{n}` | Exactly n | `a{3}` matches "aaa" |
| `{n,}` | n or more | `a{2,}` matches "aa", "aaa", "aaaa" |
| `{n,m}` | Between n and m | `a{2,4}` matches "aa", "aaa", "aaaa" |
| `[abc]` | Any of a, b, c | `[abc]` matches "a", "b", or "c" |
| `[^abc]` | Not a, b, c | `[^abc]` matches any char except a, b, c |
| `[a-z]` | Range a to z | `[a-z]` matches any lowercase letter |
| `\d` | Digit [0-9] | `\d+` matches "123" |
| `\D` | Non-digit | `\D+` matches "abc" |
| `\w` | Word char [a-zA-Z0-9_] | `\w+` matches "hello123" |
| `\W` | Non-word char | `\W+` matches "!@#" |
| `\s` | Whitespace | `\s+` matches spaces, tabs, newlines |
| `\S` | Non-whitespace | `\S+` matches "hello" |
| `|` | OR | `cat|dog` matches "cat" or "dog" |
| `()` | Group | `(ab)+` matches "ab", "abab" |

### 1. Pattern.matches()

Static method for one-time matching.

```java
// Check if entire string matches pattern
boolean result = Pattern.matches("\\d+", "12345");
System.out.println(result);  // true

boolean result2 = Pattern.matches("\\d+", "123abc");
System.out.println(result2);  // false
```

### 2. Matcher Methods

#### matches()

Matches entire string against pattern.

```java
Pattern pattern = Pattern.compile("\\d{3}-\\d{3}-\\d{4}");
Matcher matcher = pattern.matcher("123-456-7890");

if (matcher.matches()) {
    System.out.println("Valid phone number");
} else {
    System.out.println("Invalid phone number");
}
```

#### find()

Finds next occurrence of pattern in string.

```java
Pattern pattern = Pattern.compile("\\d+");
Matcher matcher = pattern.matcher("Age: 25, Year: 2024");

while (matcher.find()) {
    System.out.println("Found: " + matcher.group());
}
// Output:
// Found: 25
// Found: 2024
```

#### lookingAt()

Matches pattern from beginning of string.

```java
Pattern pattern = Pattern.compile("Hello");
Matcher matcher = pattern.matcher("Hello World");

System.out.println(matcher.lookingAt());  // true
System.out.println(matcher.matches());    // false (entire string doesn't match)
```

#### group()

Returns matched substring.

```java
Pattern pattern = Pattern.compile("(\\d+)-(\\d+)");
Matcher matcher = pattern.matcher("123-456");

if (matcher.find()) {
    System.out.println(matcher.group());   // "123-456" (entire match)
    System.out.println(matcher.group(1));  // "123" (first group)
    System.out.println(matcher.group(2));  // "456" (second group)
}
```

#### start() and end()

Returns start and end index of matched substring.

```java
Pattern pattern = Pattern.compile("\\d+");
Matcher matcher = pattern.matcher("Age: 25, Year: 2024");

while (matcher.find()) {
    System.out.println("Found: " + matcher.group() + 
                       " at [" + matcher.start() + ", " + matcher.end() + "]");
}
// Output:
// Found: 25 at [5, 7]
// Found: 2024 at [15, 19]
```

### 3. Common Regex Examples

#### Email Validation
```java
String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
Pattern pattern = Pattern.compile(emailRegex);

String email = "user@example.com";
Matcher matcher = pattern.matcher(email);

if (matcher.matches()) {
    System.out.println("Valid email");
} else {
    System.out.println("Invalid email");
}
```

#### Phone Number Validation
```java
String phoneRegex = "^\\d{3}-\\d{3}-\\d{4}$";
Pattern pattern = Pattern.compile(phoneRegex);

String phone = "123-456-7890";
if (pattern.matcher(phone).matches()) {
    System.out.println("Valid phone number");
}
```

#### Password Validation
```java
// At least 8 characters, 1 uppercase, 1 lowercase, 1 digit, 1 special char
String passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=]).{8,}$";
Pattern pattern = Pattern.compile(passwordRegex);

String password = "Pass@123";
if (pattern.matcher(password).matches()) {
    System.out.println("Strong password");
}
```

#### URL Validation
```java
String urlRegex = "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$";
Pattern pattern = Pattern.compile(urlRegex);

String url = "https://www.example.com";
if (pattern.matcher(url).matches()) {
    System.out.println("Valid URL");
}
```

#### Extract All Words
```java
String text = "The quick brown fox jumps over the lazy dog";
Pattern pattern = Pattern.compile("\\b\\w+\\b");
Matcher matcher = pattern.matcher(text);

while (matcher.find()) {
    System.out.println(matcher.group());
}
```

#### Extract All Numbers
```java
String text = "Price: $100, Discount: 20%, Total: $80";
Pattern pattern = Pattern.compile("\\d+");
Matcher matcher = pattern.matcher(text);

while (matcher.find()) {
    System.out.println(matcher.group());
}
// Output: 100, 20, 80
```

### 4. String Methods with Regex

#### matches(String regex)
```java
String str = "12345";
boolean result = str.matches("\\d+");  // true
```

#### split(String regex)
```java
String str = "apple,banana;cherry:date";
String[] fruits = str.split("[,;:]");
// ["apple", "banana", "cherry", "date"]
```

#### replaceAll(String regex, String replacement)
```java
String str = "Hello123World456";
String result = str.replaceAll("\\d+", "");  // "HelloWorld"
```

#### replaceFirst(String regex, String replacement)
```java
String str = "Hello123World456";
String result = str.replaceFirst("\\d+", "");  // "HelloWorld456"
```

### 5. Pattern Flags

Modify regex behavior.

```java
// Case-insensitive
Pattern pattern = Pattern.compile("hello", Pattern.CASE_INSENSITIVE);
Matcher matcher = pattern.matcher("HELLO");
System.out.println(matcher.matches());  // true

// Multiline mode (^ and $ match line boundaries)
Pattern pattern2 = Pattern.compile("^Hello", Pattern.MULTILINE);

// Dotall mode (. matches newline)
Pattern pattern3 = Pattern.compile(".*", Pattern.DOTALL);

// Multiple flags
Pattern pattern4 = Pattern.compile("hello", 
    Pattern.CASE_INSENSITIVE | Pattern.MULTILINE);
```

### 6. Practical Examples

#### Validate Username
```java
public static boolean isValidUsername(String username) {
    // 3-20 characters, alphanumeric and underscore
    String regex = "^[a-zA-Z0-9_]{3,20}$";
    return Pattern.matches(regex, username);
}

System.out.println(isValidUsername("user_123"));  // true
System.out.println(isValidUsername("ab"));        // false (too short)
System.out.println(isValidUsername("user@123"));  // false (invalid char)
```

#### Extract Hashtags
```java
public static List<String> extractHashtags(String text) {
    List<String> hashtags = new ArrayList<>();
    Pattern pattern = Pattern.compile("#\\w+");
    Matcher matcher = pattern.matcher(text);
    
    while (matcher.find()) {
        hashtags.add(matcher.group());
    }
    
    return hashtags;
}

String tweet = "Learning #Java and #Programming is fun! #Code";
List<String> tags = extractHashtags(tweet);
System.out.println(tags);  // [#Java, #Programming, #Code]
```

#### Replace Sensitive Data
```java
public static String maskEmail(String text) {
    String regex = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}";
    return text.replaceAll(regex, "***@***.***");
}

String text = "Contact: user@example.com or admin@test.com";
System.out.println(maskEmail(text));
// Contact: ***@***.*** or ***@***.***
```

#### Count Word Occurrences
```java
public static int countOccurrences(String text, String word) {
    Pattern pattern = Pattern.compile("\\b" + word + "\\b", Pattern.CASE_INSENSITIVE);
    Matcher matcher = pattern.matcher(text);
    
    int count = 0;
    while (matcher.find()) {
        count++;
    }
    
    return count;
}

String text = "Java is great. I love Java. Java programming is fun.";
System.out.println(countOccurrences(text, "Java"));  // 3
```

### Performance Tips

1. **Compile pattern once for reuse**
```java
// Good - compile once
Pattern pattern = Pattern.compile("\\d+");
for (String str : strings) {
    Matcher matcher = pattern.matcher(str);
    // use matcher
}

// Bad - compile repeatedly
for (String str : strings) {
    Pattern.matches("\\d+", str);  // Compiles pattern each time
}
```

2. **Use appropriate method**
```java
// For one-time use
boolean result = Pattern.matches("\\d+", str);

// For multiple uses
Pattern pattern = Pattern.compile("\\d+");
Matcher matcher = pattern.matcher(str);
```

3. **Escape special characters**
```java
// Need to escape backslash in Java strings
String regex = "\\d+";  // Matches digits
String regex2 = "\\.";  // Matches dot (.)
```

---

## Summary

String handling in Java encompasses:

### String, StringBuilder, StringBuffer
- **String**: Immutable, thread-safe, uses String Pool, slower for modifications
- **StringBuilder**: Mutable, not thread-safe, fast, use in single-threaded
- **StringBuffer**: Mutable, thread-safe, moderate speed, use in multi-threaded

### String Methods
- **Length/Access**: `length()`, `charAt()`, `toCharArray()`
- **Comparison**: `equals()`, `equalsIgnoreCase()`, `compareTo()`
- **Search**: `contains()`, `indexOf()`, `startsWith()`, `endsWith()`
- **Extraction**: `substring()`, `split()`
- **Modification**: `concat()`, `replace()`, `trim()`
- **Case**: `toLowerCase()`, `toUpperCase()`
- **Formatting**: `format()`, `join()`

### String Immutability
- Cannot be changed after creation
- Benefits: Security, thread-safety, String Pool, caching
- Use StringBuilder/StringBuffer for frequent modifications

### String Comparison
- **==**: Compares references
- **equals()**: Compares content
- **equalsIgnoreCase()**: Case-insensitive content comparison
- **compareTo()**: Lexicographic comparison
- **Objects.equals()**: Null-safe comparison

### Regular Expressions
- **Pattern**: Compiled regex pattern
- **Matcher**: Performs matching operations
- **Methods**: `matches()`, `find()`, `group()`, `replaceAll()`
- **Use Cases**: Validation, extraction, replacement, searching

### Best Practices
1. Use String for immutable data
2. Use StringBuilder for concatenation in loops
3. Use equals() for content comparison
4. Handle null values safely
5. Compile regex patterns once for reuse
6. Use appropriate methods for better performance

String handling is fundamental to Java programming and mastering these concepts is essential for efficient text processing.

---

# 5. Arrays and Collections

## 🧩 Arrays

An array is a container object that holds a fixed number of values of a single type. Arrays are objects in Java and stored in heap memory.

### Single-Dimensional Arrays

#### Declaration

```java
// Syntax 1
dataType[] arrayName;

// Syntax 2
dataType arrayName[];

// Examples
int[] numbers;
String[] names;
double[] prices;
```

#### Instantiation

```java
// Creating array with size
int[] numbers = new int[5];  // Array of 5 integers (default values: 0)

// Creating and initializing
int[] numbers = {10, 20, 30, 40, 50};

// Alternative syntax
int[] numbers = new int[]{10, 20, 30, 40, 50};
```

#### Accessing Elements

```java
int[] numbers = {10, 20, 30, 40, 50};

// Access by index (0-based)
int first = numbers[0];   // 10
int last = numbers[4];    // 50

// Modify element
numbers[2] = 100;         // [10, 20, 100, 40, 50]

// Array length
int size = numbers.length;  // 5
```

#### Iterating Arrays

```java
int[] numbers = {10, 20, 30, 40, 50};

// Using for loop
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}

// Using enhanced for loop
for (int num : numbers) {
    System.out.println(num);
}

// Using while loop
int i = 0;
while (i < numbers.length) {
    System.out.println(numbers[i]);
    i++;
}
```

#### Default Values

```java
int[] integers = new int[3];       // [0, 0, 0]
double[] doubles = new double[3];  // [0.0, 0.0, 0.0]
boolean[] bools = new boolean[3];  // [false, false, false]
String[] strings = new String[3];  // [null, null, null]
```

### Multidimensional Arrays

#### Two-Dimensional Arrays

```java
// Declaration and instantiation
int[][] matrix = new int[3][4];  // 3 rows, 4 columns

// Declaration and initialization
int[][] matrix = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

// Accessing elements
int element = matrix[0][0];  // 1
int element2 = matrix[2][3]; // 12

// Modifying elements
matrix[1][2] = 100;
```

#### Iterating 2D Arrays

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Using nested for loop
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}

// Using enhanced for loop
for (int[] row : matrix) {
    for (int element : row) {
        System.out.print(element + " ");
    }
    System.out.println();
}
```

#### Jagged Arrays

Arrays with different column sizes.

```java
int[][] jaggedArray = new int[3][];
jaggedArray[0] = new int[2];  // 2 columns
jaggedArray[1] = new int[4];  // 4 columns
jaggedArray[2] = new int[3];  // 3 columns

// Or initialize directly
int[][] jagged = {
    {1, 2},
    {3, 4, 5, 6},
    {7, 8, 9}
};

// Iterating
for (int i = 0; i < jagged.length; i++) {
    for (int j = 0; j < jagged[i].length; j++) {
        System.out.print(jagged[i][j] + " ");
    }
    System.out.println();
}
```

#### Three-Dimensional Arrays

```java
// 3D array
int[][][] cube = new int[3][3][3];

// Initialize
int[][][] cube2 = {
    {
        {1, 2},
        {3, 4}
    },
    {
        {5, 6},
        {7, 8}
    }
};

// Access element
int element = cube2[1][0][1];  // 6
```

### Arrays Class

The `java.util.Arrays` class provides static methods for array manipulation.

#### 1. toString()

Convert array to string representation.

```java
import java.util.Arrays;

int[] arr = {1, 2, 3, 4, 5};
System.out.println(Arrays.toString(arr));  // [1, 2, 3, 4, 5]

// For 2D arrays
int[][] matrix = {{1, 2}, {3, 4}};
System.out.println(Arrays.deepToString(matrix));  // [[1, 2], [3, 4]]
```

#### 2. sort()

Sort array in ascending order.

```java
int[] arr = {5, 2, 8, 1, 9};
Arrays.sort(arr);
System.out.println(Arrays.toString(arr));  // [1, 2, 5, 8, 9]

// Sort range
int[] arr2 = {5, 2, 8, 1, 9};
Arrays.sort(arr2, 1, 4);  // Sort from index 1 to 3
System.out.println(Arrays.toString(arr2));  // [5, 1, 2, 8, 9]

// Sort in descending order (for objects)
Integer[] arr3 = {5, 2, 8, 1, 9};
Arrays.sort(arr3, Collections.reverseOrder());
System.out.println(Arrays.toString(arr3));  // [9, 8, 5, 2, 1]
```

#### 3. binarySearch()

Search for element in sorted array.

```java
int[] arr = {1, 2, 5, 8, 9};
int index = Arrays.binarySearch(arr, 5);  // 2
int notFound = Arrays.binarySearch(arr, 7);  // Negative value

System.out.println(index);     // 2
System.out.println(notFound);  // -4 (insertion point - 1)
```

#### 4. equals()

Compare two arrays for equality.

```java
int[] arr1 = {1, 2, 3};
int[] arr2 = {1, 2, 3};
int[] arr3 = {1, 2, 4};

System.out.println(Arrays.equals(arr1, arr2));  // true
System.out.println(Arrays.equals(arr1, arr3));  // false

// For 2D arrays
int[][] matrix1 = {{1, 2}, {3, 4}};
int[][] matrix2 = {{1, 2}, {3, 4}};
System.out.println(Arrays.deepEquals(matrix1, matrix2));  // true
```

#### 5. fill()

Fill array with specified value.

```java
int[] arr = new int[5];
Arrays.fill(arr, 10);
System.out.println(Arrays.toString(arr));  // [10, 10, 10, 10, 10]

// Fill range
int[] arr2 = new int[5];
Arrays.fill(arr2, 1, 4, 5);
System.out.println(Arrays.toString(arr2));  // [0, 5, 5, 5, 0]
```

#### 6. copyOf()

Copy array to new array.

```java
int[] original = {1, 2, 3, 4, 5};
int[] copy = Arrays.copyOf(original, 3);
System.out.println(Arrays.toString(copy));  // [1, 2, 3]

// Copy with larger size (pads with default values)
int[] larger = Arrays.copyOf(original, 7);
System.out.println(Arrays.toString(larger));  // [1, 2, 3, 4, 5, 0, 0]
```

#### 7. copyOfRange()

Copy range of array.

```java
int[] original = {1, 2, 3, 4, 5};
int[] range = Arrays.copyOfRange(original, 1, 4);
System.out.println(Arrays.toString(range));  // [2, 3, 4]
```

#### 8. asList()

Convert array to fixed-size list.

```java
String[] arr = {"A", "B", "C"};
List<String> list = Arrays.asList(arr);
System.out.println(list);  // [A, B, C]

// Note: List is fixed-size
// list.add("D");  // UnsupportedOperationException
```

#### 9. stream()

Convert array to stream (Java 8+).

```java
int[] arr = {1, 2, 3, 4, 5};
int sum = Arrays.stream(arr).sum();
System.out.println(sum);  // 15

double average = Arrays.stream(arr).average().orElse(0);
System.out.println(average);  // 3.0
```

#### 10. mismatch() (Java 9+)

Find first mismatch between two arrays.

```java
int[] arr1 = {1, 2, 3, 4, 5};
int[] arr2 = {1, 2, 9, 4, 5};

int index = Arrays.mismatch(arr1, arr2);
System.out.println(index);  // 2
```

#### 11. compare() (Java 9+)

Compare two arrays lexicographically.

```java
int[] arr1 = {1, 2, 3};
int[] arr2 = {1, 2, 4};

int result = Arrays.compare(arr1, arr2);
System.out.println(result);  // Negative (arr1 < arr2)
```

### varargs (Variable Arguments)

Variable-length arguments allow methods to accept variable number of arguments.

#### Syntax

```java
returnType methodName(dataType... parameterName) {
    // method body
}
```

#### Examples

```java
// Simple varargs method
public static int sum(int... numbers) {
    int total = 0;
    for (int num : numbers) {
        total += num;
    }
    return total;
}

// Calling with different number of arguments
System.out.println(sum(1, 2));           // 3
System.out.println(sum(1, 2, 3));        // 6
System.out.println(sum(1, 2, 3, 4, 5));  // 15
System.out.println(sum());               // 0 (no arguments)
```

#### varargs with Other Parameters

```java
// varargs must be last parameter
public static void display(String name, int... scores) {
    System.out.println("Name: " + name);
    System.out.print("Scores: ");
    for (int score : scores) {
        System.out.print(score + " ");
    }
    System.out.println();
}

display("Alice", 85, 90, 95);
// Output:
// Name: Alice
// Scores: 85 90 95
```

#### Rules for varargs

1. **Only one varargs parameter per method**
```java
// public void method(int... a, String... b) { }  // Error
```

2. **varargs must be last parameter**
```java
// Valid
public void method(String name, int... scores) { }

// Invalid
// public void method(int... scores, String name) { }  // Error
```

3. **varargs is treated as array**
```java
public static void print(String... args) {
    // args is String[]
    System.out.println(args.length);
    System.out.println(Arrays.toString(args));
}
```

#### Practical Examples

```java
// Find maximum
public static int max(int... numbers) {
    if (numbers.length == 0) {
        throw new IllegalArgumentException("No arguments provided");
    }
    int maximum = numbers[0];
    for (int num : numbers) {
        if (num > maximum) {
            maximum = num;
        }
    }
    return maximum;
}

System.out.println(max(5, 2, 8, 1, 9));  // 9

// Concatenate strings
public static String concat(String separator, String... strings) {
    return String.join(separator, strings);
}

System.out.println(concat(", ", "Apple", "Banana", "Cherry"));
// Apple, Banana, Cherry
```

### Array Limitations

1. **Fixed size**: Cannot change size after creation
2. **Single type**: Can only store one data type
3. **No built-in methods**: Limited functionality without Arrays class
4. **Manual operations**: Need loops for most operations

### Arrays vs Collections

| Feature | Arrays | Collections |
|---------|--------|-------------|
| Size | Fixed | Dynamic |
| Performance | Faster | Slightly slower |
| Primitives | Can store | Only objects (autoboxing) |
| Type | Homogeneous | Homogeneous |
| Generics | No | Yes |
| Built-in methods | Limited | Many utility methods |

---

## 🧺 Collections Framework

The Java Collections Framework provides a unified architecture for representing and manipulating collections of objects.

### Collection Hierarchy

```
Collection (interface)
├── List (interface)
│   ├── ArrayList (class)
│   ├── LinkedList (class)
│   ├── Vector (class)
│   └── Stack (class)
├── Set (interface)
│   ├── HashSet (class)
│   ├── LinkedHashSet (class)
│   └── SortedSet (interface)
│       └── TreeSet (class)
└── Queue (interface)
    ├── PriorityQueue (class)
    └── Deque (interface)
        └── ArrayDeque (class)

Map (interface) - Separate hierarchy
├── HashMap (class)
├── LinkedHashMap (class)
├── Hashtable (class)
└── SortedMap (interface)
    └── TreeMap (class)
```

---

## List Interface

Ordered collection that allows duplicates. Elements can be accessed by index.

### ArrayList

Resizable array implementation. Best for frequent read operations.

**Characteristics:**
- Backed by dynamic array
- Allows duplicates and null
- Maintains insertion order
- Not synchronized (not thread-safe)
- Fast random access (O(1))
- Slow insertion/deletion in middle (O(n))

#### Creating ArrayList

```java
import java.util.ArrayList;

// Empty list
ArrayList<String> list = new ArrayList<>();

// With initial capacity
ArrayList<Integer> numbers = new ArrayList<>(20);

// From another collection
ArrayList<String> copy = new ArrayList<>(list);

// Using Arrays.asList()
ArrayList<String> fruits = new ArrayList<>(Arrays.asList("Apple", "Banana", "Cherry"));
```

#### Common Operations

```java
ArrayList<String> list = new ArrayList<>();

// Add elements
list.add("Apple");           // [Apple]
list.add("Banana");          // [Apple, Banana]
list.add(1, "Cherry");       // [Apple, Cherry, Banana]

// Get element
String fruit = list.get(0);  // Apple

// Set/Replace element
list.set(1, "Mango");        // [Apple, Mango, Banana]

// Remove element
list.remove("Banana");       // [Apple, Mango]
list.remove(0);              // [Mango]

// Size
int size = list.size();      // 1

// Contains
boolean has = list.contains("Mango");  // true

// Clear
list.clear();                // []

// isEmpty
boolean empty = list.isEmpty();  // true
```

#### Iterating ArrayList

```java
ArrayList<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));

// Using for loop
for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i));
}

// Using enhanced for loop
for (String item : list) {
    System.out.println(item);
}

// Using Iterator
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}

// Using forEach (Java 8+)
list.forEach(item -> System.out.println(item));

// Using method reference
list.forEach(System.out::println);
```

### LinkedList

Doubly-linked list implementation. Best for frequent insertion/deletion.

**Characteristics:**
- Backed by doubly-linked list
- Allows duplicates and null
- Maintains insertion order
- Not synchronized
- Slow random access (O(n))
- Fast insertion/deletion (O(1))
- Implements both List and Deque

#### Creating LinkedList

```java
import java.util.LinkedList;

LinkedList<String> list = new LinkedList<>();
LinkedList<Integer> numbers = new LinkedList<>(Arrays.asList(1, 2, 3));
```

#### Common Operations

```java
LinkedList<String> list = new LinkedList<>();

// Add elements
list.add("A");
list.add("B");
list.addFirst("First");     // Add at beginning
list.addLast("Last");       // Add at end

// Get elements
String first = list.getFirst();
String last = list.getLast();
String element = list.get(1);

// Remove elements
list.removeFirst();
list.removeLast();
list.remove("B");

// Peek (view without removing)
String peek = list.peek();      // First element
String peekFirst = list.peekFirst();
String peekLast = list.peekLast();

// Poll (retrieve and remove)
String poll = list.poll();      // First element
String pollFirst = list.pollFirst();
String pollLast = list.pollLast();
```

### Vector

Synchronized version of ArrayList. Thread-safe but slower.

**Characteristics:**
- Synchronized (thread-safe)
- Legacy class (from Java 1.0)
- Similar to ArrayList
- Slower than ArrayList
- Doubles size when capacity exceeded

#### Creating Vector

```java
import java.util.Vector;

Vector<String> vector = new Vector<>();
Vector<Integer> numbers = new Vector<>(20);  // Initial capacity
```

#### Common Operations

```java
Vector<String> vector = new Vector<>();

// Add elements
vector.add("A");
vector.addElement("B");  // Legacy method

// Get element
String element = vector.get(0);
String element2 = vector.elementAt(1);  // Legacy method

// Size and capacity
int size = vector.size();
int capacity = vector.capacity();

// Other operations similar to ArrayList
```

### Stack

LIFO (Last-In-First-Out) data structure. Extends Vector.

**Characteristics:**
- Extends Vector
- Synchronized (thread-safe)
- Legacy class
- LIFO operations

#### Creating Stack

```java
import java.util.Stack;

Stack<Integer> stack = new Stack<>();
```

#### Common Operations

```java
Stack<String> stack = new Stack<>();

// Push (add to top)
stack.push("A");
stack.push("B");
stack.push("C");
// Stack: [A, B, C] (C is top)

// Pop (remove from top)
String top = stack.pop();  // C
// Stack: [A, B]

// Peek (view top without removing)
String peek = stack.peek();  // B

// Empty check
boolean empty = stack.empty();  // false

// Search (returns position from top, 1-based)
int position = stack.search("A");  // 2
```

### List Comparison

| Feature | ArrayList | LinkedList | Vector | Stack |
|---------|-----------|------------|--------|-------|
| **Structure** | Dynamic array | Doubly-linked list | Dynamic array | Extends Vector |
| **Random Access** | Fast O(1) | Slow O(n) | Fast O(1) | Fast O(1) |
| **Insertion/Deletion** | Slow O(n) | Fast O(1) | Slow O(n) | Fast O(1) |
| **Thread-Safe** | No | No | Yes | Yes |
| **Performance** | Fast | Moderate | Slow | Slow |
| **Memory** | Less | More | Less | Less |
| **Use Case** | Frequent access | Frequent insertion | Thread-safe list | LIFO operations |

---

## Set Interface

Collection that doesn't allow duplicates. No index-based access.

### HashSet

Unordered collection using hash table.

**Characteristics:**
- Backed by HashMap
- No duplicates
- Allows one null
- No ordering
- Not synchronized
- Fast operations O(1)

#### Creating HashSet

```java
import java.util.HashSet;

HashSet<String> set = new HashSet<>();
HashSet<Integer> numbers = new HashSet<>(Arrays.asList(1, 2, 3));
HashSet<String> set2 = new HashSet<>(20);  // Initial capacity
```

#### Common Operations

```java
HashSet<String> set = new HashSet<>();

// Add elements
set.add("Apple");        // true
set.add("Banana");       // true
set.add("Apple");        // false (duplicate)
System.out.println(set); // [Apple, Banana] (order not guaranteed)

// Remove
set.remove("Apple");

// Contains
boolean has = set.contains("Banana");  // true

// Size
int size = set.size();

// Clear
set.clear();

// isEmpty
boolean empty = set.isEmpty();
```

#### Set Operations

```java
HashSet<Integer> set1 = new HashSet<>(Arrays.asList(1, 2, 3, 4));
HashSet<Integer> set2 = new HashSet<>(Arrays.asList(3, 4, 5, 6));

// Union
HashSet<Integer> union = new HashSet<>(set1);
union.addAll(set2);
System.out.println(union);  // [1, 2, 3, 4, 5, 6]

// Intersection
HashSet<Integer> intersection = new HashSet<>(set1);
intersection.retainAll(set2);
System.out.println(intersection);  // [3, 4]

// Difference
HashSet<Integer> difference = new HashSet<>(set1);
difference.removeAll(set2);
System.out.println(difference);  // [1, 2]
```

### LinkedHashSet

Maintains insertion order using linked list.

**Characteristics:**
- Extends HashSet
- Maintains insertion order
- Slightly slower than HashSet
- No duplicates
- Allows one null

#### Creating LinkedHashSet

```java
import java.util.LinkedHashSet;

LinkedHashSet<String> set = new LinkedHashSet<>();
LinkedHashSet<Integer> numbers = new LinkedHashSet<>(Arrays.asList(3, 1, 2));
System.out.println(numbers);  // [3, 1, 2] (insertion order maintained)
```

### TreeSet

Sorted collection using Red-Black tree.

**Characteristics:**
- Implements SortedSet
- Sorted in natural order or by Comparator
- No duplicates
- No null (throws NullPointerException)
- Slower than HashSet O(log n)

#### Creating TreeSet

```java
import java.util.TreeSet;

TreeSet<Integer> set = new TreeSet<>();
TreeSet<String> words = new TreeSet<>(Arrays.asList("Dog", "Cat", "Ant", "Bear"));
System.out.println(words);  // [Ant, Bear, Cat, Dog] (sorted)

// With custom comparator
TreeSet<Integer> descending = new TreeSet<>(Collections.reverseOrder());
descending.addAll(Arrays.asList(5, 2, 8, 1));
System.out.println(descending);  // [8, 5, 2, 1]
```

#### TreeSet Specific Methods

```java
TreeSet<Integer> set = new TreeSet<>(Arrays.asList(10, 20, 30, 40, 50));

// First and last
System.out.println(set.first());  // 10
System.out.println(set.last());   // 50

// Ceiling (>= element)
System.out.println(set.ceiling(25));  // 30

// Floor (<= element)
System.out.println(set.floor(25));    // 20

// Higher (> element)
System.out.println(set.higher(30));   // 40

// Lower (< element)
System.out.println(set.lower(30));    // 20

// Subset
System.out.println(set.subSet(20, 40));  // [20, 30]

// HeadSet (< element)
System.out.println(set.headSet(30));     // [10, 20]

// TailSet (>= element)
System.out.println(set.tailSet(30));     // [30, 40, 50]
```

### Set Comparison

| Feature | HashSet | LinkedHashSet | TreeSet |
|---------|---------|---------------|---------|
| **Ordering** | None | Insertion order | Sorted |
| **Performance** | O(1) | O(1) | O(log n) |
| **Null** | One null | One null | No null |
| **Use Case** | Fast lookups | Maintain order | Sorted data |

---

## Map Interface

Key-value pairs. Keys are unique, values can be duplicate.

### HashMap

Unordered key-value pairs using hash table.

**Characteristics:**
- Backed by hash table
- Unique keys
- Allows one null key, multiple null values
- No ordering
- Not synchronized
- Fast operations O(1)

#### Creating HashMap

```java
import java.util.HashMap;

HashMap<String, Integer> map = new HashMap<>();
HashMap<String, String> copy = new HashMap<>(map);
HashMap<Integer, String> map2 = new HashMap<>(20);  // Initial capacity
```

#### Common Operations

```java
HashMap<String, Integer> map = new HashMap<>();

// Put (add/update)
map.put("Alice", 25);
map.put("Bob", 30);
map.put("Charlie", 35);

// Get
int age = map.get("Alice");  // 25
int unknown = map.getOrDefault("David", 0);  // 0

// Contains
boolean hasKey = map.containsKey("Alice");      // true
boolean hasValue = map.containsValue(30);       // true

// Remove
map.remove("Bob");
map.remove("Alice", 25);  // Remove only if value matches

// Size
int size = map.size();

// isEmpty
boolean empty = map.isEmpty();

// putIfAbsent (Java 8+)
map.putIfAbsent("Alice", 20);  // Won't replace existing value

// Replace (Java 8+)
map.replace("Charlie", 40);
map.replace("Charlie", 35, 40);  // Replace only if old value matches

// Clear
map.clear();
```

#### Iterating HashMap

```java
HashMap<String, Integer> map = new HashMap<>();
map.put("Alice", 25);
map.put("Bob", 30);
map.put("Charlie", 35);

// Using entrySet()
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " = " + entry.getValue());
}

// Using keySet()
for (String key : map.keySet()) {
    System.out.println(key + " = " + map.get(key));
}

// Using values()
for (Integer value : map.values()) {
    System.out.println(value);
}

// Using forEach (Java 8+)
map.forEach((key, value) -> System.out.println(key + " = " + value));

// Using Iterator
Iterator<Map.Entry<String, Integer>> iterator = map.entrySet().iterator();
while (iterator.hasNext()) {
    Map.Entry<String, Integer> entry = iterator.next();
    System.out.println(entry.getKey() + " = " + entry.getValue());
}
```

### LinkedHashMap

Maintains insertion order using linked list.

**Characteristics:**
- Extends HashMap
- Maintains insertion order (or access order)
- Slightly slower than HashMap
- Allows one null key

#### Creating LinkedHashMap

```java
import java.util.LinkedHashMap;

LinkedHashMap<String, Integer> map = new LinkedHashMap<>();
map.put("C", 3);
map.put("A", 1);
map.put("B", 2);
System.out.println(map);  // {C=3, A=1, B=2} (insertion order)

// Access order (LRU cache)
LinkedHashMap<String, Integer> lru = new LinkedHashMap<>(16, 0.75f, true);
```

### TreeMap

Sorted key-value pairs using Red-Black tree.

**Characteristics:**
- Implements SortedMap
- Sorted by keys (natural order or Comparator)
- No null keys
- Slower than HashMap O(log n)

#### Creating TreeMap

```java
import java.util.TreeMap;

TreeMap<String, Integer> map = new TreeMap<>();
map.put("Charlie", 35);
map.put("Alice", 25);
map.put("Bob", 30);
System.out.println(map);  // {Alice=25, Bob=30, Charlie=35} (sorted by keys)

// With custom comparator
TreeMap<String, Integer> reverse = new TreeMap<>(Collections.reverseOrder());
```

#### TreeMap Specific Methods

```java
TreeMap<Integer, String> map = new TreeMap<>();
map.put(10, "Ten");
map.put(20, "Twenty");
map.put(30, "Thirty");
map.put(40, "Forty");
map.put(50, "Fifty");

// First and last
System.out.println(map.firstKey());   // 10
System.out.println(map.lastKey());    // 50
System.out.println(map.firstEntry()); // 10=Ten
System.out.println(map.lastEntry());  // 50=Fifty

// Ceiling, Floor, Higher, Lower
System.out.println(map.ceilingKey(25));   // 30
System.out.println(map.floorKey(25));     // 20
System.out.println(map.higherKey(30));    // 40
System.out.println(map.lowerKey(30));     // 20

// SubMap
System.out.println(map.subMap(20, 40));  // {20=Twenty, 30=Thirty}

// HeadMap and TailMap
System.out.println(map.headMap(30));     // {10=Ten, 20=Twenty}
System.out.println(map.tailMap(30));     // {30=Thirty, 40=Forty, 50=Fifty}
```

### Hashtable

Synchronized version of HashMap. Legacy class.

**Characteristics:**
- Synchronized (thread-safe)
- Legacy class (Java 1.0)
- No null keys or values
- Slower than HashMap

#### Creating Hashtable

```java
import java.util.Hashtable;

Hashtable<String, Integer> table = new Hashtable<>();
table.put("Alice", 25);
table.put("Bob", 30);
// table.put(null, 35);  // NullPointerException
```

### Map Comparison

| Feature | HashMap | LinkedHashMap | TreeMap | Hashtable |
|---------|---------|---------------|---------|-----------|
| **Ordering** | None | Insertion | Sorted (keys) | None |
| **Performance** | O(1) | O(1) | O(log n) | O(1) |
| **Null Key** | One | One | No | No |
| **Null Values** | Yes | Yes | Yes | No |
| **Thread-Safe** | No | No | No | Yes |
| **Use Case** | Fast lookups | Maintain order | Sorted keys | Thread-safe |

---

## Queue Interface

FIFO (First-In-First-Out) data structure.

### PriorityQueue

Priority-based queue (min-heap by default).

**Characteristics:**
- Based on priority (natural order or Comparator)
- Not FIFO (elements ordered by priority)
- No null
- Not thread-safe
- O(log n) for add/remove

#### Creating PriorityQueue

```java
import java.util.PriorityQueue;

PriorityQueue<Integer> pq = new PriorityQueue<>();
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
```

#### Common Operations

```java
PriorityQueue<Integer> pq = new PriorityQueue<>();

// Add elements
pq.add(30);
pq.add(10);
pq.add(20);
pq.offer(5);  // Preferred method

// Peek (view without removing)
System.out.println(pq.peek());  // 5 (min element)

// Poll (retrieve and remove)
System.out.println(pq.poll());  // 5
System.out.println(pq.poll());  // 10
System.out.println(pq.poll());  // 20

// Size
int size = pq.size();
```

#### Custom Priority

```java
// Max heap
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
maxHeap.addAll(Arrays.asList(5, 2, 8, 1, 9));
System.out.println(maxHeap.poll());  // 9 (max)

// Custom objects
class Task {
    String name;
    int priority;
    
    Task(String name, int priority) {
        this.name = name;
        this.priority = priority;
    }
}

PriorityQueue<Task> tasks = new PriorityQueue<>((t1, t2) -> t1.priority - t2.priority);
tasks.add(new Task("Low", 3));
tasks.add(new Task("High", 1));
tasks.add(new Task("Medium", 2));
```

### Deque Interface

Double-ended queue. Elements can be added/removed from both ends.

**Implementations:**
- ArrayDeque
- LinkedList

#### ArrayDeque

Resizable array implementation of Deque.

```java
import java.util.ArrayDeque;
import java.util.Deque;

Deque<String> deque = new ArrayDeque<>();

// Add at front
deque.addFirst("A");
deque.offerFirst("B");

// Add at rear
deque.addLast("C");
deque.offerLast("D");

// Remove from front
String first = deque.removeFirst();
String polled = deque.pollFirst();

// Remove from rear
String last = deque.removeLast();
String polledLast = deque.pollLast();

// Peek
String peekFirst = deque.peekFirst();
String peekLast = deque.peekLast();
```

---

## Iterator, ListIterator, Enumeration

### Iterator

Used to traverse collections.

**Methods:**
- `hasNext()`: Check if more elements exist
- `next()`: Get next element
- `remove()`: Remove current element

```java
ArrayList<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));

Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    String element = iterator.next();
    System.out.println(element);
    
    // Remove element
    if (element.equals("B")) {
        iterator.remove();
    }
}

System.out.println(list);  // [A, C]
```

### ListIterator

Bidirectional iterator for List.

**Additional Methods:**
- `hasPrevious()`: Check if previous element exists
- `previous()`: Get previous element
- `nextIndex()`: Get index of next element
- `previousIndex()`: Get index of previous element
- `set()`: Replace current element
- `add()`: Add element

```java
ArrayList<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));

ListIterator<String> iterator = list.listIterator();

// Forward iteration
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}

// Backward iteration
while (iterator.hasPrevious()) {
    System.out.println(iterator.previous());
}

// Modify during iteration
ListIterator<String> it = list.listIterator();
while (it.hasNext()) {
    String element = it.next();
    if (element.equals("B")) {
        it.set("B_Modified");  // Replace
        it.add("B2");          // Add after current
    }
}
```

### Enumeration

Legacy interface for traversing (read-only).

**Methods:**
- `hasMoreElements()`: Check if more elements exist
- `nextElement()`: Get next element

```java
Vector<String> vector = new Vector<>(Arrays.asList("A", "B", "C"));

Enumeration<String> enumeration = vector.elements();
while (enumeration.hasMoreElements()) {
    System.out.println(enumeration.nextElement());
}
```

### Comparison

| Feature | Iterator | ListIterator | Enumeration |
|---------|----------|--------------|-------------|
| **Direction** | Forward only | Bidirectional | Forward only |
| **Remove** | Yes | Yes | No |
| **Add** | No | Yes | No |
| **Set** | No | Yes | No |
| **Collections** | All | List only | Legacy (Vector, Hashtable) |

---

## Comparable vs Comparator

### Comparable Interface

Used for natural ordering. Class implements `Comparable` interface.

**Method:** `compareTo(T o)`

```java
class Student implements Comparable<Student> {
    String name;
    int age;
    
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public int compareTo(Student other) {
        return this.age - other.age;  // Sort by age
    }
    
    @Override
    public String toString() {
        return name + "(" + age + ")";
    }
}

// Usage
List<Student> students = new ArrayList<>();
students.add(new Student("Alice", 25));
students.add(new Student("Bob", 20));
students.add(new Student("Charlie", 30));

Collections.sort(students);  // Uses compareTo()
System.out.println(students);  // [Bob(20), Alice(25), Charlie(30)]
```

### Comparator Interface

Used for custom ordering. External class implements `Comparator` interface.

**Method:** `compare(T o1, T o2)`

```java
class Student {
    String name;
    int age;
    
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public String toString() {
        return name + "(" + age + ")";
    }
}

// Comparator for sorting by name
class NameComparator implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        return s1.name.compareTo(s2.name);
    }
}

// Comparator for sorting by age
class AgeComparator implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        return s1.age - s2.age;
    }
}

// Usage
List<Student> students = new ArrayList<>();
students.add(new Student("Charlie", 30));
students.add(new Student("Alice", 25));
students.add(new Student("Bob", 20));

// Sort by name
Collections.sort(students, new NameComparator());
System.out.println(students);  // [Alice(25), Bob(20), Charlie(30)]

// Sort by age
Collections.sort(students, new AgeComparator());
System.out.println(students);  // [Bob(20), Alice(25), Charlie(30)]
```

### Lambda Expressions with Comparator (Java 8+)

```java
List<Student> students = new ArrayList<>();
students.add(new Student("Charlie", 30));
students.add(new Student("Alice", 25));
students.add(new Student("Bob", 20));

// Sort by age using lambda
students.sort((s1, s2) -> s1.age - s2.age);

// Sort by name using lambda
students.sort((s1, s2) -> s1.name.compareTo(s2.name));

// Using Comparator.comparing()
students.sort(Comparator.comparing(s -> s.age));
students.sort(Comparator.comparing(s -> s.name));

// Using method reference
students.sort(Comparator.comparing(Student::getName));
students.sort(Comparator.comparing(Student::getAge));

// Reverse order
students.sort(Comparator.comparing(Student::getAge).reversed());

// Multiple criteria
students.sort(Comparator.comparing(Student::getAge)
                        .thenComparing(Student::getName));
```

### Comparable vs Comparator

| Feature | Comparable | Comparator |
|---------|-----------|------------|
| **Package** | java.lang | java.util |
| **Method** | compareTo(T o) | compare(T o1, T o2) |
| **Implementation** | Modify original class | External class |
| **Sorting** | Single sequence | Multiple sequences |
| **Use** | Natural ordering | Custom ordering |
| **Example** | String, Integer, Date | Custom sorting logic |

---

## Stream API and Lambda Expressions (Java 8)

### Lambda Expressions

Anonymous functions with concise syntax.

**Syntax:** `(parameters) -> expression` or `(parameters) -> { statements; }`

#### Examples

```java
// No parameters
Runnable r = () -> System.out.println("Hello");

// Single parameter (parentheses optional)
Consumer<String> consumer = s -> System.out.println(s);
Consumer<String> consumer2 = (s) -> System.out.println(s);

// Multiple parameters
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;

// Multiple statements
BiFunction<Integer, Integer, Integer> multiply = (a, b) -> {
    int result = a * b;
    System.out.println("Result: " + result);
    return result;
};
```

#### Functional Interfaces

Interface with single abstract method (SAM).

```java
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

// Using lambda
Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;

System.out.println(add.calculate(5, 3));      // 8
System.out.println(multiply.calculate(5, 3)); // 15
```

#### Common Functional Interfaces

```java
// Predicate<T> - boolean test(T t)
Predicate<Integer> isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4));  // true

// Function<T, R> - R apply(T t)
Function<String, Integer> length = s -> s.length();
System.out.println(length.apply("Hello"));  // 5

// Consumer<T> - void accept(T t)
Consumer<String> print = s -> System.out.println(s);
print.accept("Hello");  // Hello

// Supplier<T> - T get()
Supplier<Double> random = () -> Math.random();
System.out.println(random.get());

// BiFunction<T, U, R> - R apply(T t, U u)
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
System.out.println(add.apply(5, 3));  // 8
```

### Stream API

Sequence of elements supporting sequential and parallel operations.

#### Creating Streams

```java
// From collection
List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
Stream<Integer> stream = list.stream();

// From array
int[] arr = {1, 2, 3, 4, 5};
IntStream stream2 = Arrays.stream(arr);

// Using Stream.of()
Stream<String> stream3 = Stream.of("A", "B", "C");

// Infinite streams
Stream<Integer> infinite = Stream.iterate(0, n -> n + 1);
Stream<Double> random = Stream.generate(Math::random);

// Empty stream
Stream<String> empty = Stream.empty();

// Range
IntStream range = IntStream.range(1, 5);      // 1, 2, 3, 4
IntStream rangeClosed = IntStream.rangeClosed(1, 5);  // 1, 2, 3, 4, 5
```

#### Intermediate Operations

Operations that return a Stream (can be chained).

##### filter()

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter even numbers
List<Integer> even = numbers.stream()
                            .filter(n -> n % 2 == 0)
                            .collect(Collectors.toList());
System.out.println(even);  // [2, 4, 6, 8, 10]
```

##### map()

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

// Convert to uppercase
List<String> upper = names.stream()
                          .map(String::toUpperCase)
                          .collect(Collectors.toList());
System.out.println(upper);  // [ALICE, BOB, CHARLIE]

// Get lengths
List<Integer> lengths = names.stream()
                             .map(String::length)
                             .collect(Collectors.toList());
System.out.println(lengths);  // [5, 3, 7]
```

##### flatMap()

```java
List<List<Integer>> nested = Arrays.asList(
    Arrays.asList(1, 2),
    Arrays.asList(3, 4),
    Arrays.asList(5, 6)
);

// Flatten nested lists
List<Integer> flattened = nested.stream()
                                 .flatMap(List::stream)
                                 .collect(Collectors.toList());
System.out.println(flattened);  // [1, 2, 3, 4, 5, 6]
```

##### distinct()

```java
List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 3, 3, 4, 5, 5);

List<Integer> unique = numbers.stream()
                              .distinct()
                              .collect(Collectors.toList());
System.out.println(unique);  // [1, 2, 3, 4, 5]
```

##### sorted()

```java
List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 9);

// Natural order
List<Integer> sorted = numbers.stream()
                              .sorted()
                              .collect(Collectors.toList());
System.out.println(sorted);  // [1, 2, 5, 8, 9]

// Custom order
List<Integer> reversed = numbers.stream()
                                .sorted(Comparator.reverseOrder())
                                .collect(Collectors.toList());
System.out.println(reversed);  // [9, 8, 5, 2, 1]
```

##### limit() and skip()

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// First 5 elements
List<Integer> first5 = numbers.stream()
                              .limit(5)
                              .collect(Collectors.toList());
System.out.println(first5);  // [1, 2, 3, 4, 5]

// Skip first 5, take next 3
List<Integer> subset = numbers.stream()
                              .skip(5)
                              .limit(3)
                              .collect(Collectors.toList());
System.out.println(subset);  // [6, 7, 8]
```

##### peek()

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

numbers.stream()
       .peek(n -> System.out.println("Original: " + n))
       .map(n -> n * 2)
       .peek(n -> System.out.println("Doubled: " + n))
       .collect(Collectors.toList());
```

#### Terminal Operations

Operations that produce a result or side-effect (ends the stream).

##### forEach()

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

names.stream().forEach(System.out::println);
// Output:
// Alice
// Bob
// Charlie
```

##### collect()

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

// To List
List<String> list = names.stream().collect(Collectors.toList());

// To Set
Set<String> set = names.stream().collect(Collectors.toSet());

// To Map
Map<String, Integer> map = names.stream()
    .collect(Collectors.toMap(name -> name, String::length));

// Joining strings
String joined = names.stream().collect(Collectors.joining(", "));
System.out.println(joined);  // Alice, Bob, Charlie

// Grouping by length
Map<Integer, List<String>> grouped = names.stream()
    .collect(Collectors.groupingBy(String::length));
System.out.println(grouped);  // {3=[Bob], 5=[Alice], 7=[Charlie]}
```

##### reduce()

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Sum
int sum = numbers.stream().reduce(0, (a, b) -> a + b);
System.out.println(sum);  // 15

// Product
int product = numbers.stream().reduce(1, (a, b) -> a * b);
System.out.println(product);  // 120

// Max
Optional<Integer> max = numbers.stream().reduce((a, b) -> a > b ? a : b);
System.out.println(max.get());  // 5
```

##### count()

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

long count = numbers.stream()
                    .filter(n -> n % 2 == 0)
                    .count();
System.out.println(count);  // 2
```

##### anyMatch(), allMatch(), noneMatch()

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

boolean anyEven = numbers.stream().anyMatch(n -> n % 2 == 0);
System.out.println(anyEven);  // true

boolean allEven = numbers.stream().allMatch(n -> n % 2 == 0);
System.out.println(allEven);  // false

boolean noneNegative = numbers.stream().noneMatch(n -> n < 0);
System.out.println(noneNegative);  // true
```

##### findFirst(), findAny()

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

Optional<Integer> first = numbers.stream()
                                 .filter(n -> n % 2 == 0)
                                 .findFirst();
System.out.println(first.get());  // 2

Optional<Integer> any = numbers.stream()
                               .filter(n -> n % 2 == 0)
                               .findAny();
System.out.println(any.get());  // 2 (or any even number)
```

##### min(), max()

```java
List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 9);

Optional<Integer> min = numbers.stream().min(Integer::compareTo);
System.out.println(min.get());  // 1

Optional<Integer> max = numbers.stream().max(Integer::compareTo);
System.out.println(max.get());  // 9
```

##### sum(), average() (IntStream, DoubleStream, LongStream)

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

int sum = numbers.stream().mapToInt(Integer::intValue).sum();
System.out.println(sum);  // 15

double average = numbers.stream().mapToInt(Integer::intValue).average().orElse(0);
System.out.println(average);  // 3.0
```

### Practical Stream Examples

#### Example 1: Employee Processing

```java
class Employee {
    String name;
    int age;
    double salary;
    String department;
    
    Employee(String name, int age, double salary, String department) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.department = department;
    }
    
    // Getters
}

List<Employee> employees = Arrays.asList(
    new Employee("Alice", 25, 50000, "IT"),
    new Employee("Bob", 30, 60000, "HR"),
    new Employee("Charlie", 35, 70000, "IT"),
    new Employee("David", 28, 55000, "Finance")
);

// Filter IT employees with salary > 50000
List<Employee> itEmployees = employees.stream()
    .filter(e -> e.department.equals("IT"))
    .filter(e -> e.salary > 50000)
    .collect(Collectors.toList());

// Average salary by department
Map<String, Double> avgSalary = employees.stream()
    .collect(Collectors.groupingBy(
        e -> e.department,
        Collectors.averagingDouble(e -> e.salary)
    ));

// Names of employees sorted by age
List<String> names = employees.stream()
    .sorted(Comparator.comparing(e -> e.age))
    .map(e -> e.name)
    .collect(Collectors.toList());
```

#### Example 2: String Processing

```java
List<String> words = Arrays.asList("apple", "banana", "cherry", "date", "elderberry");

// Words starting with 'a' or 'c', uppercase
List<String> filtered = words.stream()
    .filter(w -> w.startsWith("a") || w.startsWith("c"))
    .map(String::toUpperCase)
    .sorted()
    .collect(Collectors.toList());
System.out.println(filtered);  // [APPLE, CHERRY]

// Total length of all words
int totalLength = words.stream()
    .mapToInt(String::length)
    .sum();
System.out.println(totalLength);  // 35
```

#### Example 3: Number Processing

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Sum of squares of even numbers
int sumOfSquares = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .reduce(0, Integer::sum);
System.out.println(sumOfSquares);  // 220

// Partition into even and odd
Map<Boolean, List<Integer>> partitioned = numbers.stream()
    .collect(Collectors.partitioningBy(n -> n % 2 == 0));
System.out.println(partitioned);
// {false=[1, 3, 5, 7, 9], true=[2, 4, 6, 8, 10]}
```

### Method References

Shorthand notation for lambda expressions.

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

// Lambda
names.forEach(name -> System.out.println(name));

// Method reference
names.forEach(System.out::println);

// Types of method references:
// 1. Static method: ClassName::staticMethod
Function<String, Integer> parseInt = Integer::parseInt;

// 2. Instance method of particular object: instance::instanceMethod
String str = "Hello";
Supplier<Integer> length = str::length;

// 3. Instance method of arbitrary object: ClassName::instanceMethod
Function<String, Integer> length2 = String::length;

// 4. Constructor: ClassName::new
Supplier<ArrayList<String>> listSupplier = ArrayList::new;
```

---

## Summary

Arrays and Collections in Java provide powerful data structures:

### Arrays
- **Fixed size**, homogeneous, fast access
- **Single-dimensional**: `int[] arr = {1, 2, 3}`
- **Multi-dimensional**: `int[][] matrix = {{1, 2}, {3, 4}}`
- **Arrays class**: `sort()`, `binarySearch()`, `equals()`, `fill()`, `copyOf()`
- **varargs**: Variable-length arguments `method(int... args)`

### Collections Framework
- **List**: Ordered, allows duplicates
  - ArrayList: Fast access, slow insertion
  - LinkedList: Fast insertion, slow access
  - Vector/Stack: Synchronized, legacy
  
- **Set**: Unordered, no duplicates
  - HashSet: Fast, no order
  - LinkedHashSet: Maintains insertion order
  - TreeSet: Sorted, slower
  
- **Map**: Key-value pairs
  - HashMap: Fast, no order
  - LinkedHashMap: Maintains insertion order
  - TreeMap: Sorted by keys
  - Hashtable: Synchronized, legacy
  
- **Queue**: FIFO operations
  - PriorityQueue: Priority-based
  - Deque: Double-ended

### Iteration
- **Iterator**: Forward traversal, can remove
- **ListIterator**: Bidirectional, can modify
- **Enumeration**: Legacy, read-only

### Sorting
- **Comparable**: Natural ordering in class
- **Comparator**: Custom ordering externally

### Stream API (Java 8+)
- **Lambda**: Concise function syntax
- **Intermediate**: `filter()`, `map()`, `sorted()`, `distinct()`
- **Terminal**: `collect()`, `forEach()`, `reduce()`, `count()`
- **Functional Interfaces**: Predicate, Function, Consumer, Supplier

### Best Practices
1. Use ArrayList for random access
2. Use LinkedList for frequent insertion/deletion
3. Use HashSet for unique elements
4. Use TreeSet for sorted unique elements
5. Use HashMap for key-value lookups
6. Use Stream API for declarative data processing
7. Use method references for cleaner code

Collections provide flexible, reusable data structures that are essential for Java programming.

---

# 6. Exception Handling

Exception handling is a mechanism to handle runtime errors, maintaining the normal flow of program execution. An exception is an unwanted or unexpected event that occurs during program execution and disrupts the normal flow.

## Exception Hierarchy

```
Throwable (class)
├── Error (class)
│   ├── OutOfMemoryError
│   ├── StackOverflowError
│   └── VirtualMachineError
└── Exception (class)
    ├── IOException (checked)
    ├── SQLException (checked)
    ├── ClassNotFoundException (checked)
    └── RuntimeException (unchecked)
        ├── NullPointerException
        ├── ArrayIndexOutOfBoundsException
        ├── ArithmeticException
        ├── IllegalArgumentException
        └── NumberFormatException
```

### Key Classes

- **Throwable**: Root class for all exceptions and errors
- **Error**: Serious problems that applications shouldn't catch (e.g., OutOfMemoryError)
- **Exception**: Conditions that applications might want to catch
- **RuntimeException**: Unchecked exceptions (programming errors)

---

## Types of Exceptions

### 1. Checked Exceptions

Exceptions checked at compile-time. Must be handled or declared.

**Characteristics:**
- Checked by compiler
- Must use try-catch or throws
- Occur due to external factors (file not found, network issues, etc.)
- Subclasses of Exception (except RuntimeException)

**Examples:**

#### IOException

```java
import java.io.*;

public class CheckedExample {
    public static void main(String[] args) {
        // Must handle or declare
        try {
            FileReader file = new FileReader("file.txt");
            BufferedReader reader = new BufferedReader(file);
            String line = reader.readLine();
            System.out.println(line);
            reader.close();
        } catch (IOException e) {
            System.out.println("File not found: " + e.getMessage());
        }
    }
}
```

#### SQLException

```java
import java.sql.*;

public class DatabaseExample {
    public void connectDatabase() {
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/db");
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM users");
        } catch (SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        }
    }
}
```

#### ClassNotFoundException

```java
public class ClassLoadExample {
    public static void main(String[] args) {
        try {
            Class.forName("com.example.MyClass");
        } catch (ClassNotFoundException e) {
            System.out.println("Class not found: " + e.getMessage());
        }
    }
}
```

**Common Checked Exceptions:**
- `IOException`
- `SQLException`
- `ClassNotFoundException`
- `FileNotFoundException`
- `InterruptedException`
- `ParseException`

### 2. Unchecked Exceptions (Runtime Exceptions)

Exceptions not checked at compile-time. Optional to handle.

**Characteristics:**
- Not checked by compiler
- Optional to handle
- Occur due to programming errors
- Subclasses of RuntimeException

**Examples:**

#### NullPointerException

```java
public class NullPointerExample {
    public static void main(String[] args) {
        String str = null;
        // NullPointerException
        System.out.println(str.length());
    }
}
```

#### ArrayIndexOutOfBoundsException

```java
public class ArrayIndexExample {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        // ArrayIndexOutOfBoundsException
        System.out.println(arr[5]);
    }
}
```

#### ArithmeticException

```java
public class ArithmeticExample {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;
        // ArithmeticException: / by zero
        int result = a / b;
    }
}
```

#### NumberFormatException

```java
public class NumberFormatExample {
    public static void main(String[] args) {
        String str = "abc";
        // NumberFormatException
        int num = Integer.parseInt(str);
    }
}
```

#### IllegalArgumentException

```java
public class IllegalArgumentExample {
    public static void setAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
    }
    
    public static void main(String[] args) {
        setAge(-5);  // IllegalArgumentException
    }
}
```

**Common Unchecked Exceptions:**
- `NullPointerException`
- `ArrayIndexOutOfBoundsException`
- `ArithmeticException`
- `IllegalArgumentException`
- `IllegalStateException`
- `NumberFormatException`
- `ClassCastException`
- `ConcurrentModificationException`

### 3. Errors

Serious problems that shouldn't be caught by applications.

**Examples:**
- `OutOfMemoryError`: JVM runs out of memory
- `StackOverflowError`: Infinite recursion
- `VirtualMachineError`: JVM is broken
- `AssertionError`: Assertion failed

```java
public class ErrorExample {
    // StackOverflowError
    public static void recursiveMethod() {
        recursiveMethod();  // Infinite recursion
    }
    
    public static void main(String[] args) {
        recursiveMethod();
    }
}
```

### Checked vs Unchecked Exceptions

| Feature | Checked Exception | Unchecked Exception |
|---------|------------------|---------------------|
| **Check Time** | Compile-time | Runtime |
| **Handling** | Mandatory | Optional |
| **Parent Class** | Exception (except RuntimeException) | RuntimeException |
| **Cause** | External factors | Programming errors |
| **Examples** | IOException, SQLException | NullPointerException, ArithmeticException |
| **Recovery** | Often recoverable | Often programming bugs |

---

## Try-Catch-Finally

### try-catch Block

Used to handle exceptions.

**Syntax:**
```java
try {
    // Code that may throw exception
} catch (ExceptionType1 e) {
    // Handle ExceptionType1
} catch (ExceptionType2 e) {
    // Handle ExceptionType2
}
```

### Basic Example

```java
public class TryCatchExample {
    public static void main(String[] args) {
        try {
            int a = 10;
            int b = 0;
            int result = a / b;  // ArithmeticException
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero");
        }
        
        System.out.println("Program continues...");
    }
}
// Output:
// Error: Cannot divide by zero
// Program continues...
```

### Multiple catch Blocks

```java
public class MultipleCatchExample {
    public static void main(String[] args) {
        try {
            String str = null;
            System.out.println(str.length());  // NullPointerException
            
            int[] arr = {1, 2, 3};
            System.out.println(arr[5]);  // ArrayIndexOutOfBoundsException
            
            int result = 10 / 0;  // ArithmeticException
        } catch (NullPointerException e) {
            System.out.println("Null pointer: " + e.getMessage());
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index: " + e.getMessage());
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic: " + e.getMessage());
        }
    }
}
```

### Multi-catch Block (Java 7+)

```java
public class MultiCatchExample {
    public static void main(String[] args) {
        try {
            int[] arr = {1, 2, 3};
            System.out.println(arr[5]);
        } catch (NullPointerException | ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

### Nested try-catch

```java
public class NestedTryCatchExample {
    public static void main(String[] args) {
        try {
            System.out.println("Outer try block");
            
            try {
                System.out.println("Inner try block");
                int result = 10 / 0;
            } catch (ArithmeticException e) {
                System.out.println("Inner catch: " + e.getMessage());
            }
            
            String str = null;
            System.out.println(str.length());
        } catch (NullPointerException e) {
            System.out.println("Outer catch: " + e.getMessage());
        }
    }
}
```

### finally Block

Executes regardless of whether exception occurs or not. Used for cleanup operations.

**Syntax:**
```java
try {
    // Code that may throw exception
} catch (ExceptionType e) {
    // Handle exception
} finally {
    // Always executes
}
```

**Example:**
```java
public class FinallyExample {
    public static void main(String[] args) {
        try {
            System.out.println("Try block");
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Catch block");
        } finally {
            System.out.println("Finally block - always executes");
        }
        
        System.out.println("After try-catch-finally");
    }
}
// Output:
// Try block
// Catch block
// Finally block - always executes
// After try-catch-finally
```

### finally with return

```java
public class FinallyReturnExample {
    public static int method1() {
        try {
            return 1;
        } finally {
            System.out.println("Finally executed");
        }
    }
    
    public static int method2() {
        try {
            return 1;
        } finally {
            return 2;  // Overrides try's return
        }
    }
    
    public static void main(String[] args) {
        System.out.println(method1());  // Output: Finally executed, then 1
        System.out.println(method2());  // Output: 2 (finally's return)
    }
}
```

### When finally Doesn't Execute

```java
public class FinallyNotExecuteExample {
    public static void main(String[] args) {
        try {
            System.out.println("Try block");
            System.exit(0);  // JVM terminates
        } finally {
            System.out.println("Finally block");  // Won't execute
        }
    }
}
```

**Cases where finally doesn't execute:**
1. `System.exit(0)` is called
2. JVM crashes
3. Fatal error that terminates the thread
4. Infinite loop in try block

### Exception Information Methods

```java
public class ExceptionMethodsExample {
    public static void main(String[] args) {
        try {
            int[] arr = {1, 2, 3};
            System.out.println(arr[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            // Get exception message
            System.out.println("Message: " + e.getMessage());
            
            // Get exception class name and message
            System.out.println("toString(): " + e.toString());
            
            // Print stack trace
            System.out.println("Stack trace:");
            e.printStackTrace();
            
            // Get stack trace as array
            StackTraceElement[] trace = e.getStackTrace();
            for (StackTraceElement element : trace) {
                System.out.println(element);
            }
        }
    }
}
```

---

## throw Keyword

Used to explicitly throw an exception.

**Syntax:**
```java
throw new ExceptionType("message");
```

### Throwing Built-in Exceptions

```java
public class ThrowExample {
    public static void checkAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Age must be 18 or above");
        }
        System.out.println("Age is valid: " + age);
    }
    
    public static void main(String[] args) {
        try {
            checkAge(15);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
// Output: Error: Age must be 18 or above
```

### Throwing Checked Exceptions

```java
import java.io.IOException;

public class ThrowCheckedExample {
    public static void readFile(String filename) throws IOException {
        if (filename == null) {
            throw new IOException("Filename cannot be null");
        }
        System.out.println("Reading file: " + filename);
    }
    
    public static void main(String[] args) {
        try {
            readFile(null);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

### Re-throwing Exceptions

```java
public class RethrowExample {
    public static void method1() throws Exception {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Caught in method1");
            throw e;  // Re-throw
        }
    }
    
    public static void method2() throws Exception {
        try {
            method1();
        } catch (Exception e) {
            System.out.println("Caught in method2");
            throw new Exception("Wrapped exception", e);  // Wrap and throw
        }
    }
    
    public static void main(String[] args) {
        try {
            method2();
        } catch (Exception e) {
            System.out.println("Caught in main: " + e.getMessage());
        }
    }
}
```

---

## throws Keyword

Used to declare exceptions that a method might throw. Part of method signature.

**Syntax:**
```java
returnType methodName() throws ExceptionType1, ExceptionType2 {
    // method body
}
```

### Single Exception

```java
import java.io.IOException;

public class ThrowsExample {
    public static void readFile() throws IOException {
        // May throw IOException
        throw new IOException("File not found");
    }
    
    public static void main(String[] args) {
        try {
            readFile();
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

### Multiple Exceptions

```java
import java.io.IOException;
import java.sql.SQLException;

public class MultipleThrowsExample {
    public static void processData() throws IOException, SQLException {
        // May throw IOException or SQLException
        throw new SQLException("Database error");
    }
    
    public static void main(String[] args) {
        try {
            processData();
        } catch (IOException e) {
            System.out.println("IO Error: " + e.getMessage());
        } catch (SQLException e) {
            System.out.println("SQL Error: " + e.getMessage());
        }
    }
}
```

### throws in Inheritance

```java
class Parent {
    void method() throws IOException {
        // method implementation
    }
}

class Child extends Parent {
    // Valid: Same exception
    @Override
    void method() throws IOException {
        // method implementation
    }
    
    // Valid: Subclass exception
    // void method() throws FileNotFoundException { }
    
    // Valid: No exception
    // void method() { }
    
    // Invalid: Broader exception
    // void method() throws Exception { }  // Compile error
}
```

### throws vs throw

| Feature | throw | throws |
|---------|-------|--------|
| **Purpose** | Throw exception explicitly | Declare exceptions |
| **Usage** | Inside method body | Method signature |
| **Syntax** | `throw new Exception()` | `throws Exception` |
| **Type** | Keyword | Keyword |
| **Exceptions** | Single exception at a time | Multiple exceptions |
| **Followed by** | Exception instance | Exception class name |

```java
public class ThrowVsThrows {
    // throws: declares exception
    public static void method() throws IOException {
        // throw: throws exception
        throw new IOException("Error occurred");
    }
}
```

---

## Custom Exceptions

User-defined exceptions for specific scenarios.

### Creating Custom Checked Exception

Extend `Exception` class.

```java
// Custom checked exception
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomCheckedExample {
    public static void validateAge(int age) throws InvalidAgeException {
        if (age < 0 || age > 150) {
            throw new InvalidAgeException("Invalid age: " + age);
        }
        System.out.println("Valid age: " + age);
    }
    
    public static void main(String[] args) {
        try {
            validateAge(200);
        } catch (InvalidAgeException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

### Creating Custom Unchecked Exception

Extend `RuntimeException` class.

```java
// Custom unchecked exception
class InsufficientBalanceException extends RuntimeException {
    public InsufficientBalanceException(String message) {
        super(message);
    }
}

class BankAccount {
    private double balance;
    
    public BankAccount(double balance) {
        this.balance = balance;
    }
    
    public void withdraw(double amount) {
        if (amount > balance) {
            throw new InsufficientBalanceException(
                "Insufficient balance. Available: " + balance + ", Requested: " + amount
            );
        }
        balance -= amount;
        System.out.println("Withdrawn: " + amount);
    }
    
    public double getBalance() {
        return balance;
    }
}

public class CustomUncheckedExample {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);
        
        try {
            account.withdraw(1500);
        } catch (InsufficientBalanceException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

### Custom Exception with Additional Fields

```java
class ValidationException extends Exception {
    private String fieldName;
    private Object invalidValue;
    
    public ValidationException(String message, String fieldName, Object invalidValue) {
        super(message);
        this.fieldName = fieldName;
        this.invalidValue = invalidValue;
    }
    
    public String getFieldName() {
        return fieldName;
    }
    
    public Object getInvalidValue() {
        return invalidValue;
    }
    
    @Override
    public String toString() {
        return super.toString() + 
               " [Field: " + fieldName + ", Value: " + invalidValue + "]";
    }
}

public class CustomExceptionWithFields {
    public static void validateEmail(String email) throws ValidationException {
        if (email == null || !email.contains("@")) {
            throw new ValidationException(
                "Invalid email format", 
                "email", 
                email
            );
        }
        System.out.println("Valid email: " + email);
    }
    
    public static void main(String[] args) {
        try {
            validateEmail("invalid-email");
        } catch (ValidationException e) {
            System.out.println("Error: " + e.getMessage());
            System.out.println("Field: " + e.getFieldName());
            System.out.println("Value: " + e.getInvalidValue());
        }
    }
}
```

### Exception Chaining

Preserving original exception information.

```java
class DataProcessingException extends Exception {
    public DataProcessingException(String message, Throwable cause) {
        super(message, cause);
    }
}

public class ExceptionChainingExample {
    public static void processData() throws DataProcessingException {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            throw new DataProcessingException("Failed to process data", e);
        }
    }
    
    public static void main(String[] args) {
        try {
            processData();
        } catch (DataProcessingException e) {
            System.out.println("Error: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
            
            // Print full stack trace
            e.printStackTrace();
        }
    }
}
```

### Best Practices for Custom Exceptions

```java
// 1. Meaningful names (end with Exception)
class UserNotFoundException extends Exception { }

// 2. Provide multiple constructors
class CustomException extends Exception {
    public CustomException() {
        super();
    }
    
    public CustomException(String message) {
        super(message);
    }
    
    public CustomException(String message, Throwable cause) {
        super(message, cause);
    }
    
    public CustomException(Throwable cause) {
        super(cause);
    }
}

// 3. Document with Javadoc
/**
 * Thrown when user credentials are invalid.
 * 
 * @author John Doe
 * @since 1.0
 */
class InvalidCredentialsException extends Exception {
    public InvalidCredentialsException(String message) {
        super(message);
    }
}
```

---

## try-with-resources

Automatically closes resources that implement `AutoCloseable` interface (Java 7+).

**Syntax:**
```java
try (ResourceType resource = new ResourceType()) {
    // Use resource
} catch (Exception e) {
    // Handle exception
}
// Resource automatically closed
```

### Basic Example

```java
import java.io.*;

public class TryWithResourcesExample {
    public static void main(String[] args) {
        // Old way (before Java 7)
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
                    reader.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        
        // New way (Java 7+)
        try (BufferedReader reader2 = new BufferedReader(new FileReader("file.txt"))) {
            String line = reader2.readLine();
            System.out.println(line);
        } catch (IOException e) {
            e.printStackTrace();
        }
        // reader2 automatically closed
    }
}
```

### Multiple Resources

```java
import java.io.*;

public class MultipleResourcesExample {
    public static void copyFile(String source, String destination) {
        try (
            FileInputStream input = new FileInputStream(source);
            FileOutputStream output = new FileOutputStream(destination)
        ) {
            byte[] buffer = new byte[1024];
            int length;
            while ((length = input.read(buffer)) > 0) {
                output.write(buffer, 0, length);
            }
            System.out.println("File copied successfully");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
        // Both input and output automatically closed
    }
}
```

### Custom AutoCloseable Resource

```java
class DatabaseConnection implements AutoCloseable {
    public DatabaseConnection() {
        System.out.println("Opening database connection");
    }
    
    public void executeQuery(String query) {
        System.out.println("Executing: " + query);
    }
    
    @Override
    public void close() {
        System.out.println("Closing database connection");
    }
}

public class CustomAutoCloseableExample {
    public static void main(String[] args) {
        try (DatabaseConnection conn = new DatabaseConnection()) {
            conn.executeQuery("SELECT * FROM users");
        }
        // Output:
        // Opening database connection
        // Executing: SELECT * FROM users
        // Closing database connection
    }
}
```

### try-with-resources with catch and finally

```java
import java.io.*;

public class TryWithResourcesCatchFinally {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
            String line = reader.readLine();
            System.out.println(line);
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("IO error: " + e.getMessage());
        } finally {
            System.out.println("Finally block executed");
        }
    }
}
```

### Order of Closing Resources

Resources are closed in reverse order of creation.

```java
class Resource implements AutoCloseable {
    private String name;
    
    public Resource(String name) {
        this.name = name;
        System.out.println("Opening " + name);
    }
    
    public void use() {
        System.out.println("Using " + name);
    }
    
    @Override
    public void close() {
        System.out.println("Closing " + name);
    }
}

public class ResourceOrderExample {
    public static void main(String[] args) {
        try (
            Resource r1 = new Resource("Resource 1");
            Resource r2 = new Resource("Resource 2");
            Resource r3 = new Resource("Resource 3")
        ) {
            r1.use();
            r2.use();
            r3.use();
        }
        // Output:
        // Opening Resource 1
        // Opening Resource 2
        // Opening Resource 3
        // Using Resource 1
        // Using Resource 2
        // Using Resource 3
        // Closing Resource 3
        // Closing Resource 2
        // Closing Resource 1
    }
}
```

### Suppressed Exceptions

When exception occurs in both try block and close() method.

```java
class ProblematicResource implements AutoCloseable {
    public void use() throws Exception {
        throw new Exception("Exception in use()");
    }
    
    @Override
    public void close() throws Exception {
        throw new Exception("Exception in close()");
    }
}

public class SuppressedExceptionExample {
    public static void main(String[] args) {
        try (ProblematicResource resource = new ProblematicResource()) {
            resource.use();
        } catch (Exception e) {
            System.out.println("Main exception: " + e.getMessage());
            
            // Get suppressed exceptions
            Throwable[] suppressed = e.getSuppressed();
            for (Throwable t : suppressed) {
                System.out.println("Suppressed: " + t.getMessage());
            }
        }
        // Output:
        // Main exception: Exception in use()
        // Suppressed: Exception in close()
    }
}
```

### try-with-resources without catch (Java 9+)

Can use effectively final variables.

```java
import java.io.*;

public class TryWithResourcesJava9 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
        
        // Java 9+: Can use existing variable
        try (reader) {
            String line = reader.readLine();
            System.out.println(line);
        }
        // reader automatically closed
    }
}
```

### Benefits of try-with-resources

1. **Automatic resource management**: No need for finally block
2. **Cleaner code**: Less boilerplate
3. **Exception handling**: Properly handles suppressed exceptions
4. **Safe**: Guarantees resource closure even if exception occurs

---

## Exception Handling Best Practices

### 1. Catch Specific Exceptions

```java
// Bad: Too generic
try {
    // code
} catch (Exception e) {
    e.printStackTrace();
}

// Good: Specific exceptions
try {
    // code
} catch (FileNotFoundException e) {
    System.out.println("File not found");
} catch (IOException e) {
    System.out.println("IO error");
}
```

### 2. Don't Catch Throwable or Error

```java
// Bad: Catching Error
try {
    // code
} catch (Error e) {
    // Errors shouldn't be caught
}

// Good: Catch specific exceptions
try {
    // code
} catch (SpecificException e) {
    // handle
}
```

### 3. Don't Ignore Exceptions

```java
// Bad: Empty catch block
try {
    // code
} catch (Exception e) {
    // Do nothing - bad practice
}

// Good: Handle or log
try {
    // code
} catch (Exception e) {
    logger.error("Error occurred", e);
}
```

### 4. Log Exception Information

```java
try {
    // code
} catch (Exception e) {
    // Good: Log with context
    logger.error("Failed to process file: " + filename, e);
}
```

### 5. Clean Up Resources

```java
// Good: Use try-with-resources
try (FileReader reader = new FileReader("file.txt")) {
    // use resource
} catch (IOException e) {
    // handle
}
```

### 6. Don't Use Exceptions for Control Flow

```java
// Bad: Using exceptions for control flow
try {
    while (true) {
        array[index++];
    }
} catch (ArrayIndexOutOfBoundsException e) {
    // End of array
}

// Good: Use proper logic
for (int i = 0; i < array.length; i++) {
    // process array[i]
}
```

### 7. Provide Context in Custom Exceptions

```java
// Good: Meaningful message
throw new InvalidInputException(
    "Invalid age: " + age + ". Age must be between 0 and 150."
);
```

### 8. Document Exceptions with @throws

```java
/**
 * Reads data from file.
 * 
 * @param filename the file to read
 * @return the file content
 * @throws FileNotFoundException if file doesn't exist
 * @throws IOException if IO error occurs
 */
public String readFile(String filename) throws FileNotFoundException, IOException {
    // implementation
}
```

### 9. Use Standard Exceptions When Possible

```java
// Good: Use built-in exceptions
if (age < 0) {
    throw new IllegalArgumentException("Age cannot be negative");
}

if (user == null) {
    throw new NullPointerException("User cannot be null");
}
```

### 10. Early Return Pattern

```java
public void processUser(User user) {
    if (user == null) {
        throw new IllegalArgumentException("User cannot be null");
    }
    
    if (user.getAge() < 0) {
        throw new IllegalArgumentException("Invalid age");
    }
    
    // Process user
}
```

---

## Common Exception Scenarios

### 1. File Operations

```java
import java.io.*;

public class FileOperationExample {
    public static String readFile(String filename) {
        StringBuilder content = new StringBuilder();
        
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            while ((line = reader.readLine()) != null) {
                content.append(line).append("\n");
            }
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + filename);
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
        
        return content.toString();
    }
}
```

### 2. Input Validation

```java
import java.util.Scanner;

public class InputValidationExample {
    public static int getPositiveNumber(Scanner scanner) {
        while (true) {
            try {
                System.out.print("Enter a positive number: ");
                String input = scanner.nextLine();
                int number = Integer.parseInt(input);
                
                if (number <= 0) {
                    throw new IllegalArgumentException("Number must be positive");
                }
                
                return number;
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a number.");
            } catch (IllegalArgumentException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}
```

### 3. Database Operations

```java
import java.sql.*;

public class DatabaseExample {
    public void executeQuery(String query) {
        try (
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/db");
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(query)
        ) {
            while (rs.next()) {
                System.out.println(rs.getString(1));
            }
        } catch (SQLException e) {
            System.out.println("Database error: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
```

### 4. Network Operations

```java
import java.net.*;
import java.io.*;

public class NetworkExample {
    public String fetchData(String urlString) {
        try {
            URL url = new URL(urlString);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            
            try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(conn.getInputStream()))) {
                StringBuilder response = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    response.append(line);
                }
                return response.toString();
            } finally {
                conn.disconnect();
            }
        } catch (MalformedURLException e) {
            System.out.println("Invalid URL: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Network error: " + e.getMessage());
        }
        return null;
    }
}
```

---

## Summary

Exception handling in Java provides robust error management:

### Types of Exceptions
- **Checked**: Compile-time checked, must be handled (IOException, SQLException)
- **Unchecked**: Runtime exceptions, optional handling (NullPointerException, ArithmeticException)
- **Errors**: Serious issues that shouldn't be caught (OutOfMemoryError, StackOverflowError)

### Exception Handling Mechanisms
- **try-catch**: Handle exceptions
- **finally**: Execute cleanup code regardless of exception
- **throw**: Explicitly throw an exception
- **throws**: Declare exceptions in method signature

### Custom Exceptions
- Extend `Exception` for checked exceptions
- Extend `RuntimeException` for unchecked exceptions
- Provide meaningful messages and additional context
- Use exception chaining to preserve original exception

### try-with-resources
- Automatically closes AutoCloseable resources
- Cleaner and safer than manual resource management
- Handles suppressed exceptions
- Multiple resources supported

### Best Practices
1. Catch specific exceptions, not generic Exception
2. Don't ignore exceptions (no empty catch blocks)
3. Use try-with-resources for resource management
4. Provide meaningful error messages
5. Log exceptions with context
6. Don't use exceptions for control flow
7. Document exceptions with @throws
8. Use standard exceptions when applicable
9. Clean up resources properly
10. Handle checked exceptions appropriately

Exception handling is essential for creating robust, maintainable Java applications that gracefully handle error conditions and maintain normal program flow.

---

# 7. Multithreading and Concurrency

Multithreading is a feature that allows concurrent execution of two or more parts of a program to maximize CPU utilization. Each part is called a thread, which is a lightweight process.

## What is a Thread?

A thread is the smallest unit of execution within a process. Multiple threads within a process share the same memory space but execute independently.

**Benefits:**
- Better CPU utilization
- Improved application responsiveness
- Simplified program structure for concurrent operations
- Resource sharing within a process

**Challenges:**
- Thread synchronization
- Race conditions
- Deadlocks
- Increased complexity

---

## Thread Lifecycle

A thread goes through various states during its lifetime.

### Thread States

```
NEW → RUNNABLE ⇄ RUNNING → TERMINATED
         ↓          ↓
      BLOCKED   WAITING/TIMED_WAITING
```

### States Explained

1. **NEW**: Thread created but not started yet
2. **RUNNABLE**: Thread is ready to run, waiting for CPU
3. **RUNNING**: Thread is executing
4. **BLOCKED**: Thread is blocked waiting for a monitor lock
5. **WAITING**: Thread is waiting indefinitely for another thread
6. **TIMED_WAITING**: Thread is waiting for a specified time
7. **TERMINATED**: Thread has completed execution

### State Transitions

```java
public class ThreadStateExample {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = new Thread(() -> {
            try {
                System.out.println("Thread running");
                Thread.sleep(2000);
                System.out.println("Thread awake");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        
        // NEW state
        System.out.println("State: " + thread.getState());  // NEW
        
        thread.start();
        // RUNNABLE state
        System.out.println("State: " + thread.getState());  // RUNNABLE
        
        Thread.sleep(100);
        // TIMED_WAITING state
        System.out.println("State: " + thread.getState());  // TIMED_WAITING
        
        thread.join();
        // TERMINATED state
        System.out.println("State: " + thread.getState());  // TERMINATED
    }
}
```

### Thread State Methods

```java
public class ThreadLifecycleDemo {
    public static void main(String[] args) throws InterruptedException {
        Object lock = new Object();
        
        Thread t1 = new Thread(() -> {
            synchronized (lock) {
                try {
                    System.out.println("T1: Entering wait");
                    lock.wait();
                    System.out.println("T1: Resumed");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        
        Thread t2 = new Thread(() -> {
            synchronized (lock) {
                System.out.println("T2: In synchronized block");
            }
        });
        
        t1.start();
        Thread.sleep(100);
        System.out.println("T1 State: " + t1.getState());  // WAITING
        
        t2.start();
        Thread.sleep(100);
        System.out.println("T2 State: " + t2.getState());  // BLOCKED (waiting for lock)
        
        synchronized (lock) {
            lock.notify();
        }
        
        t1.join();
        t2.join();
    }
}
```

---

## Thread Creation

There are multiple ways to create threads in Java.

### 1. Extending Thread Class

```java
class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class ThreadExample1 {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        
        t1.setName("Thread-1");
        t2.setName("Thread-2");
        
        t1.start();  // Starts thread
        t2.start();
        
        System.out.println("Main thread");
    }
}
```

### 2. Implementing Runnable Interface

```java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class RunnableExample {
    public static void main(String[] args) {
        MyRunnable runnable = new MyRunnable();
        
        Thread t1 = new Thread(runnable, "Thread-1");
        Thread t2 = new Thread(runnable, "Thread-2");
        
        t1.start();
        t2.start();
    }
}
```

### 3. Using Anonymous Class

```java
public class AnonymousThreadExample {
    public static void main(String[] args) {
        // Anonymous Thread class
        Thread t1 = new Thread() {
            @Override
            public void run() {
                System.out.println("Anonymous Thread: " + getName());
            }
        };
        
        // Anonymous Runnable
        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("Anonymous Runnable");
            }
        });
        
        t1.start();
        t2.start();
    }
}
```

### 4. Using Lambda Expression (Java 8+)

```java
public class LambdaThreadExample {
    public static void main(String[] args) {
        // Lambda expression
        Thread t1 = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Lambda Thread: " + i);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        
        // Compact lambda
        Thread t2 = new Thread(() -> System.out.println("Simple lambda thread"));
        
        t1.start();
        t2.start();
    }
}
```

### Thread Class vs Runnable Interface

| Feature | Thread Class | Runnable Interface |
|---------|--------------|-------------------|
| **Inheritance** | Extends Thread | Implements Runnable |
| **Multiple Inheritance** | No (already extends Thread) | Yes (can extend other class) |
| **Flexibility** | Less flexible | More flexible |
| **Resource Sharing** | Each thread has separate target | Multiple threads can share same Runnable |
| **Use Case** | Simple threading | Preferred for most cases |

**Recommendation:** Use Runnable interface (or lambda) for better design and flexibility.

### Important Thread Methods

```java
public class ThreadMethodsExample {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = new Thread(() -> {
            System.out.println("Thread name: " + Thread.currentThread().getName());
            System.out.println("Thread ID: " + Thread.currentThread().getId());
            System.out.println("Thread priority: " + Thread.currentThread().getPriority());
            System.out.println("Is alive: " + Thread.currentThread().isAlive());
        });
        
        // Set thread properties
        thread.setName("MyThread");
        thread.setPriority(Thread.MAX_PRIORITY);  // 1 to 10 (default is 5)
        
        System.out.println("Before start - Is alive: " + thread.isAlive());
        
        thread.start();
        
        // Wait for thread to complete
        thread.join();  // Main thread waits
        
        System.out.println("After completion - Is alive: " + thread.isAlive());
    }
}
```

### Thread Priority

```java
public class ThreadPriorityExample {
    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Low priority thread");
            }
        });
        
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("High priority thread");
            }
        });
        
        t1.setPriority(Thread.MIN_PRIORITY);   // 1
        t2.setPriority(Thread.MAX_PRIORITY);   // 10
        
        t1.start();
        t2.start();
    }
}
```

### Daemon Threads

Background threads that don't prevent JVM from exiting.

```java
public class DaemonThreadExample {
    public static void main(String[] args) {
        Thread daemon = new Thread(() -> {
            while (true) {
                System.out.println("Daemon thread running");
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        
        // Set as daemon before starting
        daemon.setDaemon(true);
        daemon.start();
        
        System.out.println("Is daemon: " + daemon.isDaemon());
        
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("Main thread ending");
        // JVM exits, daemon thread stops automatically
    }
}
```

---

## Synchronization

Synchronization controls access to shared resources to prevent thread interference and memory consistency errors.

### Problems Without Synchronization

#### Race Condition

```java
class Counter {
    private int count = 0;
    
    public void increment() {
        count++;  // Not atomic: read, increment, write
    }
    
    public int getCount() {
        return count;
    }
}

public class RaceConditionExample {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();
        
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });
        
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });
        
        t1.start();
        t2.start();
        
        t1.join();
        t2.join();
        
        System.out.println("Count: " + counter.getCount());
        // Expected: 2000, Actual: varies (race condition)
    }
}
```

### 1. Synchronized Method

```java
class SynchronizedCounter {
    private int count = 0;
    
    // Synchronized method
    public synchronized void increment() {
        count++;
    }
    
    public synchronized int getCount() {
        return count;
    }
}

public class SynchronizedMethodExample {
    public static void main(String[] args) throws InterruptedException {
        SynchronizedCounter counter = new SynchronizedCounter();
        
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });
        
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });
        
        t1.start();
        t2.start();
        
        t1.join();
        t2.join();
        
        System.out.println("Count: " + counter.getCount());  // 2000 (correct)
    }
}
```

### 2. Synchronized Block

```java
class BankAccount {
    private double balance = 0;
    
    public void deposit(double amount) {
        synchronized (this) {
            double newBalance = balance + amount;
            try {
                Thread.sleep(10);  // Simulate processing
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            balance = newBalance;
            System.out.println(Thread.currentThread().getName() + 
                             " deposited: " + amount + ", Balance: " + balance);
        }
    }
    
    public void withdraw(double amount) {
        synchronized (this) {
            if (balance >= amount) {
                balance -= amount;
                System.out.println(Thread.currentThread().getName() + 
                                 " withdrew: " + amount + ", Balance: " + balance);
            } else {
                System.out.println("Insufficient balance");
            }
        }
    }
    
    public synchronized double getBalance() {
        return balance;
    }
}

public class SynchronizedBlockExample {
    public static void main(String[] args) throws InterruptedException {
        BankAccount account = new BankAccount();
        
        Thread t1 = new Thread(() -> account.deposit(100), "Thread-1");
        Thread t2 = new Thread(() -> account.deposit(200), "Thread-2");
        Thread t3 = new Thread(() -> account.withdraw(50), "Thread-3");
        
        t1.start();
        t2.start();
        t3.start();
        
        t1.join();
        t2.join();
        t3.join();
        
        System.out.println("Final balance: " + account.getBalance());
    }
}
```

### 3. Static Synchronization

Synchronizes on class level (class lock).

```java
class StaticCounter {
    private static int count = 0;
    
    // Synchronized static method
    public static synchronized void increment() {
        count++;
    }
    
    // Synchronized block on class
    public static void decrement() {
        synchronized (StaticCounter.class) {
            count--;
        }
    }
    
    public static int getCount() {
        return count;
    }
}

public class StaticSynchronizationExample {
    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                StaticCounter.increment();
            }
        });
        
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                StaticCounter.increment();
            }
        });
        
        t1.start();
        t2.start();
        
        t1.join();
        t2.join();
        
        System.out.println("Count: " + StaticCounter.getCount());  // 2000
    }
}
```

### 4. Locks (ReentrantLock)

More flexible than synchronized keyword.

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

class LockCounter {
    private int count = 0;
    private Lock lock = new ReentrantLock();
    
    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();  // Must unlock in finally
        }
    }
    
    public int getCount() {
        return count;
    }
}

public class ReentrantLockExample {
    public static void main(String[] args) throws InterruptedException {
        LockCounter counter = new LockCounter();
        
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });
        
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });
        
        t1.start();
        t2.start();
        
        t1.join();
        t2.join();
        
        System.out.println("Count: " + counter.getCount());  // 2000
    }
}
```

### tryLock() Method

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class TryLockExample {
    private Lock lock = new ReentrantLock();
    
    public void task() {
        if (lock.tryLock()) {
            try {
                System.out.println(Thread.currentThread().getName() + " acquired lock");
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                lock.unlock();
                System.out.println(Thread.currentThread().getName() + " released lock");
            }
        } else {
            System.out.println(Thread.currentThread().getName() + " could not acquire lock");
        }
    }
    
    public static void main(String[] args) {
        TryLockExample example = new TryLockExample();
        
        Thread t1 = new Thread(() -> example.task(), "Thread-1");
        Thread t2 = new Thread(() -> example.task(), "Thread-2");
        
        t1.start();
        t2.start();
    }
}
```

### ReadWriteLock

Allows multiple readers or single writer.

```java
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

class SharedResource {
    private int value = 0;
    private ReadWriteLock lock = new ReentrantReadWriteLock();
    
    public int read() {
        lock.readLock().lock();
        try {
            System.out.println(Thread.currentThread().getName() + " reading: " + value);
            Thread.sleep(100);
            return value;
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        } finally {
            lock.readLock().unlock();
        }
    }
    
    public void write(int value) {
        lock.writeLock().lock();
        try {
            System.out.println(Thread.currentThread().getName() + " writing: " + value);
            this.value = value;
            Thread.sleep(100);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        } finally {
            lock.writeLock().unlock();
        }
    }
}

public class ReadWriteLockExample {
    public static void main(String[] args) {
        SharedResource resource = new SharedResource();
        
        // Multiple readers
        for (int i = 0; i < 3; i++) {
            new Thread(() -> resource.read(), "Reader-" + i).start();
        }
        
        // Single writer
        new Thread(() -> resource.write(100), "Writer").start();
    }
}
```

### Deadlock

Situation where two or more threads are blocked forever, waiting for each other.

```java
public class DeadlockExample {
    private static Object lock1 = new Object();
    private static Object lock2 = new Object();
    
    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            synchronized (lock1) {
                System.out.println("Thread 1: Locked lock1");
                
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {}
                
                System.out.println("Thread 1: Waiting for lock2");
                synchronized (lock2) {
                    System.out.println("Thread 1: Locked lock2");
                }
            }
        });
        
        Thread t2 = new Thread(() -> {
            synchronized (lock2) {
                System.out.println("Thread 2: Locked lock2");
                
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {}
                
                System.out.println("Thread 2: Waiting for lock1");
                synchronized (lock1) {
                    System.out.println("Thread 2: Locked lock1");
                }
            }
        });
        
        t1.start();
        t2.start();
        // Deadlock occurs - both threads wait forever
    }
}
```

### Deadlock Prevention

```java
public class DeadlockPreventionExample {
    private static Object lock1 = new Object();
    private static Object lock2 = new Object();
    
    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            synchronized (lock1) {
                System.out.println("Thread 1: Locked lock1");
                synchronized (lock2) {
                    System.out.println("Thread 1: Locked lock2");
                }
            }
        });
        
        Thread t2 = new Thread(() -> {
            // Same lock order prevents deadlock
            synchronized (lock1) {
                System.out.println("Thread 2: Locked lock1");
                synchronized (lock2) {
                    System.out.println("Thread 2: Locked lock2");
                }
            }
        });
        
        t1.start();
        t2.start();
    }
}
```

---

## Inter-thread Communication

Threads can communicate using `wait()`, `notify()`, and `notifyAll()` methods.

### wait(), notify(), notifyAll()

**Methods (from Object class):**
- `wait()`: Releases lock and waits until notified
- `notify()`: Wakes up one waiting thread
- `notifyAll()`: Wakes up all waiting threads

**Rules:**
- Must be called within synchronized context
- Current thread must own the monitor

### Producer-Consumer Problem

```java
import java.util.LinkedList;
import java.util.Queue;

class SharedQueue {
    private Queue<Integer> queue = new LinkedList<>();
    private int capacity = 5;
    
    public synchronized void produce(int item) throws InterruptedException {
        while (queue.size() == capacity) {
            System.out.println("Queue full, producer waiting...");
            wait();  // Wait until space available
        }
        
        queue.add(item);
        System.out.println("Produced: " + item + ", Queue size: " + queue.size());
        
        notifyAll();  // Notify consumers
    }
    
    public synchronized int consume() throws InterruptedException {
        while (queue.isEmpty()) {
            System.out.println("Queue empty, consumer waiting...");
            wait();  // Wait until item available
        }
        
        int item = queue.poll();
        System.out.println("Consumed: " + item + ", Queue size: " + queue.size());
        
        notifyAll();  // Notify producers
        return item;
    }
}

class Producer implements Runnable {
    private SharedQueue queue;
    
    public Producer(SharedQueue queue) {
        this.queue = queue;
    }
    
    @Override
    public void run() {
        try {
            for (int i = 1; i <= 10; i++) {
                queue.produce(i);
                Thread.sleep(100);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

class Consumer implements Runnable {
    private SharedQueue queue;
    
    public Consumer(SharedQueue queue) {
        this.queue = queue;
    }
    
    @Override
    public void run() {
        try {
            for (int i = 1; i <= 10; i++) {
                queue.consume();
                Thread.sleep(200);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

public class ProducerConsumerExample {
    public static void main(String[] args) {
        SharedQueue queue = new SharedQueue();
        
        Thread producer = new Thread(new Producer(queue), "Producer");
        Thread consumer = new Thread(new Consumer(queue), "Consumer");
        
        producer.start();
        consumer.start();
    }
}
```

### wait() with Timeout

```java
public class WaitTimeoutExample {
    public static void main(String[] args) {
        Object lock = new Object();
        
        Thread t1 = new Thread(() -> {
            synchronized (lock) {
                try {
                    System.out.println("Waiting for 2 seconds...");
                    lock.wait(2000);  // Wait for 2 seconds or until notified
                    System.out.println("Wait finished");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        
        t1.start();
    }
}
```

### notify() vs notifyAll()

```java
public class NotifyVsNotifyAllExample {
    private static Object lock = new Object();
    
    public static void main(String[] args) throws InterruptedException {
        // Create 3 waiting threads
        for (int i = 1; i <= 3; i++) {
            Thread t = new Thread(() -> {
                synchronized (lock) {
                    try {
                        System.out.println(Thread.currentThread().getName() + " waiting");
                        lock.wait();
                        System.out.println(Thread.currentThread().getName() + " resumed");
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }, "Thread-" + i);
            t.start();
        }
        
        Thread.sleep(1000);
        
        // Using notify() - wakes only one thread
        synchronized (lock) {
            System.out.println("Calling notify()");
            lock.notify();
        }
        
        Thread.sleep(1000);
        
        // Using notifyAll() - wakes all remaining threads
        synchronized (lock) {
            System.out.println("Calling notifyAll()");
            lock.notifyAll();
        }
    }
}
```

---

## Thread Pool and Executor Framework

Thread pools manage a pool of worker threads to execute tasks efficiently.

### Why Thread Pools?

**Benefits:**
- Reuse existing threads (avoids overhead of creating new threads)
- Limit number of concurrent threads
- Better resource management
- Improved performance

### ExecutorService

Main interface for managing thread pools.

#### 1. Fixed Thread Pool

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class FixedThreadPoolExample {
    public static void main(String[] args) {
        // Create pool with 3 threads
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Submit 10 tasks
        for (int i = 1; i <= 10; i++) {
            final int taskId = i;
            executor.submit(() -> {
                System.out.println("Task " + taskId + " executed by " + 
                                 Thread.currentThread().getName());
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
        }
        
        executor.shutdown();  // Initiates orderly shutdown
    }
}
```

#### 2. Cached Thread Pool

Creates new threads as needed, reuses idle threads.

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class CachedThreadPoolExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newCachedThreadPool();
        
        for (int i = 1; i <= 5; i++) {
            final int taskId = i;
            executor.submit(() -> {
                System.out.println("Task " + taskId + " by " + 
                                 Thread.currentThread().getName());
            });
        }
        
        executor.shutdown();
    }
}
```

#### 3. Single Thread Executor

Uses single worker thread.

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class SingleThreadExecutorExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        
        for (int i = 1; i <= 5; i++) {
            final int taskId = i;
            executor.submit(() -> {
                System.out.println("Task " + taskId + " by " + 
                                 Thread.currentThread().getName());
            });
        }
        
        executor.shutdown();
    }
}
```

#### 4. Scheduled Thread Pool

Executes tasks with delay or periodically.

```java
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class ScheduledThreadPoolExample {
    public static void main(String[] args) {
        ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);
        
        // Execute after 3 seconds delay
        scheduler.schedule(() -> {
            System.out.println("Task executed after delay");
        }, 3, TimeUnit.SECONDS);
        
        // Execute periodically (initial delay: 1s, period: 2s)
        scheduler.scheduleAtFixedRate(() -> {
            System.out.println("Periodic task: " + System.currentTimeMillis());
        }, 1, 2, TimeUnit.SECONDS);
        
        // Execute with fixed delay between executions
        scheduler.scheduleWithFixedDelay(() -> {
            System.out.println("Fixed delay task: " + System.currentTimeMillis());
        }, 1, 2, TimeUnit.SECONDS);
        
        // Shutdown after 10 seconds
        scheduler.schedule(() -> {
            scheduler.shutdown();
        }, 10, TimeUnit.SECONDS);
    }
}
```

### Executor Lifecycle

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class ExecutorLifecycleExample {
    public static void main(String[] args) throws InterruptedException {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        
        executor.submit(() -> {
            System.out.println("Task 1");
        });
        
        executor.submit(() -> {
            System.out.println("Task 2");
        });
        
        // Shutdown methods:
        
        // 1. shutdown() - initiates orderly shutdown
        executor.shutdown();
        
        // 2. Check if shutdown
        System.out.println("Is shutdown: " + executor.isShutdown());
        
        // 3. Wait for termination
        boolean terminated = executor.awaitTermination(5, TimeUnit.SECONDS);
        System.out.println("Is terminated: " + terminated);
        
        // 4. shutdownNow() - attempts to stop all tasks
        // List<Runnable> unfinished = executor.shutdownNow();
        
        // 5. Check if terminated
        System.out.println("Is terminated: " + executor.isTerminated());
    }
}
```

---

## Callable and Future

### Callable Interface

Similar to Runnable but can return result and throw checked exceptions.

```java
import java.util.concurrent.*;

class SumTask implements Callable<Integer> {
    private int n;
    
    public SumTask(int n) {
        this.n = n;
    }
    
    @Override
    public Integer call() throws Exception {
        System.out.println("Calculating sum of 1 to " + n);
        Thread.sleep(2000);
        
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        
        return sum;
    }
}

public class CallableExample {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        
        Callable<Integer> task1 = new SumTask(10);
        Callable<Integer> task2 = new SumTask(100);
        
        // Submit and get Future
        Future<Integer> future1 = executor.submit(task1);
        Future<Integer> future2 = executor.submit(task2);
        
        System.out.println("Tasks submitted");
        
        // Get results (blocks until complete)
        Integer result1 = future1.get();
        Integer result2 = future2.get();
        
        System.out.println("Result 1: " + result1);  // 55
        System.out.println("Result 2: " + result2);  // 5050
        
        executor.shutdown();
    }
}
```

### Using Lambda with Callable

```java
import java.util.concurrent.*;

public class CallableLambdaExample {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        
        // Lambda Callable
        Future<String> future = executor.submit(() -> {
            Thread.sleep(1000);
            return "Hello from Callable";
        });
        
        System.out.println("Waiting for result...");
        String result = future.get();
        System.out.println("Result: " + result);
        
        executor.shutdown();
    }
}
```

### Future Methods

```java
import java.util.concurrent.*;

public class FutureMethodsExample {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        
        Future<Integer> future = executor.submit(() -> {
            Thread.sleep(3000);
            return 42;
        });
        
        // Check if done
        System.out.println("Is done: " + future.isDone());  // false
        
        // Check if cancelled
        System.out.println("Is cancelled: " + future.isCancelled());  // false
        
        // Get with timeout
        try {
            Integer result = future.get(1, TimeUnit.SECONDS);
        } catch (TimeoutException e) {
            System.out.println("Timeout occurred");
        }
        
        // Cancel task
        // boolean cancelled = future.cancel(true);
        
        // Get result (blocks)
        Integer result = future.get();
        System.out.println("Result: " + result);
        System.out.println("Is done: " + future.isDone());  // true
        
        executor.shutdown();
    }
}
```

### invokeAll() and invokeAny()

```java
import java.util.concurrent.*;
import java.util.*;

public class InvokeAllAnyExample {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        List<Callable<String>> tasks = Arrays.asList(
            () -> {
                Thread.sleep(1000);
                return "Task 1";
            },
            () -> {
                Thread.sleep(2000);
                return "Task 2";
            },
            () -> {
                Thread.sleep(500);
                return "Task 3";
            }
        );
        
        // invokeAll - waits for all tasks to complete
        System.out.println("Using invokeAll:");
        List<Future<String>> futures = executor.invokeAll(tasks);
        for (Future<String> future : futures) {
            System.out.println(future.get());
        }
        
        // invokeAny - returns result of first completed task
        System.out.println("\nUsing invokeAny:");
        String result = executor.invokeAny(tasks);
        System.out.println("First completed: " + result);  // Task 3
        
        executor.shutdown();
    }
}
```

### CompletableFuture (Java 8+)

Advanced async programming.

```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletableFutureExample {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        // Simple async task
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return "Hello";
        });
        
        // Chain operations
        CompletableFuture<String> result = future
            .thenApply(s -> s + " World")
            .thenApply(String::toUpperCase);
        
        System.out.println(result.get());  // HELLO WORLD
        
        // Async chaining
        CompletableFuture<Void> future2 = CompletableFuture
            .supplyAsync(() -> "Task 1")
            .thenApplyAsync(s -> s + " -> Task 2")
            .thenAcceptAsync(System.out::println);
        
        future2.join();  // Wait for completion
        
        // Combine futures
        CompletableFuture<Integer> f1 = CompletableFuture.supplyAsync(() -> 10);
        CompletableFuture<Integer> f2 = CompletableFuture.supplyAsync(() -> 20);
        
        CompletableFuture<Integer> combined = f1.thenCombine(f2, (a, b) -> a + b);
        System.out.println("Combined: " + combined.get());  // 30
    }
}
```

---

## volatile and Atomic Variables

### volatile Keyword

Ensures visibility of changes to variables across threads.

```java
public class VolatileExample {
    private static volatile boolean flag = false;
    
    public static void main(String[] args) throws InterruptedException {
        Thread writer = new Thread(() -> {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            flag = true;
            System.out.println("Flag set to true");
        });
        
        Thread reader = new Thread(() -> {
            while (!flag) {
                // Without volatile, this might loop forever
            }
            System.out.println("Flag is true, exiting loop");
        });
        
        reader.start();
        writer.start();
        
        reader.join();
        writer.join();
    }
}
```

**volatile Characteristics:**
- Ensures visibility (changes visible to all threads)
- Prevents instruction reordering
- Does NOT provide atomicity
- Lighter than synchronized

**When to use volatile:**
- Simple flag variables
- State indicators
- When only one thread writes, multiple threads read

### Atomic Variables

Thread-safe operations without synchronization.

#### AtomicInteger

```java
import java.util.concurrent.atomic.AtomicInteger;

public class AtomicIntegerExample {
    private static AtomicInteger counter = new AtomicInteger(0);
    
    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.incrementAndGet();
            }
        });
        
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.incrementAndGet();
            }
        });
        
        t1.start();
        t2.start();
        
        t1.join();
        t2.join();
        
        System.out.println("Counter: " + counter.get());  // 2000 (correct)
    }
}
```

#### AtomicInteger Methods

```java
import java.util.concurrent.atomic.AtomicInteger;

public class AtomicMethodsExample {
    public static void main(String[] args) {
        AtomicInteger atomic = new AtomicInteger(10);
        
        // Get and set
        System.out.println("Get: " + atomic.get());           // 10
        atomic.set(20);
        System.out.println("After set: " + atomic.get());     // 20
        
        // Get and increment/decrement
        System.out.println("Get and increment: " + atomic.getAndIncrement());  // 20
        System.out.println("Current: " + atomic.get());                        // 21
        System.out.println("Increment and get: " + atomic.incrementAndGet());  // 22
        
        System.out.println("Get and decrement: " + atomic.getAndDecrement());  // 22
        System.out.println("Decrement and get: " + atomic.decrementAndGet());  // 20
        
        // Get and add
        System.out.println("Get and add: " + atomic.getAndAdd(5));  // 20
        System.out.println("Current: " + atomic.get());             // 25
        System.out.println("Add and get: " + atomic.addAndGet(5));  // 30
        
        // Compare and set
        boolean success = atomic.compareAndSet(30, 100);
        System.out.println("Compare and set: " + success);  // true
        System.out.println("Current: " + atomic.get());     // 100
        
        // Get and update
        atomic.getAndUpdate(x -> x * 2);
        System.out.println("After update: " + atomic.get());  // 200
    }
}
```

#### Other Atomic Classes

```java
import java.util.concurrent.atomic.*;

public class OtherAtomicExample {
    public static void main(String[] args) {
        // AtomicLong
        AtomicLong atomicLong = new AtomicLong(100);
        atomicLong.incrementAndGet();
        System.out.println("AtomicLong: " + atomicLong.get());
        
        // AtomicBoolean
        AtomicBoolean atomicBoolean = new AtomicBoolean(false);
        atomicBoolean.set(true);
        System.out.println("AtomicBoolean: " + atomicBoolean.get());
        
        // AtomicReference
        AtomicReference<String> atomicRef = new AtomicReference<>("Hello");
        atomicRef.set("World");
        System.out.println("AtomicReference: " + atomicRef.get());
        
        // Compare and set
        atomicRef.compareAndSet("World", "Hello World");
        System.out.println("After CAS: " + atomicRef.get());
    }
}
```

### volatile vs Atomic

| Feature | volatile | Atomic Variables |
|---------|----------|-----------------|
| **Visibility** | Yes | Yes |
| **Atomicity** | No | Yes |
| **Use Case** | Simple flags | Counters, complex operations |
| **Performance** | Faster | Slightly slower |
| **Operations** | Read/Write only | Read-modify-write |

---

## Concurrent Collections

Thread-safe collection implementations.

### ConcurrentHashMap

Thread-safe HashMap with better concurrency than Hashtable.

```java
import java.util.concurrent.ConcurrentHashMap;

public class ConcurrentHashMapExample {
    public static void main(String[] args) throws InterruptedException {
        ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
        
        // Thread 1: Put operations
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                map.put("Key" + i, i);
            }
        });
        
        // Thread 2: Get operations
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                map.get("Key" + i);
            }
        });
        
        // Thread 3: Remove operations
        Thread t3 = new Thread(() -> {
            for (int i = 0; i < 500; i++) {
                map.remove("Key" + i);
            }
        });
        
        t1.start();
        t2.start();
        t3.start();
        
        t1.join();
        t2.join();
        t3.join();
        
        System.out.println("Size: " + map.size());
    }
}
```

#### ConcurrentHashMap Methods

```java
import java.util.concurrent.ConcurrentHashMap;

public class ConcurrentHashMapMethodsExample {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
        
        // Put if absent
        map.putIfAbsent("A", 1);
        map.putIfAbsent("A", 2);  // Won't replace
        System.out.println("A: " + map.get("A"));  // 1
        
        // Compute if absent
        map.computeIfAbsent("B", k -> k.length());
        System.out.println("B: " + map.get("B"));  // 1
        
        // Compute if present
        map.computeIfPresent("B", (k, v) -> v * 2);
        System.out.println("B after compute: " + map.get("B"));  // 2
        
        // Compute (always)
        map.compute("C", (k, v) -> v == null ? 1 : v + 1);
        System.out.println("C: " + map.get("C"));  // 1
        
        // Merge
        map.merge("C", 5, (oldVal, newVal) -> oldVal + newVal);
        System.out.println("C after merge: " + map.get("C"));  // 6
        
        // ForEach
        map.forEach((k, v) -> System.out.println(k + " = " + v));
    }
}
```

### CopyOnWriteArrayList

Thread-safe ArrayList where all mutative operations create a copy of underlying array.

```java
import java.util.concurrent.CopyOnWriteArrayList;

public class CopyOnWriteArrayListExample {
    public static void main(String[] args) throws InterruptedException {
        CopyOnWriteArrayList<Integer> list = new CopyOnWriteArrayList<>();
        
        // Thread 1: Add elements
        Thread writer = new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                list.add(i);
                System.out.println("Added: " + i);
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        
        // Thread 2: Read elements
        Thread reader = new Thread(() -> {
            for (int i = 0; i < 20; i++) {
                System.out.println("Reading, size: " + list.size());
                try {
                    Thread.sleep(50);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        
        writer.start();
        reader.start();
        
        writer.join();
        reader.join();
        
        System.out.println("Final list: " + list);
    }
}
```

**Characteristics:**
- Thread-safe
- No ConcurrentModificationException during iteration
- Expensive for writes (creates copy)
- Efficient for reads
- Best for read-heavy scenarios

### CopyOnWriteArraySet

```java
import java.util.concurrent.CopyOnWriteArraySet;

public class CopyOnWriteArraySetExample {
    public static void main(String[] args) {
        CopyOnWriteArraySet<String> set = new CopyOnWriteArraySet<>();
        
        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");
        set.add("Apple");  // Duplicate, won't be added
        
        System.out.println("Set: " + set);  // [Apple, Banana, Cherry]
        
        // Safe iteration during modification
        for (String item : set) {
            System.out.println(item);
            set.add("Date");  // No ConcurrentModificationException
        }
        
        System.out.println("Final set: " + set);
    }
}
```

### ConcurrentLinkedQueue

Thread-safe queue implementation.

```java
import java.util.concurrent.ConcurrentLinkedQueue;

public class ConcurrentLinkedQueueExample {
    public static void main(String[] args) throws InterruptedException {
        ConcurrentLinkedQueue<Integer> queue = new ConcurrentLinkedQueue<>();
        
        // Producer thread
        Thread producer = new Thread(() -> {
            for (int i = 1; i <= 10; i++) {
                queue.offer(i);
                System.out.println("Produced: " + i);
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        
        // Consumer thread
        Thread consumer = new Thread(() -> {
            for (int i = 1; i <= 10; i++) {
                Integer item = queue.poll();
                if (item != null) {
                    System.out.println("Consumed: " + item);
                }
                try {
                    Thread.sleep(150);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        
        producer.start();
        consumer.start();
        
        producer.join();
        consumer.join();
    }
}
```

### BlockingQueue

Queue that supports operations that wait for queue to become non-empty when retrieving, and wait for space when storing.

```java
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class BlockingQueueExample {
    public static void main(String[] args) {
        BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(5);
        
        // Producer
        Thread producer = new Thread(() -> {
            try {
                for (int i = 1; i <= 10; i++) {
                    queue.put(i);  // Blocks if queue is full
                    System.out.println("Produced: " + i);
                    Thread.sleep(100);
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        
        // Consumer
        Thread consumer = new Thread(() -> {
            try {
                for (int i = 1; i <= 10; i++) {
                    Integer item = queue.take();  // Blocks if queue is empty
                    System.out.println("Consumed: " + item);
                    Thread.sleep(200);
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        
        producer.start();
        consumer.start();
    }
}
```

### Concurrent Collections Comparison

| Collection | Thread-Safe | Lock Type | Best Use Case |
|------------|-------------|-----------|---------------|
| **ConcurrentHashMap** | Yes | Segment locking | Concurrent map operations |
| **CopyOnWriteArrayList** | Yes | Copy-on-write | Read-heavy scenarios |
| **CopyOnWriteArraySet** | Yes | Copy-on-write | Read-heavy unique elements |
| **ConcurrentLinkedQueue** | Yes | Non-blocking | High concurrency queue |
| **BlockingQueue** | Yes | Blocking | Producer-consumer pattern |

---

## Best Practices

### 1. Prefer High-Level Concurrency Utilities

```java
// Bad: Manual thread management
Thread t1 = new Thread(() -> { /* task */ });
Thread t2 = new Thread(() -> { /* task */ });
t1.start();
t2.start();

// Good: Use ExecutorService
ExecutorService executor = Executors.newFixedThreadPool(2);
executor.submit(() -> { /* task */ });
executor.submit(() -> { /* task */ });
executor.shutdown();
```

### 2. Use Immutable Objects

```java
// Immutable objects are inherently thread-safe
public final class ImmutablePoint {
    private final int x;
    private final int y;
    
    public ImmutablePoint(int x, int y) {
        this.x = x;
        this.y = y;
    }
    
    public int getX() { return x; }
    public int getY() { return y; }
}
```

### 3. Minimize Synchronization Scope

```java
// Bad: Entire method synchronized
public synchronized void method() {
    // non-critical code
    // critical code
    // non-critical code
}

// Good: Only critical section synchronized
public void method() {
    // non-critical code
    synchronized(this) {
        // critical code
    }
    // non-critical code
}
```

### 4. Avoid Deadlocks

```java
// Always acquire locks in same order
// Use timeout with tryLock()
Lock lock1 = new ReentrantLock();
Lock lock2 = new ReentrantLock();

if (lock1.tryLock()) {
    try {
        if (lock2.tryLock()) {
            try {
                // both locks acquired
            } finally {
                lock2.unlock();
            }
        }
    } finally {
        lock1.unlock();
    }
}
```

### 5. Use Concurrent Collections

```java
// Bad: Synchronized wrapper
Map<String, Integer> map = Collections.synchronizedMap(new HashMap<>());

// Good: ConcurrentHashMap
Map<String, Integer> map = new ConcurrentHashMap<>();
```

### 6. Handle InterruptedException Properly

```java
// Good: Restore interrupted status
try {
    Thread.sleep(1000);
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();  // Restore interrupted status
    // Handle interruption
}
```

### 7. Use volatile for Simple Flags

```java
// Good for simple flags
private volatile boolean stopFlag = false;

public void stop() {
    stopFlag = true;
}

public void run() {
    while (!stopFlag) {
        // do work
    }
}
```

### 8. Prefer Callable over Runnable

```java
// Good: Can return result and throw exceptions
ExecutorService executor = Executors.newFixedThreadPool(2);
Future<Integer> future = executor.submit(() -> {
    // do computation
    return result;
});
Integer result = future.get();
```

### 9. Always Shutdown ExecutorService

```java
ExecutorService executor = Executors.newFixedThreadPool(2);
try {
    // submit tasks
} finally {
    executor.shutdown();
    executor.awaitTermination(60, TimeUnit.SECONDS);
}
```

### 10. Avoid Thread.stop(), Thread.suspend()

```java
// Bad: Deprecated and unsafe
// thread.stop();

// Good: Use flag to stop thread
private volatile boolean running = true;

public void stopThread() {
    running = false;
}

public void run() {
    while (running) {
        // do work
    }
}
```

---

## Summary

Multithreading and concurrency in Java enable efficient parallel execution:

### Core Concepts
- **Thread**: Smallest unit of execution
- **Lifecycle**: NEW → RUNNABLE → RUNNING → TERMINATED (with BLOCKED/WAITING states)
- **Creation**: Extend Thread, implement Runnable, or use lambda expressions

### Synchronization
- **synchronized**: Method or block-level locking
- **ReentrantLock**: More flexible explicit locking
- **ReadWriteLock**: Multiple readers or single writer
- **Deadlock**: Prevention through consistent lock ordering

### Communication
- **wait(), notify(), notifyAll()**: Inter-thread communication
- Producer-Consumer pattern implementation

### Thread Pools
- **ExecutorService**: Manages thread pools
- **Types**: Fixed, Cached, Single, Scheduled
- **Benefits**: Resource management, reusability, scalability

### Advanced Features
- **Callable**: Returns result, throws exceptions
- **Future**: Represents async computation result
- **CompletableFuture**: Advanced async programming

### Thread Safety
- **volatile**: Visibility guarantee for variables
- **Atomic**: Thread-safe operations (AtomicInteger, AtomicBoolean, etc.)
- **Concurrent Collections**: ConcurrentHashMap, CopyOnWriteArrayList, BlockingQueue

### Best Practices
1. Use high-level concurrency utilities
2. Prefer immutable objects
3. Minimize synchronization scope
4. Avoid deadlocks
5. Use concurrent collections
6. Handle interruptions properly
7. Always shutdown executors
8. Use appropriate synchronization mechanism

Multithreading is powerful but complex. Proper understanding and application of these concepts are essential for building efficient, scalable concurrent applications.

---

# 8. Java I/O (Input/Output)

Java I/O (Input/Output) is used to process input and produce output. Java provides a rich set of classes in `java.io` and `java.nio` packages for handling I/O operations.

## I/O Stream Hierarchy

```
Object
├── InputStream (abstract)
│   ├── FileInputStream
│   ├── ByteArrayInputStream
│   ├── FilterInputStream
│   │   └── BufferedInputStream
│   │   └── DataInputStream
│   └── ObjectInputStream
├── OutputStream (abstract)
│   ├── FileOutputStream
│   ├── ByteArrayOutputStream
│   ├── FilterOutputStream
│   │   └── BufferedOutputStream
│   │   └── DataOutputStream
│   └── ObjectOutputStream
├── Reader (abstract)
│   ├── InputStreamReader
│   │   └── FileReader
│   ├── BufferedReader
│   ├── CharArrayReader
│   └── StringReader
└── Writer (abstract)
    ├── OutputStreamWriter
    │   └── FileWriter
    ├── BufferedWriter
    ├── CharArrayWriter
    ├── StringWriter
    └── PrintWriter
```

---

## File Handling

### File Class

Represents file and directory pathnames. Used for file/directory operations (not for reading/writing content).

#### Creating File Object

```java
import java.io.File;

public class FileExample {
    public static void main(String[] args) {
        // Different ways to create File object
        File file1 = new File("test.txt");
        File file2 = new File("C:\\Users\\Documents\\test.txt");
        File file3 = new File("C:\\Users\\Documents", "test.txt");
        
        File directory = new File("myDir");
        File file4 = new File(directory, "test.txt");
        
        System.out.println("File path: " + file1.getPath());
    }
}
```

#### File Methods

```java
import java.io.File;
import java.io.IOException;

public class FileMethodsExample {
    public static void main(String[] args) throws IOException {
        File file = new File("test.txt");
        
        // Create file
        if (file.createNewFile()) {
            System.out.println("File created: " + file.getName());
        } else {
            System.out.println("File already exists");
        }
        
        // File properties
        System.out.println("File name: " + file.getName());
        System.out.println("Absolute path: " + file.getAbsolutePath());
        System.out.println("Canonical path: " + file.getCanonicalPath());
        System.out.println("Parent: " + file.getParent());
        System.out.println("Path: " + file.getPath());
        
        // File checks
        System.out.println("Exists: " + file.exists());
        System.out.println("Is file: " + file.isFile());
        System.out.println("Is directory: " + file.isDirectory());
        System.out.println("Is hidden: " + file.isHidden());
        System.out.println("Can read: " + file.canRead());
        System.out.println("Can write: " + file.canWrite());
        System.out.println("Can execute: " + file.canExecute());
        
        // File info
        System.out.println("Length: " + file.length() + " bytes");
        System.out.println("Last modified: " + file.lastModified());
        
        // Delete file
        // file.delete();
    }
}
```

#### Directory Operations

```java
import java.io.File;

public class DirectoryExample {
    public static void main(String[] args) {
        File directory = new File("myDirectory");
        
        // Create directory
        if (directory.mkdir()) {
            System.out.println("Directory created");
        }
        
        // Create nested directories
        File nestedDir = new File("parent/child/grandchild");
        if (nestedDir.mkdirs()) {
            System.out.println("Nested directories created");
        }
        
        // List files in directory
        File dir = new File(".");
        String[] files = dir.list();
        System.out.println("Files in current directory:");
        for (String file : files) {
            System.out.println(file);
        }
        
        // List files as File objects
        File[] fileObjects = dir.listFiles();
        System.out.println("\nFiles and directories:");
        for (File file : fileObjects) {
            if (file.isDirectory()) {
                System.out.println("[DIR] " + file.getName());
            } else {
                System.out.println("[FILE] " + file.getName());
            }
        }
        
        // Delete directory (must be empty)
        // directory.delete();
    }
}
```

#### File Filter

```java
import java.io.File;
import java.io.FilenameFilter;

public class FileFilterExample {
    public static void main(String[] args) {
        File directory = new File(".");
        
        // Filter for .txt files
        FilenameFilter txtFilter = new FilenameFilter() {
            @Override
            public boolean accept(File dir, String name) {
                return name.endsWith(".txt");
            }
        };
        
        // Using lambda (Java 8+)
        FilenameFilter javaFilter = (dir, name) -> name.endsWith(".java");
        
        String[] txtFiles = directory.list(txtFilter);
        System.out.println("Text files:");
        for (String file : txtFiles) {
            System.out.println(file);
        }
        
        File[] javaFiles = directory.listFiles(javaFilter);
        System.out.println("\nJava files:");
        for (File file : javaFiles) {
            System.out.println(file.getName());
        }
    }
}
```

### FileReader

Character stream for reading files.

```java
import java.io.FileReader;
import java.io.IOException;

public class FileReaderExample {
    public static void main(String[] args) {
        // Method 1: Read character by character
        try (FileReader reader = new FileReader("test.txt")) {
            int character;
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // Method 2: Read into character array
        try (FileReader reader = new FileReader("test.txt")) {
            char[] buffer = new char[100];
            int charsRead = reader.read(buffer);
            System.out.println("Characters read: " + charsRead);
            System.out.println(new String(buffer, 0, charsRead));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### FileWriter

Character stream for writing files.

```java
import java.io.FileWriter;
import java.io.IOException;

public class FileWriterExample {
    public static void main(String[] args) {
        // Write to file (overwrites existing content)
        try (FileWriter writer = new FileWriter("output.txt")) {
            writer.write("Hello, World!\n");
            writer.write("This is a test file.\n");
            writer.write("Java I/O is interesting.");
            System.out.println("Data written to file");
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // Append to file
        try (FileWriter writer = new FileWriter("output.txt", true)) {
            writer.write("\nAppended line.");
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // Write character array
        try (FileWriter writer = new FileWriter("output2.txt")) {
            char[] data = {'H', 'e', 'l', 'l', 'o'};
            writer.write(data);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### Complete File Copy Example

```java
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class FileCopyExample {
    public static void main(String[] args) {
        try (
            FileReader reader = new FileReader("source.txt");
            FileWriter writer = new FileWriter("destination.txt")
        ) {
            int character;
            while ((character = reader.read()) != -1) {
                writer.write(character);
            }
            System.out.println("File copied successfully");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

---

## Byte Streams vs Character Streams

### Byte Streams

Handle I/O of raw binary data (8-bit bytes). Base classes: `InputStream` and `OutputStream`.

#### InputStream (Abstract)

```java
import java.io.FileInputStream;
import java.io.IOException;

public class InputStreamExample {
    public static void main(String[] args) {
        try (FileInputStream fis = new FileInputStream("data.bin")) {
            int byteData;
            while ((byteData = fis.read()) != -1) {
                System.out.print(byteData + " ");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### OutputStream (Abstract)

```java
import java.io.FileOutputStream;
import java.io.IOException;

public class OutputStreamExample {
    public static void main(String[] args) {
        try (FileOutputStream fos = new FileOutputStream("data.bin")) {
            byte[] data = {65, 66, 67, 68, 69};  // A, B, C, D, E
            fos.write(data);
            System.out.println("Data written to file");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### FileInputStream and FileOutputStream

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileByteCopyExample {
    public static void main(String[] args) {
        try (
            FileInputStream fis = new FileInputStream("source.jpg");
            FileOutputStream fos = new FileOutputStream("destination.jpg")
        ) {
            byte[] buffer = new byte[1024];
            int bytesRead;
            
            while ((bytesRead = fis.read(buffer)) != -1) {
                fos.write(buffer, 0, bytesRead);
            }
            
            System.out.println("File copied successfully");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### Character Streams

Handle I/O of character data (16-bit Unicode). Base classes: `Reader` and `Writer`.

**Advantages:**
- Automatic character encoding/decoding
- Better for text processing
- Platform-independent

#### Reader (Abstract)

```java
import java.io.FileReader;
import java.io.IOException;

public class ReaderExample {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("text.txt")) {
            int character;
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### Writer (Abstract)

```java
import java.io.FileWriter;
import java.io.IOException;

public class WriterExample {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("text.txt")) {
            writer.write("Hello, 世界!\n");  // Supports Unicode
            writer.write("Java I/O Streams");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### Byte Streams vs Character Streams

| Feature | Byte Streams | Character Streams |
|---------|--------------|-------------------|
| **Base Classes** | InputStream, OutputStream | Reader, Writer |
| **Data Type** | byte (8-bit) | char (16-bit Unicode) |
| **Use Case** | Binary data (images, audio) | Text data |
| **Encoding** | No automatic encoding | Automatic encoding/decoding |
| **Performance** | Faster for binary | Better for text |
| **Examples** | FileInputStream, FileOutputStream | FileReader, FileWriter |

### Bridge Classes

Convert between byte and character streams.

#### InputStreamReader

```java
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.IOException;

public class InputStreamReaderExample {
    public static void main(String[] args) {
        try (
            FileInputStream fis = new FileInputStream("text.txt");
            InputStreamReader isr = new InputStreamReader(fis, "UTF-8")
        ) {
            int character;
            while ((character = isr.read()) != -1) {
                System.out.print((char) character);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### OutputStreamWriter

```java
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.io.IOException;

public class OutputStreamWriterExample {
    public static void main(String[] args) {
        try (
            FileOutputStream fos = new FileOutputStream("text.txt");
            OutputStreamWriter osw = new OutputStreamWriter(fos, "UTF-8")
        ) {
            osw.write("Hello, World! 你好世界");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

---

## Buffered Streams

Buffered streams improve performance by reducing the number of I/O operations. They use an internal buffer to read/write data in chunks.

### BufferedReader

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BufferedReaderExample {
    public static void main(String[] args) {
        // Read file line by line
        try (
            FileReader fr = new FileReader("test.txt");
            BufferedReader br = new BufferedReader(fr)
        ) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // With custom buffer size
        try (
            FileReader fr = new FileReader("test.txt");
            BufferedReader br = new BufferedReader(fr, 8192)  // 8KB buffer
        ) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### BufferedReader Methods

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BufferedReaderMethodsExample {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("test.txt"))) {
            // Read single character
            int ch = br.read();
            System.out.println("First character: " + (char) ch);
            
            // Read line
            String line = br.readLine();
            System.out.println("First line: " + line);
            
            // Read into char array
            char[] buffer = new char[100];
            int charsRead = br.read(buffer);
            System.out.println("Characters read: " + charsRead);
            
            // Skip characters
            br.skip(10);
            
            // Mark and reset (if supported)
            if (br.markSupported()) {
                br.mark(100);  // Mark current position
                String nextLine = br.readLine();
                br.reset();    // Go back to marked position
            }
            
            // Check if ready
            if (br.ready()) {
                System.out.println("Stream is ready");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### BufferedWriter

```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class BufferedWriterExample {
    public static void main(String[] args) {
        try (
            FileWriter fw = new FileWriter("output.txt");
            BufferedWriter bw = new BufferedWriter(fw)
        ) {
            bw.write("First line");
            bw.newLine();  // Platform-independent newline
            bw.write("Second line");
            bw.newLine();
            bw.write("Third line");
            
            System.out.println("Data written successfully");
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // With custom buffer size
        try (
            FileWriter fw = new FileWriter("output2.txt");
            BufferedWriter bw = new BufferedWriter(fw, 8192)
        ) {
            for (int i = 1; i <= 100; i++) {
                bw.write("Line " + i);
                bw.newLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### BufferedInputStream

```java
import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;

public class BufferedInputStreamExample {
    public static void main(String[] args) {
        try (
            FileInputStream fis = new FileInputStream("data.bin");
            BufferedInputStream bis = new BufferedInputStream(fis)
        ) {
            byte[] buffer = new byte[1024];
            int bytesRead;
            
            while ((bytesRead = bis.read(buffer)) != -1) {
                // Process buffer
                System.out.println("Read " + bytesRead + " bytes");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### BufferedOutputStream

```java
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class BufferedOutputStreamExample {
    public static void main(String[] args) {
        try (
            FileOutputStream fos = new FileOutputStream("data.bin");
            BufferedOutputStream bos = new BufferedOutputStream(fos)
        ) {
            byte[] data = "Hello, Buffered World!".getBytes();
            bos.write(data);
            
            // Must flush to ensure data is written
            bos.flush();
            
            System.out.println("Data written successfully");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### PrintWriter

Convenience class for writing formatted text.

```java
import java.io.PrintWriter;
import java.io.IOException;

public class PrintWriterExample {
    public static void main(String[] args) {
        try (PrintWriter writer = new PrintWriter("output.txt")) {
            // Print various data types
            writer.println("String");
            writer.println(123);
            writer.println(45.67);
            writer.println(true);
            writer.println('A');
            
            // Formatted output
            writer.printf("Name: %s, Age: %d, Salary: %.2f\n", "John", 30, 50000.50);
            
            // Check for errors
            if (writer.checkError()) {
                System.out.println("Error occurred");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### Performance Comparison

```java
import java.io.*;

public class BufferedPerformanceExample {
    public static void main(String[] args) throws IOException {
        String filename = "large_file.txt";
        
        // Without buffering
        long start = System.currentTimeMillis();
        try (FileReader fr = new FileReader(filename)) {
            int ch;
            while ((ch = fr.read()) != -1) {
                // Read character by character
            }
        }
        long end = System.currentTimeMillis();
        System.out.println("Without buffering: " + (end - start) + "ms");
        
        // With buffering
        start = System.currentTimeMillis();
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            int ch;
            while ((ch = br.read()) != -1) {
                // Read character by character (buffered)
            }
        }
        end = System.currentTimeMillis();
        System.out.println("With buffering: " + (end - start) + "ms");
    }
}
```

---

## Serialization and Deserialization

Serialization is the process of converting an object into a byte stream. Deserialization is the reverse process.

**Use Cases:**
- Persist objects to disk
- Send objects over network
- Deep cloning objects
- Caching

### Serializable Interface

Objects must implement `Serializable` interface (marker interface).

```java
import java.io.Serializable;

public class Employee implements Serializable {
    private static final long serialVersionUID = 1L;  // Version control
    
    private String name;
    private int age;
    private double salary;
    
    public Employee(String name, int age, double salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    
    @Override
    public String toString() {
        return "Employee{name='" + name + "', age=" + age + ", salary=" + salary + "}";
    }
}
```

### ObjectOutputStream (Serialization)

```java
import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
import java.io.IOException;

public class SerializationExample {
    public static void main(String[] args) {
        Employee emp = new Employee("John Doe", 30, 50000.0);
        
        try (
            FileOutputStream fos = new FileOutputStream("employee.ser");
            ObjectOutputStream oos = new ObjectOutputStream(fos)
        ) {
            oos.writeObject(emp);
            System.out.println("Object serialized: " + emp);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### ObjectInputStream (Deserialization)

```java
import java.io.FileInputStream;
import java.io.ObjectInputStream;
import java.io.IOException;

public class DeserializationExample {
    public static void main(String[] args) {
        try (
            FileInputStream fis = new FileInputStream("employee.ser");
            ObjectInputStream ois = new ObjectInputStream(fis)
        ) {
            Employee emp = (Employee) ois.readObject();
            System.out.println("Object deserialized: " + emp);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

### Serializing Multiple Objects

```java
import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class MultipleObjectsExample {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee("Alice", 25, 45000));
        employees.add(new Employee("Bob", 30, 55000));
        employees.add(new Employee("Charlie", 35, 65000));
        
        // Serialize list
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream("employees.ser"))) {
            oos.writeObject(employees);
            System.out.println("List serialized");
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // Deserialize list
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream("employees.ser"))) {
            @SuppressWarnings("unchecked")
            List<Employee> loadedEmployees = (List<Employee>) ois.readObject();
            System.out.println("List deserialized:");
            loadedEmployees.forEach(System.out::println);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

### transient Keyword

Fields marked as `transient` are not serialized.

```java
import java.io.Serializable;

public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private String username;
    private transient String password;  // Won't be serialized
    private int age;
    
    public User(String username, String password, int age) {
        this.username = username;
        this.password = password;
        this.age = age;
    }
    
    @Override
    public String toString() {
        return "User{username='" + username + "', password='" + password + 
               "', age=" + age + "}";
    }
}

// After deserialization, password will be null
```

### static Fields

Static fields are not serialized (belong to class, not object).

```java
import java.io.Serializable;

public class Counter implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private int instanceCount;
    private static int staticCount;  // Won't be serialized
    
    public Counter(int instanceCount, int staticCount) {
        this.instanceCount = instanceCount;
        Counter.staticCount = staticCount;
    }
    
    @Override
    public String toString() {
        return "Counter{instanceCount=" + instanceCount + 
               ", staticCount=" + staticCount + "}";
    }
}
```

### serialVersionUID

Used for version control during deserialization.

```java
import java.io.Serializable;

public class Person implements Serializable {
    // Explicit serialVersionUID
    private static final long serialVersionUID = 1L;
    
    private String name;
    private int age;
    
    // If class structure changes, update serialVersionUID
    // Otherwise, InvalidClassException may occur
}
```

### Custom Serialization

Override `writeObject()` and `readObject()` methods.

```java
import java.io.*;

public class SecureUser implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private String username;
    private String password;
    
    public SecureUser(String username, String password) {
        this.username = username;
        this.password = password;
    }
    
    // Custom serialization
    private void writeObject(ObjectOutputStream oos) throws IOException {
        oos.defaultWriteObject();  // Write non-transient fields
        // Custom logic: encrypt password
        String encryptedPassword = encrypt(password);
        oos.writeObject(encryptedPassword);
    }
    
    // Custom deserialization
    private void readObject(ObjectInputStream ois) 
            throws IOException, ClassNotFoundException {
        ois.defaultReadObject();  // Read non-transient fields
        // Custom logic: decrypt password
        String encryptedPassword = (String) ois.readObject();
        this.password = decrypt(encryptedPassword);
    }
    
    private String encrypt(String data) {
        // Simple encryption (use proper encryption in production)
        return new StringBuilder(data).reverse().toString();
    }
    
    private String decrypt(String data) {
        return new StringBuilder(data).reverse().toString();
    }
    
    @Override
    public String toString() {
        return "SecureUser{username='" + username + "', password='" + password + "'}";
    }
}
```

### Externalizable Interface

More control over serialization process.

```java
import java.io.*;

public class CustomEmployee implements Externalizable {
    private String name;
    private int age;
    private double salary;
    
    // Required: No-arg constructor
    public CustomEmployee() {
    }
    
    public CustomEmployee(String name, int age, double salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    
    @Override
    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeObject(name);
        out.writeInt(age);
        out.writeDouble(salary);
    }
    
    @Override
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
        name = (String) in.readObject();
        age = in.readInt();
        salary = in.readDouble();
    }
    
    @Override
    public String toString() {
        return "CustomEmployee{name='" + name + "', age=" + age + 
               ", salary=" + salary + "}";
    }
}
```

### Serialization Best Practices

```java
import java.io.Serializable;

public class BestPracticesExample implements Serializable {
    // 1. Always declare serialVersionUID
    private static final long serialVersionUID = 1L;
    
    // 2. Use transient for sensitive/non-serializable data
    private transient String temporaryData;
    
    // 3. Handle non-serializable fields
    private transient Thread thread;  // Thread is not serializable
    
    private String name;
    private int age;
    
    // 4. Implement custom serialization if needed
    private void writeObject(ObjectOutputStream oos) throws IOException {
        oos.defaultWriteObject();
        // Custom serialization logic
    }
    
    private void readObject(ObjectInputStream ois) 
            throws IOException, ClassNotFoundException {
        ois.defaultReadObject();
        // Custom deserialization logic
        // Re-initialize transient fields if needed
    }
}
```

---

## NIO (New I/O)

Java NIO (Non-blocking I/O or New I/O) was introduced in Java 1.4 and enhanced in Java 7 (NIO.2). It provides better performance and more features than traditional I/O.

**Key Features:**
- Non-blocking I/O operations
- Buffers for data manipulation
- Channels for data transfer
- Selectors for multiplexing
- File system operations

### Core Components

1. **Buffer**: Container for data
2. **Channel**: Connection for data transfer
3. **Selector**: Multiplexes I/O operations

### Buffers

Containers for specific primitive types.

#### Buffer Types
- `ByteBuffer`
- `CharBuffer`
- `ShortBuffer`
- `IntBuffer`
- `LongBuffer`
- `FloatBuffer`
- `DoubleBuffer`

#### ByteBuffer Example

```java
import java.nio.ByteBuffer;

public class ByteBufferExample {
    public static void main(String[] args) {
        // Create buffer with capacity 10
        ByteBuffer buffer = ByteBuffer.allocate(10);
        
        System.out.println("Initial state:");
        printBufferState(buffer);
        
        // Put data into buffer
        buffer.put((byte) 10);
        buffer.put((byte) 20);
        buffer.put((byte) 30);
        
        System.out.println("\nAfter putting data:");
        printBufferState(buffer);
        
        // Flip buffer for reading
        buffer.flip();
        
        System.out.println("\nAfter flip:");
        printBufferState(buffer);
        
        // Read data from buffer
        while (buffer.hasRemaining()) {
            System.out.print(buffer.get() + " ");
        }
        System.out.println();
        
        System.out.println("\nAfter reading:");
        printBufferState(buffer);
        
        // Clear buffer for reuse
        buffer.clear();
        
        System.out.println("\nAfter clear:");
        printBufferState(buffer);
    }
    
    private static void printBufferState(ByteBuffer buffer) {
        System.out.println("Capacity: " + buffer.capacity());
        System.out.println("Position: " + buffer.position());
        System.out.println("Limit: " + buffer.limit());
        System.out.println("Remaining: " + buffer.remaining());
    }
}
```

#### Buffer Operations

```java
import java.nio.ByteBuffer;

public class BufferOperationsExample {
    public static void main(String[] args) {
        ByteBuffer buffer = ByteBuffer.allocate(10);
        
        // Put operations
        buffer.put((byte) 1);
        buffer.put((byte) 2);
        buffer.put((byte) 3);
        
        // Mark position
        buffer.mark();
        
        buffer.put((byte) 4);
        buffer.put((byte) 5);
        
        // Reset to marked position
        buffer.reset();
        System.out.println("Position after reset: " + buffer.position());  // 3
        
        // Rewind (position = 0)
        buffer.rewind();
        System.out.println("Position after rewind: " + buffer.position());  // 0
        
        // Compact (copy unread data to beginning)
        buffer.position(2);
        buffer.compact();
        System.out.println("Position after compact: " + buffer.position());
        
        // Direct vs Non-direct buffers
        ByteBuffer directBuffer = ByteBuffer.allocateDirect(10);
        System.out.println("Is direct: " + directBuffer.isDirect());  // true
        
        // Wrap array into buffer
        byte[] array = {1, 2, 3, 4, 5};
        ByteBuffer wrappedBuffer = ByteBuffer.wrap(array);
    }
}
```

### Channels

Channels represent connections to entities capable of performing I/O operations.

#### FileChannel

```java
import java.io.RandomAccessFile;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.io.IOException;

public class FileChannelExample {
    public static void main(String[] args) {
        // Writing to file
        try (RandomAccessFile file = new RandomAccessFile("data.txt", "rw");
             FileChannel channel = file.getChannel()) {
            
            String data = "Hello, NIO FileChannel!";
            ByteBuffer buffer = ByteBuffer.allocate(1024);
            
            buffer.put(data.getBytes());
            buffer.flip();  // Prepare for writing
            
            channel.write(buffer);
            System.out.println("Data written to file");
            
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // Reading from file
        try (RandomAccessFile file = new RandomAccessFile("data.txt", "r");
             FileChannel channel = file.getChannel()) {
            
            ByteBuffer buffer = ByteBuffer.allocate(1024);
            int bytesRead = channel.read(buffer);
            
            while (bytesRead != -1) {
                buffer.flip();  // Prepare for reading
                
                while (buffer.hasRemaining()) {
                    System.out.print((char) buffer.get());
                }
                
                buffer.clear();  // Prepare for next read
                bytesRead = channel.read(buffer);
            }
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### File Copy with FileChannel

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.channels.FileChannel;
import java.io.IOException;

public class FileChannelCopyExample {
    public static void main(String[] args) {
        try (
            FileInputStream fis = new FileInputStream("source.txt");
            FileOutputStream fos = new FileOutputStream("destination.txt");
            FileChannel sourceChannel = fis.getChannel();
            FileChannel destChannel = fos.getChannel()
        ) {
            // Transfer from source to destination
            long position = 0;
            long count = sourceChannel.size();
            sourceChannel.transferTo(position, count, destChannel);
            
            // Alternative: transferFrom
            // destChannel.transferFrom(sourceChannel, 0, sourceChannel.size());
            
            System.out.println("File copied successfully");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### Path and Paths (Java 7+)

Path represents a file or directory path.

```java
import java.nio.file.Path;
import java.nio.file.Paths;

public class PathExample {
    public static void main(String[] args) {
        // Create Path objects
        Path path1 = Paths.get("test.txt");
        Path path2 = Paths.get("C:", "Users", "Documents", "test.txt");
        Path path3 = Paths.get("C:/Users/Documents/test.txt");
        
        // Path information
        System.out.println("File name: " + path1.getFileName());
        System.out.println("Parent: " + path1.getParent());
        System.out.println("Root: " + path1.getRoot());
        System.out.println("Absolute path: " + path1.toAbsolutePath());
        
        // Path operations
        Path path = Paths.get("folder/subfolder/file.txt");
        System.out.println("Name count: " + path.getNameCount());
        System.out.println("Subpath: " + path.subpath(0, 2));
        
        // Resolve (join paths)
        Path base = Paths.get("C:/Users");
        Path resolved = base.resolve("Documents/file.txt");
        System.out.println("Resolved: " + resolved);
        
        // Relativize
        Path path4 = Paths.get("C:/Users/Documents");
        Path path5 = Paths.get("C:/Users/Pictures");
        Path relative = path4.relativize(path5);
        System.out.println("Relative: " + relative);  // ../Pictures
        
        // Normalize (remove redundant elements)
        Path path6 = Paths.get("C:/Users/../Users/Documents/./file.txt");
        Path normalized = path6.normalize();
        System.out.println("Normalized: " + normalized);
    }
}
```

### Files Class (Java 7+)

Utility class for file operations.

#### Creating Files and Directories

```java
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;

public class FilesCreateExample {
    public static void main(String[] args) {
        try {
            // Create file
            Path file = Paths.get("newfile.txt");
            if (!Files.exists(file)) {
                Files.createFile(file);
                System.out.println("File created");
            }
            
            // Create directory
            Path dir = Paths.get("newdirectory");
            if (!Files.exists(dir)) {
                Files.createDirectory(dir);
                System.out.println("Directory created");
            }
            
            // Create nested directories
            Path nestedDir = Paths.get("parent/child/grandchild");
            Files.createDirectories(nestedDir);
            System.out.println("Nested directories created");
            
            // Create temp file
            Path tempFile = Files.createTempFile("prefix", ".txt");
            System.out.println("Temp file: " + tempFile);
            
            // Create temp directory
            Path tempDir = Files.createTempDirectory("tempdir");
            System.out.println("Temp directory: " + tempDir);
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### Reading and Writing Files

```java
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.charset.StandardCharsets;
import java.io.IOException;
import java.util.List;
import java.util.Arrays;

public class FilesReadWriteExample {
    public static void main(String[] args) {
        Path file = Paths.get("data.txt");
        
        try {
            // Write bytes
            byte[] data = "Hello, NIO!".getBytes();
            Files.write(file, data);
            
            // Write lines
            List<String> lines = Arrays.asList("Line 1", "Line 2", "Line 3");
            Files.write(file, lines, StandardCharsets.UTF_8);
            
            // Read all bytes
            byte[] bytes = Files.readAllBytes(file);
            System.out.println(new String(bytes));
            
            // Read all lines
            List<String> readLines = Files.readAllLines(file, StandardCharsets.UTF_8);
            readLines.forEach(System.out::println);
            
            // Read as String (Java 11+)
            // String content = Files.readString(file);
            
            // Write String (Java 11+)
            // Files.writeString(file, "New content");
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### File Operations

```java
import java.nio.file.*;
import java.io.IOException;

public class FilesOperationsExample {
    public static void main(String[] args) {
        try {
            Path source = Paths.get("source.txt");
            Path target = Paths.get("target.txt");
            
            // Copy file
            Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
            System.out.println("File copied");
            
            // Move file
            Path moved = Paths.get("moved.txt");
            Files.move(target, moved, StandardCopyOption.REPLACE_EXISTING);
            System.out.println("File moved");
            
            // Delete file
            Files.delete(moved);
            System.out.println("File deleted");
            
            // Delete if exists
            boolean deleted = Files.deleteIfExists(Paths.get("nonexistent.txt"));
            System.out.println("Deleted: " + deleted);
            
            // File attributes
            Path file = Paths.get("test.txt");
            System.out.println("Exists: " + Files.exists(file));
            System.out.println("Is directory: " + Files.isDirectory(file));
            System.out.println("Is regular file: " + Files.isRegularFile(file));
            System.out.println("Is readable: " + Files.isReadable(file));
            System.out.println("Is writable: " + Files.isWritable(file));
            System.out.println("Is executable: " + Files.isExecutable(file));
            System.out.println("Size: " + Files.size(file) + " bytes");
            System.out.println("Last modified: " + Files.getLastModifiedTime(file));
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### Walking Directory Tree

```java
import java.nio.file.*;
import java.io.IOException;
import java.util.stream.Stream;

public class WalkDirectoryExample {
    public static void main(String[] args) {
        Path directory = Paths.get(".");
        
        try {
            // Walk with Stream (Java 8+)
            System.out.println("Files in directory:");
            try (Stream<Path> paths = Files.walk(directory, 2)) {
                paths.filter(Files::isRegularFile)
                     .forEach(System.out::println);
            }
            
            // List directory contents
            System.out.println("\nDirect children:");
            try (Stream<Path> paths = Files.list(directory)) {
                paths.forEach(System.out::println);
            }
            
            // Find files
            System.out.println("\nFind .txt files:");
            try (Stream<Path> paths = Files.find(directory, 3,
                    (path, attrs) -> path.toString().endsWith(".txt"))) {
                paths.forEach(System.out::println);
            }
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### Using FileVisitor

```java
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.io.IOException;

public class FileVisitorExample {
    public static void main(String[] args) throws IOException {
        Path directory = Paths.get(".");
        
        Files.walkFileTree(directory, new SimpleFileVisitor<Path>() {
            @Override
            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) {
                System.out.println("File: " + file);
                return FileVisitResult.CONTINUE;
            }
            
            @Override
            public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) {
                System.out.println("Directory: " + dir);
                return FileVisitResult.CONTINUE;
            }
            
            @Override
            public FileVisitResult visitFileFailed(Path file, IOException exc) {
                System.err.println("Failed to visit: " + file);
                return FileVisitResult.CONTINUE;
            }
        });
    }
}
```

### Watch Service

Monitor file system changes.

```java
import java.nio.file.*;
import java.io.IOException;

public class WatchServiceExample {
    public static void main(String[] args) {
        try {
            WatchService watchService = FileSystems.getDefault().newWatchService();
            Path directory = Paths.get(".");
            
            // Register directory
            directory.register(watchService,
                StandardWatchEventKinds.ENTRY_CREATE,
                StandardWatchEventKinds.ENTRY_MODIFY,
                StandardWatchEventKinds.ENTRY_DELETE);
            
            System.out.println("Watching directory for changes...");
            
            while (true) {
                WatchKey key = watchService.take();  // Blocks until event occurs
                
                for (WatchEvent<?> event : key.pollEvents()) {
                    WatchEvent.Kind<?> kind = event.kind();
                    Path filename = (Path) event.context();
                    
                    System.out.println(kind.name() + ": " + filename);
                }
                
                // Reset key
                boolean valid = key.reset();
                if (!valid) {
                    break;
                }
            }
            
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

### NIO vs Traditional I/O

| Feature | Traditional I/O | NIO |
|---------|----------------|-----|
| **Blocking** | Blocking | Non-blocking (optional) |
| **Streams** | Stream-oriented | Buffer-oriented |
| **Performance** | Lower | Higher |
| **Channels** | No | Yes |
| **Selectors** | No | Yes (multiplexing) |
| **File Operations** | Limited | Rich API (Java 7+) |
| **Use Case** | Simple I/O | High-performance, scalable I/O |

---

## Best Practices

### 1. Always Close Resources

```java
// Good: Use try-with-resources
try (FileReader reader = new FileReader("file.txt")) {
    // Use reader
} catch (IOException e) {
    e.printStackTrace();
}
```

### 2. Use Buffered Streams

```java
// Good: Use buffering for better performance
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### 3. Choose Appropriate Stream Type

```java
// For text files: Use character streams
FileReader reader = new FileReader("text.txt");

// For binary files: Use byte streams
FileInputStream input = new FileInputStream("image.jpg");
```

### 4. Handle Exceptions Properly

```java
try {
    // I/O operations
} catch (FileNotFoundException e) {
    System.err.println("File not found: " + e.getMessage());
} catch (IOException e) {
    System.err.println("I/O error: " + e.getMessage());
}
```

### 5. Use NIO for Large Files

```java
// Good: NIO for large files
Path file = Paths.get("large_file.txt");
try (Stream<String> lines = Files.lines(file)) {
    lines.forEach(System.out::println);
} catch (IOException e) {
    e.printStackTrace();
}
```

### 6. Specify Character Encoding

```java
// Good: Explicit encoding
try (
    FileOutputStream fos = new FileOutputStream("file.txt");
    OutputStreamWriter writer = new OutputStreamWriter(fos, StandardCharsets.UTF_8)
) {
    writer.write("Hello, 世界!");
} catch (IOException e) {
    e.printStackTrace();
}
```

### 7. Flush Output Streams

```java
try (BufferedWriter writer = new BufferedWriter(new FileWriter("file.txt"))) {
    writer.write("Important data");
    writer.flush();  // Ensure data is written
} catch (IOException e) {
    e.printStackTrace();
}
```

### 8. Use serialVersionUID

```java
public class MyClass implements Serializable {
    private static final long serialVersionUID = 1L;  // Always include
    // Class members
}
```

### 9. Check File Existence

```java
// Traditional I/O
File file = new File("file.txt");
if (file.exists()) {
    // Proceed
}

// NIO
Path path = Paths.get("file.txt");
if (Files.exists(path)) {
    // Proceed
}
```

### 10. Use Modern NIO.2 API

```java
// Good: Use Files class (Java 7+)
Path path = Paths.get("file.txt");
List<String> lines = Files.readAllLines(path);
```

---

## Summary

Java I/O provides comprehensive facilities for input and output operations:

### File Handling
- **File class**: File and directory operations
- **FileReader/FileWriter**: Character streams for text files
- File operations: create, delete, list, filter

### Stream Types
- **Byte Streams**: Binary data (InputStream, OutputStream)
- **Character Streams**: Text data (Reader, Writer)
- **Bridge classes**: InputStreamReader, OutputStreamWriter

### Buffered Streams
- **BufferedReader/BufferedWriter**: Efficient text I/O
- **BufferedInputStream/BufferedOutputStream**: Efficient binary I/O
- **PrintWriter**: Formatted text output
- Significant performance improvement

### Serialization
- **ObjectOutputStream**: Serialize objects to bytes
- **ObjectInputStream**: Deserialize bytes to objects
- **transient**: Exclude fields from serialization
- **serialVersionUID**: Version control
- **Custom serialization**: writeObject/readObject methods

### NIO (New I/O)
- **Buffers**: Container for data manipulation
- **Channels**: High-performance I/O
- **Path/Paths**: Modern file path representation
- **Files class**: Rich file operations API
- **WatchService**: Monitor file system changes
- Better performance and scalability

### Best Practices
1. Always close resources (use try-with-resources)
2. Use buffered streams for performance
3. Choose appropriate stream type
4. Handle exceptions properly
5. Use NIO for large files
6. Specify character encoding
7. Flush output streams when needed
8. Include serialVersionUID for serializable classes
9. Check file existence before operations
10. Prefer modern NIO.2 API

Java I/O is essential for file handling, network communication, and data persistence in Java applications.

---

# 9. Java Database Connectivity (JDBC)

JDBC (Java Database Connectivity) is a Java API that enables Java applications to interact with databases. It provides a standard interface for connecting to relational databases and executing SQL queries.

## What is JDBC?

JDBC is a Java API for:
- Connecting to databases
- Executing SQL queries (SELECT, INSERT, UPDATE, DELETE)
- Processing results
- Managing transactions
- Handling database metadata

**Benefits:**
- Database independent (works with any RDBMS)
- Standard API
- Easy to use
- Supports advanced features (transactions, batch processing)

---

## JDBC Architecture

### JDBC Architecture Layers

```
Java Application
      ↓
JDBC API (java.sql package)
      ↓
JDBC Driver Manager
      ↓
JDBC Drivers
      ↓
Database (MySQL, Oracle, PostgreSQL, etc.)
```

### Key Components

1. **JDBC API**: Core interfaces and classes (`java.sql` and `javax.sql`)
2. **JDBC Driver Manager**: Manages database drivers
3. **JDBC Driver**: Vendor-specific implementation
4. **Database**: Actual database system

### JDBC Interfaces

Main interfaces in `java.sql` package:
- **Driver**: Database driver interface
- **Connection**: Represents database connection
- **Statement**: Executes static SQL queries
- **PreparedStatement**: Executes parameterized queries
- **CallableStatement**: Executes stored procedures
- **ResultSet**: Represents query results
- **ResultSetMetaData**: Information about ResultSet
- **DatabaseMetaData**: Information about database

---

## Types of JDBC Drivers

### 1. Type 1: JDBC-ODBC Bridge Driver
- Uses ODBC driver to connect
- **Deprecated** in Java 8
- Slow performance

### 2. Type 2: Native-API Driver
- Uses database-specific native client library
- Requires native code installation
- Better performance than Type 1

### 3. Type 3: Network Protocol Driver (Middleware)
- Pure Java driver
- Uses middleware server
- Database independent

### 4. Type 4: Thin Driver (Pure Java)
- Pure Java driver
- Directly connects to database
- **Most commonly used**
- Best performance
- Platform independent

**Examples:**
- MySQL: `com.mysql.cj.jdbc.Driver`
- PostgreSQL: `org.postgresql.Driver`
- Oracle: `oracle.jdbc.driver.OracleDriver`
- SQL Server: `com.microsoft.sqlserver.jdbc.SQLServerDriver`

---

## Connecting to Databases

### Steps to Connect

1. Load and register driver
2. Establish connection
3. Create statement
4. Execute query
5. Process results
6. Close resources

### 1. Loading Driver

#### Old Way (Before JDBC 4.0)

```java
// Explicitly load driver
Class.forName("com.mysql.cj.jdbc.Driver");
```

#### New Way (JDBC 4.0+)

```java
// Automatic driver loading (no need for Class.forName)
// Driver loaded automatically from classpath
```

### 2. Establishing Connection

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCConnectionExample {
    public static void main(String[] args) {
        // Database credentials
        String url = "jdbc:mysql://localhost:3306/mydb";
        String username = "root";
        String password = "password";
        
        Connection connection = null;
        
        try {
            // Create connection
            connection = DriverManager.getConnection(url, username, password);
            System.out.println("Connected to database successfully");
            
        } catch (SQLException e) {
            System.out.println("Connection failed: " + e.getMessage());
        } finally {
            // Close connection
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```

### Connection URL Format

Different databases have different URL formats:

```java
// MySQL
String url = "jdbc:mysql://localhost:3306/database_name";

// PostgreSQL
String url = "jdbc:postgresql://localhost:5432/database_name";

// Oracle
String url = "jdbc:oracle:thin:@localhost:1521:orcl";

// SQL Server
String url = "jdbc:sqlserver://localhost:1433;databaseName=database_name";

// H2 (in-memory)
String url = "jdbc:h2:mem:testdb";

// H2 (file-based)
String url = "jdbc:h2:~/test";

// SQLite
String url = "jdbc:sqlite:sample.db";
```

### Connection with Properties

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

public class ConnectionWithPropertiesExample {
    public static void main(String[] args) throws SQLException {
        String url = "jdbc:mysql://localhost:3306/mydb";
        
        Properties properties = new Properties();
        properties.setProperty("user", "root");
        properties.setProperty("password", "password");
        properties.setProperty("useSSL", "false");
        properties.setProperty("serverTimezone", "UTC");
        
        Connection connection = DriverManager.getConnection(url, properties);
        System.out.println("Connected successfully");
        connection.close();
    }
}
```

---

## DriverManager

Manages database drivers and establishes connections.

### Key Methods

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DriverManagerExample {
    public static void main(String[] args) throws SQLException {
        String url = "jdbc:mysql://localhost:3306/mydb";
        String user = "root";
        String password = "password";
        
        // Get connection
        Connection conn = DriverManager.getConnection(url, user, password);
        
        // Get connection with timeout (seconds)
        DriverManager.setLoginTimeout(10);
        
        // Register driver manually (if needed)
        // DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
        
        // Get registered drivers
        java.util.Enumeration<java.sql.Driver> drivers = DriverManager.getDrivers();
        while (drivers.hasMoreElements()) {
            System.out.println("Driver: " + drivers.nextElement());
        }
        
        conn.close();
    }
}
```

---

## Connection

Represents a connection to a database.

### Connection Methods

```java
import java.sql.*;

public class ConnectionMethodsExample {
    public static void main(String[] args) throws SQLException {
        String url = "jdbc:mysql://localhost:3306/mydb";
        Connection conn = DriverManager.getConnection(url, "root", "password");
        
        // Create statements
        Statement stmt = conn.createStatement();
        PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM users WHERE id = ?");
        CallableStatement cstmt = conn.prepareCall("{call getUserById(?)}");
        
        // Database metadata
        DatabaseMetaData metaData = conn.getMetaData();
        System.out.println("Database: " + metaData.getDatabaseProductName());
        System.out.println("Version: " + metaData.getDatabaseProductVersion());
        
        // Connection properties
        System.out.println("Catalog: " + conn.getCatalog());
        System.out.println("Schema: " + conn.getSchema());
        System.out.println("Is closed: " + conn.isClosed());
        System.out.println("Is read only: " + conn.isReadOnly());
        
        // Transaction methods (covered later)
        conn.setAutoCommit(false);
        conn.commit();
        conn.rollback();
        
        // Close connection
        conn.close();
    }
}
```

---

## Statement

Used to execute static SQL queries.

### Creating and Using Statement

```java
import java.sql.*;

public class StatementExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        String user = "root";
        String password = "password";
        
        try (Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement()) {
            
            // 1. Execute Query (SELECT)
            String selectQuery = "SELECT * FROM users";
            ResultSet rs = stmt.executeQuery(selectQuery);
            
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                String email = rs.getString("email");
                System.out.println(id + " | " + name + " | " + email);
            }
            rs.close();
            
            // 2. Execute Update (INSERT, UPDATE, DELETE)
            String insertQuery = "INSERT INTO users (name, email) VALUES ('John', 'john@example.com')";
            int rowsAffected = stmt.executeUpdate(insertQuery);
            System.out.println("Rows inserted: " + rowsAffected);
            
            String updateQuery = "UPDATE users SET email = 'newemail@example.com' WHERE id = 1";
            rowsAffected = stmt.executeUpdate(updateQuery);
            System.out.println("Rows updated: " + rowsAffected);
            
            String deleteQuery = "DELETE FROM users WHERE id = 1";
            rowsAffected = stmt.executeUpdate(deleteQuery);
            System.out.println("Rows deleted: " + rowsAffected);
            
            // 3. Execute (any SQL statement)
            boolean isResultSet = stmt.execute("SELECT * FROM users");
            if (isResultSet) {
                ResultSet resultSet = stmt.getResultSet();
                // Process result set
                resultSet.close();
            } else {
                int count = stmt.getUpdateCount();
                System.out.println("Update count: " + count);
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

### Statement Types

```java
import java.sql.*;

public class StatementTypesExample {
    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
        
        // Default statement
        Statement stmt1 = conn.createStatement();
        
        // Scrollable result set (forward and backward)
        Statement stmt2 = conn.createStatement(
            ResultSet.TYPE_SCROLL_INSENSITIVE,  // Scrollable
            ResultSet.CONCUR_READ_ONLY          // Read-only
        );
        
        // Updatable result set
        Statement stmt3 = conn.createStatement(
            ResultSet.TYPE_SCROLL_SENSITIVE,    // Scrollable, sensitive to changes
            ResultSet.CONCUR_UPDATABLE          // Updatable
        );
        
        conn.close();
    }
}
```

**Problems with Statement:**
- **SQL Injection vulnerability**
- No pre-compilation
- Less efficient for repeated queries

---

## PreparedStatement

Pre-compiled SQL statements with parameters. **Preferred over Statement**.

### Advantages

1. **Prevents SQL Injection**
2. **Better Performance** (pre-compiled)
3. **Type Safety**
4. **Easier to use** with parameters

### Creating PreparedStatement

```java
import java.sql.*;

public class PreparedStatementExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        String user = "root";
        String password = "password";
        
        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            
            // INSERT
            String insertSQL = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
            try (PreparedStatement pstmt = conn.prepareStatement(insertSQL)) {
                pstmt.setString(1, "Alice");
                pstmt.setString(2, "alice@example.com");
                pstmt.setInt(3, 25);
                
                int rowsInserted = pstmt.executeUpdate();
                System.out.println("Rows inserted: " + rowsInserted);
            }
            
            // SELECT
            String selectSQL = "SELECT * FROM users WHERE age > ? AND email LIKE ?";
            try (PreparedStatement pstmt = conn.prepareStatement(selectSQL)) {
                pstmt.setInt(1, 18);
                pstmt.setString(2, "%@example.com");
                
                ResultSet rs = pstmt.executeQuery();
                while (rs.next()) {
                    System.out.println(rs.getInt("id") + " | " + 
                                     rs.getString("name") + " | " + 
                                     rs.getString("email"));
                }
                rs.close();
            }
            
            // UPDATE
            String updateSQL = "UPDATE users SET email = ? WHERE id = ?";
            try (PreparedStatement pstmt = conn.prepareStatement(updateSQL)) {
                pstmt.setString(1, "updated@example.com");
                pstmt.setInt(2, 1);
                
                int rowsUpdated = pstmt.executeUpdate();
                System.out.println("Rows updated: " + rowsUpdated);
            }
            
            // DELETE
            String deleteSQL = "DELETE FROM users WHERE id = ?";
            try (PreparedStatement pstmt = conn.prepareStatement(deleteSQL)) {
                pstmt.setInt(1, 1);
                
                int rowsDeleted = pstmt.executeUpdate();
                System.out.println("Rows deleted: " + rowsDeleted);
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

### Setter Methods

```java
import java.sql.*;
import java.math.BigDecimal;
import java.time.LocalDate;

public class PreparedStatementSettersExample {
    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
        
        String sql = "INSERT INTO products (name, price, quantity, description, created_date, is_active, image) " +
                     "VALUES (?, ?, ?, ?, ?, ?, ?)";
        
        PreparedStatement pstmt = conn.prepareStatement(sql);
        
        // Various setter methods
        pstmt.setString(1, "Laptop");                           // String
        pstmt.setBigDecimal(2, new BigDecimal("999.99"));      // BigDecimal
        pstmt.setInt(3, 10);                                    // int
        pstmt.setString(4, "High-end laptop");                 // String
        pstmt.setDate(5, Date.valueOf(LocalDate.now()));       // Date
        pstmt.setBoolean(6, true);                             // boolean
        
        // Set null value
        pstmt.setNull(7, Types.BLOB);
        
        // Set byte array (for BLOB)
        byte[] imageData = new byte[1024];
        pstmt.setBytes(7, imageData);
        
        // Set object
        pstmt.setObject(3, 10);
        
        pstmt.executeUpdate();
        pstmt.close();
        conn.close();
    }
}
```

### Reusing PreparedStatement

```java
import java.sql.*;

public class ReusingPreparedStatementExample {
    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
        
        String sql = "INSERT INTO users (name, email) VALUES (?, ?)";
        PreparedStatement pstmt = conn.prepareStatement(sql);
        
        // Execute multiple times with different parameters
        pstmt.setString(1, "Alice");
        pstmt.setString(2, "alice@example.com");
        pstmt.executeUpdate();
        
        pstmt.setString(1, "Bob");
        pstmt.setString(2, "bob@example.com");
        pstmt.executeUpdate();
        
        pstmt.setString(1, "Charlie");
        pstmt.setString(2, "charlie@example.com");
        pstmt.executeUpdate();
        
        System.out.println("3 users inserted");
        
        pstmt.close();
        conn.close();
    }
}
```

### SQL Injection Prevention

```java
import java.sql.*;

public class SQLInjectionExample {
    // BAD: Vulnerable to SQL injection
    public static void badLogin(String username, String password) {
        try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
             Statement stmt = conn.createStatement()) {
            
            // VULNERABLE: User input directly in query
            String sql = "SELECT * FROM users WHERE username = '" + username + 
                        "' AND password = '" + password + "'";
            // If username = "admin' OR '1'='1", it bypasses authentication
            
            ResultSet rs = stmt.executeQuery(sql);
            if (rs.next()) {
                System.out.println("Login successful");
            }
            rs.close();
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    // GOOD: Safe from SQL injection
    public static void goodLogin(String username, String password) {
        try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password")) {
            
            String sql = "SELECT * FROM users WHERE username = ? AND password = ?";
            try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
                pstmt.setString(1, username);
                pstmt.setString(2, password);
                
                ResultSet rs = pstmt.executeQuery();
                if (rs.next()) {
                    System.out.println("Login successful");
                }
                rs.close();
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

### Getting Generated Keys

```java
import java.sql.*;

public class GeneratedKeysExample {
    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
        
        String sql = "INSERT INTO users (name, email) VALUES (?, ?)";
        PreparedStatement pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        
        pstmt.setString(1, "John");
        pstmt.setString(2, "john@example.com");
        pstmt.executeUpdate();
        
        // Get generated ID
        ResultSet rs = pstmt.getGeneratedKeys();
        if (rs.next()) {
            int generatedId = rs.getInt(1);
            System.out.println("Generated ID: " + generatedId);
        }
        
        rs.close();
        pstmt.close();
        conn.close();
    }
}
```

---

## ResultSet

Represents the result of a query.

### Processing ResultSet

```java
import java.sql.*;

public class ResultSetExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        
        try (Connection conn = DriverManager.getConnection(url, "root", "password");
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM users")) {
            
            // Process results
            while (rs.next()) {
                // Get by column index (starts from 1)
                int id = rs.getInt(1);
                
                // Get by column name (preferred)
                String name = rs.getString("name");
                String email = rs.getString("email");
                int age = rs.getInt("age");
                
                System.out.println(id + " | " + name + " | " + email + " | " + age);
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

### ResultSet Getter Methods

```java
import java.sql.*;
import java.math.BigDecimal;

public class ResultSetGettersExample {
    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT * FROM products");
        
        while (rs.next()) {
            // Different getter methods
            int id = rs.getInt("id");
            String name = rs.getString("name");
            BigDecimal price = rs.getBigDecimal("price");
            int quantity = rs.getInt("quantity");
            Date createdDate = rs.getDate("created_date");
            Time createdTime = rs.getTime("created_time");
            Timestamp timestamp = rs.getTimestamp("created_timestamp");
            boolean isActive = rs.getBoolean("is_active");
            byte[] image = rs.getBytes("image");
            
            // Get as object
            Object obj = rs.getObject("name");
            
            // Check for null
            String description = rs.getString("description");
            if (rs.wasNull()) {
                System.out.println("Description is null");
            }
        }
        
        rs.close();
        stmt.close();
        conn.close();
    }
}
```

### ResultSet Types

```java
import java.sql.*;

public class ResultSetTypesExample {
    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
        
        // TYPE_FORWARD_ONLY (default)
        Statement stmt1 = conn.createStatement(
            ResultSet.TYPE_FORWARD_ONLY,
            ResultSet.CONCUR_READ_ONLY
        );
        ResultSet rs1 = stmt1.executeQuery("SELECT * FROM users");
        // Can only move forward
        
        // TYPE_SCROLL_INSENSITIVE
        Statement stmt2 = conn.createStatement(
            ResultSet.TYPE_SCROLL_INSENSITIVE,
            ResultSet.CONCUR_READ_ONLY
        );
        ResultSet rs2 = stmt2.executeQuery("SELECT * FROM users");
        
        // Can scroll forward and backward
        rs2.next();              // Move to first row
        rs2.previous();          // Move to previous row
        rs2.first();             // Move to first row
        rs2.last();              // Move to last row
        rs2.absolute(5);         // Move to 5th row
        rs2.relative(2);         // Move 2 rows forward
        rs2.beforeFirst();       // Move before first row
        rs2.afterLast();         // Move after last row
        
        // Check position
        System.out.println("Is first: " + rs2.isFirst());
        System.out.println("Is last: " + rs2.isLast());
        System.out.println("Is before first: " + rs2.isBeforeFirst());
        System.out.println("Is after last: " + rs2.isAfterLast());
        System.out.println("Row number: " + rs2.getRow());
        
        rs2.close();
        stmt2.close();
        conn.close();
    }
}
```

### Updatable ResultSet

```java
import java.sql.*;

public class UpdatableResultSetExample {
    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
        
        Statement stmt = conn.createStatement(
            ResultSet.TYPE_SCROLL_INSENSITIVE,
            ResultSet.CONCUR_UPDATABLE
        );
        
        ResultSet rs = stmt.executeQuery("SELECT * FROM users");
        
        // Update existing row
        if (rs.next()) {
            rs.updateString("email", "newemail@example.com");
            rs.updateInt("age", 30);
            rs.updateRow();  // Commit update
            System.out.println("Row updated");
        }
        
        // Insert new row
        rs.moveToInsertRow();
        rs.updateString("name", "New User");
        rs.updateString("email", "newuser@example.com");
        rs.updateInt("age", 25);
        rs.insertRow();
        rs.moveToCurrentRow();
        System.out.println("Row inserted");
        
        // Delete row
        if (rs.next()) {
            rs.deleteRow();
            System.out.println("Row deleted");
        }
        
        rs.close();
        stmt.close();
        conn.close();
    }
}
```

### ResultSetMetaData

Information about ResultSet columns.

```java
import java.sql.*;

public class ResultSetMetaDataExample {
    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT * FROM users");
        
        // Get metadata
        ResultSetMetaData metaData = rs.getMetaData();
        
        int columnCount = metaData.getColumnCount();
        System.out.println("Column count: " + columnCount);
        
        // Print column information
        for (int i = 1; i <= columnCount; i++) {
            System.out.println("\nColumn " + i + ":");
            System.out.println("  Name: " + metaData.getColumnName(i));
            System.out.println("  Label: " + metaData.getColumnLabel(i));
            System.out.println("  Type: " + metaData.getColumnTypeName(i));
            System.out.println("  Size: " + metaData.getColumnDisplaySize(i));
            System.out.println("  Nullable: " + metaData.isNullable(i));
            System.out.println("  Auto increment: " + metaData.isAutoIncrement(i));
        }
        
        rs.close();
        stmt.close();
        conn.close();
    }
}
```

---

## Transaction Management

A transaction is a set of operations that either all succeed or all fail.

### ACID Properties

- **Atomicity**: All or nothing
- **Consistency**: Data remains consistent
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Committed changes are permanent

### Transaction Control

```java
import java.sql.*;

public class TransactionExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        Connection conn = null;
        
        try {
            conn = DriverManager.getConnection(url, "root", "password");
            
            // Disable auto-commit
            conn.setAutoCommit(false);
            
            // Perform multiple operations
            String sql1 = "UPDATE accounts SET balance = balance - 100 WHERE id = 1";
            String sql2 = "UPDATE accounts SET balance = balance + 100 WHERE id = 2";
            
            try (Statement stmt = conn.createStatement()) {
                stmt.executeUpdate(sql1);
                stmt.executeUpdate(sql2);
                
                // Commit transaction
                conn.commit();
                System.out.println("Transaction committed successfully");
            }
            
        } catch (SQLException e) {
            // Rollback on error
            if (conn != null) {
                try {
                    conn.rollback();
                    System.out.println("Transaction rolled back");
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
            e.printStackTrace();
        } finally {
            if (conn != null) {
                try {
                    // Re-enable auto-commit
                    conn.setAutoCommit(true);
                    conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```

### Savepoint

Intermediate points in a transaction for partial rollback.

```java
import java.sql.*;

public class SavepointExample {
    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/mydb", "root", "password")) {
            
            conn.setAutoCommit(false);
            
            try (Statement stmt = conn.createStatement()) {
                // Operation 1
                stmt.executeUpdate("INSERT INTO users (name) VALUES ('Alice')");
                
                // Create savepoint
                Savepoint savepoint1 = conn.setSavepoint("Savepoint1");
                
                // Operation 2
                stmt.executeUpdate("INSERT INTO users (name) VALUES ('Bob')");
                
                // Simulate error for Bob's record
                boolean errorOccurred = true;
                
                if (errorOccurred) {
                    // Rollback to savepoint (keeps Alice, removes Bob)
                    conn.rollback(savepoint1);
                    System.out.println("Rolled back to savepoint");
                }
                
                // Operation 3
                stmt.executeUpdate("INSERT INTO users (name) VALUES ('Charlie')");
                
                // Commit transaction (Alice and Charlie saved)
                conn.commit();
                System.out.println("Transaction committed");
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

### Isolation Levels

Control how transactions interact with each other.

```java
import java.sql.*;

public class IsolationLevelExample {
    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/mydb", "root", "password");
        
        // Get current isolation level
        int currentLevel = conn.getTransactionIsolation();
        System.out.println("Current isolation level: " + currentLevel);
        
        // Set isolation level
        conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);
        
        /*
        Isolation levels (from least to most strict):
        
        1. TRANSACTION_NONE (0)
           - Transactions not supported
        
        2. TRANSACTION_READ_UNCOMMITTED (1)
           - Allows dirty reads, non-repeatable reads, phantom reads
        
        3. TRANSACTION_READ_COMMITTED (2)
           - Prevents dirty reads
           - Allows non-repeatable reads, phantom reads
        
        4. TRANSACTION_REPEATABLE_READ (4)
           - Prevents dirty reads, non-repeatable reads
           - Allows phantom reads
        
        5. TRANSACTION_SERIALIZABLE (8)
           - Prevents dirty reads, non-repeatable reads, phantom reads
           - Highest isolation, lowest concurrency
        */
        
        conn.close();
    }
}
```

### Bank Transfer Example

```java
import java.sql.*;

public class BankTransferExample {
    public static void transferMoney(Connection conn, int fromAccount, int toAccount, double amount) {
        try {
            conn.setAutoCommit(false);
            
            // Check sufficient balance
            String checkSQL = "SELECT balance FROM accounts WHERE id = ?";
            try (PreparedStatement checkStmt = conn.prepareStatement(checkSQL)) {
                checkStmt.setInt(1, fromAccount);
                ResultSet rs = checkStmt.executeQuery();
                
                if (rs.next()) {
                    double balance = rs.getDouble("balance");
                    if (balance < amount) {
                        throw new SQLException("Insufficient balance");
                    }
                }
                rs.close();
            }
            
            // Debit from source account
            String debitSQL = "UPDATE accounts SET balance = balance - ? WHERE id = ?";
            try (PreparedStatement debitStmt = conn.prepareStatement(debitSQL)) {
                debitStmt.setDouble(1, amount);
                debitStmt.setInt(2, fromAccount);
                debitStmt.executeUpdate();
            }
            
            // Credit to destination account
            String creditSQL = "UPDATE accounts SET balance = balance + ? WHERE id = ?";
            try (PreparedStatement creditStmt = conn.prepareStatement(creditSQL)) {
                creditStmt.setDouble(1, amount);
                creditStmt.setInt(2, toAccount);
                creditStmt.executeUpdate();
            }
            
            // Commit transaction
            conn.commit();
            System.out.println("Transfer successful: $" + amount + 
                             " from Account " + fromAccount + " to Account " + toAccount);
            
        } catch (SQLException e) {
            try {
                conn.rollback();
                System.out.println("Transfer failed. Transaction rolled back.");
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
            e.printStackTrace();
        } finally {
            try {
                conn.setAutoCommit(true);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    
    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/mydb", "root", "password");
        
        transferMoney(conn, 1, 2, 500.00);
        
        conn.close();
    }
}
```

---

## Batch Processing

Execute multiple SQL statements as a batch for better performance.

### Statement Batch

```java
import java.sql.*;

public class StatementBatchExample {
    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/mydb", "root", "password");
             Statement stmt = conn.createStatement()) {
            
            conn.setAutoCommit(false);
            
            // Add multiple SQL statements to batch
            stmt.addBatch("INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com')");
            stmt.addBatch("INSERT INTO users (name, email) VALUES ('Bob', 'bob@example.com')");
            stmt.addBatch("INSERT INTO users (name, email) VALUES ('Charlie', 'charlie@example.com')");
            stmt.addBatch("UPDATE users SET age = 25 WHERE name = 'Alice'");
            stmt.addBatch("DELETE FROM users WHERE name = 'OldUser'");
            
            // Execute batch
            int[] results = stmt.executeBatch();
            
            // Commit transaction
            conn.commit();
            
            // Print results
            System.out.println("Batch executed successfully");
            for (int i = 0; i < results.length; i++) {
                System.out.println("Statement " + (i + 1) + ": " + results[i] + " rows affected");
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

### PreparedStatement Batch

```java
import java.sql.*;

public class PreparedStatementBatchExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        String sql = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
        
        try (Connection conn = DriverManager.getConnection(url, "root", "password");
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            conn.setAutoCommit(false);
            
            // Add multiple parameter sets
            pstmt.setString(1, "Alice");
            pstmt.setString(2, "alice@example.com");
            pstmt.setInt(3, 25);
            pstmt.addBatch();
            
            pstmt.setString(1, "Bob");
            pstmt.setString(2, "bob@example.com");
            pstmt.setInt(3, 30);
            pstmt.addBatch();
            
            pstmt.setString(1, "Charlie");
            pstmt.setString(2, "charlie@example.com");
            pstmt.setInt(3, 35);
            pstmt.addBatch();
            
            // Execute batch
            int[] results = pstmt.executeBatch();
            
            // Commit transaction
            conn.commit();
            
            System.out.println("Batch executed: " + results.length + " statements");
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

### Batch Processing with Large Data

```java
import java.sql.*;

public class LargeBatchExample {
    public static void insertLargeData(Connection conn, int totalRecords) throws SQLException {
        String sql = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
        
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            conn.setAutoCommit(false);
            
            int batchSize = 1000;  // Execute batch every 1000 records
            int count = 0;
            
            for (int i = 1; i <= totalRecords; i++) {
                pstmt.setString(1, "User" + i);
                pstmt.setString(2, "user" + i + "@example.com");
                pstmt.setInt(3, 20 + (i % 50));
                pstmt.addBatch();
                
                count++;
                
                // Execute batch when batch size reached
                if (count % batchSize == 0) {
                    pstmt.executeBatch();
                    conn.commit();
                    System.out.println("Inserted " + count + " records");
                }
            }
            
            // Execute remaining records
            pstmt.executeBatch();
            conn.commit();
            
            System.out.println("Total records inserted: " + totalRecords);
            
        } catch (SQLException e) {
            conn.rollback();
            throw e;
        } finally {
            conn.setAutoCommit(true);
        }
    }
    
    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/mydb", "root", "password");
        
        long startTime = System.currentTimeMillis();
        insertLargeData(conn, 10000);
        long endTime = System.currentTimeMillis();
        
        System.out.println("Time taken: " + (endTime - startTime) + "ms");
        
        conn.close();
    }
}
```

### Handling Batch Errors

```java
import java.sql.*;

public class BatchErrorHandlingExample {
    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/mydb", "root", "password");
             Statement stmt = conn.createStatement()) {
            
            conn.setAutoCommit(false);
            
            stmt.addBatch("INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com')");
            stmt.addBatch("INSERT INTO users (name, email) VALUES ('Bob', 'invalid_email')");  // May fail
            stmt.addBatch("INSERT INTO users (name, email) VALUES ('Charlie', 'charlie@example.com')");
            
            try {
                int[] results = stmt.executeBatch();
                conn.commit();
                System.out.println("Batch executed successfully");
            } catch (BatchUpdateException e) {
                System.out.println("Batch execution failed");
                
                // Get update counts for successful statements
                int[] updateCounts = e.getUpdateCounts();
                System.out.println("Statements executed before error: " + updateCounts.length);
                
                // Get next exception in chain
                SQLException nextException = e.getNextException();
                while (nextException != null) {
                    System.out.println("Error: " + nextException.getMessage());
                    nextException = nextException.getNextException();
                }
                
                conn.rollback();
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

---

## DatabaseMetaData

Information about the database.

```java
import java.sql.*;

public class DatabaseMetaDataExample {
    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/mydb", "root", "password");
        
        DatabaseMetaData metaData = conn.getMetaData();
        
        // Database information
        System.out.println("Database Product: " + metaData.getDatabaseProductName());
        System.out.println("Database Version: " + metaData.getDatabaseProductVersion());
        System.out.println("Driver Name: " + metaData.getDriverName());
        System.out.println("Driver Version: " + metaData.getDriverVersion());
        System.out.println("URL: " + metaData.getURL());
        System.out.println("Username: " + metaData.getUserName());
        
        // Capabilities
        System.out.println("\nSupports transactions: " + metaData.supportsTransactions());
        System.out.println("Supports batch updates: " + metaData.supportsBatchUpdates());
        System.out.println("Supports savepoints: " + metaData.supportsSavepoints());
        
        // Get all tables
        System.out.println("\nTables:");
        ResultSet tables = metaData.getTables(null, null, "%", new String[]{"TABLE"});
        while (tables.next()) {
            System.out.println("  " + tables.getString("TABLE_NAME"));
        }
        tables.close();
        
        // Get columns of a table
        System.out.println("\nColumns in 'users' table:");
        ResultSet columns = metaData.getColumns(null, null, "users", "%");
        while (columns.next()) {
            String columnName = columns.getString("COLUMN_NAME");
            String columnType = columns.getString("TYPE_NAME");
            int columnSize = columns.getInt("COLUMN_SIZE");
            System.out.println("  " + columnName + " (" + columnType + ", " + columnSize + ")");
        }
        columns.close();
        
        // Get primary keys
        System.out.println("\nPrimary keys in 'users' table:");
        ResultSet primaryKeys = metaData.getPrimaryKeys(null, null, "users");
        while (primaryKeys.next()) {
            System.out.println("  " + primaryKeys.getString("COLUMN_NAME"));
        }
        primaryKeys.close();
        
        conn.close();
    }
}
```

---

## Connection Pooling

Connection pooling improves performance by reusing connections.

### Using HikariCP (Popular Connection Pool)

```java
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import java.sql.Connection;
import java.sql.SQLException;

public class ConnectionPoolExample {
    private static HikariDataSource dataSource;
    
    static {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
        config.setUsername("root");
        config.setPassword("password");
        
        // Pool configuration
        config.setMaximumPoolSize(10);
        config.setMinimumIdle(5);
        config.setConnectionTimeout(30000);
        config.setIdleTimeout(600000);
        config.setMaxLifetime(1800000);
        
        dataSource = new HikariDataSource(config);
    }
    
    public static Connection getConnection() throws SQLException {
        return dataSource.getConnection();
    }
    
    public static void closePool() {
        if (dataSource != null) {
            dataSource.close();
        }
    }
    
    public static void main(String[] args) {
        try (Connection conn = getConnection()) {
            System.out.println("Connection obtained from pool");
            // Use connection
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closePool();
        }
    }
}
```

---

## Best Practices

### 1. Use try-with-resources

```java
// Good: Automatic resource management
try (Connection conn = DriverManager.getConnection(url, user, password);
     PreparedStatement pstmt = conn.prepareStatement(sql);
     ResultSet rs = pstmt.executeQuery()) {
    // Use resources
} catch (SQLException e) {
    e.printStackTrace();
}
```

### 2. Use PreparedStatement

```java
// Good: Prevents SQL injection, better performance
String sql = "SELECT * FROM users WHERE id = ?";
try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
    pstmt.setInt(1, userId);
    ResultSet rs = pstmt.executeQuery();
}
```

### 3. Use Connection Pooling

```java
// Good: Reuse connections
HikariDataSource dataSource = new HikariDataSource(config);
Connection conn = dataSource.getConnection();
```

### 4. Handle Transactions Properly

```java
try {
    conn.setAutoCommit(false);
    // Multiple operations
    conn.commit();
} catch (SQLException e) {
    conn.rollback();
}
```

### 5. Close Resources

```java
// Good: Use try-with-resources
// Resources automatically closed in reverse order
```

### 6. Use Batch Processing

```java
// Good: For multiple similar operations
pstmt.addBatch();
pstmt.executeBatch();
```

### 7. Set Appropriate Isolation Level

```java
conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);
```

### 8. Handle Exceptions Properly

```java
try {
    // JDBC operations
} catch (SQLException e) {
    logger.error("Database error: " + e.getMessage(), e);
    // Handle appropriately
}
```

### 9. Use DatabaseMetaData

```java
// Get database capabilities before using features
if (metaData.supportsBatchUpdates()) {
    // Use batch updates
}
```

### 10. Avoid SELECT *

```java
// Bad
String sql = "SELECT * FROM users";

// Good: Specify columns
String sql = "SELECT id, name, email FROM users";
```

---

## Complete CRUD Example

```java
import java.sql.*;

public class UserDAO {
    private String url = "jdbc:mysql://localhost:3306/mydb";
    private String username = "root";
    private String password = "password";
    
    // CREATE
    public void createUser(String name, String email, int age) {
        String sql = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
        
        try (Connection conn = DriverManager.getConnection(url, username, password);
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setString(1, name);
            pstmt.setString(2, email);
            pstmt.setInt(3, age);
            
            int rowsInserted = pstmt.executeUpdate();
            if (rowsInserted > 0) {
                System.out.println("User created successfully");
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    // READ
    public void getUserById(int id) {
        String sql = "SELECT * FROM users WHERE id = ?";
        
        try (Connection conn = DriverManager.getConnection(url, username, password);
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, id);
            ResultSet rs = pstmt.executeQuery();
            
            if (rs.next()) {
                System.out.println("ID: " + rs.getInt("id"));
                System.out.println("Name: " + rs.getString("name"));
                System.out.println("Email: " + rs.getString("email"));
                System.out.println("Age: " + rs.getInt("age"));
            } else {
                System.out.println("User not found");
            }
            
            rs.close();
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    // UPDATE
    public void updateUser(int id, String name, String email, int age) {
        String sql = "UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?";
        
        try (Connection conn = DriverManager.getConnection(url, username, password);
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setString(1, name);
            pstmt.setString(2, email);
            pstmt.setInt(3, age);
            pstmt.setInt(4, id);
            
            int rowsUpdated = pstmt.executeUpdate();
            if (rowsUpdated > 0) {
                System.out.println("User updated successfully");
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    // DELETE
    public void deleteUser(int id) {
        String sql = "DELETE FROM users WHERE id = ?";
        
        try (Connection conn = DriverManager.getConnection(url, username, password);
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, id);
            
            int rowsDeleted = pstmt.executeUpdate();
            if (rowsDeleted > 0) {
                System.out.println("User deleted successfully");
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    // LIST ALL
    public void getAllUsers() {
        String sql = "SELECT * FROM users";
        
        try (Connection conn = DriverManager.getConnection(url, username, password);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            
            while (rs.next()) {
                System.out.println(rs.getInt("id") + " | " +
                                 rs.getString("name") + " | " +
                                 rs.getString("email") + " | " +
                                 rs.getInt("age"));
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    public static void main(String[] args) {
        UserDAO dao = new UserDAO();
        
        // Create
        dao.createUser("Alice", "alice@example.com", 25);
        
        // Read
        dao.getUserById(1);
        
        // Update
        dao.updateUser(1, "Alice Smith", "alice.smith@example.com", 26);
        
        // List
        dao.getAllUsers();
        
        // Delete
        dao.deleteUser(1);
    }
}
```

---

## Summary

JDBC provides a standard API for database connectivity:

### Core Components
- **DriverManager**: Manages database drivers
- **Connection**: Database connection
- **Statement**: Static SQL execution
- **PreparedStatement**: Parameterized queries (preferred)
- **ResultSet**: Query results

### Key Features
- **Database Independence**: Works with any RDBMS
- **SQL Injection Prevention**: Use PreparedStatement
- **Transaction Management**: ACID properties with commit/rollback
- **Batch Processing**: Execute multiple statements efficiently
- **Connection Pooling**: Reuse connections for better performance

### Best Practices
1. Use try-with-resources for automatic cleanup
2. Prefer PreparedStatement over Statement
3. Use connection pooling in production
4. Handle transactions properly with commit/rollback
5. Use batch processing for bulk operations
6. Set appropriate isolation levels
7. Close resources properly
8. Handle exceptions appropriately
9. Use specific column names in SELECT
10. Validate and sanitize user input

JDBC is fundamental for Java database applications, providing the foundation for higher-level frameworks like Hibernate and JPA.

---

# 10. Java 8+ Features

Java 8 was released in March 2014 and introduced major features that revolutionized Java programming. These features make Java more functional, concise, and modern.

## Major Java 8+ Features

- **Lambda Expressions** (Java 8)
- **Functional Interfaces** (Java 8)
- **Stream API** (Java 8)
- **Method References** (Java 8)
- **Optional Class** (Java 8)
- **Default Methods in Interfaces** (Java 8)
- **Static Methods in Interfaces** (Java 8)
- **Date and Time API** (Java 8)
- **Nashorn JavaScript Engine** (Java 8)
- **CompletableFuture** (Java 8)
- **Private Methods in Interfaces** (Java 9)
- **var Keyword** (Java 10)
- **Switch Expressions** (Java 12-14)
- **Text Blocks** (Java 13-15)
- **Records** (Java 14-16)
- **Sealed Classes** (Java 15-17)
- **Pattern Matching** (Java 14+)

---

## Lambda Expressions

Lambda expressions enable functional programming in Java. They provide a clear and concise way to represent a method interface using an expression.

### Syntax

```java
// No parameters
() -> expression
() -> { statements; }

// One parameter (parentheses optional)
parameter -> expression
(parameter) -> expression
parameter -> { statements; }

// Multiple parameters
(parameter1, parameter2) -> expression
(parameter1, parameter2) -> { statements; }

// With type declarations
(Type parameter1, Type parameter2) -> expression
```

### Basic Examples

```java
public class LambdaBasicExample {
    public static void main(String[] args) {
        // Traditional anonymous class
        Runnable r1 = new Runnable() {
            @Override
            public void run() {
                System.out.println("Traditional approach");
            }
        };
        
        // Lambda expression
        Runnable r2 = () -> System.out.println("Lambda approach");
        
        r1.run();
        r2.run();
        
        // Comparator with anonymous class
        Comparator<String> c1 = new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                return s1.compareTo(s2);
            }
        };
        
        // Comparator with lambda
        Comparator<String> c2 = (s1, s2) -> s1.compareTo(s2);
        
        // Even more concise
        Comparator<String> c3 = String::compareTo;
    }
}
```

### Lambda with Different Parameters

```java
import java.util.function.*;

public class LambdaParametersExample {
    public static void main(String[] args) {
        // No parameters
        Runnable noParams = () -> System.out.println("No parameters");
        noParams.run();
        
        // One parameter
        Consumer<String> oneParam = s -> System.out.println(s);
        oneParam.accept("One parameter");
        
        // Multiple parameters
        BiFunction<Integer, Integer, Integer> twoParams = (a, b) -> a + b;
        System.out.println("Sum: " + twoParams.apply(5, 3));
        
        // With type declarations
        BiFunction<Integer, Integer, Integer> withTypes = (Integer a, Integer b) -> a * b;
        System.out.println("Product: " + withTypes.apply(5, 3));
        
        // Multiple statements
        Consumer<Integer> multipleStatements = n -> {
            int square = n * n;
            int cube = n * n * n;
            System.out.println("Square: " + square + ", Cube: " + cube);
        };
        multipleStatements.accept(5);
    }
}
```

### Lambda with Collections

```java
import java.util.*;

public class LambdaCollectionsExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
        
        // forEach with lambda
        names.forEach(name -> System.out.println(name));
        
        // Method reference
        names.forEach(System.out::println);
        
        // Sorting with lambda
        Collections.sort(names, (s1, s2) -> s1.compareTo(s2));
        
        // Sorting with method reference
        Collections.sort(names, String::compareTo);
        
        // Using List.sort
        names.sort((s1, s2) -> s2.compareTo(s1));  // Reverse order
        
        // removeIf with lambda
        names.removeIf(name -> name.startsWith("B"));
        
        // replaceAll with lambda
        names.replaceAll(name -> name.toUpperCase());
        
        System.out.println(names);
    }
}
```

### Lambda Variable Capture

```java
public class LambdaVariableCaptureExample {
    public static void main(String[] args) {
        int factor = 10;  // Effectively final
        
        // Can access effectively final variables
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        numbers.forEach(n -> System.out.println(n * factor));
        
        // Cannot modify captured variable
        // numbers.forEach(n -> factor++);  // Compilation error
        
        // Can modify instance variables
        Counter counter = new Counter();
        numbers.forEach(n -> counter.count++);
        System.out.println("Count: " + counter.count);
    }
    
    static class Counter {
        int count = 0;
    }
}
```

---

## Functional Interfaces

A functional interface is an interface with exactly one abstract method. They can have multiple default or static methods.

### @FunctionalInterface Annotation

```java
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
        // Lambda implementation
        Calculator addition = (a, b) -> a + b;
        Calculator subtraction = (a, b) -> a - b;
        
        System.out.println("Addition: " + addition.calculate(10, 5));
        System.out.println("Subtraction: " + subtraction.calculate(10, 5));
        System.out.println("Using default: " + addition.add(10, 5));
        System.out.println("Using static: " + Calculator.multiply(10, 5));
    }
}
```

### Built-in Functional Interfaces

Java provides many built-in functional interfaces in `java.util.function` package.

#### 1. Predicate<T>

Tests a condition, returns boolean.

```java
import java.util.function.Predicate;
import java.util.*;

public class PredicateExample {
    public static void main(String[] args) {
        // Basic predicate
        Predicate<Integer> isEven = n -> n % 2 == 0;
        System.out.println("Is 4 even? " + isEven.test(4));  // true
        System.out.println("Is 5 even? " + isEven.test(5));  // false
        
        // String predicate
        Predicate<String> startsWithA = s -> s.startsWith("A");
        System.out.println("Starts with A: " + startsWithA.test("Alice"));  // true
        
        // Combining predicates
        Predicate<Integer> isPositive = n -> n > 0;
        Predicate<Integer> isPositiveAndEven = isPositive.and(isEven);
        System.out.println("Is 4 positive and even? " + isPositiveAndEven.test(4));  // true
        
        Predicate<Integer> isEvenOrNegative = isEven.or(n -> n < 0);
        System.out.println("Is 5 even or negative? " + isEvenOrNegative.test(5));  // false
        
        Predicate<Integer> isOdd = isEven.negate();
        System.out.println("Is 5 odd? " + isOdd.test(5));  // true
        
        // Filtering with predicate
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        List<Integer> evenNumbers = numbers.stream()
                                           .filter(isEven)
                                           .collect(Collectors.toList());
        System.out.println("Even numbers: " + evenNumbers);
    }
}
```

#### 2. Consumer<T>

Accepts input, returns nothing (void).

```java
import java.util.function.Consumer;
import java.util.*;

public class ConsumerExample {
    public static void main(String[] args) {
        // Basic consumer
        Consumer<String> printConsumer = s -> System.out.println(s);
        printConsumer.accept("Hello, Consumer!");
        
        // Consumer with side effects
        List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        Consumer<List<Integer>> doubleValues = list -> {
            for (int i = 0; i < list.size(); i++) {
                list.set(i, list.get(i) * 2);
            }
        };
        doubleValues.accept(numbers);
        System.out.println("Doubled: " + numbers);
        
        // Chaining consumers
        Consumer<String> c1 = s -> System.out.print(s.toUpperCase());
        Consumer<String> c2 = s -> System.out.println(" - " + s.length() + " characters");
        Consumer<String> combined = c1.andThen(c2);
        combined.accept("hello");  // HELLO - 5 characters
        
        // forEach with consumer
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        names.forEach(name -> System.out.println("Hello, " + name));
    }
}
```

#### 3. Function<T, R>

Accepts input, returns output.

```java
import java.util.function.Function;
import java.util.*;

public class FunctionExample {
    public static void main(String[] args) {
        // Basic function
        Function<String, Integer> lengthFunction = s -> s.length();
        System.out.println("Length: " + lengthFunction.apply("Hello"));  // 5
        
        // Type conversion
        Function<String, Integer> stringToInt = Integer::parseInt;
        System.out.println("Parsed: " + stringToInt.apply("123"));  // 123
        
        // Chaining functions
        Function<Integer, Integer> multiplyBy2 = n -> n * 2;
        Function<Integer, Integer> add10 = n -> n + 10;
        
        // compose: execute parameter first, then this
        Function<Integer, Integer> multiplyThenAdd = add10.compose(multiplyBy2);
        System.out.println("Multiply then add: " + multiplyThenAdd.apply(5));  // (5*2)+10 = 20
        
        // andThen: execute this first, then parameter
        Function<Integer, Integer> addThenMultiply = add10.andThen(multiplyBy2);
        System.out.println("Add then multiply: " + addThenMultiply.apply(5));  // (5+10)*2 = 30
        
        // identity function
        Function<String, String> identity = Function.identity();
        System.out.println("Identity: " + identity.apply("test"));  // test
        
        // Map with function
        List<String> words = Arrays.asList("apple", "banana", "cherry");
        List<Integer> lengths = words.stream()
                                     .map(lengthFunction)
                                     .collect(Collectors.toList());
        System.out.println("Lengths: " + lengths);
    }
}
```

#### 4. Supplier<T>

Takes no input, returns output.

```java
import java.util.function.Supplier;
import java.util.*;

public class SupplierExample {
    public static void main(String[] args) {
        // Basic supplier
        Supplier<Double> randomSupplier = () -> Math.random();
        System.out.println("Random: " + randomSupplier.get());
        
        // Supplier for object creation
        Supplier<List<String>> listSupplier = ArrayList::new;
        List<String> list = listSupplier.get();
        list.add("Item");
        System.out.println("List: " + list);
        
        // Current date supplier
        Supplier<Date> dateSupplier = Date::new;
        System.out.println("Date: " + dateSupplier.get());
        
        // Lazy evaluation
        Supplier<String> expensiveOperation = () -> {
            System.out.println("Executing expensive operation...");
            return "Result";
        };
        
        // Not executed until get() is called
        System.out.println("Before get()");
        String result = expensiveOperation.get();
        System.out.println("Result: " + result);
    }
}
```

#### 5. BiFunction<T, U, R>

Accepts two inputs, returns output.

```java
import java.util.function.BiFunction;

public class BiFunctionExample {
    public static void main(String[] args) {
        // Basic BiFunction
        BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
        System.out.println("Sum: " + add.apply(5, 3));  // 8
        
        BiFunction<String, String, String> concat = (s1, s2) -> s1 + s2;
        System.out.println("Concat: " + concat.apply("Hello, ", "World"));
        
        // BiFunction with different types
        BiFunction<String, Integer, String> repeat = (s, n) -> s.repeat(n);
        System.out.println("Repeated: " + repeat.apply("Hi ", 3));  // Hi Hi Hi
        
        // Chaining with andThen
        BiFunction<Integer, Integer, Integer> multiply = (a, b) -> a * b;
        Function<Integer, Integer> square = n -> n * n;
        BiFunction<Integer, Integer, Integer> multiplyThenSquare = multiply.andThen(square);
        System.out.println("Multiply then square: " + multiplyThenSquare.apply(2, 3));  // (2*3)^2 = 36
    }
}
```

#### 6. BiConsumer<T, U>

Accepts two inputs, returns nothing.

```java
import java.util.function.BiConsumer;
import java.util.*;

public class BiConsumerExample {
    public static void main(String[] args) {
        // Basic BiConsumer
        BiConsumer<String, Integer> printPair = (name, age) -> 
            System.out.println(name + " is " + age + " years old");
        printPair.accept("Alice", 25);
        
        // Map forEach with BiConsumer
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 95);
        scores.put("Bob", 87);
        scores.put("Charlie", 92);
        
        scores.forEach((name, score) -> 
            System.out.println(name + ": " + score));
        
        // Chaining BiConsumers
        BiConsumer<String, Integer> bc1 = (s, i) -> System.out.print(s + ": ");
        BiConsumer<String, Integer> bc2 = (s, i) -> System.out.println(i * 2);
        BiConsumer<String, Integer> combined = bc1.andThen(bc2);
        combined.accept("Double", 5);  // Double: 10
    }
}
```

#### 7. BiPredicate<T, U>

Tests condition with two inputs.

```java
import java.util.function.BiPredicate;

public class BiPredicateExample {
    public static void main(String[] args) {
        // Basic BiPredicate
        BiPredicate<Integer, Integer> isGreater = (a, b) -> a > b;
        System.out.println("Is 5 > 3? " + isGreater.test(5, 3));  // true
        
        BiPredicate<String, String> startsWith = (text, prefix) -> text.startsWith(prefix);
        System.out.println("Starts with 'Hel'? " + startsWith.test("Hello", "Hel"));  // true
        
        // Combining BiPredicates
        BiPredicate<Integer, Integer> isLess = (a, b) -> a < b;
        BiPredicate<Integer, Integer> notEqual = isGreater.or(isLess);
        System.out.println("Not equal? " + notEqual.test(5, 5));  // false
    }
}
```

#### 8. UnaryOperator<T>

Special case of Function where input and output are same type.

```java
import java.util.function.UnaryOperator;
import java.util.*;

public class UnaryOperatorExample {
    public static void main(String[] args) {
        // Basic UnaryOperator
        UnaryOperator<Integer> square = n -> n * n;
        System.out.println("Square: " + square.apply(5));  // 25
        
        UnaryOperator<String> toUpper = String::toUpperCase;
        System.out.println("Upper: " + toUpper.apply("hello"));  // HELLO
        
        // List replaceAll
        List<String> words = new ArrayList<>(Arrays.asList("hello", "world"));
        words.replaceAll(String::toUpperCase);
        System.out.println(words);  // [HELLO, WORLD]
        
        // Chaining
        UnaryOperator<Integer> addOne = n -> n + 1;
        UnaryOperator<Integer> multiplyBy2 = n -> n * 2;
        UnaryOperator<Integer> combined = addOne.andThen(multiplyBy2);
        System.out.println("Result: " + combined.apply(5));  // (5+1)*2 = 12
    }
}
```

#### 9. BinaryOperator<T>

Special case of BiFunction where both inputs and output are same type.

```java
import java.util.function.BinaryOperator;
import java.util.*;

public class BinaryOperatorExample {
    public static void main(String[] args) {
        // Basic BinaryOperator
        BinaryOperator<Integer> add = (a, b) -> a + b;
        System.out.println("Sum: " + add.apply(5, 3));  // 8
        
        BinaryOperator<String> concat = (s1, s2) -> s1 + s2;
        System.out.println("Concat: " + concat.apply("Hello, ", "World"));
        
        // maxBy and minBy
        BinaryOperator<Integer> max = BinaryOperator.maxBy(Integer::compareTo);
        System.out.println("Max: " + max.apply(5, 3));  // 5
        
        BinaryOperator<Integer> min = BinaryOperator.minBy(Integer::compareTo);
        System.out.println("Min: " + min.apply(5, 3));  // 3
        
        // Stream reduce
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        int sum = numbers.stream().reduce(0, (a, b) -> a + b);
        System.out.println("Sum of list: " + sum);  // 15
        
        Optional<Integer> product = numbers.stream().reduce((a, b) -> a * b);
        System.out.println("Product: " + product.get());  // 120
    }
}
```

### Functional Interfaces Summary

| Interface | Input | Output | Method | Use Case |
|-----------|-------|--------|--------|----------|
| `Predicate<T>` | T | boolean | test(T) | Testing conditions |
| `Consumer<T>` | T | void | accept(T) | Side effects |
| `Function<T,R>` | T | R | apply(T) | Transformation |
| `Supplier<T>` | none | T | get() | Lazy generation |
| `BiFunction<T,U,R>` | T, U | R | apply(T,U) | Two input transform |
| `BiConsumer<T,U>` | T, U | void | accept(T,U) | Two input side effect |
| `BiPredicate<T,U>` | T, U | boolean | test(T,U) | Two input condition |
| `UnaryOperator<T>` | T | T | apply(T) | Same type transform |
| `BinaryOperator<T>` | T, T | T | apply(T,T) | Same type combine |

---

## Stream API

Streams provide a functional approach to processing collections of objects. (Covered extensively in Arrays and Collections section, key highlights here)

### Creating Streams

```java
import java.util.stream.*;
import java.util.*;

public class StreamCreationExample {
    public static void main(String[] args) {
        // From collection
        List<String> list = Arrays.asList("a", "b", "c");
        Stream<String> stream1 = list.stream();
        
        // From array
        String[] array = {"a", "b", "c"};
        Stream<String> stream2 = Arrays.stream(array);
        
        // Using Stream.of()
        Stream<String> stream3 = Stream.of("a", "b", "c");
        
        // Empty stream
        Stream<String> stream4 = Stream.empty();
        
        // Infinite streams
        Stream<Integer> stream5 = Stream.iterate(0, n -> n + 1);
        Stream<Double> stream6 = Stream.generate(Math::random);
        
        // Range streams
        IntStream range1 = IntStream.range(1, 5);  // 1,2,3,4
        IntStream range2 = IntStream.rangeClosed(1, 5);  // 1,2,3,4,5
        
        // Builder
        Stream<String> stream7 = Stream.<String>builder()
            .add("a")
            .add("b")
            .add("c")
            .build();
    }
}
```

### Common Stream Operations

```java
import java.util.*;
import java.util.stream.*;

public class StreamOperationsExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // filter + collect
        List<Integer> even = numbers.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());
        System.out.println("Even: " + even);
        
        // map + collect
        List<Integer> squares = numbers.stream()
            .map(n -> n * n)
            .collect(Collectors.toList());
        System.out.println("Squares: " + squares);
        
        // filter + map + collect
        List<Integer> evenSquares = numbers.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * n)
            .collect(Collectors.toList());
        System.out.println("Even squares: " + evenSquares);
        
        // reduce
        int sum = numbers.stream()
            .reduce(0, (a, b) -> a + b);
        System.out.println("Sum: " + sum);
        
        // anyMatch, allMatch, noneMatch
        boolean anyEven = numbers.stream().anyMatch(n -> n % 2 == 0);
        boolean allPositive = numbers.stream().allMatch(n -> n > 0);
        boolean noneNegative = numbers.stream().noneMatch(n -> n < 0);
        
        // findFirst, findAny
        Optional<Integer> first = numbers.stream().findFirst();
        Optional<Integer> any = numbers.stream().findAny();
        
        // count
        long count = numbers.stream().filter(n -> n > 5).count();
        System.out.println("Count > 5: " + count);
        
        // sorted
        List<Integer> sorted = numbers.stream()
            .sorted(Comparator.reverseOrder())
            .collect(Collectors.toList());
        
        // distinct
        List<Integer> distinct = Arrays.asList(1, 2, 2, 3, 3, 4)
            .stream()
            .distinct()
            .collect(Collectors.toList());
        
        // limit and skip
        List<Integer> limited = numbers.stream()
            .skip(3)
            .limit(4)
            .collect(Collectors.toList());
    }
}
```

---

## Method References

Method references are shorthand notation of lambda expressions to call a method.

### Types of Method References

#### 1. Static Method Reference

```java
// ClassName::staticMethod
import java.util.*;

public class StaticMethodReferenceExample {
    public static void main(String[] args) {
        List<String> numbers = Arrays.asList("1", "2", "3", "4", "5");
        
        // Lambda
        List<Integer> parsed1 = numbers.stream()
            .map(s -> Integer.parseInt(s))
            .collect(Collectors.toList());
        
        // Method reference
        List<Integer> parsed2 = numbers.stream()
            .map(Integer::parseInt)
            .collect(Collectors.toList());
        
        System.out.println(parsed2);
        
        // Math methods
        List<Double> values = Arrays.asList(1.5, 2.3, 3.7);
        values.forEach(Math::ceil);  // Math.ceil(value)
    }
}
```

#### 2. Instance Method Reference (Specific Object)

```java
// instance::instanceMethod
public class InstanceMethodReferenceExample {
    public static void main(String[] args) {
        String prefix = "Hello, ";
        
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        
        // Lambda
        names.forEach(name -> System.out.println(prefix + name));
        
        // Method reference on specific object
        PrintStream out = System.out;
        names.forEach(out::println);
        
        // String instance method
        String str = "Test";
        Supplier<Integer> lengthSupplier = str::length;
        System.out.println("Length: " + lengthSupplier.get());
    }
}
```

#### 3. Instance Method Reference (Arbitrary Object)

```java
// ClassName::instanceMethod
import java.util.*;

public class ArbitraryObjectMethodReferenceExample {
    public static void main(String[] args) {
        List<String> words = Arrays.asList("apple", "banana", "cherry");
        
        // Lambda
        words.sort((s1, s2) -> s1.compareToIgnoreCase(s2));
        
        // Method reference (instance method of arbitrary object)
        words.sort(String::compareToIgnoreCase);
        
        // Another example
        List<String> upper1 = words.stream()
            .map(s -> s.toUpperCase())
            .collect(Collectors.toList());
        
        List<String> upper2 = words.stream()
            .map(String::toUpperCase)
            .collect(Collectors.toList());
        
        System.out.println(upper2);
    }
}
```

#### 4. Constructor Reference

```java
// ClassName::new
import java.util.*;
import java.util.function.*;

public class ConstructorReferenceExample {
    public static void main(String[] args) {
        // Supplier with constructor reference
        Supplier<List<String>> listSupplier = ArrayList::new;
        List<String> list = listSupplier.get();
        
        // Function with constructor reference
        Function<String, Integer> stringToInt = Integer::new;
        Integer num = stringToInt.apply("123");
        
        // Stream with constructor reference
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        List<Person> people = names.stream()
            .map(Person::new)
            .collect(Collectors.toList());
        
        people.forEach(System.out::println);
    }
    
    static class Person {
        String name;
        
        Person(String name) {
            this.name = name;
        }
        
        @Override
        public String toString() {
            return "Person{name='" + name + "'}";
        }
    }
}
```

### Method Reference Comparison

```java
import java.util.*;
import java.util.function.*;

public class MethodReferenceComparison {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("a", "b", "c");
        
        // 1. Static method
        // Lambda: s -> Integer.parseInt(s)
        // Method reference: Integer::parseInt
        Function<String, Integer> f1 = Integer::parseInt;
        
        // 2. Instance method of particular object
        // Lambda: s -> System.out.println(s)
        // Method reference: System.out::println
        Consumer<String> c1 = System.out::println;
        
        // 3. Instance method of arbitrary object
        // Lambda: (s1, s2) -> s1.compareTo(s2)
        // Method reference: String::compareTo
        Comparator<String> comp = String::compareTo;
        
        // 4. Constructor
        // Lambda: () -> new ArrayList<>()
        // Method reference: ArrayList::new
        Supplier<List<String>> s1 = ArrayList::new;
    }
}
```

---

## Optional Class

Optional is a container object used to contain not-null objects. Helps avoid NullPointerException.

### Creating Optional

```java
import java.util.Optional;

public class OptionalCreationExample {
    public static void main(String[] args) {
        // Empty optional
        Optional<String> empty = Optional.empty();
        System.out.println("Empty: " + empty);
        
        // Optional with value
        Optional<String> optional = Optional.of("Hello");
        System.out.println("Value: " + optional);
        
        // Optional.of() throws NPE if null
        // Optional<String> nullOpt = Optional.of(null);  // NullPointerException
        
        // Optional.ofNullable() - safe for null
        Optional<String> nullable1 = Optional.ofNullable("World");
        Optional<String> nullable2 = Optional.ofNullable(null);
        System.out.println("Nullable1: " + nullable1);
        System.out.println("Nullable2: " + nullable2);
    }
}
```

### Checking Presence

```java
import java.util.Optional;

public class OptionalPresenceExample {
    public static void main(String[] args) {
        Optional<String> optional = Optional.of("Hello");
        Optional<String> empty = Optional.empty();
        
        // isPresent()
        if (optional.isPresent()) {
            System.out.println("Value present: " + optional.get());
        }
        
        // isEmpty() (Java 11+)
        if (empty.isEmpty()) {
            System.out.println("No value present");
        }
        
        // ifPresent() with Consumer
        optional.ifPresent(value -> System.out.println("Value: " + value));
        
        // ifPresentOrElse() (Java 9+)
        optional.ifPresentOrElse(
            value -> System.out.println("Present: " + value),
            () -> System.out.println("Not present")
        );
    }
}
```

### Getting Values

```java
import java.util.Optional;

public class OptionalGetExample {
    public static void main(String[] args) {
        Optional<String> optional = Optional.of("Hello");
        Optional<String> empty = Optional.empty();
        
        // get() - throws NoSuchElementException if empty
        String value1 = optional.get();
        System.out.println("get(): " + value1);
        // String value2 = empty.get();  // NoSuchElementException
        
        // orElse() - returns default if empty
        String value3 = optional.orElse("Default");
        String value4 = empty.orElse("Default");
        System.out.println("orElse(): " + value3);      // Hello
        System.out.println("orElse(): " + value4);      // Default
        
        // orElseGet() - returns result of Supplier if empty
        String value5 = empty.orElseGet(() -> "Generated Default");
        System.out.println("orElseGet(): " + value5);
        
        // orElseThrow() - throws exception if empty
        String value6 = optional.orElseThrow();
        // String value7 = empty.orElseThrow();  // NoSuchElementException
        
        // orElseThrow with custom exception
        String value8 = empty.orElseThrow(() -> new IllegalStateException("No value"));
    }
}
```

### Transforming Optional

```java
import java.util.Optional;

public class OptionalTransformExample {
    public static void main(String[] args) {
        Optional<String> optional = Optional.of("hello");
        
        // map() - transforms value
        Optional<String> upper = optional.map(String::toUpperCase);
        System.out.println("Mapped: " + upper.get());  // HELLO
        
        Optional<Integer> length = optional.map(String::length);
        System.out.println("Length: " + length.get());  // 5
        
        // flatMap() - for nested Optionals
        Optional<Optional<String>> nested = Optional.of(Optional.of("value"));
        Optional<String> flattened = nested.flatMap(o -> o);
        System.out.println("Flattened: " + flattened.get());
        
        // filter() - filters based on predicate
        Optional<String> filtered1 = optional.filter(s -> s.startsWith("h"));
        Optional<String> filtered2 = optional.filter(s -> s.startsWith("a"));
        System.out.println("Filtered1: " + filtered1);  // Optional[hello]
        System.out.println("Filtered2: " + filtered2);  // Optional.empty
    }
}
```

### Practical Examples

```java
import java.util.*;

public class OptionalPracticalExample {
    // Without Optional (old way)
    public static String getDefaultOldWay(String value) {
        if (value != null) {
            return value;
        } else {
            return "default";
        }
    }
    
    // With Optional (new way)
    public static String getDefaultNewWay(String value) {
        return Optional.ofNullable(value).orElse("default");
    }
    
    // Finding element in list
    public static Optional<String> findByName(List<String> list, String name) {
        return list.stream()
                   .filter(s -> s.equals(name))
                   .findFirst();
    }
    
    // Chaining operations
    public static Optional<Integer> parseAndDouble(String value) {
        return Optional.ofNullable(value)
                       .filter(s -> !s.isEmpty())
                       .map(Integer::parseInt)
                       .map(n -> n * 2);
    }
    
    public static void main(String[] args) {
        // Example 1
        System.out.println(getDefaultNewWay(null));      // default
        System.out.println(getDefaultNewWay("value"));   // value
        
        // Example 2
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        Optional<String> found = findByName(names, "Bob");
        found.ifPresent(name -> System.out.println("Found: " + name));
        
        // Example 3
        Optional<Integer> result = parseAndDouble("10");
        System.out.println("Result: " + result.orElse(0));  // 20
        
        Optional<Integer> invalid = parseAndDouble("invalid");
        System.out.println("Invalid: " + invalid.orElse(0));  // 0 (caught by filter)
    }
}
```

### Optional Best Practices

```java
import java.util.Optional;

public class OptionalBestPractices {
    // DON'T: Use Optional for fields
    // class User {
    //     private Optional<String> name;  // Bad
    // }
    
    // DO: Use Optional for return types
    public Optional<String> findName(int id) {
        // Search logic
        return Optional.empty();
    }
    
    // DON'T: Use get() without checking
    public void badGet(Optional<String> opt) {
        // String value = opt.get();  // May throw exception
    }
    
    // DO: Use orElse, orElseGet, or ifPresent
    public void goodGet(Optional<String> opt) {
        String value = opt.orElse("default");
        opt.ifPresent(v -> System.out.println(v));
    }
    
    // DON'T: Use Optional.of() with potentially null value
    public Optional<String> badOf(String value) {
        // return Optional.of(value);  // Throws NPE if value is null
        return Optional.ofNullable(value);  // Safe
    }
}
```

---

## Default and Static Methods in Interfaces

Java 8 allows interfaces to have default and static methods with implementations.

### Default Methods

```java
interface Vehicle {
    // Abstract method
    void start();
    
    // Default method
    default void stop() {
        System.out.println("Vehicle stopped");
    }
    
    default void honk() {
        System.out.println("Vehicle honking");
    }
}

class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car started");
    }
    
    // Can optionally override default method
    @Override
    public void stop() {
        System.out.println("Car stopped");
    }
}

class Bike implements Vehicle {
    @Override
    public void start() {
        System.out.println("Bike started");
    }
    
    // Uses default implementation of stop()
}

public class DefaultMethodExample {
    public static void main(String[] args) {
        Car car = new Car();
        car.start();  // Car started
        car.stop();   // Car stopped (overridden)
        car.honk();   // Vehicle honking (default)
        
        Bike bike = new Bike();
        bike.start();  // Bike started
        bike.stop();   // Vehicle stopped (default)
        bike.honk();   // Vehicle honking (default)
    }
}
```

### Resolving Diamond Problem

```java
interface InterfaceA {
    default void show() {
        System.out.println("InterfaceA");
    }
}

interface InterfaceB {
    default void show() {
        System.out.println("InterfaceB");
    }
}

// Must override to resolve ambiguity
class MyClass implements InterfaceA, InterfaceB {
    @Override
    public void show() {
        // Choose one implementation
        InterfaceA.super.show();  // Call InterfaceA's implementation
        
        // Or call InterfaceB's implementation
        // InterfaceB.super.show();
        
        // Or provide own implementation
        // System.out.println("MyClass");
    }
}
```

### Static Methods in Interfaces

```java
interface Calculator {
    // Static method
    static int add(int a, int b) {
        return a + b;
    }
    
    static int multiply(int a, int b) {
        return a * b;
    }
    
    // Can call other static methods
    static int square(int n) {
        return multiply(n, n);
    }
    
    // Abstract method
    int calculate(int a, int b);
}

public class StaticInterfaceMethodExample {
    public static void main(String[] args) {
        // Call static methods using interface name
        int sum = Calculator.add(5, 3);
        int product = Calculator.multiply(5, 3);
        int square = Calculator.square(5);
        
        System.out.println("Sum: " + sum);          // 8
        System.out.println("Product: " + product);  // 15
        System.out.println("Square: " + square);    // 25
        
        // Cannot be called on implementation class
        // MyCalculator.add(5, 3);  // Compilation error
    }
}

class MyCalculator implements Calculator {
    @Override
    public int calculate(int a, int b) {
        return a + b;
    }
}
```

### Private Methods in Interfaces (Java 9+)

```java
interface MyInterface {
    // Public default method
    default void method1() {
        commonLogic();
        System.out.println("Method 1");
    }
    
    default void method2() {
        commonLogic();
        System.out.println("Method 2");
    }
    
    // Private method - shared logic
    private void commonLogic() {
        System.out.println("Common logic");
    }
    
    // Private static method
    private static void staticHelper() {
        System.out.println("Static helper");
    }
    
    static void publicStatic() {
        staticHelper();
        System.out.println("Public static");
    }
}
```

---

## Date & Time API

Java 8 introduced a new Date and Time API in `java.time` package, replacing the old `java.util.Date` and `java.util.Calendar`.

### Key Classes

- **LocalDate**: Date without time or timezone
- **LocalTime**: Time without date or timezone  
- **LocalDateTime**: Date and time without timezone
- **ZonedDateTime**: Date and time with timezone
- **Instant**: Timestamp
- **Period**: Date-based duration
- **Duration**: Time-based duration
- **DateTimeFormatter**: Formatting and parsing

### LocalDate

```java
import java.time.LocalDate;
import java.time.Month;
import java.time.temporal.ChronoUnit;

public class LocalDateExample {
    public static void main(String[] args) {
        // Current date
        LocalDate today = LocalDate.now();
        System.out.println("Today: " + today);  // 2024-01-15
        
        // Specific date
        LocalDate date1 = LocalDate.of(2024, 1, 15);
        LocalDate date2 = LocalDate.of(2024, Month.JANUARY, 15);
        LocalDate date3 = LocalDate.parse("2024-01-15");
        
        // Get components
        int year = today.getYear();
        int month = today.getMonthValue();
        int day = today.getDayOfMonth();
        Month monthEnum = today.getMonth();
        int dayOfYear = today.getDayOfYear();
        
        System.out.println("Year: " + year);
        System.out.println("Month: " + month);
        System.out.println("Day: " + day);
        
        // Manipulation
        LocalDate tomorrow = today.plusDays(1);
        LocalDate nextWeek = today.plusWeeks(1);
        LocalDate nextMonth = today.plusMonths(1);
        LocalDate nextYear = today.plusYears(1);
        
        LocalDate yesterday = today.minusDays(1);
        
        // With methods (immutable)
        LocalDate modified = today.withYear(2025)
                                  .withMonth(12)
                                  .withDayOfMonth(25);
        System.out.println("Modified: " + modified);
        
        // Comparison
        LocalDate date4 = LocalDate.of(2024, 6, 15);
        LocalDate date5 = LocalDate.of(2024, 12, 25);
        
        boolean isBefore = date4.isBefore(date5);
        boolean isAfter = date4.isAfter(date5);
        boolean isEqual = date4.isEqual(date5);
        
        System.out.println("Is before: " + isBefore);  // true
        
        // Leap year
        boolean isLeap = today.isLeapYear();
        System.out.println("Is leap year: " + isLeap);
        
        // Length of month/year
        int lengthOfMonth = today.lengthOfMonth();
        int lengthOfYear = today.lengthOfYear();
        
        // Calculate difference
        long daysBetween = ChronoUnit.DAYS.between(date4, date5);
        System.out.println("Days between: " + daysBetween);
    }
}
```

### LocalTime

```java
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;

public class LocalTimeExample {
    public static void main(String[] args) {
        // Current time
        LocalTime now = LocalTime.now();
        System.out.println("Now: " + now);  // 14:30:45.123
        
        // Specific time
        LocalTime time1 = LocalTime.of(14, 30);
        LocalTime time2 = LocalTime.of(14, 30, 45);
        LocalTime time3 = LocalTime.of(14, 30, 45, 123456789);
        LocalTime time4 = LocalTime.parse("14:30:45");
        
        // Get components
        int hour = now.getHour();
        int minute = now.getMinute();
        int second = now.getSecond();
        int nano = now.getNano();
        
        System.out.println("Hour: " + hour);
        System.out.println("Minute: " + minute);
        
        // Manipulation
        LocalTime later = now.plusHours(2);
        LocalTime laterMinutes = now.plusMinutes(30);
        LocalTime laterSeconds = now.plusSeconds(45);
        
        LocalTime earlier = now.minusHours(1);
        
        // With methods
        LocalTime modified = now.withHour(10)
                                .withMinute(0)
                                .withSecond(0);
        System.out.println("Modified: " + modified);
        
        // Comparison
        LocalTime time5 = LocalTime.of(10, 0);
        LocalTime time6 = LocalTime.of(15, 0);
        
        boolean isBefore = time5.isBefore(time6);
        System.out.println("Is before: " + isBefore);  // true
        
        // Calculate difference
        long hoursBetween = ChronoUnit.HOURS.between(time5, time6);
        System.out.println("Hours between: " + hoursBetween);  // 5
        
        // Min and Max
        LocalTime min = LocalTime.MIN;  // 00:00:00
        LocalTime max = LocalTime.MAX;  // 23:59:59.999999999
        LocalTime noon = LocalTime.NOON;  // 12:00:00
        LocalTime midnight = LocalTime.MIDNIGHT;  // 00:00:00
    }
}
```

### LocalDateTime

```java
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.time.LocalTime;

public class LocalDateTimeExample {
    public static void main(String[] args) {
        // Current date and time
        LocalDateTime now = LocalDateTime.now();
        System.out.println("Now: " + now);
        
        // Specific date and time
        LocalDateTime dt1 = LocalDateTime.of(2024, 1, 15, 14, 30);
        LocalDateTime dt2 = LocalDateTime.of(2024, 1, 15, 14, 30, 45);
        LocalDateTime dt3 = LocalDateTime.parse("2024-01-15T14:30:45");
        
        // From LocalDate and LocalTime
        LocalDate date = LocalDate.of(2024, 1, 15);
        LocalTime time = LocalTime.of(14, 30);
        LocalDateTime dt4 = LocalDateTime.of(date, time);
        
        // Get components
        LocalDate dateComponent = now.toLocalDate();
        LocalTime timeComponent = now.toLocalTime();
        
        // All date operations
        LocalDateTime tomorrow = now.plusDays(1);
        LocalDateTime nextMonth = now.plusMonths(1);
        
        // All time operations
        LocalDateTime later = now.plusHours(2);
        LocalDateTime laterMinutes = now.plusMinutes(30);
        
        // With methods
        LocalDateTime modified = now.withYear(2025)
                                    .withMonth(12)
                                    .withDayOfMonth(25)
                                    .withHour(10)
                                    .withMinute(0);
        
        // Comparison
        LocalDateTime dt5 = LocalDateTime.of(2024, 6, 15, 10, 0);
        LocalDateTime dt6 = LocalDateTime.of(2024, 12, 25, 15, 0);
        
        boolean isBefore = dt5.isBefore(dt6);
        System.out.println("Is before: " + isBefore);
    }
}
```

### ZonedDateTime

```java
import java.time.*;

public class ZonedDateTimeExample {
    public static void main(String[] args) {
        // Current date-time with system timezone
        ZonedDateTime now = ZonedDateTime.now();
        System.out.println("Now: " + now);
        
        // Specific timezone
        ZonedDateTime tokyo = ZonedDateTime.now(ZoneId.of("Asia/Tokyo"));
        ZonedDateTime newYork = ZonedDateTime.now(ZoneId.of("America/New_York"));
        ZonedDateTime london = ZonedDateTime.now(ZoneId.of("Europe/London"));
        
        System.out.println("Tokyo: " + tokyo);
        System.out.println("New York: " + newYork);
        System.out.println("London: " + london);
        
        // From LocalDateTime
        LocalDateTime ldt = LocalDateTime.of(2024, 1, 15, 14, 30);
        ZonedDateTime zdt = ldt.atZone(ZoneId.of("Asia/Kolkata"));
        System.out.println("India: " + zdt);
        
        // Change timezone
        ZonedDateTime tokyoTime = now.withZoneSameInstant(ZoneId.of("Asia/Tokyo"));
        System.out.println("Converted to Tokyo: " + tokyoTime);
        
        // Available zones
        Set<String> zones = ZoneId.getAvailableZoneIds();
        System.out.println("Total zones: " + zones.size());
    }
}
```

### Instant

```java
import java.time.Instant;
import java.time.Duration;

public class InstantExample {
    public static void main(String[] args) {
        // Current timestamp
        Instant now = Instant.now();
        System.out.println("Now: " + now);
        
        // Epoch time
        Instant epoch = Instant.ofEpochSecond(0);
        System.out.println("Epoch: " + epoch);  // 1970-01-01T00:00:00Z
        
        // From milliseconds
        Instant fromMillis = Instant.ofEpochMilli(System.currentTimeMillis());
        
        // Get epoch seconds/millis
        long epochSecond = now.getEpochSecond();
        long epochMilli = now.toEpochMilli();
        
        System.out.println("Epoch second: " + epochSecond);
        System.out.println("Epoch milli: " + epochMilli);
        
        // Manipulation
        Instant later = now.plusSeconds(60);
        Instant earlier = now.minusSeconds(60);
        
        // Comparison
        Instant instant1 = Instant.now();
        Instant instant2 = instant1.plusSeconds(10);
        
        boolean isBefore = instant1.isBefore(instant2);
        System.out.println("Is before: " + isBefore);
        
        // Duration between instants
        Duration duration = Duration.between(instant1, instant2);
        System.out.println("Duration: " + duration.getSeconds() + " seconds");
    }
}
```

### Period (Date-based Duration)

```java
import java.time.LocalDate;
import java.time.Period;

public class PeriodExample {
    public static void main(String[] args) {
        // Create period
        Period period1 = Period.ofDays(10);
        Period period2 = Period.ofWeeks(2);
        Period period3 = Period.ofMonths(3);
        Period period4 = Period.ofYears(1);
        Period period5 = Period.of(1, 6, 15);  // 1 year, 6 months, 15 days
        
        // Between two dates
        LocalDate date1 = LocalDate.of(2024, 1, 1);
        LocalDate date2 = LocalDate.of(2024, 12, 31);
        Period between = Period.between(date1, date2);
        
        System.out.println("Period: " + between);
        System.out.println("Months: " + between.getMonths());
        System.out.println("Days: " + between.getDays());
        
        // Total months
        long totalMonths = between.toTotalMonths();
        System.out.println("Total months: " + totalMonths);
        
        // Add period to date
        LocalDate today = LocalDate.now();
        LocalDate future = today.plus(period5);
        System.out.println("Future: " + future);
        
        // Parse
        Period parsed = Period.parse("P1Y6M15D");  // 1 year, 6 months, 15 days
        System.out.println("Parsed: " + parsed);
        
        // Age calculation
        LocalDate birthDate = LocalDate.of(1990, 5, 15);
        Period age = Period.between(birthDate, LocalDate.now());
        System.out.println("Age: " + age.getYears() + " years, " + 
                         age.getMonths() + " months, " + 
                         age.getDays() + " days");
    }
}
```

### Duration (Time-based Duration)

```java
import java.time.*;

public class DurationExample {
    public static void main(String[] args) {
        // Create duration
        Duration duration1 = Duration.ofHours(5);
        Duration duration2 = Duration.ofMinutes(30);
        Duration duration3 = Duration.ofSeconds(120);
        Duration duration4 = Duration.ofMillis(1000);
        Duration duration5 = Duration.ofDays(2);
        
        // Between two times
        LocalTime time1 = LocalTime.of(10, 0);
        LocalTime time2 = LocalTime.of(15, 30);
        Duration between = Duration.between(time1, time2);
        
        System.out.println("Duration: " + between);
        System.out.println("Hours: " + between.toHours());
        System.out.println("Minutes: " + between.toMinutes());
        System.out.println("Seconds: " + between.getSeconds());
        
        // Between date-times
        LocalDateTime dt1 = LocalDateTime.of(2024, 1, 1, 10, 0);
        LocalDateTime dt2 = LocalDateTime.of(2024, 1, 1, 15, 30);
        Duration dtDuration = Duration.between(dt1, dt2);
        
        // Add duration to time
        LocalTime now = LocalTime.now();
        LocalTime later = now.plus(duration2);
        System.out.println("Later: " + later);
        
        // Parse
        Duration parsed = Duration.parse("PT5H30M");  // 5 hours, 30 minutes
        System.out.println("Parsed: " + parsed);
        
        // Performance measurement
        Instant start = Instant.now();
        // Some operation
        try { Thread.sleep(1000); } catch (InterruptedException e) {}
        Instant end = Instant.now();
        Duration elapsed = Duration.between(start, end);
        System.out.println("Elapsed: " + elapsed.toMillis() + "ms");
    }
}
```

### DateTimeFormatter

```java
import java.time.*;
import java.time.format.DateTimeFormatter;

public class DateTimeFormatterExample {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        
        // Predefined formatters
        String iso = now.format(DateTimeFormatter.ISO_DATE_TIME);
        String isoDate = now.format(DateTimeFormatter.ISO_DATE);
        String isoTime = now.format(DateTimeFormatter.ISO_TIME);
        
        System.out.println("ISO: " + iso);
        System.out.println("ISO Date: " + isoDate);
        System.out.println("ISO Time: " + isoTime);
        
        // Custom patterns
        DateTimeFormatter formatter1 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String formatted1 = now.format(formatter1);
        System.out.println("Custom 1: " + formatted1);  // 15/01/2024
        
        DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("dd-MMM-yyyy HH:mm:ss");
        String formatted2 = now.format(formatter2);
        System.out.println("Custom 2: " + formatted2);  // 15-Jan-2024 14:30:45
        
        DateTimeFormatter formatter3 = DateTimeFormatter.ofPattern("E, MMM dd yyyy");
        String formatted3 = now.format(formatter3);
        System.out.println("Custom 3: " + formatted3);  // Mon, Jan 15 2024
        
        // Parsing
        String dateString = "15/01/2024";
        LocalDate parsedDate = LocalDate.parse(dateString, formatter1);
        System.out.println("Parsed date: " + parsedDate);
        
        String datetimeString = "15-Jan-2024 14:30:45";
        LocalDateTime parsedDateTime = LocalDateTime.parse(datetimeString, formatter2);
        System.out.println("Parsed datetime: " + parsedDateTime);
        
        // Common patterns
        // y or yy = year (2 digits)
        // yyyy = year (4 digits)
        // M = month (1 or 2 digits)
        // MM = month (2 digits)
        // MMM = short month name (Jan)
        // MMMM = full month name (January)
        // d = day (1 or 2 digits)
        // dd = day (2 digits)
        // E = short day name (Mon)
        // EEEE = full day name (Monday)
        // H = hour (0-23)
        // HH = hour (00-23, 2 digits)
        // h = hour (1-12)
        // hh = hour (01-12, 2 digits)
        // m = minute (1 or 2 digits)
        // mm = minute (2 digits)
        // s = second (1 or 2 digits)
        // ss = second (2 digits)
        // a = AM/PM
    }
}
```

### Practical Date-Time Examples

```java
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;

public class DateTimePracticalExample {
    public static void main(String[] args) {
        // Example 1: Calculate age
        LocalDate birthDate = LocalDate.of(1990, 5, 15);
        LocalDate today = LocalDate.now();
        Period age = Period.between(birthDate, today);
        System.out.println("Age: " + age.getYears() + " years");
        
        // Example 2: Is birthday today?
        LocalDate birthday = LocalDate.of(2024, today.getMonthValue(), today.getDayOfMonth());
        boolean isBirthday = today.equals(birthday);
        
        // Example 3: Next birthday
        LocalDate nextBirthday = birthDate.withYear(today.getYear());
        if (nextBirthday.isBefore(today) || nextBirthday.isEqual(today)) {
            nextBirthday = nextBirthday.plusYears(1);
        }
        long daysUntilBirthday = ChronoUnit.DAYS.between(today, nextBirthday);
        System.out.println("Days until next birthday: " + daysUntilBirthday);
        
        // Example 4: Working days calculation (excluding weekends)
        LocalDate startDate = LocalDate.of(2024, 1, 1);
        LocalDate endDate = LocalDate.of(2024, 1, 31);
        long workingDays = startDate.datesUntil(endDate.plusDays(1))
                                    .filter(date -> date.getDayOfWeek() != DayOfWeek.SATURDAY &&
                                                   date.getDayOfWeek() != DayOfWeek.SUNDAY)
                                    .count();
        System.out.println("Working days: " + workingDays);
        
        // Example 5: First/Last day of month
        LocalDate firstDayOfMonth = today.with(TemporalAdjusters.firstDayOfMonth());
        LocalDate lastDayOfMonth = today.with(TemporalAdjusters.lastDayOfMonth());
        System.out.println("First day: " + firstDayOfMonth);
        System.out.println("Last day: " + lastDayOfMonth);
        
        // Example 6: Next Monday
        LocalDate nextMonday = today.with(TemporalAdjusters.next(DayOfWeek.MONDAY));
        System.out.println("Next Monday: " + nextMonday);
        
        // Example 7: Time zone conversion
        ZonedDateTime indiaTime = ZonedDateTime.now(ZoneId.of("Asia/Kolkata"));
        ZonedDateTime usTime = indiaTime.withZoneSameInstant(ZoneId.of("America/New_York"));
        System.out.println("India: " + indiaTime.format(DateTimeFormatter.ofPattern("HH:mm")));
        System.out.println("US: " + usTime.format(DateTimeFormatter.ofPattern("HH:mm")));
    }
}
```

---

## Summary

Java 8+ features revolutionized Java programming:

### Lambda Expressions
- Concise syntax for functional programming
- `(parameters) -> expression`
- Enables cleaner, more readable code

### Functional Interfaces
- **Predicate**: Test conditions
- **Consumer**: Side effects
- **Function**: Transformations
- **Supplier**: Lazy generation
- **BiFunction, BiConsumer, BiPredicate**: Two-input variants
- **UnaryOperator, BinaryOperator**: Same-type operations

### Stream API
- Functional data processing
- **Intermediate**: filter, map, sorted, distinct, limit, skip
- **Terminal**: collect, forEach, reduce, count, anyMatch
- Improved performance with parallel streams

### Method References
- **Static**: `ClassName::staticMethod`
- **Instance (specific)**: `instance::method`
- **Instance (arbitrary)**: `ClassName::method`
- **Constructor**: `ClassName::new`

### Optional Class
- Avoid NullPointerException
- Methods: orElse, orElseGet, orElseThrow, ifPresent
- Transformations: map, flatMap, filter
- Use for return types, not fields

### Default & Static Methods in Interfaces
- **Default**: Provide implementation in interface
- **Static**: Utility methods in interface
- **Private (Java 9+)**: Helper methods

### Date & Time API
- **LocalDate**: Date without time
- **LocalTime**: Time without date
- **LocalDateTime**: Date and time
- **ZonedDateTime**: With timezone
- **Instant**: Timestamp
- **Period**: Date-based duration
- **Duration**: Time-based duration
- **DateTimeFormatter**: Formatting and parsing

### Benefits
1. More concise and readable code
2. Functional programming support
3. Better null handling
4. Improved date/time handling
5. Enhanced interfaces
6. Parallel processing capabilities

These features make Java more modern, expressive, and aligned with contemporary programming practices.

---

# 11. Java Networking (Basics)

Java provides built-in support for network programming through classes in `java.net` package.

## 11.1 InetAddress

Represents an IP address (IPv4 or IPv6).

### Basic Usage

```java
import java.net.InetAddress;
import java.net.UnknownHostException;

public class InetAddressExample {
    public static void main(String[] args) {
        try {
            // Get local host
            InetAddress localhost = InetAddress.getLocalHost();
            System.out.println("Local Host: " + localhost.getHostName());
            System.out.println("IP Address: " + localhost.getHostAddress());
            
            // Get address by hostname
            InetAddress google = InetAddress.getByName("www.google.com");
            System.out.println("Google Host: " + google.getHostName());
            System.out.println("Google IP: " + google.getHostAddress());
            
            // Get all addresses for a hostname
            InetAddress[] addresses = InetAddress.getAllByName("www.google.com");
            System.out.println("All Google IPs:");
            for (InetAddress addr : addresses) {
                System.out.println("  " + addr.getHostAddress());
            }
            
            // Check reachability
            boolean reachable = google.isReachable(5000);  // 5 seconds timeout
            System.out.println("Is reachable: " + reachable);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

## 11.2 Socket Programming (TCP)

TCP provides reliable, connection-oriented communication.

### TCP Server

```java
import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class TCPServer {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(8080)) {
            System.out.println("Server started on port 8080");
            
            while (true) {
                // Wait for client connection
                Socket clientSocket = serverSocket.accept();
                System.out.println("Client connected: " + clientSocket.getInetAddress());
                
                // Handle client in separate thread
                new Thread(() -> handleClient(clientSocket)).start();
            }
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    private static void handleClient(Socket clientSocket) {
        try (
            BufferedReader in = new BufferedReader(
                new InputStreamReader(clientSocket.getInputStream()));
            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true)
        ) {
            // Read message from client
            String message = in.readLine();
            System.out.println("Received: " + message);
            
            // Send response
            out.println("Echo: " + message);
            
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                clientSocket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### TCP Client

```java
import java.io.*;
import java.net.Socket;

public class TCPClient {
    public static void main(String[] args) {
        try (
            Socket socket = new Socket("localhost", 8080);
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream()))
        ) {
            // Send message to server
            out.println("Hello from client");
            
            // Read response
            String response = in.readLine();
            System.out.println("Server response: " + response);
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

---

## 11.3 Socket Programming (UDP)

UDP provides fast, connectionless communication (no guarantee of delivery).

### UDP Server

```java
import java.net.DatagramPacket;
import java.net.DatagramSocket;

public class UDPServer {
    public static void main(String[] args) {
        try (DatagramSocket socket = new DatagramSocket(9090)) {
            System.out.println("UDP Server started on port 9090");
            
            byte[] buffer = new byte[1024];
            
            while (true) {
                // Receive packet
                DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
                socket.receive(packet);
                
                String message = new String(packet.getData(), 0, packet.getLength());
                System.out.println("Received: " + message);
                System.out.println("From: " + packet.getAddress() + ":" + packet.getPort());
                
                // Send response
                String response = "Echo: " + message;
                byte[] responseData = response.getBytes();
                DatagramPacket responsePacket = new DatagramPacket(
                    responseData,
                    responseData.length,
                    packet.getAddress(),
                    packet.getPort()
                );
                socket.send(responsePacket);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### UDP Client

```java
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class UDPClient {
    public static void main(String[] args) {
        try (DatagramSocket socket = new DatagramSocket()) {
            
            // Send message
            String message = "Hello from UDP client";
            byte[] sendData = message.getBytes();
            
            InetAddress serverAddress = InetAddress.getByName("localhost");
            DatagramPacket sendPacket = new DatagramPacket(
                sendData,
                sendData.length,
                serverAddress,
                9090
            );
            socket.send(sendPacket);
            System.out.println("Message sent: " + message);
            
            // Receive response
            byte[] receiveData = new byte[1024];
            DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);
            socket.receive(receivePacket);
            
            String response = new String(receivePacket.getData(), 0, receivePacket.getLength());
            System.out.println("Server response: " + response);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### TCP vs UDP

| Feature | TCP | UDP |
|---------|-----|-----|
| **Connection** | Connection-oriented | Connectionless |
| **Reliability** | Reliable (guaranteed delivery) | Unreliable |
| **Ordering** | Maintains order | No ordering |
| **Speed** | Slower | Faster |
| **Use Case** | File transfer, HTTP, email | Video streaming, gaming, DNS |
| **Classes** | Socket, ServerSocket | DatagramSocket, DatagramPacket |

---

## 11.4 URL and HttpURLConnection

### URL Class

```java
import java.net.URL;

public class URLExample {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://www.example.com:443/path/page.html?key=value#section");
            
            // Get URL components
            System.out.println("Protocol: " + url.getProtocol());      // https
            System.out.println("Host: " + url.getHost());              // www.example.com
            System.out.println("Port: " + url.getPort());              // 443
            System.out.println("Path: " + url.getPath());              // /path/page.html
            System.out.println("Query: " + url.getQuery());            // key=value
            System.out.println("Ref: " + url.getRef());                // section
            System.out.println("File: " + url.getFile());              // /path/page.html?key=value
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### HttpURLConnection - GET Request

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class HttpGetExample {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://api.github.com/users/octocat");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            
            // Set request method
            conn.setRequestMethod("GET");
            
            // Set request headers
            conn.setRequestProperty("Accept", "application/json");
            
            // Get response code
            int responseCode = conn.getResponseCode();
            System.out.println("Response Code: " + responseCode);
            
            // Read response
            if (responseCode == 200) {
                BufferedReader in = new BufferedReader(
                    new InputStreamReader(conn.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();
                
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();
                
                System.out.println("Response: " + response.toString());
            }
            
            conn.disconnect();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### HttpURLConnection - POST Request

```java
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class HttpPostExample {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://httpbin.org/post");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            
            // Set request method
            conn.setRequestMethod("POST");
            
            // Set request headers
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Accept", "application/json");
            
            // Enable output
            conn.setDoOutput(true);
            
            // Write request body
            String jsonData = "{\"name\":\"John\",\"age\":30}";
            try (OutputStream os = conn.getOutputStream()) {
                byte[] input = jsonData.getBytes("utf-8");
                os.write(input, 0, input.length);
            }
            
            // Get response
            int responseCode = conn.getResponseCode();
            System.out.println("Response Code: " + responseCode);
            
            if (responseCode == 200) {
                BufferedReader in = new BufferedReader(
                    new InputStreamReader(conn.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();
                
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();
                
                System.out.println("Response: " + response.toString());
            }
            
            conn.disconnect();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

## 11.5 Java HTTP Client (Java 11+)

Modern, more flexible HTTP client with support for HTTP/2.

### GET Request

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpClientGetExample {
    public static void main(String[] args) {
        try {
            // Create HTTP client
            HttpClient client = HttpClient.newHttpClient();
            
            // Build request
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.github.com/users/octocat"))
                .header("Accept", "application/json")
                .GET()
                .build();
            
            // Send request (synchronous)
            HttpResponse<String> response = client.send(
                request,
                HttpResponse.BodyHandlers.ofString()
            );
            
            // Print response
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response Body: " + response.body());
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### POST Request

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpClientPostExample {
    public static void main(String[] args) {
        try {
            HttpClient client = HttpClient.newHttpClient();
            
            String jsonData = "{\"name\":\"John\",\"age\":30}";
            
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://httpbin.org/post"))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(jsonData))
                .build();
            
            HttpResponse<String> response = client.send(
                request,
                HttpResponse.BodyHandlers.ofString()
            );
            
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response: " + response.body());
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### Async Request

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.concurrent.CompletableFuture;

public class HttpClientAsyncExample {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.github.com/users/octocat"))
            .GET()
            .build();
        
        // Send async request
        CompletableFuture<HttpResponse<String>> future = client.sendAsync(
            request,
            HttpResponse.BodyHandlers.ofString()
        );
        
        // Process response asynchronously
        future.thenApply(HttpResponse::body)
              .thenAccept(body -> System.out.println("Response: " + body))
              .join();  // Wait for completion
        
        System.out.println("Request sent asynchronously");
    }
}
```

### HttpClient Builder Options

```java
import java.net.http.HttpClient;
import java.time.Duration;

public class HttpClientBuilderExample {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newBuilder()
            .version(HttpClient.Version.HTTP_2)  // HTTP/2
            .connectTimeout(Duration.ofSeconds(10))
            .followRedirects(HttpClient.Redirect.ALWAYS)
            .build();
        
        // Use client for requests...
    }
}
```

### Comparison

| Feature | HttpURLConnection | HttpClient (Java 11+) |
|---------|-------------------|----------------------|
| **Version** | Java 1.1+ | Java 11+ |
| **HTTP/2** | No | Yes |
| **Async Support** | No | Yes |
| **API Style** | Older, verbose | Modern, fluent |
| **Ease of Use** | Complex | Simple |
| **Recommended** | Legacy code | New projects |

---

## 11.6 Summary

Java networking basics:

### InetAddress
- Represents IP addresses
- Get local/remote host information
- Check reachability

### Socket Programming
- **TCP**: Reliable, connection-oriented (Socket, ServerSocket)
- **UDP**: Fast, connectionless (DatagramSocket, DatagramPacket)
- TCP for reliability, UDP for speed

### URL & HttpURLConnection
- Parse URLs
- Make HTTP requests (GET, POST)
- Read responses
- Older API, more verbose

### Java HTTP Client (Java 11+)
- Modern, fluent API
- HTTP/2 support
- Synchronous and asynchronous
- Preferred for new projects

### Key Classes
- `InetAddress`: IP addresses
- `Socket/ServerSocket`: TCP
- `DatagramSocket/DatagramPacket`: UDP
- `URL/HttpURLConnection`: HTTP (old)
- `HttpClient/HttpRequest/HttpResponse`: HTTP (new)

Java networking enables building client-server applications, REST API clients, and network-based communication systems.

---

# 12. Java Memory and Performance (Basics)

Understanding JVM memory management and performance optimization fundamentals.

## 12.1 JVM Architecture

The Java Virtual Machine consists of several key components:

```
┌─────────────────────────────────────────────────────┐
│                   JVM Architecture                   │
├─────────────────────────────────────────────────────┤
│  ┌───────────────┐  ┌──────────────────────────┐   │
│  │ Class Loader  │  │   Execution Engine       │   │
│  │  Subsystem    │  │  - Interpreter           │   │
│  └───────────────┘  │  - JIT Compiler          │   │
│                     │  - Garbage Collector     │   │
│  ┌──────────────────────────────────────────┐  │   │
│  │         Runtime Data Areas               │  │   │
│  │                                          │  │   │
│  │  ┌──────────┐  ┌──────────────────────┐ │  │   │
│  │  │  Method  │  │       Heap           │ │  │   │
│  │  │   Area   │  │  (Objects, Arrays)   │ │  │   │
│  │  └──────────┘  └──────────────────────┘ │  │   │
│  │                                          │  │   │
│  │  ┌──────────┐  ┌──────────┐  ┌───────┐ │  │   │
│  │  │   Stack  │  │    PC    │  │Native │ │  │   │
│  │  │ (Thread) │  │ Register │  │Method │ │  │   │
│  │  └──────────┘  └──────────┘  └───────┘ │  │   │
│  └──────────────────────────────────────────┘  │   │
└─────────────────────────────────────────────────────┘
```

### 1. Class Loader Subsystem

Loads, links, and initializes class files.

**Three phases:**
- **Loading**: Read `.class` files
- **Linking**: Verify, prepare, resolve
- **Initialization**: Execute static initializers

**Example:**
```java
public class ClassLoaderExample {
    public static void main(String[] args) {
        // Get class loader
        ClassLoader classLoader = ClassLoaderExample.class.getClassLoader();
        System.out.println("Class Loader: " + classLoader);
        
        // Bootstrap (null), Extension, Application
        System.out.println("Parent: " + classLoader.getParent());
        System.out.println("Parent's Parent: " + classLoader.getParent().getParent());
    }
}
```

### 2. Runtime Data Areas

#### Heap (Shared)
- **Purpose**: Store objects and arrays
- **Shared**: Among all threads
- **GC**: Garbage collected
- **Size**: `-Xms` (initial), `-Xmx` (maximum)

```java
// Objects stored in heap
String str = new String("Hello");  // Object in heap
int[] arr = new int[10];           // Array in heap
```

#### Stack (Thread-specific)
- **Purpose**: Store method calls, local variables, references
- **Private**: Each thread has own stack
- **LIFO**: Last-In-First-Out
- **Size**: `-Xss`

```java
public void method() {
    int x = 10;           // Stored in stack
    String ref = "test";  // Reference in stack, object in heap
}
```

#### Method Area (Shared)
- **Purpose**: Store class metadata, static variables, constants
- **Shared**: Among all threads
- **Also called**: Metaspace (Java 8+), PermGen (before Java 8)

```java
public class Example {
    static int count = 0;  // Stored in method area
    final static String CONSTANT = "Value";  // Stored in method area
}
```

#### PC Register (Thread-specific)
- **Purpose**: Store address of current instruction
- **Private**: Each thread has own PC register

#### Native Method Stack (Thread-specific)
- **Purpose**: Store native method information
- **Private**: Each thread has own native stack

### Memory Allocation Example

```java
public class MemoryExample {
    static int staticVar = 100;  // Method Area
    
    public static void main(String[] args) {
        int localVar = 10;       // Stack
        String str = new String("Hello");  // Reference in Stack, Object in Heap
        
        MemoryExample obj = new MemoryExample();  // Reference in Stack, Object in Heap
        obj.instanceMethod();
    }
    
    public void instanceMethod() {
        int x = 20;  // Stack (new frame)
    }
}
```

### Stack vs Heap

| Feature | Stack | Heap |
|---------|-------|------|
| **Purpose** | Method calls, local variables | Objects, arrays |
| **Scope** | Thread-specific | Shared |
| **Size** | Smaller (MB) | Larger (GB) |
| **Speed** | Faster | Slower |
| **Lifecycle** | Automatic (method exit) | GC managed |
| **Error** | StackOverflowError | OutOfMemoryError |

---

## 12.2 Garbage Collection

Automatic memory management to reclaim unused objects.

### How GC Works

1. **Mark**: Identify live objects (reachable from roots)
2. **Sweep**: Remove dead objects
3. **Compact**: Defragment memory (optional)

### GC Roots

Starting points for identifying live objects:
- Local variables in active methods
- Active threads
- Static variables
- JNI references

### Heap Generations

```
┌────────────────────────────────────────────────┐
│                   Heap Memory                   │
├────────────────────────────────────────────────┤
│  Young Generation          │  Old Generation   │
│  ┌──────┬────────────────┐ │  (Tenured)       │
│  │ Eden │ Survivor 0 & 1 │ │                  │
│  └──────┴────────────────┘ │                  │
│  (Minor GC)                │  (Major GC)       │
└────────────────────────────────────────────────┘
```

**Young Generation:**
- **Eden**: New objects created here
- **Survivor spaces (S0, S1)**: Objects that survive one GC
- **Minor GC**: Fast, frequent collection

**Old Generation:**
- Long-lived objects promoted from Young
- **Major GC (Full GC)**: Slower, less frequent

### Making Object Eligible for GC

```java
public class GCExample {
    public static void main(String[] args) {
        // Method 1: Nullifying reference
        String str = new String("Hello");
        str = null;  // Eligible for GC
        
        // Method 2: Reassigning reference
        String str2 = new String("World");
        str2 = new String("Java");  // "World" eligible for GC
        
        // Method 3: Anonymous object
        new String("Anonymous");  // Immediately eligible for GC
        
        // Method 4: Object created in method
        createObject();  // Object eligible after method exits
        
        // Request GC (no guarantee)
        System.gc();  // or Runtime.getRuntime().gc();
    }
    
    static void createObject() {
        String temp = new String("Temp");
        // temp eligible for GC when method exits
    }
}
```

### finalize() Method

Called by GC before object destruction (deprecated in Java 9+).

```java
public class FinalizeExample {
    @Override
    protected void finalize() throws Throwable {
        System.out.println("Object is being garbage collected");
        super.finalize();
    }
    
    public static void main(String[] args) {
        FinalizeExample obj = new FinalizeExample();
        obj = null;
        System.gc();  // Request GC
        
        // May or may not see finalize message
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

### GC Types

**1. Serial GC** (`-XX:+UseSerialGC`)
- Single-threaded
- For small applications

**2. Parallel GC** (`-XX:+UseParallelGC`)
- Multi-threaded
- For throughput

**3. CMS (Concurrent Mark Sweep)** (`-XX:+UseConcMarkSweepGC`)
- Low pause time
- Deprecated in Java 9+

**4. G1 GC** (`-XX:+UseG1GC`)
- Default in Java 9+
- Balanced performance

**5. ZGC** (`-XX:+UseZGC`)
- Ultra-low pause time
- Java 11+

### GC Monitoring

```java
public class GCMonitoring {
    public static void main(String[] args) {
        // Get memory information
        Runtime runtime = Runtime.getRuntime();
        
        System.out.println("Total Memory: " + runtime.totalMemory() / (1024 * 1024) + " MB");
        System.out.println("Free Memory: " + runtime.freeMemory() / (1024 * 1024) + " MB");
        System.out.println("Max Memory: " + runtime.maxMemory() / (1024 * 1024) + " MB");
        System.out.println("Used Memory: " + 
            (runtime.totalMemory() - runtime.freeMemory()) / (1024 * 1024) + " MB");
    }
}
```

---

## 12.3 Memory Leaks

Memory leak occurs when objects are no longer needed but not garbage collected.

### Common Causes

#### 1. Static References

```java
public class StaticLeakExample {
    // Bad: Static collection keeps growing
    private static List<Object> list = new ArrayList<>();
    
    public void addObject(Object obj) {
        list.add(obj);  // Never removed, memory leak
    }
}
```

**Fix:** Clear when done
```java
public void clear() {
    list.clear();
}
```

#### 2. Unclosed Resources

```java
// Bad: Resource not closed
public void readFile() {
    FileInputStream fis = new FileInputStream("file.txt");
    // If exception occurs, stream never closed
}

// Good: Use try-with-resources
public void readFile() {
    try (FileInputStream fis = new FileInputStream("file.txt")) {
        // Use stream
    }  // Automatically closed
}
```

#### 3. Inner Class References

```java
public class OuterClass {
    private byte[] data = new byte[1000000];
    
    // Non-static inner class holds reference to outer
    public class InnerClass {
        // Holds implicit reference to OuterClass
    }
    
    public InnerClass getInner() {
        return new InnerClass();  // Outer can't be GC'd while inner exists
    }
}

// Fix: Use static inner class if outer reference not needed
public static class InnerClass {
    // No implicit reference to outer
}
```

#### 4. HashMap with No equals()/hashCode()

```java
public class KeyClass {
    private int id;
    
    // Missing equals() and hashCode()
    // Objects can't be found in map, causing leak
}

Map<KeyClass, String> map = new HashMap<>();
map.put(new KeyClass(), "value");
map.remove(new KeyClass());  // Won't remove, different object!
```

**Fix:** Implement equals() and hashCode()
```java
@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    KeyClass that = (KeyClass) o;
    return id == that.id;
}

@Override
public int hashCode() {
    return Objects.hash(id);
}
```

#### 5. Listeners and Callbacks

```java
public class EventSource {
    private List<EventListener> listeners = new ArrayList<>();
    
    public void addListener(EventListener listener) {
        listeners.add(listener);  // Listener never removed
    }
    
    // Fix: Add remove method
    public void removeListener(EventListener listener) {
        listeners.remove(listener);
    }
}
```

#### 6. ThreadLocal Variables

```java
public class ThreadLocalLeak {
    private static ThreadLocal<List<Object>> threadLocal = new ThreadLocal<>();
    
    public void addData(Object obj) {
        List<Object> list = threadLocal.get();
        if (list == null) {
            list = new ArrayList<>();
            threadLocal.set(list);
        }
        list.add(obj);  // List keeps growing
    }
    
    // Fix: Remove when done
    public void cleanup() {
        threadLocal.remove();
    }
}
```

### Detecting Memory Leaks

```java
public class MemoryLeakDetection {
    public static void main(String[] args) {
        // Monitor memory before
        printMemoryUsage("Before");
        
        // Create objects
        List<byte[]> list = new ArrayList<>();
        for (int i = 0; i < 1000; i++) {
            list.add(new byte[1000000]);  // 1 MB each
        }
        
        // Monitor memory after
        printMemoryUsage("After");
        
        // Clear references
        list.clear();
        System.gc();
        
        // Monitor memory after cleanup
        printMemoryUsage("After cleanup");
    }
    
    static void printMemoryUsage(String label) {
        Runtime runtime = Runtime.getRuntime();
        long used = runtime.totalMemory() - runtime.freeMemory();
        System.out.println(label + " - Used Memory: " + used / (1024 * 1024) + " MB");
    }
}
```

---

## 12.4 Profiling and Optimization

### Basic JVM Options

```bash
# Memory settings
java -Xms512m -Xmx2g MyApp          # Initial and max heap
java -Xss1m MyApp                   # Stack size

# GC options
java -XX:+UseG1GC MyApp             # Use G1 GC
java -XX:+PrintGCDetails MyApp      # Print GC details

# Performance monitoring
java -verbose:gc MyApp               # GC verbose output
java -XX:+HeapDumpOnOutOfMemoryError MyApp  # Dump on OOM
```

### Common Performance Tips

#### 1. Use Appropriate Data Structures

```java
// Bad: ArrayList for frequent insertion/deletion
List<String> list = new ArrayList<>();
for (int i = 0; i < 10000; i++) {
    list.add(0, "Item");  // O(n) - slow
}

// Good: LinkedList for frequent insertion/deletion
List<String> list = new LinkedList<>();
for (int i = 0; i < 10000; i++) {
    list.add(0, "Item");  // O(1) - fast
}

// Bad: Regular loop for simple operations
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
for (int i = 0; i < names.size(); i++) {
    System.out.println(names.get(i));
}

// Good: Enhanced for loop or forEach
names.forEach(System.out::println);
```

#### 2. Avoid Unnecessary Object Creation

```java
// Bad: Creating many String objects
String result = "";
for (int i = 0; i < 1000; i++) {
    result += i;  // Creates 1000 String objects
}

// Good: Use StringBuilder
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i);
}
String result = sb.toString();
```

#### 3. Use Primitive Types When Possible

```java
// Bad: Unnecessary autoboxing
Integer sum = 0;
for (int i = 0; i < 1000; i++) {
    sum += i;  // Autoboxing overhead
}

// Good: Use primitive
int sum = 0;
for (int i = 0; i < 1000; i++) {
    sum += i;
}
```

#### 4. Close Resources Properly

```java
// Always use try-with-resources
try (FileInputStream fis = new FileInputStream("file.txt");
     BufferedInputStream bis = new BufferedInputStream(fis)) {
    // Use resources
}  // Automatically closed
```

#### 5. Use Connection Pooling

```java
// Bad: Create new connection each time
Connection conn = DriverManager.getConnection(url, user, password);
// Use connection
conn.close();

// Good: Use connection pool
HikariDataSource dataSource = new HikariDataSource(config);
Connection conn = dataSource.getConnection();
// Use connection
conn.close();  // Returns to pool
```

#### 6. Lazy Initialization

```java
public class LazyExample {
    private ExpensiveObject obj;
    
    // Create only when needed
    public ExpensiveObject getObject() {
        if (obj == null) {
            obj = new ExpensiveObject();
        }
        return obj;
    }
}
```

#### 7. Use Caching

```java
// Cache frequently used objects
private static final Map<String, User> userCache = new HashMap<>();

public User getUser(String id) {
    return userCache.computeIfAbsent(id, this::loadUserFromDatabase);
}
```

#### 8. Avoid Finalizers

```java
// Bad: Using finalize
@Override
protected void finalize() throws Throwable {
    cleanup();
    super.finalize();
}

// Good: Implement AutoCloseable
public class MyResource implements AutoCloseable {
    @Override
    public void close() {
        cleanup();
    }
}

try (MyResource resource = new MyResource()) {
    // Use resource
}  // Automatically cleaned up
```

### Performance Monitoring Tools

**Command-line tools:**
- `jps`: List Java processes
- `jstat`: JVM statistics
- `jmap`: Heap dump
- `jstack`: Thread dump
- `jconsole`: GUI monitoring
- `jvisualvm`: Visual monitoring

**Example:**
```bash
# List Java processes
jps

# Monitor GC
jstat -gc <pid> 1000  # Every 1 second

# Heap dump
jmap -dump:file=heap.bin <pid>

# Thread dump
jstack <pid>
```

### Quick Performance Checklist

✅ Use appropriate data structures
✅ Avoid unnecessary object creation
✅ Use primitive types when possible
✅ Close resources properly
✅ Use connection/thread pooling
✅ Implement lazy initialization
✅ Cache frequently used data
✅ Use StringBuilder for concatenation
✅ Avoid finalize(), use AutoCloseable
✅ Profile before optimizing

---

## 12.5 Summary

Java memory and performance fundamentals:

### JVM Architecture
- **Class Loader**: Loads, links, initializes classes
- **Heap**: Stores objects (shared, GC-managed)
- **Stack**: Stores method calls, local variables (thread-specific)
- **Method Area**: Stores class metadata, static variables
- **PC Register & Native Stack**: Thread-specific

### Garbage Collection
- **Automatic** memory management
- **Generations**: Young (Eden, Survivor), Old
- **Types**: Serial, Parallel, G1, ZGC
- **Eligible**: Null references, reassigned, anonymous objects
- Request with `System.gc()` (no guarantee)

### Memory Leaks
- **Static references** not cleared
- **Unclosed resources** (files, connections)
- **Inner classes** holding outer references
- **HashMap keys** without equals/hashCode
- **Listeners** not removed
- **ThreadLocal** not cleaned up

### Optimization
- Use appropriate data structures
- Avoid unnecessary object creation
- Use primitives over wrappers
- Close resources (try-with-resources)
- Use pooling (connections, threads)
- Implement caching
- Profile before optimizing

### Tools
- JVM options: `-Xms`, `-Xmx`, `-Xss`
- Monitoring: `jps`, `jstat`, `jmap`, `jstack`, `jvisualvm`

Understanding memory management and following optimization best practices leads to efficient, high-performance Java applications.

---

# 13. Java Security (Basics)

Java provides comprehensive security features through the `java.security` and `javax.crypto` packages.

## 13.1 Encryption and Decryption

Encryption converts plaintext to ciphertext; decryption reverses it.

### Symmetric Encryption (AES)

Same key for encryption and decryption.

```java
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

public class AESEncryptionExample {
    public static void main(String[] args) throws Exception {
        String plaintext = "Hello, World!";
        
        // Generate AES key
        KeyGenerator keyGen = KeyGenerator.getInstance("AES");
        keyGen.init(128);  // 128, 192, or 256 bits
        SecretKey secretKey = keyGen.generateKey();
        
        // Encrypt
        String encrypted = encrypt(plaintext, secretKey);
        System.out.println("Encrypted: " + encrypted);
        
        // Decrypt
        String decrypted = decrypt(encrypted, secretKey);
        System.out.println("Decrypted: " + decrypted);
    }
    
    public static String encrypt(String plaintext, SecretKey key) throws Exception {
        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.ENCRYPT_MODE, key);
        byte[] encrypted = cipher.doFinal(plaintext.getBytes());
        return Base64.getEncoder().encodeToString(encrypted);
    }
    
    public static String decrypt(String encrypted, SecretKey key) throws Exception {
        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.DECRYPT_MODE, key);
        byte[] decrypted = cipher.doFinal(Base64.getDecoder().decode(encrypted));
        return new String(decrypted);
    }
}
```

### Asymmetric Encryption (RSA)

Different keys for encryption (public key) and decryption (private key).

```java
import java.security.*;
import javax.crypto.Cipher;
import java.util.Base64;

public class RSAEncryptionExample {
    public static void main(String[] args) throws Exception {
        String plaintext = "Hello, RSA!";
        
        // Generate key pair
        KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");
        keyGen.initialize(2048);
        KeyPair keyPair = keyGen.generateKeyPair();
        
        PublicKey publicKey = keyPair.getPublic();
        PrivateKey privateKey = keyPair.getPrivate();
        
        // Encrypt with public key
        String encrypted = encrypt(plaintext, publicKey);
        System.out.println("Encrypted: " + encrypted);
        
        // Decrypt with private key
        String decrypted = decrypt(encrypted, privateKey);
        System.out.println("Decrypted: " + decrypted);
    }
    
    public static String encrypt(String plaintext, PublicKey publicKey) throws Exception {
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.ENCRYPT_MODE, publicKey);
        byte[] encrypted = cipher.doFinal(plaintext.getBytes());
        return Base64.getEncoder().encodeToString(encrypted);
    }
    
    public static String decrypt(String encrypted, PrivateKey privateKey) throws Exception {
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.DECRYPT_MODE, privateKey);
        byte[] decrypted = cipher.doFinal(Base64.getDecoder().decode(encrypted));
        return new String(decrypted);
    }
}
```

### Symmetric vs Asymmetric

| Feature | Symmetric (AES) | Asymmetric (RSA) |
|---------|----------------|------------------|
| **Keys** | Same key | Public/Private pair |
| **Speed** | Fast | Slower |
| **Use Case** | Data encryption | Key exchange, digital signatures |
| **Key Size** | 128, 192, 256 bits | 2048, 4096 bits |
| **Examples** | AES, DES, 3DES | RSA, DSA, ECC |

---

## 13.2 Hashing

One-way function that converts data to fixed-size hash. Cannot be reversed.

### MessageDigest (SHA-256)

```java
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class HashingExample {
    public static void main(String[] args) throws NoSuchAlgorithmException {
        String input = "password123";
        
        // SHA-256
        String sha256Hash = hash(input, "SHA-256");
        System.out.println("SHA-256: " + sha256Hash);
        
        // SHA-512
        String sha512Hash = hash(input, "SHA-512");
        System.out.println("SHA-512: " + sha512Hash);
        
        // MD5 (not recommended for security)
        String md5Hash = hash(input, "MD5");
        System.out.println("MD5: " + md5Hash);
        
        // Verify password
        boolean isValid = verifyHash(input, sha256Hash, "SHA-256");
        System.out.println("Password valid: " + isValid);
    }
    
    public static String hash(String input, String algorithm) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance(algorithm);
        byte[] hashBytes = md.digest(input.getBytes());
        
        // Convert to hex string
        StringBuilder hexString = new StringBuilder();
        for (byte b : hashBytes) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) hexString.append('0');
            hexString.append(hex);
        }
        return hexString.toString();
    }
    
    public static boolean verifyHash(String input, String hash, String algorithm) 
            throws NoSuchAlgorithmException {
        String inputHash = hash(input, algorithm);
        return inputHash.equals(hash);
    }
}
```

### Hashing with Salt

Add random data (salt) to prevent rainbow table attacks.

```java
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.Base64;

public class SaltedHashExample {
    public static void main(String[] args) throws Exception {
        String password = "myPassword123";
        
        // Generate salt
        byte[] salt = generateSalt();
        System.out.println("Salt: " + Base64.getEncoder().encodeToString(salt));
        
        // Hash password with salt
        String hashedPassword = hashWithSalt(password, salt);
        System.out.println("Hashed: " + hashedPassword);
        
        // Verify password
        boolean isValid = verifyPassword(password, hashedPassword, salt);
        System.out.println("Password valid: " + isValid);
    }
    
    public static byte[] generateSalt() {
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        return salt;
    }
    
    public static String hashWithSalt(String password, byte[] salt) throws Exception {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        md.update(salt);
        byte[] hashedPassword = md.digest(password.getBytes());
        
        StringBuilder hexString = new StringBuilder();
        for (byte b : hashedPassword) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) hexString.append('0');
            hexString.append(hex);
        }
        return hexString.toString();
    }
    
    public static boolean verifyPassword(String password, String storedHash, byte[] salt) 
            throws Exception {
        String hashToVerify = hashWithSalt(password, salt);
        return hashToVerify.equals(storedHash);
    }
}
```

### Hash Algorithms

| Algorithm | Bits | Security | Use Case |
|-----------|------|----------|----------|
| **MD5** | 128 | ❌ Broken | Legacy only (not secure) |
| **SHA-1** | 160 | ⚠️ Weak | Legacy (deprecated) |
| **SHA-256** | 256 | ✅ Strong | Recommended |
| **SHA-512** | 512 | ✅ Strong | High security |
| **PBKDF2** | Variable | ✅ Strong | Password hashing |
| **bcrypt** | Variable | ✅ Strong | Password hashing |

---

## 13.3 SecureRandom

Cryptographically strong random number generator.

### Basic Usage

```java
import java.security.SecureRandom;
import java.util.Base64;

public class SecureRandomExample {
    public static void main(String[] args) {
        SecureRandom secureRandom = new SecureRandom();
        
        // Generate random int
        int randomInt = secureRandom.nextInt();
        System.out.println("Random int: " + randomInt);
        
        // Generate random int in range [0, 100)
        int randomInRange = secureRandom.nextInt(100);
        System.out.println("Random in range: " + randomInRange);
        
        // Generate random long
        long randomLong = secureRandom.nextLong();
        System.out.println("Random long: " + randomLong);
        
        // Generate random double [0.0, 1.0)
        double randomDouble = secureRandom.nextDouble();
        System.out.println("Random double: " + randomDouble);
        
        // Generate random boolean
        boolean randomBoolean = secureRandom.nextBoolean();
        System.out.println("Random boolean: " + randomBoolean);
        
        // Generate random bytes
        byte[] randomBytes = new byte[16];
        secureRandom.nextBytes(randomBytes);
        System.out.println("Random bytes: " + Base64.getEncoder().encodeToString(randomBytes));
    }
}
```

### Generate Random Token

```java
import java.security.SecureRandom;
import java.util.Base64;

public class TokenGenerator {
    private static final SecureRandom secureRandom = new SecureRandom();
    
    public static String generateToken(int length) {
        byte[] randomBytes = new byte[length];
        secureRandom.nextBytes(randomBytes);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(randomBytes);
    }
    
    public static void main(String[] args) {
        // Generate API token
        String token = generateToken(32);
        System.out.println("API Token: " + token);
        
        // Generate session ID
        String sessionId = generateToken(16);
        System.out.println("Session ID: " + sessionId);
    }
}
```

### Random Password Generator

```java
import java.security.SecureRandom;

public class PasswordGenerator {
    private static final String UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    private static final String DIGITS = "0123456789";
    private static final String SPECIAL = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    private static final String ALL_CHARS = UPPERCASE + LOWERCASE + DIGITS + SPECIAL;
    
    public static String generatePassword(int length) {
        SecureRandom random = new SecureRandom();
        StringBuilder password = new StringBuilder(length);
        
        // Ensure at least one of each type
        password.append(UPPERCASE.charAt(random.nextInt(UPPERCASE.length())));
        password.append(LOWERCASE.charAt(random.nextInt(LOWERCASE.length())));
        password.append(DIGITS.charAt(random.nextInt(DIGITS.length())));
        password.append(SPECIAL.charAt(random.nextInt(SPECIAL.length())));
        
        // Fill rest randomly
        for (int i = 4; i < length; i++) {
            password.append(ALL_CHARS.charAt(random.nextInt(ALL_CHARS.length())));
        }
        
        // Shuffle
        return shuffleString(password.toString(), random);
    }
    
    private static String shuffleString(String input, SecureRandom random) {
        char[] chars = input.toCharArray();
        for (int i = chars.length - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);
            char temp = chars[i];
            chars[i] = chars[j];
            chars[j] = temp;
        }
        return new String(chars);
    }
    
    public static void main(String[] args) {
        String password = generatePassword(16);
        System.out.println("Generated Password: " + password);
    }
}
```

### SecureRandom vs Random

| Feature | Random | SecureRandom |
|---------|--------|--------------|
| **Security** | Not cryptographically secure | Cryptographically secure |
| **Predictability** | Predictable | Unpredictable |
| **Use Case** | Games, simulations | Passwords, keys, tokens |
| **Performance** | Faster | Slower |

---

## 13.4 Digital Signatures

Verify authenticity and integrity of data using asymmetric cryptography.

### Creating and Verifying Signature

```java
import java.security.*;
import java.util.Base64;

public class DigitalSignatureExample {
    public static void main(String[] args) throws Exception {
        String message = "Important message";
        
        // Generate key pair
        KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");
        keyGen.initialize(2048);
        KeyPair keyPair = keyGen.generateKeyPair();
        
        // Sign message with private key
        String signature = signData(message, keyPair.getPrivate());
        System.out.println("Signature: " + signature);
        
        // Verify signature with public key
        boolean isValid = verifySignature(message, signature, keyPair.getPublic());
        System.out.println("Signature valid: " + isValid);
        
        // Tamper with message
        String tamperedMessage = message + " (modified)";
        boolean isValidTampered = verifySignature(tamperedMessage, signature, keyPair.getPublic());
        System.out.println("Tampered signature valid: " + isValidTampered);
    }
    
    public static String signData(String data, PrivateKey privateKey) throws Exception {
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initSign(privateKey);
        signature.update(data.getBytes());
        byte[] signedData = signature.sign();
        return Base64.getEncoder().encodeToString(signedData);
    }
    
    public static boolean verifySignature(String data, String signatureStr, PublicKey publicKey) 
            throws Exception {
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initVerify(publicKey);
        signature.update(data.getBytes());
        byte[] signatureBytes = Base64.getDecoder().decode(signatureStr);
        return signature.verify(signatureBytes);
    }
}
```

### Digital Signature with DSA

```java
import java.security.*;
import java.util.Base64;

public class DSASignatureExample {
    public static void main(String[] args) throws Exception {
        String message = "Sign this message";
        
        // Generate DSA key pair
        KeyPairGenerator keyGen = KeyPairGenerator.getInstance("DSA");
        keyGen.initialize(2048);
        KeyPair keyPair = keyGen.generateKeyPair();
        
        // Create signature
        Signature signature = Signature.getInstance("SHA256withDSA");
        signature.initSign(keyPair.getPrivate());
        signature.update(message.getBytes());
        byte[] signatureBytes = signature.sign();
        
        String signatureStr = Base64.getEncoder().encodeToString(signatureBytes);
        System.out.println("DSA Signature: " + signatureStr);
        
        // Verify signature
        Signature verifySignature = Signature.getInstance("SHA256withDSA");
        verifySignature.initVerify(keyPair.getPublic());
        verifySignature.update(message.getBytes());
        boolean isValid = verifySignature.verify(signatureBytes);
        
        System.out.println("Signature valid: " + isValid);
    }
}
```

### How Digital Signatures Work

```
Signing Process:
1. Hash the message (SHA-256)
2. Encrypt hash with private key
3. Result is the digital signature

Verification Process:
1. Hash the message (SHA-256)
2. Decrypt signature with public key
3. Compare hashes
4. If match → signature valid
```

### Signature Algorithms

| Algorithm | Security | Use Case |
|-----------|----------|----------|
| **SHA1withRSA** | ⚠️ Weak | Legacy (deprecated) |
| **SHA256withRSA** | ✅ Strong | General use |
| **SHA512withRSA** | ✅ Strong | High security |
| **SHA256withDSA** | ✅ Strong | Digital signatures |
| **SHA256withECDSA** | ✅ Strong | Efficient signatures |

---

## 13.5 Password Security Best Practices

### Storing Passwords Securely

```java
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.SecureRandom;
import java.security.spec.KeySpec;
import java.util.Base64;

public class PasswordSecurity {
    private static final int ITERATIONS = 65536;
    private static final int KEY_LENGTH = 256;
    
    public static String hashPassword(String password) throws Exception {
        // Generate salt
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        
        // Hash password
        byte[] hash = hashPassword(password, salt);
        
        // Store salt + hash
        byte[] combined = new byte[salt.length + hash.length];
        System.arraycopy(salt, 0, combined, 0, salt.length);
        System.arraycopy(hash, 0, combined, salt.length, hash.length);
        
        return Base64.getEncoder().encodeToString(combined);
    }
    
    public static boolean verifyPassword(String password, String storedHash) throws Exception {
        byte[] combined = Base64.getDecoder().decode(storedHash);
        
        // Extract salt
        byte[] salt = new byte[16];
        System.arraycopy(combined, 0, salt, 0, salt.length);
        
        // Extract hash
        byte[] storedPasswordHash = new byte[combined.length - salt.length];
        System.arraycopy(combined, salt.length, storedPasswordHash, 0, storedPasswordHash.length);
        
        // Hash input password with same salt
        byte[] inputPasswordHash = hashPassword(password, salt);
        
        // Compare hashes
        return MessageDigest.isEqual(storedPasswordHash, inputPasswordHash);
    }
    
    private static byte[] hashPassword(String password, byte[] salt) throws Exception {
        KeySpec spec = new PBEKeySpec(password.toCharArray(), salt, ITERATIONS, KEY_LENGTH);
        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
        return factory.generateSecret(spec).getEncoded();
    }
    
    public static void main(String[] args) throws Exception {
        String password = "mySecurePassword123!";
        
        // Hash password
        String hashedPassword = hashPassword(password);
        System.out.println("Hashed: " + hashedPassword);
        
        // Verify correct password
        boolean isValid = verifyPassword(password, hashedPassword);
        System.out.println("Password valid: " + isValid);
        
        // Verify wrong password
        boolean isInvalid = verifyPassword("wrongPassword", hashedPassword);
        System.out.println("Wrong password valid: " + isInvalid);
    }
}
```

---

## 13.6 Security Best Practices

### 1. Never Store Passwords in Plain Text

```java
// ❌ BAD
String password = "password123";
saveToDatabase(password);

// ✅ GOOD
String hashedPassword = hashWithSalt(password, salt);
saveToDatabase(hashedPassword);
```

### 2. Use Strong Algorithms

```java
// ❌ BAD
MessageDigest.getInstance("MD5");
MessageDigest.getInstance("SHA-1");

// ✅ GOOD
MessageDigest.getInstance("SHA-256");
MessageDigest.getInstance("SHA-512");
```

### 3. Use SecureRandom for Security

```java
// ❌ BAD
Random random = new Random();
byte[] token = new byte[16];
random.nextBytes(token);

// ✅ GOOD
SecureRandom secureRandom = new SecureRandom();
byte[] token = new byte[16];
secureRandom.nextBytes(token);
```

### 4. Use Salt for Password Hashing

```java
// ❌ BAD
String hash = hash(password);  // No salt

// ✅ GOOD
byte[] salt = generateSalt();
String hash = hashWithSalt(password, salt);
```

### 5. Use HTTPS for Transmission

```java
// ❌ BAD
URL url = new URL("http://api.example.com");

// ✅ GOOD
URL url = new URL("https://api.example.com");
```

### 6. Validate Input

```java
public boolean validatePassword(String password) {
    // Check length
    if (password.length() < 8) return false;
    
    // Check for uppercase, lowercase, digit, special char
    boolean hasUpper = password.matches(".*[A-Z].*");
    boolean hasLower = password.matches(".*[a-z].*");
    boolean hasDigit = password.matches(".*\\d.*");
    boolean hasSpecial = password.matches(".*[!@#$%^&*].*");
    
    return hasUpper && hasLower && hasDigit && hasSpecial;
}
```

### 7. Use Proper Key Management

```java
// ❌ BAD
String secretKey = "hardcodedKey123";

// ✅ GOOD
// Store keys in secure location (environment variables, key vault)
String secretKey = System.getenv("SECRET_KEY");
```

### 8. Clear Sensitive Data

```java
// Clear password from memory after use
char[] password = getPassword();
try {
    // Use password
    authenticate(password);
} finally {
    // Clear array
    Arrays.fill(password, ' ');
}
```

---

## 13.7 Summary

Java security basics:

### Encryption
- **Symmetric (AES)**: Same key for encrypt/decrypt, fast
- **Asymmetric (RSA)**: Public/private key pair, slower
- Use for: Data protection, secure communication

### Hashing
- **One-way function**: Cannot be reversed
- **Algorithms**: SHA-256 (recommended), SHA-512, avoid MD5/SHA-1
- **Salt**: Add random data to prevent rainbow attacks
- Use for: Password storage, data integrity

### SecureRandom
- **Cryptographically strong** random numbers
- Use for: Tokens, salts, keys, passwords
- Never use `Random` for security

### Digital Signatures
- **Verify authenticity** and integrity
- Sign with private key, verify with public key
- Algorithms: SHA256withRSA, SHA256withDSA
- Use for: Document signing, code signing, API authentication

### Best Practices
1. Never store plain text passwords
2. Use strong algorithms (SHA-256+)
3. Use SecureRandom for random data
4. Always use salt with password hashing
5. Use HTTPS for transmission
6. Validate all input
7. Proper key management
8. Clear sensitive data after use

Security is critical for protecting data and maintaining trust in applications.

---

# 14. Advanced Topics

Advanced Java features for professional development.

## 14.1 Reflection API

Reflection allows examining and modifying classes, methods, and fields at runtime.

### Basic Reflection

```java
import java.lang.reflect.*;

public class ReflectionBasics {
    public static void main(String[] args) throws Exception {
        // Get Class object
        Class<?> clazz = String.class;
        
        // Get class name
        System.out.println("Class name: " + clazz.getName());
        System.out.println("Simple name: " + clazz.getSimpleName());
        System.out.println("Package: " + clazz.getPackageName());
        
        // Get modifiers
        int modifiers = clazz.getModifiers();
        System.out.println("Is public: " + Modifier.isPublic(modifiers));
        System.out.println("Is final: " + Modifier.isFinal(modifiers));
        
        // Get superclass and interfaces
        System.out.println("Superclass: " + clazz.getSuperclass());
        System.out.println("Interfaces: " + Arrays.toString(clazz.getInterfaces()));
    }
}
```

### Accessing Fields

```java
import java.lang.reflect.Field;

class Person {
    private String name;
    public int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class FieldReflection {
    public static void main(String[] args) throws Exception {
        Person person = new Person("Alice", 25);
        Class<?> clazz = person.getClass();
        
        // Get all fields
        Field[] fields = clazz.getDeclaredFields();
        System.out.println("Fields:");
        for (Field field : fields) {
            System.out.println("  " + field.getName() + " - " + field.getType());
        }
        
        // Access private field
        Field nameField = clazz.getDeclaredField("name");
        nameField.setAccessible(true);  // Bypass private access
        String name = (String) nameField.get(person);
        System.out.println("Name: " + name);
        
        // Modify private field
        nameField.set(person, "Bob");
        System.out.println("Modified name: " + nameField.get(person));
        
        // Access public field
        Field ageField = clazz.getDeclaredField("age");
        System.out.println("Age: " + ageField.get(person));
    }
}
```

### Invoking Methods

```java
import java.lang.reflect.Method;

class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    private String getMessage(String name) {
        return "Hello, " + name;
    }
}

public class MethodReflection {
    public static void main(String[] args) throws Exception {
        Calculator calc = new Calculator();
        Class<?> clazz = calc.getClass();
        
        // Get all methods
        Method[] methods = clazz.getDeclaredMethods();
        System.out.println("Methods:");
        for (Method method : methods) {
            System.out.println("  " + method.getName());
        }
        
        // Invoke public method
        Method addMethod = clazz.getMethod("add", int.class, int.class);
        int result = (int) addMethod.invoke(calc, 5, 3);
        System.out.println("Add result: " + result);
        
        // Invoke private method
        Method getMessageMethod = clazz.getDeclaredMethod("getMessage", String.class);
        getMessageMethod.setAccessible(true);
        String message = (String) getMessageMethod.invoke(calc, "Alice");
        System.out.println("Message: " + message);
    }
}
```

### Creating Objects

```java
import java.lang.reflect.Constructor;

class User {
    private String name;
    
    public User() {
        this.name = "Default";
    }
    
    public User(String name) {
        this.name = name;
    }
    
    @Override
    public String toString() {
        return "User{name='" + name + "'}";
    }
}

public class ConstructorReflection {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = User.class;
        
        // Using no-arg constructor
        User user1 = (User) clazz.getDeclaredConstructor().newInstance();
        System.out.println("User 1: " + user1);
        
        // Using parameterized constructor
        Constructor<?> constructor = clazz.getDeclaredConstructor(String.class);
        User user2 = (User) constructor.newInstance("Alice");
        System.out.println("User 2: " + user2);
    }
}
```

### Practical Use Cases

```java
// 1. Dependency Injection
public class SimpleInjector {
    public static void inject(Object target) throws Exception {
        Class<?> clazz = target.getClass();
        for (Field field : clazz.getDeclaredFields()) {
            if (field.isAnnotationPresent(Inject.class)) {
                field.setAccessible(true);
                Object value = field.getType().getDeclaredConstructor().newInstance();
                field.set(target, value);
            }
        }
    }
}

// 2. Generic toString() method
public static String genericToString(Object obj) throws Exception {
    StringBuilder sb = new StringBuilder(obj.getClass().getSimpleName() + "{");
    Field[] fields = obj.getClass().getDeclaredFields();
    for (int i = 0; i < fields.length; i++) {
        fields[i].setAccessible(true);
        sb.append(fields[i].getName()).append("=").append(fields[i].get(obj));
        if (i < fields.length - 1) sb.append(", ");
    }
    sb.append("}");
    return sb.toString();
}
```

---

## 14.2 Annotations

Metadata that provides information about code.

### Built-in Annotations

```java
// @Override - indicates method overrides parent method
class Parent {
    public void display() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    @Override
    public void display() {
        System.out.println("Child");
    }
}

// @Deprecated - marks as deprecated
class LegacyClass {
    @Deprecated
    public void oldMethod() {
        System.out.println("This method is deprecated");
    }
    
    public void newMethod() {
        System.out.println("Use this method instead");
    }
}

// @SuppressWarnings - suppresses compiler warnings
@SuppressWarnings("unchecked")
public void method() {
    List list = new ArrayList();  // Raw type warning suppressed
}

// @FunctionalInterface - marks functional interface
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

// @SafeVarargs - suppresses varargs warnings
@SafeVarargs
public static <T> void printAll(T... items) {
    for (T item : items) {
        System.out.println(item);
    }
}
```

### Custom Annotations

```java
import java.lang.annotation.*;

// Define custom annotation
@Retention(RetentionPolicy.RUNTIME)  // Available at runtime
@Target(ElementType.METHOD)          // Can be applied to methods
public @interface Test {
    String description() default "";
    int priority() default 0;
}

// Using custom annotation
public class TestClass {
    @Test(description = "Test addition", priority = 1)
    public void testAdd() {
        System.out.println("Testing addition");
    }
    
    @Test(description = "Test subtraction", priority = 2)
    public void testSubtract() {
        System.out.println("Testing subtraction");
    }
}

// Processing annotations
public class AnnotationProcessor {
    public static void processAnnotations(Class<?> clazz) throws Exception {
        for (Method method : clazz.getDeclaredMethods()) {
            if (method.isAnnotationPresent(Test.class)) {
                Test test = method.getAnnotation(Test.class);
                System.out.println("Running: " + method.getName());
                System.out.println("  Description: " + test.description());
                System.out.println("  Priority: " + test.priority());
                method.invoke(clazz.getDeclaredConstructor().newInstance());
            }
        }
    }
    
    public static void main(String[] args) throws Exception {
        processAnnotations(TestClass.class);
    }
}
```

### Annotation Elements

```java
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.METHOD, ElementType.FIELD})
public @interface Info {
    String author();
    String date();
    String[] tags() default {};
    int version() default 1;
}

// Usage
@Info(
    author = "John Doe",
    date = "2024-01-15",
    tags = {"important", "reviewed"},
    version = 2
)
public class AnnotatedClass {
    @Info(author = "Jane", date = "2024-01-16")
    public void annotatedMethod() {
    }
}
```

### Meta-Annotations

```java
// @Retention - how long annotation is retained
@Retention(RetentionPolicy.SOURCE)   // Discarded by compiler
@Retention(RetentionPolicy.CLASS)    // Retained in .class (default)
@Retention(RetentionPolicy.RUNTIME)  // Available at runtime

// @Target - where annotation can be applied
@Target(ElementType.TYPE)            // Class, interface, enum
@Target(ElementType.FIELD)           // Field
@Target(ElementType.METHOD)          // Method
@Target(ElementType.PARAMETER)       // Parameter
@Target(ElementType.CONSTRUCTOR)     // Constructor
@Target(ElementType.LOCAL_VARIABLE)  // Local variable
@Target(ElementType.ANNOTATION_TYPE) // Annotation
@Target(ElementType.PACKAGE)         // Package

// @Inherited - inherited by subclasses
@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface InheritedAnnotation {
}

// @Documented - included in Javadoc
@Documented
@Retention(RetentionPolicy.RUNTIME)
public @interface DocumentedAnnotation {
}
```

---

## 14.3 Generics

Type parameters for compile-time type safety.

### Generic Class

```java
// Generic class with single type parameter
public class Box<T> {
    private T value;
    
    public void set(T value) {
        this.value = value;
    }
    
    public T get() {
        return value;
    }
    
    public static void main(String[] args) {
        Box<String> stringBox = new Box<>();
        stringBox.set("Hello");
        String value = stringBox.get();  // No casting needed
        
        Box<Integer> intBox = new Box<>();
        intBox.set(123);
        Integer number = intBox.get();
    }
}

// Generic class with multiple type parameters
public class Pair<K, V> {
    private K key;
    private V value;
    
    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }
    
    public K getKey() { return key; }
    public V getValue() { return value; }
    
    public static void main(String[] args) {
        Pair<String, Integer> pair = new Pair<>("Age", 25);
        System.out.println(pair.getKey() + ": " + pair.getValue());
    }
}
```

### Generic Method

```java
public class GenericMethods {
    // Generic method
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }
    
    // Generic method with return type
    public static <T> T getFirst(T[] array) {
        return array.length > 0 ? array[0] : null;
    }
    
    // Generic method with multiple type parameters
    public static <K, V> void printPair(K key, V value) {
        System.out.println(key + " = " + value);
    }
    
    public static void main(String[] args) {
        Integer[] intArray = {1, 2, 3, 4, 5};
        String[] stringArray = {"A", "B", "C"};
        
        printArray(intArray);
        printArray(stringArray);
        
        Integer first = getFirst(intArray);
        System.out.println("First: " + first);
        
        printPair("Name", "Alice");
        printPair("Age", 25);
    }
}
```

### Bounded Type Parameters

```java
// Upper bound (extends)
public class NumberBox<T extends Number> {
    private T value;
    
    public void set(T value) {
        this.value = value;
    }
    
    public double getDoubleValue() {
        return value.doubleValue();  // Can call Number methods
    }
}

// Multiple bounds
public class MultipleBounds<T extends Number & Comparable<T>> {
    private T value;
    
    public boolean isGreaterThan(T other) {
        return value.compareTo(other) > 0;
    }
}

// Usage
public class BoundedExample {
    public static void main(String[] args) {
        NumberBox<Integer> intBox = new NumberBox<>();
        intBox.set(123);
        
        NumberBox<Double> doubleBox = new NumberBox<>();
        doubleBox.set(45.67);
        
        // NumberBox<String> stringBox = new NumberBox<>();  // Error
    }
}
```

### Wildcards

```java
import java.util.*;

public class WildcardExample {
    // Unbounded wildcard (?)
    public static void printList(List<?> list) {
        for (Object item : list) {
            System.out.println(item);
        }
    }
    
    // Upper bounded wildcard (? extends Type)
    public static double sumNumbers(List<? extends Number> list) {
        double sum = 0;
        for (Number num : list) {
            sum += num.doubleValue();
        }
        return sum;
    }
    
    // Lower bounded wildcard (? super Type)
    public static void addIntegers(List<? super Integer> list) {
        list.add(1);
        list.add(2);
        list.add(3);
    }
    
    public static void main(String[] args) {
        List<String> strings = Arrays.asList("A", "B", "C");
        printList(strings);
        
        List<Integer> integers = Arrays.asList(1, 2, 3);
        List<Double> doubles = Arrays.asList(1.5, 2.5, 3.5);
        System.out.println("Sum: " + sumNumbers(integers));
        System.out.println("Sum: " + sumNumbers(doubles));
        
        List<Number> numbers = new ArrayList<>();
        addIntegers(numbers);
    }
}
```

### Generic Interface

```java
public interface Repository<T> {
    void save(T entity);
    T findById(int id);
    List<T> findAll();
    void delete(T entity);
}

public class UserRepository implements Repository<User> {
    private List<User> users = new ArrayList<>();
    
    @Override
    public void save(User user) {
        users.add(user);
    }
    
    @Override
    public User findById(int id) {
        return users.stream()
                    .filter(u -> u.getId() == id)
                    .findFirst()
                    .orElse(null);
    }
    
    @Override
    public List<User> findAll() {
        return new ArrayList<>(users);
    }
    
    @Override
    public void delete(User user) {
        users.remove(user);
    }
}
```

### Type Erasure

```java
// Generic code
public class GenericClass<T> {
    private T value;
    
    public T getValue() {
        return value;
    }
}

// After type erasure (compiler converts to)
public class GenericClass {
    private Object value;  // T replaced with Object
    
    public Object getValue() {
        return value;
    }
}

// Cannot do:
// new T()                    // Create instance of T
// T[] array = new T[10]      // Create array of T
// instanceof T               // Check instance of T
// class MyClass<T extends String>  // Extend final class
```

---

## 14.4 Inner and Anonymous Classes

### Member Inner Class

```java
public class Outer {
    private String outerField = "Outer field";
    
    // Member inner class
    class Inner {
        private String innerField = "Inner field";
        
        public void display() {
            System.out.println("Outer: " + outerField);  // Can access outer fields
            System.out.println("Inner: " + innerField);
        }
    }
    
    public void createInner() {
        Inner inner = new Inner();
        inner.display();
    }
    
    public static void main(String[] args) {
        Outer outer = new Outer();
        outer.createInner();
        
        // Create inner instance from outside
        Outer.Inner inner = outer.new Inner();
        inner.display();
    }
}
```

### Static Nested Class

```java
public class Outer {
    private static String staticField = "Static field";
    private String instanceField = "Instance field";
    
    // Static nested class
    static class StaticNested {
        public void display() {
            System.out.println("Static: " + staticField);  // Can access static fields
            // System.out.println(instanceField);  // Error: cannot access instance fields
        }
    }
    
    public static void main(String[] args) {
        // Create static nested instance
        Outer.StaticNested nested = new Outer.StaticNested();
        nested.display();
    }
}
```

### Local Inner Class

```java
public class Outer {
    public void outerMethod() {
        final int localVar = 10;  // Effectively final
        
        // Local inner class
        class LocalInner {
            public void display() {
                System.out.println("Local var: " + localVar);
            }
        }
        
        LocalInner inner = new LocalInner();
        inner.display();
    }
    
    public static void main(String[] args) {
        Outer outer = new Outer();
        outer.outerMethod();
    }
}
```

### Anonymous Class

```java
import java.util.*;

public class AnonymousClassExample {
    public static void main(String[] args) {
        // Anonymous class implementing interface
        Runnable runnable = new Runnable() {
            @Override
            public void run() {
                System.out.println("Running in anonymous class");
            }
        };
        runnable.run();
        
        // Anonymous class extending class
        Thread thread = new Thread() {
            @Override
            public void run() {
                System.out.println("Thread running");
            }
        };
        thread.start();
        
        // Anonymous class with Comparator
        List<String> names = Arrays.asList("Charlie", "Alice", "Bob");
        Collections.sort(names, new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                return s1.compareTo(s2);
            }
        });
        System.out.println(names);
        
        // Replaced by lambda (Java 8+)
        Collections.sort(names, (s1, s2) -> s1.compareTo(s2));
    }
}
```

### Comparison

| Type | Access to Outer | Static Context | Use Case |
|------|----------------|----------------|----------|
| **Member Inner** | Instance members | No | Helper class needing outer access |
| **Static Nested** | Static members only | Yes | Logically grouped classes |
| **Local Inner** | Method variables (final) | No | Limited scope helper |
| **Anonymous** | Outer members | No | One-time use, short implementation |

---

## 14.5 Enum Types

Special class type for defining constants.

### Basic Enum

```java
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

public class EnumBasic {
    public static void main(String[] args) {
        Day today = Day.MONDAY;
        System.out.println("Today: " + today);
        
        // Enum methods
        System.out.println("Name: " + today.name());
        System.out.println("Ordinal: " + today.ordinal());  // 0
        
        // Compare
        if (today == Day.MONDAY) {
            System.out.println("It's Monday!");
        }
        
        // Switch
        switch (today) {
            case MONDAY:
                System.out.println("Start of week");
                break;
            case FRIDAY:
                System.out.println("End of week");
                break;
            default:
                System.out.println("Midweek");
        }
        
        // Iterate all values
        for (Day day : Day.values()) {
            System.out.println(day);
        }
        
        // Parse from string
        Day parsed = Day.valueOf("TUESDAY");
        System.out.println("Parsed: " + parsed);
    }
}
```

### Enum with Fields and Methods

```java
public enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS(4.869e+24, 6.0518e6),
    EARTH(5.976e+24, 6.37814e6),
    MARS(6.421e+23, 3.3972e6);
    
    private final double mass;      // in kilograms
    private final double radius;    // in meters
    
    // Constructor
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }
    
    // Methods
    public double getMass() {
        return mass;
    }
    
    public double getRadius() {
        return radius;
    }
    
    public double surfaceGravity() {
        double G = 6.67300E-11;
        return G * mass / (radius * radius);
    }
    
    public static void main(String[] args) {
        for (Planet planet : Planet.values()) {
            System.out.printf("%s: mass=%.3e, radius=%.3e, gravity=%.2f%n",
                planet, planet.mass, planet.radius, planet.surfaceGravity());
        }
    }
}
```

### Enum with Abstract Method

```java
public enum Operation {
    PLUS {
        @Override
        public double apply(double x, double y) {
            return x + y;
        }
    },
    MINUS {
        @Override
        public double apply(double x, double y) {
            return x - y;
        }
    },
    MULTIPLY {
        @Override
        public double apply(double x, double y) {
            return x * y;
        }
    },
    DIVIDE {
        @Override
        public double apply(double x, double y) {
            return x / y;
        }
    };
    
    public abstract double apply(double x, double y);
    
    public static void main(String[] args) {
        double x = 10, y = 5;
        for (Operation op : Operation.values()) {
            System.out.printf("%f %s %f = %f%n", x, op, y, op.apply(x, y));
        }
    }
}
```

### EnumSet and EnumMap

```java
import java.util.*;

public enum Size {
    SMALL, MEDIUM, LARGE, EXTRA_LARGE
}

public class EnumCollections {
    public static void main(String[] args) {
        // EnumSet - efficient set for enums
        EnumSet<Size> sizes = EnumSet.of(Size.SMALL, Size.MEDIUM);
        System.out.println("Sizes: " + sizes);
        
        EnumSet<Size> allSizes = EnumSet.allOf(Size.class);
        System.out.println("All sizes: " + allSizes);
        
        EnumSet<Size> largeSizes = EnumSet.range(Size.LARGE, Size.EXTRA_LARGE);
        System.out.println("Large sizes: " + largeSizes);
        
        // EnumMap - efficient map for enum keys
        EnumMap<Size, String> sizeMap = new EnumMap<>(Size.class);
        sizeMap.put(Size.SMALL, "S");
        sizeMap.put(Size.MEDIUM, "M");
        sizeMap.put(Size.LARGE, "L");
        
        System.out.println("Size map: " + sizeMap);
    }
}
```

---

## 14.6 Records (Java 14+)

Immutable data classes with concise syntax.

### Basic Record

```java
// Traditional class
public class PersonClass {
    private final String name;
    private final int age;
    
    public PersonClass(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String name() { return name; }
    public int age() { return age; }
    
    @Override
    public boolean equals(Object o) { /* implementation */ }
    
    @Override
    public int hashCode() { /* implementation */ }
    
    @Override
    public String toString() { /* implementation */ }
}

// Record (automatically generates constructor, getters, equals, hashCode, toString)
public record Person(String name, int age) {
}

public class RecordExample {
    public static void main(String[] args) {
        Person person = new Person("Alice", 25);
        
        System.out.println("Name: " + person.name());
        System.out.println("Age: " + person.age());
        System.out.println("ToString: " + person);  // Person[name=Alice, age=25]
        
        Person person2 = new Person("Alice", 25);
        System.out.println("Equals: " + person.equals(person2));  // true
    }
}
```

### Record with Methods

```java
public record Point(int x, int y) {
    // Custom constructor with validation
    public Point {
        if (x < 0 || y < 0) {
            throw new IllegalArgumentException("Coordinates must be positive");
        }
    }
    
    // Additional methods
    public double distanceFromOrigin() {
        return Math.sqrt(x * x + y * y);
    }
    
    public static Point origin() {
        return new Point(0, 0);
    }
    
    public static void main(String[] args) {
        Point p1 = new Point(3, 4);
        System.out.println("Distance: " + p1.distanceFromOrigin());
        
        Point origin = Point.origin();
        System.out.println("Origin: " + origin);
    }
}
```

### Record with Interfaces

```java
interface Drawable {
    void draw();
}

public record Circle(int x, int y, int radius) implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing circle at (" + x + ", " + y + ") with radius " + radius);
    }
    
    public double area() {
        return Math.PI * radius * radius;
    }
    
    public static void main(String[] args) {
        Circle circle = new Circle(10, 20, 5);
        circle.draw();
        System.out.println("Area: " + circle.area());
    }
}
```

### Record Benefits

- **Concise**: Less boilerplate code
- **Immutable**: Final fields by default
- **Safe**: Automatic equals/hashCode/toString
- **Clear intent**: Data carrier classes

---

## 14.7 Modules (Java 9+)

Module system for better encapsulation and dependency management.

### Module Structure

```
myapp/
├── module-info.java
└── com/
    └── example/
        └── MyApp.java
```

### Basic Module

```java
// module-info.java
module com.example.myapp {
    // Exports package
    exports com.example.myapp;
    
    // Requires other module
    requires java.sql;
    requires java.logging;
}

// com/example/MyApp.java
package com.example.myapp;

public class MyApp {
    public static void main(String[] args) {
        System.out.println("Hello from module!");
    }
}
```

### Module Directives

```java
module com.example.mymodule {
    // Exports package to all modules
    exports com.example.api;
    
    // Exports package to specific modules only
    exports com.example.internal to com.example.app;
    
    // Requires module
    requires java.base;  // Implicit, always present
    requires java.sql;
    
    // Requires transitive (exposes to consumers)
    requires transitive java.logging;
    
    // Opens package for reflection
    opens com.example.model;
    
    // Opens to specific module
    opens com.example.entity to hibernate.core;
    
    // Provides service
    provides com.example.spi.Service with com.example.impl.ServiceImpl;
    
    // Uses service
    uses com.example.spi.Service;
}
```

### Module Types

**System Modules:**
- `java.base` (implicit)
- `java.sql`
- `java.xml`
- `java.logging`

**Application Modules:**
- Your custom modules

**Automatic Modules:**
- Legacy JARs on module path

**Unnamed Module:**
- Classpath JARs

### Benefits

- **Strong encapsulation**: Hide internal APIs
- **Reliable configuration**: Declare dependencies
- **Better performance**: JVM can optimize
- **Improved security**: Reduced attack surface

---

## 14.8 Summary

Advanced Java features for professional development:

### Reflection API
- Examine and modify classes, methods, fields at runtime
- Access private members with `setAccessible(true)`
- Use cases: Frameworks, serialization, testing
- Performance cost: Use judiciously

### Annotations
- **Built-in**: @Override, @Deprecated, @FunctionalInterface
- **Custom**: Define with @interface, process with reflection
- **Meta-annotations**: @Retention, @Target, @Inherited
- Use cases: Configuration, validation, testing

### Generics
- **Type safety** at compile time
- **Generic classes**: `Box<T>`, `Pair<K,V>`
- **Generic methods**: `<T> void method(T param)`
- **Bounded types**: `<T extends Number>`
- **Wildcards**: `<?>`, `<? extends>`, `<? super>`
- Type erasure: Generics removed at runtime

### Inner Classes
- **Member inner**: Access outer instance members
- **Static nested**: Logical grouping, no outer access
- **Local inner**: Limited scope within method
- **Anonymous**: One-time use implementations

### Enums
- Type-safe constants
- Can have fields, methods, constructors
- Switch-compatible
- EnumSet and EnumMap for collections

### Records (Java 14+)
- Immutable data carriers
- Auto-generated: constructor, getters, equals, hashCode, toString
- Less boilerplate, clearer intent

### Modules (Java 9+)
- Strong encapsulation with `exports`
- Explicit dependencies with `requires`
- Better security and performance
- Module-info.java descriptor

These advanced features enable building robust, maintainable, and scalable Java applications.

---

# 15. Frameworks (Basics for Real Projects)

## 15.1 🧩 Spring Framework

The most popular Java framework for enterprise applications.

### Spring Core (IoC and Dependency Injection)

**IoC (Inversion of Control)**: Framework controls object creation and lifecycle.
**DI (Dependency Injection)**: Framework injects dependencies into objects.

#### Traditional vs Spring

```java
// Traditional approach (tight coupling)
public class UserService {
    private UserRepository repository = new UserRepository();  // Creates dependency
    
    public User getUser(int id) {
        return repository.findById(id);
    }
}

// Spring approach (loose coupling)
@Service
public class UserService {
    @Autowired  // Spring injects dependency
    private UserRepository repository;
    
    public User getUser(int id) {
        return repository.findById(id);
    }
}
```

#### Dependency Injection Types

```java
// 1. Constructor Injection (Recommended)
@Service
public class UserService {
    private final UserRepository repository;
    
    @Autowired  // Optional if single constructor
    public UserService(UserRepository repository) {
        this.repository = repository;
    }
}

// 2. Setter Injection
@Service
public class UserService {
    private UserRepository repository;
    
    @Autowired
    public void setRepository(UserRepository repository) {
        this.repository = repository;
    }
}

// 3. Field Injection (Not recommended)
@Service
public class UserService {
    @Autowired
    private UserRepository repository;
}
```

#### Spring Stereotypes

```java
@Component  // Generic component
public class MyComponent { }

@Service  // Business logic layer
public class UserService { }

@Repository  // Data access layer
public class UserRepository { }

@Controller  // Web controller (MVC)
public class UserController { }

@RestController  // REST API controller
public class UserRestController { }
```

#### Bean Scopes

```java
@Service
@Scope("singleton")  // Default - one instance per container
public class SingletonService { }

@Service
@Scope("prototype")  // New instance every time
public class PrototypeService { }

@Controller
@Scope("request")  // One per HTTP request
public class RequestController { }

@Controller
@Scope("session")  // One per HTTP session
public class SessionController { }
```

---

### Spring Boot Basics

Spring Boot simplifies Spring application setup with auto-configuration.

#### Project Structure

```
myapp/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/myapp/
│   │   │       ├── MyApplication.java
│   │   │       ├── controller/
│   │   │       ├── service/
│   │   │       ├── repository/
│   │   │       └── model/
│   │   └── resources/
│   │       ├── application.properties
│   │       └── static/
│   └── test/
└── pom.xml
```

#### Main Application Class

```java
package com.example.myapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication  // Combines @Configuration, @EnableAutoConfiguration, @ComponentScan
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

#### application.properties

```properties
# Server configuration
server.port=8080
spring.application.name=myapp

# Database configuration
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# Logging
logging.level.root=INFO
logging.level.com.example.myapp=DEBUG
```

#### pom.xml Dependencies

```xml
<dependencies>
    <!-- Spring Boot Starter Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    
    <!-- Spring Boot Starter Data JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    
    <!-- MySQL Driver -->
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <scope>runtime</scope>
    </dependency>
    
    <!-- Lombok (optional) -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
</dependencies>
```

---

### REST API Development

#### Basic REST Controller

```java
package com.example.myapp.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    // GET all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    
    // GET user by ID
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    // POST create user
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
    
    // PUT update user
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }
    
    // DELETE user
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
    
    // GET with query parameters
    @GetMapping("/search")
    public List<User> searchUsers(@RequestParam String name) {
        return userService.searchByName(name);
    }
}
```

#### Response Entity

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        if (user != null) {
            return ResponseEntity.ok(user);  // 200 OK
        } else {
            return ResponseEntity.notFound().build();  // 404 Not Found
        }
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User created = userService.createUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);  // 201 Created
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();  // 204 No Content
    }
}
```

#### Exception Handling

```java
// Custom exception
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("User not found with id: " + id);
    }
}

// Global exception handler
@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            System.currentTimeMillis()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "An error occurred",
            System.currentTimeMillis()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}

// Error response DTO
@Data
@AllArgsConstructor
public class ErrorResponse {
    private int status;
    private String message;
    private long timestamp;
}
```

#### Validation

```java
// Entity with validation
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    private String name;
    
    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;
    
    @Min(value = 18, message = "Age must be at least 18")
    @Max(value = 150, message = "Age must be less than 150")
    private Integer age;
}

// Controller with validation
@PostMapping
public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
    User created = userService.createUser(user);
    return ResponseEntity.status(HttpStatus.CREATED).body(created);
}

// Validation exception handler
@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity<Map<String, String>> handleValidationExceptions(
        MethodArgumentNotValidException ex) {
    Map<String, String> errors = new HashMap<>();
    ex.getBindingResult().getFieldErrors().forEach(error -> 
        errors.put(error.getField(), error.getDefaultMessage())
    );
    return ResponseEntity.badRequest().body(errors);
}
```

---

### Spring Data JPA

Simplifies data access with repository pattern.

#### Entity

```java
package com.example.myapp.model;

import javax.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, length = 50)
    private String name;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    private Integer age;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}
```

#### Repository

```java
package com.example.myapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Query methods (Spring generates implementation)
    Optional<User> findByEmail(String email);
    
    List<User> findByName(String name);
    
    List<User> findByAgeGreaterThan(Integer age);
    
    List<User> findByNameContaining(String keyword);
    
    boolean existsByEmail(String email);
    
    Long countByAge(Integer age);
    
    // JPQL query
    @Query("SELECT u FROM User u WHERE u.name LIKE %:keyword%")
    List<User> searchByName(@Param("keyword") String keyword);
    
    // Native SQL query
    @Query(value = "SELECT * FROM users WHERE age > ?1", nativeQuery = true)
    List<User> findUsersOlderThan(Integer age);
}
```

#### Service

```java
package com.example.myapp.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Transactional
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public User getUserById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
    }
    
    public User createUser(User user) {
        return userRepository.save(user);
    }
    
    public User updateUser(Long id, User userDetails) {
        User user = getUserById(id);
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setAge(userDetails.getAge());
        return userRepository.save(user);
    }
    
    public void deleteUser(Long id) {
        User user = getUserById(id);
        userRepository.delete(user);
    }
    
    public List<User> searchByName(String name) {
        return userRepository.findByNameContaining(name);
    }
}
```

#### Relationships

```java
// One-to-Many
@Entity
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
    private List<Employee> employees;
}

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
}

// Many-to-Many
@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @ManyToMany
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses;
}

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @ManyToMany(mappedBy = "courses")
    private Set<Student> students;
}
```

---

### Spring Security and JWT

#### Basic Security Configuration

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests(auth -> auth
                .antMatchers("/api/auth/**").permitAll()
                .antMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        
        return http.build();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

#### JWT Utility

```java
@Component
public class JwtUtil {
    
    @Value("${jwt.secret}")
    private String secret;
    
    @Value("${jwt.expiration}")
    private Long expiration;
    
    public String generateToken(String username) {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + expiration))
            .signWith(SignatureAlgorithm.HS512, secret)
            .compact();
    }
    
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }
    
    public boolean validateToken(String token, UserDetails userDetails) {
        String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
    
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
    
    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
    
    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        Claims claims = Jwts.parser()
            .setSigningKey(secret)
            .parseClaimsJws(token)
            .getBody();
        return claimsResolver.apply(claims);
    }
}
```

#### Authentication Controller

```java
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private UserDetailsService userDetailsService;
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    loginRequest.getUsername(),
                    loginRequest.getPassword()
                )
            );
            
            UserDetails userDetails = userDetailsService.loadUserByUsername(
                loginRequest.getUsername()
            );
            
            String token = jwtUtil.generateToken(userDetails.getUsername());
            
            return ResponseEntity.ok(new JwtResponse(token));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Invalid credentials");
        }
    }
}

@Data
class LoginRequest {
    private String username;
    private String password;
}

@Data
@AllArgsConstructor
class JwtResponse {
    private String token;
}
```

#### JWT Filter

```java
@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private UserDetailsService userDetailsService;
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain chain) 
            throws ServletException, IOException {
        
        String authHeader = request.getHeader("Authorization");
        String username = null;
        String jwt = null;
        
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            jwt = authHeader.substring(7);
            username = jwtUtil.extractUsername(jwt);
        }
        
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            
            if (jwtUtil.validateToken(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = 
                    new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities()
                    );
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        
        chain.doFilter(request, response);
    }
}
```

---

### Spring MVC

#### Controller

```java
@Controller
@RequestMapping("/users")
public class UserMvcController {
    
    @Autowired
    private UserService userService;
    
    // Show list of users
    @GetMapping
    public String listUsers(Model model) {
        List<User> users = userService.getAllUsers();
        model.addAttribute("users", users);
        return "users/list";  // Returns view name
    }
    
    // Show form for new user
    @GetMapping("/new")
    public String showNewUserForm(Model model) {
        model.addAttribute("user", new User());
        return "users/form";
    }
    
    // Save user
    @PostMapping
    public String saveUser(@ModelAttribute User user, RedirectAttributes redirectAttributes) {
        userService.createUser(user);
        redirectAttributes.addFlashAttribute("message", "User created successfully");
        return "redirect:/users";
    }
    
    // Show edit form
    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model) {
        User user = userService.getUserById(id);
        model.addAttribute("user", user);
        return "users/form";
    }
    
    // Delete user
    @GetMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id, RedirectAttributes redirectAttributes) {
        userService.deleteUser(id);
        redirectAttributes.addFlashAttribute("message", "User deleted successfully");
        return "redirect:/users";
    }
}
```

#### Thymeleaf Template (list.html)

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Users</title>
</head>
<body>
    <h1>Users</h1>
    
    <div th:if="${message}" th:text="${message}"></div>
    
    <a th:href="@{/users/new}">Add New User</a>
    
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr th:each="user : ${users}">
                <td th:text="${user.id}"></td>
                <td th:text="${user.name}"></td>
                <td th:text="${user.email}"></td>
                <td>
                    <a th:href="@{/users/edit/{id}(id=${user.id})}">Edit</a>
                    <a th:href="@{/users/delete/{id}(id=${user.id})}">Delete</a>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

---

### Logging (SLF4J and Logback)

#### SLF4J in Classes

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UserService {
    
    private static final Logger log = LoggerFactory.getLogger(UserService.class);
    
    public User createUser(User user) {
        log.debug("Creating user: {}", user.getName());
        
        try {
            User saved = userRepository.save(user);
            log.info("User created successfully with ID: {}", saved.getId());
            return saved;
        } catch (Exception e) {
            log.error("Error creating user: {}", user.getName(), e);
            throw e;
        }
    }
    
    public User getUserById(Long id) {
        log.trace("Fetching user with ID: {}", id);
        return userRepository.findById(id)
            .orElseThrow(() -> {
                log.warn("User not found with ID: {}", id);
                return new UserNotFoundException(id);
            });
    }
}

// With Lombok
@Service
@Slf4j  // Auto-generates logger field
public class UserService {
    public void method() {
        log.info("Log message");
    }
}
```

#### Log Levels

```java
log.trace("Very detailed information");  // Most verbose
log.debug("Debug information");
log.info("General information");
log.warn("Warning message");
log.error("Error occurred", exception);  // Least verbose
```

#### logback-spring.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    
    <!-- Console appender -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>
    
    <!-- File appender -->
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>logs/application.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>logs/application-%d{yyyy-MM-dd}.log</fileNamePattern>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>
    
    <!-- Root logger -->
    <root level="INFO">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE"/>
    </root>
    
    <!-- Package-specific logging -->
    <logger name="com.example.myapp" level="DEBUG"/>
    <logger name="org.springframework" level="INFO"/>
    <logger name="org.hibernate" level="WARN"/>
    
</configuration>
```

#### application.properties Logging

```properties
# Logging levels
logging.level.root=INFO
logging.level.com.example.myapp=DEBUG
logging.level.org.springframework=INFO
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE

# Log file
logging.file.name=logs/application.log
logging.file.max-size=10MB
logging.file.max-history=30

# Pattern
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %msg%n
logging.pattern.file=%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n
```

---

## 15.2 💾 Hibernate (ORM Basics)

Hibernate is an Object-Relational Mapping (ORM) framework that maps Java objects to database tables.

### Entity Mappings

#### Basic Entity

```java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "user_name", nullable = false, length = 50)
    private String name;
    
    @Column(unique = true)
    private String email;
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at")
    private Date createdAt;
    
    @Transient  // Not persisted to database
    private String temporaryData;
    
    // Getters and setters
}
```

#### Relationship Mappings

```java
// One-to-One
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profile_id")
    private UserProfile profile;
}

@Entity
public class UserProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String bio;
    
    @OneToOne(mappedBy = "profile")
    private User user;
}

// One-to-Many / Many-to-One
@Entity
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Employee> employees = new ArrayList<>();
}

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id")
    private Department department;
}

// Many-to-Many
@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses = new HashSet<>();
}

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @ManyToMany(mappedBy = "courses")
    private Set<Student> students = new HashSet<>();
}
```

#### Cascade Types

```java
@OneToMany(cascade = CascadeType.ALL)  // All operations
@OneToMany(cascade = CascadeType.PERSIST)  // Save
@OneToMany(cascade = CascadeType.MERGE)  // Update
@OneToMany(cascade = CascadeType.REMOVE)  // Delete
@OneToMany(cascade = CascadeType.REFRESH)  // Reload
@OneToMany(cascade = CascadeType.DETACH)  // Detach
@OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})  // Multiple
```

#### Fetch Types

```java
@OneToMany(fetch = FetchType.LAZY)   // Default for collections, load on demand
@ManyToOne(fetch = FetchType.EAGER)  // Default for single entities, load immediately
```

---

### HQL (Hibernate Query Language)

#### Basic HQL Queries

```java
// Using EntityManager
@Repository
public class UserRepositoryImpl {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    // Select all
    public List<User> findAll() {
        String hql = "FROM User";
        return entityManager.createQuery(hql, User.class).getResultList();
    }
    
    // Select with WHERE
    public List<User> findByName(String name) {
        String hql = "FROM User u WHERE u.name = :name";
        return entityManager.createQuery(hql, User.class)
                           .setParameter("name", name)
                           .getResultList();
    }
    
    // Select with LIKE
    public List<User> searchByName(String keyword) {
        String hql = "FROM User u WHERE u.name LIKE :keyword";
        return entityManager.createQuery(hql, User.class)
                           .setParameter("keyword", "%" + keyword + "%")
                           .getResultList();
    }
    
    // Select specific columns
    public List<String> findAllNames() {
        String hql = "SELECT u.name FROM User u";
        return entityManager.createQuery(hql, String.class).getResultList();
    }
    
    // Aggregate functions
    public Long countUsers() {
        String hql = "SELECT COUNT(u) FROM User u";
        return entityManager.createQuery(hql, Long.class).getSingleResult();
    }
    
    // Update
    public int updateUserEmail(Long id, String email) {
        String hql = "UPDATE User u SET u.email = :email WHERE u.id = :id";
        return entityManager.createQuery(hql)
                           .setParameter("email", email)
                           .setParameter("id", id)
                           .executeUpdate();
    }
    
    // Delete
    public int deleteUserById(Long id) {
        String hql = "DELETE FROM User u WHERE u.id = :id";
        return entityManager.createQuery(hql)
                           .setParameter("id", id)
                           .executeUpdate();
    }
    
    // Join
    public List<Employee> findEmployeesWithDepartment() {
        String hql = "FROM Employee e JOIN FETCH e.department";
        return entityManager.createQuery(hql, Employee.class).getResultList();
    }
    
    // Pagination
    public List<User> findUsersPaginated(int page, int size) {
        String hql = "FROM User";
        return entityManager.createQuery(hql, User.class)
                           .setFirstResult(page * size)
                           .setMaxResults(size)
                           .getResultList();
    }
}
```

---

### Criteria API

Type-safe queries using Criteria API.

```java
@Repository
public class UserCriteriaRepository {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    // Basic query
    public List<User> findAll() {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<User> cq = cb.createQuery(User.class);
        Root<User> root = cq.from(User.class);
        cq.select(root);
        return entityManager.createQuery(cq).getResultList();
    }
    
    // Where clause
    public List<User> findByName(String name) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<User> cq = cb.createQuery(User.class);
        Root<User> root = cq.from(User.class);
        
        cq.select(root).where(cb.equal(root.get("name"), name));
        
        return entityManager.createQuery(cq).getResultList();
    }
    
    // Multiple conditions
    public List<User> findByNameAndAge(String name, Integer age) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<User> cq = cb.createQuery(User.class);
        Root<User> root = cq.from(User.class);
        
        Predicate namePredicate = cb.equal(root.get("name"), name);
        Predicate agePredicate = cb.greaterThan(root.get("age"), age);
        
        cq.select(root).where(cb.and(namePredicate, agePredicate));
        
        return entityManager.createQuery(cq).getResultList();
    }
    
    // Like query
    public List<User> searchByName(String keyword) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<User> cq = cb.createQuery(User.class);
        Root<User> root = cq.from(User.class);
        
        cq.select(root).where(cb.like(root.get("name"), "%" + keyword + "%"));
        
        return entityManager.createQuery(cq).getResultList();
    }
    
    // Order by
    public List<User> findAllOrderedByName() {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<User> cq = cb.createQuery(User.class);
        Root<User> root = cq.from(User.class);
        
        cq.select(root).orderBy(cb.asc(root.get("name")));
        
        return entityManager.createQuery(cq).getResultList();
    }
    
    // Count
    public Long countUsers() {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Long> cq = cb.createQuery(Long.class);
        Root<User> root = cq.from(User.class);
        
        cq.select(cb.count(root));
        
        return entityManager.createQuery(cq).getSingleResult();
    }
}
```

---

### Caching

Hibernate provides multiple levels of caching.

#### First-Level Cache (Session Cache)

Enabled by default, per session.

```java
// First-level cache example
Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();

// First query - hits database
User user1 = session.get(User.class, 1L);

// Second query - uses cache (no database hit)
User user2 = session.get(User.class, 1L);

System.out.println(user1 == user2);  // true (same object)

tx.commit();
session.close();
```

#### Second-Level Cache (SessionFactory Cache)

Shared across sessions, must be configured.

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-ehcache</artifactId>
</dependency>
```

```properties
# application.properties
spring.jpa.properties.hibernate.cache.use_second_level_cache=true
spring.jpa.properties.hibernate.cache.region.factory_class=org.hibernate.cache.ehcache.EhCacheRegionFactory
spring.jpa.properties.hibernate.cache.use_query_cache=true
```

```java
// Enable caching on entity
@Entity
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class User {
    // Entity fields
}

// Usage
@Service
public class UserService {
    
    @Cacheable("users")  // Spring cache annotation
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    
    @CacheEvict(value = "users", key = "#id")
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    
    @CachePut(value = "users", key = "#user.id")
    public User updateUser(User user) {
        return userRepository.save(user);
    }
}
```

#### Query Cache

```java
// Enable query cache
@Query("SELECT u FROM User u WHERE u.age > :age")
@QueryHints(@QueryHint(name = org.hibernate.annotations.QueryHints.CACHEABLE, value = "true"))
List<User> findUsersByAge(@Param("age") Integer age);
```

---

## 15.3 Summary

Frameworks for real projects:

### Spring Framework
- **IoC/DI**: Loose coupling, dependency injection
- **Spring Boot**: Simplified setup, auto-configuration
- **REST API**: @RestController, ResponseEntity, validation
- **Spring Data JPA**: Repository pattern, query methods
- **Spring Security + JWT**: Authentication, authorization
- **Spring MVC**: Web applications with Thymeleaf
- **Logging**: SLF4J with Logback

### Hibernate ORM
- **Entity Mappings**: @Entity, relationships (One-to-One, One-to-Many, Many-to-Many)
- **HQL**: Object-oriented queries
- **Criteria API**: Type-safe queries
- **Caching**: First-level (session), second-level (SessionFactory), query cache

### Key Concepts
- **Stereotypes**: @Component, @Service, @Repository, @Controller, @RestController
- **Scopes**: singleton, prototype, request, session
- **Cascade Types**: PERSIST, MERGE, REMOVE, REFRESH, DETACH, ALL
- **Fetch Types**: LAZY (on-demand), EAGER (immediate)
- **Transactions**: @Transactional for ACID operations

These frameworks are essential for building modern, production-ready Java applications efficiently.

---

# 16. Testing & Build Tools (Basics)

Essential tools for testing, building, and maintaining Java applications.

## JUnit

Popular testing framework for Java.

### JUnit 5 Basics

#### Test Class Structure

```java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {
    
    private Calculator calculator;
    
    @BeforeAll  // Runs once before all tests
    static void setupAll() {
        System.out.println("Setting up test suite");
    }
    
    @BeforeEach  // Runs before each test
    void setUp() {
        calculator = new Calculator();
    }
    
    @Test  // Test method
    void testAdd() {
        int result = calculator.add(5, 3);
        assertEquals(8, result, "5 + 3 should equal 8");
    }
    
    @Test
    void testSubtract() {
        assertEquals(2, calculator.subtract(5, 3));
    }
    
    @Test
    void testDivide() {
        assertEquals(2.5, calculator.divide(5, 2), 0.01);
    }
    
    @Test
    void testDivideByZero() {
        assertThrows(ArithmeticException.class, () -> {
            calculator.divide(5, 0);
        });
    }
    
    @AfterEach  // Runs after each test
    void tearDown() {
        calculator = null;
    }
    
    @AfterAll  // Runs once after all tests
    static void tearDownAll() {
        System.out.println("Test suite completed");
    }
}

// Calculator class
class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public int subtract(int a, int b) {
        return a - b;
    }
    
    public double divide(int a, int b) {
        if (b == 0) throw new ArithmeticException("Division by zero");
        return (double) a / b;
    }
}
```

### Common Assertions

```java
import static org.junit.jupiter.api.Assertions.*;

public class AssertionsExample {
    
    @Test
    void testAssertions() {
        // Equality
        assertEquals(5, 2 + 3);
        assertEquals("Hello", "Hello");
        assertNotEquals(5, 3);
        
        // Boolean
        assertTrue(5 > 3);
        assertFalse(5 < 3);
        
        // Null
        assertNull(null);
        assertNotNull("value");
        
        // Same object
        String str1 = "test";
        String str2 = str1;
        assertSame(str1, str2);
        assertNotSame(new String("test"), new String("test"));
        
        // Array equality
        int[] arr1 = {1, 2, 3};
        int[] arr2 = {1, 2, 3};
        assertArrayEquals(arr1, arr2);
        
        // Exception
        assertThrows(IllegalArgumentException.class, () -> {
            throw new IllegalArgumentException("Error");
        });
        
        // Timeout
        assertTimeout(Duration.ofSeconds(1), () -> {
            Thread.sleep(500);
        });
        
        // Multiple assertions
        assertAll("User properties",
            () -> assertEquals("Alice", user.getName()),
            () -> assertEquals(25, user.getAge()),
            () -> assertNotNull(user.getEmail())
        );
    }
}
```

### Test Annotations

```java
@Test  // Marks test method
void testMethod() { }

@DisplayName("Custom test name")
@Test
void testWithCustomName() { }

@Disabled("Not implemented yet")
@Test
void testSkipped() { }

@RepeatedTest(5)  // Repeat 5 times
void testRepeated() { }

@ParameterizedTest
@ValueSource(ints = {1, 2, 3, 4, 5})
void testWithParameters(int number) {
    assertTrue(number > 0);
}

@ParameterizedTest
@CsvSource({"1,2,3", "2,3,5", "5,5,10"})
void testAddition(int a, int b, int expected) {
    assertEquals(expected, calculator.add(a, b));
}
```

---

## Mockito

Mocking framework for unit testing.

### Basic Mocking

```java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    
    @Mock  // Create mock object
    private UserRepository userRepository;
    
    @InjectMocks  // Inject mocks into this object
    private UserService userService;
    
    @Test
    void testGetUserById() {
        // Arrange
        User mockUser = new User(1L, "Alice", "alice@example.com");
        when(userRepository.findById(1L)).thenReturn(Optional.of(mockUser));
        
        // Act
        User result = userService.getUserById(1L);
        
        // Assert
        assertNotNull(result);
        assertEquals("Alice", result.getName());
        
        // Verify method was called
        verify(userRepository, times(1)).findById(1L);
    }
    
    @Test
    void testCreateUser() {
        // Arrange
        User newUser = new User(null, "Bob", "bob@example.com");
        User savedUser = new User(2L, "Bob", "bob@example.com");
        when(userRepository.save(any(User.class))).thenReturn(savedUser);
        
        // Act
        User result = userService.createUser(newUser);
        
        // Assert
        assertNotNull(result.getId());
        assertEquals("Bob", result.getName());
        verify(userRepository).save(any(User.class));
    }
    
    @Test
    void testDeleteUser() {
        // Arrange
        Long userId = 1L;
        User mockUser = new User(userId, "Alice", "alice@example.com");
        when(userRepository.findById(userId)).thenReturn(Optional.of(mockUser));
        doNothing().when(userRepository).delete(any(User.class));
        
        // Act
        userService.deleteUser(userId);
        
        // Assert
        verify(userRepository).findById(userId);
        verify(userRepository).delete(mockUser);
    }
    
    @Test
    void testGetUserById_NotFound() {
        // Arrange
        when(userRepository.findById(999L)).thenReturn(Optional.empty());
        
        // Act & Assert
        assertThrows(UserNotFoundException.class, () -> {
            userService.getUserById(999L);
        });
    }
}
```

### Mockito Methods

```java
// Stubbing
when(mock.method()).thenReturn(value);
when(mock.method()).thenThrow(new Exception());
when(mock.method()).thenAnswer(invocation -> { /* custom logic */ });

// Argument matchers
when(mock.method(any())).thenReturn(value);
when(mock.method(anyInt())).thenReturn(value);
when(mock.method(anyString())).thenReturn(value);
when(mock.method(eq(5))).thenReturn(value);

// Verification
verify(mock).method();
verify(mock, times(2)).method();
verify(mock, never()).method();
verify(mock, atLeast(1)).method();
verify(mock, atMost(3)).method();

// Void methods
doNothing().when(mock).voidMethod();
doThrow(new Exception()).when(mock).voidMethod();

// Spying (partial mock)
@Spy
private List<String> spyList = new ArrayList<>();

// Capture arguments
ArgumentCaptor<User> captor = ArgumentCaptor.forClass(User.class);
verify(mock).save(captor.capture());
User captured = captor.getValue();
```

---

## Maven

Build automation and dependency management tool.

### pom.xml Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <!-- Project coordinates -->
    <groupId>com.example</groupId>
    <artifactId>myapp</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>jar</packaging>
    
    <name>My Application</name>
    <description>Sample Maven project</description>
    
    <!-- Properties -->
    <properties>
        <java.version>17</java.version>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <spring.boot.version>3.0.0</spring.boot.version>
    </properties>
    
    <!-- Dependencies -->
    <dependencies>
        <!-- Spring Boot -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>${spring.boot.version}</version>
        </dependency>
        
        <!-- JUnit -->
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>5.9.0</version>
            <scope>test</scope>
        </dependency>
        
        <!-- Mockito -->
        <dependency>
            <groupId>org.mockito</groupId>
            <artifactId>mockito-core</artifactId>
            <version>5.0.0</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <!-- Build plugins -->
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
            
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <version>0.8.10</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>prepare-agent</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>report</id>
                        <phase>test</phase>
                        <goals>
                            <goal>report</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

### Maven Commands

```bash
# Compile
mvn compile

# Run tests
mvn test

# Package (JAR/WAR)
mvn package

# Install to local repository
mvn install

# Clean build directory
mvn clean

# Clean and package
mvn clean package

# Skip tests
mvn package -DskipTests

# Run specific test
mvn test -Dtest=UserServiceTest

# Run Spring Boot app
mvn spring-boot:run

# Generate site documentation
mvn site
```

### Maven Lifecycle Phases

```
clean → validate → compile → test → package → verify → install → deploy
```

---

## Gradle

Modern build tool with Groovy/Kotlin DSL.

### build.gradle (Groovy)

```gradle
plugins {
    id 'java'
    id 'org.springframework.boot' version '3.0.0'
    id 'io.spring.dependency-management' version '1.1.0'
}

group = 'com.example'
version = '1.0-SNAPSHOT'
sourceCompatibility = '17'

repositories {
    mavenCentral()
}

dependencies {
    // Spring Boot
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    
    // Database
    runtimeOnly 'com.mysql:mysql-connector-j'
    
    // Lombok
    compileOnly 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'
    
    // Testing
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
    testImplementation 'org.junit.jupiter:junit-jupiter:5.9.0'
    testImplementation 'org.mockito:mockito-core:5.0.0'
}

test {
    useJUnitPlatform()
}

jacoco {
    toolVersion = "0.8.10"
}

jacocoTestReport {
    reports {
        xml.required = true
        html.required = true
    }
}
```

### Gradle Commands

```bash
# Compile
gradle build

# Run tests
gradle test

# Run without tests
gradle build -x test

# Clean
gradle clean

# Clean and build
gradle clean build

# Run Spring Boot app
gradle bootRun

# Generate JAR
gradle jar

# List dependencies
gradle dependencies

# List tasks
gradle tasks
```

### Maven vs Gradle

| Feature | Maven | Gradle |
|---------|-------|--------|
| **Configuration** | XML (pom.xml) | Groovy/Kotlin (build.gradle) |
| **Performance** | Slower | Faster (incremental builds) |
| **Learning Curve** | Easier | Steeper |
| **Flexibility** | Less flexible | Highly flexible |
| **Dependency Syntax** | Verbose | Concise |
| **Build Cache** | No | Yes |
| **Use Case** | Enterprise, standard projects | Android, modern projects |

---

## Logging Frameworks

### SLF4J (Simple Logging Facade for Java)

Abstraction layer for logging frameworks.

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MyService {
    private static final Logger log = LoggerFactory.getLogger(MyService.class);
    
    public void processData(String data) {
        log.trace("Entering processData with: {}", data);
        
        try {
            log.debug("Processing data: {}", data);
            // Process data
            log.info("Data processed successfully");
        } catch (Exception e) {
            log.error("Error processing data: {}", data, e);
            throw e;
        }
    }
    
    public void multipleParams(String name, int age, String email) {
        log.info("User: name={}, age={}, email={}", name, age, email);
    }
}

// With Lombok
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MyService {
    public void method() {
        log.info("Using Lombok's @Slf4j");
    }
}
```

### Log4j2 Configuration (log4j2.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="WARN">
    <Appenders>
        <!-- Console appender -->
        <Console name="Console" target="SYSTEM_OUT">
            <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
        </Console>
        
        <!-- File appender -->
        <RollingFile name="RollingFile" fileName="logs/app.log"
                     filePattern="logs/app-%d{yyyy-MM-dd}-%i.log.gz">
            <PatternLayout>
                <Pattern>%d{yyyy-MM-dd HH:mm:ss} [%t] %-5level %logger{36} - %msg%n</Pattern>
            </PatternLayout>
            <Policies>
                <TimeBasedTriggeringPolicy />
                <SizeBasedTriggeringPolicy size="10 MB"/>
            </Policies>
        </RollingFile>
    </Appenders>
    
    <Loggers>
        <Logger name="com.example.myapp" level="debug" additivity="false">
            <AppenderRef ref="Console"/>
            <AppenderRef ref="RollingFile"/>
        </Logger>
        
        <Root level="info">
            <AppenderRef ref="Console"/>
        </Root>
    </Loggers>
</Configuration>
```

### Logback Configuration (logback.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    
    <property name="LOG_PATTERN" value="%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n"/>
    
    <!-- Console appender -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>${LOG_PATTERN}</pattern>
        </encoder>
    </appender>
    
    <!-- File appender -->
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>logs/application.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>logs/application-%d{yyyy-MM-dd}.log</fileNamePattern>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>${LOG_PATTERN}</pattern>
        </encoder>
    </appender>
    
    <!-- Loggers -->
    <logger name="com.example.myapp" level="DEBUG"/>
    <logger name="org.springframework" level="INFO"/>
    
    <root level="INFO">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE"/>
    </root>
    
</configuration>
```

### Log Levels

```
TRACE < DEBUG < INFO < WARN < ERROR
```

**When to use:**
- **TRACE**: Very detailed diagnostic
- **DEBUG**: Development debugging
- **INFO**: General informational messages
- **WARN**: Potentially harmful situations
- **ERROR**: Error events

---

## Code Coverage (JaCoCo)

Measures test coverage percentage.

### Maven Configuration

```xml
<plugin>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <version>0.8.10</version>
    <executions>
        <execution>
            <goals>
                <goal>prepare-agent</goal>
            </goals>
        </execution>
        <execution>
            <id>report</id>
            <phase>test</phase>
            <goals>
                <goal>report</goal>
            </goals>
        </execution>
        <execution>
            <id>jacoco-check</id>
            <goals>
                <goal>check</goal>
            </goals>
            <configuration>
                <rules>
                    <rule>
                        <element>PACKAGE</element>
                        <limits>
                            <limit>
                                <counter>LINE</counter>
                                <value>COVEREDRATIO</value>
                                <minimum>0.80</minimum>
                            </limit>
                        </limits>
                    </rule>
                </rules>
            </configuration>
        </execution>
    </executions>
</plugin>
```

### Gradle Configuration

```gradle
plugins {
    id 'jacoco'
}

jacoco {
    toolVersion = "0.8.10"
}

jacocoTestReport {
    reports {
        xml.required = true
        html.required = true
        csv.required = false
    }
}

jacocoTestCoverageVerification {
    violationRules {
        rule {
            limit {
                minimum = 0.80
            }
        }
    }
}

test {
    finalizedBy jacocoTestReport
}
```

### Generate Coverage Report

```bash
# Maven
mvn clean test jacoco:report
# Report: target/site/jacoco/index.html

# Gradle
gradle test jacocoTestReport
# Report: build/reports/jacoco/test/html/index.html
```

### Coverage Metrics

- **Line Coverage**: % of lines executed
- **Branch Coverage**: % of if/else branches executed
- **Class Coverage**: % of classes used
- **Method Coverage**: % of methods called

### Excluding from Coverage

```java
// Exclude class
@Generated  // or custom annotation
public class GeneratedCode {
}

// Exclude in configuration
<configuration>
    <excludes>
        <exclude>**/model/**</exclude>
        <exclude>**/dto/**</exclude>
        <exclude>**/config/**</exclude>
    </excludes>
</configuration>
```

---

## Testing Best Practices

### 1. Follow AAA Pattern

```java
@Test
void testExample() {
    // Arrange (Setup)
    User user = new User("Alice", "alice@example.com");
    
    // Act (Execute)
    User saved = userService.createUser(user);
    
    // Assert (Verify)
    assertNotNull(saved.getId());
    assertEquals("Alice", saved.getName());
}
```

### 2. Test One Thing

```java
// Bad: Testing multiple things
@Test
void testUserOperations() {
    userService.create(user);
    userService.update(user);
    userService.delete(user);
}

// Good: Separate tests
@Test
void testCreateUser() { /* test create */ }

@Test
void testUpdateUser() { /* test update */ }

@Test
void testDeleteUser() { /* test delete */ }
```

### 3. Use Descriptive Names

```java
// Good test names
@Test
void shouldReturnUserWhenValidIdProvided() { }

@Test
void shouldThrowExceptionWhenUserNotFound() { }

@Test
void shouldCalculateTotalPriceWithDiscount() { }
```

### 4. Test Edge Cases

```java
@Test
void testWithNull() { }

@Test
void testWithEmptyList() { }

@Test
void testWithMaxValue() { }

@Test
void testWithNegativeNumber() { }
```

### 5. Don't Test Framework Code

```java
// Don't test getters/setters
@Test
void testGetName() {
    user.setName("Alice");
    assertEquals("Alice", user.getName());  // Pointless
}

// Test business logic instead
@Test
void shouldCalculateDiscountedPrice() {
    double price = product.calculateFinalPrice();
    assertEquals(90.0, price, 0.01);
}
```

---

## Complete Test Example

```java
// Service class
@Service
public class OrderService {
    
    @Autowired
    private OrderRepository orderRepository;
    
    @Autowired
    private ProductService productService;
    
    public Order createOrder(Long productId, int quantity) {
        Product product = productService.getProduct(productId);
        
        if (product.getStock() < quantity) {
            throw new InsufficientStockException("Not enough stock");
        }
        
        Order order = new Order();
        order.setProduct(product);
        order.setQuantity(quantity);
        order.setTotalPrice(product.getPrice() * quantity);
        
        return orderRepository.save(order);
    }
}

// Test class
@ExtendWith(MockitoExtension.class)
public class OrderServiceTest {
    
    @Mock
    private OrderRepository orderRepository;
    
    @Mock
    private ProductService productService;
    
    @InjectMocks
    private OrderService orderService;
    
    private Product product;
    
    @BeforeEach
    void setUp() {
        product = new Product(1L, "Laptop", 1000.0, 10);
    }
    
    @Test
    @DisplayName("Should create order when sufficient stock")
    void shouldCreateOrderWhenSufficientStock() {
        // Arrange
        when(productService.getProduct(1L)).thenReturn(product);
        Order expectedOrder = new Order(1L, product, 2, 2000.0);
        when(orderRepository.save(any(Order.class))).thenReturn(expectedOrder);
        
        // Act
        Order result = orderService.createOrder(1L, 2);
        
        // Assert
        assertNotNull(result);
        assertEquals(2000.0, result.getTotalPrice());
        verify(productService).getProduct(1L);
        verify(orderRepository).save(any(Order.class));
    }
    
    @Test
    @DisplayName("Should throw exception when insufficient stock")
    void shouldThrowExceptionWhenInsufficientStock() {
        // Arrange
        when(productService.getProduct(1L)).thenReturn(product);
        
        // Act & Assert
        assertThrows(InsufficientStockException.class, () -> {
            orderService.createOrder(1L, 100);  // More than available
        });
        
        verify(productService).getProduct(1L);
        verify(orderRepository, never()).save(any(Order.class));
    }
    
    @Test
    @DisplayName("Should throw exception when product not found")
    void shouldThrowExceptionWhenProductNotFound() {
        // Arrange
        when(productService.getProduct(999L))
            .thenThrow(new ProductNotFoundException(999L));
        
        // Act & Assert
        assertThrows(ProductNotFoundException.class, () -> {
            orderService.createOrder(999L, 1);
        });
    }
}
```

---

## Summary

Testing and build tools are essential for professional development:

### JUnit
- **Framework** for unit testing
- **Annotations**: @Test, @BeforeEach, @AfterEach, @BeforeAll, @AfterAll
- **Assertions**: assertEquals, assertTrue, assertThrows, etc.
- **Advanced**: Parameterized tests, repeated tests

### Mockito
- **Mocking** framework for dependencies
- **@Mock**: Create mock objects
- **@InjectMocks**: Inject mocks into test subject
- **Stubbing**: when().thenReturn()
- **Verification**: verify(), times(), never()

### Maven
- **XML-based** build tool
- **pom.xml**: Project configuration
- **Commands**: compile, test, package, install
- **Lifecycle**: clean → compile → test → package → install
- **Widely used** in enterprise

### Gradle
- **Groovy/Kotlin** based build tool
- **build.gradle**: Project configuration
- **Faster** with incremental builds
- **Flexible** and modern
- **Popular** in Android

### Logging
- **SLF4J**: Logging facade (abstraction)
- **Logback**: Implementation (default in Spring Boot)
- **Log4j2**: Alternative implementation
- **Levels**: TRACE, DEBUG, INFO, WARN, ERROR
- **Configuration**: XML or properties

### Code Coverage (JaCoCo)
- **Measures** test coverage percentage
- **Reports**: Line, branch, class, method coverage
- **Integration**: Maven and Gradle plugins
- **Goal**: 80%+ coverage for critical code
- **Report**: HTML with visual coverage

### Best Practices
1. Follow AAA pattern (Arrange, Act, Assert)
2. Test one thing per test
3. Use descriptive test names
4. Test edge cases and exceptions
5. Don't test framework code
6. Mock external dependencies
7. Aim for 80%+ code coverage
8. Use meaningful log messages
9. Configure appropriate log levels
10. Automate build and test process

These tools enable professional development with quality assurance and automation.

---

# 17. Interview / DSA Integration

Combining Java knowledge with Data Structures & Algorithms for technical interviews.

## Java-based Data Structures Implementation

### Stack Implementation

```java
public class MyStack<T> {
    private Object[] elements;
    private int size;
    private static final int DEFAULT_CAPACITY = 10;
    
    public MyStack() {
        elements = new Object[DEFAULT_CAPACITY];
        size = 0;
    }
    
    public void push(T item) {
        if (size == elements.length) {
            resize();
        }
        elements[size++] = item;
    }
    
    @SuppressWarnings("unchecked")
    public T pop() {
        if (isEmpty()) {
            throw new IllegalStateException("Stack is empty");
        }
        T item = (T) elements[--size];
        elements[size] = null;  // Avoid memory leak
        return item;
    }
    
    @SuppressWarnings("unchecked")
    public T peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Stack is empty");
        }
        return (T) elements[size - 1];
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public int size() {
        return size;
    }
    
    private void resize() {
        elements = Arrays.copyOf(elements, elements.length * 2);
    }
}
```

### Queue Implementation (Array-based)

```java
public class MyQueue<T> {
    private Object[] elements;
    private int front;
    private int rear;
    private int size;
    private int capacity;
    
    public MyQueue(int capacity) {
        this.capacity = capacity;
        elements = new Object[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }
    
    public void enqueue(T item) {
        if (isFull()) {
            throw new IllegalStateException("Queue is full");
        }
        rear = (rear + 1) % capacity;
        elements[rear] = item;
        size++;
    }
    
    @SuppressWarnings("unchecked")
    public T dequeue() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        T item = (T) elements[front];
        elements[front] = null;
        front = (front + 1) % capacity;
        size--;
        return item;
    }
    
    @SuppressWarnings("unchecked")
    public T peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        return (T) elements[front];
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public boolean isFull() {
        return size == capacity;
    }
    
    public int size() {
        return size;
    }
}
```

### LinkedList Implementation

```java
public class MyLinkedList<T> {
    private Node<T> head;
    private int size;
    
    private static class Node<T> {
        T data;
        Node<T> next;
        
        Node(T data) {
            this.data = data;
            this.next = null;
        }
    }
    
    public void addFirst(T data) {
        Node<T> newNode = new Node<>(data);
        newNode.next = head;
        head = newNode;
        size++;
    }
    
    public void addLast(T data) {
        Node<T> newNode = new Node<>(data);
        if (head == null) {
            head = newNode;
        } else {
            Node<T> current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        size++;
    }
    
    public T removeFirst() {
        if (head == null) {
            throw new IllegalStateException("List is empty");
        }
        T data = head.data;
        head = head.next;
        size--;
        return data;
    }
    
    public boolean contains(T data) {
        Node<T> current = head;
        while (current != null) {
            if (current.data.equals(data)) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    
    public int size() {
        return size;
    }
}
```

### Binary Search Tree

```java
public class BinarySearchTree {
    private Node root;
    
    private static class Node {
        int data;
        Node left, right;
        
        Node(int data) {
            this.data = data;
            left = right = null;
        }
    }
    
    public void insert(int data) {
        root = insertRec(root, data);
    }
    
    private Node insertRec(Node root, int data) {
        if (root == null) {
            return new Node(data);
        }
        if (data < root.data) {
            root.left = insertRec(root.left, data);
        } else if (data > root.data) {
            root.right = insertRec(root.right, data);
        }
        return root;
    }
    
    public boolean search(int data) {
        return searchRec(root, data);
    }
    
    private boolean searchRec(Node root, int data) {
        if (root == null) return false;
        if (root.data == data) return true;
        if (data < root.data) return searchRec(root.left, data);
        return searchRec(root.right, data);
    }
    
    public void inorder() {
        inorderRec(root);
        System.out.println();
    }
    
    private void inorderRec(Node root) {
        if (root != null) {
            inorderRec(root.left);
            System.out.print(root.data + " ");
            inorderRec(root.right);
        }
    }
}
```

### HashMap (Simplified)

```java
public class MyHashMap<K, V> {
    private static final int CAPACITY = 16;
    private Entry<K, V>[] table;
    private int size;
    
    @SuppressWarnings("unchecked")
    public MyHashMap() {
        table = new Entry[CAPACITY];
        size = 0;
    }
    
    private static class Entry<K, V> {
        K key;
        V value;
        Entry<K, V> next;
        
        Entry(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private int getIndex(K key) {
        return Math.abs(key.hashCode()) % CAPACITY;
    }
    
    public void put(K key, V value) {
        int index = getIndex(key);
        Entry<K, V> newEntry = new Entry<>(key, value);
        
        if (table[index] == null) {
            table[index] = newEntry;
        } else {
            Entry<K, V> current = table[index];
            Entry<K, V> prev = null;
            
            while (current != null) {
                if (current.key.equals(key)) {
                    current.value = value;  // Update existing
                    return;
                }
                prev = current;
                current = current.next;
            }
            prev.next = newEntry;  // Add new
        }
        size++;
    }
    
    public V get(K key) {
        int index = getIndex(key);
        Entry<K, V> current = table[index];
        
        while (current != null) {
            if (current.key.equals(key)) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }
    
    public boolean containsKey(K key) {
        return get(key) != null;
    }
    
    public int size() {
        return size;
    }
}
```

---

## Collections Internal Working

### ArrayList Internal Working

```java
/*
Internal Structure:
- Backed by Object[] array
- Default capacity: 10
- Growth: newCapacity = oldCapacity + (oldCapacity >> 1)  // 1.5x
- When full: creates new array and copies elements

Time Complexity:
- get(index): O(1)
- add(element): O(1) amortized, O(n) when resizing
- add(index, element): O(n) - shift elements
- remove(index): O(n) - shift elements
- contains(element): O(n)
*/

// Simplified ArrayList implementation
public class MyArrayList<E> {
    private static final int DEFAULT_CAPACITY = 10;
    private Object[] elements;
    private int size;
    
    public MyArrayList() {
        elements = new Object[DEFAULT_CAPACITY];
        size = 0;
    }
    
    public boolean add(E element) {
        if (size == elements.length) {
            grow();
        }
        elements[size++] = element;
        return true;
    }
    
    @SuppressWarnings("unchecked")
    public E get(int index) {
        if (index >= size) {
            throw new IndexOutOfBoundsException();
        }
        return (E) elements[index];
    }
    
    private void grow() {
        int newCapacity = elements.length + (elements.length >> 1);  // 1.5x
        elements = Arrays.copyOf(elements, newCapacity);
    }
}
```

### HashMap Internal Working

```java
/*
Internal Structure:
- Array of Node[] (buckets)
- Each bucket is a linked list (or tree for Java 8+)
- Default capacity: 16
- Load factor: 0.75
- Resize when: size > capacity * loadFactor

Hash collision resolution:
- Separate chaining (linked list)
- Treeify when bucket size > 8 (Java 8+)

Time Complexity:
- put(key, value): O(1) average, O(n) worst case
- get(key): O(1) average, O(n) worst case
- remove(key): O(1) average, O(n) worst case

How it works:
1. Calculate hash: key.hashCode()
2. Calculate index: (n-1) & hash
3. Handle collision: chain or treeify
4. Resize when load factor exceeded
*/

// Key methods
int hash = key.hashCode();
int index = (capacity - 1) & hash;

// Resize threshold
int threshold = capacity * loadFactor;
if (size > threshold) {
    resize();  // Double capacity
}
```

### HashSet Internal Working

```java
/*
Internal Structure:
- Backed by HashMap
- Elements stored as keys, dummy Object as values
- All HashMap properties apply

Implementation:
private transient HashMap<E,Object> map;
private static final Object PRESENT = new Object();

public boolean add(E e) {
    return map.put(e, PRESENT) == null;
}

public boolean contains(Object o) {
    return map.containsKey(o);
}
*/
```

### LinkedHashMap Internal Working

```java
/*
Internal Structure:
- Extends HashMap
- Maintains doubly-linked list for insertion order
- Each entry has before/after references

Time Complexity:
- Same as HashMap
- Slightly slower due to linked list maintenance

Use case:
- LRU Cache implementation
*/

// Access-order LinkedHashMap (LRU Cache)
LinkedHashMap<Integer, String> lruCache = new LinkedHashMap<Integer, String>(
    16, 0.75f, true) {
    @Override
    protected boolean removeEldestEntry(Map.Entry<Integer, String> eldest) {
        return size() > MAX_CACHE_SIZE;
    }
};
```

### TreeMap Internal Working

```java
/*
Internal Structure:
- Red-Black Tree (self-balancing BST)
- Keys sorted in natural order or by Comparator
- No null keys

Time Complexity:
- put(key, value): O(log n)
- get(key): O(log n)
- remove(key): O(log n)

Red-Black Tree Properties:
1. Every node is red or black
2. Root is black
3. Leaves (null) are black
4. Red node has black children
5. All paths from node to leaves have same black nodes
*/
```

### ConcurrentHashMap Internal Working

```java
/*
Internal Structure (Java 8+):
- Array of Node[] (like HashMap)
- Segment locking replaced with CAS + synchronized
- Lock per bucket (fine-grained locking)

Features:
- Thread-safe without locking entire map
- Better concurrency than Hashtable
- No null keys or values

Time Complexity:
- Same as HashMap
- Thread-safe operations
*/
```

---

## Algorithm Questions Using Java

### 1. Two Sum Problem

```java
public class TwoSum {
    // Approach 1: Brute force O(n²)
    public static int[] twoSumBruteForce(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{};
    }
    
    // Approach 2: HashMap O(n)
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }
    
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = twoSum(nums, target);
        System.out.println("Indices: " + Arrays.toString(result));  // [0, 1]
    }
}
```

### 2. Valid Parentheses

```java
public class ValidParentheses {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> pairs = new HashMap<>();
        pairs.put(')', '(');
        pairs.put('}', '{');
        pairs.put(']', '[');
        
        for (char c : s.toCharArray()) {
            if (pairs.containsValue(c)) {
                stack.push(c);  // Opening bracket
            } else if (pairs.containsKey(c)) {
                if (stack.isEmpty() || stack.pop() != pairs.get(c)) {
                    return false;
                }
            }
        }
        
        return stack.isEmpty();
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()"));        // true
        System.out.println(isValid("()[]{}"));    // true
        System.out.println(isValid("(]"));        // false
        System.out.println(isValid("([)]"));      // false
        System.out.println(isValid("{[]}"));      // true
    }
}
```

### 3. Reverse String

```java
public class ReverseString {
    // Using StringBuilder
    public static String reverse1(String str) {
        return new StringBuilder(str).reverse().toString();
    }
    
    // Using char array
    public static String reverse2(String str) {
        char[] chars = str.toCharArray();
        int left = 0, right = chars.length - 1;
        while (left < right) {
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }
        return new String(chars);
    }
    
    // Using recursion
    public static String reverse3(String str) {
        if (str.isEmpty()) return str;
        return reverse3(str.substring(1)) + str.charAt(0);
    }
    
    public static void main(String[] args) {
        String str = "Hello";
        System.out.println(reverse1(str));  // olleH
        System.out.println(reverse2(str));  // olleH
        System.out.println(reverse3(str));  // olleH
    }
}
```

### 4. Find Duplicates

```java
public class FindDuplicates {
    // Using HashSet
    public static List<Integer> findDuplicates(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        Set<Integer> duplicates = new HashSet<>();
        
        for (int num : nums) {
            if (!seen.add(num)) {
                duplicates.add(num);
            }
        }
        
        return new ArrayList<>(duplicates);
    }
    
    // Using HashMap (with frequency)
    public static Map<Integer, Integer> findFrequency(int[] nums) {
        Map<Integer, Integer> frequency = new HashMap<>();
        for (int num : nums) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
        }
        return frequency;
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 2, 4, 5, 3, 6};
        System.out.println("Duplicates: " + findDuplicates(nums));  // [2, 3]
        System.out.println("Frequency: " + findFrequency(nums));
    }
}
```

### 5. Palindrome Check

```java
public class PalindromeCheck {
    // String palindrome
    public static boolean isPalindrome(String str) {
        str = str.toLowerCase().replaceAll("[^a-z0-9]", "");
        int left = 0, right = str.length() - 1;
        
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    
    // Number palindrome
    public static boolean isPalindrome(int num) {
        if (num < 0) return false;
        int original = num;
        int reversed = 0;
        
        while (num > 0) {
            reversed = reversed * 10 + num % 10;
            num /= 10;
        }
        
        return original == reversed;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man a plan a canal Panama"));  // true
        System.out.println(isPalindrome("race a car"));  // false
        System.out.println(isPalindrome(121));  // true
        System.out.println(isPalindrome(123));  // false
    }
}
```

### 6. Binary Search

```java
public class BinarySearchExample {
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;  // Not found
    }
    
    // Recursive
    public static int binarySearchRecursive(int[] arr, int target, int left, int right) {
        if (left > right) return -1;
        
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11, 13, 15};
        System.out.println("Index: " + binarySearch(arr, 7));  // 3
        System.out.println("Index: " + binarySearchRecursive(arr, 13, 0, arr.length - 1));  // 6
    }
}
```

### 7. Sorting Algorithms

```java
public class SortingAlgorithms {
    // Bubble Sort - O(n²)
    public static void bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    
    // Selection Sort - O(n²)
    public static void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
    
    // Quick Sort - O(n log n) average
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        
        return i + 1;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr1);
        System.out.println("Bubble: " + Arrays.toString(arr1));
        
        int[] arr2 = {64, 25, 12, 22, 11};
        selectionSort(arr2);
        System.out.println("Selection: " + Arrays.toString(arr2));
        
        int[] arr3 = {10, 7, 8, 9, 1, 5};
        quickSort(arr3, 0, arr3.length - 1);
        System.out.println("Quick: " + Arrays.toString(arr3));
    }
}
```

### 8. Sliding Window Pattern

```java
public class SlidingWindow {
    // Maximum sum of k consecutive elements
    public static int maxSumSubarray(int[] arr, int k) {
        if (arr.length < k) return -1;
        
        int maxSum = 0;
        int windowSum = 0;
        
        // First window
        for (int i = 0; i < k; i++) {
            windowSum += arr[i];
        }
        maxSum = windowSum;
        
        // Slide window
        for (int i = k; i < arr.length; i++) {
            windowSum = windowSum - arr[i - k] + arr[i];
            maxSum = Math.max(maxSum, windowSum);
        }
        
        return maxSum;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 4, 2, 10, 23, 3, 1, 0, 20};
        int k = 4;
        System.out.println("Max sum: " + maxSumSubarray(arr, k));  // 39
    }
}
```

### 9. Stream API for Algorithms

```java
import java.util.*;
import java.util.stream.*;

public class StreamAlgorithms {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // Sum of even numbers
        int sumEven = numbers.stream()
            .filter(n -> n % 2 == 0)
            .mapToInt(Integer::intValue)
            .sum();
        System.out.println("Sum of even: " + sumEven);
        
        // Find max
        int max = numbers.stream()
            .max(Integer::compareTo)
            .orElse(0);
        System.out.println("Max: " + max);
        
        // Remove duplicates and sort
        List<Integer> nums = Arrays.asList(5, 2, 8, 2, 9, 1, 5);
        List<Integer> unique = nums.stream()
            .distinct()
            .sorted()
            .collect(Collectors.toList());
        System.out.println("Unique sorted: " + unique);
        
        // Group by condition
        Map<Boolean, List<Integer>> partitioned = numbers.stream()
            .collect(Collectors.partitioningBy(n -> n % 2 == 0));
        System.out.println("Even: " + partitioned.get(true));
        System.out.println("Odd: " + partitioned.get(false));
        
        // Frequency count
        List<String> words = Arrays.asList("apple", "banana", "apple", "cherry", "banana");
        Map<String, Long> frequency = words.stream()
            .collect(Collectors.groupingBy(w -> w, Collectors.counting()));
        System.out.println("Frequency: " + frequency);
    }
}
```

---

## Common Interview Patterns (Design Patterns)

### 1. Singleton Pattern

Ensures only one instance of a class exists.

```java
// Eager initialization
public class EagerSingleton {
    private static final EagerSingleton instance = new EagerSingleton();
    
    private EagerSingleton() {
        // Private constructor
    }
    
    public static EagerSingleton getInstance() {
        return instance;
    }
}

// Lazy initialization
public class LazySingleton {
    private static LazySingleton instance;
    
    private LazySingleton() {
    }
    
    public static LazySingleton getInstance() {
        if (instance == null) {
            instance = new LazySingleton();
        }
        return instance;
    }
}

// Thread-safe lazy (Double-check locking)
public class ThreadSafeSingleton {
    private static volatile ThreadSafeSingleton instance;
    
    private ThreadSafeSingleton() {
    }
    
    public static ThreadSafeSingleton getInstance() {
        if (instance == null) {
            synchronized (ThreadSafeSingleton.class) {
                if (instance == null) {
                    instance = new ThreadSafeSingleton();
                }
            }
        }
        return instance;
    }
}

// Bill Pugh Singleton (Best approach)
public class BillPughSingleton {
    private BillPughSingleton() {
    }
    
    private static class SingletonHelper {
        private static final BillPughSingleton INSTANCE = new BillPughSingleton();
    }
    
    public static BillPughSingleton getInstance() {
        return SingletonHelper.INSTANCE;
    }
}

// Enum Singleton (Joshua Bloch's approach)
public enum EnumSingleton {
    INSTANCE;
    
    public void doSomething() {
        System.out.println("Singleton via Enum");
    }
}
```

### 2. Factory Pattern

Creates objects without specifying exact class.

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

class Triangle implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Triangle");
    }
}

// Factory
class ShapeFactory {
    public static Shape getShape(String shapeType) {
        if (shapeType == null) return null;
        
        switch (shapeType.toLowerCase()) {
            case "circle":
                return new Circle();
            case "rectangle":
                return new Rectangle();
            case "triangle":
                return new Triangle();
            default:
                return null;
        }
    }
}

// Usage
public class FactoryPatternDemo {
    public static void main(String[] args) {
        Shape circle = ShapeFactory.getShape("circle");
        circle.draw();
        
        Shape rectangle = ShapeFactory.getShape("rectangle");
        rectangle.draw();
    }
}
```

### 3. Builder Pattern

Constructs complex objects step by step.

```java
// Without Builder (telescoping constructor problem)
public class User {
    private String firstName;
    private String lastName;
    private int age;
    private String phone;
    private String address;
    
    // Many constructors needed
    public User(String firstName, String lastName) { }
    public User(String firstName, String lastName, int age) { }
    public User(String firstName, String lastName, int age, String phone) { }
    // ...
}

// With Builder Pattern
public class User {
    private final String firstName;     // Required
    private final String lastName;      // Required
    private final int age;              // Optional
    private final String phone;         // Optional
    private final String address;       // Optional
    
    private User(UserBuilder builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.age = builder.age;
        this.phone = builder.phone;
        this.address = builder.address;
    }
    
    // Builder class
    public static class UserBuilder {
        private final String firstName;
        private final String lastName;
        private int age;
        private String phone;
        private String address;
        
        public UserBuilder(String firstName, String lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        
        public UserBuilder age(int age) {
            this.age = age;
            return this;
        }
        
        public UserBuilder phone(String phone) {
            this.phone = phone;
            return this;
        }
        
        public UserBuilder address(String address) {
            this.address = address;
            return this;
        }
        
        public User build() {
            return new User(this);
        }
    }
    
    @Override
    public String toString() {
        return "User{firstName='" + firstName + "', lastName='" + lastName + 
               "', age=" + age + ", phone='" + phone + "', address='" + address + "'}";
    }
}

// Usage
public class BuilderPatternDemo {
    public static void main(String[] args) {
        // Readable and flexible
        User user1 = new User.UserBuilder("John", "Doe")
            .age(30)
            .phone("123-456-7890")
            .build();
        
        User user2 = new User.UserBuilder("Jane", "Smith")
            .age(25)
            .address("123 Main St")
            .build();
        
        System.out.println(user1);
        System.out.println(user2);
    }
}
```

### 4. Observer Pattern

```java
import java.util.*;

// Subject
interface Subject {
    void attach(Observer observer);
    void detach(Observer observer);
    void notifyObservers();
}

// Observer
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

// Concrete Observer
class NewsChannel implements Observer {
    private String name;
    
    public NewsChannel(String name) {
        this.name = name;
    }
    
    @Override
    public void update(String news) {
        System.out.println(name + " received news: " + news);
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
        
        agency.setNews("Breaking News!");
        // Output:
        // Channel 1 received news: Breaking News!
        // Channel 2 received news: Breaking News!
    }
}
```

### 5. Strategy Pattern

```java
// Strategy interface
interface PaymentStrategy {
    void pay(int amount);
}

// Concrete strategies
class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;
    
    public CreditCardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }
    
    @Override
    public void pay(int amount) {
        System.out.println("Paid " + amount + " using Credit Card: " + cardNumber);
    }
}

class PayPalPayment implements PaymentStrategy {
    private String email;
    
    public PayPalPayment(String email) {
        this.email = email;
    }
    
    @Override
    public void pay(int amount) {
        System.out.println("Paid " + amount + " using PayPal: " + email);
    }
}

// Context
class ShoppingCart {
    private PaymentStrategy paymentStrategy;
    
    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    
    public void checkout(int amount) {
        paymentStrategy.pay(amount);
    }
}

// Usage
public class StrategyPatternDemo {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        
        cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012"));
        cart.checkout(100);
        
        cart.setPaymentStrategy(new PayPalPayment("user@example.com"));
        cart.checkout(200);
    }
}
```

---

## Interview Tips

### Time Complexity Quick Reference

| Operation | ArrayList | LinkedList | HashSet | TreeSet | HashMap | TreeMap |
|-----------|-----------|------------|---------|---------|---------|---------|
| **add** | O(1) | O(1) | O(1) | O(log n) | O(1) | O(log n) |
| **remove** | O(n) | O(1) | O(1) | O(log n) | O(1) | O(log n) |
| **get** | O(1) | O(n) | - | - | O(1) | O(log n) |
| **contains** | O(n) | O(n) | O(1) | O(log n) | O(1) | O(log n) |

### Common Patterns

```java
// 1. Frequency Counter
Map<Character, Integer> freq = new HashMap<>();
for (char c : str.toCharArray()) {
    freq.put(c, freq.getOrDefault(c, 0) + 1);
}

// 2. Sliding Window
int windowSum = 0;
for (int i = 0; i < k; i++) windowSum += arr[i];
int maxSum = windowSum;
for (int i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i-k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
}

// 3. Two Pointers
int left = 0, right = arr.length - 1;
while (left < right) {
    // Process
    left++;
    right--;
}

// 4. Fast & Slow Pointers (Cycle detection)
Node slow = head, fast = head;
while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;  // Cycle detected
}

// 5. HashSet for lookup
Set<Integer> set = new HashSet<>(Arrays.asList(arr));
for (int num : nums) {
    if (set.contains(target - num)) {
        // Found pair
    }
}
```

### Interview Checklist

**Before coding:**
1. ✅ Understand the problem
2. ✅ Ask clarifying questions
3. ✅ Discuss edge cases
4. ✅ Explain approach before coding

**While coding:**
5. ✅ Start with brute force
6. ✅ Optimize time/space complexity
7. ✅ Use appropriate data structures
8. ✅ Write clean, readable code
9. ✅ Handle edge cases

**After coding:**
10. ✅ Test with examples
11. ✅ Analyze time/space complexity
12. ✅ Discuss trade-offs
13. ✅ Mention alternative approaches

---

## Summary

Interview and DSA integration essentials:

### Data Structures
- **Stack, Queue, LinkedList**: Implement from scratch
- **BST, HashMap**: Understand internal working
- Know when to use each structure

### Collections Internals
- **ArrayList**: Dynamic array, O(1) access, O(n) insertion
- **HashMap**: Hash table, O(1) operations, handles collisions
- **HashSet**: Backed by HashMap
- **TreeMap**: Red-Black tree, O(log n) operations
- **ConcurrentHashMap**: Thread-safe, fine-grained locking

### Algorithm Patterns
- **Two Sum**: HashMap for O(n)
- **Palindrome**: Two pointers
- **Duplicates**: HashSet
- **Sorting**: Know built-in and custom
- **Binary Search**: O(log n) on sorted array
- **Sliding Window**: For subarrays/substrings
- **Stream API**: Functional approach to algorithms

### Design Patterns
- **Singleton**: One instance (thread-safe approaches)
- **Factory**: Object creation abstraction
- **Builder**: Complex object construction
- **Observer**: Event notification
- **Strategy**: Algorithm encapsulation

### Interview Success
- Understand problem first
- Discuss approach before coding
- Start simple, then optimize
- Test with edge cases
- Analyze complexity
- Use Java collections effectively
- Practice common patterns

Master these concepts to excel in Java technical interviews!

