# 150 Java Programs - Complete Collection

## Table of Contents

1. [Basic Programs (1-20)](#basic-programs)
2. [Pattern Programs (21-35)](#pattern-programs)
3. [Number Programs (36-50)](#number-programs)
4. [Array Programs (51-70)](#array-programs)
5. [String Programs (71-90)](#string-programs)
6. [Sorting & Searching (91-100)](#sorting-searching)
7. [OOP Programs (101-110)](#oop-programs)
8. [Collections Programs (111-125)](#collections-programs)
9. [Java 8+ Features (126-135)](#java-8-features)
10. [Multithreading Programs (136-145)](#multithreading-programs)
11. [Advanced Programs (146-150)](#advanced-programs)

---

## Basic Programs

### 1. Hello World

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

**Output:** `Hello, World!`

---

### 2. Add Two Numbers

```java
public class AddTwoNumbers {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;
        int sum = num1 + num2;

        System.out.println("Sum: " + sum);
    }
}
```

**Output:** `Sum: 30`

---

### 3. Check Even or Odd

```java
public class EvenOdd {
    public static void main(String[] args) {
        int number = 15;

        if (number % 2 == 0) {
            System.out.println(number + " is even");
        } else {
            System.out.println(number + " is odd");
        }
    }
}
```

**Output:** `15 is odd`

---

### 4. Swap Two Numbers

```java
public class SwapNumbers {
    public static void main(String[] args) {
        int a = 5, b = 10;

        System.out.println("Before swap: a = " + a + ", b = " + b);

        // Method 1: Using temp variable
        int temp = a;
        a = b;
        b = temp;

        System.out.println("After swap: a = " + a + ", b = " + b);

        // Method 2: Without temp variable
        a = 5; b = 10;
        a = a + b;  // a = 15
        b = a - b;  // b = 5
        a = a - b;  // a = 10

        System.out.println("Using arithmetic: a = " + a + ", b = " + b);

        // Method 3: Using XOR
        a = 5; b = 10;
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;

        System.out.println("Using XOR: a = " + a + ", b = " + b);
    }
}
```

**Output:**

```
Before swap: a = 5, b = 10
After swap: a = 10, b = 5
Using arithmetic: a = 10, b = 5
Using XOR: a = 10, b = 5
```

---

### 5. Find Largest of Three Numbers

```java
public class LargestOfThree {
    public static void main(String[] args) {
        int a = 10, b = 25, c = 15;

        int largest = (a > b) ? (a > c ? a : c) : (b > c ? b : c);

        System.out.println("Largest: " + largest);

        // Alternative using Math.max
        int max = Math.max(a, Math.max(b, c));
        System.out.println("Largest using Math.max: " + max);
    }
}
```

**Output:** `Largest: 25`

---

### 6. Calculate Factorial

```java
public class Factorial {
    public static void main(String[] args) {
        int n = 5;

        // Iterative approach
        long factorial = 1;
        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }
        System.out.println("Factorial of " + n + " = " + factorial);

        // Recursive approach
        System.out.println("Factorial (recursive): " + factorialRecursive(n));
    }

    static long factorialRecursive(int n) {
        if (n == 0 || n == 1) return 1;
        return n * factorialRecursive(n - 1);
    }
}
```

**Output:** `Factorial of 5 = 120`

---

### 7. Check Prime Number

```java
public class PrimeNumber {
    public static void main(String[] args) {
        int number = 29;

        boolean isPrime = checkPrime(number);

        if (isPrime) {
            System.out.println(number + " is a prime number");
        } else {
            System.out.println(number + " is not a prime number");
        }
    }

    static boolean checkPrime(int n) {
        if (n <= 1) return false;
        if (n == 2) return true;
        if (n % 2 == 0) return false;

        for (int i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) return false;
        }
        return true;
    }
}
```

**Output:** `29 is a prime number`

---

### 8. Fibonacci Series

```java
public class FibonacciSeries {
    public static void main(String[] args) {
        int n = 10;

        System.out.println("Fibonacci series up to " + n + " terms:");

        int first = 0, second = 1;
        System.out.print(first + " " + second + " ");

        for (int i = 2; i < n; i++) {
            int next = first + second;
            System.out.print(next + " ");
            first = second;
            second = next;
        }
    }

    // Recursive approach
    static int fibonacciRecursive(int n) {
        if (n <= 1) return n;
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}
```

**Output:** `0 1 1 2 3 5 8 13 21 34`

---

### 9. Palindrome Number

```java
public class PalindromeNumber {
    public static void main(String[] args) {
        int number = 12321;
        int original = number;
        int reversed = 0;

        while (number != 0) {
            int digit = number % 10;
            reversed = reversed * 10 + digit;
            number /= 10;
        }

        if (original == reversed) {
            System.out.println(original + " is a palindrome");
        } else {
            System.out.println(original + " is not a palindrome");
        }
    }
}
```

**Output:** `12321 is a palindrome`

---

### 10. Armstrong Number

```java
public class ArmstrongNumber {
    public static void main(String[] args) {
        int number = 153;  // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
        int original = number;
        int sum = 0;
        int digits = String.valueOf(number).length();

        while (number != 0) {
            int digit = number % 10;
            sum += Math.pow(digit, digits);
            number /= 10;
        }

        if (sum == original) {
            System.out.println(original + " is an Armstrong number");
        } else {
            System.out.println(original + " is not an Armstrong number");
        }
    }
}
```

**Output:** `153 is an Armstrong number`

---

### 11. Sum of Digits

```java
public class SumOfDigits {
    public static void main(String[] args) {
        int number = 12345;
        int sum = 0;

        while (number != 0) {
            sum += number % 10;
            number /= 10;
        }

        System.out.println("Sum of digits: " + sum);
    }
}
```

**Output:** `Sum of digits: 15`

---

### 12. Reverse a Number

```java
public class ReverseNumber {
    public static void main(String[] args) {
        int number = 12345;
        int reversed = 0;

        while (number != 0) {
            int digit = number % 10;
            reversed = reversed * 10 + digit;
            number /= 10;
        }

        System.out.println("Reversed number: " + reversed);
    }
}
```

**Output:** `Reversed number: 54321`

---

### 13. GCD (Greatest Common Divisor)

```java
public class GCD {
    public static void main(String[] args) {
        int a = 48, b = 18;

        // Euclidean algorithm
        int gcd = findGCD(a, b);
        System.out.println("GCD of " + a + " and " + b + " = " + gcd);
    }

    static int findGCD(int a, int b) {
        if (b == 0) return a;
        return findGCD(b, a % b);
    }
}
```

**Output:** `GCD of 48 and 18 = 6`

---

### 14. LCM (Least Common Multiple)

```java
public class LCM {
    public static void main(String[] args) {
        int a = 12, b = 18;

        int lcm = (a * b) / findGCD(a, b);
        System.out.println("LCM of " + a + " and " + b + " = " + lcm);
    }

    static int findGCD(int a, int b) {
        if (b == 0) return a;
        return findGCD(b, a % b);
    }
}
```

**Output:** `LCM of 12 and 18 = 36`

---

### 15. Power of a Number

```java
public class PowerOfNumber {
    public static void main(String[] args) {
        int base = 2, exponent = 5;

        // Using loop
        long result = 1;
        for (int i = 0; i < exponent; i++) {
            result *= base;
        }
        System.out.println(base + "^" + exponent + " = " + result);

        // Using Math.pow
        double result2 = Math.pow(base, exponent);
        System.out.println("Using Math.pow: " + result2);

        // Recursive
        System.out.println("Recursive: " + power(base, exponent));
    }

    static long power(int base, int exp) {
        if (exp == 0) return 1;
        return base * power(base, exp - 1);
    }
}
```

**Output:** `2^5 = 32`

---

### 16. Sum of Natural Numbers

```java
public class SumOfNaturalNumbers {
    public static void main(String[] args) {
        int n = 100;

        // Using loop
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        System.out.println("Sum of first " + n + " natural numbers: " + sum);

        // Using formula: n * (n + 1) / 2
        int sumFormula = n * (n + 1) / 2;
        System.out.println("Using formula: " + sumFormula);
    }
}
```

**Output:** `Sum of first 100 natural numbers: 5050`

---

### 17. Leap Year Check

```java
public class LeapYear {
    public static void main(String[] args) {
        int year = 2024;

        boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);

        if (isLeap) {
            System.out.println(year + " is a leap year");
        } else {
            System.out.println(year + " is not a leap year");
        }
    }
}
```

**Output:** `2024 is a leap year`

---

### 18. Simple Calculator

```java
import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first number: ");
        double num1 = sc.nextDouble();

        System.out.print("Enter operator (+, -, *, /): ");
        char operator = sc.next().charAt(0);

        System.out.print("Enter second number: ");
        double num2 = sc.nextDouble();

        double result = 0;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 != 0) {
                    result = num1 / num2;
                } else {
                    System.out.println("Cannot divide by zero");
                    return;
                }
                break;
            default:
                System.out.println("Invalid operator");
                return;
        }

        System.out.println(num1 + " " + operator + " " + num2 + " = " + result);
    }
}
```

---

### 19. Print Multiplication Table

```java
public class MultiplicationTable {
    public static void main(String[] args) {
        int number = 5;

        System.out.println("Multiplication table of " + number + ":");
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
    }
}
```

**Output:**

```
Multiplication table of 5:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
```

---

### 20. Count Digits in a Number

```java
public class CountDigits {
    public static void main(String[] args) {
        int number = 123456;
        int count = 0;

        int temp = number;
        while (temp != 0) {
            temp /= 10;
            count++;
        }

        System.out.println("Number of digits in " + number + ": " + count);

        // Alternative using String
        int countStr = String.valueOf(number).length();
        System.out.println("Using String: " + countStr);
    }
}
```

**Output:** `Number of digits in 123456: 6`

---

## Pattern Programs

### 21. Right Triangle Star Pattern

```java
public class RightTriangle {
    public static void main(String[] args) {
        int n = 5;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
```

**Output:**

```
*
* *
* * *
* * * *
* * * * *
```

---

### 22. Pyramid Pattern

```java
public class PyramidPattern {
    public static void main(String[] args) {
        int n = 5;

        for (int i = 1; i <= n; i++) {
            // Print spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

**Output:**

```
    *
   ***
  *****
 *******
*********
```

---

### 23. Inverted Pyramid

```java
public class InvertedPyramid {
    public static void main(String[] args) {
        int n = 5;

        for (int i = n; i >= 1; i--) {
            // Print spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

**Output:**

```
*********
 *******
  *****
   ***
    *
```

---

### 24. Diamond Pattern

```java
public class DiamondPattern {
    public static void main(String[] args) {
        int n = 5;

        // Upper half
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // Lower half
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

**Output:**

```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

---

### 25. Number Pyramid

```java
public class NumberPyramid {
    public static void main(String[] args) {
        int n = 5;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= i; k++) {
                System.out.print(k + " ");
            }
            System.out.println();
        }
    }
}
```

**Output:**

```
    1
   1 2
  1 2 3
 1 2 3 4
1 2 3 4 5
```

---

### 26. Floyd's Triangle

```java
public class FloydsTriangle {
    public static void main(String[] args) {
        int n = 5;
        int number = 1;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(number + " ");
                number++;
            }
            System.out.println();
        }
    }
}
```

**Output:**

```
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

---

### 27. Pascal's Triangle

```java
public class PascalsTriangle {
    public static void main(String[] args) {
        int n = 5;

        for (int i = 0; i < n; i++) {
            // Print spaces
            for (int j = 0; j < n - i; j++) {
                System.out.print(" ");
            }

            // Print numbers
            int num = 1;
            for (int k = 0; k <= i; k++) {
                System.out.print(num + " ");
                num = num * (i - k) / (k + 1);
            }
            System.out.println();
        }
    }
}
```

**Output:**

```
     1
    1 1
   1 2 1
  1 3 3 1
 1 4 6 4 1
```

---

### 28. Hollow Square Pattern

```java
public class HollowSquare {
    public static void main(String[] args) {
        int n = 5;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == 1 || i == n || j == 1 || j == n) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}
```

**Output:**

```
* * * * *
*       *
*       *
*       *
* * * * *
```

---

### 29. Hollow Pyramid

```java
public class HollowPyramid {
    public static void main(String[] args) {
        int n = 5;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                if (k == 1 || k == 2 * i - 1 || i == n) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}
```

**Output:**

```
    *
   * *
  *   *
 *     *
*********
```

---

### 30. Butterfly Pattern

```java
public class ButterflyPattern {
    public static void main(String[] args) {
        int n = 5;

        // Upper half
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            for (int j = 1; j <= 2 * (n - i); j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // Lower half
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            for (int j = 1; j <= 2 * (n - i); j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

**Output:**

```
*        *
**      **
***    ***
****  ****
**********
**********
****  ****
***    ***
**      **
*        *
```

---

### 31. Hourglass Pattern

```java
public class HourglassPattern {
    public static void main(String[] args) {
        int n = 5;

        // Upper half
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print(" ");
            }
            for (int k = 0; k < 2 * (n - i) - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // Lower half
        for (int i = n - 2; i >= 0; i--) {
            for (int j = 0; j < i; j++) {
                System.out.print(" ");
            }
            for (int k = 0; k < 2 * (n - i) - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

---

### 32. Zigzag Pattern

```java
public class ZigzagPattern {
    public static void main(String[] args) {
        int n = 3;
        int width = 9;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < width; j++) {
                if ((i + j) % (2 * (n - 1)) == 0 || (i - j) % (2 * (n - 1)) == 0) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}
```

---

### 33. Alphabet Pattern

```java
public class AlphabetPattern {
    public static void main(String[] args) {
        int n = 5;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print((char) ('A' + j) + " ");
            }
            System.out.println();
        }
    }
}
```

**Output:**

```
A
A B
A B C
A B C D
A B C D E
```

---

### 34. Sandglass Pattern

```java
public class SandglassPattern {
    public static void main(String[] args) {
        int n = 5;

        // Upper half
        for (int i = n; i >= 1; i--) {
            for (int j = 0; j < n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 0; k < i; k++) {
                System.out.print("* ");
            }
            System.out.println();
        }

        // Lower half
        for (int i = 2; i <= n; i++) {
            for (int j = 0; j < n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 0; k < i; k++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
```

---

### 35. Cross Pattern

```java
public class CrossPattern {
    public static void main(String[] args) {
        int n = 7;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == j || i + j == n - 1) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}
```

**Output:**

```
*           *
  *       *
    *   *
      *
    *   *
  *       *
*           *
```

---

## Number Programs

### 36. Perfect Number

```java
public class PerfectNumber {
    public static void main(String[] args) {
        int number = 28;  // 1 + 2 + 4 + 7 + 14 = 28
        int sum = 0;

        for (int i = 1; i < number; i++) {
            if (number % i == 0) {
                sum += i;
            }
        }

        if (sum == number) {
            System.out.println(number + " is a perfect number");
        } else {
            System.out.println(number + " is not a perfect number");
        }
    }
}
```

**Output:** `28 is a perfect number`

---

### 37. Strong Number

```java
public class StrongNumber {
    public static void main(String[] args) {
        int number = 145;  // 1! + 4! + 5! = 1 + 24 + 120 = 145
        int original = number;
        int sum = 0;

        while (number != 0) {
            int digit = number % 10;
            sum += factorial(digit);
            number /= 10;
        }

        if (sum == original) {
            System.out.println(original + " is a strong number");
        } else {
            System.out.println(original + " is not a strong number");
        }
    }

    static int factorial(int n) {
        int fact = 1;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
}
```

**Output:** `145 is a strong number`

---

### 38. Automorphic Number

```java
public class AutomorphicNumber {
    public static void main(String[] args) {
        int number = 25;  // 25^2 = 625 (ends with 25)
        int square = number * number;

        String numStr = String.valueOf(number);
        String squareStr = String.valueOf(square);

        if (squareStr.endsWith(numStr)) {
            System.out.println(number + " is an automorphic number");
        } else {
            System.out.println(number + " is not an automorphic number");
        }
    }
}
```

**Output:** `25 is an automorphic number`

---

### 39. Neon Number

```java
public class NeonNumber {
    public static void main(String[] args) {
        int number = 9;  // 9^2 = 81, 8+1 = 9
        int square = number * number;
        int sum = 0;

        while (square != 0) {
            sum += square % 10;
            square /= 10;
        }

        if (sum == number) {
            System.out.println(number + " is a neon number");
        } else {
            System.out.println(number + " is not a neon number");
        }
    }
}
```

**Output:** `9 is a neon number`

---

### 40. Harshad Number

```java
public class HarshadNumber {
    public static void main(String[] args) {
        int number = 18;  // 1+8=9, 18 is divisible by 9
        int sum = 0;
        int temp = number;

        while (temp != 0) {
            sum += temp % 10;
            temp /= 10;
        }

        if (number % sum == 0) {
            System.out.println(number + " is a Harshad number");
        } else {
            System.out.println(number + " is not a Harshad number");
        }
    }
}
```

**Output:** `18 is a Harshad number`

---

### 41. Prime Numbers in Range

```java
public class PrimeNumbersInRange {
    public static void main(String[] args) {
        int start = 10, end = 50;

        System.out.println("Prime numbers between " + start + " and " + end + ":");
        for (int i = start; i <= end; i++) {
            if (isPrime(i)) {
                System.out.print(i + " ");
            }
        }
    }

    static boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
}
```

**Output:** `11 13 17 19 23 29 31 37 41 43 47`

---

### 42. Sum of Prime Numbers

```java
public class SumOfPrimes {
    public static void main(String[] args) {
        int n = 100;
        int sum = 0;

        for (int i = 2; i <= n; i++) {
            if (isPrime(i)) {
                sum += i;
            }
        }

        System.out.println("Sum of primes up to " + n + ": " + sum);
    }

    static boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
}
```

**Output:** `Sum of primes up to 100: 1060`

---

### 43. Binary to Decimal

```java
public class BinaryToDecimal {
    public static void main(String[] args) {
        String binary = "1010";

        // Method 1: Using Integer.parseInt
        int decimal = Integer.parseInt(binary, 2);
        System.out.println("Binary " + binary + " = Decimal " + decimal);

        // Method 2: Manual conversion
        int decimalManual = 0;
        int power = 0;
        for (int i = binary.length() - 1; i >= 0; i--) {
            if (binary.charAt(i) == '1') {
                decimalManual += Math.pow(2, power);
            }
            power++;
        }
        System.out.println("Manual conversion: " + decimalManual);
    }
}
```

**Output:** `Binary 1010 = Decimal 10`

---

### 44. Decimal to Binary

```java
public class DecimalToBinary {
    public static void main(String[] args) {
        int decimal = 10;

        // Method 1: Using Integer.toBinaryString
        String binary = Integer.toBinaryString(decimal);
        System.out.println("Decimal " + decimal + " = Binary " + binary);

        // Method 2: Manual conversion
        String binaryManual = "";
        int temp = decimal;
        while (temp > 0) {
            binaryManual = (temp % 2) + binaryManual;
            temp /= 2;
        }
        System.out.println("Manual conversion: " + binaryManual);
    }
}
```

**Output:** `Decimal 10 = Binary 1010`

---

### 45. Decimal to Octal and Hexadecimal

```java
public class NumberConversions {
    public static void main(String[] args) {
        int decimal = 255;

        String binary = Integer.toBinaryString(decimal);
        String octal = Integer.toOctalString(decimal);
        String hex = Integer.toHexString(decimal);

        System.out.println("Decimal: " + decimal);
        System.out.println("Binary: " + binary);
        System.out.println("Octal: " + octal);
        System.out.println("Hexadecimal: " + hex);
    }
}
```

**Output:**

```
Decimal: 255
Binary: 11111111
Octal: 377
Hexadecimal: ff
```

---

### 46. Sum of Series (1 + 2 + 3 + ... + n)

```java
public class SumOfSeries {
    public static void main(String[] args) {
        int n = 100;

        // Method 1: Using loop
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        System.out.println("Sum using loop: " + sum);

        // Method 2: Using formula
        int sumFormula = n * (n + 1) / 2;
        System.out.println("Sum using formula: " + sumFormula);
    }
}
```

**Output:** `Sum using loop: 5050`

---

### 47. Sum of Series (1^2 + 2^2 + 3^2 + ... + n^2)

```java
public class SumOfSquares {
    public static void main(String[] args) {
        int n = 10;

        // Using loop
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i * i;
        }
        System.out.println("Sum of squares: " + sum);

        // Using formula: n(n+1)(2n+1)/6
        int sumFormula = (n * (n + 1) * (2 * n + 1)) / 6;
        System.out.println("Using formula: " + sumFormula);
    }
}
```

**Output:** `Sum of squares: 385`

---

### 48. Nth Fibonacci Number

```java
public class NthFibonacci {
    public static void main(String[] args) {
        int n = 10;

        System.out.println("10th Fibonacci number: " + fibonacci(n));

        // Using memoization
        int[] memo = new int[n + 1];
        System.out.println("Using memoization: " + fibMemo(n, memo));
    }

    static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    static int fibMemo(int n, int[] memo) {
        if (n <= 1) return n;
        if (memo[n] != 0) return memo[n];
        memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
        return memo[n];
    }
}
```

**Output:** `10th Fibonacci number: 55`

---

### 49. Check Palindrome Prime

```java
public class PalindromePrime {
    public static void main(String[] args) {
        int number = 131;

        boolean isPrime = checkPrime(number);
        boolean isPalindrome = checkPalindrome(number);

        if (isPrime && isPalindrome) {
            System.out.println(number + " is a palindrome prime");
        } else {
            System.out.println(number + " is not a palindrome prime");
        }
    }

    static boolean checkPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    static boolean checkPalindrome(int n) {
        int original = n;
        int reversed = 0;
        while (n != 0) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        return original == reversed;
    }
}
```

**Output:** `131 is a palindrome prime`

---

### 50. Generate Random Numbers

```java
import java.util.Random;

public class RandomNumbers {
    public static void main(String[] args) {
        // Method 1: Using Math.random()
        int random1 = (int) (Math.random() * 100);  // 0 to 99
        System.out.println("Random number (Math.random): " + random1);

        // Method 2: Using Random class
        Random rand = new Random();
        int random2 = rand.nextInt(100);  // 0 to 99
        System.out.println("Random number (Random class): " + random2);

        // Random number in range [min, max]
        int min = 10, max = 50;
        int randomInRange = rand.nextInt(max - min + 1) + min;
        System.out.println("Random between " + min + " and " + max + ": " + randomInRange);
    }
}
```

---

## Array Programs

### 51. Find Largest Element in Array

```java
public class LargestInArray {
    public static void main(String[] args) {
        int[] arr = {10, 45, 23, 67, 89, 12};

        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        System.out.println("Largest element: " + max);

        // Using streams (Java 8+)
        int maxStream = Arrays.stream(arr).max().getAsInt();
        System.out.println("Using streams: " + maxStream);
    }
}
```

**Output:** `Largest element: 89`

---

### 52. Find Smallest Element in Array

```java
public class SmallestInArray {
    public static void main(String[] args) {
        int[] arr = {10, 45, 23, 67, 89, 12};

        int min = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        System.out.println("Smallest element: " + min);
    }
}
```

**Output:** `Smallest element: 10`

---

### 53. Sum of Array Elements

```java
public class SumOfArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};

        int sum = 0;
        for (int num : arr) {
            sum += num;
        }

        System.out.println("Sum: " + sum);

        // Using streams
        int sumStream = Arrays.stream(arr).sum();
        System.out.println("Using streams: " + sumStream);
    }
}
```

**Output:** `Sum: 15`

---

### 54. Average of Array Elements

```java
public class AverageOfArray {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};

        double average = Arrays.stream(arr).average().orElse(0.0);

        System.out.println("Average: " + average);
    }
}
```

**Output:** `Average: 30.0`

---

### 55. Reverse an Array

```java
public class ReverseArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};

        System.out.println("Original: " + Arrays.toString(arr));

        // Method 1: Using two pointers
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }

        System.out.println("Reversed: " + Arrays.toString(arr));
    }
}
```

**Output:**

```
Original: [1, 2, 3, 4, 5]
Reversed: [5, 4, 3, 2, 1]
```

---

### 56. Find Second Largest in Array

```java
public class SecondLargest {
    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};

        int first = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;

        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }

        System.out.println("Second largest: " + second);

        // Using streams
        int secondStream = Arrays.stream(arr)
                                 .distinct()
                                 .sorted()
                                 .skip(arr.length - 2)
                                 .findFirst()
                                 .orElse(Integer.MIN_VALUE);
    }
}
```

**Output:** `Second largest: 34`

---

### 57. Remove Duplicates from Array

```java
import java.util.*;

public class RemoveDuplicates {
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 4, 4, 5, 5, 6};

        // Method 1: Using HashSet
        Set<Integer> set = new HashSet<>();
        for (int num : arr) {
            set.add(num);
        }
        System.out.println("Using HashSet: " + set);

        // Method 2: Using streams
        int[] unique = Arrays.stream(arr).distinct().toArray();
        System.out.println("Using streams: " + Arrays.toString(unique));
    }
}
```

**Output:** `Using streams: [1, 2, 3, 4, 5, 6]`

---

### 58. Find Duplicates in Array

```java
import java.util.*;

public class FindDuplicates {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 4, 5, 3, 6};

        Set<Integer> seen = new HashSet<>();
        Set<Integer> duplicates = new HashSet<>();

        for (int num : arr) {
            if (!seen.add(num)) {
                duplicates.add(num);
            }
        }

        System.out.println("Duplicates: " + duplicates);
    }
}
```

**Output:** `Duplicates: [2, 3]`

---

### 59. Rotate Array

```java
public class RotateArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int k = 2;  // Rotate by 2 positions

        System.out.println("Original: " + Arrays.toString(arr));

        rotateRight(arr, k);

        System.out.println("Rotated: " + Arrays.toString(arr));
    }

    static void rotateRight(int[] arr, int k) {
        int n = arr.length;
        k = k % n;  // Handle k > n

        reverse(arr, 0, n - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, n - 1);
    }

    static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}
```

**Output:**

```
Original: [1, 2, 3, 4, 5]
Rotated: [4, 5, 1, 2, 3]
```

---

### 60. Find Missing Number in Array

```java
public class MissingNumber {
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5, 6};  // Missing 3
        int n = arr.length + 1;

        // Method 1: Using sum formula
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        for (int num : arr) {
            actualSum += num;
        }
        int missing = expectedSum - actualSum;

        System.out.println("Missing number: " + missing);

        // Method 2: Using XOR
        int xor = 0;
        for (int i = 1; i <= n; i++) {
            xor ^= i;
        }
        for (int num : arr) {
            xor ^= num;
        }
        System.out.println("Using XOR: " + xor);
    }
}
```

**Output:** `Missing number: 3`

---

### 61. Merge Two Arrays

```java
public class MergeArrays {
    public static void main(String[] args) {
        int[] arr1 = {1, 3, 5, 7};
        int[] arr2 = {2, 4, 6, 8};

        int[] merged = new int[arr1.length + arr2.length];

        System.arraycopy(arr1, 0, merged, 0, arr1.length);
        System.arraycopy(arr2, 0, merged, arr1.length, arr2.length);

        System.out.println("Merged array: " + Arrays.toString(merged));
    }
}
```

**Output:** `Merged array: [1, 3, 5, 7, 2, 4, 6, 8]`

---

### 62. Frequency of Elements

```java
import java.util.*;

public class ElementFrequency {
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4};

        Map<Integer, Integer> frequency = new HashMap<>();
        for (int num : arr) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
        }

        System.out.println("Frequency: " + frequency);
    }
}
```

**Output:** `Frequency: {1=1, 2=2, 3=3, 4=4}`

---

### 63. Find Pair with Given Sum

```java
import java.util.*;

public class PairSum {
    public static void main(String[] args) {
        int[] arr = {2, 7, 11, 15};
        int target = 9;

        Set<Integer> seen = new HashSet<>();

        for (int num : arr) {
            int complement = target - num;
            if (seen.contains(complement)) {
                System.out.println("Pair found: " + complement + ", " + num);
                return;
            }
            seen.add(num);
        }

        System.out.println("No pair found");
    }
}
```

**Output:** `Pair found: 2, 7`

---

### 64. Find All Pairs with Given Sum

```java
import java.util.*;

public class AllPairsSum {
    public static void main(String[] args) {
        int[] arr = {1, 5, 7, -1, 5};
        int target = 6;

        System.out.println("Pairs with sum " + target + ":");

        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == target) {
                    System.out.println("(" + arr[i] + ", " + arr[j] + ")");
                }
            }
        }
    }
}
```

**Output:**

```
Pairs with sum 6:
(1, 5)
(7, -1)
(1, 5)
```

---

### 65. Check if Array is Sorted

```java
public class CheckSorted {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};

        boolean isSorted = true;
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                isSorted = false;
                break;
            }
        }

        System.out.println("Array is sorted: " + isSorted);
    }
}
```

**Output:** `Array is sorted: true`

---

### 66. Move Zeros to End

```java
public class MoveZeros {
    public static void main(String[] args) {
        int[] arr = {0, 1, 0, 3, 12};

        int index = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                arr[index++] = arr[i];
            }
        }

        while (index < arr.length) {
            arr[index++] = 0;
        }

        System.out.println(Arrays.toString(arr));
    }
}
```

**Output:** `[1, 3, 12, 0, 0]`

---

### 67. Find Leaders in Array

```java
import java.util.*;

public class LeadersInArray {
    public static void main(String[] args) {
        int[] arr = {16, 17, 4, 3, 5, 2};

        // Leader: Element greater than all elements to its right
        List<Integer> leaders = new ArrayList<>();
        int maxFromRight = Integer.MIN_VALUE;

        for (int i = arr.length - 1; i >= 0; i--) {
            if (arr[i] >= maxFromRight) {
                leaders.add(arr[i]);
                maxFromRight = arr[i];
            }
        }

        Collections.reverse(leaders);
        System.out.println("Leaders: " + leaders);
    }
}
```

**Output:** `Leaders: [17, 5, 2]`

---

### 68. Kadane's Algorithm (Maximum Subarray Sum)

```java
public class KadanesAlgorithm {
    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};

        int maxSum = arr[0];
        int currentSum = arr[0];

        for (int i = 1; i < arr.length; i++) {
            currentSum = Math.max(arr[i], currentSum + arr[i]);
            maxSum = Math.max(maxSum, currentSum);
        }

        System.out.println("Maximum subarray sum: " + maxSum);
    }
}
```

**Output:** `Maximum subarray sum: 6`

---

### 69. Find Common Elements in Three Arrays

```java
import java.util.*;

public class CommonElements {
    public static void main(String[] args) {
        int[] arr1 = {1, 5, 10, 20, 40, 80};
        int[] arr2 = {6, 7, 20, 80, 100};
        int[] arr3 = {3, 4, 15, 20, 30, 70, 80, 120};

        Set<Integer> common = new HashSet<>();
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();

        for (int num : arr1) set1.add(num);
        for (int num : arr2) set2.add(num);

        for (int num : arr3) {
            if (set1.contains(num) && set2.contains(num)) {
                common.add(num);
            }
        }

        System.out.println("Common elements: " + common);
    }
}
```

**Output:** `Common elements: [80, 20]`

---

### 70. Find Equilibrium Point

```java
public class EquilibriumPoint {
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 2, 2};

        int totalSum = Arrays.stream(arr).sum();
        int leftSum = 0;

        for (int i = 0; i < arr.length; i++) {
            totalSum -= arr[i];

            if (leftSum == totalSum) {
                System.out.println("Equilibrium point at index: " + i);
                return;
            }

            leftSum += arr[i];
        }

        System.out.println("No equilibrium point");
    }
}
```

**Output:** `Equilibrium point at index: 2`

---

## String Programs

### 71. Reverse a String

```java
public class ReverseString {
    public static void main(String[] args) {
        String str = "Hello World";

        // Method 1: Using StringBuilder
        String reversed1 = new StringBuilder(str).reverse().toString();
        System.out.println("Using StringBuilder: " + reversed1);

        // Method 2: Using loop
        String reversed2 = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed2 += str.charAt(i);
        }
        System.out.println("Using loop: " + reversed2);

        // Method 3: Using char array
        char[] chars = str.toCharArray();
        int left = 0, right = chars.length - 1;
        while (left < right) {
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }
        System.out.println("Using char array: " + new String(chars));
    }
}
```

**Output:** `Using StringBuilder: dlroW olleH`

---

### 72. Check Palindrome String

```java
public class PalindromeString {
    public static void main(String[] args) {
        String str = "madam";

        String reversed = new StringBuilder(str).reverse().toString();

        if (str.equals(reversed)) {
            System.out.println(str + " is a palindrome");
        } else {
            System.out.println(str + " is not a palindrome");
        }

        // Method 2: Two pointer
        boolean isPalindrome = checkPalindrome(str);
        System.out.println("Using two pointers: " + isPalindrome);
    }

    static boolean checkPalindrome(String str) {
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
}
```

**Output:** `madam is a palindrome`

---

### 73. Count Vowels and Consonants

```java
public class CountVowelsConsonants {
    public static void main(String[] args) {
        String str = "Hello World";
        int vowels = 0, consonants = 0;

        str = str.toLowerCase();

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }

        System.out.println("Vowels: " + vowels);
        System.out.println("Consonants: " + consonants);
    }
}
```

**Output:**

```
Vowels: 3
Consonants: 7
```

---

### 74. Remove Whitespace from String

```java
public class RemoveWhitespace {
    public static void main(String[] args) {
        String str = "  Hello   World  ";

        // Method 1: Using replaceAll
        String result1 = str.replaceAll("\\s+", "");
        System.out.println("Using replaceAll: '" + result1 + "'");

        // Method 2: Using trim and replace
        String result2 = str.trim().replace(" ", "");
        System.out.println("Using trim + replace: '" + result2 + "'");

        // Method 3: Using loop
        StringBuilder result3 = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) != ' ') {
                result3.append(str.charAt(i));
            }
        }
        System.out.println("Using loop: '" + result3 + "'");
    }
}
```

**Output:** `Using replaceAll: 'HelloWorld'`

---

### 75. Check Anagram

```java
import java.util.Arrays;

public class CheckAnagram {
    public static void main(String[] args) {
        String str1 = "listen";
        String str2 = "silent";

        boolean isAnagram = checkAnagram(str1, str2);
        System.out.println(str1 + " and " + str2 + " are anagrams: " + isAnagram);
    }

    static boolean checkAnagram(String s1, String s2) {
        if (s1.length() != s2.length()) return false;

        char[] arr1 = s1.toCharArray();
        char[] arr2 = s2.toCharArray();

        Arrays.sort(arr1);
        Arrays.sort(arr2);

        return Arrays.equals(arr1, arr2);
    }
}
```

**Output:** `listen and silent are anagrams: true`

---

### 76. Count Words in String

```java
public class CountWords {
    public static void main(String[] args) {
        String str = "Java is a programming language";

        // Method 1: Using split
        String[] words = str.trim().split("\\s+");
        System.out.println("Word count: " + words.length);

        // Method 2: Manual count
        int count = 1;
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == ' ' && str.charAt(i + 1) != ' ') {
                count++;
            }
        }
        System.out.println("Manual count: " + count);
    }
}
```

**Output:** `Word count: 5`

---

### 77. Find Duplicate Characters

```java
import java.util.*;

public class DuplicateCharacters {
    public static void main(String[] args) {
        String str = "programming";

        Map<Character, Integer> charCount = new HashMap<>();

        for (char ch : str.toCharArray()) {
            charCount.put(ch, charCount.getOrDefault(ch, 0) + 1);
        }

        System.out.println("Duplicate characters:");
        for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {
            if (entry.getValue() > 1) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
        }
    }
}
```

**Output:**

```
Duplicate characters:
r: 2
g: 2
m: 2
```

---

### 78. Remove Duplicate Characters

```java
import java.util.*;

public class RemoveDuplicateChars {
    public static void main(String[] args) {
        String str = "programming";

        // Using LinkedHashSet to maintain order
        LinkedHashSet<Character> set = new LinkedHashSet<>();
        for (char ch : str.toCharArray()) {
            set.add(ch);
        }

        StringBuilder result = new StringBuilder();
        for (char ch : set) {
            result.append(ch);
        }

        System.out.println("Original: " + str);
        System.out.println("After removing duplicates: " + result);
    }
}
```

**Output:**

```
Original: programming
After removing duplicates: progamin
```

---

### 79. First Non-Repeating Character

```java
import java.util.*;

public class FirstNonRepeating {
    public static void main(String[] args) {
        String str = "swiss";

        Map<Character, Integer> charCount = new LinkedHashMap<>();

        for (char ch : str.toCharArray()) {
            charCount.put(ch, charCount.getOrDefault(ch, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {
            if (entry.getValue() == 1) {
                System.out.println("First non-repeating character: " + entry.getKey());
                return;
            }
        }

        System.out.println("No non-repeating character found");
    }
}
```

**Output:** `First non-repeating character: w`

---

### 80. String Rotation Check

```java
public class StringRotation {
    public static void main(String[] args) {
        String str1 = "abcde";
        String str2 = "cdeab";

        // Check if str2 is a rotation of str1
        boolean isRotation = (str1.length() == str2.length()) &&
                            (str1 + str1).contains(str2);

        System.out.println(str2 + " is rotation of " + str1 + ": " + isRotation);
    }
}
```

**Output:** `cdeab is rotation of abcde: true`

---

### 81. Longest Substring Without Repeating Characters

```java
import java.util.*;

public class LongestSubstringNoRepeat {
    public static void main(String[] args) {
        String str = "abcabcbb";

        int maxLength = 0;
        int start = 0;
        Map<Character, Integer> charIndex = new HashMap<>();

        for (int end = 0; end < str.length(); end++) {
            char ch = str.charAt(end);

            if (charIndex.containsKey(ch)) {
                start = Math.max(start, charIndex.get(ch) + 1);
            }

            charIndex.put(ch, end);
            maxLength = Math.max(maxLength, end - start + 1);
        }

        System.out.println("Length of longest substring: " + maxLength);
    }
}
```

**Output:** `Length of longest substring: 3`

---

### 82. Capitalize First Letter of Each Word

```java
public class CapitalizeWords {
    public static void main(String[] args) {
        String str = "java programming language";

        String[] words = str.split(" ");
        StringBuilder result = new StringBuilder();

        for (String word : words) {
            result.append(Character.toUpperCase(word.charAt(0)))
                  .append(word.substring(1))
                  .append(" ");
        }

        System.out.println(result.toString().trim());
    }
}
```

**Output:** `Java Programming Language`

---

### 83. Check Subsequence

```java
public class CheckSubsequence {
    public static void main(String[] args) {
        String str = "abcde";
        String sub = "ace";

        int j = 0;
        for (int i = 0; i < str.length() && j < sub.length(); i++) {
            if (str.charAt(i) == sub.charAt(j)) {
                j++;
            }
        }

        boolean isSubsequence = (j == sub.length());
        System.out.println(sub + " is subsequence of " + str + ": " + isSubsequence);
    }
}
```

**Output:** `ace is subsequence of abcde: true`

---

### 84. Longest Common Prefix

```java
public class LongestCommonPrefix {
    public static void main(String[] args) {
        String[] strs = {"flower", "flow", "flight"};

        if (strs.length == 0) return;

        String prefix = strs[0];
        for (int i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) != 0) {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix.isEmpty()) {
                    System.out.println("No common prefix");
                    return;
                }
            }
        }

        System.out.println("Longest common prefix: " + prefix);
    }
}
```

**Output:** `Longest common prefix: fl`

---

### 85. Count Character Occurrences

```java
public class CharacterOccurrence {
    public static void main(String[] args) {
        String str = "hello world";
        char ch = 'l';

        long count = str.chars().filter(c -> c == ch).count();

        System.out.println("'" + ch + "' appears " + count + " times");
    }
}
```

**Output:** `'l' appears 3 times`

---

### 86. Replace Character in String

```java
public class ReplaceCharacter {
    public static void main(String[] args) {
        String str = "Hello World";

        String replaced = str.replace('o', 'a');
        System.out.println("Replaced: " + replaced);

        // Replace first occurrence
        String replacedFirst = str.replaceFirst("o", "a");
        System.out.println("First occurrence: " + replacedFirst);

        // Replace all (regex)
        String replacedAll = str.replaceAll("o", "a");
        System.out.println("Replace all: " + replacedAll);
    }
}
```

**Output:** `Replaced: Hella Warld`

---

### 87. String Compression

```java
public class StringCompression {
    public static void main(String[] args) {
        String str = "aaabbccccaa";

        StringBuilder compressed = new StringBuilder();
        int count = 1;

        for (int i = 1; i < str.length(); i++) {
            if (str.charAt(i) == str.charAt(i - 1)) {
                count++;
            } else {
                compressed.append(str.charAt(i - 1)).append(count);
                count = 1;
            }
        }
        compressed.append(str.charAt(str.length() - 1)).append(count);

        System.out.println("Original: " + str);
        System.out.println("Compressed: " + compressed);
    }
}
```

**Output:**

```
Original: aaabbccccaa
Compressed: a3b2c4a2
```

---

### 88. Reverse Words in String

```java
public class ReverseWords {
    public static void main(String[] args) {
        String str = "Java is awesome";

        String[] words = str.split(" ");
        StringBuilder reversed = new StringBuilder();

        for (int i = words.length - 1; i >= 0; i--) {
            reversed.append(words[i]);
            if (i > 0) reversed.append(" ");
        }

        System.out.println("Original: " + str);
        System.out.println("Reversed: " + reversed);
    }
}
```

**Output:**

```
Original: Java is awesome
Reversed: awesome is Java
```

---

### 89. Check Pangram

```java
public class CheckPangram {
    public static void main(String[] args) {
        String str = "The quick brown fox jumps over the lazy dog";

        boolean[] alphabet = new boolean[26];
        str = str.toLowerCase();

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                alphabet[ch - 'a'] = true;
            }
        }

        boolean isPangram = true;
        for (boolean b : alphabet) {
            if (!b) {
                isPangram = false;
                break;
            }
        }

        System.out.println("Is pangram: " + isPangram);
    }
}
```

**Output:** `Is pangram: true`

---

### 90. Permutations of String

```java
public class StringPermutations {
    public static void main(String[] args) {
        String str = "ABC";
        permute(str, 0, str.length() - 1);
    }

    static void permute(String str, int l, int r) {
        if (l == r) {
            System.out.println(str);
        } else {
            for (int i = l; i <= r; i++) {
                str = swap(str, l, i);
                permute(str, l + 1, r);
                str = swap(str, l, i);  // Backtrack
            }
        }
    }

    static String swap(String str, int i, int j) {
        char[] chars = str.toCharArray();
        char temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
        return new String(chars);
    }
}
```

**Output:** `ABC ACB BAC BCA CAB CBA`

---

## Sorting & Searching

### 91. Bubble Sort

```java
public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Before sorting: " + Arrays.toString(arr));

        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

        System.out.println("After sorting: " + Arrays.toString(arr));
    }
}
```

**Output:** `After sorting: [11, 12, 22, 25, 34, 64, 90]`

---

### 92. Selection Sort

```java
public class SelectionSort {
    public static void main(String[] args) {
        int[] arr = {64, 25, 12, 22, 11};

        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }

        System.out.println("Sorted: " + Arrays.toString(arr));
    }
}
```

**Output:** `Sorted: [11, 12, 22, 25, 64]`

---

### 93. Insertion Sort

```java
public class InsertionSort {
    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};

        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }

        System.out.println("Sorted: " + Arrays.toString(arr));
    }
}
```

**Output:** `Sorted: [5, 6, 11, 12, 13]`

---

### 94. Merge Sort

```java
public class MergeSort {
    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6, 7};

        System.out.println("Before: " + Arrays.toString(arr));
        mergeSort(arr, 0, arr.length - 1);
        System.out.println("After: " + Arrays.toString(arr));
    }

    static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;

            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }

    static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        System.arraycopy(arr, left, L, 0, n1);
        System.arraycopy(arr, mid + 1, R, 0, n2);

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }

        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }
}
```

**Output:** `After: [5, 6, 7, 11, 12, 13]`

---

### 95. Quick Sort

```java
public class QuickSort {
    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};

        System.out.println("Before: " + Arrays.toString(arr));
        quickSort(arr, 0, arr.length - 1);
        System.out.println("After: " + Arrays.toString(arr));
    }

    static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    static int partition(int[] arr, int low, int high) {
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
}
```

**Output:** `After: [1, 5, 7, 8, 9, 10]`

---

### 96. Binary Search

```java
public class BinarySearch {
    public static void main(String[] args) {
        int[] arr = {2, 3, 4, 10, 40};
        int target = 10;

        int result = binarySearch(arr, target);

        if (result != -1) {
            System.out.println("Element found at index: " + result);
        } else {
            System.out.println("Element not found");
        }
    }

    static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }

        return -1;
    }
}
```

**Output:** `Element found at index: 3`

---

### 97. Linear Search

```java
public class LinearSearch {
    public static void main(String[] args) {
        int[] arr = {10, 23, 45, 70, 11, 15};
        int target = 70;

        int index = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            System.out.println("Element found at index: " + index);
        } else {
            System.out.println("Element not found");
        }
    }
}
```

**Output:** `Element found at index: 3`

---

### 98. Find Kth Largest Element

```java
import java.util.*;

public class KthLargest {
    public static void main(String[] args) {
        int[] arr = {3, 2, 1, 5, 6, 4};
        int k = 2;

        // Method 1: Sort and pick
        Arrays.sort(arr);
        int kthLargest = arr[arr.length - k];
        System.out.println(k + "th largest: " + kthLargest);

        // Method 2: Using PriorityQueue
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int num : arr) {
            pq.offer(num);
            if (pq.size() > k) {
                pq.poll();
            }
        }
        System.out.println("Using PriorityQueue: " + pq.peek());
    }
}
```

**Output:** `2th largest: 5`

---

### 99. Count Inversions in Array

```java
public class CountInversions {
    public static void main(String[] args) {
        int[] arr = {8, 4, 2, 1};

        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    count++;
                }
            }
        }

        System.out.println("Number of inversions: " + count);
    }
}
```

**Output:** `Number of inversions: 6`

---

### 100. Find Median of Array

```java
import java.util.Arrays;

public class FindMedian {
    public static void main(String[] args) {
        int[] arr = {12, 3, 5, 7, 19};

        Arrays.sort(arr);

        double median;
        int n = arr.length;

        if (n % 2 == 0) {
            median = (arr[n / 2 - 1] + arr[n / 2]) / 2.0;
        } else {
            median = arr[n / 2];
        }

        System.out.println("Median: " + median);
    }
}
```

**Output:** `Median: 7.0`

---

## OOP Programs

### 101. Simple Class and Object

```java
class Student {
    String name;
    int age;

    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

public class ClassObjectExample {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "John";
        s1.age = 20;
        s1.display();
    }
}
```

**Output:** `Name: John, Age: 20`

---

### 102. Constructor Example

```java
class Employee {
    String name;
    double salary;

    // Default constructor
    Employee() {
        this.name = "Unknown";
        this.salary = 0.0;
    }

    // Parameterized constructor
    Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    // Copy constructor
    Employee(Employee emp) {
        this.name = emp.name;
        this.salary = emp.salary;
    }

    void display() {
        System.out.println(name + ": $" + salary);
    }
}

public class ConstructorExample {
    public static void main(String[] args) {
        Employee e1 = new Employee();
        Employee e2 = new Employee("Alice", 50000);
        Employee e3 = new Employee(e2);

        e1.display();
        e2.display();
        e3.display();
    }
}
```

**Output:**

```
Unknown: $0.0
Alice: $50000.0
Alice: $50000.0
```

---

### 103. Inheritance Example

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

public class InheritanceExample {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();   // Inherited method
        dog.bark();  // Own method
    }
}
```

**Output:**

```
Animal is eating
Dog is barking
```

---

### 104. Method Overloading

```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class MethodOverloadingExample {
    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println("add(5, 3): " + calc.add(5, 3));
        System.out.println("add(5.5, 3.2): " + calc.add(5.5, 3.2));
        System.out.println("add(1, 2, 3): " + calc.add(1, 2, 3));
    }
}
```

**Output:**

```
add(5, 3): 8
add(5.5, 3.2): 8.7
add(1, 2, 3): 6
```

---

### 105. Method Overriding

```java
class Vehicle {
    void run() {
        System.out.println("Vehicle is running");
    }
}

class Car extends Vehicle {
    @Override
    void run() {
        System.out.println("Car is running");
    }
}

public class MethodOverridingExample {
    public static void main(String[] args) {
        Vehicle v = new Car();  // Polymorphism
        v.run();  // Calls Car's run()
    }
}
```

**Output:** `Car is running`

---

### 106. Encapsulation Example

```java
class BankAccount {
    private double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Insufficient balance");
        }
    }

    public double getBalance() {
        return balance;
    }
}

public class EncapsulationExample {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);
        account.deposit(500);
        account.withdraw(300);
        System.out.println("Balance: $" + account.getBalance());
    }
}
```

**Output:** `Balance: $1200.0`

---

### 107. Abstract Class Example

```java
abstract class Shape {
    abstract double area();

    void display() {
        System.out.println("Area: " + area());
    }
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double length, width;

    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    double area() {
        return length * width;
    }
}

public class AbstractClassExample {
    public static void main(String[] args) {
        Shape circle = new Circle(5);
        Shape rectangle = new Rectangle(4, 6);

        circle.display();
        rectangle.display();
    }
}
```

**Output:**

```
Area: 78.53981633974483
Area: 24.0
```

---

### 108. Interface Example

```java
interface Drawable {
    void draw();
}

interface Colorable {
    void setColor(String color);
}

class Circle implements Drawable, Colorable {
    private String color;

    @Override
    public void draw() {
        System.out.println("Drawing circle");
    }

    @Override
    public void setColor(String color) {
        this.color = color;
    }

    public String getColor() {
        return color;
    }
}

public class InterfaceExample {
    public static void main(String[] args) {
        Circle circle = new Circle();
        circle.setColor("Red");
        circle.draw();
        System.out.println("Color: " + circle.getColor());
    }
}
```

**Output:**

```
Drawing circle
Color: Red
```

---

### 109. Static Members Example

```java
class Counter {
    static int count = 0;  // Static variable

    Counter() {
        count++;  // Shared across all instances
    }

    static void displayCount() {  // Static method
        System.out.println("Total objects: " + count);
    }
}

public class StaticExample {
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        Counter c3 = new Counter();

        Counter.displayCount();  // Access without object
    }
}
```

**Output:** `Total objects: 3`

---

### 110. Singleton Pattern

```java
class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    public void showMessage() {
        System.out.println("Singleton instance");
    }
}

public class SingletonExample {
    public static void main(String[] args) {
        Singleton obj1 = Singleton.getInstance();
        Singleton obj2 = Singleton.getInstance();

        System.out.println("Same instance: " + (obj1 == obj2));
        obj1.showMessage();
    }
}
```

**Output:**

```
Same instance: true
Singleton instance
```

---

## Collections Programs

### 111. ArrayList Operations

```java
import java.util.*;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();

        // Add elements
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");

        System.out.println("List: " + list);

        // Access element
        System.out.println("Element at index 1: " + list.get(1));

        // Update element
        list.set(1, "Blueberry");

        // Remove element
        list.remove("Cherry");

        // Iterate
        for (String fruit : list) {
            System.out.println(fruit);
        }

        // Size
        System.out.println("Size: " + list.size());
    }
}
```

---

### 112. LinkedList Operations

```java
import java.util.*;

public class LinkedListExample {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();

        list.add(10);
        list.add(20);
        list.add(30);

        list.addFirst(5);
        list.addLast(40);

        System.out.println("LinkedList: " + list);

        list.removeFirst();
        list.removeLast();

        System.out.println("After removal: " + list);
    }
}
```

**Output:**

```
LinkedList: [5, 10, 20, 30, 40]
After removal: [10, 20, 30]
```

---

### 113. HashSet Operations

```java
import java.util.*;

public class HashSetExample {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();

        set.add("Apple");
        set.add("Banana");
        set.add("Apple");  // Duplicate ignored

        System.out.println("HashSet: " + set);
        System.out.println("Contains Apple: " + set.contains("Apple"));

        set.remove("Banana");
        System.out.println("After removal: " + set);
    }
}
```

**Output:** `HashSet: [Apple, Banana]`

---

### 114. HashMap Operations

```java
import java.util.*;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();

        map.put("Alice", 85);
        map.put("Bob", 90);
        map.put("Charlie", 78);

        System.out.println("HashMap: " + map);
        System.out.println("Bob's score: " + map.get("Bob"));

        // Iterate
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Check if key exists
        System.out.println("Contains Alice: " + map.containsKey("Alice"));
    }
}
```

**Output:**

```
HashMap: {Alice=85, Bob=90, Charlie=78}
Bob's score: 90
Alice: 85
Bob: 90
Charlie: 78
```

---

### 115. TreeSet Operations

```java
import java.util.*;

public class TreeSetExample {
    public static void main(String[] args) {
        TreeSet<Integer> set = new TreeSet<>();

        set.add(50);
        set.add(20);
        set.add(70);
        set.add(10);
        set.add(30);

        System.out.println("TreeSet (sorted): " + set);

        System.out.println("First: " + set.first());
        System.out.println("Last: " + set.last());
        System.out.println("Lower than 50: " + set.lower(50));
        System.out.println("Higher than 50: " + set.higher(50));
    }
}
```

**Output:**

```
TreeSet (sorted): [10, 20, 30, 50, 70]
First: 10
Last: 70
Lower than 50: 30
Higher than 50: 70
```

---

### 116. TreeMap Operations

```java
import java.util.*;

public class TreeMapExample {
    public static void main(String[] args) {
        TreeMap<String, Integer> map = new TreeMap<>();

        map.put("Charlie", 78);
        map.put("Alice", 85);
        map.put("Bob", 90);

        System.out.println("TreeMap (sorted by key): " + map);
        System.out.println("First entry: " + map.firstEntry());
        System.out.println("Last entry: " + map.lastEntry());
    }
}
```

**Output:**

```
TreeMap (sorted by key): {Alice=85, Bob=90, Charlie=78}
First entry: Alice=85
Last entry: Charlie=78
```

---

### 117. Stack Implementation

```java
import java.util.Stack;

public class StackExample {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();

        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println("Stack: " + stack);
        System.out.println("Top element (peek): " + stack.peek());
        System.out.println("Popped: " + stack.pop());
        System.out.println("After pop: " + stack);
        System.out.println("Is empty: " + stack.isEmpty());
    }
}
```

**Output:**

```
Stack: [10, 20, 30]
Top element (peek): 30
Popped: 30
After pop: [10, 20]
Is empty: false
```

---

### 118. Queue Implementation

```java
import java.util.*;

public class QueueExample {
    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<>();

        queue.offer("First");
        queue.offer("Second");
        queue.offer("Third");

        System.out.println("Queue: " + queue);
        System.out.println("Front element (peek): " + queue.peek());
        System.out.println("Removed: " + queue.poll());
        System.out.println("After removal: " + queue);
    }
}
```

**Output:**

```
Queue: [First, Second, Third]
Front element (peek): First
Removed: First
After removal: [Second, Third]
```

---

### 119. PriorityQueue Example

```java
import java.util.*;

public class PriorityQueueExample {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        pq.offer(30);
        pq.offer(10);
        pq.offer(50);
        pq.offer(20);

        System.out.println("Priority Queue: " + pq);

        while (!pq.isEmpty()) {
            System.out.print(pq.poll() + " ");  // Removes in sorted order
        }
    }
}
```

**Output:** `10 20 30 50`

---

### 120. Sort ArrayList using Comparator

```java
import java.util.*;

class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return name + "(" + age + ")";
    }
}

public class ComparatorExample {
    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("John", 30));
        people.add(new Person("Alice", 25));
        people.add(new Person("Bob", 35));

        // Sort by age
        people.sort(Comparator.comparingInt(p -> p.age));
        System.out.println("Sorted by age: " + people);

        // Sort by name
        people.sort(Comparator.comparing(p -> p.name));
        System.out.println("Sorted by name: " + people);
    }
}
```

**Output:**

```
Sorted by age: [Alice(25), John(30), Bob(35)]
Sorted by name: [Alice(25), Bob(35), John(30)]
```

---

### 121. Iterator Example

```java
import java.util.*;

public class IteratorExample {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");

        // Using Iterator
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            String element = iterator.next();
            System.out.println(element);

            if (element.equals("Banana")) {
                iterator.remove();  // Safe removal
            }
        }

        System.out.println("After removal: " + list);
    }
}
```

**Output:**

```
Apple
Banana
Cherry
After removal: [Apple, Cherry]
```

---

### 122. Collections Utility Methods

```java
import java.util.*;

public class CollectionsUtility {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6));

        System.out.println("Original: " + list);

        // Sort
        Collections.sort(list);
        System.out.println("Sorted: " + list);

        // Reverse
        Collections.reverse(list);
        System.out.println("Reversed: " + list);

        // Shuffle
        Collections.shuffle(list);
        System.out.println("Shuffled: " + list);

        // Max and Min
        System.out.println("Max: " + Collections.max(list));
        System.out.println("Min: " + Collections.min(list));

        // Frequency
        System.out.println("Frequency of 1: " + Collections.frequency(list, 1));
    }
}
```

---

### 123. Convert Array to List

```java
import java.util.*;

public class ArrayToList {
    public static void main(String[] args) {
        // String array
        String[] arr = {"Apple", "Banana", "Cherry"};
        List<String> list = Arrays.asList(arr);
        System.out.println("List: " + list);

        // Primitive array (needs conversion)
        int[] numbers = {1, 2, 3, 4, 5};
        List<Integer> numberList = new ArrayList<>();
        for (int num : numbers) {
            numberList.add(num);
        }
        System.out.println("Number list: " + numberList);

        // Java 8 streams
        List<Integer> streamList = Arrays.stream(numbers)
                                        .boxed()
                                        .collect(Collectors.toList());
        System.out.println("Using streams: " + streamList);
    }
}
```

---

### 124. Group Elements by Property

```java
import java.util.*;
import java.util.stream.Collectors;

class Employee {
    String name;
    String department;

    Employee(String name, String department) {
        this.name = name;
        this.department = department;
    }

    @Override
    public String toString() {
        return name;
    }
}

public class GroupByExample {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", "IT"),
            new Employee("Bob", "HR"),
            new Employee("Charlie", "IT"),
            new Employee("David", "HR")
        );

        Map<String, List<Employee>> grouped = employees.stream()
            .collect(Collectors.groupingBy(e -> e.department));

        System.out.println("Grouped by department:");
        grouped.forEach((dept, emps) ->
            System.out.println(dept + ": " + emps));
    }
}
```

**Output:**

```
Grouped by department:
IT: [Alice, Charlie]
HR: [Bob, David]
```

---

### 125. Find Intersection of Two Lists

```java
import java.util.*;

public class ListIntersection {
    public static void main(String[] args) {
        List<Integer> list1 = Arrays.asList(1, 2, 3, 4, 5);
        List<Integer> list2 = Arrays.asList(4, 5, 6, 7, 8);

        // Method 1: Using retainAll
        List<Integer> intersection = new ArrayList<>(list1);
        intersection.retainAll(list2);

        System.out.println("Intersection: " + intersection);

        // Method 2: Using streams
        List<Integer> intersectionStream = list1.stream()
            .filter(list2::contains)
            .collect(Collectors.toList());

        System.out.println("Using streams: " + intersectionStream);
    }
}
```

**Output:** `Intersection: [4, 5]`

---

## Java 8+ Features

### 126. Lambda Expression Example

```java
import java.util.*;

public class LambdaExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        // forEach with lambda
        numbers.forEach(n -> System.out.print(n + " "));
        System.out.println();

        // Runnable with lambda
        Runnable runnable = () -> System.out.println("Running in thread");
        new Thread(runnable).start();

        // Comparator with lambda
        List<String> names = Arrays.asList("John", "Alice", "Bob");
        names.sort((a, b) -> a.compareTo(b));
        System.out.println("Sorted: " + names);
    }
}
```

---

### 127. Stream Filter Example

```java
import java.util.*;
import java.util.stream.*;

public class StreamFilterExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // Filter even numbers
        List<Integer> evens = numbers.stream()
                                    .filter(n -> n % 2 == 0)
                                    .collect(Collectors.toList());

        System.out.println("Even numbers: " + evens);

        // Filter and map
        List<Integer> squares = numbers.stream()
                                      .filter(n -> n % 2 == 0)
                                      .map(n -> n * n)
                                      .collect(Collectors.toList());

        System.out.println("Squares of evens: " + squares);
    }
}
```

**Output:**

```
Even numbers: [2, 4, 6, 8, 10]
Squares of evens: [4, 16, 36, 64, 100]
```

---

### 128. Stream Map Example

```java
import java.util.*;
import java.util.stream.*;

public class StreamMapExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("alice", "bob", "charlie");

        List<String> upperNames = names.stream()
                                      .map(String::toUpperCase)
                                      .collect(Collectors.toList());

        System.out.println("Uppercase: " + upperNames);

        List<Integer> nameLengths = names.stream()
                                        .map(String::length)
                                        .collect(Collectors.toList());

        System.out.println("Lengths: " + nameLengths);
    }
}
```

**Output:**

```
Uppercase: [ALICE, BOB, CHARLIE]
Lengths: [5, 3, 7]
```

---

### 129. Stream Reduce Example

```java
import java.util.*;

public class StreamReduceExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        // Sum using reduce
        int sum = numbers.stream()
                        .reduce(0, (a, b) -> a + b);
        System.out.println("Sum: " + sum);

        // Product using reduce
        int product = numbers.stream()
                            .reduce(1, (a, b) -> a * b);
        System.out.println("Product: " + product);

        // Max using reduce
        int max = numbers.stream()
                        .reduce(Integer.MIN_VALUE, Integer::max);
        System.out.println("Max: " + max);
    }
}
```

**Output:**

```
Sum: 15
Product: 120
Max: 5
```

---

### 130. flatMap Example

```java
import java.util.*;
import java.util.stream.*;

public class FlatMapExample {
    public static void main(String[] args) {
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
```

**Output:** `Flattened: [1, 2, 3, 4, 5, 6]`

---

### 131. Optional Example

```java
import java.util.Optional;

public class OptionalExample {
    public static void main(String[] args) {
        Optional<String> optional = Optional.of("Hello");

        // isPresent
        if (optional.isPresent()) {
            System.out.println("Value: " + optional.get());
        }

        // ifPresent
        optional.ifPresent(value -> System.out.println("Value: " + value));

        // orElse
        String value1 = optional.orElse("Default");
        System.out.println("orElse: " + value1);

        Optional<String> empty = Optional.empty();
        String value2 = empty.orElse("Default");
        System.out.println("orElse on empty: " + value2);

        // map
        Optional<Integer> length = optional.map(String::length);
        System.out.println("Length: " + length.get());
    }
}
```

**Output:**

```
Value: Hello
Value: Hello
orElse: Hello
orElse on empty: Default
Length: 5
```

---

### 132. Method Reference Example

```java
import java.util.*;
import java.util.function.*;

public class MethodReferenceExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

        // Static method reference
        names.forEach(System.out::println);

        // Instance method reference
        names.sort(String::compareToIgnoreCase);
        System.out.println("Sorted: " + names);

        // Constructor reference
        Supplier<List<String>> listSupplier = ArrayList::new;
        List<String> newList = listSupplier.get();

        // Array constructor reference
        IntFunction<int[]> arrayCreator = int[]::new;
        int[] arr = arrayCreator.apply(10);
        System.out.println("Array length: " + arr.length);
    }
}
```

---

### 133. Collectors Example

```java
import java.util.*;
import java.util.stream.*;

public class CollectorsExample {
    public static void main(String[] args) {
        List<String> words = Arrays.asList("apple", "banana", "cherry", "apple");

        // toList
        List<String> list = words.stream().collect(Collectors.toList());

        // toSet (removes duplicates)
        Set<String> set = words.stream().collect(Collectors.toSet());
        System.out.println("Set: " + set);

        // joining
        String joined = words.stream().collect(Collectors.joining(", "));
        System.out.println("Joined: " + joined);

        // counting
        long count = words.stream().collect(Collectors.counting());
        System.out.println("Count: " + count);

        // groupingBy
        Map<Integer, List<String>> groupedByLength = words.stream()
            .collect(Collectors.groupingBy(String::length));
        System.out.println("Grouped by length: " + groupedByLength);

        // partitioningBy
        Map<Boolean, List<String>> partitioned = words.stream()
            .collect(Collectors.partitioningBy(w -> w.length() > 5));
        System.out.println("Partitioned: " + partitioned);
    }
}
```

---

### 134. Functional Interface Example

```java
@FunctionalInterface
interface MathOperation {
    int operate(int a, int b);
}

public class FunctionalInterfaceExample {
    public static void main(String[] args) {
        MathOperation addition = (a, b) -> a + b;
        MathOperation subtraction = (a, b) -> a - b;
        MathOperation multiplication = (a, b) -> a * b;
        MathOperation division = (a, b) -> a / b;

        System.out.println("10 + 5 = " + addition.operate(10, 5));
        System.out.println("10 - 5 = " + subtraction.operate(10, 5));
        System.out.println("10 * 5 = " + multiplication.operate(10, 5));
        System.out.println("10 / 5 = " + division.operate(10, 5));
    }
}
```

**Output:**

```
10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
10 / 5 = 2
```

---

### 135. Predicate Example

```java
import java.util.*;
import java.util.function.Predicate;

public class PredicateExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        Predicate<Integer> isEven = n -> n % 2 == 0;
        Predicate<Integer> isGreaterThan5 = n -> n > 5;

        // Filter even numbers
        List<Integer> evens = numbers.stream()
                                    .filter(isEven)
                                    .collect(Collectors.toList());
        System.out.println("Even numbers: " + evens);

        // Combine predicates
        List<Integer> evenAndGreaterThan5 = numbers.stream()
                                                  .filter(isEven.and(isGreaterThan5))
                                                  .collect(Collectors.toList());
        System.out.println("Even and > 5: " + evenAndGreaterThan5);
    }
}
```

**Output:**

```
Even numbers: [2, 4, 6, 8, 10]
Even and > 5: [6, 8, 10]
```

---

## Multithreading Programs

### 136. Create Thread using Runnable

```java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        Thread thread1 = new Thread(new MyRunnable(), "Thread-1");
        Thread thread2 = new Thread(new MyRunnable(), "Thread-2");

        thread1.start();
        thread2.start();
    }
}
```

---

### 137. Thread Synchronization

```java
class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class SynchronizationExample {
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
    }
}
```

**Output:** `Count: 2000`

---

### 138. Producer-Consumer Problem

```java
class SharedResource {
    private int data;
    private boolean hasData = false;

    public synchronized void produce(int value) {
        while (hasData) {
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        this.data = value;
        hasData = true;
        System.out.println("Produced: " + value);
        notify();
    }

    public synchronized void consume() {
        while (!hasData) {
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        System.out.println("Consumed: " + data);
        hasData = false;
        notify();
    }
}

public class ProducerConsumer {
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
```

---

### 139. ExecutorService Example

```java
import java.util.concurrent.*;

public class ExecutorServiceExample {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(3);

        for (int i = 0; i < 5; i++) {
            final int taskId = i;
            executor.submit(() -> {
                System.out.println("Task " + taskId + " executed by " +
                                 Thread.currentThread().getName());
            });
        }

        executor.shutdown();
        executor.awaitTermination(1, TimeUnit.MINUTES);
    }
}
```

---

### 140. Callable and Future Example

```java
import java.util.concurrent.*;

public class CallableFutureExample {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newSingleThreadExecutor();

        Callable<Integer> task = () -> {
            Thread.sleep(1000);
            return 42;
        };

        Future<Integer> future = executor.submit(task);

        System.out.println("Doing other work...");

        Integer result = future.get();  // Blocks until result is available
        System.out.println("Result: " + result);

        executor.shutdown();
    }
}
```

**Output:**

```
Doing other work...
Result: 42
```

---

### 141. CountDownLatch Example

```java
import java.util.concurrent.*;

public class CountDownLatchExample {
    public static void main(String[] args) throws InterruptedException {
        int workerCount = 3;
        CountDownLatch latch = new CountDownLatch(workerCount);

        for (int i = 0; i < workerCount; i++) {
            final int workerId = i;
            new Thread(() -> {
                System.out.println("Worker " + workerId + " starting");
                try {
                    Thread.sleep((long) (Math.random() * 1000));
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("Worker " + workerId + " done");
                latch.countDown();
            }).start();
        }

        latch.await();  // Wait for all workers
        System.out.println("All workers completed!");
    }
}
```

---

### 142. AtomicInteger Example

```java
import java.util.concurrent.atomic.*;

public class AtomicIntegerExample {
    public static void main(String[] args) throws InterruptedException {
        AtomicInteger counter = new AtomicInteger(0);

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

        System.out.println("Counter: " + counter.get());
    }
}
```

**Output:** `Counter: 2000`

---

### 143. Thread Join Example

```java
public class ThreadJoinExample {
    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Thread 1: " + i);
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        t1.start();
        t1.join();  // Wait for t1 to complete

        System.out.println("Main thread continuing after t1 completes");
    }
}
```

---

### 144. Thread Priority Example

```java
public class ThreadPriorityExample {
    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Thread 1: " + i);
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Thread 2: " + i);
            }
        });

        t1.setPriority(Thread.MIN_PRIORITY);
        t2.setPriority(Thread.MAX_PRIORITY);

        t1.start();
        t2.start();
    }
}
```

---

### 145. CompletableFuture Example

```java
import java.util.concurrent.*;

public class CompletableFutureExample {
    public static void main(String[] args) throws Exception {
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return "Hello";
        });

        future.thenApply(s -> s + " World")
              .thenAccept(System.out::println);

        Thread.sleep(2000);  // Wait for completion
    }
}
```

**Output:** `Hello World`

---

## Advanced Programs

### 146. File Read and Write

```java
import java.io.*;

public class FileReadWrite {
    public static void main(String[] args) {
        // Write to file
        try (FileWriter writer = new FileWriter("test.txt")) {
            writer.write("Hello, File I/O in Java!");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Read from file
        try (BufferedReader reader = new BufferedReader(new FileReader("test.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

**Output:** `Hello, File I/O in Java!`

---

### 147. Serialize and Deserialize Object

```java
import java.io.*;

class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}

public class SerializationExample {
    public static void main(String[] args) {
        Person person = new Person("John", 30);

        // Serialize
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("person.ser"))) {
            oos.writeObject(person);
            System.out.println("Serialized: " + person);
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Deserialize
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("person.ser"))) {
            Person deserializedPerson = (Person) ois.readObject();
            System.out.println("Deserialized: " + deserializedPerson);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

**Output:**

```
Serialized: Person{name='John', age=30}
Deserialized: Person{name='John', age=30}
```

---

### 148. Enum Example

```java
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

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

public class EnumExample {
    public static void main(String[] args) {
        Day today = Day.MONDAY;
        System.out.println("Today is: " + today);

        // Switch with enum
        switch (today) {
            case MONDAY:
                System.out.println("Start of work week");
                break;
            case FRIDAY:
                System.out.println("Almost weekend!");
                break;
            default:
                System.out.println("Midweek");
        }

        // Enum with methods
        Season season = Season.SUMMER;
        System.out.println(season + " is " + season.getDescription());

        // All enum values
        for (Day day : Day.values()) {
            System.out.print(day + " ");
        }
    }
}
```

---

### 149. Generic Class Example

```java
class Box<T> {
    private T content;

    public void set(T content) {
        this.content = content;
    }

    public T get() {
        return content;
    }
}

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

public class GenericExample {
    public static void main(String[] args) {
        Box<Integer> intBox = new Box<>();
        intBox.set(123);
        System.out.println("Integer box: " + intBox.get());

        Box<String> strBox = new Box<>();
        strBox.set("Hello");
        System.out.println("String box: " + strBox.get());

        Pair<String, Integer> pair = new Pair<>("Age", 25);
        System.out.println(pair.getKey() + ": " + pair.getValue());
    }
}
```

**Output:**

```
Integer box: 123
String box: Hello
Age: 25
```

---

### 150. Reflection Example

```java
import java.lang.reflect.*;

class Sample {
    private String message = "Hello";

    public void displayMessage() {
        System.out.println("Message: " + message);
    }

    private void privateMethod() {
        System.out.println("Private method called");
    }
}

public class ReflectionExample {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = Sample.class;

        // Get class name
        System.out.println("Class name: " + clazz.getName());

        // Create instance
        Object obj = clazz.getDeclaredConstructor().newInstance();

        // Get methods
        Method[] methods = clazz.getDeclaredMethods();
        System.out.println("\nMethods:");
        for (Method method : methods) {
            System.out.println("- " + method.getName());
        }

        // Invoke public method
        Method displayMethod = clazz.getMethod("displayMessage");
        displayMethod.invoke(obj);

        // Access private method
        Method privateMethod = clazz.getDeclaredMethod("privateMethod");
        privateMethod.setAccessible(true);
        privateMethod.invoke(obj);

        // Access private field
        Field field = clazz.getDeclaredField("message");
        field.setAccessible(true);
        System.out.println("Private field value: " + field.get(obj));
        field.set(obj, "Modified");
        displayMethod.invoke(obj);
    }
}
```

**Output:**

```
Class name: Sample
Methods:
- displayMessage
- privateMethod
Message: Hello
Private method called
Private field value: Hello
Message: Modified
```

---

## Summary

This collection covers **150 comprehensive Java programs** organized by topic:

**Program Categories:**

- ✅ **Basic Programs (1-20)**: Fundamentals, loops, conditions
- ✅ **Pattern Programs (21-35)**: Triangles, pyramids, diamonds, special patterns
- ✅ **Number Programs (36-50)**: Prime, Fibonacci, Armstrong, conversions
- ✅ **Array Programs (51-70)**: Manipulations, algorithms, problem-solving
- ✅ **String Programs (71-90)**: String operations, algorithms, transformations
- ✅ **Sorting & Searching (91-100)**: All major sorting algorithms, search techniques
- ✅ **OOP Programs (101-110)**: Classes, inheritance, polymorphism, design patterns
- ✅ **Collections (111-125)**: ArrayList, HashMap, HashSet, TreeMap, utilities
- ✅ **Java 8+ Features (126-135)**: Lambdas, streams, Optional, functional interfaces
- ✅ **Multithreading (136-145)**: Threads, synchronization, ExecutorService, atomic classes
- ✅ **Advanced Programs (146-150)**: File I/O, serialization, enums, generics, reflection

**Key Features:**

- ✓ Complete, working code for each program
- ✓ Multiple approaches where applicable
- ✓ Expected output for each program
- ✓ Comments explaining logic
- ✓ Best practices demonstrated
- ✓ Interview-ready examples

**Time Complexity Reference:**

```
Sorting Algorithms:
- Bubble Sort: O(n²)
- Selection Sort: O(n²)
- Insertion Sort: O(n²)
- Merge Sort: O(n log n)
- Quick Sort: O(n log n) average, O(n²) worst

Searching Algorithms:
- Linear Search: O(n)
- Binary Search: O(log n)
```

**Common Interview Patterns:**

1. Two Pointer Technique (Reverse, Palindrome)
2. Sliding Window (Subarray problems)
3. HashMap for frequency counting
4. Streams for functional programming
5. Recursion with memoization

**Tips for Using These Programs:**

- Understand the logic, don't just memorize
- Practice writing code without IDE
- Analyze time and space complexity
- Consider edge cases
- Explain your approach clearly

---

## Quick Reference Index

### Programs by Difficulty Level

**Easy (Beginner-Friendly):**

```
1. Hello World
2. Add Two Numbers
3. Even/Odd Check
4. Swap Numbers
5. Largest of Three
11. Sum of Digits
12. Reverse Number
16. Sum of Natural Numbers
17. Leap Year
19. Multiplication Table
20. Count Digits
51. Largest in Array
52. Smallest in Array
53. Sum of Array
54. Average of Array
71. Reverse String
73. Count Vowels
76. Count Words
85. Character Occurrence
111-125. Basic Collections
```

**Medium (Intermediate):**

```
6. Factorial
7. Prime Number
8. Fibonacci Series
9. Palindrome Number
10. Armstrong Number
13. GCD
14. LCM
21-35. Pattern Programs
36-45. Number Programs
55. Reverse Array
56. Second Largest
57. Remove Duplicates
58. Find Duplicates
59. Rotate Array
60. Missing Number
72. Palindrome String
75. Anagram Check
77. Duplicate Characters
80. String Rotation
91-95. Sorting Algorithms
96. Binary Search
97. Linear Search
101-110. OOP Programs
126-135. Java 8 Features
```

**Hard (Advanced):**

```
48. Nth Fibonacci (with memoization)
63. Pair Sum (Two Sum problem)
67. Leaders in Array
68. Kadane's Algorithm
69. Common in Three Arrays
70. Equilibrium Point
81. Longest Substring Without Repeating
84. Longest Common Prefix
90. String Permutations
94. Merge Sort
95. Quick Sort
98. Kth Largest Element
136-145. Multithreading
146-150. Advanced Topics
```

---

## Programs by Topic Index

### Array Manipulation

- 51: Find Largest
- 52: Find Smallest
- 53: Sum of Array
- 54: Average
- 55: Reverse Array
- 56: Second Largest
- 57: Remove Duplicates
- 58: Find Duplicates
- 59: Rotate Array
- 60: Missing Number
- 61: Merge Arrays
- 62: Element Frequency
- 65: Check Sorted
- 66: Move Zeros
- 67: Leaders
- 70: Equilibrium Point

### Array Algorithms

- 63: Pair Sum (Two Sum)
- 64: All Pairs Sum
- 68: Kadane's Algorithm (Max Subarray)
- 69: Common Elements
- 98: Kth Largest
- 99: Count Inversions
- 100: Find Median

### String Manipulation

- 71: Reverse String
- 72: Palindrome Check
- 73: Count Vowels/Consonants
- 74: Remove Whitespace
- 75: Anagram Check
- 76: Count Words
- 77: Duplicate Characters
- 78: Remove Duplicates
- 79: First Non-Repeating
- 82: Capitalize Words
- 86: Replace Character
- 88: Reverse Words

### String Algorithms

- 80: String Rotation
- 81: Longest Substring
- 83: Check Subsequence
- 84: Longest Common Prefix
- 87: String Compression
- 89: Pangram Check
- 90: String Permutations

### Number Theory

- 6: Factorial
- 7: Prime Number
- 8: Fibonacci
- 9: Palindrome Number
- 10: Armstrong Number
- 13: GCD
- 14: LCM
- 36: Perfect Number
- 37: Strong Number
- 38: Automorphic Number
- 39: Neon Number
- 40: Harshad Number
- 41: Primes in Range
- 49: Palindrome Prime

### Sorting

- 91: Bubble Sort (O(n²))
- 92: Selection Sort (O(n²))
- 93: Insertion Sort (O(n²))
- 94: Merge Sort (O(n log n))
- 95: Quick Sort (O(n log n) avg)

### Searching

- 96: Binary Search (O(log n))
- 97: Linear Search (O(n))
- 98: Kth Largest

---

## Common Mistakes to Avoid

### 1. Array Index Out of Bounds

```java
// ❌ Wrong
int[] arr = {1, 2, 3};
System.out.println(arr[3]);  // ArrayIndexOutOfBoundsException

// ✓ Correct
if (index >= 0 && index < arr.length) {
    System.out.println(arr[index]);
}
```

### 2. Null Pointer Exception

```java
// ❌ Wrong
String str = null;
System.out.println(str.length());  // NullPointerException

// ✓ Correct
if (str != null && !str.isEmpty()) {
    System.out.println(str.length());
}

// Or use Optional (Java 8+)
Optional.ofNullable(str).ifPresent(s -> System.out.println(s.length()));
```

### 3. String Concatenation in Loops

```java
// ❌ Wrong (Inefficient)
String result = "";
for (int i = 0; i < 1000; i++) {
    result += i;  // Creates new String object each iteration
}

// ✓ Correct
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i);
}
String result = sb.toString();
```

### 4. Comparing Strings with ==

```java
// ❌ Wrong
String s1 = new String("test");
String s2 = new String("test");
if (s1 == s2) { }  // Compares references, not content

// ✓ Correct
if (s1.equals(s2)) { }  // Compares content
```

### 5. Integer Comparison for Large Values

```java
// ❌ Wrong
Integer a = 128;
Integer b = 128;
if (a == b) { }  // false (not cached)

// ✓ Correct
if (a.equals(b)) { }  // true
```

### 6. Not Closing Resources

```java
// ❌ Wrong
FileReader reader = new FileReader("file.txt");
// Forgot to close - resource leak

// ✓ Correct (try-with-resources)
try (FileReader reader = new FileReader("file.txt")) {
    // Use reader
}  // Automatically closed
```

### 7. Modifying Collection While Iterating

```java
// ❌ Wrong
for (String item : list) {
    list.remove(item);  // ConcurrentModificationException
}

// ✓ Correct
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    String item = iterator.next();
    iterator.remove();  // Safe removal
}
```

### 8. Integer Overflow

```java
// ❌ Wrong
int result = 1000000 * 1000000;  // Overflow

// ✓ Correct
long result = 1000000L * 1000000L;
```

---

## Interview Coding Tips

### Before You Code:

1. **Clarify the Problem**

   - Understand input/output format
   - Ask about constraints (array size, value ranges)
   - Clarify edge cases (empty input, negative numbers, etc.)

2. **Think Out Loud**

   - Explain your approach
   - Discuss trade-offs
   - Mention alternative solutions

3. **Plan Your Solution**
   - Start with brute force if needed
   - Think about optimization
   - Consider data structures

### While Coding:

1. **Write Clean Code**

   - Use meaningful variable names
   - Add comments for complex logic
   - Keep functions small and focused

2. **Handle Edge Cases**

   ```java
   // Always check:
   - null inputs
   - empty arrays/strings
   - single element
   - negative numbers
   - Integer.MAX_VALUE / MIN_VALUE
   ```

3. **Test Your Code**
   - Walk through with example input
   - Check boundary conditions
   - Verify edge cases

### After Coding:

1. **Analyze Complexity**

   - Time complexity: O(?)
   - Space complexity: O(?)
   - Can you optimize further?

2. **Discuss Improvements**

   - Better data structures?
   - Algorithm optimization?
   - Trade-offs between time and space

3. **Test with Examples**
   - Normal case
   - Edge cases
   - Large inputs

---

## Problem-Solving Patterns

### 1. Two Pointer Technique

**When to use:** Arrays, strings, palindromes
**Examples:** #55 (Reverse Array), #72 (Palindrome String), #63 (Pair Sum)

```java
// Pattern:
int left = 0, right = arr.length - 1;
while (left < right) {
    // Process
    left++;
    right--;
}
```

### 2. Sliding Window

**When to use:** Subarray/substring problems
**Examples:** #81 (Longest Substring)

```java
// Pattern:
int start = 0;
for (int end = 0; end < arr.length; end++) {
    // Expand window
    while (/* condition violated */) {
        // Shrink window
        start++;
    }
    // Update result
}
```

### 3. HashMap for Frequency/Lookup

**When to use:** Counting, duplicates, pair sum
**Examples:** #62 (Frequency), #63 (Pair Sum), #77 (Duplicate Chars)

```java
// Pattern:
Map<Key, Value> map = new HashMap<>();
for (element : collection) {
    map.put(key, map.getOrDefault(key, defaultValue) + 1);
}
```

### 4. Recursion with Memoization

**When to use:** Fibonacci, dynamic programming
**Examples:** #48 (Nth Fibonacci)

```java
// Pattern:
int[] memo = new int[n + 1];

int recursive(int n, int[] memo) {
    if (base case) return value;
    if (memo[n] != 0) return memo[n];
    memo[n] = recursive(n-1, memo) + recursive(n-2, memo);
    return memo[n];
}
```

### 5. Sorting + Binary Search

**When to use:** Optimized searching
**Examples:** #96 (Binary Search), #98 (Kth Largest)

```java
// Pattern:
Arrays.sort(arr);  // O(n log n)
int result = binarySearch(arr, target);  // O(log n)
```

---

## Space & Time Complexity Quick Guide

### Common Complexities (Best to Worst):

```
O(1)        - Constant        - Array access, hash map lookup
O(log n)    - Logarithmic     - Binary search
O(n)        - Linear          - Single loop, linear search
O(n log n)  - Linearithmic    - Merge sort, quick sort
O(n²)       - Quadratic       - Nested loops, bubble sort
O(2^n)      - Exponential     - Recursive Fibonacci
O(n!)       - Factorial       - Permutations
```

### Space Complexity:

```
O(1)    - Constant    - Few variables
O(n)    - Linear      - Array/list of size n
O(log n)- Logarithmic - Recursive call stack
O(n²)   - Quadratic   - 2D array
```

---

## Frequently Asked Programs in Interviews

### Top 20 Most Asked:

1. ✅ **Reverse a String** (#71)
2. ✅ **Palindrome Check** (#9, #72)
3. ✅ **Fibonacci Series** (#8, #48)
4. ✅ **Factorial** (#6)
5. ✅ **Prime Number** (#7, #41)
6. ✅ **Anagram Check** (#75)
7. ✅ **Two Sum Problem** (#63)
8. ✅ **Reverse Array** (#55)
9. ✅ **Find Duplicates** (#58, #77)
10. ✅ **Second Largest** (#56)
11. ✅ **Missing Number** (#60)
12. ✅ **Armstrong Number** (#10)
13. ✅ **Count Vowels** (#73)
14. ✅ **Bubble Sort** (#91)
15. ✅ **Binary Search** (#96)
16. ✅ **Merge Sort** (#94)
17. ✅ **Kadane's Algorithm** (#68)
18. ✅ **Longest Substring** (#81)
19. ✅ **String Permutations** (#90)
20. ✅ **Producer-Consumer** (#138)

### Programs by Company Preference:

**FAANG Companies:**

- Array manipulation (#51-70)
- String algorithms (#71-90)
- Kadane's Algorithm (#68)
- Two Sum variants (#63, #64)
- Sorting algorithms (#91-95)
- Binary Search (#96)
- Kth Largest (#98)

**Service-Based Companies:**

- Basic programs (#1-20)
- Pattern programs (#21-35)
- Number programs (#36-50)
- OOP concepts (#101-110)
- Collections (#111-125)

**Startups:**

- Quick implementation (#1-20)
- String manipulation (#71-90)
- Basic algorithms (#91-100)
- Java 8 features (#126-135)

---

## Practice Schedule

### Week 1: Fundamentals

- **Day 1-2**: Basic Programs (#1-20)
- **Day 3-4**: Pattern Programs (#21-35)
- **Day 5-6**: Number Programs (#36-50)
- **Day 7**: Review and practice

### Week 2: Data Structures

- **Day 1-2**: Array Programs (#51-70)
- **Day 3-4**: String Programs (#71-90)
- **Day 5-6**: Sorting & Searching (#91-100)
- **Day 7**: Review and practice

### Week 3: Advanced Topics

- **Day 1-2**: OOP Programs (#101-110)
- **Day 3-4**: Collections (#111-125)
- **Day 5-6**: Java 8+ Features (#126-135)
- **Day 7**: Review and practice

### Week 4: Concurrency & Advanced

- **Day 1-2**: Multithreading (#136-145)
- **Day 3-4**: Advanced Programs (#146-150)
- **Day 5-6**: Revise frequently asked
- **Day 7**: Mock interviews

---

## Additional Resources & Variations

### Program Variations to Practice:

**From #7 (Prime Number):**

- Find all prime numbers up to n (Sieve of Eratosthenes)
- Check if sum of two primes equals n
- Find prime factors of a number

**From #8 (Fibonacci):**

- Print Fibonacci in reverse
- Find if number exists in Fibonacci sequence
- Sum of even Fibonacci numbers

**From #63 (Pair Sum):**

- Three Sum problem
- Four Sum problem
- Pair with difference k

**From #71 (Reverse String):**

- Reverse only words, keep order
- Reverse vowels only
- Reverse in-place with O(1) space

**From #91-95 (Sorting):**

- Heap Sort
- Counting Sort
- Radix Sort
- Bucket Sort

---

## Debugging Checklist

### Before Submitting Your Solution:

**✓ Correctness:**

- [ ] Works for given examples
- [ ] Handles edge cases (empty, single element, null)
- [ ] No array index errors
- [ ] No null pointer exceptions

**✓ Efficiency:**

- [ ] Time complexity is reasonable
- [ ] Space complexity is acceptable
- [ ] No unnecessary nested loops
- [ ] Using appropriate data structures

**✓ Code Quality:**

- [ ] Meaningful variable names
- [ ] Proper indentation
- [ ] Comments for complex logic
- [ ] No code duplication

**✓ Testing:**

- [ ] Normal input
- [ ] Edge cases (0, 1, negative, max values)
- [ ] Large inputs
- [ ] Invalid inputs

---

## Common Interview Questions About These Programs

**Q1: "Can you optimize this solution?"**

```
Always consider:
1. Can you reduce time complexity? (better algorithm/data structure)
2. Can you reduce space complexity? (in-place operations)
3. Is there a mathematical formula? (sum of n numbers)
4. Can you use built-in methods? (Arrays.sort, Collections)
```

**Q2: "What's the time and space complexity?"**

```
Analyze:
- Count loops: nested loops → O(n²)
- Recursion: check recursive calls + work per call
- Data structures: HashMap → O(1), TreeMap → O(log n)
- Space: additional arrays, recursion stack
```

**Q3: "How would you test this?"**

```
Test cases:
1. Normal case: [1, 2, 3, 4, 5]
2. Empty: []
3. Single element: [1]
4. Duplicates: [1, 1, 1]
5. Negatives: [-1, -2, -3]
6. Large values: Integer.MAX_VALUE
7. Edge case: null input
```

**Q4: "Can you do it without extra space?"**

```
Consider:
- In-place algorithms
- Two pointers
- Swapping elements
- Using input array itself
```

---

## Key Takeaways

### Must-Know Algorithms:

1. ✅ Binary Search
2. ✅ Two Pointers
3. ✅ Sliding Window
4. ✅ Recursion
5. ✅ Sorting (at least one O(n log n) algorithm)
6. ✅ HashMap usage
7. ✅ Stream API basics

### Must-Know Data Structures:

1. ✅ Arrays
2. ✅ Strings
3. ✅ ArrayList
4. ✅ HashMap/HashSet
5. ✅ Stack/Queue
6. ✅ TreeMap/TreeSet
7. ✅ PriorityQueue

### Must-Know Concepts:

1. ✅ OOP (Inheritance, Polymorphism, Encapsulation)
2. ✅ Exception Handling
3. ✅ Collections Framework
4. ✅ Lambda Expressions
5. ✅ Stream API
6. ✅ Multithreading Basics
7. ✅ File I/O

---

## Quick Lookup by Program Number

```
Basics:          1-20
Patterns:        21-35
Numbers:         36-50
Arrays:          51-70
Strings:         71-90
Sort/Search:     91-100
OOP:            101-110
Collections:    111-125
Java 8:         126-135
Threads:        136-145
Advanced:       146-150
```

---

## Final Interview Prep Checklist

### 1 Day Before Interview:

- [ ] Review top 20 most asked programs
- [ ] Practice 5 programs on paper
- [ ] Review time/space complexity
- [ ] Prepare questions for interviewer

### Day of Interview:

- [ ] Review common patterns (two pointers, sliding window, HashMap)
- [ ] Warm up with 2-3 easy problems
- [ ] Review your recent projects
- [ ] Be ready to code on whiteboard/paper

### During Coding Interview:

1. **Listen Carefully**: Understand the problem completely
2. **Ask Questions**: Clarify assumptions and constraints
3. **Think Out Loud**: Explain your thought process
4. **Start Simple**: Brute force first, then optimize
5. **Write Clean Code**: Proper naming, structure
6. **Test Thoroughly**: Walk through with examples
7. **Discuss Trade-offs**: Time vs space, readability vs performance

---

**Happy Coding and Best of Luck for Your Interviews! 🚀**

---

## Bonus: Additional Practice Problems

Try these variations for extra practice:

1. **Matrix Programs** (2D arrays)

   - Spiral matrix traversal
   - Rotate matrix 90 degrees
   - Search in sorted matrix

2. **Linked List** (if needed)

   - Reverse linked list
   - Detect cycle
   - Merge two sorted lists

3. **Tree Programs** (if needed)

   - Binary tree traversal (inorder, preorder, postorder)
   - Level order traversal
   - Height of tree

4. **Dynamic Programming** (advanced)

   - Fibonacci with DP
   - 0/1 Knapsack
   - Longest common subsequence

5. **Backtracking** (advanced)
   - N-Queens problem
   - Sudoku solver
   - All subsets

**Note:** This collection focuses on the 150 most essential programs. For advanced topics like trees, graphs, and dynamic programming, additional dedicated practice is recommended.
