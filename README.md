##### **Brief.io**



A full-stack MERN application built as the capstone project. Brief.io is a fictional SaaS product for professionals to build campaign briefs, manage their team, and track project activity. It is built with a real, working backend, and a fully connected React front-end.



###### **Live Deployment**



**Deployed via Vercel. Be aware that when visiting the url the site will take 30 seconds to 1 minute to spin-up/wake-up, as this is Vercel's standard handling of deployments after 15 minutes of inactivity.**



https://briefio-sass-brief-builder-full-stack-mern-igtxqqec5.vercel.app/



###### **Description**



Brief.io lets business admins log in, submit and manage campaign briefs, maintain a team directory, and view a live activity feed of changes across the platform. The application includes full user authentication, a RESTful API with complete CRUD functionality across four data collections, and a React front-end that interfaces directly with that API. All real data.



###### **Features**



Authentication - user registration and login with hashed passwords (bcrypt) and JWT-based auth.

Briefs Dashboard - create, view, update, and delete campaign briefs.

Team Directory - browse, search, and invite team members.

Activity Feed - live log of brief status changes, assignments, and comments, with unread/read visual state.

Contact Form - submits directly to the backend and is stored in the database.



###### **Tech Stack**



Front-End: React, React Router, CSS

Back-End: Node.js, Express

Database: MongoDB, Mongoose

Auth: JWT, bcrypt



###### **Project Structure**



capstone-project/

&#x09;backend/

&#x09;backend/config/

&#x09;backend/data/

&#x09;backend/middleware/

&#x09;backend/models/

&#x09;backend/routes/

&#x09;index.js



&#x09;frontend/

&#x09;src/

&#x09;components/

&#x09;pages/



&#x09;**vercel.json** - **is a configuration file to override Vercel's default routing behavior.** There is a landing page /try-brief-builder and a 404 page that are not connected to the nav, and Vercel can not find them when they are hit directly. The rewrite rule/routing rule override's Vercel's default behavior, catches all paths, and falls back to a **Single-Page Application** routing behavior which allows the pages to show.



README.md



###### **Routes**



Briefs - GET, GET/:id, POST, PATCH, DELETE

Contacts - GET, GET/:id, POST, PATCH, DELETE

Team Members - GET, GET/:id, POST, PATCH, DELETE

Activities - GET, GET/:id, POST, PATCH, DELETE



###### **Pages**



/

/pricing

/contact

/login

/register

/try-brief-builder

/dashboard/briefs

/dashboard/team

/dashboard/activities

/dashboard/brief-builder

<Route path="\*" element={ <NotFound /> } /





###### **Getting Started**



1\. Clone the repo

2\. In `backend/`, run `npm install`, create a `.env` file with `MONGODB\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_URI` and `JWT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_SECRET`, then run `npm start`

3\. In `frontend/`, run `npm install`, then `npm run dev`



###### **Future Iterations**



* AI-powered brief generation (currently rule-based logic)
* PDF export and email delivery of generated briefs

