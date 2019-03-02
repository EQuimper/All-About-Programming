# Docker Mastery on Udemy

## What is Docker

A way to deploy product with the same system. Make it consistent.

## Image vs. Container

An image is the application we want to run

A container is an instance of that image running as a process

You can have many containers running off the same image

## Command

List container

```
docker container ls
```

Stop a container

```
docker container stop <uniqueId>
```

Start a nginx server

```
docker container run --publish 80:80 nginx
```

Start a nginx server in detach mode

```
docker container run --publish 80:80 --detach nginx
```

Remove a container

```
docker container rm <uniqueId>
```

See stats

```
docker container stats
```

Process list in one container

```
docker container top
```

Details of one container config

```
docker container inspect
```

Kill all containers

```
docker kill $(docker ps -q)
```

Delete all stopped container

```
docker rm $(docker ps -a -q)
```
