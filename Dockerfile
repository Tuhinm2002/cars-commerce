FROM alpine/java:21-jdk
COPY ./target/EcomProject.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]