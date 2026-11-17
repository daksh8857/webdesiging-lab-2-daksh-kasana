# EXPERIMENT 8 — RESTful Book Collection API

**Student:** Daksh Kasana  
**Subject:** JCS 308 | Web Designing Lab

## Objective
Build a RESTful API using Node.js and Express.js for a book collection.

## Aim
To create a RESTful API using Node.js and Express.js that performs CRUD operations on a book collection.

## Description
Node.js allows JavaScript to run outside the browser. Express.js is a lightweight framework for creating HTTP servers and routes. A RESTful API exposes resources through URLs and HTTP methods. GET retrieves data, POST creates data, PUT or PATCH updates data, and DELETE removes data. JSON is commonly used for request and response bodies.

## Software Required
Node.js, VS Code, and Postman or a web browser.

## Source Code Files
- `package.json` — Express dependency and start command
- `server.js` — CRUD routes and in-memory book data
- `index.html` — route reference preview

## Output
A REST API that supports GET, POST, PUT, and DELETE operations for a book collection. The data is stored temporarily in memory and resets when the server restarts.

## Live Website URL
`https://YOUR-GITHUB-USERNAME.github.io/Webd-exp-8/` *(replace after publishing your own repository)*

## GitHub Repository URL
`https://github.com/YOUR-GITHUB-USERNAME/Webd-exp-8` *(replace after creating your own repository)*

## Conclusion
In this experiment, I created a RESTful API using Node.js and Express.js. I learned how HTTP methods are used to create, read, update, and delete records.

## Run and test
```bash
npm install
npm start
```
Server: `http://localhost:3000`  
Use Postman to test `GET /books`, `GET /books/1`, `POST /books`, `PUT /books/1`, and `DELETE /books/1`. The array is temporary and resets when the server restarts.
