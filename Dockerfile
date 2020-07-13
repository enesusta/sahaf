FROM adoptopenjdk/openjdk11:alpine-jre

RUN mkdir /usr/app

ARG JAR_FILE=target/sahaf-1.1.0.jar

WORKDIR /usr/app

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]