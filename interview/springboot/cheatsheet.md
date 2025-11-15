# Spring Boot Quick Reference Cheat Sheet

> **Purpose:** Fast reference for Spring Boot annotations, concepts, and interview questions. Everything you need at a glance!

---

## 📋 Table of Contents

1. [Spring Boot Basics](#spring-boot-basics)
2. [Annotations Reference](#annotations-reference)
3. [Dependency Injection](#dependency-injection)
4. [REST API Development](#rest-api-development)
5. [Data Access (JPA/Hibernate)](#data-access-jpahibernate)
6. [Spring Security](#spring-security)
7. [Configuration](#configuration)
8. [Exception Handling](#exception-handling)
9. [Testing](#testing)
10. [Common Interview Questions](#common-interview-questions)

---

## Spring Boot Basics

### What is Spring Boot?

**Spring Boot** is an opinionated framework built on top of Spring Framework that simplifies:

- Auto-configuration (no XML)
- Embedded servers (Tomcat, Jetty, Undertow)
- Production-ready features
- Starter dependencies
- Rapid application development

### Spring vs Spring Boot

| Feature         | Spring            | Spring Boot                   |
| --------------- | ----------------- | ----------------------------- |
| Configuration   | XML-heavy         | Convention over configuration |
| Setup time      | Manual, complex   | Quick, auto-configuration     |
| Embedded server | Need external     | Built-in Tomcat/Jetty         |
| Deployment      | WAR to server     | Standalone JAR                |
| Dependencies    | Manual management | Starter POMs                  |

### Project Structure

```
my-spring-boot-app/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/demo/
│   │   │       ├── DemoApplication.java (Main class)
│   │   │       ├── controller/
│   │   │       ├── service/
│   │   │       ├── repository/
│   │   │       ├── model/
│   │   │       ├── dto/
│   │   │       ├── config/
│   │   │       └── exception/
│   │   └── resources/
│   │       ├── application.properties
│   │       ├── application.yml
│   │       └── static/
│   └── test/
├── pom.xml (Maven) or build.gradle (Gradle)
└── README.md
```

### Main Application Class

```java
@SpringBootApplication  // = @Configuration + @EnableAutoConfiguration + @ComponentScan
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

---

## Annotations Reference

### Core Annotations

| Annotation               | Purpose                    | Example                                          |
| ------------------------ | -------------------------- | ------------------------------------------------ |
| `@SpringBootApplication` | Main application class     | `@SpringBootApplication public class App { }`    |
| `@Component`             | Generic Spring component   | `@Component public class MyComponent { }`        |
| `@Service`               | Service layer component    | `@Service public class UserService { }`          |
| `@Repository`            | DAO/Repository component   | `@Repository public class UserRepo { }`          |
| `@Controller`            | MVC controller             | `@Controller public class HomeController { }`    |
| `@RestController`        | REST API controller        | `@RestController public class ApiController { }` |
| `@Configuration`         | Configuration class        | `@Configuration public class AppConfig { }`      |
| `@Bean`                  | Define a bean              | `@Bean public MyBean myBean() { }`               |
| `@Autowired`             | Dependency injection       | `@Autowired private UserService service;`        |
| `@Qualifier`             | Specify bean by name       | `@Qualifier("specific") @Autowired`              |
| `@Primary`               | Primary bean when multiple | `@Primary @Bean`                                 |
| `@Lazy`                  | Lazy initialization        | `@Lazy @Component`                               |
| `@Scope`                 | Bean scope                 | `@Scope("prototype")`                            |
| `@Value`                 | Inject property value      | `@Value("${app.name}")`                          |

### REST Annotations

| Annotation        | HTTP Method | Purpose                |
| ----------------- | ----------- | ---------------------- |
| `@GetMapping`     | GET         | Retrieve data          |
| `@PostMapping`    | POST        | Create data            |
| `@PutMapping`     | PUT         | Update entire resource |
| `@PatchMapping`   | PATCH       | Partial update         |
| `@DeleteMapping`  | DELETE      | Delete data            |
| `@RequestMapping` | Any         | Generic mapping        |

```java
@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping                              // GET /api/users
    public List<User> getAll() { }

    @GetMapping("/{id}")                     // GET /api/users/5
    public User getById(@PathVariable Long id) { }

    @PostMapping                             // POST /api/users
    public User create(@RequestBody User user) { }

    @PutMapping("/{id}")                     // PUT /api/users/5
    public User update(@PathVariable Long id, @RequestBody User user) { }

    @DeleteMapping("/{id}")                  // DELETE /api/users/5
    public void delete(@PathVariable Long id) { }

    @GetMapping("/search")                   // GET /api/users/search?name=John
    public List<User> search(@RequestParam String name) { }
}
```

### Request Parameter Annotations

| Annotation       | Purpose                   | Example                                           |
| ---------------- | ------------------------- | ------------------------------------------------- |
| `@PathVariable`  | Extract from URL path     | `/users/{id}` → `@PathVariable Long id`           |
| `@RequestParam`  | Extract from query string | `/search?name=John` → `@RequestParam String name` |
| `@RequestBody`   | Parse JSON/XML body       | `@RequestBody User user`                          |
| `@RequestHeader` | Extract HTTP header       | `@RequestHeader("Authorization") String token`    |
| `@CookieValue`   | Extract cookie value      | `@CookieValue("session") String session`          |

### Validation Annotations

```java
import javax.validation.constraints.*;

public class User {
    @NotNull(message = "Name cannot be null")
    private String name;

    @NotEmpty
    private String username;

    @NotBlank
    private String password;

    @Email(message = "Invalid email")
    private String email;

    @Size(min = 2, max = 30)
    private String firstName;

    @Min(18)
    @Max(100)
    private int age;

    @Pattern(regexp = "^\\d{10}$")
    private String phone;

    @Past
    private LocalDate birthDate;

    @Future
    private LocalDate appointmentDate;
}

// In controller
@PostMapping("/users")
public ResponseEntity<User> create(@Valid @RequestBody User user) {
    // If validation fails, throws MethodArgumentNotValidException
}
```

### JPA/Hibernate Annotations

```java
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name", nullable = false, unique = true, length = 50)
    private String username;

    @Column(nullable = false)
    private String email;

    @Temporal(TemporalType.DATE)
    private Date birthDate;

    @Transient  // Not persisted
    private int age;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    // Relationships
    @OneToOne
    @JoinColumn(name = "profile_id")
    private Profile profile;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Order> orders;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    @ManyToMany
    @JoinTable(
        name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles;
}
```

### Transaction Annotations

```java
@Transactional                          // Method runs in transaction
@Transactional(readOnly = true)        // Read-only transaction
@Transactional(isolation = Isolation.SERIALIZABLE)
@Transactional(propagation = Propagation.REQUIRED)
@Transactional(rollbackFor = Exception.class)
@Transactional(timeout = 30)           // 30 seconds timeout
```

---

## Dependency Injection

### Types of DI

#### 1. Constructor Injection (Recommended)

```java
@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired  // Optional in Spring 4.3+
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
```

#### 2. Setter Injection

```java
@Service
public class UserService {
    private UserRepository userRepository;

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
```

#### 3. Field Injection (Not Recommended)

```java
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;  // Hard to test
}
```

### Bean Scopes

| Scope         | Description                                 | Lifecycle           |
| ------------- | ------------------------------------------- | ------------------- |
| `singleton`   | One instance per Spring container (default) | Container lifecycle |
| `prototype`   | New instance each time                      | Per request         |
| `request`     | One per HTTP request (web)                  | HTTP request        |
| `session`     | One per HTTP session (web)                  | HTTP session        |
| `application` | One per ServletContext                      | ServletContext      |

```java
@Component
@Scope("prototype")
public class MyBean { }
```

---

## REST API Development

### Simple REST Controller

```java
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Long id) {
        return productService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product) {
        Product saved = productService.save(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(
            @PathVariable Long id,
            @RequestBody Product product) {
        Product updated = productService.update(id, product);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
```

### HTTP Status Codes

| Code | Meaning               | When to Use                      |
| ---- | --------------------- | -------------------------------- |
| 200  | OK                    | Successful GET, PUT, PATCH       |
| 201  | Created               | Successful POST                  |
| 204  | No Content            | Successful DELETE                |
| 400  | Bad Request           | Invalid input/validation error   |
| 401  | Unauthorized          | Authentication required          |
| 403  | Forbidden             | Authenticated but not authorized |
| 404  | Not Found             | Resource doesn't exist           |
| 500  | Internal Server Error | Server error                     |

### ResponseEntity

```java
// Success responses
return ResponseEntity.ok(data);                          // 200
return ResponseEntity.ok().body(data);                   // 200
return ResponseEntity.status(HttpStatus.CREATED).body(data);  // 201
return ResponseEntity.noContent().build();               // 204

// Error responses
return ResponseEntity.notFound().build();                // 404
return ResponseEntity.badRequest().body("Invalid");      // 400
return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();  // 500

// With headers
return ResponseEntity.ok()
        .header("Custom-Header", "value")
        .body(data);
```

---

## Data Access (JPA/Hibernate)

### JpaRepository

```java
public interface UserRepository extends JpaRepository<User, Long> {
    // No implementation needed - Spring provides it!

    // Custom queries (method name based)
    List<User> findByName(String name);
    List<User> findByEmailAndName(String email, String name);
    List<User> findByAgeBetween(int start, int end);
    List<User> findByNameContaining(String keyword);
    List<User> findByOrderByNameAsc();
    List<User> findTop10ByOrderBySalaryDesc();

    // Custom query using @Query
    @Query("SELECT u FROM User u WHERE u.age > :age")
    List<User> findUsersOlderThan(@Param("age") int age);

    @Query(value = "SELECT * FROM users WHERE salary > ?1", nativeQuery = true)
    List<User> findBySalaryNative(double salary);

    // Modifying queries
    @Modifying
    @Query("UPDATE User u SET u.status = :status WHERE u.id = :id")
    int updateUserStatus(@Param("id") Long id, @Param("status") String status);
}
```

### Common Repository Methods

```java
// Inherited from JpaRepository
save(entity)              // Create or update
saveAll(entities)         // Batch save
findById(id)              // Find by ID (returns Optional)
findAll()                 // Get all
existsById(id)            // Check exists
count()                   // Count all
deleteById(id)            // Delete by ID
delete(entity)            // Delete entity
deleteAll()               // Delete all
```

### Query Method Keywords

```java
findBy...         // Find entities
readBy...         // Same as findBy
getBy...          // Same as findBy
queryBy...        // Same as findBy
countBy...        // Count matching
deleteBy...       // Delete matching
existsBy...       // Check if exists

// Conditions
findByNameAndAge(String name, int age)
findByNameOrAge(String name, int age)
findByAgeBetween(int start, int end)
findByAgeGreaterThan(int age)
findByAgeLessThan(int age)
findByNameLike(String pattern)
findByNameContaining(String keyword)
findByNameStartingWith(String prefix)
findByNameEndingWith(String suffix)
findByNameIn(List<String> names)
findByNameIsNull()
findByNameIsNotNull()
findByActiveTrue()
findByActiveFalse()

// Sorting
findByNameOrderByAgeDesc(String name)
findAll(Sort.by("name").ascending())
findAll(Sort.by("name").descending())

// Pagination
findAll(PageRequest.of(0, 10))  // Page 0, size 10
```

### Entity Relationships

```java
// One-to-One
@Entity
public class User {
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profile_id")
    private Profile profile;
}

// One-to-Many / Many-to-One
@Entity
public class Department {
    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
    private List<Employee> employees;
}

@Entity
public class Employee {
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
}

// Many-to-Many
@Entity
public class Student {
    @ManyToMany
    @JoinTable(
        name = "student_courses",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses;
}
```

### Cascade Types

```java
CascadeType.PERSIST   // Save child when parent saved
CascadeType.MERGE     // Update child when parent updated
CascadeType.REMOVE    // Delete child when parent deleted
CascadeType.REFRESH   // Refresh child when parent refreshed
CascadeType.DETACH    // Detach child when parent detached
CascadeType.ALL       // All of the above
```

### Fetch Types

```java
FetchType.LAZY    // Load on demand (default for @OneToMany, @ManyToMany)
FetchType.EAGER   // Load immediately (default for @OneToOne, @ManyToOne)

@OneToMany(fetch = FetchType.LAZY)  // Recommended for collections
@ManyToOne(fetch = FetchType.EAGER) // OK for single entity
```

---

## Configuration

### application.properties

```properties
# Server configuration
server.port=8080
server.servlet.context-path=/api

# Database configuration (MySQL)
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.jpa.properties.hibernate.format_sql=true

# Logging
logging.level.root=INFO
logging.level.com.example=DEBUG
logging.file.name=app.log

# Jackson (JSON)
spring.jackson.serialization.indent-output=true
spring.jackson.default-property-inclusion=non_null
```

### application.yml (Alternative)

```yaml
server:
  port: 8080
  servlet:
    context-path: /api

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: password
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
  profiles:
    active: dev

logging:
  level:
    root: INFO
    com.example: DEBUG
```

### Configuration Class

```java
@Configuration
public class AppConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Value("${app.jwt.secret}")
    private String jwtSecret;
}
```

### Profiles

```properties
# application.properties
spring.profiles.active=dev

# application-dev.properties
spring.datasource.url=jdbc:mysql://localhost:3306/devdb

# application-prod.properties
spring.datasource.url=jdbc:mysql://prod-server:3306/proddb
```

```java
@Configuration
@Profile("dev")
public class DevConfig { }

@Service
@Profile("prod")
public class ProdService { }
```

---

## Spring Security

### Basic Security Configuration

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .httpBasic()  // or .formLogin() or .oauth2Login()
            .and()
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

### Security Annotations

```java
@PreAuthorize("hasRole('ADMIN')")
public void adminOnlyMethod() { }

@PreAuthorize("hasAnyRole('ADMIN', 'USER')")
public void authorizedMethod() { }

@PreAuthorize("#username == authentication.principal.username")
public void ownResourceOnly(String username) { }

@Secured("ROLE_ADMIN")
public void securedMethod() { }

@RolesAllowed("ADMIN")
public void roleAllowedMethod() { }
```

### JWT Authentication Example

```java
@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secret;

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000))  // 24 hours
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public boolean validateToken(String token, String username) {
        return username.equals(extractUsername(token)) && !isTokenExpired(token);
    }
}
```

---

## Exception Handling

### @ControllerAdvice (Global Exception Handler)

```java
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error ->
            errors.put(error.getField(), error.getDefaultMessage())
        );
        return ResponseEntity.badRequest().body(errors);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneral(Exception ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Internal server error",
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}
```

### Custom Exception

```java
@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}

// Usage
throw new ResourceNotFoundException("User not found with id: " + id);
```

---

## Testing

### Test Annotations

```java
@SpringBootTest              // Full Spring context
@WebMvcTest                  // Only web layer
@DataJpaTest                 // Only JPA components
@MockBean                    // Mock a bean
@Autowired                   // Inject real bean
@Test                        // Test method
@BeforeEach                  // Run before each test
@AfterEach                   // Run after each test
```

### Unit Test Example

```java
@SpringBootTest
class UserServiceTest {

    @Autowired
    private UserService userService;

    @MockBean
    private UserRepository userRepository;

    @Test
    void testFindById() {
        // Arrange
        User user = new User(1L, "John", "john@example.com");
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        // Act
        User found = userService.findById(1L);

        // Assert
        assertNotNull(found);
        assertEquals("John", found.getName());
        verify(userRepository, times(1)).findById(1L);
    }
}
```

### Controller Test

```java
@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    void testGetUser() throws Exception {
        User user = new User(1L, "John", "john@example.com");
        when(userService.findById(1L)).thenReturn(user);

        mockMvc.perform(get("/api/users/1"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.name").value("John"))
               .andExpect(jsonPath("$.email").value("john@example.com"));
    }

    @Test
    void testCreateUser() throws Exception {
        String userJson = """
            {
                "name": "John",
                "email": "john@example.com"
            }
            """;

        mockMvc.perform(post("/api/users")
               .contentType(MediaType.APPLICATION_JSON)
               .content(userJson))
               .andExpect(status().isCreated());
    }
}
```

---

## Common Interview Questions

### 1. **What is Spring Boot? Why use it?**

**Answer:** Spring Boot is a framework that simplifies Spring application development by providing:

- Auto-configuration
- Embedded servers (no need for external Tomcat)
- Starter dependencies (spring-boot-starter-web, spring-boot-starter-data-jpa)
- Production-ready features (metrics, health checks)
- Convention over configuration

**Benefits:** Faster development, less boilerplate, easier deployment, microservices-friendly.

### 2. **@Component vs @Service vs @Repository vs @Controller?**

| Annotation        | Layer          | Purpose         | Special Feature                            |
| ----------------- | -------------- | --------------- | ------------------------------------------ |
| `@Component`      | Generic        | Any Spring bean | None                                       |
| `@Service`        | Business Logic | Service layer   | None (semantic)                            |
| `@Repository`     | Data Access    | DAO/Repository  | Exception translation                      |
| `@Controller`     | Presentation   | MVC controller  | Returns views                              |
| `@RestController` | API            | REST endpoints  | Returns JSON (@Controller + @ResponseBody) |

**Note:** All are functionally same (stereotypes of @Component), but used for semantic clarity.

### 3. **What is Dependency Injection?**

**Answer:** Design pattern where objects receive dependencies from external source rather than creating them.

**Benefits:**

- Loose coupling
- Easier testing (mock dependencies)
- Better code organization
- Single Responsibility Principle

```java
// Without DI (tight coupling)
public class UserService {
    private UserRepository repo = new UserRepository();  // ❌ Creates itself
}

// With DI (loose coupling)
public class UserService {
    private final UserRepository repo;

    @Autowired
    public UserService(UserRepository repo) {  // ✅ Injected
        this.repo = repo;
    }
}
```

### 4. **Bean Scopes in Spring?**

- **Singleton** (default): One instance per container
- **Prototype**: New instance each time
- **Request**: One per HTTP request
- **Session**: One per HTTP session
- **Application**: One per ServletContext

### 5. **@Autowired vs @Inject vs @Resource?**

| Annotation   | Source  | By Type | By Name         | Required    |
| ------------ | ------- | ------- | --------------- | ----------- |
| `@Autowired` | Spring  | ✅ Yes  | With @Qualifier | Default yes |
| `@Inject`    | JSR-330 | ✅ Yes  | With @Named     | Always      |
| `@Resource`  | JSR-250 | ❌ No   | ✅ Yes          | Always      |

**Recommendation:** Use @Autowired (Spring standard)

### 6. **What is @SpringBootApplication?**

**Answer:** Composite annotation that combines:

- `@Configuration` - Marks as configuration class
- `@EnableAutoConfiguration` - Enables auto-configuration
- `@ComponentScan` - Scans for components in package and sub-packages

```java
@SpringBootApplication
// Is equivalent to:
@Configuration
@EnableAutoConfiguration
@ComponentScan
public class Application { }
```

### 7. **How does Auto-Configuration work?**

Spring Boot uses `@Conditional` annotations to automatically configure beans based on:

- Classpath dependencies
- Existing beans
- Property values
- Missing beans

Example: If H2 is on classpath, auto-configures embedded database.

### 8. **What are Spring Boot Starters?**

Pre-packaged dependency descriptors:

```xml
<!-- Web applications -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!-- JPA/Hibernate -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<!-- Security -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<!-- Testing -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
</dependency>
```

### 9. **What is Actuator?**

Production-ready features for monitoring and management:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

**Endpoints:**

- `/actuator/health` - Application health
- `/actuator/metrics` - Application metrics
- `/actuator/info` - Application info
- `/actuator/env` - Environment properties
- `/actuator/loggers` - Logger configuration

```properties
# Enable endpoints
management.endpoints.web.exposure.include=health,metrics,info
management.endpoint.health.show-details=always
```

### 10. **@RequestBody vs @RequestParam vs @PathVariable?**

```java
// @PathVariable - From URL path
@GetMapping("/users/{id}")
public User get(@PathVariable Long id) { }
// URL: /users/5

// @RequestParam - From query string
@GetMapping("/users")
public List<User> search(@RequestParam String name) { }
// URL: /users?name=John

// @RequestBody - From request body (JSON/XML)
@PostMapping("/users")
public User create(@RequestBody User user) { }
// Body: { "name": "John", "email": "john@example.com" }
```

### 11. **What is @Transactional?**

Manages database transactions (ACID properties):

```java
@Transactional
public void transferMoney(Long from, Long to, double amount) {
    accountService.debit(from, amount);   // If this fails...
    accountService.credit(to, amount);     // ...this won't execute
}
// All or nothing - both succeed or both rollback
```

**Attributes:**

- `readOnly = true` - Optimize for read operations
- `isolation` - Isolation level
- `propagation` - Transaction propagation
- `rollbackFor` - Exceptions that trigger rollback
- `timeout` - Transaction timeout

### 12. **Constructor Injection vs Field Injection?**

```java
// ✅ Constructor Injection (Recommended)
@Service
public class UserService {
    private final UserRepository repository;

    public UserService(UserRepository repository) {  // Immutable, testable
        this.repository = repository;
    }
}

// ❌ Field Injection (Not recommended)
@Service
public class UserService {
    @Autowired
    private UserRepository repository;  // Hard to test, mutable
}
```

**Why Constructor is Better:**

- ✅ Immutable (final fields)
- ✅ Easier to test (can pass mocks)
- ✅ Clear dependencies
- ✅ Prevents circular dependencies

### 13. **What is AOP (Aspect-Oriented Programming)?**

Cross-cutting concerns (logging, security, transactions) separated from business logic.

```java
@Aspect
@Component
public class LoggingAspect {

    @Before("execution(* com.example.service.*.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("Calling: " + joinPoint.getSignature());
    }

    @After("execution(* com.example.service.*.*(..))")
    public void logAfter(JoinPoint joinPoint) {
        System.out.println("Completed: " + joinPoint.getSignature());
    }

    @Around("@annotation(LogExecutionTime)")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        Object proceed = joinPoint.proceed();
        long executionTime = System.currentTimeMillis() - start;
        System.out.println(joinPoint.getSignature() + " executed in " + executionTime + "ms");
        return proceed;
    }
}
```

**AOP Terms:**

- **Aspect**: Cross-cutting concern (logging, security)
- **Join Point**: Point where advice can be applied
- **Advice**: Action taken (@Before, @After, @Around)
- **Pointcut**: Expression matching join points

### 14. **What is lazy loading vs eager loading?**

```java
// Lazy loading (default for collections)
@OneToMany(fetch = FetchType.LAZY)
private List<Order> orders;  // Loaded only when accessed

// Eager loading (default for single entities)
@ManyToOne(fetch = FetchType.EAGER)
private Department department;  // Loaded immediately
```

**When to use:**

- **LAZY**: Large collections, not always needed (prevents N+1 problem)
- **EAGER**: Always needed, small data

### 15. **N+1 Query Problem?**

**Problem:**

```java
List<User> users = userRepo.findAll();  // 1 query
for (User user : users) {
    user.getOrders().size();  // N queries (one per user)
}
// Total: 1 + N queries
```

**Solutions:**

```java
// 1. JOIN FETCH
@Query("SELECT u FROM User u JOIN FETCH u.orders")
List<User> findAllWithOrders();

// 2. Entity Graph
@EntityGraph(attributePaths = {"orders"})
List<User> findAll();

// 3. Batch size
@BatchSize(size = 10)
@OneToMany
private List<Order> orders;
```

---

## Spring Boot Layers Architecture

```
┌─────────────────────────────────────┐
│         Controller Layer            │  ← @RestController, @Controller
│  (Handles HTTP requests/responses)  │     @GetMapping, @PostMapping
├─────────────────────────────────────┤
│          Service Layer              │  ← @Service
│   (Business logic, transactions)    │     @Transactional
├─────────────────────────────────────┤
│        Repository Layer             │  ← @Repository
│    (Data access, JPA queries)       │     extends JpaRepository
├─────────────────────────────────────┤
│          Database Layer             │  ← MySQL, PostgreSQL, MongoDB
│      (Actual data storage)          │
└─────────────────────────────────────┘
```

### Layer Responsibilities

**Controller:**

- Handle HTTP requests
- Validate input
- Call service layer
- Return HTTP responses

**Service:**

- Business logic
- Transaction management
- Call repository
- Data transformation

**Repository:**

- Database operations
- CRUD operations
- Custom queries
- Data persistence

---

## REST API Best Practices

### RESTful Endpoint Design

```
GET     /api/users          - Get all users
GET     /api/users/{id}     - Get user by ID
POST    /api/users          - Create user
PUT     /api/users/{id}     - Update entire user
PATCH   /api/users/{id}     - Partial update
DELETE  /api/users/{id}     - Delete user

GET     /api/users/{id}/orders  - Get user's orders
POST    /api/users/{id}/orders  - Create order for user
```

### DTO Pattern

```java
// Entity (Internal representation)
@Entity
public class User {
    private Long id;
    private String password;  // Sensitive!
    private String email;
}

// DTO (External representation)
public class UserDTO {
    private Long id;
    private String email;  // No password exposed
}

// Controller
@GetMapping("/{id}")
public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
    User user = userService.findById(id);
    UserDTO dto = modelMapper.map(user, UserDTO.class);
    return ResponseEntity.ok(dto);
}
```

### Pagination & Sorting

```java
@GetMapping
public Page<User> getUsers(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size,
        @RequestParam(defaultValue = "id") String sortBy) {

    Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
    return userRepository.findAll(pageable);
}

// Response includes:
// - content: List of users
// - totalElements: Total count
// - totalPages: Total pages
// - number: Current page
// - size: Page size
```

---

## Lombok (Code Reduction)

```java
@Data                    // @Getter + @Setter + @ToString + @EqualsAndHashCode + @RequiredArgsConstructor
@Getter                  // Generate getters
@Setter                  // Generate setters
@NoArgsConstructor       // No-args constructor
@AllArgsConstructor      // All-args constructor
@RequiredArgsConstructor // Constructor for final fields
@ToString                // toString() method
@EqualsAndHashCode       // equals() and hashCode()
@Builder                 // Builder pattern
@Slf4j                   // Logger field

// Example
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
}
// Generates: getters, setters, toString, equals, hashCode, constructors
```

---

## Application Properties Examples

### Database Configuration

```properties
# H2 (In-memory)
spring.datasource.url=jdbc:h2:mem:testdb
spring.h2.console.enabled=true

# MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password

# PostgreSQL
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=postgres
spring.datasource.password=password

# MongoDB
spring.data.mongodb.uri=mongodb://localhost:27017/mydb
```

### Hibernate DDL Auto

```properties
spring.jpa.hibernate.ddl-auto=create        # Drop and create tables
spring.jpa.hibernate.ddl-auto=create-drop   # Create on start, drop on exit
spring.jpa.hibernate.ddl-auto=update        # Update schema (dev)
spring.jpa.hibernate.ddl-auto=validate      # Validate schema only
spring.jpa.hibernate.ddl-auto=none          # No schema management (prod)
```

---

## Common Patterns

### Builder Pattern with Lombok

```java
@Builder
public class User {
    private String name;
    private String email;
    private int age;
}

// Usage
User user = User.builder()
    .name("John")
    .email("john@example.com")
    .age(30)
    .build();
```

### Singleton (Spring Beans are Singleton by default)

```java
@Component  // Singleton by default
public class MyService {
    // Only one instance in container
}
```

### Factory Pattern

```java
@Component
public class VehicleFactory {
    public Vehicle getVehicle(String type) {
        return switch (type) {
            case "car" -> new Car();
            case "bike" -> new Bike();
            default -> throw new IllegalArgumentException();
        };
    }
}
```

---

## Spring Boot Annotations Summary

### Stereotype Annotations

```java
@Component          // Generic Spring bean
@Service            // Business logic layer
@Repository         // Data access layer
@Controller         // Web MVC controller
@RestController     // REST API controller
@Configuration      // Configuration class
```

### Dependency Injection

```java
@Autowired          // Inject dependency
@Qualifier("name")  // Specify bean by name
@Primary            // Preferred bean
@Lazy               // Lazy initialization
@Value("${prop}")   // Inject property
```

### HTTP Mapping

```java
@RequestMapping     // Generic HTTP mapping
@GetMapping         // HTTP GET
@PostMapping        // HTTP POST
@PutMapping         // HTTP PUT
@PatchMapping       // HTTP PATCH
@DeleteMapping      // HTTP DELETE
```

### Request Parameters

```java
@PathVariable       // From URL path
@RequestParam       // From query string
@RequestBody        // From request body
@RequestHeader      // From HTTP header
@CookieValue        // From cookie
```

### JPA/Database

```java
@Entity             // JPA entity
@Table              // Table name
@Id                 // Primary key
@GeneratedValue     // Auto-generate value
@Column             // Column mapping
@OneToOne           // One-to-one relationship
@OneToMany          // One-to-many relationship
@ManyToOne          // Many-to-one relationship
@ManyToMany         // Many-to-many relationship
@JoinColumn         // Foreign key column
@Transactional      // Transaction management
```

### Validation

```java
@Valid              // Enable validation
@NotNull            // Cannot be null
@NotEmpty           // Cannot be empty
@NotBlank           // Cannot be blank
@Size(min, max)     // Size constraint
@Min(value)         // Minimum value
@Max(value)         // Maximum value
@Email              // Valid email
@Pattern(regexp)    // Regex pattern
```

### Testing

```java
@SpringBootTest     // Integration test
@WebMvcTest         // Controller test
@DataJpaTest        // Repository test
@MockBean           // Mock bean
@Test               // Test method
@BeforeEach         // Setup
@AfterEach          // Cleanup
```

---

## CRUD Operations Complete Example

### 1. Entity

```java
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @Min(0)
    private Double price;

    private String description;
}
```

### 2. Repository

```java
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContaining(String keyword);
    List<Product> findByPriceBetween(Double min, Double max);
}
```

### 3. Service

```java
@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> findAll() {
        return repository.findAll();
    }

    public Product findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
    }

    public Product save(Product product) {
        return repository.save(product);
    }

    public Product update(Long id, Product product) {
        Product existing = findById(id);
        existing.setName(product.getName());
        existing.setPrice(product.getPrice());
        existing.setDescription(product.getDescription());
        return repository.save(existing);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
```

### 4. Controller

```java
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<Product> create(@Valid @RequestBody Product product) {
        Product saved = service.save(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> update(
            @PathVariable Long id,
            @Valid @RequestBody Product product) {
        return ResponseEntity.ok(service.update(id, product));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
```

---

## Spring Boot Starter Dependencies

### Most Common Starters

```xml
<!-- Web applications -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!-- JPA/Hibernate -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<!-- Security -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<!-- Validation -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>

<!-- Testing -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>

<!-- Actuator (Production monitoring) -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>

<!-- DevTools (Hot reload) -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
</dependency>

<!-- Lombok (Reduce boilerplate) -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>

<!-- H2 Database (In-memory for testing) -->
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>

<!-- MySQL Driver -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <scope>runtime</scope>
</dependency>

<!-- PostgreSQL Driver -->
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>
```

---

## Microservices with Spring Boot

### Key Components

```xml
<!-- Spring Cloud Config -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>

<!-- Service Discovery (Eureka) -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>

<!-- API Gateway -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>

<!-- Circuit Breaker (Resilience4j) -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-circuitbreaker-resilience4j</artifactId>
</dependency>

<!-- Load Balancing (Ribbon/LoadBalancer) -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>
```

### Service Discovery Example

```java
// Eureka Server
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication { }

// Eureka Client
@SpringBootApplication
@EnableDiscoveryClient
public class UserServiceApplication { }
```

---

## Common Use Cases

### File Upload

```java
@PostMapping("/upload")
public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
    if (file.isEmpty()) {
        return ResponseEntity.badRequest().body("Please select a file");
    }

    try {
        byte[] bytes = file.getBytes();
        Path path = Paths.get("uploads/" + file.getOriginalFilename());
        Files.write(path, bytes);
        return ResponseEntity.ok("File uploaded successfully");
    } catch (IOException e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Failed to upload file");
    }
}
```

### Calling External APIs

```java
@Service
public class ExternalApiService {

    private final RestTemplate restTemplate;

    public ExternalApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public User getUserFromApi(Long id) {
        String url = "https://api.example.com/users/" + id;
        return restTemplate.getForObject(url, User.class);
    }

    public User createUser(User user) {
        String url = "https://api.example.com/users";
        return restTemplate.postForObject(url, user, User.class);
    }
}
```

### Scheduled Tasks

```java
@EnableScheduling
@Configuration
public class SchedulerConfig { }

@Component
public class ScheduledTasks {

    @Scheduled(fixedRate = 5000)  // Every 5 seconds
    public void runEveryFiveSeconds() {
        System.out.println("Executed every 5 seconds");
    }

    @Scheduled(fixedDelay = 5000)  // 5 seconds after previous completion
    public void runAfterDelay() { }

    @Scheduled(cron = "0 0 9 * * ?")  // Every day at 9 AM
    public void runDailyAtNine() { }

    @Scheduled(cron = "0 */15 * * * ?")  // Every 15 minutes
    public void runEveryFifteenMinutes() { }
}
```

### Async Processing

```java
@EnableAsync
@Configuration
public class AsyncConfig { }

@Service
public class AsyncService {

    @Async
    public CompletableFuture<String> asyncMethod() {
        // Long running task
        Thread.sleep(5000);
        return CompletableFuture.completedFuture("Done");
    }
}
```

### Caching

```java
@EnableCaching
@Configuration
public class CacheConfig { }

@Service
public class UserService {

    @Cacheable("users")  // Cache result
    public User findById(Long id) { }

    @CachePut(value = "users", key = "#user.id")  // Update cache
    public User update(User user) { }

    @CacheEvict(value = "users", key = "#id")  // Remove from cache
    public void deleteById(Long id) { }

    @CacheEvict(value = "users", allEntries = true)  // Clear all
    public void deleteAll() { }
}
```

---

## Quick Interview Prep

### Top 15 Spring Boot Interview Questions

1. ✅ **What is Spring Boot? Why use it?** - Auto-configuration, embedded server, starters
2. ✅ **Difference between @Component, @Service, @Repository?** - Stereotypes, semantic meaning
3. ✅ **What is Dependency Injection?** - IoC, loose coupling
4. ✅ **What is @SpringBootApplication?** - @Configuration + @EnableAutoConfiguration + @ComponentScan
5. ✅ **Constructor vs Field Injection?** - Constructor preferred (immutable, testable)
6. ✅ **What are Spring Boot Starters?** - Pre-configured dependency sets
7. ✅ **Bean Scopes?** - Singleton, prototype, request, session
8. ✅ **What is @Transactional?** - Transaction management, ACID
9. ✅ **@PathVariable vs @RequestParam?** - URL path vs query string
10. ✅ **What is JPA?** - Java Persistence API, ORM
11. ✅ **Lazy vs Eager loading?** - When to load relationships
12. ✅ **What is N+1 problem?** - Performance issue, solution: JOIN FETCH
13. ✅ **What is Spring Security?** - Authentication, authorization
14. ✅ **What is Actuator?** - Production monitoring endpoints
15. ✅ **How to handle exceptions?** - @ControllerAdvice, @ExceptionHandler

### REST API Design Checklist

- [ ] Use proper HTTP methods (GET, POST, PUT, DELETE)
- [ ] Return appropriate status codes
- [ ] Use DTOs (don't expose entities)
- [ ] Implement validation
- [ ] Handle exceptions globally
- [ ] Use pagination for large datasets
- [ ] Version your API (/api/v1/users)
- [ ] Document with Swagger/OpenAPI
- [ ] Implement security
- [ ] Add proper logging

---

## Design Patterns in Spring

### 1. Singleton Pattern

```java
@Component  // All Spring beans are singleton by default
public class MyService { }
```

### 2. Factory Pattern

```java
@Bean
public DataSource dataSource() {
    // Factory method creates object
    return DataSourceBuilder.create().build();
}
```

### 3. Proxy Pattern

```java
// Spring uses proxies for @Transactional, @Cacheable, AOP
@Transactional  // Creates proxy that manages transaction
public void transferMoney() { }
```

### 4. Template Pattern

```java
// JdbcTemplate, RestTemplate, etc.
jdbcTemplate.query("SELECT * FROM users", rowMapper);
```

### 5. Dependency Injection (DI) Pattern

```java
@Autowired  // IoC container manages dependencies
private UserService userService;
```

---

## Common Configuration Examples

### CORS Configuration

```java
@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}
```

### Database Connection Pool

```properties
# HikariCP (default in Spring Boot 2.x)
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=5
spring.datasource.hikari.connection-timeout=30000
spring.datasource.hikari.idle-timeout=600000
spring.datasource.hikari.max-lifetime=1800000
```

### Custom Configuration Properties

```java
@Configuration
@ConfigurationProperties(prefix = "app")
@Data
public class AppProperties {
    private String name;
    private String version;
    private Security security;

    @Data
    public static class Security {
        private String jwtSecret;
        private long jwtExpiration;
    }
}
```

```properties
# application.properties
app.name=My Application
app.version=1.0.0
app.security.jwt-secret=mySecretKey
app.security.jwt-expiration=86400000
```

---

## Error Handling Patterns

### Standard Error Response

```java
@Data
@AllArgsConstructor
public class ErrorResponse {
    private int status;
    private String message;
    private LocalDateTime timestamp;
    private String path;
}
```

### Global Exception Handler

```java
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNotFound(ResourceNotFoundException ex, WebRequest request) {
        return new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now(),
            request.getDescription(false)
        );
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error ->
            errors.put(error.getField(), error.getDefaultMessage())
        );
        return errors;
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleGlobalException(Exception ex, WebRequest request) {
        return new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Internal server error",
            LocalDateTime.now(),
            request.getDescription(false)
        );
    }
}
```

---

## Performance Tips

### ✅ DO

1. **Use constructor injection** (not field injection)
2. **Mark @Transactional methods** properly
3. **Use @Async for long-running tasks**
4. **Implement caching** (@Cacheable)
5. **Use pagination** for large datasets
6. **Close connections** (use try-with-resources)
7. **Use connection pooling** (HikariCP)
8. **Use @Lazy** for expensive beans
9. **Use FetchType.LAZY** for collections
10. **Use batch operations** for bulk inserts

### ❌ DON'T

1. ❌ Use field injection (@Autowired on fields)
2. ❌ Return entities directly (use DTOs)
3. ❌ Fetch all data without pagination
4. ❌ Use FetchType.EAGER for collections
5. ❌ Ignore transaction boundaries
6. ❌ Leave sessions open (N+1 problem)
7. ❌ Hardcode values (use properties)
8. ❌ Skip exception handling
9. ❌ Ignore security
10. ❌ Skip logging

---

## Testing Quick Reference

### Unit Test (Service Layer)

```java
@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository repository;

    @InjectMocks
    private UserService service;

    @Test
    void testFindById_Success() {
        // Arrange
        User user = new User(1L, "John", "john@example.com");
        when(repository.findById(1L)).thenReturn(Optional.of(user));

        // Act
        User found = service.findById(1L);

        // Assert
        assertNotNull(found);
        assertEquals("John", found.getName());
        verify(repository).findById(1L);
    }

    @Test
    void testFindById_NotFound() {
        when(repository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> {
            service.findById(1L);
        });
    }
}
```

### Integration Test

```java
@SpringBootTest
@AutoConfigureMockMvc
class UserControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testCreateUser() throws Exception {
        User user = new User(null, "John", "john@example.com");

        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(user)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("John"))
                .andExpect(jsonPath("$.email").value("john@example.com"));
    }
}
```

---

## Database Migration

### Flyway

```xml
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-core</artifactId>
</dependency>
```

```properties
spring.flyway.enabled=true
spring.flyway.locations=classpath:db/migration
```

```sql
-- src/main/resources/db/migration/V1__Create_users_table.sql
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Liquibase

```xml
<dependency>
    <groupId>org.liquibase</groupId>
    <artifactId>liquibase-core</artifactId>
</dependency>
```

---

## Spring Boot Quick Commands

### Maven Commands

```bash
# Build
mvn clean install
mvn clean package

# Run
mvn spring-boot:run

# Skip tests
mvn clean install -DskipTests

# Run specific test
mvn test -Dtest=UserServiceTest
```

### Gradle Commands

```bash
# Build
./gradlew build

# Run
./gradlew bootRun

# Test
./gradlew test

# Clean
./gradlew clean
```

### Running JAR

```bash
# Build JAR
mvn clean package

# Run JAR
java -jar target/myapp-1.0.0.jar

# With profile
java -jar -Dspring.profiles.active=prod target/myapp-1.0.0.jar

# With custom port
java -jar -Dserver.port=9090 target/myapp-1.0.0.jar
```

---

## Swagger/OpenAPI Documentation

### Setup

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-ui</artifactId>
    <version>1.7.0</version>
</dependency>
```

```java
@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("My API")
                        .version("1.0.0")
                        .description("API documentation"));
    }
}
```

**Access:** `http://localhost:8080/swagger-ui.html`

### Documenting Endpoints

```java
@Tag(name = "Users", description = "User management APIs")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Operation(summary = "Get all users", description = "Returns list of all users")
    @ApiResponse(responseCode = "200", description = "Success")
    @GetMapping
    public List<User> getAll() { }

    @Operation(summary = "Create new user")
    @ApiResponses({
        @ApiResponse(responseCode = "201", description = "Created"),
        @ApiResponse(responseCode = "400", description = "Invalid input")
    })
    @PostMapping
    public User create(@RequestBody User user) { }
}
```

---

## Spring Boot Interview Scenarios

### Scenario 1: Circular Dependency

**Problem:**

```java
@Service
class A {
    @Autowired
    private B b;
}

@Service
class B {
    @Autowired
    private A a;
}
// Circular dependency!
```

**Solutions:**

1. **Use @Lazy**

```java
@Service
class A {
    @Autowired
    @Lazy
    private B b;
}
```

2. **Use setter injection**

```java
@Service
class A {
    private B b;

    @Autowired
    public void setB(B b) {
        this.b = b;
    }
}
```

3. **Restructure code** (best solution)

### Scenario 2: Multiple Beans of Same Type

```java
interface MessageService { }

@Component("emailService")
class EmailService implements MessageService { }

@Component("smsService")
class SMSService implements MessageService { }

// Solution 1: @Qualifier
@Autowired
@Qualifier("emailService")
private MessageService messageService;

// Solution 2: @Primary
@Primary
@Component
class EmailService implements MessageService { }
```

### Scenario 3: Custom Properties Validation

```java
@Component
@ConfigurationProperties(prefix = "app")
@Validated
public class AppConfig {

    @NotBlank
    private String name;

    @Min(1024)
    @Max(65535)
    private int port;

    // Getters and setters
}
```

---

## Common Errors & Solutions

### 1. Port Already in Use

```
Error: Port 8080 is already in use
```

**Solution:**

```properties
# Change port
server.port=8081

# Or use random port
server.port=0
```

### 2. Bean Creation Exception

```
Error creating bean with name 'userController'
```

**Solutions:**

- Check @Autowired dependencies exist
- Check component scanning
- Check circular dependencies
- Check bean configuration

### 3. No qualifying bean of type

```
No qualifying bean of type 'UserRepository' available
```

**Solutions:**

- Add @Repository annotation
- Check @ComponentScan path
- Check @EnableJpaRepositories

### 4. Whitelabel Error Page

**Solution:** Create custom error page or @ControllerAdvice

### 5. 401 Unauthorized

Check:

- Security configuration
- Authentication credentials
- JWT token validity
- CORS settings

---

## Best Practices

### Project Structure Best Practices

```
✅ Layer separation (controller, service, repository)
✅ Use DTOs for API responses
✅ Global exception handling
✅ Consistent naming conventions
✅ Proper logging
✅ Environment-specific configurations
✅ API versioning
✅ Input validation
✅ Security implementation
✅ Unit and integration tests
```

### Code Quality

```java
✅ Use constructor injection
✅ Make services stateless
✅ Use interfaces for services
✅ Keep controllers thin
✅ Business logic in service layer
✅ Use @Transactional wisely
✅ Close resources properly
✅ Use pagination for large data
✅ Cache frequently accessed data
✅ Log important operations
```

---

## Spring Boot vs Spring MVC vs Spring

| Feature       | Spring               | Spring MVC        | Spring Boot              |
| ------------- | -------------------- | ----------------- | ------------------------ |
| Purpose       | Dependency injection | Web applications  | Rapid development        |
| Configuration | XML-heavy            | XML + annotations | Auto-configuration       |
| Server        | External             | External          | Embedded                 |
| Setup         | Complex              | Moderate          | Simple                   |
| Use case      | Any Java app         | Web apps          | Microservices, REST APIs |

---

## Quick Reference Cards

### HTTP Methods & CRUD

| HTTP Method | CRUD             | Idempotent | Safe   |
| ----------- | ---------------- | ---------- | ------ |
| GET         | Read             | ✅ Yes     | ✅ Yes |
| POST        | Create           | ❌ No      | ❌ No  |
| PUT         | Update (full)    | ✅ Yes     | ❌ No  |
| PATCH       | Update (partial) | ❌ No      | ❌ No  |
| DELETE      | Delete           | ✅ Yes     | ❌ No  |

### Spring Boot Profiles

```properties
# Default profile
application.properties

# Dev profile
application-dev.properties

# Prod profile
application-prod.properties
```

```bash
# Set active profile
java -jar app.jar --spring.profiles.active=prod

# Or in application.properties
spring.profiles.active=dev
```

### Commonly Used Annotations Summary

```java
// Class level
@SpringBootApplication, @RestController, @Service, @Repository, @Configuration
@Entity, @Table, @ControllerAdvice, @Aspect

// Method level
@GetMapping, @PostMapping, @PutMapping, @DeleteMapping
@Transactional, @Cacheable, @Scheduled, @Async
@Bean, @Before, @After, @Around

// Field/Parameter level
@Autowired, @Value, @Id, @Column, @Transient
@PathVariable, @RequestParam, @RequestBody, @Valid
@NotNull, @Email, @Size, @Min, @Max
```

---

## Microservices Patterns

### 1. API Gateway Pattern

```java
@SpringBootApplication
@EnableZuulProxy  // or use Spring Cloud Gateway
public class GatewayApplication { }
```

### 2. Service Registry (Eureka)

```java
// Server
@EnableEurekaServer
public class EurekaServerApp { }

// Client
@EnableEurekaClient
public class UserServiceApp { }
```

### 3. Circuit Breaker (Resilience4j)

```java
@CircuitBreaker(name = "userService", fallbackMethod = "fallbackMethod")
public User getUserById(Long id) {
    return restTemplate.getForObject(url, User.class);
}

public User fallbackMethod(Long id, Exception e) {
    return new User();  // Default response
}
```

### 4. Distributed Tracing (Sleuth + Zipkin)

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-sleuth</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-sleuth-zipkin</artifactId>
</dependency>
```

---

## Security Quick Reference

### Basic Auth

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic();
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.builder()
            .username("admin")
            .password(passwordEncoder().encode("password"))
            .roles("ADMIN")
            .build();
        return new InMemoryUserDetailsManager(user);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

### JWT Token Flow

```
1. User logs in → POST /auth/login
2. Server validates credentials
3. Server generates JWT token
4. Client stores token
5. Client sends token in header: Authorization: Bearer <token>
6. Server validates token on each request
```

---

## Final Checklist

### Before Interview - Can You Explain?

#### Core Concepts

- [ ] What is Spring Boot and its advantages?
- [ ] Difference between Spring and Spring Boot
- [ ] What is Dependency Injection?
- [ ] What is Inversion of Control?
- [ ] Bean lifecycle
- [ ] Bean scopes

#### Annotations

- [ ] @SpringBootApplication components
- [ ] Difference between @Component, @Service, @Repository
- [ ] @Autowired vs @Inject vs @Resource
- [ ] @PathVariable vs @RequestParam vs @RequestBody

#### Data Access

- [ ] What is JPA and Hibernate?
- [ ] Entity relationships (OneToMany, ManyToOne, etc.)
- [ ] Lazy vs Eager loading
- [ ] N+1 query problem and solutions
- [ ] @Transactional propagation and isolation

#### REST API

- [ ] HTTP methods and their purpose
- [ ] HTTP status codes
- [ ] RESTful API design principles
- [ ] Exception handling strategies

#### Advanced

- [ ] Spring Security basics
- [ ] JWT authentication flow
- [ ] Microservices architecture
- [ ] Caching strategies
- [ ] Async processing

### Coding Skills

- [ ] Create a simple REST API
- [ ] Implement CRUD operations
- [ ] Write JPA queries
- [ ] Handle exceptions globally
- [ ] Implement validation
- [ ] Write unit tests
- [ ] Configure database connection

---

## Quick Tips for Interview

### During Interview:

1. **Understand the Question** - Ask clarifying questions
2. **Think Architecture** - Mention layers (controller, service, repository)
3. **Discuss Trade-offs** - Explain why you chose an approach
4. **Mention Best Practices** - Constructor injection, DTOs, exception handling
5. **Talk About Testing** - Unit tests, integration tests
6. **Security Awareness** - Mention authentication, authorization
7. **Performance** - Discuss caching, pagination, lazy loading

### Common Interview Patterns:

**Q: "Build a REST API for user management"**

- ✅ Mention: Entity, Repository, Service, Controller
- ✅ Discuss: Validation, exception handling, pagination
- ✅ Show: CRUD operations, proper HTTP methods/status codes

**Q: "How to improve performance?"**

- ✅ Caching (@Cacheable)
- ✅ Pagination
- ✅ Lazy loading
- ✅ Database indexing
- ✅ Connection pooling
- ✅ Async processing

**Q: "How to secure the API?"**

- ✅ Spring Security
- ✅ JWT tokens
- ✅ Role-based access (@PreAuthorize)
- ✅ Input validation
- ✅ SQL injection prevention (use JPA)
- ✅ HTTPS

---

## Useful Resources

### Documentation

- [Spring Boot Reference](https://docs.spring.io/spring-boot/docs/current/reference/html/)
- [Spring Data JPA](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/)
- [Spring Security](https://docs.spring.io/spring-security/reference/)

### Tools

- [Spring Initializr](https://start.spring.io/) - Generate projects
- [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.devtools) - Hot reload
- [Postman](https://www.postman.com/) - API testing
- [Swagger UI](https://swagger.io/) - API documentation

---

**Good luck with your Spring Boot interviews! 🚀**

_For detailed questions and answers, see:_

- [Spring Boot Q&A](q&a.md) - Comprehensive interview questions
