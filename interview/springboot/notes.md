# Spring Boot Notes

## Table of Contents

### 1. [Spring Boot Basics](#1-spring-boot-basics)
   - [What is Spring Boot?](#what-is-spring-boot)
     - Key Features
     - Definition
   - [Why Use Spring Boot?](#why-use-spring-boot)
     - Simplified Configuration
     - Embedded Server
     - Starter Dependencies
     - Auto-Configuration
     - Production-Ready Features
     - Developer Productivity
   - [Spring vs Spring Boot](#spring-vs-spring-boot)
     - [Traditional Spring](#traditional-spring)
     - [Spring Boot](#spring-boot)
     - [Comparison Table](#comparison-table)
     - [When to Use What?](#when-to-use-what)
   - [Starter Dependencies](#starter-dependencies)
     - [Common Starters](#common-starters)
     - [Complete Starter List](#complete-starter-list)
     - [Complete pom.xml Example](#complete-pomxml-example)
   - [Auto-configuration](#auto-configuration)
     - [How It Works](#how-auto-configuration-works)
     - [Examples](#auto-configuration-examples)
     - [Viewing Auto-configurations](#viewing-auto-configurations)
     - [Disabling Auto-configuration](#disabling-auto-configuration)
     - [Custom Auto-configuration](#custom-auto-configuration)
   - [Properties & YAML Files](#properties--yaml-files)
     - [application.properties](#applicationproperties)
     - [application.yml](#applicationyml)
     - [Properties vs YAML](#properties-vs-yaml)
     - [Reading Properties in Code](#reading-properties-in-code)
     - [Property Sources Priority](#property-sources-priority)
   - [Profiles](#profiles)
     - [Creating Profiles](#creating-profiles)
     - [Single YAML with Profiles](#single-yaml-file-with-profiles)
     - [Activating Profiles](#activating-profiles)
     - [Profile-Specific Beans](#profile-specific-beans)
     - [Checking Active Profile](#checking-active-profile)
   - [Embedded Servers](#embedded-servers)
     - [Tomcat (Default)](#tomcat-default)
     - [Jetty](#jetty)
     - [Undertow](#undertow)
     - [Netty (Reactive)](#netty-for-reactive)
     - [Server Configuration](#server-configuration)
     - [Customizing Server](#customizing-embedded-server)
   - [Running Spring Boot Application](#running-spring-boot-application)
     - [Using Maven](#1-using-maven)
     - [Using Gradle](#2-using-gradle)
     - [IDE](#3-ide)
     - [Docker](#4-docker)
   - [Spring Boot DevTools](#spring-boot-devtools)
   - [Summary](#summary)

### 2. [Core Annotations](#2-core-annotations)
   - [@SpringBootApplication](#springbootapplication)
     - [What it Does](#what-it-does)
     - [Individual Components](#individual-components)
     - [Customizing @SpringBootApplication](#customizing-springbootapplication)
     - [Application Startup](#application-startup-customization)
   - [Stereotype Annotations](#stereotype-annotations)
     - [@Component](#component)
     - [@Service](#service)
     - [@Repository](#repository)
     - [Stereotype Hierarchy](#stereotype-hierarchy)
   - [@Controller vs @RestController](#controller-vs-restcontroller)
     - [@Controller](#controller)
     - [@RestController](#restcontroller)
     - [Comparison](#comparison)
   - [@Autowired vs Constructor Injection](#autowired-vs-constructor-injection)
     - [Field Injection](#autowired-field-injection)
     - [Constructor Injection](#constructor-injection-recommended)
     - [Lombok @RequiredArgsConstructor](#lombok-requiredargsconstructor)
     - [Setter Injection](#setter-injection)
     - [Injection Comparison](#injection-comparison)
   - [@Configuration and @Bean](#configuration-and-bean)
     - [@Configuration](#configuration)
     - [@Bean](#bean)
     - [Bean Naming](#bean-naming)
     - [Bean Lifecycle](#bean-lifecycle)
     - [Bean Scope](#bean-scope)
     - [Conditional Beans](#conditional-beans)
   - [@Value](#value)
     - [Basic Usage](#basic-usage)
     - [Default Values](#default-values)
     - [Lists and Arrays](#lists-and-arrays)
     - [SpEL](#spel-spring-expression-language)
     - [Limitations](#limitations-of-value)
   - [@ConfigurationProperties](#configurationproperties)
     - [Basic Usage](#basic-usage-1)
     - [With Lists and Maps](#with-lists-and-maps)
     - [Validation](#validation-with-configurationproperties)
     - [Enabling](#enabling-configurationproperties)
     - [Comparison](#value-vs-configurationproperties)
   - [Additional Important Annotations](#additional-important-annotations)
     - [@Qualifier](#qualifier)
     - [@Primary](#primary)
     - [@Lazy](#lazy)
     - [@DependsOn](#dependson)
   - [Summary](#summary-1)

### 3. [Building REST APIs](#3-building-rest-apis)
   - [HTTP Method Annotations](#http-method-annotations)
     - [@GetMapping](#getmapping)
     - [@PostMapping](#postmapping)
     - [@PutMapping](#putmapping)
     - [@PatchMapping](#patchmapping)
     - [@DeleteMapping](#deletemapping)
     - [@RequestMapping](#requestmapping)
     - [HTTP Status Codes](#http-status-codes)
   - [Request/Response Models (DTOs)](#requestresponse-models-dtos)
     - [Why Use DTOs?](#why-use-dtos)
     - [Entity vs DTO](#entity-vs-dto)
     - [Complete CRUD with DTOs](#complete-crud-with-dtos)
     - [DTO Conversion (Mapper)](#dto-conversion-mapper)
     - [Nested DTOs](#nested-dtos)
   - [Validation](#validation)
     - [Common Validation Annotations](#common-validation-annotations)
     - [Custom Validation Annotation](#custom-validation-annotation)
     - [Using @Valid in Controller](#using-valid-in-controller)
     - [Nested Object Validation](#nested-object-validation)
     - [Validation Groups](#validation-groups)
   - [Exception Handling](#exception-handling)
     - [@ControllerAdvice](#controlleradvice)
     - [Error Response DTOs](#error-response-dtos)
     - [Custom Exceptions](#custom-exceptions)
     - [@ExceptionHandler with WebRequest](#exceptionhandler-with-webrequest)
   - [Path Variables & Query Parameters](#path-variables--query-parameters)
   - [Request Headers](#request-headers)
   - [Response Status & Headers](#response-status--headers)
   - [Content Negotiation](#content-negotiation)
   - [API Versioning](#api-versioning)
   - [HATEOAS](#hateoas-hypermedia-as-the-engine-of-application-state)
   - [Pagination & Sorting](#pagination--sorting)
   - [API Documentation (Swagger/OpenAPI)](#api-documentation-swaggeropenapi)

### 4. [Spring Web & MVC](#4-spring-web--mvc)
   - [Spring MVC Architecture](#spring-mvc-architecture)
   - [DispatcherServlet](#dispatcherservlet)
   - [Controllers](#controllers)
   - [View Resolvers](#view-resolvers)
   - [Thymeleaf Integration](#thymeleaf-integration)
   - [Form Handling](#form-handling)
   - [File Upload and Download](#file-upload-and-download)
   - [Interceptors](#interceptors)
   - [Filters](#filters)
   - [CORS Configuration](#cors-configuration)
   - [Exception Handling](#exception-handling-1)
   - [Static Resources](#static-resources)
   - [WebJars](#webjars)

### 5. [Spring Data JPA](#5-spring-data-jpa)
   - [What is Spring Data JPA?](#what-is-spring-data-jpa)
   - [Entity Relationships](#entity-relationships)
     - [@OneToOne](#onetoone)
     - [@OneToMany & @ManyToOne](#onetomany--manytoone)
     - [@ManyToMany](#manytomany)
     - [Cascade Types](#cascade-types)
     - [Fetch Types](#fetch-types)
   - [Repository Interfaces](#repository-interfaces)
     - [JpaRepository](#jparepository)
     - [CrudRepository](#crudrepository)
     - [PagingAndSortingRepository](#pagingandsortingrepository)
   - [Query Methods](#query-methods)
     - [Derived Query Methods](#derived-query-methods)
     - [Method Naming Convention](#method-naming-convention)
   - [Custom Queries](#custom-queries)
     - [@Query Annotation](#query-annotation)
     - [JPQL Queries](#jpql-queries)
     - [Native Queries](#native-queries)
     - [@Modifying Queries](#modifying-queries)
   - [Pagination and Sorting](#pagination-and-sorting)
     - [Pageable](#pageable)
     - [Sort](#sort)
     - [Page vs Slice](#page-vs-slice)
   - [Specifications](#specifications)
     - [JPA Specifications](#jpa-specifications)
     - [Dynamic Queries](#dynamic-queries)
   - [Projections](#projections)
   - [Auditing](#auditing)
     - [Enable Auditing](#enable-auditing)
     - [Audit Annotations](#audit-annotations)
   - [Transactions](#transactions)
     - [@Transactional](#transactional)
     - [Transaction Propagation](#transaction-propagation)
     - [Transaction Isolation](#transaction-isolation)
     - [Read-Only Transactions](#read-only-transactions)

### 6. [Database Topics](#6-database-topics)
   - [Database Integration](#database-integration)
     - [H2 Database (In-Memory)](#h2-database-in-memory)
     - [MySQL Integration](#mysql-integration)
     - [PostgreSQL Integration](#postgresql-integration)
     - [DDL-Auto Options](#ddl-auto-options)
   - [Database Migrations](#database-migrations)
     - [Flyway](#flyway)
     - [Liquibase](#liquibase)
     - [Flyway vs Liquibase](#flyway-vs-liquibase)
   - [Connection Pooling (HikariCP)](#connection-pooling-hikaricp)
     - [Auto-Configuration](#auto-configuration-1)
     - [Programmatic Configuration](#programmatic-configuration)
     - [Connection Pool Sizing](#connection-pool-sizing)
     - [Monitoring Connection Pool](#monitoring-connection-pool)
     - [Alternative: Tomcat JDBC Pool](#alternative-tomcat-jdbc-pool)
   - [Query Optimization](#query-optimization)
     - [N+1 Problem](#n1-problem)
     - [Entity Graph](#entity-graph)
     - [Projection (Select Specific Fields)](#projection-select-specific-fields)
     - [Batch Processing](#batch-processing)
     - [Query Hints](#query-hints)
   - [Indexing & Performance Tuning](#indexing--performance-tuning)
     - [Creating Indexes](#creating-indexes)
     - [Index in Migrations (Flyway)](#index-in-migrations-flyway)
     - [Performance Tuning Tips](#performance-tuning-tips)
     - [Query Performance Analysis](#query-performance-analysis)
     - [Database Profiling](#database-profiling)
   - [Multi-Database Configuration](#multi-database-configuration)
     - [Multiple DataSources](#multiple-datasources)
   - [Summary](#summary-2)

### 7. [Security](#7-security)
   - [Spring Security Basics](#spring-security-basics)
     - [Setup](#setup)
     - [Basic Security Configuration](#basic-security-configuration)
     - [Disabling Security](#disabling-security-for-testing)
   - [Authentication & Authorization](#authentication--authorization)
     - [Authentication](#authentication)
     - [Authorization](#authorization)
     - [UserDetails and UserDetailsService](#userdetails-and-userdetailsservice)
   - [Password Encoding](#password-encoding)
     - [BCrypt Password Encoder](#bcrypt-password-encoder)
     - [Encoding and Verification](#encoding-and-verification)
     - [Available Password Encoders](#available-password-encoders)
   - [JWT Authentication](#jwt-authentication-most-important)
     - [Dependencies](#dependencies-1)
     - [JWT Configuration](#jwt-configuration)
     - [JWT Utility Class](#jwt-utility-class)
     - [JWT Authentication Filter](#jwt-authentication-filter)
     - [Authentication Controller](#authentication-controller)
     - [Security Configuration](#security-configuration-with-jwt)
     - [Testing JWT Endpoints](#testing-jwt-endpoints)
   - [Role-Based Access Control](#role-based-access-control)
     - [Using Roles and Authorities](#using-roles-and-authorities)
     - [URL-Based Authorization](#url-based-authorization)
     - [hasRole vs hasAuthority](#hasrole-vs-hasauthority)
   - [Method-Level Security](#method-level-security)
     - [@PreAuthorize](#preauthorize)
     - [@PostAuthorize](#postauthorize)
     - [@Secured](#secured)
     - [Custom Security Expression](#custom-security-expression)
   - [OAuth2 Integration](#oauth2-integration)
     - [Google OAuth2](#google-oauth2)
     - [GitHub OAuth2](#github-oauth2)
   - [CORS Configuration](#cors-configuration-1)
   - [CSRF Protection](#csrf-protection)
   - [Remember Me](#remember-me)
   - [Logout Configuration](#logout-configuration)
   - [Summary](#summary-3)

### 8. [Spring Boot + Microservices](#8-spring-boot--microservices)
   - [Microservices Architecture](#microservices-architecture)
     - [Monolith vs Microservices](#monolith-vs-microservices)
     - [Microservices Benefits](#microservices-benefits)
     - [Microservices Challenges](#microservices-challenges)
   - [Service Discovery (Eureka)](#service-discovery-eureka)
     - [Eureka Server](#eureka-server)
     - [Eureka Client](#eureka-client)
     - [Service Registration](#service-registration)
   - [API Gateway (Spring Cloud Gateway)](#api-gateway-spring-cloud-gateway)
     - [Setup](#setup-1)
     - [Route Configuration](#route-configuration)
     - [Filters](#filters)
     - [Predicates](#predicates)
   - [Load Balancing](#load-balancing)
     - [Client-Side Load Balancing](#client-side-load-balancing)
     - [Load Balancer Configuration](#load-balancer-configuration)
   - [Circuit Breaker (Resilience4j)](#circuit-breaker-resilience4j)
     - [Circuit Breaker Pattern](#circuit-breaker-pattern)
     - [Configuration](#configuration)
     - [Fallback Methods](#fallback-methods)
   - [Distributed Tracing (Sleuth & Zipkin)](#distributed-tracing-sleuth--zipkin)
     - [Sleuth Setup](#sleuth-setup)
     - [Zipkin Integration](#zipkin-integration)
   - [Centralized Configuration](#centralized-configuration-spring-cloud-config)
     - [Config Server](#config-server)
     - [Config Client](#config-client)
   - [Inter-Service Communication](#inter-service-communication)
     - [RestTemplate](#resttemplate)
     - [WebClient](#webclient)
     - [OpenFeign](#openfeign)
   - [Complete Microservices Example](#complete-microservices-example)
   - [Summary](#summary-4)

### 9. [Messaging](#9-messaging)
   - [RabbitMQ](#rabbitmq)
     - [Setup](#setup-2)
     - [Configuration](#configuration-1)
     - [Producing Messages](#producing-messages)
     - [Consuming Messages](#consuming-messages)
     - [Message Converter](#message-converter)
     - [Exchange Types](#exchange-types)
   - [Apache Kafka](#apache-kafka)
     - [Setup](#setup-3)
     - [Configuration](#configuration-2)
     - [Producer](#producer)
     - [Consumer](#consumer)
     - [Consumer Groups](#consumer-groups)
     - [Kafka Streams](#kafka-streams)
   - [Event-Driven Architecture](#event-driven-architecture)
     - [Events and Handlers](#events-and-handlers)
     - [Event Publishing](#event-publishing)
     - [Event Listening](#event-listening)
   - [RabbitMQ vs Kafka](#rabbitmq-vs-kafka)
   - [Summary](#summary-5)

### 10. [Caching](#10-caching)
   - [Caching Strategies](#caching-strategies)
     - [Cache-Aside](#cache-aside)
     - [Read-Through](#read-through)
     - [Write-Through](#write-through)
     - [Write-Behind](#write-behind)
   - [Spring Cache Abstraction](#spring-cache-abstraction)
     - [Enable Caching](#enable-caching)
     - [Cache Provider](#cache-provider)
   - [Cache Annotations](#cache-annotations)
     - [@Cacheable](#cacheable)
     - [@CachePut](#cacheput)
     - [@CacheEvict](#cacheevict)
     - [@Caching](#caching)
     - [Custom Cache Key](#custom-cache-key)
   - [Redis Cache](#redis-cache)
     - [Setup](#setup-4)
     - [Configuration](#configuration-3)
     - [Redis Operations](#redis-operations)
     - [Redis Repository](#redis-repository)
   - [Caffeine Cache](#caffeine-cache)
     - [Setup](#setup-5)
     - [Configuration](#configuration-4)
   - [Cache Invalidation Strategies](#cache-invalidation-strategies)
     - [Time-Based Invalidation](#time-based-invalidation-ttl)
     - [Event-Based Invalidation](#event-based-invalidation)
     - [Scheduled Invalidation](#scheduled-invalidation)
     - [Manual Invalidation](#manual-invalidation)
     - [Cache Refresh Strategy](#cache-refresh-strategy)
   - [Caching Best Practices](#caching-best-practices)
   - [Summary](#summary-6)

### 11. [Testing](#11-testing)
   - [Testing Pyramid](#testing-pyramid)
   - [JUnit 5](#junit-5)
     - [Setup](#setup-6)
     - [Basic Unit Test](#basic-unit-test)
     - [Assertions](#assertions)
     - [Lifecycle Annotations](#lifecycle-annotations)
     - [Conditional Tests](#conditional-tests)
     - [Parameterized Tests](#parameterized-tests)
   - [Mockito](#mockito)
     - [Creating Mocks](#creating-mocks)
     - [Stubbing](#stubbing)
     - [Argument Matchers](#argument-matchers)
     - [Verifying Interactions](#verifying-interactions)
     - [@Mock, @InjectMocks, @Spy](#mock-injectmocks-spy)
   - [Spring Boot Test Slices](#spring-boot-test-slices)
     - [@SpringBootTest](#springboottest)
     - [@WebMvcTest](#webmvctest)
     - [@DataJpaTest](#datajpatest)
     - [@RestClientTest](#restclienttest)
     - [@JsonTest](#jsontest)
   - [Testcontainers](#testcontainers)
     - [Setup](#setup-7)
     - [Database Containers](#database-containers)
     - [Multiple Containers](#multiple-containers)
   - [Integration Testing](#integration-testing)
     - [Complete Integration Tests](#complete-integration-tests)
     - [Test Data Management](#test-data-management)
   - [Advanced Testing Techniques](#advanced-testing-techniques)
     - [Testing Security](#testing-security)
     - [Testing Async Methods](#testing-async-methods)
     - [Testing WebClient](#testing-webclient)
   - [Test Configuration](#test-configuration)
   - [Summary](#summary-7)

### 12. [Deployment & DevOps](#12-deployment--devops)
   - [Dockerizing Spring Boot](#dockerizing-spring-boot)
     - [Dockerfile](#dockerfile)
     - [Multi-Stage Build](#multi-stage-build)
     - [Docker Image Optimization](#docker-image-optimization)
   - [Docker Compose](#docker-compose)
     - [Basic Setup](#basic-setup)
     - [Multi-Service Setup](#multi-service-setup)
     - [Environment Variables](#environment-variables)
     - [Volumes & Networks](#volumes--networks)
   - [CI/CD with GitHub Actions](#cicd-with-github-actions)
     - [Workflow Configuration](#workflow-configuration)
     - [Build & Test](#build--test)
     - [Docker Build & Push](#docker-build--push)
   - [Externalized Configuration](#externalized-configuration)
     - [Environment Variables](#environment-variables-1)
     - [Config Files](#config-files)
     - [Secrets Management](#secrets-management)
   - [Logging (SLF4J & Logback)](#logging-slf4j--logback)
     - [Logging Configuration](#logging-configuration)
     - [Log Levels](#log-levels)
     - [Appenders](#appenders)
     - [MDC (Mapped Diagnostic Context)](#mdc-mapped-diagnostic-context)
     - [Structured Logging](#structured-logging-1)
   - [Spring Boot Actuator](#spring-boot-actuator)
     - [Setup](#setup-8)
     - [Built-in Endpoints](#built-in-endpoints)
     - [Custom Health Indicators](#custom-health-indicators-1)
     - [Custom Metrics](#custom-metrics-1)
     - [Securing Actuator](#securing-actuator)
   - [Production Deployment Checklist](#production-deployment-checklist)
   - [Complete Deployment Example](#complete-deployment-example)
   - [Summary](#summary-8)

### 13. [Advanced Concepts](#13-advanced-concepts)
   - [AOP (Aspect-Oriented Programming)](#aop-aspect-oriented-programming)
     - [What is AOP?](#what-is-aop)
     - [Key Concepts](#key-concepts)
     - [Types of Advice](#types-of-advice)
     - [Setup AOP](#setup-aop)
     - [Logging Aspect](#logging-aspect-example)
     - [Performance Monitoring](#performance-monitoring-aspect)
     - [Security Aspect](#security-aspect)
     - [Pointcut Expressions](#pointcut-expressions)
     - [Transaction Management](#transaction-management-with-aop)
     - [Cache Management](#cache-management-aspect)
   - [Custom Annotations](#custom-annotations)
     - [Why Create Custom Annotations?](#why-create-custom-annotations)
     - [Creating Custom Annotations](#creating-custom-annotations)
     - [Simple Custom Annotation](#simple-custom-annotation)
     - [Custom Validation Annotation](#custom-validation-annotation)
     - [Rate Limiting Annotation](#rate-limiting-annotation)
     - [Retry Annotation](#retry-annotation)
     - [API Versioning Annotation](#api-versioning-annotation)
     - [Audit Log Annotation](#audit-log-annotation)
     - [Cache Annotation](#cache-annotation)
     - [Permission Annotation](#permission-annotation)
   - [Schedulers (@Scheduled)](#schedulers-scheduled)
     - [Enable Scheduling](#enable-scheduling)
     - [Fixed Rate Scheduling](#fixed-rate-scheduling)
     - [Fixed Delay Scheduling](#fixed-delay-scheduling)
     - [Cron Expressions](#cron-expressions)
     - [Configurable Scheduling](#configurable-scheduling)
     - [Conditional Scheduling](#conditional-scheduling)
     - [Async Scheduling](#async-scheduling)
     - [Real-World Examples](#real-world-examples)
     - [Dynamic Scheduling](#dynamic-scheduling)
     - [Scheduler Configuration](#scheduler-configuration)
   - [Async Programming (@Async)](#async-programming-async)
     - [Enable Async](#enable-async)
     - [Basic Async Method](#basic-async-method)
     - [Async with Return Value](#async-with-return-value-future)
     - [Async with CompletableFuture](#async-with-completablefuture)
     - [Async Configuration](#async-configuration)
     - [Multiple Async Executors](#multiple-async-executors)
     - [Real-World Examples](#real-world-examples-1)
     - [Async Best Practices](#async-best-practices)
   - [WebFlux (Reactive Programming)](#webflux-reactive-programming)
     - [What is Spring WebFlux?](#what-is-spring-webflux)
     - [Key Concepts](#key-concepts-1)
     - [Setup WebFlux](#setup-webflux)
     - [Mono vs Flux](#mono-vs-flux)
     - [Reactive Controller](#reactive-controller)
     - [Reactive Repository](#reactive-repository)
     - [Reactive Service](#reactive-service)
     - [Reactive Operators](#reactive-operators)
     - [Error Handling](#error-handling)
     - [WebClient (Reactive HTTP Client)](#webclient-reactive-http-client)
     - [WebFlux Configuration](#webflux-configuration)
     - [Functional Endpoints](#functional-endpoints-handler)
     - [Testing Reactive Code](#testing-reactive-code)
     - [When to Use WebFlux?](#when-to-use-webflux)
   - [GraphQL with Spring Boot](#graphql-with-spring-boot)
     - [What is GraphQL?](#what-is-graphql)
     - [Setup GraphQL](#setup-graphql)
     - [Define Schema](#define-schema)
     - [Entity Classes](#entity-classes)
     - [Query Resolver](#query-resolver)
     - [Mutation Resolver](#mutation-resolver)
     - [Field Resolver](#field-resolver-for-nested-fields)
     - [Input Classes](#input-classes)
     - [GraphQL Queries](#graphql-queries-client-side)
     - [Error Handling](#error-handling-1)
     - [DataLoader](#dataloader-n1-problem-solution)
     - [Pagination](#pagination)
     - [Security](#security)
   - [Multi-Module Maven Projects](#multi-module-maven-projects)
     - [What are Multi-Module Projects?](#what-are-multi-module-projects)
     - [Project Structure](#project-structure-1)
     - [Parent POM (Root)](#parent-pom-root)
     - [Common Module](#common-module)
     - [Domain Module](#domain-module)
     - [Repository Module](#repository-module)
     - [Service Module](#service-module)
     - [Web Module](#web-module)
     - [Building Multi-Module Project](#building-multi-module-project)
     - [Module Dependencies](#module-dependencies)
     - [Best Practices](#best-practices)
     - [Benefits](#benefits)
     - [Common Pitfalls](#common-pitfalls)

### 14. [Performance & Scaling](#14-performance--scaling)
   - [Health Checks & Metrics](#health-checks--metrics)
     - [Spring Boot Actuator](#spring-boot-actuator-1)
     - [Built-in Health Indicators](#built-in-health-indicators)
     - [Custom Health Indicator](#custom-health-indicator)
     - [External Service Health Check](#external-service-health-check)
     - [Disk Space Health Check](#disk-space-health-check)
     - [Composite Health Indicator](#composite-health-indicator)
     - [Custom Metrics](#custom-metrics)
     - [Custom Metrics with Tags](#custom-metrics-with-tags)
     - [Monitoring with AOP](#monitoring-with-aop)
     - [Prometheus Integration](#prometheus-integration)
   - [Thread Pool Tuning](#thread-pool-tuning)
     - [Tomcat Thread Pool Configuration](#tomcat-thread-pool-configuration)
     - [Async Task Executor](#async-task-executor)
     - [Scheduled Task Executor](#scheduled-task-executor)
     - [WebFlux Thread Pool](#webflux-thread-pool)
     - [Thread Pool Monitoring](#thread-pool-monitoring)
     - [Best Practices for Thread Pool Sizing](#best-practices-for-thread-pool-sizing)
   - [Connection Pool Tuning](#connection-pool-tuning)
     - [HikariCP Configuration](#hikaricp-configuration-default-in-spring-boot)
     - [Connection Pool Monitoring](#connection-pool-monitoring)
     - [Redis Connection Pool](#redis-connection-pool)
     - [MongoDB Connection Pool](#mongodb-connection-pool)
     - [Connection Pool Best Practices](#connection-pool-best-practices)
   - [Distributed Caching](#distributed-caching)
     - [Redis Cache Configuration](#redis-cache-configuration)
     - [Using Cache Annotations](#using-cache-annotations)
     - [Manual Cache Operations](#manual-cache-operations)
     - [Cache Warming](#cache-warming)
     - [Redis Pub/Sub for Cache Invalidation](#redis-pubsub-for-cache-invalidation)
     - [Hazelcast Distributed Cache](#hazelcast-distributed-cache)
     - [Cache Monitoring](#cache-monitoring)
   - [API Rate Limiting](#api-rate-limiting)
     - [Bucket4j Implementation](#bucket4j-implementation)
     - [Rate Limiter Configuration](#rate-limiter-configuration)
     - [Rate Limit Service](#rate-limit-service)
     - [Rate Limit Interceptor](#rate-limit-interceptor)
     - [Custom Rate Limit Annotation](#custom-rate-limit-annotation)
     - [Redis-based Rate Limiting](#redis-based-rate-limiting)
     - [Sliding Window Rate Limiter](#sliding-window-rate-limiter)
   - [Horizontal Scaling Patterns](#horizontal-scaling-patterns)
     - [Stateless Application Design](#stateless-application-design)
     - [Session Management with Redis](#session-management-with-redis)
     - [Load Balancer Configuration](#load-balancer-configuration)
     - [Service Discovery with Eureka](#service-discovery-with-eureka)
     - [Database Scaling Patterns](#database-scaling-patterns)
     - [Kubernetes Deployment](#kubernetes-deployment-1)
     - [Health Endpoints for Kubernetes](#health-endpoints-for-kubernetes)
     - [Circuit Breaker with Resilience4j](#circuit-breaker-with-resilience4j)

### 15. [Real-World Integrations](#15-real-world-integrations)
   - [JWT + Refresh Token](#jwt--refresh-token)
     - [Dependencies](#dependencies)
     - [Configuration](#configuration)
     - [JWT Token Provider](#jwt-token-provider)
     - [Refresh Token Entity](#refresh-token-entity)
     - [Refresh Token Repository](#refresh-token-repository)
     - [Refresh Token Service](#refresh-token-service)
     - [Authentication Service](#authentication-service)
     - [Authentication Controller](#authentication-controller)
     - [JWT Authentication Filter](#jwt-authentication-filter)
     - [DTOs](#dtos)
     - [Cleanup Expired Tokens](#cleanup-expired-tokens)
   - [Cloud Storage (AWS S3)](#cloud-storage-aws-s3)
     - [Dependencies](#dependencies-1)
     - [Configuration](#configuration-1)
     - [S3 Configuration](#s3-configuration)
     - [S3 Service](#s3-service)
     - [File Upload Controller](#file-upload-controller)
   - [Email Sending (SMTP)](#email-sending-smtp)
     - [Dependencies](#dependencies-2)
     - [Configuration](#configuration-2)
     - [Email Service](#email-service)
     - [Async Email Service](#async-email-service)
     - [Email Templates](#email-templates)
     - [Email Configuration for Async](#email-configuration-for-async)
   - [Payment Integration (Stripe Basics)](#payment-integration-stripe-basics)
     - [Dependencies](#dependencies-3)
     - [Configuration](#configuration-3)
     - [Stripe Configuration](#stripe-configuration)
     - [Payment Service](#payment-service)
     - [Payment Controller](#payment-controller)
   - [PDF Generation](#pdf-generation)
     - [Dependencies](#dependencies-4)
     - [PDF Service with iText](#pdf-service-with-itext)
     - [PDF Controller](#pdf-controller)
   - [Excel Generation](#excel-generation)
     - [Dependencies](#dependencies-5)
     - [Excel Service](#excel-service)
     - [Excel Controller](#excel-controller)
   - [SMS/OTP Service](#smsotp-service)
     - [Dependencies](#dependencies-6)
     - [Configuration](#configuration-4)
     - [Twilio Configuration](#twilio-configuration)
     - [OTP Entity](#otp-entity)
     - [OTP Repository](#otp-repository)
     - [SMS Service](#sms-service)
     - [OTP Service](#otp-service)
     - [OTP Controller](#otp-controller)
     - [Two-Factor Authentication Example](#two-factor-authentication-example)

---

## 1. Spring Boot Basics

### What is Spring Boot?

Spring Boot is an **opinionated framework** built on top of the Spring Framework that simplifies the development of production-ready Spring applications.

**Key Features:**
- **Auto-configuration**: Automatically configures Spring application based on dependencies
- **Standalone**: Creates stand-alone applications with embedded servers
- **Production-ready**: Built-in metrics, health checks, and externalized configuration
- **No XML**: Minimal or no XML configuration required
- **Quick start**: Get applications up and running quickly

**Definition:**
> Spring Boot makes it easy to create stand-alone, production-grade Spring-based applications that you can "just run".

### Why Use Spring Boot?

#### 1. Simplified Configuration
```java
// Traditional Spring (lots of XML)
<bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource">
    <property name="driverClassName" value="com.mysql.jdbc.Driver"/>
    <property name="url" value="jdbc:mysql://localhost:3306/mydb"/>
    <property name="username" value="root"/>
    <property name="password" value="password"/>
</bean>

// Spring Boot (simple properties)
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
```

#### 2. Embedded Server
```java
// Traditional: Deploy WAR to external Tomcat server
// Spring Boot: Run directly with embedded server
public static void main(String[] args) {
    SpringApplication.run(MyApplication.class, args);
}
// java -jar myapp.jar (server included!)
```

#### 3. Starter Dependencies
```xml
<!-- Instead of managing 10+ dependencies -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<!-- Includes: Spring MVC, Jackson, Tomcat, etc. -->
```

#### 4. Auto-Configuration
```java
// Spring Boot automatically configures:
// - DataSource if database driver found
// - JPA if spring-boot-starter-data-jpa included
// - Security if spring-boot-starter-security included
// No manual configuration needed!
```

#### 5. Production-Ready Features
```java
// Built-in actuator endpoints
// /actuator/health - Health check
// /actuator/metrics - Application metrics
// /actuator/info - Application info
```

#### 6. Developer Productivity
- Fast development cycle
- Live reload with DevTools
- Minimal boilerplate code
- Convention over configuration
- Extensive documentation

---

## Spring vs Spring Boot

### Traditional Spring

```java
// 1. Lots of configuration (XML or Java Config)
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.example")
public class WebConfig implements WebMvcConfigurer {
    
    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/mydb");
        dataSource.setUsername("root");
        dataSource.setPassword("password");
        return dataSource;
    }
    
    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(dataSource());
        em.setPackagesToScan("com.example.model");
        // ... more configuration
        return em;
    }
    
    @Bean
    public PlatformTransactionManager transactionManager() {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());
        return transactionManager;
    }
    
    // ... more beans and configuration
}

// 2. Deploy to external server
// Build WAR file
// Configure server (Tomcat, Jetty)
// Deploy WAR to server

// 3. Manual dependency management
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>5.3.20</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.3.20</version>
</dependency>
<!-- ... many more -->
```

### Spring Boot

```java
// 1. Minimal configuration
@SpringBootApplication  // That's it!
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}

// application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update

// 2. Run directly (embedded server)
// mvn spring-boot:run
// or
// java -jar myapp.jar

// 3. Starter dependencies
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

### Comparison Table

| Feature | Spring Framework | Spring Boot |
|---------|-----------------|-------------|
| **Configuration** | XML or extensive Java config | Minimal, auto-configuration |
| **Deployment** | External server (WAR) | Embedded server (JAR) |
| **Dependencies** | Manual management | Starter POMs |
| **Setup Time** | Hours/Days | Minutes |
| **Boilerplate** | High | Low |
| **Production Features** | Manual setup | Built-in (Actuator) |
| **Learning Curve** | Steeper | Easier |
| **Use Case** | Legacy applications | New applications, microservices |

### When to Use What?

**Use Spring Framework:**
- Legacy applications
- Need fine-grained control
- Complex custom configurations
- Integration with existing infrastructure

**Use Spring Boot:**
- New applications
- Microservices
- REST APIs
- Quick prototypes
- Standard configurations
- Modern applications

---

## Starter Dependencies

Starter dependencies are pre-configured dependency descriptors that include all related dependencies.

### Common Starters

#### 1. spring-boot-starter-web

**Purpose:** Build web applications, REST APIs

**Includes:**
- Spring MVC
- Tomcat (embedded server)
- Jackson (JSON serialization)
- Validation API
- Logging

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

#### 2. spring-boot-starter-data-jpa

**Purpose:** JPA with Hibernate

**Includes:**
- Spring Data JPA
- Hibernate
- JDBC
- Transaction API

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

#### 3. spring-boot-starter-security

**Purpose:** Authentication and authorization

**Includes:**
- Spring Security
- Default login page
- Basic authentication

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

#### 4. spring-boot-starter-test

**Purpose:** Testing support

**Includes:**
- JUnit 5
- Mockito
- AssertJ
- Spring Test

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
```

#### 5. spring-boot-starter-validation

**Purpose:** Bean validation

**Includes:**
- Hibernate Validator
- Jakarta Bean Validation

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

#### 6. spring-boot-starter-actuator

**Purpose:** Production monitoring

**Includes:**
- Health endpoints
- Metrics
- Info endpoints

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

### Complete Starter List

```xml
<!-- Web Applications -->
spring-boot-starter-web          <!-- REST APIs, MVC -->
spring-boot-starter-webflux      <!-- Reactive web -->
spring-boot-starter-thymeleaf    <!-- Thymeleaf templates -->

<!-- Data Access -->
spring-boot-starter-data-jpa     <!-- JPA/Hibernate -->
spring-boot-starter-data-mongodb <!-- MongoDB -->
spring-boot-starter-data-redis   <!-- Redis -->
spring-boot-starter-jdbc         <!-- JDBC -->

<!-- Security -->
spring-boot-starter-security     <!-- Spring Security -->
spring-boot-starter-oauth2-client <!-- OAuth2 client -->

<!-- Testing -->
spring-boot-starter-test         <!-- Testing frameworks -->

<!-- Messaging -->
spring-boot-starter-amqp         <!-- RabbitMQ -->
spring-boot-starter-kafka        <!-- Apache Kafka -->

<!-- Cloud -->
spring-boot-starter-cloud-connectors

<!-- Monitoring -->
spring-boot-starter-actuator     <!-- Production monitoring -->

<!-- Others -->
spring-boot-starter-mail         <!-- Email support -->
spring-boot-starter-cache        <!-- Caching -->
spring-boot-starter-aop          <!-- AOP -->
spring-boot-starter-validation   <!-- Validation -->
spring-boot-starter-logging      <!-- Logging -->
```

### Complete pom.xml Example

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <!-- Spring Boot parent -->
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
        <relativePath/>
    </parent>
    
    <groupId>com.example</groupId>
    <artifactId>myapp</artifactId>
    <version>1.0.0</version>
    <name>My Application</name>
    <description>Spring Boot Application</description>
    
    <properties>
        <java.version>17</java.version>
    </properties>
    
    <dependencies>
        <!-- Web -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        
        <!-- JPA -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        
        <!-- MySQL -->
        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
            <scope>runtime</scope>
        </dependency>
        
        <!-- Validation -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        
        <!-- Lombok -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        
        <!-- DevTools (auto-reload) -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        
        <!-- Test -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

---

## Auto-configuration

Spring Boot automatically configures application based on:
1. Dependencies on classpath
2. Beans already defined
3. Property settings

### How Auto-configuration Works

```java
@SpringBootApplication
// Equivalent to:
@SpringBootConfiguration  // Same as @Configuration
@EnableAutoConfiguration  // Enable auto-configuration
@ComponentScan           // Scan for components in current package and sub-packages
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

### Auto-configuration Examples

```java
// 1. DataSource auto-configured if:
// - Database driver on classpath (mysql-connector-j)
// - Database properties set
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password

// 2. JPA auto-configured if:
// - spring-boot-starter-data-jpa dependency present
// - DataSource configured
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

// 3. Web auto-configured if:
// - spring-boot-starter-web dependency present
// - Embedded Tomcat included automatically

// 4. Security auto-configured if:
// - spring-boot-starter-security dependency present
// - Default login page created
// - All endpoints secured by default
```

### Viewing Auto-configurations

**Enable debug mode:**
```properties
# application.properties
debug=true

# Or run with flag
java -jar myapp.jar --debug
```

**Output shows:**
- Positive matches (applied configurations)
- Negative matches (not applied, with reasons)

### Disabling Auto-configuration

```java
// Exclude specific auto-configurations
@SpringBootApplication(exclude = {
    DataSourceAutoConfiguration.class,
    SecurityAutoConfiguration.class
})
public class MyApplication {
    // ...
}

// Or in properties
spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
```

### Custom Auto-configuration

```java
@Configuration
@ConditionalOnClass(DataSource.class)
@ConditionalOnMissingBean(DataSource.class)
public class MyDataSourceAutoConfiguration {
    
    @Bean
    public DataSource dataSource() {
        // Custom DataSource configuration
        return new HikariDataSource();
    }
}
```

**Common Conditions:**
- `@ConditionalOnClass`: Class exists on classpath
- `@ConditionalOnMissingClass`: Class doesn't exist
- `@ConditionalOnBean`: Bean exists in context
- `@ConditionalOnMissingBean`: Bean doesn't exist
- `@ConditionalOnProperty`: Property has specific value

---

## Properties & YAML Files

Configuration files for externalizing application settings.

### application.properties

```properties
# Server Configuration
server.port=8080
server.servlet.context-path=/api

# Application Name
spring.application.name=myapp

# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.jpa.properties.hibernate.format_sql=true

# Logging Configuration
logging.level.root=INFO
logging.level.com.example.myapp=DEBUG
logging.file.name=logs/application.log

# Custom Properties
app.name=My Application
app.version=1.0.0
app.api.base-url=https://api.example.com
```

### application.yml

```yaml
# Server Configuration
server:
  port: 8080
  servlet:
    context-path: /api

# Application Name
spring:
  application:
    name: myapp
  
  # Database Configuration
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: password
    driver-class-name: com.mysql.cj.jdbc.Driver
  
  # JPA Configuration
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQL8Dialect
        format_sql: true

# Logging Configuration
logging:
  level:
    root: INFO
    com.example.myapp: DEBUG
  file:
    name: logs/application.log

# Custom Properties
app:
  name: My Application
  version: 1.0.0
  api:
    base-url: https://api.example.com
```

### Properties vs YAML

| Feature | Properties | YAML |
|---------|-----------|------|
| **Format** | key=value | Hierarchical |
| **Readability** | Less readable | More readable |
| **Nesting** | Repetitive | Clean |
| **Lists** | Difficult | Easy |
| **Profile support** | Separate files | Single file |
| **File size** | Larger | Smaller |

### Reading Properties in Code

#### Using @Value

```java
@Component
public class AppConfig {
    
    @Value("${app.name}")
    private String appName;
    
    @Value("${app.version}")
    private String version;
    
    @Value("${server.port}")
    private int port;
    
    @Value("${app.api.base-url}")
    private String apiBaseUrl;
    
    // With default value
    @Value("${app.timeout:30}")
    private int timeout;
    
    public void printConfig() {
        System.out.println("App: " + appName);
        System.out.println("Version: " + version);
        System.out.println("Port: " + port);
    }
}
```

#### Using @ConfigurationProperties

```java
@Component
@ConfigurationProperties(prefix = "app")
@Data
public class AppProperties {
    private String name;
    private String version;
    private Api api;
    
    @Data
    public static class Api {
        private String baseUrl;
        private int timeout;
    }
}

// Usage
@Service
public class MyService {
    @Autowired
    private AppProperties appProperties;
    
    public void useConfig() {
        System.out.println("App: " + appProperties.getName());
        System.out.println("API URL: " + appProperties.getApi().getBaseUrl());
    }
}
```

#### Environment Variables

```java
@Component
public class EnvConfig {
    
    @Autowired
    private Environment env;
    
    public void getProperty() {
        String dbUrl = env.getProperty("spring.datasource.url");
        String appName = env.getProperty("app.name", "Default App");
        
        System.out.println("DB URL: " + dbUrl);
        System.out.println("App: " + appName);
    }
}
```

### Property Sources Priority

**Order (highest to lowest):**
1. Command line arguments: `--server.port=9090`
2. System properties: `-Dserver.port=9090`
3. OS environment variables
4. `application-{profile}.properties` (profile-specific)
5. `application.properties` (default)
6. `@PropertySource` annotations
7. Default properties

```bash
# Override properties via command line
java -jar myapp.jar --server.port=9090 --spring.profiles.active=prod

# Or system properties
java -Dserver.port=9090 -jar myapp.jar
```

---

## Profiles

Profiles allow different configurations for different environments.

### Creating Profiles

#### Separate Files

```
src/main/resources/
├── application.properties          # Common properties
├── application-dev.properties      # Development
├── application-test.properties     # Testing
└── application-prod.properties     # Production
```

#### application-dev.properties

```properties
# Development profile
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/mydb_dev
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true
logging.level.com.example.myapp=DEBUG
```

#### application-test.properties

```properties
# Test profile
server.port=8081
spring.datasource.url=jdbc:h2:mem:testdb
spring.jpa.hibernate.ddl-auto=create-drop
spring.h2.console.enabled=true
```

#### application-prod.properties

```properties
# Production profile
server.port=80
spring.datasource.url=jdbc:mysql://prod-server:3306/mydb_prod
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=false
logging.level.com.example.myapp=WARN
```

### Single YAML File with Profiles

```yaml
# application.yml

# Common properties
spring:
  application:
    name: myapp

---
# Development profile
spring:
  config:
    activate:
      on-profile: dev
  datasource:
    url: jdbc:mysql://localhost:3306/mydb_dev
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true

server:
  port: 8080

---
# Test profile
spring:
  config:
    activate:
      on-profile: test
  datasource:
    url: jdbc:h2:mem:testdb
  jpa:
    hibernate:
      ddl-auto: create-drop

server:
  port: 8081

---
# Production profile
spring:
  config:
    activate:
      on-profile: prod
  datasource:
    url: jdbc:mysql://prod-server:3306/mydb_prod
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false

server:
  port: 80
```

### Activating Profiles

#### 1. In application.properties

```properties
spring.profiles.active=dev
```

#### 2. Command Line

```bash
java -jar myapp.jar --spring.profiles.active=prod

# Multiple profiles
java -jar myapp.jar --spring.profiles.active=prod,logging
```

#### 3. System Property

```bash
java -Dspring.profiles.active=prod -jar myapp.jar
```

#### 4. Environment Variable

```bash
export SPRING_PROFILES_ACTIVE=prod
java -jar myapp.jar
```

#### 5. IDE Configuration

```
Run Configurations → Environment Variables → SPRING_PROFILES_ACTIVE=dev
```

### Profile-Specific Beans

```java
@Configuration
public class DataSourceConfig {
    
    @Bean
    @Profile("dev")
    public DataSource devDataSource() {
        System.out.println("Using Development DataSource");
        // Development DataSource configuration
        return new HikariDataSource();
    }
    
    @Bean
    @Profile("prod")
    public DataSource prodDataSource() {
        System.out.println("Using Production DataSource");
        // Production DataSource configuration
        return new HikariDataSource();
    }
    
    @Bean
    @Profile("!prod")  // Active when prod is NOT active
    public DataSource nonProdDataSource() {
        return new HikariDataSource();
    }
}
```

### Checking Active Profile

```java
@Component
public class ProfileChecker {
    
    @Autowired
    private Environment env;
    
    public void checkProfile() {
        String[] profiles = env.getActiveProfiles();
        System.out.println("Active profiles: " + Arrays.toString(profiles));
        
        if (env.acceptsProfiles(Profiles.of("dev"))) {
            System.out.println("Running in development mode");
        }
    }
}
```

---

## Embedded Servers

Spring Boot includes embedded servers - no need for external deployment.

### Tomcat (Default)

**Default embedded server for Spring Boot.**

```xml
<!-- Included by default with spring-boot-starter-web -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

**Configuration:**
```properties
# Server port
server.port=8080

# Context path
server.servlet.context-path=/api

# Session timeout
server.servlet.session.timeout=30m

# Tomcat specific
server.tomcat.max-threads=200
server.tomcat.min-spare-threads=10
server.tomcat.connection-timeout=20000
```

### Jetty

Lightweight alternative to Tomcat.

**Switch to Jetty:**
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <!-- Exclude Tomcat -->
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>

<!-- Add Jetty -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>
```

**Configuration:**
```properties
server.jetty.threads.max=200
server.jetty.threads.min=8
```

### Undertow

Lightweight and performant server.

**Switch to Undertow:**
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-undertow</artifactId>
</dependency>
```

### Netty (for Reactive)

Used with Spring WebFlux for reactive applications.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
<!-- Netty included automatically -->
```

```java
@SpringBootApplication
public class ReactiveApplication {
    public static void main(String[] args) {
        SpringApplication.run(ReactiveApplication.class, args);
    }
}

@RestController
public class ReactiveController {
    @GetMapping("/users")
    public Flux<User> getUsers() {
        return Flux.just(
            new User("Alice"),
            new User("Bob")
        );
    }
}
```

### Embedded Server Comparison

| Server | Type | Memory | Performance | Use Case |
|--------|------|--------|-------------|----------|
| **Tomcat** | Servlet | Medium | Good | Default, most compatible |
| **Jetty** | Servlet | Low | Good | Lightweight apps |
| **Undertow** | Servlet | Low | Excellent | High performance needed |
| **Netty** | Reactive | Low | Excellent | Reactive applications |

### Server Configuration

```properties
# Common server properties
server.port=8080
server.address=localhost
server.compression.enabled=true

# SSL/HTTPS
server.ssl.enabled=true
server.ssl.key-store=classpath:keystore.p12
server.ssl.key-store-password=password
server.ssl.key-store-type=PKCS12

# Error handling
server.error.include-message=always
server.error.include-stacktrace=on_param

# Timeouts
server.connection-timeout=20000
server.servlet.session.timeout=30m
```

### Customizing Embedded Server

```java
@Configuration
public class ServerConfig {
    
    @Bean
    public WebServerFactoryCustomizer<ConfigurableWebServerFactory> webServerCustomizer() {
        return factory -> {
            factory.setPort(9090);
            factory.setContextPath("/myapp");
        };
    }
    
    // Tomcat specific customization
    @Bean
    public WebServerFactoryCustomizer<TomcatServletWebServerFactory> tomcatCustomizer() {
        return factory -> {
            factory.addConnectorCustomizers(connector -> {
                connector.setPort(8080);
                connector.setMaxPostSize(10485760);  // 10MB
            });
        };
    }
}
```

---

## Running Spring Boot Application

### 1. Using Maven

```bash
# Development mode (with live reload)
mvn spring-boot:run

# Package as JAR
mvn clean package

# Run JAR
java -jar target/myapp-1.0.0.jar

# With profile
mvn spring-boot:run -Dspring-boot.run.profiles=dev
java -jar myapp.jar --spring.profiles.active=prod

# With custom port
mvn spring-boot:run -Dspring-boot.run.arguments="--server.port=9090"
```

### 2. Using Gradle

```bash
# Run
gradle bootRun

# Package
gradle build

# Run JAR
java -jar build/libs/myapp-1.0.0.jar
```

### 3. IDE

```java
// Run main class directly
public static void main(String[] args) {
    SpringApplication.run(MyApplication.class, args);
}
```

### 4. Docker

```dockerfile
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/myapp-1.0.0.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

```bash
docker build -t myapp .
docker run -p 8080:8080 -e SPRING_PROFILES_ACTIVE=prod myapp
```

---

## Spring Boot DevTools

Development tools for productivity.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
    <optional>true</optional>
</dependency>
```

**Features:**
- **Auto-restart**: Automatically restarts app on code changes
- **LiveReload**: Refreshes browser automatically
- **Property defaults**: Developer-friendly defaults
- **Remote debugging**: Debug remote applications

**Configuration:**
```properties
# Disable restart (if needed)
spring.devtools.restart.enabled=false

# Additional paths to watch
spring.devtools.restart.additional-paths=src/main/resources

# Exclude paths
spring.devtools.restart.exclude=static/**,public/**
```

---

## Summary

Spring Boot basics for real-world development:

### What is Spring Boot?
- Opinionated framework on top of Spring
- Simplifies configuration and deployment
- Production-ready applications quickly
- Convention over configuration

### Spring vs Spring Boot
- **Spring**: Powerful but complex setup
- **Spring Boot**: Quick setup, embedded server, auto-configuration
- Spring Boot = Spring + Auto-configuration + Embedded Server

### Starter Dependencies
- Pre-configured dependency bundles
- **Common**: web, data-jpa, security, test, actuator
- Manages transitive dependencies automatically
- Consistent versioning

### Auto-configuration
- Configures beans based on classpath and properties
- `@SpringBootApplication` enables it
- Can be excluded if needed
- Use `debug=true` to see what's configured

### Properties & YAML
- **Properties**: Simple key=value format
- **YAML**: Hierarchical, more readable
- `@Value` or `@ConfigurationProperties` to read
- Property priority: CLI > System > Profile > Default

### Profiles
- Different configs for environments
- **Common**: dev, test, prod
- Activate via properties, CLI, or environment variable
- Profile-specific beans with `@Profile`

### Embedded Servers
- **Tomcat**: Default, widely used
- **Jetty**: Lightweight
- **Undertow**: High performance
- **Netty**: Reactive applications
- No external server deployment needed!

Spring Boot dramatically simplifies Spring application development with sensible defaults while maintaining flexibility for customization.

---

## 2. Core Annotations

Spring Boot relies heavily on annotations for configuration and component management.

## @SpringBootApplication

The main annotation that combines three important annotations.

### What it Does

```java
@SpringBootApplication
// Equivalent to:
@SpringBootConfiguration  // = @Configuration
@EnableAutoConfiguration
@ComponentScan(basePackages = "current.package")
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

### Individual Components

```java
// 1. @SpringBootConfiguration
// Marks class as configuration class (same as @Configuration)
@SpringBootConfiguration
public class MyApplication { }

// 2. @EnableAutoConfiguration
// Enables Spring Boot's auto-configuration mechanism
@EnableAutoConfiguration
public class MyApplication { }

// 3. @ComponentScan
// Scans for @Component, @Service, @Repository, @Controller
// Default: scans current package and sub-packages
@ComponentScan(basePackages = {"com.example.myapp", "com.example.shared"})
public class MyApplication { }
```

### Customizing @SpringBootApplication

```java
// Exclude specific auto-configurations
@SpringBootApplication(exclude = {
    DataSourceAutoConfiguration.class,
    SecurityAutoConfiguration.class
})
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}

// Specify scan packages
@SpringBootApplication(scanBasePackages = {
    "com.example.myapp",
    "com.example.shared"
})
public class MyApplication { }

// Using class references for type safety
@SpringBootApplication(scanBasePackageClasses = {
    MyApplication.class,
    SharedModule.class
})
public class MyApplication { }
```

### Application Startup Customization

```java
@SpringBootApplication
public class MyApplication {
    
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(MyApplication.class);
        
        // Customize banner
        app.setBannerMode(Banner.Mode.OFF);
        
        // Set default properties
        Properties properties = new Properties();
        properties.setProperty("server.port", "9090");
        app.setDefaultProperties(properties);
        
        // Add listeners
        app.addListeners(new ApplicationStartedEventListener());
        
        app.run(args);
    }
}
```

---

## Stereotype Annotations

Spring's component model annotations for different layers.

### @Component

Generic stereotype for any Spring-managed component.

```java
@Component
public class EmailValidator {
    
    public boolean isValid(String email) {
        return email != null && email.contains("@");
    }
}

// Usage
@Service
public class UserService {
    @Autowired
    private EmailValidator emailValidator;
    
    public void createUser(String email) {
        if (emailValidator.isValid(email)) {
            // Create user
        }
    }
}
```

**When to use:**
- Utility classes
- Helper components
- Components that don't fit other stereotypes

### @Service

Business logic layer component.

```java
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private EmailService emailService;
    
    public User createUser(User user) {
        // Business logic
        validateUser(user);
        User savedUser = userRepository.save(user);
        emailService.sendWelcomeEmail(user.getEmail());
        return savedUser;
    }
    
    public User getUserById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
    }
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    private void validateUser(User user) {
        if (user.getName() == null || user.getName().isEmpty()) {
            throw new IllegalArgumentException("Name is required");
        }
    }
}
```

**When to use:**
- Business logic layer
- Transaction management
- Orchestrating multiple repositories
- Complex business rules

### @Repository

Data access layer component.

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByAgeGreaterThan(int age);
    boolean existsByEmail(String email);
}

// Custom repository implementation
@Repository
public class CustomUserRepositoryImpl {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    public List<User> findUsersByCustomQuery(String criteria) {
        String jpql = "SELECT u FROM User u WHERE u.name LIKE :criteria";
        return entityManager.createQuery(jpql, User.class)
                           .setParameter("criteria", "%" + criteria + "%")
                           .getResultList();
    }
}
```

**Why use @Repository:**
- Exception translation (SQLException → DataAccessException)
- Indicates data access layer
- Better code organization

**Benefits:**
```java
// Without @Repository
public class UserDAO {
    public User findById(Long id) throws SQLException {
        // SQLException thrown
    }
}

// With @Repository
@Repository
public class UserRepository {
    public User findById(Long id) {
        // SQLException automatically translated to DataAccessException
    }
}
```

### Stereotype Hierarchy

```
@Component (Generic)
    ├── @Service (Business logic)
    ├── @Repository (Data access)
    └── @Controller (Web layer)
        └── @RestController (REST API)
```

**Best Practice:**
```java
// Use specific stereotype for clarity
@Component  // For: Validators, Utilities, Helpers
@Service    // For: Business logic, Transactions
@Repository // For: Database access
@Controller // For: Web MVC controllers
@RestController  // For: REST API controllers
```

---

## @Controller vs @RestController

### @Controller

Used for traditional Spring MVC (returns views).

```java
@Controller
@RequestMapping("/users")
public class UserMvcController {
    
    @Autowired
    private UserService userService;
    
    // Returns view name (HTML page)
    @GetMapping
    public String listUsers(Model model) {
        List<User> users = userService.getAllUsers();
        model.addAttribute("users", users);
        return "users/list";  // View name (users/list.html)
    }
    
    @GetMapping("/{id}")
    public String getUserDetails(@PathVariable Long id, Model model) {
        User user = userService.getUserById(id);
        model.addAttribute("user", user);
        return "users/details";
    }
    
    // Return JSON (need @ResponseBody)
    @GetMapping("/api/users")
    @ResponseBody
    public List<User> getUsersAsJson() {
        return userService.getAllUsers();
    }
}
```

### @RestController

Used for REST APIs (returns data, not views).

```java
@RestController  // = @Controller + @ResponseBody
@RequestMapping("/api/users")
public class UserRestController {
    
    @Autowired
    private UserService userService;
    
    // Automatically serialized to JSON
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
    
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
```

### Comparison

| Feature | @Controller | @RestController |
|---------|-------------|-----------------|
| **Purpose** | Web MVC (views) | REST API (data) |
| **Response** | View name | Data (JSON/XML) |
| **@ResponseBody** | Needed for JSON | Implicit on all methods |
| **Return Type** | String (view name) | Object (serialized) |
| **Use Case** | Traditional web apps | RESTful services |

```java
// @RestController definition
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Controller
@ResponseBody
public @interface RestController {
    @AliasFor(annotation = Controller.class)
    String value() default "";
}
```

---

## @Autowired vs Constructor Injection

### @Autowired (Field Injection)

```java
@Service
public class UserService {
    
    @Autowired  // Field injection
    private UserRepository userRepository;
    
    @Autowired
    private EmailService emailService;
    
    public User createUser(User user) {
        return userRepository.save(user);
    }
}
```

**Pros:**
- Simple and concise
- Less code

**Cons:**
- Cannot create immutable components (no final)
- Difficult to test (requires Spring context)
- Circular dependencies not immediately visible
- Violates principles (hidden dependencies)

### Constructor Injection (Recommended)

```java
@Service
public class UserService {
    
    private final UserRepository userRepository;
    private final EmailService emailService;
    
    // @Autowired optional if single constructor (Spring 4.3+)
    public UserService(UserRepository userRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }
    
    public User createUser(User user) {
        return userRepository.save(user);
    }
}
```

**Pros:**
- Immutable components (final fields)
- Easy to test (no Spring context needed)
- Circular dependencies detected at startup
- Makes dependencies explicit
- NPE prevention

**Testing:**
```java
// Easy to test without Spring
@Test
void testCreateUser() {
    UserRepository mockRepo = mock(UserRepository.class);
    EmailService mockEmail = mock(EmailService.class);
    
    UserService service = new UserService(mockRepo, mockEmail);
    // Test service
}
```

### Lombok @RequiredArgsConstructor

```java
@Service
@RequiredArgsConstructor  // Generates constructor for final fields
public class UserService {
    
    private final UserRepository userRepository;
    private final EmailService emailService;
    
    // Constructor automatically generated
    
    public User createUser(User user) {
        return userRepository.save(user);
    }
}
```

### Setter Injection

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

**When to use:**
- Optional dependencies
- Circular dependencies (last resort)

### @Autowired Attributes

```java
// Required (default = true)
@Autowired
private UserRepository userRepository;  // Throws exception if not found

// Optional dependency
@Autowired(required = false)
private OptionalService optionalService;  // null if not found

// With Optional
@Autowired
private Optional<OptionalService> optionalService;
```

### Injection Comparison

| Method | Immutability | Testability | Circular Dependencies | Recommended |
|--------|--------------|-------------|----------------------|-------------|
| **Constructor** | ✅ Yes | ✅ Easy | ✅ Detected | ✅ **Best** |
| **Field** | ❌ No | ❌ Difficult | ❌ Hidden | ❌ Avoid |
| **Setter** | ❌ No | ⚠️ Moderate | ⚠️ Allowed | ⚠️ Rare cases |

---

## @Configuration and @Bean

### @Configuration

Marks class as a source of bean definitions.

```java
@Configuration
public class AppConfig {
    
    @Bean
    public UserService userService() {
        return new UserService(userRepository());
    }
    
    @Bean
    public UserRepository userRepository() {
        return new UserRepositoryImpl();
    }
}
```

**vs @Component:**
```java
// @Configuration uses CGLIB proxy for singleton behavior
@Configuration
public class Config {
    @Bean
    public BeanA beanA() {
        return new BeanA(beanB());  // Same beanB instance
    }
    
    @Bean
    public BeanB beanB() {
        return new BeanB();
    }
    
    @Bean
    public BeanC beanC() {
        return new BeanC(beanB());  // Same beanB instance
    }
}

// @Component doesn't proxy - new instances each time
@Component
public class Config {
    @Bean
    public BeanA beanA() {
        return new BeanA(beanB());  // Different beanB instance
    }
    
    @Bean
    public BeanB beanB() {
        return new BeanB();
    }
}
```

### @Bean

Declares a method that returns a Spring-managed bean.

```java
@Configuration
public class DatabaseConfig {
    
    @Bean
    public DataSource dataSource() {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
        dataSource.setUsername("root");
        dataSource.setPassword("password");
        dataSource.setMaximumPoolSize(10);
        return dataSource;
    }
    
    @Bean
    public EntityManagerFactory entityManagerFactory(DataSource dataSource) {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(dataSource);
        em.setPackagesToScan("com.example.model");
        // Configuration...
        return em.getObject();
    }
}
```

### Bean Naming

```java
@Configuration
public class BeanConfig {
    
    // Bean name = method name
    @Bean
    public UserService userService() {
        return new UserService();
    }
    
    // Custom bean name
    @Bean(name = "customUserService")
    public UserService myUserService() {
        return new UserService();
    }
    
    // Multiple names
    @Bean(name = {"userService", "userSvc", "userBusinessService"})
    public UserService service() {
        return new UserService();
    }
}

// Access by name
@Autowired
@Qualifier("customUserService")
private UserService userService;
```

### Bean Lifecycle

```java
@Configuration
public class LifecycleConfig {
    
    @Bean(initMethod = "init", destroyMethod = "cleanup")
    public MyBean myBean() {
        return new MyBean();
    }
}

class MyBean {
    public void init() {
        System.out.println("Bean initialized");
    }
    
    public void cleanup() {
        System.out.println("Bean destroyed");
    }
}

// Or using annotations
@Component
public class MyComponent {
    
    @PostConstruct
    public void init() {
        System.out.println("Component initialized");
    }
    
    @PreDestroy
    public void destroy() {
        System.out.println("Component destroyed");
    }
}
```

### Bean Scope

```java
@Configuration
public class ScopeConfig {
    
    @Bean
    @Scope("singleton")  // Default - one instance per container
    public SingletonBean singletonBean() {
        return new SingletonBean();
    }
    
    @Bean
    @Scope("prototype")  // New instance every time
    public PrototypeBean prototypeBean() {
        return new PrototypeBean();
    }
    
    @Bean
    @Scope("request")  // One per HTTP request
    public RequestBean requestBean() {
        return new RequestBean();
    }
    
    @Bean
    @Scope("session")  // One per HTTP session
    public SessionBean sessionBean() {
        return new SessionBean();
    }
}
```

### Conditional Beans

```java
@Configuration
public class ConditionalConfig {
    
    @Bean
    @ConditionalOnProperty(name = "feature.enabled", havingValue = "true")
    public FeatureService featureService() {
        return new FeatureService();
    }
    
    @Bean
    @ConditionalOnMissingBean(DataSource.class)
    public DataSource defaultDataSource() {
        return new HikariDataSource();
    }
    
    @Bean
    @Profile("dev")
    public DataSource devDataSource() {
        System.out.println("Using DEV DataSource");
        return new HikariDataSource();
    }
    
    @Bean
    @Profile("prod")
    public DataSource prodDataSource() {
        System.out.println("Using PROD DataSource");
        return new HikariDataSource();
    }
}
```

---

## @Value

Injects values from properties files into fields.

### Basic Usage

```java
@Component
public class AppConfig {
    
    @Value("${app.name}")
    private String appName;
    
    @Value("${app.version}")
    private String version;
    
    @Value("${server.port}")
    private int port;
    
    @Value("${app.timeout}")
    private long timeout;
    
    @Value("${app.enabled}")
    private boolean enabled;
    
    public void printConfig() {
        System.out.println("App Name: " + appName);
        System.out.println("Version: " + version);
        System.out.println("Port: " + port);
        System.out.println("Timeout: " + timeout);
        System.out.println("Enabled: " + enabled);
    }
}
```

### Default Values

```java
@Component
public class DefaultValueConfig {
    
    // Default value if property not found
    @Value("${app.name:MyApp}")
    private String appName;
    
    @Value("${app.timeout:30}")
    private int timeout;
    
    @Value("${app.features.experimental:false}")
    private boolean experimentalFeatures;
    
    // Empty string as default
    @Value("${app.description:}")
    private String description;
}
```

### Lists and Arrays

```java
# application.properties
app.allowed-origins=http://localhost:3000,http://localhost:4200,http://example.com
app.admin-emails=admin@example.com,support@example.com

@Component
public class ListConfig {
    
    @Value("${app.allowed-origins}")
    private List<String> allowedOrigins;
    
    @Value("${app.admin-emails}")
    private String[] adminEmails;
    
    // With default
    @Value("${app.tags:tag1,tag2,tag3}")
    private List<String> tags;
}
```

### SpEL (Spring Expression Language)

```java
@Component
public class SpELConfig {
    
    // System properties
    @Value("#{systemProperties['user.home']}")
    private String userHome;
    
    // Call static method
    @Value("#{T(java.lang.Math).random() * 100}")
    private double randomNumber;
    
    // Property with expression
    @Value("#{${app.max-connections} * 2}")
    private int maxConnections;
    
    // Ternary operator
    @Value("#{${app.enabled} ? 'Active' : 'Inactive'}")
    private String status;
    
    // Access bean property
    @Value("#{appProperties.name}")
    private String appName;
}
```

### Limitations of @Value

- Not type-safe
- No validation
- Scattered across classes
- Difficult to test
- No IDE support for property names

---

## @ConfigurationProperties

Type-safe configuration properties binding.

### Basic Usage

```properties
# application.properties
app.name=My Application
app.version=1.0.0
app.timeout=30
app.max-retries=3
app.api.base-url=https://api.example.com
app.api.key=secret-key-123
app.api.timeout=60
```

```java
@Component
@ConfigurationProperties(prefix = "app")
@Data  // Lombok
public class AppProperties {
    private String name;
    private String version;
    private int timeout;
    private int maxRetries;
    private Api api;
    
    @Data
    public static class Api {
        private String baseUrl;
        private String key;
        private int timeout;
    }
}

// Usage
@Service
public class MyService {
    
    @Autowired
    private AppProperties appProperties;
    
    public void useConfig() {
        System.out.println("App: " + appProperties.getName());
        System.out.println("API URL: " + appProperties.getApi().getBaseUrl());
        System.out.println("Timeout: " + appProperties.getTimeout());
    }
}
```

### With Lists and Maps

```yaml
# application.yml
app:
  name: My Application
  servers:
    - name: server1
      host: localhost
      port: 8080
    - name: server2
      host: 192.168.1.100
      port: 8081
  
  credentials:
    admin: admin123
    user: user123
    guest: guest123
  
  features:
    - authentication
    - authorization
    - caching
```

```java
@ConfigurationProperties(prefix = "app")
@Data
public class AppProperties {
    private String name;
    private List<Server> servers;
    private Map<String, String> credentials;
    private List<String> features;
    
    @Data
    public static class Server {
        private String name;
        private String host;
        private int port;
    }
}

// Usage
public void printServers() {
    appProperties.getServers().forEach(server -> 
        System.out.println(server.getName() + ": " + 
                         server.getHost() + ":" + server.getPort())
    );
}
```

### Validation with @ConfigurationProperties

```java
@ConfigurationProperties(prefix = "app")
@Validated  // Enable validation
@Data
public class ValidatedProperties {
    
    @NotBlank(message = "App name is required")
    private String name;
    
    @Min(value = 1, message = "Timeout must be at least 1")
    @Max(value = 300, message = "Timeout cannot exceed 300")
    private int timeout;
    
    @Email(message = "Invalid email format")
    private String adminEmail;
    
    @Valid  // Nested validation
    private Database database;
    
    @Data
    public static class Database {
        @NotBlank(message = "Database URL is required")
        private String url;
        
        @Min(value = 1)
        @Max(value = 100)
        private int maxConnections;
    }
}
```

### Enabling @ConfigurationProperties

```java
// Option 1: Use @Component on properties class
@Component
@ConfigurationProperties(prefix = "app")
public class AppProperties { }

// Option 2: Use @EnableConfigurationProperties
@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class MyApplication { }

// Option 3: Use @ConfigurationPropertiesScan
@SpringBootApplication
@ConfigurationPropertiesScan("com.example.config")
public class MyApplication { }
```

### @Value vs @ConfigurationProperties

| Feature | @Value | @ConfigurationProperties |
|---------|--------|-------------------------|
| **Type Safety** | ❌ No | ✅ Yes |
| **Validation** | ❌ No | ✅ Yes (@Validated) |
| **Nested Properties** | ❌ Complex | ✅ Easy |
| **IDE Support** | ❌ Limited | ✅ Good |
| **Relaxed Binding** | ❌ No | ✅ Yes |
| **Meta-data** | ❌ No | ✅ Yes |
| **Use Case** | Single values | Complex configurations |

**Relaxed Binding:**
```properties
# All these bind to userName property
app.userName=John
app.username=John
app.user-name=John
app.user_name=John
app.USER_NAME=John
```

### When to Use What

```java
// @Value - for simple, single properties
@Value("${server.port}")
private int port;

// @ConfigurationProperties - for grouped, related properties
@ConfigurationProperties(prefix = "app")
@Data
public class AppProperties {
    private String name;
    private String version;
    private Database database;
    private Api api;
    // ... many related properties
}
```

---

## Additional Important Annotations

### @Qualifier

Specifies which bean to inject when multiple candidates exist.

```java
// Multiple implementations
@Component
@Qualifier("emailNotification")
public class EmailNotificationService implements NotificationService {
    @Override
    public void send(String message) {
        System.out.println("Email: " + message);
    }
}

@Component
@Qualifier("smsNotification")
public class SmsNotificationService implements NotificationService {
    @Override
    public void send(String message) {
        System.out.println("SMS: " + message);
    }
}

// Inject specific implementation
@Service
public class UserService {
    
    private final NotificationService notificationService;
    
    public UserService(@Qualifier("emailNotification") NotificationService notificationService) {
        this.notificationService = notificationService;
    }
}
```

### @Primary

Marks bean as primary choice when multiple candidates exist.

```java
@Component
@Primary  // This will be injected by default
public class EmailNotificationService implements NotificationService {
    @Override
    public void send(String message) {
        System.out.println("Email: " + message);
    }
}

@Component
public class SmsNotificationService implements NotificationService {
    @Override
    public void send(String message) {
        System.out.println("SMS: " + message);
    }
}

// Injects EmailNotificationService (primary)
@Service
public class UserService {
    @Autowired
    private NotificationService notificationService;
}
```

### @Lazy

Delays bean initialization until first use.

```java
@Component
@Lazy  // Not created at startup
public class ExpensiveService {
    
    public ExpensiveService() {
        System.out.println("ExpensiveService created");
        // Expensive initialization
    }
}

// Lazy injection
@Service
public class MyService {
    
    @Autowired
    @Lazy  // Injected only when first used
    private ExpensiveService expensiveService;
}
```

### @DependsOn

Specifies bean creation order.

```java
@Component
@DependsOn("databaseInitializer")
public class DataLoader {
    // Created after databaseInitializer
}

@Component("databaseInitializer")
public class DatabaseInitializer {
    // Created first
}
```

---

## Summary

Core Spring Boot annotations:

### @SpringBootApplication
- **Combines**: @Configuration + @EnableAutoConfiguration + @ComponentScan
- Main entry point for Spring Boot app
- Can customize with exclude and scanBasePackages

### Stereotype Annotations
- **@Component**: Generic component
- **@Service**: Business logic layer
- **@Repository**: Data access layer (with exception translation)
- **@Controller**: Web MVC (returns views)
- **@RestController**: REST API (returns data) = @Controller + @ResponseBody

### Dependency Injection
- **@Autowired**: Inject dependencies (field, setter, constructor)
- **Constructor Injection**: ✅ **Recommended** (immutable, testable)
- **Field Injection**: ❌ Avoid (not testable, mutable)
- Use Lombok @RequiredArgsConstructor for cleaner code

### Configuration
- **@Configuration**: Define beans programmatically
- **@Bean**: Method-level, returns Spring-managed bean
- Control initialization order, lifecycle, scope
- Conditional bean creation

### Properties
- **@Value**: Inject individual properties (simple cases)
- **@ConfigurationProperties**: Type-safe property binding (complex configs)
- Validation with @Validated
- IDE support and meta-data

### Additional Annotations
- **@Qualifier**: Choose specific bean
- **@Primary**: Mark default bean
- **@Lazy**: Delay initialization
- **@DependsOn**: Control creation order

### Best Practices
1. Use constructor injection
2. Use @ConfigurationProperties for grouped properties
3. Use specific stereotypes (@Service, @Repository)
4. Make fields final when possible
5. Use @Qualifier when multiple implementations exist
6. Validate @ConfigurationProperties with @Validated
7. Use @Primary for default implementation
8. Use @Lazy for expensive beans

These annotations form the foundation of Spring Boot's dependency injection and configuration system.

---

## 3. Building REST APIs

RESTful web services using Spring Boot for creating HTTP-based APIs.

## HTTP Method Annotations

Spring provides specialized annotations for each HTTP method.

### @GetMapping

Retrieves data from server (Read operation).

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    // Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    
    // Get user by ID (path variable)
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    // Get with multiple path variables
    @GetMapping("/{userId}/posts/{postId}")
    public Post getUserPost(@PathVariable Long userId, @PathVariable Long postId) {
        return postService.getPost(userId, postId);
    }
    
    // Get with query parameters
    @GetMapping("/search")
    public List<User> searchUsers(@RequestParam String name, 
                                   @RequestParam(required = false) Integer age) {
        return userService.search(name, age);
    }
    
    // Query parameters with defaults
    @GetMapping("/page")
    public Page<User> getUsersPage(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return userService.getUsers(page, size);
    }
}
```

### @PostMapping

Creates new resource on server.

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    // Create user with request body
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User created = userService.createUser(user);
        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(created);
    }
    
    // Create with location header
    @PostMapping
    public ResponseEntity<User> createUserWithLocation(@RequestBody User user) {
        User created = userService.createUser(user);
        URI location = ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(created.getId())
            .toUri();
        
        return ResponseEntity
            .created(location)
            .body(created);
    }
    
    // Create with path variable
    @PostMapping("/{userId}/posts")
    public Post createPost(@PathVariable Long userId, @RequestBody Post post) {
        return postService.createPost(userId, post);
    }
}
```

### @PutMapping

Updates existing resource (full update).

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    // Full update
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(
            @PathVariable Long id,
            @RequestBody User user) {
        User updated = userService.updateUser(id, user);
        return ResponseEntity.ok(updated);
    }
}
```

### @PatchMapping

Partial update of resource.

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    // Partial update
    @PatchMapping("/{id}")
    public ResponseEntity<User> patchUser(
            @PathVariable Long id,
            @RequestBody Map<String, Object> updates) {
        User updated = userService.patchUser(id, updates);
        return ResponseEntity.ok(updated);
    }
    
    // Update specific field
    @PatchMapping("/{id}/email")
    public ResponseEntity<User> updateEmail(
            @PathVariable Long id,
            @RequestBody String email) {
        User updated = userService.updateEmail(id, email);
        return ResponseEntity.ok(updated);
    }
}
```

### @DeleteMapping

Deletes resource from server.

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    // Delete user
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();  // 204 No Content
    }
    
    // Delete with response
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUserWithMessage(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok("User deleted successfully");
    }
}
```

### @RequestMapping

Generic mapping for all HTTP methods.

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    // Multiple methods
    @RequestMapping(value = "/{id}", method = {RequestMethod.GET, RequestMethod.HEAD})
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    // Custom headers
    @RequestMapping(value = "/custom", headers = "X-API-VERSION=1")
    public String customEndpoint() {
        return "Version 1 API";
    }
    
    // Content type
    @RequestMapping(value = "/json", consumes = "application/json", produces = "application/json")
    public User jsonEndpoint(@RequestBody User user) {
        return user;
    }
}
```

### HTTP Status Codes

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
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
        return ResponseEntity
            .status(HttpStatus.CREATED)  // 201 Created
            .body(created);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        User updated = userService.updateUser(id, user);
        return ResponseEntity.ok(updated);  // 200 OK
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();  // 204 No Content
    }
    
    @GetMapping("/error")
    public ResponseEntity<String> errorEndpoint() {
        return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)  // 500
            .body("An error occurred");
    }
}
```

**Common HTTP Status Codes:**
- **200 OK**: Successful GET, PUT, PATCH
- **201 Created**: Successful POST
- **204 No Content**: Successful DELETE
- **400 Bad Request**: Invalid input
- **401 Unauthorized**: Authentication required
- **403 Forbidden**: No permission
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server error

---

## Request/Response Models (DTOs)

DTOs (Data Transfer Objects) separate API model from domain model.

### Why Use DTOs?

1. **Security**: Don't expose internal structure
2. **Flexibility**: API can differ from database schema
3. **Versioning**: Support multiple API versions
4. **Validation**: API-specific validation rules

### Entity vs DTO

```java
// Entity (Domain Model)
@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    private String password;  // Sensitive
    private String email;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private boolean active;
    
    // Relationships
    @OneToMany(mappedBy = "user")
    private List<Order> orders;  // Don't expose
}

// Response DTO (What client sees)
@Data
public class UserResponseDTO {
    private Long id;
    private String username;
    private String email;
    private LocalDateTime createdAt;
    // No password, no internal fields
}

// Request DTO (What client sends)
@Data
public class UserRequestDTO {
    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 20)
    private String username;
    
    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;
    
    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;
}
```

### Complete CRUD with DTOs

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    // GET all users
    @GetMapping
    public ResponseEntity<List<UserResponseDTO>> getAllUsers() {
        List<UserResponseDTO> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
    
    // GET user by ID
    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO> getUserById(@PathVariable Long id) {
        UserResponseDTO user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }
    
    // POST create user
    @PostMapping
    public ResponseEntity<UserResponseDTO> createUser(
            @Valid @RequestBody UserRequestDTO userRequest) {
        UserResponseDTO created = userService.createUser(userRequest);
        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(created);
    }
    
    // PUT update user
    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UserRequestDTO userRequest) {
        UserResponseDTO updated = userService.updateUser(id, userRequest);
        return ResponseEntity.ok(updated);
    }
    
    // DELETE user
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
```

### DTO Conversion (Mapper)

```java
// Manual mapping
@Service
public class UserMapper {
    
    public UserResponseDTO toResponseDTO(User user) {
        UserResponseDTO dto = new UserResponseDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setCreatedAt(user.getCreatedAt());
        return dto;
    }
    
    public User toEntity(UserRequestDTO dto) {
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPassword(dto.getPassword());
        user.setEmail(dto.getEmail());
        return user;
    }
    
    public List<UserResponseDTO> toResponseDTOList(List<User> users) {
        return users.stream()
                   .map(this::toResponseDTO)
                   .collect(Collectors.toList());
    }
}

// Using ModelMapper library
@Component
public class UserMapperWithModelMapper {
    
    @Autowired
    private ModelMapper modelMapper;
    
    public UserResponseDTO toResponseDTO(User user) {
        return modelMapper.map(user, UserResponseDTO.class);
    }
    
    public User toEntity(UserRequestDTO dto) {
        return modelMapper.map(dto, User.class);
    }
}

// Configuration for ModelMapper
@Configuration
public class ModelMapperConfig {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
```

### Nested DTOs

```java
// Order with nested User DTO
@Data
public class OrderResponseDTO {
    private Long id;
    private LocalDateTime orderDate;
    private Double totalAmount;
    private UserBasicDTO user;  // Nested
    private List<OrderItemDTO> items;  // List of nested
}

@Data
public class UserBasicDTO {
    private Long id;
    private String username;
    // Limited user info
}

@Data
public class OrderItemDTO {
    private Long productId;
    private String productName;
    private Integer quantity;
    private Double price;
}
```

---

## Validation

Bean Validation using annotations.

### Common Validation Annotations

```java
import javax.validation.constraints.*;

@Data
public class UserRequestDTO {
    
    // Not null/blank/empty
    @NotNull(message = "ID cannot be null")
    private Long id;
    
    @NotBlank(message = "Username is required")  // Not null and not blank
    private String username;
    
    @NotEmpty(message = "Email cannot be empty")
    private String email;
    
    // Size
    @Size(min = 8, max = 20, message = "Password must be 8-20 characters")
    private String password;
    
    @Size(min = 1, max = 5, message = "Tags must have 1-5 items")
    private List<String> tags;
    
    // Email
    @Email(message = "Invalid email format")
    private String email;
    
    // Pattern (regex)
    @Pattern(regexp = "^[0-9]{10}$", message = "Phone must be 10 digits")
    private String phone;
    
    // Number constraints
    @Min(value = 18, message = "Age must be at least 18")
    @Max(value = 150, message = "Age cannot exceed 150")
    private Integer age;
    
    @Positive(message = "Salary must be positive")
    private Double salary;
    
    @PositiveOrZero
    private Integer experience;
    
    @Negative
    private Integer deficit;
    
    @DecimalMin(value = "0.0", inclusive = false)
    @DecimalMax(value = "100.0")
    private Double percentage;
    
    // Date/Time
    @Past(message = "Birth date must be in the past")
    private LocalDate birthDate;
    
    @Future(message = "Appointment must be in the future")
    private LocalDateTime appointmentDate;
    
    @PastOrPresent
    private LocalDate registrationDate;
    
    @FutureOrPresent
    private LocalDate validUntil;
    
    // Boolean
    @AssertTrue(message = "Must agree to terms")
    private Boolean agreedToTerms;
    
    @AssertFalse
    private Boolean banned;
}
```

### Custom Validation Annotation

```java
// Custom annotation
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UniqueEmailValidator.class)
public @interface UniqueEmail {
    String message() default "Email already exists";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

// Validator implementation
@Component
public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {
    
    @Autowired
    private UserRepository userRepository;
    
    @Override
    public boolean isValid(String email, ConstraintValidatorContext context) {
        if (email == null) return true;
        return !userRepository.existsByEmail(email);
    }
}

// Usage
@Data
public class UserRequestDTO {
    @Email
    @UniqueEmail(message = "Email already registered")
    private String email;
}
```

### Using @Valid in Controller

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    // Validate request body
    @PostMapping
    public ResponseEntity<UserResponseDTO> createUser(
            @Valid @RequestBody UserRequestDTO userRequest) {
        UserResponseDTO created = userService.createUser(userRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
    
    // Validate path variable
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(
            @PathVariable @Min(1) Long id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }
    
    // Validate request param
    @GetMapping("/search")
    public ResponseEntity<List<User>> searchUsers(
            @RequestParam @NotBlank String keyword) {
        List<User> users = userService.search(keyword);
        return ResponseEntity.ok(users);
    }
}
```

### Nested Object Validation

```java
@Data
public class OrderRequestDTO {
    
    @NotBlank
    private String orderNumber;
    
    @Valid  // Validate nested object
    @NotNull
    private AddressDTO shippingAddress;
    
    @Valid  // Validate each item in list
    @NotEmpty(message = "Order must have at least one item")
    private List<OrderItemDTO> items;
}

@Data
public class AddressDTO {
    @NotBlank
    private String street;
    
    @NotBlank
    private String city;
    
    @Pattern(regexp = "^[0-9]{5}$")
    private String zipCode;
}

@Data
public class OrderItemDTO {
    @NotNull
    @Positive
    private Long productId;
    
    @NotNull
    @Min(1)
    private Integer quantity;
}
```

### Validation Groups

```java
// Define groups
public interface Create {}
public interface Update {}

@Data
public class UserDTO {
    
    @Null(groups = Create.class)  // Null on create
    @NotNull(groups = Update.class)  // Required on update
    private Long id;
    
    @NotBlank(groups = {Create.class, Update.class})
    private String username;
    
    @NotBlank(groups = Create.class)  // Required only on create
    private String password;
}

// Controller
@PostMapping
public ResponseEntity<User> createUser(@Validated(Create.class) @RequestBody UserDTO dto) {
    // Validates Create group
}

@PutMapping("/{id}")
public ResponseEntity<User> updateUser(@Validated(Update.class) @RequestBody UserDTO dto) {
    // Validates Update group
}
```

---

## Exception Handling

Global exception handling for consistent error responses.

### @ControllerAdvice

Centralized exception handling for all controllers.

```java
@RestControllerAdvice  // or @ControllerAdvice + @ResponseBody
public class GlobalExceptionHandler {
    
    // Handle specific exception
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
    
    // Handle validation errors
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ValidationErrorResponse> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> 
            errors.put(error.getField(), error.getDefaultMessage())
        );
        
        ValidationErrorResponse response = new ValidationErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            "Validation failed",
            errors,
            LocalDateTime.now()
        );
        
        return ResponseEntity.badRequest().body(response);
    }
    
    // Handle generic exceptions
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "An unexpected error occurred",
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
    
    // Handle multiple exception types
    @ExceptionHandler({IllegalArgumentException.class, IllegalStateException.class})
    public ResponseEntity<ErrorResponse> handleBadRequest(RuntimeException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.badRequest().body(error);
    }
}
```

### Error Response DTOs

```java
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

@Data
@AllArgsConstructor
public class DetailedErrorResponse {
    private int status;
    private String error;
    private String message;
    private String path;
    private LocalDateTime timestamp;
}
```

### Custom Exceptions

```java
// Custom exception
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("User not found with id: " + id);
    }
}

public class DuplicateEmailException extends RuntimeException {
    public DuplicateEmailException(String email) {
        super("Email already exists: " + email);
    }
}

public class InsufficientBalanceException extends RuntimeException {
    public InsufficientBalanceException(double required, double available) {
        super(String.format("Insufficient balance. Required: %.2f, Available: %.2f", 
                          required, available));
    }
}

// Exception handler
@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleUserNotFound(UserNotFoundException ex) {
        return new ErrorResponse(404, ex.getMessage(), LocalDateTime.now());
    }
    
    @ExceptionHandler(DuplicateEmailException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ErrorResponse handleDuplicateEmail(DuplicateEmailException ex) {
        return new ErrorResponse(409, ex.getMessage(), LocalDateTime.now());
    }
}
```

### @ExceptionHandler with WebRequest

```java
@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<DetailedErrorResponse> handleUserNotFound(
            UserNotFoundException ex,
            WebRequest request) {
        
        DetailedErrorResponse error = new DetailedErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            "Not Found",
            ex.getMessage(),
            request.getDescription(false).replace("uri=", ""),
            LocalDateTime.now()
        );
        
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
}
```

### Controller-Specific Exception Handler

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    // Handle exception only in this controller
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(404, ex.getMessage(), LocalDateTime.now());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
    
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
        // If not found, throws UserNotFoundException
        // Handled by local @ExceptionHandler
    }
}
```

### ResponseEntityExceptionHandler

Extend for Spring's default exceptions.

```java
@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    
    // Override Spring's default handlers
    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException ex,
            HttpHeaders headers,
            HttpStatus status,
            WebRequest request) {
        
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> 
            errors.put(error.getField(), error.getDefaultMessage())
        );
        
        return ResponseEntity.badRequest().body(errors);
    }
    
    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(
            HttpMessageNotReadableException ex,
            HttpHeaders headers,
            HttpStatus status,
            WebRequest request) {
        
        ErrorResponse error = new ErrorResponse(
            400,
            "Malformed JSON request",
            LocalDateTime.now()
        );
        
        return ResponseEntity.badRequest().body(error);
    }
    
    // Custom exceptions
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(404, ex.getMessage(), LocalDateTime.now());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
}
```

---

## File Upload & Download

### File Upload

#### Single File Upload

```java
@RestController
@RequestMapping("/api/files")
public class FileController {
    
    @Value("${file.upload-dir}")
    private String uploadDir;
    
    @PostMapping("/upload")
    public ResponseEntity<FileUploadResponse> uploadFile(
            @RequestParam("file") MultipartFile file) {
        
        try {
            // Validate file
            if (file.isEmpty()) {
                throw new IllegalArgumentException("File is empty");
            }
            
            // Check file type
            String contentType = file.getContentType();
            if (!isImageFile(contentType)) {
                throw new IllegalArgumentException("Only image files allowed");
            }
            
            // Check file size (e.g., max 5MB)
            if (file.getSize() > 5 * 1024 * 1024) {
                throw new IllegalArgumentException("File size exceeds 5MB");
            }
            
            // Generate unique filename
            String originalFilename = file.getOriginalFilename();
            String filename = System.currentTimeMillis() + "_" + originalFilename;
            
            // Save file
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }
            
            Path filePath = uploadPath.resolve(filename);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
            
            // Return response
            FileUploadResponse response = new FileUploadResponse(
                filename,
                file.getContentType(),
                file.getSize(),
                "/api/files/download/" + filename
            );
            
            return ResponseEntity.ok(response);
            
        } catch (IOException e) {
            throw new RuntimeException("Failed to store file", e);
        }
    }
    
    private boolean isImageFile(String contentType) {
        return contentType != null && 
               (contentType.equals("image/jpeg") || 
                contentType.equals("image/png") || 
                contentType.equals("image/gif"));
    }
}

@Data
@AllArgsConstructor
class FileUploadResponse {
    private String filename;
    private String contentType;
    private long size;
    private String downloadUrl;
}
```

#### Multiple Files Upload

```java
@PostMapping("/upload/multiple")
public ResponseEntity<List<FileUploadResponse>> uploadMultipleFiles(
        @RequestParam("files") MultipartFile[] files) {
    
    List<FileUploadResponse> responses = new ArrayList<>();
    
    for (MultipartFile file : files) {
        try {
            String filename = saveFile(file);
            FileUploadResponse response = new FileUploadResponse(
                filename,
                file.getContentType(),
                file.getSize(),
                "/api/files/download/" + filename
            );
            responses.add(response);
        } catch (IOException e) {
            throw new RuntimeException("Failed to upload file: " + file.getOriginalFilename(), e);
        }
    }
    
    return ResponseEntity.ok(responses);
}

private String saveFile(MultipartFile file) throws IOException {
    String filename = System.currentTimeMillis() + "_" + file.getOriginalFilename();
    Path filePath = Paths.get(uploadDir).resolve(filename);
    Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
    return filename;
}
```

#### With Additional Data

```java
@PostMapping("/upload/withData")
public ResponseEntity<FileUploadResponse> uploadFileWithData(
        @RequestParam("file") MultipartFile file,
        @RequestParam("title") String title,
        @RequestParam("description") String description) {
    
    // Save file and metadata
    String filename = saveFile(file);
    
    // Save to database
    FileMetadata metadata = new FileMetadata();
    metadata.setFilename(filename);
    metadata.setTitle(title);
    metadata.setDescription(description);
    metadataRepository.save(metadata);
    
    FileUploadResponse response = new FileUploadResponse(
        filename, file.getContentType(), file.getSize(), 
        "/api/files/download/" + filename
    );
    
    return ResponseEntity.ok(response);
}
```

### File Download

```java
@RestController
@RequestMapping("/api/files")
public class FileController {
    
    @GetMapping("/download/{filename}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String filename) {
        
        try {
            Path filePath = Paths.get(uploadDir).resolve(filename);
            Resource resource = new UrlResource(filePath.toUri());
            
            if (!resource.exists()) {
                throw new FileNotFoundException("File not found: " + filename);
            }
            
            // Determine content type
            String contentType = Files.probeContentType(filePath);
            if (contentType == null) {
                contentType = "application/octet-stream";
            }
            
            return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, 
                       "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
                
        } catch (IOException e) {
            throw new RuntimeException("Error downloading file", e);
        }
    }
    
    // View file in browser (inline)
    @GetMapping("/view/{filename}")
    public ResponseEntity<Resource> viewFile(@PathVariable String filename) {
        
        try {
            Path filePath = Paths.get(uploadDir).resolve(filename);
            Resource resource = new UrlResource(filePath.toUri());
            
            if (!resource.exists()) {
                throw new FileNotFoundException("File not found: " + filename);
            }
            
            String contentType = Files.probeContentType(filePath);
            
            return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, 
                       "inline; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
                
        } catch (IOException e) {
            throw new RuntimeException("Error viewing file", e);
        }
    }
    
    // Download as byte array
    @GetMapping("/download-bytes/{filename}")
    public ResponseEntity<byte[]> downloadFileAsBytes(@PathVariable String filename) {
        
        try {
            Path filePath = Paths.get(uploadDir).resolve(filename);
            byte[] data = Files.readAllBytes(filePath);
            
            return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, 
                       "attachment; filename=\"" + filename + "\"")
                .body(data);
                
        } catch (IOException e) {
            throw new RuntimeException("Error downloading file", e);
        }
    }
}
```

### File Configuration

```properties
# application.properties

# Max file size
spring.servlet.multipart.max-file-size=5MB
spring.servlet.multipart.max-request-size=10MB

# Enable multipart
spring.servlet.multipart.enabled=true

# Temp location
spring.servlet.multipart.location=/tmp

# Custom upload directory
file.upload-dir=uploads/
```

### File Service

```java
@Service
public class FileStorageService {
    
    private final Path fileStorageLocation;
    
    public FileStorageService(@Value("${file.upload-dir}") String uploadDir) {
        this.fileStorageLocation = Paths.get(uploadDir).toAbsolutePath().normalize();
        
        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (IOException e) {
            throw new RuntimeException("Could not create upload directory", e);
        }
    }
    
    public String storeFile(MultipartFile file) {
        // Normalize filename
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        
        try {
            // Check for invalid characters
            if (filename.contains("..")) {
                throw new IllegalArgumentException("Invalid filename: " + filename);
            }
            
            // Generate unique filename
            String uniqueFilename = System.currentTimeMillis() + "_" + filename;
            
            // Copy file
            Path targetLocation = this.fileStorageLocation.resolve(uniqueFilename);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            
            return uniqueFilename;
            
        } catch (IOException e) {
            throw new RuntimeException("Failed to store file " + filename, e);
        }
    }
    
    public Resource loadFileAsResource(String filename) {
        try {
            Path filePath = this.fileStorageLocation.resolve(filename).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            
            if (resource.exists()) {
                return resource;
            } else {
                throw new FileNotFoundException("File not found: " + filename);
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("File not found: " + filename, e);
        }
    }
    
    public void deleteFile(String filename) {
        try {
            Path filePath = this.fileStorageLocation.resolve(filename).normalize();
            Files.deleteIfExists(filePath);
        } catch (IOException e) {
            throw new RuntimeException("Failed to delete file: " + filename, e);
        }
    }
}
```

### Image Upload with Validation

```java
@RestController
@RequestMapping("/api/images")
public class ImageController {
    
    @Autowired
    private FileStorageService fileStorageService;
    
    private static final List<String> ALLOWED_EXTENSIONS = Arrays.asList("jpg", "jpeg", "png", "gif");
    private static final long MAX_SIZE = 5 * 1024 * 1024;  // 5MB
    
    @PostMapping("/upload")
    public ResponseEntity<FileUploadResponse> uploadImage(
            @RequestParam("image") MultipartFile file) {
        
        // Validate
        validateImageFile(file);
        
        // Store file
        String filename = fileStorageService.storeFile(file);
        
        // Create response
        FileUploadResponse response = new FileUploadResponse(
            filename,
            file.getContentType(),
            file.getSize(),
            "/api/images/" + filename
        );
        
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/{filename}")
    public ResponseEntity<Resource> getImage(@PathVariable String filename) {
        Resource resource = fileStorageService.loadFileAsResource(filename);
        
        String contentType = "image/jpeg";
        if (filename.endsWith(".png")) contentType = "image/png";
        else if (filename.endsWith(".gif")) contentType = "image/gif";
        
        return ResponseEntity.ok()
            .contentType(MediaType.parseMediaType(contentType))
            .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + filename + "\"")
            .body(resource);
    }
    
    private void validateImageFile(MultipartFile file) {
        if (file.isEmpty()) {
            throw new IllegalArgumentException("File is empty");
        }
        
        // Check size
        if (file.getSize() > MAX_SIZE) {
            throw new IllegalArgumentException("File size exceeds 5MB");
        }
        
        // Check extension
        String filename = file.getOriginalFilename();
        String extension = filename.substring(filename.lastIndexOf(".") + 1).toLowerCase();
        
        if (!ALLOWED_EXTENSIONS.contains(extension)) {
            throw new IllegalArgumentException(
                "Only " + ALLOWED_EXTENSIONS + " files are allowed"
            );
        }
        
        // Check content type
        String contentType = file.getContentType();
        if (contentType == null || !contentType.startsWith("image/")) {
            throw new IllegalArgumentException("File must be an image");
        }
    }
}
```

### CSV/Excel Upload

```java
@PostMapping("/upload/csv")
public ResponseEntity<String> uploadCSV(@RequestParam("file") MultipartFile file) {
    
    if (!file.getOriginalFilename().endsWith(".csv")) {
        throw new IllegalArgumentException("Only CSV files allowed");
    }
    
    try (BufferedReader reader = new BufferedReader(
            new InputStreamReader(file.getInputStream()))) {
        
        List<User> users = new ArrayList<>();
        String line;
        boolean isHeader = true;
        
        while ((line = reader.readLine()) != null) {
            if (isHeader) {
                isHeader = false;
                continue;  // Skip header
            }
            
            String[] fields = line.split(",");
            User user = new User();
            user.setName(fields[0]);
            user.setEmail(fields[1]);
            user.setAge(Integer.parseInt(fields[2]));
            users.add(user);
        }
        
        userRepository.saveAll(users);
        
        return ResponseEntity.ok("Imported " + users.size() + " users");
        
    } catch (IOException e) {
        throw new RuntimeException("Failed to parse CSV file", e);
    }
}
```

---

## Complete REST API Example

```java
// Entity
@Entity
@Table(name = "products")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String description;
    private Double price;
    private Integer stock;
    private LocalDateTime createdAt;
}

// Request DTO
@Data
public class ProductRequestDTO {
    @NotBlank(message = "Product name is required")
    @Size(min = 3, max = 100)
    private String name;
    
    @Size(max = 500)
    private String description;
    
    @NotNull(message = "Price is required")
    @Positive(message = "Price must be positive")
    private Double price;
    
    @NotNull(message = "Stock is required")
    @PositiveOrZero(message = "Stock cannot be negative")
    private Integer stock;
}

// Response DTO
@Data
public class ProductResponseDTO {
    private Long id;
    private String name;
    private String description;
    private Double price;
    private Integer stock;
    private LocalDateTime createdAt;
}

// Repository
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContaining(String name);
    List<Product> findByPriceBetween(Double minPrice, Double maxPrice);
}

// Service
@Service
@Transactional
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;
    
    @Autowired
    private ProductMapper productMapper;
    
    public List<ProductResponseDTO> getAllProducts() {
        return productRepository.findAll().stream()
            .map(productMapper::toResponseDTO)
            .collect(Collectors.toList());
    }
    
    public ProductResponseDTO getProductById(Long id) {
        Product product = productRepository.findById(id)
            .orElseThrow(() -> new ProductNotFoundException(id));
        return productMapper.toResponseDTO(product);
    }
    
    public ProductResponseDTO createProduct(ProductRequestDTO dto) {
        Product product = productMapper.toEntity(dto);
        product.setCreatedAt(LocalDateTime.now());
        Product saved = productRepository.save(product);
        return productMapper.toResponseDTO(saved);
    }
    
    public ProductResponseDTO updateProduct(Long id, ProductRequestDTO dto) {
        Product product = productRepository.findById(id)
            .orElseThrow(() -> new ProductNotFoundException(id));
        
        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setPrice(dto.getPrice());
        product.setStock(dto.getStock());
        
        Product updated = productRepository.save(product);
        return productMapper.toResponseDTO(updated);
    }
    
    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException(id);
        }
        productRepository.deleteById(id);
    }
}

// Controller
@RestController
@RequestMapping("/api/products")
public class ProductController {
    
    @Autowired
    private ProductService productService;
    
    @GetMapping
    public ResponseEntity<List<ProductResponseDTO>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> getProduct(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }
    
    @PostMapping
    public ResponseEntity<ProductResponseDTO> createProduct(
            @Valid @RequestBody ProductRequestDTO productRequest) {
        ProductResponseDTO created = productService.createProduct(productRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> updateProduct(
            @PathVariable Long id,
            @Valid @RequestBody ProductRequestDTO productRequest) {
        ProductResponseDTO updated = productService.updateProduct(id, productRequest);
        return ResponseEntity.ok(updated);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }
}

// Exception Handler
@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleProductNotFound(ProductNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(404, ex.getMessage(), LocalDateTime.now());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationErrors(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> 
            errors.put(error.getField(), error.getDefaultMessage())
        );
        return ResponseEntity.badRequest().body(errors);
    }
}
```

---

## Summary

Building REST APIs with Spring Boot:

### HTTP Method Annotations
- **@GetMapping**: Retrieve data (200 OK)
- **@PostMapping**: Create resource (201 Created)
- **@PutMapping**: Full update (200 OK)
- **@PatchMapping**: Partial update (200 OK)
- **@DeleteMapping**: Delete resource (204 No Content)
- **@RequestMapping**: Generic (supports all methods)

### Request Parameters
- **@PathVariable**: Extract from URL path
- **@RequestParam**: Extract from query string
- **@RequestBody**: Parse JSON request body
- **@RequestHeader**: Extract HTTP headers

### Response Handling
- **ResponseEntity**: Control status, headers, body
- **@ResponseStatus**: Set HTTP status on method
- Status codes: 200, 201, 204, 400, 404, 500

### DTOs (Data Transfer Objects)
- **Request DTO**: What client sends
- **Response DTO**: What client receives
- Separate from entities for security and flexibility
- Use mappers for conversion
- Support nested objects and lists

### Validation
- **@Valid**: Trigger validation
- **@NotNull, @NotBlank, @NotEmpty**: Presence checks
- **@Size, @Min, @Max**: Size constraints
- **@Email, @Pattern**: Format validation
- **@Past, @Future**: Date validation
- Custom validators with @Constraint
- Nested validation with @Valid
- Validation groups for different scenarios

### Exception Handling
- **@ControllerAdvice**: Global exception handler
- **@ExceptionHandler**: Handle specific exceptions
- **@RestControllerAdvice**: For REST APIs
- ResponseEntityExceptionHandler for Spring exceptions
- Custom exception classes
- Consistent error response format

### File Operations
- **Upload**: MultipartFile, validation, storage
- **Download**: Resource, content-type, disposition headers
- **Multiple files**: Array of MultipartFile
- **Configuration**: max-file-size, max-request-size
- File validation: type, size, extension
- CSV/Excel processing

### Best Practices
1. Use DTOs to separate API from domain
2. Validate all inputs with @Valid
3. Return appropriate HTTP status codes
4. Use ResponseEntity for flexibility
5. Centralize exception handling
6. Provide meaningful error messages
7. Validate file uploads (type, size)
8. Use service layer for business logic
9. Keep controllers thin
10. Version your APIs

REST APIs with Spring Boot are production-ready, secure, and easy to maintain.

---

## 4. Spring Web & MVC

Spring MVC framework for building web applications and REST APIs.

## Dispatcher Servlet

The front controller that handles all incoming HTTP requests in Spring MVC.

### How It Works

```
Client Request
      ↓
DispatcherServlet (Front Controller)
      ↓
Handler Mapping (Find controller)
      ↓
Controller (Handle request)
      ↓
View Resolver (Resolve view)
      ↓
View (Render response)
      ↓
Response to Client
```

### Request Flow

1. **Client** sends HTTP request
2. **DispatcherServlet** receives request
3. **HandlerMapping** finds appropriate controller
4. **Controller** processes request
5. **Model** contains data
6. **ViewResolver** resolves view name
7. **View** renders response
8. Response sent to **client**

### Auto-configuration

```java
// Spring Boot auto-configures DispatcherServlet
// No manual configuration needed!

@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
// DispatcherServlet automatically configured at "/"
```

### Custom DispatcherServlet Configuration

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Bean
    public DispatcherServlet dispatcherServlet() {
        DispatcherServlet dispatcher = new DispatcherServlet();
        dispatcher.setThrowExceptionIfNoHandlerFound(true);
        return dispatcher;
    }
}
```

```properties
# application.properties

# DispatcherServlet path (default: /)
spring.mvc.servlet.path=/api

# Throw exception if no handler found
spring.mvc.throw-exception-if-no-handler-found=true

# Dispatch options requests
spring.mvc.dispatch-options-request=true
```

---

## Filters vs Interceptors

Both intercept requests but at different levels.

### Filter (Servlet Level)

Part of Java Servlet API, executes before DispatcherServlet.

```java
@Component
public class LoggingFilter implements Filter {
    
    private static final Logger log = LoggerFactory.getLogger(LoggingFilter.class);
    
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        log.info("Filter initialized");
    }
    
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        
        log.info("Request: {} {}", httpRequest.getMethod(), httpRequest.getRequestURI());
        
        // Continue chain
        chain.doFilter(request, response);
        
        log.info("Response: {}", httpResponse.getStatus());
    }
    
    @Override
    public void destroy() {
        log.info("Filter destroyed");
    }
}
```

#### Custom Filter with Order

```java
@Component
@Order(1)  // Execution order (lower = earlier)
public class AuthenticationFilter implements Filter {
    
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String authHeader = httpRequest.getHeader("Authorization");
        
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            HttpServletResponse httpResponse = (HttpServletResponse) response;
            httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            httpResponse.getWriter().write("Unauthorized");
            return;  // Stop chain
        }
        
        chain.doFilter(request, response);
    }
}
```

#### Registering Filter Programmatically

```java
@Configuration
public class FilterConfig {
    
    @Bean
    public FilterRegistrationBean<CustomFilter> customFilter() {
        FilterRegistrationBean<CustomFilter> registration = new FilterRegistrationBean<>();
        registration.setFilter(new CustomFilter());
        registration.addUrlPatterns("/api/*");
        registration.setOrder(1);
        registration.setName("customFilter");
        return registration;
    }
}
```

### Interceptor (Spring MVC Level)

Spring-specific, executes after DispatcherServlet but before controller.

```java
@Component
public class LoggingInterceptor implements HandlerInterceptor {
    
    private static final Logger log = LoggerFactory.getLogger(LoggingInterceptor.class);
    
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, 
                            Object handler) throws Exception {
        log.info("Pre Handle: {} {}", request.getMethod(), request.getRequestURI());
        
        // Return true to continue, false to stop
        return true;
    }
    
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, 
                          Object handler, ModelAndView modelAndView) throws Exception {
        log.info("Post Handle: Status {}", response.getStatus());
    }
    
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, 
                               Object handler, Exception ex) throws Exception {
        log.info("After Completion: Request completed");
        if (ex != null) {
            log.error("Exception occurred: ", ex);
        }
    }
}

// Register interceptor
@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Autowired
    private LoggingInterceptor loggingInterceptor;
    
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loggingInterceptor)
                .addPathPatterns("/api/**")
                .excludePathPatterns("/api/public/**");
    }
}
```

#### Authentication Interceptor

```java
@Component
public class AuthInterceptor implements HandlerInterceptor {
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, 
                            Object handler) throws Exception {
        
        String authHeader = request.getHeader("Authorization");
        
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            
            if (jwtUtil.validateToken(token)) {
                return true;  // Continue
            }
        }
        
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write("Unauthorized");
        return false;  // Stop execution
    }
}
```

#### Performance Monitoring Interceptor

```java
@Component
public class PerformanceInterceptor implements HandlerInterceptor {
    
    private static final Logger log = LoggerFactory.getLogger(PerformanceInterceptor.class);
    
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, 
                            Object handler) throws Exception {
        long startTime = System.currentTimeMillis();
        request.setAttribute("startTime", startTime);
        return true;
    }
    
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, 
                               Object handler, Exception ex) throws Exception {
        long startTime = (Long) request.getAttribute("startTime");
        long endTime = System.currentTimeMillis();
        long executionTime = endTime - startTime;
        
        log.info("Request: {} {} completed in {}ms", 
                request.getMethod(), 
                request.getRequestURI(), 
                executionTime);
    }
}
```

### Filter vs Interceptor

| Feature | Filter | Interceptor |
|---------|--------|-------------|
| **Level** | Servlet (J2EE) | Spring MVC |
| **Access to** | Request/Response | Request/Response/Handler/ModelAndView |
| **Spring Context** | No | Yes (can inject beans) |
| **Execution** | Before DispatcherServlet | After DispatcherServlet |
| **Methods** | doFilter | preHandle, postHandle, afterCompletion |
| **Use Case** | Logging, authentication, encoding | Business logic, performance, validation |

---

## Handler Methods

Methods in controllers that handle requests.

### Method Parameters

```java
@RestController
@RequestMapping("/api/demo")
public class HandlerMethodsController {
    
    // Path variables
    @GetMapping("/users/{id}")
    public String pathVariable(@PathVariable Long id) {
        return "User ID: " + id;
    }
    
    // Multiple path variables
    @GetMapping("/users/{userId}/posts/{postId}")
    public String multiplePaths(@PathVariable Long userId, @PathVariable Long postId) {
        return "User: " + userId + ", Post: " + postId;
    }
    
    // Path variable with different name
    @GetMapping("/products/{id}")
    public String pathVariableName(@PathVariable("id") Long productId) {
        return "Product: " + productId;
    }
    
    // Request parameters
    @GetMapping("/search")
    public String requestParam(@RequestParam String keyword) {
        return "Searching for: " + keyword;
    }
    
    // Optional request parameter
    @GetMapping("/filter")
    public String optionalParam(@RequestParam(required = false) String category) {
        return "Category: " + (category != null ? category : "All");
    }
    
    // Request parameter with default
    @GetMapping("/page")
    public String paramWithDefault(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        return "Page: " + page + ", Size: " + size;
    }
    
    // Request body
    @PostMapping("/users")
    public User requestBody(@RequestBody User user) {
        return user;
    }
    
    // Request headers
    @GetMapping("/headers")
    public String requestHeaders(
            @RequestHeader("User-Agent") String userAgent,
            @RequestHeader(value = "Accept-Language", defaultValue = "en") String language) {
        return "User-Agent: " + userAgent + ", Language: " + language;
    }
    
    // All headers
    @GetMapping("/all-headers")
    public String allHeaders(@RequestHeader HttpHeaders headers) {
        return "Headers: " + headers.toString();
    }
    
    // Cookie value
    @GetMapping("/cookie")
    public String cookieValue(@CookieValue(value = "sessionId", defaultValue = "none") String sessionId) {
        return "Session ID: " + sessionId;
    }
    
    // Request and Response objects
    @GetMapping("/raw")
    public void rawObjects(HttpServletRequest request, HttpServletResponse response) 
            throws IOException {
        String method = request.getMethod();
        String uri = request.getRequestURI();
        response.getWriter().write("Method: " + method + ", URI: " + uri);
    }
    
    // Model (for MVC)
    @GetMapping("/view")
    public String modelExample(Model model) {
        model.addAttribute("message", "Hello from Model");
        return "viewName";
    }
    
    // ModelAndView
    @GetMapping("/mav")
    public ModelAndView modelAndView() {
        ModelAndView mav = new ModelAndView("viewName");
        mav.addObject("message", "Hello from ModelAndView");
        return mav;
    }
    
    // Principal (authenticated user)
    @GetMapping("/me")
    public String currentUser(Principal principal) {
        return "Current user: " + principal.getName();
    }
}
```

### Return Types

```java
@RestController
@RequestMapping("/api/responses")
public class ReturnTypesController {
    
    // 1. Direct object (serialized to JSON)
    @GetMapping("/user")
    public User getUser() {
        return new User("Alice", "alice@example.com");
    }
    
    // 2. ResponseEntity (with status and headers)
    @GetMapping("/user-entity")
    public ResponseEntity<User> getUserEntity() {
        User user = new User("Bob", "bob@example.com");
        return ResponseEntity.ok()
            .header("X-Custom-Header", "value")
            .body(user);
    }
    
    // 3. String (returns plain text)
    @GetMapping("/text")
    public String getText() {
        return "Plain text response";
    }
    
    // 4. void (for 204 No Content)
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        // Delete logic
    }
    
    // 5. List/Collection
    @GetMapping("/users")
    public List<User> getUsers() {
        return Arrays.asList(
            new User("Alice", "alice@example.com"),
            new User("Bob", "bob@example.com")
        );
    }
    
    // 6. Map
    @GetMapping("/map")
    public Map<String, Object> getMap() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("data", "value");
        return response;
    }
    
    // 7. CompletableFuture (async)
    @GetMapping("/async")
    public CompletableFuture<User> getAsync() {
        return CompletableFuture.supplyAsync(() -> {
            // Simulate async operation
            return new User("Async User", "async@example.com");
        });
    }
}
```

---

## Pagination & Sorting

Spring Data provides built-in support for pagination and sorting.

### Basic Pagination

```java
// Repository
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // JpaRepository provides pagination support
}

// Service
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public Page<User> getUsers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return userRepository.findAll(pageable);
    }
}

// Controller
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping
    public ResponseEntity<Page<User>> getUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        
        Page<User> users = userService.getUsers(page, size);
        return ResponseEntity.ok(users);
    }
}
```

### Pagination with Sorting

```java
@Service
public class UserService {
    
    // Sort by single field
    public Page<User> getUsersSorted(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return userRepository.findAll(pageable);
    }
    
    // Sort descending
    public Page<User> getUsersSortedDesc(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy).descending());
        return userRepository.findAll(pageable);
    }
    
    // Multiple sort fields
    public Page<User> getUsersMultipleSort(int page, int size) {
        Sort sort = Sort.by("age").ascending()
                       .and(Sort.by("name").descending());
        Pageable pageable = PageRequest.of(page, size, sort);
        return userRepository.findAll(pageable);
    }
}

// Controller
@GetMapping
public ResponseEntity<Page<User>> getUsers(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size,
        @RequestParam(defaultValue = "id") String sortBy,
        @RequestParam(defaultValue = "asc") String direction) {
    
    Sort sort = direction.equalsIgnoreCase("asc") 
        ? Sort.by(sortBy).ascending() 
        : Sort.by(sortBy).descending();
    
    Pageable pageable = PageRequest.of(page, size, sort);
    Page<User> users = userRepository.findAll(pageable);
    
    return ResponseEntity.ok(users);
}
```

### Custom Pageable Parameter

```java
@GetMapping
public ResponseEntity<Page<User>> getUsers(Pageable pageable) {
    // Spring automatically creates Pageable from request params
    // ?page=0&size=10&sort=name,asc&sort=age,desc
    
    Page<User> users = userRepository.findAll(pageable);
    return ResponseEntity.ok(users);
}

// Configure defaults
@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        PageableHandlerMethodArgumentResolver resolver = new PageableHandlerMethodArgumentResolver();
        resolver.setFallbackPageable(PageRequest.of(0, 20));  // Default page 0, size 20
        resolver.setMaxPageSize(100);  // Max size 100
        resolvers.add(resolver);
    }
}
```

### Custom Page Response

```java
// Custom response to avoid exposing Page internals
@Data
@AllArgsConstructor
public class PageResponse<T> {
    private List<T> content;
    private int pageNumber;
    private int pageSize;
    private long totalElements;
    private int totalPages;
    private boolean first;
    private boolean last;
    
    public static <T> PageResponse<T> from(Page<T> page) {
        return new PageResponse<>(
            page.getContent(),
            page.getNumber(),
            page.getSize(),
            page.getTotalElements(),
            page.getTotalPages(),
            page.isFirst(),
            page.isLast()
        );
    }
}

// Controller
@GetMapping
public ResponseEntity<PageResponse<UserResponseDTO>> getUsers(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size) {
    
    Page<User> userPage = userService.getUsers(page, size);
    
    // Convert entities to DTOs
    Page<UserResponseDTO> dtoPage = userPage.map(userMapper::toResponseDTO);
    
    // Wrap in custom response
    PageResponse<UserResponseDTO> response = PageResponse.from(dtoPage);
    
    return ResponseEntity.ok(response);
}
```

### Repository Query with Pagination

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Query methods with pagination
    Page<User> findByAgeGreaterThan(int age, Pageable pageable);
    
    Page<User> findByNameContaining(String name, Pageable pageable);
    
    @Query("SELECT u FROM User u WHERE u.email LIKE %:domain%")
    Page<User> findByEmailDomain(@Param("domain") String domain, Pageable pageable);
}
```

---

## CORS Configuration

Cross-Origin Resource Sharing allows requests from different origins.

### Method-Level CORS

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    // Allow specific origin
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    
    // Allow multiple origins
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    // Allow all origins (not recommended for production)
    @CrossOrigin(origins = "*")
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
}
```

### Controller-Level CORS

```java
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000", 
            maxAge = 3600,
            allowedHeaders = "*",
            methods = {RequestMethod.GET, RequestMethod.POST})
public class UserController {
    // All methods inherit CORS configuration
}
```

### Global CORS Configuration

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000", "http://localhost:4200")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
        
        // Different config for different paths
        registry.addMapping("/public/**")
                .allowedOrigins("*")
                .allowedMethods("GET");
    }
}
```

### CORS Filter (Alternative)

```java
@Configuration
public class CorsFilterConfig {
    
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOriginPattern("*");  // Or specific origins
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        
        source.registerCorsConfiguration("/api/**", config);
        
        return new CorsFilter(source);
    }
}
```

### CORS with Spring Security

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors().and()  // Enable CORS
            .csrf().disable()
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            );
        
        return http.build();
    }
    
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        
        return source;
    }
}
```

---

## Global Request/Response Logging

### Using Interceptor

```java
@Component
@Slf4j
public class RequestResponseLoggingInterceptor implements HandlerInterceptor {
    
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, 
                            Object handler) throws Exception {
        
        log.info("========== Incoming Request ==========");
        log.info("Method: {}", request.getMethod());
        log.info("URI: {}", request.getRequestURI());
        log.info("Query String: {}", request.getQueryString());
        log.info("Remote Address: {}", request.getRemoteAddr());
        
        // Log headers
        Enumeration<String> headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            log.info("Header {}: {}", headerName, request.getHeader(headerName));
        }
        
        return true;
    }
    
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, 
                               Object handler, Exception ex) throws Exception {
        
        log.info("========== Outgoing Response ==========");
        log.info("Status: {}", response.getStatus());
        log.info("Content Type: {}", response.getContentType());
        
        if (ex != null) {
            log.error("Exception: ", ex);
        }
    }
}
```

### Using Filter for Request Body Logging

```java
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class RequestBodyLoggingFilter extends OncePerRequestFilter {
    
    private static final Logger log = LoggerFactory.getLogger(RequestBodyLoggingFilter.class);
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, 
                                    FilterChain filterChain) throws ServletException, IOException {
        
        // Wrap request to allow reading body multiple times
        ContentCachingRequestWrapper wrappedRequest = new ContentCachingRequestWrapper(request);
        ContentCachingResponseWrapper wrappedResponse = new ContentCachingResponseWrapper(response);
        
        try {
            // Continue filter chain
            filterChain.doFilter(wrappedRequest, wrappedResponse);
        } finally {
            // Log request
            logRequest(wrappedRequest);
            
            // Log response
            logResponse(wrappedResponse);
            
            // Copy response body to actual response
            wrappedResponse.copyBodyToResponse();
        }
    }
    
    private void logRequest(ContentCachingRequestWrapper request) {
        byte[] content = request.getContentAsByteArray();
        if (content.length > 0) {
            String body = new String(content, StandardCharsets.UTF_8);
            log.info("Request Body: {}", body);
        }
    }
    
    private void logResponse(ContentCachingResponseWrapper response) {
        byte[] content = response.getContentAsByteArray();
        if (content.length > 0) {
            String body = new String(content, StandardCharsets.UTF_8);
            log.info("Response Body: {}", body);
        }
    }
}
```

### Using @ControllerAdvice for Logging

```java
@ControllerAdvice
@Slf4j
public class RequestResponseLogger {
    
    @ModelAttribute
    public void logRequest(HttpServletRequest request) {
        log.info("Request: {} {}", request.getMethod(), request.getRequestURI());
    }
}
```

### Custom Logging Annotation

```java
// Custom annotation
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface LogExecutionTime {
}

// Aspect for logging
@Aspect
@Component
@Slf4j
public class LoggingAspect {
    
    @Around("@annotation(LogExecutionTime)")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        
        Object result = joinPoint.proceed();
        
        long executionTime = System.currentTimeMillis() - start;
        
        log.info("{} executed in {}ms", 
                joinPoint.getSignature().getName(), 
                executionTime);
        
        return result;
    }
    
    // Log all controller methods
    @Before("execution(* com.example.myapp.controller.*.*(..))")
    public void logControllerMethods(JoinPoint joinPoint) {
        log.info("Executing: {}", joinPoint.getSignature().getName());
        
        Object[] args = joinPoint.getArgs();
        for (Object arg : args) {
            log.debug("Argument: {}", arg);
        }
    }
}

// Usage
@RestController
public class UserController {
    
    @LogExecutionTime
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }
}
```

### Structured Logging

```java
@Component
@Slf4j
public class StructuredLogger {
    
    public void logRequest(HttpServletRequest request, Object body) {
        Map<String, Object> logData = new HashMap<>();
        logData.put("timestamp", LocalDateTime.now());
        logData.put("method", request.getMethod());
        logData.put("uri", request.getRequestURI());
        logData.put("remoteAddr", request.getRemoteAddr());
        logData.put("body", body);
        
        log.info("Request: {}", logData);
    }
    
    public void logResponse(int status, Object body, long executionTime) {
        Map<String, Object> logData = new HashMap<>();
        logData.put("timestamp", LocalDateTime.now());
        logData.put("status", status);
        logData.put("executionTime", executionTime + "ms");
        logData.put("body", body);
        
        log.info("Response: {}", logData);
    }
}
```

### MDC (Mapped Diagnostic Context) for Correlation

```java
@Component
public class CorrelationIdFilter extends OncePerRequestFilter {
    
    private static final String CORRELATION_ID_HEADER = "X-Correlation-Id";
    private static final String CORRELATION_ID_KEY = "correlationId";
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, 
                                    FilterChain filterChain) throws ServletException, IOException {
        
        // Get or generate correlation ID
        String correlationId = request.getHeader(CORRELATION_ID_HEADER);
        if (correlationId == null) {
            correlationId = UUID.randomUUID().toString();
        }
        
        // Set in MDC
        MDC.put(CORRELATION_ID_KEY, correlationId);
        
        // Add to response header
        response.setHeader(CORRELATION_ID_HEADER, correlationId);
        
        try {
            filterChain.doFilter(request, response);
        } finally {
            MDC.clear();
        }
    }
}

// Logback pattern to include correlation ID
// %d{yyyy-MM-dd HH:mm:ss} [%X{correlationId}] [%thread] %-5level %logger{36} - %msg%n
```

---

## Advanced Handler Features

### Content Negotiation

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    // Produces JSON (default)
    @GetMapping(produces = "application/json")
    public User getUserJson(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    // Produces XML
    @GetMapping(produces = "application/xml")
    public User getUserXml(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    // Multiple content types
    @GetMapping(produces = {"application/json", "application/xml"})
    public User getUser(@PathVariable Long id) {
        // Returns JSON or XML based on Accept header
        return userService.getUserById(id);
    }
    
    // Consumes specific content type
    @PostMapping(consumes = "application/json", produces = "application/json")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
}
```

### Matrix Variables

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        UrlPathHelper urlPathHelper = new UrlPathHelper();
        urlPathHelper.setRemoveSemicolonContent(false);
        configurer.setUrlPathHelper(urlPathHelper);
    }
}

@RestController
public class MatrixVariableController {
    
    // URL: /users/42;name=Alice;age=25
    @GetMapping("/users/{id}")
    public String getUser(
            @PathVariable Long id,
            @MatrixVariable String name,
            @MatrixVariable int age) {
        return "ID: " + id + ", Name: " + name + ", Age: " + age;
    }
}
```

### Request Part (Multipart)

```java
@PostMapping("/upload")
public ResponseEntity<String> uploadWithMetadata(
        @RequestPart("file") MultipartFile file,
        @RequestPart("metadata") FileMetadata metadata) {
    
    // file: the uploaded file
    // metadata: JSON object with file metadata
    
    String filename = fileService.store(file, metadata);
    return ResponseEntity.ok("File uploaded: " + filename);
}
```

### Session Attributes

```java
@Controller
@SessionAttributes("user")
public class SessionController {
    
    @ModelAttribute("user")
    public User createUser() {
        return new User();
    }
    
    @PostMapping("/login")
    public String login(@ModelAttribute("user") User user) {
        // User object stored in session
        return "redirect:/dashboard";
    }
    
    @GetMapping("/profile")
    public String profile(@ModelAttribute("user") User user, Model model) {
        // User retrieved from session
        model.addAttribute("username", user.getName());
        return "profile";
    }
}
```

---

## Summary

Spring Web & MVC features:

### Dispatcher Servlet
- **Front controller** for all requests
- Auto-configured in Spring Boot
- Request flow: Client → Dispatcher → Handler Mapping → Controller → View → Response

### Filters vs Interceptors
- **Filter**: Servlet level, before DispatcherServlet
  - Use for: Authentication, logging, encoding
  - Implements Filter interface
  - Register with @Component or FilterRegistrationBean
  
- **Interceptor**: Spring MVC level, after DispatcherServlet
  - Use for: Business logic, performance, authorization
  - Implements HandlerInterceptor
  - Register with WebMvcConfigurer.addInterceptors()
  - Has access to Spring beans

### Handler Methods
- **Parameters**: @PathVariable, @RequestParam, @RequestBody, @RequestHeader, @CookieValue
- **Return types**: Object, ResponseEntity, String, void, List, CompletableFuture
- **Model**: For MVC views
- **Principal**: For authenticated user

### Pagination & Sorting
- **Pageable**: Spring Data pagination support
- **PageRequest.of(page, size, sort)**
- **Sort**: Single or multiple fields, ascending/descending
- Custom PageResponse for API
- Query methods with Pageable parameter

### CORS Configuration
- **Method-level**: @CrossOrigin on methods
- **Controller-level**: @CrossOrigin on class
- **Global**: WebMvcConfigurer.addCorsMappings()
- **Filter**: CorsFilter bean
- Configure: origins, methods, headers, credentials

### Request/Response Logging
- **Interceptor**: For basic logging
- **Filter**: For body logging (ContentCachingRequestWrapper)
- **Aspect**: With @Around for execution time
- **MDC**: For correlation IDs across logs
- **Structured logging**: JSON format for better analysis

### Best Practices
1. Use interceptors for Spring-aware logic
2. Use filters for servlet-level operations
3. Implement pagination for large datasets
4. Configure CORS properly (avoid "*" in production)
5. Log correlation IDs for request tracing
6. Use appropriate handler method parameters
7. Return ResponseEntity for full control
8. Configure reasonable page size limits
9. Log important requests (not all in production)
10. Use MDC for contextual logging

Spring Web & MVC provides powerful features for building scalable, maintainable web applications.

---

## 5. Spring Data JPA

Spring Data JPA simplifies database access by reducing boilerplate code and providing repository abstraction.

## Entities & Relationships

### Basic Entity

```java
@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "user_name", nullable = false, unique = true, length = 50)
    private String username;
    
    @Column(nullable = false)
    private String email;
    
    private Integer age;
    
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @Enumerated(EnumType.STRING)
    private UserStatus status;
    
    @Lob  // Large object (BLOB/CLOB)
    private String bio;
    
    @Transient  // Not persisted to database
    private String temporaryData;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}

enum UserStatus {
    ACTIVE, INACTIVE, SUSPENDED
}
```

### Primary Key Generation Strategies

```java
// 1. Auto (default)
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;

// 2. Identity (auto-increment)
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

// 3. Sequence
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
@SequenceGenerator(name = "user_seq", sequenceName = "user_sequence", allocationSize = 1)
private Long id;

// 4. Table
@Id
@GeneratedValue(strategy = GenerationType.TABLE, generator = "user_gen")
@TableGenerator(name = "user_gen", table = "id_generator", pkColumnName = "gen_name", 
                valueColumnName = "gen_value", allocationSize = 1)
private Long id;

// 5. UUID
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private UUID id;

// Or manual UUID
@Id
private UUID id = UUID.randomUUID();
```

### @OneToOne Relationship

```java
// User has one Profile
@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "profile_id", referencedColumnName = "id")
    private UserProfile profile;
}

@Entity
@Data
public class UserProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String bio;
    private String website;
    
    @OneToOne(mappedBy = "profile")
    private User user;
}

// Usage
User user = new User();
user.setUsername("alice");

UserProfile profile = new UserProfile();
profile.setBio("Software Developer");
user.setProfile(profile);

userRepository.save(user);  // Saves both user and profile (cascade)
```

### @OneToMany / @ManyToOne Relationship

```java
// One Department has Many Employees
@Entity
@Data
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Employee> employees = new ArrayList<>();
    
    // Helper methods
    public void addEmployee(Employee employee) {
        employees.add(employee);
        employee.setDepartment(this);
    }
    
    public void removeEmployee(Employee employee) {
        employees.remove(employee);
        employee.setDepartment(null);
    }
}

@Entity
@Data
@EqualsAndHashCode(exclude = "department")
@ToString(exclude = "department")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private Double salary;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id")
    private Department department;
}

// Usage
Department dept = new Department();
dept.setName("IT");

Employee emp1 = new Employee();
emp1.setName("Alice");
emp1.setSalary(50000.0);

Employee emp2 = new Employee();
emp2.setName("Bob");
emp2.setSalary(55000.0);

dept.addEmployee(emp1);
dept.addEmployee(emp2);

departmentRepository.save(dept);  // Saves department and employees
```

### @ManyToMany Relationship

```java
// Student can enroll in many Courses
// Course can have many Students
@Entity
@Data
@EqualsAndHashCode(exclude = "courses")
@ToString(exclude = "courses")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String email;
    
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses = new HashSet<>();
    
    // Helper methods
    public void enrollCourse(Course course) {
        courses.add(course);
        course.getStudents().add(this);
    }
    
    public void unenrollCourse(Course course) {
        courses.remove(course);
        course.getStudents().remove(this);
    }
}

@Entity
@Data
@EqualsAndHashCode(exclude = "students")
@ToString(exclude = "students")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String code;
    
    @ManyToMany(mappedBy = "courses")
    private Set<Student> students = new HashSet<>();
}

// Usage
Student student = new Student();
student.setName("Alice");
student.setEmail("alice@example.com");

Course course1 = new Course();
course1.setName("Java Programming");
course1.setCode("CS101");

Course course2 = new Course();
course2.setName("Database Systems");
course2.setCode("CS201");

student.enrollCourse(course1);
student.enrollCourse(course2);

studentRepository.save(student);
```

### Cascade Types

```java
@OneToMany(cascade = CascadeType.ALL)  // All operations
@OneToMany(cascade = CascadeType.PERSIST)  // Save child when parent saved
@OneToMany(cascade = CascadeType.MERGE)  // Update child when parent updated
@OneToMany(cascade = CascadeType.REMOVE)  // Delete child when parent deleted
@OneToMany(cascade = CascadeType.REFRESH)  // Reload child when parent refreshed
@OneToMany(cascade = CascadeType.DETACH)  // Detach child when parent detached

// Multiple cascades
@OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})

// orphanRemoval - delete child when removed from collection
@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
```

### Fetch Types

```java
// LAZY - Load on demand (default for collections)
@OneToMany(fetch = FetchType.LAZY)
private List<Employee> employees;  // Not loaded until accessed

// EAGER - Load immediately (default for single entities)
@ManyToOne(fetch = FetchType.EAGER)
private Department department;  // Loaded with parent

// Avoid N+1 problem with JOIN FETCH
@Query("SELECT d FROM Department d JOIN FETCH d.employees")
List<Department> findAllWithEmployees();
```

### Bidirectional Relationship Best Practices

```java
// Always use helper methods
public class Department {
    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Employee> employees = new ArrayList<>();
    
    // Helper to maintain both sides
    public void addEmployee(Employee employee) {
        employees.add(employee);
        employee.setDepartment(this);
    }
    
    public void removeEmployee(Employee employee) {
        employees.remove(employee);
        employee.setDepartment(null);
    }
}

// Exclude from toString/equals to avoid infinite loops
@EqualsAndHashCode(exclude = "department")
@ToString(exclude = "department")
public class Employee {
    @ManyToOne
    private Department department;
}
```

---

## JpaRepository & CrudRepository

Spring Data JPA repository interfaces.

### Repository Hierarchy

```
Repository (marker interface)
    ↓
CrudRepository (basic CRUD)
    ↓
PagingAndSortingRepository (pagination & sorting)
    ↓
JpaRepository (JPA specific)
```

### CrudRepository

```java
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    // Inherited methods:
    // save(S entity)
    // saveAll(Iterable<S> entities)
    // findById(ID id)
    // existsById(ID id)
    // findAll()
    // findAllById(Iterable<ID> ids)
    // count()
    // deleteById(ID id)
    // delete(T entity)
    // deleteAll()
}
```

### JpaRepository (Recommended)

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // All CrudRepository methods +
    // flush()
    // saveAndFlush(S entity)
    // deleteInBatch(Iterable<T> entities)
    // deleteAllInBatch()
    // getOne(ID id)  // Deprecated, use getReferenceById
    // getReferenceById(ID id)
}

// Usage in Service
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    // Create
    public User createUser(User user) {
        return userRepository.save(user);
    }
    
    // Read
    public User getUserById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
    }
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    // Update
    public User updateUser(Long id, User userDetails) {
        User user = getUserById(id);
        user.setUsername(userDetails.getUsername());
        user.setEmail(userDetails.getEmail());
        return userRepository.save(user);
    }
    
    // Delete
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    
    // Batch operations
    public List<User> createUsers(List<User> users) {
        return userRepository.saveAll(users);
    }
    
    public void deleteUsers(List<User> users) {
        userRepository.deleteAllInBatch(users);
    }
    
    // Count
    public long countUsers() {
        return userRepository.count();
    }
    
    // Exists
    public boolean userExists(Long id) {
        return userRepository.existsById(id);
    }
}
```

### Repository Comparison

| Feature | CrudRepository | PagingAndSortingRepository | JpaRepository |
|---------|---------------|---------------------------|---------------|
| **Basic CRUD** | ✅ | ✅ | ✅ |
| **Pagination** | ❌ | ✅ | ✅ |
| **Sorting** | ❌ | ✅ | ✅ |
| **Batch Delete** | ❌ | ❌ | ✅ |
| **Flush** | ❌ | ❌ | ✅ |
| **Recommendation** | Basic needs | With pagination | ✅ **Use this** |

---

## Derived Queries

Spring Data JPA generates queries from method names.

### Query Keywords

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Find by field
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    
    // Find multiple
    List<User> findByAge(Integer age);
    List<User> findByStatus(UserStatus status);
    
    // And condition
    List<User> findByUsernameAndEmail(String username, String email);
    
    // Or condition
    List<User> findByUsernameOrEmail(String username, String email);
    
    // Comparison
    List<User> findByAgeGreaterThan(Integer age);
    List<User> findByAgeLessThan(Integer age);
    List<User> findByAgeGreaterThanEqual(Integer age);
    List<User> findByAgeLessThanEqual(Integer age);
    List<User> findByAgeBetween(Integer startAge, Integer endAge);
    
    // Like / Containing
    List<User> findByUsernameLike(String pattern);  // Requires %
    List<User> findByUsernameContaining(String keyword);  // Auto adds %
    List<User> findByUsernameStartingWith(String prefix);
    List<User> findByUsernameEndingWith(String suffix);
    
    // Not / Null
    List<User> findByUsernameNot(String username);
    List<User> findByAgeIsNull();
    List<User> findByAgeIsNotNull();
    
    // In / NotIn
    List<User> findByAgeIn(List<Integer> ages);
    List<User> findByStatusIn(List<UserStatus> statuses);
    List<User> findByAgeNotIn(List<Integer> ages);
    
    // True / False
    List<User> findByActiveTrue();
    List<User> findByActiveFalse();
    
    // Order by
    List<User> findByAgeOrderByUsernameAsc(Integer age);
    List<User> findByAgeOrderByUsernameDesc(Integer age);
    List<User> findByStatusOrderByAgeAscUsernameDesc(UserStatus status);
    
    // Distinct
    List<User> findDistinctByAge(Integer age);
    
    // First / Top
    User findFirstByOrderByIdDesc();
    List<User> findTop5ByOrderByAgeDesc();
    List<User> findFirst10ByStatus(UserStatus status);
    
    // Count
    long countByAge(Integer age);
    long countByStatus(UserStatus status);
    
    // Exists
    boolean existsByEmail(String email);
    boolean existsByUsername(String username);
    
    // Delete
    void deleteByUsername(String username);
    long deleteByAge(Integer age);  // Returns count
}
```

### Combining Keywords

```java
// Complex query method names
List<User> findByAgeGreaterThanAndStatusAndEmailContaining(
    Integer age, UserStatus status, String emailKeyword);

List<User> findByCreatedAtBetweenAndStatusInOrderByCreatedAtDesc(
    LocalDateTime start, LocalDateTime end, List<UserStatus> statuses);

List<User> findTop10ByAgeLessThanAndActiveIsTrueOrderByCreatedAtDesc(Integer age);
```

### Derived Query Limitations

```java
// Method names can get too long
List<User> findByUsernameContainingIgnoreCaseAndAgeGreaterThanAndStatusInAndCreatedAtBetweenOrderByCreatedAtDesc(
    String username, Integer age, List<UserStatus> statuses, LocalDateTime start, LocalDateTime end);

// Use @Query for complex queries instead
@Query("SELECT u FROM User u WHERE ...")
List<User> findUsersWithComplexCriteria(...);
```

---

## JPQL & Native Queries

### JPQL (Java Persistence Query Language)

Object-oriented query language (queries entities, not tables).

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Basic SELECT
    @Query("SELECT u FROM User u WHERE u.age > :age")
    List<User> findUsersOlderThan(@Param("age") Integer age);
    
    // With multiple parameters
    @Query("SELECT u FROM User u WHERE u.username = :username AND u.email = :email")
    Optional<User> findByUsernameAndEmail(
        @Param("username") String username, 
        @Param("email") String email);
    
    // LIKE query
    @Query("SELECT u FROM User u WHERE u.email LIKE %:domain%")
    List<User> findByEmailDomain(@Param("domain") String domain);
    
    // IN clause
    @Query("SELECT u FROM User u WHERE u.status IN :statuses")
    List<User> findByStatuses(@Param("statuses") List<UserStatus> statuses);
    
    // ORDER BY
    @Query("SELECT u FROM User u WHERE u.age > :age ORDER BY u.username ASC")
    List<User> findUsersOlderThanSorted(@Param("age") Integer age);
    
    // COUNT
    @Query("SELECT COUNT(u) FROM User u WHERE u.status = :status")
    long countByStatus(@Param("status") UserStatus status);
    
    // SELECT specific fields
    @Query("SELECT u.username FROM User u")
    List<String> findAllUsernames();
    
    // Constructor expression
    @Query("SELECT new com.example.dto.UserDTO(u.id, u.username, u.email) FROM User u")
    List<UserDTO> findAllUserDTOs();
    
    // JOIN
    @Query("SELECT u FROM User u JOIN u.profile p WHERE p.bio IS NOT NULL")
    List<User> findUsersWithBio();
    
    // JOIN FETCH (avoid N+1 problem)
    @Query("SELECT d FROM Department d JOIN FETCH d.employees")
    List<Department> findAllWithEmployees();
    
    // LEFT JOIN
    @Query("SELECT u FROM User u LEFT JOIN u.orders o WHERE o.id IS NULL")
    List<User> findUsersWithNoOrders();
    
    // Aggregate functions
    @Query("SELECT AVG(u.age) FROM User u")
    Double findAverageAge();
    
    @Query("SELECT MAX(u.age) FROM User u WHERE u.status = :status")
    Integer findMaxAge(@Param("status") UserStatus status);
    
    // GROUP BY
    @Query("SELECT u.status, COUNT(u) FROM User u GROUP BY u.status")
    List<Object[]> countByStatus();
    
    // HAVING
    @Query("SELECT u.age, COUNT(u) FROM User u GROUP BY u.age HAVING COUNT(u) > :count")
    List<Object[]> findAgesWithMoreThanCount(@Param("count") long count);
}
```

### UPDATE & DELETE Queries

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // UPDATE
    @Modifying
    @Query("UPDATE User u SET u.status = :status WHERE u.age < :age")
    int updateStatusForYoungerUsers(
        @Param("status") UserStatus status, 
        @Param("age") Integer age);
    
    @Modifying
    @Query("UPDATE User u SET u.email = :email WHERE u.id = :id")
    int updateEmail(@Param("id") Long id, @Param("email") String email);
    
    // DELETE
    @Modifying
    @Query("DELETE FROM User u WHERE u.status = :status")
    int deleteByStatus(@Param("status") UserStatus status);
    
    @Modifying
    @Query("DELETE FROM User u WHERE u.createdAt < :date")
    int deleteOldUsers(@Param("date") LocalDateTime date);
}

// Service must use @Transactional
@Service
@Transactional
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public int deactivateYoungUsers() {
        return userRepository.updateStatusForYoungerUsers(UserStatus.INACTIVE, 18);
    }
}
```

### Native SQL Queries

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Basic native query
    @Query(value = "SELECT * FROM users WHERE age > ?1", nativeQuery = true)
    List<User> findUsersOlderThanNative(Integer age);
    
    // Named parameters in native query
    @Query(value = "SELECT * FROM users WHERE user_name = :username", nativeQuery = true)
    Optional<User> findByUsernameNative(@Param("username") String username);
    
    // Native query with JOIN
    @Query(value = """
        SELECT u.* FROM users u
        INNER JOIN departments d ON u.department_id = d.id
        WHERE d.name = :deptName
        """, nativeQuery = true)
    List<User> findByDepartmentNameNative(@Param("deptName") String deptName);
    
    // Aggregate with native query
    @Query(value = "SELECT COUNT(*) FROM users WHERE status = :status", nativeQuery = true)
    long countByStatusNative(@Param("status") String status);
    
    // Update with native query
    @Modifying
    @Query(value = "UPDATE users SET email = :email WHERE id = :id", nativeQuery = true)
    int updateEmailNative(@Param("id") Long id, @Param("email") String email);
    
    // Complex native query
    @Query(value = """
        SELECT u.*, COUNT(o.id) as order_count
        FROM users u
        LEFT JOIN orders o ON u.id = o.user_id
        GROUP BY u.id
        HAVING COUNT(o.id) > :minOrders
        """, nativeQuery = true)
    List<User> findUsersWithMinimumOrders(@Param("minOrders") int minOrders);
}
```

### Named Queries

```java
// In Entity
@Entity
@NamedQueries({
    @NamedQuery(
        name = "User.findByStatus",
        query = "SELECT u FROM User u WHERE u.status = :status"
    ),
    @NamedQuery(
        name = "User.findActive",
        query = "SELECT u FROM User u WHERE u.active = true"
    )
})
public class User {
    // Entity fields
}

// In Repository
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByStatus(@Param("status") UserStatus status);
    List<User> findActive();
}
```

---

## Transactions

### @Transactional Annotation

```java
@Service
@Transactional  // All methods transactional
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private EmailService emailService;
    
    // Method is transactional
    public User createUser(User user) {
        User saved = userRepository.save(user);
        emailService.sendWelcomeEmail(user.getEmail());
        // Both operations in same transaction
        // If email fails, user creation rolls back
        return saved;
    }
    
    // Read-only transaction (optimization)
    @Transactional(readOnly = true)
    public User getUserById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
    }
    
    @Transactional(readOnly = true)
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
```

### Transaction Propagation

```java
@Service
public class UserService {
    
    // REQUIRED (default) - join existing or create new
    @Transactional(propagation = Propagation.REQUIRED)
    public void method1() { }
    
    // REQUIRES_NEW - always create new transaction
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void method2() { }
    
    // SUPPORTS - join if exists, otherwise non-transactional
    @Transactional(propagation = Propagation.SUPPORTS)
    public void method3() { }
    
    // NOT_SUPPORTED - execute non-transactionally
    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public void method4() { }
    
    // MANDATORY - must be called within transaction
    @Transactional(propagation = Propagation.MANDATORY)
    public void method5() { }
    
    // NEVER - must not be called within transaction
    @Transactional(propagation = Propagation.NEVER)
    public void method6() { }
    
    // NESTED - nested transaction with savepoint
    @Transactional(propagation = Propagation.NESTED)
    public void method7() { }
}
```

### Transaction Isolation

```java
@Service
public class UserService {
    
    // READ_UNCOMMITTED (lowest isolation)
    @Transactional(isolation = Isolation.READ_UNCOMMITTED)
    public void method1() { }
    
    // READ_COMMITTED
    @Transactional(isolation = Isolation.READ_COMMITTED)
    public void method2() { }
    
    // REPEATABLE_READ
    @Transactional(isolation = Isolation.REPEATABLE_READ)
    public void method3() { }
    
    // SERIALIZABLE (highest isolation)
    @Transactional(isolation = Isolation.SERIALIZABLE)
    public void method4() { }
    
    // DEFAULT (use database default)
    @Transactional(isolation = Isolation.DEFAULT)
    public void method5() { }
}
```

### Rollback Configuration

```java
@Service
public class UserService {
    
    // Rollback only for specific exceptions
    @Transactional(rollbackFor = CustomException.class)
    public void method1() {
        // Rolls back only for CustomException
    }
    
    // Don't rollback for specific exceptions
    @Transactional(noRollbackFor = NotFoundException.class)
    public void method2() {
        // Doesn't rollback for NotFoundException
    }
    
    // Rollback for multiple exceptions
    @Transactional(rollbackFor = {SQLException.class, IOException.class})
    public void method3() { }
    
    // Timeout (seconds)
    @Transactional(timeout = 30)
    public void method4() {
        // Transaction times out after 30 seconds
    }
}
```

### Programmatic Transaction

```java
@Service
public class UserService {
    
    @Autowired
    private TransactionTemplate transactionTemplate;
    
    public User createUserProgrammatic(User user) {
        return transactionTemplate.execute(status -> {
            try {
                User saved = userRepository.save(user);
                emailService.sendWelcomeEmail(user.getEmail());
                return saved;
            } catch (Exception e) {
                status.setRollbackOnly();
                throw e;
            }
        });
    }
}

// Configuration
@Configuration
public class TransactionConfig {
    
    @Bean
    public TransactionTemplate transactionTemplate(PlatformTransactionManager transactionManager) {
        return new TransactionTemplate(transactionManager);
    }
}
```

### Transaction Best Practices

```java
@Service
public class BestPracticesService {
    
    // ✅ GOOD: Read-only for queries
    @Transactional(readOnly = true)
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    // ✅ GOOD: Keep transactions short
    @Transactional
    public User updateUser(Long id, User updates) {
        User user = userRepository.findById(id).orElseThrow();
        user.setUsername(updates.getUsername());
        return userRepository.save(user);
    }
    
    // ❌ BAD: Long-running operations in transaction
    @Transactional
    public void badMethod() {
        User user = userRepository.save(new User());
        sendEmail();  // External call - slow!
        callExternalAPI();  // Network call - very slow!
        // Transaction held too long
    }
    
    // ✅ GOOD: Minimize transaction scope
    public void goodMethod() {
        User user;
        
        // Transaction only for database
        user = createUser();
        
        // External calls outside transaction
        sendEmail();
        callExternalAPI();
    }
    
    @Transactional
    private User createUser() {
        return userRepository.save(new User());
    }
}
```

---

## Auditing

Automatically track who and when created/modified entities.

### Enable Auditing

```java
@SpringBootApplication
@EnableJpaAuditing  // Enable auditing
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

### Basic Auditing Entity

```java
@Entity
@EntityListeners(AuditingEntityListener.class)
@Data
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    private String email;
    
    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdDate;
    
    @LastModifiedDate
    private LocalDateTime lastModifiedDate;
    
    @CreatedBy
    @Column(updatable = false)
    private String createdBy;
    
    @LastModifiedBy
    private String lastModifiedBy;
}
```

### Auditing with Base Class

```java
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@Data
public abstract class Auditable {
    
    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @CreatedBy
    @Column(name = "created_by", updatable = false)
    private String createdBy;
    
    @LastModifiedBy
    @Column(name = "updated_by")
    private String updatedBy;
}

// Extend in entities
@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class User extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    private String email;
    
    // Audit fields inherited from Auditable
}

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class Product extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private Double price;
    
    // Audit fields inherited
}
```

### Providing Auditor (Who Created/Modified)

```java
// Implement AuditorAware
@Component
public class AuditorAwareImpl implements AuditorAware<String> {
    
    @Override
    public Optional<String> getCurrentAuditor() {
        // Get current user from SecurityContext
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        
        if (authentication == null || !authentication.isAuthenticated()) {
            return Optional.of("system");
        }
        
        return Optional.of(authentication.getName());
    }
}

// Enable with auditor
@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAwareImpl")
public class MyApplication { }
```

### Custom Auditor for User Entity

```java
// If you want to store User entity instead of String
@Component
public class UserAuditorAware implements AuditorAware<User> {
    
    @Autowired
    private UserRepository userRepository;
    
    @Override
    public Optional<User> getCurrentAuditor() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        
        if (authentication == null || !authentication.isAuthenticated()) {
            return Optional.empty();
        }
        
        String username = authentication.getName();
        return userRepository.findByUsername(username);
    }
}

// Entity with User auditor
@Entity
@EntityListeners(AuditingEntityListener.class)
@Data
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @CreatedBy
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "created_by_user_id")
    private User createdBy;
    
    @LastModifiedBy
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "updated_by_user_id")
    private User lastModifiedBy;
    
    @CreatedDate
    private LocalDateTime createdDate;
    
    @LastModifiedDate
    private LocalDateTime lastModifiedDate;
}
```

### Disable Auditing for Specific Operations

```java
@Service
public class UserService {
    
    @Autowired
    private EntityManager entityManager;
    
    public void updateWithoutAudit(User user) {
        // Detach entity (disable auditing)
        entityManager.detach(user);
        
        // Make changes
        user.setEmail("newemail@example.com");
        
        // Merge without triggering audit
        entityManager.merge(user);
    }
}
```

---

## Specifications (Dynamic Queries)

For complex, dynamic queries.

```java
// Enable specifications
@Repository
public interface UserRepository extends JpaRepository<User, Long>, 
                                       JpaSpecificationExecutor<User> {
}

// Create specifications
public class UserSpecifications {
    
    public static Specification<User> hasUsername(String username) {
        return (root, query, builder) -> 
            builder.equal(root.get("username"), username);
    }
    
    public static Specification<User> hasAgeGreaterThan(Integer age) {
        return (root, query, builder) -> 
            builder.greaterThan(root.get("age"), age);
    }
    
    public static Specification<User> hasStatus(UserStatus status) {
        return (root, query, builder) -> 
            builder.equal(root.get("status"), status);
    }
    
    public static Specification<User> emailContains(String keyword) {
        return (root, query, builder) -> 
            builder.like(builder.lower(root.get("email")), 
                        "%" + keyword.toLowerCase() + "%");
    }
}

// Service
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List<User> searchUsers(String username, Integer minAge, UserStatus status) {
        Specification<User> spec = Specification.where(null);
        
        if (username != null) {
            spec = spec.and(UserSpecifications.hasUsername(username));
        }
        
        if (minAge != null) {
            spec = spec.and(UserSpecifications.hasAgeGreaterThan(minAge));
        }
        
        if (status != null) {
            spec = spec.and(UserSpecifications.hasStatus(status));
        }
        
        return userRepository.findAll(spec);
    }
    
    // With pagination
    public Page<User> searchUsersPaginated(String email, Pageable pageable) {
        Specification<User> spec = UserSpecifications.emailContains(email);
        return userRepository.findAll(spec, pageable);
    }
}
```

---

## Summary

Spring Data JPA simplifies database access:

### Entities & Relationships
- **@Entity**: Mark as JPA entity
- **@OneToOne**: One-to-one relationship
- **@OneToMany / @ManyToOne**: Parent-child relationship
- **@ManyToMany**: Many-to-many with join table
- **Cascade types**: PERSIST, MERGE, REMOVE, REFRESH, DETACH, ALL
- **Fetch types**: LAZY (on-demand), EAGER (immediate)
- **orphanRemoval**: Delete orphaned entities
- Use helper methods for bidirectional relationships

### Repositories
- **CrudRepository**: Basic CRUD operations
- **PagingAndSortingRepository**: With pagination/sorting
- **JpaRepository**: ✅ **Recommended** (most features)
- **JpaSpecificationExecutor**: For dynamic queries

### Derived Queries
- Method name conventions: findBy, countBy, deleteBy, existsBy
- Keywords: And, Or, Between, LessThan, GreaterThan, Like, In, OrderBy
- Automatic query generation
- Use for simple queries

### JPQL Queries
- **@Query**: Custom queries on entities
- Object-oriented (query entities, not tables)
- Named parameters with @Param
- JOIN FETCH to avoid N+1
- Aggregate functions, GROUP BY, HAVING
- Constructor expressions for DTOs

### Native Queries
- **nativeQuery = true**: Direct SQL
- Use for complex SQL, database-specific features
- Works with actual table/column names

### Transactions
- **@Transactional**: ACID guarantees
- **readOnly = true**: Optimization for queries
- **Propagation**: REQUIRED, REQUIRES_NEW, SUPPORTS, etc.
- **Isolation**: READ_COMMITTED, REPEATABLE_READ, etc.
- **rollbackFor**: Specify rollback exceptions
- Keep transactions short
- Use on service layer, not repositories

### Auditing
- **@CreatedDate, @LastModifiedDate**: Automatic timestamps
- **@CreatedBy, @LastModifiedBy**: Track user
- **@EnableJpaAuditing**: Enable auditing
- **AuditorAware**: Provide current user
- **@EntityListeners**: Activate auditing
- **Base class**: Reusable audit fields

### Best Practices
1. Use JpaRepository (most features)
2. Use derived queries for simple cases
3. Use @Query for complex queries
4. Always use @Transactional on service methods
5. Use readOnly = true for read operations
6. Keep transactions short
7. Use LAZY fetching by default
8. Use JOIN FETCH to avoid N+1
9. Implement auditing for tracking
10. Use specifications for dynamic queries

Spring Data JPA dramatically reduces data access code while providing powerful querying capabilities.

---

## 6. Database Topics

Database integration, migrations, and performance optimization in Spring Boot.

## Database Integration

### H2 Database (In-Memory)

Perfect for development and testing.

#### Configuration

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```

```properties
# application.properties (H2)

# In-memory database
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# H2 Console
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

# JPA
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true

# Access H2 Console: http://localhost:8080/h2-console
```

```yaml
# application.yml (H2)
spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
    username: sa
    password: 
  
  h2:
    console:
      enabled: true
      path: /h2-console
  
  jpa:
    database-platform: org.hibernate.dialect.H2Dialect
    hibernate:
      ddl-auto: create-drop
    show-sql: true
```

#### File-based H2

```properties
# Persistent H2 database
spring.datasource.url=jdbc:h2:file:./data/mydb
spring.jpa.hibernate.ddl-auto=update
```

### MySQL Integration

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>runtime</scope>
</dependency>
```

```properties
# application.properties (MySQL)

spring.datasource.url=jdbc:mysql://localhost:3306/mydb?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# Connection pool
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=5
spring.datasource.hikari.connection-timeout=20000
```

```yaml
# application.yml (MySQL)
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb?useSSL=false&serverTimezone=UTC
    username: root
    password: password
    driver-class-name: com.mysql.cj.jdbc.Driver
    
    hikari:
      maximum-pool-size: 10
      minimum-idle: 5
      connection-timeout: 20000
  
  jpa:
    database-platform: org.hibernate.dialect.MySQL8Dialect
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true
```

### PostgreSQL Integration

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>
```

```properties
# application.properties (PostgreSQL)

spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=postgres
spring.datasource.password=password
spring.datasource.driver-class-name=org.postgresql.Driver

# JPA
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# PostgreSQL specific
spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true
```

### DDL-Auto Options

```properties
# create - Drop and create schema on startup
spring.jpa.hibernate.ddl-auto=create

# create-drop - Create on startup, drop on shutdown
spring.jpa.hibernate.ddl-auto=create-drop

# update - Update schema (add new columns, never delete)
spring.jpa.hibernate.ddl-auto=update

# validate - Validate schema matches entities
spring.jpa.hibernate.ddl-auto=validate

# none - No schema management
spring.jpa.hibernate.ddl-auto=none
```

**Recommendation:**
- **Development**: `create-drop` or `update`
- **Testing**: `create-drop`
- **Production**: `validate` or `none` (use migrations)

---

## Database Migrations

### Flyway

Version control for database schema.

#### Setup

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-core</artifactId>
</dependency>
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-mysql</artifactId>  <!-- For MySQL -->
</dependency>
```

```properties
# application.properties

# Disable Hibernate DDL
spring.jpa.hibernate.ddl-auto=validate

# Flyway configuration
spring.flyway.enabled=true
spring.flyway.baseline-on-migrate=true
spring.flyway.locations=classpath:db/migration
spring.flyway.schemas=mydb
```

#### Migration Files

```
src/main/resources/
└── db/
    └── migration/
        ├── V1__Create_users_table.sql
        ├── V2__Add_email_to_users.sql
        └── V3__Create_products_table.sql
```

**Naming Convention:** `V{version}__{description}.sql`

#### V1__Create_users_table.sql

```sql
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_username ON users(username);
CREATE INDEX idx_email ON users(email);
```

#### V2__Add_status_to_users.sql

```sql
ALTER TABLE users ADD COLUMN status VARCHAR(20) DEFAULT 'ACTIVE';
```

#### V3__Create_products_table.sql

```sql
CREATE TABLE products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Repeatable Migrations

```
R__Insert_reference_data.sql  # Runs every time checksum changes
```

```sql
-- R__Insert_reference_data.sql
DELETE FROM roles;

INSERT INTO roles (name) VALUES ('ADMIN');
INSERT INTO roles (name) VALUES ('USER');
INSERT INTO roles (name) VALUES ('MODERATOR');
```

### Liquibase

Alternative to Flyway with more features.

#### Setup

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.liquibase</groupId>
    <artifactId>liquibase-core</artifactId>
</dependency>
```

```properties
# application.properties

spring.jpa.hibernate.ddl-auto=validate
spring.liquibase.change-log=classpath:db/changelog/db.changelog-master.xml
spring.liquibase.enabled=true
```

#### Changelog Files

```
src/main/resources/
└── db/
    └── changelog/
        ├── db.changelog-master.xml
        ├── changes/
        │   ├── v1-create-users.xml
        │   └── v2-create-products.xml
```

#### db.changelog-master.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
    xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
    http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-4.0.xsd">
    
    <include file="db/changelog/changes/v1-create-users.xml"/>
    <include file="db/changelog/changes/v2-create-products.xml"/>
</databaseChangeLog>
```

#### v1-create-users.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
    xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
    http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-4.0.xsd">
    
    <changeSet id="1" author="developer">
        <createTable tableName="users">
            <column name="id" type="BIGINT" autoIncrement="true">
                <constraints primaryKey="true" nullable="false"/>
            </column>
            <column name="username" type="VARCHAR(50)">
                <constraints nullable="false" unique="true"/>
            </column>
            <column name="email" type="VARCHAR(100)">
                <constraints nullable="false"/>
            </column>
            <column name="password" type="VARCHAR(255)">
                <constraints nullable="false"/>
            </column>
            <column name="created_at" type="TIMESTAMP" defaultValueComputed="CURRENT_TIMESTAMP"/>
        </createTable>
        
        <createIndex indexName="idx_username" tableName="users">
            <column name="username"/>
        </createIndex>
    </changeSet>
</databaseChangeLog>
```

### Flyway vs Liquibase

| Feature | Flyway | Liquibase |
|---------|--------|-----------|
| **Format** | SQL files | XML, YAML, JSON, SQL |
| **Rollback** | ❌ No (paid version) | ✅ Yes |
| **Database Support** | Wide | Wider |
| **Learning Curve** | Easy | Moderate |
| **Complexity** | Simple | More features |
| **Use Case** | Simple migrations | Complex migrations, rollbacks |

---

## Connection Pooling (HikariCP)

HikariCP is the default connection pool in Spring Boot (fast and lightweight).

### Auto-Configuration

```properties
# Spring Boot uses HikariCP by default

# Pool size
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=5

# Connection timeout (ms)
spring.datasource.hikari.connection-timeout=20000

# Idle timeout (ms)
spring.datasource.hikari.idle-timeout=300000

# Max lifetime (ms)
spring.datasource.hikari.max-lifetime=1200000

# Connection test query
spring.datasource.hikari.connection-test-query=SELECT 1

# Pool name
spring.datasource.hikari.pool-name=MyAppPool

# Leak detection threshold (ms)
spring.datasource.hikari.leak-detection-threshold=60000
```

### Programmatic Configuration

```java
@Configuration
public class DataSourceConfig {
    
    @Bean
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        
        config.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
        config.setUsername("root");
        config.setPassword("password");
        config.setDriverClassName("com.mysql.cj.jdbc.Driver");
        
        // Pool configuration
        config.setMaximumPoolSize(10);
        config.setMinimumIdle(5);
        config.setConnectionTimeout(30000);
        config.setIdleTimeout(600000);
        config.setMaxLifetime(1800000);
        
        // Performance
        config.setAutoCommit(true);
        config.setConnectionTestQuery("SELECT 1");
        config.setPoolName("MyAppHikariPool");
        
        // Leak detection
        config.setLeakDetectionThreshold(60000);
        
        return new HikariDataSource(config);
    }
}
```

### Connection Pool Sizing

```java
// Formula: connections = ((core_count * 2) + effective_spindle_count)

// Example: 4 cores, 1 disk
// connections = (4 * 2) + 1 = 9

// Configuration
spring.datasource.hikari.maximum-pool-size=9
spring.datasource.hikari.minimum-idle=3  // ~30% of max
```

### Monitoring Connection Pool

```java
@Component
public class HikariMonitor {
    
    @Autowired
    private DataSource dataSource;
    
    @Scheduled(fixedRate = 60000)  // Every minute
    public void logPoolStats() {
        if (dataSource instanceof HikariDataSource) {
            HikariDataSource hikariDS = (HikariDataSource) dataSource;
            HikariPoolMXBean poolMXBean = hikariDS.getHikariPoolMXBean();
            
            System.out.println("Active Connections: " + poolMXBean.getActiveConnections());
            System.out.println("Idle Connections: " + poolMXBean.getIdleConnections());
            System.out.println("Total Connections: " + poolMXBean.getTotalConnections());
            System.out.println("Threads Awaiting: " + poolMXBean.getThreadsAwaitingConnection());
        }
    }
}
```

### Alternative: Tomcat JDBC Pool

```xml
<dependency>
    <groupId>org.apache.tomcat</groupId>
    <artifactId>tomcat-jdbc</artifactId>
</dependency>
```

```properties
spring.datasource.type=org.apache.tomcat.jdbc.pool.DataSource
spring.datasource.tomcat.max-active=10
spring.datasource.tomcat.max-idle=5
spring.datasource.tomcat.min-idle=2
```

---

## Query Optimization

### N+1 Problem

```java
// ❌ BAD: N+1 queries
@Service
public class DepartmentService {
    
    @Transactional(readOnly = true)
    public List<Department> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();  // 1 query
        
        for (Department dept : departments) {
            dept.getEmployees().size();  // N queries (one per department)
        }
        
        return departments;
    }
}

// ✅ GOOD: JOIN FETCH
@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
    
    @Query("SELECT d FROM Department d JOIN FETCH d.employees")
    List<Department> findAllWithEmployees();  // Single query with JOIN
}

// ✅ GOOD: Entity Graph
@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
    
    @EntityGraph(attributePaths = {"employees"})
    List<Department> findAll();
}
```

### Entity Graph

```java
// Define named entity graph
@Entity
@NamedEntityGraph(
    name = "Department.employees",
    attributeNodes = @NamedAttributeNode("employees")
)
public class Department {
    @Id
    private Long id;
    
    @OneToMany(mappedBy = "department")
    private List<Employee> employees;
}

// Use in repository
@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
    
    @EntityGraph(value = "Department.employees")
    List<Department> findAll();
    
    @EntityGraph(attributePaths = {"employees", "manager"})
    Optional<Department> findById(Long id);
}
```

### Projection (Select Specific Fields)

```java
// Interface-based projection
public interface UserProjection {
    Long getId();
    String getUsername();
    String getEmail();
}

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    List<UserProjection> findAllProjectedBy();
    
    @Query("SELECT u.id as id, u.username as username, u.email as email FROM User u")
    List<UserProjection> findAllUserProjections();
}

// Class-based projection (DTO)
@Data
@AllArgsConstructor
public class UserSummaryDTO {
    private Long id;
    private String username;
    private String email;
}

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    @Query("SELECT new com.example.dto.UserSummaryDTO(u.id, u.username, u.email) FROM User u")
    List<UserSummaryDTO> findAllSummaries();
}
```

### Batch Processing

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}

// Service with batch processing
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Transactional
    public void importUsers(List<User> users) {
        int batchSize = 50;
        
        for (int i = 0; i < users.size(); i++) {
            userRepository.save(users.get(i));
            
            if (i > 0 && i % batchSize == 0) {
                userRepository.flush();  // Flush batch
            }
        }
    }
}
```

```properties
# Enable batch processing
spring.jpa.properties.hibernate.jdbc.batch_size=50
spring.jpa.properties.hibernate.order_inserts=true
spring.jpa.properties.hibernate.order_updates=true
spring.jpa.properties.hibernate.batch_versioned_data=true
```

### Query Hints

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    @QueryHints(@QueryHint(name = org.hibernate.annotations.QueryHints.CACHEABLE, value = "true"))
    @Query("SELECT u FROM User u WHERE u.status = :status")
    List<User> findByStatusCacheable(@Param("status") UserStatus status);
    
    @QueryHints(@QueryHint(name = org.hibernate.annotations.QueryHints.FETCH_SIZE, value = "50"))
    @Query("SELECT u FROM User u")
    List<User> findAllWithFetchSize();
}
```

---

## Indexing & Performance Tuning

### Creating Indexes

```java
// Single column index
@Entity
@Table(name = "users", indexes = {
    @Index(name = "idx_username", columnList = "username"),
    @Index(name = "idx_email", columnList = "email")
})
public class User {
    @Id
    private Long id;
    
    @Column(unique = true)
    private String username;
    
    private String email;
}

// Composite index
@Entity
@Table(name = "orders", indexes = {
    @Index(name = "idx_user_status", columnList = "user_id, status"),
    @Index(name = "idx_created_date", columnList = "created_at DESC")
})
public class Order {
    @Id
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    private String status;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
}

// Unique constraint
@Entity
@Table(name = "users", uniqueConstraints = {
    @UniqueConstraint(name = "uk_username_email", columnNames = {"username", "email"})
})
public class User {
    private String username;
    private String email;
}
```

### Index in Migrations (Flyway)

```sql
-- V4__Add_indexes.sql

-- Single column index
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);

-- Composite index
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- Unique index
CREATE UNIQUE INDEX idx_users_email_unique ON users(email);

-- Partial index (PostgreSQL)
CREATE INDEX idx_active_users ON users(username) WHERE status = 'ACTIVE';

-- Covering index
CREATE INDEX idx_users_covering ON users(username, email, age);

-- Drop index if exists
DROP INDEX IF EXISTS old_index ON users;
```

### Performance Tuning Tips

#### 1. Use Appropriate Fetch Type

```java
// ✅ GOOD: LAZY for collections
@OneToMany(fetch = FetchType.LAZY)
private List<Employee> employees;

// ❌ BAD: EAGER for large collections
@OneToMany(fetch = FetchType.EAGER)  // Loads all employees always
private List<Employee> employees;
```

#### 2. Use Pagination

```java
// ✅ GOOD: Paginated query
@GetMapping("/users")
public Page<User> getUsers(Pageable pageable) {
    return userRepository.findAll(pageable);
}

// ❌ BAD: Load all records
@GetMapping("/users")
public List<User> getAllUsers() {
    return userRepository.findAll();  // Could be millions of records!
}
```

#### 3. Use Projections

```java
// ✅ GOOD: Select only needed fields
@Query("SELECT new com.example.dto.UserDTO(u.id, u.username) FROM User u")
List<UserDTO> findAllUsernames();

// ❌ BAD: Load entire entity
List<User> findAll();  // Loads all fields
```

#### 4. Cache Frequently Accessed Data

```java
@Service
public class UserService {
    
    @Cacheable("users")
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    
    @CacheEvict(value = "users", key = "#user.id")
    public User updateUser(User user) {
        return userRepository.save(user);
    }
}
```

```properties
# Enable caching
spring.cache.type=caffeine
spring.cache.caffeine.spec=maximumSize=500,expireAfterAccess=600s
```

#### 5. Optimize Queries

```java
// ❌ BAD: Multiple queries
List<User> users = userRepository.findAll();
for (User user : users) {
    long orderCount = orderRepository.countByUser(user);  // N queries
}

// ✅ GOOD: Single query with JOIN
@Query("""
    SELECT u, COUNT(o) 
    FROM User u 
    LEFT JOIN Order o ON o.user = u 
    GROUP BY u
    """)
List<Object[]> findUsersWithOrderCount();
```

#### 6. Use Batch Operations

```java
// ✅ GOOD: Batch save
userRepository.saveAll(users);  // Batch insert

// ❌ BAD: Individual saves
for (User user : users) {
    userRepository.save(user);  // N inserts
}
```

#### 7. Index Foreign Keys

```sql
-- Always index foreign keys
CREATE INDEX idx_employee_department ON employees(department_id);
CREATE INDEX idx_order_user ON orders(user_id);
```

#### 8. Avoid SELECT *

```java
// ✅ GOOD: Select specific columns
@Query("SELECT u.id, u.username FROM User u")
List<Object[]> findBasicInfo();

// ❌ BAD: Select all columns
SELECT * FROM users;
```

#### 9. Use Database-Specific Features

```java
// PostgreSQL: JSONB
@Entity
public class Product {
    @Id
    private Long id;
    
    @Type(type = "jsonb")
    @Column(columnDefinition = "jsonb")
    private Map<String, Object> metadata;
}

// MySQL: Full-text search
@Query(value = "SELECT * FROM products WHERE MATCH(name, description) AGAINST (?1 IN NATURAL LANGUAGE MODE)", 
       nativeQuery = true)
List<Product> fullTextSearch(String keyword);
```

#### 10. Monitor Query Performance

```properties
# Show SQL
spring.jpa.show-sql=true

# Format SQL
spring.jpa.properties.hibernate.format_sql=true

# Show bind parameters
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE

# Statistics
spring.jpa.properties.hibernate.generate_statistics=true
logging.level.org.hibernate.stat=DEBUG
```

### Query Performance Analysis

```java
@Component
public class QueryPerformanceLogger {
    
    @Around("execution(* com.example.repository.*.*(..))")
    public Object logQueryPerformance(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        
        Object result = joinPoint.proceed();
        
        long executionTime = System.currentTimeMillis() - start;
        
        if (executionTime > 1000) {  // Log slow queries
            log.warn("Slow query detected: {} took {}ms", 
                    joinPoint.getSignature().getName(), 
                    executionTime);
        }
        
        return result;
    }
}
```

### Database Profiling

```properties
# MySQL: Enable slow query log
spring.jpa.properties.hibernate.session.events.log.LOG_QUERIES_SLOWER_THAN_MS=100

# PostgreSQL: Log slow queries
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb?loggerLevel=TRACE&logUnclosedConnections=true
```

---

## Multi-Database Configuration

### Multiple DataSources

```java
// Primary DataSource (MySQL)
@Configuration
@EnableJpaRepositories(
    basePackages = "com.example.mysql.repository",
    entityManagerFactoryRef = "mysqlEntityManagerFactory",
    transactionManagerRef = "mysqlTransactionManager"
)
public class MySQLConfig {
    
    @Primary
    @Bean(name = "mysqlDataSource")
    @ConfigurationProperties(prefix = "spring.datasource.mysql")
    public DataSource dataSource() {
        return DataSourceBuilder.create().build();
    }
    
    @Primary
    @Bean(name = "mysqlEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(
            @Qualifier("mysqlDataSource") DataSource dataSource,
            EntityManagerFactoryBuilder builder) {
        return builder
            .dataSource(dataSource)
            .packages("com.example.mysql.model")
            .persistenceUnit("mysql")
            .build();
    }
    
    @Primary
    @Bean(name = "mysqlTransactionManager")
    public PlatformTransactionManager transactionManager(
            @Qualifier("mysqlEntityManagerFactory") EntityManagerFactory entityManagerFactory) {
        return new JpaTransactionManager(entityManagerFactory);
    }
}

// Secondary DataSource (PostgreSQL)
@Configuration
@EnableJpaRepositories(
    basePackages = "com.example.postgres.repository",
    entityManagerFactoryRef = "postgresEntityManagerFactory",
    transactionManagerRef = "postgresTransactionManager"
)
public class PostgreSQLConfig {
    
    @Bean(name = "postgresDataSource")
    @ConfigurationProperties(prefix = "spring.datasource.postgres")
    public DataSource dataSource() {
        return DataSourceBuilder.create().build();
    }
    
    @Bean(name = "postgresEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(
            @Qualifier("postgresDataSource") DataSource dataSource,
            EntityManagerFactoryBuilder builder) {
        return builder
            .dataSource(dataSource)
            .packages("com.example.postgres.model")
            .persistenceUnit("postgres")
            .build();
    }
    
    @Bean(name = "postgresTransactionManager")
    public PlatformTransactionManager transactionManager(
            @Qualifier("postgresEntityManagerFactory") EntityManagerFactory entityManagerFactory) {
        return new JpaTransactionManager(entityManagerFactory);
    }
}
```

```properties
# application.properties

# MySQL
spring.datasource.mysql.jdbc-url=jdbc:mysql://localhost:3306/mydb1
spring.datasource.mysql.username=root
spring.datasource.mysql.password=password
spring.datasource.mysql.driver-class-name=com.mysql.cj.jdbc.Driver

# PostgreSQL
spring.datasource.postgres.jdbc-url=jdbc:postgresql://localhost:5432/mydb2
spring.datasource.postgres.username=postgres
spring.datasource.postgres.password=password
spring.datasource.postgres.driver-class-name=org.postgresql.Driver
```

---

## Summary

Database topics for Spring Boot:

### Database Integration
- **H2**: In-memory or file-based, perfect for dev/test
- **MySQL**: Most popular, use mysql-connector-j
- **PostgreSQL**: Advanced features, powerful
- Configuration via properties/YAML
- DDL-auto: create, create-drop, update, validate, none

### Migrations
- **Flyway**: SQL-based, simple, versioned migrations
  - Naming: V{version}__{description}.sql
  - Repeatable: R__{description}.sql
  
- **Liquibase**: XML/YAML/JSON, rollback support, complex migrations
  - Master changelog
  - Versioned changesets
  
- **Use in Production**: Always use migrations (not ddl-auto)

### Connection Pooling (HikariCP)
- **Default** in Spring Boot
- Configuration: pool size, timeout, lifetime
- Formula: connections = (cores * 2) + disks
- Monitoring with HikariPoolMXBean
- Leak detection for debugging

### Query Optimization
- **N+1 Problem**: Use JOIN FETCH or @EntityGraph
- **Projections**: Select only needed fields
- **Batch Processing**: Configure batch size
- **Query Hints**: Caching, fetch size
- Monitor with show-sql and statistics

### Indexing & Performance
- **Create indexes**: On frequently queried columns
- **Composite indexes**: For multi-column queries
- **Index foreign keys**: Always
- Use LAZY fetching
- Implement pagination
- Cache frequently accessed data
- Avoid SELECT *
- Monitor slow queries
- Use database-specific features

### Best Practices
1. Use migrations (Flyway/Liquibase) for schema changes
2. Configure HikariCP pool size appropriately
3. Create indexes on frequently queried columns
4. Use JOIN FETCH to avoid N+1
5. Use projections to select only needed data
6. Implement pagination for large datasets
7. Use LAZY fetching by default
8. Monitor query performance
9. Keep transactions short
10. Test with production-like data volume

Proper database configuration and optimization are critical for application performance and scalability.

---

## 7. Security

Spring Security provides comprehensive security services for Java applications.

## Spring Security Basics

### Setup

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

**Default Behavior:**
- All endpoints secured (HTTP Basic authentication)
- Default username: `user`
- Password: Generated in console logs
- Default login page at `/login`

### Basic Security Configuration

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**", "/api/auth/**").permitAll()
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginPage("/login")
                .permitAll()
            )
            .logout(logout -> logout
                .permitAll()
            );
        
        return http.build();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

### Disabling Security (For Testing)

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll()
            )
            .csrf().disable();
        
        return http.build();
    }
}
```

---

## Authentication & Authorization

### Authentication

Verifying who you are (identity verification).

### Authorization

Verifying what you can do (permission checking).

### UserDetails and UserDetailsService

```java
// User entity
@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false)
    private String username;
    
    @Column(nullable = false)
    private String password;
    
    @Column(nullable = false)
    private String email;
    
    private boolean enabled = true;
    
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "role")
    private Set<String> roles = new HashSet<>();
}

// UserDetails implementation
public class CustomUserDetails implements UserDetails {
    
    private User user;
    
    public CustomUserDetails(User user) {
        this.user = user;
    }
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return user.getRoles().stream()
            .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
            .collect(Collectors.toList());
    }
    
    @Override
    public String getPassword() {
        return user.getPassword();
    }
    
    @Override
    public String getUsername() {
        return user.getUsername();
    }
    
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    
    @Override
    public boolean isEnabled() {
        return user.isEnabled();
    }
    
    public User getUser() {
        return user;
    }
}

// UserDetailsService implementation
@Service
public class CustomUserDetailsService implements UserDetailsService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
        
        return new CustomUserDetails(user);
    }
}
```

---

## Password Encoding

Never store passwords in plain text!

### BCrypt Password Encoder

```java
@Configuration
public class SecurityConfig {
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();  // Default strength: 10
    }
    
    // Custom strength
    @Bean
    public PasswordEncoder strongPasswordEncoder() {
        return new BCryptPasswordEncoder(12);  // Stronger (slower)
    }
}
```

### Encoding and Verification

```java
@Service
public class UserService {
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private UserRepository userRepository;
    
    public User registerUser(String username, String password, String email) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));  // Encode password
        user.setEmail(email);
        user.setRoles(Set.of("USER"));
        
        return userRepository.save(user);
    }
    
    public boolean verifyPassword(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }
}
```

### Available Password Encoders

```java
// BCrypt (Recommended)
new BCryptPasswordEncoder();

// Argon2
new Argon2PasswordEncoder();

// SCrypt
new SCryptPasswordEncoder();

// PBKDF2
new Pbkdf2PasswordEncoder();

// No encoding (NEVER use in production!)
NoOpPasswordEncoder.getInstance();

// Delegating (supports multiple encoders)
PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
```

---

## JWT Authentication (Most Important)

JSON Web Token for stateless authentication.

### Dependencies

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<!-- JWT library -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.5</version>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.11.5</version>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.11.5</version>
    <scope>runtime</scope>
</dependency>
```

### JWT Configuration

```properties
# application.properties

# JWT settings
jwt.secret=mySecretKeyForJWTTokenGenerationAndValidation123456789
jwt.expiration=86400000
# 86400000 ms = 24 hours
```

### JWT Utility Class

```java
@Component
public class JwtUtil {
    
    @Value("${jwt.secret}")
    private String secret;
    
    @Value("${jwt.expiration}")
    private Long expiration;
    
    // Generate token
    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("roles", userDetails.getAuthorities());
        
        return Jwts.builder()
            .setClaims(claims)
            .setSubject(userDetails.getUsername())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + expiration))
            .signWith(SignatureAlgorithm.HS512, secret)
            .compact();
    }
    
    // Extract username from token
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }
    
    // Extract expiration
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
    
    // Extract specific claim
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    
    // Extract all claims
    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
            .setSigningKey(secret)
            .build()
            .parseClaimsJws(token)
            .getBody();
    }
    
    // Check if token expired
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
    
    // Validate token
    public boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
    
    // Generate token with custom claims
    public String generateTokenWithClaims(UserDetails userDetails, Map<String, Object> customClaims) {
        Map<String, Object> claims = new HashMap<>(customClaims);
        claims.put("roles", userDetails.getAuthorities());
        
        return Jwts.builder()
            .setClaims(claims)
            .setSubject(userDetails.getUsername())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + expiration))
            .signWith(SignatureAlgorithm.HS512, secret)
            .compact();
    }
}
```

### JWT Authentication Filter

```java
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private UserDetailsService userDetailsService;
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain filterChain) 
            throws ServletException, IOException {
        
        // Extract JWT from Authorization header
        String authHeader = request.getHeader("Authorization");
        String username = null;
        String jwt = null;
        
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            jwt = authHeader.substring(7);
            try {
                username = jwtUtil.extractUsername(jwt);
            } catch (Exception e) {
                logger.error("Unable to extract username from token", e);
            }
        }
        
        // Validate and set authentication
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            
            if (jwtUtil.validateToken(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = 
                    new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                    );
                
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        
        filterChain.doFilter(request, response);
    }
}
```

### Authentication Controller

```java
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private UserDetailsService userDetailsService;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    // Login endpoint
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            // Authenticate user
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    loginRequest.getUsername(),
                    loginRequest.getPassword()
                )
            );
            
            SecurityContextHolder.getContext().setAuthentication(authentication);
            
            // Load user details
            UserDetails userDetails = userDetailsService.loadUserByUsername(
                loginRequest.getUsername()
            );
            
            // Generate JWT
            String token = jwtUtil.generateToken(userDetails);
            
            // Return response
            return ResponseEntity.ok(new JwtResponse(
                token,
                userDetails.getUsername(),
                userDetails.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList())
            ));
            
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(new ErrorResponse("Invalid username or password"));
        }
    }
    
    // Register endpoint
    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest registerRequest) {
        // Check if username exists
        if (userService.existsByUsername(registerRequest.getUsername())) {
            return ResponseEntity.badRequest()
                .body(new ErrorResponse("Username already exists"));
        }
        
        // Check if email exists
        if (userService.existsByEmail(registerRequest.getEmail())) {
            return ResponseEntity.badRequest()
                .body(new ErrorResponse("Email already registered"));
        }
        
        // Create user
        User user = userService.registerUser(
            registerRequest.getUsername(),
            registerRequest.getPassword(),
            registerRequest.getEmail()
        );
        
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(new MessageResponse("User registered successfully"));
    }
    
    // Refresh token
    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(@RequestHeader("Authorization") String authHeader) {
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            String username = jwtUtil.extractUsername(token);
            
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            
            if (jwtUtil.validateToken(token, userDetails)) {
                String newToken = jwtUtil.generateToken(userDetails);
                return ResponseEntity.ok(new JwtResponse(
                    newToken,
                    userDetails.getUsername(),
                    userDetails.getAuthorities().stream()
                        .map(GrantedAuthority::getAuthority)
                        .collect(Collectors.toList())
                ));
            }
        }
        
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(new ErrorResponse("Invalid token"));
    }
}

// Request/Response DTOs
@Data
public class LoginRequest {
    @NotBlank
    private String username;
    
    @NotBlank
    private String password;
}

@Data
public class RegisterRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;
    
    @NotBlank
    @Size(min = 8)
    private String password;
    
    @Email
    @NotBlank
    private String email;
}

@Data
@AllArgsConstructor
public class JwtResponse {
    private String token;
    private String username;
    private List<String> roles;
}

@Data
@AllArgsConstructor
public class MessageResponse {
    private String message;
}

@Data
@AllArgsConstructor
public class ErrorResponse {
    private String error;
}
```

### Security Configuration with JWT

```java
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final UserDetailsService userDetailsService;
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()  // Disable CSRF for stateless JWT
            .cors().and()      // Enable CORS
            .authorizeHttpRequests(auth -> auth
                // Public endpoints
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/h2-console/**").permitAll()
                
                // Role-based access
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
                
                // All other requests need authentication
                .anyRequest().authenticated()
            )
            .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // Stateless
            .and()
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        
        // For H2 console
        http.headers().frameOptions().sameOrigin();
        
        return http.build();
    }
    
    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }
    
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) 
            throws Exception {
        return config.getAuthenticationManager();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

### Testing JWT Endpoints

```bash
# Register user
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john",
    "password": "password123",
    "email": "john@example.com"
  }'

# Login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john",
    "password": "password123"
  }'

# Response: {"token": "eyJhbGc...", "username": "john", "roles": ["ROLE_USER"]}

# Access protected endpoint
curl -X GET http://localhost:8080/api/users \
  -H "Authorization: Bearer eyJhbGc..."
```

---

## Role-Based Access Control

### Using Roles and Authorities

```java
// Role entity
@Entity
@Table(name = "roles")
@Data
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private RoleType name;
}

public enum RoleType {
    ROLE_USER,
    ROLE_ADMIN,
    ROLE_MODERATOR
}

// User with roles
@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    private String password;
    
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();
}
```

### URL-Based Authorization

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                // Public access
                .requestMatchers("/", "/home", "/api/auth/**").permitAll()
                
                // Role-based access
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/moderator/**").hasAnyRole("ADMIN", "MODERATOR")
                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN", "MODERATOR")
                
                // Authority-based access
                .requestMatchers("/api/delete/**").hasAuthority("DELETE_PRIVILEGE")
                .requestMatchers("/api/write/**").hasAnyAuthority("WRITE_PRIVILEGE", "ADMIN")
                
                // Pattern matching
                .requestMatchers("/api/users/{userId}/**").access(
                    new WebExpressionAuthorizationManager("@userSecurity.checkUserId(authentication, #userId)")
                )
                
                // Any other request
                .anyRequest().authenticated()
            );
        
        return http.build();
    }
}
```

### hasRole vs hasAuthority

```java
// hasRole - adds "ROLE_" prefix
.hasRole("ADMIN")  // Checks for "ROLE_ADMIN"

// hasAuthority - exact match
.hasAuthority("ROLE_ADMIN")  // Checks for "ROLE_ADMIN"
.hasAuthority("DELETE_PRIVILEGE")  // Checks for "DELETE_PRIVILEGE"
```

---

## Method-Level Security

### Enable Method Security

```java
@SpringBootApplication
@EnableMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

### @PreAuthorize

Execute check before method execution.

```java
@Service
public class UserService {
    
    // Only ADMIN role
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    
    // Multiple roles
    @PreAuthorize("hasAnyRole('ADMIN', 'MODERATOR')")
    public void moderateContent(Long id) {
        // Moderation logic
    }
    
    // Authority check
    @PreAuthorize("hasAuthority('DELETE_PRIVILEGE')")
    public void deleteContent(Long id) {
        // Delete logic
    }
    
    // Check if user owns resource
    @PreAuthorize("#username == authentication.principal.username")
    public User updateProfile(String username, User updates) {
        return userRepository.save(updates);
    }
    
    // Complex expression
    @PreAuthorize("hasRole('ADMIN') or #userId == authentication.principal.id")
    public User getUser(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }
    
    // Custom security expression
    @PreAuthorize("@userSecurity.isOwner(#userId, authentication)")
    public void updateUser(Long userId, User updates) {
        // Update logic
    }
}

// Custom security expressions
@Component("userSecurity")
public class UserSecurity {
    
    public boolean isOwner(Long userId, Authentication authentication) {
        if (authentication == null) return false;
        
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        return userId.equals(userDetails.getUser().getId());
    }
    
    public boolean isAdminOrOwner(Long userId, Authentication authentication) {
        if (authentication == null) return false;
        
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        
        // Check if admin
        boolean isAdmin = userDetails.getAuthorities().stream()
            .anyMatch(auth -> auth.getAuthority().equals("ROLE_ADMIN"));
        
        // Check if owner
        boolean isOwner = userId.equals(userDetails.getUser().getId());
        
        return isAdmin || isOwner;
    }
}
```

### @PostAuthorize

Execute check after method execution (less common).

```java
@Service
public class PostService {
    
    // Check returned object
    @PostAuthorize("returnObject.author == authentication.principal.username")
    public Post getPost(Long id) {
        return postRepository.findById(id).orElse(null);
    }
    
    // Filter returned collection
    @PostAuthorize("hasRole('ADMIN') or returnObject.size() <= 10")
    public List<Post> getPosts() {
        return postRepository.findAll();
    }
}
```

### @Secured

Simple role check (older style).

```java
@Service
public class AdminService {
    
    @Secured("ROLE_ADMIN")  // Must include ROLE_ prefix
    public void adminOnlyMethod() {
        // Admin logic
    }
    
    @Secured({"ROLE_ADMIN", "ROLE_MODERATOR"})
    public void moderatorOrAdminMethod() {
        // Logic
    }
}
```

### @RolesAllowed (JSR-250)

```java
@Service
public class UserService {
    
    @RolesAllowed("ADMIN")  // No ROLE_ prefix needed
    public void adminMethod() {
        // Admin logic
    }
    
    @RolesAllowed({"ADMIN", "USER"})
    public void userOrAdminMethod() {
        // Logic
    }
}
```

### Method Security Comparison

| Annotation | Support | Expressions | Use Case |
|------------|---------|-------------|----------|
| **@PreAuthorize** | ✅ | ✅ SpEL | Most flexible |
| **@PostAuthorize** | ✅ | ✅ SpEL | Check return value |
| **@Secured** | ✅ | ❌ | Simple role check |
| **@RolesAllowed** | ✅ | ❌ | JSR-250 standard |

---

## Complete JWT Implementation

### User Entity with Roles

```java
@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false)
    private String username;
    
    @Column(nullable = false)
    private String password;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    @Column(nullable = false)
    private boolean enabled = true;
    
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();
}

@Entity
@Table(name = "roles")
@Data
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private RoleType name;
    
    public Role(RoleType name) {
        this.name = name;
    }
}

public enum RoleType {
    ROLE_USER,
    ROLE_ADMIN,
    ROLE_MODERATOR
}
```

### Complete Security Configuration

```java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
@RequiredArgsConstructor
public class SecurityConfig {
    
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final UserDetailsService userDetailsService;
    private final JwtAuthenticationEntryPoint jwtAuthEntryPoint;
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .cors().and()
            .exceptionHandling()
                .authenticationEntryPoint(jwtAuthEntryPoint)
            .and()
            .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/swagger-ui/**", "/v3/api-docs/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }
    
    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }
    
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) 
            throws Exception {
        return config.getAuthenticationManager();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

### JWT Authentication Entry Point

```java
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
    
    private static final Logger log = LoggerFactory.getLogger(JwtAuthenticationEntryPoint.class);
    
    @Override
    public void commence(HttpServletRequest request, 
                        HttpServletResponse response,
                        AuthenticationException authException) 
            throws IOException, ServletException {
        
        log.error("Unauthorized error: {}", authException.getMessage());
        
        response.setContentType("application/json");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        
        Map<String, Object> error = new HashMap<>();
        error.put("status", HttpServletResponse.SC_UNAUTHORIZED);
        error.put("error", "Unauthorized");
        error.put("message", authException.getMessage());
        error.put("path", request.getServletPath());
        error.put("timestamp", LocalDateTime.now());
        
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        
        response.getWriter().write(mapper.writeValueAsString(error));
    }
}
```

### Protected REST Controller

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    // Accessible by authenticated users
    @GetMapping("/profile")
    public ResponseEntity<UserResponseDTO> getProfile(Authentication authentication) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        User user = userDetails.getUser();
        return ResponseEntity.ok(userMapper.toResponseDTO(user));
    }
    
    // Only ADMIN can access
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public ResponseEntity<List<UserResponseDTO>> getAllUsers() {
        List<UserResponseDTO> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
    
    // User can update own profile, ADMIN can update any
    @PreAuthorize("hasRole('ADMIN') or #userId == authentication.principal.user.id")
    @PutMapping("/{userId}")
    public ResponseEntity<UserResponseDTO> updateUser(
            @PathVariable Long userId,
            @Valid @RequestBody UserRequestDTO userRequest) {
        UserResponseDTO updated = userService.updateUser(userId, userRequest);
        return ResponseEntity.ok(updated);
    }
    
    // Only ADMIN can delete
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
```

### Get Current User

```java
@RestController
@RequestMapping("/api")
public class ProfileController {
    
    // Method 1: Using Authentication
    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(Authentication authentication) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        return ResponseEntity.ok(userDetails.getUser());
    }
    
    // Method 2: Using @AuthenticationPrincipal
    @GetMapping("/profile")
    public ResponseEntity<User> getProfile(@AuthenticationPrincipal CustomUserDetails userDetails) {
        return ResponseEntity.ok(userDetails.getUser());
    }
    
    // Method 3: Using SecurityContextHolder
    @GetMapping("/current")
    public ResponseEntity<User> getCurrent() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        return ResponseEntity.ok(userDetails.getUser());
    }
}
```

---

## Additional Security Features

### CORS with Security

```java
@Configuration
public class CorsConfig {
    
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000", "http://localhost:4200"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setExposedHeaders(Arrays.asList("Authorization"));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", configuration);
        
        return source;
    }
}
```

### Remember Me

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(auth -> auth
            .anyRequest().authenticated()
        )
        .rememberMe()
            .key("uniqueAndSecret")
            .tokenValiditySeconds(86400)  // 24 hours
            .userDetailsService(userDetailsService);
    
    return http.build();
}
```

### Logout Handler

```java
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        SecurityContextHolder.clearContext();
        
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        
        return ResponseEntity.ok(new MessageResponse("Logged out successfully"));
    }
}
```

### Password Change

```java
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(
            @Valid @RequestBody ChangePasswordRequest request,
            @AuthenticationPrincipal CustomUserDetails userDetails) {
        
        User user = userDetails.getUser();
        
        // Verify old password
        if (!passwordEncoder.matches(request.getOldPassword(), user.getPassword())) {
            return ResponseEntity.badRequest()
                .body(new ErrorResponse("Invalid old password"));
        }
        
        // Update password
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userService.updateUser(user);
        
        return ResponseEntity.ok(new MessageResponse("Password changed successfully"));
    }
}

@Data
public class ChangePasswordRequest {
    @NotBlank
    private String oldPassword;
    
    @NotBlank
    @Size(min = 8)
    private String newPassword;
}
```

### Security Test

```java
@SpringBootTest
@AutoConfigureMockMvc
public class SecurityTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @Test
    @WithMockUser(username = "admin", roles = {"ADMIN"})
    public void testAdminAccess() throws Exception {
        mockMvc.perform(get("/api/admin/users"))
            .andExpect(status().isOk());
    }
    
    @Test
    public void testUnauthorizedAccess() throws Exception {
        mockMvc.perform(get("/api/users"))
            .andExpect(status().isUnauthorized());
    }
    
    @Test
    @WithMockUser(username = "user", roles = {"USER"})
    public void testForbiddenAccess() throws Exception {
        mockMvc.perform(delete("/api/admin/users/1"))
            .andExpect(status().isForbidden());
    }
}
```

---

## Summary

Spring Security for production applications:

### Spring Security Basics
- Auto-secures all endpoints by default
- Provides authentication and authorization
- Form login, HTTP Basic, custom authentication
- Session management

### Authentication & Authorization
- **Authentication**: Who you are (identity)
- **Authorization**: What you can do (permissions)
- **UserDetails**: User information
- **UserDetailsService**: Load user from database
- **GrantedAuthority**: Roles and permissions

### Password Encoding
- **BCryptPasswordEncoder**: ✅ **Recommended**
- Never store plain text passwords
- Encode on registration, verify on login
- Alternative: Argon2, SCrypt, PBKDF2

### JWT Authentication ⭐ **Most Important**
- **Stateless** authentication
- **JwtUtil**: Generate and validate tokens
- **JwtAuthenticationFilter**: Extract and verify JWT
- **SecurityConfig**: Stateless session, add JWT filter
- **Auth endpoints**: /login, /register, /refresh
- Store token on client, send with each request
- Use "Bearer {token}" in Authorization header

### Role-Based Access
- **URL-based**: Configure in SecurityFilterChain
- **hasRole()**: Check single role
- **hasAnyRole()**: Check multiple roles
- **hasAuthority()**: Check specific authority
- User-Role-Authority relationship

### Method-Level Security
- **@EnableMethodSecurity**: Enable method security
- **@PreAuthorize**: ✅ **Most flexible** (SpEL expressions)
- **@PostAuthorize**: Check after execution
- **@Secured**: Simple role check
- **@RolesAllowed**: JSR-250 standard
- Custom security expressions

### Additional Features
- CORS configuration with security
- Remember me functionality
- Logout handling
- Password change
- Security testing with @WithMockUser

### Best Practices
1. Use JWT for stateless REST APIs
2. Always encode passwords (BCrypt)
3. Use @PreAuthorize for method security
4. Separate authentication and business logic
5. Use HTTPS in production
6. Implement token refresh mechanism
7. Set appropriate token expiration
8. Store JWT secret securely (not in code)
9. Validate all inputs
10. Implement proper error handling

Spring Security with JWT provides robust, scalable authentication for modern applications.

---

## 8. Spring Boot + Microservices

Microservices architecture with Spring Boot and Spring Cloud.

## Microservices Architecture

### What are Microservices?

Small, independent services that work together. Each service:
- Runs in its own process
- Has its own database (database per service)
- Communicates via REST/messaging
- Can be deployed independently
- Owns specific business capability

### Monolith vs Microservices

| Feature | Monolith | Microservices |
|---------|----------|---------------|
| **Architecture** | Single application | Multiple services |
| **Database** | Single shared | Database per service |
| **Deployment** | Deploy entire app | Deploy individual services |
| **Scaling** | Scale entire app | Scale specific services |
| **Technology** | Single stack | Different stacks possible |
| **Complexity** | Lower | Higher |
| **Best for** | Small teams, simple apps | Large teams, complex apps |

---

## REST Communication (Service-to-Service)

### Using RestTemplate (Legacy)

```java
@Service
public class UserService {
    
    @Autowired
    private RestTemplate restTemplate;
    
    // GET request
    public Order getOrder(Long orderId) {
        String url = "http://order-service/api/orders/" + orderId;
        return restTemplate.getForObject(url, Order.class);
    }
    
    // GET with ResponseEntity
    public ResponseEntity<Order> getOrderEntity(Long orderId) {
        String url = "http://order-service/api/orders/" + orderId;
        return restTemplate.getForEntity(url, Order.class);
    }
    
    // POST request
    public Order createOrder(Order order) {
        String url = "http://order-service/api/orders";
        return restTemplate.postForObject(url, order, Order.class);
    }
    
    // PUT request
    public void updateOrder(Long orderId, Order order) {
        String url = "http://order-service/api/orders/" + orderId;
        restTemplate.put(url, order);
    }
    
    // DELETE request
    public void deleteOrder(Long orderId) {
        String url = "http://order-service/api/orders/" + orderId;
        restTemplate.delete(url);
    }
}

// Configuration
@Configuration
public class RestTemplateConfig {
    
    @Bean
    @LoadBalanced  // Enable client-side load balancing
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
```

### Using WebClient (Modern - Recommended)

```java
@Service
public class UserService {
    
    @Autowired
    private WebClient.Builder webClientBuilder;
    
    // GET request
    public Mono<Order> getOrder(Long orderId) {
        return webClientBuilder.build()
            .get()
            .uri("http://order-service/api/orders/{id}", orderId)
            .retrieve()
            .bodyToMono(Order.class);
    }
    
    // GET with error handling
    public Order getOrderSync(Long orderId) {
        return webClientBuilder.build()
            .get()
            .uri("http://order-service/api/orders/{id}", orderId)
            .retrieve()
            .onStatus(HttpStatus::is4xxClientError, 
                response -> Mono.error(new OrderNotFoundException(orderId)))
            .bodyToMono(Order.class)
            .block();  // Convert to sync
    }
    
    // POST request
    public Mono<Order> createOrder(Order order) {
        return webClientBuilder.build()
            .post()
            .uri("http://order-service/api/orders")
            .bodyValue(order)
            .retrieve()
            .bodyToMono(Order.class);
    }
    
    // With headers
    public Mono<Order> getOrderWithAuth(Long orderId, String token) {
        return webClientBuilder.build()
            .get()
            .uri("http://order-service/api/orders/{id}", orderId)
            .header("Authorization", "Bearer " + token)
            .retrieve()
            .bodyToMono(Order.class);
    }
}

// Configuration
@Configuration
public class WebClientConfig {
    
    @Bean
    @LoadBalanced
    public WebClient.Builder webClientBuilder() {
        return WebClient.builder();
    }
}
```

---

## Feign Client

Declarative REST client (easier than RestTemplate/WebClient).

### Setup

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>
```

```java
@SpringBootApplication
@EnableFeignClients  // Enable Feign clients
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}
```

### Feign Client Interface

```java
@FeignClient(name = "order-service")  // Service name
public interface OrderClient {
    
    // GET request
    @GetMapping("/api/orders/{id}")
    Order getOrderById(@PathVariable("id") Long id);
    
    // GET all
    @GetMapping("/api/orders")
    List<Order> getAllOrders();
    
    // GET with query params
    @GetMapping("/api/orders/search")
    List<Order> searchOrders(@RequestParam("userId") Long userId,
                             @RequestParam("status") String status);
    
    // POST request
    @PostMapping("/api/orders")
    Order createOrder(@RequestBody Order order);
    
    // PUT request
    @PutMapping("/api/orders/{id}")
    Order updateOrder(@PathVariable("id") Long id, @RequestBody Order order);
    
    // DELETE request
    @DeleteMapping("/api/orders/{id}")
    void deleteOrder(@PathVariable("id") Long id);
}

// Usage in Service
@Service
public class UserService {
    
    @Autowired
    private OrderClient orderClient;
    
    public List<Order> getUserOrders(Long userId) {
        return orderClient.searchOrders(userId, "COMPLETED");
    }
    
    public Order createOrderForUser(Order order) {
        return orderClient.createOrder(order);
    }
}
```

### Feign with Headers

```java
@FeignClient(name = "order-service")
public interface OrderClient {
    
    // Static header
    @GetMapping(value = "/api/orders/{id}", 
                headers = "X-API-Version=1.0")
    Order getOrder(@PathVariable Long id);
    
    // Dynamic header
    @GetMapping("/api/orders/{id}")
    Order getOrderWithAuth(@PathVariable Long id,
                          @RequestHeader("Authorization") String token);
    
    // Multiple headers
    @GetMapping("/api/orders")
    List<Order> getOrders(@RequestHeader Map<String, String> headers);
}
```

### Feign Configuration

```java
@Configuration
public class FeignConfig {
    
    @Bean
    public RequestInterceptor requestInterceptor() {
        return requestTemplate -> {
            // Add custom headers to all requests
            requestTemplate.header("X-Client-Id", "user-service");
            
            // Add JWT token
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication != null && authentication.getCredentials() != null) {
                String token = authentication.getCredentials().toString();
                requestTemplate.header("Authorization", "Bearer " + token);
            }
        };
    }
    
    @Bean
    public Logger.Level feignLoggerLevel() {
        return Logger.Level.FULL;  // NONE, BASIC, HEADERS, FULL
    }
}

// Apply to specific client
@FeignClient(name = "order-service", configuration = FeignConfig.class)
public interface OrderClient {
    // Methods
}
```

### Error Handling with Feign

```java
@Component
public class FeignErrorDecoder implements ErrorDecoder {
    
    @Override
    public Exception decode(String methodKey, Response response) {
        switch (response.status()) {
            case 404:
                return new OrderNotFoundException("Order not found");
            case 400:
                return new BadRequestException("Bad request");
            case 500:
                return new ServiceUnavailableException("Service unavailable");
            default:
                return new Exception("Generic error");
        }
    }
}

@Configuration
public class FeignConfig {
    @Bean
    public ErrorDecoder errorDecoder() {
        return new FeignErrorDecoder();
    }
}
```

---

## Service Discovery (Eureka)

Eureka Server maintains registry of all microservices.

### Eureka Server

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

```java
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}
```

```properties
# application.properties (Eureka Server)

server.port=8761

# Eureka server configuration
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false
eureka.server.enable-self-preservation=false

# Access dashboard: http://localhost:8761
```

### Eureka Client (Microservice)

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

```java
@SpringBootApplication
@EnableDiscoveryClient  // or @EnableEurekaClient
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}
```

```properties
# application.properties (Eureka Client)

spring.application.name=user-service
server.port=8081

# Eureka client configuration
eureka.client.service-url.defaultZone=http://localhost:8761/eureka/
eureka.instance.prefer-ip-address=true
eureka.instance.lease-renewal-interval-in-seconds=30
```

### Service Discovery with Feign

```java
// Feign automatically discovers service via Eureka
@FeignClient(name = "order-service")  // Service name in Eureka
public interface OrderClient {
    @GetMapping("/api/orders/{id}")
    Order getOrder(@PathVariable Long id);
}

// No hardcoded URLs needed!
```

---

## Load Balancing

### Spring Cloud LoadBalancer

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>
```

```java
@Configuration
public class LoadBalancerConfig {
    
    @Bean
    @LoadBalanced  // Enable client-side load balancing
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
    
    @Bean
    @LoadBalanced
    public WebClient.Builder webClientBuilder() {
        return WebClient.builder();
    }
}

// Usage (automatically load balanced)
@Service
public class UserService {
    
    @Autowired
    private RestTemplate restTemplate;
    
    public Order getOrder(Long orderId) {
        // Multiple instances of order-service?
        // LoadBalancer distributes requests automatically
        String url = "http://order-service/api/orders/" + orderId;
        return restTemplate.getForObject(url, Order.class);
    }
}
```

### Custom Load Balancer Configuration

```java
@Configuration
public class CustomLoadBalancerConfig {
    
    @Bean
    public ServiceInstanceListSupplier serviceInstanceListSupplier(
            ConfigurableApplicationContext context) {
        return ServiceInstanceListSupplier.builder()
            .withBlockingDiscoveryClient()
            .withSameInstancePreference()  // Prefer same instance
            .build(context);
    }
}
```

---

## Config Server

Centralized configuration management for microservices.

### Config Server Setup

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-config-server</artifactId>
</dependency>
```

```java
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}
```

```properties
# application.properties (Config Server)

server.port=8888

# Git repository (store configs here)
spring.cloud.config.server.git.uri=https://github.com/myorg/config-repo
spring.cloud.config.server.git.default-label=main
spring.cloud.config.server.git.clone-on-start=true

# Or local file system
# spring.cloud.config.server.native.search-locations=file:///C:/config
# spring.profiles.active=native
```

### Config Repository Structure

```
config-repo/
├── application.yml              # Common config
├── user-service.yml             # User service config
├── order-service.yml            # Order service config
├── user-service-dev.yml         # User service dev profile
├── user-service-prod.yml        # User service prod profile
```

### Config Client (Microservice)

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>
```

```properties
# application.properties (Config Client)

spring.application.name=user-service
spring.profiles.active=dev

# Config server URL
spring.config.import=optional:configserver:http://localhost:8888

# Or in bootstrap.properties (older way)
# spring.cloud.config.uri=http://localhost:8888
# spring.cloud.config.name=user-service
# spring.cloud.config.profile=dev
```

### Refresh Configuration at Runtime

```xml
<!-- Add actuator -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

```properties
# Expose refresh endpoint
management.endpoints.web.exposure.include=refresh,health,info
```

```java
@RestController
@RefreshScope  // Refresh beans when config changes
public class ConfigController {
    
    @Value("${app.message}")
    private String message;
    
    @GetMapping("/config/message")
    public String getMessage() {
        return message;
    }
}

// Refresh config
// POST http://localhost:8081/actuator/refresh
```

---

## API Gateway (Spring Cloud Gateway)

Single entry point for all microservices.

### Setup

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

```java
@SpringBootApplication
@EnableDiscoveryClient
public class ApiGatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }
}
```

### Gateway Configuration

```yaml
# application.yml (API Gateway)

server:
  port: 8080

spring:
  application:
    name: api-gateway
  
  cloud:
    gateway:
      routes:
        # User Service
        - id: user-service
          uri: lb://user-service  # Load balanced
          predicates:
            - Path=/api/users/**
          filters:
            - RewritePath=/api/users/(?<segment>.*), /${segment}
        
        # Order Service
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**
          filters:
            - RewritePath=/api/orders/(?<segment>.*), /${segment}
        
        # Product Service with header filter
        - id: product-service
          uri: lb://product-service
          predicates:
            - Path=/api/products/**
          filters:
            - AddRequestHeader=X-Request-Source, api-gateway
            - AddResponseHeader=X-Response-Source, api-gateway

# Eureka
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
```

### Custom Gateway Filter

```java
@Component
public class AuthenticationFilter implements GlobalFilter, Ordered {
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        
        // Skip authentication for public endpoints
        if (isPublicPath(request.getPath().toString())) {
            return chain.filter(exchange);
        }
        
        // Extract token
        String authHeader = request.getHeaders().getFirst("Authorization");
        
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return onError(exchange, "Missing authorization header", HttpStatus.UNAUTHORIZED);
        }
        
        String token = authHeader.substring(7);
        
        try {
            // Validate token
            if (!jwtUtil.isValidToken(token)) {
                return onError(exchange, "Invalid token", HttpStatus.UNAUTHORIZED);
            }
            
            // Add username to headers
            String username = jwtUtil.extractUsername(token);
            ServerHttpRequest modifiedRequest = request.mutate()
                .header("X-User-Id", username)
                .build();
            
            return chain.filter(exchange.mutate().request(modifiedRequest).build());
            
        } catch (Exception e) {
            return onError(exchange, "Token validation failed", HttpStatus.UNAUTHORIZED);
        }
    }
    
    private Mono<Void> onError(ServerWebExchange exchange, String message, HttpStatus status) {
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(status);
        return response.setComplete();
    }
    
    private boolean isPublicPath(String path) {
        return path.startsWith("/api/auth") || path.startsWith("/api/public");
    }
    
    @Override
    public int getOrder() {
        return -1;  // High priority
    }
}
```

### Route Predicates

```yaml
routes:
  # Path predicate
  - id: path-route
    uri: lb://service-name
    predicates:
      - Path=/api/users/**
  
  # Method predicate
  - id: method-route
    uri: lb://service-name
    predicates:
      - Method=GET,POST
  
  # Header predicate
  - id: header-route
    uri: lb://service-name
    predicates:
      - Header=X-Request-Id, \d+
  
  # Query predicate
  - id: query-route
    uri: lb://service-name
    predicates:
      - Query=version, 2
  
  # Host predicate
  - id: host-route
    uri: lb://service-name
    predicates:
      - Host=**.example.com
  
  # Combined predicates
  - id: combined-route
    uri: lb://service-name
    predicates:
      - Path=/api/**
      - Method=GET
      - Header=Authorization
```

### Built-in Filters

```yaml
routes:
  - id: service-route
    uri: lb://service-name
    filters:
      - AddRequestHeader=X-Custom-Header, Value
      - AddResponseHeader=X-Response-Time, ${timestamp}
      - RemoveRequestHeader=Cookie
      - RewritePath=/api/(?<segment>.*), /${segment}
      - PrefixPath=/api
      - StripPrefix=1
      - SetPath=/new/{segment}
      - SetStatus=200
      - Retry=3
```

---

## Circuit Breaker (Resilience4j)

Prevents cascading failures in microservices.

### Setup

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-circuitbreaker-resilience4j</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

### Configuration

```properties
# application.properties

# Circuit Breaker
resilience4j.circuitbreaker.instances.orderService.sliding-window-size=10
resilience4j.circuitbreaker.instances.orderService.failure-rate-threshold=50
resilience4j.circuitbreaker.instances.orderService.wait-duration-in-open-state=10000
resilience4j.circuitbreaker.instances.orderService.permitted-number-of-calls-in-half-open-state=3
resilience4j.circuitbreaker.instances.orderService.automatic-transition-from-open-to-half-open-enabled=true

# Retry
resilience4j.retry.instances.orderService.max-attempts=3
resilience4j.retry.instances.orderService.wait-duration=1000

# Rate Limiter
resilience4j.ratelimiter.instances.orderService.limit-for-period=10
resilience4j.ratelimiter.instances.orderService.limit-refresh-period=1s
resilience4j.ratelimiter.instances.orderService.timeout-duration=0

# Expose metrics
management.endpoints.web.exposure.include=health,circuitbreakers,circuitbreakerevents
management.health.circuitbreakers.enabled=true
```

### Using Circuit Breaker

```java
@Service
public class UserService {
    
    @Autowired
    private OrderClient orderClient;
    
    // With Circuit Breaker
    @CircuitBreaker(name = "orderService", fallbackMethod = "getOrdersFallback")
    public List<Order> getUserOrders(Long userId) {
        return orderClient.getOrdersByUserId(userId);
    }
    
    // Fallback method
    private List<Order> getOrdersFallback(Long userId, Exception ex) {
        log.error("Order service is down, using fallback", ex);
        return Collections.emptyList();  // Return default value
    }
    
    // With Retry
    @Retry(name = "orderService", fallbackMethod = "createOrderFallback")
    public Order createOrder(Order order) {
        return orderClient.createOrder(order);
    }
    
    private Order createOrderFallback(Order order, Exception ex) {
        log.error("Failed to create order after retries", ex);
        throw new ServiceUnavailableException("Order service unavailable");
    }
    
    // With Rate Limiter
    @RateLimiter(name = "orderService")
    public Order getOrder(Long orderId) {
        return orderClient.getOrder(orderId);
    }
}
```

### Circuit Breaker States

```
CLOSED (Normal)
    ↓ (Failure rate > threshold)
OPEN (Failing)
    ↓ (After wait duration)
HALF_OPEN (Testing)
    ↓ (Success)        ↓ (Failure)
CLOSED              OPEN
```

### Combined Resilience Patterns

```java
@Service
public class OrderService {
    
    @CircuitBreaker(name = "orderService", fallbackMethod = "fallback")
    @Retry(name = "orderService")
    @RateLimiter(name = "orderService")
    public Order getOrder(Long orderId) {
        return orderClient.getOrder(orderId);
    }
    
    private Order fallback(Long orderId, Exception ex) {
        log.error("All resilience patterns failed", ex);
        return new Order();  // Default order
    }
}
```

### Monitoring Circuit Breaker

```bash
# Check circuit breaker health
GET http://localhost:8081/actuator/health

# Circuit breaker details
GET http://localhost:8081/actuator/circuitbreakers

# Circuit breaker events
GET http://localhost:8081/actuator/circuitbreakerevents
```

---

## Rate Limiting

Limit number of requests to protect services.

### Using Resilience4j Rate Limiter

```properties
# application.properties

# Rate limiter configuration
resilience4j.ratelimiter.instances.userApi.limit-for-period=100
resilience4j.ratelimiter.instances.userApi.limit-refresh-period=1m
resilience4j.ratelimiter.instances.userApi.timeout-duration=5s
```

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @RateLimiter(name = "userApi")
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}
```

### Custom Rate Limiter with Bucket4j

```xml
<dependency>
    <groupId>com.github.vladimir-bukhtoyarov</groupId>
    <artifactId>bucket4j-core</artifactId>
    <version>7.6.0</version>
</dependency>
```

```java
@Component
public class RateLimitFilter extends OncePerRequestFilter {
    
    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain filterChain) 
            throws ServletException, IOException {
        
        String clientId = getClientId(request);
        Bucket bucket = buckets.computeIfAbsent(clientId, this::createBucket);
        
        if (bucket.tryConsume(1)) {
            filterChain.doFilter(request, response);
        } else {
            response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
            response.getWriter().write("Rate limit exceeded");
        }
    }
    
    private Bucket createBucket(String clientId) {
        // 100 requests per minute
        Bandwidth limit = Bandwidth.classic(100, Refill.intervally(100, Duration.ofMinutes(1)));
        return Bucket.builder()
            .addLimit(limit)
            .build();
    }
    
    private String getClientId(HttpServletRequest request) {
        // Use IP address or user ID
        return request.getRemoteAddr();
    }
}
```

### API Gateway Rate Limiting

```yaml
# API Gateway with rate limiting

spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/api/users/**
          filters:
            - name: RequestRateLimiter
              args:
                redis-rate-limiter.replenishRate: 10  # tokens per second
                redis-rate-limiter.burstCapacity: 20
                key-resolver: "#{@userKeyResolver}"
```

```java
@Configuration
public class RateLimiterConfig {
    
    @Bean
    public KeyResolver userKeyResolver() {
        return exchange -> {
            // Rate limit per user
            return exchange.getPrincipal()
                .map(Principal::getName)
                .defaultIfEmpty("anonymous");
        };
    }
    
    @Bean
    public KeyResolver ipKeyResolver() {
        return exchange -> {
            // Rate limit per IP
            return Mono.just(exchange.getRequest()
                .getRemoteAddress()
                .getAddress()
                .getHostAddress());
        };
    }
}
```

---

## Complete Microservices Example

### Project Structure

```
microservices-app/
├── eureka-server/          # Service discovery
├── config-server/          # Configuration server
├── api-gateway/            # API Gateway
├── user-service/           # User microservice
├── order-service/          # Order microservice
└── product-service/        # Product microservice
```

### User Service (Microservice)

```java
// Main Application
@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}

// Configuration
@Configuration
public class UserServiceConfig {
    
    @Bean
    @LoadBalanced
    public WebClient.Builder webClientBuilder() {
        return WebClient.builder();
    }
}

// Feign Client to Order Service
@FeignClient(name = "order-service")
public interface OrderClient {
    @GetMapping("/orders/user/{userId}")
    List<Order> getOrdersByUserId(@PathVariable Long userId);
}

// Service
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private OrderClient orderClient;
    
    @CircuitBreaker(name = "orderService", fallbackMethod = "getUserWithoutOrders")
    public UserWithOrders getUserWithOrders(Long userId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException(userId));
        
        List<Order> orders = orderClient.getOrdersByUserId(userId);
        
        return new UserWithOrders(user, orders);
    }
    
    private UserWithOrders getUserWithoutOrders(Long userId, Exception ex) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException(userId));
        
        return new UserWithOrders(user, Collections.emptyList());
    }
}

// Controller
@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/{id}/with-orders")
    public ResponseEntity<UserWithOrders> getUserWithOrders(@PathVariable Long id) {
        UserWithOrders result = userService.getUserWithOrders(id);
        return ResponseEntity.ok(result);
    }
}
```

```properties
# application.properties (User Service)

spring.application.name=user-service
server.port=8081

# Database
spring.datasource.url=jdbc:mysql://localhost:3306/user_db
spring.datasource.username=root
spring.datasource.password=password

# Eureka
eureka.client.service-url.defaultZone=http://localhost:8761/eureka/

# Config Server
spring.config.import=optional:configserver:http://localhost:8888

# Circuit Breaker
resilience4j.circuitbreaker.instances.orderService.sliding-window-size=10
resilience4j.circuitbreaker.instances.orderService.failure-rate-threshold=50
```

### Testing Microservices Flow

```bash
# 1. Start Eureka Server (8761)
# 2. Start Config Server (8888)
# 3. Start API Gateway (8080)
# 4. Start User Service (8081)
# 5. Start Order Service (8082)

# Access through API Gateway
curl http://localhost:8080/api/users/1/with-orders \
  -H "Authorization: Bearer {token}"

# Gateway routes to user-service
# User-service calls order-service via Feign
# Circuit breaker protects against order-service failure
```

---

## Distributed Tracing

### Sleuth for Tracing

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-sleuth</artifactId>
</dependency>
```

```properties
# Automatically adds trace ID and span ID to logs
spring.sleuth.sampler.probability=1.0  # 100% sampling
```

**Log output:**
```
INFO [user-service,abc123,xyz456,true] com.example.UserService : Processing user request
       ^service    ^trace ^span  ^exportable
```

### Zipkin for Visualization

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-sleuth-zipkin</artifactId>
</dependency>
```

```properties
spring.zipkin.base-url=http://localhost:9411
spring.sleuth.sampler.probability=1.0
```

---

## Summary

Spring Boot microservices architecture:

### REST Communication
- **RestTemplate**: Legacy, synchronous (with @LoadBalanced)
- **WebClient**: Modern, reactive (recommended)
- **Feign Client**: ✅ **Easiest** - declarative REST client

### Service Discovery (Eureka)
- **Eureka Server**: Service registry (port 8761)
- **Eureka Client**: Register and discover services
- **@EnableDiscoveryClient**: Enable service discovery
- No hardcoded URLs needed

### Load Balancing
- **Spring Cloud LoadBalancer**: Client-side load balancing
- **@LoadBalanced**: Enable on RestTemplate/WebClient
- Automatic with Feign + Eureka
- Round-robin by default

### Config Server
- **Centralized configuration** for all services
- **Git-backed** or file system
- **@RefreshScope**: Refresh config at runtime
- Profile-specific configs (dev, prod)

### API Gateway
- **Single entry point** for all services
- **Spring Cloud Gateway**: Reactive gateway
- **Routes**: Path-based routing to services
- **Filters**: Modify requests/responses
- **Predicates**: Route matching rules
- Authentication, logging, rate limiting

### Circuit Breaker (Resilience4j)
- **Prevents cascading failures**
- **@CircuitBreaker**: With fallback method
- **States**: CLOSED → OPEN → HALF_OPEN → CLOSED
- **@Retry**: Automatic retry on failure
- **@RateLimiter**: Limit request rate
- Combine patterns for resilience

### Rate Limiting
- **Resilience4j**: Application-level rate limiting
- **Bucket4j**: Token bucket algorithm
- **API Gateway**: Centralized rate limiting
- Per user, per IP, or global

### Distributed Tracing
- **Sleuth**: Add trace/span IDs
- **Zipkin**: Visualize request flow
- Track requests across services

### Best Practices
1. Use Feign for service-to-service communication
2. Always implement circuit breakers
3. Use API Gateway as single entry point
4. Centralize configuration with Config Server
5. Implement rate limiting for protection
6. Use distributed tracing for debugging
7. Design for failure (fallbacks)
8. Keep services loosely coupled
9. Database per service pattern
10. Monitor all services (Actuator + metrics)

Microservices with Spring Boot and Spring Cloud enable building scalable, resilient distributed systems.

---

## 9. Messaging

Asynchronous communication between services using message brokers.

## Why Messaging?

**Benefits:**
- **Decoupling**: Services don't need to know about each other
- **Asynchronous**: Non-blocking communication
- **Scalability**: Handle high loads with queues
- **Reliability**: Messages persist until processed
- **Load leveling**: Queue buffers traffic spikes

**Use Cases:**
- Order processing
- Email notifications
- Background jobs
- Event-driven architecture
- Microservices communication

---

## RabbitMQ (AMQP)

Message broker using Advanced Message Queuing Protocol.

### Setup

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

```properties
# application.properties

# RabbitMQ configuration
spring.rabbitmq.host=localhost
spring.rabbitmq.port=5672
spring.rabbitmq.username=guest
spring.rabbitmq.password=guest
spring.rabbitmq.virtual-host=/
```

### Basic Configuration

```java
@Configuration
public class RabbitMQConfig {
    
    // Queue
    @Bean
    public Queue orderQueue() {
        return new Queue("order.queue", true);  // durable = true
    }
    
    // Exchange
    @Bean
    public DirectExchange orderExchange() {
        return new DirectExchange("order.exchange");
    }
    
    // Binding (Queue to Exchange)
    @Bean
    public Binding orderBinding(Queue orderQueue, DirectExchange orderExchange) {
        return BindingBuilder.bind(orderQueue)
            .to(orderExchange)
            .with("order.routing.key");
    }
}
```

### Producer (Message Sender)

```java
@Service
@Slf4j
public class OrderProducer {
    
    @Autowired
    private RabbitTemplate rabbitTemplate;
    
    // Send simple message
    public void sendOrder(String orderDetails) {
        rabbitTemplate.convertAndSend("order.queue", orderDetails);
        log.info("Sent message: {}", orderDetails);
    }
    
    // Send with exchange and routing key
    public void sendOrderToExchange(Order order) {
        rabbitTemplate.convertAndSend(
            "order.exchange",
            "order.routing.key",
            order
        );
        log.info("Sent order: {}", order.getId());
    }
    
    // Send with message properties
    public void sendWithProperties(Order order) {
        rabbitTemplate.convertAndSend(
            "order.exchange",
            "order.routing.key",
            order,
            message -> {
                message.getMessageProperties().setContentType("application/json");
                message.getMessageProperties().setHeader("priority", "high");
                return message;
            }
        );
    }
}
```

### Consumer (Message Listener)

```java
@Service
@Slf4j
public class OrderConsumer {
    
    @Autowired
    private OrderService orderService;
    
    // Simple listener
    @RabbitListener(queues = "order.queue")
    public void handleOrder(String orderDetails) {
        log.info("Received message: {}", orderDetails);
        // Process order
    }
    
    // Listener with object
    @RabbitListener(queues = "order.queue")
    public void handleOrderObject(Order order) {
        log.info("Received order: {}", order.getId());
        orderService.processOrder(order);
    }
    
    // Listener with Message object (access headers)
    @RabbitListener(queues = "order.queue")
    public void handleWithMessage(Order order, Message message) {
        log.info("Received order: {}", order.getId());
        
        MessageProperties props = message.getMessageProperties();
        log.info("Priority: {}", props.getHeader("priority"));
        log.info("Content Type: {}", props.getContentType());
        
        orderService.processOrder(order);
    }
    
    // Manual acknowledgement
    @RabbitListener(queues = "order.queue", ackMode = "MANUAL")
    public void handleWithAck(Order order, Channel channel, @Header(AmqpHeaders.DELIVERY_TAG) long tag) 
            throws IOException {
        try {
            orderService.processOrder(order);
            channel.basicAck(tag, false);  // Acknowledge
            log.info("Message acknowledged");
        } catch (Exception e) {
            channel.basicNack(tag, false, true);  // Reject and requeue
            log.error("Message rejected", e);
        }
    }
}
```

### Exchange Types

```java
@Configuration
public class ExchangeConfig {
    
    // 1. Direct Exchange (1-to-1 routing)
    @Bean
    public DirectExchange directExchange() {
        return new DirectExchange("direct.exchange");
    }
    
    // 2. Fanout Exchange (broadcast to all queues)
    @Bean
    public FanoutExchange fanoutExchange() {
        return new FanoutExchange("fanout.exchange");
    }
    
    // 3. Topic Exchange (pattern matching)
    @Bean
    public TopicExchange topicExchange() {
        return new TopicExchange("topic.exchange");
    }
    
    // 4. Headers Exchange (match headers)
    @Bean
    public HeadersExchange headersExchange() {
        return new HeadersExchange("headers.exchange");
    }
    
    // Bindings for Topic Exchange
    @Bean
    public Binding orderCreatedBinding() {
        return BindingBuilder.bind(orderCreatedQueue())
            .to(topicExchange())
            .with("order.created.#");  // Matches order.created.*
    }
    
    @Bean
    public Binding orderUpdatedBinding() {
        return BindingBuilder.bind(orderUpdatedQueue())
            .to(topicExchange())
            .with("order.updated.*");
    }
}
```

---

## Dead Letter Queue (DLQ)

Handles failed messages.

### DLQ Configuration

```java
@Configuration
public class DLQConfig {
    
    // Main queue with DLQ
    @Bean
    public Queue orderQueue() {
        return QueueBuilder.durable("order.queue")
            .withArgument("x-dead-letter-exchange", "dlx.exchange")
            .withArgument("x-dead-letter-routing-key", "order.dlq")
            .withArgument("x-message-ttl", 60000)  // 60 seconds TTL
            .build();
    }
    
    // Dead Letter Exchange
    @Bean
    public DirectExchange deadLetterExchange() {
        return new DirectExchange("dlx.exchange");
    }
    
    // Dead Letter Queue
    @Bean
    public Queue deadLetterQueue() {
        return new Queue("order.dlq", true);
    }
    
    // Binding DLQ to DLX
    @Bean
    public Binding deadLetterBinding() {
        return BindingBuilder.bind(deadLetterQueue())
            .to(deadLetterExchange())
            .with("order.dlq");
    }
}

// Consumer with retry and DLQ
@Service
@Slf4j
public class OrderConsumer {
    
    private static final int MAX_RETRIES = 3;
    
    @RabbitListener(queues = "order.queue")
    public void handleOrder(Order order, Message message) throws Exception {
        try {
            orderService.processOrder(order);
            log.info("Order processed successfully: {}", order.getId());
        } catch (Exception e) {
            log.error("Error processing order: {}", order.getId(), e);
            
            // Check retry count
            Integer retryCount = (Integer) message.getMessageProperties()
                .getHeaders().get("x-retry-count");
            
            if (retryCount == null) {
                retryCount = 0;
            }
            
            if (retryCount < MAX_RETRIES) {
                // Retry
                message.getMessageProperties().setHeader("x-retry-count", retryCount + 1);
                throw e;  // Will be requeued
            } else {
                // Max retries exceeded, will go to DLQ
                log.error("Max retries exceeded for order: {}", order.getId());
                throw new AmqpRejectAndDontRequeueException("Max retries exceeded");
            }
        }
    }
    
    // DLQ Consumer
    @RabbitListener(queues = "order.dlq")
    public void handleDeadLetter(Order order, Message message) {
        log.error("Message in DLQ: {}", order.getId());
        
        // Handle failed message
        // - Log to database
        // - Send alert
        // - Manual intervention
        failedOrderRepository.save(new FailedOrder(order, message));
    }
}
```

---

## Retry Patterns

### Spring Retry

```xml
<dependency>
    <groupId>org.springframework.retry</groupId>
    <artifactId>spring-retry</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```

```java
@SpringBootApplication
@EnableRetry  // Enable retry support
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

```java
@Service
@Slf4j
public class OrderService {
    
    // Basic retry
    @Retryable(value = {ServiceException.class}, maxAttempts = 3)
    public void processOrder(Order order) {
        log.info("Processing order: {}", order.getId());
        // May throw ServiceException
        externalService.process(order);
    }
    
    // Retry with backoff
    @Retryable(
        value = {ServiceException.class},
        maxAttempts = 5,
        backoff = @Backoff(delay = 2000, multiplier = 2)  // 2s, 4s, 8s, 16s
    )
    public void processWithBackoff(Order order) {
        externalService.process(order);
    }
    
    // Recover method (called after max retries)
    @Recover
    public void recover(ServiceException e, Order order) {
        log.error("Recovery after failed retries for order: {}", order.getId());
        // Send to DLQ or save to database
        deadLetterService.handleFailedOrder(order);
    }
}
```

### RabbitMQ Retry Configuration

```properties
# application.properties

# Retry configuration
spring.rabbitmq.listener.simple.retry.enabled=true
spring.rabbitmq.listener.simple.retry.max-attempts=3
spring.rabbitmq.listener.simple.retry.initial-interval=2000
spring.rabbitmq.listener.simple.retry.multiplier=2.0
spring.rabbitmq.listener.simple.retry.max-interval=10000
```

---

## Apache Kafka

Distributed streaming platform for high-throughput messaging.

### Setup

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>
```

```properties
# application.properties

# Kafka configuration
spring.kafka.bootstrap-servers=localhost:9092

# Producer
spring.kafka.producer.key-serializer=org.apache.kafka.common.serialization.StringSerializer
spring.kafka.producer.value-serializer=org.springframework.kafka.support.serializer.JsonSerializer
spring.kafka.producer.acks=all
spring.kafka.producer.retries=3

# Consumer
spring.kafka.consumer.group-id=user-service-group
spring.kafka.consumer.key-deserializer=org.apache.kafka.common.serialization.StringDeserializer
spring.kafka.consumer.value-deserializer=org.springframework.kafka.support.serializer.JsonDeserializer
spring.kafka.consumer.auto-offset-reset=earliest
spring.kafka.consumer.properties.spring.json.trusted.packages=*
```

### Kafka Configuration

```java
@Configuration
public class KafkaConfig {
    
    @Value("${spring.kafka.bootstrap-servers}")
    private String bootstrapServers;
    
    // Producer configuration
    @Bean
    public ProducerFactory<String, Order> producerFactory() {
        Map<String, Object> config = new HashMap<>();
        config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
        config.put(ProducerConfig.ACKS_CONFIG, "all");
        config.put(ProducerConfig.RETRIES_CONFIG, 3);
        
        return new DefaultKafkaProducerFactory<>(config);
    }
    
    @Bean
    public KafkaTemplate<String, Order> kafkaTemplate() {
        return new KafkaTemplate<>(producerFactory());
    }
    
    // Consumer configuration
    @Bean
    public ConsumerFactory<String, Order> consumerFactory() {
        Map<String, Object> config = new HashMap<>();
        config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        config.put(ConsumerConfig.GROUP_ID_CONFIG, "user-service-group");
        config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
        config.put(JsonDeserializer.TRUSTED_PACKAGES, "*");
        config.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");
        
        return new DefaultKafkaConsumerFactory<>(config);
    }
    
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, Order> kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, Order> factory = 
            new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        return factory;
    }
}
```

### Kafka Producer

```java
@Service
@Slf4j
public class OrderProducer {
    
    private static final String TOPIC = "order-topic";
    
    @Autowired
    private KafkaTemplate<String, Order> kafkaTemplate;
    
    // Send message
    public void sendOrder(Order order) {
        kafkaTemplate.send(TOPIC, order);
        log.info("Sent order to Kafka: {}", order.getId());
    }
    
    // Send with key (for partitioning)
    public void sendOrderWithKey(String key, Order order) {
        kafkaTemplate.send(TOPIC, key, order);
        log.info("Sent order with key {}: {}", key, order.getId());
    }
    
    // Send with callback
    public void sendOrderWithCallback(Order order) {
        ListenableFuture<SendResult<String, Order>> future = 
            kafkaTemplate.send(TOPIC, order);
        
        future.addCallback(
            result -> log.info("Sent order successfully: {}", order.getId()),
            ex -> log.error("Failed to send order: {}", order.getId(), ex)
        );
    }
    
    // Send to specific partition
    public void sendToPartition(Order order, int partition) {
        kafkaTemplate.send(TOPIC, partition, null, order);
    }
    
    // Send with headers
    public void sendWithHeaders(Order order) {
        Message<Order> message = MessageBuilder
            .withPayload(order)
            .setHeader("type", "ORDER_CREATED")
            .setHeader("version", "1.0")
            .build();
        
        kafkaTemplate.send(TOPIC, message);
    }
}
```

### Kafka Consumer

```java
@Service
@Slf4j
public class OrderConsumer {
    
    @Autowired
    private OrderService orderService;
    
    // Basic consumer
    @KafkaListener(topics = "order-topic", groupId = "user-service-group")
    public void consumeOrder(Order order) {
        log.info("Consumed order: {}", order.getId());
        orderService.processOrder(order);
    }
    
    // Consumer with ConsumerRecord (access metadata)
    @KafkaListener(topics = "order-topic", groupId = "user-service-group")
    public void consumeWithMetadata(ConsumerRecord<String, Order> record) {
        log.info("Topic: {}", record.topic());
        log.info("Partition: {}", record.partition());
        log.info("Offset: {}", record.offset());
        log.info("Key: {}", record.key());
        log.info("Timestamp: {}", record.timestamp());
        
        Order order = record.value();
        orderService.processOrder(order);
    }
    
    // Consumer with headers
    @KafkaListener(topics = "order-topic", groupId = "user-service-group")
    public void consumeWithHeaders(
            Order order,
            @Header("type") String type,
            @Header("version") String version) {
        
        log.info("Type: {}, Version: {}", type, version);
        orderService.processOrder(order);
    }
    
    // Multiple topics
    @KafkaListener(topics = {"order-topic", "payment-topic"}, groupId = "user-service-group")
    public void consumeMultipleTopics(String message) {
        log.info("Consumed from multiple topics: {}", message);
    }
    
    // Topic pattern
    @KafkaListener(topicPattern = "order-.*", groupId = "user-service-group")
    public void consumeByPattern(String message) {
        log.info("Consumed from pattern: {}", message);
    }
}
```

### Kafka Error Handling

```java
@Service
@Slf4j
public class OrderConsumer {
    
    @KafkaListener(topics = "order-topic", groupId = "user-service-group")
    public void consumeOrder(Order order) {
        try {
            orderService.processOrder(order);
            log.info("Order processed: {}", order.getId());
        } catch (Exception e) {
            log.error("Error processing order: {}", order.getId(), e);
            throw e;  // Will retry based on configuration
        }
    }
}

// Error handler configuration
@Configuration
public class KafkaErrorConfig {
    
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, Order> kafkaListenerContainerFactory(
            ConsumerFactory<String, Order> consumerFactory) {
        
        ConcurrentKafkaListenerContainerFactory<String, Order> factory = 
            new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        
        // Error handler
        factory.setCommonErrorHandler(new DefaultErrorHandler(
            new FixedBackOff(2000L, 3L)  // 2s delay, 3 attempts
        ));
        
        return factory;
    }
}
```

### Kafka DLQ

```java
@Configuration
public class KafkaDLQConfig {
    
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, Order> kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, Order> factory = 
            new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        
        // Dead Letter Publishing Recoverer
        DeadLetterPublishingRecoverer recoverer = new DeadLetterPublishingRecoverer(
            kafkaTemplate(),
            (record, ex) -> {
                // Send to DLQ topic
                return new TopicPartition(record.topic() + ".DLT", record.partition());
            }
        );
        
        DefaultErrorHandler errorHandler = new DefaultErrorHandler(
            recoverer,
            new FixedBackOff(2000L, 3L)
        );
        
        factory.setCommonErrorHandler(errorHandler);
        
        return factory;
    }
}

// DLQ Consumer
@Service
@Slf4j
public class DeadLetterConsumer {
    
    @KafkaListener(topics = "order-topic.DLT", groupId = "dlq-group")
    public void handleDeadLetter(Order order, @Header(KafkaHeaders.EXCEPTION_MESSAGE) String exception) {
        log.error("Message in DLQ - Order: {}, Exception: {}", order.getId(), exception);
        
        // Handle failed message
        // - Save to database
        // - Send alert
        // - Manual processing
        failedOrderRepository.save(new FailedOrder(order, exception));
    }
}
```

---

## RabbitMQ vs Kafka

| Feature | RabbitMQ | Kafka |
|---------|----------|-------|
| **Type** | Message Broker | Distributed Log |
| **Protocol** | AMQP | Custom |
| **Routing** | Complex (exchanges) | Simple (topics) |
| **Message Retention** | Until consumed | Configurable (days) |
| **Ordering** | Per queue | Per partition |
| **Throughput** | Lower | Very High |
| **Use Case** | Task queues, RPC | Event streaming, logs |
| **Delivery** | At-most-once, At-least-once, Exactly-once | At-least-once, Exactly-once |

---

## Event-Driven Architecture

### Publishing Domain Events

```java
// Event class
@Data
@AllArgsConstructor
public class OrderCreatedEvent {
    private Long orderId;
    private Long userId;
    private Double totalAmount;
    private LocalDateTime createdAt;
}

// Publisher
@Service
public class OrderService {
    
    @Autowired
    private OrderRepository orderRepository;
    
    @Autowired
    private OrderProducer orderProducer;
    
    @Transactional
    public Order createOrder(Order order) {
        // Save order
        Order saved = orderRepository.save(order);
        
        // Publish event
        OrderCreatedEvent event = new OrderCreatedEvent(
            saved.getId(),
            saved.getUserId(),
            saved.getTotalAmount(),
            LocalDateTime.now()
        );
        
        orderProducer.publishOrderCreated(event);
        
        return saved;
    }
}

// Kafka Producer
@Service
public class OrderProducer {
    
    @Autowired
    private KafkaTemplate<String, OrderCreatedEvent> kafkaTemplate;
    
    public void publishOrderCreated(OrderCreatedEvent event) {
        kafkaTemplate.send("order-created", event);
    }
}

// Event Consumer (in another service)
@Service
@Slf4j
public class NotificationConsumer {
    
    @KafkaListener(topics = "order-created", groupId = "notification-service")
    public void handleOrderCreated(OrderCreatedEvent event) {
        log.info("Order created event received: {}", event.getOrderId());
        
        // Send notification
        emailService.sendOrderConfirmation(event.getUserId(), event.getOrderId());
    }
}
```

### Saga Pattern (Distributed Transactions)

```java
// Order Service - Start saga
@Service
public class OrderService {
    
    @Autowired
    private KafkaTemplate<String, OrderCreatedEvent> kafkaTemplate;
    
    @Transactional
    public Order createOrder(Order order) {
        // Step 1: Create order (pending)
        order.setStatus(OrderStatus.PENDING);
        Order saved = orderRepository.save(order);
        
        // Step 2: Publish event
        OrderCreatedEvent event = new OrderCreatedEvent(saved.getId(), saved.getUserId());
        kafkaTemplate.send("order-created", event);
        
        return saved;
    }
    
    @KafkaListener(topics = "payment-confirmed")
    public void handlePaymentConfirmed(PaymentConfirmedEvent event) {
        // Update order status
        Order order = orderRepository.findById(event.getOrderId()).orElseThrow();
        order.setStatus(OrderStatus.CONFIRMED);
        orderRepository.save(order);
    }
    
    @KafkaListener(topics = "payment-failed")
    public void handlePaymentFailed(PaymentFailedEvent event) {
        // Compensating transaction - cancel order
        Order order = orderRepository.findById(event.getOrderId()).orElseThrow();
        order.setStatus(OrderStatus.CANCELLED);
        orderRepository.save(order);
    }
}

// Payment Service - Continue saga
@Service
public class PaymentService {
    
    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;
    
    @KafkaListener(topics = "order-created")
    public void handleOrderCreated(OrderCreatedEvent event) {
        try {
            // Process payment
            boolean success = processPayment(event.getUserId(), event.getTotalAmount());
            
            if (success) {
                // Publish success event
                kafkaTemplate.send("payment-confirmed", 
                    new PaymentConfirmedEvent(event.getOrderId()));
            } else {
                // Publish failure event
                kafkaTemplate.send("payment-failed", 
                    new PaymentFailedEvent(event.getOrderId(), "Insufficient funds"));
            }
        } catch (Exception e) {
            // Publish failure event
            kafkaTemplate.send("payment-failed", 
                new PaymentFailedEvent(event.getOrderId(), e.getMessage()));
        }
    }
}
```

---

## Advanced Messaging Patterns

### Request-Reply Pattern

```java
// RabbitMQ Request-Reply
@Service
public class OrderService {
    
    @Autowired
    private RabbitTemplate rabbitTemplate;
    
    public Order getOrderDetails(Long orderId) {
        Order order = (Order) rabbitTemplate.convertSendAndReceive(
            "order.request.queue",
            orderId
        );
        return order;
    }
}

@Service
public class OrderRequestListener {
    
    @RabbitListener(queues = "order.request.queue")
    public Order handleOrderRequest(Long orderId) {
        return orderRepository.findById(orderId).orElse(null);
    }
}
```

### Batch Processing

```java
@Service
@Slf4j
public class BatchConsumer {
    
    @KafkaListener(
        topics = "order-topic",
        groupId = "batch-group",
        containerFactory = "batchKafkaListenerContainerFactory"
    )
    public void consumeBatch(List<Order> orders) {
        log.info("Received batch of {} orders", orders.size());
        
        // Process in batch
        orderService.processOrders(orders);
    }
}

// Batch configuration
@Configuration
public class BatchConfig {
    
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, Order> 
            batchKafkaListenerContainerFactory() {
        
        ConcurrentKafkaListenerContainerFactory<String, Order> factory = 
            new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        factory.setBatchListener(true);  // Enable batch listening
        factory.getContainerProperties().setAckMode(ContainerProperties.AckMode.BATCH);
        
        return factory;
    }
}
```

### Priority Queues (RabbitMQ)

```java
@Configuration
public class PriorityQueueConfig {
    
    @Bean
    public Queue priorityQueue() {
        return QueueBuilder.durable("priority.queue")
            .withArgument("x-max-priority", 10)  // Priority 0-10
            .build();
    }
}

@Service
public class PriorityProducer {
    
    @Autowired
    private RabbitTemplate rabbitTemplate;
    
    public void sendHighPriority(Order order) {
        rabbitTemplate.convertAndSend("priority.queue", order, message -> {
            message.getMessageProperties().setPriority(10);  // Highest priority
            return message;
        });
    }
    
    public void sendLowPriority(Order order) {
        rabbitTemplate.convertAndSend("priority.queue", order, message -> {
            message.getMessageProperties().setPriority(1);  // Low priority
            return message;
        });
    }
}
```

### Message Filtering

```java
// RabbitMQ Header-based filtering
@RabbitListener(queues = "notification.queue")
public void handleNotification(
        Notification notification,
        @Header("type") String type) {
    
    switch (type) {
        case "EMAIL":
            emailService.send(notification);
            break;
        case "SMS":
            smsService.send(notification);
            break;
        case "PUSH":
            pushService.send(notification);
            break;
    }
}

// Kafka Filter
@KafkaListener(topics = "events-topic", groupId = "filtered-group")
public void consumeFiltered(
        ConsumerRecord<String, Event> record,
        @Header("eventType") String eventType) {
    
    if (eventType.equals("ORDER_CREATED")) {
        handleOrderCreated(record.value());
    }
}
```

---

## Message Serialization

### JSON Serialization (Default)

```java
// Already configured for JSON
@Value
public class OrderMessage {
    private Long orderId;
    private String status;
    private LocalDateTime timestamp;
}

// Automatically serialized/deserialized as JSON
```

### Avro Serialization (Kafka)

```xml
<dependency>
    <groupId>io.confluent</groupId>
    <artifactId>kafka-avro-serializer</artifactId>
    <version>7.3.0</version>
</dependency>
```

```properties
spring.kafka.producer.value-serializer=io.confluent.kafka.serializers.KafkaAvroSerializer
spring.kafka.consumer.value-deserializer=io.confluent.kafka.serializers.KafkaAvroDeserializer
spring.kafka.properties.schema.registry.url=http://localhost:8081
```

---

## Complete Messaging Example

```java
// Order Service
@Service
@Slf4j
public class OrderService {
    
    @Autowired
    private OrderRepository orderRepository;
    
    @Autowired
    private KafkaTemplate<String, OrderEvent> kafkaTemplate;
    
    @Transactional
    public Order createOrder(OrderRequest request) {
        // Create order
        Order order = new Order();
        order.setUserId(request.getUserId());
        order.setTotalAmount(request.getTotalAmount());
        order.setStatus(OrderStatus.PENDING);
        
        Order saved = orderRepository.save(order);
        
        // Publish event
        OrderEvent event = new OrderEvent(
            saved.getId(),
            saved.getUserId(),
            saved.getTotalAmount(),
            EventType.ORDER_CREATED
        );
        
        kafkaTemplate.send("order-events", event);
        log.info("Order created and event published: {}", saved.getId());
        
        return saved;
    }
}

// Inventory Service (Consumer)
@Service
@Slf4j
public class InventoryEventConsumer {
    
    @Autowired
    private InventoryService inventoryService;
    
    @Autowired
    private KafkaTemplate<String, InventoryEvent> kafkaTemplate;
    
    @KafkaListener(topics = "order-events", groupId = "inventory-service")
    @Retryable(maxAttempts = 3, backoff = @Backoff(delay = 2000))
    public void handleOrderEvent(OrderEvent event) {
        log.info("Inventory service received order event: {}", event.getOrderId());
        
        try {
            if (event.getEventType() == EventType.ORDER_CREATED) {
                // Reserve inventory
                boolean reserved = inventoryService.reserveItems(event.getOrderId());
                
                if (reserved) {
                    kafkaTemplate.send("inventory-events", 
                        new InventoryEvent(event.getOrderId(), InventoryStatus.RESERVED));
                } else {
                    kafkaTemplate.send("inventory-events", 
                        new InventoryEvent(event.getOrderId(), InventoryStatus.INSUFFICIENT));
                }
            }
        } catch (Exception e) {
            log.error("Error processing order event", e);
            throw e;
        }
    }
    
    @Recover
    public void recover(Exception e, OrderEvent event) {
        log.error("Failed to process after retries: {}", event.getOrderId());
        kafkaTemplate.send("order-events.DLT", event);
    }
}

// Notification Service (Consumer)
@Service
@Slf4j
public class NotificationEventConsumer {
    
    @Autowired
    private NotificationService notificationService;
    
    @KafkaListener(topics = "order-events", groupId = "notification-service")
    public void handleOrderEvent(OrderEvent event) {
        if (event.getEventType() == EventType.ORDER_CREATED) {
            notificationService.sendOrderConfirmation(event.getUserId(), event.getOrderId());
        }
    }
}
```

---

## Summary

Messaging in Spring Boot for asynchronous communication:

### RabbitMQ (AMQP)
- **Message broker** with queues and exchanges
- **Exchange types**: Direct, Fanout, Topic, Headers
- **Producer**: RabbitTemplate.convertAndSend()
- **Consumer**: @RabbitListener
- **Routing**: Complex routing with exchanges
- **Use case**: Task queues, request-reply, RPC

### Kafka
- **Distributed streaming** platform
- **Topics and partitions** for scalability
- **Producer**: KafkaTemplate.send()
- **Consumer**: @KafkaListener
- **High throughput** for event streaming
- **Message retention**: Configurable
- **Use case**: Event sourcing, log aggregation, real-time analytics

### Message Listeners
- **@RabbitListener**: RabbitMQ message consumption
- **@KafkaListener**: Kafka message consumption
- Access metadata: partition, offset, headers
- Multiple topics and patterns
- Manual vs automatic acknowledgement

### Dead Letter Queues (DLQ)
- **Handle failed messages** separately
- **RabbitMQ**: x-dead-letter-exchange configuration
- **Kafka**: .DLT topic pattern
- Monitor and process failed messages
- Prevent message loss

### Retry Patterns
- **Spring Retry**: @Retryable with @Recover
- **Exponential backoff**: Increasing delays
- **Max attempts**: Limit retry count
- **RabbitMQ**: Built-in retry configuration
- **Kafka**: ErrorHandler with backoff
- Combine with circuit breakers

### Event-Driven Architecture
- **Domain events**: OrderCreated, PaymentConfirmed
- **Saga pattern**: Distributed transactions
- **Event sourcing**: Store events, not state
- **CQRS**: Command Query Responsibility Segregation
- Loose coupling between services

### Best Practices
1. Use Kafka for high-throughput event streaming
2. Use RabbitMQ for complex routing and RPC
3. Always implement DLQ for failed messages
4. Use retry with exponential backoff
5. Make consumers idempotent (handle duplicates)
6. Monitor message queues and lag
7. Use appropriate acknowledgement mode
8. Implement circuit breakers for producers
9. Serialize messages efficiently (JSON, Avro)
10. Test failure scenarios (service down, network issues)

Messaging enables building scalable, decoupled, event-driven microservices architectures.

---

## 10. Caching

Caching improves application performance by storing frequently accessed data in memory.

## Spring Cache Abstraction

Spring provides a unified caching abstraction that works with multiple cache providers.

### Enable Caching

```java
@SpringBootApplication
@EnableCaching  // Enable Spring caching
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

### Cache Providers

```properties
# Simple (ConcurrentHashMap) - Default
spring.cache.type=simple

# Caffeine (Recommended for single instance)
spring.cache.type=caffeine

# Redis (Recommended for distributed)
spring.cache.type=redis

# EhCache
spring.cache.type=ehcache

# Hazelcast
spring.cache.type=hazelcast

# None (disable caching)
spring.cache.type=none
```

---

## @Cacheable

Cache method results. Subsequent calls return cached value without executing method.

### Basic Usage

```java
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    // Cache user by ID
    @Cacheable("users")
    public User getUserById(Long id) {
        System.out.println("Fetching from database: " + id);
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
    }
    
    // Cache all users
    @Cacheable("all-users")
    public List<User> getAllUsers() {
        System.out.println("Fetching all users from database");
        return userRepository.findAll();
    }
}

// First call: Hits database
User user1 = userService.getUserById(1L);  // "Fetching from database: 1"

// Second call: Returns from cache
User user2 = userService.getUserById(1L);  // No output (cached)
```

### Custom Cache Key

```java
@Service
public class UserService {
    
    // Default key = method parameter (id)
    @Cacheable("users")
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow();
    }
    
    // Custom key using SpEL
    @Cacheable(value = "users", key = "#email")
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow();
    }
    
    // Composite key
    @Cacheable(value = "users", key = "#username + '_' + #email")
    public User getUserByUsernameAndEmail(String username, String email) {
        return userRepository.findByUsernameAndEmail(username, email).orElseThrow();
    }
    
    // Key based on object property
    @Cacheable(value = "users", key = "#user.id")
    public User saveUser(User user) {
        return userRepository.save(user);
    }
    
    // Multiple parameters
    @Cacheable(value = "users", key = "{#username, #age}")
    public List<User> findByUsernameAndAge(String username, Integer age) {
        return userRepository.findByUsernameAndAge(username, age);
    }
}
```

### Conditional Caching

```java
@Service
public class UserService {
    
    // Cache only if condition is true
    @Cacheable(value = "users", condition = "#age > 18")
    public List<User> getUsersByAge(Integer age) {
        return userRepository.findByAge(age);
    }
    
    // Cache unless condition is true
    @Cacheable(value = "users", unless = "#result == null")
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    
    // Don't cache empty results
    @Cacheable(value = "users", unless = "#result.isEmpty()")
    public List<User> searchUsers(String keyword) {
        return userRepository.findByNameContaining(keyword);
    }
    
    // Cache based on parameter
    @Cacheable(value = "premium-users", condition = "#premium == true")
    public List<User> getUsers(boolean premium) {
        return premium ? userRepository.findPremiumUsers() : userRepository.findAll();
    }
}
```

---

## @CachePut

Updates cache without preventing method execution (always executes method).

```java
@Service
public class UserService {
    
    // Update cache after saving
    @CachePut(value = "users", key = "#user.id")
    public User updateUser(User user) {
        System.out.println("Updating user in database: " + user.getId());
        return userRepository.save(user);
    }
    
    // Update cache after creation
    @CachePut(value = "users", key = "#result.id")
    public User createUser(User user) {
        return userRepository.save(user);
    }
}
```

---

## @CacheEvict

Removes entries from cache.

```java
@Service
public class UserService {
    
    // Evict specific entry
    @CacheEvict(value = "users", key = "#id")
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    
    // Evict all entries in cache
    @CacheEvict(value = "users", allEntries = true)
    public void deleteAllUsers() {
        userRepository.deleteAll();
    }
    
    // Evict before method execution
    @CacheEvict(value = "users", beforeInvocation = true)
    public void clearUserCache() {
        // Cache cleared before method executes
        // Useful if method might throw exception
    }
    
    // Evict multiple caches
    @CacheEvict(value = {"users", "all-users"}, allEntries = true)
    public void refreshUsers() {
        // Clears both caches
    }
}
```

---

## @Caching

Combine multiple caching operations.

```java
@Service
public class UserService {
    
    // Multiple cache operations
    @Caching(
        cacheable = {
            @Cacheable(value = "users", key = "#id")
        },
        put = {
            @CachePut(value = "user-details", key = "#id")
        }
    )
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow();
    }
    
    // Evict from multiple caches
    @Caching(evict = {
        @CacheEvict(value = "users", key = "#id"),
        @CacheEvict(value = "all-users", allEntries = true)
    })
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    
    // Update one cache, evict another
    @Caching(
        put = {
            @CachePut(value = "users", key = "#result.id")
        },
        evict = {
            @CacheEvict(value = "all-users", allEntries = true)
        }
    )
    public User updateUser(User user) {
        return userRepository.save(user);
    }
}
```

---

## Redis Caching

Distributed caching with Redis.

### Setup

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
```

```properties
# application.properties

# Redis configuration
spring.redis.host=localhost
spring.redis.port=6379
spring.redis.password=
spring.redis.database=0
spring.redis.timeout=60000

# Connection pool
spring.redis.lettuce.pool.max-active=8
spring.redis.lettuce.pool.max-idle=8
spring.redis.lettuce.pool.min-idle=0

# Cache type
spring.cache.type=redis

# Cache names
spring.cache.cache-names=users,products,orders

# Redis cache configuration
spring.cache.redis.time-to-live=600000
# 600000ms = 10 minutes
spring.cache.redis.cache-null-values=false
spring.cache.redis.key-prefix=myapp::
```

### Redis Configuration

```java
@Configuration
@EnableCaching
public class RedisConfig {
    
    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory connectionFactory) {
        RedisTemplate<String, Object> template = new RedisTemplate<>();
        template.setConnectionFactory(connectionFactory);
        
        // JSON serialization
        Jackson2JsonRedisSerializer<Object> serializer = new Jackson2JsonRedisSerializer<>(Object.class);
        ObjectMapper mapper = new ObjectMapper();
        mapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        mapper.activateDefaultTyping(
            mapper.getPolymorphicTypeValidator(),
            ObjectMapper.DefaultTyping.NON_FINAL
        );
        serializer.setObjectMapper(mapper);
        
        // Set serializers
        template.setKeySerializer(new StringRedisSerializer());
        template.setHashKeySerializer(new StringRedisSerializer());
        template.setValueSerializer(serializer);
        template.setHashValueSerializer(serializer);
        
        template.afterPropertiesSet();
        return template;
    }
    
    @Bean
    public CacheManager cacheManager(RedisConnectionFactory connectionFactory) {
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(10))  // Default TTL: 10 minutes
            .serializeKeysWith(
                RedisSerializationContext.SerializationPair.fromSerializer(
                    new StringRedisSerializer()
                )
            )
            .serializeValuesWith(
                RedisSerializationContext.SerializationPair.fromSerializer(
                    new GenericJackson2JsonRedisSerializer()
                )
            )
            .disableCachingNullValues();  // Don't cache null values
        
        return RedisCacheManager.builder(connectionFactory)
            .cacheDefaults(config)
            .build();
    }
}
```

### Using RedisTemplate Directly

```java
@Service
public class CacheService {
    
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;
    
    // Set value
    public void setValue(String key, Object value) {
        redisTemplate.opsForValue().set(key, value);
    }
    
    // Set with expiration
    public void setValueWithTTL(String key, Object value, long timeout, TimeUnit unit) {
        redisTemplate.opsForValue().set(key, value, timeout, unit);
    }
    
    // Get value
    public Object getValue(String key) {
        return redisTemplate.opsForValue().get(key);
    }
    
    // Delete key
    public void deleteKey(String key) {
        redisTemplate.delete(key);
    }
    
    // Check if key exists
    public boolean hasKey(String key) {
        return Boolean.TRUE.equals(redisTemplate.hasKey(key));
    }
    
    // Set expiration
    public void setExpire(String key, long timeout, TimeUnit unit) {
        redisTemplate.expire(key, timeout, unit);
    }
    
    // Hash operations
    public void setHash(String key, String hashKey, Object value) {
        redisTemplate.opsForHash().put(key, hashKey, value);
    }
    
    public Object getHash(String key, String hashKey) {
        return redisTemplate.opsForHash().get(key, hashKey);
    }
    
    // List operations
    public void pushToList(String key, Object value) {
        redisTemplate.opsForList().rightPush(key, value);
    }
    
    public Object popFromList(String key) {
        return redisTemplate.opsForList().leftPop(key);
    }
    
    // Set operations
    public void addToSet(String key, Object value) {
        redisTemplate.opsForSet().add(key, value);
    }
    
    public Set<Object> getSet(String key) {
        return redisTemplate.opsForSet().members(key);
    }
}
```

---

## TTL (Time To Live)

### Global TTL Configuration

```java
@Configuration
@EnableCaching
public class CacheConfig {
    
    @Bean
    public CacheManager cacheManager(RedisConnectionFactory connectionFactory) {
        // Different TTL for different caches
        Map<String, RedisCacheConfiguration> cacheConfigurations = new HashMap<>();
        
        // Users cache - 10 minutes
        cacheConfigurations.put("users", 
            RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofMinutes(10))
        );
        
        // Products cache - 1 hour
        cacheConfigurations.put("products", 
            RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofHours(1))
        );
        
        // Short-lived cache - 1 minute
        cacheConfigurations.put("sessions", 
            RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofMinutes(1))
        );
        
        // Default configuration - 5 minutes
        RedisCacheConfiguration defaultConfig = RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(5));
        
        return RedisCacheManager.builder(connectionFactory)
            .cacheDefaults(defaultConfig)
            .withInitialCacheConfigurations(cacheConfigurations)
            .build();
    }
}
```

### Method-Level TTL

```java
@Service
public class CacheService {
    
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;
    
    // Set value with custom TTL
    public void cacheUserSession(String sessionId, UserSession session) {
        redisTemplate.opsForValue().set(
            "session:" + sessionId,
            session,
            30,  // 30 minutes
            TimeUnit.MINUTES
        );
    }
    
    // Cache with different TTL based on condition
    public void cacheProduct(Product product) {
        long ttl = product.isPremium() ? 60 : 30;  // Premium: 60min, Regular: 30min
        
        redisTemplate.opsForValue().set(
            "product:" + product.getId(),
            product,
            ttl,
            TimeUnit.MINUTES
        );
    }
}
```

---

## Cache Invalidation Strategies

### 1. Time-Based Invalidation (TTL)

```java
// Automatic expiration after TTL
@Cacheable(value = "users")  // Uses configured TTL
public User getUserById(Long id) {
    return userRepository.findById(id).orElseThrow();
}
```

### 2. Event-Based Invalidation

```java
@Service
public class UserService {
    
    // Cache on read
    @Cacheable(value = "users", key = "#id")
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow();
    }
    
    // Evict on update
    @CacheEvict(value = "users", key = "#user.id")
    public User updateUser(User user) {
        return userRepository.save(user);
    }
    
    // Evict on delete
    @CacheEvict(value = "users", key = "#id")
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    
    // Evict all when bulk operation
    @CacheEvict(value = "users", allEntries = true)
    public void importUsers(List<User> users) {
        userRepository.saveAll(users);
    }
}
```

### 3. Scheduled Invalidation

```java
@Component
public class CacheInvalidationScheduler {
    
    @Autowired
    private CacheManager cacheManager;
    
    // Clear cache every day at midnight
    @Scheduled(cron = "0 0 0 * * *")
    public void evictAllCaches() {
        cacheManager.getCacheNames().forEach(cacheName -> {
            Cache cache = cacheManager.getCache(cacheName);
            if (cache != null) {
                cache.clear();
            }
        });
        System.out.println("All caches cleared");
    }
    
    // Clear specific cache every hour
    @Scheduled(fixedRate = 3600000)  // 1 hour
    public void evictUsersCache() {
        Cache cache = cacheManager.getCache("users");
        if (cache != null) {
            cache.clear();
        }
    }
}
```

### 4. Manual Invalidation

```java
@Service
public class CacheService {
    
    @Autowired
    private CacheManager cacheManager;
    
    // Clear specific cache entry
    public void evictUser(Long userId) {
        Cache cache = cacheManager.getCache("users");
        if (cache != null) {
            cache.evict(userId);
        }
    }
    
    // Clear entire cache
    public void evictAllUsers() {
        Cache cache = cacheManager.getCache("users");
        if (cache != null) {
            cache.clear();
        }
    }
    
    // Clear all caches
    public void evictAllCaches() {
        cacheManager.getCacheNames().forEach(cacheName -> {
            Cache cache = cacheManager.getCache(cacheName);
            if (cache != null) {
                cache.clear();
            }
        });
    }
}
```

### 5. Cache Refresh Strategy

```java
@Service
public class UserService {
    
    // Refresh cache periodically in background
    @Scheduled(fixedRate = 600000)  // Every 10 minutes
    @CacheEvict(value = "all-users", allEntries = true)
    public void refreshUsersCache() {
        // Cache will be repopulated on next access
    }
    
    // Proactive cache refresh
    @Scheduled(fixedRate = 600000)
    public void proactiveCacheRefresh() {
        List<User> users = getAllUsers();  // Populates cache
    }
    
    @Cacheable("all-users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
```

---

## Caffeine Cache (Local Cache)

High-performance, in-memory cache.

### Setup

```xml
<dependency>
    <groupId>com.github.ben-manes.caffeine</groupId>
    <artifactId>caffeine</artifactId>
</dependency>
```

```properties
# application.properties

spring.cache.type=caffeine
spring.cache.caffeine.spec=maximumSize=500,expireAfterAccess=600s
```

### Caffeine Configuration

```java
@Configuration
@EnableCaching
public class CaffeineConfig {
    
    @Bean
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager("users", "products", "orders");
        cacheManager.setCaffeine(caffeineCacheBuilder());
        return cacheManager;
    }
    
    Caffeine<Object, Object> caffeineCacheBuilder() {
        return Caffeine.newBuilder()
            .maximumSize(500)  // Max 500 entries
            .expireAfterAccess(10, TimeUnit.MINUTES)  // Expire after 10 min of no access
            .expireAfterWrite(30, TimeUnit.MINUTES)   // Expire 30 min after write
            .recordStats();  // Enable statistics
    }
    
    // Different cache configurations
    @Bean
    public CacheManager multiCacheManager() {
        SimpleCacheManager cacheManager = new SimpleCacheManager();
        
        List<CaffeineCache> caches = new ArrayList<>();
        
        // Short-lived cache
        caches.add(buildCache("sessions", 
            Caffeine.newBuilder().expireAfterWrite(5, TimeUnit.MINUTES)));
        
        // Long-lived cache
        caches.add(buildCache("users", 
            Caffeine.newBuilder().expireAfterWrite(1, TimeUnit.HOURS)));
        
        // Large cache
        caches.add(buildCache("products", 
            Caffeine.newBuilder().maximumSize(1000).expireAfterWrite(24, TimeUnit.HOURS)));
        
        cacheManager.setCaches(caches);
        return cacheManager;
    }
    
    private CaffeineCache buildCache(String name, Caffeine<Object, Object> caffeine) {
        return new CaffeineCache(name, caffeine.build());
    }
}
```

---

## Cache Synchronization (Multi-Instance)

### Redis Pub/Sub for Cache Invalidation

```java
@Configuration
public class RedisCacheSyncConfig {
    
    @Bean
    public RedisMessageListenerContainer redisMessageListenerContainer(
            RedisConnectionFactory connectionFactory,
            MessageListenerAdapter listenerAdapter) {
        
        RedisMessageListenerContainer container = new RedisMessageListenerContainer();
        container.setConnectionFactory(connectionFactory);
        container.addMessageListener(listenerAdapter, new PatternTopic("cache:invalidate:*"));
        
        return container;
    }
    
    @Bean
    public MessageListenerAdapter listenerAdapter(CacheInvalidationListener listener) {
        return new MessageListenerAdapter(listener, "onMessage");
    }
}

@Component
public class CacheInvalidationListener {
    
    @Autowired
    private CacheManager cacheManager;
    
    public void onMessage(String message) {
        // Parse message: cacheName:key
        String[] parts = message.split(":");
        String cacheName = parts[0];
        String key = parts.length > 1 ? parts[1] : null;
        
        Cache cache = cacheManager.getCache(cacheName);
        if (cache != null) {
            if (key != null) {
                cache.evict(key);
            } else {
                cache.clear();
            }
        }
    }
}

@Service
public class CacheService {
    
    @Autowired
    private RedisTemplate<String, String> redisTemplate;
    
    public void invalidateCache(String cacheName, String key) {
        // Publish invalidation message
        redisTemplate.convertAndSend("cache:invalidate:" + cacheName, cacheName + ":" + key);
    }
}
```

---

## Advanced Caching Patterns

### Cache-Aside Pattern

```java
@Service
public class UserService {
    
    @Autowired
    private RedisTemplate<String, User> redisTemplate;
    
    @Autowired
    private UserRepository userRepository;
    
    public User getUser(Long id) {
        String key = "user:" + id;
        
        // 1. Check cache
        User user = (User) redisTemplate.opsForValue().get(key);
        
        if (user != null) {
            return user;  // Cache hit
        }
        
        // 2. Cache miss - fetch from database
        user = userRepository.findById(id).orElse(null);
        
        if (user != null) {
            // 3. Store in cache
            redisTemplate.opsForValue().set(key, user, 10, TimeUnit.MINUTES);
        }
        
        return user;
    }
    
    public User updateUser(User user) {
        // Update database
        User updated = userRepository.save(user);
        
        // Invalidate cache
        redisTemplate.delete("user:" + user.getId());
        
        return updated;
    }
}
```

### Write-Through Cache

```java
@Service
public class UserService {
    
    // Update both cache and database
    @CachePut(value = "users", key = "#user.id")
    public User updateUser(User user) {
        return userRepository.save(user);  // Write to DB, then update cache
    }
}
```

### Write-Behind Cache (Delayed Write)

```java
@Service
public class UserService {
    
    @Autowired
    private RedisTemplate<String, User> redisTemplate;
    
    @Scheduled(fixedRate = 60000)  // Flush every minute
    public void flushCache() {
        // Get modified entries from cache
        Set<String> keys = redisTemplate.keys("modified:user:*");
        
        if (keys != null) {
            for (String key : keys) {
                User user = (User) redisTemplate.opsForValue().get(key);
                if (user != null) {
                    userRepository.save(user);  // Write to database
                    redisTemplate.delete(key);  // Remove from modified set
                }
            }
        }
    }
}
```

### Cache Warming

```java
@Component
public class CacheWarmer implements ApplicationListener<ContextRefreshedEvent> {
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private ProductService productService;
    
    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        // Warm cache on application startup
        warmUserCache();
        warmProductCache();
    }
    
    private void warmUserCache() {
        // Load frequently accessed users
        List<Long> popularUserIds = Arrays.asList(1L, 2L, 3L, 4L, 5L);
        
        for (Long id : popularUserIds) {
            userService.getUserById(id);  // Populates cache
        }
        
        System.out.println("User cache warmed");
    }
    
    private void warmProductCache() {
        // Load all products (if not too many)
        productService.getAllProducts();
        System.out.println("Product cache warmed");
    }
}
```

---

## Caching Best Practices

### 1. Cache Only Expensive Operations

```java
// ✅ GOOD: Cache database queries
@Cacheable("users")
public User getUserById(Long id) {
    return userRepository.findById(id).orElseThrow();  // Database hit
}

// ❌ BAD: Don't cache simple operations
@Cacheable("calculations")
public int add(int a, int b) {
    return a + b;  // Too simple to cache
}
```

### 2. Use Appropriate TTL

```java
// Short TTL for frequently changing data
@Cacheable(value = "stock-prices")  // TTL: 1 minute
public StockPrice getCurrentPrice(String symbol) {
    return stockService.getPrice(symbol);
}

// Long TTL for static data
@Cacheable(value = "countries")  // TTL: 24 hours
public List<Country> getAllCountries() {
    return countryRepository.findAll();
}
```

### 3. Handle Cache Failures Gracefully

```java
@Service
public class UserService {
    
    @Cacheable(value = "users", unless = "#result == null")
    public User getUserById(Long id) {
        try {
            return userRepository.findById(id).orElse(null);
        } catch (Exception e) {
            log.error("Database error, cache might be stale", e);
            // Return cached value if available
            return getCachedUser(id);
        }
    }
}
```

### 4. Avoid Caching Null Values

```java
@Configuration
public class CacheConfig {
    
    @Bean
    public CacheManager cacheManager(RedisConnectionFactory connectionFactory) {
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
            .disableCachingNullValues();  // Don't cache nulls
        
        return RedisCacheManager.builder(connectionFactory)
            .cacheDefaults(config)
            .build();
    }
}

// Or in code
@Cacheable(value = "users", unless = "#result == null")
public User getUserById(Long id) {
    return userRepository.findById(id).orElse(null);
}
```

### 5. Monitor Cache Performance

```java
@Component
public class CacheMonitor {
    
    @Autowired
    private CacheManager cacheManager;
    
    @Scheduled(fixedRate = 300000)  // Every 5 minutes
    public void monitorCache() {
        cacheManager.getCacheNames().forEach(cacheName -> {
            Cache cache = cacheManager.getCache(cacheName);
            
            if (cache instanceof CaffeineCache) {
                CaffeineCache caffeineCache = (CaffeineCache) cache;
                com.github.benmanes.caffeine.cache.Cache<Object, Object> nativeCache = 
                    caffeineCache.getNativeCache();
                
                CacheStats stats = nativeCache.stats();
                
                log.info("Cache: {}", cacheName);
                log.info("  Hit rate: {}", stats.hitRate());
                log.info("  Miss rate: {}", stats.missRate());
                log.info("  Eviction count: {}", stats.evictionCount());
            }
        });
    }
}
```

### 6. Implement Cache Preloading

```java
@Service
public class ProductService {
    
    @PostConstruct
    public void init() {
        preloadCache();
    }
    
    @Cacheable("popular-products")
    public List<Product> getPopularProducts() {
        return productRepository.findTop10ByOrderByPopularityDesc();
    }
    
    private void preloadCache() {
        // Preload on startup
        getPopularProducts();
    }
}
```

### 7. Handle Concurrent Updates

```java
@Service
public class UserService {
    
    @Autowired
    private RedisTemplate<String, User> redisTemplate;
    
    public User updateUserWithLock(User user) {
        String lockKey = "lock:user:" + user.getId();
        String cacheKey = "user:" + user.getId();
        
        // Acquire lock
        Boolean acquired = redisTemplate.opsForValue()
            .setIfAbsent(lockKey, "locked", 5, TimeUnit.SECONDS);
        
        if (Boolean.TRUE.equals(acquired)) {
            try {
                // Update database
                User updated = userRepository.save(user);
                
                // Update cache
                redisTemplate.opsForValue().set(cacheKey, updated, 10, TimeUnit.MINUTES);
                
                return updated;
            } finally {
                // Release lock
                redisTemplate.delete(lockKey);
            }
        } else {
            throw new ConcurrentUpdateException("User is being updated by another process");
        }
    }
}
```

---

## Multi-Level Caching

Combine local and distributed caching.

```java
@Configuration
@EnableCaching
public class MultiLevelCacheConfig {
    
    @Bean
    public CacheManager cacheManager(RedisConnectionFactory redisConnectionFactory) {
        // Level 1: Local Caffeine cache
        CaffeineCacheManager level1 = new CaffeineCacheManager();
        level1.setCaffeine(Caffeine.newBuilder()
            .maximumSize(100)
            .expireAfterWrite(5, TimeUnit.MINUTES)
        );
        
        // Level 2: Distributed Redis cache
        RedisCacheManager level2 = RedisCacheManager.builder(redisConnectionFactory)
            .cacheDefaults(RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofMinutes(30))
            )
            .build();
        
        // Combine both levels
        return new CompositeCacheManager(level1, level2);
    }
}
```

---

## Complete Caching Example

```java
// Product Entity
@Entity
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private Double price;
    private Integer stock;
}

// Service with comprehensive caching
@Service
@Slf4j
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;
    
    // Cache single product (10 min TTL)
    @Cacheable(value = "products", key = "#id", unless = "#result == null")
    public Product getProductById(Long id) {
        log.info("Fetching product from database: {}", id);
        return productRepository.findById(id).orElse(null);
    }
    
    // Cache all products (30 min TTL)
    @Cacheable(value = "all-products")
    public List<Product> getAllProducts() {
        log.info("Fetching all products from database");
        return productRepository.findAll();
    }
    
    // Update cache when product created
    @CachePut(value = "products", key = "#result.id")
    @CacheEvict(value = "all-products", allEntries = true)
    public Product createProduct(Product product) {
        log.info("Creating product: {}", product.getName());
        return productRepository.save(product);
    }
    
    // Update cache when product updated
    @Caching(
        put = {
            @CachePut(value = "products", key = "#product.id")
        },
        evict = {
            @CacheEvict(value = "all-products", allEntries = true)
        }
    )
    public Product updateProduct(Product product) {
        log.info("Updating product: {}", product.getId());
        return productRepository.save(product);
    }
    
    // Evict from cache when deleted
    @Caching(evict = {
        @CacheEvict(value = "products", key = "#id"),
        @CacheEvict(value = "all-products", allEntries = true)
    })
    public void deleteProduct(Long id) {
        log.info("Deleting product: {}", id);
        productRepository.deleteById(id);
    }
    
    // Conditional caching
    @Cacheable(value = "products", condition = "#includeCache == true")
    public List<Product> searchProducts(String keyword, boolean includeCache) {
        return productRepository.findByNameContaining(keyword);
    }
    
    // Manual cache control
    public void refreshProductCache(Long id) {
        cacheManager.getCache("products").evict(id);
        getProductById(id);  // Reload from database
    }
}

// Controller
@RestController
@RequestMapping("/api/products")
public class ProductController {
    
    @Autowired
    private ProductService productService;
    
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }
    
    // Cache refresh endpoint
    @PostMapping("/{id}/refresh-cache")
    public ResponseEntity<String> refreshCache(@PathVariable Long id) {
        productService.refreshProductCache(id);
        return ResponseEntity.ok("Cache refreshed for product: " + id);
    }
}
```

---

## Summary

Caching for performance optimization:

### Spring Cache Abstraction
- **@EnableCaching**: Enable caching support
- **Unified API**: Works with multiple cache providers
- **Simple**: Caffeine (local, single instance)
- **Redis**: Distributed, multi-instance
- **Annotations**: Declarative caching

### Cache Annotations
- **@Cacheable**: Cache method result, skip execution if cached
- **@CachePut**: Always execute, update cache
- **@CacheEvict**: Remove from cache
- **@Caching**: Combine multiple operations
- **Custom keys**: SpEL expressions
- **Conditional**: condition, unless

### Redis Caching
- **Distributed** cache for microservices
- **RedisTemplate**: Direct Redis operations
- **String, Hash, List, Set**: Data structures
- **Pub/Sub**: Cache synchronization
- **Serialization**: JSON for objects

### TTL (Time To Live)
- **Global TTL**: Default for all caches
- **Cache-specific TTL**: Different per cache
- **Method-level TTL**: RedisTemplate with timeout
- **expireAfterWrite**: Fixed TTL
- **expireAfterAccess**: Sliding TTL

### Cache Invalidation Strategies
1. **Time-based**: Automatic with TTL
2. **Event-based**: @CacheEvict on updates
3. **Scheduled**: Periodic cache refresh
4. **Manual**: CacheManager.evict()
5. **Cache refresh**: Scheduled background updates

### Caching Patterns
- **Cache-Aside**: Read from cache, fallback to database
- **Write-Through**: Update cache and database together
- **Write-Behind**: Delayed database write
- **Cache Warming**: Preload cache on startup
- **Multi-level**: Local (Caffeine) + Distributed (Redis)

### Best Practices
1. Cache expensive operations (database queries, API calls)
2. Use appropriate TTL for data freshness
3. Don't cache null values
4. Evict cache on updates/deletes
5. Monitor cache hit/miss rates
6. Handle cache failures gracefully
7. Use Redis for distributed systems
8. Implement cache warming for critical data
9. Set reasonable cache sizes
10. Test cache behavior (hits, misses, evictions)

Caching dramatically improves application performance and reduces database load.

---

## 11. Testing

Comprehensive testing strategies for Spring Boot applications.

## Testing Pyramid

```
           ╱╲
          ╱  ╲
         ╱ E2E ╲         Few, slow, expensive
        ╱--------╲
       ╱          ╲
      ╱ Integration ╲    Some, moderate speed
     ╱--------------╲
    ╱                ╲
   ╱   Unit Tests     ╲  Many, fast, cheap
  ╱--------------------╲
```

**Test Types:**
- **Unit Tests**: Test individual components in isolation
- **Integration Tests**: Test components working together
- **End-to-End Tests**: Test entire application flow

---

## JUnit 5

Modern testing framework for Java.

### Setup

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>

<!-- Includes:
    - JUnit 5
    - Mockito
    - AssertJ
    - Hamcrest
    - Spring Test
-->
```

### Basic Unit Test

```java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {
    
    private Calculator calculator;
    
    @BeforeAll  // Runs once before all tests
    static void setupAll() {
        System.out.println("Starting calculator tests");
    }
    
    @BeforeEach  // Runs before each test
    void setUp() {
        calculator = new Calculator();
    }
    
    @Test
    void testAddition() {
        int result = calculator.add(5, 3);
        assertEquals(8, result);
    }
    
    @Test
    @DisplayName("Should throw exception when dividing by zero")
    void testDivisionByZero() {
        assertThrows(ArithmeticException.class, () -> {
            calculator.divide(10, 0);
        });
    }
    
    @Test
    @Disabled("Not implemented yet")
    void testMultiplication() {
        // TODO: Implement
    }
    
    @AfterEach
    void tearDown() {
        calculator = null;
    }
    
    @AfterAll
    static void tearDownAll() {
        System.out.println("All calculator tests completed");
    }
}
```

### JUnit 5 Assertions

```java
public class AssertionsTest {
    
    @Test
    void testAssertions() {
        // Equality
        assertEquals(5, 2 + 3);
        assertNotEquals(5, 2 + 2);
        
        // Boolean
        assertTrue(5 > 3);
        assertFalse(5 < 3);
        
        // Null checks
        assertNull(null);
        assertNotNull("value");
        
        // Same object
        String str1 = "test";
        assertSame(str1, str1);
        
        // Array equality
        int[] arr1 = {1, 2, 3};
        int[] arr2 = {1, 2, 3};
        assertArrayEquals(arr1, arr2);
        
        // Exception
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            throw new IllegalArgumentException("Error");
        });
        assertEquals("Error", exception.getMessage());
        
        // Timeout
        assertTimeout(Duration.ofSeconds(1), () -> {
            Thread.sleep(500);
        });
        
        // Multiple assertions (all executed)
        assertAll("User properties",
            () -> assertEquals("Alice", user.getName()),
            () -> assertEquals(25, user.getAge()),
            () -> assertNotNull(user.getEmail())
        );
    }
}
```

### Parameterized Tests

```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.*;

public class ParameterizedTestExample {
    
    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3, 4, 5})
    void testPositiveNumbers(int number) {
        assertTrue(number > 0);
    }
    
    @ParameterizedTest
    @ValueSource(strings = {"apple", "banana", "cherry"})
    void testStringLength(String word) {
        assertTrue(word.length() > 3);
    }
    
    @ParameterizedTest
    @CsvSource({
        "1, 2, 3",
        "5, 3, 8",
        "10, 5, 15"
    })
    void testAddition(int a, int b, int expected) {
        assertEquals(expected, calculator.add(a, b));
    }
    
    @ParameterizedTest
    @MethodSource("provideUsers")
    void testUserValidation(User user) {
        assertTrue(userValidator.isValid(user));
    }
    
    static Stream<User> provideUsers() {
        return Stream.of(
            new User("alice", "alice@example.com"),
            new User("bob", "bob@example.com")
        );
    }
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
    
    @Mock
    private EmailService emailService;
    
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
        
        // Verify
        verify(userRepository, times(1)).findById(1L);
    }
    
    @Test
    void testCreateUser() {
        // Arrange
        User newUser = new User(null, "Bob", "bob@example.com");
        User savedUser = new User(2L, "Bob", "bob@example.com");
        
        when(userRepository.save(any(User.class))).thenReturn(savedUser);
        doNothing().when(emailService).sendWelcomeEmail(anyString());
        
        // Act
        User result = userService.createUser(newUser);
        
        // Assert
        assertNotNull(result.getId());
        assertEquals("Bob", result.getName());
        
        // Verify
        verify(userRepository).save(any(User.class));
        verify(emailService).sendWelcomeEmail("bob@example.com");
    }
    
    @Test
    void testGetUserById_NotFound() {
        // Arrange
        when(userRepository.findById(999L)).thenReturn(Optional.empty());
        
        // Act & Assert
        assertThrows(UserNotFoundException.class, () -> {
            userService.getUserById(999L);
        });
        
        verify(userRepository).findById(999L);
    }
}
```

### Mockito Methods

```java
// Stubbing
when(mock.method()).thenReturn(value);
when(mock.method()).thenThrow(new Exception());
when(mock.method(anyString())).thenReturn(value);

// Argument matchers
when(mock.method(any())).thenReturn(value);
when(mock.method(any(User.class))).thenReturn(value);
when(mock.method(anyInt())).thenReturn(value);
when(mock.method(anyString())).thenReturn(value);
when(mock.method(eq(5))).thenReturn(value);

// Void methods
doNothing().when(mock).voidMethod();
doThrow(new Exception()).when(mock).voidMethod();

// Verification
verify(mock).method();
verify(mock, times(2)).method();
verify(mock, never()).method();
verify(mock, atLeast(1)).method();
verify(mock, atMost(3)).method();

// Argument captor
ArgumentCaptor<User> captor = ArgumentCaptor.forClass(User.class);
verify(mock).save(captor.capture());
User captured = captor.getValue();
assertEquals("Alice", captured.getName());

// Answer
when(mock.method()).thenAnswer(invocation -> {
    Object arg = invocation.getArgument(0);
    return "Result: " + arg;
});
```

---

## Spring Boot Test Slices

Test slices load only relevant parts of application context.

### @SpringBootTest (Full Integration)

Loads complete application context.

```java
@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerIntegrationTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @Autowired
    private UserRepository userRepository;
    
    @BeforeEach
    void setUp() {
        userRepository.deleteAll();
    }
    
    @Test
    void testCreateUser() throws Exception {
        String userJson = """
            {
                "username": "alice",
                "email": "alice@example.com",
                "age": 25
            }
            """;
        
        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(userJson))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").exists())
            .andExpect(jsonPath("$.username").value("alice"))
            .andExpect(jsonPath("$.email").value("alice@example.com"));
        
        // Verify database
        assertEquals(1, userRepository.count());
    }
    
    @Test
    void testGetUser() throws Exception {
        // Setup
        User user = new User(null, "bob", "bob@example.com", 30);
        User saved = userRepository.save(user);
        
        // Test
        mockMvc.perform(get("/api/users/" + saved.getId()))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.username").value("bob"));
    }
}

// With random port (for real HTTP)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserControllerTest {
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Test
    void testGetUsers() {
        ResponseEntity<User[]> response = restTemplate.getForEntity("/api/users", User[].class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}
```

### @WebMvcTest (Controller Layer)

Tests only web layer (controllers).

```java
@WebMvcTest(UserController.class)
public class UserControllerTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean  // Mock beans in Spring context
    private UserService userService;
    
    @Test
    void testGetUserById() throws Exception {
        // Arrange
        User mockUser = new User(1L, "Alice", "alice@example.com", 25);
        when(userService.getUserById(1L)).thenReturn(mockUser);
        
        // Act & Assert
        mockMvc.perform(get("/api/users/1"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$.id").value(1))
            .andExpect(jsonPath("$.username").value("Alice"))
            .andExpect(jsonPath("$.email").value("alice@example.com"));
        
        verify(userService, times(1)).getUserById(1L);
    }
    
    @Test
    void testCreateUser() throws Exception {
        // Arrange
        UserRequestDTO request = new UserRequestDTO("bob", "bob@example.com", 30);
        User createdUser = new User(2L, "bob", "bob@example.com", 30);
        
        when(userService.createUser(any(UserRequestDTO.class))).thenReturn(createdUser);
        
        // Act & Assert
        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                    {
                        "username": "bob",
                        "email": "bob@example.com",
                        "age": 30
                    }
                    """))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").value(2))
            .andExpect(jsonPath("$.username").value("bob"));
        
        verify(userService).createUser(any(UserRequestDTO.class));
    }
    
    @Test
    void testGetUserNotFound() throws Exception {
        when(userService.getUserById(999L))
            .thenThrow(new UserNotFoundException(999L));
        
        mockMvc.perform(get("/api/users/999"))
            .andExpect(status().isNotFound());
    }
    
    @Test
    void testValidation() throws Exception {
        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                    {
                        "username": "",
                        "email": "invalid-email"
                    }
                    """))
            .andExpect(status().isBadRequest())
            .andExpect(jsonPath("$.username").exists())
            .andExpect(jsonPath("$.email").exists());
    }
}
```

### @DataJpaTest (Repository Layer)

Tests only JPA repositories with embedded database.

```java
@DataJpaTest
public class UserRepositoryTest {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private TestEntityManager entityManager;
    
    @Test
    void testFindByUsername() {
        // Arrange
        User user = new User(null, "alice", "alice@example.com", 25);
        entityManager.persist(user);
        entityManager.flush();
        
        // Act
        Optional<User> found = userRepository.findByUsername("alice");
        
        // Assert
        assertTrue(found.isPresent());
        assertEquals("alice", found.get().getUsername());
    }
    
    @Test
    void testFindByAgeGreaterThan() {
        // Arrange
        entityManager.persist(new User(null, "alice", "alice@example.com", 25));
        entityManager.persist(new User(null, "bob", "bob@example.com", 30));
        entityManager.persist(new User(null, "charlie", "charlie@example.com", 20));
        entityManager.flush();
        
        // Act
        List<User> result = userRepository.findByAgeGreaterThan(22);
        
        // Assert
        assertEquals(2, result.size());
    }
    
    @Test
    void testCustomQuery() {
        // Arrange
        entityManager.persist(new User(null, "alice", "alice@gmail.com", 25));
        entityManager.persist(new User(null, "bob", "bob@gmail.com", 30));
        entityManager.persist(new User(null, "charlie", "charlie@yahoo.com", 20));
        entityManager.flush();
        
        // Act
        List<User> result = userRepository.findByEmailDomain("gmail");
        
        // Assert
        assertEquals(2, result.size());
    }
}

// Use specific database
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)  // Use actual database
public class UserRepositoryWithRealDBTest {
    // Tests with real database (not H2)
}
```

### @RestClientTest (REST Client)

Tests REST clients (Feign, RestTemplate).

```java
@RestClientTest(OrderClient.class)
public class OrderClientTest {
    
    @Autowired
    private OrderClient orderClient;
    
    @Autowired
    private MockRestServiceServer mockServer;
    
    @Test
    void testGetOrder() {
        // Arrange
        mockServer.expect(requestTo("http://order-service/api/orders/1"))
            .andExpect(method(HttpMethod.GET))
            .andRespond(withSuccess("""
                {
                    "id": 1,
                    "userId": 1,
                    "totalAmount": 100.0
                }
                """, MediaType.APPLICATION_JSON));
        
        // Act
        Order order = orderClient.getOrderById(1L);
        
        // Assert
        assertNotNull(order);
        assertEquals(1L, order.getId());
        assertEquals(100.0, order.getTotalAmount());
        
        mockServer.verify();
    }
}
```

### @WebFluxTest (Reactive Web)

```java
@WebFluxTest(UserController.class)
public class UserReactiveControllerTest {
    
    @Autowired
    private WebTestClient webTestClient;
    
    @MockBean
    private UserService userService;
    
    @Test
    void testGetUser() {
        User mockUser = new User(1L, "alice", "alice@example.com", 25);
        when(userService.getUserById(1L)).thenReturn(Mono.just(mockUser));
        
        webTestClient.get()
            .uri("/api/users/1")
            .exchange()
            .expectStatus().isOk()
            .expectBody(User.class)
            .value(user -> {
                assertEquals("alice", user.getUsername());
            });
    }
}
```

### Test Slice Comparison

| Annotation | Loads | Auto-configured | Use Case |
|------------|-------|-----------------|----------|
| **@SpringBootTest** | Full context | Everything | Integration tests |
| **@WebMvcTest** | Web layer | MockMvc, Controllers | Controller tests |
| **@DataJpaTest** | JPA layer | Repositories, H2 | Repository tests |
| **@RestClientTest** | REST clients | MockRestServiceServer | REST client tests |
| **@WebFluxTest** | Reactive web | WebTestClient | Reactive controller tests |
| **@JsonTest** | JSON | Jackson/Gson | JSON serialization |

---

## Testcontainers

Real databases in Docker containers for integration tests.

### Setup

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-testcontainers</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>junit-jupiter</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>postgresql</artifactId>
    <scope>test</scope>
</dependency>
```

### PostgreSQL Testcontainer

```java
@SpringBootTest
@Testcontainers
public class UserRepositoryIntegrationTest {
    
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");
    
    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }
    
    @Autowired
    private UserRepository userRepository;
    
    @Test
    void testSaveUser() {
        User user = new User(null, "alice", "alice@example.com", 25);
        User saved = userRepository.save(user);
        
        assertNotNull(saved.getId());
        assertTrue(userRepository.findById(saved.getId()).isPresent());
    }
    
    @Test
    void testFindByUsername() {
        User user = new User(null, "bob", "bob@example.com", 30);
        userRepository.save(user);
        
        Optional<User> found = userRepository.findByUsername("bob");
        
        assertTrue(found.isPresent());
        assertEquals("bob@example.com", found.get().getEmail());
    }
}
```

### MySQL Testcontainer

```java
@SpringBootTest
@Testcontainers
public class OrderRepositoryTest {
    
    @Container
    static MySQLContainer<?> mysql = new MySQLContainer<>("mysql:8.0")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");
    
    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", mysql::getJdbcUrl);
        registry.add("spring.datasource.username", mysql::getUsername);
        registry.add("spring.datasource.password", mysql::getPassword);
    }
    
    @Autowired
    private OrderRepository orderRepository;
    
    @Test
    void testCreateOrder() {
        Order order = new Order(null, 1L, 100.0, "PENDING");
        Order saved = orderRepository.save(order);
        
        assertNotNull(saved.getId());
    }
}
```

### Redis Testcontainer

```java
@SpringBootTest
@Testcontainers
public class CacheIntegrationTest {
    
    @Container
    static GenericContainer<?> redis = new GenericContainer<>("redis:7-alpine")
        .withExposedPorts(6379);
    
    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.redis.host", redis::getHost);
        registry.add("spring.redis.port", redis::getFirstMappedPort);
    }
    
    @Autowired
    private RedisTemplate<String, String> redisTemplate;
    
    @Test
    void testRedisCache() {
        redisTemplate.opsForValue().set("key", "value");
        String result = redisTemplate.opsForValue().get("key");
        
        assertEquals("value", result);
    }
}
```

### MongoDB Testcontainer

```java
@SpringBootTest
@Testcontainers
public class UserDocumentRepositoryTest {
    
    @Container
    static MongoDBContainer mongodb = new MongoDBContainer("mongo:6.0")
        .withExposedPorts(27017);
    
    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.data.mongodb.uri", mongodb::getReplicaSetUrl);
    }
    
    @Autowired
    private UserDocumentRepository repository;
    
    @Test
    void testSaveDocument() {
        UserDocument doc = new UserDocument("alice", "alice@example.com");
        UserDocument saved = repository.save(doc);
        
        assertNotNull(saved.getId());
    }
}
```

### Reusable Testcontainer Configuration

```java
public abstract class BaseIntegrationTest {
    
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine")
        .withReuse(true);  // Reuse container across tests
    
    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }
}

// Extend in test classes
@SpringBootTest
@Testcontainers
public class UserRepositoryTest extends BaseIntegrationTest {
    
    @Autowired
    private UserRepository userRepository;
    
    @Test
    void testSaveUser() {
        // Test implementation
    }
}
```

---

## Integration Testing

### Service Integration Test

```java
@SpringBootTest
@Transactional
public class UserServiceIntegrationTest {
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private UserRepository userRepository;
    
    @MockBean
    private EmailService emailService;  // Mock external dependency
    
    @Test
    void testCreateUser() {
        // Arrange
        UserRequestDTO request = new UserRequestDTO("alice", "alice@example.com", 25);
        
        // Act
        User created = userService.createUser(request);
        
        // Assert
        assertNotNull(created.getId());
        assertEquals("alice", created.getUsername());
        
        // Verify database
        Optional<User> saved = userRepository.findById(created.getId());
        assertTrue(saved.isPresent());
        
        // Verify email sent
        verify(emailService).sendWelcomeEmail("alice@example.com");
    }
    
    @Test
    void testUpdateUser() {
        // Setup
        User user = new User(null, "bob", "bob@example.com", 30);
        User saved = userRepository.save(user);
        
        // Update
        UserRequestDTO updates = new UserRequestDTO("bob", "newemail@example.com", 31);
        User updated = userService.updateUser(saved.getId(), updates);
        
        // Assert
        assertEquals("newemail@example.com", updated.getEmail());
        assertEquals(31, updated.getAge());
    }
}
```

### REST API Integration Test

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Testcontainers
public class UserApiIntegrationTest {
    
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15-alpine");
    
    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Autowired
    private UserRepository userRepository;
    
    @BeforeEach
    void setUp() {
        userRepository.deleteAll();
    }
    
    @Test
    void testCompleteUserFlow() {
        // 1. Create user
        UserRequestDTO createRequest = new UserRequestDTO("alice", "alice@example.com", 25);
        
        ResponseEntity<User> createResponse = restTemplate.postForEntity(
            "/api/users",
            createRequest,
            User.class
        );
        
        assertEquals(HttpStatus.CREATED, createResponse.getStatusCode());
        assertNotNull(createResponse.getBody());
        Long userId = createResponse.getBody().getId();
        
        // 2. Get user
        ResponseEntity<User> getResponse = restTemplate.getForEntity(
            "/api/users/" + userId,
            User.class
        );
        
        assertEquals(HttpStatus.OK, getResponse.getStatusCode());
        assertEquals("alice", getResponse.getBody().getUsername());
        
        // 3. Update user
        UserRequestDTO updateRequest = new UserRequestDTO("alice", "newemail@example.com", 26);
        
        restTemplate.put("/api/users/" + userId, updateRequest);
        
        User updated = restTemplate.getForObject("/api/users/" + userId, User.class);
        assertEquals("newemail@example.com", updated.getEmail());
        assertEquals(26, updated.getAge());
        
        // 4. Delete user
        restTemplate.delete("/api/users/" + userId);
        
        ResponseEntity<User> deletedResponse = restTemplate.getForEntity(
            "/api/users/" + userId,
            User.class
        );
        
        assertEquals(HttpStatus.NOT_FOUND, deletedResponse.getStatusCode());
    }
}
```

### Security Integration Test

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SecurityIntegrationTest {
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    private String jwtToken;
    
    @BeforeEach
    void setUp() {
        // Create test user
        User user = new User();
        user.setUsername("testuser");
        user.setPassword(passwordEncoder.encode("password123"));
        user.setEmail("test@example.com");
        user.setRoles(Set.of("USER"));
        userRepository.save(user);
        
        // Login and get token
        LoginRequest loginRequest = new LoginRequest("testuser", "password123");
        ResponseEntity<JwtResponse> response = restTemplate.postForEntity(
            "/api/auth/login",
            loginRequest,
            JwtResponse.class
        );
        
        jwtToken = response.getBody().getToken();
    }
    
    @Test
    void testAccessProtectedEndpoint() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);
        
        HttpEntity<Void> entity = new HttpEntity<>(headers);
        
        ResponseEntity<User[]> response = restTemplate.exchange(
            "/api/users",
            HttpMethod.GET,
            entity,
            User[].class
        );
        
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
    
    @Test
    void testAccessWithoutToken() {
        ResponseEntity<String> response = restTemplate.getForEntity(
            "/api/users",
            String.class
        );
        
        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
    }
    
    @Test
    @WithMockUser(roles = "ADMIN")
    void testAdminAccess() {
        // Test with mock admin user
    }
}
```

---

## Advanced Testing Techniques

### Testing with @MockBean

```java
@SpringBootTest
public class OrderServiceTest {
    
    @Autowired
    private OrderService orderService;
    
    @MockBean  // Mock bean in Spring context
    private PaymentClient paymentClient;
    
    @MockBean
    private InventoryClient inventoryClient;
    
    @Test
    void testCreateOrder() {
        // Mock external services
        when(inventoryClient.checkStock(anyLong(), anyInt())).thenReturn(true);
        when(paymentClient.processPayment(any())).thenReturn(true);
        
        // Test order creation
        Order order = orderService.createOrder(new OrderRequest(1L, 2, 100.0));
        
        assertNotNull(order);
        verify(inventoryClient).checkStock(1L, 2);
        verify(paymentClient).processPayment(any());
    }
}
```

### Testing Async Methods

```java
@SpringBootTest
public class AsyncServiceTest {
    
    @Autowired
    private AsyncService asyncService;
    
    @Test
    void testAsyncMethod() throws Exception {
        CompletableFuture<String> future = asyncService.processAsync("data");
        
        // Wait for completion
        String result = future.get(5, TimeUnit.SECONDS);
        
        assertEquals("Processed: data", result);
    }
}
```

### Testing Scheduled Tasks

```java
@SpringBootTest
public class ScheduledTaskTest {
    
    @Autowired
    private ScheduledTasks scheduledTasks;
    
    @SpyBean
    private TaskService taskService;
    
    @Test
    void testScheduledTask() throws InterruptedException {
        // Wait for task to execute
        Thread.sleep(2000);
        
        // Verify task was called
        verify(taskService, atLeast(1)).executeTask();
    }
}
```

### Testing with Profiles

```java
@SpringBootTest
@ActiveProfiles("test")  // Activate test profile
public class ProfileTest {
    
    @Autowired
    private DataSource dataSource;
    
    @Test
    void testTestProfile() {
        // Uses test database configuration
        assertNotNull(dataSource);
    }
}
```

### Testing Exception Handling

```java
@WebMvcTest(UserController.class)
public class ExceptionHandlingTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private UserService userService;
    
    @Test
    void testUserNotFoundException() throws Exception {
        when(userService.getUserById(999L))
            .thenThrow(new UserNotFoundException(999L));
        
        mockMvc.perform(get("/api/users/999"))
            .andExpect(status().isNotFound())
            .andExpect(jsonPath("$.status").value(404))
            .andExpect(jsonPath("$.message").value("User not found with id: 999"));
    }
    
    @Test
    void testValidationException() throws Exception {
        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                    {
                        "username": "",
                        "email": "invalid"
                    }
                    """))
            .andExpect(status().isBadRequest())
            .andExpect(jsonPath("$.username").exists());
    }
}
```

---

## Test Configuration

### Test Application Properties

```properties
# src/test/resources/application-test.properties

# Use H2 for tests
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.jpa.hibernate.ddl-auto=create-drop

# Disable security for tests
spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration

# Logging
logging.level.com.example=DEBUG

# Disable external services
external.api.enabled=false
```

### Test Configuration Class

```java
@TestConfiguration
public class TestConfig {
    
    @Bean
    @Primary
    public EmailService mockEmailService() {
        return mock(EmailService.class);
    }
    
    @Bean
    public TestDataBuilder testDataBuilder() {
        return new TestDataBuilder();
    }
}

// Use in tests
@SpringBootTest
@Import(TestConfig.class)
public class ServiceTest {
    
    @Autowired
    private TestDataBuilder testDataBuilder;
    
    @Test
    void test() {
        User user = testDataBuilder.createUser();
        // Use test data
    }
}
```

---

## Summary

Testing Spring Boot applications:

### JUnit 5
- **Modern** testing framework
- **Annotations**: @Test, @BeforeEach, @AfterEach, @DisplayName
- **Assertions**: assertEquals, assertTrue, assertThrows, assertAll
- **Parameterized tests**: @ValueSource, @CsvSource, @MethodSource
- **Lifecycle**: @BeforeAll, @AfterAll

### Mockito
- **Mocking** framework for unit tests
- **@Mock**: Create mock objects
- **@InjectMocks**: Inject mocks into test subject
- **Stubbing**: when().thenReturn()
- **Verification**: verify(), times(), never()
- **Argument matchers**: any(), anyString(), eq()

### Spring Boot Test Slices
- **@SpringBootTest**: Full application context
- **@WebMvcTest**: Web layer only (MockMvc)
- **@DataJpaTest**: JPA layer only (repositories)
- **@RestClientTest**: REST clients
- **@WebFluxTest**: Reactive web layer
- Faster tests with minimal context

### Testcontainers
- **Real databases** in Docker containers
- **PostgreSQL, MySQL, MongoDB, Redis**: Official modules
- **@Testcontainers + @Container**: Easy setup
- **@DynamicPropertySource**: Configure properties
- **Integration tests** with production-like environment

### Integration Testing
- **@SpringBootTest**: Full context integration
- **TestRestTemplate**: Test REST endpoints
- **@Transactional**: Rollback after each test
- **@MockBean**: Mock external dependencies
- Test complete workflows
- Security integration tests

### Best Practices
1. Write tests for all business logic
2. Use test slices to speed up tests
3. Mock external dependencies
4. Use Testcontainers for database tests
5. Test positive and negative scenarios
6. Test validation and error handling
7. Use meaningful test names
8. Keep tests independent
9. Use test profiles
10. Aim for 80%+ code coverage

Testing ensures code quality, prevents regressions, and enables confident refactoring.

---

## 12. Deployment & DevOps

Deploying and operating Spring Boot applications in production.

## Dockerizing Spring Boot

### Basic Dockerfile

```dockerfile
# Multi-stage build
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy source and build
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy JAR from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port
EXPOSE 8080

# Run application
ENTRYPOINT ["java", "-jar", "app.jar"]
```

### Optimized Dockerfile with Layers

```dockerfile
FROM eclipse-temurin:17-jre-alpine AS builder
WORKDIR /app
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} application.jar

# Extract layers
RUN java -Djarmode=layertools -jar application.jar extract

# Final stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy layers separately (better caching)
COPY --from=builder /app/dependencies/ ./
COPY --from=builder /app/spring-boot-loader/ ./
COPY --from=builder /app/snapshot-dependencies/ ./
COPY --from=builder /app/application/ ./

EXPOSE 8080

ENTRYPOINT ["java", "org.springframework.boot.loader.JarLauncher"]
```

### Dockerfile with Environment Variables

```dockerfile
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

COPY target/*.jar app.jar

# Environment variables
ENV SERVER_PORT=8080
ENV SPRING_PROFILES_ACTIVE=prod
ENV JAVA_OPTS="-Xms512m -Xmx1024m"

EXPOSE ${SERVER_PORT}

ENTRYPOINT java ${JAVA_OPTS} -jar app.jar \
    --server.port=${SERVER_PORT} \
    --spring.profiles.active=${SPRING_PROFILES_ACTIVE}
```

### .dockerignore

```
# .dockerignore
target/
!target/*.jar
.git
.gitignore
.mvn
mvnw
mvnw.cmd
*.md
.idea
.vscode
*.iml
```

### Build and Run Docker Image

```bash
# Build image
docker build -t myapp:1.0 .

# Run container
docker run -p 8080:8080 myapp:1.0

# Run with environment variables
docker run -p 8080:8080 \
  -e SPRING_PROFILES_ACTIVE=prod \
  -e SPRING_DATASOURCE_URL=jdbc:mysql://host.docker.internal:3306/mydb \
  -e SPRING_DATASOURCE_USERNAME=root \
  -e SPRING_DATASOURCE_PASSWORD=password \
  myapp:1.0

# Run in background
docker run -d -p 8080:8080 --name myapp myapp:1.0

# View logs
docker logs myapp

# Stop container
docker stop myapp
```

---

## Docker Compose

Orchestrate multiple containers (app + database + cache).

### docker-compose.yml

```yaml
version: '3.8'

services:
  # MySQL Database
  mysql:
    image: mysql:8.0
    container_name: myapp-mysql
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: mydb
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    ports:
      - "3306:3306"
    volumes:
      - mysql-data:/var/lib/mysql
    networks:
      - myapp-network
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 5
  
  # Redis Cache
  redis:
    image: redis:7-alpine
    container_name: myapp-redis
    ports:
      - "6379:6379"
    networks:
      - myapp-network
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 3s
      retries: 5
  
  # Spring Boot Application
  app:
    build: .
    container_name: myapp
    depends_on:
      mysql:
        condition: service_healthy
      redis:
        condition: service_healthy
    environment:
      SPRING_PROFILES_ACTIVE: prod
      SPRING_DATASOURCE_URL: jdbc:mysql://mysql:3306/mydb
      SPRING_DATASOURCE_USERNAME: user
      SPRING_DATASOURCE_PASSWORD: password
      SPRING_REDIS_HOST: redis
      SPRING_REDIS_PORT: 6379
    ports:
      - "8080:8080"
    networks:
      - myapp-network
    restart: unless-stopped

volumes:
  mysql-data:

networks:
  myapp-network:
    driver: bridge
```

### Complete Stack with Multiple Services

```yaml
version: '3.8'

services:
  # PostgreSQL
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - backend
  
  # RabbitMQ
  rabbitmq:
    image: rabbitmq:3-management-alpine
    ports:
      - "5672:5672"
      - "15672:15672"  # Management UI
    environment:
      RABBITMQ_DEFAULT_USER: admin
      RABBITMQ_DEFAULT_PASS: admin
    networks:
      - backend
  
  # User Service
  user-service:
    build: ./user-service
    depends_on:
      - postgres
      - rabbitmq
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/mydb
      SPRING_RABBITMQ_HOST: rabbitmq
    ports:
      - "8081:8080"
    networks:
      - backend
  
  # Order Service
  order-service:
    build: ./order-service
    depends_on:
      - postgres
      - rabbitmq
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/mydb
      SPRING_RABBITMQ_HOST: rabbitmq
    ports:
      - "8082:8080"
    networks:
      - backend
  
  # API Gateway
  api-gateway:
    build: ./api-gateway
    depends_on:
      - user-service
      - order-service
    ports:
      - "8080:8080"
    networks:
      - backend

volumes:
  postgres-data:

networks:
  backend:
    driver: bridge
```

### Docker Compose Commands

```bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# Build and start
docker-compose up --build

# Stop services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# View logs
docker-compose logs

# Follow logs
docker-compose logs -f app

# Scale service
docker-compose up -d --scale order-service=3

# Restart specific service
docker-compose restart app
```

---

## CI/CD with GitHub Actions

### .github/workflows/ci-cd.yml

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_DB: testdb
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    
    steps:
      # Checkout code
      - name: Checkout code
        uses: actions/checkout@v3
      
      # Setup Java
      - name: Set up JDK 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'
          cache: maven
      
      # Build and test
      - name: Build with Maven
        run: mvn clean install -DskipTests
      
      - name: Run tests
        run: mvn test
        env:
          SPRING_DATASOURCE_URL: jdbc:postgresql://localhost:5432/testdb
          SPRING_DATASOURCE_USERNAME: test
          SPRING_DATASOURCE_PASSWORD: test
      
      # Code coverage
      - name: Generate coverage report
        run: mvn jacoco:report
      
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          files: ./target/site/jacoco/jacoco.xml
      
      # Build Docker image
      - name: Build Docker image
        run: docker build -t myapp:${{ github.sha }} .
      
      # Login to Docker Hub
      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      
      # Push to Docker Hub
      - name: Push Docker image
        run: |
          docker tag myapp:${{ github.sha }} myusername/myapp:latest
          docker push myusername/myapp:latest
      
      # Deploy to server
      - name: Deploy to production
        if: github.ref == 'refs/heads/main'
        run: |
          echo "Deploying to production..."
          # SSH to server and deploy
```

### Jenkins Pipeline

```groovy
// Jenkinsfile
pipeline {
    agent any
    
    tools {
        maven 'Maven 3.9'
        jdk 'JDK 17'
    }
    
    environment {
        DOCKER_IMAGE = 'myapp'
        DOCKER_TAG = "${BUILD_NUMBER}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/myorg/myapp.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }
        
        stage('Test') {
            steps {
                sh 'mvn test'
            }
            post {
                always {
                    junit 'target/surefire-reports/*.xml'
                    jacoco execPattern: 'target/jacoco.exec'
                }
            }
        }
        
        stage('Package') {
            steps {
                sh 'mvn package -DskipTests'
            }
        }
        
        stage('Docker Build') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
            }
        }
        
        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS')]) {
                    sh "echo ${DOCKER_PASS} | docker login -u ${DOCKER_USER} --password-stdin"
                    sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    sh "docker push ${DOCKER_IMAGE}:latest"
                }
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh '''
                    ssh user@production-server << EOF
                    docker pull ${DOCKER_IMAGE}:latest
                    docker-compose down
                    docker-compose up -d
                    EOF
                '''
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
        always {
            cleanWs()
        }
    }
}
```

---

## Externalized Configuration

### Environment Variables

```bash
# Set environment variables
export SPRING_DATASOURCE_URL=jdbc:mysql://prod-db:3306/mydb
export SPRING_DATASOURCE_USERNAME=produser
export SPRING_DATASOURCE_PASSWORD=prodpassword
export SPRING_PROFILES_ACTIVE=prod

# Run application
java -jar myapp.jar
```

```java
// Access in code
@Value("${spring.datasource.url}")
private String dbUrl;

// Or use Environment
@Autowired
private Environment env;

public void getConfig() {
    String url = env.getProperty("spring.datasource.url");
}
```

### Command Line Arguments

```bash
# Override properties
java -jar myapp.jar \
  --server.port=9090 \
  --spring.profiles.active=prod \
  --spring.datasource.url=jdbc:mysql://prod:3306/db
```

### External Config File

```bash
# Use external application.properties
java -jar myapp.jar --spring.config.location=file:///config/application.properties

# Use external directory
java -jar myapp.jar --spring.config.location=file:///config/

# Multiple locations
java -jar myapp.jar \
  --spring.config.location=classpath:/,file:///config/
```

### Kubernetes ConfigMap

```yaml
# configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
data:
  application.properties: |
    server.port=8080
    spring.datasource.url=jdbc:mysql://mysql-service:3306/mydb
    spring.redis.host=redis-service
```

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        volumeMounts:
        - name: config
          mountPath: /config
        env:
        - name: SPRING_CONFIG_LOCATION
          value: file:///config/application.properties
      volumes:
      - name: config
        configMap:
          name: myapp-config
```

### Secrets Management

```yaml
# kubernetes-secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: myapp-secrets
type: Opaque
stringData:
  db-password: mysecretpassword
  jwt-secret: myjwtsecret
```

```yaml
# deployment.yaml with secrets
env:
- name: SPRING_DATASOURCE_PASSWORD
  valueFrom:
    secretKeyRef:
      name: myapp-secrets
      key: db-password
- name: JWT_SECRET
  valueFrom:
    secretKeyRef:
      name: myapp-secrets
      key: jwt-secret
```

---

## Logging (SLF4J & Logback)

### SLF4J in Code

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UserService {
    
    private static final Logger log = LoggerFactory.getLogger(UserService.class);
    
    public User createUser(User user) {
        log.trace("Entering createUser with: {}", user);
        log.debug("Validating user: {}", user.getUsername());
        
        try {
            User saved = userRepository.save(user);
            log.info("User created successfully: {}", saved.getId());
            return saved;
        } catch (Exception e) {
            log.error("Error creating user: {}", user.getUsername(), e);
            throw e;
        }
    }
    
    public void processOrder(Order order) {
        log.warn("Processing order with low stock: {}", order.getId());
    }
}

// With Lombok
@Service
@Slf4j
public class UserService {
    
    public void method() {
        log.info("Using Lombok's @Slf4j");
    }
}
```

### logback-spring.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    
    <!-- Properties -->
    <property name="LOG_PATH" value="logs"/>
    <property name="LOG_PATTERN" 
              value="%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n"/>
    
    <!-- Console Appender -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>${LOG_PATTERN}</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>
    
    <!-- File Appender -->
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOG_PATH}/application.log</file>
        <encoder>
            <pattern>${LOG_PATTERN}</pattern>
        </encoder>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${LOG_PATH}/application-%d{yyyy-MM-dd}.log</fileNamePattern>
            <maxHistory>30</maxHistory>
            <totalSizeCap>3GB</totalSizeCap>
        </rollingPolicy>
    </appender>
    
    <!-- Error File Appender -->
    <appender name="ERROR_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOG_PATH}/error.log</file>
        <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
            <level>ERROR</level>
        </filter>
        <encoder>
            <pattern>${LOG_PATTERN}</pattern>
        </encoder>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${LOG_PATH}/error-%d{yyyy-MM-dd}.log</fileNamePattern>
            <maxHistory>90</maxHistory>
        </rollingPolicy>
    </appender>
    
    <!-- JSON Appender (for log aggregation) -->
    <appender name="JSON_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOG_PATH}/application.json</file>
        <encoder class="net.logstash.logback.encoder.LogstashEncoder"/>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${LOG_PATH}/application-%d{yyyy-MM-dd}.json</fileNamePattern>
            <maxHistory>7</maxHistory>
        </rollingPolicy>
    </appender>
    
    <!-- Async Appender (for performance) -->
    <appender name="ASYNC_FILE" class="ch.qos.logback.classic.AsyncAppender">
        <appender-ref ref="FILE"/>
        <queueSize>512</queueSize>
        <discardingThreshold>0</discardingThreshold>
    </appender>
    
    <!-- Loggers -->
    <logger name="com.example.myapp" level="DEBUG" additivity="false">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE"/>
    </logger>
    
    <logger name="org.springframework" level="INFO"/>
    <logger name="org.hibernate" level="WARN"/>
    <logger name="org.hibernate.SQL" level="DEBUG"/>
    <logger name="org.hibernate.type.descriptor.sql.BasicBinder" level="TRACE"/>
    
    <!-- Root Logger -->
    <root level="INFO">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="ASYNC_FILE"/>
        <appender-ref ref="ERROR_FILE"/>
    </root>
    
    <!-- Profile-specific configurations -->
    <springProfile name="dev">
        <root level="DEBUG">
            <appender-ref ref="CONSOLE"/>
        </root>
    </springProfile>
    
    <springProfile name="prod">
        <root level="INFO">
            <appender-ref ref="ASYNC_FILE"/>
            <appender-ref ref="ERROR_FILE"/>
            <appender-ref ref="JSON_FILE"/>
        </root>
    </springProfile>
    
</configuration>
```

### Logging Configuration in Properties

```properties
# application.properties

# Logging levels
logging.level.root=INFO
logging.level.com.example.myapp=DEBUG
logging.level.org.springframework=INFO
logging.level.org.hibernate.SQL=DEBUG

# Log file
logging.file.name=logs/application.log
logging.file.max-size=10MB
logging.file.max-history=30
logging.file.total-size-cap=1GB

# Log pattern
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n
logging.pattern.file=%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n

# Log groups
logging.group.tomcat=org.apache.catalina,org.apache.coyote,org.apache.tomcat
logging.level.tomcat=TRACE
```

### Structured Logging (JSON)

```xml
<!-- pom.xml -->
<dependency>
    <groupId>net.logstash.logback</groupId>
    <artifactId>logstash-logback-encoder</artifactId>
    <version>7.3</version>
</dependency>
```

```java
@Slf4j
@Service
public class UserService {
    
    public void createUser(User user) {
        // Structured logging with MDC
        MDC.put("userId", user.getId().toString());
        MDC.put("operation", "createUser");
        
        try {
            log.info("Creating user",
                kv("username", user.getUsername()),
                kv("email", user.getEmail())
            );
            
            userRepository.save(user);
            
        } finally {
            MDC.clear();
        }
    }
}
```

---

## Spring Boot Actuator

Production-ready features for monitoring and managing applications.

### Setup

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

### Configuration

```properties
# application.properties

# Expose all endpoints
management.endpoints.web.exposure.include=*

# Or specific endpoints
management.endpoints.web.exposure.include=health,info,metrics,prometheus

# Exclude endpoints
management.endpoints.web.exposure.exclude=shutdown

# Base path for actuator
management.endpoints.web.base-path=/actuator

# Port (separate from application)
management.server.port=9090

# Health endpoint details
management.endpoint.health.show-details=always
management.endpoint.health.show-components=always

# Custom info
info.app.name=My Application
info.app.version=@project.version@
info.app.description=@project.description@
```

### Common Actuator Endpoints

```bash
# Health check
GET http://localhost:8080/actuator/health

# Response:
{
  "status": "UP",
  "components": {
    "db": { "status": "UP" },
    "diskSpace": { "status": "UP" },
    "ping": { "status": "UP" }
  }
}

# Application info
GET http://localhost:8080/actuator/info

# Metrics
GET http://localhost:8080/actuator/metrics
GET http://localhost:8080/actuator/metrics/jvm.memory.used
GET http://localhost:8080/actuator/metrics/http.server.requests

# Environment properties
GET http://localhost:8080/actuator/env

# Beans
GET http://localhost:8080/actuator/beans

# Mappings (all endpoints)
GET http://localhost:8080/actuator/mappings

# Thread dump
GET http://localhost:8080/actuator/threaddump

# Heap dump
GET http://localhost:8080/actuator/heapdump

# Loggers
GET http://localhost:8080/actuator/loggers
GET http://localhost:8080/actuator/loggers/com.example.myapp

# Shutdown (disabled by default)
POST http://localhost:8080/actuator/shutdown
```

### Custom Health Indicator

```java
@Component
public class CustomHealthIndicator implements HealthIndicator {
    
    @Autowired
    private ExternalService externalService;
    
    @Override
    public Health health() {
        try {
            // Check external service
            boolean isUp = externalService.isAvailable();
            
            if (isUp) {
                return Health.up()
                    .withDetail("service", "External Service")
                    .withDetail("status", "Available")
                    .build();
            } else {
                return Health.down()
                    .withDetail("service", "External Service")
                    .withDetail("status", "Unavailable")
                    .build();
            }
        } catch (Exception e) {
            return Health.down()
                .withDetail("error", e.getMessage())
                .build();
        }
    }
}

// Response
{
  "status": "UP",
  "components": {
    "customHealthIndicator": {
      "status": "UP",
      "details": {
        "service": "External Service",
        "status": "Available"
      }
    }
  }
}
```

### Custom Metrics

```java
@Service
public class UserService {
    
    private final MeterRegistry meterRegistry;
    private final Counter userCreatedCounter;
    
    public UserService(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
        
        // Create custom counter
        this.userCreatedCounter = Counter.builder("users.created")
            .description("Number of users created")
            .tag("service", "user-service")
            .register(meterRegistry);
    }
    
    public User createUser(User user) {
        User saved = userRepository.save(user);
        
        // Increment counter
        userCreatedCounter.increment();
        
        return saved;
    }
    
    public void recordOrderProcessingTime(long duration) {
        // Record timing
        meterRegistry.timer("order.processing.time")
            .record(duration, TimeUnit.MILLISECONDS);
    }
    
    public void recordActiveUsers(int count) {
        // Record gauge
        Gauge.builder("users.active", () -> count)
            .register(meterRegistry);
    }
}
```

### Custom Info Contributor

```java
@Component
public class CustomInfoContributor implements InfoContributor {
    
    @Autowired
    private UserRepository userRepository;
    
    @Override
    public void contribute(Info.Builder builder) {
        Map<String, Object> customInfo = new HashMap<>();
        customInfo.put("totalUsers", userRepository.count());
        customInfo.put("activeUsers", userRepository.countByActiveTrue());
        customInfo.put("serverTime", LocalDateTime.now());
        
        builder.withDetail("application", customInfo);
    }
}

// Response
GET /actuator/info
{
  "app": {
    "name": "My Application",
    "version": "1.0.0"
  },
  "application": {
    "totalUsers": 1500,
    "activeUsers": 1200,
    "serverTime": "2024-01-15T10:30:00"
  }
}
```

### Actuator Security

```java
@Configuration
public class ActuatorSecurityConfig {
    
    @Bean
    public SecurityFilterChain actuatorSecurity(HttpSecurity http) throws Exception {
        http
            .requestMatcher(EndpointRequest.toAnyEndpoint())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(EndpointRequest.to("health", "info")).permitAll()
                .requestMatchers(EndpointRequest.toAnyEndpoint()).hasRole("ADMIN")
            );
        
        return http.build();
    }
}
```

### Prometheus Integration

```xml
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-registry-prometheus</artifactId>
</dependency>
```

```properties
management.endpoints.web.exposure.include=prometheus,health,info
management.metrics.export.prometheus.enabled=true
```

```bash
# Prometheus endpoint
GET http://localhost:8080/actuator/prometheus

# Returns metrics in Prometheus format
# Can be scraped by Prometheus server
```

---

## Production Deployment Checklist

### 1. Application Configuration

```properties
# application-prod.properties

# Server
server.port=8080
server.compression.enabled=true

# Database
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.hikari.maximum-pool-size=20
spring.datasource.hikari.minimum-idle=5

# JPA
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=false
spring.jpa.open-in-view=false

# Logging
logging.level.root=WARN
logging.level.com.example.myapp=INFO
logging.file.name=logs/application.log

# Actuator
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.show-details=when-authorized

# Security
jwt.secret=${JWT_SECRET}
jwt.expiration=86400000

# CORS
cors.allowed-origins=${ALLOWED_ORIGINS}
```

### 2. Health Checks

```java
@Component
public class DatabaseHealthIndicator implements HealthIndicator {
    
    @Autowired
    private DataSource dataSource;
    
    @Override
    public Health health() {
        try (Connection connection = dataSource.getConnection()) {
            if (connection.isValid(2)) {
                return Health.up()
                    .withDetail("database", "PostgreSQL")
                    .withDetail("validationQuery", "Connection is valid")
                    .build();
            }
        } catch (Exception e) {
            return Health.down()
                .withException(e)
                .build();
        }
        return Health.down().build();
    }
}
```

### 3. Graceful Shutdown

```properties
# Enable graceful shutdown
server.shutdown=graceful
spring.lifecycle.timeout-per-shutdown-phase=30s
```

### 4. Resource Limits (Docker)

```yaml
# docker-compose.yml
services:
  app:
    image: myapp:latest
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 2G
        reservations:
          cpus: '1'
          memory: 1G
```

### 5. Monitoring and Alerting

```yaml
# docker-compose.yml with monitoring
services:
  app:
    # ... app config
  
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
  
  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
    depends_on:
      - prometheus
```

```yaml
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'spring-boot-app'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['app:8080']
```

---

## Complete Deployment Example

### Project Structure

```
myapp/
├── src/
│   ├── main/
│   └── test/
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── configmap.yaml
└── pom.xml
```

### Complete docker-compose.yml

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    container_name: myapp-postgres
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - myapp-net
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user"]
      interval: 10s
      timeout: 5s
      retries: 5
  
  redis:
    image: redis:7-alpine
    container_name: myapp-redis
    ports:
      - "6379:6379"
    networks:
      - myapp-net
  
  app:
    build: .
    container_name: myapp
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      SPRING_PROFILES_ACTIVE: prod
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/mydb
      SPRING_DATASOURCE_USERNAME: user
      SPRING_DATASOURCE_PASSWORD: password
      SPRING_REDIS_HOST: redis
      JWT_SECRET: ${JWT_SECRET}
    ports:
      - "8080:8080"
      - "9090:9090"  # Actuator
    networks:
      - myapp-net
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/actuator/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 2G
        reservations:
          cpus: '1'
          memory: 1G

volumes:
  postgres-data:

networks:
  myapp-net:
    driver: bridge
```

### Deployment Script

```bash
#!/bin/bash
# deploy.sh

set -e

echo "Starting deployment..."

# Build application
echo "Building application..."
mvn clean package -DskipTests

# Build Docker image
echo "Building Docker image..."
docker build -t myapp:latest .

# Stop existing containers
echo "Stopping existing containers..."
docker-compose down

# Start new containers
echo "Starting new containers..."
docker-compose up -d

# Wait for health check
echo "Waiting for application to be healthy..."
sleep 10

# Check health
HEALTH=$(curl -s http://localhost:8080/actuator/health | jq -r '.status')

if [ "$HEALTH" == "UP" ]; then
    echo "Deployment successful! Application is healthy."
else
    echo "Deployment failed! Application is not healthy."
    docker-compose logs app
    exit 1
fi

echo "Deployment completed successfully!"
```

---

## Summary

Deployment and DevOps for Spring Boot:

### Dockerization
- **Multi-stage builds**: Reduce image size
- **Layer optimization**: Better caching
- **Environment variables**: Externalize configuration
- **.dockerignore**: Exclude unnecessary files
- **Health checks**: Container health monitoring

### Docker Compose
- **Multi-container**: App + Database + Cache
- **Service dependencies**: depends_on with health checks
- **Networks**: Inter-service communication
- **Volumes**: Data persistence
- **Resource limits**: CPU and memory constraints
- Complete stack orchestration

### CI/CD
- **GitHub Actions**: Automated build, test, deploy
- **Jenkins Pipeline**: Groovy-based pipelines
- **Stages**: Checkout, Build, Test, Package, Docker, Deploy
- **Code coverage**: JaCoCo integration
- **Docker push**: Automated image deployment
- **Secrets management**: Secure credentials

### Externalized Configuration
- **Environment variables**: OS-level config
- **Command line args**: Override properties
- **External files**: Config outside JAR
- **Kubernetes**: ConfigMap and Secrets
- **Config hierarchy**: Multiple sources

### Logging
- **SLF4J**: Facade for logging
- **Logback**: Default implementation
- **Log levels**: TRACE, DEBUG, INFO, WARN, ERROR
- **Appenders**: Console, File, Rolling, Async, JSON
- **Profile-specific**: Different configs per environment
- **Structured logging**: JSON for log aggregation
- **MDC**: Contextual logging

### Actuator
- **Production monitoring**: Health, metrics, info
- **Health indicators**: Custom health checks
- **Custom metrics**: Counters, gauges, timers
- **Info contributors**: Custom application info
- **Security**: Protect sensitive endpoints
- **Prometheus**: Metrics export for monitoring

### Production Checklist
1. Use prod profile with secure settings
2. Externalize all sensitive data
3. Enable graceful shutdown
4. Set resource limits
5. Implement health checks
6. Configure proper logging
7. Enable monitoring (Actuator + Prometheus)
8. Use secrets management
9. Set up alerting
10. Test deployment process

Proper deployment and DevOps practices ensure reliable, scalable, and maintainable applications in production.

---

## 13. Advanced Concepts

### AOP (Aspect-Oriented Programming)

### What is AOP?

Aspect-Oriented Programming is a programming paradigm that aims to increase modularity by allowing the separation of cross-cutting concerns. It enables adding behavior to existing code without modifying the code itself.

### Key Concepts

**Aspect**: A modularization of a concern that cuts across multiple classes
**Join Point**: A point during program execution (method execution, exception handling)
**Advice**: Action taken by an aspect at a particular join point
**Pointcut**: A predicate that matches join points
**Target Object**: Object being advised by aspects
**AOP Proxy**: An object created by the AOP framework
**Weaving**: Linking aspects with other application types

### Types of Advice

1. **@Before**: Executes before the method
2. **@After**: Executes after the method (finally)
3. **@AfterReturning**: Executes after successful method execution
4. **@AfterThrowing**: Executes if method throws exception
5. **@Around**: Executes before and after method execution

### Setup AOP

**pom.xml**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```

**Enable AOP**

```java
@SpringBootApplication
@EnableAspectJAutoProxy
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### Logging Aspect Example

```java
@Aspect
@Component
@Slf4j
public class LoggingAspect {
    
    // Pointcut for all methods in service package
    @Pointcut("execution(* com.example.service.*.*(..))")
    public void serviceLayer() {}
    
    // Pointcut for all methods in controller package
    @Pointcut("execution(* com.example.controller.*.*(..))")
    public void controllerLayer() {}
    
    // Before advice
    @Before("serviceLayer()")
    public void logBefore(JoinPoint joinPoint) {
        log.info("Method called: {}", joinPoint.getSignature().getName());
        log.info("Arguments: {}", Arrays.toString(joinPoint.getArgs()));
    }
    
    // After returning advice
    @AfterReturning(pointcut = "serviceLayer()", returning = "result")
    public void logAfterReturning(JoinPoint joinPoint, Object result) {
        log.info("Method completed: {}", joinPoint.getSignature().getName());
        log.info("Result: {}", result);
    }
    
    // After throwing advice
    @AfterThrowing(pointcut = "serviceLayer()", throwing = "exception")
    public void logAfterThrowing(JoinPoint joinPoint, Exception exception) {
        log.error("Exception in method: {}", joinPoint.getSignature().getName());
        log.error("Exception: {}", exception.getMessage());
    }
    
    // Around advice - most powerful
    @Around("controllerLayer()")
    public Object logAround(ProceedingJoinPoint joinPoint) throws Throwable {
        long startTime = System.currentTimeMillis();
        
        log.info("Starting: {} with args: {}", 
                joinPoint.getSignature().getName(),
                Arrays.toString(joinPoint.getArgs()));
        
        Object result;
        try {
            // Proceed with method execution
            result = joinPoint.proceed();
            
            long duration = System.currentTimeMillis() - startTime;
            log.info("Completed: {} in {}ms", 
                    joinPoint.getSignature().getName(), duration);
            
            return result;
        } catch (Exception e) {
            long duration = System.currentTimeMillis() - startTime;
            log.error("Failed: {} after {}ms with error: {}", 
                    joinPoint.getSignature().getName(), duration, e.getMessage());
            throw e;
        }
    }
}
```

### Performance Monitoring Aspect

```java
@Aspect
@Component
@Slf4j
public class PerformanceAspect {
    
    @Around("@annotation(com.example.annotation.Monitored)")
    public Object monitorPerformance(ProceedingJoinPoint joinPoint) throws Throwable {
        long startTime = System.currentTimeMillis();
        String methodName = joinPoint.getSignature().toShortString();
        
        try {
            Object result = joinPoint.proceed();
            long executionTime = System.currentTimeMillis() - startTime;
            
            if (executionTime > 1000) {
                log.warn("SLOW EXECUTION: {} took {}ms", methodName, executionTime);
            } else {
                log.debug("Performance: {} took {}ms", methodName, executionTime);
            }
            
            return result;
        } catch (Throwable t) {
            long executionTime = System.currentTimeMillis() - startTime;
            log.error("FAILED: {} after {}ms", methodName, executionTime);
            throw t;
        }
    }
}
```

### Security Aspect

```java
@Aspect
@Component
@Slf4j
public class SecurityAspect {
    
    @Autowired
    private AuthenticationService authService;
    
    @Before("@annotation(secured)")
    public void checkSecurity(JoinPoint joinPoint, Secured secured) {
        String[] roles = secured.value();
        String currentUser = authService.getCurrentUser();
        
        log.info("Security check for user: {} on method: {}", 
                currentUser, joinPoint.getSignature().getName());
        
        if (!authService.hasAnyRole(currentUser, roles)) {
            throw new AccessDeniedException(
                "User does not have required role: " + Arrays.toString(roles));
        }
    }
    
    @AfterReturning(
        pointcut = "@annotation(com.example.annotation.AuditLog)",
        returning = "result"
    )
    public void auditLog(JoinPoint joinPoint, Object result) {
        String user = authService.getCurrentUser();
        String method = joinPoint.getSignature().getName();
        Object[] args = joinPoint.getArgs();
        
        log.info("AUDIT: User {} executed {} with args {} and result {}", 
                user, method, args, result);
    }
}
```

### Pointcut Expressions

```java
@Aspect
@Component
public class PointcutExamples {
    
    // Match all methods in a specific class
    @Pointcut("execution(* com.example.service.UserService.*(..))")
    public void userServiceMethods() {}
    
    // Match methods with specific return type
    @Pointcut("execution(java.util.List com.example..*.*(..))")
    public void methodsReturningList() {}
    
    // Match methods with specific parameters
    @Pointcut("execution(* com.example..*.*(Long, ..))")
    public void methodsWithLongFirstParam() {}
    
    // Match methods by annotation
    @Pointcut("@annotation(org.springframework.web.bind.annotation.GetMapping)")
    public void getMappingMethods() {}
    
    // Match all methods in classes with specific annotation
    @Pointcut("@within(org.springframework.stereotype.Service)")
    public void serviceClasses() {}
    
    // Match methods with specific annotation parameter
    @Pointcut("@annotation(org.springframework.transaction.annotation.Transactional)")
    public void transactionalMethods() {}
    
    // Combine pointcuts with AND
    @Pointcut("serviceLayer() && methodsReturningList()")
    public void serviceMethodsReturningList() {}
    
    // Combine pointcuts with OR
    @Pointcut("serviceLayer() || controllerLayer()")
    public void serviceOrControllerLayer() {}
    
    // Match methods in a package and sub-packages
    @Pointcut("execution(* com.example.service..*.*(..))")
    public void servicePackage() {}
}
```

### Transaction Management with AOP

```java
@Aspect
@Component
@Slf4j
public class TransactionAspect {
    
    @Around("@annotation(org.springframework.transaction.annotation.Transactional)")
    public Object manageTransaction(ProceedingJoinPoint joinPoint) throws Throwable {
        String methodName = joinPoint.getSignature().getName();
        log.info("Starting transaction for: {}", methodName);
        
        try {
            Object result = joinPoint.proceed();
            log.info("Transaction committed for: {}", methodName);
            return result;
        } catch (Exception e) {
            log.error("Transaction rolled back for: {} due to: {}", 
                    methodName, e.getMessage());
            throw e;
        }
    }
}
```

### Cache Management Aspect

```java
@Aspect
@Component
@Slf4j
public class CacheAspect {
    
    private Map<String, Object> cache = new ConcurrentHashMap<>();
    
    @Around("@annotation(cacheable)")
    public Object cacheResult(ProceedingJoinPoint joinPoint, Cacheable cacheable) 
            throws Throwable {
        String key = generateKey(joinPoint);
        
        if (cache.containsKey(key)) {
            log.info("Cache hit for key: {}", key);
            return cache.get(key);
        }
        
        log.info("Cache miss for key: {}", key);
        Object result = joinPoint.proceed();
        cache.put(key, result);
        
        return result;
    }
    
    private String generateKey(ProceedingJoinPoint joinPoint) {
        return joinPoint.getSignature().toString() + 
               Arrays.toString(joinPoint.getArgs());
    }
}
```

---

### Custom Annotations

#### Why Create Custom Annotations?

- Reduce boilerplate code
- Make code more readable
- Enforce consistency
- Enable AOP integration
- Add metadata to classes/methods

### Creating Custom Annotations

**Retention Policies**:
- `SOURCE`: Discarded by compiler
- `CLASS`: Stored in .class but not available at runtime
- `RUNTIME`: Available at runtime via reflection

**Target Types**:
- `TYPE`: Class, interface, enum
- `FIELD`: Field (including enum constants)
- `METHOD`: Method
- `PARAMETER`: Method parameter
- `CONSTRUCTOR`: Constructor
- `LOCAL_VARIABLE`: Local variable
- `ANNOTATION_TYPE`: Annotation type
- `PACKAGE`: Package

### Simple Custom Annotation

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface LogExecutionTime {
}
```

**Using the annotation:**

```java
@Service
public class UserService {
    
    @LogExecutionTime
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
```

**Processing with AOP:**

```java
@Aspect
@Component
@Slf4j
public class LogExecutionTimeAspect {
    
    @Around("@annotation(LogExecutionTime)")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        Object result = joinPoint.proceed();
        long executionTime = System.currentTimeMillis() - start;
        
        log.info("{} executed in {}ms", 
                joinPoint.getSignature(), executionTime);
        
        return result;
    }
}
```

### Custom Validation Annotation

```java
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = PhoneNumberValidator.class)
@Documented
public @interface ValidPhoneNumber {
    
    String message() default "Invalid phone number";
    
    Class<?>[] groups() default {};
    
    Class<? extends Payload>[] payload() default {};
}
```

**Validator Implementation:**

```java
public class PhoneNumberValidator 
        implements ConstraintValidator<ValidPhoneNumber, String> {
    
    private static final String PHONE_PATTERN = "^\\+?[1-9]\\d{1,14}$";
    private Pattern pattern;
    
    @Override
    public void initialize(ValidPhoneNumber constraintAnnotation) {
        pattern = Pattern.compile(PHONE_PATTERN);
    }
    
    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null || value.isEmpty()) {
            return true; // Use @NotNull separately
        }
        return pattern.matcher(value).matches();
    }
}
```

**Usage:**

```java
@Entity
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ValidPhoneNumber(message = "Please provide a valid phone number")
    private String phoneNumber;
}
```

### Rate Limiting Annotation

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface RateLimit {
    
    int requests() default 100;
    
    int duration() default 60; // seconds
    
    String message() default "Rate limit exceeded";
}
```

**Aspect Implementation:**

```java
@Aspect
@Component
@Slf4j
public class RateLimitAspect {
    
    private final Map<String, RateLimiter> limiters = new ConcurrentHashMap<>();
    
    @Around("@annotation(rateLimit)")
    public Object checkRateLimit(ProceedingJoinPoint joinPoint, RateLimit rateLimit) 
            throws Throwable {
        
        String key = joinPoint.getSignature().toString();
        RateLimiter limiter = limiters.computeIfAbsent(key, 
            k -> RateLimiter.create(rateLimit.requests() / (double) rateLimit.duration()));
        
        if (!limiter.tryAcquire()) {
            log.warn("Rate limit exceeded for: {}", key);
            throw new RateLimitExceededException(rateLimit.message());
        }
        
        return joinPoint.proceed();
    }
}
```

### Retry Annotation

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Retry {
    
    int maxAttempts() default 3;
    
    long delay() default 1000; // milliseconds
    
    Class<? extends Exception>[] retryOn() default {Exception.class};
}
```

**Aspect Implementation:**

```java
@Aspect
@Component
@Slf4j
public class RetryAspect {
    
    @Around("@annotation(retry)")
    public Object retryOperation(ProceedingJoinPoint joinPoint, Retry retry) 
            throws Throwable {
        
        int attempts = 0;
        Throwable lastException = null;
        
        while (attempts < retry.maxAttempts()) {
            try {
                return joinPoint.proceed();
            } catch (Throwable t) {
                lastException = t;
                attempts++;
                
                if (shouldRetry(t, retry.retryOn()) && attempts < retry.maxAttempts()) {
                    log.warn("Attempt {} failed for {}. Retrying in {}ms", 
                            attempts, joinPoint.getSignature(), retry.delay());
                    Thread.sleep(retry.delay());
                } else {
                    break;
                }
            }
        }
        
        log.error("All {} attempts failed for {}", 
                attempts, joinPoint.getSignature());
        throw lastException;
    }
    
    private boolean shouldRetry(Throwable t, Class<? extends Exception>[] retryOn) {
        for (Class<? extends Exception> exceptionClass : retryOn) {
            if (exceptionClass.isInstance(t)) {
                return true;
            }
        }
        return false;
    }
}
```

### API Versioning Annotation

```java
@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface ApiVersion {
    
    String[] value();
    
    boolean deprecated() default false;
}
```

**Usage:**

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @ApiVersion("1.0")
    @GetMapping
    public List<UserV1> getUsersV1() {
        return userService.getAllUsersV1();
    }
    
    @ApiVersion(value = "2.0")
    @GetMapping
    public Page<UserV2> getUsersV2(Pageable pageable) {
        return userService.getAllUsersV2(pageable);
    }
    
    @ApiVersion(value = "1.0", deprecated = true)
    @PostMapping
    public UserV1 createUserV1(@RequestBody UserV1 user) {
        return userService.createUser(user);
    }
}
```

### Audit Log Annotation

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface AuditLog {
    
    String action();
    
    String entity();
    
    boolean logArgs() default true;
    
    boolean logResult() default false;
}
```

**Aspect Implementation:**

```java
@Aspect
@Component
@Slf4j
public class AuditLogAspect {
    
    @Autowired
    private AuditRepository auditRepository;
    
    @Autowired
    private SecurityContext securityContext;
    
    @AfterReturning(pointcut = "@annotation(auditLog)", returning = "result")
    public void logAudit(JoinPoint joinPoint, AuditLog auditLog, Object result) {
        AuditEntry entry = new AuditEntry();
        entry.setAction(auditLog.action());
        entry.setEntity(auditLog.entity());
        entry.setUser(securityContext.getCurrentUser());
        entry.setTimestamp(LocalDateTime.now());
        
        if (auditLog.logArgs()) {
            entry.setArguments(Arrays.toString(joinPoint.getArgs()));
        }
        
        if (auditLog.logResult()) {
            entry.setResult(result != null ? result.toString() : "null");
        }
        
        auditRepository.save(entry);
        log.info("Audit log created: {}", entry);
    }
}
```

### Cache Annotation

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface CustomCacheable {
    
    String cacheName();
    
    String key() default "";
    
    int ttl() default 300; // seconds
    
    boolean sync() default false;
}
```

### Permission Annotation

```java
@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface RequirePermission {
    
    String[] value();
    
    LogicalOperator operator() default LogicalOperator.OR;
    
    enum LogicalOperator {
        AND, OR
    }
}
```

**Aspect Implementation:**

```java
@Aspect
@Component
public class PermissionAspect {
    
    @Autowired
    private PermissionService permissionService;
    
    @Before("@annotation(requirePermission)")
    public void checkPermission(RequirePermission requirePermission) {
        String currentUser = SecurityContextHolder.getContext()
                .getAuthentication().getName();
        
        String[] permissions = requirePermission.value();
        LogicalOperator operator = requirePermission.operator();
        
        boolean hasPermission = operator == LogicalOperator.AND
            ? permissionService.hasAllPermissions(currentUser, permissions)
            : permissionService.hasAnyPermission(currentUser, permissions);
        
        if (!hasPermission) {
            throw new AccessDeniedException(
                "User does not have required permissions: " + 
                Arrays.toString(permissions));
        }
    }
}
```

---

### Schedulers (@Scheduled)

#### Enable Scheduling

```java
@SpringBootApplication
@EnableScheduling
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### Fixed Rate Scheduling

```java
@Component
@Slf4j
public class ScheduledTasks {
    
    // Runs every 5 seconds (5000ms)
    @Scheduled(fixedRate = 5000)
    public void reportCurrentTime() {
        log.info("Current time: {}", LocalDateTime.now());
    }
    
    // Runs every 10 seconds with initial delay of 5 seconds
    @Scheduled(fixedRate = 10000, initialDelay = 5000)
    public void scheduleWithInitialDelay() {
        log.info("Task with initial delay executed at: {}", LocalDateTime.now());
    }
}
```

### Fixed Delay Scheduling

```java
@Component
@Slf4j
public class FixedDelayScheduler {
    
    // Wait 5 seconds after previous task completion
    @Scheduled(fixedDelay = 5000)
    public void processWithFixedDelay() {
        log.info("Fixed delay task started at: {}", LocalDateTime.now());
        
        try {
            Thread.sleep(3000); // Simulate work
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        log.info("Fixed delay task finished at: {}", LocalDateTime.now());
    }
}
```

**Difference**:
- `fixedRate`: Next execution starts at fixed intervals (e.g., every 5s), regardless of previous execution time
- `fixedDelay`: Next execution starts after fixed delay from previous completion

### Cron Expressions

```java
@Component
@Slf4j
public class CronScheduler {
    
    // Every day at 3:00 AM
    @Scheduled(cron = "0 0 3 * * ?")
    public void dailyTask() {
        log.info("Daily task executed at: {}", LocalDateTime.now());
    }
    
    // Every weekday at 9:00 AM
    @Scheduled(cron = "0 0 9 ? * MON-FRI")
    public void weekdayMorningTask() {
        log.info("Weekday morning task executed");
    }
    
    // Every hour
    @Scheduled(cron = "0 0 * * * ?")
    public void hourlyTask() {
        log.info("Hourly task executed");
    }
    
    // Every 5 minutes
    @Scheduled(cron = "0 */5 * * * ?")
    public void everyFiveMinutes() {
        log.info("Task executed every 5 minutes");
    }
    
    // First day of every month at midnight
    @Scheduled(cron = "0 0 0 1 * ?")
    public void monthlyTask() {
        log.info("Monthly task executed");
    }
    
    // Every Sunday at 2:30 AM
    @Scheduled(cron = "0 30 2 ? * SUN")
    public void weeklySundayTask() {
        log.info("Weekly Sunday task executed");
    }
}
```

**Cron Format**: `second minute hour day month weekday`

- `*` : any value
- `?` : no specific value (used for day/weekday)
- `-` : range (e.g., MON-FRI)
- `,` : list (e.g., MON,WED,FRI)
- `/` : increments (e.g., */5 = every 5)
- `L` : last (e.g., L = last day of month)
- `W` : weekday (e.g., 15W = nearest weekday to 15th)
- `#` : nth day (e.g., FRI#2 = 2nd Friday)

### Configurable Scheduling

**application.yml:**

```yaml
scheduling:
  cleanup-cron: "0 0 2 * * ?"
  report-fixed-rate: 3600000
  sync-fixed-delay: 300000
```

**Scheduler:**

```java
@Component
@Slf4j
public class ConfigurableScheduler {
    
    @Scheduled(cron = "${scheduling.cleanup-cron}")
    public void cleanupTask() {
        log.info("Cleanup task executed");
    }
    
    @Scheduled(fixedRateString = "${scheduling.report-fixed-rate}")
    public void reportTask() {
        log.info("Report task executed");
    }
    
    @Scheduled(fixedDelayString = "${scheduling.sync-fixed-delay}")
    public void syncTask() {
        log.info("Sync task executed");
    }
}
```

### Conditional Scheduling

```java
@Component
@Slf4j
@ConditionalOnProperty(name = "scheduling.enabled", havingValue = "true", matchIfMissing = true)
public class ConditionalScheduler {
    
    @Value("${scheduling.data-cleanup.enabled:true}")
    private boolean cleanupEnabled;
    
    @Scheduled(cron = "0 0 1 * * ?")
    public void conditionalCleanup() {
        if (!cleanupEnabled) {
            log.info("Cleanup is disabled, skipping...");
            return;
        }
        
        log.info("Performing cleanup...");
        // Cleanup logic
    }
}
```

### Async Scheduling

```java
@Configuration
@EnableAsync
@EnableScheduling
public class SchedulingConfig implements SchedulingConfigurer {
    
    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
        taskRegistrar.setScheduler(taskExecutor());
    }
    
    @Bean
    public Executor taskExecutor() {
        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
        scheduler.setPoolSize(10);
        scheduler.setThreadNamePrefix("scheduled-task-");
        scheduler.setAwaitTerminationSeconds(60);
        scheduler.setWaitForTasksToCompleteOnShutdown(true);
        scheduler.initialize();
        return scheduler;
    }
}
```

```java
@Component
@Slf4j
public class AsyncScheduler {
    
    @Async
    @Scheduled(fixedRate = 5000)
    public void asyncTask1() {
        log.info("Async Task 1 started on thread: {}", 
                Thread.currentThread().getName());
        
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        log.info("Async Task 1 completed");
    }
    
    @Async
    @Scheduled(fixedRate = 5000)
    public void asyncTask2() {
        log.info("Async Task 2 started on thread: {}", 
                Thread.currentThread().getName());
        
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        log.info("Async Task 2 completed");
    }
}
```

### Real-World Examples

**Database Cleanup Scheduler:**

```java
@Component
@Slf4j
public class DatabaseCleanupScheduler {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private TokenRepository tokenRepository;
    
    // Delete expired tokens every hour
    @Scheduled(cron = "0 0 * * * ?")
    public void deleteExpiredTokens() {
        log.info("Starting expired tokens cleanup");
        
        LocalDateTime expiryDate = LocalDateTime.now().minusDays(7);
        int deletedCount = tokenRepository.deleteByCreatedDateBefore(expiryDate);
        
        log.info("Deleted {} expired tokens", deletedCount);
    }
    
    // Delete unverified users after 30 days
    @Scheduled(cron = "0 0 2 * * ?")
    public void deleteUnverifiedUsers() {
        log.info("Starting unverified users cleanup");
        
        LocalDateTime cutoffDate = LocalDateTime.now().minusDays(30);
        List<User> unverifiedUsers = userRepository
                .findByVerifiedFalseAndCreatedDateBefore(cutoffDate);
        
        userRepository.deleteAll(unverifiedUsers);
        
        log.info("Deleted {} unverified users", unverifiedUsers.size());
    }
}
```

**Report Generation Scheduler:**

```java
@Component
@Slf4j
public class ReportScheduler {
    
    @Autowired
    private ReportService reportService;
    
    @Autowired
    private EmailService emailService;
    
    // Generate daily report at 6 AM
    @Scheduled(cron = "0 0 6 * * ?")
    public void generateDailyReport() {
        log.info("Generating daily report");
        
        Report report = reportService.generateDailyReport();
        emailService.sendReportToManagement(report);
        
        log.info("Daily report sent successfully");
    }
    
    // Generate weekly report every Monday at 7 AM
    @Scheduled(cron = "0 0 7 ? * MON")
    public void generateWeeklyReport() {
        log.info("Generating weekly report");
        
        Report report = reportService.generateWeeklyReport();
        emailService.sendReportToManagement(report);
        
        log.info("Weekly report sent successfully");
    }
    
    // Generate monthly report on 1st of every month at 8 AM
    @Scheduled(cron = "0 0 8 1 * ?")
    public void generateMonthlyReport() {
        log.info("Generating monthly report");
        
        Report report = reportService.generateMonthlyReport();
        emailService.sendReportToExecutives(report);
        
        log.info("Monthly report sent successfully");
    }
}
```

**Cache Refresh Scheduler:**

```java
@Component
@Slf4j
public class CacheRefreshScheduler {
    
    @Autowired
    private CacheManager cacheManager;
    
    @Autowired
    private ProductService productService;
    
    // Refresh product cache every 30 minutes
    @Scheduled(fixedRate = 1800000)
    public void refreshProductCache() {
        log.info("Refreshing product cache");
        
        Cache productCache = cacheManager.getCache("products");
        if (productCache != null) {
            productCache.clear();
        }
        
        // Pre-load popular products
        productService.getPopularProducts();
        
        log.info("Product cache refreshed");
    }
    
    // Clear all caches at midnight
    @Scheduled(cron = "0 0 0 * * ?")
    public void clearAllCaches() {
        log.info("Clearing all caches");
        
        cacheManager.getCacheNames().forEach(cacheName -> {
            Cache cache = cacheManager.getCache(cacheName);
            if (cache != null) {
                cache.clear();
            }
        });
        
        log.info("All caches cleared");
    }
}
```

**Data Synchronization Scheduler:**

```java
@Component
@Slf4j
public class DataSyncScheduler {
    
    @Autowired
    private ExternalApiService externalApiService;
    
    @Autowired
    private ProductRepository productRepository;
    
    // Sync with external system every 15 minutes
    @Scheduled(fixedDelay = 900000, initialDelay = 60000)
    public void syncWithExternalSystem() {
        log.info("Starting data synchronization");
        
        try {
            List<Product> externalProducts = externalApiService.fetchProducts();
            
            for (Product product : externalProducts) {
                Product existing = productRepository.findBySku(product.getSku());
                
                if (existing != null) {
                    existing.setPrice(product.getPrice());
                    existing.setStock(product.getStock());
                    productRepository.save(existing);
                } else {
                    productRepository.save(product);
                }
            }
            
            log.info("Synchronized {} products", externalProducts.size());
            
        } catch (Exception e) {
            log.error("Error during synchronization: {}", e.getMessage(), e);
        }
    }
}
```

**Health Check Scheduler:**

```java
@Component
@Slf4j
public class HealthCheckScheduler {
    
    @Autowired
    private List<HealthIndicator> healthIndicators;
    
    @Autowired
    private AlertService alertService;
    
    // Check system health every 5 minutes
    @Scheduled(fixedRate = 300000)
    public void performHealthCheck() {
        log.info("Performing health check");
        
        for (HealthIndicator indicator : healthIndicators) {
            Health health = indicator.health();
            
            if (health.getStatus() != Status.UP) {
                log.error("Health check failed for: {}", indicator.getClass().getSimpleName());
                alertService.sendAlert("Health Check Failed", health.toString());
            }
        }
        
        log.info("Health check completed");
    }
}
```

### Dynamic Scheduling

```java
@Service
@Slf4j
public class DynamicScheduler {
    
    @Autowired
    private TaskScheduler taskScheduler;
    
    private final Map<String, ScheduledFuture<?>> scheduledTasks = new ConcurrentHashMap<>();
    
    public void scheduleTask(String taskId, Runnable task, String cronExpression) {
        log.info("Scheduling task: {} with cron: {}", taskId, cronExpression);
        
        ScheduledFuture<?> scheduledTask = taskScheduler.schedule(
            task,
            new CronTrigger(cronExpression)
        );
        
        scheduledTasks.put(taskId, scheduledTask);
    }
    
    public void cancelTask(String taskId) {
        ScheduledFuture<?> scheduledTask = scheduledTasks.get(taskId);
        
        if (scheduledTask != null) {
            scheduledTask.cancel(false);
            scheduledTasks.remove(taskId);
            log.info("Cancelled task: {}", taskId);
        }
    }
    
    public void rescheduleTask(String taskId, Runnable task, String cronExpression) {
        cancelTask(taskId);
        scheduleTask(taskId, task, cronExpression);
    }
}
```

### Scheduler Configuration

**application.yml:**

```yaml
spring:
  task:
    scheduling:
      pool:
        size: 10
      thread-name-prefix: scheduled-
      shutdown:
        await-termination: true
        await-termination-period: 60s

scheduling:
  enabled: true
  timezone: UTC
```

**Custom Configuration:**

```java
@Configuration
@EnableScheduling
public class SchedulerConfig implements SchedulingConfigurer {
    
    @Value("${scheduling.pool.size:10}")
    private int poolSize;
    
    @Value("${scheduling.timezone:UTC}")
    private String timezone;
    
    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
        ThreadPoolTaskScheduler threadPoolTaskScheduler = new ThreadPoolTaskScheduler();
        
        threadPoolTaskScheduler.setPoolSize(poolSize);
        threadPoolTaskScheduler.setThreadNamePrefix("scheduled-task-");
        threadPoolTaskScheduler.setAwaitTerminationSeconds(60);
        threadPoolTaskScheduler.setWaitForTasksToCompleteOnShutdown(true);
        threadPoolTaskScheduler.setRejectedExecutionHandler(
            new ThreadPoolExecutor.CallerRunsPolicy());
        threadPoolTaskScheduler.initialize();
        
        taskRegistrar.setTaskScheduler(threadPoolTaskScheduler);
    }
}
```

---

### Async Programming (@Async)

#### Enable Async

```java
@SpringBootApplication
@EnableAsync
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### Basic Async Method

```java
@Service
@Slf4j
public class AsyncService {
    
    @Async
    public void performAsyncTask() {
        log.info("Async task started on thread: {}", 
                Thread.currentThread().getName());
        
        try {
            Thread.sleep(3000); // Simulate long-running task
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        log.info("Async task completed");
    }
}
```

### Async with Return Value (Future)

```java
@Service
@Slf4j
public class AsyncService {
    
    @Async
    public Future<String> processDataAsync() {
        log.info("Processing data asynchronously");
        
        try {
            Thread.sleep(2000);
            String result = "Data processed successfully";
            return new AsyncResult<>(result);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return new AsyncResult<>("Processing interrupted");
        }
    }
}
```

**Calling async method:**

```java
@RestController
@RequestMapping("/api/async")
public class AsyncController {
    
    @Autowired
    private AsyncService asyncService;
    
    @GetMapping("/process")
    public String processData() throws Exception {
        Future<String> future = asyncService.processDataAsync();
        
        // Do other work while waiting
        log.info("Doing other work...");
        
        // Wait for result (blocks if not ready)
        String result = future.get(); // Or future.get(5, TimeUnit.SECONDS)
        
        return result;
    }
}
```

### Async with CompletableFuture

```java
@Service
@Slf4j
public class AsyncService {
    
    @Async
    public CompletableFuture<User> findUserAsync(Long userId) {
        log.info("Looking up user: {}", userId);
        
        try {
            Thread.sleep(1000);
            User user = new User(userId, "John Doe", "john@example.com");
            return CompletableFuture.completedFuture(user);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return CompletableFuture.failedFuture(e);
        }
    }
    
    @Async
    public CompletableFuture<List<Order>> findOrdersAsync(Long userId) {
        log.info("Looking up orders for user: {}", userId);
        
        try {
            Thread.sleep(1500);
            List<Order> orders = Arrays.asList(
                new Order(1L, "Product A"),
                new Order(2L, "Product B")
            );
            return CompletableFuture.completedFuture(orders);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return CompletableFuture.failedFuture(e);
        }
    }
    
    @Async
    public CompletableFuture<Address> findAddressAsync(Long userId) {
        log.info("Looking up address for user: {}", userId);
        
        try {
            Thread.sleep(800);
            Address address = new Address("123 Main St", "City", "12345");
            return CompletableFuture.completedFuture(address);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return CompletableFuture.failedFuture(e);
        }
    }
}
```

**Combining Multiple Async Calls:**

```java
@Service
@Slf4j
public class UserDataService {
    
    @Autowired
    private AsyncService asyncService;
    
    public UserProfile getUserProfile(Long userId) {
        CompletableFuture<User> userFuture = asyncService.findUserAsync(userId);
        CompletableFuture<List<Order>> ordersFuture = asyncService.findOrdersAsync(userId);
        CompletableFuture<Address> addressFuture = asyncService.findAddressAsync(userId);
        
        // Wait for all to complete
        CompletableFuture.allOf(userFuture, ordersFuture, addressFuture).join();
        
        // Get results
        try {
            User user = userFuture.get();
            List<Order> orders = ordersFuture.get();
            Address address = addressFuture.get();
            
            return new UserProfile(user, orders, address);
        } catch (Exception e) {
            log.error("Error fetching user profile", e);
            throw new RuntimeException("Failed to fetch user profile", e);
        }
    }
    
    public UserProfile getUserProfileWithCompose(Long userId) {
        return asyncService.findUserAsync(userId)
            .thenCompose(user -> {
                CompletableFuture<List<Order>> orders = asyncService.findOrdersAsync(userId);
                CompletableFuture<Address> address = asyncService.findAddressAsync(userId);
                
                return orders.thenCombine(address, 
                    (orderList, addr) -> new UserProfile(user, orderList, addr));
            })
            .exceptionally(ex -> {
                log.error("Error: {}", ex.getMessage());
                return null;
            })
            .join();
    }
}
```

### Async Configuration

```java
@Configuration
@EnableAsync
public class AsyncConfig implements AsyncConfigurer {
    
    @Override
    @Bean(name = "taskExecutor")
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(25);
        executor.setThreadNamePrefix("async-");
        executor.setKeepAliveSeconds(60);
        executor.setAwaitTerminationSeconds(60);
        executor.setWaitForTasksToCompleteOnShutdown(true);
        
        // Rejection policy
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        
        executor.initialize();
        return executor;
    }
    
    @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return new CustomAsyncExceptionHandler();
    }
}
```

**Custom Exception Handler:**

```java
@Slf4j
public class CustomAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {
    
    @Override
    public void handleUncaughtException(Throwable ex, Method method, Object... params) {
        log.error("Exception in async method: {} with params: {}", 
                method.getName(), Arrays.toString(params), ex);
        
        // Send alert, log to monitoring system, etc.
    }
}
```

### Multiple Async Executors

```java
@Configuration
@EnableAsync
public class AsyncConfig {
    
    @Bean(name = "emailExecutor")
    public Executor emailExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(2);
        executor.setMaxPoolSize(5);
        executor.setQueueCapacity(10);
        executor.setThreadNamePrefix("email-");
        executor.initialize();
        return executor;
    }
    
    @Bean(name = "reportExecutor")
    public Executor reportExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(3);
        executor.setMaxPoolSize(8);
        executor.setQueueCapacity(20);
        executor.setThreadNamePrefix("report-");
        executor.initialize();
        return executor;
    }
    
    @Bean(name = "dataProcessingExecutor")
    public Executor dataProcessingExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(10);
        executor.setMaxPoolSize(20);
        executor.setQueueCapacity(50);
        executor.setThreadNamePrefix("data-");
        executor.initialize();
        return executor;
    }
}
```

**Using specific executor:**

```java
@Service
@Slf4j
public class NotificationService {
    
    @Async("emailExecutor")
    public void sendEmail(String to, String subject, String body) {
        log.info("Sending email on thread: {}", Thread.currentThread().getName());
        // Email sending logic
    }
    
    @Async("reportExecutor")
    public CompletableFuture<Report> generateReport(String reportType) {
        log.info("Generating report on thread: {}", Thread.currentThread().getName());
        // Report generation logic
        return CompletableFuture.completedFuture(new Report());
    }
    
    @Async("dataProcessingExecutor")
    public void processLargeDataset(List<Data> dataset) {
        log.info("Processing data on thread: {}", Thread.currentThread().getName());
        // Data processing logic
    }
}
```

### Real-World Examples

**Email Service:**

```java
@Service
@Slf4j
public class EmailService {
    
    @Autowired
    private JavaMailSender mailSender;
    
    @Async
    public CompletableFuture<Boolean> sendEmailAsync(String to, String subject, String body) {
        log.info("Sending email to: {}", to);
        
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(body, true);
            
            mailSender.send(message);
            
            log.info("Email sent successfully to: {}", to);
            return CompletableFuture.completedFuture(true);
            
        } catch (Exception e) {
            log.error("Failed to send email to: {}", to, e);
            return CompletableFuture.completedFuture(false);
        }
    }
    
    @Async
    public void sendBulkEmails(List<String> recipients, String subject, String body) {
        log.info("Sending bulk emails to {} recipients", recipients.size());
        
        List<CompletableFuture<Boolean>> futures = recipients.stream()
            .map(recipient -> sendEmailAsync(recipient, subject, body))
            .collect(Collectors.toList());
        
        CompletableFuture.allOf(futures.toArray(new CompletableFuture[0])).join();
        
        long successCount = futures.stream()
            .filter(f -> f.join())
            .count();
        
        log.info("Bulk email completed: {}/{} sent successfully", 
                successCount, recipients.size());
    }
}
```

**File Processing Service:**

```java
@Service
@Slf4j
public class FileProcessingService {
    
    @Async
    public CompletableFuture<ProcessingResult> processFileAsync(MultipartFile file) {
        log.info("Processing file: {} on thread: {}", 
                file.getOriginalFilename(), Thread.currentThread().getName());
        
        try {
            // Simulate file processing
            Thread.sleep(5000);
            
            ProcessingResult result = new ProcessingResult();
            result.setFileName(file.getOriginalFilename());
            result.setStatus("SUCCESS");
            result.setRecordsProcessed(1000);
            
            log.info("File processed successfully: {}", file.getOriginalFilename());
            return CompletableFuture.completedFuture(result);
            
        } catch (Exception e) {
            log.error("Error processing file: {}", file.getOriginalFilename(), e);
            
            ProcessingResult result = new ProcessingResult();
            result.setFileName(file.getOriginalFilename());
            result.setStatus("FAILED");
            result.setError(e.getMessage());
            
            return CompletableFuture.completedFuture(result);
        }
    }
    
    @Async
    public void processMultipleFiles(List<MultipartFile> files) {
        List<CompletableFuture<ProcessingResult>> futures = files.stream()
            .map(this::processFileAsync)
            .collect(Collectors.toList());
        
        CompletableFuture.allOf(futures.toArray(new CompletableFuture[0]))
            .thenRun(() -> {
                List<ProcessingResult> results = futures.stream()
                    .map(CompletableFuture::join)
                    .collect(Collectors.toList());
                
                log.info("All files processed. Results: {}", results);
            });
    }
}
```

**External API Service:**

```java
@Service
@Slf4j
public class ExternalApiService {
    
    @Autowired
    private RestTemplate restTemplate;
    
    @Async
    public CompletableFuture<WeatherData> fetchWeatherAsync(String city) {
        log.info("Fetching weather for: {}", city);
        
        try {
            String url = "https://api.weather.com/data?city=" + city;
            WeatherData weather = restTemplate.getForObject(url, WeatherData.class);
            
            return CompletableFuture.completedFuture(weather);
        } catch (Exception e) {
            log.error("Error fetching weather for: {}", city, e);
            return CompletableFuture.failedFuture(e);
        }
    }
    
    @Async
    public CompletableFuture<StockData> fetchStockAsync(String symbol) {
        log.info("Fetching stock data for: {}", symbol);
        
        try {
            String url = "https://api.stocks.com/quote?symbol=" + symbol;
            StockData stock = restTemplate.getForObject(url, StockData.class);
            
            return CompletableFuture.completedFuture(stock);
        } catch (Exception e) {
            log.error("Error fetching stock for: {}", symbol, e);
            return CompletableFuture.failedFuture(e);
        }
    }
    
    public DashboardData fetchDashboardData(String city, List<String> stocks) {
        CompletableFuture<WeatherData> weatherFuture = fetchWeatherAsync(city);
        
        List<CompletableFuture<StockData>> stockFutures = stocks.stream()
            .map(this::fetchStockAsync)
            .collect(Collectors.toList());
        
        // Wait for all
        CompletableFuture<Void> allFutures = CompletableFuture.allOf(
            Stream.concat(
                Stream.of(weatherFuture),
                stockFutures.stream()
            ).toArray(CompletableFuture[]::new)
        );
        
        return allFutures.thenApply(v -> {
            WeatherData weather = weatherFuture.join();
            List<StockData> stockDataList = stockFutures.stream()
                .map(CompletableFuture::join)
                .collect(Collectors.toList());
            
            return new DashboardData(weather, stockDataList);
        }).join();
    }
}
```

### Async Best Practices

1. **Always use thread pools** - Configure appropriate pool sizes
2. **Handle exceptions** - Use custom exception handlers
3. **Avoid blocking** - Don't use `.get()` without timeout
4. **Use CompletableFuture** - Better than Future for composition
5. **Monitor threads** - Track thread pool metrics
6. **Graceful shutdown** - Wait for tasks to complete
7. **Choose right executor** - Different pools for different tasks
8. **Avoid @Async on same class** - Proxy won't work (use separate service)

**Common Pitfalls:**

```java
// ❌ BAD: Calling async method from same class
@Service
public class UserService {
    
    @Async
    public void asyncMethod() {
        // ...
    }
    
    public void regularMethod() {
        this.asyncMethod(); // Won't be async!
    }
}

// ✅ GOOD: Separate service
@Service
public class UserService {
    
    @Autowired
    private AsyncUserService asyncUserService;
    
    public void regularMethod() {
        asyncUserService.asyncMethod(); // Will be async
    }
}

@Service
public class AsyncUserService {
    
    @Async
    public void asyncMethod() {
        // ...
    }
}
```

---

### WebFlux (Reactive Programming)

#### What is Spring WebFlux?

Spring WebFlux is a reactive web framework that supports non-blocking, asynchronous programming with back-pressure. It's built on Project Reactor and allows you to handle more concurrent connections with fewer threads.

### Key Concepts

**Reactive Streams**: Standard for asynchronous stream processing with non-blocking back-pressure
**Publisher**: Emits items (Mono or Flux)
**Subscriber**: Consumes items
**Mono**: Publisher of 0 or 1 element
**Flux**: Publisher of 0 to N elements
**Back-pressure**: Subscriber controls rate of data flow

### Setup WebFlux

**pom.xml:**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>

<!-- Reactive MongoDB -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb-reactive</artifactId>
</dependency>

<!-- Reactive R2DBC for SQL databases -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-r2dbc</artifactId>
</dependency>

<dependency>
    <groupId>io.r2dbc</groupId>
    <artifactId>r2dbc-postgresql</artifactId>
</dependency>
```

### Mono vs Flux

```java
import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

public class ReactiveExamples {
    
    // Mono - single value or empty
    public Mono<String> monoExample() {
        return Mono.just("Hello");
    }
    
    // Mono - empty
    public Mono<String> monoEmpty() {
        return Mono.empty();
    }
    
    // Mono - error
    public Mono<String> monoError() {
        return Mono.error(new RuntimeException("Error occurred"));
    }
    
    // Flux - multiple values
    public Flux<String> fluxExample() {
        return Flux.just("A", "B", "C", "D");
    }
    
    // Flux - from collection
    public Flux<Integer> fluxFromList() {
        return Flux.fromIterable(Arrays.asList(1, 2, 3, 4, 5));
    }
    
    // Flux - range
    public Flux<Integer> fluxRange() {
        return Flux.range(1, 10); // 1 to 10
    }
    
    // Flux - interval (infinite stream)
    public Flux<Long> fluxInterval() {
        return Flux.interval(Duration.ofSeconds(1));
    }
}
```

### Reactive Controller

```java
@RestController
@RequestMapping("/api/reactive")
@Slf4j
public class ReactiveController {
    
    @Autowired
    private ReactiveUserService userService;
    
    // Return Mono<User>
    @GetMapping("/users/{id}")
    public Mono<User> getUserById(@PathVariable Long id) {
        log.info("Getting user: {}", id);
        return userService.findById(id);
    }
    
    // Return Flux<User>
    @GetMapping("/users")
    public Flux<User> getAllUsers() {
        log.info("Getting all users");
        return userService.findAll();
    }
    
    // Create user - return Mono
    @PostMapping("/users")
    public Mono<User> createUser(@RequestBody User user) {
        log.info("Creating user: {}", user.getName());
        return userService.save(user);
    }
    
    // Update user
    @PutMapping("/users/{id}")
    public Mono<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.update(id, user);
    }
    
    // Delete user
    @DeleteMapping("/users/{id}")
    public Mono<Void> deleteUser(@PathVariable Long id) {
        return userService.deleteById(id);
    }
    
    // Return ResponseEntity with Mono
    @GetMapping("/users/{id}/details")
    public Mono<ResponseEntity<User>> getUserDetails(@PathVariable Long id) {
        return userService.findById(id)
            .map(user -> ResponseEntity.ok(user))
            .defaultIfEmpty(ResponseEntity.notFound().build());
    }
    
    // Stream data using Server-Sent Events
    @GetMapping(value = "/users/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<User> streamUsers() {
        return userService.findAll()
            .delayElements(Duration.ofSeconds(1)); // Delay for demo
    }
}
```

### Reactive Repository

```java
// MongoDB Reactive Repository
public interface ReactiveUserRepository extends ReactiveMongoRepository<User, String> {
    
    Flux<User> findByLastName(String lastName);
    
    Mono<User> findByEmail(String email);
    
    Flux<User> findByAgeBetween(int minAge, int maxAge);
    
    @Query("{ 'status': ?0 }")
    Flux<User> findByStatus(String status);
}

// R2DBC Repository (for SQL databases)
public interface R2dbcUserRepository extends ReactiveCrudRepository<User, Long> {
    
    @Query("SELECT * FROM users WHERE email = :email")
    Mono<User> findByEmail(String email);
    
    @Query("SELECT * FROM users WHERE age > :age")
    Flux<User> findByAgeGreaterThan(int age);
}
```

### Reactive Service

```java
@Service
@Slf4j
public class ReactiveUserService {
    
    @Autowired
    private ReactiveUserRepository userRepository;
    
    public Mono<User> findById(String id) {
        return userRepository.findById(id)
            .doOnNext(user -> log.info("Found user: {}", user.getName()))
            .doOnError(error -> log.error("Error finding user: {}", error.getMessage()));
    }
    
    public Flux<User> findAll() {
        return userRepository.findAll()
            .doOnComplete(() -> log.info("Fetched all users"))
            .doOnError(error -> log.error("Error fetching users: {}", error.getMessage()));
    }
    
    public Mono<User> save(User user) {
        return userRepository.save(user)
            .doOnSuccess(saved -> log.info("User saved: {}", saved.getId()));
    }
    
    public Mono<User> update(String id, User user) {
        return userRepository.findById(id)
            .flatMap(existingUser -> {
                existingUser.setName(user.getName());
                existingUser.setEmail(user.getEmail());
                return userRepository.save(existingUser);
            })
            .switchIfEmpty(Mono.error(new UserNotFoundException(id)));
    }
    
    public Mono<Void> deleteById(String id) {
        return userRepository.deleteById(id)
            .doOnSuccess(v -> log.info("User deleted: {}", id));
    }
    
    public Flux<User> findByLastName(String lastName) {
        return userRepository.findByLastName(lastName)
            .filter(user -> user.isActive());
    }
}
```

### Reactive Operators

```java
@Service
@Slf4j
public class ReactiveOperatorsExample {
    
    // map - transform each element
    public Flux<String> mapExample() {
        return Flux.just(1, 2, 3, 4, 5)
            .map(n -> "Number: " + n);
    }
    
    // flatMap - transform to Publisher and flatten
    public Flux<String> flatMapExample() {
        return Flux.just("user1", "user2", "user3")
            .flatMap(username -> fetchUserDetails(username));
    }
    
    // filter - keep only matching elements
    public Flux<Integer> filterExample() {
        return Flux.range(1, 10)
            .filter(n -> n % 2 == 0); // Only even numbers
    }
    
    // take - limit number of elements
    public Flux<Integer> takeExample() {
        return Flux.range(1, 100)
            .take(5); // Only first 5
    }
    
    // skip - skip first N elements
    public Flux<Integer> skipExample() {
        return Flux.range(1, 10)
            .skip(5); // Skip first 5
    }
    
    // distinct - remove duplicates
    public Flux<Integer> distinctExample() {
        return Flux.just(1, 2, 2, 3, 3, 3, 4)
            .distinct();
    }
    
    // collectList - collect to List
    public Mono<List<Integer>> collectListExample() {
        return Flux.range(1, 5)
            .collectList();
    }
    
    // reduce - aggregate values
    public Mono<Integer> reduceExample() {
        return Flux.range(1, 5)
            .reduce(0, (acc, value) -> acc + value); // Sum
    }
    
    // zip - combine two publishers
    public Flux<String> zipExample() {
        Flux<String> names = Flux.just("John", "Jane", "Bob");
        Flux<Integer> ages = Flux.just(25, 30, 35);
        
        return Flux.zip(names, ages, 
            (name, age) -> name + " is " + age + " years old");
    }
    
    // merge - combine multiple publishers
    public Flux<String> mergeExample() {
        Flux<String> flux1 = Flux.just("A", "B").delayElements(Duration.ofMillis(100));
        Flux<String> flux2 = Flux.just("1", "2").delayElements(Duration.ofMillis(150));
        
        return Flux.merge(flux1, flux2);
    }
    
    // concat - sequential combination
    public Flux<String> concatExample() {
        Flux<String> flux1 = Flux.just("A", "B");
        Flux<String> flux2 = Flux.just("C", "D");
        
        return Flux.concat(flux1, flux2); // A, B, C, D in order
    }
    
    // delayElements - add delay
    public Flux<Integer> delayExample() {
        return Flux.range(1, 5)
            .delayElements(Duration.ofSeconds(1));
    }
    
    // timeout - fail if takes too long
    public Mono<String> timeoutExample() {
        return Mono.delay(Duration.ofSeconds(5))
            .map(l -> "Done")
            .timeout(Duration.ofSeconds(3))
            .onErrorReturn("Timeout!");
    }
    
    // retry - retry on failure
    public Mono<String> retryExample() {
        return fetchDataFromApi()
            .retry(3); // Retry up to 3 times
    }
    
    // defaultIfEmpty - provide default value
    public Mono<String> defaultIfEmptyExample() {
        return Mono.empty()
            .defaultIfEmpty("Default Value");
    }
    
    // switchIfEmpty - alternative publisher
    public Mono<User> switchIfEmptyExample(String id) {
        return userRepository.findById(id)
            .switchIfEmpty(createDefaultUser());
    }
    
    private Mono<String> fetchUserDetails(String username) {
        return Mono.just("Details for " + username);
    }
    
    private Mono<String> fetchDataFromApi() {
        return Mono.just("API Data");
    }
    
    private Mono<User> createDefaultUser() {
        return Mono.just(new User("default", "default@example.com"));
    }
}
```

### Error Handling

```java
@Service
@Slf4j
public class ReactiveErrorHandling {
    
    // onErrorReturn - return fallback value
    public Mono<String> errorReturnExample() {
        return Mono.error(new RuntimeException("Error"))
            .onErrorReturn("Fallback value");
    }
    
    // onErrorResume - switch to alternative Publisher
    public Mono<User> errorResumeExample(String id) {
        return userRepository.findById(id)
            .onErrorResume(error -> {
                log.error("Error fetching user: {}", error.getMessage());
                return getDefaultUser();
            });
    }
    
    // onErrorMap - transform error
    public Mono<User> errorMapExample(String id) {
        return userRepository.findById(id)
            .onErrorMap(error -> 
                new CustomException("Failed to fetch user: " + id, error));
    }
    
    // onErrorContinue - continue processing next elements
    public Flux<Integer> errorContinueExample() {
        return Flux.just(1, 2, 0, 4, 5)
            .map(n -> 10 / n)
            .onErrorContinue((error, value) -> {
                log.error("Error processing {}: {}", value, error.getMessage());
            });
    }
    
    // doOnError - side effect on error
    public Mono<User> doOnErrorExample(String id) {
        return userRepository.findById(id)
            .doOnError(error -> {
                log.error("Error occurred: {}", error.getMessage());
                // Send alert, metrics, etc.
            });
    }
    
    private Mono<User> getDefaultUser() {
        return Mono.just(new User("default", "default@example.com"));
    }
}
```

### WebClient (Reactive HTTP Client)

```java
@Service
@Slf4j
public class WebClientService {
    
    private final WebClient webClient;
    
    public WebClientService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder
            .baseUrl("https://api.example.com")
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
            .build();
    }
    
    // GET request returning Mono
    public Mono<User> getUserById(Long id) {
        return webClient.get()
            .uri("/users/{id}", id)
            .retrieve()
            .bodyToMono(User.class)
            .doOnSuccess(user -> log.info("Fetched user: {}", user))
            .doOnError(error -> log.error("Error: {}", error.getMessage()));
    }
    
    // GET request returning Flux
    public Flux<User> getAllUsers() {
        return webClient.get()
            .uri("/users")
            .retrieve()
            .bodyToFlux(User.class);
    }
    
    // POST request
    public Mono<User> createUser(User user) {
        return webClient.post()
            .uri("/users")
            .bodyValue(user)
            .retrieve()
            .bodyToMono(User.class);
    }
    
    // PUT request
    public Mono<User> updateUser(Long id, User user) {
        return webClient.put()
            .uri("/users/{id}", id)
            .bodyValue(user)
            .retrieve()
            .bodyToMono(User.class);
    }
    
    // DELETE request
    public Mono<Void> deleteUser(Long id) {
        return webClient.delete()
            .uri("/users/{id}", id)
            .retrieve()
            .bodyToMono(Void.class);
    }
    
    // With headers
    public Mono<User> getUserWithAuth(Long id, String token) {
        return webClient.get()
            .uri("/users/{id}", id)
            .header(HttpHeaders.AUTHORIZATION, "Bearer " + token)
            .retrieve()
            .bodyToMono(User.class);
    }
    
    // With query parameters
    public Flux<User> searchUsers(String name, Integer age) {
        return webClient.get()
            .uri(uriBuilder -> uriBuilder
                .path("/users/search")
                .queryParam("name", name)
                .queryParam("age", age)
                .build())
            .retrieve()
            .bodyToFlux(User.class);
    }
    
    // Error handling
    public Mono<User> getUserWithErrorHandling(Long id) {
        return webClient.get()
            .uri("/users/{id}", id)
            .retrieve()
            .onStatus(HttpStatus::is4xxClientError, 
                response -> Mono.error(new UserNotFoundException("User not found")))
            .onStatus(HttpStatus::is5xxServerError,
                response -> Mono.error(new ServerException("Server error")))
            .bodyToMono(User.class);
    }
    
    // Multiple parallel requests
    public Mono<UserProfile> getUserProfile(Long userId) {
        Mono<User> userMono = getUserById(userId);
        Mono<List<Order>> ordersMono = getOrdersByUserId(userId);
        Mono<Address> addressMono = getAddressByUserId(userId);
        
        return Mono.zip(userMono, ordersMono, addressMono)
            .map(tuple -> new UserProfile(
                tuple.getT1(),
                tuple.getT2(),
                tuple.getT3()
            ));
    }
    
    private Mono<List<Order>> getOrdersByUserId(Long userId) {
        return webClient.get()
            .uri("/users/{id}/orders", userId)
            .retrieve()
            .bodyToFlux(Order.class)
            .collectList();
    }
    
    private Mono<Address> getAddressByUserId(Long userId) {
        return webClient.get()
            .uri("/users/{id}/address", userId)
            .retrieve()
            .bodyToMono(Address.class);
    }
}
```

### WebFlux Configuration

```java
@Configuration
public class WebFluxConfig {
    
    @Bean
    public WebClient webClient(WebClient.Builder builder) {
        return builder
            .baseUrl("https://api.example.com")
            .defaultHeader(HttpHeaders.USER_AGENT, "Spring WebFlux Client")
            .defaultCookie("cookieKey", "cookieValue")
            .filter(logRequest())
            .filter(logResponse())
            .build();
    }
    
    private ExchangeFilterFunction logRequest() {
        return ExchangeFilterFunction.ofRequestProcessor(request -> {
            log.info("Request: {} {}", request.method(), request.url());
            request.headers().forEach((name, values) -> 
                values.forEach(value -> log.info("{}={}", name, value)));
            return Mono.just(request);
        });
    }
    
    private ExchangeFilterFunction logResponse() {
        return ExchangeFilterFunction.ofResponseProcessor(response -> {
            log.info("Response status: {}", response.statusCode());
            return Mono.just(response);
        });
    }
    
    @Bean
    public RouterFunction<ServerResponse> routes(UserHandler userHandler) {
        return RouterFunctions
            .route(GET("/api/users").and(accept(MediaType.APPLICATION_JSON)), 
                userHandler::getAllUsers)
            .andRoute(GET("/api/users/{id}").and(accept(MediaType.APPLICATION_JSON)), 
                userHandler::getUserById)
            .andRoute(POST("/api/users").and(contentType(MediaType.APPLICATION_JSON)), 
                userHandler::createUser)
            .andRoute(PUT("/api/users/{id}").and(contentType(MediaType.APPLICATION_JSON)), 
                userHandler::updateUser)
            .andRoute(DELETE("/api/users/{id}"), 
                userHandler::deleteUser);
    }
}
```

### Functional Endpoints (Handler)

```java
@Component
@Slf4j
public class UserHandler {
    
    @Autowired
    private ReactiveUserService userService;
    
    public Mono<ServerResponse> getAllUsers(ServerRequest request) {
        return ServerResponse.ok()
            .contentType(MediaType.APPLICATION_JSON)
            .body(userService.findAll(), User.class);
    }
    
    public Mono<ServerResponse> getUserById(ServerRequest request) {
        String id = request.pathVariable("id");
        
        return userService.findById(id)
            .flatMap(user -> ServerResponse.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(user))
            .switchIfEmpty(ServerResponse.notFound().build());
    }
    
    public Mono<ServerResponse> createUser(ServerRequest request) {
        Mono<User> userMono = request.bodyToMono(User.class);
        
        return userMono
            .flatMap(userService::save)
            .flatMap(user -> ServerResponse
                .created(URI.create("/api/users/" + user.getId()))
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(user));
    }
    
    public Mono<ServerResponse> updateUser(ServerRequest request) {
        String id = request.pathVariable("id");
        Mono<User> userMono = request.bodyToMono(User.class);
        
        return userMono
            .flatMap(user -> userService.update(id, user))
            .flatMap(user -> ServerResponse.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(user))
            .switchIfEmpty(ServerResponse.notFound().build());
    }
    
    public Mono<ServerResponse> deleteUser(ServerRequest request) {
        String id = request.pathVariable("id");
        
        return userService.deleteById(id)
            .then(ServerResponse.noContent().build());
    }
}
```

### Testing Reactive Code

```java
@SpringBootTest
@AutoConfigureWebTestClient
class ReactiveControllerTest {
    
    @Autowired
    private WebTestClient webTestClient;
    
    @Test
    void testGetUserById() {
        webTestClient.get()
            .uri("/api/reactive/users/1")
            .exchange()
            .expectStatus().isOk()
            .expectBody(User.class)
            .value(user -> {
                assertNotNull(user);
                assertEquals("John", user.getName());
            });
    }
    
    @Test
    void testGetAllUsers() {
        webTestClient.get()
            .uri("/api/reactive/users")
            .exchange()
            .expectStatus().isOk()
            .expectBodyList(User.class)
            .hasSize(3);
    }
    
    @Test
    void testCreateUser() {
        User newUser = new User("Jane", "jane@example.com");
        
        webTestClient.post()
            .uri("/api/reactive/users")
            .bodyValue(newUser)
            .exchange()
            .expectStatus().isOk()
            .expectBody(User.class)
            .value(user -> {
                assertNotNull(user.getId());
                assertEquals("Jane", user.getName());
            });
    }
}
```

**Testing with StepVerifier:**

```java
@Test
void testFluxOperations() {
    Flux<Integer> flux = Flux.just(1, 2, 3, 4, 5);
    
    StepVerifier.create(flux)
        .expectNext(1)
        .expectNext(2)
        .expectNext(3)
        .expectNext(4)
        .expectNext(5)
        .verifyComplete();
}

@Test
void testMonoWithError() {
    Mono<String> mono = Mono.error(new RuntimeException("Error"));
    
    StepVerifier.create(mono)
        .expectError(RuntimeException.class)
        .verify();
}

@Test
void testFluxWithDelay() {
    Flux<Long> flux = Flux.interval(Duration.ofSeconds(1)).take(3);
    
    StepVerifier.create(flux)
        .expectNext(0L)
        .expectNext(1L)
        .expectNext(2L)
        .verifyComplete();
}
```

### When to Use WebFlux?

**Use WebFlux When:**
- High concurrency with limited threads
- Streaming data (SSE, WebSocket)
- Microservices with many I/O calls
- Back-pressure handling needed
- Non-blocking database drivers available

**Use Spring MVC When:**
- Traditional blocking I/O is fine
- Team familiar with blocking code
- Blocking dependencies (JDBC, etc.)
- Simpler debugging needed
- Lower concurrency requirements

---

### GraphQL with Spring Boot

#### What is GraphQL?

GraphQL is a query language for APIs that allows clients to request exactly the data they need. Unlike REST, where you have multiple endpoints, GraphQL has a single endpoint with flexible queries.

### Setup GraphQL

**pom.xml:**

```xml
<dependency>
    <groupId>com.graphql-java-kickstart</groupId>
    <artifactId>graphql-spring-boot-starter</artifactId>
    <version>15.0.0</version>
</dependency>

<dependency>
    <groupId>com.graphql-java-kickstart</groupId>
    <artifactId>graphiql-spring-boot-starter</artifactId>
    <version>15.0.0</version>
</dependency>

<dependency>
    <groupId>com.graphql-java-kickstart</groupId>
    <artifactId>graphql-java-tools</artifactId>
    <version>13.0.1</version>
</dependency>
```

**application.yml:**

```yaml
graphql:
  servlet:
    mapping: /graphql
    enabled: true
    corsEnabled: true
    
graphiql:
  mapping: /graphiql
  endpoint:
    graphql: /graphql
```

### Define Schema

**src/main/resources/graphql/schema.graphqls:**

```graphql
type Query {
    # Get user by ID
    user(id: ID!): User
    
    # Get all users
    users: [User!]!
    
    # Search users
    searchUsers(name: String, email: String): [User!]!
    
    # Get user with posts
    userWithPosts(id: ID!): User
}

type Mutation {
    # Create user
    createUser(input: CreateUserInput!): User!
    
    # Update user
    updateUser(id: ID!, input: UpdateUserInput!): User!
    
    # Delete user
    deleteUser(id: ID!): Boolean!
    
    # Create post
    createPost(input: CreatePostInput!): Post!
}

type Subscription {
    # Subscribe to new users
    userCreated: User!
    
    # Subscribe to post updates
    postUpdated(userId: ID!): Post!
}

type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
    createdAt: String!
}

type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]!
    createdAt: String!
}

type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
    createdAt: String!
}

input CreateUserInput {
    name: String!
    email: String!
    age: Int
}

input UpdateUserInput {
    name: String
    email: String
    age: Int
}

input CreatePostInput {
    title: String!
    content: String!
    authorId: ID!
}
```

### Entity Classes

```java
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    private String email;
    
    private Integer age;
    
    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    private List<Post> posts = new ArrayList<>();
    
    private LocalDateTime createdAt;
}

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Post {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    
    private String content;
    
    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;
    
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();
    
    private LocalDateTime createdAt;
}
```

### Query Resolver

```java
@Component
@Slf4j
public class QueryResolver implements GraphQLQueryResolver {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private UserService userService;
    
    public User user(Long id) {
        log.info("Fetching user with id: {}", id);
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException("User not found: " + id));
    }
    
    public List<User> users() {
        log.info("Fetching all users");
        return userRepository.findAll();
    }
    
    public List<User> searchUsers(String name, String email) {
        log.info("Searching users: name={}, email={}", name, email);
        
        if (name != null && email != null) {
            return userRepository.findByNameContainingAndEmail(name, email);
        } else if (name != null) {
            return userRepository.findByNameContaining(name);
        } else if (email != null) {
            return userRepository.findByEmail(email)
                .map(Collections::singletonList)
                .orElse(Collections.emptyList());
        }
        
        return userRepository.findAll();
    }
    
    public User userWithPosts(Long id) {
        log.info("Fetching user with posts: {}", id);
        return userService.getUserWithPosts(id);
    }
}
```

### Mutation Resolver

```java
@Component
@Slf4j
public class MutationResolver implements GraphQLMutationResolver {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PostRepository postRepository;
    
    @Autowired
    private UserService userService;
    
    public User createUser(CreateUserInput input) {
        log.info("Creating user: {}", input.getName());
        
        User user = new User();
        user.setName(input.getName());
        user.setEmail(input.getEmail());
        user.setAge(input.getAge());
        user.setCreatedAt(LocalDateTime.now());
        
        return userRepository.save(user);
    }
    
    public User updateUser(Long id, UpdateUserInput input) {
        log.info("Updating user: {}", id);
        
        User user = userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException("User not found: " + id));
        
        if (input.getName() != null) {
            user.setName(input.getName());
        }
        if (input.getEmail() != null) {
            user.setEmail(input.getEmail());
        }
        if (input.getAge() != null) {
            user.setAge(input.getAge());
        }
        
        return userRepository.save(user);
    }
    
    public Boolean deleteUser(Long id) {
        log.info("Deleting user: {}", id);
        
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException("User not found: " + id);
        }
        
        userRepository.deleteById(id);
        return true;
    }
    
    public Post createPost(CreatePostInput input) {
        log.info("Creating post: {}", input.getTitle());
        
        User author = userRepository.findById(input.getAuthorId())
            .orElseThrow(() -> new UserNotFoundException("Author not found"));
        
        Post post = new Post();
        post.setTitle(input.getTitle());
        post.setContent(input.getContent());
        post.setAuthor(author);
        post.setCreatedAt(LocalDateTime.now());
        
        return postRepository.save(post);
    }
}
```

### Field Resolver (for nested fields)

```java
@Component
@Slf4j
public class UserResolver implements GraphQLResolver<User> {
    
    @Autowired
    private PostRepository postRepository;
    
    // Resolve posts field for User
    public List<Post> posts(User user) {
        log.info("Fetching posts for user: {}", user.getId());
        return postRepository.findByAuthorId(user.getId());
    }
}

@Component
@Slf4j
public class PostResolver implements GraphQLResolver<Post> {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private CommentRepository commentRepository;
    
    // Resolve author field for Post
    public User author(Post post) {
        log.info("Fetching author for post: {}", post.getId());
        return userRepository.findById(post.getAuthor().getId())
            .orElseThrow(() -> new UserNotFoundException("Author not found"));
    }
    
    // Resolve comments field for Post
    public List<Comment> comments(Post post) {
        log.info("Fetching comments for post: {}", post.getId());
        return commentRepository.findByPostId(post.getId());
    }
}
```

### Input Classes

```java
@Data
public class CreateUserInput {
    private String name;
    private String email;
    private Integer age;
}

@Data
public class UpdateUserInput {
    private String name;
    private String email;
    private Integer age;
}

@Data
public class CreatePostInput {
    private String title;
    private String content;
    private Long authorId;
}
```

### GraphQL Queries (Client Side)

**Get single user:**

```graphql
query {
  user(id: "1") {
    id
    name
    email
    age
  }
}
```

**Get user with posts:**

```graphql
query {
  user(id: "1") {
    id
    name
    email
    posts {
      id
      title
      content
      createdAt
    }
  }
}
```

**Get all users:**

```graphql
query {
  users {
    id
    name
    email
  }
}
```

**Search users:**

```graphql
query {
  searchUsers(name: "John") {
    id
    name
    email
    age
  }
}
```

**Create user:**

```graphql
mutation {
  createUser(input: {
    name: "John Doe"
    email: "john@example.com"
    age: 30
  }) {
    id
    name
    email
    age
    createdAt
  }
}
```

**Update user:**

```graphql
mutation {
  updateUser(id: "1", input: {
    name: "John Updated"
    email: "john.updated@example.com"
  }) {
    id
    name
    email
  }
}
```

**Delete user:**

```graphql
mutation {
  deleteUser(id: "1")
}
```

**Create post:**

```graphql
mutation {
  createPost(input: {
    title: "My First Post"
    content: "This is the content of my first post."
    authorId: "1"
  }) {
    id
    title
    content
    author {
      id
      name
    }
    createdAt
  }
}
```

### Error Handling

```java
@Component
public class GraphQLExceptionHandler implements GraphQLErrorHandler {
    
    @Override
    public List<GraphQLError> processErrors(List<GraphQLError> errors) {
        return errors.stream()
            .map(this::toCustomError)
            .collect(Collectors.toList());
    }
    
    private GraphQLError toCustomError(GraphQLError error) {
        if (error instanceof ExceptionWhileDataFetching) {
            ExceptionWhileDataFetching exceptionError = (ExceptionWhileDataFetching) error;
            Throwable exception = exceptionError.getException();
            
            if (exception instanceof UserNotFoundException) {
                return new GraphQLErrorBuilder()
                    .message(exception.getMessage())
                    .errorType(ErrorType.NOT_FOUND)
                    .build();
            }
            
            if (exception instanceof ValidationException) {
                return new GraphQLErrorBuilder()
                    .message(exception.getMessage())
                    .errorType(ErrorType.ValidationError)
                    .build();
            }
        }
        
        return error;
    }
}
```

### DataLoader (N+1 Problem Solution)

```java
@Configuration
public class DataLoaderConfiguration {
    
    @Autowired
    private UserRepository userRepository;
    
    @Bean
    public DataLoader<Long, User> userDataLoader() {
        return DataLoader.newDataLoader(ids -> 
            CompletableFuture.supplyAsync(() -> {
                List<User> users = userRepository.findAllById(ids);
                Map<Long, User> userMap = users.stream()
                    .collect(Collectors.toMap(User::getId, Function.identity()));
                
                return ids.stream()
                    .map(userMap::get)
                    .collect(Collectors.toList());
            })
        );
    }
}
```

### Pagination

**Schema:**

```graphql
type Query {
    users(page: Int, size: Int): UserPage!
}

type UserPage {
    content: [User!]!
    totalElements: Int!
    totalPages: Int!
    number: Int!
    size: Int!
}
```

**Resolver:**

```java
@Component
public class QueryResolver implements GraphQLQueryResolver {
    
    @Autowired
    private UserRepository userRepository;
    
    public UserPage users(Integer page, Integer size) {
        page = page != null ? page : 0;
        size = size != null ? size : 10;
        
        Pageable pageable = PageRequest.of(page, size);
        Page<User> userPage = userRepository.findAll(pageable);
        
        return new UserPage(
            userPage.getContent(),
            userPage.getTotalElements(),
            userPage.getTotalPages(),
            userPage.getNumber(),
            userPage.getSize()
        );
    }
}
```

### Security

```java
@Configuration
@EnableWebSecurity
public class GraphQLSecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/graphql").authenticated()
                .requestMatchers("/graphiql").permitAll()
            )
            .httpBasic();
        
        return http.build();
    }
}
```

**Secure specific fields:**

```java
@Component
public class QueryResolver implements GraphQLQueryResolver {
    
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> users() {
        return userRepository.findAll();
    }
    
    @PreAuthorize("hasRole('USER')")
    public User user(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
```

---

### Multi-Module Maven Projects

#### What are Multi-Module Projects?

Multi-module Maven projects allow you to organize your application into separate modules with dependencies between them. This improves code organization, reusability, and build management.

### Project Structure

```
my-app/
├── pom.xml                     (parent POM)
├── my-app-common/
│   ├── pom.xml
│   └── src/
│       └── main/
│           └── java/
│               └── com/example/common/
├── my-app-domain/
│   ├── pom.xml
│   └── src/
│       └── main/
│           └── java/
│               └── com/example/domain/
├── my-app-repository/
│   ├── pom.xml
│   └── src/
│       └── main/
│           └── java/
│               └── com/example/repository/
├── my-app-service/
│   ├── pom.xml
│   └── src/
│       └── main/
│           └── java/
│               └── com/example/service/
└── my-app-web/
    ├── pom.xml
    └── src/
        └── main/
            └── java/
                └── com/example/web/
```

### Parent POM (Root)

**my-app/pom.xml:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
        <relativePath/>
    </parent>
    
    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>pom</packaging>
    
    <name>My Application</name>
    <description>Multi-module Spring Boot application</description>
    
    <properties>
        <java.version>17</java.version>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
    
    <!-- Define modules -->
    <modules>
        <module>my-app-common</module>
        <module>my-app-domain</module>
        <module>my-app-repository</module>
        <module>my-app-service</module>
        <module>my-app-web</module>
    </modules>
    
    <!-- Dependency Management -->
    <dependencyManagement>
        <dependencies>
            <!-- Internal modules -->
            <dependency>
                <groupId>com.example</groupId>
                <artifactId>my-app-common</artifactId>
                <version>${project.version}</version>
            </dependency>
            
            <dependency>
                <groupId>com.example</groupId>
                <artifactId>my-app-domain</artifactId>
                <version>${project.version}</version>
            </dependency>
            
            <dependency>
                <groupId>com.example</groupId>
                <artifactId>my-app-repository</artifactId>
                <version>${project.version}</version>
            </dependency>
            
            <dependency>
                <groupId>com.example</groupId>
                <artifactId>my-app-service</artifactId>
                <version>${project.version}</version>
            </dependency>
            
            <!-- External dependencies -->
            <dependency>
                <groupId>org.projectlombok</groupId>
                <artifactId>lombok</artifactId>
                <version>1.18.30</version>
            </dependency>
            
            <dependency>
                <groupId>org.mapstruct</groupId>
                <artifactId>mapstruct</artifactId>
                <version>1.5.5.Final</version>
            </dependency>
        </dependencies>
    </dependencyManagement>
    
    <!-- Common dependencies for all modules -->
    <dependencies>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <scope>provided</scope>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <build>
        <pluginManagement>
            <plugins>
                <plugin>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-maven-plugin</artifactId>
                </plugin>
            </plugins>
        </pluginManagement>
    </build>
</project>
```

### Common Module

**my-app-common/pom.xml:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>com.example</groupId>
        <artifactId>my-app</artifactId>
        <version>1.0.0-SNAPSHOT</version>
    </parent>
    
    <artifactId>my-app-common</artifactId>
    <packaging>jar</packaging>
    
    <name>My App - Common</name>
    <description>Common utilities and DTOs</description>
    
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>
        
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
        </dependency>
    </dependencies>
</project>
```

**Common classes:**

```java
package com.example.common.dto;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ApiResponse<T> {
    private boolean success;
    private String message;
    private T data;
    private LocalDateTime timestamp;
}

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponse {
    private int status;
    private String error;
    private String message;
    private String path;
    private LocalDateTime timestamp;
}
```

```java
package com.example.common.util;

public class DateUtil {
    
    public static String formatDate(LocalDateTime dateTime) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return dateTime.format(formatter);
    }
    
    public static LocalDateTime parseDate(String dateStr) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return LocalDateTime.parse(dateStr, formatter);
    }
}
```

### Domain Module

**my-app-domain/pom.xml:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>com.example</groupId>
        <artifactId>my-app</artifactId>
        <version>1.0.0-SNAPSHOT</version>
    </parent>
    
    <artifactId>my-app-domain</artifactId>
    <packaging>jar</packaging>
    
    <name>My App - Domain</name>
    <description>Domain entities and models</description>
    
    <dependencies>
        <dependency>
            <groupId>com.example</groupId>
            <artifactId>my-app-common</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        
        <dependency>
            <groupId>jakarta.validation</groupId>
            <artifactId>jakarta.validation-api</artifactId>
        </dependency>
    </dependencies>
</project>
```

**Domain entities:**

```java
package com.example.domain.entity;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    private Integer age;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
```

### Repository Module

**my-app-repository/pom.xml:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>com.example</groupId>
        <artifactId>my-app</artifactId>
        <version>1.0.0-SNAPSHOT</version>
    </parent>
    
    <artifactId>my-app-repository</artifactId>
    <packaging>jar</packaging>
    
    <name>My App - Repository</name>
    <description>Data access layer</description>
    
    <dependencies>
        <dependency>
            <groupId>com.example</groupId>
            <artifactId>my-app-domain</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
    </dependencies>
</project>
```

**Repository:**

```java
package com.example.repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    Optional<User> findByEmail(String email);
    
    List<User> findByNameContaining(String name);
    
    @Query("SELECT u FROM User u WHERE u.age > :age")
    List<User> findByAgeGreaterThan(@Param("age") int age);
}
```

### Service Module

**my-app-service/pom.xml:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>com.example</groupId>
        <artifactId>my-app</artifactId>
        <version>1.0.0-SNAPSHOT</version>
    </parent>
    
    <artifactId>my-app-service</artifactId>
    <packaging>jar</packaging>
    
    <name>My App - Service</name>
    <description>Business logic layer</description>
    
    <dependencies>
        <dependency>
            <groupId>com.example</groupId>
            <artifactId>my-app-repository</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-tx</artifactId>
        </dependency>
    </dependencies>
</project>
```

**Service:**

```java
package com.example.service;

@Service
@Slf4j
@Transactional
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public User create(User user) {
        log.info("Creating user: {}", user.getEmail());
        user.setCreatedAt(LocalDateTime.now());
        return userRepository.save(user);
    }
    
    @Transactional(readOnly = true)
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }
    
    @Transactional(readOnly = true)
    public List<User> findAll() {
        return userRepository.findAll();
    }
    
    public User update(Long id, User user) {
        User existing = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found"));
        
        existing.setName(user.getName());
        existing.setEmail(user.getEmail());
        existing.setAge(user.getAge());
        existing.setUpdatedAt(LocalDateTime.now());
        
        return userRepository.save(existing);
    }
    
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}
```

### Web Module

**my-app-web/pom.xml:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>com.example</groupId>
        <artifactId>my-app</artifactId>
        <version>1.0.0-SNAPSHOT</version>
    </parent>
    
    <artifactId>my-app-web</artifactId>
    <packaging>jar</packaging>
    
    <name>My App - Web</name>
    <description>Web layer</description>
    
    <dependencies>
        <dependency>
            <groupId>com.example</groupId>
            <artifactId>my-app-service</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        
        <!-- Database driver -->
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <mainClass>com.example.web.Application</mainClass>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

**Application Main Class:**

```java
package com.example.web;

@SpringBootApplication(scanBasePackages = "com.example")
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

**Controller:**

```java
package com.example.web.controller;

@RestController
@RequestMapping("/api/users")
@Slf4j
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping
    public ResponseEntity<ApiResponse<List<User>>> getAllUsers() {
        List<User> users = userService.findAll();
        return ResponseEntity.ok(
            ApiResponse.<List<User>>builder()
                .success(true)
                .message("Users retrieved successfully")
                .data(users)
                .timestamp(LocalDateTime.now())
                .build()
        );
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<User>> getUserById(@PathVariable Long id) {
        return userService.findById(id)
            .map(user -> ResponseEntity.ok(
                ApiResponse.<User>builder()
                    .success(true)
                    .data(user)
                    .timestamp(LocalDateTime.now())
                    .build()
            ))
            .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<ApiResponse<User>> createUser(@Valid @RequestBody User user) {
        User created = userService.create(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(
            ApiResponse.<User>builder()
                .success(true)
                .message("User created successfully")
                .data(created)
                .timestamp(LocalDateTime.now())
                .build()
        );
    }
}
```

### Building Multi-Module Project

**Build all modules:**

```bash
mvn clean install
```

**Build specific module:**

```bash
cd my-app-web
mvn clean package
```

**Run the application:**

```bash
cd my-app-web
mvn spring-boot:run
```

**Or run the JAR:**

```bash
java -jar my-app-web/target/my-app-web-1.0.0-SNAPSHOT.jar
```

### Module Dependencies

```
my-app-web
    └── my-app-service
            └── my-app-repository
                    └── my-app-domain
                            └── my-app-common
```

### Best Practices

1. **Clear separation of concerns**: Each module has specific responsibility
2. **Dependency direction**: Always flow from web → service → repository → domain
3. **Avoid circular dependencies**: Never have modules depend on each other circularly
4. **Common module**: Share utilities, DTOs, and constants
5. **Version management**: Use parent POM for version control
6. **Testing**: Test each module independently
7. **Documentation**: Document module responsibilities
8. **Naming conventions**: Use consistent module naming

### Benefits

- **Modularity**: Better code organization
- **Reusability**: Modules can be reused across projects
- **Parallel development**: Teams can work on different modules
- **Build optimization**: Only rebuild changed modules
- **Dependency management**: Centralized in parent POM
- **Testing**: Test modules independently
- **Deployment**: Deploy only needed modules

### Common Pitfalls

**❌ Circular dependencies:**

```
my-app-service → my-app-web → my-app-service (BAD)
```

**❌ Too many modules:**

Creating too many small modules increases complexity

**❌ Wrong dependency direction:**

Domain should not depend on repository or service

**✅ Correct structure:**

```
web → service → repository → domain → common
```

This completes the Advanced Concepts section with AOP, Custom Annotations, Schedulers, Async Programming, WebFlux, GraphQL, and Multi-Module Maven Projects!

---

## 14. Performance & Scaling

### Health Checks & Metrics

### Spring Boot Actuator

**pom.xml:**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>

<!-- Micrometer for metrics -->
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-registry-prometheus</artifactId>
</dependency>
```

**application.yml:**

```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
      base-path: /actuator
  endpoint:
    health:
      show-details: always
      show-components: always
    metrics:
      enabled: true
  metrics:
    export:
      prometheus:
        enabled: true
    distribution:
      percentiles-histogram:
        http.server.requests: true
    tags:
      application: ${spring.application.name}
      environment: ${spring.profiles.active}
```

### Built-in Health Indicators

```yaml
management:
  health:
    db:
      enabled: true
    diskspace:
      enabled: true
    redis:
      enabled: true
    mongo:
      enabled: true
```

**Available endpoints:**
- `/actuator/health` - Application health status
- `/actuator/metrics` - Application metrics
- `/actuator/info` - Application information
- `/actuator/prometheus` - Prometheus metrics

### Custom Health Indicator

```java
@Component
public class DatabaseHealthIndicator implements HealthIndicator {
    
    @Autowired
    private DataSource dataSource;
    
    @Override
    public Health health() {
        try (Connection connection = dataSource.getConnection()) {
            if (connection.isValid(1000)) {
                return Health.up()
                    .withDetail("database", "Available")
                    .withDetail("validationQuery", "SELECT 1")
                    .build();
            } else {
                return Health.down()
                    .withDetail("database", "Not responding")
                    .build();
            }
        } catch (SQLException e) {
            return Health.down()
                .withDetail("error", e.getMessage())
                .withException(e)
                .build();
        }
    }
}
```

**External Service Health Check:**

```java
@Component
@Slf4j
public class ExternalApiHealthIndicator implements HealthIndicator {
    
    @Autowired
    private RestTemplate restTemplate;
    
    @Value("${external.api.url}")
    private String apiUrl;
    
    @Override
    public Health health() {
        try {
            long startTime = System.currentTimeMillis();
            
            ResponseEntity<String> response = restTemplate.getForEntity(
                apiUrl + "/health", 
                String.class
            );
            
            long responseTime = System.currentTimeMillis() - startTime;
            
            if (response.getStatusCode().is2xxSuccessful()) {
                return Health.up()
                    .withDetail("service", "External API")
                    .withDetail("status", response.getStatusCode())
                    .withDetail("responseTime", responseTime + "ms")
                    .build();
            } else {
                return Health.down()
                    .withDetail("service", "External API")
                    .withDetail("status", response.getStatusCode())
                    .build();
            }
        } catch (Exception e) {
            log.error("External API health check failed", e);
            return Health.down()
                .withDetail("service", "External API")
                .withDetail("error", e.getMessage())
                .build();
        }
    }
}
```

**Disk Space Health Check:**

```java
@Component
public class DiskSpaceHealthIndicator implements HealthIndicator {
    
    private static final long THRESHOLD = 10 * 1024 * 1024 * 1024L; // 10 GB
    
    @Override
    public Health health() {
        File diskPartition = new File("/");
        long freeSpace = diskPartition.getFreeSpace();
        long totalSpace = diskPartition.getTotalSpace();
        long usedSpace = totalSpace - freeSpace;
        
        double usedPercentage = (usedSpace * 100.0) / totalSpace;
        
        Health.Builder builder = freeSpace >= THRESHOLD 
            ? Health.up() 
            : Health.down();
        
        return builder
            .withDetail("total", formatBytes(totalSpace))
            .withDetail("free", formatBytes(freeSpace))
            .withDetail("used", formatBytes(usedSpace))
            .withDetail("usedPercentage", String.format("%.2f%%", usedPercentage))
            .withDetail("threshold", formatBytes(THRESHOLD))
            .build();
    }
    
    private String formatBytes(long bytes) {
        if (bytes < 1024) return bytes + " B";
        int exp = (int) (Math.log(bytes) / Math.log(1024));
        char pre = "KMGTPE".charAt(exp - 1);
        return String.format("%.2f %sB", bytes / Math.pow(1024, exp), pre);
    }
}
```

**Composite Health Indicator:**

```java
@Component
public class SystemHealthIndicator extends CompositeHealthContributor {
    
    public SystemHealthIndicator(
            DatabaseHealthIndicator databaseHealth,
            ExternalApiHealthIndicator apiHealth,
            DiskSpaceHealthIndicator diskHealth) {
        
        Map<String, HealthContributor> contributors = new LinkedHashMap<>();
        contributors.put("database", databaseHealth);
        contributors.put("externalApi", apiHealth);
        contributors.put("diskSpace", diskHealth);
        
        this.registerContributors(contributors);
    }
}
```

### Custom Metrics

```java
@Service
@Slf4j
public class OrderService {
    
    private final OrderRepository orderRepository;
    private final Counter orderCounter;
    private final Timer orderProcessingTimer;
    private final Gauge orderQueueGauge;
    
    public OrderService(
            OrderRepository orderRepository,
            MeterRegistry meterRegistry) {
        
        this.orderRepository = orderRepository;
        
        // Counter - counts occurrences
        this.orderCounter = Counter.builder("orders.created")
            .description("Total number of orders created")
            .tag("type", "purchase")
            .register(meterRegistry);
        
        // Timer - measures duration
        this.orderProcessingTimer = Timer.builder("orders.processing.time")
            .description("Time taken to process orders")
            .register(meterRegistry);
        
        // Gauge - current value
        this.orderQueueGauge = Gauge.builder("orders.queue.size", 
                this::getQueueSize)
            .description("Current size of order queue")
            .register(meterRegistry);
    }
    
    public Order createOrder(Order order) {
        orderCounter.increment();
        
        return orderProcessingTimer.record(() -> {
            log.info("Creating order: {}", order.getId());
            // Processing logic
            return orderRepository.save(order);
        });
    }
    
    private double getQueueSize() {
        // Return current queue size
        return orderRepository.countByStatus("PENDING");
    }
}
```

**Custom Metrics with Tags:**

```java
@Component
@Slf4j
public class MetricsService {
    
    private final MeterRegistry meterRegistry;
    
    public MetricsService(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
    }
    
    public void recordApiCall(String endpoint, String method, int statusCode, long duration) {
        Timer.builder("api.calls")
            .tag("endpoint", endpoint)
            .tag("method", method)
            .tag("status", String.valueOf(statusCode))
            .description("API call metrics")
            .register(meterRegistry)
            .record(duration, TimeUnit.MILLISECONDS);
    }
    
    public void incrementCacheHit(String cacheName) {
        Counter.builder("cache.hits")
            .tag("cache", cacheName)
            .description("Cache hit count")
            .register(meterRegistry)
            .increment();
    }
    
    public void incrementCacheMiss(String cacheName) {
        Counter.builder("cache.misses")
            .tag("cache", cacheName)
            .description("Cache miss count")
            .register(meterRegistry)
            .increment();
    }
    
    public void recordDatabaseQuery(String operation, long duration) {
        Timer.builder("database.query")
            .tag("operation", operation)
            .description("Database query execution time")
            .register(meterRegistry)
            .record(duration, TimeUnit.MILLISECONDS);
    }
}
```

### Monitoring with AOP

```java
@Aspect
@Component
@Slf4j
public class MetricsAspect {
    
    private final MeterRegistry meterRegistry;
    
    public MetricsAspect(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
    }
    
    @Around("@annotation(monitored)")
    public Object monitorPerformance(ProceedingJoinPoint joinPoint, Monitored monitored) 
            throws Throwable {
        
        String methodName = joinPoint.getSignature().toShortString();
        
        Timer timer = Timer.builder("method.execution")
            .tag("method", methodName)
            .tag("class", joinPoint.getTarget().getClass().getSimpleName())
            .description("Method execution time")
            .register(meterRegistry);
        
        return timer.record(() -> {
            try {
                return joinPoint.proceed();
            } catch (Throwable e) {
                Counter.builder("method.errors")
                    .tag("method", methodName)
                    .register(meterRegistry)
                    .increment();
                throw e;
            }
        });
    }
}
```

### Prometheus Integration

**application.yml:**

```yaml
management:
  metrics:
    export:
      prometheus:
        enabled: true
        step: 1m
    tags:
      application: my-app
      environment: production
```

**Prometheus Configuration (prometheus.yml):**

```yaml
scrape_configs:
  - job_name: 'spring-boot-app'
    metrics_path: '/actuator/prometheus'
    scrape_interval: 15s
    static_configs:
      - targets: ['localhost:8080']
        labels:
          application: 'my-app'
          environment: 'production'
```

---

### Thread Pool Tuning

#### Tomcat Thread Pool Configuration

**application.yml:**

```yaml
server:
  tomcat:
    threads:
      max: 200              # Maximum number of worker threads
      min-spare: 10         # Minimum number of spare threads
    max-connections: 10000  # Maximum connections
    accept-count: 100       # Queue size for incoming connections
    connection-timeout: 20000  # Connection timeout (ms)
  port: 8080
```

**Programmatic Configuration:**

```java
@Configuration
public class TomcatConfig {
    
    @Bean
    public WebServerFactoryCustomizer<TomcatServletWebServerFactory> 
            tomcatCustomizer() {
        
        return factory -> {
            factory.addConnectorCustomizers(connector -> {
                ProtocolHandler handler = connector.getProtocolHandler();
                
                if (handler instanceof AbstractProtocol) {
                    AbstractProtocol<?> protocol = (AbstractProtocol<?>) handler;
                    
                    // Thread pool settings
                    protocol.setMaxThreads(200);
                    protocol.setMinSpareThreads(10);
                    protocol.setConnectionTimeout(20000);
                    
                    // Connection settings
                    protocol.setMaxConnections(10000);
                    protocol.setAcceptCount(100);
                }
            });
        };
    }
}
```

### Async Task Executor

```java
@Configuration
@EnableAsync
public class AsyncConfig {
    
    @Bean(name = "taskExecutor")
    public ThreadPoolTaskExecutor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        
        // Core pool size
        executor.setCorePoolSize(10);
        
        // Maximum pool size
        executor.setMaxPoolSize(50);
        
        // Queue capacity
        executor.setQueueCapacity(100);
        
        // Thread name prefix
        executor.setThreadNamePrefix("async-");
        
        // Keep alive seconds for idle threads
        executor.setKeepAliveSeconds(60);
        
        // Wait for tasks to complete on shutdown
        executor.setWaitForTasksToCompleteOnShutdown(true);
        
        // Timeout for shutdown
        executor.setAwaitTerminationSeconds(60);
        
        // Rejection policy when queue is full
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        
        // Initialize
        executor.initialize();
        
        return executor;
    }
}
```

### Scheduled Task Executor

```java
@Configuration
@EnableScheduling
public class SchedulingConfig implements SchedulingConfigurer {
    
    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
        
        scheduler.setPoolSize(10);
        scheduler.setThreadNamePrefix("scheduled-");
        scheduler.setAwaitTerminationSeconds(60);
        scheduler.setWaitForTasksToCompleteOnShutdown(true);
        scheduler.initialize();
        
        taskRegistrar.setTaskScheduler(scheduler);
    }
}
```

### WebFlux Thread Pool

```java
@Configuration
public class WebFluxConfig {
    
    @Bean
    public ReactorResourceFactory reactorResourceFactory() {
        ReactorResourceFactory factory = new ReactorResourceFactory();
        
        // Use a custom thread pool
        factory.setUseGlobalResources(false);
        
        return factory;
    }
    
    @Bean
    public WebClient.Builder webClientBuilder() {
        ConnectionProvider provider = ConnectionProvider.builder("custom")
            .maxConnections(500)
            .pendingAcquireMaxCount(1000)
            .pendingAcquireTimeout(Duration.ofSeconds(45))
            .maxIdleTime(Duration.ofSeconds(20))
            .build();
        
        HttpClient httpClient = HttpClient.create(provider)
            .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 10000)
            .responseTimeout(Duration.ofSeconds(10))
            .doOnConnected(conn -> 
                conn.addHandlerLast(new ReadTimeoutHandler(10))
                    .addHandlerLast(new WriteTimeoutHandler(10)));
        
        return WebClient.builder()
            .clientConnector(new ReactorClientHttpConnector(httpClient));
    }
}
```

### Thread Pool Monitoring

```java
@Component
@Slf4j
public class ThreadPoolMonitor {
    
    @Autowired
    private ThreadPoolTaskExecutor taskExecutor;
    
    @Scheduled(fixedRate = 60000) // Every minute
    public void monitorThreadPool() {
        ThreadPoolExecutor executor = taskExecutor.getThreadPoolExecutor();
        
        log.info("Thread Pool Stats:");
        log.info("  Active threads: {}", executor.getActiveCount());
        log.info("  Pool size: {}", executor.getPoolSize());
        log.info("  Core pool size: {}", executor.getCorePoolSize());
        log.info("  Max pool size: {}", executor.getMaximumPoolSize());
        log.info("  Queue size: {}", executor.getQueue().size());
        log.info("  Queue remaining capacity: {}", executor.getQueue().remainingCapacity());
        log.info("  Completed tasks: {}", executor.getCompletedTaskCount());
        log.info("  Total tasks: {}", executor.getTaskCount());
        
        // Alert if queue is filling up
        if (executor.getQueue().size() > 80) {
            log.warn("Thread pool queue is filling up! Consider increasing pool size.");
        }
    }
}
```

### Best Practices for Thread Pool Sizing

**CPU-Bound Tasks:**
```
Number of threads = Number of CPU cores
```

**I/O-Bound Tasks:**
```
Number of threads = Number of CPU cores * (1 + Wait time / Service time)
```

**Example calculation:**

```java
@Configuration
public class ThreadPoolCalculator {
    
    public int calculateOptimalThreads() {
        int cpuCores = Runtime.getRuntime().availableProcessors();
        
        // For I/O-bound tasks (e.g., API calls, database queries)
        // Wait time = 80ms, Service time = 20ms
        double ratio = 1 + (80.0 / 20.0); // 5
        
        int optimalThreads = (int) (cpuCores * ratio);
        
        return optimalThreads;
    }
}
```

---

### Connection Pool Tuning

#### HikariCP Configuration (Default in Spring Boot)

**application.yml:**

```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/mydb
    username: user
    password: password
    driver-class-name: org.postgresql.Driver
    
    hikari:
      # Connection pool size
      minimum-idle: 10
      maximum-pool-size: 50
      
      # Connection timeout
      connection-timeout: 30000  # 30 seconds
      
      # Idle timeout
      idle-timeout: 600000  # 10 minutes
      
      # Max lifetime of connection
      max-lifetime: 1800000  # 30 minutes
      
      # Keepalive time
      keepalive-time: 300000  # 5 minutes
      
      # Connection test query
      connection-test-query: SELECT 1
      
      # Pool name
      pool-name: HikariCP-Pool
      
      # Auto-commit
      auto-commit: true
      
      # Leak detection threshold
      leak-detection-threshold: 60000  # 60 seconds
      
      # Validation timeout
      validation-timeout: 5000  # 5 seconds
```

**Programmatic Configuration:**

```java
@Configuration
public class DataSourceConfig {
    
    @Bean
    @ConfigurationProperties(prefix = "spring.datasource.hikari")
    public HikariConfig hikariConfig() {
        HikariConfig config = new HikariConfig();
        
        config.setJdbcUrl("jdbc:postgresql://localhost:5432/mydb");
        config.setUsername("user");
        config.setPassword("password");
        config.setDriverClassName("org.postgresql.Driver");
        
        // Pool size
        config.setMinimumIdle(10);
        config.setMaximumPoolSize(50);
        
        // Timeouts
        config.setConnectionTimeout(30000);
        config.setIdleTimeout(600000);
        config.setMaxLifetime(1800000);
        
        // Performance
        config.setAutoCommit(true);
        config.setCachePrepStmts(true);
        config.setPrepStmtCacheSize(250);
        config.setPrepStmtCacheSqlLimit(2048);
        config.setUseServerPrepStmts(true);
        
        // Monitoring
        config.setLeakDetectionThreshold(60000);
        config.setRegisterMbeans(true);
        
        return config;
    }
    
    @Bean
    public DataSource dataSource(HikariConfig hikariConfig) {
        return new HikariDataSource(hikariConfig);
    }
}
```

### Connection Pool Monitoring

```java
@Component
@Slf4j
public class ConnectionPoolMonitor {
    
    @Autowired
    private DataSource dataSource;
    
    @Scheduled(fixedRate = 60000) // Every minute
    public void monitorConnectionPool() {
        if (dataSource instanceof HikariDataSource) {
            HikariDataSource hikariDS = (HikariDataSource) dataSource;
            HikariPoolMXBean poolMXBean = hikariDS.getHikariPoolMXBean();
            
            log.info("Connection Pool Stats:");
            log.info("  Active connections: {}", poolMXBean.getActiveConnections());
            log.info("  Idle connections: {}", poolMXBean.getIdleConnections());
            log.info("  Total connections: {}", poolMXBean.getTotalConnections());
            log.info("  Threads waiting: {}", poolMXBean.getThreadsAwaitingConnection());
            
            // Alert if connections are exhausted
            if (poolMXBean.getActiveConnections() >= hikariDS.getMaximumPoolSize() * 0.9) {
                log.warn("Connection pool is near capacity! Consider increasing pool size.");
            }
        }
    }
}
```

### Redis Connection Pool

**application.yml:**

```yaml
spring:
  data:
    redis:
      host: localhost
      port: 6379
      password: password
      database: 0
      timeout: 2000ms
      
      lettuce:
        pool:
          max-active: 50    # Maximum connections
          max-idle: 20      # Maximum idle connections
          min-idle: 5       # Minimum idle connections
          max-wait: 10000ms # Maximum wait time for connection
        shutdown-timeout: 100ms
```

**Programmatic Configuration:**

```java
@Configuration
public class RedisConfig {
    
    @Bean
    public LettuceConnectionFactory redisConnectionFactory() {
        // Redis configuration
        RedisStandaloneConfiguration config = new RedisStandaloneConfiguration();
        config.setHostName("localhost");
        config.setPort(6379);
        config.setPassword("password");
        config.setDatabase(0);
        
        // Pool configuration
        GenericObjectPoolConfig<?> poolConfig = new GenericObjectPoolConfig<>();
        poolConfig.setMaxTotal(50);
        poolConfig.setMaxIdle(20);
        poolConfig.setMinIdle(5);
        poolConfig.setMaxWaitMillis(10000);
        poolConfig.setTestOnBorrow(true);
        poolConfig.setTestOnReturn(true);
        poolConfig.setTestWhileIdle(true);
        
        // Lettuce client configuration
        LettucePoolingClientConfiguration clientConfig = 
            LettucePoolingClientConfiguration.builder()
                .poolConfig(poolConfig)
                .commandTimeout(Duration.ofSeconds(2))
                .shutdownTimeout(Duration.ofMillis(100))
                .build();
        
        return new LettuceConnectionFactory(config, clientConfig);
    }
    
    @Bean
    public RedisTemplate<String, Object> redisTemplate(
            LettuceConnectionFactory connectionFactory) {
        
        RedisTemplate<String, Object> template = new RedisTemplate<>();
        template.setConnectionFactory(connectionFactory);
        
        // Serialization
        Jackson2JsonRedisSerializer<Object> serializer = 
            new Jackson2JsonRedisSerializer<>(Object.class);
        
        template.setKeySerializer(new StringRedisSerializer());
        template.setValueSerializer(serializer);
        template.setHashKeySerializer(new StringRedisSerializer());
        template.setHashValueSerializer(serializer);
        
        template.afterPropertiesSet();
        return template;
    }
}
```

### MongoDB Connection Pool

**application.yml:**

```yaml
spring:
  data:
    mongodb:
      uri: mongodb://localhost:27017/mydb
      
      # Connection pool settings
      options:
        max-pool-size: 50
        min-pool-size: 10
        max-wait-time: 10000
        max-connection-idle-time: 60000
        max-connection-life-time: 1800000
        connect-timeout: 10000
        socket-timeout: 5000
```

### Connection Pool Best Practices

1. **Size appropriately**:
   ```
   Pool size = (Number of concurrent requests) × (average query time) / (request time)
   ```

2. **Monitor metrics**: Track active, idle, and waiting connections

3. **Set timeouts**: Prevent hanging connections

4. **Connection validation**: Test connections before use

5. **Leak detection**: Enable to find connection leaks

6. **Prepared statement caching**: Improve performance

---

### Distributed Caching

#### Redis Cache Configuration

**pom.xml:**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
```

**application.yml:**

```yaml
spring:
  cache:
    type: redis
    redis:
      time-to-live: 600000  # 10 minutes
      cache-null-values: false
      use-key-prefix: true
      key-prefix: "myapp:"
  
  data:
    redis:
      host: localhost
      port: 6379
      password: password
      timeout: 2000ms
      lettuce:
        pool:
          max-active: 50
          max-idle: 20
          min-idle: 5
```

**Configuration:**

```java
@Configuration
@EnableCaching
public class CacheConfig {
    
    @Bean
    public RedisCacheConfiguration cacheConfiguration() {
        return RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(10))
            .disableCachingNullValues()
            .serializeKeysWith(
                RedisSerializationContext.SerializationPair.fromSerializer(
                    new StringRedisSerializer()))
            .serializeValuesWith(
                RedisSerializationContext.SerializationPair.fromSerializer(
                    new GenericJackson2JsonRedisSerializer()));
    }
    
    @Bean
    public RedisCacheManager cacheManager(RedisConnectionFactory connectionFactory) {
        // Default cache configuration
        RedisCacheConfiguration defaultConfig = cacheConfiguration();
        
        // Specific cache configurations
        Map<String, RedisCacheConfiguration> cacheConfigurations = new HashMap<>();
        
        // Users cache - 5 minutes TTL
        cacheConfigurations.put("users", 
            defaultConfig.entryTtl(Duration.ofMinutes(5)));
        
        // Products cache - 30 minutes TTL
        cacheConfigurations.put("products", 
            defaultConfig.entryTtl(Duration.ofMinutes(30)));
        
        // Session cache - 1 hour TTL
        cacheConfigurations.put("sessions", 
            defaultConfig.entryTtl(Duration.ofHours(1)));
        
        return RedisCacheManager.builder(connectionFactory)
            .cacheDefaults(defaultConfig)
            .withInitialCacheConfigurations(cacheConfigurations)
            .transactionAware()
            .build();
    }
}
```

### Using Cache Annotations

```java
@Service
@Slf4j
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    // Cache the result
    @Cacheable(value = "users", key = "#id")
    public User getUserById(Long id) {
        log.info("Fetching user from database: {}", id);
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException("User not found"));
    }
    
    // Cache with condition
    @Cacheable(value = "users", key = "#id", condition = "#id > 0")
    public User getUserByIdConditional(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    
    // Cache unless result is null
    @Cacheable(value = "users", key = "#email", unless = "#result == null")
    public User getUserByEmail(String email) {
        log.info("Fetching user by email: {}", email);
        return userRepository.findByEmail(email).orElse(null);
    }
    
    // Update cache
    @CachePut(value = "users", key = "#user.id")
    public User updateUser(User user) {
        log.info("Updating user: {}", user.getId());
        return userRepository.save(user);
    }
    
    // Evict cache entry
    @CacheEvict(value = "users", key = "#id")
    public void deleteUser(Long id) {
        log.info("Deleting user: {}", id);
        userRepository.deleteById(id);
    }
    
    // Evict all entries in cache
    @CacheEvict(value = "users", allEntries = true)
    public void clearUserCache() {
        log.info("Clearing all user cache");
    }
    
    // Multiple cache operations
    @Caching(
        cacheable = {
            @Cacheable(value = "users", key = "#id")
        },
        put = {
            @CachePut(value = "userStats", key = "#id")
        }
    )
    public User getUserWithStats(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
```

### Manual Cache Operations

```java
@Service
@Slf4j
public class CacheService {
    
    @Autowired
    private CacheManager cacheManager;
    
    public void putInCache(String cacheName, String key, Object value) {
        Cache cache = cacheManager.getCache(cacheName);
        if (cache != null) {
            cache.put(key, value);
            log.info("Added to cache: {} - {}", cacheName, key);
        }
    }
    
    public <T> T getFromCache(String cacheName, String key, Class<T> type) {
        Cache cache = cacheManager.getCache(cacheName);
        if (cache != null) {
            Cache.ValueWrapper wrapper = cache.get(key);
            if (wrapper != null) {
                log.info("Cache hit: {} - {}", cacheName, key);
                return type.cast(wrapper.get());
            }
        }
        log.info("Cache miss: {} - {}", cacheName, key);
        return null;
    }
    
    public void evictFromCache(String cacheName, String key) {
        Cache cache = cacheManager.getCache(cacheName);
        if (cache != null) {
            cache.evict(key);
            log.info("Evicted from cache: {} - {}", cacheName, key);
        }
    }
    
    public void clearCache(String cacheName) {
        Cache cache = cacheManager.getCache(cacheName);
        if (cache != null) {
            cache.clear();
            log.info("Cleared cache: {}", cacheName);
        }
    }
    
    public void clearAllCaches() {
        cacheManager.getCacheNames().forEach(cacheName -> {
            Cache cache = cacheManager.getCache(cacheName);
            if (cache != null) {
                cache.clear();
            }
        });
        log.info("Cleared all caches");
    }
}
```

### Cache Warming

```java
@Component
@Slf4j
public class CacheWarmer {
    
    @Autowired
    private ProductRepository productRepository;
    
    @Autowired
    private CacheManager cacheManager;
    
    @EventListener(ApplicationReadyEvent.class)
    public void warmUpCache() {
        log.info("Starting cache warm-up...");
        
        Cache productCache = cacheManager.getCache("products");
        if (productCache != null) {
            // Load popular products
            List<Product> popularProducts = productRepository.findTop100ByOrderByViewsDesc();
            popularProducts.forEach(product -> 
                productCache.put(product.getId(), product));
            
            log.info("Warmed up cache with {} products", popularProducts.size());
        }
    }
    
    @Scheduled(cron = "0 0 */6 * * *") // Every 6 hours
    public void refreshCache() {
        log.info("Refreshing cache...");
        clearAndWarmUpCache();
    }
    
    private void clearAndWarmUpCache() {
        Cache productCache = cacheManager.getCache("products");
        if (productCache != null) {
            productCache.clear();
            warmUpCache();
        }
    }
}
```

### Redis Pub/Sub for Cache Invalidation

```java
@Configuration
public class RedisPubSubConfig {
    
    @Bean
    public RedisMessageListenerContainer messageListenerContainer(
            RedisConnectionFactory connectionFactory,
            CacheInvalidationListener listener) {
        
        RedisMessageListenerContainer container = new RedisMessageListenerContainer();
        container.setConnectionFactory(connectionFactory);
        container.addMessageListener(listener, 
            new PatternTopic("cache:invalidate:*"));
        
        return container;
    }
}

@Component
@Slf4j
public class CacheInvalidationListener implements MessageListener {
    
    @Autowired
    private CacheManager cacheManager;
    
    @Override
    public void onMessage(Message message, byte[] pattern) {
        String channel = new String(message.getChannel());
        String key = new String(message.getBody());
        
        log.info("Received cache invalidation: {} - {}", channel, key);
        
        // Extract cache name from channel
        String cacheName = channel.replace("cache:invalidate:", "");
        
        Cache cache = cacheManager.getCache(cacheName);
        if (cache != null) {
            if ("*".equals(key)) {
                cache.clear();
            } else {
                cache.evict(key);
            }
        }
    }
}

@Service
public class CacheInvalidationService {
    
    @Autowired
    private RedisTemplate<String, String> redisTemplate;
    
    public void invalidateCache(String cacheName, String key) {
        redisTemplate.convertAndSend("cache:invalidate:" + cacheName, key);
    }
    
    public void invalidateAllCache(String cacheName) {
        redisTemplate.convertAndSend("cache:invalidate:" + cacheName, "*");
    }
}
```

### Hazelcast Distributed Cache

**pom.xml:**

```xml
<dependency>
    <groupId>com.hazelcast</groupId>
    <artifactId>hazelcast-spring</artifactId>
</dependency>
```

**Configuration:**

```java
@Configuration
@EnableCaching
public class HazelcastConfig {
    
    @Bean
    public Config hazelcastConfig() {
        Config config = new Config();
        config.setInstanceName("hazelcast-instance");
        
        // Network configuration
        NetworkConfig networkConfig = config.getNetworkConfig();
        networkConfig.setPort(5701);
        networkConfig.setPortAutoIncrement(true);
        
        // Join configuration
        JoinConfig joinConfig = networkConfig.getJoin();
        joinConfig.getMulticastConfig().setEnabled(false);
        joinConfig.getTcpIpConfig()
            .setEnabled(true)
            .addMember("localhost");
        
        // Map (cache) configuration
        MapConfig userCacheConfig = new MapConfig();
        userCacheConfig.setName("users");
        userCacheConfig.setTimeToLiveSeconds(300); // 5 minutes
        userCacheConfig.setMaxIdleSeconds(180);
        userCacheConfig.setEvictionConfig(new EvictionConfig()
            .setEvictionPolicy(EvictionPolicy.LRU)
            .setMaxSizePolicy(MaxSizePolicy.PER_NODE)
            .setSize(10000));
        
        config.addMapConfig(userCacheConfig);
        
        return config;
    }
    
    @Bean
    public HazelcastInstance hazelcastInstance(Config config) {
        return Hazelcast.newHazelcastInstance(config);
    }
    
    @Bean
    public CacheManager cacheManager(HazelcastInstance hazelcastInstance) {
        return new HazelcastCacheManager(hazelcastInstance);
    }
}
```

### Cache Monitoring

```java
@Component
@Slf4j
public class CacheMonitor {
    
    @Autowired
    private CacheManager cacheManager;
    
    @Autowired
    private MeterRegistry meterRegistry;
    
    @PostConstruct
    public void setupMetrics() {
        cacheManager.getCacheNames().forEach(cacheName -> {
            Cache cache = cacheManager.getCache(cacheName);
            if (cache instanceof RedisCache) {
                // Register cache metrics
                Gauge.builder("cache.size", cache, c -> getCacheSize(c))
                    .tag("cache", cacheName)
                    .register(meterRegistry);
            }
        });
    }
    
    private double getCacheSize(Cache cache) {
        // Implementation depends on cache provider
        return 0;
    }
    
    @Scheduled(fixedRate = 300000) // Every 5 minutes
    public void logCacheStatistics() {
        cacheManager.getCacheNames().forEach(cacheName -> {
            Cache cache = cacheManager.getCache(cacheName);
            if (cache != null) {
                log.info("Cache stats for '{}': {}", cacheName, cache.getName());
            }
        });
    }
}
```

---

### API Rate Limiting

#### Bucket4j Implementation

**pom.xml:**

```xml
<dependency>
    <groupId>com.github.vladimir-bukhtoyarov</groupId>
    <artifactId>bucket4j-core</artifactId>
    <version>8.1.0</version>
</dependency>

<dependency>
    <groupId>com.github.vladimir-bukhtoyarov</groupId>
    <artifactId>bucket4j-redis</artifactId>
    <version>8.1.0</version>
</dependency>
```

**Rate Limiter Configuration:**

```java
@Configuration
public class RateLimitConfig {
    
    @Bean
    public CacheManager rateLimitCacheManager(RedisConnectionFactory connectionFactory) {
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofHours(1))
            .serializeKeysWith(
                RedisSerializationContext.SerializationPair.fromSerializer(
                    new StringRedisSerializer()))
            .serializeValuesWith(
                RedisSerializationContext.SerializationPair.fromSerializer(
                    new GenericJackson2JsonRedisSerializer()));
        
        return RedisCacheManager.builder(connectionFactory)
            .cacheDefaults(config)
            .build();
    }
}
```

**Rate Limit Service:**

```java
@Service
@Slf4j
public class RateLimitService {
    
    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();
    
    public Bucket resolveBucket(String key, int capacity, int refillTokens, Duration refillDuration) {
        return buckets.computeIfAbsent(key, k -> createBucket(capacity, refillTokens, refillDuration));
    }
    
    private Bucket createBucket(int capacity, int refillTokens, Duration refillDuration) {
        Bandwidth limit = Bandwidth.builder()
            .capacity(capacity)
            .refillGreedy(refillTokens, refillDuration)
            .build();
        
        return Bucket.builder()
            .addLimit(limit)
            .build();
    }
    
    public boolean tryConsume(String key, int tokens) {
        // Default: 100 requests per minute
        Bucket bucket = resolveBucket(key, 100, 100, Duration.ofMinutes(1));
        return bucket.tryConsume(tokens);
    }
    
    public ConsumptionProbe tryConsumeAndReturnRemaining(String key, int tokens) {
        Bucket bucket = resolveBucket(key, 100, 100, Duration.ofMinutes(1));
        return bucket.tryConsumeAndReturnRemaining(tokens);
    }
}
```

**Rate Limit Interceptor:**

```java
@Component
@Slf4j
public class RateLimitInterceptor implements HandlerInterceptor {
    
    @Autowired
    private RateLimitService rateLimitService;
    
    @Override
    public boolean preHandle(HttpServletRequest request, 
                            HttpServletResponse response, 
                            Object handler) throws Exception {
        
        // Get client identifier (IP, user ID, API key, etc.)
        String clientId = getClientIdentifier(request);
        
        // Check rate limit
        ConsumptionProbe probe = rateLimitService.tryConsumeAndReturnRemaining(clientId, 1);
        
        if (probe.isConsumed()) {
            // Add rate limit headers
            response.addHeader("X-Rate-Limit-Remaining", 
                String.valueOf(probe.getRemainingTokens()));
            response.addHeader("X-Rate-Limit-Retry-After-Seconds", 
                String.valueOf(probe.getNanosToWaitForRefill() / 1_000_000_000));
            
            return true;
        } else {
            // Rate limit exceeded
            response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
            response.addHeader("X-Rate-Limit-Retry-After-Seconds", 
                String.valueOf(probe.getNanosToWaitForRefill() / 1_000_000_000));
            
            log.warn("Rate limit exceeded for client: {}", clientId);
            
            response.getWriter().write("{\"error\":\"Rate limit exceeded\"}");
            return false;
        }
    }
    
    private String getClientIdentifier(HttpServletRequest request) {
        // Try to get user ID from security context
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            return "user:" + auth.getName();
        }
        
        // Fall back to IP address
        String clientIp = request.getHeader("X-Forwarded-For");
        if (clientIp == null || clientIp.isEmpty()) {
            clientIp = request.getRemoteAddr();
        }
        
        return "ip:" + clientIp;
    }
}
```

**Register Interceptor:**

```java
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    
    @Autowired
    private RateLimitInterceptor rateLimitInterceptor;
    
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(rateLimitInterceptor)
            .addPathPatterns("/api/**")
            .excludePathPatterns("/api/public/**");
    }
}
```

### Custom Rate Limit Annotation

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface RateLimit {
    
    int capacity() default 100;
    
    int refillTokens() default 100;
    
    long refillDuration() default 60; // seconds
    
    String key() default ""; // SpEL expression
}
```

**Aspect for Rate Limit Annotation:**

```java
@Aspect
@Component
@Slf4j
public class RateLimitAspect {
    
    @Autowired
    private RateLimitService rateLimitService;
    
    @Around("@annotation(rateLimit)")
    public Object checkRateLimit(ProceedingJoinPoint joinPoint, RateLimit rateLimit) 
            throws Throwable {
        
        // Get client identifier
        HttpServletRequest request = 
            ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
                .getRequest();
        
        String clientId = getClientId(request, rateLimit.key());
        String methodKey = joinPoint.getSignature().toShortString();
        String rateLimitKey = clientId + ":" + methodKey;
        
        // Create bucket with custom settings
        Bucket bucket = rateLimitService.resolveBucket(
            rateLimitKey,
            rateLimit.capacity(),
            rateLimit.refillTokens(),
            Duration.ofSeconds(rateLimit.refillDuration())
        );
        
        ConsumptionProbe probe = bucket.tryConsumeAndReturnRemaining(1);
        
        if (probe.isConsumed()) {
            return joinPoint.proceed();
        } else {
            long waitTime = probe.getNanosToWaitForRefill() / 1_000_000_000;
            log.warn("Rate limit exceeded for {}, wait {} seconds", rateLimitKey, waitTime);
            
            throw new RateLimitExceededException(
                "Rate limit exceeded. Try again in " + waitTime + " seconds");
        }
    }
    
    private String getClientId(HttpServletRequest request, String keyExpression) {
        if (!keyExpression.isEmpty()) {
            // Evaluate SpEL expression
            return keyExpression;
        }
        
        // Default to IP address
        return request.getRemoteAddr();
    }
}
```

**Usage:**

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping
    @RateLimit(capacity = 50, refillTokens = 50, refillDuration = 60)
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
    @PostMapping
    @RateLimit(capacity = 10, refillTokens = 10, refillDuration = 60)
    public User createUser(@RequestBody User user) {
        return userService.create(user);
    }
}
```

### Redis-based Rate Limiting

```java
@Service
@Slf4j
public class RedisRateLimiter {
    
    @Autowired
    private StringRedisTemplate redisTemplate;
    
    public boolean isAllowed(String key, int maxRequests, Duration window) {
        String redisKey = "rate_limit:" + key;
        long currentTime = System.currentTimeMillis();
        long windowStart = currentTime - window.toMillis();
        
        try {
            // Remove old entries
            redisTemplate.opsForZSet().removeRangeByScore(redisKey, 0, windowStart);
            
            // Count requests in current window
            Long count = redisTemplate.opsForZSet().zCard(redisKey);
            
            if (count != null && count < maxRequests) {
                // Add current request
                redisTemplate.opsForZSet().add(redisKey, 
                    UUID.randomUUID().toString(), currentTime);
                
                // Set expiration
                redisTemplate.expire(redisKey, window);
                
                return true;
            }
            
            return false;
            
        } catch (Exception e) {
            log.error("Error checking rate limit", e);
            return true; // Fail open
        }
    }
    
    public RateLimitInfo getRateLimitInfo(String key, int maxRequests, Duration window) {
        String redisKey = "rate_limit:" + key;
        long currentTime = System.currentTimeMillis();
        long windowStart = currentTime - window.toMillis();
        
        // Remove old entries
        redisTemplate.opsForZSet().removeRangeByScore(redisKey, 0, windowStart);
        
        // Count requests
        Long count = redisTemplate.opsForZSet().zCard(redisKey);
        long remaining = maxRequests - (count != null ? count : 0);
        
        // Get oldest request time
        Set<ZSetOperations.TypedTuple<String>> oldest = 
            redisTemplate.opsForZSet().rangeWithScores(redisKey, 0, 0);
        
        long resetTime = window.toMillis();
        if (oldest != null && !oldest.isEmpty()) {
            Double oldestScore = oldest.iterator().next().getScore();
            if (oldestScore != null) {
                resetTime = (long) (oldestScore + window.toMillis() - currentTime);
            }
        }
        
        return new RateLimitInfo(maxRequests, Math.max(0, remaining), resetTime);
    }
}

@Data
@AllArgsConstructor
public class RateLimitInfo {
    private long limit;
    private long remaining;
    private long resetInMillis;
}
```

### Sliding Window Rate Limiter

```java
@Service
@Slf4j
public class SlidingWindowRateLimiter {
    
    @Autowired
    private RedisTemplate<String, String> redisTemplate;
    
    public boolean allowRequest(String userId, int maxRequests, Duration window) {
        String key = "rate_limit:" + userId;
        long now = System.currentTimeMillis();
        long windowStart = now - window.toMillis();
        
        return redisTemplate.execute(new SessionCallback<Boolean>() {
            @Override
            public Boolean execute(RedisOperations operations) throws DataAccessException {
                operations.multi();
                
                // Remove old entries
                operations.opsForZSet().removeRangeByScore(key, 0, windowStart);
                
                // Count requests in window
                operations.opsForZSet().zCard(key);
                
                // Add current request
                operations.opsForZSet().add(key, UUID.randomUUID().toString(), now);
                
                // Set expiration
                operations.expire(key, window);
                
                List<Object> results = operations.exec();
                
                if (results != null && results.size() >= 2) {
                    Long count = (Long) results.get(1);
                    return count != null && count < maxRequests;
                }
                
                return false;
            }
        });
    }
}
```

---

### Horizontal Scaling Patterns

#### Stateless Application Design

```java
@RestController
@RequestMapping("/api")
public class StatelessController {
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private JwtTokenProvider tokenProvider;
    
    // ✅ GOOD: Stateless - all state in JWT token
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        User user = userService.authenticate(request.getUsername(), request.getPassword());
        
        String token = tokenProvider.createToken(user);
        
        return ResponseEntity.ok(new LoginResponse(token));
    }
    
    // ✅ GOOD: Gets user from token, not session
    @GetMapping("/profile")
    public ResponseEntity<User> getProfile(@RequestHeader("Authorization") String token) {
        String jwt = token.replace("Bearer ", "");
        String username = tokenProvider.getUsernameFromToken(jwt);
        
        User user = userService.findByUsername(username);
        return ResponseEntity.ok(user);
    }
}
```

### Session Management with Redis

**application.yml:**

```yaml
spring:
  session:
    store-type: redis
    redis:
      namespace: spring:session
      flush-mode: on_save
    timeout: 1800s  # 30 minutes
```

**Configuration:**

```java
@Configuration
@EnableRedisHttpSession(maxInactiveIntervalInSeconds = 1800)
public class SessionConfig {
    
    @Bean
    public LettuceConnectionFactory connectionFactory() {
        RedisStandaloneConfiguration config = new RedisStandaloneConfiguration();
        config.setHostName("localhost");
        config.setPort(6379);
        
        return new LettuceConnectionFactory(config);
    }
    
    @Bean
    public HttpSessionIdResolver httpSessionIdResolver() {
        return HeaderHttpSessionIdResolver.xAuthToken();
    }
}
```

### Load Balancer Configuration

**Nginx Configuration:**

```nginx
upstream backend {
    least_conn;  # Load balancing method
    
    server app1:8080 weight=3 max_fails=3 fail_timeout=30s;
    server app2:8080 weight=3 max_fails=3 fail_timeout=30s;
    server app3:8080 weight=2 max_fails=3 fail_timeout=30s;
    
    keepalive 32;
}

server {
    listen 80;
    server_name api.example.com;
    
    location / {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        
        # Headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Timeouts
        proxy_connect_timeout 10s;
        proxy_send_timeout 30s;
        proxy_read_timeout 30s;
        
        # Keep-alive
        proxy_set_header Connection "";
        
        # Health check
        proxy_next_upstream error timeout http_500 http_502 http_503;
    }
    
    location /health {
        proxy_pass http://backend/actuator/health;
        access_log off;
    }
}
```

### Service Discovery with Eureka

**pom.xml:**

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

**application.yml:**

```yaml
spring:
  application:
    name: user-service

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/
    register-with-eureka: true
    fetch-registry: true
  instance:
    preferIpAddress: true
    lease-renewal-interval-in-seconds: 30
    lease-expiration-duration-in-seconds: 90
```

**Main Application:**

```java
@SpringBootApplication
@EnableEurekaClient
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### Database Scaling Patterns

**Read Replicas Configuration:**

```java
@Configuration
public class DataSourceConfig {
    
    @Bean
    @Primary
    public DataSource dataSource() {
        return new LazyConnectionDataSourceProxy(routingDataSource());
    }
    
    @Bean
    public DataSource routingDataSource() {
        RoutingDataSource routingDataSource = new RoutingDataSource();
        
        Map<Object, Object> dataSourceMap = new HashMap<>();
        dataSourceMap.put(DataSourceType.WRITE, writeDataSource());
        dataSourceMap.put(DataSourceType.READ, readDataSource());
        
        routingDataSource.setTargetDataSources(dataSourceMap);
        routingDataSource.setDefaultTargetDataSource(writeDataSource());
        
        return routingDataSource;
    }
    
    @Bean
    public DataSource writeDataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:postgresql://master-db:5432/mydb");
        config.setUsername("user");
        config.setPassword("password");
        config.setMaximumPoolSize(20);
        return new HikariDataSource(config);
    }
    
    @Bean
    public DataSource readDataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:postgresql://replica-db:5432/mydb");
        config.setUsername("user");
        config.setPassword("password");
        config.setMaximumPoolSize(50);
        config.setReadOnly(true);
        return new HikariDataSource(config);
    }
}

public class RoutingDataSource extends AbstractRoutingDataSource {
    
    @Override
    protected Object determineCurrentLookupKey() {
        return DataSourceContextHolder.getDataSourceType();
    }
}

public enum DataSourceType {
    READ, WRITE
}

public class DataSourceContextHolder {
    
    private static final ThreadLocal<DataSourceType> contextHolder = 
        new ThreadLocal<>();
    
    public static void setDataSourceType(DataSourceType type) {
        contextHolder.set(type);
    }
    
    public static DataSourceType getDataSourceType() {
        return contextHolder.get() != null ? contextHolder.get() : DataSourceType.WRITE;
    }
    
    public static void clearDataSourceType() {
        contextHolder.remove();
    }
}
```

**Read-Only Annotation:**

```java
@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface ReadOnly {
}

@Aspect
@Component
public class DataSourceAspect {
    
    @Before("@annotation(readOnly)")
    public void setReadDataSource(ReadOnly readOnly) {
        DataSourceContextHolder.setDataSourceType(DataSourceType.READ);
    }
    
    @Before("@annotation(org.springframework.transaction.annotation.Transactional)")
    public void setWriteDataSource() {
        if (DataSourceContextHolder.getDataSourceType() == null) {
            DataSourceContextHolder.setDataSourceType(DataSourceType.WRITE);
        }
    }
    
    @After("@annotation(readOnly) || @annotation(org.springframework.transaction.annotation.Transactional)")
    public void clearDataSource() {
        DataSourceContextHolder.clearDataSourceType();
    }
}
```

**Usage:**

```java
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    // Write to master
    @Transactional
    public User createUser(User user) {
        return userRepository.save(user);
    }
    
    // Read from replica
    @ReadOnly
    @Transactional(readOnly = true)
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
```

### Kubernetes Deployment

**deployment.yaml:**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  labels:
    app: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:1.0.0
        ports:
        - containerPort: 8080
        
        # Resource limits
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
        
        # Health checks
        livenessProbe:
          httpGet:
            path: /actuator/health/liveness
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 3
        
        readinessProbe:
          httpGet:
            path: /actuator/health/readiness
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 3
        
        # Environment variables
        env:
        - name: SPRING_PROFILES_ACTIVE
          value: "production"
        - name: SPRING_DATASOURCE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
        - name: SPRING_DATASOURCE_USERNAME
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: username
        - name: SPRING_DATASOURCE_PASSWORD
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: password

---
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
  type: LoadBalancer

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

### Health Endpoints for Kubernetes

```java
@RestController
@RequestMapping("/actuator/health")
public class CustomHealthController {
    
    @Autowired
    private HealthEndpoint healthEndpoint;
    
    @GetMapping("/liveness")
    public ResponseEntity<Map<String, Object>> liveness() {
        // Check if app is alive
        Map<String, Object> response = new HashMap<>();
        response.put("status", "UP");
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/readiness")
    public ResponseEntity<Map<String, Object>> readiness() {
        // Check if app is ready to serve traffic
        Health health = healthEndpoint.health();
        
        if (health.getStatus() == Status.UP) {
            Map<String, Object> response = new HashMap<>();
            response.put("status", "UP");
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                .body(Collections.singletonMap("status", "DOWN"));
        }
    }
}
```

### Circuit Breaker with Resilience4j

**pom.xml:**

```xml
<dependency>
    <groupId>io.github.resilience4j</groupId>
    <artifactId>resilience4j-spring-boot3</artifactId>
</dependency>
```

**application.yml:**

```yaml
resilience4j:
  circuitbreaker:
    instances:
      externalService:
        registerHealthIndicator: true
        slidingWindowSize: 10
        minimumNumberOfCalls: 5
        permittedNumberOfCallsInHalfOpenState: 3
        automaticTransitionFromOpenToHalfOpenEnabled: true
        waitDurationInOpenState: 10s
        failureRateThreshold: 50
        eventConsumerBufferSize: 10
```

**Usage:**

```java
@Service
@Slf4j
public class ExternalService {
    
    @CircuitBreaker(name = "externalService", fallbackMethod = "fallback")
    public String callExternalApi() {
        log.info("Calling external API");
        // API call logic
        return restTemplate.getForObject("https://api.example.com/data", String.class);
    }
    
    private String fallback(Exception e) {
        log.error("Circuit breaker fallback", e);
        return "Fallback response";
    }
}
```

This comprehensive Performance & Scaling section covers health checks, metrics, thread pool tuning, connection pool optimization, distributed caching, API rate limiting, and horizontal scaling patterns!

---

## 15. Real-World Integrations

### JWT + Refresh Token

### Dependencies

**pom.xml:**

```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.12.3</version>
</dependency>

<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.12.3</version>
    <scope>runtime</scope>
</dependency>

<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.12.3</version>
    <scope>runtime</scope>
</dependency>
```

### Configuration

**application.yml:**

```yaml
jwt:
  secret: ${JWT_SECRET:mySecretKeyForJWTTokenGenerationMustBeLongEnough}
  access-token-expiration: 900000      # 15 minutes
  refresh-token-expiration: 604800000  # 7 days
  issuer: my-app
```

### JWT Token Provider

```java
@Component
@Slf4j
public class JwtTokenProvider {
    
    private final SecretKey secretKey;
    private final long accessTokenExpiration;
    private final long refreshTokenExpiration;
    private final String issuer;
    
    public JwtTokenProvider(
            @Value("${jwt.secret}") String secret,
            @Value("${jwt.access-token-expiration}") long accessTokenExpiration,
            @Value("${jwt.refresh-token-expiration}") long refreshTokenExpiration,
            @Value("${jwt.issuer}") String issuer) {
        
        this.secretKey = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
        this.accessTokenExpiration = accessTokenExpiration;
        this.refreshTokenExpiration = refreshTokenExpiration;
        this.issuer = issuer;
    }
    
    public String generateAccessToken(String username, List<String> roles) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + accessTokenExpiration);
        
        return Jwts.builder()
            .subject(username)
            .claim("roles", roles)
            .claim("type", "access")
            .issuer(issuer)
            .issuedAt(now)
            .expiration(expiryDate)
            .signWith(secretKey)
            .compact();
    }
    
    public String generateRefreshToken(String username) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + refreshTokenExpiration);
        
        return Jwts.builder()
            .subject(username)
            .claim("type", "refresh")
            .issuer(issuer)
            .issuedAt(now)
            .expiration(expiryDate)
            .signWith(secretKey)
            .compact();
    }
    
    public String getUsernameFromToken(String token) {
        Claims claims = Jwts.parser()
            .verifyWith(secretKey)
            .build()
            .parseSignedClaims(token)
            .getPayload();
        
        return claims.getSubject();
    }
    
    public List<String> getRolesFromToken(String token) {
        Claims claims = Jwts.parser()
            .verifyWith(secretKey)
            .build()
            .parseSignedClaims(token)
            .getPayload();
        
        return claims.get("roles", List.class);
    }
    
    public boolean validateToken(String token) {
        try {
            Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token);
            
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            log.error("Invalid JWT token: {}", e.getMessage());
            return false;
        }
    }
    
    public boolean isTokenExpired(String token) {
        try {
            Claims claims = Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();
            
            return claims.getExpiration().before(new Date());
        } catch (JwtException e) {
            return true;
        }
    }
    
    public String getTokenType(String token) {
        Claims claims = Jwts.parser()
            .verifyWith(secretKey)
            .build()
            .parseSignedClaims(token)
            .getPayload();
        
        return claims.get("type", String.class);
    }
}
```

### Refresh Token Entity

```java
@Entity
@Table(name = "refresh_tokens")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RefreshToken {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String token;
    
    @Column(nullable = false)
    private String username;
    
    @Column(nullable = false)
    private LocalDateTime expiryDate;
    
    @Column(nullable = false)
    private LocalDateTime createdAt;
    
    private String ipAddress;
    
    private String userAgent;
    
    private boolean revoked;
    
    public boolean isExpired() {
        return LocalDateTime.now().isAfter(expiryDate);
    }
}
```

### Refresh Token Repository

```java
@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    
    Optional<RefreshToken> findByToken(String token);
    
    List<RefreshToken> findByUsername(String username);
    
    void deleteByUsername(String username);
    
    void deleteByExpiryDateBefore(LocalDateTime date);
    
    @Modifying
    @Query("UPDATE RefreshToken rt SET rt.revoked = true WHERE rt.username = :username")
    void revokeAllByUsername(@Param("username") String username);
}
```

### Refresh Token Service

```java
@Service
@Slf4j
@Transactional
public class RefreshTokenService {
    
    @Autowired
    private RefreshTokenRepository refreshTokenRepository;
    
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    
    @Value("${jwt.refresh-token-expiration}")
    private long refreshTokenExpiration;
    
    public RefreshToken createRefreshToken(String username, String ipAddress, String userAgent) {
        // Revoke old tokens (optional - single device login)
        // revokeUserTokens(username);
        
        String token = jwtTokenProvider.generateRefreshToken(username);
        
        RefreshToken refreshToken = RefreshToken.builder()
            .token(token)
            .username(username)
            .createdAt(LocalDateTime.now())
            .expiryDate(LocalDateTime.now().plusSeconds(refreshTokenExpiration / 1000))
            .ipAddress(ipAddress)
            .userAgent(userAgent)
            .revoked(false)
            .build();
        
        return refreshTokenRepository.save(refreshToken);
    }
    
    public RefreshToken verifyRefreshToken(String token) {
        RefreshToken refreshToken = refreshTokenRepository.findByToken(token)
            .orElseThrow(() -> new TokenException("Refresh token not found"));
        
        if (refreshToken.isRevoked()) {
            throw new TokenException("Refresh token has been revoked");
        }
        
        if (refreshToken.isExpired()) {
            refreshTokenRepository.delete(refreshToken);
            throw new TokenException("Refresh token has expired");
        }
        
        return refreshToken;
    }
    
    public void revokeRefreshToken(String token) {
        RefreshToken refreshToken = refreshTokenRepository.findByToken(token)
            .orElseThrow(() -> new TokenException("Refresh token not found"));
        
        refreshToken.setRevoked(true);
        refreshTokenRepository.save(refreshToken);
    }
    
    public void revokeUserTokens(String username) {
        refreshTokenRepository.revokeAllByUsername(username);
    }
    
    public void deleteExpiredTokens() {
        refreshTokenRepository.deleteByExpiryDateBefore(LocalDateTime.now());
    }
}
```

### Authentication Service

```java
@Service
@Slf4j
public class AuthenticationService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    
    @Autowired
    private RefreshTokenService refreshTokenService;
    
    public AuthenticationResponse login(LoginRequest request, String ipAddress, String userAgent) {
        // Authenticate user
        User user = userRepository.findByUsername(request.getUsername())
            .orElseThrow(() -> new BadCredentialsException("Invalid credentials"));
        
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("Invalid credentials");
        }
        
        if (!user.isEnabled()) {
            throw new AccountDisabledException("Account is disabled");
        }
        
        // Generate tokens
        List<String> roles = user.getRoles().stream()
            .map(Role::getName)
            .collect(Collectors.toList());
        
        String accessToken = jwtTokenProvider.generateAccessToken(user.getUsername(), roles);
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(
            user.getUsername(), ipAddress, userAgent);
        
        log.info("User logged in: {}", user.getUsername());
        
        return AuthenticationResponse.builder()
            .accessToken(accessToken)
            .refreshToken(refreshToken.getToken())
            .tokenType("Bearer")
            .expiresIn(15 * 60) // 15 minutes in seconds
            .username(user.getUsername())
            .roles(roles)
            .build();
    }
    
    public AuthenticationResponse refreshToken(String refreshToken) {
        // Verify refresh token
        RefreshToken token = refreshTokenService.verifyRefreshToken(refreshToken);
        
        // Get user
        User user = userRepository.findByUsername(token.getUsername())
            .orElseThrow(() -> new UserNotFoundException("User not found"));
        
        // Generate new access token
        List<String> roles = user.getRoles().stream()
            .map(Role::getName)
            .collect(Collectors.toList());
        
        String accessToken = jwtTokenProvider.generateAccessToken(user.getUsername(), roles);
        
        log.info("Token refreshed for user: {}", user.getUsername());
        
        return AuthenticationResponse.builder()
            .accessToken(accessToken)
            .refreshToken(refreshToken) // Return same refresh token
            .tokenType("Bearer")
            .expiresIn(15 * 60)
            .username(user.getUsername())
            .roles(roles)
            .build();
    }
    
    public void logout(String refreshToken) {
        refreshTokenService.revokeRefreshToken(refreshToken);
        log.info("User logged out");
    }
    
    public void logoutAll(String username) {
        refreshTokenService.revokeUserTokens(username);
        log.info("All sessions logged out for user: {}", username);
    }
}
```

### Authentication Controller

```java
@RestController
@RequestMapping("/api/auth")
@Slf4j
public class AuthenticationController {
    
    @Autowired
    private AuthenticationService authenticationService;
    
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody @Valid LoginRequest request,
            HttpServletRequest httpRequest) {
        
        String ipAddress = getClientIp(httpRequest);
        String userAgent = httpRequest.getHeader("User-Agent");
        
        AuthenticationResponse response = authenticationService.login(
            request, ipAddress, userAgent);
        
        return ResponseEntity.ok(response);
    }
    
    @PostMapping("/refresh")
    public ResponseEntity<AuthenticationResponse> refresh(
            @RequestBody RefreshTokenRequest request) {
        
        AuthenticationResponse response = authenticationService
            .refreshToken(request.getRefreshToken());
        
        return ResponseEntity.ok(response);
    }
    
    @PostMapping("/logout")
    public ResponseEntity<Void> logout(@RequestBody RefreshTokenRequest request) {
        authenticationService.logout(request.getRefreshToken());
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("/logout-all")
    public ResponseEntity<Void> logoutAll() {
        String username = SecurityContextHolder.getContext()
            .getAuthentication().getName();
        
        authenticationService.logoutAll(username);
        return ResponseEntity.ok().build();
    }
    
    private String getClientIp(HttpServletRequest request) {
        String xForwardedFor = request.getHeader("X-Forwarded-For");
        if (xForwardedFor != null && !xForwardedFor.isEmpty()) {
            return xForwardedFor.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }
}
```

### JWT Authentication Filter

```java
@Component
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    
    @Autowired
    private UserDetailsService userDetailsService;
    
    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {
        
        try {
            String jwt = getJwtFromRequest(request);
            
            if (jwt != null && jwtTokenProvider.validateToken(jwt)) {
                String username = jwtTokenProvider.getUsernameFromToken(jwt);
                
                UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                
                UsernamePasswordAuthenticationToken authentication = 
                    new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                
                authentication.setDetails(
                    new WebAuthenticationDetailsSource().buildDetails(request));
                
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception e) {
            log.error("Could not set user authentication", e);
        }
        
        filterChain.doFilter(request, response);
    }
    
    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        
        return null;
    }
}
```

### DTOs

```java
@Data
public class LoginRequest {
    @NotBlank(message = "Username is required")
    private String username;
    
    @NotBlank(message = "Password is required")
    private String password;
}

@Data
public class RefreshTokenRequest {
    @NotBlank(message = "Refresh token is required")
    private String refreshToken;
}

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String accessToken;
    private String refreshToken;
    private String tokenType;
    private long expiresIn;
    private String username;
    private List<String> roles;
}
```

### Cleanup Expired Tokens

```java
@Component
@Slf4j
public class TokenCleanupScheduler {
    
    @Autowired
    private RefreshTokenService refreshTokenService;
    
    @Scheduled(cron = "0 0 2 * * ?") // Every day at 2 AM
    public void cleanupExpiredTokens() {
        log.info("Starting cleanup of expired tokens");
        refreshTokenService.deleteExpiredTokens();
        log.info("Expired tokens cleanup completed");
    }
}
```

---

### Cloud Storage (AWS S3)

#### Dependencies

**pom.xml:**

```xml
<dependency>
    <groupId>software.amazon.awssdk</groupId>
    <artifactId>s3</artifactId>
    <version>2.20.0</version>
</dependency>
```

### Configuration

**application.yml:**

```yaml
aws:
  s3:
    access-key: ${AWS_ACCESS_KEY}
    secret-key: ${AWS_SECRET_KEY}
    region: us-east-1
    bucket-name: my-app-bucket
    endpoint: https://s3.us-east-1.amazonaws.com
```

### S3 Configuration

```java
@Configuration
public class S3Config {
    
    @Value("${aws.s3.access-key}")
    private String accessKey;
    
    @Value("${aws.s3.secret-key}")
    private String secretKey;
    
    @Value("${aws.s3.region}")
    private String region;
    
    @Bean
    public S3Client s3Client() {
        AwsBasicCredentials credentials = AwsBasicCredentials.create(accessKey, secretKey);
        
        return S3Client.builder()
            .region(Region.of(region))
            .credentialsProvider(StaticCredentialsProvider.create(credentials))
            .build();
    }
    
    @Bean
    public S3Presigner s3Presigner() {
        AwsBasicCredentials credentials = AwsBasicCredentials.create(accessKey, secretKey);
        
        return S3Presigner.builder()
            .region(Region.of(region))
            .credentialsProvider(StaticCredentialsProvider.create(credentials))
            .build();
    }
}
```

### S3 Service

```java
@Service
@Slf4j
public class S3Service {
    
    @Autowired
    private S3Client s3Client;
    
    @Autowired
    private S3Presigner s3Presigner;
    
    @Value("${aws.s3.bucket-name}")
    private String bucketName;
    
    // Upload file
    public String uploadFile(MultipartFile file) throws IOException {
        String fileName = generateFileName(file.getOriginalFilename());
        String key = "uploads/" + fileName;
        
        PutObjectRequest putObjectRequest = PutObjectRequest.builder()
            .bucket(bucketName)
            .key(key)
            .contentType(file.getContentType())
            .contentLength(file.getSize())
            .build();
        
        s3Client.putObject(putObjectRequest, 
            RequestBody.fromBytes(file.getBytes()));
        
        log.info("File uploaded to S3: {}", key);
        
        return key;
    }
    
    // Upload file with metadata
    public String uploadFileWithMetadata(MultipartFile file, Map<String, String> metadata) 
            throws IOException {
        
        String fileName = generateFileName(file.getOriginalFilename());
        String key = "uploads/" + fileName;
        
        PutObjectRequest putObjectRequest = PutObjectRequest.builder()
            .bucket(bucketName)
            .key(key)
            .contentType(file.getContentType())
            .contentLength(file.getSize())
            .metadata(metadata)
            .build();
        
        s3Client.putObject(putObjectRequest, 
            RequestBody.fromBytes(file.getBytes()));
        
        log.info("File uploaded to S3 with metadata: {}", key);
        
        return key;
    }
    
    // Download file
    public byte[] downloadFile(String key) {
        GetObjectRequest getObjectRequest = GetObjectRequest.builder()
            .bucket(bucketName)
            .key(key)
            .build();
        
        ResponseBytes<GetObjectResponse> objectBytes = 
            s3Client.getObjectAsBytes(getObjectRequest);
        
        log.info("File downloaded from S3: {}", key);
        
        return objectBytes.asByteArray();
    }
    
    // Download file as stream
    public InputStream downloadFileAsStream(String key) {
        GetObjectRequest getObjectRequest = GetObjectRequest.builder()
            .bucket(bucketName)
            .key(key)
            .build();
        
        ResponseInputStream<GetObjectResponse> objectStream = 
            s3Client.getObject(getObjectRequest);
        
        log.info("File stream downloaded from S3: {}", key);
        
        return objectStream;
    }
    
    // Delete file
    public void deleteFile(String key) {
        DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder()
            .bucket(bucketName)
            .key(key)
            .build();
        
        s3Client.deleteObject(deleteObjectRequest);
        
        log.info("File deleted from S3: {}", key);
    }
    
    // Generate presigned URL for download
    public String generatePresignedDownloadUrl(String key, Duration expiration) {
        GetObjectRequest getObjectRequest = GetObjectRequest.builder()
            .bucket(bucketName)
            .key(key)
            .build();
        
        GetObjectPresignRequest presignRequest = GetObjectPresignRequest.builder()
            .getObjectRequest(getObjectRequest)
            .signatureDuration(expiration)
            .build();
        
        PresignedGetObjectRequest presignedRequest = 
            s3Presigner.presignGetObject(presignRequest);
        
        String url = presignedRequest.url().toString();
        
        log.info("Generated presigned download URL for: {}", key);
        
        return url;
    }
    
    // Generate presigned URL for upload
    public String generatePresignedUploadUrl(String key, Duration expiration) {
        PutObjectRequest putObjectRequest = PutObjectRequest.builder()
            .bucket(bucketName)
            .key(key)
            .build();
        
        PutObjectPresignRequest presignRequest = PutObjectPresignRequest.builder()
            .putObjectRequest(putObjectRequest)
            .signatureDuration(expiration)
            .build();
        
        PresignedPutObjectRequest presignedRequest = 
            s3Presigner.presignPutObject(presignRequest);
        
        String url = presignedRequest.url().toString();
        
        log.info("Generated presigned upload URL for: {}", key);
        
        return url;
    }
    
    // List files in bucket
    public List<String> listFiles(String prefix) {
        ListObjectsV2Request listRequest = ListObjectsV2Request.builder()
            .bucket(bucketName)
            .prefix(prefix)
            .build();
        
        ListObjectsV2Response listResponse = s3Client.listObjectsV2(listRequest);
        
        return listResponse.contents().stream()
            .map(S3Object::key)
            .collect(Collectors.toList());
    }
    
    // Check if file exists
    public boolean fileExists(String key) {
        try {
            HeadObjectRequest headObjectRequest = HeadObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .build();
            
            s3Client.headObject(headObjectRequest);
            return true;
        } catch (NoSuchKeyException e) {
            return false;
        }
    }
    
    // Get file metadata
    public Map<String, String> getFileMetadata(String key) {
        HeadObjectRequest headObjectRequest = HeadObjectRequest.builder()
            .bucket(bucketName)
            .key(key)
            .build();
        
        HeadObjectResponse response = s3Client.headObject(headObjectRequest);
        
        return response.metadata();
    }
    
    // Copy file
    public void copyFile(String sourceKey, String destinationKey) {
        CopyObjectRequest copyObjectRequest = CopyObjectRequest.builder()
            .sourceBucket(bucketName)
            .sourceKey(sourceKey)
            .destinationBucket(bucketName)
            .destinationKey(destinationKey)
            .build();
        
        s3Client.copyObject(copyObjectRequest);
        
        log.info("File copied from {} to {}", sourceKey, destinationKey);
    }
    
    private String generateFileName(String originalFilename) {
        String timestamp = String.valueOf(System.currentTimeMillis());
        String extension = originalFilename.substring(originalFilename.lastIndexOf("."));
        return timestamp + "_" + UUID.randomUUID().toString() + extension;
    }
}
```

### File Upload Controller

```java
@RestController
@RequestMapping("/api/files")
@Slf4j
public class FileUploadController {
    
    @Autowired
    private S3Service s3Service;
    
    @PostMapping("/upload")
    public ResponseEntity<FileUploadResponse> uploadFile(
            @RequestParam("file") MultipartFile file) {
        
        try {
            // Validate file
            if (file.isEmpty()) {
                return ResponseEntity.badRequest().build();
            }
            
            // Validate file size (e.g., max 10MB)
            if (file.getSize() > 10 * 1024 * 1024) {
                return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE).build();
            }
            
            // Validate file type
            String contentType = file.getContentType();
            if (!isAllowedContentType(contentType)) {
                return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE).build();
            }
            
            // Upload to S3
            String key = s3Service.uploadFile(file);
            
            // Generate presigned URL (valid for 1 hour)
            String url = s3Service.generatePresignedDownloadUrl(
                key, Duration.ofHours(1));
            
            FileUploadResponse response = FileUploadResponse.builder()
                .key(key)
                .fileName(file.getOriginalFilename())
                .fileSize(file.getSize())
                .contentType(contentType)
                .url(url)
                .build();
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            log.error("Error uploading file", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @GetMapping("/download/{key}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String key) {
        try {
            byte[] data = s3Service.downloadFile(key);
            
            ByteArrayResource resource = new ByteArrayResource(data);
            
            return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, 
                    "attachment; filename=\"" + key + "\"")
                .body(resource);
            
        } catch (Exception e) {
            log.error("Error downloading file", e);
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{key}")
    public ResponseEntity<Void> deleteFile(@PathVariable String key) {
        try {
            s3Service.deleteFile(key);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            log.error("Error deleting file", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @GetMapping("/presigned-url/{key}")
    public ResponseEntity<PresignedUrlResponse> getPresignedUrl(@PathVariable String key) {
        String url = s3Service.generatePresignedDownloadUrl(
            key, Duration.ofMinutes(30));
        
        PresignedUrlResponse response = PresignedUrlResponse.builder()
            .url(url)
            .expiresIn(30 * 60) // 30 minutes in seconds
            .build();
        
        return ResponseEntity.ok(response);
    }
    
    private boolean isAllowedContentType(String contentType) {
        List<String> allowedTypes = Arrays.asList(
            "image/jpeg", "image/png", "image/gif",
            "application/pdf", "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        );
        
        return allowedTypes.contains(contentType);
    }
}

@Data
@Builder
class FileUploadResponse {
    private String key;
    private String fileName;
    private long fileSize;
    private String contentType;
    private String url;
}

@Data
@Builder
class PresignedUrlResponse {
    private String url;
    private long expiresIn;
}
```

---

### Email Sending (SMTP)

#### Dependencies

**pom.xml:**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mail</artifactId>
</dependency>

<!-- For HTML email templates -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

### Configuration

**application.yml:**

```yaml
spring:
  mail:
    host: smtp.gmail.com
    port: 587
    username: ${EMAIL_USERNAME}
    password: ${EMAIL_PASSWORD}
    properties:
      mail:
        smtp:
          auth: true
          starttls:
            enable: true
            required: true
          connectiontimeout: 5000
          timeout: 5000
          writetimeout: 5000

email:
  from: noreply@example.com
  from-name: My Application
```

### Email Service

```java
@Service
@Slf4j
public class EmailService {
    
    @Autowired
    private JavaMailSender mailSender;
    
    @Autowired
    private TemplateEngine templateEngine;
    
    @Value("${email.from}")
    private String fromEmail;
    
    @Value("${email.from-name}")
    private String fromName;
    
    // Send simple text email
    public void sendSimpleEmail(String to, String subject, String text) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(to);
            message.setSubject(subject);
            message.setText(text);
            
            mailSender.send(message);
            
            log.info("Simple email sent to: {}", to);
        } catch (Exception e) {
            log.error("Error sending simple email", e);
            throw new EmailSendException("Failed to send email", e);
        }
    }
    
    // Send HTML email
    public void sendHtmlEmail(String to, String subject, String htmlContent) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            
            helper.setFrom(fromEmail, fromName);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(htmlContent, true);
            
            mailSender.send(message);
            
            log.info("HTML email sent to: {}", to);
        } catch (Exception e) {
            log.error("Error sending HTML email", e);
            throw new EmailSendException("Failed to send email", e);
        }
    }
    
    // Send email with attachment
    public void sendEmailWithAttachment(
            String to, 
            String subject, 
            String text,
            String attachmentName,
            byte[] attachmentData) {
        
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            
            helper.setFrom(fromEmail, fromName);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(text, true);
            
            // Add attachment
            ByteArrayResource resource = new ByteArrayResource(attachmentData);
            helper.addAttachment(attachmentName, resource);
            
            mailSender.send(message);
            
            log.info("Email with attachment sent to: {}", to);
        } catch (Exception e) {
            log.error("Error sending email with attachment", e);
            throw new EmailSendException("Failed to send email with attachment", e);
        }
    }
    
    // Send templated email
    public void sendTemplatedEmail(
            String to, 
            String subject, 
            String templateName,
            Map<String, Object> variables) {
        
        try {
            Context context = new Context();
            context.setVariables(variables);
            
            String htmlContent = templateEngine.process(templateName, context);
            
            sendHtmlEmail(to, subject, htmlContent);
            
            log.info("Templated email sent to: {}", to);
        } catch (Exception e) {
            log.error("Error sending templated email", e);
            throw new EmailSendException("Failed to send templated email", e);
        }
    }
    
    // Send welcome email
    public void sendWelcomeEmail(String to, String username) {
        Map<String, Object> variables = new HashMap<>();
        variables.put("username", username);
        variables.put("loginUrl", "https://example.com/login");
        
        sendTemplatedEmail(to, "Welcome to Our Application", "welcome-email", variables);
    }
    
    // Send password reset email
    public void sendPasswordResetEmail(String to, String resetToken) {
        Map<String, Object> variables = new HashMap<>();
        variables.put("resetLink", "https://example.com/reset-password?token=" + resetToken);
        variables.put("expiryTime", "1 hour");
        
        sendTemplatedEmail(to, "Password Reset Request", "password-reset-email", variables);
    }
    
    // Send verification email
    public void sendVerificationEmail(String to, String verificationToken) {
        Map<String, Object> variables = new HashMap<>();
        variables.put("verificationLink", 
            "https://example.com/verify?token=" + verificationToken);
        
        sendTemplatedEmail(to, "Verify Your Email", "verification-email", variables);
    }
    
    // Send order confirmation email
    public void sendOrderConfirmationEmail(String to, Order order) {
        Map<String, Object> variables = new HashMap<>();
        variables.put("orderNumber", order.getOrderNumber());
        variables.put("orderDate", order.getOrderDate());
        variables.put("items", order.getItems());
        variables.put("totalAmount", order.getTotalAmount());
        
        sendTemplatedEmail(to, "Order Confirmation", "order-confirmation-email", variables);
    }
}
```

### Async Email Service

```java
@Service
@Slf4j
public class AsyncEmailService {
    
    @Autowired
    private EmailService emailService;
    
    @Async("emailExecutor")
    public CompletableFuture<Void> sendEmailAsync(String to, String subject, String text) {
        return CompletableFuture.runAsync(() -> {
            emailService.sendSimpleEmail(to, subject, text);
        });
    }
    
    @Async("emailExecutor")
    public CompletableFuture<Void> sendHtmlEmailAsync(
            String to, String subject, String htmlContent) {
        
        return CompletableFuture.runAsync(() -> {
            emailService.sendHtmlEmail(to, subject, htmlContent);
        });
    }
    
    @Async("emailExecutor")
    public void sendBulkEmails(List<String> recipients, String subject, String content) {
        log.info("Sending bulk emails to {} recipients", recipients.size());
        
        List<CompletableFuture<Void>> futures = recipients.stream()
            .map(recipient -> sendEmailAsync(recipient, subject, content))
            .collect(Collectors.toList());
        
        CompletableFuture.allOf(futures.toArray(new CompletableFuture[0])).join();
        
        log.info("Bulk emails sent successfully");
    }
}
```

### Email Templates

**templates/welcome-email.html:**

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
            background-color: #f9f9f9;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome!</h1>
        </div>
        <div class="content">
            <p>Hi <span th:text="${username}">User</span>,</p>
            <p>Welcome to our application! We're excited to have you on board.</p>
            <p>To get started, click the button below:</p>
            <p style="text-align: center;">
                <a th:href="${loginUrl}" class="button">Get Started</a>
            </p>
            <p>If you have any questions, feel free to reach out to our support team.</p>
            <p>Best regards,<br>The Team</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 My Application. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

**templates/password-reset-email.html:**

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #FF5722;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
            background-color: #f9f9f9;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #FF5722;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
        .warning {
            background-color: #fff3cd;
            border: 1px solid #ffc107;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Password Reset Request</h1>
        </div>
        <div class="content">
            <p>Hello,</p>
            <p>We received a request to reset your password. Click the button below to reset it:</p>
            <p style="text-align: center;">
                <a th:href="${resetLink}" class="button">Reset Password</a>
            </p>
            <div class="warning">
                <strong>Important:</strong> This link will expire in 
                <span th:text="${expiryTime}">1 hour</span>.
            </div>
            <p>If you didn't request this password reset, you can safely ignore this email.</p>
            <p>Best regards,<br>The Team</p>
        </div>
    </div>
</body>
</html>
```

### Email Configuration for Async

```java
@Configuration
@EnableAsync
public class EmailConfig {
    
    @Bean(name = "emailExecutor")
    public ThreadPoolTaskExecutor emailExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(50);
        executor.setThreadNamePrefix("email-");
        executor.initialize();
        return executor;
    }
}
```

---

### Payment Integration (Stripe Basics)

#### Dependencies

**pom.xml:**

```xml
<dependency>
    <groupId>com.stripe</groupId>
    <artifactId>stripe-java</artifactId>
    <version>24.0.0</version>
</dependency>
```

### Configuration

**application.yml:**

```yaml
stripe:
  api-key: ${STRIPE_SECRET_KEY}
  publishable-key: ${STRIPE_PUBLISHABLE_KEY}
  webhook-secret: ${STRIPE_WEBHOOK_SECRET}
  currency: usd
```

### Stripe Configuration

```java
@Configuration
public class StripeConfig {
    
    @Value("${stripe.api-key}")
    private String apiKey;
    
    @PostConstruct
    public void init() {
        Stripe.apiKey = apiKey;
    }
}
```

### Payment Service

```java
@Service
@Slf4j
public class PaymentService {
    
    @Value("${stripe.currency}")
    private String currency;
    
    // Create payment intent
    public PaymentIntent createPaymentIntent(Long amount, String customerId, Map<String, Object> metadata) {
        try {
            PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setAmount(amount) // Amount in cents
                .setCurrency(currency)
                .setCustomer(customerId)
                .putAllMetadata(metadata)
                .setAutomaticPaymentMethods(
                    PaymentIntentCreateParams.AutomaticPaymentMethods.builder()
                        .setEnabled(true)
                        .build()
                )
                .build();
            
            PaymentIntent paymentIntent = PaymentIntent.create(params);
            
            log.info("Payment intent created: {}", paymentIntent.getId());
            
            return paymentIntent;
        } catch (StripeException e) {
            log.error("Error creating payment intent", e);
            throw new PaymentException("Failed to create payment intent", e);
        }
    }
    
    // Confirm payment
    public PaymentIntent confirmPayment(String paymentIntentId, String paymentMethodId) {
        try {
            PaymentIntent paymentIntent = PaymentIntent.retrieve(paymentIntentId);
            
            PaymentIntentConfirmParams params = PaymentIntentConfirmParams.builder()
                .setPaymentMethod(paymentMethodId)
                .build();
            
            paymentIntent = paymentIntent.confirm(params);
            
            log.info("Payment confirmed: {}", paymentIntent.getId());
            
            return paymentIntent;
        } catch (StripeException e) {
            log.error("Error confirming payment", e);
            throw new PaymentException("Failed to confirm payment", e);
        }
    }
    
    // Create customer
    public Customer createCustomer(String email, String name, Map<String, Object> metadata) {
        try {
            CustomerCreateParams params = CustomerCreateParams.builder()
                .setEmail(email)
                .setName(name)
                .putAllMetadata(metadata)
                .build();
            
            Customer customer = Customer.create(params);
            
            log.info("Customer created: {}", customer.getId());
            
            return customer;
        } catch (StripeException e) {
            log.error("Error creating customer", e);
            throw new PaymentException("Failed to create customer", e);
        }
    }
    
    // Create subscription
    public Subscription createSubscription(String customerId, String priceId) {
        try {
            SubscriptionCreateParams params = SubscriptionCreateParams.builder()
                .setCustomer(customerId)
                .addItem(
                    SubscriptionCreateParams.Item.builder()
                        .setPrice(priceId)
                        .build()
                )
                .setPaymentBehavior(SubscriptionCreateParams.PaymentBehavior.DEFAULT_INCOMPLETE)
                .addAllExpand(Arrays.asList("latest_invoice.payment_intent"))
                .build();
            
            Subscription subscription = Subscription.create(params);
            
            log.info("Subscription created: {}", subscription.getId());
            
            return subscription;
        } catch (StripeException e) {
            log.error("Error creating subscription", e);
            throw new PaymentException("Failed to create subscription", e);
        }
    }
    
    // Cancel subscription
    public Subscription cancelSubscription(String subscriptionId) {
        try {
            Subscription subscription = Subscription.retrieve(subscriptionId);
            subscription = subscription.cancel();
            
            log.info("Subscription cancelled: {}", subscriptionId);
            
            return subscription;
        } catch (StripeException e) {
            log.error("Error cancelling subscription", e);
            throw new PaymentException("Failed to cancel subscription", e);
        }
    }
    
    // Create refund
    public Refund createRefund(String chargeId, Long amount) {
        try {
            RefundCreateParams params = RefundCreateParams.builder()
                .setCharge(chargeId)
                .setAmount(amount)
                .build();
            
            Refund refund = Refund.create(params);
            
            log.info("Refund created: {}", refund.getId());
            
            return refund;
        } catch (StripeException e) {
            log.error("Error creating refund", e);
            throw new PaymentException("Failed to create refund", e);
        }
    }
    
    // Retrieve payment intent
    public PaymentIntent retrievePaymentIntent(String paymentIntentId) {
        try {
            return PaymentIntent.retrieve(paymentIntentId);
        } catch (StripeException e) {
            log.error("Error retrieving payment intent", e);
            throw new PaymentException("Failed to retrieve payment intent", e);
        }
    }
}
```

### Payment Controller

```java
@RestController
@RequestMapping("/api/payments")
@Slf4j
public class PaymentController {
    
    @Autowired
    private PaymentService paymentService;
    
    @Value("${stripe.publishable-key}")
    private String publishableKey;
    
    @PostMapping("/create-intent")
    public ResponseEntity<CreatePaymentIntentResponse> createPaymentIntent(
            @RequestBody CreatePaymentIntentRequest request) {
        
        try {
            Map<String, Object> metadata = new HashMap<>();
            metadata.put("orderId", request.getOrderId());
            metadata.put("userId", request.getUserId());
            
            PaymentIntent paymentIntent = paymentService.createPaymentIntent(
                request.getAmount(),
                request.getCustomerId(),
                metadata
            );
            
            CreatePaymentIntentResponse response = CreatePaymentIntentResponse.builder()
                .clientSecret(paymentIntent.getClientSecret())
                .paymentIntentId(paymentIntent.getId())
                .publishableKey(publishableKey)
                .build();
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            log.error("Error creating payment intent", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @PostMapping("/webhook")
    public ResponseEntity<String> handleWebhook(
            @RequestBody String payload,
            @RequestHeader("Stripe-Signature") String sigHeader) {
        
        try {
            Event event = Webhook.constructEvent(
                payload, sigHeader, webhookSecret);
            
            // Handle different event types
            switch (event.getType()) {
                case "payment_intent.succeeded":
                    handlePaymentIntentSucceeded(event);
                    break;
                case "payment_intent.payment_failed":
                    handlePaymentIntentFailed(event);
                    break;
                case "customer.subscription.created":
                    handleSubscriptionCreated(event);
                    break;
                case "customer.subscription.deleted":
                    handleSubscriptionDeleted(event);
                    break;
                default:
                    log.info("Unhandled event type: {}", event.getType());
            }
            
            return ResponseEntity.ok("Success");
            
        } catch (SignatureVerificationException e) {
            log.error("Invalid signature", e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid signature");
        }
    }
    
    private void handlePaymentIntentSucceeded(Event event) {
        PaymentIntent paymentIntent = (PaymentIntent) event.getDataObjectDeserializer()
            .getObject().orElse(null);
        
        if (paymentIntent != null) {
            log.info("Payment succeeded: {}", paymentIntent.getId());
            // Update order status, send confirmation email, etc.
        }
    }
    
    private void handlePaymentIntentFailed(Event event) {
        PaymentIntent paymentIntent = (PaymentIntent) event.getDataObjectDeserializer()
            .getObject().orElse(null);
        
        if (paymentIntent != null) {
            log.warn("Payment failed: {}", paymentIntent.getId());
            // Notify user, update order status, etc.
        }
    }
    
    private void handleSubscriptionCreated(Event event) {
        Subscription subscription = (Subscription) event.getDataObjectDeserializer()
            .getObject().orElse(null);
        
        if (subscription != null) {
            log.info("Subscription created: {}", subscription.getId());
            // Grant access, send welcome email, etc.
        }
    }
    
    private void handleSubscriptionDeleted(Event event) {
        Subscription subscription = (Subscription) event.getDataObjectDeserializer()
            .getObject().orElse(null);
        
        if (subscription != null) {
            log.info("Subscription deleted: {}", subscription.getId());
            // Revoke access, send cancellation email, etc.
        }
    }
}

@Data
class CreatePaymentIntentRequest {
    private Long amount;
    private String customerId;
    private String orderId;
    private String userId;
}

@Data
@Builder
class CreatePaymentIntentResponse {
    private String clientSecret;
    private String paymentIntentId;
    private String publishableKey;
}
```

---

### PDF Generation

#### Dependencies

**pom.xml:**

```xml
<!-- iText PDF -->
<dependency>
    <groupId>com.itextpdf</groupId>
    <artifactId>itext7-core</artifactId>
    <version>7.2.5</version>
    <type>pom</type>
</dependency>

<!-- Flying Saucer (HTML to PDF) -->
<dependency>
    <groupId>org.xhtmlrenderer</groupId>
    <artifactId>flying-saucer-pdf</artifactId>
    <version>9.1.22</version>
</dependency>
```

### PDF Service with iText

```java
@Service
@Slf4j
public class PdfService {
    
    // Generate simple PDF
    public byte[] generateSimplePdf(String content) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        
        try (PdfWriter writer = new PdfWriter(baos);
             PdfDocument pdf = new PdfDocument(writer);
             Document document = new Document(pdf)) {
            
            document.add(new Paragraph(content));
            
            log.info("Simple PDF generated");
        }
        
        return baos.toByteArray();
    }
    
    // Generate invoice PDF
    public byte[] generateInvoicePdf(Invoice invoice) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        
        try (PdfWriter writer = new PdfWriter(baos);
             PdfDocument pdf = new PdfDocument(writer);
             Document document = new Document(pdf, PageSize.A4)) {
            
            // Set margins
            document.setMargins(50, 50, 50, 50);
            
            // Title
            Paragraph title = new Paragraph("INVOICE")
                .setFontSize(24)
                .setBold()
                .setTextAlignment(TextAlignment.CENTER);
            document.add(title);
            
            document.add(new Paragraph("\n"));
            
            // Invoice details
            Table infoTable = new Table(2);
            infoTable.setWidth(UnitValue.createPercentValue(100));
            
            infoTable.addCell(createCell("Invoice Number:", true));
            infoTable.addCell(createCell(invoice.getInvoiceNumber(), false));
            
            infoTable.addCell(createCell("Date:", true));
            infoTable.addCell(createCell(invoice.getDate().toString(), false));
            
            infoTable.addCell(createCell("Customer:", true));
            infoTable.addCell(createCell(invoice.getCustomerName(), false));
            
            document.add(infoTable);
            document.add(new Paragraph("\n"));
            
            // Items table
            Table itemsTable = new Table(new float[]{3, 1, 2, 2});
            itemsTable.setWidth(UnitValue.createPercentValue(100));
            
            // Header
            itemsTable.addHeaderCell(createHeaderCell("Description"));
            itemsTable.addHeaderCell(createHeaderCell("Quantity"));
            itemsTable.addHeaderCell(createHeaderCell("Unit Price"));
            itemsTable.addHeaderCell(createHeaderCell("Total"));
            
            // Items
            for (InvoiceItem item : invoice.getItems()) {
                itemsTable.addCell(createCell(item.getDescription(), false));
                itemsTable.addCell(createCell(String.valueOf(item.getQuantity()), false));
                itemsTable.addCell(createCell(formatCurrency(item.getUnitPrice()), false));
                itemsTable.addCell(createCell(formatCurrency(item.getTotal()), false));
            }
            
            document.add(itemsTable);
            document.add(new Paragraph("\n"));
            
            // Total
            Table totalTable = new Table(2);
            totalTable.setWidth(UnitValue.createPercentValue(50));
            totalTable.setHorizontalAlignment(HorizontalAlignment.RIGHT);
            
            totalTable.addCell(createCell("Subtotal:", true));
            totalTable.addCell(createCell(formatCurrency(invoice.getSubtotal()), false));
            
            totalTable.addCell(createCell("Tax:", true));
            totalTable.addCell(createCell(formatCurrency(invoice.getTax()), false));
            
            totalTable.addCell(createCell("Total:", true)
                .setBackgroundColor(ColorConstants.LIGHT_GRAY)
                .setBold());
            totalTable.addCell(createCell(formatCurrency(invoice.getTotal()), false)
                .setBackgroundColor(ColorConstants.LIGHT_GRAY)
                .setBold());
            
            document.add(totalTable);
            
            // Footer
            document.add(new Paragraph("\n\n"));
            document.add(new Paragraph("Thank you for your business!")
                .setTextAlignment(TextAlignment.CENTER)
                .setFontSize(10));
            
            log.info("Invoice PDF generated: {}", invoice.getInvoiceNumber());
        }
        
        return baos.toByteArray();
    }
    
    // Generate report with charts
    public byte[] generateReportPdf(Report report) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        
        try (PdfWriter writer = new PdfWriter(baos);
             PdfDocument pdf = new PdfDocument(writer);
             Document document = new Document(pdf)) {
            
            // Title
            document.add(new Paragraph(report.getTitle())
                .setFontSize(20)
                .setBold());
            
            document.add(new Paragraph("Generated on: " + LocalDateTime.now())
                .setFontSize(10)
                .setFontColor(ColorConstants.GRAY));
            
            document.add(new Paragraph("\n"));
            
            // Content
            document.add(new Paragraph(report.getSummary()));
            
            // Data table
            if (report.getData() != null && !report.getData().isEmpty()) {
                Table table = new Table(report.getData().get(0).size());
                table.setWidth(UnitValue.createPercentValue(100));
                
                // Add data rows
                for (List<String> row : report.getData()) {
                    for (String cell : row) {
                        table.addCell(createCell(cell, false));
                    }
                }
                
                document.add(table);
            }
            
            log.info("Report PDF generated: {}", report.getTitle());
        }
        
        return baos.toByteArray();
    }
    
    // Generate PDF from HTML template
    public byte[] generatePdfFromHtml(String htmlContent) {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        
        try {
            ITextRenderer renderer = new ITextRenderer();
            renderer.setDocumentFromString(htmlContent);
            renderer.layout();
            renderer.createPDF(baos);
            
            log.info("PDF generated from HTML");
        } catch (Exception e) {
            log.error("Error generating PDF from HTML", e);
            throw new PdfGenerationException("Failed to generate PDF from HTML", e);
        }
        
        return baos.toByteArray();
    }
    
    private Cell createCell(String content, boolean bold) {
        Cell cell = new Cell().add(new Paragraph(content));
        if (bold) {
            cell.setBold();
        }
        return cell;
    }
    
    private Cell createHeaderCell(String content) {
        return new Cell()
            .add(new Paragraph(content))
            .setBackgroundColor(ColorConstants.DARK_GRAY)
            .setFontColor(ColorConstants.WHITE)
            .setBold()
            .setTextAlignment(TextAlignment.CENTER);
    }
    
    private String formatCurrency(double amount) {
        return String.format("$%.2f", amount);
    }
}
```

### PDF Controller

```java
@RestController
@RequestMapping("/api/pdf")
@Slf4j
public class PdfController {
    
    @Autowired
    private PdfService pdfService;
    
    @GetMapping("/invoice/{id}")
    public ResponseEntity<byte[]> downloadInvoice(@PathVariable Long id) {
        try {
            // Fetch invoice from database
            Invoice invoice = invoiceService.getInvoice(id);
            
            // Generate PDF
            byte[] pdfBytes = pdfService.generateInvoicePdf(invoice);
            
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
            headers.setContentDispositionFormData("attachment", 
                "invoice_" + invoice.getInvoiceNumber() + ".pdf");
            headers.setContentLength(pdfBytes.length);
            
            return new ResponseEntity<>(pdfBytes, headers, HttpStatus.OK);
            
        } catch (Exception e) {
            log.error("Error generating invoice PDF", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @GetMapping("/report")
    public ResponseEntity<byte[]> downloadReport() {
        try {
            Report report = reportService.generateReport();
            byte[] pdfBytes = pdfService.generateReportPdf(report);
            
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
            headers.setContentDispositionFormData("attachment", "report.pdf");
            
            return new ResponseEntity<>(pdfBytes, headers, HttpStatus.OK);
            
        } catch (Exception e) {
            log.error("Error generating report PDF", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
```

---

### Excel Generation

#### Dependencies

**pom.xml:**

```xml
<!-- Apache POI for Excel -->
<dependency>
    <groupId>org.apache.poi</groupId>
    <artifactId>poi-ooxml</artifactId>
    <version>5.2.3</version>
</dependency>
```

### Excel Service

```java
@Service
@Slf4j
public class ExcelService {
    
    // Generate simple Excel
    public byte[] generateSimpleExcel(List<List<String>> data) throws IOException {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Data");
        
        int rowNum = 0;
        for (List<String> rowData : data) {
            Row row = sheet.createRow(rowNum++);
            int colNum = 0;
            for (String cellData : rowData) {
                Cell cell = row.createCell(colNum++);
                cell.setCellValue(cellData);
            }
        }
        
        // Auto-size columns
        for (int i = 0; i < data.get(0).size(); i++) {
            sheet.autoSizeColumn(i);
        }
        
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        workbook.write(baos);
        workbook.close();
        
        log.info("Simple Excel generated");
        
        return baos.toByteArray();
    }
    
    // Generate user report Excel
    public byte[] generateUserReportExcel(List<User> users) throws IOException {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Users");
        
        // Create styles
        CellStyle headerStyle = createHeaderStyle(workbook);
        CellStyle dateStyle = createDateStyle(workbook);
        
        // Header row
        Row headerRow = sheet.createRow(0);
        String[] headers = {"ID", "Name", "Email", "Age", "Created Date"};
        
        for (int i = 0; i < headers.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(headers[i]);
            cell.setCellStyle(headerStyle);
        }
        
        // Data rows
        int rowNum = 1;
        for (User user : users) {
            Row row = sheet.createRow(rowNum++);
            
            row.createCell(0).setCellValue(user.getId());
            row.createCell(1).setCellValue(user.getName());
            row.createCell(2).setCellValue(user.getEmail());
            row.createCell(3).setCellValue(user.getAge());
            
            Cell dateCell = row.createCell(4);
            dateCell.setCellValue(user.getCreatedAt());
            dateCell.setCellStyle(dateStyle);
        }
        
        // Auto-size columns
        for (int i = 0; i < headers.length; i++) {
            sheet.autoSizeColumn(i);
        }
        
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        workbook.write(baos);
        workbook.close();
        
        log.info("User report Excel generated with {} users", users.size());
        
        return baos.toByteArray();
    }
    
    // Generate sales report with multiple sheets
    public byte[] generateSalesReportExcel(SalesReport salesReport) throws IOException {
        Workbook workbook = new XSSFWorkbook();
        
        // Summary sheet
        Sheet summarySheet = workbook.createSheet("Summary");
        createSummarySheet(summarySheet, salesReport, workbook);
        
        // Details sheet
        Sheet detailsSheet = workbook.createSheet("Details");
        createDetailsSheet(detailsSheet, salesReport, workbook);
        
        // Charts sheet (if needed)
        Sheet chartsSheet = workbook.createSheet("Charts");
        createChartsSheet(chartsSheet, salesReport, workbook);
        
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        workbook.write(baos);
        workbook.close();
        
        log.info("Sales report Excel generated");
        
        return baos.toByteArray();
    }
    
    // Generate Excel with formulas
    public byte[] generateExcelWithFormulas() throws IOException {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Sales");
        
        // Header
        Row headerRow = sheet.createRow(0);
        headerRow.createCell(0).setCellValue("Product");
        headerRow.createCell(1).setCellValue("Quantity");
        headerRow.createCell(2).setCellValue("Price");
        headerRow.createCell(3).setCellValue("Total");
        
        // Data with formulas
        String[] products = {"Product A", "Product B", "Product C"};
        int[] quantities = {10, 20, 15};
        double[] prices = {25.50, 15.75, 30.00};
        
        for (int i = 0; i < products.length; i++) {
            Row row = sheet.createRow(i + 1);
            row.createCell(0).setCellValue(products[i]);
            row.createCell(1).setCellValue(quantities[i]);
            row.createCell(2).setCellValue(prices[i]);
            
            // Formula: Quantity * Price
            Cell totalCell = row.createCell(3);
            totalCell.setCellFormula("B" + (i + 2) + "*C" + (i + 2));
        }
        
        // Grand total
        Row totalRow = sheet.createRow(products.length + 1);
        totalRow.createCell(2).setCellValue("Grand Total:");
        Cell grandTotalCell = totalRow.createCell(3);
        grandTotalCell.setCellFormula("SUM(D2:D" + (products.length + 1) + ")");
        
        // Auto-size columns
        for (int i = 0; i < 4; i++) {
            sheet.autoSizeColumn(i);
        }
        
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        workbook.write(baos);
        workbook.close();
        
        return baos.toByteArray();
    }
    
    // Parse Excel file
    public List<Map<String, String>> parseExcel(MultipartFile file) throws IOException {
        List<Map<String, String>> data = new ArrayList<>();
        
        try (Workbook workbook = new XSSFWorkbook(file.getInputStream())) {
            Sheet sheet = workbook.getSheetAt(0);
            
            // Get header row
            Row headerRow = sheet.getRow(0);
            List<String> headers = new ArrayList<>();
            for (Cell cell : headerRow) {
                headers.add(cell.getStringCellValue());
            }
            
            // Parse data rows
            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row != null) {
                    Map<String, String> rowData = new HashMap<>();
                    
                    for (int j = 0; j < headers.size(); j++) {
                        Cell cell = row.getCell(j);
                        String value = getCellValueAsString(cell);
                        rowData.put(headers.get(j), value);
                    }
                    
                    data.add(rowData);
                }
            }
        }
        
        log.info("Parsed {} rows from Excel", data.size());
        
        return data;
    }
    
    private CellStyle createHeaderStyle(Workbook workbook) {
        CellStyle style = workbook.createCellStyle();
        Font font = workbook.createFont();
        font.setBold(true);
        font.setFontHeightInPoints((short) 12);
        style.setFont(font);
        style.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setBorderBottom(BorderStyle.THIN);
        style.setBorderTop(BorderStyle.THIN);
        style.setBorderLeft(BorderStyle.THIN);
        style.setBorderRight(BorderStyle.THIN);
        return style;
    }
    
    private CellStyle createDateStyle(Workbook workbook) {
        CellStyle style = workbook.createCellStyle();
        CreationHelper createHelper = workbook.getCreationHelper();
        style.setDataFormat(createHelper.createDataFormat().getFormat("yyyy-mm-dd"));
        return style;
    }
    
    private void createSummarySheet(Sheet sheet, SalesReport report, Workbook workbook) {
        CellStyle headerStyle = createHeaderStyle(workbook);
        
        Row row0 = sheet.createRow(0);
        Cell cell0 = row0.createCell(0);
        cell0.setCellValue("Total Sales");
        cell0.setCellStyle(headerStyle);
        row0.createCell(1).setCellValue(report.getTotalSales());
        
        Row row1 = sheet.createRow(1);
        Cell cell1 = row1.createCell(0);
        cell1.setCellValue("Total Orders");
        cell1.setCellStyle(headerStyle);
        row1.createCell(1).setCellValue(report.getTotalOrders());
        
        Row row2 = sheet.createRow(2);
        Cell cell2 = row2.createCell(0);
        cell2.setCellValue("Average Order Value");
        cell2.setCellStyle(headerStyle);
        row2.createCell(1).setCellValue(report.getAverageOrderValue());
        
        sheet.autoSizeColumn(0);
        sheet.autoSizeColumn(1);
    }
    
    private void createDetailsSheet(Sheet sheet, SalesReport report, Workbook workbook) {
        // Implementation for details
    }
    
    private void createChartsSheet(Sheet sheet, SalesReport report, Workbook workbook) {
        // Implementation for charts
    }
    
    private String getCellValueAsString(Cell cell) {
        if (cell == null) {
            return "";
        }
        
        switch (cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue();
            case NUMERIC:
                if (DateUtil.isCellDateFormatted(cell)) {
                    return cell.getDateCellValue().toString();
                }
                return String.valueOf(cell.getNumericCellValue());
            case BOOLEAN:
                return String.valueOf(cell.getBooleanCellValue());
            case FORMULA:
                return cell.getCellFormula();
            default:
                return "";
        }
    }
}
```

### Excel Controller

```java
@RestController
@RequestMapping("/api/excel")
@Slf4j
public class ExcelController {
    
    @Autowired
    private ExcelService excelService;
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/users/export")
    public ResponseEntity<byte[]> exportUsers() {
        try {
            List<User> users = userService.findAll();
            byte[] excelBytes = excelService.generateUserReportExcel(users);
            
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.parseMediaType(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
            headers.setContentDispositionFormData("attachment", 
                "users_report_" + LocalDate.now() + ".xlsx");
            headers.setContentLength(excelBytes.length);
            
            return new ResponseEntity<>(excelBytes, headers, HttpStatus.OK);
            
        } catch (Exception e) {
            log.error("Error exporting users to Excel", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @PostMapping("/users/import")
    public ResponseEntity<ImportResult> importUsers(@RequestParam("file") MultipartFile file) {
        try {
            if (!file.getOriginalFilename().endsWith(".xlsx")) {
                return ResponseEntity.badRequest().build();
            }
            
            List<Map<String, String>> data = excelService.parseExcel(file);
            
            int successCount = 0;
            int errorCount = 0;
            List<String> errors = new ArrayList<>();
            
            for (Map<String, String> row : data) {
                try {
                    User user = new User();
                    user.setName(row.get("Name"));
                    user.setEmail(row.get("Email"));
                    user.setAge(Integer.parseInt(row.get("Age")));
                    
                    userService.create(user);
                    successCount++;
                } catch (Exception e) {
                    errorCount++;
                    errors.add("Error importing row: " + e.getMessage());
                }
            }
            
            ImportResult result = ImportResult.builder()
                .totalRows(data.size())
                .successCount(successCount)
                .errorCount(errorCount)
                .errors(errors)
                .build();
            
            return ResponseEntity.ok(result);
            
        } catch (Exception e) {
            log.error("Error importing users from Excel", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}

@Data
@Builder
class ImportResult {
    private int totalRows;
    private int successCount;
    private int errorCount;
    private List<String> errors;
}
```

---

### SMS/OTP Service

#### Dependencies

**pom.xml:**

```xml
<!-- Twilio SMS -->
<dependency>
    <groupId>com.twilio.sdk</groupId>
    <artifactId>twilio</artifactId>
    <version>9.14.0</version>
</dependency>
```

### Configuration

**application.yml:**

```yaml
twilio:
  account-sid: ${TWILIO_ACCOUNT_SID}
  auth-token: ${TWILIO_AUTH_TOKEN}
  phone-number: ${TWILIO_PHONE_NUMBER}

otp:
  length: 6
  expiry-minutes: 5
  max-attempts: 3
```

### Twilio Configuration

```java
@Configuration
public class TwilioConfig {
    
    @Value("${twilio.account-sid}")
    private String accountSid;
    
    @Value("${twilio.auth-token}")
    private String authToken;
    
    @PostConstruct
    public void init() {
        Twilio.init(accountSid, authToken);
    }
}
```

### OTP Entity

```java
@Entity
@Table(name = "otp_codes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OtpCode {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String phoneNumber;
    
    @Column(nullable = false)
    private String code;
    
    @Column(nullable = false)
    private LocalDateTime createdAt;
    
    @Column(nullable = false)
    private LocalDateTime expiresAt;
    
    private boolean verified;
    
    private int attempts;
    
    @Enumerated(EnumType.STRING)
    private OtpPurpose purpose;
    
    public boolean isExpired() {
        return LocalDateTime.now().isAfter(expiresAt);
    }
}

public enum OtpPurpose {
    REGISTRATION,
    LOGIN,
    PASSWORD_RESET,
    TRANSACTION_VERIFICATION
}
```

### OTP Repository

```java
@Repository
public interface OtpRepository extends JpaRepository<OtpCode, Long> {
    
    Optional<OtpCode> findTopByPhoneNumberAndPurposeAndVerifiedFalseOrderByCreatedAtDesc(
        String phoneNumber, OtpPurpose purpose);
    
    void deleteByExpiresAtBefore(LocalDateTime dateTime);
    
    @Modifying
    @Query("UPDATE OtpCode o SET o.verified = true WHERE o.id = :id")
    void markAsVerified(@Param("id") Long id);
}
```

### SMS Service

```java
@Service
@Slf4j
public class SmsService {
    
    @Value("${twilio.phone-number}")
    private String fromPhoneNumber;
    
    public void sendSms(String to, String message) {
        try {
            Message twilioMessage = Message.creator(
                new PhoneNumber(to),
                new PhoneNumber(fromPhoneNumber),
                message
            ).create();
            
            log.info("SMS sent to {}: SID={}", to, twilioMessage.getSid());
            
        } catch (Exception e) {
            log.error("Error sending SMS to {}", to, e);
            throw new SmsException("Failed to send SMS", e);
        }
    }
    
    public void sendBulkSms(List<String> phoneNumbers, String message) {
        phoneNumbers.forEach(phoneNumber -> {
            try {
                sendSms(phoneNumber, message);
            } catch (Exception e) {
                log.error("Failed to send SMS to {}", phoneNumber, e);
            }
        });
    }
}
```

### OTP Service

```java
@Service
@Slf4j
@Transactional
public class OtpService {
    
    @Autowired
    private OtpRepository otpRepository;
    
    @Autowired
    private SmsService smsService;
    
    @Value("${otp.length}")
    private int otpLength;
    
    @Value("${otp.expiry-minutes}")
    private int expiryMinutes;
    
    @Value("${otp.max-attempts}")
    private int maxAttempts;
    
    private final SecureRandom random = new SecureRandom();
    
    public void generateAndSendOtp(String phoneNumber, OtpPurpose purpose) {
        // Generate OTP
        String code = generateOtpCode();
        
        // Save to database
        OtpCode otpCode = OtpCode.builder()
            .phoneNumber(phoneNumber)
            .code(code)
            .purpose(purpose)
            .createdAt(LocalDateTime.now())
            .expiresAt(LocalDateTime.now().plusMinutes(expiryMinutes))
            .verified(false)
            .attempts(0)
            .build();
        
        otpRepository.save(otpCode);
        
        // Send SMS
        String message = String.format(
            "Your OTP code is: %s. Valid for %d minutes. Do not share this code.",
            code, expiryMinutes
        );
        
        smsService.sendSms(phoneNumber, message);
        
        log.info("OTP sent to {} for purpose: {}", phoneNumber, purpose);
    }
    
    public boolean verifyOtp(String phoneNumber, String code, OtpPurpose purpose) {
        Optional<OtpCode> otpOptional = otpRepository
            .findTopByPhoneNumberAndPurposeAndVerifiedFalseOrderByCreatedAtDesc(
                phoneNumber, purpose);
        
        if (otpOptional.isEmpty()) {
            log.warn("No OTP found for phone: {}", phoneNumber);
            return false;
        }
        
        OtpCode otpCode = otpOptional.get();
        
        // Check if expired
        if (otpCode.isExpired()) {
            log.warn("OTP expired for phone: {}", phoneNumber);
            return false;
        }
        
        // Check attempts
        if (otpCode.getAttempts() >= maxAttempts) {
            log.warn("Max OTP attempts exceeded for phone: {}", phoneNumber);
            return false;
        }
        
        // Increment attempts
        otpCode.setAttempts(otpCode.getAttempts() + 1);
        otpRepository.save(otpCode);
        
        // Verify code
        if (otpCode.getCode().equals(code)) {
            otpRepository.markAsVerified(otpCode.getId());
            log.info("OTP verified successfully for phone: {}", phoneNumber);
            return true;
        }
        
        log.warn("Invalid OTP for phone: {}", phoneNumber);
        return false;
    }
    
    public void resendOtp(String phoneNumber, OtpPurpose purpose) {
        // Check rate limiting (optional)
        Optional<OtpCode> recentOtp = otpRepository
            .findTopByPhoneNumberAndPurposeAndVerifiedFalseOrderByCreatedAtDesc(
                phoneNumber, purpose);
        
        if (recentOtp.isPresent()) {
            LocalDateTime lastSent = recentOtp.get().getCreatedAt();
            if (lastSent.isAfter(LocalDateTime.now().minusMinutes(1))) {
                throw new OtpException("Please wait before requesting a new OTP");
            }
        }
        
        generateAndSendOtp(phoneNumber, purpose);
    }
    
    private String generateOtpCode() {
        StringBuilder code = new StringBuilder();
        for (int i = 0; i < otpLength; i++) {
            code.append(random.nextInt(10));
        }
        return code.toString();
    }
    
    @Scheduled(cron = "0 0 * * * ?") // Every hour
    public void cleanupExpiredOtps() {
        otpRepository.deleteByExpiresAtBefore(LocalDateTime.now());
        log.info("Expired OTPs cleaned up");
    }
}
```

### OTP Controller

```java
@RestController
@RequestMapping("/api/otp")
@Slf4j
public class OtpController {
    
    @Autowired
    private OtpService otpService;
    
    @PostMapping("/send")
    public ResponseEntity<ApiResponse<Void>> sendOtp(@RequestBody SendOtpRequest request) {
        try {
            otpService.generateAndSendOtp(request.getPhoneNumber(), request.getPurpose());
            
            return ResponseEntity.ok(ApiResponse.<Void>builder()
                .success(true)
                .message("OTP sent successfully")
                .timestamp(LocalDateTime.now())
                .build());
            
        } catch (Exception e) {
            log.error("Error sending OTP", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ApiResponse.<Void>builder()
                    .success(false)
                    .message("Failed to send OTP")
                    .timestamp(LocalDateTime.now())
                    .build());
        }
    }
    
    @PostMapping("/verify")
    public ResponseEntity<ApiResponse<Boolean>> verifyOtp(@RequestBody VerifyOtpRequest request) {
        try {
            boolean verified = otpService.verifyOtp(
                request.getPhoneNumber(),
                request.getCode(),
                request.getPurpose()
            );
            
            if (verified) {
                return ResponseEntity.ok(ApiResponse.<Boolean>builder()
                    .success(true)
                    .message("OTP verified successfully")
                    .data(true)
                    .timestamp(LocalDateTime.now())
                    .build());
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(ApiResponse.<Boolean>builder()
                        .success(false)
                        .message("Invalid or expired OTP")
                        .data(false)
                        .timestamp(LocalDateTime.now())
                        .build());
            }
            
        } catch (Exception e) {
            log.error("Error verifying OTP", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ApiResponse.<Boolean>builder()
                    .success(false)
                    .message("Error verifying OTP")
                    .data(false)
                    .timestamp(LocalDateTime.now())
                    .build());
        }
    }
    
    @PostMapping("/resend")
    public ResponseEntity<ApiResponse<Void>> resendOtp(@RequestBody SendOtpRequest request) {
        try {
            otpService.resendOtp(request.getPhoneNumber(), request.getPurpose());
            
            return ResponseEntity.ok(ApiResponse.<Void>builder()
                .success(true)
                .message("OTP resent successfully")
                .timestamp(LocalDateTime.now())
                .build());
            
        } catch (OtpException e) {
            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                .body(ApiResponse.<Void>builder()
                    .success(false)
                    .message(e.getMessage())
                    .timestamp(LocalDateTime.now())
                    .build());
        } catch (Exception e) {
            log.error("Error resending OTP", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ApiResponse.<Void>builder()
                    .success(false)
                    .message("Failed to resend OTP")
                    .timestamp(LocalDateTime.now())
                    .build());
        }
    }
}

@Data
class SendOtpRequest {
    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^\\+[1-9]\\d{1,14}$", message = "Invalid phone number format")
    private String phoneNumber;
    
    @NotNull(message = "Purpose is required")
    private OtpPurpose purpose;
}

@Data
class VerifyOtpRequest {
    @NotBlank(message = "Phone number is required")
    private String phoneNumber;
    
    @NotBlank(message = "Code is required")
    @Size(min = 6, max = 6, message = "Code must be 6 digits")
    private String code;
    
    @NotNull(message = "Purpose is required")
    private OtpPurpose purpose;
}
```

### Two-Factor Authentication Example

```java
@Service
@Slf4j
public class TwoFactorAuthService {
    
    @Autowired
    private OtpService otpService;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    
    public void initiateLogin(String username, String password) {
        // Validate credentials
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new BadCredentialsException("Invalid credentials"));
        
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("Invalid credentials");
        }
        
        // Send OTP
        otpService.generateAndSendOtp(user.getPhoneNumber(), OtpPurpose.LOGIN);
        
        log.info("Login OTP sent to user: {}", username);
    }
    
    public AuthenticationResponse verifyLoginOtp(String username, String otp) {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UserNotFoundException("User not found"));
        
        // Verify OTP
        boolean verified = otpService.verifyOtp(
            user.getPhoneNumber(), otp, OtpPurpose.LOGIN);
        
        if (!verified) {
            throw new OtpException("Invalid or expired OTP");
        }
        
        // Generate JWT tokens
        List<String> roles = user.getRoles().stream()
            .map(Role::getName)
            .collect(Collectors.toList());
        
        String accessToken = jwtTokenProvider.generateAccessToken(username, roles);
        String refreshToken = jwtTokenProvider.generateRefreshToken(username);
        
        log.info("User logged in with 2FA: {}", username);
        
        return AuthenticationResponse.builder()
            .accessToken(accessToken)
            .refreshToken(refreshToken)
            .tokenType("Bearer")
            .build();
    }
}
```

This completes the Real-World Integrations section with JWT + Refresh Token, AWS S3, Email (SMTP), Payment (Stripe), PDF Generation, Excel Generation, and SMS/OTP Service!

