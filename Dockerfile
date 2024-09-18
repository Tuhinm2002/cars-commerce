FROM alpine/java:21-jdk

FROM maven:openjdk as builder

WORKDIR /myapp

COPY . /myapp

COPY pom.xml .

COPY src ./src

RUN mvn --version

RUN mvn -f /myapp/pom.xml clean package -DskipTests

COPY --from=builder /myapp/target/EcomProject-0.0.1-SNAPSHOT.jar /DockerDemo-0.0.1-SNAPSHOT.jar

ENTRYPOINT [“java”, “-jar”, “target/EcomProject-0.0.1-SNAPSHOT.jar”]

EXPOSE 8080