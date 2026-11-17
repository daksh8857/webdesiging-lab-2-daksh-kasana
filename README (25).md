# EXPERIMENT 9 — User Authentication using Node.js, Express.js, MongoDB and JWT

**Student:** Daksh Kasana  
**Subject:** JCS 308 | Web Designing Lab

## Objective
Implement user authentication using Node.js, Express.js, MongoDB, and JWT.

## Aim
To implement secure user registration and login/logout functionality using Node.js, Express.js, MongoDB, password hashing, and JSON Web Tokens (JWT).

## Description
Authentication verifies a user's identity. MongoDB stores user records, while Express routes handle registration and login requests. Passwords are hashed using bcrypt; plain-text passwords are never stored. After successful login, the server issues a signed JWT. The protected profile route verifies the token before returning private data. The browser stores the token in sessionStorage. Logout removes the client token; a stateless JWT remains valid until expiry unless server-side revocation is implemented.

## Software Required
Node.js, VS Code, MongoDB Community Server or MongoDB Atlas, and Postman.

## Source Code Files
- `server.js` — Express routes, MongoDB model and JWT middleware
- `public/index.html` — registration/login interface
- `public/style.css` — interface styling
- `public/app.js` — fetch requests and session token handling
- `package.json`, `.env.example` — dependencies and environment settings

## Output
A backend with registration, login, password hashing, JWT token generation, and a protected profile route.

## Live Website URL
`https://YOUR-GITHUB-USERNAME.github.io/Webd-exp-9/` *(replace after publishing your own repository)*

## GitHub Repository URL
`https://github.com/YOUR-GITHUB-USERNAME/Webd-exp-9` *(replace after creating your own repository)*

## Conclusion
In this experiment, I implemented basic user authentication using Express.js, MongoDB, bcrypt, and JWT. I learned how passwords can be hashed and how tokens can protect routes.

## Run
1. Install Node.js and start MongoDB or create a MongoDB Atlas database.
2. Copy `.env.example` to `.env`.
3. Set `MONGO_URI` and a long random `JWT_SECRET` in `.env`.
4. Run:
```bash
npm install
npm start
```
Open `http://localhost:3000`. Never upload `.env` or real secrets to GitHub.
