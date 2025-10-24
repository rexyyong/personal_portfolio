# Personal Portfolio (MERN Stack)

This repository contains the source code for my personal portfolio website, built using the **MERN stack** (MongoDB, Express, React, Node.js). The site showcases my projects, skills, and contact information.

---

## Project Structure

- **Frontend:** `my-react-app`  
  Built with React. Displays portfolio content and provides a contact form.

- **Backend:** `mern-app-backend/server/server.js`  
  Built with Express and Node.js. Handles contact form submissions, saves data to MongoDB, and sends emails using Gmail SMTP with OAuth2.

---

## Getting Started

### 1. Clone the Repository

```sh
git clone <your-repo-url>
cd personal_portfolio
```

---

### 2. Backend Setup

1. Navigate to the backend directory:
    ```sh
    cd mern-app-backend/server
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `config.env` file in `mern-app-backend/server/` with the following variables:
    ```
    ATLAS_URI=<your-mongodb-atlas-uri>
    MAILGUN_API_KEY=<your_mailgun_api_key>
    MAILGUN_DOMAIN=<your_domain>
    ```

4. Start the backend server:
    ```sh
    node server.js
    ```

---

### 3. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
    ```sh
    cd my-react-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in `my-react-app/` with the following variable:
    ```
    REACT_APP_BACKEND_URL=http://localhost:5000
    ```
    > Replace with your deployed backend URL if not running locally.

4. Start the frontend:
    ```sh
    npm start
    ```

---

## Environment Variables

### Frontend (`my-react-app/.env`)
- `REACT_APP_BACKEND_URL` — URL of your backend server (e.g., `http://localhost:5000`)

### Backend (`mern-app-backend/server/config.env`)
- `ATLAS_URI` — MongoDB Atlas connection string
- `CLIENT_ID` — Google OAuth2 client ID
- `CLIENT_SECRET` — Google OAuth2 client secret
- `REFRESH_TOKEN` — Google OAuth2 refresh token
- `EMAIL` — Gmail address used for sending emails

---

## Sending Emails with Gmail SMTP & OAuth2

To enable email functionality (contact form), you must set up Gmail SMTP with OAuth2.  
**Follow this guide for step-by-step instructions:**  
[Sending Emails Securely Using Node.js, Nodemailer, SMTP, Gmail, and OAuth2](https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a)

---

## Notes

- Make sure to restart your servers after changing any environment variables.
- For production, update the environment variables to point to your deployed backend and database.
- The backend exposes a `/ping` route for uptime monitoring.

---

## License

This project is for personal use and portfolio