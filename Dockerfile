FROM alpine/java:21-jdk
ARG JAR_FILE=target/*.jar
COPY ./target/EcomProject.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]