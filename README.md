# nodejs_docker_connection
Connectivity of docker and nodejs

**docker build . -t nodejsdockerapp:v1**


**docker run --name nodecontainer --rm -d -p 3000:3000 nodejsdockerapp:v1**


**docker stop 1205ac4b36bbdead42c3daeb5dd6a9da0de051630c4e1ebb20f7ee6200121b45(id)**


**docker login** 

**docker tag nodejsdockerapp:v1 2929raghav/nodejsdockerapp:v1**

**docker push 2929raghav/nodejsdockerapp:v1**

**docker pull 2929raghav/nodejsdockerapp:v1**
