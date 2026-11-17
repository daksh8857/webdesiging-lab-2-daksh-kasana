# EXPERIMENT 12 — Full-Stack MERN Application

**Student:** Daksh Kasana  
**Subject:** JCS 308 | Web Designing Lab

## Objective
Deploy a full-stack MERN application on a cloud platform.

## Aim
To develop and deploy a full-stack MERN application using MongoDB, Express.js, React.js, and Node.js on a cloud platform.

## Description
MERN is a full-stack JavaScript technology combination. MongoDB stores application data, Express.js and Node.js provide backend APIs, and React.js provides the frontend interface. The frontend communicates with backend endpoints using HTTP requests. A cloud deployment requires separate or combined hosting configuration, environment variables, database network access, and correct API URLs. Secrets must remain on the server and must not be committed to source control.

## Software Required
Node.js, VS Code, MongoDB Atlas or local MongoDB, GitHub, and a cloud hosting platform.

## Source Code Files
- `backend/server.js` — MongoDB model and Express task API
- `backend/package.json`, `backend/.env.example` — backend setup
- `frontend/src/App.jsx` — React task manager
- `frontend/src/main.jsx`, `frontend/src/style.css` — React entry and styling
- `frontend/index.html`, `frontend/package.json`, `frontend/vite.config.js` — Vite setup

## Output
A full-stack task application in which React sends requests to an Express/Node.js API and the API stores tasks in MongoDB. The project can be deployed by hosting its frontend and backend separately.

## Live Website URL
`https://YOUR-GITHUB-USERNAME.github.io/Webd-exp-12/` *(replace after publishing your own repository)*

## GitHub Repository URL
`https://github.com/YOUR-GITHUB-USERNAME/Webd-exp-12` *(replace after creating your own repository)*

## Conclusion
In this experiment, I developed a basic MERN application and studied its deployment process. I learned how React, Node.js, Express.js, and MongoDB work together in a full-stack application.

## Run locally
1. Start MongoDB or create a MongoDB Atlas database.
2. In `backend/`, copy `.env.example` to `.env` and set `MONGO_URI`.
3. In `backend/`, run `npm install` then `npm start`.
4. In `frontend/`, run `npm install` then `npm run dev`.
5. For cloud hosting, set the frontend `VITE_API_URL` to the deployed backend URL and configure CORS. Do not commit `.env`.
