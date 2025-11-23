# Spring Boot Interview Questions

## Basics (1-50)

1. What is Spring Boot?
   - How does Spring Boot simplify Spring application development?
   - What problems does Spring Boot solve?
   - Is Spring Boot a framework or a tool?

2. What are the advantages of Spring Boot over Spring Framework?
   - How does Spring Boot reduce configuration?
   - What is convention over configuration?
   - Does Spring Boot replace Spring Framework?

3. What is Spring Initializr?
   - How do you access Spring Initializr?
   - What options can you configure in Spring Initializr?
   - Can you use Spring Initializr from IDE?

4. What are Spring Boot starters?
   - Name some commonly used starters
   - How do starters manage dependencies?
   - Can you create custom starters?

5. What is the difference between @SpringBootApplication and @EnableAutoConfiguration?
   - Which annotation is more comprehensive?
   - Can you use @EnableAutoConfiguration alone?
   - What other annotations does @SpringBootApplication include?

6. What is auto-configuration in Spring Boot?
   - How does Spring Boot know what to auto-configure?
   - Can auto-configuration be customized?
   - What is the role of spring.factories file?

7. How does Spring Boot auto-configuration work?
   - What are @Conditional annotations?
   - How does classpath scanning work?
   - What is the order of auto-configuration?

8. What is the purpose of @SpringBootApplication annotation?
   - Where should this annotation be placed?
   - Can you have multiple @SpringBootApplication classes?
   - What does it enable by default?

9. What are the three annotations that @SpringBootApplication combines?
   - What does @Configuration do?
   - What does @EnableAutoConfiguration do?
   - What does @ComponentScan do?

10. What is the default embedded server in Spring Boot?
    - Can you change the embedded server?
    - What other embedded servers are supported?
    - How do you exclude the default server?

11. How do you change the default port in Spring Boot?
    - What property do you set?
    - Can you set port to 0?
    - How do you disable the server?

12. What is application.properties file used for?
    - Where should this file be located?
    - Can you have multiple application.properties files?
    - What is the property precedence order?

13. What is the difference between application.properties and application.yml?
    - Which format is more readable?
    - Can you use both together?
    - Which one takes precedence?

14. What is Spring Boot DevTools?
    - How do you add DevTools to your project?
    - Is DevTools included in production builds?
    - What dependency scope should DevTools have?

15. What are the benefits of using Spring Boot DevTools?
    - What is automatic restart?
    - What is LiveReload?
    - Does it work with templates?

16. How do you disable a specific auto-configuration?
    - What annotation do you use?
    - Can you disable multiple configurations?
    - How do you find which configurations are active?

17. What is @Conditional annotation?
    - What are some common @Conditional variants?
    - How does @ConditionalOnClass work?
    - Can you create custom conditions?

18. What is the purpose of spring-boot-starter-parent?
    - What does it provide?
    - Is it mandatory to use?
    - What if you can't use it as parent?

19. How do you create a Spring Boot application?
    - What are the different ways to create one?
    - What is the minimum required setup?
    - Can you convert existing Spring app to Spring Boot?

20. What is the entry point of a Spring Boot application?
    - What method starts the application?
    - What does the main method do?
    - Can you customize the startup process?

21. What is @ComponentScan annotation?
    - What does it scan for?
    - What is the default scan path?
    - Can you exclude packages from scanning?

22. What is the default package scan in Spring Boot?
    - Where should the main class be located?
    - What happens if main class is in wrong package?
    - Can you scan packages outside the main package?

23. How do you run a Spring Boot application?
    - What are the different ways to run it?
    - Can you run it from command line?
    - What about running from IDE?

24. What is SpringApplication.run() method?
    - What does it return?
    - Can you customize it?
    - What is ApplicationContext?

25. How do you create an executable JAR in Spring Boot?
    - What Maven/Gradle plugin is needed?
    - What is a fat JAR?
    - How is it different from regular JAR?

26. What is the difference between JAR and WAR packaging?
    - When would you use WAR?
    - Can Spring Boot create WAR files?
    - What changes are needed for WAR packaging?

27. How do you deploy a Spring Boot application to Tomcat?
    - What packaging type do you need?
    - What class should you extend?
    - Do you need to change the embedded server?

28. What is Spring Boot Actuator?
    - What dependency do you need?
    - Is it production-ready?
    - Should you secure Actuator endpoints?

29. What endpoints does Actuator provide?
    - What is /health endpoint?
    - What is /metrics endpoint?
    - What is /info endpoint?

30. How do you enable Actuator endpoints?
    - Are endpoints enabled by default?
    - How do you expose endpoints over HTTP?
    - Can you create custom endpoints?

31. What is the difference between @Controller and @RestController?
    - Which one is for REST APIs?
    - What annotation does @RestController combine?
    - When would you use @Controller?

32. What is @RequestMapping annotation?
    - What HTTP methods does it support?
    - Can you specify multiple paths?
    - What attributes can you configure?

33. What is @GetMapping annotation?
    - Is it a shortcut for @RequestMapping?
    - What HTTP method does it handle?
    - Can you specify path variables?

34. What is @PostMapping annotation?
    - What is it used for?
    - How do you receive request body?
    - What HTTP status is returned by default?

35. What is @PutMapping annotation?
    - When should you use PUT vs POST?
    - Is PUT idempotent?
    - How do you handle partial updates?

36. What is @DeleteMapping annotation?
    - What should a DELETE endpoint return?
    - Should DELETE be idempotent?
    - How do you handle resource not found?

37. What is @PatchMapping annotation?
    - How is PATCH different from PUT?
    - When should you use PATCH?
    - Is PATCH idempotent?

38. What is @RequestBody annotation?
    - What does it do?
    - How does JSON conversion happen?
    - What if request body is invalid?

39. What is @ResponseBody annotation?
    - Is it needed with @RestController?
    - What does it do?
    - How does object to JSON conversion work?

40. What is @PathVariable annotation?
    - How do you extract path variables?
    - Can path variables be optional?
    - What if path variable is missing?

41. What is @RequestParam annotation?
    - How do you make parameters optional?
    - What is the default value?
    - Can you bind to complex objects?

42. What is the difference between @PathVariable and @RequestParam?
    - Which one is part of URL path?
    - Which one is for query parameters?
    - Can you use both together?

43. What is @RequestHeader annotation?
    - How do you access HTTP headers?
    - Can headers be optional?
    - How do you access all headers?

44. What is CommandLineRunner interface?
    - When is it executed?
    - What method do you implement?
    - Can you have multiple CommandLineRunners?

45. What is ApplicationRunner interface?
    - How is it different from CommandLineRunner?
    - What arguments does it receive?
    - Which one should you prefer?

46. What is the difference between CommandLineRunner and ApplicationRunner?
    - Which one provides better argument access?
    - Can you order their execution?
    - When would you use each?

47. How do you configure logging in Spring Boot?
    - What file do you use for configuration?
    - Can you use different logging levels per package?
    - How do you configure log file output?

48. What are the default logging frameworks in Spring Boot?
    - What is the default logging implementation?
    - Can you switch to Log4j2?
    - What is SLF4J?

49. How do you change the logging level in Spring Boot?
    - What property do you set?
    - Can you change it at runtime?
    - What are the logging levels?

50. What is banner.txt file in Spring Boot?
    - Where should it be located?
    - Can you disable the banner?
    - Can you customize the banner?

### Follow-up Questions for Basics

- How would you troubleshoot if auto-configuration is not working as expected?
- What's the difference between fat JAR and thin JAR in Spring Boot?
- How do you create a multi-module Spring Boot application?
- Explain the Spring Boot application startup process in detail.
- How do you customize the embedded server configuration?
- What happens if you have multiple main classes with @SpringBootApplication?
- How do you exclude certain classes from component scanning?
- What is the purpose of @EnableAutoConfiguration(exclude=...)?
- How do you monitor a Spring Boot application in production?
- What are the best practices for structuring a Spring Boot project?

## Configuration & Properties (51-100)

51. What is @ConfigurationProperties annotation?
    - How do you enable configuration properties?
    - What is the prefix attribute?
    - Can you use it with immutable classes?

52. How do you bind external properties to a Java object?
    - What annotation do you use?
    - Does it support nested properties?
    - How do you handle type conversion?

53. What is @Value annotation?
    - How do you inject property values?
    - Can you provide default values?
    - What is the syntax for SpEL expressions?

54. What is the difference between @Value and @ConfigurationProperties?
    - Which one is better for multiple properties?
    - Which one supports validation?
    - Which one is type-safe?

55. How do you use profiles in Spring Boot?
    - What are profiles used for?
    - Can you have multiple active profiles?
    - How do profiles help with environment-specific configuration?

56. What is @Profile annotation?
    - Where can you use this annotation?
    - Can you combine multiple profiles?
    - What is profile negation?

57. How do you activate a profile in Spring Boot?
    - What are the different ways to activate profiles?
    - Can you activate profiles programmatically?
    - What is the default profile?

58. What is spring.profiles.active property?
    - Where can you set this property?
    - Can you set multiple profiles?
    - What is the precedence order?

59. How do you create profile-specific properties files?
    - What is the naming convention?
    - Can you have profile-specific YAML files?
    - How do properties merge across profiles?

60. What is @PropertySource annotation?
    - When would you use it?
    - Can you specify multiple property sources?
    - Does it support YAML files?

61. How do you externalize configuration in Spring Boot?
    - Why is externalization important?
    - What are the benefits?
    - Where can configuration be stored?

62. What are the different ways to provide external configuration?
    - Can you use environment variables?
    - Can you use command line arguments?
    - What about external files?

63. What is the configuration precedence in Spring Boot?
    - Which configuration source has highest priority?
    - Where do command line args rank?
    - What about application.properties?

64. How do you use environment variables in Spring Boot?
    - What is the naming convention?
    - How do you reference them in properties?
    - Can you override properties with env vars?

65. How do you use command line arguments in Spring Boot?
    - What is the syntax?
    - Do they override other properties?
    - Can you disable command line properties?

66. What is YAML configuration?
    - What does YAML stand for?
    - Is it supported by default?
    - What library is used for parsing?

67. What are the advantages of YAML over properties files?
    - Is YAML more readable?
    - Does it support hierarchical data better?
    - Can you define lists and maps easily?

68. How do you define list properties in application.yml?
    - What is the syntax?
    - Can you use bracket notation?
    - How do you bind to Java List?

69. How do you define map properties in application.yml?
    - What is the syntax?
    - How do you bind to Java Map?
    - Can you have nested maps?

70. What is @EnableConfigurationProperties annotation?
    - When do you need this annotation?
    - Where should it be placed?
    - Can you enable multiple configuration classes?

71. How do you validate configuration properties?
    - What validation framework is used?
    - Do you need additional dependencies?
    - When does validation occur?

72. What is @Validated annotation?
    - Where do you place this annotation?
    - What does it enable?
    - Can you use it with @ConfigurationProperties?

73. How do you use JSR-303 validation with @ConfigurationProperties?
    - What annotations can you use?
    - What happens if validation fails?
    - Can you customize validation messages?

74. What is relaxed binding in Spring Boot?
    - What naming conventions are supported?
    - Can you use kebab-case, camelCase, snake_case?
    - Does it work with environment variables?

75. How do you encrypt sensitive properties in Spring Boot?
    - What tools can you use?
    - Is encryption built-in?
    - What about Jasypt integration?

76. What is Spring Cloud Config?
    - How is it different from Spring Boot configuration?
    - Does it support centralized configuration?
    - Can it work with Git repositories?

77. How do you refresh configuration at runtime?
    - Is it possible without restart?
    - What endpoint do you use?
    - Do you need Spring Cloud?

78. What is @RefreshScope annotation?
    - What does it do?
    - When would you use it?
    - Does it require Spring Cloud?

79. How do you use placeholders in properties files?
    - What is the syntax?
    - Can you reference other properties?
    - What about default values?

80. What is SpEL (Spring Expression Language)?
    - Where can you use SpEL?
    - What operations does it support?
    - Can you call methods with SpEL?

81. How do you use SpEL in properties files?
    - What is the syntax?
    - Can you use it in @Value?
    - What about in YAML files?

82. What is the purpose of spring.config.location property?
    - How do you specify custom config locations?
    - Can you specify multiple locations?
    - Does it override default locations?

83. How do you override default properties?
    - What are the different ways?
    - Which method has highest priority?
    - Can you override in tests?

84. What is @ConditionalOnProperty annotation?
    - When is the bean created?
    - Can you check for property absence?
    - Can you match specific values?

85. What is @ConditionalOnClass annotation?
    - When is it useful?
    - How does it check for class presence?
    - Can you specify multiple classes?

86. What is @ConditionalOnMissingBean annotation?
    - When would you use it?
    - How does it enable customization?
    - Can you specify bean name or type?

87. What is @ConditionalOnBean annotation?
    - What does it check for?
    - Can you specify multiple beans?
    - How is it different from @ConditionalOnMissingBean?

88. What is @ConditionalOnResource annotation?
    - What resources can you check for?
    - What is the syntax?
    - When would you use it?

89. What is @ConditionalOnWebApplication annotation?
    - What does it check?
    - Can you specify web application type?
    - What about reactive applications?

90. What is @ConditionalOnExpression annotation?
    - What expressions can you use?
    - Does it support SpEL?
    - When would you use it?

91. How do you create custom conditional annotations?
    - What interface do you implement?
    - What is Condition interface?
    - Can you combine multiple conditions?

92. What is application context in Spring Boot?
    - What is ApplicationContext?
    - What does it contain?
    - How is it different from BeanFactory?

93. How do you access application context programmatically?
    - What are the different ways?
    - Should you inject ApplicationContext?
    - What about static access?

94. What is ApplicationContextAware interface?
    - What method do you implement?
    - When is it called?
    - Is there a better alternative?

95. What is EnvironmentAware interface?
    - What does it provide access to?
    - When would you use it?
    - What method do you implement?

96. How do you read properties using Environment object?
    - What methods are available?
    - Can you specify default values?
    - How do you inject Environment?

97. What is PropertyResolver interface?
    - What does it do?
    - What methods does it provide?
    - How is it related to Environment?

98. What is ConfigurableEnvironment interface?
    - How is it different from Environment?
    - What additional capabilities does it have?
    - Can you modify property sources?

99. How do you add custom property sources?
    - What interface do you implement?
    - When would you do this?
    - How do you register them?

100. What is @PostConstruct annotation?
     - When is it called?
     - What is it used for?
     - Can you have multiple @PostConstruct methods?

### Follow-up Questions for Configuration & Properties

- How do you manage configuration for microservices architecture?
- What's the best approach to handle secrets and passwords in configuration?
- How do you implement feature flags using configuration properties?
- Explain the difference between @Configuration and @Component.
- How do you reload configuration without restarting the application?
- What happens if the same property is defined in multiple property sources?
- How do you use constructor binding with @ConfigurationProperties?
- What's the role of @ConstructorBinding annotation?
- How do you handle type conversion in configuration properties?
- What are the limitations of @ConfigurationProperties validation?

## Data Access & JPA (101-150)

101. What is spring-boot-starter-data-jpa?
     - What dependencies does it include?
     - Does it include Hibernate by default?
     - What database drivers do you need to add?

102. What is JPA (Java Persistence API)?
     - Is JPA an implementation or specification?
     - What are the main components of JPA?
     - What implementations of JPA exist?

103. What is Hibernate?
     - Is Hibernate a JPA implementation?
     - What additional features does Hibernate provide?
     - Can you use Hibernate without JPA?

104. What is the difference between JPA and Hibernate?
     - Which one is the specification?
     - Can you switch JPA implementations?
     - Does Spring Data JPA depend on Hibernate?

105. What is @Entity annotation?
     - What does it mark?
     - Is it mandatory for JPA entities?
     - What package does it belong to?

106. What is @Table annotation?
     - When do you need to use it?
     - What attributes can you specify?
     - What if you don't specify it?

107. What is @Id annotation?
     - Is it mandatory?
     - Can you have composite primary keys?
     - What types can be used as ID?

108. What is @GeneratedValue annotation?
     - What does it do?
     - What strategies are available?
     - What is the default strategy?

109. What are the different generation strategies in JPA?
     - What is AUTO strategy?
     - What is IDENTITY vs SEQUENCE?
     - What is TABLE strategy?

110. What is @Column annotation?
     - When is it needed?
     - What attributes can you configure?
     - Can you make columns unique or nullable?

111. What is @Transient annotation?
     - What fields should be transient?
     - Is the field persisted to database?
     - Can you use Java transient keyword instead?

112. What is @Temporal annotation?
     - What is it used for?
     - What temporal types are available?
     - Is it needed in Java 8+ with LocalDate?

113. What is @Lob annotation?
     - What does LOB stand for?
     - When would you use it?
     - What types can be annotated with @Lob?

114. What is @Enumerated annotation?
     - How do you persist enums?
     - What is ORDINAL vs STRING?
     - Which one is safer?

115. What is @Embedded annotation?
     - What does it do?
     - How is it different from @Entity?
     - Can embedded objects have their own ID?

116. What is @Embeddable annotation?
     - Where do you use it?
     - Can embeddable classes be reused?
     - Do they have their own table?

117. What is @ManyToOne annotation?
     - What relationship does it represent?
     - Which side owns the relationship?
     - What is the default fetch type?

118. What is @OneToMany annotation?
     - What relationship does it represent?
     - Should you use mappedBy?
     - What is the default fetch type?

119. What is @OneToOne annotation?
     - How do you implement one-to-one?
     - Which side should own the relationship?
     - Can it be bidirectional?

120. What is @ManyToMany annotation?
     - How is the join table created?
     - Which side should own the relationship?
     - What is the default fetch type?

121. What is cascade type in JPA relationships?
     - What cascade operations are available?
     - What is CascadeType.ALL?
     - When should you use cascade?

122. What is fetch type in JPA?
     - What are the two fetch types?
     - What is the default for each relationship type?
     - Can you override the default?

123. What is the difference between EAGER and LAZY loading?
     - Which one loads data immediately?
     - Which one is better for performance?
     - What is the N+1 problem?

124. What is @JoinColumn annotation?
     - What does it specify?
     - When do you use it?
     - What attributes can you configure?

125. What is @JoinTable annotation?
     - When is it used?
     - What relationships require it?
     - Can you customize the join table name?

126. What is mappedBy attribute?
     - Which side uses mappedBy?
     - What does it indicate?
     - Can both sides have mappedBy?

127. What is orphanRemoval in JPA?
     - What does it do?
     - How is it different from cascade remove?
     - When should you use it?

128. What is JpaRepository interface?
     - What methods does it provide?
     - What interfaces does it extend?
     - Do you need to implement it?

129. What is CrudRepository interface?
     - What CRUD operations does it provide?
     - Is it specific to JPA?
     - What is the difference from Repository?

130. What is PagingAndSortingRepository interface?
     - What additional methods does it provide?
     - Does JpaRepository extend it?
     - When would you use it directly?

131. What is the difference between JpaRepository and CrudRepository?
     - Which one has more methods?
     - Which one provides batch operations?
     - Which one should you typically use?

132. How do you create custom query methods in Spring Data JPA?
     - What naming convention do you follow?
     - Does Spring generate the query?
     - Can you use multiple conditions?

133. What are query derivation keywords in Spring Data JPA?
     - What is findBy, countBy, deleteBy?
     - What logical operators can you use?
     - Can you use OrderBy?

134. What is @Query annotation?
     - When do you use it?
     - What query language does it use?
     - Can you write native SQL?

135. How do you write native queries in Spring Data JPA?
     - What attribute do you set?
     - Can you use entity mapping?
     - When would you prefer native queries?

136. What is @Param annotation in Spring Data JPA?
     - What does it do?
     - When is it required?
     - Can you use named parameters?

137. What is @Modifying annotation?
     - When do you use it?
     - What queries require it?
     - Do you need @Transactional with it?

138. How do you perform update queries in Spring Data JPA?
     - What annotations do you need?
     - Can you use query methods?
     - What does the method return?

139. What is @NamedQuery annotation?
     - Where do you define it?
     - How do you reference it?
     - Is it still commonly used?

140. What is @NamedNativeQuery annotation?
     - How is it different from @NamedQuery?
     - Where do you define it?
     - Can you map results to entities?

141. What is Specification interface in Spring Data JPA?
     - What is it used for?
     - How does it enable dynamic queries?
     - What is the Criteria API?

142. What is Criteria API?
     - What does it provide?
     - Is it type-safe?
     - When would you use it over JPQL?

143. How do you implement pagination in Spring Data JPA?
     - What parameter do you add?
     - What does the method return?
     - How do you create a Pageable?

144. What is Pageable interface?
     - What information does it contain?
     - How do you create an instance?
     - Can you combine with sorting?

145. What is Page interface?
     - What information does it provide?
     - How is it different from List?
     - What metadata is available?

146. What is Slice interface?
     - How is it different from Page?
     - Does it know total count?
     - When would you use Slice over Page?

147. How do you implement sorting in Spring Data JPA?
     - What parameter do you add?
     - Can you sort by multiple fields?
     - How do you specify sort direction?

148. What is Sort class?
     - How do you create a Sort object?
     - Can you chain multiple sorts?
     - What is Sort.by()?

149. What is EntityManager in JPA?
     - What is its role?
     - What operations can you perform?
     - How do you inject it?

150. What is PersistenceContext?
     - What does it represent?
     - What is its lifecycle?
     - How is it different from EntityManager?

### Follow-up Questions for Data Access & JPA

- How do you handle N+1 query problem in JPA?
- What's the difference between save() and saveAndFlush()?
- How do you implement soft delete in Spring Data JPA?
- Explain the first-level and second-level cache in Hibernate.
- How do you optimize database queries in Spring Boot?
- What's the difference between findById() and getById()?
- How do you implement auditing in Spring Data JPA?
- What are @CreatedDate and @LastModifiedDate annotations?
- How do you handle database migrations in Spring Boot?
- What's the difference between Flyway and Liquibase?
- How do you implement multi-tenancy in Spring Boot?
- What's the purpose of @EntityGraph annotation?
- How do you batch insert records for better performance?
- What's the difference between EntityManager.persist() and EntityManager.merge()?
- How do you implement custom repository implementations?

## Transactions (151-175)

151. What is @Transactional annotation?
     - Where can you use this annotation?
     - What does it do?
     - Is it from Spring or JPA?

152. What is transaction management in Spring Boot?
     - Is it enabled by default?
     - What is the transaction manager?
     - How does Spring manage transactions?

153. What are ACID properties?
     - What does ACID stand for?
     - Why are they important?
     - How does Spring Boot ensure ACID?

154. What are the different transaction propagation levels?
     - How many propagation levels exist?
     - What is the default propagation?
     - When would you change propagation?

155. What is REQUIRED propagation?
     - Is this the default?
     - What happens if transaction exists?
     - What if no transaction exists?

156. What is REQUIRES_NEW propagation?
     - Does it suspend existing transaction?
     - When would you use it?
     - What happens on rollback?

157. What is NESTED propagation?
     - How is it different from REQUIRES_NEW?
     - Does it use savepoints?
     - Is it supported by all databases?

158. What is SUPPORTS propagation?
     - Does it require a transaction?
     - What happens if transaction exists?
     - What if no transaction exists?

159. What is NOT_SUPPORTED propagation?
     - Does it suspend existing transaction?
     - When would you use it?
     - What happens to the suspended transaction?

160. What is MANDATORY propagation?
     - Does it require existing transaction?
     - What exception is thrown if no transaction?
     - When would you use it?

161. What is NEVER propagation?
     - Can it run within a transaction?
     - What exception is thrown if transaction exists?
     - When would you use it?

162. What are transaction isolation levels?
     - How many isolation levels exist?
     - What problems do they prevent?
     - What is the default isolation level?

163. What is READ_UNCOMMITTED isolation level?
     - What does it allow?
     - What is dirty read?
     - Is it commonly used?

164. What is READ_COMMITTED isolation level?
     - What does it prevent?
     - Can non-repeatable reads occur?
     - Is this the default for most databases?

165. What is REPEATABLE_READ isolation level?
     - What does it prevent?
     - Can phantom reads occur?
     - What is the performance impact?

166. What is SERIALIZABLE isolation level?
     - What does it prevent?
     - Is it the strictest level?
     - What is the performance impact?

167. What is the default isolation level in Spring?
     - Does Spring set a default?
     - What does DEFAULT isolation mean?
     - Does it use database default?

168. What is rollbackFor attribute in @Transactional?
     - What exceptions trigger rollback by default?
     - How do you rollback on checked exceptions?
     - Can you specify multiple exceptions?

169. What is noRollbackFor attribute in @Transactional?
     - When would you use it?
     - Can you prevent rollback on RuntimeException?
     - Can you combine with rollbackFor?

170. What is timeout in transaction management?
     - What does it specify?
     - What is the default timeout?
     - What happens when timeout is exceeded?

171. What is readOnly attribute in @Transactional?
     - What does it do?
     - Does it improve performance?
     - Can you modify data in readOnly transaction?

172. What is PlatformTransactionManager?
     - What is its role?
     - What implementations exist?
     - How does Spring Boot configure it?

173. What is TransactionTemplate?
     - When would you use it?
     - How is it different from @Transactional?
     - Is it programmatic or declarative?

174. What is declarative transaction management?
     - What does declarative mean?
     - What annotation is used?
     - What are the advantages?

175. What is programmatic transaction management?
     - How do you implement it?
     - When would you use it over declarative?
     - What classes are involved?

### Follow-up Questions for Transactions

- What happens if you call a @Transactional method from within the same class?
- How do you handle distributed transactions in microservices?
- What's the difference between JTA and JPA transactions?
- How do you debug transaction-related issues?
- What's the impact of transaction isolation levels on performance?
- How do you implement optimistic locking in JPA?
- What's the purpose of @Version annotation?
- How do you implement pessimistic locking?
- What happens when a transaction timeout occurs?
- How do you handle deadlocks in transactions?

## REST APIs (176-225)

176. What is REST?
     - What does REST stand for?
     - What are REST principles?
     - Is REST a protocol or architectural style?

177. What are RESTful web services?
     - What makes a service RESTful?
     - What are REST constraints?
     - How is REST different from SOAP?

178. What are the HTTP methods used in REST?
     - What are the main HTTP verbs?
     - What is each method used for?
     - Which methods are safe?

179. What is the difference between PUT and POST?
     - Which one creates resources?
     - Which one is idempotent?
     - When should you use each?

180. What is the difference between PUT and PATCH?
     - Which one does full replacement?
     - Which one does partial update?
     - Is PATCH idempotent?

181. What is idempotency in REST?
     - What does idempotent mean?
     - Which HTTP methods are idempotent?
     - Why is idempotency important?

182. What are HTTP status codes?
     - What are the status code categories?
     - What do 2xx, 3xx, 4xx, 5xx mean?
     - Why are they important?

183. What is the difference between 200 and 201 status codes?
     - When do you return 200?
     - When do you return 201?
     - Should 201 include Location header?

184. What is 204 No Content status code?
     - When do you use it?
     - Does it have a response body?
     - Is it used for DELETE operations?

185. What is 400 Bad Request status code?
     - When is it returned?
     - What causes this error?
     - Should you include error details?

186. What is 401 Unauthorized status code?
     - What does it mean?
     - Is authentication required?
     - How is it different from 403?

187. What is 403 Forbidden status code?
     - What does it mean?
     - Is it an authentication or authorization issue?
     - Can the user retry?

188. What is 404 Not Found status code?
     - When is it returned?
     - Should you return 404 for invalid IDs?
     - What about security considerations?

189. What is 500 Internal Server Error status code?
     - What does it indicate?
     - Should you expose error details?
     - How should you handle it?

190. What is @RestController annotation?
     - What does it combine?
     - Is @ResponseBody needed?
     - Where should it be used?

191. How do you return JSON response in Spring Boot?
     - Is it automatic?
     - What library is used?
     - Do you need configuration?

192. What is Jackson library?
     - What does it do?
     - Is it included by default?
     - Can you use other JSON libraries?

193. How do you customize JSON serialization?
     - What annotations can you use?
     - Can you create custom serializers?
     - What is ObjectMapper?

194. What is @JsonProperty annotation?
     - What does it do?
     - Can you rename fields?
     - Where do you use it?

195. What is @JsonIgnore annotation?
     - What does it do?
     - Can you ignore during serialization only?
     - What about @JsonIgnoreProperties?

196. What is @JsonFormat annotation?
     - What is it used for?
     - Can you format dates?
     - What patterns can you specify?

197. What is @JsonInclude annotation?
     - What does it control?
     - Can you exclude null values?
     - What inclusion strategies exist?

198. What is @JsonNaming annotation?
     - What does it do?
     - Can you use snake_case?
     - What naming strategies are available?

199. What is ResponseEntity class?
     - What does it represent?
     - What can you customize?
     - How do you create one?

200. How do you set HTTP status code in response?
     - Can you use ResponseEntity?
     - What about @ResponseStatus?
     - Can you set it dynamically?

201. How do you set custom headers in response?
     - How do you use ResponseEntity?
     - Can you use HttpServletResponse?
     - What about @ResponseHeader?

202. What is @ResponseStatus annotation?
     - Where can you use it?
     - Can you use it on exceptions?
     - Does it work with ResponseEntity?

203. What is content negotiation in Spring Boot?
     - What does it do?
     - How does it determine response format?
     - What is Accept header?

204. How do you support XML responses in Spring Boot?
     - What dependency do you need?
     - Does Jackson support XML?
     - What is JAXB?

205. What is @Produces annotation?
     - Is it from Spring or JAX-RS?
     - What does it specify?
     - Is it needed in Spring Boot?

206. What is @Consumes annotation?
     - What does it specify?
     - Is it from Spring or JAX-RS?
     - How do you specify content type in Spring?

207. How do you validate request body in Spring Boot?
     - What annotation do you use?
     - What validation framework is used?
     - Do you need additional dependencies?

208. What is @Valid annotation?
     - Where do you use it?
     - What does it trigger?
     - Is it from Spring or JSR-303?

209. What is BindingResult?
     - What does it contain?
     - Where do you place it in method signature?
     - Can you access validation errors?

210. How do you handle validation errors?
     - What exception is thrown?
     - Can you use @ExceptionHandler?
     - How do you return custom error response?

211. What is @NotNull annotation?
     - What does it validate?
     - Can it be used on primitives?
     - What about empty strings?

212. What is @NotEmpty annotation?
     - What does it validate?
     - Does it check for null?
     - Can it be used on collections?

213. What is @NotBlank annotation?
     - What does it validate?
     - How is it different from @NotEmpty?
     - Does it trim whitespace?

214. What is @Size annotation?
     - What does it validate?
     - Can you specify min and max?
     - What types can it validate?

215. What is @Min and @Max annotations?
     - What do they validate?
     - Can you use them on strings?
     - What about decimal numbers?

216. What is @Email annotation?
     - What does it validate?
     - What regex does it use?
     - Is it from JSR-303?

217. What is @Pattern annotation?
     - What does it validate?
     - Can you specify custom regex?
     - What is the syntax?

218. How do you create custom validators?
     - What annotation do you create?
     - What interface do you implement?
     - How do you use it?

219. What is ConstraintValidator interface?
     - What methods do you implement?
     - What is isValid method?
     - How do you initialize it?

220. What is HATEOAS?
     - What does HATEOAS stand for?
     - What is hypermedia?
     - Why is it important in REST?

221. What is spring-boot-starter-hateoas?
     - What does it provide?
     - What classes are included?
     - Is it commonly used?

222. What is RepresentationModel class?
     - What does it do?
     - How do you extend it?
     - What was it called before Spring HATEOAS 1.0?

223. What is Link class?
     - What does it represent?
     - How do you create links?
     - What is rel attribute?

224. How do you add links to REST responses?
     - What methods do you use?
     - Can you use WebMvcLinkBuilder?
     - What is linkTo method?

225. What is HAL (Hypertext Application Language)?
     - What is it?
     - Is it a standard format?
     - Does Spring HATEOAS support it?

### Follow-up Questions for REST APIs

- How do you implement API versioning in Spring Boot?
- What are the different strategies for API versioning?
- How do you implement rate limiting in REST APIs?
- What's the difference between @RequestBody and @ModelAttribute?
- How do you handle file uploads in Spring Boot?
- How do you implement multipart file upload?
- What's the purpose of @RequestPart annotation?
- How do you implement pagination and sorting in REST APIs?
- How do you implement filtering and searching in REST APIs?
- What's the best way to document REST APIs?
- What is Swagger/OpenAPI specification?
- How do you integrate Swagger with Spring Boot?
- What is SpringDoc OpenAPI?
- How do you implement request/response logging?
- How do you implement API authentication using API keys?
- What's the difference between @RequestBody and HttpEntity?
- How do you handle large payloads in REST APIs?
- What are best practices for designing RESTful APIs?
- How do you implement conditional requests (ETags)?
- What's the purpose of If-None-Match and If-Modified-Since headers?

## Exception Handling (226-250)

226. What is exception handling in Spring Boot?
     - How does Spring Boot handle exceptions?
     - What mechanisms are available?
     - Is there default exception handling?

227. What is @ExceptionHandler annotation?
     - Where can you use it?
     - What exceptions can it handle?
     - Can you have multiple handlers?

228. What is @ControllerAdvice annotation?
     - What does it do?
     - Is it global?
     - Can you limit its scope?

229. What is @RestControllerAdvice annotation?
     - How is it different from @ControllerAdvice?
     - What does it combine?
     - When should you use it?

230. What is the difference between @ControllerAdvice and @RestControllerAdvice?
     - Which one is for REST APIs?
     - Do you need @ResponseBody with @ControllerAdvice?
     - Which one should you use for JSON responses?

231. How do you handle global exceptions in Spring Boot?
     - What annotation do you use?
     - Can you create a global exception handler class?
     - What exceptions should be handled globally?

232. What is ResponseEntityExceptionHandler?
     - What does it provide?
     - Should you extend it?
     - What methods can you override?

233. How do you customize error responses?
     - What class do you return?
     - Can you include custom fields?
     - What format should you use?

234. What is ErrorController interface?
     - What does it do?
     - When would you implement it?
     - What is BasicErrorController?

235. How do you handle 404 errors?
     - Can you use @ExceptionHandler?
     - What about ErrorController?
     - Should you customize 404 responses?

236. What is ProblemDetail class?
     - What is it used for?
     - Is it from Spring Framework 6?
     - Does it follow RFC 7807?

237. What is ErrorResponse interface?
     - What does it define?
     - What methods does it have?
     - How is it related to ProblemDetail?

238. How do you handle validation exceptions?
     - What exception is thrown?
     - Can you use @ExceptionHandler?
     - How do you extract field errors?

239. What is MethodArgumentNotValidException?
     - When is it thrown?
     - What does it contain?
     - How do you get validation errors?

240. What is ConstraintViolationException?
     - When is it thrown?
     - How is it different from MethodArgumentNotValidException?
     - What does it contain?

241. What is HttpMessageNotReadableException?
     - When is it thrown?
     - What causes this exception?
     - How should you handle it?

242. What is HttpRequestMethodNotSupportedException?
     - When is it thrown?
     - What status code should you return?
     - How do you handle it?

243. How do you return custom error messages?
     - What class do you use?
     - Can you include error codes?
     - What fields should you include?

244. What is the default error page in Spring Boot?
     - What does it show?
     - Where is it defined?
     - Is it suitable for production?

245. How do you customize the default error page?
     - Can you create custom error pages?
     - What is the naming convention?
     - Where should you place them?

246. What is error.path property?
     - What does it configure?
     - What is the default value?
     - Can you change it?

247. What is server.error.include-message property?
     - What does it control?
     - What are the possible values?
     - Should you enable it in production?

248. What is server.error.include-stacktrace property?
     - What does it control?
     - What are the possible values?
     - Should you include stacktrace in production?

249. How do you log exceptions in Spring Boot?
     - What logging framework is used?
     - Should you log in exception handlers?
     - What log level should you use?

250. What is @ResponseStatus annotation for exception classes?
     - Where do you use it?
     - What does it specify?
     - Can you set custom reason?

### Follow-up Questions for Exception Handling

- How do you handle asynchronous exceptions in Spring Boot?
- What's the difference between @ExceptionHandler at controller level vs global level?
- How do you handle exceptions in filters?
- How do you implement circuit breaker pattern for exception handling?
- What is Resilience4j?
- How do you handle exceptions in reactive Spring Boot applications?
- What's the purpose of @Order annotation in @ControllerAdvice?
- How do you log exception stack traces without exposing them to clients?
- How do you handle exceptions in scheduled tasks?
- What are best practices for exception handling in microservices?

## Security (251-275)

251. What is Spring Security?
     - What does it provide?
     - Is it a separate framework?
     - What features does it offer?

252. What is spring-boot-starter-security?
     - What dependencies does it include?
     - Is security enabled by default?
     - What happens when you add it?

253. What is authentication?
     - What does it verify?
     - What is the process?
     - What information is needed?

254. What is authorization?
     - What does it control?
     - When does it happen?
     - What does it check?

255. What is the difference between authentication and authorization?
     - Which comes first?
     - Can you have one without the other?
     - What does each verify?

256. What is the default username and password in Spring Security?
     - What is the default username?
     - Where is the password printed?
     - Should you use defaults in production?

257. How do you configure custom username and password?
     - What properties do you set?
     - Can you use application.properties?
     - What about in-memory authentication?

258. What is SecurityFilterChain?
     - What does it do?
     - How do you configure it?
     - What replaced WebSecurityConfigurerAdapter?

259. What is @EnableWebSecurity annotation?
     - When do you use it?
     - Is it required?
     - What does it enable?

260. What is HttpSecurity class?
     - What does it configure?
     - What methods does it provide?
     - How do you use it?

261. How do you configure HTTP Basic authentication?
     - What method do you use?
     - Is it secure?
     - When should you use it?

262. How do you configure form-based authentication?
     - What method do you use?
     - Can you customize the login page?
     - What is the default login URL?

263. What is CSRF (Cross-Site Request Forgery)?
     - What is the attack?
     - How does Spring Security prevent it?
     - Is it enabled by default?

264. How do you disable CSRF protection?
     - When would you disable it?
     - What method do you use?
     - Is it safe for REST APIs?

265. What is CORS (Cross-Origin Resource Sharing)?
     - What problem does it solve?
     - What is same-origin policy?
     - When do you need CORS?

266. How do you enable CORS in Spring Boot?
     - What are the different ways?
     - Can you configure it globally?
     - What about per-controller?

267. What is @CrossOrigin annotation?
     - Where can you use it?
     - What can you configure?
     - Is it better than global CORS?

268. What is JWT (JSON Web Token)?
     - What does it contain?
     - How is it structured?
     - Is it encrypted or signed?

269. How do you implement JWT authentication in Spring Boot?
     - What libraries do you need?
     - How do you generate tokens?
     - How do you validate tokens?

270. What is OAuth2?
     - What is it used for?
     - What are the grant types?
     - How is it different from JWT?

271. How do you implement OAuth2 in Spring Boot?
     - What starter do you need?
     - Can you be an OAuth2 client?
     - What about resource server?

272. What is UserDetailsService interface?
     - What does it do?
     - What method do you implement?
     - When is it called?

273. What is UserDetails interface?
     - What does it represent?
     - What methods does it have?
     - How do you implement it?

274. What is PasswordEncoder interface?
     - What does it do?
     - What implementations exist?
     - Why should you encode passwords?

275. What is BCryptPasswordEncoder?
     - What algorithm does it use?
     - Is it recommended?
     - How do you configure it?

### Follow-up Questions for Security

- How do you implement role-based access control (RBAC)?
- What is @PreAuthorize and @PostAuthorize annotations?
- How do you secure method-level access?
- What is @Secured annotation?
- What's the difference between @Secured and @PreAuthorize?
- How do you implement custom authentication provider?
- What is AuthenticationManager interface?
- How do you handle JWT token expiration and refresh?
- What's the difference between stateless and stateful authentication?
- How do you implement remember-me functionality?
- How do you secure REST APIs with JWT?
- What is SecurityContext and SecurityContextHolder?
- How do you implement social login (Google, Facebook)?
- What is OAuth2 Authorization Code flow?
- What is OAuth2 Client Credentials flow?
- How do you implement two-factor authentication (2FA)?
- What are security best practices in Spring Boot?
- How do you prevent SQL injection in Spring Boot?
- How do you handle password reset functionality?
- What is session fixation attack and how to prevent it?

## Testing (276-300)

276. What is spring-boot-starter-test?
277. What testing frameworks are included in spring-boot-starter-test?
278. What is JUnit?
279. What is Mockito?
280. What is @SpringBootTest annotation?
281. What is @WebMvcTest annotation?
282. What is @DataJpaTest annotation?
283. What is @JsonTest annotation?
284. What is @RestClientTest annotation?
285. What is the difference between @SpringBootTest and @WebMvcTest?
286. What is MockMvc?
287. How do you test REST controllers?
288. What is @MockBean annotation?
289. What is @SpyBean annotation?
290. What is the difference between @Mock and @MockBean?
291. How do you test service layer?
292. How do you test repository layer?
293. What is @AutoConfigureMockMvc annotation?
294. What is TestRestTemplate?
295. How do you perform integration testing?
296. What is @Sql annotation?
297. What is @ActiveProfiles annotation for testing?
298. How do you test security configurations?
299. What is @WithMockUser annotation?
300. How do you test asynchronous methods in Spring Boot?

### Follow-up Questions for Testing

- What's the difference between unit testing and integration testing?
- How do you test REST endpoints with authentication?
- What is @DirtiesContext annotation?
- How do you test database transactions?
- What is TestEntityManager?
- How do you test exception handling in controllers?
- What's the purpose of @TestConfiguration?
- How do you use test containers in Spring Boot?
- What is WireMock and how to use it?
- How do you test scheduled tasks?
- What's the difference between @Mock, @MockBean, and @InjectMocks?
- How do you achieve high test coverage?
- What are testing best practices in Spring Boot?
- How do you test WebSocket endpoints?
- How do you test caching behavior?
- What is AssertJ and how to use it?
- How do you test reactive endpoints?
- What is StepVerifier in reactive testing?
- How do you perform load testing on Spring Boot applications?
- What tools can you use for performance testing?

## Advanced Topics (Bonus Questions)

301. What is Spring Boot Actuator's health indicator?
     - What does it check?
     - Can you create custom indicators?
     - What statuses can it return?

302. How do you create custom health indicators?
     - What interface do you implement?
     - What method do you override?
     - How do you register it?

303. What is Spring Boot Admin?
     - What does it provide?
     - Is it part of Spring Boot?
     - How do you set it up?

304. How do you implement caching in Spring Boot?
     - What annotation enables caching?
     - What cache providers are supported?
     - Do you need additional dependencies?

305. What is @Cacheable annotation?
     - What does it do?
     - Where can you use it?
     - What is the cache key?

306. What is @CacheEvict annotation?
     - What does it do?
     - When should you use it?
     - Can you evict all entries?

307. What is @CachePut annotation?
     - What does it do?
     - How is it different from @Cacheable?
     - When should you use it?

308. What cache providers does Spring Boot support?
     - What is the default provider?
     - Can you use Redis?
     - What about Caffeine or Ehcache?

309. How do you implement Redis caching?
     - What dependency do you need?
     - How do you configure it?
     - What is RedisTemplate?

310. What is Spring Data Redis?
     - What does it provide?
     - Can you use it as cache?
     - What operations does it support?

311. How do you implement messaging in Spring Boot?
     - What messaging systems are supported?
     - What starters are available?
     - What is JmsTemplate?

312. What is Spring Boot Starter for RabbitMQ?
     - What does it include?
     - How do you send messages?
     - How do you consume messages?

313. What is Spring Boot Starter for Kafka?
     - What does it include?
     - How do you produce messages?
     - How do you consume messages?

314. How do you implement asynchronous processing?
     - What annotation do you use?
     - Do you need to enable it?
     - What thread pool is used?

315. What is @Async annotation?
     - Where can you use it?
     - What can the method return?
     - Can you use CompletableFuture?

316. How do you configure thread pool for async operations?
     - What bean do you define?
     - What is TaskExecutor?
     - How do you customize pool size?

317. What is @EnableAsync annotation?
     - Where do you use it?
     - Is it required?
     - What does it enable?

318. What is Spring Boot Starter for WebSocket?
     - What does it include?
     - What protocol does it support?
     - How do you configure endpoints?

319. How do you implement WebSocket communication?
     - What annotations do you use?
     - How do you send messages?
     - How do you receive messages?

320. What is STOMP protocol?
     - What does STOMP stand for?
     - How is it used with WebSocket?
     - What is a message broker?

321. How do you implement scheduled tasks?
     - What annotation do you use?
     - Do you need to enable scheduling?
     - Can you use cron expressions?

322. What is @Scheduled annotation?
     - Where can you use it?
     - What scheduling options exist?
     - Can methods have parameters?

323. What is @EnableScheduling annotation?
     - Where do you use it?
     - Is it required?
     - What does it enable?

324. What are the different scheduling options in @Scheduled?
     - What is fixedRate vs fixedDelay?
     - Can you use cron expressions?
     - What is initialDelay?

325. What is Spring Batch?
     - What is it used for?
     - What are the main components?
     - Is it part of Spring Boot?

326. How do you implement batch processing in Spring Boot?
     - What starter do you need?
     - What is a Job?
     - What is a Step?

327. What is Spring Boot Starter for Mail?
     - What does it include?
     - What is JavaMailSender?
     - Can you send HTML emails?

328. How do you send emails in Spring Boot?
     - What interface do you use?
     - How do you configure SMTP?
     - Can you send attachments?

329. What is Spring Boot Starter for Thymeleaf?
     - What is Thymeleaf?
     - Is it a template engine?
     - Where are templates located?

330. How do you create server-side rendered pages?
     - What template engines are supported?
     - How do you return views?
     - What is ModelAndView?

331. What is reactive programming?
     - What is it?
     - What are the benefits?
     - When should you use it?

332. What is Spring WebFlux?
     - What is it?
     - How is it different from Spring MVC?
     - What server does it use?

333. What's the difference between Spring MVC and Spring WebFlux?
     - Which one is blocking?
     - Which one is reactive?
     - Can you use both together?

334. What is Project Reactor?
     - What is it?
     - What does it provide?
     - Is it used by WebFlux?

335. What is Mono and Flux?
     - What does Mono represent?
     - What does Flux represent?
     - How are they different?

336. When should you use reactive programming?
     - What use cases benefit?
     - Is it always better?
     - What are the trade-offs?

337. What is backpressure in reactive streams?
     - What problem does it solve?
     - How does it work?
     - Why is it important?

338. How do you implement server-sent events (SSE)?
     - What is SSE?
     - How do you use it in Spring Boot?
     - What is the content type?

339. What is GraphQL?
     - What is it?
     - How is it different from REST?
     - What are queries and mutations?

340. How do you integrate GraphQL with Spring Boot?
     - What library do you use?
     - How do you define schema?
     - What are resolvers?

341. What is Spring Boot Starter for AMQP?
     - What does AMQP stand for?
     - What does it include?
     - What is RabbitMQ?

342. How do you implement event-driven architecture?
     - What patterns can you use?
     - What is ApplicationEventPublisher?
     - What is @EventListener?

343. What is Spring Cloud?
     - What is it?
     - What problems does it solve?
     - What components does it include?

344. What is service discovery in microservices?
     - What problem does it solve?
     - What is client-side discovery?
     - What is server-side discovery?

345. What is Eureka?
     - What is it?
     - Is it a service registry?
     - How do you use it?

346. What is Spring Cloud Config Server?
     - What does it provide?
     - Where can config be stored?
     - How do clients connect?

347. What is API Gateway?
     - What is it?
     - What problems does it solve?
     - What features does it provide?

348. What is Spring Cloud Gateway?
     - What is it?
     - How is it different from Zuul?
     - What is it built on?

349. What is circuit breaker pattern?
     - What problem does it solve?
     - What are the states?
     - What is Resilience4j?

350. What is Spring Cloud Netflix?
     - What components does it include?
     - Is it still maintained?
     - What alternatives exist?

351. What is Feign Client?
     - What is it?
     - How does it simplify REST calls?
     - Is it declarative?

352. How do you implement inter-service communication?
     - What options exist?
     - Should you use REST?
     - What about messaging?

353. What is distributed tracing?
     - What problem does it solve?
     - What is a trace?
     - What is a span?

354. What is Spring Cloud Sleuth?
     - What does it provide?
     - How does it add trace IDs?
     - Does it integrate with Zipkin?

355. What is Zipkin?
     - What is it?
     - What does it visualize?
     - How do you integrate it?

356. How do you implement distributed logging?
     - What challenges exist?
     - How do you correlate logs?
     - What is centralized logging?

357. What is ELK stack?
     - What does ELK stand for?
     - What is each component?
     - How do you use it?

358. How do you containerize Spring Boot application?
     - What is containerization?
     - What tool do you use?
     - What are the benefits?

359. What is Docker?
     - What is it?
     - What is a container?
     - How is it different from VM?

360. How do you create a Dockerfile for Spring Boot?
     - What base image do you use?
     - How do you copy the JAR?
     - What is multi-stage build?

361. What is Kubernetes?
     - What is it?
     - What is container orchestration?
     - What are the main components?

362. How do you deploy Spring Boot to Kubernetes?
     - What resources do you create?
     - What is a Deployment?
     - What is a Service?

363. What are ConfigMaps in Kubernetes?
     - What are they?
     - How do you use them?
     - Can you mount as files?

364. What are Secrets in Kubernetes?
     - What are they?
     - How are they different from ConfigMaps?
     - Are they encrypted?

365. What is Spring Cloud Kubernetes?
     - What does it provide?
     - Can it read ConfigMaps?
     - What about service discovery?

366. How do you implement health checks for Kubernetes?
     - What probes are available?
     - How do you configure them?
     - What endpoints do you use?

367. What is liveness probe?
     - What does it check?
     - What happens if it fails?
     - How often does it run?

368. What is readiness probe?
     - What does it check?
     - What happens if it fails?
     - How is it different from liveness?

369. How do you implement graceful shutdown?
     - Why is it important?
     - How do you configure it?
     - What is shutdown timeout?

370. What is Spring Boot's shutdown endpoint?
     - What does it do?
     - Is it enabled by default?
     - Should you expose it?

371. How do you monitor Spring Boot applications?
     - What tools can you use?
     - What metrics should you track?
     - What is observability?

372. What is Prometheus?
     - What is it?
     - What is it used for?
     - How does it collect metrics?

373. How do you integrate Micrometer with Spring Boot?
     - What is Micrometer?
     - Is it included by default?
     - What registries does it support?

374. What is Grafana?
     - What is it?
     - What does it visualize?
     - Can it use Prometheus data?

375. How do you create custom metrics?
     - What interface do you use?
     - What types of metrics exist?
     - How do you register them?

376. What is distributed caching?
     - What is it?
     - Why is it needed?
     - What solutions exist?

377. What is Hazelcast?
     - What is it?
     - Is it a distributed cache?
     - Can you use it with Spring Boot?

378. How do you implement session clustering?
     - Why is it needed?
     - What solutions exist?
     - How do you share sessions?

379. What is Spring Session?
     - What does it provide?
     - What backends does it support?
     - How do you configure it?

380. How do you externalize session storage?
     - Why would you do this?
     - What options exist?
     - Can you use Redis?

381. What is API rate limiting?
     - What is it?
     - Why is it important?
     - How do you implement it?

382. How do you implement throttling?
     - What is throttling?
     - What strategies exist?
     - Can you use Bucket4j?

383. What is Spring Cloud Sleuth?
     - What does it do?
     - How does it add tracing?
     - What headers does it add?

384. How do you implement request tracing?
     - Why is it important?
     - What information do you track?
     - How do you propagate trace context?

385. What is correlation ID?
     - What is it?
     - Why is it useful?
     - How do you generate it?

386. How do you implement request filtering?
     - What interface do you use?
     - What is Filter?
     - What is the filter chain?

387. What is OncePerRequestFilter?
     - What does it guarantee?
     - When should you use it?
     - How do you implement it?

388. How do you implement request/response modification?
     - What can you use?
     - What is ContentCachingRequestWrapper?
     - Can you modify headers?

389. What is HandlerInterceptor?
     - What is it?
     - What methods does it have?
     - When is it called?

390. What's the difference between Filter and Interceptor?
     - Which one is Servlet-level?
     - Which one is Spring-level?
     - Which one has access to handler?

391. How do you implement custom argument resolvers?
     - What interface do you implement?
     - When would you use it?
     - How do you register it?

392. What is HandlerMethodArgumentResolver?
     - What does it do?
     - What methods do you implement?
     - Can you inject custom objects?

393. How do you implement custom message converters?
     - What interface do you implement?
     - When would you use it?
     - How do you register it?

394. What is HttpMessageConverter?
     - What does it do?
     - What implementations exist?
     - Can you create custom ones?

395. How do you implement content negotiation?
     - What is it?
     - How does Spring Boot handle it?
     - What headers are involved?

396. What is Accept header?
     - What does it specify?
     - How does server use it?
     - What is media type?

397. How do you implement API documentation generation?
     - What tools can you use?
     - What is Swagger/OpenAPI?
     - What is Springdoc?

398. What are best practices for Spring Boot in production?
     - What should you configure?
     - What should you monitor?
     - What security measures?

399. How do you optimize Spring Boot application performance?
     - What areas to optimize?
     - What about startup time?
     - What about memory usage?

400. What are common pitfalls in Spring Boot development?
     - What mistakes to avoid?
     - What about N+1 queries?
     - What about memory leaks?

### Follow-up Questions for Advanced Topics

- How do you handle cache consistency in distributed systems?
- What's the strategy for database per service vs shared database?
- How do you implement saga pattern for distributed transactions?
- What's the difference between choreography and orchestration?
- How do you implement eventual consistency?
- What are the challenges of microservices architecture?
- How do you implement blue-green deployment?
- What is canary deployment?
- How do you handle backward compatibility in APIs?
- What's the role of service mesh in microservices?
- What is Istio?
- How do you implement observability in microservices?
- What are the three pillars of observability?
- How do you handle configuration drift?
- What's the importance of idempotency in distributed systems?

## Performance & Optimization (401-425)

401. How do you profile a Spring Boot application?
     - What tools can you use?
     - What is VisualVM?
     - What about JProfiler or YourKit?

402. What is connection pooling?
     - What problem does it solve?
     - Why is it important?
     - What are the benefits?

403. What is HikariCP?
     - What is it?
     - Is it the default in Spring Boot?
     - Why is it fast?

404. How do you configure database connection pool?
     - What properties can you set?
     - What is pool size?
     - What is connection timeout?

405. What is lazy initialization in Spring Boot?
     - What does it do?
     - When are beans created?
     - What is the trade-off?

406. How do you enable lazy initialization?
     - What property do you set?
     - Can you enable it globally?
     - Can you exclude specific beans?

407. What is the impact of lazy initialization on startup time?
     - Does it reduce startup time?
     - What about first request latency?
     - When should you use it?

408. How do you reduce Spring Boot application startup time?
     - What strategies can you use?
     - What about lazy initialization?
     - What about component scanning?

409. What is GraalVM native image?
     - What is it?
     - How is it different from JVM?
     - What are the benefits?

410. How do you create a native image of Spring Boot application?
     - What plugin do you use?
     - What is Spring Native?
     - What limitations exist?

411. What are the benefits of native images?
     - What about startup time?
     - What about memory footprint?
     - What are the trade-offs?

412. How do you optimize memory usage in Spring Boot?
     - What strategies can you use?
     - What JVM flags help?
     - What about heap size tuning?

413. What is heap dump analysis?
     - What is a heap dump?
     - How do you generate one?
     - What tools analyze them?

414. What tools can you use for memory profiling?
     - What is VisualVM?
     - What is Eclipse MAT?
     - What about JProfiler?

415. How do you identify memory leaks?
     - What are the signs?
     - What tools help?
     - What patterns cause leaks?

416. What is garbage collection tuning?
     - What GC algorithms exist?
     - What is G1GC?
     - How do you tune GC?

417. How do you optimize database queries for performance?
     - What strategies can you use?
     - What about query optimization?
     - What is the N+1 problem?

418. What is query caching?
     - What levels of caching exist?
     - What is first-level cache?
     - What is second-level cache?

419. How do you implement database indexing strategy?
     - What columns should be indexed?
     - What are the trade-offs?
     - What about composite indexes?

420. What is connection leak detection?
     - What is a connection leak?
     - How do you detect it?
     - How do you prevent it?

421. How do you handle slow HTTP requests?
     - What causes slow requests?
     - How do you identify them?
     - What optimization strategies exist?

422. What is request timeout configuration?
     - What timeouts can you configure?
     - What is connection timeout?
     - What is read timeout?

423. How do you implement response compression?
     - What does it do?
     - How do you enable it?
     - What content types should be compressed?

424. What is GZIP compression?
     - What is it?
     - How much can it reduce size?
     - Is it enabled by default?

425. How do you optimize JSON serialization performance?
     - What strategies can you use?
     - What about Jackson configuration?
     - What is @JsonView?

### Follow-up Questions for Performance & Optimization

- What's the difference between @Lazy and lazy-initialization property?
- How do you measure and monitor application performance?
- What metrics should you track in production?
- How do you perform load testing on Spring Boot applications?
- What's the impact of synchronous vs asynchronous processing?
- How do you identify and fix performance bottlenecks?
- What's the role of CDN in application performance?
- How do you implement database query result caching?
- What are the trade-offs of using native images?
- How do you optimize Spring Boot for cloud deployment?

## Validation & Data Integrity (426-450)

426. What is Bean Validation?
     - What is it?
     - What specification does it follow?
     - Is it part of Java EE?

427. What is JSR-380?
     - What does JSR stand for?
     - What version of Bean Validation is it?
     - What new features does it add?

428. How do you create custom validation annotations?
     - What annotations do you need?
     - What interface do you implement?
     - How do you use it?

429. What is @AssertTrue annotation?
     - What does it validate?
     - Can it be used on methods?
     - When would you use it?

430. What is @AssertFalse annotation?
     - What does it validate?
     - How is it different from @AssertTrue?
     - When would you use it?

431. What is @DecimalMin annotation?
     - What does it validate?
     - Is the value inclusive?
     - What types can it validate?

432. What is @DecimalMax annotation?
     - What does it validate?
     - Is the value inclusive?
     - Can you exclude the boundary?

433. What is @Digits annotation?
     - What does it validate?
     - What are integer and fraction?
     - When would you use it?

434. What is @Future annotation?
     - What does it validate?
     - What date types does it support?
     - Can it validate LocalDate?

435. What is @Past annotation?
     - What does it validate?
     - Does it include present?
     - What about time zones?

436. What is @FutureOrPresent annotation?
     - What does it validate?
     - How is it different from @Future?
     - When would you use it?

437. What is @PastOrPresent annotation?
     - What does it validate?
     - How is it different from @Past?
     - When would you use it?

438. What is @Positive annotation?
     - What does it validate?
     - Is zero allowed?
     - What types can it validate?

439. What is @PositiveOrZero annotation?
     - What does it validate?
     - How is it different from @Positive?
     - When would you use it?

440. What is @Negative annotation?
     - What does it validate?
     - Is zero allowed?
     - What types can it validate?

441. What is @NegativeOrZero annotation?
     - What does it validate?
     - How is it different from @Negative?
     - When would you use it?

442. What is @URL annotation?
     - What does it validate?
     - What URL formats are valid?
     - Is it from JSR-380?

443. How do you perform group validation?
     - What are validation groups?
     - How do you define groups?
     - How do you specify groups in @Validated?

444. What is validation groups?
     - What problem do they solve?
     - How do you create groups?
     - Can you have group sequences?

445. How do you perform cross-field validation?
     - What is cross-field validation?
     - Can you use class-level annotations?
     - How do you implement it?

446. How do you validate nested objects?
     - What annotation do you use?
     - Does @Valid cascade?
     - Can you validate collections?

447. What is @Valid vs @Validated?
     - Which one is from JSR-380?
     - Which one supports groups?
     - When should you use each?

448. How do you customize validation messages?
     - What attribute do you use?
     - Can you use placeholders?
     - What is message interpolation?

449. Where do you define validation messages?
     - What file do you use?
     - Where should it be located?
     - Can you override default messages?

450. What is ValidationMessages.properties?
     - What is it?
     - What is the format?
     - How do you reference messages?

### Follow-up Questions for Validation & Data Integrity

- How do you handle validation in different layers (controller, service)?
- What's the performance impact of validation?
- How do you validate request parameters vs request body?
- How do you implement conditional validation?
- How do you validate collections and arrays?
- What's the best practice for error message internationalization?
- How do you unit test custom validators?
- How do you handle validation in batch processing?
- What's the difference between client-side and server-side validation?
- How do you implement input sanitization?

## Dependency Injection & Bean Management (451-475)

451. What is Dependency Injection (DI)?
     - What is it?
     - What problem does it solve?
     - What is Inversion of Control (IoC)?

452. What are the types of Dependency Injection?
     - How many types exist?
     - What is constructor injection?
     - What is setter injection?

453. What is constructor injection?
     - How does it work?
     - What are the benefits?
     - Is it recommended?

454. What is setter injection?
     - How does it work?
     - When would you use it?
     - What are the drawbacks?

455. What is field injection?
     - How does it work?
     - Why is it not recommended?
     - What are the issues?

456. Which type of injection is recommended and why?
     - What is the best practice?
     - Why is constructor injection preferred?
     - What about immutability?

457. What is @Autowired annotation?
     - What does it do?
     - Where can you use it?
     - Is it required for constructor injection?

458. What is @Inject annotation?
     - What is it from?
     - How is it different from @Autowired?
     - Is it from JSR-330?

459. What is @Resource annotation?
     - What is it from?
     - How does it resolve beans?
     - Does it use name or type?

460. What's the difference between @Autowired, @Inject, and @Resource?
     - Which one is Spring-specific?
     - Which one uses name matching?
     - Which one is from JSR-330?

461. What is @Qualifier annotation?
     - What does it do?
     - When do you use it?
     - How do you specify bean name?

462. What is @Primary annotation?
     - What does it do?
     - When do you use it?
     - Can you have multiple @Primary beans?

463. What happens when multiple beans of same type exist?
     - What exception is thrown?
     - How do you resolve it?
     - What are the options?

464. What is NoUniqueBeanDefinitionException?
     - When is it thrown?
     - What causes it?
     - How do you fix it?

465. What is NoSuchBeanDefinitionException?
     - When is it thrown?
     - What causes it?
     - How do you fix it?

466. What is bean scope in Spring?
     - What does it define?
     - What is the default scope?
     - How many scopes exist?

467. What is @Scope annotation?
     - What does it do?
     - Where can you use it?
     - What values can you specify?

468. What are the different bean scopes?
     - What is singleton?
     - What is prototype?
     - What are web scopes?

469. What is singleton scope?
     - Is it the default?
     - How many instances exist?
     - Is it thread-safe?

470. What is prototype scope?
     - How many instances exist?
     - When is a new instance created?
     - Is it destroyed by container?

471. What is request scope?
     - What does it mean?
     - When is it available?
     - How long does instance live?

472. What is session scope?
     - What does it mean?
     - How long does instance live?
     - Is it for web applications?

473. What is application scope?
     - What does it mean?
     - How is it different from singleton?
     - When would you use it?

474. What is @Bean annotation?
     - What does it do?
     - Where can you use it?
     - What does it return?

475. What is @Component annotation?
     - What does it do?
     - Where can you use it?
     - What is component scanning?

### Follow-up Questions for Dependency Injection & Bean Management

- What's the difference between @Component, @Service, @Repository, and @Controller?
- How do you inject beans conditionally?
- What is circular dependency and how to resolve it?
- What is @DependsOn annotation?
- How do you create beans using factory methods?
- What is FactoryBean interface?
- What is BeanPostProcessor?
- What is BeanFactoryPostProcessor?
- How do you inject properties into beans?
- What's the lifecycle of a Spring bean?
- What is @PreDestroy annotation?
- How do you manage bean initialization order?
- What is ApplicationContextInitializer?
- How do you access beans by name?
- What's the difference between BeanFactory and ApplicationContext?

## Aspect-Oriented Programming (476-500)

476. What is Aspect-Oriented Programming (AOP)?
     - What is it?
     - What problem does it solve?
     - How is it different from OOP?

477. What are cross-cutting concerns?
     - What are they?
     - What are examples?
     - Why are they called cross-cutting?

478. What is an aspect in AOP?
     - What does it represent?
     - How do you define it?
     - What annotation do you use?

479. What is a join point?
     - What is it?
     - What are examples?
     - Can you access join point information?

480. What is a pointcut?
     - What is it?
     - How do you define it?
     - What is pointcut expression?

481. What is advice in AOP?
     - What is it?
     - When does it execute?
     - What types exist?

482. What are the types of advice?
     - How many types exist?
     - What is @Before?
     - What is @Around?

483. What is @Before advice?
     - When does it execute?
     - Can it prevent method execution?
     - What parameters can it access?

484. What is @After advice?
     - When does it execute?
     - Does it run on exception?
     - Is it like finally block?

485. What is @AfterReturning advice?
     - When does it execute?
     - Can you access return value?
     - Does it run on exception?

486. What is @AfterThrowing advice?
     - When does it execute?
     - Can you access exception?
     - Can you suppress exception?

487. What is @Around advice?
     - When does it execute?
     - What is ProceedingJoinPoint?
     - Can you modify return value?

488. What is @Aspect annotation?
     - What does it do?
     - Where do you use it?
     - Do you need @Component?

489. What is @EnableAspectJAutoProxy annotation?
     - What does it enable?
     - Is it required?
     - Where do you use it?

490. How do you define pointcut expressions?
     - What is the syntax?
     - What designators exist?
     - Can you combine expressions?

491. What is execution pointcut?
     - What does it match?
     - What is the syntax?
     - Can you use wildcards?

492. What is within pointcut?
     - What does it match?
     - How is it different from execution?
     - What is the syntax?

493. What is @annotation pointcut?
     - What does it match?
     - How do you use it?
     - Can you create custom annotations?

494. How do you implement logging using AOP?
     - What advice type do you use?
     - What pointcut expression?
     - Can you log method parameters?

495. How do you implement auditing using AOP?
     - What advice type do you use?
     - What information do you capture?
     - Where do you store audit data?

496. How do you implement security using AOP?
     - What advice type do you use?
     - Can you check permissions?
     - What about method-level security?

497. How do you implement caching using AOP?
     - What advice type do you use?
     - How is it different from @Cacheable?
     - When would you use AOP for caching?

498. What is the difference between Spring AOP and AspectJ?
     - Which one is more powerful?
     - Which one uses proxies?
     - Which one requires weaving?

499. What are the limitations of Spring AOP?
     - Can it intercept private methods?
     - Can it intercept self-invocations?
     - What about final classes?

500. How do you access method parameters in advice?
     - What do you use?
     - What is JoinPoint?
     - Can you modify parameters?

### Follow-up Questions for AOP

- When should you use AOP vs other design patterns?
- How do you implement custom annotations with AOP?
- What's the performance overhead of using AOP?
- How do you test aspects?
- Can you apply multiple aspects to the same join point?
- How do you control aspect execution order?
- What is ProceedingJoinPoint?
- How do you implement retry logic using AOP?
- How do you implement performance monitoring using AOP?
- What are the best practices for using AOP?

---

**Note:** This comprehensive list now covers **500 questions** from fundamental to advanced topics in Spring Boot and related technologies. These questions encompass:

- **Core Spring Boot Concepts**: Basics, Configuration, Auto-configuration
- **Data Layer**: JPA, Hibernate, Transactions, Database Management
- **Web Layer**: REST APIs, Exception Handling, Validation
- **Security**: Authentication, Authorization, OAuth2, JWT
- **Testing**: Unit Testing, Integration Testing, Mocking
- **Advanced Topics**: Microservices, Cloud, Docker, Kubernetes
- **Performance**: Optimization, Profiling, Monitoring
- **Design Patterns**: AOP, Dependency Injection, Bean Management

These questions are commonly asked in technical interviews for Java/Spring Boot developer positions ranging from junior to senior levels. For detailed answers and practical implementations, refer to official documentation, practice building real-world projects, and contribute to open-source Spring Boot applications.

