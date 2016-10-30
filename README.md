# Web-API-Authentication-and-Authorization

## Introduction
Implement authentication and authorization web API using node.js and express framework

## How To Run Apps
> npm install

> npm start

> open localhost:3000 in browser

## Dependencies
1. node.js
2. express framework
3. nodemon
4. passport
5. passport-local
6. passport-local-mongoose
7. mongodb
8. mongoose
9. express-session

## How To Install Dependencies
1. express generator : ```express .```
2. nodemon : ```npm install --save-dev nodemon```
3. passport : ```npm install --save passport```
4. passport-local : ```npm install --save passport-local```
5. passport-local-mongoose : ```npm install --save passport-local-mongoose```
6. mongodb : ``` npm install --save mongodb```
7. mongoose : ``` npm install --save mongoose```
8. express-session : ```npm install --save express-session```

## Database's Structure

1. Database's name : db_users
2. Collection's name : users
3. Fields : username, role, email

## HTTP Routes

| Routes | HTTP | Action | Role |
|--------|------|--------|------|
| http://localhost:3000/ | GET | show home menu if not login | student/admin |
| http://localhost:3000/ | GET | show user list if login | student/admin |
| http://localhost:3000/login | GET | show form login | student/admin |
| http://localhost:3000/login | POST | process form login | student/admin |
| http://localhost:3000/signup | GET | show form signup | student/admin |
| http://localhost:3000/signup | POST | process form signup | student/admin |
| http://localhost:3000/add | GET | show form add new user | admin |
| http://localhost:3000/add | POST | process form add new user | admin |
| http://localhost:3000/edit/{id} | GET | show form edit user | admin |
| http://localhost:3000/edit/{id} | POST | process form edit user | admin |
| http://localhost:3000/delete/{id} | GET | delete specific user | admin |


## package.json

```
{
  "name": "web_api_authentication_and_authorization",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "express": "~4.13.4",
    "jade": "~1.11.0",
    "mongodb": "^2.2.11",
    "mongoose": "^4.6.5",
    "morgan": "~1.7.0",
    "passport": "^0.3.2",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^4.0.0",
    "serve-favicon": "~2.3.0"
  },
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
}

```

## App's Structure

```
```


## Contributor
Ken Duigraha Putra &copy; 2016

## License
MIT
