FROM alpine/java:21-jdk
WORKDIR /app
COPY target/EcomProject.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]