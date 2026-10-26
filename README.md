# SmartCare - Doctor Appointment System

SmartCare is a web application developed using Node.js and Express.js.

The application allows users to submit doctor appointment requests and demonstrates server-side validation using Express.js.

## Features

- Doctor appointment booking form
- Server-side validation
- Email validation
- Phone number validation
- Age validation
- Appointment date validation
- Department validation
- Reason-for-visit validation
- Success and error messages
- Responsive user interface
- 404 page

## Technologies Used

- Node.js
- Express.js
- EJS
- HTML
- CSS
- JavaScript
- Git
- GitHub

## Project Structure

```text
SmartCare/
│
├── controllers/
│   └── appointmentController.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── routes/
│   └── appointmentRoutes.js
│
├── validators/
│   └── appointmentValidator.js
│
├── views/
│   ├── index.ejs
│   ├── success.ejs
│   └── 404.ejs
│
├── app.js
├── package.json
├── package-lock.json
└── .gitignore