import React from "react";
import ArticleLayout from "../../components/ArticleLayout.jsx";

const SpringBootDddPost = () => {
  return (
    <ArticleLayout
      tag="Spring Boot"
      title="How to Structure a Spring Boot Project Using DDD"
      subtitle="A practical guide to Domain-Driven Design concepts, Spring Boot layers, and a multi-module project structure for real backend systems."
      date="May 22 2025"
      readingTime="20 min read"
      image="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1200&q=80"
    >
      <p>Domain-Driven Design, or DDD, is a way to design software around the business domain. Instead of starting with the database, frameworks, or controllers, DDD starts with the business language, rules, and behavior.</p>
      <p>This article explains important DDD concepts inspired by the ideas from <em>Implementing Domain-Driven Design</em>. Then, it proposes a Spring Boot multi-module structure.</p>
      <p>The goal is not to create a perfect or complex architecture. The goal is to create a structure that is clear, maintainable, and useful for real backend projects.</p>

      <h2>Why DDD Matters in Java Projects</h2>
      <p>Many Spring Boot applications start with a simple structure:</p>
      <pre className="article-code"><code className="language-text">{`controller
service
repository
entity
dto`}</code></pre>
      <p>This works at the beginning. But as the project grows, some problems appear:</p>
      <ul>
        <li>Business logic is spread across services.</li>
        <li>Entities become simple data containers.</li>
        <li>Services become too large.</li>
        <li>Database models are mixed with business rules.</li>
        <li>It becomes hard to know where a rule belongs.</li>
        <li>It becomes hard to test the domain without Spring.</li>
      </ul>
      <p>DDD helps solve these problems by putting the domain model at the center.</p>

      <h2>Important DDD Concepts</h2>
      <h3>Domain</h3>
      <p>The domain is the business area that the software is built for.</p>
      <p>For example, in an e-commerce system, the domain may include:</p>
      <ul>
        <li>Customers</li>
        <li>Orders</li>
        <li>Payments</li>
        <li>Products</li>
        <li>Shipping</li>
        <li>Invoices</li>
      </ul>
      <p>The domain is not the database. It is not the framework. It is the business problem.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-java">{`public class Order {
    private final OrderId id;
    private final CustomerId customerId;
    private final List<OrderItem> items;
    private OrderStatus status;

    public void confirm() {
        if (items.isEmpty()) {
            throw new IllegalStateException("An order must have at least one item");
        }

        this.status = OrderStatus.CONFIRMED;
    }
}`}</code></pre>
      <p>The rule is clear:</p>
      <pre className="article-code"><code className="language-text">{`An order cannot be confirmed if it has no items.`}</code></pre>
      <p>That rule belongs to the business, not to the controller or database.</p>

      <h3>Ubiquitous Language</h3>
      <p>Ubiquitous Language means that developers and business people use the same language.</p>
      <p>If the business says:</p>
      <pre className="article-code"><code className="language-text">{`An Order can be confirmed.
A Payment can be rejected.
A Customer can be suspended.`}</code></pre>
      <p>The code should use the same words:</p>
      <pre className="article-code"><code className="language-java">{`order.confirm();
payment.reject();
customer.suspend();`}</code></pre>
      <p>Avoid unclear technical names:</p>
      <pre className="article-code"><code className="language-java">{`order.updateStatus("CONFIRMED");
payment.setState("REJECTED");
customer.setActive(false);`}</code></pre>
      <p>The first version is better because it speaks the business language.</p>

      <h3>Bounded Context</h3>
      <p>A bounded context is a clear boundary where a model has a specific meaning.</p>
      <p>The same word can mean different things in different contexts.</p>
      <div className="article-table-wrapper">
        <table className="article-table">
          <thead>
            <tr>
              <th>Context</th>
              <th>Meaning of Customer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sales</td>
              <td>A person who buys products</td>
            </tr>
            <tr>
              <td>Support</td>
              <td>A person who opens tickets</td>
            </tr>
            <tr>
              <td>Billing</td>
              <td>A person who receives invoices</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>In code, each context can have its own model:</p>
      <pre className="article-code"><code className="language-text">{`sales-context
billing-context
support-context`}</code></pre>
      <p>Example:</p>
      <pre className="article-code"><code className="language-java">{`// Sales context
public class Customer {
    private CustomerId id;
    private String name;
    private CustomerStatus status;
}`}</code></pre>
      <pre className="article-code"><code className="language-java">{`// Billing context
public class Customer {
    private CustomerId id;
    private BillingAddress billingAddress;
    private TaxId taxId;
}`}</code></pre>
      <p>Both classes are called <code>Customer</code>, but they belong to different contexts.</p>

      <h3>Entity</h3>
      <p>An entity is an object with identity.</p>
      <p>Two entities can have the same data but still be different because they have different IDs.</p>
      <pre className="article-code"><code className="language-java">{`public class Customer {
    private final CustomerId id;
    private String name;
    private Email email;

    public Customer(CustomerId id, String name, Email email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public CustomerId id() {
        return id;
    }

    public void changeEmail(Email newEmail) {
        if (newEmail == null) {
            throw new IllegalArgumentException("Email cannot be null");
        }

        this.email = newEmail;
    }
}`}</code></pre>
      <p>This is an entity because <code>CustomerId</code> defines its identity.</p>

      <h3>Value Object</h3>
      <p>A value object is an object without identity. It is defined by its values.</p>
      <p>Good examples:</p>
      <ul>
        <li>Money</li>
        <li>Address</li>
        <li>Email</li>
        <li>PhoneNumber</li>
        <li>DateRange</li>
      </ul>
      <p>Value objects should usually be immutable.</p>
      <p>Example using Java records:</p>
      <pre className="article-code"><code className="language-java">{`public record Email(String value) {
    public Email {
        if (value == null || value.isBlank()) {
            throw new IllegalArgumentException("Email cannot be empty");
        }

        if (!value.contains("@")) {
            throw new IllegalArgumentException("Invalid email");
        }
    }
}`}</code></pre>
      <p>Another example:</p>
      <pre className="article-code"><code className="language-java">{`import java.math.BigDecimal;
import java.util.Currency;

public record Money(BigDecimal amount, Currency currency) {
    public Money {
        if (amount == null) {
            throw new IllegalArgumentException("Amount cannot be null");
        }

        if (currency == null) {
            throw new IllegalArgumentException("Currency cannot be null");
        }

        if (amount.signum() < 0) {
            throw new IllegalArgumentException("Amount cannot be negative");
        }
    }

    public Money add(Money other) {
        if (!currency.equals(other.currency())) {
            throw new IllegalArgumentException("Currencies must be the same");
        }

        return new Money(amount.add(other.amount()), currency);
    }
}`}</code></pre>
      <p>Value objects help make invalid states harder to create.</p>

      <h3>Aggregate</h3>
      <p>An aggregate is a group of related domain objects that are treated as one consistency boundary.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`Order
|-- OrderItem
+-- ShippingAddress`}</code></pre>
      <p>In this case, <code>Order</code> is the aggregate root.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.ArrayList;
import java.util.List;

public class Order {
    private final OrderId id;
    private final CustomerId customerId;
    private final List<OrderItem> items = new ArrayList<>();
    private OrderStatus status = OrderStatus.DRAFT;

    public Order(OrderId id, CustomerId customerId) {
        this.id = id;
        this.customerId = customerId;
    }

    public void addItem(ProductId productId, int quantity, Money price) {
        if (status != OrderStatus.DRAFT) {
            throw new IllegalStateException("Cannot add items to a confirmed order");
        }

        if (quantity <= 0) {
            throw new IllegalArgumentException("Quantity must be greater than zero");
        }

        items.add(new OrderItem(productId, quantity, price));
    }

    public void confirm() {
        if (items.isEmpty()) {
            throw new IllegalStateException("Order must have at least one item");
        }

        this.status = OrderStatus.CONFIRMED;
    }
}`}</code></pre>
      <p>External objects should not modify <code>OrderItem</code> directly. They should go through the <code>Order</code> aggregate root.</p>

      <h3>Aggregate Root</h3>
      <p>The aggregate root is the only object that other parts of the application should use directly.</p>
      <p>Bad example:</p>
      <pre className="article-code"><code className="language-java">{`order.getItems().add(new OrderItem(productId, 1, price));`}</code></pre>
      <p>Better example:</p>
      <pre className="article-code"><code className="language-java">{`order.addItem(productId, 1, price);`}</code></pre>
      <p>The second version keeps the rule inside the aggregate root.</p>

      <h3>Repository</h3>
      <p>A repository is used to load and save aggregates.</p>
      <p>In DDD, a repository belongs to the domain as an abstraction. The implementation can live in the infrastructure layer.</p>
      <p>Domain interface:</p>
      <pre className="article-code"><code className="language-java">{`import java.util.Optional;

public interface OrderRepository {
    Optional<Order> findById(OrderId id);

    void save(Order order);
}`}</code></pre>
      <p>Infrastructure implementation:</p>
      <pre className="article-code"><code className="language-java">{`import org.springframework.stereotype.Repository;

@Repository
public class JpaOrderRepository implements OrderRepository {
    private final SpringDataOrderJpaRepository jpaRepository;
    private final OrderMapper mapper;

    public JpaOrderRepository(
            SpringDataOrderJpaRepository jpaRepository,
            OrderMapper mapper
    ) {
        this.jpaRepository = jpaRepository;
        this.mapper = mapper;
    }

    @Override
    public Optional<Order> findById(OrderId id) {
        return jpaRepository.findById(id.value())
                .map(mapper::toDomain);
    }

    @Override
    public void save(Order order) {
        OrderJpaEntity entity = mapper.toEntity(order);
        jpaRepository.save(entity);
    }
}`}</code></pre>
      <p>This keeps the domain independent from JPA.</p>

      <h3>Domain Service</h3>
      <p>A domain service contains business logic that does not naturally belong to one entity or value object.</p>
      <pre className="article-code"><code className="language-java">{`public class PricingService {
    public Money calculateTotal(Order order, DiscountPolicy discountPolicy) {
        Money subtotal = order.subtotal();

        return discountPolicy.apply(subtotal);
    }
}`}</code></pre>
      <p>Use a domain service when the logic is part of the domain but does not fit well inside one aggregate.</p>
      <p>Avoid using domain services as a place to put all business logic. Many rules still belong inside entities and aggregates.</p>

      <h3>Application Service</h3>
      <p>An application service coordinates a use case.</p>
      <p>It usually:</p>
      <ul>
        <li>Receives a command or request.</li>
        <li>Loads aggregates.</li>
        <li>Calls domain behavior.</li>
        <li>Saves changes.</li>
        <li>Publishes events if needed.</li>
      </ul>
      <pre className="article-code"><code className="language-java">{`import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ConfirmOrderUseCase {
    private final OrderRepository orderRepository;

    public ConfirmOrderUseCase(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Transactional
    public void execute(ConfirmOrderCommand command) {
        Order order = orderRepository.findById(command.orderId())
                .orElseThrow(() -> new OrderNotFoundException(command.orderId()));

        order.confirm();

        orderRepository.save(order);
    }
}`}</code></pre>
      <p>Command:</p>
      <pre className="article-code"><code className="language-java">{`public record ConfirmOrderCommand(OrderId orderId) {}`}</code></pre>
      <p>The application service does not decide if the order can be confirmed. The domain object does.</p>

      <h3>Domain Event</h3>
      <p>A domain event represents something important that happened in the domain.</p>
      <p>Examples:</p>
      <ul>
        <li><code>OrderConfirmed</code></li>
        <li><code>PaymentApproved</code></li>
        <li><code>CustomerRegistered</code></li>
        <li><code>InvoiceGenerated</code></li>
      </ul>
      <pre className="article-code"><code className="language-java">{`import java.time.Instant;

public record OrderConfirmed(
        OrderId orderId,
        CustomerId customerId,
        Instant occurredAt
) {}`}</code></pre>
      <p>Inside the aggregate:</p>
      <pre className="article-code"><code className="language-java">{`public class Order {
    private final List<Object> domainEvents = new ArrayList<>();

    public void confirm() {
        if (items.isEmpty()) {
            throw new IllegalStateException("Order must have at least one item");
        }

        this.status = OrderStatus.CONFIRMED;
        domainEvents.add(new OrderConfirmed(id, customerId, Instant.now()));
    }

    public List<Object> pullDomainEvents() {
        List<Object> events = List.copyOf(domainEvents);
        domainEvents.clear();
        return events;
    }
}`}</code></pre>
      <p>Domain events help decouple parts of the system.</p>

      <h3>Factory</h3>
      <p>A factory creates complex domain objects.</p>
      <p>Use a factory when creating an aggregate requires rules or several steps.</p>
      <pre className="article-code"><code className="language-java">{`public class OrderFactory {
    public Order createDraftOrder(CustomerId customerId) {
        OrderId orderId = OrderId.newId();

        return new Order(orderId, customerId);
    }
}`}</code></pre>
      <p>Factories are useful when constructors become too complex.</p>

      <h3>Specification</h3>
      <p>A specification represents a business rule that can be checked.</p>
      <pre className="article-code"><code className="language-java">{`public interface Specification<T> {
    boolean isSatisfiedBy(T candidate);
}`}</code></pre>
      <pre className="article-code"><code className="language-java">{`public class CustomerCanPlaceOrderSpecification implements Specification<Customer> {
    @Override
    public boolean isSatisfiedBy(Customer customer) {
        return customer.isActive() && !customer.isSuspended();
    }
}`}</code></pre>
      <p>Usage:</p>
      <pre className="article-code"><code className="language-java">{`if (!customerCanPlaceOrderSpecification.isSatisfiedBy(customer)) {
    throw new IllegalStateException("Customer cannot place orders");
}`}</code></pre>
      <p>Specifications are useful for complex business rules that need a clear name.</p>

      <h2>Layers in a DDD Spring Boot Application</h2>
      <p>A common DDD structure can have these layers:</p>
      <pre className="article-code"><code className="language-text">{`domain
application
infrastructure
interfaces`}</code></pre>

      <h3>Domain Layer</h3>
      <p>Contains the business model and business rules.</p>
      <p>Examples:</p>
      <ul>
        <li>Entities</li>
        <li>Value Objects</li>
        <li>Aggregates</li>
        <li>Domain Services</li>
        <li>Domain Events</li>
        <li>Repository interfaces</li>
      </ul>
      <p>The domain should not depend on Spring, JPA, HTTP, or databases.</p>

      <h3>Application Layer</h3>
      <p>Contains use cases.</p>
      <p>Examples:</p>
      <ul>
        <li>CreateOrderUseCase</li>
        <li>ConfirmOrderUseCase</li>
        <li>CancelOrderUseCase</li>
        <li>Commands</li>
        <li>Application DTOs</li>
        <li>Transaction boundaries</li>
      </ul>

      <h3>Infrastructure Layer</h3>
      <p>Contains technical details.</p>
      <p>Examples:</p>
      <ul>
        <li>JPA entities</li>
        <li>Spring Data repositories</li>
        <li>Mappers</li>
        <li>External API clients</li>
        <li>Messaging implementations</li>
        <li>File storage</li>
        <li>Email providers</li>
      </ul>

      <h3>Interfaces Layer</h3>
      <p>Contains entry points to the application.</p>
      <p>Examples:</p>
      <ul>
        <li>REST controllers</li>
        <li>Request DTOs</li>
        <li>Response DTOs</li>
        <li>Exception handlers</li>
        <li>API mappers</li>
      </ul>

      <h2>Proposed Multi-Module Project Structure</h2>
      <p>For a real Spring Boot project, a multi-module structure can help keep boundaries clear.</p>
      <pre className="article-code"><code className="language-text">{`spring-ddd-example
|-- pom.xml
|-- order-domain
|-- order-application
|-- order-infrastructure
|-- order-interfaces
+-- order-bootstrap`}</code></pre>

      <h2>Module Responsibilities</h2>
      <h3>order-domain</h3>
      <p>This module contains the core business logic.</p>
      <pre className="article-code"><code className="language-text">{`order-domain
+-- src/main/java/com/example/order/domain
    |-- model
    |   |-- Order.java
    |   |-- OrderItem.java
    |   |-- OrderStatus.java
    |   |-- OrderId.java
    |   |-- CustomerId.java
    |   +-- Money.java
    |-- event
    |   +-- OrderConfirmed.java
    |-- repository
    |   +-- OrderRepository.java
    |-- service
    |   +-- PricingService.java
    +-- specification
        +-- CustomerCanPlaceOrderSpecification.java`}</code></pre>
      <p>Rules:</p>
      <ul>
        <li>No Spring annotations are required.</li>
        <li>No JPA annotations.</li>
        <li>No database code.</li>
        <li>No REST code.</li>
        <li>No dependency on infrastructure.</li>
      </ul>
      <p>Dependency:</p>
      <pre className="article-code"><code className="language-text">{`order-domain -> no internal module dependency`}</code></pre>

      <h3>order-application</h3>
      <p>This module contains use cases.</p>
      <pre className="article-code"><code className="language-text">{`order-application
+-- src/main/java/com/example/order/application
    |-- command
    |   |-- CreateOrderCommand.java
    |   +-- ConfirmOrderCommand.java
    |-- usecase
    |   |-- CreateOrderUseCase.java
    |   +-- ConfirmOrderUseCase.java
    |-- port
    |   |-- PaymentGateway.java
    |   +-- DomainEventPublisher.java
    +-- dto
        +-- OrderSummary.java`}</code></pre>
      <p>Rules:</p>
      <ul>
        <li>Depends on <code>order-domain</code>.</li>
        <li>Coordinates use cases.</li>
        <li>Defines ports for external systems.</li>
        <li>Does not know implementation details.</li>
      </ul>
      <p>Dependency:</p>
      <pre className="article-code"><code className="language-text">{`order-application -> order-domain`}</code></pre>
      <p>Example use case:</p>
      <pre className="article-code"><code className="language-java">{`@Service
public class CreateOrderUseCase {
    private final OrderRepository orderRepository;
    private final DomainEventPublisher eventPublisher;

    public CreateOrderUseCase(
            OrderRepository orderRepository,
            DomainEventPublisher eventPublisher
    ) {
        this.orderRepository = orderRepository;
        this.eventPublisher = eventPublisher;
    }

    @Transactional
    public OrderId execute(CreateOrderCommand command) {
        Order order = new Order(OrderId.newId(), command.customerId());

        command.items().forEach(item ->
                order.addItem(item.productId(), item.quantity(), item.price())
        );

        orderRepository.save(order);
        order.pullDomainEvents().forEach(eventPublisher::publish);

        return order.id();
    }
}`}</code></pre>

      <h3>order-infrastructure</h3>
      <p>This module contains technical implementations.</p>
      <pre className="article-code"><code className="language-text">{`order-infrastructure
+-- src/main/java/com/example/order/infrastructure
    |-- persistence
    |   |-- OrderJpaEntity.java
    |   |-- OrderItemJpaEntity.java
    |   |-- SpringDataOrderJpaRepository.java
    |   |-- JpaOrderRepository.java
    |   +-- OrderPersistenceMapper.java
    |-- messaging
    |   +-- SpringDomainEventPublisher.java
    +-- payment
        +-- StripePaymentGateway.java`}</code></pre>
      <p>Rules:</p>
      <ul>
        <li>Depends on <code>order-domain</code>.</li>
        <li>Depends on <code>order-application</code>.</li>
        <li>Implements repository interfaces and application ports.</li>
        <li>Contains Spring, JPA, Kafka, HTTP clients, and other technical tools.</li>
      </ul>
      <p>Dependency:</p>
      <pre className="article-code"><code className="language-text">{`order-infrastructure -> order-application
order-infrastructure -> order-domain`}</code></pre>

      <h3>order-interfaces</h3>
      <p>This module contains REST APIs or other input adapters.</p>
      <pre className="article-code"><code className="language-text">{`order-interfaces
+-- src/main/java/com/example/order/interfaces
    |-- rest
    |   |-- OrderController.java
    |   |-- CreateOrderRequest.java
    |   |-- OrderResponse.java
    |   +-- OrderRestMapper.java
    +-- error
        +-- RestExceptionHandler.java`}</code></pre>
      <p>Rules:</p>
      <ul>
        <li>Depends on <code>order-application</code>.</li>
        <li>Converts HTTP requests into commands.</li>
        <li>Converts application results into HTTP responses.</li>
        <li>Does not contain business rules.</li>
      </ul>
      <p>Example controller:</p>
      <pre className="article-code"><code className="language-java">{`import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
public class OrderController {
    private final CreateOrderUseCase createOrderUseCase;
    private final ConfirmOrderUseCase confirmOrderUseCase;
    private final OrderRestMapper mapper;

    public OrderController(
            CreateOrderUseCase createOrderUseCase,
            ConfirmOrderUseCase confirmOrderUseCase,
            OrderRestMapper mapper
    ) {
        this.createOrderUseCase = createOrderUseCase;
        this.confirmOrderUseCase = confirmOrderUseCase;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity<OrderResponse> create(@RequestBody CreateOrderRequest request) {
        CreateOrderCommand command = mapper.toCommand(request);
        OrderId orderId = createOrderUseCase.execute(command);

        return ResponseEntity.ok(new OrderResponse(orderId.value()));
    }

    @PostMapping("/{orderId}/confirm")
    public ResponseEntity<Void> confirm(@PathVariable String orderId) {
        confirmOrderUseCase.execute(
                new ConfirmOrderCommand(new OrderId(orderId))
        );

        return ResponseEntity.noContent().build();
    }
}`}</code></pre>
      <p>Dependency:</p>
      <pre className="article-code"><code className="language-text">{`order-interfaces -> order-application`}</code></pre>

      <h3>order-bootstrap</h3>
      <p>This module starts the Spring Boot application.</p>
      <pre className="article-code"><code className="language-text">{`order-bootstrap
+-- src/main/java/com/example/order
    +-- OrderApplication.java`}</code></pre>
      <pre className="article-code"><code className="language-java">{`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.example.order")
public class OrderApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderApplication.class, args);
    }
}`}</code></pre>
      <p>Rules:</p>
      <ul>
        <li>Depends on all modules.</li>
        <li>Contains Spring Boot configuration.</li>
        <li>Starts the application.</li>
      </ul>
      <p>Dependency:</p>
      <pre className="article-code"><code className="language-text">{`order-bootstrap -> order-interfaces
order-bootstrap -> order-infrastructure
order-bootstrap -> order-application
order-bootstrap -> order-domain`}</code></pre>

      <h2>Dependency Direction</h2>
      <p>The most important rule is dependency direction.</p>
      <pre className="article-code"><code className="language-text">{`interfaces      -> application -> domain
infrastructure  -> application -> domain
bootstrap       -> all modules`}</code></pre>
      <p>The domain must not depend on infrastructure.</p>
      <p>Bad:</p>
      <pre className="article-code"><code className="language-text">{`domain -> infrastructure
domain -> JPA
domain -> Spring MVC`}</code></pre>
      <p>Good:</p>
      <pre className="article-code"><code className="language-text">{`infrastructure -> domain
application -> domain
interfaces -> application`}</code></pre>
      <p>This keeps the business logic clean and testable.</p>

      <h2>Maven Multi-Module Example</h2>
      <p>Parent <code>pom.xml</code>:</p>
      <pre className="article-code"><code className="language-xml">{`<project>
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>spring-ddd-example</artifactId>
    <version>1.0.0</version>
    <packaging>pom</packaging>

    <modules>
        <module>order-domain</module>
        <module>order-application</module>
        <module>order-infrastructure</module>
        <module>order-interfaces</module>
        <module>order-bootstrap</module>
    </modules>
</project>`}</code></pre>
      <p><code>order-application/pom.xml</code>:</p>
      <pre className="article-code"><code className="language-xml">{`<dependencies>
    <dependency>
        <groupId>com.example</groupId>
        <artifactId>order-domain</artifactId>
        <version>\${project.version}</version>
    </dependency>
</dependencies>`}</code></pre>
      <p><code>order-infrastructure/pom.xml</code>:</p>
      <pre className="article-code"><code className="language-xml">{`<dependencies>
    <dependency>
        <groupId>com.example</groupId>
        <artifactId>order-domain</artifactId>
        <version>\${project.version}</version>
    </dependency>

    <dependency>
        <groupId>com.example</groupId>
        <artifactId>order-application</artifactId>
        <version>\${project.version}</version>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
</dependencies>`}</code></pre>
      <p><code>order-bootstrap/pom.xml</code>:</p>
      <pre className="article-code"><code className="language-xml">{`<dependencies>
    <dependency>
        <groupId>com.example</groupId>
        <artifactId>order-interfaces</artifactId>
        <version>\${project.version}</version>
    </dependency>

    <dependency>
        <groupId>com.example</groupId>
        <artifactId>order-infrastructure</artifactId>
        <version>\${project.version}</version>
    </dependency>
</dependencies>`}</code></pre>

      <h2>Package-by-Layer vs Package-by-Feature</h2>
      <p>A common Spring Boot structure is package-by-layer:</p>
      <pre className="article-code"><code className="language-text">{`controller
service
repository
entity`}</code></pre>
      <p>This can work for small projects, but large projects often become harder to maintain.</p>
      <p>DDD works better with package-by-feature or package-by-context:</p>
      <pre className="article-code"><code className="language-text">{`order
payment
customer
shipping`}</code></pre>
      <p>Inside each context, you can still use layers:</p>
      <pre className="article-code"><code className="language-text">{`order
|-- domain
|-- application
|-- infrastructure
+-- interfaces`}</code></pre>
      <p>This keeps business boundaries more visible.</p>

      <h2>When Should You Use Multi-Module DDD?</h2>
      <p>Use this approach when:</p>
      <ul>
        <li>The project has complex business rules.</li>
        <li>The domain is expected to grow.</li>
        <li>Multiple teams work on the codebase.</li>
        <li>You want stronger boundaries.</li>
        <li>You want to test the domain without Spring.</li>
        <li>You want to avoid mixing business logic with infrastructure.</li>
      </ul>
      <p>Do not use it blindly for every project. For a small CRUD application, this can be too much.</p>

      <h2>Conclusion</h2>
      <p>DDD is not only about folders or layers. It is about modeling the business correctly.</p>
      <p>A good Spring Boot DDD project should:</p>
      <ul>
        <li>Use the language of the business.</li>
        <li>Keep business rules inside the domain.</li>
        <li>Protect aggregates through aggregate roots.</li>
        <li>Use repositories as abstractions.</li>
        <li>Keep infrastructure outside the domain.</li>
        <li>Use application services to coordinate use cases.</li>
        <li>Use multi-modules to enforce boundaries.</li>
      </ul>
      <p>This structure may look more complex than a traditional Spring Boot project, but it helps when the business logic grows.</p>
      <p>For interviews and real projects, the most important idea is simple:</p>
      <blockquote>The domain should not depend on technical details. Technical details should depend on the domain.</blockquote>
    </ArticleLayout>
  );
};

export default SpringBootDddPost;
