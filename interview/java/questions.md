# Java Interview Questions - Comprehensive List

## Table of Contents
1. [Java Basics (1-30)](#java-basics)
2. [Object-Oriented Programming (31-60)](#object-oriented-programming)
3. [Java Collections Framework (61-90)](#java-collections-framework)
4. [Exception Handling (91-110)](#exception-handling)
5. [Multithreading & Concurrency (111-145)](#multithreading--concurrency)
6. [Java 8+ Features (146-175)](#java-8-features)
7. [String & Immutability (176-195)](#string--immutability)
8. [Memory Management & JVM (196-220)](#memory-management--jvm)
9. [Design Patterns (221-240)](#design-patterns)
10. [JDBC & Database (241-255)](#jdbc--database)
11. [Serialization & I/O (256-270)](#serialization--io)
12. [Advanced Java Concepts (271-300)](#advanced-java-concepts)

---

## Java Basics

1. What is Java and what are its main features?
   - **Follow-up**: What does "platform independent" mean?
   - **Follow-up**: How does Java achieve platform independence?
   - **Follow-up**: What is WORA (Write Once Run Anywhere)?

2. What is the difference between JDK, JRE, and JVM?
   - **Follow-up**: Can you run a Java program with just JRE?
   - **Follow-up**: What tools are included in the JDK?
   - **Follow-up**: Which component is responsible for garbage collection?

3. What is bytecode in Java?
   - **Follow-up**: How is bytecode different from machine code?
   - **Follow-up**: What tool converts .java files to bytecode?
   - **Follow-up**: Can bytecode be decompiled?

4. What is the difference between `==` and `.equals()` method?
   - **Follow-up**: What does `==` compare for objects?
   - **Follow-up**: Can you override the `equals()` method?
   - **Follow-up**: What happens if you don't override `equals()`?

5. What are the primitive data types in Java?
   - **Follow-up**: What is the size of each primitive type?
   - **Follow-up**: What are the default values of primitive types?
   - **Follow-up**: Why are primitives not objects?

6. What is autoboxing and unboxing?
   - **Follow-up**: When was autoboxing introduced in Java?
   - **Follow-up**: What is the performance impact of autoboxing?
   - **Follow-up**: Can autoboxing lead to NullPointerException?

7. What is the difference between `int` and `Integer`?
   - **Follow-up**: Which one is stored on the stack vs heap?
   - **Follow-up**: Can you use `int` in collections?
   - **Follow-up**: What is the Integer cache range?

8. What are wrapper classes in Java?
   - **Follow-up**: Name all wrapper classes for primitive types
   - **Follow-up**: Why do we need wrapper classes?
   - **Follow-up**: Are wrapper classes immutable?

9. What is the purpose of the `static` keyword?
   - **Follow-up**: Can static methods access instance variables?
   - **Follow-up**: When is a static block executed?
   - **Follow-up**: Can we have a static class?

10. What is the difference between static and non-static methods?
    - **Follow-up**: Can you call a static method from an instance?
    - **Follow-up**: How is memory allocated for static vs instance methods?
    - **Follow-up**: Can static methods be overridden?

11. What is the purpose of the `final` keyword?
    - **Follow-up**: What happens when you make a reference variable final?
    - **Follow-up**: Can you have a final class? Give an example.
    - **Follow-up**: What is a blank final variable?

12. Can we override static methods in Java?
    - **Follow-up**: What is method hiding?
    - **Follow-up**: What happens if you try to override a static method?
    - **Follow-up**: Can static methods be overloaded?

13. Can we override private methods in Java?
    - **Follow-up**: Why can't private methods be overridden?
    - **Follow-up**: What happens if child class has same method signature?
    - **Follow-up**: Can private methods be overloaded?

14. What is method overloading?
    - **Follow-up**: Can you overload methods by changing only return type?
    - **Follow-up**: What is compile-time polymorphism?
    - **Follow-up**: Can you overload main method?

15. What is method overriding?
    - **Follow-up**: What is runtime polymorphism?
    - **Follow-up**: What are the rules for method overriding?
    - **Follow-up**: Can you change the access modifier while overriding?

16. What is the difference between overloading and overriding?
    - **Follow-up**: Which one is resolved at compile time vs runtime?
    - **Follow-up**: Can overloading and overriding happen in the same class?
    - **Follow-up**: What is the role of method signature in each?

17. What is constructor in Java?
    - **Follow-up**: Can a constructor return a value?
    - **Follow-up**: What is a default constructor?
    - **Follow-up**: Can constructors be private?

18. Can we overload constructors?
    - **Follow-up**: Give an example of constructor overloading
    - **Follow-up**: How does constructor overloading help?
    - **Follow-up**: Can constructors call each other?

19. What is constructor chaining?
    - **Follow-up**: How do you implement constructor chaining?
    - **Follow-up**: What is the difference between `this()` and `super()` in constructors?
    - **Follow-up**: Can `this()` and `super()` be used together?

20. What is the default value of local variables?
    - **Follow-up**: Why don't local variables have default values?
    - **Follow-up**: What about instance variables?
    - **Follow-up**: What happens if you use an uninitialized local variable?

21. What is the difference between `break` and `continue` statements?
    - **Follow-up**: Can you use labeled break and continue?
    - **Follow-up**: What happens when break is used in nested loops?
    - **Follow-up**: Can break be used outside of loops?

22. What is the `switch` statement and when should it be used?
    - **Follow-up**: What data types can be used in switch?
    - **Follow-up**: What is fall-through in switch?
    - **Follow-up**: What are switch expressions (Java 12+)?

23. What is the difference between `while` and `do-while` loops?
    - **Follow-up**: When would you prefer do-while over while?
    - **Follow-up**: What is the minimum number of executions for each?
    - **Follow-up**: Can you break out of both loops?

24. What is the enhanced for loop (for-each loop)?
    - **Follow-up**: Can you modify elements using for-each loop?
    - **Follow-up**: Can you iterate over a Map using for-each?
    - **Follow-up**: What are the limitations of for-each loop?

25. What is the `var` keyword introduced in Java 10?
    - **Follow-up**: Can you use var for method parameters?
    - **Follow-up**: Is var the same as JavaScript's var?
    - **Follow-up**: What are the restrictions on using var?

26. What are Java access modifiers?
    - **Follow-up**: How many access modifiers are there?
    - **Follow-up**: What is the default access modifier?
    - **Follow-up**: Can you apply access modifiers to local variables?

27. What is the difference between public, private, protected, and default access modifiers?
    - **Follow-up**: What is package-private access?
    - **Follow-up**: Can a top-level class be private?
    - **Follow-up**: How does protected work across packages?

28. What is a package in Java?
    - **Follow-up**: Why do we need packages?
    - **Follow-up**: What is the naming convention for packages?
    - **Follow-up**: How does package structure relate to directory structure?

29. What is the `import` statement?
    - **Follow-up**: What is the difference between `import` and `import *`?
    - **Follow-up**: Do you need to import java.lang package?
    - **Follow-up**: What happens if you import two classes with the same name?

30. What is the difference between `import` and `static import`?
    - **Follow-up**: When would you use static import?
    - **Follow-up**: Can static import cause naming conflicts?
    - **Follow-up**: Is it considered a good practice to use static imports?

---

## Object-Oriented Programming

31. What are the four pillars of Object-Oriented Programming?
    - **Follow-up**: How does Java implement each pillar?
    - **Follow-up**: Why is OOP better than procedural programming?
    - **Follow-up**: Can you give a real-world example of each pillar?

32. What is encapsulation and how is it achieved in Java?
    - **Follow-up**: What are getters and setters?
    - **Follow-up**: Why should we make fields private?
    - **Follow-up**: What is data hiding?

33. What is inheritance in Java?
    - **Follow-up**: What is the syntax for inheritance in Java?
    - **Follow-up**: What is inherited and what is not inherited?
    - **Follow-up**: Can constructors be inherited?

34. What are the types of inheritance supported in Java?
    - **Follow-up**: Does Java support multiple inheritance of classes?
    - **Follow-up**: What is multilevel inheritance?
    - **Follow-up**: Can you have cyclic inheritance?

35. Why doesn't Java support multiple inheritance?
    - **Follow-up**: What is the diamond problem?
    - **Follow-up**: How do interfaces solve the multiple inheritance issue?
    - **Follow-up**: Does Java 8 allow multiple inheritance through default methods?

36. What is polymorphism in Java?
    - **Follow-up**: What are the benefits of polymorphism?
    - **Follow-up**: Give a real-world example of polymorphism
    - **Follow-up**: How is polymorphism different from inheritance?

37. What are the types of polymorphism?
    - **Follow-up**: What is compile-time vs runtime polymorphism?
    - **Follow-up**: Which one is more flexible?
    - **Follow-up**: How is dynamic method dispatch achieved?

38. What is abstraction in Java?
    - **Follow-up**: How is abstraction different from encapsulation?
    - **Follow-up**: How do you achieve abstraction in Java?
    - **Follow-up**: What level of abstraction should you aim for?

39. What is the difference between abstract class and interface?
    - **Follow-up**: When would you use an abstract class vs interface?
    - **Follow-up**: Can abstract classes have constructors?
    - **Follow-up**: Which one is faster in terms of performance?

40. Can an interface extend another interface?
    - **Follow-up**: Can an interface extend multiple interfaces?
    - **Follow-up**: What is the syntax for interface inheritance?
    - **Follow-up**: Do you need to re-declare inherited methods?

41. Can a class extend multiple interfaces?
    - **Follow-up**: What is the correct term - extend or implement?
    - **Follow-up**: Is there a limit to how many interfaces a class can implement?
    - **Follow-up**: What happens if two interfaces have the same method?

42. What are default methods in interfaces (Java 8)?
    - **Follow-up**: Why were default methods introduced?
    - **Follow-up**: Can you override a default method?
    - **Follow-up**: What happens if a class implements two interfaces with same default method?

43. What are static methods in interfaces (Java 8)?
    - **Follow-up**: Can static methods be inherited in interfaces?
    - **Follow-up**: How do you call a static method from an interface?
    - **Follow-up**: Why would you put a static method in an interface?

44. What are private methods in interfaces (Java 9)?
    - **Follow-up**: Why were private methods added to interfaces?
    - **Follow-up**: Can private methods be static in interfaces?
    - **Follow-up**: How do private methods help with default methods?

45. What is the purpose of the `super` keyword?
    - **Follow-up**: Can you use super to call grandparent methods?
    - **Follow-up**: What is the difference between super and this?
    - **Follow-up**: Can you use super in a static context?

46. What is the purpose of the `this` keyword?
    - **Follow-up**: When is it mandatory to use this?
    - **Follow-up**: Can you return this from a method?
    - **Follow-up**: What is method chaining?

47. What is the difference between `this()` and `super()`?
    - **Follow-up**: Which one must be the first statement in a constructor?
    - **Follow-up**: Can you use both in the same constructor?
    - **Follow-up**: What happens if you don't call super()?

48. What is composition in Java?
    - **Follow-up**: How is composition different from inheritance?
    - **Follow-up**: What is the "has-a" relationship?
    - **Follow-up**: Give an example of composition

49. What is aggregation in Java?
    - **Follow-up**: How is aggregation different from composition?
    - **Follow-up**: What is the lifecycle difference between them?
    - **Follow-up**: Give an example of aggregation

50. What is the difference between composition and aggregation?
    - **Follow-up**: Which one represents a stronger relationship?
    - **Follow-up**: How do you decide which to use?
    - **Follow-up**: What happens to the contained object in each case?

51. What is association in Java?
    - **Follow-up**: What are the types of association?
    - **Follow-up**: How is association implemented in Java?
    - **Follow-up**: What is unidirectional vs bidirectional association?

52. What is coupling and cohesion?
    - **Follow-up**: What is high cohesion and low coupling?
    - **Follow-up**: Why is low coupling desirable?
    - **Follow-up**: How do you reduce coupling in your code?

53. What is the difference between tight coupling and loose coupling?
    - **Follow-up**: How do interfaces help in loose coupling?
    - **Follow-up**: What is dependency injection?
    - **Follow-up**: Give an example of tight vs loose coupling

54. What is an inner class?
    - **Follow-up**: Why would you use an inner class?
    - **Follow-up**: Can an inner class access outer class members?
    - **Follow-up**: Can you make an inner class private?

55. What are the types of inner classes in Java?
    - **Follow-up**: What are the four types of inner classes?
    - **Follow-up**: When would you use each type?
    - **Follow-up**: Can inner classes be static?

56. What is an anonymous inner class?
    - **Follow-up**: When would you use an anonymous class?
    - **Follow-up**: Can anonymous classes have constructors?
    - **Follow-up**: How have lambdas replaced anonymous classes?

57. What is a static nested class?
    - **Follow-up**: How is it different from a regular inner class?
    - **Follow-up**: Can a static nested class access instance members of outer class?
    - **Follow-up**: When would you use a static nested class?

58. What is a local inner class?
    - **Follow-up**: Where can you define a local inner class?
    - **Follow-up**: Can a local inner class access local variables?
    - **Follow-up**: Why must local variables be final or effectively final?

59. What is the purpose of the `instanceof` operator?
    - **Follow-up**: What does instanceof return?
    - **Follow-up**: Can you use instanceof with interfaces?
    - **Follow-up**: What are pattern matching improvements (Java 16+)?

60. What is the Object class in Java?
    - **Follow-up**: What methods are defined in Object class?
    - **Follow-up**: Does every class inherit from Object?
    - **Follow-up**: Which Object methods should you override?

---

## Java Collections Framework

61. What is the Java Collections Framework?
    - **Follow-up**: What interfaces are part of the Collections Framework?
    - **Follow-up**: Why was it introduced?
    - **Follow-up**: What are the benefits of using Collections Framework?

62. What is the difference between Collection and Collections?
    - **Follow-up**: Is Collections a class or interface?
    - **Follow-up**: What are some utility methods in Collections class?
    - **Follow-up**: Can you create unmodifiable collections?

63. What is the hierarchy of the Collection interface?
    - **Follow-up**: What are the main sub-interfaces?
    - **Follow-up**: Where does Map fit in the hierarchy?
    - **Follow-up**: What is the Iterable interface?

64. What is the difference between List, Set, and Map?
    - **Follow-up**: Which one allows duplicates?
    - **Follow-up**: Which one maintains insertion order?
    - **Follow-up**: Which one uses key-value pairs?

65. What is ArrayList in Java?
    - **Follow-up**: What is the default capacity of ArrayList?
    - **Follow-up**: How does ArrayList grow dynamically?
    - **Follow-up**: What is the time complexity of get() and add()?

66. What is the difference between ArrayList and LinkedList?
    - **Follow-up**: Which is better for random access?
    - **Follow-up**: Which is better for insertion/deletion?
    - **Follow-up**: How are they implemented internally?

67. What is Vector in Java?
    - **Follow-up**: Is Vector synchronized?
    - **Follow-up**: What is the difference between capacity and size?
    - **Follow-up**: Is Vector still used in modern Java?

68. What is the difference between ArrayList and Vector?
    - **Follow-up**: Which one is thread-safe?
    - **Follow-up**: Which one is faster?
    - **Follow-up**: How do they grow differently?

69. What is CopyOnWriteArrayList?
    - **Follow-up**: When would you use CopyOnWriteArrayList?
    - **Follow-up**: What are the performance implications?
    - **Follow-up**: Is it suitable for write-heavy operations?

70. What is HashSet in Java?
    - **Follow-up**: How does HashSet prevent duplicates?
    - **Follow-up**: Can HashSet contain null values?
    - **Follow-up**: What is the underlying data structure?

71. What is LinkedHashSet?
    - **Follow-up**: How is it different from HashSet?
    - **Follow-up**: Does it maintain insertion order?
    - **Follow-up**: What is the performance cost of maintaining order?

72. What is TreeSet in Java?
    - **Follow-up**: How does TreeSet maintain order?
    - **Follow-up**: Can TreeSet contain null values?
    - **Follow-up**: What is the time complexity of add() operation?

73. What is the difference between HashSet and TreeSet?
    - **Follow-up**: Which one is faster?
    - **Follow-up**: Which one is sorted?
    - **Follow-up**: When would you use each?

74. What is HashMap in Java?
    - **Follow-up**: Can HashMap have duplicate keys?
    - **Follow-up**: Can HashMap have null keys and values?
    - **Follow-up**: What is the default capacity and load factor?

75. What is the internal working of HashMap?
    - **Follow-up**: What is hashing?
    - **Follow-up**: How does HashMap handle collisions?
    - **Follow-up**: What changes were made in Java 8 to HashMap?

76. What is the difference between HashMap and HashTable?
    - **Follow-up**: Which one is synchronized?
    - **Follow-up**: Can HashTable have null keys or values?
    - **Follow-up**: Which one should you use in new code?

77. What is LinkedHashMap?
    - **Follow-up**: What order does LinkedHashMap maintain?
    - **Follow-up**: How can you create an LRU cache with LinkedHashMap?
    - **Follow-up**: What is access-order vs insertion-order?

78. What is TreeMap in Java?
    - **Follow-up**: How does TreeMap maintain order?
    - **Follow-up**: What interface does TreeMap implement?
    - **Follow-up**: What is the time complexity of operations?

79. What is ConcurrentHashMap?
    - **Follow-up**: How is it different from synchronized HashMap?
    - **Follow-up**: What is segment locking?
    - **Follow-up**: Can ConcurrentHashMap have null keys or values?

80. What is the difference between HashMap and ConcurrentHashMap?
    - **Follow-up**: Which one is thread-safe?
    - **Follow-up**: What is the performance difference?
    - **Follow-up**: When would you use each?

81. What is WeakHashMap?
    - **Follow-up**: What are weak references?
    - **Follow-up**: When would you use WeakHashMap?
    - **Follow-up**: How does garbage collection affect WeakHashMap?

82. What is IdentityHashMap?
    - **Follow-up**: How does IdentityHashMap compare keys?
    - **Follow-up**: When would you use IdentityHashMap?
    - **Follow-up**: Does it use hashCode() and equals()?

83. What is the difference between Comparable and Comparator?
    - **Follow-up**: Which one uses compareTo() method?
    - **Follow-up**: Which one is a functional interface?
    - **Follow-up**: Can you use both for the same class?

84. What is the purpose of the `hashCode()` method?
    - **Follow-up**: Where is hashCode() used?
    - **Follow-up**: What should a good hashCode() method do?
    - **Follow-up**: Can two objects have the same hashCode()?

85. What is the contract between `equals()` and `hashCode()`?
    - **Follow-up**: What happens if you override equals() but not hashCode()?
    - **Follow-up**: If two objects are equal, must they have same hashCode()?
    - **Follow-up**: If two objects have same hashCode(), must they be equal?

86. What is the Iterator interface?
    - **Follow-up**: What methods does Iterator have?
    - **Follow-up**: Can you modify collection while iterating?
    - **Follow-up**: What is ConcurrentModificationException?

87. What is the difference between Iterator and ListIterator?
    - **Follow-up**: Can ListIterator traverse backwards?
    - **Follow-up**: Which collections support ListIterator?
    - **Follow-up**: Can ListIterator add elements?

88. What is the fail-fast and fail-safe iterator?
    - **Follow-up**: Which collections use fail-fast iterators?
    - **Follow-up**: Which collections use fail-safe iterators?
    - **Follow-up**: How do concurrent collections handle iteration?

89. What is the difference between `remove()` method of Collection and Iterator?
    - **Follow-up**: Why should you use Iterator.remove()?
    - **Follow-up**: What exception is thrown if you don't?
    - **Follow-up**: Can you remove elements using for-each loop?

90. What is the Queue interface and its implementations?
    - **Follow-up**: What is the difference between Queue and Deque?
    - **Follow-up**: Name some Queue implementations
    - **Follow-up**: What is PriorityQueue?

---

## Exception Handling

91. What is an exception in Java?
    - **Follow-up**: What is the difference between exception and error?
    - **Follow-up**: What happens when an exception is thrown?
    - **Follow-up**: Can you continue program execution after an exception?

92. What is exception handling?
    - **Follow-up**: Why is exception handling important?
    - **Follow-up**: What are the alternatives to exception handling?
    - **Follow-up**: Can you have too much exception handling?

93. What is the hierarchy of exception classes in Java?
    - **Follow-up**: What is the root class of exception hierarchy?
    - **Follow-up**: What is the Throwable class?
    - **Follow-up**: What are the two main branches?

94. What is the difference between checked and unchecked exceptions?
    - **Follow-up**: Which exceptions must be caught or declared?
    - **Follow-up**: What is RuntimeException?
    - **Follow-up**: Give examples of each type

95. What is the difference between Error and Exception?
    - **Follow-up**: Should you catch Errors?
    - **Follow-up**: Give examples of Errors
    - **Follow-up**: Are Errors recoverable?

96. What are the five keywords used in exception handling?
    - **Follow-up**: What is the purpose of each keyword?
    - **Follow-up**: Can you use try without catch?
    - **Follow-up**: Where can you use throws keyword?

97. What is a try-catch block?
    - **Follow-up**: Can you have try without catch?
    - **Follow-up**: What is the syntax?
    - **Follow-up**: Can you nest try-catch blocks?

98. What is a finally block?
    - **Follow-up**: When is finally executed?
    - **Follow-up**: Can you have finally without catch?
    - **Follow-up**: What is the typical use of finally?

99. When is the finally block not executed?
    - **Follow-up**: What happens if System.exit() is called?
    - **Follow-up**: What if JVM crashes?
    - **Follow-up**: What if there's an infinite loop in try?

100. What is the try-with-resources statement?
     - **Follow-up**: When was it introduced?
     - **Follow-up**: What interface must resources implement?
     - **Follow-up**: Can you have multiple resources?

101. Can we have multiple catch blocks for a single try block?
     - **Follow-up**: What is the order of catch blocks?
     - **Follow-up**: Can you catch multiple exceptions in one catch?
     - **Follow-up**: What is multi-catch (Java 7)?

102. What is exception propagation?
     - **Follow-up**: How does the call stack affect propagation?
     - **Follow-up**: What happens if no one catches the exception?
     - **Follow-up**: Can you stop exception propagation?

103. What is the difference between `throw` and `throws`?
     - **Follow-up**: Where is each keyword used?
     - **Follow-up**: Can you throw multiple exceptions?
     - **Follow-up**: Can you throw null?

104. Can we rethrow an exception?
     - **Follow-up**: Why would you rethrow an exception?
     - **Follow-up**: Does rethrowing affect the stack trace?
     - **Follow-up**: What is exception translation?

105. What is exception chaining?
     - **Follow-up**: How do you chain exceptions?
     - **Follow-up**: What is the cause in exception chaining?
     - **Follow-up**: Why is exception chaining useful?

106. How do you create a custom exception?
     - **Follow-up**: Should custom exceptions extend Exception or RuntimeException?
     - **Follow-up**: What constructors should you provide?
     - **Follow-up**: When should you create custom exceptions?

107. What is the difference between `final`, `finally`, and `finalize()`?
     - **Follow-up**: Which one is a keyword vs method?
     - **Follow-up**: Is finalize() still recommended?
     - **Follow-up**: What replaced finalize()?

108. What is a NullPointerException?
     - **Follow-up**: When does it occur?
     - **Follow-up**: How can you prevent it?
     - **Follow-up**: Is it checked or unchecked?

109. What is an ArrayIndexOutOfBoundsException?
     - **Follow-up**: When does it occur?
     - **Follow-up**: How can you prevent it?
     - **Follow-up**: Is it checked or unchecked?

110. What are some best practices for exception handling?
     - **Follow-up**: Should you catch Exception or specific exceptions?
     - **Follow-up**: Should you use exceptions for flow control?
     - **Follow-up**: What should you log in exceptions?

---

## Multithreading & Concurrency

111. What is a thread in Java?
     - **Follow-up**: How is a thread different from a process?
     - **Follow-up**: What is the main thread?
     - **Follow-up**: How many threads can a Java program have?

112. What is multithreading?
     - **Follow-up**: What is concurrency?
     - **Follow-up**: What is parallelism?
     - **Follow-up**: Is multithreading always faster?

113. What are the benefits of multithreading?
     - **Follow-up**: What are the challenges of multithreading?
     - **Follow-up**: When should you use multithreading?
     - **Follow-up**: What is the performance trade-off?

114. How can you create a thread in Java?
     - **Follow-up**: What are the two ways to create a thread?
     - **Follow-up**: Which way is better?
     - **Follow-up**: Can you use lambda expressions for threads?

115. What is the difference between extending Thread class and implementing Runnable interface?
     - **Follow-up**: Why is Runnable preferred?
     - **Follow-up**: Can you extend Thread and implement Runnable together?
     - **Follow-up**: What about the Callable interface?

116. What is the Thread class and its important methods?
     - **Follow-up**: What is the difference between sleep() and wait()?
     - **Follow-up**: What is interrupt()?
     - **Follow-up**: What is setDaemon()?

117. What is the life cycle of a thread?
     - **Follow-up**: What are the different states?
     - **Follow-up**: How do threads transition between states?
     - **Follow-up**: Can a thread go back to the runnable state?

118. What are thread states in Java?
     - **Follow-up**: What are the six thread states?
     - **Follow-up**: How do you get the current state?
     - **Follow-up**: What is the difference between WAITING and BLOCKED?

119. What is the difference between `start()` and `run()` methods?
     - **Follow-up**: What happens if you call run() directly?
     - **Follow-up**: Can you call start() twice?
     - **Follow-up**: What exception is thrown?

120. What is thread priority?
     - **Follow-up**: What is the range of thread priorities?
     - **Follow-up**: Does priority guarantee execution order?
     - **Follow-up**: What is priority inheritance?

121. What is the `sleep()` method?
     - **Follow-up**: Does sleep() release the lock?
     - **Follow-up**: Can sleep() be interrupted?
     - **Follow-up**: What exception does it throw?

122. What is the `join()` method?
     - **Follow-up**: Why would you use join()?
     - **Follow-up**: Can you specify a timeout?
     - **Follow-up**: What happens if the thread is already dead?

123. What is the `yield()` method?
     - **Follow-up**: Does yield() guarantee anything?
     - **Follow-up**: When would you use yield()?
     - **Follow-up**: Is yield() commonly used?

124. What is synchronization in Java?
     - **Follow-up**: Why do we need synchronization?
     - **Follow-up**: What is a race condition?
     - **Follow-up**: What is thread interference?

125. What is a synchronized block?
     - **Follow-up**: What object do you synchronize on?
     - **Follow-up**: Can you synchronize on primitive types?
     - **Follow-up**: What is the intrinsic lock?

126. What is a synchronized method?
     - **Follow-up**: What object is locked in synchronized instance method?
     - **Follow-up**: What about static synchronized methods?
     - **Follow-up**: Can constructors be synchronized?

127. What is the difference between synchronized method and synchronized block?
     - **Follow-up**: Which one is more flexible?
     - **Follow-up**: Which one is more efficient?
     - **Follow-up**: Can you have multiple synchronized blocks?

128. What is a static synchronized method?
     - **Follow-up**: What lock does it acquire?
     - **Follow-up**: Can static and instance synchronized methods run concurrently?
     - **Follow-up**: How is it different from synchronizing on class object?

129. What is deadlock?
     - **Follow-up**: What conditions lead to deadlock?
     - **Follow-up**: Can you detect deadlock programmatically?
     - **Follow-up**: How do you analyze deadlock?

130. How can you avoid deadlock?
     - **Follow-up**: What is lock ordering?
     - **Follow-up**: What is lock timeout?
     - **Follow-up**: What is deadlock detection?

131. What is the volatile keyword?
     - **Follow-up**: What is the visibility problem?
     - **Follow-up**: Does volatile guarantee atomicity?
     - **Follow-up**: When should you use volatile?

132. What is the difference between volatile and synchronized?
     - **Follow-up**: Which one is faster?
     - **Follow-up**: Can volatile replace synchronized?
     - **Follow-up**: Can they be used together?

133. What is thread-safe in Java?
     - **Follow-up**: How do you make a class thread-safe?
     - **Follow-up**: What are thread-safe collections?
     - **Follow-up**: What is immutability in thread safety?

134. What is the Executor framework?
     - **Follow-up**: Why was it introduced?
     - **Follow-up**: What package contains Executor framework?
     - **Follow-up**: What is the Executor interface?

135. What is ExecutorService?
     - **Follow-up**: How is it different from Executor?
     - **Follow-up**: How do you create an ExecutorService?
     - **Follow-up**: How do you shut down an ExecutorService?

136. What is ThreadPool?
     - **Follow-up**: What are the benefits of thread pooling?
     - **Follow-up**: What is thread pool size?
     - **Follow-up**: What happens when queue is full?

137. What are the types of thread pools?
     - **Follow-up**: What is FixedThreadPool?
     - **Follow-up**: What is CachedThreadPool?
     - **Follow-up**: What is ScheduledThreadPool?

138. What is the Callable interface?
     - **Follow-up**: What method does Callable have?
     - **Follow-up**: Can Callable throw checked exceptions?
     - **Follow-up**: How do you execute a Callable?

139. What is the Future interface?
     - **Follow-up**: What methods does Future have?
     - **Follow-up**: How do you get the result?
     - **Follow-up**: What is isDone() vs isCancelled()?

140. What is the difference between Runnable and Callable?
     - **Follow-up**: Which one returns a value?
     - **Follow-up**: Which one can throw exceptions?
     - **Follow-up**: When would you use each?

141. What is CountDownLatch?
     - **Follow-up**: How does it work?
     - **Follow-up**: Can you reuse CountDownLatch?
     - **Follow-up**: What is the use case?

142. What is CyclicBarrier?
     - **Follow-up**: How is it different from CountDownLatch?
     - **Follow-up**: Can you reuse CyclicBarrier?
     - **Follow-up**: What is the barrier action?

143. What is Semaphore?
     - **Follow-up**: What is it used for?
     - **Follow-up**: What is the difference between acquire() and tryAcquire()?
     - **Follow-up**: What is a binary semaphore?

144. What is the Lock interface?
     - **Follow-up**: What implementations are available?
     - **Follow-up**: What is ReentrantLock?
     - **Follow-up**: What is tryLock()?

145. What is the difference between Lock and synchronized?
     - **Follow-up**: Which one is more flexible?
     - **Follow-up**: Can you interrupt a waiting thread with Lock?
     - **Follow-up**: When should you use each?

---

## Java 8+ Features

146. What are the new features introduced in Java 8?
     - **Follow-up**: Why was Java 8 considered a major release?
     - **Follow-up**: What are the top 5 features?
     - **Follow-up**: How did Java 8 change functional programming in Java?

147. What is a lambda expression?
     - **Follow-up**: What is the syntax of a lambda?
     - **Follow-up**: What are the benefits of lambdas?
     - **Follow-up**: Can lambdas access local variables?

148. What is a functional interface?
     - **Follow-up**: How many abstract methods can a functional interface have?
     - **Follow-up**: Can functional interfaces have default methods?
     - **Follow-up**: Give examples of functional interfaces

149. What is the `@FunctionalInterface` annotation?
     - **Follow-up**: Is it mandatory to use this annotation?
     - **Follow-up**: What happens if you add two abstract methods?
     - **Follow-up**: What is the benefit of this annotation?

150. What are the built-in functional interfaces in Java 8?
     - **Follow-up**: What package contains them?
     - **Follow-up**: Name the four main categories
     - **Follow-up**: What is the java.util.function package?

151. What is the Predicate interface?
     - **Follow-up**: What method does Predicate have?
     - **Follow-up**: What does it return?
     - **Follow-up**: How do you chain Predicates?

152. What is the Function interface?
     - **Follow-up**: What method does Function have?
     - **Follow-up**: What is andThen() and compose()?
     - **Follow-up**: What is UnaryOperator?

153. What is the Consumer interface?
     - **Follow-up**: What method does Consumer have?
     - **Follow-up**: Does it return anything?
     - **Follow-up**: What is BiConsumer?

154. What is the Supplier interface?
     - **Follow-up**: What method does Supplier have?
     - **Follow-up**: Does it take any arguments?
     - **Follow-up**: When would you use Supplier?

155. What is method reference in Java 8?
     - **Follow-up**: How is it different from lambda?
     - **Follow-up**: What is the syntax?
     - **Follow-up**: When should you use method reference?

156. What are the types of method references?
     - **Follow-up**: What is static method reference?
     - **Follow-up**: What is instance method reference?
     - **Follow-up**: What is constructor reference?

157. What is the Stream API?
     - **Follow-up**: What is a stream?
     - **Follow-up**: How is stream different from collection?
     - **Follow-up**: Are streams reusable?

158. What is the difference between intermediate and terminal operations?
     - **Follow-up**: What is lazy evaluation?
     - **Follow-up**: Can you have multiple terminal operations?
     - **Follow-up**: What triggers stream processing?

159. What are some common intermediate operations?
     - **Follow-up**: What does map() do?
     - **Follow-up**: What does filter() do?
     - **Follow-up**: What is peek()?

160. What are some common terminal operations?
     - **Follow-up**: What does forEach() do?
     - **Follow-up**: What does collect() do?
     - **Follow-up**: What is the difference between findFirst() and findAny()?

161. What is the difference between `map()` and `flatMap()`?
     - **Follow-up**: When do you use flatMap()?
     - **Follow-up**: What does flatMap() return?
     - **Follow-up**: Give an example of flattening nested structures

162. What is the `filter()` method?
     - **Follow-up**: What parameter does it take?
     - **Follow-up**: Can you chain multiple filters?
     - **Follow-up**: What is the return type?

163. What is the `reduce()` method?
     - **Follow-up**: What does reduce do?
     - **Follow-up**: What is the identity parameter?
     - **Follow-up**: What is the difference between reduce() variants?

164. What is the `collect()` method?
     - **Follow-up**: What is a Collector?
     - **Follow-up**: What are common Collectors?
     - **Follow-up**: How do you collect to List, Set, or Map?

165. What is the Optional class?
     - **Follow-up**: Why was Optional introduced?
     - **Follow-up**: Does Optional prevent NullPointerException?
     - **Follow-up**: Should you use Optional for fields?

166. How do you create an Optional object?
     - **Follow-up**: What is Optional.of() vs Optional.ofNullable()?
     - **Follow-up**: What is Optional.empty()?
     - **Follow-up**: What happens if you pass null to Optional.of()?

167. What is the purpose of `orElse()` and `orElseGet()` methods?
     - **Follow-up**: What do they do?
     - **Follow-up**: What about orElseThrow()?
     - **Follow-up**: How do they help with null handling?

168. What is the difference between `orElse()` and `orElseGet()`?
     - **Follow-up**: Which one is eagerly evaluated?
     - **Follow-up**: Which one is better for expensive operations?
     - **Follow-up**: Give an example of when to use each

169. What is the default method in interface?
     - **Follow-up**: Why were default methods added?
     - **Follow-up**: Can you override a default method?
     - **Follow-up**: What is the diamond problem with default methods?

170. What is the Date and Time API (java.time package)?
     - **Follow-up**: Why was the old Date API replaced?
     - **Follow-up**: What are the main classes?
     - **Follow-up**: Is it thread-safe?

171. What is LocalDate, LocalTime, and LocalDateTime?
     - **Follow-up**: What is the difference between them?
     - **Follow-up**: Are they mutable or immutable?
     - **Follow-up**: How do you get the current date/time?

172. What is the difference between Date and LocalDate?
     - **Follow-up**: Which one is mutable?
     - **Follow-up**: Which one is thread-safe?
     - **Follow-up**: Should you use Date in new code?

173. What are new features in Java 9?
     - **Follow-up**: What is the module system?
     - **Follow-up**: What are private methods in interfaces?
     - **Follow-up**: What is JShell?

174. What are new features in Java 10?
     - **Follow-up**: What is local variable type inference (var)?
     - **Follow-up**: What is copyOf() for collections?
     - **Follow-up**: What performance improvements were made?

175. What are new features in Java 11 and beyond?
     - **Follow-up**: What new String methods were added?
     - **Follow-up**: What is the new HttpClient API?
     - **Follow-up**: What are records (Java 14+)?

---

## String & Immutability

176. What is String in Java?
     - **Follow-up**: Is String a primitive or object?
     - **Follow-up**: What class does String belong to?
     - **Follow-up**: Is String final?

177. Why is String immutable in Java?
     - **Follow-up**: What are the benefits of immutability?
     - **Follow-up**: How does immutability affect thread safety?
     - **Follow-up**: Can you change a String's value?

178. What is the String pool?
     - **Follow-up**: Where is String pool located?
     - **Follow-up**: How does String pool save memory?
     - **Follow-up**: What is the intern() method?

179. What is the difference between String, StringBuilder, and StringBuffer?
     - **Follow-up**: Which one is mutable?
     - **Follow-up**: Which one is thread-safe?
     - **Follow-up**: Which one is fastest?

180. When should you use StringBuilder vs StringBuffer?
     - **Follow-up**: Which one should you use in single-threaded applications?
     - **Follow-up**: What is the performance difference?
     - **Follow-up**: Are they both mutable?

181. How do you create a String object?
     - **Follow-up**: What are the different ways?
     - **Follow-up**: How many objects are created with new String("test")?
     - **Follow-up**: What is the difference in memory allocation?

182. What is the difference between `new String()` and string literal?
     - **Follow-up**: Which one creates object in heap?
     - **Follow-up**: Which one goes to String pool?
     - **Follow-up**: Which one is more efficient?

183. What is String interning?
     - **Follow-up**: What does intern() method do?
     - **Follow-up**: When should you use intern()?
     - **Follow-up**: What is the performance impact?

184. What are important methods of String class?
     - **Follow-up**: What does length() return?
     - **Follow-up**: What is charAt()?
     - **Follow-up**: What is indexOf()?

185. How do you compare two strings?
     - **Follow-up**: Should you use == or equals()?
     - **Follow-up**: What is equalsIgnoreCase()?
     - **Follow-up**: How do you compare strings lexicographically?

186. What is the difference between `==` and `.equals()` for strings?
     - **Follow-up**: What does == compare?
     - **Follow-up**: What does equals() compare?
     - **Follow-up**: When would == return true?

187. How do you reverse a string?
     - **Follow-up**: Can you reverse a String directly?
     - **Follow-up**: What classes can you use?
     - **Follow-up**: Write a method to reverse a string

188. How do you check if a string is palindrome?
     - **Follow-up**: What is a palindrome?
     - **Follow-up**: Write code to check palindrome
     - **Follow-up**: How do you handle case sensitivity?

189. How do you count occurrences of a character in a string?
     - **Follow-up**: Write code to count occurrences
     - **Follow-up**: How do you count words in a string?
     - **Follow-up**: Can you use Java 8 streams?

190. What is the `substring()` method?
     - **Follow-up**: What parameters does it take?
     - **Follow-up**: Does it modify the original string?
     - **Follow-up**: What exception can it throw?

191. What is the `split()` method?
     - **Follow-up**: What does split() return?
     - **Follow-up**: What parameter does it take?
     - **Follow-up**: How do you split by regex?

192. What is the `replace()` vs `replaceAll()` method?
     - **Follow-up**: Which one uses regex?
     - **Follow-up**: What is replaceFirst()?
     - **Follow-up**: Do they modify the original string?

193. How do you convert a string to uppercase/lowercase?
     - **Follow-up**: What methods do you use?
     - **Follow-up**: Do they modify the original string?
     - **Follow-up**: Are they locale-sensitive?

194. How do you remove leading and trailing spaces from a string?
     - **Follow-up**: What method do you use?
     - **Follow-up**: What is the difference between trim() and strip()?
     - **Follow-up**: What about stripLeading() and stripTrailing()?

195. What is the `compareTo()` method?
     - **Follow-up**: What does it return?
     - **Follow-up**: How does it compare strings?
     - **Follow-up**: What interface requires compareTo()?

---

## Memory Management & JVM

196. What is the JVM architecture?
     - **Follow-up**: What are the main components?
     - **Follow-up**: What is the class loader subsystem?
     - **Follow-up**: What is the execution engine?

197. What are the components of JVM?
     - **Follow-up**: What is the runtime data area?
     - **Follow-up**: What is the JIT compiler?
     - **Follow-up**: What is the garbage collector?

198. What is the difference between heap and stack memory?
     - **Follow-up**: Which one is faster?
     - **Follow-up**: Which one is shared among threads?
     - **Follow-up**: What causes StackOverflowError vs OutOfMemoryError?

199. What is stored in heap memory?
     - **Follow-up**: Where are objects created?
     - **Follow-up**: Where are instance variables stored?
     - **Follow-up**: What about static variables?

200. What is stored in stack memory?
     - **Follow-up**: Where are local variables stored?
     - **Follow-up**: Where are method calls stored?
     - **Follow-up**: What is a stack frame?

201. What is garbage collection in Java?
     - **Follow-up**: Why is garbage collection needed?
     - **Follow-up**: Can you force garbage collection?
     - **Follow-up**: What objects are eligible for GC?

202. How does garbage collection work?
     - **Follow-up**: What is mark and sweep?
     - **Follow-up**: What are GC roots?
     - **Follow-up**: What is generational garbage collection?

203. What are the types of garbage collectors?
     - **Follow-up**: What is Serial GC?
     - **Follow-up**: What is Parallel GC?
     - **Follow-up**: What is G1 GC?

204. What is the `finalize()` method?
     - **Follow-up**: When is finalize() called?
     - **Follow-up**: Is finalize() guaranteed to run?
     - **Follow-up**: Is finalize() deprecated?

205. What is the difference between final, finally, and finalize?
     - **Follow-up**: Which one is a keyword?
     - **Follow-up**: Which one is a method?
     - **Follow-up**: Where is each used?

206. What is a memory leak in Java?
     - **Follow-up**: Can Java have memory leaks?
     - **Follow-up**: What are common causes?
     - **Follow-up**: How do you detect memory leaks?

207. How can you prevent memory leaks?
     - **Follow-up**: What are best practices?
     - **Follow-up**: How do listeners cause memory leaks?
     - **Follow-up**: What about static references?

208. What is the purpose of `System.gc()`?
     - **Follow-up**: Does it guarantee garbage collection?
     - **Follow-up**: Should you call it in production?
     - **Follow-up**: What are the alternatives?

209. What are strong, weak, soft, and phantom references?
     - **Follow-up**: Which is the default reference type?
     - **Follow-up**: When are weak references collected?
     - **Follow-up**: What is the use of phantom references?

210. What is the PermGen space (before Java 8)?
     - **Follow-up**: What was stored in PermGen?
     - **Follow-up**: What error occurred when it was full?
     - **Follow-up**: Why was it removed?

211. What is Metaspace (Java 8+)?
     - **Follow-up**: How is it different from PermGen?
     - **Follow-up**: Where is Metaspace located?
     - **Follow-up**: Is it limited in size?

212. What is class loading in Java?
     - **Follow-up**: When are classes loaded?
     - **Follow-up**: What is dynamic class loading?
     - **Follow-up**: What is lazy loading?

213. What is the ClassLoader hierarchy?
     - **Follow-up**: What is the Bootstrap ClassLoader?
     - **Follow-up**: What is the Extension ClassLoader?
     - **Follow-up**: What is the Application ClassLoader?

214. What is the difference between ClassNotFoundException and NoClassDefFoundError?
     - **Follow-up**: Which one is a checked exception?
     - **Follow-up**: When does each occur?
     - **Follow-up**: How do you fix each?

215. What is reflection in Java?
     - **Follow-up**: What package provides reflection?
     - **Follow-up**: What is the Class object?
     - **Follow-up**: How do you get a Class object?

216. What are the uses of reflection?
     - **Follow-up**: Can you invoke private methods?
     - **Follow-up**: Can you access private fields?
     - **Follow-up**: What frameworks use reflection?

217. What are the drawbacks of reflection?
     - **Follow-up**: What is the performance impact?
     - **Follow-up**: What security concerns exist?
     - **Follow-up**: Does it break encapsulation?

218. What is the purpose of the `clone()` method?
     - **Follow-up**: What interface must be implemented?
     - **Follow-up**: What exception can it throw?
     - **Follow-up**: Should you use clone()?

219. What is shallow copy vs deep copy?
     - **Follow-up**: What does clone() do by default?
     - **Follow-up**: How do you implement deep copy?
     - **Follow-up**: What about nested objects?

220. What is the difference between `==` and `equals()` in terms of memory?
     - **Follow-up**: What does == compare?
     - **Follow-up**: What does equals() compare?
     - **Follow-up**: Can two objects with same content have different addresses?

---

## Design Patterns

221. What are design patterns?
     - **Follow-up**: Why are design patterns important?
     - **Follow-up**: Who introduced design patterns?
     - **Follow-up**: Are design patterns language-specific?

222. What are the types of design patterns?
     - **Follow-up**: What are creational patterns?
     - **Follow-up**: What are structural patterns?
     - **Follow-up**: What are behavioral patterns?

223. What is the Singleton pattern?
     - **Follow-up**: What problem does it solve?
     - **Follow-up**: How do you implement it?
     - **Follow-up**: What are the drawbacks?

224. How do you implement thread-safe Singleton?
     - **Follow-up**: What is double-checked locking?
     - **Follow-up**: What is Bill Pugh Singleton?
     - **Follow-up**: Can you use enum for Singleton?

225. What is the Factory pattern?
     - **Follow-up**: What problem does it solve?
     - **Follow-up**: How is it implemented?
     - **Follow-up**: Give a real-world example

226. What is the Abstract Factory pattern?
     - **Follow-up**: How is it different from Factory pattern?
     - **Follow-up**: When would you use it?
     - **Follow-up**: What is a factory of factories?

227. What is the Builder pattern?
     - **Follow-up**: What problem does it solve?
     - **Follow-up**: How is it different from constructor?
     - **Follow-up**: What is method chaining?

228. What is the Prototype pattern?
     - **Follow-up**: What problem does it solve?
     - **Follow-up**: How is it related to clone()?
     - **Follow-up**: When would you use it?

229. What is the Adapter pattern?
     - **Follow-up**: What problem does it solve?
     - **Follow-up**: Give a real-world example
     - **Follow-up**: How is it implemented?

230. What is the Decorator pattern?
     - **Follow-up**: What problem does it solve?
     - **Follow-up**: How is it different from inheritance?
     - **Follow-up**: Give an example from Java API

231. What is the Proxy pattern?
     - **Follow-up**: What are the types of proxies?
     - **Follow-up**: What is a virtual proxy?
     - **Follow-up**: How is it different from Decorator?

232. What is the Observer pattern?
     - **Follow-up**: What problem does it solve?
     - **Follow-up**: What is publish-subscribe?
     - **Follow-up**: Give an example from Java

233. What is the Strategy pattern?
     - **Follow-up**: What problem does it solve?
     - **Follow-up**: How is it implemented?
     - **Follow-up**: How does it relate to functional interfaces?

234. What is the Template Method pattern?
     - **Follow-up**: What problem does it solve?
     - **Follow-up**: How is it implemented?
     - **Follow-up**: What is the Hollywood Principle?

235. What is the Command pattern?
     - **Follow-up**: What problem does it solve?
     - **Follow-up**: What are the components?
     - **Follow-up**: How does it support undo/redo?

236. What is the Iterator pattern?
     - **Follow-up**: What problem does it solve?
     - **Follow-up**: How is it implemented in Java?
     - **Follow-up**: What is the Iterator interface?

237. What is the State pattern?
     - **Follow-up**: What problem does it solve?
     - **Follow-up**: How is it different from Strategy?
     - **Follow-up**: Give a real-world example

238. What is the Chain of Responsibility pattern?
     - **Follow-up**: What problem does it solve?
     - **Follow-up**: How is it implemented?
     - **Follow-up**: Give an example

239. What is the Facade pattern?
     - **Follow-up**: What problem does it solve?
     - **Follow-up**: How does it simplify complexity?
     - **Follow-up**: Give an example

240. What is dependency injection?
     - **Follow-up**: What are the types of DI?
     - **Follow-up**: How does it promote loose coupling?
     - **Follow-up**: What frameworks support DI?

---

## JDBC & Database

241. What is JDBC?
     - **Follow-up**: What does JDBC stand for?
     - **Follow-up**: Why do we need JDBC?
     - **Follow-up**: What package contains JDBC classes?

242. What are the components of JDBC?
     - **Follow-up**: What is the JDBC API?
     - **Follow-up**: What is the JDBC Driver API?
     - **Follow-up**: What are the main interfaces?

243. What is the JDBC driver?
     - **Follow-up**: What does a driver do?
     - **Follow-up**: How do you load a driver?
     - **Follow-up**: Is Class.forName() still needed?

244. What are the types of JDBC drivers?
     - **Follow-up**: What is Type 1 driver?
     - **Follow-up**: What is Type 4 driver?
     - **Follow-up**: Which type is most commonly used?

245. What are the steps to connect to a database using JDBC?
     - **Follow-up**: How do you load the driver?
     - **Follow-up**: How do you get a connection?
     - **Follow-up**: How do you close resources?

246. What is DriverManager?
     - **Follow-up**: What is its purpose?
     - **Follow-up**: What is getConnection() method?
     - **Follow-up**: How does it find the right driver?

247. What is Connection interface?
     - **Follow-up**: What methods does it have?
     - **Follow-up**: How do you create statements?
     - **Follow-up**: How do you manage transactions?

248. What is Statement interface?
     - **Follow-up**: What is it used for?
     - **Follow-up**: What are its limitations?
     - **Follow-up**: Is it prone to SQL injection?

249. What is PreparedStatement?
     - **Follow-up**: How is it different from Statement?
     - **Follow-up**: How do you set parameters?
     - **Follow-up**: Why is it more secure?

250. What is the difference between Statement and PreparedStatement?
     - **Follow-up**: Which one is precompiled?
     - **Follow-up**: Which one is faster?
     - **Follow-up**: Which one prevents SQL injection?

251. What is CallableStatement?
     - **Follow-up**: What is it used for?
     - **Follow-up**: How do you call stored procedures?
     - **Follow-up**: How do you handle OUT parameters?

252. What is ResultSet?
     - **Follow-up**: What does it represent?
     - **Follow-up**: How do you iterate through it?
     - **Follow-up**: How do you get data from it?

253. What are the types of ResultSet?
     - **Follow-up**: What is TYPE_FORWARD_ONLY?
     - **Follow-up**: What is TYPE_SCROLL_INSENSITIVE?
     - **Follow-up**: What is CONCUR_UPDATABLE?

254. What is the difference between `executeQuery()`, `executeUpdate()`, and `execute()`?
     - **Follow-up**: Which one is for SELECT?
     - **Follow-up**: Which one is for INSERT/UPDATE/DELETE?
     - **Follow-up**: When do you use execute()?

255. What is connection pooling?
     - **Follow-up**: Why is it important?
     - **Follow-up**: How does it improve performance?
     - **Follow-up**: What libraries provide connection pooling?

---

## Serialization & I/O

256. What is serialization in Java?
     - **Follow-up**: Why do we need serialization?
     - **Follow-up**: What is the process?
     - **Follow-up**: Where is serialization used?

257. What is deserialization?
     - **Follow-up**: What is the reverse process?
     - **Follow-up**: What classes are involved?
     - **Follow-up**: What exceptions can occur?

258. What is the Serializable interface?
     - **Follow-up**: Is it a marker interface?
     - **Follow-up**: Does it have methods?
     - **Follow-up**: What happens if you don't implement it?

259. What is the purpose of `serialVersionUID`?
     - **Follow-up**: Why is it important?
     - **Follow-up**: What happens if it doesn't match?
     - **Follow-up**: Should you always declare it?

260. What is the `transient` keyword?
     - **Follow-up**: What fields should be transient?
     - **Follow-up**: What happens to transient fields during deserialization?
     - **Follow-up**: Can static fields be serialized?

261. What happens if a parent class is serializable but child class is not?
     - **Follow-up**: Is the child class automatically serializable?
     - **Follow-up**: What about the reverse scenario?
     - **Follow-up**: What fields are serialized?

262. What is Externalization?
     - **Follow-up**: What interface is used?
     - **Follow-up**: What methods must be implemented?
     - **Follow-up**: When would you use it?

263. What is the difference between Serializable and Externalizable?
     - **Follow-up**: Which one gives more control?
     - **Follow-up**: Which one is faster?
     - **Follow-up**: Which one handles inheritance better?

264. What are the I/O streams in Java?
     - **Follow-up**: What package contains I/O classes?
     - **Follow-up**: What is an InputStream?
     - **Follow-up**: What is an OutputStream?

265. What is the difference between byte stream and character stream?
     - **Follow-up**: Which one is for binary data?
     - **Follow-up**: Which one is for text data?
     - **Follow-up**: Give examples of each

266. What is BufferedReader and BufferedWriter?
     - **Follow-up**: Why use buffered streams?
     - **Follow-up**: How do they improve performance?
     - **Follow-up**: What is the default buffer size?

267. What is FileInputStream and FileOutputStream?
     - **Follow-up**: What are they used for?
     - **Follow-up**: How do you read a file?
     - **Follow-up**: Do you need to close them?

268. What is the difference between FileReader and FileInputStream?
     - **Follow-up**: Which one is for text files?
     - **Follow-up**: Which one is for binary files?
     - **Follow-up**: Which one handles character encoding?

269. What is the NIO package?
     - **Follow-up**: What does NIO stand for?
     - **Follow-up**: What are the main components?
     - **Follow-up**: What is a Channel?

270. What is the difference between IO and NIO?
     - **Follow-up**: Which one is blocking?
     - **Follow-up**: Which one is faster?
     - **Follow-up**: What are Buffers and Channels?

---

## Advanced Java Concepts

271. What is the difference between abstract class and interface (detailed)?
     - **Follow-up**: Can abstract class have concrete methods?
     - **Follow-up**: Can interface have instance variables?
     - **Follow-up**: When should you use each?

272. What is covariant return type?
     - **Follow-up**: When was it introduced?
     - **Follow-up**: Give an example
     - **Follow-up**: What are the benefits?

273. What is marker interface?
     - **Follow-up**: Why is it called marker?
     - **Follow-up**: Does it have methods?
     - **Follow-up**: Are they still used?

274. What are some examples of marker interfaces?
     - **Follow-up**: Is Serializable a marker interface?
     - **Follow-up**: Is Cloneable a marker interface?
     - **Follow-up**: What about Remote?

275. What is the Cloneable interface?
     - **Follow-up**: What does it indicate?
     - **Follow-up**: What happens if you don't implement it?
     - **Follow-up**: Is it controversial?

276. What is type casting in Java?
     - **Follow-up**: What are the types of casting?
     - **Follow-up**: What is widening vs narrowing?
     - **Follow-up**: When is casting automatic?

277. What is upcasting and downcasting?
     - **Follow-up**: Which one is implicit?
     - **Follow-up**: Which one can throw ClassCastException?
     - **Follow-up**: When would you use each?

278. What is generics in Java?
     - **Follow-up**: Why were generics introduced?
     - **Follow-up**: What are the benefits?
     - **Follow-up**: Can you use primitives with generics?

279. What is type erasure?
     - **Follow-up**: When does type erasure happen?
     - **Follow-up**: Why was it implemented this way?
     - **Follow-up**: What are the implications?

280. What is bounded type parameter?
     - **Follow-up**: What is upper bound?
     - **Follow-up**: What is the syntax?
     - **Follow-up**: Can you have multiple bounds?

281. What are wildcard types in generics?
     - **Follow-up**: What is unbounded wildcard?
     - **Follow-up**: What is bounded wildcard?
     - **Follow-up**: When do you use wildcards?

282. What is the difference between `<? extends T>` and `<? super T>`?
     - **Follow-up**: Which one is upper bound?
     - **Follow-up**: Which one is lower bound?
     - **Follow-up**: What is PECS principle?

283. What is enum in Java?
     - **Follow-up**: How is enum different from constants?
     - **Follow-up**: Can enum have constructors?
     - **Follow-up**: Can enum have methods?

284. Can enum implement an interface?
     - **Follow-up**: Can enum extend a class?
     - **Follow-up**: Give an example
     - **Follow-up**: Why would you do this?

285. What is annotation in Java?
     - **Follow-up**: What are annotations used for?
     - **Follow-up**: How are they processed?
     - **Follow-up**: What is retention policy?

286. What are built-in annotations in Java?
     - **Follow-up**: What is @Override?
     - **Follow-up**: What is @FunctionalInterface?
     - **Follow-up**: What is @SafeVarargs?

287. How do you create custom annotations?
     - **Follow-up**: What is @interface?
     - **Follow-up**: What are meta-annotations?
     - **Follow-up**: What is @Target and @Retention?

288. What is the difference between `@Override` and `@Overload`?
     - **Follow-up**: Does @Overload exist?
     - **Follow-up**: What does @Override check?
     - **Follow-up**: Is @Override mandatory?

289. What is the `@Deprecated` annotation?
     - **Follow-up**: When should you use it?
     - **Follow-up**: What happens when you use deprecated code?
     - **Follow-up**: Should you remove deprecated code?

290. What is the `@SuppressWarnings` annotation?
     - **Follow-up**: When should you use it?
     - **Follow-up**: What warnings can you suppress?
     - **Follow-up**: Is it a good practice?

291. What is the difference between `Comparable` and `Comparator` (detailed)?
     - **Follow-up**: Which one modifies the class?
     - **Follow-up**: Which one allows multiple sorting?
     - **Follow-up**: Can you use both together?

292. What is the diamond problem?
     - **Follow-up**: When does it occur?
     - **Follow-up**: How does Java solve it?
     - **Follow-up**: What about default methods?

293. What is method hiding in Java?
     - **Follow-up**: How is it different from overriding?
     - **Follow-up**: When does it occur?
     - **Follow-up**: Give an example

294. What is the difference between method hiding and method overriding?
     - **Follow-up**: Which one is compile-time?
     - **Follow-up**: Which one is runtime?
     - **Follow-up**: Which one applies to static methods?

295. What is the `strictfp` keyword?
     - **Follow-up**: What does it do?
     - **Follow-up**: When would you use it?
     - **Follow-up**: Is it commonly used?

296. What is the `native` keyword?
     - **Follow-up**: What does it indicate?
     - **Follow-up**: What language is typically used?
     - **Follow-up**: When would you use it?

297. What is JNI (Java Native Interface)?
     - **Follow-up**: What is it used for?
     - **Follow-up**: How do you call native code?
     - **Follow-up**: What are the disadvantages?

298. What is the difference between pass by value and pass by reference in Java?
     - **Follow-up**: Does Java pass objects by reference?
     - **Follow-up**: What exactly is passed?
     - **Follow-up**: Why is this confusing?

299. Does Java support operator overloading?
     - **Follow-up**: Why not?
     - **Follow-up**: Are there any exceptions?
     - **Follow-up**: How does C++ differ?

300. What are some best practices for writing clean Java code?
     - **Follow-up**: What naming conventions should you follow?
     - **Follow-up**: How do you handle exceptions properly?
     - **Follow-up**: What SOLID principles should you know?

---

## Additional Tips for Interview Preparation

### How to Answer These Questions:
1. **Start with a clear definition** - Give a concise explanation
2. **Provide examples** - Use code snippets when relevant
3. **Explain use cases** - When and why to use a feature
4. **Mention pros and cons** - Show balanced understanding
5. **Connect concepts** - Relate to other Java features
6. **Be honest** - If you don't know, say so and explain your approach to learning it

### Study Approach:
- **Basics First**: Master questions 1-30 thoroughly
- **OOP Concepts**: Questions 31-60 are fundamental
- **Collections**: Questions 61-90 are very commonly asked
- **Multithreading**: Questions 111-145 are crucial for senior positions
- **Java 8+**: Questions 146-175 are increasingly important
- **Design Patterns**: Questions 221-240 show architectural thinking

### Interview Level Guide:
- **Entry Level (0-2 years)**: Focus on questions 1-110, 176-195
- **Mid Level (2-5 years)**: Focus on questions 1-195, 221-240, 271-300
- **Senior Level (5+ years)**: All questions, with emphasis on 111-145, 196-220, 221-240

---

## Common Interview Pitfalls to Avoid

### Technical Mistakes:
1. **Confusing `==` with `.equals()`** - Always explain the difference clearly
2. **Not understanding the difference between String, StringBuilder, and StringBuffer**
3. **Mixing up method overloading and overriding**
4. **Not knowing when to use ArrayList vs LinkedList**
5. **Confusing checked and unchecked exceptions**
6. **Not understanding thread safety and synchronization properly**
7. **Misunderstanding how HashMap works internally**
8. **Not knowing the difference between abstract class and interface**
9. **Confusing Comparable and Comparator**
10. **Not understanding Java pass-by-value behavior**

### Communication Mistakes:
1. **Being too vague** - Give specific examples and details
2. **Not asking clarifying questions** - Always understand the question first
3. **Jumping to code without explaining logic** - Explain your approach first
4. **Not admitting when you don't know** - It's better to be honest
5. **Not relating to real-world scenarios** - Connect theory to practice

---

## Hot Topics & Trending Questions

### Frequently Asked in Recent Interviews:
1. Java 8 features (Streams, Lambda, Optional)
2. Microservices architecture and Spring Boot
3. REST API design principles
4. Multithreading and concurrency utilities
5. JVM internals and memory management
6. Design patterns implementation
7. Exception handling best practices
8. Collections Framework deep dive
9. Immutability and thread safety
10. Performance optimization techniques

### Trending Technologies (Good to Know):
- **Spring Framework & Spring Boot**
- **Reactive Programming (Project Reactor, RxJava)**
- **Containerization (Docker, Kubernetes)**
- **Cloud Platforms (AWS, Azure, GCP)**
- **Message Queues (Kafka, RabbitMQ)**
- **Microservices Patterns**
- **CI/CD and DevOps practices**
- **Testing frameworks (JUnit, Mockito)**

---

## Coding Interview Preparation

### Common Coding Questions Categories:
1. **String Manipulation**
   - Reverse a string
   - Check palindrome
   - Find duplicates
   - Anagram detection

2. **Array & Collections**
   - Find missing number
   - Remove duplicates
   - Array rotation
   - Two sum problem

3. **Sorting & Searching**
   - Binary search implementation
   - Custom sorting with Comparator
   - Find kth largest element
   - Merge sorted arrays

4. **Recursion**
   - Fibonacci series
   - Factorial calculation
   - Tower of Hanoi
   - Tree traversals

5. **Data Structures**
   - Implement Stack/Queue
   - LinkedList operations
   - Binary Tree problems
   - HashMap implementation

### Tips for Coding Rounds:
- **Think out loud** - Explain your thought process
- **Start with examples** - Test with sample inputs
- **Consider edge cases** - Null, empty, negative numbers
- **Analyze time & space complexity** - Big O notation
- **Write clean code** - Proper naming, formatting
- **Test your code** - Walk through with examples

---

## System Design Questions (For Senior Roles)

### Common System Design Topics:
1. Design a URL shortener (like bit.ly)
2. Design a cache system (LRU cache)
3. Design a rate limiter
4. Design a parking lot system
5. Design an e-commerce system
6. Design a notification service
7. Design a file sharing system
8. Design a chat application
9. Design a search autocomplete
10. Design a payment gateway

### Key Considerations:
- **Scalability** - Horizontal vs Vertical scaling
- **Performance** - Caching, CDN, load balancing
- **Availability** - Redundancy, failover
- **Consistency** - CAP theorem, eventual consistency
- **Security** - Authentication, authorization, encryption
- **Database design** - SQL vs NoSQL, sharding, replication

---

## Behavioral Questions to Prepare

### Common Questions:
1. Tell me about yourself and your Java experience
2. Describe a challenging bug you fixed
3. How do you stay updated with Java technologies?
4. Tell me about a time you optimized code performance
5. How do you handle code reviews?
6. Describe your experience with agile/scrum
7. How do you approach learning new technologies?
8. Tell me about a time you had a conflict with a team member
9. What's your experience with production issues?
10. Why do you want to work here?

### STAR Method (Situation, Task, Action, Result):
- **Situation**: Describe the context
- **Task**: Explain the challenge
- **Action**: Detail what you did
- **Result**: Share the outcome and learnings

---

## Quick Reference - Most Critical Topics

### Must Know Before Any Java Interview:
1. ✅ **OOP Principles** - Encapsulation, Inheritance, Polymorphism, Abstraction
2. ✅ **Collections** - ArrayList, HashMap, HashSet and their internals
3. ✅ **Exception Handling** - Checked vs Unchecked, try-catch-finally
4. ✅ **String** - Immutability, String pool, StringBuilder
5. ✅ **Multithreading** - Thread creation, synchronization, volatile
6. ✅ **Java 8 Features** - Lambda, Streams, Optional, Functional interfaces
7. ✅ **Memory Management** - Heap vs Stack, Garbage Collection
8. ✅ **Abstract Class vs Interface** - Differences and when to use each
9. ✅ **Equals and HashCode** - Contract and implementation
10. ✅ **Design Patterns** - Singleton, Factory, Observer

### Red Flags to Avoid:
- ❌ Not knowing basic OOP concepts
- ❌ Unable to explain HashMap internal working
- ❌ Confusion about checked vs unchecked exceptions
- ❌ Not familiar with Java 8+ features
- ❌ Poor understanding of multithreading
- ❌ Unable to write basic code
- ❌ Not knowing difference between == and equals()
- ❌ Cannot explain your past projects clearly

---

## Practice Resources

### Online Platforms:
- **LeetCode** - Coding problems with Java solutions
- **HackerRank** - Java challenges and tutorials
- **CodeSignal** - Interview practice platform
- **InterviewBit** - Topic-wise interview preparation
- **GeeksforGeeks** - Comprehensive Java tutorials

### Books to Read:
- **Effective Java** by Joshua Bloch
- **Java Concurrency in Practice** by Brian Goetz
- **Head First Design Patterns** by Freeman & Freeman
- **Clean Code** by Robert Martin
- **Core Java Volume I & II** by Cay Horstmann

### Mock Interview Tips:
1. Practice with friends or colleagues
2. Record yourself answering questions
3. Time yourself for coding problems
4. Use online mock interview platforms
5. Get feedback on your communication style

---

## Day-Before Checklist

### Things to Review:
- [ ] Core Java concepts (OOP, Collections, Exceptions)
- [ ] Recent projects and their technical details
- [ ] Company's technology stack
- [ ] Java 8/11/17 features
- [ ] Design patterns you've used
- [ ] Common algorithms and data structures
- [ ] SQL queries (if applicable)
- [ ] Questions to ask the interviewer

### Practical Preparation:
- [ ] Test your internet connection (for remote interviews)
- [ ] Prepare your IDE or coding environment
- [ ] Have a notepad and pen ready
- [ ] Dress appropriately
- [ ] Plan to arrive 10-15 minutes early
- [ ] Prepare 3-5 questions to ask the interviewer
- [ ] Get a good night's sleep

### Questions to Ask the Interviewer:
1. What does a typical day look like for this role?
2. What technologies and frameworks does the team use?
3. How does the team handle code reviews?
4. What are the biggest challenges the team is facing?
5. What opportunities are there for learning and growth?
6. Can you tell me about the team structure?
7. What's the deployment process like?
8. How do you measure success in this role?

---

## Final Words of Advice

### Remember:
- **Interviews are two-way** - You're also evaluating them
- **It's okay to not know everything** - Show willingness to learn
- **Communication is key** - Explain your thought process
- **Stay calm and confident** - Take deep breaths if needed
- **Learn from each interview** - Note questions you struggled with
- **Follow up** - Send a thank you email after the interview

### Growth Mindset:
- Every interview is a learning opportunity
- Rejection doesn't mean you're not good enough
- Keep practicing and improving
- Stay updated with latest Java developments
- Build real projects to strengthen your skills
- Join Java communities and forums
- Contribute to open source when possible

---

**Good luck with your Java interview preparation! You've got this! 🚀**

*Remember: This document contains 300 main questions with 900 follow-ups. Take your time, practice regularly, and don't try to memorize everything. Understanding concepts is more important than rote learning.*

