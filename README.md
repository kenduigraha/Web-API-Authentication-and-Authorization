# Web-API-Authentication-and-Authorization

## Introduction
Implement authentication and authorization web API using node.js and express framework

## How To
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

## App's Structure

```
```

## Contributor
Ken Duigraha Putra &copy; 2016

## License
MIT
