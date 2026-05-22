import React from "react";
import ArticleLayout from "../../components/ArticleLayout.jsx";

const JavaVersionsPost = () => {
  return (
    <ArticleLayout
      tag="Java"
      title="Understanding Java Versions: A Practical Guide for Developers"
      subtitle="A practical guide to Java versions, important features, code examples, and interview topics from Java 7 to Java 25."
      date="July 17 2024"
      updated="November 25 2025"
      readingTime="40 min read"
      image="https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?auto=format&fit=crop&w=1200&q=40"
    >
      <p>Java has changed a lot from Java 7 to Java 25. For technical interviews, it is not enough to remember the version numbers. It is more useful to know which features were added, which ones changed the way we write code, and which ones are mostly JVM or platform improvements.</p>
      <p>This guide is based on the Java version list from the provided PDF. The structure is simple:</p>
      <ul>
        <li>Each Java version has a list of important features.</li>
        <li>If a feature introduces new syntax, a new API, or a new package, there is a code example below it.</li>
        <li>If a feature is mostly an internal improvement, JVM change, garbage collector update, or platform change, it stays as a list item.</li>
      </ul>
      <h2>Java 7</h2>
      <h3>Main additions</h3>
      <ul>
        <li>Try-with-resources</li>
        <li>Catching multiple exceptions</li>
        <li>ForkJoinPool</li>
        <li>Strings in <code>switch</code></li>
        <li>New file system API in Java NIO 2.0</li>
        <li>Diamond operator</li>
        <li>Numeric literals with underscores</li>
        <li>Binary numeric literals</li>
        <li>Support for dynamically typed languages in the JVM</li>
      </ul>
      <h3>Try-with-resources</h3>
      <p>Try-with-resources closes resources automatically.</p>
      <pre className="article-code"><code className="language-java">{`import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class TryWithResourcesExample {
    public static void main(String[] args) throws IOException {
        try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
            System.out.println(reader.readLine());
        }
    }
}`}</code></pre>
      <h3>Catching multiple exceptions</h3>
      <p>You can catch more than one exception in the same <code>catch</code> block.</p>
      <pre className="article-code"><code className="language-java">{`public class MultiCatchExample {
    public static void main(String[] args) {
        try {
            int number = Integer.parseInt("abc");
            System.out.println(10 / number);
        } catch (NumberFormatException | ArithmeticException ex) {
            System.out.println("Invalid operation: " + ex.getMessage());
        }
    }
}`}</code></pre>
      <h3>Strings in switch</h3>
      <p>Java 7 allows <code>String</code> values in <code>switch</code>.</p>
      <pre className="article-code"><code className="language-java">{`public class StringSwitchExample {
    public static void main(String[] args) {
        String role = "ADMIN";

        switch (role) {
            case "ADMIN":
                System.out.println("Full access");
                break;
            case "USER":
                System.out.println("Limited access");
                break;
            default:
                System.out.println("Unknown role");
        }
    }
}`}</code></pre>
      <h3>Diamond operator</h3>
      <p>The diamond operator reduces repeated generic type declarations.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.ArrayList;
import java.util.List;

public class DiamondOperatorExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();

        names.add("Alan");
        names.add("Maria");

        System.out.println(names);
    }
}`}</code></pre>
      <h3>Numeric literals with underscores</h3>
      <p>Underscores make large numbers easier to read.</p>
      <pre className="article-code"><code className="language-java">{`public class NumericLiteralExample {
    public static void main(String[] args) {
        int oneMillion = 1_000_000;
        long cardNumber = 1234_5678_9012_3456L;

        System.out.println(oneMillion);
        System.out.println(cardNumber);
    }
}`}</code></pre>
      <h3>Binary numeric literals</h3>
      <p>Binary literals use the <code>0b</code> prefix.</p>
      <pre className="article-code"><code className="language-java">{`public class BinaryLiteralExample {
    public static void main(String[] args) {
        int flags = 0b1010;

        System.out.println(flags); // 10
    }
}`}</code></pre>
      <hr />
      <h2>Java 8</h2>
      <p>Java 8 is one of the most important versions for interviews.</p>
      <h3>Main additions</h3>
      <ul>
        <li>Lambda expressions</li>
        <li>Streams API</li>
        <li>Functional interfaces</li>
        <li>Optional</li>
        <li>Default methods in interfaces</li>
        <li>New Date and Time API</li>
        <li>JavaFX bundled with Java SE</li>
        <li>Nashorn JavaScript engine</li>
      </ul>
      <h3>Lambda expressions</h3>
      <p>Lambdas allow you to pass behavior as data.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.Arrays;
import java.util.List;

public class LambdaExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alan", "Maria", "John");

        names.forEach(name -> System.out.println(name));
    }
}`}</code></pre>
      <p>You can also use a method reference.</p>
      <pre className="article-code"><code className="language-java">{`names.forEach(System.out::println);`}</code></pre>
      <h3>Functional interfaces</h3>
      <p>A functional interface has only one abstract method.</p>
      <pre className="article-code"><code className="language-java">{`@FunctionalInterface
interface Calculator {
    int operate(int a, int b);
}

public class FunctionalInterfaceExample {
    public static void main(String[] args) {
        Calculator sum = (a, b) -> a + b;
        Calculator multiply = (a, b) -> a * b;

        System.out.println(sum.operate(5, 3));
        System.out.println(multiply.operate(5, 3));
    }
}`}</code></pre>
      <h3>Predicate</h3>
      <p><code>Predicate&lt;T&gt;</code> checks a condition and returns <code>true</code> or <code>false</code>.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.function.Predicate;

public class PredicateExample {
    public static void main(String[] args) {
        Predicate<String> isLongName = name -> name.length() > 5;

        System.out.println(isLongName.test("Alan"));
        System.out.println(isLongName.test("Gabriela"));
    }
}`}</code></pre>
      <h3>Function</h3>
      <p><code>Function&lt;T, R&gt;</code> receives one value and returns another value.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.function.Function;

public class FunctionExample {
    public static void main(String[] args) {
        Function<String, Integer> length = text -> text.length();

        System.out.println(length.apply("Java"));
    }
}`}</code></pre>
      <h3>Consumer</h3>
      <p><code>Consumer&lt;T&gt;</code> receives a value and returns nothing.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.function.Consumer;

public class ConsumerExample {
    public static void main(String[] args) {
        Consumer<String> printer = message -> System.out.println(message);

        printer.accept("Hello Java 8");
    }
}`}</code></pre>
      <h3>Supplier</h3>
      <p><code>Supplier&lt;T&gt;</code> returns a value without receiving arguments.</p>
      <pre className="article-code"><code className="language-java">{`import java.time.LocalDateTime;
import java.util.function.Supplier;

public class SupplierExample {
    public static void main(String[] args) {
        Supplier<LocalDateTime> now = () -> LocalDateTime.now();

        System.out.println(now.get());
    }
}`}</code></pre>
      <h3>Streams API</h3>
      <p>Streams process collections in a functional style.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alan", "Maria", "John", "Ana");

        List<String> result = names.stream()
                .filter(name -> name.startsWith("A"))
                .map(String::toUpperCase)
                .collect(Collectors.toList());

        System.out.println(result);
    }
}`}</code></pre>
      <h3>Stream reduce</h3>
      <p><code>reduce</code> combines many values into one result.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.Arrays;
import java.util.List;

public class ReduceExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        int total = numbers.stream()
                .reduce(0, Integer::sum);

        System.out.println(total);
    }
}`}</code></pre>
      <h3>Stream grouping</h3>
      <p><code>Collectors.groupingBy</code> groups data by a field or condition.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

class Employee {
    private final String name;
    private final String department;

    Employee(String name, String department) {
        this.name = name;
        this.department = department;
    }

    String getDepartment() {
        return department;
    }

    public String toString() {
        return name;
    }
}

public class GroupingByExample {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
                new Employee("Alan", "Engineering"),
                new Employee("Maria", "Engineering"),
                new Employee("John", "Sales")
        );

        Map<String, List<Employee>> byDepartment = employees.stream()
                .collect(Collectors.groupingBy(Employee::getDepartment));

        System.out.println(byDepartment);
    }
}`}</code></pre>
      <h3>Optional</h3>
      <p><code>Optional</code> helps represent a value that may or may not exist.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.Optional;

public class OptionalExample {
    public static void main(String[] args) {
        Optional<String> username = findUsernameById(1);

        String result = username
                .map(String::toUpperCase)
                .orElse("UNKNOWN");

        System.out.println(result);
    }

    static Optional<String> findUsernameById(int id) {
        if (id == 1) {
            return Optional.of("alan");
        }

        return Optional.empty();
    }
}`}</code></pre>
      <h3>Default methods in interfaces</h3>
      <p>Interfaces can have methods with implementation.</p>
      <pre className="article-code"><code className="language-java">{`interface Vehicle {
    void start();

    default void stop() {
        System.out.println("Vehicle stopped");
    }
}

class Car implements Vehicle {
    public void start() {
        System.out.println("Car started");
    }
}

public class DefaultMethodExample {
    public static void main(String[] args) {
        Vehicle car = new Car();

        car.start();
        car.stop();
    }
}`}</code></pre>
      <h3>Date and Time API</h3>
      <p>Java 8 added the <code>java.time</code> package.</p>
      <pre className="article-code"><code className="language-java">{`import java.time.LocalDate;
import java.time.Period;

public class DateTimeExample {
    public static void main(String[] args) {
        LocalDate startDate = LocalDate.of(2020, 1, 1);
        LocalDate today = LocalDate.now();

        Period period = Period.between(startDate, today);

        System.out.println(period.getYears());
    }
}`}</code></pre>
      <hr />
      <h2>Java 9</h2>
      <h3>Main additions</h3>
      <ul>
        <li>Java modules</li>
        <li>Java Reflection Module class</li>
        <li>Try-with-resources enhancement</li>
        <li>Compact strings</li>
        <li>Java Microbenchmark Harness included in the JDK</li>
      </ul>
      <h3>Java modules</h3>
      <p>Modules help organize large applications.</p>
      <pre className="article-code"><code className="language-java">{`module com.example.app {
    requires java.sql;
    exports com.example.app.service;
}`}</code></pre>
      <h3>Try-with-resources enhancement</h3>
      <p>You can use an effectively final resource inside <code>try</code>.</p>
      <pre className="article-code"><code className="language-java">{`import java.io.BufferedReader;
import java.io.FileReader;

public class TryWithResourcesJava9Example {
    public static void main(String[] args) throws Exception {
        BufferedReader reader = new BufferedReader(new FileReader("data.txt"));

        try (reader) {
            System.out.println(reader.readLine());
        }
    }
}`}</code></pre>
      <h3>Module class</h3>
      <p>Java 9 added the <code>Module</code> class for reflection.</p>
      <pre className="article-code"><code className="language-java">{`public class ModuleReflectionExample {
    public static void main(String[] args) {
        Module module = String.class.getModule();

        System.out.println(module.getName());
    }
}`}</code></pre>
      <hr />
      <h2>Java 10</h2>
      <h3>Main additions</h3>
      <ul>
        <li>Local-variable type inference</li>
        <li>Parallel full garbage collection for G1</li>
        <li>Graal included as experimental JIT compiler</li>
        <li>Internal JVM and platform-level changes</li>
      </ul>
      <h3>Local-variable type inference</h3>
      <p><code>var</code> lets the compiler infer the type of a local variable.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.List;

public class VarExample {
    public static void main(String[] args) {
        var name = "Alan";
        var numbers = List.of(1, 2, 3);

        System.out.println(name);
        System.out.println(numbers);
    }
}`}</code></pre>
      <p><code>var</code> is not dynamic typing. The type is still known at compile time.</p>
      <hr />
      <h2>Java 11</h2>
      <p>Java 11 is an important LTS version.</p>
      <h3>Main additions</h3>
      <ul>
        <li>Removed Java EE and CORBA modules from the JDK</li>
        <li>HTTP Client became standard</li>
        <li><code>var</code> allowed as lambda parameter type</li>
        <li>Elliptic curve cryptography improvements</li>
        <li>Unicode 10</li>
        <li>New cryptographic algorithms</li>
        <li>Launch single-file source-code programs</li>
        <li>TLS 1.3 support</li>
        <li>Deprecated the Nashorn JavaScript engine</li>
      </ul>
      <h3>HTTP Client</h3>
      <p>Java 11 added the standard <code>java.net.http</code> client.</p>
      <pre className="article-code"><code className="language-java">{`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpClientExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://example.com"))
                .GET()
                .build();

        HttpResponse<String> response = client.send(
                request,
                HttpResponse.BodyHandlers.ofString()
        );

        System.out.println(response.statusCode());
    }
}`}</code></pre>
      <h3>var in lambda parameters</h3>
      <p>Java 11 allows <code>var</code> in lambda parameters.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.List;

public class VarLambdaExample {
    public static void main(String[] args) {
        List<String> names = List.of("Alan", "Maria");

        names.forEach((var name) -> System.out.println(name.toUpperCase()));
    }
}`}</code></pre>
      <h3>Launch single-file source-code programs</h3>
      <p>You can run a <code>.java</code> file directly.</p>
      <pre className="article-code"><code className="language-java">{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello Java 11");
    }
}`}</code></pre>
      <p>Run it with:</p>
      <pre className="article-code"><code className="language-bash">{`java HelloWorld.java`}</code></pre>
      <hr />
      <h2>Java 12</h2>
      <h3>Main additions</h3>
      <ul>
        <li>Shenandoah low-pause-time garbage collector</li>
        <li>Switch expressions preview</li>
        <li>JVM Constants API</li>
        <li>Abortable mixed collections in G1</li>
        <li>Promptly return unused committed memory from G1</li>
      </ul>
      <h3>Switch expressions</h3>
      <p>A <code>switch</code> can return a value.</p>
      <pre className="article-code"><code className="language-java">{`public class SwitchExpressionJava12Example {
    public static void main(String[] args) {
        String day = "MONDAY";

        String type = switch (day) {
            case "SATURDAY", "SUNDAY" -> "Weekend";
            default -> "Weekday";
        };

        System.out.println(type);
    }
}`}</code></pre>
      <hr />
      <h2>Java 13</h2>
      <h3>Main additions</h3>
      <ul>
        <li>Switch expression changes</li>
        <li>Text blocks preview</li>
        <li>Reimplementation of the legacy Socket API</li>
        <li>ZGC returns unused memory to the OS</li>
      </ul>
      <h3>Text blocks</h3>
      <p>Text blocks make multiline strings easier to write.</p>
      <pre className="article-code"><code className="language-java">{`public class TextBlockJava13Example {
    public static void main(String[] args) {
        String json = """
                {
                    "name": "Alan",
                    "role": "Software Engineer"
                }
                """;

        System.out.println(json);
    }
}`}</code></pre>
      <hr />
      <h2>Java 14</h2>
      <h3>Main additions</h3>
      <ul>
        <li>Records preview</li>
        <li>Better <code>NullPointerException</code> messages</li>
        <li>Text blocks</li>
        <li>Switch expressions became permanent</li>
        <li>Pattern matching for <code>instanceof</code></li>
        <li>Non-volatile memory mapped byte buffers</li>
        <li>Foreign memory access API</li>
        <li>NUMA-aware memory allocation for G1</li>
        <li>Java Flight Recorder event streaming</li>
        <li>Packaging tool</li>
        <li>ZGC ported to macOS and Windows</li>
        <li>Removed Concurrent Mark Sweep garbage collector</li>
        <li>Removed <code>pack200</code> and <code>unpack200</code></li>
        <li>Deprecated Solaris/Sparc, Solaris/x64, and Linux/Sparc ports</li>
      </ul>
      <h3>Records</h3>
      <p>Records reduce boilerplate for data classes.</p>
      <pre className="article-code"><code className="language-java">{`public record User(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {
        User user = new User("Alan", 30);

        System.out.println(user.name());
        System.out.println(user.age());
    }
}`}</code></pre>
      <h3>Switch expressions</h3>
      <p>Switch expressions became a permanent feature in Java 14.</p>
      <pre className="article-code"><code className="language-java">{`public class SwitchExpressionJava14Example {
    public static void main(String[] args) {
        int month = 4;

        String quarter = switch (month) {
            case 1, 2, 3 -> "Q1";
            case 4, 5, 6 -> "Q2";
            case 7, 8, 9 -> "Q3";
            case 10, 11, 12 -> "Q4";
            default -> throw new IllegalArgumentException("Invalid month");
        };

        System.out.println(quarter);
    }
}`}</code></pre>
      <h3>Pattern matching for instanceof</h3>
      <p>Pattern matching removes manual casting.</p>
      <pre className="article-code"><code className="language-java">{`public class InstanceofPatternExample {
    public static void main(String[] args) {
        Object value = "Java 14";

        if (value instanceof String text) {
            System.out.println(text.toUpperCase());
        }
    }
}`}</code></pre>
      <h3>Helpful NullPointerExceptions</h3>
      <p>This feature improves error messages. The code is the same, but the JVM gives more useful information.</p>
      <pre className="article-code"><code className="language-java">{`class UserProfile {
    Address address;
}

class Address {
    String city;
}

public class HelpfulNpeExample {
    public static void main(String[] args) {
        UserProfile user = new UserProfile();

        System.out.println(user.address.city);
    }
}`}</code></pre>
      <hr />
      <h2>Java 15</h2>
      <h3>Main additions</h3>
      <ul>
        <li>Sealed classes preview</li>
        <li>Hidden classes</li>
        <li>Edwards-Curve Digital Signature Algorithm</li>
        <li>Reimplemented legacy DatagramSocket API</li>
        <li>Pattern matching for <code>instanceof</code> second preview</li>
        <li>Records second preview</li>
        <li>Foreign-Memory Access API second incubator</li>
        <li>Text blocks</li>
        <li>ZGC scalable low-latency garbage collector</li>
        <li>Shenandoah low-pause-time garbage collector</li>
        <li>Disabled and deprecated biased locking</li>
        <li>Removed Nashorn JavaScript engine</li>
        <li>Removed Solaris and SPARC ports</li>
        <li>Deprecated RMI Activation for removal</li>
      </ul>
      <h3>Sealed classes</h3>
      <p>Sealed classes control which classes can extend or implement a type.</p>
      <pre className="article-code"><code className="language-java">{`public sealed class Shape permits Circle, Rectangle {}

final class Circle extends Shape {}

final class Rectangle extends Shape {}`}</code></pre>
      <h3>Text blocks</h3>
      <p>Text blocks became stable and useful for JSON, SQL, and HTML strings.</p>
      <pre className="article-code"><code className="language-java">{`public class TextBlockJava15Example {
    public static void main(String[] args) {
        String html = """
                <html>
                    <body>
                        <h1>Hello Java 15</h1>
                    </body>
                </html>
                """;

        System.out.println(html);
    }
}`}</code></pre>
      <hr />
      <h2>Java 16</h2>
      <h3>Main additions</h3>
      <ul>
        <li>Packaging tool for native installers</li>
        <li>Improvements to the Stream API</li>
        <li>Records became permanent</li>
        <li>Vector API incubator</li>
        <li>ZGC concurrent thread-stack processing</li>
        <li>Unix-domain socket channels</li>
        <li>Foreign Linker API incubator</li>
        <li>Foreign Memory Access API third incubator</li>
        <li>Invoke default methods via Java Reflection Proxy object</li>
        <li>Pattern matching for <code>instanceof</code> became permanent</li>
        <li>Sealed classes second preview</li>
      </ul>
      <h3>Records</h3>
      <p>Records became a permanent feature.</p>
      <pre className="article-code"><code className="language-java">{`public record Product(String name, double price) {}

public class ProductExample {
    public static void main(String[] args) {
        Product product = new Product("Laptop", 1200.00);

        System.out.println(product.name());
        System.out.println(product.price());
        System.out.println(product);
    }
}`}</code></pre>
      <h3>Pattern matching for instanceof</h3>
      <pre className="article-code"><code className="language-java">{`public class PatternMatchingJava16Example {
    public static void main(String[] args) {
        Object value = "Java 16";

        if (value instanceof String text) {
            System.out.println(text.toUpperCase());
        }
    }
}`}</code></pre>
      <h3>Stream API improvement</h3>
      <p>Java 16 added useful stream methods like <code>toList()</code>.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.List;

public class StreamToListExample {
    public static void main(String[] args) {
        List<String> names = List.of("Alan", "Maria", "John");

        List<String> upperNames = names.stream()
                .map(String::toUpperCase)
                .toList();

        System.out.println(upperNames);
    }
}`}</code></pre>
      <hr />
      <h2>Java 17</h2>
      <p>Java 17 is an important LTS version.</p>
      <h3>Main additions</h3>
      <ul>
        <li>Restore always-strict floating-point semantics</li>
        <li>Enhanced pseudo-random number generators</li>
        <li>New macOS rendering pipeline</li>
        <li>macOS/AArch64 port</li>
        <li>Deprecated the Applet API for removal</li>
        <li>Strongly encapsulated JDK internals</li>
        <li>Pattern matching for <code>switch</code></li>
        <li>Removed RMI Activation</li>
        <li>Sealed classes</li>
        <li>Removed experimental AOT and JIT compiler</li>
        <li>Deprecated SecurityManager for removal</li>
        <li>Foreign Function and Memory API incubator</li>
        <li>Vector API second incubator</li>
        <li>Context-specific deserialization filters</li>
      </ul>
      <h3>Sealed classes</h3>
      <pre className="article-code"><code className="language-java">{`public sealed interface Payment permits CreditCardPayment, PaypalPayment {}

final class CreditCardPayment implements Payment {}

final class PaypalPayment implements Payment {}`}</code></pre>
      <h3>Pattern matching for switch</h3>
      <pre className="article-code"><code className="language-java">{`public class PatternSwitchJava17Example {
    public static void main(String[] args) {
        Object value = 123;

        String result = switch (value) {
            case Integer number -> "Integer: " + number;
            case String text -> "String: " + text;
            default -> "Unknown";
        };

        System.out.println(result);
    }
}`}</code></pre>
      <h3>Enhanced pseudo-random number generators</h3>
      <p>Java 17 added new APIs for random number generation.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.random.RandomGenerator;

public class RandomGeneratorExample {
    public static void main(String[] args) {
        RandomGenerator generator = RandomGenerator.getDefault();

        System.out.println(generator.nextInt(100));
    }
}`}</code></pre>
      <hr />
      <h2>Java 18</h2>
      <h3>Main additions</h3>
      <ul>
        <li>Deprecated finalization for removal</li>
        <li>Internet Address Resolution SPI</li>
        <li>Pattern matching for <code>switch</code> second preview</li>
        <li>Reimplementation of core reflection using method handles</li>
        <li>Simple web server for static content</li>
        <li>Foreign Memory API second incubator</li>
        <li>Vector API third incubator</li>
        <li>UTF-8 as standard charset for Java APIs</li>
        <li>Code snippets in Javadoc comments with <code>@snippet</code></li>
      </ul>
      <h3>Simple web server</h3>
      <p>Java 18 added a simple web server tool.</p>
      <pre className="article-code"><code className="language-bash">{`jwebserver -p 8080`}</code></pre>
      <p>You can also start a simple file server from Java code.</p>
      <pre className="article-code"><code className="language-java">{`import com.sun.net.httpserver.SimpleFileServer;
import java.net.InetSocketAddress;
import java.nio.file.Path;

public class SimpleWebServerExample {
    public static void main(String[] args) {
        var server = SimpleFileServer.createFileServer(
                new InetSocketAddress(8080),
                Path.of("."),
                SimpleFileServer.OutputLevel.INFO
        );

        server.start();
    }
}`}</code></pre>
      <h3>UTF-8 by default</h3>
      <p>The code may look the same, but the default charset is now UTF-8.</p>
      <pre className="article-code"><code className="language-java">{`import java.nio.charset.Charset;

public class Utf8DefaultExample {
    public static void main(String[] args) {
        System.out.println(Charset.defaultCharset());
    }
}`}</code></pre>
      <h3>Javadoc code snippets</h3>
      <p>Java 18 added <code>@snippet</code> for better code examples in documentation.</p>
      <pre className="article-code"><code className="language-java">{`/**
 * Adds two numbers.
 *
 * {@snippet :
 * int result = Calculator.add(2, 3);
 * }
 */
public class Calculator {
    public static int add(int a, int b) {
        return a + b;
    }
}`}</code></pre>
      <hr />
      <h2>Java 19</h2>
      <h3>Main additions</h3>
      <ul>
        <li>Record patterns preview</li>
        <li>Linux/RISC-V port</li>
        <li>Foreign Function and Memory API preview</li>
        <li>Virtual threads preview</li>
        <li>Vector API fourth incubator</li>
        <li>Pattern matching for <code>switch</code> third preview</li>
        <li>Structured concurrency incubator</li>
      </ul>
      <h3>Virtual threads</h3>
      <p>Virtual threads are lightweight threads managed by the JVM.</p>
      <pre className="article-code"><code className="language-java">{`public class VirtualThreadJava19Example {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = Thread.startVirtualThread(() -> {
            System.out.println("Running in a virtual thread");
        });

        thread.join();
    }
}`}</code></pre>
      <h3>Record patterns</h3>
      <p>Record patterns make it easier to extract values from records.</p>
      <pre className="article-code"><code className="language-java">{`record Point(int x, int y) {}

public class RecordPatternExample {
    public static void main(String[] args) {
        Object value = new Point(10, 20);

        if (value instanceof Point(int x, int y)) {
            System.out.println(x + ", " + y);
        }
    }
}`}</code></pre>
      <hr />
      <h2>Java 20</h2>
      <h3>Main additions</h3>
      <ul>
        <li>Scoped values incubator</li>
        <li>Record patterns second preview</li>
        <li>Pattern matching for <code>switch</code> fourth preview</li>
        <li>Foreign Function and Memory API second preview</li>
        <li>Virtual threads second preview</li>
        <li>Structured concurrency second incubator</li>
        <li>Vector API fifth incubator</li>
      </ul>
      <h3>Scoped values</h3>
      <p>Scoped values share data safely inside a specific execution scope.</p>
      <pre className="article-code"><code className="language-java">{`public class ScopedValueExample {
    private static final ScopedValue<String> USER = ScopedValue.newInstance();

    public static void main(String[] args) {
        ScopedValue.where(USER, "Alan").run(() -> {
            System.out.println("Current user: " + USER.get());
        });
    }
}`}</code></pre>
      <h3>Virtual threads</h3>
      <pre className="article-code"><code className="language-java">{`public class VirtualThreadJava20Example {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = Thread.startVirtualThread(() -> {
            System.out.println("Hello from Java 20");
        });

        thread.join();
    }
}`}</code></pre>
      <hr />
      <h2>Java 21</h2>
      <p>Java 21 is a modern LTS version.</p>
      <h3>Main additions</h3>
      <ul>
        <li>String templates preview</li>
        <li>Sequenced collections</li>
        <li>Generational ZGC</li>
        <li>Record patterns</li>
        <li>Pattern matching for <code>switch</code></li>
        <li>Foreign Function and Memory API third preview</li>
        <li>Unnamed patterns and variables preview</li>
        <li>Virtual threads</li>
        <li>Scoped values preview</li>
        <li>Vector API sixth incubator</li>
        <li>Deprecated Windows 32-bit x86 port for removal</li>
        <li>Prepare to disallow dynamic loading of agents</li>
        <li>Key Encapsulation Mechanism API</li>
        <li>Structured concurrency preview</li>
      </ul>
      <h3>Virtual threads</h3>
      <p>Virtual threads became a final feature.</p>
      <pre className="article-code"><code className="language-java">{`public class VirtualThreadJava21Example {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = Thread.startVirtualThread(() -> {
            System.out.println("Hello from virtual thread");
        });

        thread.join();
    }
}`}</code></pre>
      <p>You can also use an executor.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.concurrent.Executors;

public class VirtualThreadExecutorExample {
    public static void main(String[] args) {
        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
            for (int i = 0; i < 3; i++) {
                int taskId = i;

                executor.submit(() -> {
                    System.out.println("Task " + taskId);
                });
            }
        }
    }
}`}</code></pre>
      <h3>Sequenced collections</h3>
      <p>Sequenced collections have a defined order.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.ArrayList;
import java.util.SequencedCollection;

public class SequencedCollectionExample {
    public static void main(String[] args) {
        SequencedCollection<String> names = new ArrayList<>();

        names.add("Alan");
        names.add("Maria");
        names.add("John");

        System.out.println(names.getFirst());
        System.out.println(names.getLast());
        System.out.println(names.reversed());
    }
}`}</code></pre>
      <h3>Record patterns</h3>
      <pre className="article-code"><code className="language-java">{`record Point(int x, int y) {}

public class RecordPatternJava21Example {
    public static void main(String[] args) {
        Object value = new Point(10, 20);

        if (value instanceof Point(int x, int y)) {
            System.out.println("x = " + x);
            System.out.println("y = " + y);
        }
    }
}`}</code></pre>
      <h3>Pattern matching for switch</h3>
      <pre className="article-code"><code className="language-java">{`public class PatternSwitchJava21Example {
    public static void main(String[] args) {
        Object value = "Java";

        String result = switch (value) {
            case Integer number -> "Integer: " + number;
            case String text -> "String: " + text.toUpperCase();
            case null -> "Null value";
            default -> "Unknown type";
        };

        System.out.println(result);
    }
}`}</code></pre>
      <h3>Key Encapsulation Mechanism API</h3>
      <p>This API is related to cryptography.</p>
      <pre className="article-code"><code className="language-java">{`import javax.crypto.KEM;

public class KemExample {
    public static void main(String[] args) throws Exception {
        KEM kem = KEM.getInstance("DHKEM");
        System.out.println(kem.getAlgorithm());
    }
}`}</code></pre>
      <hr />
      <h2>Java 22</h2>
      <h3>Main additions</h3>
      <ul>
        <li>Region pinning for G1</li>
        <li>Statements before <code>super(...)</code> preview</li>
        <li>Foreign Function and Memory API</li>
        <li>Unnamed variables and patterns</li>
        <li>Class-File API preview</li>
        <li>Launch multi-file source-code programs</li>
        <li>String templates second preview</li>
        <li>Vector API seventh incubator</li>
        <li>Stream gatherers preview</li>
        <li>Structured concurrency second preview</li>
        <li>Implicitly declared classes and instance main methods second preview</li>
        <li>Scoped values</li>
      </ul>
      <h3>Statements before super</h3>
      <p>Java started allowing some statements before <code>super(...)</code> in constructors.</p>
      <pre className="article-code"><code className="language-java">{`class Parent {
    Parent(String value) {
        System.out.println(value);
    }
}

class Child extends Parent {
    Child(String input) {
        String normalized = input.trim().toUpperCase();
        super(normalized);
    }
}`}</code></pre>
      <h3>Unnamed variables and patterns</h3>
      <p>Use <code>_</code> when a variable is not needed.</p>
      <pre className="article-code"><code className="language-java">{`public class UnnamedVariableExample {
    public static void main(String[] args) {
        try {
            int result = Integer.parseInt("abc");
        } catch (NumberFormatException _) {
            System.out.println("Invalid number");
        }
    }
}`}</code></pre>
      <h3>Stream gatherers</h3>
      <p>Stream gatherers allow custom intermediate stream operations.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.List;
import java.util.stream.Gatherers;

public class StreamGatherersExample {
    public static void main(String[] args) {
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6);

        numbers.stream()
                .gather(Gatherers.windowFixed(2))
                .forEach(System.out::println);
    }
}`}</code></pre>
      <h3>Implicitly declared classes and instance main methods</h3>
      <p>This feature reduces the code needed for small programs.</p>
      <pre className="article-code"><code className="language-java">{`void main() {
    System.out.println("Hello Java");
}`}</code></pre>
      <hr />
      <h2>Java 23</h2>
      <h3>Main additions</h3>
      <ul>
        <li>Primitive types in patterns, <code>instanceof</code>, and <code>switch</code> preview</li>
        <li>Class-File API second preview</li>
        <li>Markdown documentation comments</li>
        <li>Vector API eighth incubator</li>
        <li>Stream gatherers second preview</li>
        <li>Deprecated memory-access methods in <code>sun.misc.Unsafe</code> for removal</li>
        <li>ZGC generational mode by default</li>
        <li>Module import declarations preview</li>
        <li>Implicitly declared classes and instance main methods</li>
        <li>Structured concurrency third preview</li>
        <li>Scoped values third preview</li>
        <li>Flexible constructor bodies second preview</li>
      </ul>
      <h3>Markdown documentation comments</h3>
      <p>Java 23 allows Markdown-style documentation comments.</p>
      <pre className="article-code"><code className="language-java">{`/// Represents a user in the system.
///
/// ## Example
///
/// \`\`\`java
/// User user = new User("Alan");
/// \`\`\`
///
/// @param name the user name
public record User(String name) {}`}</code></pre>
      <h3>Module import declarations</h3>
      <p>You can import all exported packages from a module.</p>
      <pre className="article-code"><code className="language-java">{`import module java.base;

public class ModuleImportExample {
    public static void main(String[] args) {
        var names = java.util.List.of("Alan", "Maria");

        System.out.println(names);
    }
}`}</code></pre>
      <h3>Primitive types in patterns</h3>
      <p>This feature improves pattern matching with primitive types.</p>
      <pre className="article-code"><code className="language-java">{`public class PrimitivePatternExample {
    public static void main(String[] args) {
        Object value = 10;

        String result = switch (value) {
            case int number -> "int value: " + number;
            default -> "other";
        };

        System.out.println(result);
    }
}`}</code></pre>
      <hr />
      <h2>Java 24</h2>
      <h3>Main additions</h3>
      <ul>
        <li>Generational Shenandoah experimental</li>
        <li>Compact Object Headers experimental</li>
        <li>Prepare to restrict the use of JNI</li>
        <li>Late Barrier Expansion for G1</li>
        <li>Key Derivation Function API preview</li>
        <li>Remove Windows 32-bit x86 port</li>
        <li>Ahead-of-Time Class Loading and Linking</li>
        <li>Class-File API</li>
        <li>Stream gatherers</li>
        <li>Permanently disable the Security Manager</li>
        <li>Scoped values fourth preview</li>
        <li>Primitive types in patterns, <code>instanceof</code>, and <code>switch</code> second preview</li>
        <li>Vector API ninth incubator</li>
        <li>ZGC remove non-generational mode</li>
        <li>Synchronize virtual threads without pinning</li>
        <li>Flexible constructor bodies third preview</li>
        <li>Linking run-time images without JMODs</li>
        <li>Module import declarations second preview</li>
        <li>Simple source files and instance main methods fourth preview</li>
        <li>Quantum-resistant cryptography algorithms</li>
        <li>Warn upon use of memory-access methods in <code>sun.misc.Unsafe</code></li>
        <li>Structured concurrency fourth preview</li>
        <li>Deprecate 32-bit x86 port for removal</li>
      </ul>
      <h3>Stream gatherers</h3>
      <p>Stream gatherers continued evolving.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.List;
import java.util.stream.Gatherers;

public class StreamGatherersJava24Example {
    public static void main(String[] args) {
        List<String> names = List.of("Alan", "Maria", "John", "Ana");

        names.stream()
                .gather(Gatherers.windowSliding(2))
                .forEach(System.out::println);
    }
}`}</code></pre>
      <h3>Key Derivation Function API</h3>
      <p>This API is related to cryptography.</p>
      <pre className="article-code"><code className="language-java">{`import javax.crypto.KDF;

public class KdfExample {
    public static void main(String[] args) throws Exception {
        KDF kdf = KDF.getInstance("HKDF-SHA256");

        System.out.println(kdf.getAlgorithm());
    }
}`}</code></pre>
      <h3>Simple source files and instance main methods</h3>
      <pre className="article-code"><code className="language-java">{`void main() {
    println("Hello Java");
}`}</code></pre>
      <hr />
      <h2>Java 25</h2>
      <h3>Main additions</h3>
      <ul>
        <li>PEM Encodings of Cryptographic Objects preview</li>
        <li>Stable Values preview</li>
        <li>Removed the 32-bit x86 port</li>
        <li>Structured Concurrency fifth preview</li>
        <li>Scoped values</li>
        <li>Primitive types in patterns, <code>instanceof</code>, and <code>switch</code> third preview</li>
        <li>Vector API tenth incubator</li>
        <li>JFR CPU-Time Profiling experimental</li>
        <li>Key Derivation Function API</li>
        <li>Module import declarations</li>
        <li>Compact source files and instance main methods</li>
        <li>Flexible constructor bodies</li>
        <li>Ahead-of-Time Command-Line Ergonomics</li>
        <li>Ahead-of-Time Method Profiling</li>
        <li>JFR Cooperative Sampling</li>
        <li>Compact Object Headers</li>
        <li>JFR Method Timing and Tracing</li>
        <li>Generational Shenandoah</li>
      </ul>
      <h3>Compact source files and instance main methods</h3>
      <p>Java 25 continues reducing the code needed for small programs.</p>
      <pre className="article-code"><code className="language-java">{`void main() {
    IO.println("Hello Java 25");
}`}</code></pre>
      <h3>Flexible constructor bodies</h3>
      <p>Flexible constructor bodies make constructors easier to write.</p>
      <pre className="article-code"><code className="language-java">{`class Parent {
    Parent(String value) {
        System.out.println(value);
    }
}

class Child extends Parent {
    Child(String input) {
        String normalized = input.trim().toUpperCase();
        super(normalized);
    }
}`}</code></pre>
      <h3>Module import declarations</h3>
      <pre className="article-code"><code className="language-java">{`import module java.base;

void main() {
    var numbers = java.util.List.of(1, 2, 3);

    IO.println(numbers);
}`}</code></pre>
      <h3>Scoped values</h3>
      <p>Scoped values became part of the Java 25 feature list.</p>
      <pre className="article-code"><code className="language-java">{`public class ScopedValueJava25Example {
    private static final ScopedValue<String> USER = ScopedValue.newInstance();

    public static void main(String[] args) {
        ScopedValue.where(USER, "Alan").run(() -> {
            System.out.println(USER.get());
        });
    }
}`}</code></pre>
      <hr />
      <h2>Important LTS versions for interviews</h2>
      <div className="article-table-wrapper">
            <table className="article-table">
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Java 8</td>
                  <td>Lambdas, Streams, Optional, Functional Interfaces</td>
                </tr>
                <tr>
                  <td>Java 11</td>
                  <td>HTTP Client, single-file execution, LTS</td>
                </tr>
                <tr>
                  <td>Java 17</td>
                  <td>Sealed classes, pattern matching, LTS</td>
                </tr>
                <tr>
                  <td>Java 21</td>
                  <td>Virtual threads, sequenced collections, modern LTS</td>
                </tr>
              </tbody>
            </table>
          </div>
      <hr />
      <h2>Common interview questions</h2>
      <h3>Why is Java 8 important?</h3>
      <p>Java 8 introduced functional programming concepts into Java. The most important features are lambdas, streams, functional interfaces, and <code>Optional</code>.</p>
      <h3>What is the difference between <code>map</code> and <code>flatMap</code>?</h3>
      <p><code>map</code> transforms one value into another value. <code>flatMap</code> transforms one value into a stream and then flattens the result.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.List;

public class FlatMapExample {
    public static void main(String[] args) {
        List<List<String>> nested = List.of(
                List.of("A", "B"),
                List.of("C", "D")
        );

        List<String> flat = nested.stream()
                .flatMap(List::stream)
                .toList();

        System.out.println(flat);
    }
}`}</code></pre>
      <h3>What is the difference between <code>Optional.of</code>, <code>Optional.ofNullable</code>, and <code>Optional.empty</code>?</h3>
      <pre className="article-code"><code className="language-java">{`import java.util.Optional;

public class OptionalMethodsExample {
    public static void main(String[] args) {
        Optional<String> value = Optional.of("Java");
        Optional<String> nullable = Optional.ofNullable(null);
        Optional<String> empty = Optional.empty();

        System.out.println(value);
        System.out.println(nullable);
        System.out.println(empty);
    }
}`}</code></pre>
      <ul>
        <li><code>Optional.of(value)</code> fails if <code>value</code> is <code>null</code>.</li>
        <li><code>Optional.ofNullable(value)</code> accepts <code>null</code>.</li>
        <li><code>Optional.empty()</code> represents no value.</li>
      </ul>
      <h3>What are virtual threads?</h3>
      <p>Virtual threads are lightweight threads managed by the JVM. They help applications handle many concurrent tasks with less memory.</p>
      <pre className="article-code"><code className="language-java">{`import java.util.concurrent.Executors;

public class InterviewVirtualThreadExample {
    public static void main(String[] args) {
        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
            executor.submit(() -> {
                Thread.sleep(1000);
                return "Done";
            });
        }
    }
}`}</code></pre>
      <hr />
      <h2>Conclusion</h2>
      <p>Java has evolved from a mostly object-oriented language into a modern platform with better syntax, functional programming, improved concurrency, stronger APIs, and better performance.</p>
      <p>For interviews, the most important versions are usually Java 8, Java 11, Java 17, and Java 21. But knowing the newer versions from Java 22 to Java 25 shows that you understand the direction of the language.</p>
      <p>Focus on:</p>
      <ul>
        <li>Streams</li>
        <li>Optional</li>
        <li>Functional interfaces</li>
        <li>Records</li>
        <li>Pattern matching</li>
        <li>Sealed classes</li>
        <li>Virtual threads</li>
        <li>Sequenced collections</li>
        <li>LTS versions</li>
      </ul>
    </ArticleLayout>
  );
};

export default JavaVersionsPost;
