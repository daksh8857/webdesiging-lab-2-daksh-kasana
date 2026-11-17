# EXPERIMENT 10 — Static and Dynamic Website Deployment

**Student:** Daksh Kasana  
**Subject:** JCS 308 | Web Designing Lab

## Objective
Deploy a static website on Netlify and a dynamic website on Heroku or AWS.

## Aim
To understand and perform deployment of a static website and a dynamic web application using cloud hosting platforms.

## Description
Deployment makes a website available over the internet. Static sites contain files such as HTML, CSS, JavaScript, and images and can be hosted through platforms such as Netlify. Dynamic applications execute server-side code and may require runtime configuration, environment variables, and a database. Heroku availability and deployment procedures can change; AWS provides several hosting choices, such as Elastic Beanstalk, App Runner, or EC2.

## Software Required
A static HTML/CSS/JavaScript website, GitHub account, Netlify account, Node.js for the dynamic example, and an AWS or Heroku account.

## Source Code Files
- `static-site/index.html`, `style.css`, `script.js` — static website
- `dynamic-app/server.js` — Express server
- `dynamic-app/public/` — feedback form and browser JavaScript
- `dynamic-app/package.json` — server dependencies

## Output
A static website published through Netlify and a dynamic Node.js website deployed on a cloud hosting platform.

## Live Website URL
`https://YOUR-GITHUB-USERNAME.github.io/Webd-exp-10/` *(replace after publishing your own repository)*

## GitHub Repository URL
`https://github.com/YOUR-GITHUB-USERNAME/Webd-exp-10` *(replace after creating your own repository)*

## Conclusion
In this experiment, I learned the basic process of deploying static and dynamic websites. I understood the role of GitHub, hosting platforms, start commands, and environment variables.

## Run the dynamic app
```bash
cd dynamic-app
npm install
npm start
```
Open `http://localhost:3000`. The app also exposes `/health`, `POST /feedback`, and `GET /feedback`. Deploy the static folder to Netlify; deploy the dynamic Node.js app to an appropriate server platform. A GitHub Pages URL does not execute this server.
