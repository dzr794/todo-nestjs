<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>



## Run the backend first

_Run the backend first to let it have the port 3000_

## ADD THE .env file whit this content

```
DATABASE_URL="postgresql://postgres:12eA5@localhost:5432/toDoNestJs?schema=public"
```

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run postgres database

1. Start docker desktop
2. Open a terminal inside the project folder
3. init docker-compose

```
docker-compose up
```
