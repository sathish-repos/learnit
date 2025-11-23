# Spring Boot Interview Questions

## Basics (1-50)

1. What is Spring Boot?
2. What are the advantages of Spring Boot over Spring Framework?
3. What is Spring Initializr?
4. What are Spring Boot starters?
5. What is the difference between @SpringBootApplication and @EnableAutoConfiguration?
6. What is auto-configuration in Spring Boot?
7. How does Spring Boot auto-configuration work?
8. What is the purpose of @SpringBootApplication annotation?
9. What are the three annotations that @SpringBootApplication combines?
10. What is the default embedded server in Spring Boot?
11. How do you change the default port in Spring Boot?
12. What is application.properties file used for?
13. What is the difference between application.properties and application.yml?
14. What is Spring Boot DevTools?
15. What are the benefits of using Spring Boot DevTools?
16. How do you disable a specific auto-configuration?
17. What is @Conditional annotation?
18. What is the purpose of spring-boot-starter-parent?
19. How do you create a Spring Boot application?
20. What is the entry point of a Spring Boot application?
21. What is @ComponentScan annotation?
22. What is the default package scan in Spring Boot?
23. How do you run a Spring Boot application?
24. What is SpringApplication.run() method?
25. How do you create an executable JAR in Spring Boot?
26. What is the difference between JAR and WAR packaging?
27. How do you deploy a Spring Boot application to Tomcat?
28. What is Spring Boot Actuator?
29. What endpoints does Actuator provide?
30. How do you enable Actuator endpoints?
31. What is the difference between @Controller and @RestController?
32. What is @RequestMapping annotation?
33. What is @GetMapping annotation?
34. What is @PostMapping annotation?
35. What is @PutMapping annotation?
36. What is @DeleteMapping annotation?
37. What is @PatchMapping annotation?
38. What is @RequestBody annotation?
39. What is @ResponseBody annotation?
40. What is @PathVariable annotation?
41. What is @RequestParam annotation?
42. What is the difference between @PathVariable and @RequestParam?
43. What is @RequestHeader annotation?
44. What is CommandLineRunner interface?
45. What is ApplicationRunner interface?
46. What is the difference between CommandLineRunner and ApplicationRunner?
47. How do you configure logging in Spring Boot?
48. What are the default logging frameworks in Spring Boot?
49. How do you change the logging level in Spring Boot?
50. What is banner.txt file in Spring Boot?

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
52. How do you bind external properties to a Java object?
53. What is @Value annotation?
54. What is the difference between @Value and @ConfigurationProperties?
55. How do you use profiles in Spring Boot?
56. What is @Profile annotation?
57. How do you activate a profile in Spring Boot?
58. What is spring.profiles.active property?
59. How do you create profile-specific properties files?
60. What is @PropertySource annotation?
61. How do you externalize configuration in Spring Boot?
62. What are the different ways to provide external configuration?
63. What is the configuration precedence in Spring Boot?
64. How do you use environment variables in Spring Boot?
65. How do you use command line arguments in Spring Boot?
66. What is YAML configuration?
67. What are the advantages of YAML over properties files?
68. How do you define list properties in application.yml?
69. How do you define map properties in application.yml?
70. What is @EnableConfigurationProperties annotation?
71. How do you validate configuration properties?
72. What is @Validated annotation?
73. How do you use JSR-303 validation with @ConfigurationProperties?
74. What is relaxed binding in Spring Boot?
75. How do you encrypt sensitive properties in Spring Boot?
76. What is Spring Cloud Config?
77. How do you refresh configuration at runtime?
78. What is @RefreshScope annotation?
79. How do you use placeholders in properties files?
80. What is SpEL (Spring Expression Language)?
81. How do you use SpEL in properties files?
82. What is the purpose of spring.config.location property?
83. How do you override default properties?
84. What is @ConditionalOnProperty annotation?
85. What is @ConditionalOnClass annotation?
86. What is @ConditionalOnMissingBean annotation?
87. What is @ConditionalOnBean annotation?
88. What is @ConditionalOnResource annotation?
89. What is @ConditionalOnWebApplication annotation?
90. What is @ConditionalOnExpression annotation?
91. How do you create custom conditional annotations?
92. What is application context in Spring Boot?
93. How do you access application context programmatically?
94. What is ApplicationContextAware interface?
95. What is EnvironmentAware interface?
96. How do you read properties using Environment object?
97. What is PropertyResolver interface?
98. What is ConfigurableEnvironment interface?
99. How do you add custom property sources?
100. What is @PostConstruct annotation?

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
102. What is JPA (Java Persistence API)?
103. What is Hibernate?
104. What is the difference between JPA and Hibernate?
105. What is @Entity annotation?
106. What is @Table annotation?
107. What is @Id annotation?
108. What is @GeneratedValue annotation?
109. What are the different generation strategies in JPA?
110. What is @Column annotation?
111. What is @Transient annotation?
112. What is @Temporal annotation?
113. What is @Lob annotation?
114. What is @Enumerated annotation?
115. What is @Embedded annotation?
116. What is @Embeddable annotation?
117. What is @ManyToOne annotation?
118. What is @OneToMany annotation?
119. What is @OneToOne annotation?
120. What is @ManyToMany annotation?
121. What is cascade type in JPA relationships?
122. What is fetch type in JPA?
123. What is the difference between EAGER and LAZY loading?
124. What is @JoinColumn annotation?
125. What is @JoinTable annotation?
126. What is mappedBy attribute?
127. What is orphanRemoval in JPA?
128. What is JpaRepository interface?
129. What is CrudRepository interface?
130. What is PagingAndSortingRepository interface?
131. What is the difference between JpaRepository and CrudRepository?
132. How do you create custom query methods in Spring Data JPA?
133. What are query derivation keywords in Spring Data JPA?
134. What is @Query annotation?
135. How do you write native queries in Spring Data JPA?
136. What is @Param annotation in Spring Data JPA?
137. What is @Modifying annotation?
138. How do you perform update queries in Spring Data JPA?
139. What is @NamedQuery annotation?
140. What is @NamedNativeQuery annotation?
141. What is Specification interface in Spring Data JPA?
142. What is Criteria API?
143. How do you implement pagination in Spring Data JPA?
144. What is Pageable interface?
145. What is Page interface?
146. What is Slice interface?
147. How do you implement sorting in Spring Data JPA?
148. What is Sort class?
149. What is EntityManager in JPA?
150. What is PersistenceContext?

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
152. What is transaction management in Spring Boot?
153. What are ACID properties?
154. What are the different transaction propagation levels?
155. What is REQUIRED propagation?
156. What is REQUIRES_NEW propagation?
157. What is NESTED propagation?
158. What is SUPPORTS propagation?
159. What is NOT_SUPPORTED propagation?
160. What is MANDATORY propagation?
161. What is NEVER propagation?
162. What are transaction isolation levels?
163. What is READ_UNCOMMITTED isolation level?
164. What is READ_COMMITTED isolation level?
165. What is REPEATABLE_READ isolation level?
166. What is SERIALIZABLE isolation level?
167. What is the default isolation level in Spring?
168. What is rollbackFor attribute in @Transactional?
169. What is noRollbackFor attribute in @Transactional?
170. What is timeout in transaction management?
171. What is readOnly attribute in @Transactional?
172. What is PlatformTransactionManager?
173. What is TransactionTemplate?
174. What is declarative transaction management?
175. What is programmatic transaction management?

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
177. What are RESTful web services?
178. What are the HTTP methods used in REST?
179. What is the difference between PUT and POST?
180. What is the difference between PUT and PATCH?
181. What is idempotency in REST?
182. What are HTTP status codes?
183. What is the difference between 200 and 201 status codes?
184. What is 204 No Content status code?
185. What is 400 Bad Request status code?
186. What is 401 Unauthorized status code?
187. What is 403 Forbidden status code?
188. What is 404 Not Found status code?
189. What is 500 Internal Server Error status code?
190. What is @RestController annotation?
191. How do you return JSON response in Spring Boot?
192. What is Jackson library?
193. How do you customize JSON serialization?
194. What is @JsonProperty annotation?
195. What is @JsonIgnore annotation?
196. What is @JsonFormat annotation?
197. What is @JsonInclude annotation?
198. What is @JsonNaming annotation?
199. What is ResponseEntity class?
200. How do you set HTTP status code in response?
201. How do you set custom headers in response?
202. What is @ResponseStatus annotation?
203. What is content negotiation in Spring Boot?
204. How do you support XML responses in Spring Boot?
205. What is @Produces annotation?
206. What is @Consumes annotation?
207. How do you validate request body in Spring Boot?
208. What is @Valid annotation?
209. What is BindingResult?
210. How do you handle validation errors?
211. What is @NotNull annotation?
212. What is @NotEmpty annotation?
213. What is @NotBlank annotation?
214. What is @Size annotation?
215. What is @Min and @Max annotations?
216. What is @Email annotation?
217. What is @Pattern annotation?
218. How do you create custom validators?
219. What is ConstraintValidator interface?
220. What is HATEOAS?
221. What is spring-boot-starter-hateoas?
222. What is RepresentationModel class?
223. What is Link class?
224. How do you add links to REST responses?
225. What is HAL (Hypertext Application Language)?

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
227. What is @ExceptionHandler annotation?
228. What is @ControllerAdvice annotation?
229. What is @RestControllerAdvice annotation?
230. What is the difference between @ControllerAdvice and @RestControllerAdvice?
231. How do you handle global exceptions in Spring Boot?
232. What is ResponseEntityExceptionHandler?
233. How do you customize error responses?
234. What is ErrorController interface?
235. How do you handle 404 errors?
236. What is ProblemDetail class?
237. What is ErrorResponse interface?
238. How do you handle validation exceptions?
239. What is MethodArgumentNotValidException?
240. What is ConstraintViolationException?
241. What is HttpMessageNotReadableException?
242. What is HttpRequestMethodNotSupportedException?
243. How do you return custom error messages?
244. What is the default error page in Spring Boot?
245. How do you customize the default error page?
246. What is error.path property?
247. What is server.error.include-message property?
248. What is server.error.include-stacktrace property?
249. How do you log exceptions in Spring Boot?
250. What is @ResponseStatus annotation for exception classes?

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
252. What is spring-boot-starter-security?
253. What is authentication?
254. What is authorization?
255. What is the difference between authentication and authorization?
256. What is the default username and password in Spring Security?
257. How do you configure custom username and password?
258. What is SecurityFilterChain?
259. What is @EnableWebSecurity annotation?
260. What is HttpSecurity class?
261. How do you configure HTTP Basic authentication?
262. How do you configure form-based authentication?
263. What is CSRF (Cross-Site Request Forgery)?
264. How do you disable CSRF protection?
265. What is CORS (Cross-Origin Resource Sharing)?
266. How do you enable CORS in Spring Boot?
267. What is @CrossOrigin annotation?
268. What is JWT (JSON Web Token)?
269. How do you implement JWT authentication in Spring Boot?
270. What is OAuth2?
271. How do you implement OAuth2 in Spring Boot?
272. What is UserDetailsService interface?
273. What is UserDetails interface?
274. What is PasswordEncoder interface?
275. What is BCryptPasswordEncoder?

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
302. How do you create custom health indicators?
303. What is Spring Boot Admin?
304. How do you implement caching in Spring Boot?
305. What is @Cacheable annotation?
306. What is @CacheEvict annotation?
307. What is @CachePut annotation?
308. What cache providers does Spring Boot support?
309. How do you implement Redis caching?
310. What is Spring Data Redis?
311. How do you implement messaging in Spring Boot?
312. What is Spring Boot Starter for RabbitMQ?
313. What is Spring Boot Starter for Kafka?
314. How do you implement asynchronous processing?
315. What is @Async annotation?
316. How do you configure thread pool for async operations?
317. What is @EnableAsync annotation?
318. What is Spring Boot Starter for WebSocket?
319. How do you implement WebSocket communication?
320. What is STOMP protocol?
321. How do you implement scheduled tasks?
322. What is @Scheduled annotation?
323. What is @EnableScheduling annotation?
324. What are the different scheduling options in @Scheduled?
325. What is Spring Batch?
326. How do you implement batch processing in Spring Boot?
327. What is Spring Boot Starter for Mail?
328. How do you send emails in Spring Boot?
329. What is Spring Boot Starter for Thymeleaf?
330. How do you create server-side rendered pages?
331. What is reactive programming?
332. What is Spring WebFlux?
333. What's the difference between Spring MVC and Spring WebFlux?
334. What is Project Reactor?
335. What is Mono and Flux?
336. When should you use reactive programming?
337. What is backpressure in reactive streams?
338. How do you implement server-sent events (SSE)?
339. What is GraphQL?
340. How do you integrate GraphQL with Spring Boot?
341. What is Spring Boot Starter for AMQP?
342. How do you implement event-driven architecture?
343. What is Spring Cloud?
344. What is service discovery in microservices?
345. What is Eureka?
346. What is Spring Cloud Config Server?
347. What is API Gateway?
348. What is Spring Cloud Gateway?
349. What is circuit breaker pattern?
350. What is Spring Cloud Netflix?
351. What is Feign Client?
352. How do you implement inter-service communication?
353. What is distributed tracing?
354. What is Spring Cloud Sleuth?
355. What is Zipkin?
356. How do you implement distributed logging?
357. What is ELK stack?
358. How do you containerize Spring Boot application?
359. What is Docker?
360. How do you create a Dockerfile for Spring Boot?
361. What is Kubernetes?
362. How do you deploy Spring Boot to Kubernetes?
363. What are ConfigMaps in Kubernetes?
364. What are Secrets in Kubernetes?
365. What is Spring Cloud Kubernetes?
366. How do you implement health checks for Kubernetes?
367. What is liveness probe?
368. What is readiness probe?
369. How do you implement graceful shutdown?
370. What is Spring Boot's shutdown endpoint?
371. How do you monitor Spring Boot applications?
372. What is Prometheus?
373. How do you integrate Micrometer with Spring Boot?
374. What is Grafana?
375. How do you create custom metrics?
376. What is distributed caching?
377. What is Hazelcast?
378. How do you implement session clustering?
379. What is Spring Session?
380. How do you externalize session storage?
381. What is API rate limiting?
382. How do you implement throttling?
383. What is Spring Cloud Sleuth?
384. How do you implement request tracing?
385. What is correlation ID?
386. How do you implement request filtering?
387. What is OncePerRequestFilter?
388. How do you implement request/response modification?
389. What is HandlerInterceptor?
390. What's the difference between Filter and Interceptor?
391. How do you implement custom argument resolvers?
392. What is HandlerMethodArgumentResolver?
393. How do you implement custom message converters?
394. What is HttpMessageConverter?
395. How do you implement content negotiation?
396. What is Accept header?
397. How do you implement API documentation generation?
398. What are best practices for Spring Boot in production?
399. How do you optimize Spring Boot application performance?
400. What are common pitfalls in Spring Boot development?

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
402. What is connection pooling?
403. What is HikariCP?
404. How do you configure database connection pool?
405. What is lazy initialization in Spring Boot?
406. How do you enable lazy initialization?
407. What is the impact of lazy initialization on startup time?
408. How do you reduce Spring Boot application startup time?
409. What is GraalVM native image?
410. How do you create a native image of Spring Boot application?
411. What are the benefits of native images?
412. How do you optimize memory usage in Spring Boot?
413. What is heap dump analysis?
414. What tools can you use for memory profiling?
415. How do you identify memory leaks?
416. What is garbage collection tuning?
417. How do you optimize database queries for performance?
418. What is query caching?
419. How do you implement database indexing strategy?
420. What is connection leak detection?
421. How do you handle slow HTTP requests?
422. What is request timeout configuration?
423. How do you implement response compression?
424. What is GZIP compression?
425. How do you optimize JSON serialization performance?

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
427. What is JSR-380?
428. How do you create custom validation annotations?
429. What is @AssertTrue annotation?
430. What is @AssertFalse annotation?
431. What is @DecimalMin annotation?
432. What is @DecimalMax annotation?
433. What is @Digits annotation?
434. What is @Future annotation?
435. What is @Past annotation?
436. What is @FutureOrPresent annotation?
437. What is @PastOrPresent annotation?
438. What is @Positive annotation?
439. What is @PositiveOrZero annotation?
440. What is @Negative annotation?
441. What is @NegativeOrZero annotation?
442. What is @URL annotation?
443. How do you perform group validation?
444. What is validation groups?
445. How do you perform cross-field validation?
446. How do you validate nested objects?
447. What is @Valid vs @Validated?
448. How do you customize validation messages?
449. Where do you define validation messages?
450. What is ValidationMessages.properties?

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
452. What are the types of Dependency Injection?
453. What is constructor injection?
454. What is setter injection?
455. What is field injection?
456. Which type of injection is recommended and why?
457. What is @Autowired annotation?
458. What is @Inject annotation?
459. What is @Resource annotation?
460. What's the difference between @Autowired, @Inject, and @Resource?
461. What is @Qualifier annotation?
462. What is @Primary annotation?
463. What happens when multiple beans of same type exist?
464. What is NoUniqueBeanDefinitionException?
465. What is NoSuchBeanDefinitionException?
466. What is bean scope in Spring?
467. What is @Scope annotation?
468. What are the different bean scopes?
469. What is singleton scope?
470. What is prototype scope?
471. What is request scope?
472. What is session scope?
473. What is application scope?
474. What is @Bean annotation?
475. What is @Component annotation?

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
477. What are cross-cutting concerns?
478. What is an aspect in AOP?
479. What is a join point?
480. What is a pointcut?
481. What is advice in AOP?
482. What are the types of advice?
483. What is @Before advice?
484. What is @After advice?
485. What is @AfterReturning advice?
486. What is @AfterThrowing advice?
487. What is @Around advice?
488. What is @Aspect annotation?
489. What is @EnableAspectJAutoProxy annotation?
490. How do you define pointcut expressions?
491. What is execution pointcut?
492. What is within pointcut?
493. What is @annotation pointcut?
494. How do you implement logging using AOP?
495. How do you implement auditing using AOP?
496. How do you implement security using AOP?
497. How do you implement caching using AOP?
498. What is the difference between Spring AOP and AspectJ?
499. What are the limitations of Spring AOP?
500. How do you access method parameters in advice?

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

