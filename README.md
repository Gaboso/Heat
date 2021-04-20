# Heat :fire:

A heat map project with React and Spring Boot


#### Requirements :earth_americas:

| Requirement   | Use |
| :------------ | -------------- |
| Node 12.x     | React |
| Yarn          | Build react-heat |
| Java 8.x      | Build and run heat-service |
| Docker        | Run DB and sonarQube |

#### Structure

```
- Heat
    - dev      ## Config to run in dev mode
    - service  ## Back-end Java/Spring
    - web      ## Front-end React 
```

#### How to run :runner:

**1° step** - Start Docker :whale:
> image with `postgres` and `sonarqube`

```bash
docker-compose -f docker-compose.yml up -d
```

**2° step** - Start heat-service :computer:

```bash
cd service && mvnw spring-boot:run
```

**3° step** - Start react-heat :globe_with_meridians:

```bash
cd web && yarn start
```

**4° step** - [Download _NGINX_](http://nginx.org/en/download.html) or use an existing on your machine, copy `dev/nginx/nginx.conf` to `conf` folder inside _nginx_.

**5° step** - Start _nginx_

**6° step** - Access application [here](http://localhost)


----

Made with :heart: by Gaboso™ 2021