FROM maven:3.6.1-jdk-11 AS MAVEN_TOOL_CHAIN_CONTAINER
RUN mkdir src
COPY src /tmp/src
COPY ./pom.xml /tmp/
WORKDIR /tmp/
RUN mvn package
RUN ls -la /tmp

FROM openjdk:21
COPY --from=MAVEN_TOOL_CHAIN_CONTAINER /tmp/target/valdi-1.0-SNAPSHOT-jar-with-dependencies.jar /tmp/
WORKDIR /tmp/
ENTRYPOINT ["java","-jar", "valdi-1.0-SNAPSHOT-jar-with-dependencies.jar"]
CMD ["9000"]