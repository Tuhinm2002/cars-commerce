FROM ununtu:latest
RUN apt-get update -y
RUN apt-get install openjdk-21-jdk -y
WORKDIR /app
COPY target/EcomProject.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]