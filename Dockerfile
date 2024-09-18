FROM alpine/java:21-jdk
WORKDIR /app
COPY target/EcomProject.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
EXPOSE 8080