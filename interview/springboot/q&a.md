# Spring Boot Interview Questions & Answers

## Table of Contents

1. [Spring Boot Basics](#spring-boot-basics)
2. [Spring Core Concepts](#spring-core-concepts)
3. [Spring Boot Configuration](#spring-boot-configuration)
4. [Spring Boot Annotations](#spring-boot-annotations)
5. [Spring Data JPA](#spring-data-jpa)
6. [Spring REST APIs](#spring-rest-apis)
7. [Spring Security](#spring-security)
8. [Spring Boot Actuator](#spring-boot-actuator)
9. [Spring Boot Testing](#spring-boot-testing)
10. [Microservices with Spring Boot](#microservices-with-spring-boot)

---

## Spring Boot Basics

### 1. What is Spring Boot?

Spring Boot is an opinionated framework built on top of Spring Framework that simplifies the development of production-ready Spring applications. It provides auto-configuration, embedded servers, and starter dependencies.

**Key Features:**

- Auto-configuration
- Standalone applications
- Embedded servers (Tomcat, Jetty, Undertow)
- Production-ready features (metrics, health checks)
- No XML configuration required
- Opinionated defaults

**Example:**

```java
// Minimal Spring Boot application
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}

// REST Controller
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }
}
```

**pom.xml:**

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.1.0</version>
</parent>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```

**Follow-up Questions:**

- What is the difference between Spring and Spring Boot?
- How does Spring Boot achieve auto-configuration?

### 2. What are Spring Boot Starters?

Spring Boot Starters are dependency descriptors that bundle commonly used dependencies together.

**Example:**

```xml
<!-- Web applications -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!-- JPA and Database -->
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
    <scope>test</scope>
</dependency>

<!-- Actuator for monitoring -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

**Common Starters:**

```
starter-web              → Spring MVC, REST, Tomcat
starter-data-jpa         → JPA, Hibernate
starter-data-mongodb     → MongoDB
starter-security         → Spring Security
starter-test             → JUnit, Mockito, Spring Test
starter-actuator         → Monitoring and metrics
starter-validation       → Bean Validation
starter-mail             → Email support
starter-thymeleaf        → Thymeleaf templating
starter-websocket        → WebSocket support
```

**Follow-up Questions:**

- How do starters simplify dependency management?
- Can you create custom starters?

### 3. What is @SpringBootApplication annotation?

@SpringBootApplication is a convenience annotation that combines three annotations.

**Example:**

```java
// This annotation
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}

// Is equivalent to:
@Configuration        // Indicates this is a configuration class
@EnableAutoConfiguration  // Enable Spring Boot's auto-configuration
@ComponentScan       // Enable component scanning
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}

// Customizing component scan
@SpringBootApplication(scanBasePackages = "com.example.myapp")
public class CustomScanApplication {
    public static void main(String[] args) {
        SpringApplication.run(CustomScanApplication.class, args);
    }
}

// Excluding auto-configuration
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class ExcludeAutoConfigApplication {
    public static void main(String[] args) {
        SpringApplication.run(ExcludeAutoConfigApplication.class, args);
    }
}
```

**Component Breakdown:**

```
@SpringBootApplication
├── @Configuration
│   └── Marks class as source of bean definitions
├── @EnableAutoConfiguration
│   └── Automatically configures Spring based on classpath
└── @ComponentScan
    └── Scans for @Component, @Service, @Repository, @Controller
```

**Follow-up Questions:**

- What is the default component scan path?
- How can you customize auto-configuration?

### 4. What is Dependency Injection in Spring?

Dependency Injection is a design pattern where Spring provides dependencies to objects instead of objects creating them.

**Example:**

```java
// Service interface
public interface UserService {
    User findUser(Long id);
}

// Service implementation
@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    // Constructor Injection (Recommended)
    @Autowired  // Optional in Spring 4.3+ if single constructor
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User findUser(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}

// Controller using the service
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    // Constructor Injection
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findUser(id);
    }
}

// Field Injection (Not recommended)
@Service
public class NotRecommendedService {
    @Autowired
    private UserRepository userRepository;  // Field injection
}

// Setter Injection
@Service
public class SetterInjectionService {
    private UserRepository userRepository;

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

// Multiple implementations - use @Qualifier
interface PaymentService {
    void processPayment(double amount);
}

@Service
@Qualifier("creditCard")
class CreditCardPaymentService implements PaymentService {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing credit card payment: $" + amount);
    }
}

@Service
@Qualifier("paypal")
class PayPalPaymentService implements PaymentService {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing PayPal payment: $" + amount);
    }
}

@Service
public class OrderService {
    private final PaymentService paymentService;

    // Inject specific implementation
    public OrderService(@Qualifier("creditCard") PaymentService paymentService) {
        this.paymentService = paymentService;
    }
}
```

**DI Types:**

```
1. Constructor Injection (Preferred):
   ✓ Required dependencies
   ✓ Immutable
   ✓ Easy to test
   ✓ No need for @Autowired in Spring 4.3+

2. Setter Injection:
   ✓ Optional dependencies
   ✓ Allows changing dependencies
   ✗ Mutable

3. Field Injection:
   ✓ Less boilerplate
   ✗ Hard to test
   ✗ Cannot be immutable
   ✗ Hides dependencies
```

**Follow-up Questions:**

- Why is constructor injection preferred?
- What is @Qualifier used for?
- What happens if Spring finds multiple beans of the same type?

### 5. What is the difference between @Component, @Service, @Repository, and @Controller?

All are stereotypes that mark a class as a Spring bean, but they have semantic differences.

**Example:**

```java
// @Component - Generic stereotype
@Component
public class EmailValidator {
    public boolean isValid(String email) {
        return email.contains("@");
    }
}

// @Service - Business logic layer
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User registerUser(User user) {
        // Business logic
        user.setCreatedDate(LocalDateTime.now());
        user.setActive(true);
        return userRepository.save(user);
    }

    @Transactional
    public void transferFunds(Long fromId, Long toId, double amount) {
        // Business logic with transaction
        User from = userRepository.findById(fromId).orElseThrow();
        User to = userRepository.findById(toId).orElseThrow();

        from.setBalance(from.getBalance() - amount);
        to.setBalance(to.getBalance() + amount);

        userRepository.save(from);
        userRepository.save(to);
    }
}

// @Repository - Data access layer
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByActiveTrue();

    @Query("SELECT u FROM User u WHERE u.age > :age")
    List<User> findUsersOlderThan(@Param("age") int age);
}

// @Controller - MVC Controller (returns views)
@Controller
public class WebController {
    private final UserService userService;

    public WebController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public String listUsers(Model model) {
        model.addAttribute("users", userService.getAllUsers());
        return "users";  // Returns view name
    }
}

// @RestController - REST API Controller (returns data)
// Equivalent to @Controller + @ResponseBody
@RestController
@RequestMapping("/api")
public class UserRestController {
    private final UserService userService;

    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();  // Returns JSON
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.registerUser(user);
    }
}
```

**Visual Representation:**

```
Spring MVC Architecture:

Client Request
    ↓
┌─────────────────────────────────────┐
│  @Controller / @RestController      │ ← Handles HTTP requests
│  (Presentation Layer)                │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  @Service                            │ ← Business logic
│  (Service Layer)                     │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  @Repository                         │ ← Data access
│  (Data Access Layer)                 │
└──────────────┬──────────────────────┘
               ↓
           Database
```

**Comparison:**

```
Annotation    | Layer              | Purpose                    | Exception Translation
--------------|--------------------|-----------------------------|---------------------
@Component    | Any                | Generic stereotype          | No
@Service      | Business           | Business logic              | No
@Repository   | Data Access        | Database operations         | Yes (DataAccessException)
@Controller   | Presentation       | MVC Controller (returns view)| No
@RestController| Presentation      | REST API (returns data)     | No
```

**Follow-up Questions:**

- Does the choice of stereotype affect functionality?
- What is exception translation in @Repository?
- What is @RestController equivalent to?

### 6. What is Spring Boot Auto-configuration?

Auto-configuration automatically configures Spring application based on the dependencies in the classpath.

**Example:**

```java
// Auto-configuration happens based on classpath

// If spring-boot-starter-data-jpa is in classpath:
// → DataSource is auto-configured
// → EntityManagerFactory is auto-configured
// → TransactionManager is auto-configured

// Example: DataSource auto-configuration
@Configuration
@ConditionalOnClass({DataSource.class, EmbeddedDatabaseType.class})
public class DataSourceAutoConfiguration {
    @Bean
    @ConditionalOnMissingBean
    public DataSource dataSource() {
        // Auto-configure DataSource
        return new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .build();
    }
}

// Viewing auto-configuration report
// Run with --debug flag or add to application.properties:
// debug=true

// Customizing auto-configuration
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(MyApplication.class);
        app.setAddCommandLineProperties(false);
        app.run(args);
    }
}

// Disabling specific auto-configuration
@SpringBootApplication(exclude = {
    DataSourceAutoConfiguration.class,
    HibernateJpaAutoConfiguration.class
})
public class CustomApplication {
    public static void main(String[] args) {
        SpringApplication.run(CustomApplication.class, args);
    }
}

// Custom auto-configuration
@Configuration
@ConditionalOnClass(MyService.class)
@EnableConfigurationProperties(MyProperties.class)
public class MyAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public MyService myService(MyProperties properties) {
        return new MyService(properties);
    }
}

// Conditional annotations
@Configuration
public class ConditionalConfig {

    @Bean
    @ConditionalOnProperty(name = "feature.enabled", havingValue = "true")
    public FeatureService featureService() {
        return new FeatureService();
    }

    @Bean
    @ConditionalOnBean(DataSource.class)
    public DatabaseService databaseService(DataSource dataSource) {
        return new DatabaseService(dataSource);
    }

    @Bean
    @ConditionalOnMissingBean
    public DefaultService defaultService() {
        return new DefaultService();
    }
}
```

**Common Conditional Annotations:**

```
@ConditionalOnClass         - If class is present in classpath
@ConditionalOnMissingClass  - If class is not present
@ConditionalOnBean          - If bean exists
@ConditionalOnMissingBean   - If bean doesn't exist
@ConditionalOnProperty      - If property has specific value
@ConditionalOnResource      - If resource exists
@ConditionalOnWebApplication - If web application
@ConditionalOnExpression    - If SpEL expression is true
```

**Follow-up Questions:**

- How does Spring Boot determine which auto-configurations to apply?
- How can you debug auto-configuration?
- What is META-INF/spring.factories?

### 7. What is application.properties vs application.yml?

Configuration files for Spring Boot applications.

**Example:**

**application.properties:**

```properties
# Server configuration
server.port=8080
server.servlet.context-path=/api

# Database configuration
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=secret
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# Logging
logging.level.root=INFO
logging.level.com.example=DEBUG
logging.file.name=app.log

# Custom properties
app.name=My Application
app.version=1.0.0
```

**application.yml (same configuration):**

```yaml
# Server configuration
server:
  port: 8080
  servlet:
    context-path: /api

# Database configuration
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: secret
    driver-class-name: com.mysql.cj.jdbc.Driver

  # JPA configuration
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true

# Logging
logging:
  level:
    root: INFO
    com.example: DEBUG
  file:
    name: app.log

# Custom properties
app:
  name: My Application
  version: 1.0.0
```

**Accessing properties in code:**

```java
@Component
public class AppConfig {
    @Value("${app.name}")
    private String appName;

    @Value("${app.version}")
    private String appVersion;

    @Value("${server.port}")
    private int serverPort;

    public void printConfig() {
        System.out.println("App: " + appName + " v" + appVersion);
        System.out.println("Port: " + serverPort);
    }
}

// Using @ConfigurationProperties
@Component
@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private String name;
    private String version;

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getVersion() { return version; }
    public void setVersion(String version) { this.version = version; }
}

// Usage
@Service
public class AppService {
    private final AppProperties appProperties;

    public AppService(AppProperties appProperties) {
        this.appProperties = appProperties;
    }

    public void displayInfo() {
        System.out.println(appProperties.getName());
        System.out.println(appProperties.getVersion());
    }
}
```

**Comparison:**

```
Feature          | application.properties | application.yml
-----------------|------------------------|------------------
Format           | Key=Value              | Hierarchical
Readability      | Good                   | Better (nested)
Duplication      | More                   | Less
Lists/Arrays     | Verbose                | Clean
Complex config   | Difficult              | Easy
IDE Support      | Excellent              | Excellent
```

**Follow-up Questions:**

- Which format is better for complex configurations?
- How do you use profiles with these files?
- What is @Value annotation?

### 8. What are Spring Profiles?

Profiles allow you to segregate parts of your application configuration and make it available in certain environments.

**Example:**

```java
// Define beans for specific profiles
@Configuration
public class DatabaseConfig {

    @Bean
    @Profile("dev")
    public DataSource devDataSource() {
        return new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .build();
    }

    @Bean
    @Profile("prod")
    public DataSource prodDataSource() {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl("jdbc:mysql://prod-db:3306/mydb");
        dataSource.setUsername("prod_user");
        dataSource.setPassword("prod_password");
        return dataSource;
    }

    @Bean
    @Profile({"dev", "test"})
    public DataSource testDataSource() {
        // Used in both dev and test profiles
        return new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .build();
    }

    @Bean
    @Profile("!prod")  // Not prod (dev, test, etc.)
    public DebugService debugService() {
        return new DebugService();
    }
}

// Profile-specific components
@Service
@Profile("dev")
public class MockEmailService implements EmailService {
    @Override
    public void sendEmail(String to, String message) {
        System.out.println("MOCK: Sending email to " + to + ": " + message);
    }
}

@Service
@Profile("prod")
public class RealEmailService implements EmailService {
    @Override
    public void sendEmail(String to, String message) {
        // Actual email sending logic
        System.out.println("Sending real email to " + to);
    }
}
```

**Profile-specific configuration files:**

```
application.properties              # Default
application-dev.properties          # Dev profile
application-test.properties         # Test profile
application-prod.properties         # Prod profile

application.yml                     # Default
application-dev.yml                 # Dev profile
application-test.yml                # Test profile
application-prod.yml                # Prod profile
```

**application-dev.properties:**

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.jpa.show-sql=true
logging.level.root=DEBUG
```

**application-prod.properties:**

```properties
spring.datasource.url=jdbc:mysql://prod-server:3306/proddb
spring.jpa.show-sql=false
logging.level.root=WARN
```

**Activating profiles:**

```properties
# In application.properties
spring.profiles.active=dev

# Or via command line
java -jar myapp.jar --spring.profiles.active=prod

# Or via environment variable
export SPRING_PROFILES_ACTIVE=prod

# Multiple profiles
spring.profiles.active=dev,mysql
```

**Programmatic profile activation:**

```java
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(MyApplication.class);
        app.setAdditionalProfiles("dev");
        app.run(args);
    }
}
```

**Follow-up Questions:**

- How do you activate multiple profiles?
- What is the default profile?
- How do profile-specific properties override default properties?

### 9. What is the Bean lifecycle in Spring?

**Example:**

```java
@Component
public class MyBean {

    public MyBean() {
        System.out.println("1. Constructor called");
    }

    @PostConstruct
    public void init() {
        System.out.println("2. @PostConstruct called");
        // Initialization logic
    }

    @PreDestroy
    public void cleanup() {
        System.out.println("3. @PreDestroy called");
        // Cleanup logic
    }
}

// Alternative: InitializingBean and DisposableBean interfaces
@Component
public class AlternativeBean implements InitializingBean, DisposableBean {

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("afterPropertiesSet called");
    }

    @Override
    public void destroy() throws Exception {
        System.out.println("destroy called");
    }
}

// Using @Bean with initMethod and destroyMethod
@Configuration
public class BeanConfig {

    @Bean(initMethod = "init", destroyMethod = "cleanup")
    public CustomBean customBean() {
        return new CustomBean();
    }
}

class CustomBean {
    public void init() {
        System.out.println("Custom init method");
    }

    public void cleanup() {
        System.out.println("Custom cleanup method");
    }
}

// BeanPostProcessor - applies to all beans
@Component
public class MyBeanPostProcessor implements BeanPostProcessor {

    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) {
        System.out.println("Before Initialization: " + beanName);
        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) {
        System.out.println("After Initialization: " + beanName);
        return bean;
    }
}
```

**Bean Lifecycle:**

```
Spring Container Startup
    ↓
1. Constructor
    ↓
2. Dependency Injection (setter/field)
    ↓
3. setBeanName() [if BeanNameAware]
    ↓
4. setBeanFactory() [if BeanFactoryAware]
    ↓
5. setApplicationContext() [if ApplicationContextAware]
    ↓
6. postProcessBeforeInitialization() [BeanPostProcessor]
    ↓
7. @PostConstruct / afterPropertiesSet() / custom init method
    ↓
8. postProcessAfterInitialization() [BeanPostProcessor]
    ↓
Bean Ready to Use
    ↓
Spring Container Shutdown
    ↓
9. @PreDestroy / destroy() / custom destroy method
    ↓
Bean Destroyed
```

**Follow-up Questions:**

- What is the difference between @PostConstruct and InitializingBean?
- When would you use BeanPostProcessor?
- What is the order of execution for multiple initialization methods?

### 10. What are Bean Scopes in Spring?

**Example:**

```java
// Singleton (Default) - One instance per Spring container
@Service
@Scope("singleton")  // Default, can be omitted
public class SingletonService {
    private int counter = 0;

    public int incrementCounter() {
        return ++counter;  // Shared across all injections
    }
}

// Prototype - New instance each time requested
@Service
@Scope("prototype")
public class PrototypeService {
    private int counter = 0;

    public int incrementCounter() {
        return ++counter;  // Independent for each instance
    }
}

// Request Scope - One instance per HTTP request
@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestScopedBean {
    private String requestId = UUID.randomUUID().toString();

    public String getRequestId() {
        return requestId;
    }
}

// Session Scope - One instance per HTTP session
@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class SessionScopedBean {
    private String sessionId = UUID.randomUUID().toString();
    private User loggedInUser;

    public void setUser(User user) {
        this.loggedInUser = user;
    }
}

// Application Scope - One instance per ServletContext
@Component
@Scope(value = WebApplicationContext.SCOPE_APPLICATION, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class ApplicationScopedBean {
    private Map<String, Integer> applicationData = new HashMap<>();
}

// Demonstrating scopes
@RestController
public class ScopeController {
    private final SingletonService singletonService;
    private final PrototypeService prototypeService;

    // Constructor is called once, PrototypeService injected once
    public ScopeController(SingletonService singletonService,
                          PrototypeService prototypeService) {
        this.singletonService = singletonService;
        this.prototypeService = prototypeService;
    }

    @GetMapping("/singleton")
    public int getSingleton() {
        return singletonService.incrementCounter();  // Increments: 1, 2, 3...
    }

    @GetMapping("/prototype")
    public int getPrototype() {
        return prototypeService.incrementCounter();  // Always 1 (same instance)
    }
}

// Injecting prototype into singleton (problem)
@Service
public class SingletonWithPrototype {
    @Autowired
    private PrototypeService prototypeService;  // Problem: Injected once!

    public void doSomething() {
        prototypeService.incrementCounter();  // Same instance each time
    }
}

// Solution 1: Use ApplicationContext
@Service
public class SingletonWithPrototypeSolution1 {
    @Autowired
    private ApplicationContext context;

    public void doSomething() {
        PrototypeService prototype = context.getBean(PrototypeService.class);
        prototype.incrementCounter();  // New instance each time
    }
}

// Solution 2: Use @Lookup
@Service
public abstract class SingletonWithPrototypeSolution2 {
    @Lookup
    public abstract PrototypeService getPrototypeService();

    public void doSomething() {
        PrototypeService prototype = getPrototypeService();
        prototype.incrementCounter();  // New instance each time
    }
}

// Solution 3: Use ObjectFactory
@Service
public class SingletonWithPrototypeSolution3 {
    @Autowired
    private ObjectFactory<PrototypeService> prototypeFactory;

    public void doSomething() {
        PrototypeService prototype = prototypeFactory.getObject();
        prototype.incrementCounter();  // New instance each time
    }
}
```

**Scope Comparison:**

```
Scope        | Lifecycle              | Use Case                    | Web Only
-------------|------------------------|-----------------------------|---------
singleton    | One per container      | Stateless services          | No
prototype    | New per request        | Stateful beans              | No
request      | One per HTTP request   | Request-specific data       | Yes
session      | One per HTTP session   | User session data           | Yes
application  | One per ServletContext | Application-wide data       | Yes
```

**Visual Representation:**

```
Singleton Scope:
Container → [Bean Instance] ← All injections point to same instance

Prototype Scope:
Container → [Bean Instance 1]
         → [Bean Instance 2]
         → [Bean Instance 3]
         Each injection gets new instance

Request Scope:
HTTP Request 1 → [Bean Instance 1]
HTTP Request 2 → [Bean Instance 2]
HTTP Request 3 → [Bean Instance 3]
```

**Follow-up Questions:**

- What is the default scope?
- How do you inject prototype bean into singleton?
- What is proxyMode in scope annotation?

---

## Spring Core Concepts

### 11. What is Inversion of Control (IoC)?

IoC is a principle where the control of object creation and dependency management is inverted from the application to the framework.

**Example:**

```java
// Without IoC (Manual dependency management)
public class WithoutIoC {
    public static void main(String[] args) {
        // Application controls object creation
        UserRepository repo = new UserRepository();
        UserService service = new UserService(repo);
        UserController controller = new UserController(service);

        // Application manages lifecycle
        controller.handleRequest();
    }
}

// With IoC (Spring manages dependencies)
@SpringBootApplication
public class WithIoC {
    public static void main(String[] args) {
        // Spring controls object creation and wiring
        ApplicationContext context = SpringApplication.run(WithIoC.class, args);

        // Get fully wired bean from Spring
        UserController controller = context.getBean(UserController.class);
        controller.handleRequest();
    }
}

@Service
class UserService {
    private final UserRepository userRepository;

    // Spring injects dependency
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

@Controller
class UserController {
    private final UserService userService;

    // Spring injects dependency
    public UserController(UserService userService) {
        this.userService = userService;
    }

    public void handleRequest() {
        // Use service
    }
}
```

**Traditional vs IoC:**

```
Traditional Approach:
Application → Creates objects → Manages dependencies

IoC Approach:
Application ← Spring Container → Creates objects
                                → Manages dependencies
                                → Injects dependencies
```

**Follow-up Questions:**

- What are the benefits of IoC?
- How does IoC relate to Dependency Injection?

### 12. What is ApplicationContext?

ApplicationContext is the central interface for Spring IoC container.

**Example:**

```java
@SpringBootApplication
public class ApplicationContextExample implements CommandLineRunner {

    @Autowired
    private ApplicationContext context;

    @Override
    public void run(String... args) {
        // Get bean by type
        UserService service = context.getBean(UserService.class);

        // Get bean by name
        UserService service2 = (UserService) context.getBean("userService");

        // Get bean by name and type
        UserService service3 = context.getBean("userService", UserService.class);

        // Check if bean exists
        boolean exists = context.containsBean("userService");

        // Get all beans of a type
        Map<String, UserService> services = context.getBeansOfType(UserService.class);

        // Get bean definition names
        String[] beanNames = context.getBeanDefinitionNames();
        for (String name : beanNames) {
            System.out.println("Bean: " + name);
        }

        // Get environment
        Environment env = context.getEnvironment();
        String activeProfile = env.getProperty("spring.profiles.active");

        // Publish events
        context.publishEvent(new CustomEvent(this, "Event message"));

        // Get application name
        String appName = context.getApplicationName();
    }

    public static void main(String[] args) {
        SpringApplication.run(ApplicationContextExample.class, args);
    }
}

// Custom event
class CustomEvent extends ApplicationEvent {
    private String message;

    public CustomEvent(Object source, String message) {
        super(source);
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}

// Event listener
@Component
class CustomEventListener {
    @EventListener
    public void handleCustomEvent(CustomEvent event) {
        System.out.println("Received event: " + event.getMessage());
    }
}
```

**ApplicationContext Types:**

```
1. AnnotationConfigApplicationContext
   - Java-based configuration

2. ClassPathXmlApplicationContext
   - XML-based configuration from classpath

3. FileSystemXmlApplicationContext
   - XML-based configuration from file system

4. WebApplicationContext
   - For web applications
```

**Follow-up Questions:**

- What is the difference between BeanFactory and ApplicationContext?
- When should you access ApplicationContext directly?

### 13. What is @Autowired and how does it work?

@Autowired enables automatic dependency injection.

**Example:**

```java
// Constructor autowiring (Recommended)
@Service
public class UserService {
    private final UserRepository userRepository;
    private final EmailService emailService;

    // @Autowired is optional if only one constructor (Spring 4.3+)
    public UserService(UserRepository userRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }
}

// Field autowiring (Not recommended)
@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired(required = false)  // Optional dependency
    private CacheService cacheService;
}

// Setter autowiring
@Service
public class OrderService {
    private PaymentService paymentService;

    @Autowired
    public void setPaymentService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }
}

// Autowiring with @Qualifier
@Service
public class NotificationService {
    private final MessageService messageService;

    @Autowired
    public NotificationService(@Qualifier("emailService") MessageService messageService) {
        this.messageService = messageService;
    }
}

// Autowiring collections
@Service
public class MultiPaymentService {
    private final List<PaymentService> paymentServices;

    @Autowired
    public MultiPaymentService(List<PaymentService> paymentServices) {
        this.paymentServices = paymentServices;  // All PaymentService beans
    }

    public void processPayments(double amount) {
        for (PaymentService service : paymentServices) {
            service.processPayment(amount);
        }
    }
}

// Autowiring Map
@Service
public class PaymentRouter {
    private final Map<String, PaymentService> paymentServiceMap;

    @Autowired
    public PaymentRouter(Map<String, PaymentService> paymentServiceMap) {
        this.paymentServiceMap = paymentServiceMap;  // Bean name as key
    }

    public void processPayment(String type, double amount) {
        PaymentService service = paymentServiceMap.get(type + "PaymentService");
        service.processPayment(amount);
    }
}
```

**Autowiring Resolution:**

```
1. By Type
   ├─ One match → Inject
   ├─ Multiple matches → Check @Primary
   └─ Still multiple → Check @Qualifier

2. If required=false and no match → null
3. If required=true (default) and no match → Exception
```

**Follow-up Questions:**

- What happens if no bean is found for autowiring?
- What is @Primary annotation?
- Can you autowire primitive types?

### 14. What is @Configuration and @Bean?

@Configuration indicates a class provides bean definitions, @Bean indicates a method produces a bean.

**Example:**

```java
@Configuration
public class AppConfig {

    // Simple bean
    @Bean
    public UserService userService() {
        return new UserServiceImpl();
    }

    // Bean with dependencies
    @Bean
    public OrderService orderService(UserService userService, PaymentService paymentService) {
        return new OrderService(userService, paymentService);
    }

    // Bean with custom name
    @Bean(name = "customDataSource")
    public DataSource dataSource() {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
        return dataSource;
    }

    // Bean with init and destroy methods
    @Bean(initMethod = "init", destroyMethod = "cleanup")
    public DatabaseConnection databaseConnection() {
        return new DatabaseConnection();
    }

    // Conditional bean
    @Bean
    @ConditionalOnProperty(name = "feature.cache.enabled", havingValue = "true")
    public CacheManager cacheManager() {
        return new ConcurrentMapCacheManager();
    }

    // Primary bean (preferred when multiple candidates exist)
    @Bean
    @Primary
    public PaymentService primaryPaymentService() {
        return new CreditCardPaymentService();
    }

    @Bean
    public PaymentService alternativePaymentService() {
        return new PayPalPaymentService();
    }
}

// Using @Import to include other configurations
@Configuration
@Import({DatabaseConfig.class, SecurityConfig.class})
public class MainConfig {
}

// Using @PropertySource to load properties
@Configuration
@PropertySource("classpath:custom.properties")
public class PropertiesConfig {
    @Value("${custom.property}")
    private String customProperty;
}
```

**@Configuration vs @Component:**

```
@Configuration:
- Full configuration class
- Methods with @Bean are proxied (CGLIB)
- Inter-bean dependencies handled correctly

@Component:
- Regular spring bean
- Methods with @Bean are not proxied
- Inter-bean calls create new instances
```

**Example showing difference:**

```java
@Configuration
public class ConfigClass {
    @Bean
    public BeanA beanA() {
        return new BeanA();
    }

    @Bean
    public BeanB beanB() {
        return new BeanB(beanA());  // Returns same singleton instance
    }
}

@Component
public class ComponentClass {
    @Bean
    public BeanA beanA() {
        return new BeanA();
    }

    @Bean
    public BeanB beanB() {
        return new BeanB(beanA());  // Creates NEW instance (not singleton!)
    }
}
```

**Follow-up Questions:**

- What is @Configuration(proxyBeanMethods=false)?
- How does @Bean method naming affect bean name?
- Can you use @Bean in @Component classes?

### 15. What is @Transactional?

@Transactional manages database transactions declaratively.

**Example:**

```java
@Service
public class BankService {
    private final AccountRepository accountRepository;
    private final TransactionHistoryRepository historyRepository;

    public BankService(AccountRepository accountRepository,
                      TransactionHistoryRepository historyRepository) {
        this.accountRepository = accountRepository;
        this.historyRepository = historyRepository;
    }

    // Basic transaction
    @Transactional
    public void transferFunds(Long fromAccountId, Long toAccountId, double amount) {
        Account from = accountRepository.findById(fromAccountId)
                                       .orElseThrow(() -> new AccountNotFoundException());
        Account to = accountRepository.findById(toAccountId)
                                     .orElseThrow(() -> new AccountNotFoundException());

        from.debit(amount);
        to.credit(amount);

        accountRepository.save(from);
        accountRepository.save(to);

        // If exception occurs here, all operations rollback
        historyRepository.save(new TransactionHistory(fromAccountId, toAccountId, amount));
    }

    // Read-only transaction (optimization)
    @Transactional(readOnly = true)
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    // Custom isolation level
    @Transactional(isolation = Isolation.SERIALIZABLE)
    public void criticalOperation() {
        // High isolation level
    }

    // Custom propagation
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void independentTransaction() {
        // Always creates new transaction
    }

    // Rollback configuration
    @Transactional(rollbackFor = {CustomException.class})
    public void methodWithCustomRollback() throws CustomException {
        // Rolls back for CustomException
    }

    @Transactional(noRollbackFor = {MinorException.class})
    public void methodWithNoRollback() throws MinorException {
        // Doesn't rollback for MinorException
    }

    // Timeout
    @Transactional(timeout = 5)  // 5 seconds
    public void longRunningOperation() {
        // Transaction rolls back if takes > 5 seconds
    }
}

// Class-level transaction
@Service
@Transactional  // All methods transactional by default
public class ProductService {

    public void method1() {
        // Transactional
    }

    @Transactional(readOnly = true)  // Override class-level
    public void method2() {
        // Read-only transaction
    }

    // Non-transactional method
    public void method3() {
        // Not transactional (if marked specifically)
    }
}
```

**Transaction Propagation:**

```java
@Service
public class TransactionPropagationExample {
    @Autowired
    private InnerService innerService;

    @Transactional
    public void outerMethod() {
        // Transaction T1 starts
        save();

        innerService.requiresNewMethod();  // Creates T2 (independent)
        innerService.requiredMethod();      // Uses T1 (joins)
        innerService.nestedMethod();        // Creates nested transaction

        // T1 commits/rolls back
    }
}

@Service
class InnerService {

    @Transactional(propagation = Propagation.REQUIRED)  // Default
    public void requiredMethod() {
        // Joins existing transaction or creates new
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void requiresNewMethod() {
        // Always creates new transaction
        // Suspends outer transaction
    }

    @Transactional(propagation = Propagation.NESTED)
    public void nestedMethod() {
        // Creates nested transaction (savepoint)
    }

    @Transactional(propagation = Propagation.MANDATORY)
    public void mandatoryMethod() {
        // Must be called within existing transaction
        // Throws exception if no transaction exists
    }

    @Transactional(propagation = Propagation.SUPPORTS)
    public void supportsMethod() {
        // Joins if transaction exists, non-transactional otherwise
    }

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public void notSupportedMethod() {
        // Always non-transactional
        // Suspends existing transaction
    }

    @Transactional(propagation = Propagation.NEVER)
    public void neverMethod() {
        // Must be called without transaction
        // Throws exception if transaction exists
    }
}
```

**Propagation Types:**

```
REQUIRED (default)  - Join existing or create new
REQUIRES_NEW        - Always create new (suspend outer)
NESTED              - Nested transaction (savepoint)
MANDATORY           - Must have existing transaction
SUPPORTS            - Join if exists, non-transactional otherwise
NOT_SUPPORTED       - Always non-transactional (suspend)
NEVER               - Must not have transaction
```

**Isolation Levels:**

```
READ_UNCOMMITTED    - Dirty reads allowed
READ_COMMITTED      - No dirty reads (default)
REPEATABLE_READ     - No dirty, non-repeatable reads
SERIALIZABLE        - Full isolation
```

**Follow-up Questions:**

- What is the default transaction propagation?
- How do you handle nested transactions?
- When does @Transactional not work (self-invocation)?

### 16. What is @Value annotation?

@Value injects values from properties files into fields.

**Example:**

```java
@Component
public class ConfigExample {
    // Inject simple property
    @Value("${app.name}")
    private String appName;

    // With default value
    @Value("${app.timeout:30}")
    private int timeout;

    // Inject system property
    @Value("${user.home}")
    private String userHome;

    // SpEL (Spring Expression Language)
    @Value("#{systemProperties['user.name']}")
    private String username;

    // Mathematical expression
    @Value("#{10 * 2}")
    private int calculatedValue;

    // Boolean expression
    @Value("#{${app.enabled:true} and ${app.debug:false}}")
    private boolean condition;

    // Inject from another bean
    @Value("#{userService.getUserCount()}")
    private int userCount;

    // List injection
    @Value("${app.allowed.origins}")
    private List<String> allowedOrigins;  // From: app.allowed.origins=http://localhost,http://example.com

    // Array injection
    @Value("${app.roles}")
    private String[] roles;
}

// application.properties
/*
app.name=My Application
app.timeout=60
app.enabled=true
app.debug=false
app.allowed.origins=http://localhost,http://example.com
app.roles=ADMIN,USER,GUEST
*/
```

**Follow-up Questions:**

- What is SpEL (Spring Expression Language)?
- How do you provide default values with @Value?

### 17. What is @ConfigurationProperties?

@ConfigurationProperties binds external configuration to a strongly-typed bean.

**Example:**

```java
// application.yml
/*
database:
  host: localhost
  port: 3306
  username: admin
  password: secret123
  pool:
    min-size: 5
    max-size: 20
    timeout: 30000

server:
  allowed-origins:
    - http://localhost:3000
    - http://localhost:4200
  features:
    cache-enabled: true
    debug-mode: false
*/

@Component
@ConfigurationProperties(prefix = "database")
public class DatabaseProperties {
    private String host;
    private int port;
    private String username;
    private String password;
    private Pool pool;

    // Getters and setters
    public String getHost() { return host; }
    public void setHost(String host) { this.host = host; }

    public static class Pool {
        private int minSize;
        private int maxSize;
        private long timeout;

        // Getters and setters
        public int getMinSize() { return minSize; }
        public void setMinSize(int minSize) { this.minSize = minSize; }
        public int getMaxSize() { return maxSize; }
        public void setMaxSize(int maxSize) { this.maxSize = maxSize; }
        public long getTimeout() { return timeout; }
        public void setTimeout(long timeout) { this.timeout = timeout; }
    }

    public Pool getPool() { return pool; }
    public void setPool(Pool pool) { this.pool = pool; }
}

// Using the properties
@Service
public class DatabaseService {
    private final DatabaseProperties dbProperties;

    public DatabaseService(DatabaseProperties dbProperties) {
        this.dbProperties = dbProperties;
    }

    public void connect() {
        String url = "jdbc:mysql://" + dbProperties.getHost() + ":" +
                     dbProperties.getPort() + "/mydb";
        System.out.println("Connecting to: " + url);
        System.out.println("Pool min: " + dbProperties.getPool().getMinSize());
    }
}

// With validation
@Component
@ConfigurationProperties(prefix = "server")
@Validated
public class ServerProperties {
    @NotNull
    @Size(min = 1)
    private List<String> allowedOrigins;

    @NotNull
    private Features features;

    public static class Features {
        private boolean cacheEnabled;
        private boolean debugMode;

        public boolean isCacheEnabled() { return cacheEnabled; }
        public void setCacheEnabled(boolean cacheEnabled) { this.cacheEnabled = cacheEnabled; }
        public boolean isDebugMode() { return debugMode; }
        public void setDebugMode(boolean debugMode) { this.debugMode = debugMode; }
    }

    // Getters and setters
    public List<String> getAllowedOrigins() { return allowedOrigins; }
    public void setAllowedOrigins(List<String> allowedOrigins) { this.allowedOrigins = allowedOrigins; }
    public Features getFeatures() { return features; }
    public void setFeatures(Features features) { this.features = features; }
}
```

**@Value vs @ConfigurationProperties:**

```
Feature              | @Value                  | @ConfigurationProperties
---------------------|-------------------------|---------------------------
Type safety          | No                      | Yes
Nested properties    | Difficult               | Easy
Validation           | No                      | Yes (@Validated)
Relaxed binding      | No                      | Yes (kebab-case, etc.)
Meta-data support    | No                      | Yes
IDE autocomplete     | Limited                 | Excellent
Use case             | Single properties       | Complex configurations
```

**Follow-up Questions:**

- What is relaxed binding in @ConfigurationProperties?
- How do you validate configuration properties?

### 18. What is the difference between @RequestMapping, @GetMapping, @PostMapping?

**Example:**

```java
@RestController
@RequestMapping("/api/users")  // Base path for all methods
public class UserController {

    // Generic @RequestMapping
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    // @GetMapping (shorthand for GET)
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }

    // @PostMapping (shorthand for POST)
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }

    // @PutMapping (shorthand for PUT)
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        user.setId(id);
        return userService.update(user);
    }

    // @PatchMapping (shorthand for PATCH)
    @PatchMapping("/{id}")
    public User partialUpdate(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
        return userService.partialUpdate(id, updates);
    }

    // @DeleteMapping (shorthand for DELETE)
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.delete(id);
    }

    // Multiple HTTP methods
    @RequestMapping(value = "/search", method = {RequestMethod.GET, RequestMethod.POST})
    public List<User> searchUsers(@RequestParam String query) {
        return userService.search(query);
    }

    // With headers, params, consumes, produces
    @GetMapping(value = "/advanced",
                headers = "X-API-VERSION=1",
                params = "active=true",
                consumes = "application/json",
                produces = "application/json")
    public List<User> advancedMapping() {
        return userService.findActive();
    }

    // Request parameters
    @GetMapping("/filter")
    public List<User> filterUsers(
        @RequestParam String name,
        @RequestParam(required = false) Integer age,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size
    ) {
        return userService.filter(name, age, page, size);
    }

    // Path variables
    @GetMapping("/{userId}/orders/{orderId}")
    public Order getOrder(
        @PathVariable Long userId,
        @PathVariable Long orderId
    ) {
        return orderService.findOrder(userId, orderId);
    }

    // Request headers
    @GetMapping("/with-header")
    public String getWithHeader(
        @RequestHeader("User-Agent") String userAgent,
        @RequestHeader(value = "Accept-Language", defaultValue = "en") String language
    ) {
        return "User-Agent: " + userAgent + ", Language: " + language;
    }
}
```

**HTTP Method Annotations:**

```
Annotation      | HTTP Method | Idempotent | Safe | Use Case
----------------|-------------|------------|------|------------------
@GetMapping     | GET         | Yes        | Yes  | Retrieve data
@PostMapping    | POST        | No         | No   | Create resource
@PutMapping     | PUT         | Yes        | No   | Update (full)
@PatchMapping   | PATCH       | No         | No   | Update (partial)
@DeleteMapping  | DELETE      | Yes        | No   | Delete resource
```

**Follow-up Questions:**

- What is the difference between @PathVariable and @RequestParam?
- What is idempotency in REST?

### 19. What is @RequestBody and @ResponseBody?

**Example:**

```java
@RestController  // Implicitly adds @ResponseBody to all methods
@RequestMapping("/api")
public class ApiController {

    // @RequestBody - Deserialize JSON to object
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        // user object automatically created from JSON request body
        return userService.save(user);
    }

    // @ResponseBody - Serialize object to JSON (implicit with @RestController)
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);  // Automatically converted to JSON
    }

    // Multiple request body parameters (using DTOs)
    @PostMapping("/orders")
    public Order createOrder(@RequestBody OrderRequest orderRequest) {
        return orderService.create(orderRequest);
    }

    // With validation
    @PostMapping("/users/validated")
    public User createValidatedUser(@Valid @RequestBody User user) {
        return userService.save(user);
    }
}

// DTO for request
class OrderRequest {
    private Long userId;
    private List<OrderItem> items;
    private String shippingAddress;

    // Getters and setters
}

// Using @Controller (not @RestController)
@Controller
public class WebController {

    @PostMapping("/submit")
    @ResponseBody  // Needed explicitly with @Controller
    public Map<String, String> submitForm(@RequestBody FormData data) {
        return Map.of("status", "success");
    }

    @GetMapping("/page")
    public String showPage() {
        return "page";  // Returns view name (not JSON) - no @ResponseBody
    }
}

// Entity with validation
class User {
    private Long id;

    @NotNull
    @Size(min = 2, max = 50)
    private String name;

    @Email
    private String email;

    @Min(18)
    private int age;

    // Getters and setters
}
```

**How it works:**

```
Request Flow:
Client sends JSON → @RequestBody → HttpMessageConverter → Java Object

Response Flow:
Java Object → @ResponseBody → HttpMessageConverter → JSON → Client

HttpMessageConverters:
- MappingJackson2HttpMessageConverter (JSON)
- Jaxb2RootElementHttpMessageConverter (XML)
- StringHttpMessageConverter (String)
- ByteArrayHttpMessageConverter (byte[])
```

**Follow-up Questions:**

- What is HttpMessageConverter?
- How do you customize JSON serialization?

### 20. What is the difference between @Controller and @RestController?

**Example:**

```java
// @Controller - Returns views (HTML pages)
@Controller
public class WebController {

    @GetMapping("/home")
    public String homePage(Model model) {
        model.addAttribute("message", "Welcome!");
        return "home";  // Returns view name (home.html)
    }

    @PostMapping("/submit")
    public String submit(@ModelAttribute User user, Model model) {
        userService.save(user);
        return "redirect:/success";  // Redirect to another page
    }

    // Return JSON with @ResponseBody
    @GetMapping("/api/data")
    @ResponseBody
    public Map<String, String> getData() {
        return Map.of("key", "value");  // Returns JSON
    }
}

// @RestController - Returns data (JSON/XML)
// Equivalent to @Controller + @ResponseBody on every method
@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.findAll();  // Automatically converted to JSON
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.save(user);  // Returns JSON
    }

    // Can still return ResponseEntity
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return userService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}
```

**Visual Comparison:**

```
@Controller:
Request → Controller → View Resolver → HTML Page → Client

@RestController:
Request → Controller → Message Converter → JSON/XML → Client
```

**Comparison:**

```
Feature          | @Controller            | @RestController
-----------------|------------------------|---------------------------
Purpose          | MVC web pages          | RESTful web services
Returns          | View name              | Data (JSON/XML)
@ResponseBody    | Needed explicitly      | Implicit on all methods
Use case         | Traditional web apps   | APIs
Equivalent to    | @Controller            | @Controller + @ResponseBody
```

**Follow-up Questions:**

- Can you mix @Controller and @RestController in same application?
- How do you return a view from @RestController?

---

## Spring Data JPA

### 21. What is Spring Data JPA?

Spring Data JPA simplifies database access by providing repository abstractions.

**Example:**

```java
// Entity
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    private int age;

    @Column(name = "created_date")
    private LocalDateTime createdDate;

    private boolean active;

    // Getters and setters
}

// Repository interface
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Derived query methods (Spring Data generates implementation)
    Optional<User> findByEmail(String email);
    List<User> findByActiveTrue();
    List<User> findByAgeGreaterThan(int age);
    List<User> findByNameContaining(String name);
    List<User> findByAgeBetween(int minAge, int maxAge);
    List<User> findByEmailAndActive(String email, boolean active);
    List<User> findByOrderByNameAsc();

    // Count queries
    long countByActive(boolean active);
    boolean existsByEmail(String email);

    // Delete queries
    void deleteByActive(boolean active);
    Long deleteByAge(int age);

    // @Query annotation - JPQL
    @Query("SELECT u FROM User u WHERE u.age > :age")
    List<User> findUsersOlderThan(@Param("age") int age);

    @Query("SELECT u FROM User u WHERE u.name LIKE %:keyword% OR u.email LIKE %:keyword%")
    List<User> searchUsers(@Param("keyword") String keyword);

    // Native SQL query
    @Query(value = "SELECT * FROM users WHERE age > ?1", nativeQuery = true)
    List<User> findByAgeNative(int age);

    // Update query
    @Modifying
    @Query("UPDATE User u SET u.active = :active WHERE u.id = :id")
    int updateUserStatus(@Param("id") Long id, @Param("active") boolean active);

    // Pagination and sorting
    Page<User> findByActive(boolean active, Pageable pageable);
    List<User> findByActive(boolean active, Sort sort);
}

// Service using repository
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        user.setCreatedDate(LocalDateTime.now());
        return userRepository.save(user);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Page<User> getActiveUsers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("name").ascending());
        return userRepository.findByActive(true, pageable);
    }

    @Transactional
    public void deactivateUser(Long id) {
        userRepository.updateUserStatus(id, false);
    }
}
```

**Repository Hierarchy:**

```
Repository<T, ID>
    ↓
CrudRepository<T, ID>
    ├── save(entity)
    ├── findById(id)
    ├── findAll()
    ├── count()
    ├── delete(entity)
    └── existsById(id)
    ↓
PagingAndSortingRepository<T, ID>
    ├── findAll(Sort)
    └── findAll(Pageable)
    ↓
JpaRepository<T, ID>
    ├── flush()
    ├── saveAndFlush(entity)
    ├── deleteInBatch(entities)
    └── getOne(id) / getById(id)
```

**Follow-up Questions:**

- What is the difference between findById() and getById()?
- How does Spring Data JPA generate implementations?
- What is @Modifying annotation for?

### 22. What are JPA relationships?

**Example:**

```java
// One-to-One relationship
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profile_id")
    private UserProfile profile;

    // Getters and setters
}

@Entity
public class UserProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String bio;
    private String website;

    @OneToOne(mappedBy = "profile")
    private User user;
}

// One-to-Many / Many-to-One relationship
@Entity
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
    private List<Employee> employees = new ArrayList<>();

    // Helper method
    public void addEmployee(Employee employee) {
        employees.add(employee);
        employee.setDepartment(this);
    }
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

// Many-to-Many relationship
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
    private Set<Course> courses = new HashSet<>();
}

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ManyToMany(mappedBy = "courses")
    private Set<Student> students = new HashSet<>();
}

// Fetch types
@Entity
public class Order {
    @Id
    private Long id;

    @OneToMany(fetch = FetchType.LAZY)  // Default for collections
    private List<OrderItem> items;

    @ManyToOne(fetch = FetchType.EAGER)  // Default for single-valued
    private Customer customer;
}
```

**Cascade Types:**

```
CascadeType.PERSIST  - Save operations cascade
CascadeType.MERGE    - Merge operations cascade
CascadeType.REMOVE   - Delete operations cascade
CascadeType.REFRESH  - Refresh operations cascade
CascadeType.DETACH   - Detach operations cascade
CascadeType.ALL      - All operations cascade
```

**Fetch Types:**

```
LAZY (Default for collections):
- Loaded on demand
- Prevents N+1 problem
- May cause LazyInitializationException

EAGER (Default for single-valued):
- Loaded immediately
- Can cause performance issues
- No LazyInitializationException
```

**Follow-up Questions:**

- What is the N+1 problem?
- When should you use EAGER vs LAZY fetching?
- What is orphanRemoval in JPA?

### 23. What is pagination and sorting in Spring Data?

**Example:**

```java
// Repository with pagination
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findByCategory(String category, Pageable pageable);
    Slice<Product> findByPriceGreaterThan(double price, Pageable pageable);
}

// Controller with pagination
@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Pagination with query parameters
    @GetMapping
    public Page<Product> getAllProducts(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size,
        @RequestParam(defaultValue = "id") String sortBy,
        @RequestParam(defaultValue = "ASC") String direction
    ) {
        Sort.Direction sortDirection = Sort.Direction.fromString(direction);
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortDirection, sortBy));
        return productRepository.findAll(pageable);
    }

    // Multiple sort fields
    @GetMapping("/sorted")
    public Page<Product> getSortedProducts(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size
    ) {
        Sort sort = Sort.by(Sort.Order.asc("category"), Sort.Order.desc("price"));
        Pageable pageable = PageRequest.of(page, size, sort);
        return productRepository.findAll(pageable);
    }

    // Using Pageable parameter directly
    @GetMapping("/pageable")
    public Page<Product> getProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }
    // Call: /api/products/pageable?page=0&size=10&sort=name,asc&sort=price,desc
}

// Service with pagination logic
@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Page<Product> findByCategory(String category, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("name"));
        return productRepository.findByCategory(category, pageable);
    }

    public Page<ProductDTO> findProductsAsDTO(Pageable pageable) {
        Page<Product> products = productRepository.findAll(pageable);
        return products.map(this::convertToDTO);
    }

    private ProductDTO convertToDTO(Product product) {
        return new ProductDTO(product.getId(), product.getName(), product.getPrice());
    }
}

// Response structure
@GetMapping("/detailed")
public Map<String, Object> getDetailedPage(Pageable pageable) {
    Page<Product> page = productRepository.findAll(pageable);

    Map<String, Object> response = new HashMap<>();
    response.put("products", page.getContent());
    response.put("currentPage", page.getNumber());
    response.put("totalItems", page.getTotalElements());
    response.put("totalPages", page.getTotalPages());
    response.put("pageSize", page.getSize());
    response.put("hasNext", page.hasNext());
    response.put("hasPrevious", page.hasPrevious());

    return response;
}
```

**Page vs Slice:**

```
Page:
- Knows total number of pages
- Additional count query executed
- Use when you need total count

Slice:
- Doesn't know total pages
- No count query
- Only knows if next slice exists
- Better performance for large datasets
```

**Follow-up Questions:**

- What is the difference between Page and Slice?
- How do you implement custom pagination?

### 24. What is @Query annotation?

**Example:**

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // JPQL query
    @Query("SELECT u FROM User u WHERE u.email = :email")
    Optional<User> findByEmailJPQL(@Param("email") String email);

    // Multiple parameters
    @Query("SELECT u FROM User u WHERE u.age BETWEEN :minAge AND :maxAge")
    List<User> findByAgeRange(@Param("minAge") int minAge, @Param("maxAge") int maxAge);

    // JOIN query
    @Query("SELECT u FROM User u JOIN u.orders o WHERE o.status = :status")
    List<User> findUsersWithOrderStatus(@Param("status") String status);

    // Projection (select specific fields)
    @Query("SELECT u.name, u.email FROM User u WHERE u.active = true")
    List<Object[]> findActiveUserNamesAndEmails();

    // Native SQL query
    @Query(value = "SELECT * FROM users WHERE email LIKE %:domain%", nativeQuery = true)
    List<User> findByEmailDomainNative(@Param("domain") String domain);

    // Update query
    @Modifying
    @Transactional
    @Query("UPDATE User u SET u.active = false WHERE u.lastLogin < :date")
    int deactivateInactiveUsers(@Param("date") LocalDateTime date);

    // Delete query
    @Modifying
    @Transactional
    @Query("DELETE FROM User u WHERE u.active = false")
    int deleteInactiveUsers();

    // Named parameters
    @Query("SELECT u FROM User u WHERE u.name = :name AND u.age = :age")
    List<User> findByNameAndAge(@Param("name") String name, @Param("age") int age);

    // Positional parameters
    @Query("SELECT u FROM User u WHERE u.name = ?1 AND u.age = ?2")
    List<User> findByNameAndAgePositional(String name, int age);

    // DTO projection
    @Query("SELECT new com.example.dto.UserDTO(u.id, u.name, u.email) FROM User u")
    List<UserDTO> findAllAsDTO();

    // Aggregation
    @Query("SELECT COUNT(u) FROM User u WHERE u.active = true")
    long countActiveUsers();

    @Query("SELECT u.department, COUNT(u) FROM User u GROUP BY u.department")
    List<Object[]> countByDepartment();
}

// DTO for projection
public class UserDTO {
    private Long id;
    private String name;
    private String email;

    public UserDTO(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Getters
}

// Interface-based projection
public interface UserSummary {
    String getName();
    String getEmail();

    @Value("#{target.name + ' (' + target.email + ')'}")
    String getFullInfo();
}

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<UserSummary> findByActive(boolean active);
}
```

**JPQL vs Native SQL:**

```
Feature          | JPQL                   | Native SQL
-----------------|------------------------|------------------
Database agnostic| Yes                    | No
Entity-based     | Yes (uses entities)    | No (uses tables)
Type-safe        | Yes                    | No
Flexibility      | Limited                | Full SQL power
Annotation       | @Query                 | @Query(nativeQuery=true)
```

**Follow-up Questions:**

- What is the difference between JPQL and SQL?
- When should you use @Modifying?
- What are projections in Spring Data JPA?

### 25. What are REST API best practices in Spring Boot?

**Example:**

```java
// Proper REST Controller structure
@RestController
@RequestMapping("/api/v1/users")
@Validated
public class UserRestController {
    private final UserService userService;

    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    // GET - Retrieve all users with pagination
    @GetMapping
    public ResponseEntity<Page<UserDTO>> getAllUsers(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size
    ) {
        Page<UserDTO> users = userService.findAll(PageRequest.of(page, size));
        return ResponseEntity.ok(users);
    }

    // GET - Retrieve single user
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
        return userService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // POST - Create user with validation
    @PostMapping
    public ResponseEntity<UserDTO> createUser(@Valid @RequestBody CreateUserRequest request) {
        UserDTO created = userService.create(request);
        URI location = ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(created.getId())
            .toUri();
        return ResponseEntity.created(location).body(created);
    }

    // PUT - Full update
    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(
        @PathVariable Long id,
        @Valid @RequestBody UpdateUserRequest request
    ) {
        return userService.update(id, request)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // PATCH - Partial update
    @PatchMapping("/{id}")
    public ResponseEntity<UserDTO> partialUpdate(
        @PathVariable Long id,
        @RequestBody Map<String, Object> updates
    ) {
        return userService.partialUpdate(id, updates)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (userService.delete(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    // Search with query parameters
    @GetMapping("/search")
    public ResponseEntity<List<UserDTO>> searchUsers(
        @RequestParam(required = false) String name,
        @RequestParam(required = false) String email,
        @RequestParam(required = false) Integer minAge
    ) {
        List<UserDTO> users = userService.search(name, email, minAge);
        return ResponseEntity.ok(users);
    }
}

// DTO classes
public class UserDTO {
    private Long id;
    private String name;
    private String email;
    private LocalDateTime createdAt;
    // Getters and setters
}

public class CreateUserRequest {
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100)
    private String name;

    @NotBlank
    @Email(message = "Invalid email format")
    private String email;

    @Min(value = 18, message = "Must be at least 18 years old")
    private int age;

    @Pattern(regexp = "^\\+?[0-9]{10,15}$", message = "Invalid phone number")
    private String phone;

    // Getters and setters
}

// Global exception handler
@RestControllerAdvice
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
    public ResponseEntity<Map<String, String>> handleValidationErrors(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error ->
            errors.put(error.getField(), error.getDefaultMessage())
        );
        return ResponseEntity.badRequest().body(errors);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGlobalException(Exception ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Internal server error",
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}

// Error response DTO
public class ErrorResponse {
    private int status;
    private String message;
    private LocalDateTime timestamp;

    // Constructor, getters, setters
}
```

**RESTful API Best Practices:**

```
1. Use proper HTTP methods (GET, POST, PUT, PATCH, DELETE)
2. Use meaningful resource URLs (/api/v1/users not /getUsers)
3. Return appropriate status codes
4. Use DTOs (don't expose entities directly)
5. Implement pagination for list endpoints
6. Use versioning (/api/v1/)
7. Handle exceptions globally (@RestControllerAdvice)
8. Validate input (@Valid, @Validated)
9. Document API (Swagger/OpenAPI)
10. Use HATEOAS for discoverability
```

**HTTP Status Codes:**

```
200 OK           - Successful GET, PUT, PATCH
201 Created      - Successful POST
204 No Content   - Successful DELETE
400 Bad Request  - Validation error
401 Unauthorized - Authentication required
403 Forbidden    - No permission
404 Not Found    - Resource not found
500 Server Error - Internal error
```

**Follow-up Questions:**

- What is the difference between PUT and PATCH?
- How do you version REST APIs?
- What is HATEOAS?

### 26. What is ResponseEntity?

ResponseEntity represents the entire HTTP response including status code, headers, and body.

**Example:**

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Basic ResponseEntity
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return userService.findById(id)
            .map(user -> ResponseEntity.ok(user))
            .orElse(ResponseEntity.notFound().build());
    }

    // With custom status
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User created = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    // With headers
    @GetMapping("/{id}/download")
    public ResponseEntity<byte[]> downloadFile(@PathVariable Long id) {
        byte[] data = fileService.getFile(id);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("attachment", "file.pdf");

        return ResponseEntity.ok()
            .headers(headers)
            .body(data);
    }

    // With Location header
    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        User created = userService.save(user);

        URI location = ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(created.getId())
            .toUri();

        return ResponseEntity.created(location).body(created);
    }

    // No content response
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }

    // Custom headers
    @GetMapping("/info")
    public ResponseEntity<String> getInfo() {
        return ResponseEntity.ok()
            .header("X-Custom-Header", "Custom Value")
            .header("Cache-Control", "no-cache")
            .body("Information");
    }

    // Conditional response
    @GetMapping("/conditional/{id}")
    public ResponseEntity<User> getConditional(@PathVariable Long id) {
        Optional<User> user = userService.findById(id);

        if (user.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        if (!user.get().isActive()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        return ResponseEntity.ok(user.get());
    }
}
```

**Common ResponseEntity patterns:**

```java
// Success responses
ResponseEntity.ok(body)                          // 200 OK
ResponseEntity.ok().build()                      // 200 OK (no body)
ResponseEntity.created(location).body(body)      // 201 Created
ResponseEntity.accepted().build()                // 202 Accepted
ResponseEntity.noContent().build()               // 204 No Content

// Error responses
ResponseEntity.badRequest().build()              // 400 Bad Request
ResponseEntity.notFound().build()                // 404 Not Found
ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()  // 500

// With custom status
ResponseEntity.status(451).body("Unavailable")
```

**Follow-up Questions:**

- When should you use ResponseEntity?
- How do you add custom headers to response?

### 27. What is exception handling in Spring Boot?

**Example:**

```java
// Custom exception
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}

public class ValidationException extends RuntimeException {
    private Map<String, String> errors;

    public ValidationException(String message, Map<String, String> errors) {
        super(message);
        this.errors = errors;
    }

    public Map<String, String> getErrors() {
        return errors;
    }
}

// Global exception handler
@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    // Handle specific exception
    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleResourceNotFound(ResourceNotFoundException ex) {
        log.error("Resource not found: ", ex);
        return new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
    }

    // Handle validation errors
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ValidationErrorResponse handleValidationErrors(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> {
            errors.put(error.getField(), error.getDefaultMessage());
        });

        return new ValidationErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            "Validation failed",
            errors,
            LocalDateTime.now()
        );
    }

    // Handle custom validation exception
    @ExceptionHandler(ValidationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ValidationErrorResponse handleCustomValidation(ValidationException ex) {
        return new ValidationErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            ex.getMessage(),
            ex.getErrors(),
            LocalDateTime.now()
        );
    }

    // Handle DataIntegrityViolationException
    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ErrorResponse handleDataIntegrityViolation(DataIntegrityViolationException ex) {
        return new ErrorResponse(
            HttpStatus.CONFLICT.value(),
            "Database constraint violation",
            LocalDateTime.now()
        );
    }

    // Handle IllegalArgumentException
    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleIllegalArgument(IllegalArgumentException ex) {
        return new ErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
    }

    // Handle all other exceptions
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleGlobalException(Exception ex) {
        log.error("Unexpected error: ", ex);
        return new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "An unexpected error occurred",
            LocalDateTime.now()
        );
    }
}

// Error response DTOs
@Data
@AllArgsConstructor
public class ErrorResponse {
    private int status;
    private String message;
    private LocalDateTime timestamp;
}

@Data
@AllArgsConstructor
public class ValidationErrorResponse {
    private int status;
    private String message;
    private Map<String, String> errors;
    private LocalDateTime timestamp;
}

// Using in controller
@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
    }

    @PostMapping
    public User createUser(@Valid @RequestBody UserRequest request) {
        if (userService.existsByEmail(request.getEmail())) {
            throw new ValidationException("Email already exists",
                Map.of("email", "Email is already in use"));
        }
        return userService.create(request);
    }
}
```

**Exception Handling Hierarchy:**

```
@ExceptionHandler     - Method level (in same controller)
@ControllerAdvice     - Global (all controllers)
@RestControllerAdvice - Global (REST controllers, adds @ResponseBody)

Priority (highest to lowest):
1. @ExceptionHandler in controller
2. @ExceptionHandler in @ControllerAdvice
3. Default Spring error handling
```

**Follow-up Questions:**

- What is @ControllerAdvice vs @RestControllerAdvice?
- How do you handle validation errors?
- What is @ResponseStatus annotation?

### 28. What is validation in Spring Boot?

**Example:**

```java
// Entity with Bean Validation annotations
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Name cannot be null")
    @NotBlank(message = "Name cannot be blank")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    private String name;

    @NotBlank
    @Email(message = "Email should be valid")
    private String email;

    @Min(value = 18, message = "Age must be at least 18")
    @Max(value = 150, message = "Age must be less than 150")
    private int age;

    @Pattern(regexp = "^\\+?[1-9]\\d{1,14}$", message = "Phone number is invalid")
    private String phone;

    @Past(message = "Birth date must be in the past")
    private LocalDate birthDate;

    @Future(message = "Expiry date must be in the future")
    private LocalDate expiryDate;

    @DecimalMin(value = "0.0", message = "Salary must be positive")
    private BigDecimal salary;

    @URL(message = "Website must be a valid URL")
    private String website;

    // Getters and setters
}

// DTO with validation
public class CreateUserRequest {
    @NotBlank
    @Size(min = 2, max = 50)
    private String username;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    @Size(min = 8, message = "Password must be at least 8 characters")
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$",
             message = "Password must contain digit, lowercase, uppercase, and special character")
    private String password;

    @Min(18)
    @Max(120)
    private Integer age;

    @NotEmpty
    private List<@NotBlank String> interests;

    // Getters and setters
}

// Controller with validation
@RestController
@RequestMapping("/api/users")
@Validated  // Enable method-level validation
public class UserController {

    // Validate request body
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody CreateUserRequest request) {
        User user = userService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    // Validate path variable
    @GetMapping("/{id}")
    public User getUser(@PathVariable @Min(1) Long id) {
        return userService.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    // Validate request parameters
    @GetMapping("/search")
    public List<User> searchUsers(
        @RequestParam @NotBlank String keyword,
        @RequestParam @Min(0) int page,
        @RequestParam @Min(1) @Max(100) int size
    ) {
        return userService.search(keyword, page, size);
    }
}

// Custom validator
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UniqueEmailValidator.class)
public @interface UniqueEmail {
    String message() default "Email already exists";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {
    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean isValid(String email, ConstraintValidatorContext context) {
        if (email == null) return true;
        return !userRepository.existsByEmail(email);
    }
}

// Using custom validator
public class UserRequest {
    @NotBlank
    @Email
    @UniqueEmail
    private String email;
}

// Group validation
public interface BasicInfo {}
public interface AdvancedInfo {}

public class UserDTO {
    @NotNull(groups = BasicInfo.class)
    private String name;

    @Email(groups = BasicInfo.class)
    private String email;

    @Size(min = 10, groups = AdvancedInfo.class)
    private String bio;
}

@PostMapping("/basic")
public User createBasic(@Validated(BasicInfo.class) @RequestBody UserDTO dto) {
    // Validates only BasicInfo group
    return userService.create(dto);
}

@PostMapping("/advanced")
public User createAdvanced(@Validated(AdvancedInfo.class) @RequestBody UserDTO dto) {
    // Validates only AdvancedInfo group
    return userService.create(dto);
}
```

**Common Validation Annotations:**

```
@NotNull         - Not null
@NotEmpty        - Not null and not empty (collections/strings)
@NotBlank        - Not null, not empty, not whitespace (strings only)
@Size            - Size constraints
@Min / @Max      - Numeric min/max
@Email           - Valid email format
@Pattern         - Regex pattern
@Past / @Future  - Date in past/future
@Positive        - Positive number
@Negative        - Negative number
@AssertTrue      - Must be true
@AssertFalse     - Must be false
```

**Follow-up Questions:**

- What is the difference between @NotNull, @NotEmpty, and @NotBlank?
- How do you create custom validators?
- What is validation group?

### 29. What is Spring Security?

**Example:**

```java
// Security Configuration
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()  // Disable CSRF for REST APIs
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // For JWT
            )
            .httpBasic()  // Basic authentication
            .and()
            .formLogin();  // Form-based login

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config)
            throws Exception {
        return config.getAuthenticationManager();
    }
}

// User Details Service
@Service
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return org.springframework.security.core.userdetails.User
            .withUsername(user.getUsername())
            .password(user.getPassword())
            .roles(user.getRoles().toArray(new String[0]))
            .accountExpired(false)
            .accountLocked(false)
            .credentialsExpired(false)
            .disabled(!user.isActive())
            .build();
    }
}

// Method-level security
@Service
@EnableMethodSecurity  // or @EnableGlobalMethodSecurity
public class UserService {

    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public User getUser(Long id) {
        return userRepository.findById(id).orElseThrow();
    }

    @PreAuthorize("#userId == authentication.principal.id or hasRole('ADMIN')")
    public void updateUser(Long userId, User user) {
        userRepository.save(user);
    }

    @PostAuthorize("returnObject.username == authentication.name")
    public User loadUserDetails(Long id) {
        return userRepository.findById(id).orElseThrow();
    }
}

// Authentication controller
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getUsername(),
                request.getPassword()
            )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Generate token (JWT)
        String token = jwtTokenProvider.generateToken(authentication);

        return ResponseEntity.ok(new AuthResponse(token));
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@Valid @RequestBody RegisterRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        User created = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
}
```

**Security Annotations:**

```
@EnableWebSecurity          - Enable Spring Security
@EnableMethodSecurity       - Enable method-level security
@PreAuthorize("expression") - Check before method execution
@PostAuthorize("expression")- Check after method execution
@Secured("ROLE_ADMIN")      - Requires specific role
@RolesAllowed("ADMIN")      - JSR-250 annotation
```

**Follow-up Questions:**

- How does Spring Security work?
- What is the difference between authentication and authorization?
- What is JWT?

### 30. What is JWT authentication?

**Example:**

```java
// JWT Utility class
@Component
public class JwtTokenProvider {
    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private long jwtExpiration;

    public String generateToken(Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpiration);

        return Jwts.builder()
            .setSubject(userDetails.getUsername())
            .setIssuedAt(now)
            .setExpiration(expiryDate)
            .signWith(SignatureAlgorithm.HS512, jwtSecret)
            .compact();
    }

    public String getUsernameFromToken(String token) {
        Claims claims = Jwts.parser()
            .setSigningKey(jwtSecret)
            .parseClaimsJws(token)
            .getBody();

        return claims.getSubject();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }
}

// JWT Authentication Filter
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                   HttpServletResponse response,
                                   FilterChain filterChain) throws ServletException, IOException {
        try {
            String jwt = getJwtFromRequest(request);

            if (StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) {
                String username = tokenProvider.getUsernameFromToken(jwt);
                UserDetails userDetails = userDetailsService.loadUserByUsername(username);

                UsernamePasswordAuthenticationToken authentication =
                    new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());

                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception ex) {
            logger.error("Could not set user authentication", ex);
        }

        filterChain.doFilter(request, response);
    }

    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}

// Security configuration with JWT
@Configuration
@EnableWebSecurity
public class JwtSecurityConfig {

    @Autowired
    private JwtAuthenticationFilter jwtAuthFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authorizeHttpRequests()
                .requestMatchers("/api/auth/**").permitAll()
                .anyRequest().authenticated()
            .and()
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
```

**JWT Flow:**

```
1. Login:
   Client → POST /auth/login → Server
   Server validates → Generates JWT → Returns token

2. Subsequent requests:
   Client → Request + JWT in header → Server
   Server validates JWT → Processes request

3. Request Header:
   Authorization: Bearer <jwt-token>
```

**Follow-up Questions:**

- What are the parts of a JWT token?
- How do you refresh JWT tokens?
- What is the difference between JWT and session-based auth?

---

## Spring Boot Annotations

### 31. What is @Lazy annotation?

@Lazy delays bean initialization until it's first used.

**Example:**

```java
@Component
@Lazy  // Bean created only when first accessed
public class HeavyService {
    public HeavyService() {
        System.out.println("HeavyService initialized");
        // Expensive initialization
    }
}

@Service
public class MyService {
    private final HeavyService heavyService;

    public MyService(@Lazy HeavyService heavyService) {
        this.heavyService = heavyService;  // Proxy injected, not actual bean
    }

    public void useHeavyService() {
        heavyService.doWork();  // Actual bean created here
    }
}
```

**Follow-up Questions:**

- When should you use @Lazy?
- What are the drawbacks of lazy initialization?

### 32. What is @Async annotation?

@Async executes methods asynchronously in a separate thread.

**Example:**

```java
@Configuration
@EnableAsync
public class AsyncConfig {

    @Bean(name = "taskExecutor")
    public Executor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(2);
        executor.setMaxPoolSize(5);
        executor.setQueueCapacity(100);
        executor.setThreadNamePrefix("async-");
        executor.initialize();
        return executor;
    }
}

@Service
public class EmailService {

    @Async
    public void sendEmail(String to, String message) {
        System.out.println("Sending email in thread: " + Thread.currentThread().getName());
        // Send email (runs in separate thread)
    }

    @Async
    public CompletableFuture<String> processAsync(String data) {
        // Long running task
        String result = heavyProcessing(data);
        return CompletableFuture.completedFuture(result);
    }
}

// Using async method
@RestController
public class UserController {
    @Autowired
    private EmailService emailService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        userService.save(user);
        emailService.sendEmail(user.getEmail(), "Welcome!");  // Async, doesn't block
        return ResponseEntity.ok("User registered");
    }

    @GetMapping("/process")
    public CompletableFuture<String> process() {
        return emailService.processAsync("data");
    }
}
```

**Follow-up Questions:**

- What is @EnableAsync?
- How do you configure thread pool for async methods?

### 33. What is @Scheduled annotation?

**Example:**

```java
@Configuration
@EnableScheduling
public class SchedulingConfig {
}

@Component
public class ScheduledTasks {

    // Fixed rate - every 5 seconds
    @Scheduled(fixedRate = 5000)
    public void fixedRateTask() {
        System.out.println("Fixed rate task: " + LocalDateTime.now());
    }

    // Fixed delay - 5 seconds after previous execution completes
    @Scheduled(fixedDelay = 5000)
    public void fixedDelayTask() {
        System.out.println("Fixed delay task: " + LocalDateTime.now());
    }

    // Initial delay - wait 10 seconds before first execution
    @Scheduled(fixedRate = 5000, initialDelay = 10000)
    public void initialDelayTask() {
        System.out.println("Task with initial delay");
    }

    // Cron expression - every day at 2 AM
    @Scheduled(cron = "0 0 2 * * ?")
    public void cronTask() {
        System.out.println("Cron task executed");
    }

    // Every Monday at 9 AM
    @Scheduled(cron = "0 0 9 * * MON")
    public void mondayTask() {
        System.out.println("Monday task");
    }

    // Every hour
    @Scheduled(cron = "0 0 * * * ?")
    public void hourlyTask() {
        System.out.println("Hourly task");
    }
}
```

**Cron Format:**

```
second minute hour day month weekday

Examples:
"0 0 * * * *"      - Every hour
"0 0 8 * * ?"      - Every day at 8 AM
"0 0 8-18 * * ?"   - Every hour from 8 AM to 6 PM
"0 0/15 * * * ?"   - Every 15 minutes
"0 0 2 1 * ?"      - 2 AM on first day of every month
```

**Follow-up Questions:**

- What is the difference between fixedRate and fixedDelay?
- How do you disable scheduling in tests?

### 34. What is @Cacheable annotation?

**Example:**

```java
@Configuration
@EnableCaching
public class CacheConfig {

    @Bean
    public CacheManager cacheManager() {
        return new ConcurrentMapCacheManager("users", "products");
    }
}

@Service
public class UserService {

    // Cache method result
    @Cacheable(value = "users", key = "#id")
    public User findById(Long id) {
        System.out.println("Fetching from database: " + id);
        return userRepository.findById(id).orElse(null);
        // Subsequent calls with same id return cached result
    }

    // Multiple cache names
    @Cacheable(value = {"users", "activeUsers"}, key = "#id", condition = "#active == true")
    public User findActiveUser(Long id, boolean active) {
        return userRepository.findById(id).orElse(null);
    }

    // Update cache
    @CachePut(value = "users", key = "#user.id")
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    // Evict cache
    @CacheEvict(value = "users", key = "#id")
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    // Evict all entries
    @CacheEvict(value = "users", allEntries = true)
    public void deleteAllUsers() {
        userRepository.deleteAll();
    }

    // Multiple cache operations
    @Caching(
        cacheable = @Cacheable("users"),
        evict = {@CacheEvict("activeUsers"), @CacheEvict("inactiveUsers")}
    )
    public User complexCacheOperation(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
```

**Follow-up Questions:**

- What cache providers does Spring Boot support?
- What is the difference between @Cacheable and @CachePut?

### 35. What is @EnableCaching?

Enables Spring's cache management capability.

**Example:**

```java
@Configuration
@EnableCaching
public class CacheConfig {

    // Redis cache
    @Bean
    public CacheManager cacheManager(RedisConnectionFactory factory) {
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofHours(1))
            .serializeValuesWith(RedisSerializationContext.SerializationPair
                .fromSerializer(new GenericJackson2JsonRedisSerializer()));

        return RedisCacheManager.builder(factory)
            .cacheDefaults(config)
            .build();
    }
}
```

**Follow-up Questions:**

- How do you configure Redis cache?
- What is cache eviction policy?

### 36. What is @RestControllerAdvice?

Global exception handling and data binding for REST controllers.

**Example:**

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body(new ErrorResponse(404, ex.getMessage()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors()
            .forEach(error -> errors.put(error.getField(), error.getDefaultMessage()));
        return ResponseEntity.badRequest().body(errors);
    }
}
```

**Follow-up Questions:**

- What is the difference between @ControllerAdvice and @RestControllerAdvice?

### 37. What is @PathVariable vs @RequestParam?

**Example:**

```java
@RestController
@RequestMapping("/api")
public class ParamController {

    // @PathVariable - part of URL path
    @GetMapping("/users/{id}/orders/{orderId}")
    public Order getOrder(
        @PathVariable Long id,           // Required by default
        @PathVariable Long orderId
    ) {
        return orderService.find(id, orderId);
    }
    // URL: /api/users/123/orders/456

    // @RequestParam - query parameter
    @GetMapping("/search")
    public List<User> search(
        @RequestParam String name,               // Required
        @RequestParam(required = false) Integer age,  // Optional
        @RequestParam(defaultValue = "0") int page   // With default
    ) {
        return userService.search(name, age, page);
    }
    // URL: /api/search?name=John&age=30&page=0

    // Optional path variable
    @GetMapping({"/products", "/products/{category}"})
    public List<Product> getProducts(
        @PathVariable(required = false) String category
    ) {
        return category == null ? productService.findAll() : productService.findByCategory(category);
    }
}
```

**Comparison:**

```
Feature          | @PathVariable          | @RequestParam
-----------------|------------------------|------------------
Location         | URL path               | Query string
Required         | Yes (by default)       | Yes (by default)
Multiple values  | No                     | Yes (List/Array)
Example          | /users/123             | /users?id=123
Best for         | Resource identification| Filtering, pagination
```

**Follow-up Questions:**

- Can @PathVariable be optional?
- How do you handle multiple values in @RequestParam?

### 38. What is @Validated vs @Valid?

**Example:**

```java
// @Valid - JSR-303 Bean Validation
@RestController
public class ValidController {

    @PostMapping("/users")
    public User create(@Valid @RequestBody UserRequest request) {
        return userService.create(request);
    }
}

// @Validated - Spring's validation (supports groups)
@RestController
@Validated
public class ValidatedController {

    @PostMapping("/users/basic")
    public User createBasic(@Validated(BasicInfo.class) @RequestBody UserDTO dto) {
        return userService.create(dto);
    }

    // Method parameter validation
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable @Min(1) Long id) {
        return userService.findById(id);
    }
}

// Validation groups
public interface BasicInfo {}
public interface AdvancedInfo {}

public class UserDTO {
    @NotNull(groups = {BasicInfo.class, AdvancedInfo.class})
    private String name;

    @Email(groups = BasicInfo.class)
    private String email;

    @Size(min = 10, groups = AdvancedInfo.class)
    private String bio;
}
```

**Comparison:**

```
Feature          | @Valid              | @Validated
-----------------|---------------------|------------------
From             | JSR-303             | Spring
Groups           | No                  | Yes
Method params    | No                  | Yes
Nested validation| Yes                 | Yes
```

**Follow-up Questions:**

- When should you use @Valid vs @Validated?
- What are validation groups?

### 39. What is @SpringBootTest?

**Example:**

```java
@SpringBootTest
class MyApplicationTests {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Test
    void contextLoads() {
        assertNotNull(userService);
    }

    @Test
    void testUserCreation() {
        User user = new User();
        user.setName("Test User");
        user.setEmail("test@example.com");

        User saved = userService.save(user);
        assertNotNull(saved.getId());
    }
}

// With test configuration
@SpringBootTest(
    classes = MyApplication.class,
    webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
)
class IntegrationTests {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void testRestEndpoint() {
        String url = "http://localhost:" + port + "/api/users";
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}

// Mock vs Real beans
@SpringBootTest
class ServiceTests {

    @MockBean  // Mock bean (replaces real bean)
    private UserRepository userRepository;

    @Autowired  // Real bean
    private UserService userService;

    @Test
    void testWithMock() {
        User user = new User();
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        Optional<User> found = userService.findById(1L);
        assertTrue(found.isPresent());
    }
}
```

**Web Environment Options:**

```
MOCK          - Mock web environment (default)
RANDOM_PORT   - Real web server on random port
DEFINED_PORT  - Real web server on defined port
NONE          - No web environment
```

**Follow-up Questions:**

- What is @MockBean vs @Mock?
- What is TestRestTemplate?

### 40. What is Actuator?

**Example:**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

```properties
# Enable all endpoints
management.endpoints.web.exposure.include=*

# Or specific endpoints
management.endpoints.web.exposure.include=health,info,metrics

# Custom base path
management.endpoints.web.base-path=/actuator

# Health endpoint details
management.endpoint.health.show-details=always
```

**Common Actuator Endpoints:**

```
/actuator/health     - Application health status
/actuator/info       - Application information
/actuator/metrics    - Application metrics
/actuator/env        - Environment properties
/actuator/loggers    - Logging configuration
/actuator/httptrace  - HTTP trace information
/actuator/mappings   - Request mappings
/actuator/beans      - All Spring beans
/actuator/threaddump - Thread dump
/actuator/heapdump   - Heap dump
```

**Custom health indicator:**

```java
@Component
public class CustomHealthIndicator implements HealthIndicator {

    @Override
    public Health health() {
        boolean isHealthy = checkDatabaseConnection();

        if (isHealthy) {
            return Health.up()
                .withDetail("database", "Connected")
                .build();
        }

        return Health.down()
            .withDetail("database", "Disconnected")
            .build();
    }

    private boolean checkDatabaseConnection() {
        // Check database
        return true;
    }
}
```

**Follow-up Questions:**

- How do you secure actuator endpoints?
- What is the difference between /health and /info?

### 41-50. What are common Spring Boot Interview Questions?

**41. What is CommandLineRunner and ApplicationRunner?**

```java
@Component
public class MyCommandLineRunner implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        System.out.println("CommandLineRunner executed");
        System.out.println("Args: " + Arrays.toString(args));
    }
}

@Component
public class MyApplicationRunner implements ApplicationRunner {
    @Override
    public void run(ApplicationArguments args) throws Exception {
        System.out.println("ApplicationRunner executed");
        System.out.println("Option names: " + args.getOptionNames());
    }
}
```

**42. How do you externalize configuration?**

```properties
# application.properties
spring.datasource.url=${DB_URL:jdbc:h2:mem:testdb}
spring.datasource.username=${DB_USER:sa}
spring.datasource.password=${DB_PASS:}
```

**43. What is @ConditionalOnProperty?**

```java
@Configuration
public class ConditionalConfig {

    @Bean
    @ConditionalOnProperty(name = "feature.enabled", havingValue = "true")
    public FeatureService featureService() {
        return new FeatureService();
    }
}
```

**44. What is the embedded server in Spring Boot?**

```properties
# application.properties
server.port=8080
server.servlet.context-path=/myapp
server.compression.enabled=true
```

**45. How do you change the default port?**

```properties
server.port=9090

# Or random port
server.port=0
```

**46. What is Spring Boot DevTools?**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <optional>true</optional>
</dependency>
```

Features: Auto-restart, LiveReload, Remote debugging

**47. What is application.properties hierarchy?**

```
Priority (highest to lowest):
1. Command line arguments
2. SPRING_APPLICATION_JSON
3. ServletConfig init parameters
4. ServletContext init parameters
5. JNDI attributes
6. Java System properties
7. OS environment variables
8. application-{profile}.properties outside jar
9. application-{profile}.properties inside jar
10. application.properties outside jar
11. application.properties inside jar
12. @PropertySource
13. Default properties
```

**48. What is @PathVariable?**

```java
@GetMapping("/users/{id}/orders/{orderId}")
public Order getOrder(@PathVariable Long id, @PathVariable Long orderId) {
    return orderService.find(id, orderId);
}
```

**49. What is @RequestHeader?**

```java
@GetMapping("/info")
public String getInfo(
    @RequestHeader("User-Agent") String userAgent,
    @RequestHeader(value = "Accept-Language", defaultValue = "en") String lang
) {
    return "User-Agent: " + userAgent;
}
```

**50. What is@ModelAttribute?**

```java
@Controller
public class FormController {

    @GetMapping("/form")
    public String showForm(Model model) {
        model.addAttribute("user", new User());
        return "form";
    }

    @PostMapping("/submit")
    public String submit(@ModelAttribute User user) {
        userService.save(user);
        return "success";
    }
}
```

---

## Advanced Spring Boot Topics

### 51. What is Spring Boot Actuator health checks?

**Example:**

```java
@Component
public class DatabaseHealthIndicator implements HealthIndicator {
    @Autowired
    private DataSource dataSource;

    @Override
    public Health health() {
        try {
            dataSource.getConnection().close();
            return Health.up().withDetail("database", "Available").build();
        } catch (Exception e) {
            return Health.down().withDetail("database", "Unavailable").build();
        }
    }
}
```

### 52. What is CORS in Spring Boot?

**Example:**

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins("http://localhost:3000", "http://example.com")
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*")
            .allowCredentials(true)
            .maxAge(3600);
    }
}

// Or using @CrossOrigin
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @CrossOrigin(origins = "http://example.com")
    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.findAll();
    }
}
```

### 53. What is @Qualifier?

**Example:**

```java
interface PaymentService {
    void pay(double amount);
}

@Service
@Qualifier("creditCard")
class CreditCardService implements PaymentService {
    public void pay(double amount) { }
}

@Service
@Qualifier("paypal")
class PayPalService implements PaymentService {
    public void pay(double amount) { }
}

@Service
public class OrderService {
    private final PaymentService paymentService;

    public OrderService(@Qualifier("creditCard") PaymentService paymentService) {
        this.paymentService = paymentService;
    }
}
```

### 54. What is @Primary?

**Example:**

```java
@Service
@Primary  // Preferred when multiple beans exist
public class PrimaryEmailService implements EmailService {
    public void send(String to) { }
}

@Service
public class BackupEmailService implements EmailService {
    public void send(String to) { }
}

@Service
public class NotificationService {
    private final EmailService emailService;

    // Injects PrimaryEmailService automatically
    public NotificationService(EmailService emailService) {
        this.emailService = emailService;
    }
}
```

### 55. What is @EventListener?

**Example:**

```java
// Custom event
public class UserCreatedEvent {
    private User user;

    public UserCreatedEvent(User user) {
        this.user = user;
    }

    public User getUser() { return user; }
}

// Publisher
@Service
public class UserService {
    @Autowired
    private ApplicationEventPublisher eventPublisher;

    public User createUser(User user) {
        User saved = userRepository.save(user);
        eventPublisher.publishEvent(new UserCreatedEvent(saved));
        return saved;
    }
}

// Listener
@Component
public class UserEventListener {

    @EventListener
    public void handleUserCreated(UserCreatedEvent event) {
        System.out.println("User created: " + event.getUser().getName());
        // Send welcome email
    }

    @Async
    @EventListener
    public void handleUserCreatedAsync(UserCreatedEvent event) {
        // Async processing
    }
}
```

### 56-65. Spring Data JPA Advanced Topics

**56. Query Method Keywords:**

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByName(String name);
    List<User> findByNameAndEmail(String name, String email);
    List<User> findByNameOrEmail(String name, String email);
    List<User> findByAgeBetween(int start, int end);
    List<User> findByAgeLessThan(int age);
    List<User> findByAgeGreaterThanEqual(int age);
    List<User> findByNameLike(String pattern);
    List<User> findByNameContaining(String name);
    List<User> findByNameStartingWith(String prefix);
    List<User> findByNameEndingWith(String suffix);
    List<User> findByAgeIn(List<Integer> ages);
    List<User> findByActiveTrue();
    List<User> findByActiveFalse();
    List<User> findByEmailIsNull();
    List<User> findByEmailIsNotNull();
    List<User> findByOrderByNameAsc();
    List<User> findByOrderByNameDesc();
    List<User> findByNameOrderByAgeDesc(String name);
    List<User> findTop10ByOrderByAgeDesc();
    List<User> findFirst5ByOrderByNameAsc();
    List<User> findDistinctByName(String name);
    long countByActive(boolean active);
    boolean existsByEmail(String email);
    void deleteByAge(int age);
}
```

**57. @EntityGraph for avoiding N+1:**

```java
@Entity
public class User {
    @Id
    private Long id;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Order> orders;
}

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @EntityGraph(attributePaths = {"orders"})
    List<User> findAll();  // Fetches orders in single query

    @EntityGraph(attributePaths = {"orders", "orders.items"})
    Optional<User> findById(Long id);
}
```

**58. Specifications for dynamic queries:**

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long>, JpaSpecificationExecutor<User> {
}

public class UserSpecification {
    public static Specification<User> hasName(String name) {
        return (root, query, cb) -> cb.equal(root.get("name"), name);
    }

    public static Specification<User> ageGreaterThan(int age) {
        return (root, query, cb) -> cb.greaterThan(root.get("age"), age);
    }
}

// Usage
@Service
public class UserService {
    public List<User> searchUsers(String name, Integer minAge) {
        Specification<User> spec = Specification.where(null);

        if (name != null) {
            spec = spec.and(UserSpecification.hasName(name));
        }

        if (minAge != null) {
            spec = spec.and(UserSpecification.ageGreaterThan(minAge));
        }

        return userRepository.findAll(spec);
    }
}
```

**59. @Lock for pessimistic/optimistic locking:**

```java
@Entity
public class Account {
    @Id
    private Long id;

    private BigDecimal balance;

    @Version  // Optimistic locking
    private Long version;
}

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT a FROM Account a WHERE a.id = :id")
    Optional<Account> findByIdWithLock(@Param("id") Long id);
}
```

**60. Auditing with @CreatedDate and @LastModifiedDate:**

```java
@Configuration
@EnableJpaAuditing
public class JpaConfig {
}

@Entity
@EntityListeners(AuditingEntityListener.class)
public class User {
    @Id
    private Long id;

    @CreatedDate
    private LocalDateTime createdDate;

    @LastModifiedDate
    private LocalDateTime lastModifiedDate;

    @CreatedBy
    private String createdBy;

    @LastModifiedBy
    private String lastModifiedBy;
}

@Component
public class AuditorAwareImpl implements AuditorAware<String> {
    @Override
    public Optional<String> getCurrentAuditor() {
        // Return current user
        return Optional.of(SecurityContextHolder.getContext()
            .getAuthentication().getName());
    }
}
```

**61-70. REST API Advanced Topics**

**61. Content Negotiation:**

```java
@GetMapping(value = "/users/{id}", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
public User getUser(@PathVariable Long id) {
    return userService.findById(id);
}
```

**62. File Upload:**

```java
@PostMapping("/upload")
public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
    String filename = fileService.save(file);
    return ResponseEntity.ok("File uploaded: " + filename);
}
```

**63. File Download:**

```java
@GetMapping("/download/{id}")
public ResponseEntity<Resource> download(@PathVariable Long id) {
    Resource file = fileService.load(id);

    return ResponseEntity.ok()
        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
        .body(file);
}
```

**64. @RestClientTest:**

```java
@RestClientTest(MyRestClient.class)
class RestClientTests {
    @Autowired
    private MyRestClient client;

    @Autowired
    private MockRestServiceServer server;

    @Test
    void testClient() {
        server.expect(requestTo("/api/users"))
            .andRespond(withSuccess("{\"name\":\"John\"}", MediaType.APPLICATION_JSON));

        User user = client.getUser();
        assertEquals("John", user.getName());
    }
}
```

**65. WebClient (Reactive):**

```java
@Service
public class WebClientService {
    private final WebClient webClient;

    public WebClientService(WebClient.Builder builder) {
        this.webClient = builder.baseUrl("https://api.example.com").build();
    }

    public Mono<User> getUser(Long id) {
        return webClient.get()
            .uri("/users/{id}", id)
            .retrieve()
            .bodyToMono(User.class);
    }

    public Mono<User> createUser(User user) {
        return webClient.post()
            .uri("/users")
            .bodyValue(user)
            .retrieve()
            .bodyToMono(User.class);
    }
}
```

**66-75. Spring Security Advanced**

**66. Role-based access control:**

```java
@PreAuthorize("hasRole('ADMIN')")
public void adminOnly() { }

@PreAuthorize("hasAnyRole('USER', 'ADMIN')")
public void userOrAdmin() { }

@PreAuthorize("hasAuthority('READ_PRIVILEGE')")
public void readPrivilege() { }
```

**67. OAuth2 Login:**

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: your-client-id
            client-secret: your-client-secret
            scope: profile, email
```

**68. CSRF Protection:**

```java
http.csrf()
    .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
```

**69. Custom Authentication Filter:**

```java
public class CustomAuthFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) {
        // Custom authentication logic
        chain.doFilter(request, response);
    }
}
```

**70. Password Encoding:**

```java
@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder(12);  // Strength factor
}

// Usage
String encoded = passwordEncoder.encode("password");
boolean matches = passwordEncoder.matches("password", encoded);
```

**71-80. Testing and Actuator**

**71. @WebMvcTest:**

```java
@WebMvcTest(UserController.class)
class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    void testGetUser() throws Exception {
        when(userService.findById(1L)).thenReturn(Optional.of(new User()));

        mockMvc.perform(get("/api/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").exists());
    }
}
```

**72. @DataJpaTest:**

```java
@DataJpaTest
class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    void testFindByEmail() {
        User user = new User();
        user.setEmail("test@example.com");
        entityManager.persist(user);

        Optional<User> found = userRepository.findByEmail("test@example.com");
        assertTrue(found.isPresent());
    }
}
```

**73. MockMvc Testing:**

```java
@SpringBootTest
@AutoConfigureMockMvc
class IntegrationTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    void testCreateUser() throws Exception {
        String userJson = "{\"name\":\"John\",\"email\":\"john@example.com\"}";

        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(userJson))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").exists());
    }
}
```

**74. @TestConfiguration:**

```java
@TestConfiguration
public class TestConfig {
    @Bean
    public TestService testService() {
        return new TestService();
    }
}

@SpringBootTest
@Import(TestConfig.class)
class MyTests {
    @Autowired
    private TestService testService;
}
```

**75. Testcontainers:**

```java
@SpringBootTest
@Testcontainers
class IntegrationTest {

    @Container
    static MySQLContainer<?> mysql = new MySQLContainer<>("mysql:8.0");

    @DynamicPropertySource
    static void properties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", mysql::getJdbcUrl);
        registry.add("spring.datasource.username", mysql::getUsername);
        registry.add("spring.datasource.password", mysql::getPassword);
    }
}
```

**76. Custom Actuator Endpoint:**

```java
@Component
@Endpoint(id = "custom")
public class CustomEndpoint {

    @ReadOperation
    public Map<String, Object> customInfo() {
        return Map.of("custom", "data");
    }

    @WriteOperation
    public void updateSomething(String value) {
        // Write operation
    }
}
```

**77. Actuator Metrics:**

```java
@Component
public class CustomMetrics {
    private final Counter counter;

    public CustomMetrics(MeterRegistry registry) {
        this.counter = registry.counter("custom.counter");
    }

    public void incrementCounter() {
        counter.increment();
    }
}
```

**78. Application Events:**

```java
@Component
public class AppEventListener {

    @EventListener
    public void handleContextRefresh(ContextRefreshedEvent event) {
        System.out.println("Context refreshed");
    }

    @EventListener
    public void handleContextStarted(ContextStartedEvent event) {
        System.out.println("Context started");
    }
}
```

**79. @Profile for environment-specific beans:**

```java
@Configuration
public class DatabaseConfig {

    @Bean
    @Profile("dev")
    public DataSource devDataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2)
            .build();
    }

    @Bean
    @Profile("prod")
    public DataSource prodDataSource() {
        // Production database
    }
}
```

**80. Custom Banner:**

```
// src/main/resources/banner.txt
  __  __
 |  \/  |_   _     /\   _ __  _ __
 | |\/| | | | |   /  \ | '_ \| '_ \
 | |  | | |_| |  / /\ \| |_) | |_) |
 |_|  |_|\__, | /_/  \_\ .__/| .__/
          __/ |        | |   | |
         |___/         |_|   |_|

Spring Boot ${spring-boot.version}
```

---

## Microservices with Spring Boot

### 81-90. Microservices Concepts

**81. Service Discovery with Eureka:**

```java
// Eureka Server
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}

// Eureka Client
@SpringBootApplication
@EnableEurekaClient
public class ClientApplication {
    public static void main(String[] args) {
        SpringApplication.run(ClientApplication.class, args);
    }
}
```

**82. Feign Client:**

```java
@FeignClient(name = "user-service", url = "http://localhost:8081")
public interface UserClient {

    @GetMapping("/api/users/{id}")
    User getUser(@PathVariable Long id);

    @PostMapping("/api/users")
    User createUser(@RequestBody User user);
}

// Usage
@Service
public class OrderService {
    @Autowired
    private UserClient userClient;

    public Order createOrder(Long userId) {
        User user = userClient.getUser(userId);
        // Create order
    }
}
```

**83. API Gateway with Spring Cloud Gateway:**

```java
@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("user-service", r -> r.path("/api/users/**")
                .uri("lb://user-service"))
            .route("order-service", r -> r.path("/api/orders/**")
                .uri("lb://order-service"))
            .build();
    }
}
```

**84. Circuit Breaker with Resilience4j:**

```java
@Service
public class UserService {

    @CircuitBreaker(name = "userService", fallbackMethod = "fallbackGetUser")
    public User getUser(Long id) {
        return restTemplate.getForObject("http://user-service/users/" + id, User.class);
    }

    public User fallbackGetUser(Long id, Exception ex) {
        return new User();  // Fallback response
    }

    @Retry(name = "userService", fallbackMethod = "fallbackGetUser")
    public User getUserWithRetry(Long id) {
        return restTemplate.getForObject("http://user-service/users/" + id, User.class);
    }
}
```

**85. Config Server:**

```java
// Config Server
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}

// Client
/*
spring:
  application:
    name: myapp
  config:
    import: "configserver:http://localhost:8888"
*/
```

**86. Distributed Tracing with Sleuth:**

```properties
spring.application.name=my-service
spring.sleuth.sampler.probability=1.0
```

**87. Load Balancing:**

```java
@LoadBalanced
@Bean
public RestTemplate restTemplate() {
    return new RestTemplate();
}

// Usage
restTemplate.getForObject("http://user-service/users/1", User.class);
```

**88. Message Queue with RabbitMQ:**

```java
@Configuration
public class RabbitConfig {

    @Bean
    public Queue queue() {
        return new Queue("myQueue");
    }

    @Bean
    public DirectExchange exchange() {
        return new DirectExchange("myExchange");
    }

    @Bean
    public Binding binding() {
        return BindingBuilder.bind(queue()).to(exchange()).with("routingKey");
    }
}

@Component
public class MessageSender {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    public void send(String message) {
        rabbitTemplate.convertAndSend("myExchange", "routingKey", message);
    }
}

@Component
public class MessageReceiver {
    @RabbitListener(queues = "myQueue")
    public void receive(String message) {
        System.out.println("Received: " + message);
    }
}
```

**89. Kafka Integration:**

```java
@Configuration
public class KafkaConfig {
    @Bean
    public NewTopic topic() {
        return TopicBuilder.name("my-topic").partitions(3).build();
    }
}

@Service
public class KafkaProducer {
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public void sendMessage(String message) {
        kafkaTemplate.send("my-topic", message);
    }
}

@Component
public class KafkaConsumer {
    @KafkaListener(topics = "my-topic", groupId = "my-group")
    public void listen(String message) {
        System.out.println("Received: " + message);
    }
}
```

**90. Docker Integration:**

```dockerfile
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/myapp.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

```yaml
# docker-compose.yml
version: "3"
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=prod
    depends_on:
      - mysql

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_DATABASE: mydb
      MYSQL_ROOT_PASSWORD: root
```

### 91-100. Additional Important Topics

**91. Lombok Integration:**

```java
@Data  // Generates getters, setters, toString, equals, hashCode
@Entity
public class User {
    @Id
    private Long id;
    private String name;
    private String email;
}

@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private String name;
    private String email;
}
```

**92. MapStruct for DTO mapping:**

```java
@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO toDTO(User user);
    User toEntity(UserDTO dto);
    List<UserDTO> toDTOList(List<User> users);
}
```

**93. Swagger/OpenAPI Documentation:**

```java
@Configuration
public class OpenApiConfig {
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .info(new Info()
                .title("My API")
                .version("1.0")
                .description("API Documentation"));
    }
}

@RestController
@Tag(name = "User API", description = "User management operations")
public class UserController {

    @Operation(summary = "Get user by ID", description = "Returns a single user")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "User found"),
        @ApiResponse(responseCode = "404", description = "User not found")
    })
    @GetMapping("/{id}")
    public User getUser(@Parameter(description = "User ID") @PathVariable Long id) {
        return userService.findById(id);
    }
}
```

**94. GraphQL with Spring Boot:**

```java
@Controller
public class GraphQLController {
    @Autowired
    private UserService userService;

    @QueryMapping
    public List<User> users() {
        return userService.findAll();
    }

    @QueryMapping
    public User user(@Argument Long id) {
        return userService.findById(id);
    }

    @MutationMapping
    public User createUser(@Argument String name, @Argument String email) {
        return userService.create(new User(name, email));
    }
}
```

**95. Internationalization (i18n):**

```java
@Configuration
public class I18nConfig {
    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver resolver = new SessionLocaleResolver();
        resolver.setDefaultLocale(Locale.US);
        return resolver;
    }

    @Bean
    public MessageSource messageSource() {
        ResourceBundleMessageSource source = new ResourceBundleMessageSource();
        source.setBasename("messages");
        source.setDefaultEncoding("UTF-8");
        return source;
    }
}

// messages_en.properties
// greeting=Hello
// messages_es.properties
// greeting=Hola

@RestController
public class I18nController {
    @Autowired
    private MessageSource messageSource;

    @GetMapping("/greeting")
    public String greeting(@RequestHeader(value = "Accept-Language", required = false) Locale locale) {
        return messageSource.getMessage("greeting", null, locale);
    }
}
```

**96. Redis Caching:**

```java
@Configuration
@EnableCaching
public class RedisCacheConfig {

    @Bean
    public RedisCacheManager cacheManager(RedisConnectionFactory factory) {
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(60))
            .serializeValuesWith(
                RedisSerializationContext.SerializationPair.fromSerializer(
                    new GenericJackson2JsonRedisSerializer()
                )
            );

        return RedisCacheManager.builder(factory)
            .cacheDefaults(config)
            .build();
    }
}
```

**97. Database Migration with Flyway:**

```properties
spring.flyway.enabled=true
spring.flyway.locations=classpath:db/migration
spring.flyway.baseline-on-migrate=true
```

```sql
-- V1__Create_users_table.sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);
```

**98. Logging:**

```java
@Slf4j  // Lombok
@Service
public class UserService {

    public User create(User user) {
        log.info("Creating user: {}", user.getName());
        log.debug("User details: {}", user);

        try {
            return userRepository.save(user);
        } catch (Exception e) {
            log.error("Error creating user", e);
            throw e;
        }
    }
}
```

```properties
# application.properties
logging.level.root=INFO
logging.level.com.example=DEBUG
logging.file.name=app.log
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %msg%n
```

**99. WebSocket Support:**

```java
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/topic");
        registry.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws").withSockJS();
    }
}

@Controller
public class WebSocketController {

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public String greeting(String message) {
        return "Hello, " + message;
    }
}
```

**100. Best Practices in Spring Boot:**

```java
// 1. Use constructor injection
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {  // Constructor injection
        this.userRepository = userRepository;
    }
}

// 2. Use DTOs, not entities in controllers
@RestController
public class UserController {
    @GetMapping("/users/{id}")
    public UserDTO getUser(@PathVariable Long id) {
        return userService.findById(id);  // Return DTO, not Entity
    }
}

// 3. Use proper exception handling
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse(ex.getMessage()));
    }
}

// 4. Use @Transactional appropriately
@Service
public class OrderService {
    @Transactional(readOnly = true)  // For read operations
    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    @Transactional  // For write operations
    public Order create(Order order) {
        return orderRepository.save(order);
    }
}

// 5. Use profiles for different environments
@Profile("prod")
@Configuration
public class ProdConfig { }

// 6. Externalize configuration
@ConfigurationProperties(prefix = "app")
public class AppProperties { }

// 7. Use meaningful package structure
com.example.myapp
├── config
├── controller
├── service
├── repository
├── entity
├── dto
└── exception

// 8. Use validation
@PostMapping("/users")
public User create(@Valid @RequestBody UserRequest request) { }

// 9. Use pagination for large datasets
public Page<User> findAll(Pageable pageable) {
    return userRepository.findAll(pageable);
}

// 10. Use caching wisely
@Cacheable("users")
public User findById(Long id) { }

// 11. Log appropriately
@Slf4j
@Service
public class MyService {
    public void method() {
        log.debug("Debug info");
        log.info("Info message");
        log.error("Error occurred", exception);
    }
}

// 12. Use ResponseEntity for better control
@GetMapping("/{id}")
public ResponseEntity<User> getUser(@PathVariable Long id) {
    return userService.findById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
}

// 13. Secure sensitive endpoints
@PreAuthorize("hasRole('ADMIN')")
public void deleteUser(Long id) { }

// 14. Use async for long-running tasks
@Async
public CompletableFuture<String> processAsync() { }

// 15. Monitor with Actuator
management.endpoints.web.exposure.include=health,info,metrics
```

---

## Quick Reference Guide

### Common Annotations Summary

```
Core Spring:
@Component                  - Generic component
@Service                    - Service layer
@Repository                 - Data access layer
@Controller                 - MVC controller
@RestController             - REST API controller
@Configuration              - Configuration class
@Bean                       - Bean definition
@Autowired                  - Dependency injection
@Qualifier                  - Specify which bean to inject
@Primary                    - Primary bean when multiple exist
@Scope                      - Bean scope
@Lazy                       - Lazy initialization
@Value                      - Inject property value
@ConfigurationProperties    - Bind configuration to POJO

Spring Boot:
@SpringBootApplication      - Main application class
@EnableAutoConfiguration    - Enable auto-configuration
@ComponentScan              - Component scanning

REST API:
@RequestMapping             - Map HTTP requests
@GetMapping                 - HTTP GET
@PostMapping                - HTTP POST
@PutMapping                 - HTTP PUT
@PatchMapping               - HTTP PATCH
@DeleteMapping              - HTTP DELETE
@PathVariable               - Extract from URL path
@RequestParam               - Extract from query string
@RequestBody                - Extract from request body
@ResponseBody               - Write to response body
@RequestHeader              - Extract from headers
@ResponseStatus             - Set response status

Validation:
@Valid                      - Enable JSR-303 validation
@Validated                  - Spring validation (with groups)
@NotNull, @NotEmpty, @NotBlank
@Size, @Min, @Max
@Email, @Pattern
@Past, @Future

JPA:
@Entity                     - JPA entity
@Table                      - Table name
@Id                         - Primary key
@GeneratedValue             - Auto-generated value
@Column                     - Column mapping
@OneToOne, @OneToMany       - Relationships
@ManyToOne, @ManyToMany
@JoinColumn                 - Join column
@Query                      - Custom query
@Modifying                  - Update/delete query
@Transactional              - Transaction management
@Lock                       - Locking strategy
@EntityGraph                - Fetch graph
@CreatedDate, @LastModifiedDate - Auditing

Security:
@EnableWebSecurity          - Enable security
@EnableMethodSecurity       - Method-level security
@PreAuthorize               - Before method authorization
@PostAuthorize              - After method authorization
@Secured                    - Role-based access
@RolesAllowed               - JSR-250 role-based

Testing:
@SpringBootTest             - Integration test
@WebMvcTest                 - Controller test
@DataJpaTest                - Repository test
@MockBean                   - Mock a bean
@TestConfiguration          - Test-specific config

Async & Scheduling:
@EnableAsync                - Enable async processing
@Async                      - Async method
@EnableScheduling           - Enable scheduling
@Scheduled                  - Scheduled task

Caching:
@EnableCaching              - Enable caching
@Cacheable                  - Cache method result
@CachePut                   - Update cache
@CacheEvict                 - Evict from cache

Microservices:
@EnableEurekaServer         - Eureka server
@EnableEurekaClient         - Eureka client
@FeignClient                - Feign client
@EnableCircuitBreaker       - Circuit breaker
@EnableConfigServer         - Config server
```

### Application Properties Common Configurations

```properties
# Server
server.port=8080
server.servlet.context-path=/api
server.compression.enabled=true

# Database
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=secret
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# Logging
logging.level.root=INFO
logging.level.com.example=DEBUG
logging.file.name=app.log
logging.pattern.console=%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n

# Actuator
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.show-details=always

# Caching
spring.cache.type=redis
spring.redis.host=localhost
spring.redis.port=6379

# Security
spring.security.user.name=admin
spring.security.user.password=admin

# File Upload
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB

# Jackson
spring.jackson.serialization.write-dates-as-timestamps=false
spring.jackson.time-zone=UTC
```

### HTTP Status Codes

```
2xx Success:
200 OK                  - Successful GET, PUT, PATCH
201 Created             - Successful POST
202 Accepted            - Request accepted for processing
204 No Content          - Successful DELETE

4xx Client Errors:
400 Bad Request         - Invalid request
401 Unauthorized        - Authentication required
403 Forbidden           - No permission
404 Not Found           - Resource not found
409 Conflict            - Conflict (e.g., duplicate)
422 Unprocessable Entity- Validation error

5xx Server Errors:
500 Internal Server Error - Server error
502 Bad Gateway          - Invalid response from upstream
503 Service Unavailable  - Temporarily unavailable
```

### REST API Naming Conventions

```
Resource              | GET              | POST        | PUT              | DELETE
----------------------|------------------|-------------|------------------|------------------
/users                | Get all users    | Create user | Update all users | Delete all users
/users/123            | Get user 123     | Error       | Update user 123  | Delete user 123
/users/123/orders     | Get user's orders| Create order| Update orders    | Delete orders
/users/123/orders/456 | Get order 456    | Error       | Update order 456 | Delete order 456

Best Practices:
✓ Use nouns, not verbs (/users not /getUsers)
✓ Use plural nouns (/users not /user)
✓ Use kebab-case for multi-word (/user-profiles)
✓ Version your API (/api/v1/users)
✓ Use query params for filtering (/users?active=true)
✓ Use proper HTTP methods
```

### Transaction Propagation

```
REQUIRED (default)  - Join existing or create new
REQUIRES_NEW        - Always create new, suspend outer
NESTED              - Nested transaction with savepoint
MANDATORY           - Must have existing transaction
SUPPORTS            - Join if exists, non-transactional otherwise
NOT_SUPPORTED       - Always non-transactional, suspend existing
NEVER               - Must not have transaction
```

### Bean Scopes

```
singleton    - One instance per Spring container (default)
prototype    - New instance per request
request      - One instance per HTTP request (web only)
session      - One instance per HTTP session (web only)
application  - One instance per ServletContext (web only)
```

### Common Spring Boot Starters

```
spring-boot-starter-web          - Spring MVC, REST, Tomcat
spring-boot-starter-data-jpa     - Spring Data JPA, Hibernate
spring-boot-starter-data-mongodb - MongoDB
spring-boot-starter-data-redis   - Redis
spring-boot-starter-security     - Spring Security
spring-boot-starter-test         - Testing (JUnit, Mockito)
spring-boot-starter-actuator     - Monitoring
spring-boot-starter-validation   - Bean Validation
spring-boot-starter-mail         - Email support
spring-boot-starter-cache        - Caching
spring-boot-starter-aop          - AOP
spring-boot-starter-batch        - Spring Batch
```

### Testing Annotations

```
@SpringBootTest        - Full application context
@WebMvcTest            - Only web layer
@DataJpaTest           - Only JPA components
@RestClientTest        - REST client testing
@MockBean              - Mock a Spring bean
@SpyBean               - Spy a Spring bean
@TestConfiguration     - Test-specific configuration
@DirtiesContext        - Reload context after test
@Sql                   - Execute SQL before test
@Rollback              - Rollback after test
```

---

## Tips for Spring Boot Interview Success

### Before the Interview:

1. **Understand Core Concepts**:

   - IoC and Dependency Injection
   - Spring Bean lifecycle
   - AOP concepts
   - Transaction management

2. **Practice Common Tasks**:

   - Creating REST APIs
   - Database integration with JPA
   - Exception handling
   - Security implementation
   - Writing tests

3. **Review Projects**:

   - Be ready to explain architecture
   - Discuss challenges and solutions
   - Know your dependencies
   - Understand design decisions

4. **Study Company Stack**:
   - Check if they use Spring Boot
   - Microservices architecture
   - Databases they use
   - Cloud platforms (AWS, Azure, GCP)

### During the Interview:

1. **Clarify Requirements**:

   - Ask about scale and performance needs
   - Understand data model
   - Clarify functional requirements

2. **Start Simple**:

   - Basic CRUD operations first
   - Add complexity gradually
   - Mention improvements you'd make

3. **Discuss Trade-offs**:

   - Synchronous vs asynchronous
   - Caching strategies
   - Database design choices
   - Security considerations

4. **Show Best Practices**:
   - Use DTOs
   - Proper exception handling
   - Validation
   - Transaction management
   - Testing approach

### Common Interview Patterns:

**Pattern 1: Build a REST API**

```
Requirements:
- CRUD operations for User entity
- Validation
- Exception handling
- Pagination

Solution approach:
1. Entity class with JPA annotations
2. Repository interface extending JpaRepository
3. Service class with @Transactional
4. REST controller with proper HTTP methods
5. DTO classes for requests/responses
6. Global exception handler
7. Input validation
8. Pagination support
```

**Pattern 2: Microservice Communication**

```
Question: How do services communicate?

Answer:
1. Synchronous: REST (RestTemplate, Feign Client, WebClient)
2. Asynchronous: Message queues (RabbitMQ, Kafka)
3. Service discovery: Eureka, Consul
4. API Gateway: Spring Cloud Gateway
5. Load balancing: Ribbon, Spring Cloud LoadBalancer
6. Circuit breaker: Resilience4j
```

**Pattern 3: Security Implementation**

```
Question: Implement JWT authentication

Steps:
1. Security configuration (SecurityFilterChain)
2. UserDetailsService implementation
3. JWT utility class (generate, validate)
4. Authentication filter
5. Login endpoint
6. Protected endpoints with @PreAuthorize
```

### Common Coding Tasks:

```java
// Task 1: Simple CRUD REST API
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAll() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getOne(@PathVariable Long id) {
        return userService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<User> create(@Valid @RequestBody User user) {
        User created = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> update(@PathVariable Long id, @Valid @RequestBody User user) {
        return userService.update(id, user)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return userService.delete(id) ?
            ResponseEntity.noContent().build() :
            ResponseEntity.notFound().build();
    }
}

// Task 2: Global Exception Handling
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNotFound(ResourceNotFoundException ex) {
        return new ErrorResponse(404, ex.getMessage(), LocalDateTime.now());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, String> handleValidation(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors()
            .forEach(error -> errors.put(error.getField(), error.getDefaultMessage()));
        return errors;
    }
}

// Task 3: Service with Transaction
@Service
public class BankService {
    private final AccountRepository accountRepository;

    public BankService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Transactional
    public void transfer(Long fromId, Long toId, BigDecimal amount) {
        Account from = accountRepository.findById(fromId)
            .orElseThrow(() -> new ResourceNotFoundException("Account not found"));
        Account to = accountRepository.findById(toId)
            .orElseThrow(() -> new ResourceNotFoundException("Account not found"));

        from.debit(amount);
        to.credit(amount);

        accountRepository.save(from);
        accountRepository.save(to);
    }
}
```

### Red Flags to Avoid:

```
❌ Using field injection everywhere
❌ Exposing entities directly in REST APIs
❌ Not handling exceptions globally
❌ Ignoring validation
❌ Not using transactions for write operations
❌ Using synchronous calls for everything
❌ Not implementing pagination
❌ Hardcoding configuration values
❌ Not writing tests
❌ Using @Autowired unnecessarily
❌ Not using DTOs
❌ Ignoring security
❌ Not using proper HTTP status codes
❌ Returning null instead of Optional
❌ Not using profiles for environments
```

### Common Mistakes:

```java
// Mistake 1: Field injection
@Autowired
private UserRepository userRepository;  // ❌ Hard to test

// Fix: Constructor injection
private final UserRepository userRepository;
public UserService(UserRepository userRepository) {  // ✓
    this.userRepository = userRepository;
}

// Mistake 2: Exposing entities
@GetMapping("/users")
public List<User> getUsers() {  // ❌ Exposes internal structure
    return userRepository.findAll();
}

// Fix: Use DTOs
@GetMapping("/users")
public List<UserDTO> getUsers() {  // ✓
    return userService.findAllAsDTO();
}

// Mistake 3: No pagination
@GetMapping("/users")
public List<User> getAll() {  // ❌ Could return millions
    return userRepository.findAll();
}

// Fix: Use pagination
@GetMapping("/users")
public Page<User> getAll(Pageable pageable) {  // ✓
    return userRepository.findAll(pageable);
}

// Mistake 4: Not using transactions
public void updateUser(User user) {  // ❌ No transaction
    userRepository.save(user);
}

// Fix: Use @Transactional
@Transactional
public void updateUser(User user) {  // ✓
    userRepository.save(user);
}
```

### Performance Tips:

```
1. Use @Transactional(readOnly = true) for read operations
2. Implement caching with @Cacheable
3. Use pagination for large datasets
4. Use LAZY fetching to avoid N+1 problem
5. Use @Async for long-running tasks
6. Use connection pooling (HikariCP - default)
7. Use database indexes
8. Use DTOs to reduce data transfer
9. Enable compression (server.compression.enabled=true)
10. Use proper logging levels
```

### Must-Know Topics:

```
✓ Spring Boot auto-configuration
✓ Dependency Injection (IoC)
✓ REST API development
✓ Spring Data JPA
✓ Exception handling
✓ Validation
✓ Security (JWT authentication)
✓ Transaction management
✓ Testing (unit and integration)
✓ Actuator for monitoring
✓ Profiles for environments
✓ Caching strategies
✓ Microservices basics
✓ Docker deployment
✓ Cloud deployment (AWS/Azure)
```

### Sample Interview Questions & Answers:

**Q: "How would you design a user management REST API?"**

```
Good Answer:
1. Entity: User with JPA annotations
2. Repository: UserRepository extends JpaRepository
3. Service: UserService with business logic + @Transactional
4. Controller: UserRestController with CRUD endpoints
5. DTOs: Separate request/response DTOs
6. Validation: @Valid on request DTOs
7. Exception Handling: Global @RestControllerAdvice
8. Security: JWT-based authentication
9. Testing: Unit tests for service, integration tests for controller
10. Documentation: OpenAPI/Swagger
```

**Q: "Explain the request flow in Spring Boot"**

```
1. Client sends HTTP request
2. DispatcherServlet receives request
3. HandlerMapping finds appropriate controller
4. Controller method executed
5. Service layer processes business logic
6. Repository accesses database
7. Response converted to JSON (HttpMessageConverter)
8. DispatcherServlet sends response to client
```

**Q: "How do you handle database transactions?"**

```
1. Use @Transactional at service layer
2. Specify isolation level if needed
3. Use readOnly=true for read operations
4. Handle rollback scenarios
5. Consider propagation for nested calls
6. Use @Transactional(rollbackFor = Exception.class) carefully
```

### Architecture Best Practices:

```
Layered Architecture:

Controller Layer (@RestController)
    ↓ DTOs
Service Layer (@Service)
    ↓ Entities
Repository Layer (@Repository)
    ↓
Database

Benefits:
- Separation of concerns
- Easy to test
- Maintainable
- Scalable
```

### Final Checklist:

```
✓ Understand Spring Boot fundamentals
✓ Know common annotations and their purpose
✓ Master REST API development
✓ Understand Spring Data JPA
✓ Know exception handling patterns
✓ Familiar with Spring Security
✓ Understand transaction management
✓ Know testing strategies
✓ Understand microservices concepts
✓ Familiar with deployment options
✓ Know performance optimization techniques
✓ Understand caching strategies
✓ Review recent Spring Boot projects
✓ Practice explaining concepts clearly
```

---

**Good luck with your Spring Boot interviews! 🚀**
