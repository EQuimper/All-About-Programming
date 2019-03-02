
Creating and Running a Container from an Image

`docker run <image name>`

---

List all running containers

`docker ps`

---

List all containers create

`docker ps --all`

---
Docker run both command

`docker run = docker create + docker start`

---

When create a container we get a unique id. This can be use with the start command

`docker start -a <id>`

The -a make us see an output. But not required

---
Remove everything cache + containers etc. Good for getting back space

`docker system prune`

---

For getting log from a container

`docker logs <container id>`

---

Stopping a container

`docker stop <container id>` -> this send a signal to shutdown the container
`docker kill <container id>` -> kill immediately

---

Execute an additional command in a container

`docker exec -it <container id> <command>`

Example: `docker exec -it 9fc7c6b2f971 redis-cli**

---

For getting shell access inside container

`docker exec -it <container id> sh`

to quit the shell `ctrl + d`

---

Creating our own images

`docker build .`

This will build the current Dockerfile image

---

Port mapping

example we want it on port 8080 on localhost

For set of number is our machine

`docker run -p 8080:8080 <image id>`

---

# Docker compose

Used to start up multiple Docker containers at the same time

Automates some of the long-winded arguments we were passing to docker run

---

For running with compose

`docker-compose up --build`

---

Volumes is like a reference

---


## Commands

| Commands                     | Description                                            |
| ---------                    | ------------                                           |
| docker run <image id>        | Run an image and install if not exist in cache         |
| docker start <image id>      | Start an image                                         |
| docker run -it <image id>    | Start an image in interactive mode                     |
| docker run -it <image id> sh | Start an image with the terminal sh a optional command |
| docker stop <image id>       | Stop an image                                          |
| docker kill <image id>       | Kill immediately an image                              |
| docker-compose up --build    | Run docker compose and also build                      |
| docker-compose -d            | Run docker compose in the background                   |
| docker-compose down          | Stop docker compose                                    |
| docker run -p 8080:8080      | Change the port mapping                                |
