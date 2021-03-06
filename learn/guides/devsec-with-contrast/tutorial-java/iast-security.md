---
title: "Getting Started: Test Security"
sidebar_position: 3
---

import Terminal from '/src/components/Terminal'

Done by: Application Developer<br/>
Time needed: 15 minutes<br/>
Frequency: done once for automation

What you get: high accuracy security results based from watching what your app did, with results as they happen.

## Identify the Application Structure: Container or Standalone
Contrast leverages the Java instrumentation API to operate inside the runtime. The agent can be packaged with the application or added to the environment.

For containerized Java applications, Contrast goes inside the container, packaged with the application.

For standard Java applications, Contrast is often deployed alongside the application. The startup step can be done when the app is packaged or in the area where it is launched.

###  Download the agent (standalone)

Many teams download the agent during a CI/CD packaging job when the application is assembled, making it available when the application is tested.

Most teams automate the download from [Maven Central](https://search.maven.org/artifact/com.contrastsecurity/contrast-agent).
```shell
curl -o contrast.jar -L https://repository.sonatype.org/service/local/artifact/maven/redirect?r=central-proxy\&g=com.contrastsecurity\&a=contrast-agent\&v=LATEST
```
While teams can add Contrast as a dependency, a separate download is recommended because it is an agent and should not be bundled/consolidated with other JAR files.

### Download the agent (Docker)

When creating a Docker container, add the following lines to your Dockerfile.

```
FROM BASE_IMAGE
ARG CONTRAST_AGENT_VERSION
ADD https://repo1.maven.org/maven2/com/contrastsecurity/contrast-agent/$CONTRAST_AGENT_VERSION/contrast-agent-$CONTRAST_AGENT_VERSION.jar 
/opt/contrast/contrast.jar
```

## Locate the Startup Script or Set an Environment Variable
Decide which integration option is easier for your app:
Startup script (most common) works well for applications and is easy to scope, track, and version control.

Environment variables work for applications that may launch a number of ways or where the startup script cannot be identified. The benefit and drawback to environment variables is that they will impact ALL Java processes launched in the scope of the variable.
The command used for each integration is the same, it just goes in a different place:

### If you are using a Startup Script

Add a variable to control Contrast, then add the variable to the startup Java command:
```shell title="your_startup_script.sh"
CONTRAST_OPTS=-javaagent:contrast.jar -Dcontrast.config=contrast.yaml
java $CONTRAST_OPTS ...[your command]...
```
### If you are using an Environment variable:

```shell
_JAVA_TOOL_OPTIONS=-javaagent:contrast.jar -Dcontrast.config=contrast.yaml
```
When launching your application. look for the following log message:

<Terminal>[Contrast] ...date... Starting Contrast (build ...)</Terminal>