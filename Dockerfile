FROM openjdk:21-jdk
COPY target/EcomProject.jar /app
WORKDIR /app
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]