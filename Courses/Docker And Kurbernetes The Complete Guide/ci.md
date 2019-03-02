# CI

CI can be use to test and deploy code.

This automate lot of pain point in development

Work nicely with docker

---

### Steps

1. Tell ci we need a copy of docker running
2. Build our image using DOckerfile.dev
3. Tell ci how to run our test suite
4. Tell ci how to deploy our code

---

Example of Travis setup

```yml
sudo: required
services:
  - docker

before_install:
  - docker build -t equimper/docker-react -f Dockerfile.dev .

script:
  - docker run equimper/docker-react npm run test -- --coverage
```
