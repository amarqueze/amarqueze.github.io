import React from "react";
import ArticleLayout from "../../components/ArticleLayout.jsx";

const EventDrivenArchitecturePost = () => {
  return (
    <ArticleLayout
      tag="Spring Boot"
      title="Event-Driven Architecture with Spring Boot"
      subtitle="Exploring domain events, Spring application events, Kafka integration, and event-driven patterns in modern Java applications."
      date="August 7 2025"
      readingTime="1 h read"
      image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
    >
      <h2>Exploring Domain Events in Modern Java Applications</h2>
      <p>Modern backend systems are becoming more distributed, scalable, and asynchronous. Instead of building large systems where every component directly calls another component, many teams are moving toward Event-Driven Architecture, or EDA.</p>
      <p>In Java and Spring Boot projects, Event-Driven Architecture works especially well when combined with Domain-Driven Design, or DDD.</p>
      <p>This article explains:</p>
      <ul>
        <li>What Event-Driven Architecture is</li>
        <li>What domain events are</li>
        <li>Why domain events matter in DDD</li>
        <li>How to implement domain events in Spring Boot</li>
        <li>Synchronous vs asynchronous events</li>
        <li>Integration events vs domain events</li>
        <li>Event publishing patterns</li>
        <li>Kafka integration</li>
        <li>Common mistakes</li>
        <li>A practical project structure</li>
      </ul>
      <p>The examples use Java 21 and Spring Boot.</p>

      <h2>What Is Event-Driven Architecture?</h2>
      <p>Event-Driven Architecture is a design approach where components communicate through events.</p>
      <p>Instead of this:</p>
      <pre className="article-code"><code className="language-text">{`Order Service --> Payment Service --> Email Service --> Shipping Service`}</code></pre>
      <p>We can use events:</p>
      <pre className="article-code"><code className="language-text">{`Order Service --> OrderConfirmed Event
                          |
         -----------------------------------
         |                |                |
   Payment Service   Email Service   Shipping Service`}</code></pre>
      <p>The producer of the event does not need to know who consumes the event.</p>
      <p>This creates:</p>
      <ul>
        <li>Lower coupling</li>
        <li>Better scalability</li>
        <li>Better extensibility</li>
        <li>More flexibility</li>
        <li>Easier asynchronous workflows</li>
      </ul>

      <h2>What Is a Domain Event?</h2>
      <p>A domain event represents something important that happened inside the business domain.</p>
      <p>Examples:</p>
      <ul>
        <li>OrderConfirmed</li>
        <li>PaymentApproved</li>
        <li>CustomerRegistered</li>
        <li>InvoiceGenerated</li>
        <li>ShipmentDelivered</li>
      </ul>
      <p>A domain event is not just a technical message.</p>
      <p>It represents a business fact.</p>
      <p>For example:</p>
      <pre className="article-code"><code className="language-text">{`The order was confirmed.`}</code></pre>
      <p>Not:</p>
      <pre className="article-code"><code className="language-text">{`updateOrderStatus()`}</code></pre>
      <p>Domain events are part of the ubiquitous language from DDD.</p>

      <h2>Why Domain Events Matter</h2>
      <p>Without events, services often become tightly coupled.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-java">{`@Service
public class OrderService {
    private final PaymentService paymentService;
    private final EmailService emailService;
    private final ShippingService shippingService;

    public void confirmOrder(Order order) {
        order.confirm();

        paymentService.process(order);
        emailService.sendConfirmation(order);
        shippingService.prepareShipment(order);
    }
}`}</code></pre>
      <p>Problems:</p>
      <ul>
        <li>The order service knows too much</li>
        <li>Hard to extend</li>
        <li>Hard to test</li>
        <li>Hard to scale</li>
        <li>Hard to reuse</li>
      </ul>
      <p>With domain events:</p>
      <pre className="article-code"><code className="language-java">{`@Service
public class OrderService {
    private final DomainEventPublisher eventPublisher;

    public void confirmOrder(Order order) {
        order.confirm();

        eventPublisher.publish(
                new OrderConfirmed(order.id(), order.customerId())
        );
    }
}`}</code></pre>
      <p>Now other parts of the system react independently.</p>

      <h2>Domain Events vs Integration Events</h2>
      <p>This is one of the most important concepts.</p>

      <h3>Domain Event</h3>
      <p>A domain event is an internal event that represents something important inside the domain.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`OrderConfirmed`}</code></pre>
      <p>Usually, a domain event:</p>
      <ul>
        <li>Exists inside one bounded context</li>
        <li>Uses domain language</li>
        <li>Contains domain objects or IDs</li>
        <li>Is used inside the application</li>
      </ul>

      <h3>Integration Event</h3>
      <p>An integration event is an external event used for communication between services.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-json">{`{
  "eventType": "order-confirmed",
  "orderId": "123",
  "customerId": "456",
  "occurredAt": "2026-01-01T10:00:00Z"
}`}</code></pre>
      <p>Usually, an integration event is:</p>
      <ul>
        <li>Sent through Kafka, RabbitMQ, SNS/SQS, or another broker</li>
        <li>Stable and versioned</li>
        <li>Used between microservices</li>
        <li>Technology-independent</li>
      </ul>

      <h2>A Simple Order Flow</h2>
      <p>Example business flow:</p>
      <pre className="article-code"><code className="language-text">{`Customer confirms order
        |
        v
Order aggregate changes state
        |
        v
OrderConfirmed domain event is created
        |
        v
Application publishes event
        |
        v
Consumers react:
- Payment
- Notifications
- Shipping
- Analytics`}</code></pre>

      <h2>Modeling Domain Events</h2>
      <p>A domain event should be immutable.</p>
      <p>Java records are perfect for this.</p>
      <pre className="article-code"><code className="language-java">{`import java.time.Instant;

public record OrderConfirmed(
        OrderId orderId,
        CustomerId customerId,
        Instant occurredAt
) {}`}</code></pre>
      <p>This event represents a business fact.</p>

      <h2>Creating Events Inside the Aggregate</h2>
      <p>One of the most common DDD patterns is storing events inside aggregates.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-java">{`import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

public class Order {
    private final OrderId id;
    private final CustomerId customerId;
    private OrderStatus status;

    private final List<Object> domainEvents = new ArrayList<>();

    public Order(OrderId id, CustomerId customerId) {
        this.id = id;
        this.customerId = customerId;
        this.status = OrderStatus.DRAFT;
    }

    public void confirm() {
        if (status == OrderStatus.CONFIRMED) {
            throw new IllegalStateException("Order already confirmed");
        }

        this.status = OrderStatus.CONFIRMED;

        domainEvents.add(
                new OrderConfirmed(id, customerId, Instant.now())
        );
    }

    public List<Object> pullDomainEvents() {
        List<Object> events = List.copyOf(domainEvents);
        domainEvents.clear();
        return events;
    }
}`}</code></pre>
      <p>The aggregate creates the event because the aggregate knows the business rules.</p>

      <h2>Publishing Domain Events</h2>
      <p>The application layer usually publishes the events.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-java">{`@Service
public class ConfirmOrderUseCase {
    private final OrderRepository orderRepository;
    private final DomainEventPublisher eventPublisher;

    public ConfirmOrderUseCase(
            OrderRepository orderRepository,
            DomainEventPublisher eventPublisher
    ) {
        this.orderRepository = orderRepository;
        this.eventPublisher = eventPublisher;
    }

    @Transactional
    public void execute(OrderId orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow();

        order.confirm();

        orderRepository.save(order);

        order.pullDomainEvents()
                .forEach(eventPublisher::publish);
    }
}`}</code></pre>
      <p>Notice:</p>
      <ul>
        <li>The aggregate creates the event</li>
        <li>The application layer publishes the event</li>
        <li>Infrastructure handles delivery</li>
      </ul>
      <p>This separation is important.</p>

      <h2>Creating a Domain Event Publisher</h2>
      <p>Interface:</p>
      <pre className="article-code"><code className="language-java">{`public interface DomainEventPublisher {
    void publish(Object event);
}`}</code></pre>
      <p>Spring implementation:</p>
      <pre className="article-code"><code className="language-java">{`import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

@Component
public class SpringDomainEventPublisher implements DomainEventPublisher {
    private final ApplicationEventPublisher publisher;

    public SpringDomainEventPublisher(ApplicationEventPublisher publisher) {
        this.publisher = publisher;
    }

    @Override
    public void publish(Object event) {
        publisher.publishEvent(event);
    }
}`}</code></pre>

      <h2>Listening to Events in Spring Boot</h2>
      <p>Spring Boot makes event listeners simple.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-java">{`import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class SendOrderConfirmationEmailHandler {

    @EventListener
    public void handle(OrderConfirmed event) {
        System.out.println(
                "Sending confirmation email for order: "
                        + event.orderId()
        );
    }
}`}</code></pre>
      <p>Another listener:</p>
      <pre className="article-code"><code className="language-java">{`@Component
public class StartShippingProcessHandler {

    @EventListener
    public void handle(OrderConfirmed event) {
        System.out.println(
                "Preparing shipment for order: "
                        + event.orderId()
        );
    }
}`}</code></pre>
      <p>The publisher does not know these listeners exist.</p>
      <p>This is decoupling.</p>

      <h2>Synchronous Events</h2>
      <p>By default, Spring events are synchronous.</p>
      <p>This means:</p>
      <pre className="article-code"><code className="language-text">{`publish event
    |
    v
execute listeners immediately
    |
    v
return control`}</code></pre>
      <p>Advantages:</p>
      <ul>
        <li>Simple</li>
        <li>Easy to debug</li>
        <li>Same transaction</li>
        <li>No eventual consistency</li>
      </ul>
      <p>Disadvantages:</p>
      <ul>
        <li>Slow listeners slow the request</li>
        <li>Failures affect the transaction</li>
        <li>Less scalable</li>
      </ul>

      <h2>Asynchronous Events</h2>
      <p>Spring also supports asynchronous listeners.</p>
      <p>Enable async support:</p>
      <pre className="article-code"><code className="language-java">{`import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;

@Configuration
@EnableAsync
public class AsyncConfig {}`}</code></pre>
      <p>Async listener:</p>
      <pre className="article-code"><code className="language-java">{`import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Component
public class AsyncEmailHandler {

    @Async
    @EventListener
    public void handle(OrderConfirmed event) {
        System.out.println(
                "Sending async email for order: "
                        + event.orderId()
        );
    }
}`}</code></pre>
      <p>Advantages:</p>
      <ul>
        <li>Faster requests</li>
        <li>Better scalability</li>
        <li>Better separation</li>
      </ul>
      <p>Disadvantages:</p>
      <ul>
        <li>Eventual consistency</li>
        <li>Harder debugging</li>
        <li>Retry handling needed</li>
      </ul>

      <h2>Transactional Event Listeners</h2>
      <p>Sometimes you only want to process events after the transaction commits.</p>
      <p>Spring supports this.</p>
      <pre className="article-code"><code className="language-java">{`import org.springframework.stereotype.Component;
import org.springframework.transaction.event.TransactionalEventListener;
import org.springframework.transaction.event.TransactionPhase;

@Component
public class InvoiceGenerationHandler {

    @TransactionalEventListener(
            phase = TransactionPhase.AFTER_COMMIT
    )
    public void handle(OrderConfirmed event) {
        System.out.println(
                "Generating invoice for order: "
                        + event.orderId()
        );
    }
}`}</code></pre>
      <p>This avoids sending events for rolled-back transactions.</p>

      <h2>What Is Kafka?</h2>
      <p>Apache Kafka is a distributed event streaming platform used for asynchronous communication between services.</p>
      <p>Kafka is commonly used in:</p>
      <ul>
        <li>Microservices</li>
        <li>Event-driven systems</li>
        <li>Analytics pipelines</li>
        <li>Real-time processing</li>
        <li>Log aggregation</li>
        <li>Distributed systems</li>
      </ul>
      <p>Kafka works using:</p>
      <pre className="article-code"><code className="language-text">{`Producer -> Topic -> Consumer`}</code></pre>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`Order Service -> orders.confirmed -> Shipping Service`}</code></pre>
      <p>The producer sends events to a topic.</p>
      <p>Consumers subscribe to the topic and process the events.</p>

      <h2>Important Kafka Concepts</h2>
      <h3>Producer</h3>
      <p>A producer publishes messages to Kafka.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-java">{`kafkaTemplate.send("orders.confirmed", event);`}</code></pre>

      <h3>Consumer</h3>
      <p>A consumer reads messages from Kafka topics.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-java">{`@KafkaListener(topics = "orders.confirmed")
public void consume(OrderConfirmedIntegrationEvent event) {
    System.out.println(event.orderId());
}`}</code></pre>

      <h3>Topic</h3>
      <p>A topic is a stream of events.</p>
      <p>Example topics:</p>
      <pre className="article-code"><code className="language-text">{`orders.confirmed
payments.approved
shipments.created`}</code></pre>
      <p>Topics are append-only logs.</p>
      <p>Events stay in Kafka for a configurable retention period.</p>

      <h3>Partition</h3>
      <p>Topics are divided into partitions.</p>
      <p>Partitions allow:</p>
      <ul>
        <li>Parallel processing</li>
        <li>Scalability</li>
        <li>High throughput</li>
      </ul>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`orders.confirmed
|-- partition-0
|-- partition-1
+-- partition-2`}</code></pre>
      <p>Kafka guarantees ordering only inside a partition.</p>

      <h3>Offset</h3>
      <p>Each event inside a partition has an offset.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`partition-0
0 -> event
1 -> event
2 -> event`}</code></pre>
      <p>Consumers track offsets to know which messages were already processed.</p>

      <h3>Consumer Group</h3>
      <p>A consumer group allows multiple consumers to share work.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`shipping-group
|-- consumer-1
+-- consumer-2`}</code></pre>
      <p>Kafka distributes partitions between consumers.</p>
      <p>This enables horizontal scaling.</p>

      <h2>Kafka Message Flow</h2>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`Order Service
     |
     v
Kafka Producer
     |
     v
orders.confirmed topic
     |
     +----> Shipping Consumer
     |
     +----> Email Consumer
     |
     +----> Analytics Consumer`}</code></pre>
      <p>This architecture creates strong decoupling.</p>

      <h2>Why Kafka Is Popular in Event-Driven Architectures</h2>
      <p>Kafka provides:</p>
      <ul>
        <li>High throughput</li>
        <li>Horizontal scalability</li>
        <li>Durability</li>
        <li>Event replay</li>
        <li>Loose coupling</li>
        <li>Fault tolerance</li>
        <li>Real-time processing</li>
      </ul>
      <p>It is especially useful when many systems need the same events.</p>

      <h2>Event Replay</h2>
      <p>One of Kafka's most powerful features is event replay.</p>
      <p>Because events stay in Kafka, consumers can reprocess old events.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`Rebuild analytics
Recreate projections
Recover failed consumers
Replay business workflows`}</code></pre>
      <p>Traditional message brokers often remove messages immediately after consumption.</p>
      <p>Kafka keeps them for a configurable time.</p>

      <h2>Ordering in Kafka</h2>
      <p>Kafka guarantees ordering inside a partition.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`OrderCreated
OrderConfirmed
OrderShipped`}</code></pre>
      <p>If all events for the same order go to the same partition, ordering is preserved.</p>
      <p>This is why Kafka keys are important.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-java">{`kafkaTemplate.send(
        "orders.confirmed",
        orderId,
        event
);`}</code></pre>
      <p>Using the same key sends related events to the same partition.</p>

      <h2>Delivery Semantics</h2>
      <p>Kafka supports different delivery guarantees.</p>

      <h3>At-most-once</h3>
      <p>Message may be lost.</p>
      <p>No retries.</p>

      <h3>At-least-once</h3>
      <p>Message may be delivered more than once.</p>
      <p>Consumers must be idempotent.</p>
      <p>This is the most common approach.</p>

      <h3>Exactly-once</h3>
      <p>Kafka guarantees no duplicates under specific configurations.</p>
      <p>This is more complex.</p>

      <h2>Idempotency</h2>
      <p>Kafka consumers should usually be idempotent.</p>
      <p>This means processing the same event multiple times should not break the system.</p>
      <p>Bad:</p>
      <pre className="article-code"><code className="language-text">{`Duplicate invoice created
Duplicate payment processed`}</code></pre>
      <p>Better:</p>
      <pre className="article-code"><code className="language-java">{`if (invoiceAlreadyExists(orderId)) {
    return;
}`}</code></pre>

      <h2>Kafka vs RabbitMQ</h2>
      <p>This is a common interview topic.</p>
      <div className="article-table-wrapper">
        <table className="article-table">
          <thead>
            <tr>
              <th>Kafka</th>
              <th>RabbitMQ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Event streaming platform</td>
              <td>Traditional message broker</td>
            </tr>
            <tr>
              <td>High throughput</td>
              <td>Flexible routing</td>
            </tr>
            <tr>
              <td>Event retention</td>
              <td>Messages removed after consumption</td>
            </tr>
            <tr>
              <td>Replay support</td>
              <td>Limited replay</td>
            </tr>
            <tr>
              <td>Partition-based scalability</td>
              <td>Queue-based</td>
            </tr>
            <tr>
              <td>Better for analytics and streams</td>
              <td>Better for task queues</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Kafka is usually better for event-driven systems and streaming.</p>
      <p>RabbitMQ is often simpler for traditional messaging patterns.</p>

      <h2>Kafka in DDD</h2>
      <p>Kafka is infrastructure.</p>
      <p>The domain should not depend on Kafka.</p>
      <p>Good architecture:</p>
      <pre className="article-code"><code className="language-text">{`Domain -> Application -> Infrastructure -> Kafka`}</code></pre>
      <p>Bad architecture:</p>
      <pre className="article-code"><code className="language-text">{`Domain -> Kafka`}</code></pre>
      <p>The aggregate creates domain events.</p>
      <p>Infrastructure publishes integration events to Kafka.</p>
      <p>This separation keeps the domain clean.</p>

      <h2>Using Kafka for Integration Events</h2>
      <p>Spring events work well inside one application.</p>
      <p>But for distributed systems, Kafka is a common choice.</p>
      <p>Example integration event:</p>
      <pre className="article-code"><code className="language-java">{`public record OrderConfirmedIntegrationEvent(
        String orderId,
        String customerId,
        Instant occurredAt
) {}`}</code></pre>
      <p>Kafka publisher:</p>
      <pre className="article-code"><code className="language-java">{`import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Component
public class KafkaOrderEventPublisher {
    private final KafkaTemplate<String, Object> kafkaTemplate;

    public KafkaOrderEventPublisher(
            KafkaTemplate<String, Object> kafkaTemplate
    ) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void publish(OrderConfirmedIntegrationEvent event) {
        kafkaTemplate.send(
                "orders.confirmed",
                event.orderId(),
                event
        );
    }
}`}</code></pre>
      <p>Kafka consumer:</p>
      <pre className="article-code"><code className="language-java">{`import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class OrderConfirmedKafkaConsumer {

    @KafkaListener(topics = "orders.confirmed")
    public void consume(OrderConfirmedIntegrationEvent event) {
        System.out.println(
                "Received Kafka event for order: "
                        + event.orderId()
        );
    }
}`}</code></pre>

      <h2>Domain Events in a Modular Monolith</h2>
      <p>Domain events are useful even without microservices.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`order-module
payment-module
shipping-module
notification-module`}</code></pre>
      <p>The order module publishes events.</p>
      <p>Other modules react independently.</p>
      <p>This creates:</p>
      <ul>
        <li>Better separation</li>
        <li>Easier future migration to microservices</li>
        <li>Lower coupling</li>
      </ul>
      <p>Many companies now prefer modular monoliths instead of starting with microservices.</p>

      <h2>Event Storming</h2>
      <p>Event Storming is a workshop technique from DDD.</p>
      <p>Teams identify important domain events.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`CustomerRegistered
OrderCreated
OrderConfirmed
PaymentApproved
InvoiceGenerated
ShipmentCreated
ShipmentDelivered`}</code></pre>
      <p>These events help teams understand:</p>
      <ul>
        <li>Business workflows</li>
        <li>Boundaries</li>
        <li>Aggregates</li>
        <li>Bounded contexts</li>
        <li>Integrations</li>
      </ul>
      <p>A good event model often leads to a better architecture.</p>

      <h2>Common Event-Driven Patterns</h2>
      <h3>Event Notification</h3>
      <p>A simple notification that something happened.</p>
      <pre className="article-code"><code className="language-text">{`OrderConfirmed`}</code></pre>

      <h3>Event-Carried State Transfer</h3>
      <p>The event includes all required data.</p>
      <pre className="article-code"><code className="language-json">{`{
  "orderId": "123",
  "customerName": "Alan",
  "total": 100.00
}`}</code></pre>
      <p>Consumers may not need another API call.</p>

      <h3>CQRS</h3>
      <p>Commands change state.</p>
      <p>Queries read state.</p>
      <p>Events synchronize read models.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`Command -> Aggregate -> Event -> Read Model`}</code></pre>

      <h3>Event Sourcing</h3>
      <p>The system stores events instead of only current state.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`OrderCreated
ItemAdded
ItemRemoved
OrderConfirmed`}</code></pre>
      <p>Current state is rebuilt from events.</p>
      <p>Event sourcing is powerful but adds complexity.</p>

      <h2>Recommended Project Structure</h2>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`order-domain
|-- model
|-- event
|-- repository
+-- service

order-application
|-- usecase
|-- command
+-- port

order-infrastructure
|-- persistence
|-- kafka
|-- messaging
+-- configuration

order-interfaces
+-- rest`}</code></pre>

      <h2>Example Event Package Structure</h2>
      <pre className="article-code"><code className="language-text">{`event
|-- domain
|   |-- OrderConfirmed.java
|   |-- PaymentApproved.java
|   +-- CustomerRegistered.java
|
|-- integration
|   |-- OrderConfirmedIntegrationEvent.java
|   +-- PaymentApprovedIntegrationEvent.java
|
+-- handler
    |-- SendEmailHandler.java
    |-- StartShippingHandler.java
    +-- GenerateInvoiceHandler.java`}</code></pre>
      <p>Keeping domain and integration events separate is very important.</p>

      <h2>Common Mistakes</h2>
      <h3>Using Events for Everything</h3>
      <p>Not every action should become an event.</p>
      <p>Good candidates:</p>
      <ul>
        <li>Business facts</li>
        <li>Important workflow changes</li>
        <li>Cross-module communication</li>
      </ul>
      <p>Bad candidates:</p>
      <ul>
        <li>Small technical actions</li>
        <li>Internal helper methods</li>
        <li>Temporary state changes</li>
      </ul>

      <h3>Publishing Integration Events Directly from Aggregates</h3>
      <p>Bad:</p>
      <pre className="article-code"><code className="language-java">{`order.confirm();
kafkaTemplate.send(...);`}</code></pre>
      <p>Aggregates should not know Kafka.</p>
      <p>The domain should stay independent.</p>

      <h3>Large Event Payloads</h3>
      <p>Events should be focused.</p>
      <p>Avoid sending entire aggregates.</p>
      <p>Bad:</p>
      <pre className="article-code"><code className="language-java">{`OrderConfirmed(order)`}</code></pre>
      <p>Better:</p>
      <pre className="article-code"><code className="language-java">{`OrderConfirmed(orderId, customerId, occurredAt)`}</code></pre>

      <h3>Ignoring Idempotency</h3>
      <p>Consumers may receive the same event multiple times.</p>
      <p>Consumers should handle duplicates safely.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-java">{`if (invoiceAlreadyExists(orderId)) {
    return;
}`}</code></pre>

      <h3>Mixing Domain Events and Integration Events</h3>
      <p>These are different concepts.</p>
      <p>Keep them separated.</p>

      <h2>When Should You Use Event-Driven Architecture?</h2>
      <p>Good use cases:</p>
      <ul>
        <li>Distributed systems</li>
        <li>Microservices</li>
        <li>Modular monoliths</li>
        <li>Asynchronous workflows</li>
        <li>Notifications</li>
        <li>Analytics pipelines</li>
        <li>Scalable systems</li>
      </ul>
      <p>Avoid unnecessary complexity for:</p>
      <ul>
        <li>Small CRUD applications</li>
        <li>Very simple systems</li>
        <li>Small prototypes</li>
      </ul>

      <h2>A Realistic Architecture Example</h2>
      <pre className="article-code"><code className="language-text">{`REST API
    |
    v
Application Service
    |
    v
Aggregate
    |
    v
Domain Event
    |
    v
Event Publisher
    |
    +----> Email Handler
    |
    +----> Invoice Handler
    |
    +----> Kafka Publisher
                     |
                     v
            External Microservices`}</code></pre>

      <h2>Final Thoughts</h2>
      <p>Event-Driven Architecture works very well with DDD because domain events represent business facts.</p>
      <p>A good event-driven design should:</p>
      <ul>
        <li>Keep the domain independent</li>
        <li>Use events to reduce coupling</li>
        <li>Separate domain events from integration events</li>
        <li>Publish events after business changes</li>
        <li>Use async communication carefully</li>
        <li>Protect aggregates and boundaries</li>
      </ul>
      <p>Spring Boot provides excellent tools for implementing event-driven systems:</p>
      <ul>
        <li><code>ApplicationEventPublisher</code></li>
        <li><code>@EventListener</code></li>
        <li><code>@TransactionalEventListener</code></li>
        <li>Kafka integration</li>
        <li>Async listeners</li>
      </ul>
      <p>The most important idea is simple:</p>
      <blockquote>Events should represent meaningful business actions, not technical implementation details.</blockquote>
      <p>When done correctly, domain events can make Java applications more modular, scalable, and easier to evolve over time.</p>
    </ArticleLayout>
  );
};

export default EventDrivenArchitecturePost;
