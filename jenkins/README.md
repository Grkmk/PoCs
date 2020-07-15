###### run jenkins in docker

create a bridge network
`$ docker network create jenkins`

create volume to share docker client tls needed to connect docker deamon
`$ docker volume create jenkins-docker-certs`
create volume to persist jenkins data
`$ docker volume create jenkins-data`

to execute docker commands inside jenkins nodes, download and run docker:dind
```
docker container run --name jenkins-docker --rm --detach \
  --privileged --network jenkins --network-alias docker \
  --env DOCKER_TLS_CERTDIR=/certs \
  --volume jenkins-docker-certs:/certs/client \
  --volume jenkins-data:/var/jenkins_home \
  --volume "$HOME":/home \
  --publish 3000:3000 docker:dind
```

run jenkinsci/blueoceon image
```
docker container run --name jenkins-tutorial --rm --detach \
  --network jenkins --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 \
  --volume jenkins-data:/var/jenkins_home \
  --volume jenkins-docker-certs:/certs/client:ro \
  --volume "$HOME":/home \
  --publish 8080:8080 jenkinsci/blueocean
```

stop
`$ docker container stop jenkins jenkins-docker`