# 🧠 DevBrain

DevBrain is an AI-powered Knowledge Hub for developers.
The project includes a full authentication system, protected routes, user persistence, and a scalable structure for future developer-focused content.

## What’s Included

The project contains:
- React + Vite (client) with Redux Toolkit
- Node.js + Express (server) with JWT authentication
- MongoDB + Mongoose for data storage
---

## Project Structure


```
root/
├── client/                     # Frontend (React + Vite)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── router/
│       ├── layouts/
│       ├── components/
│       ├── store/
│       └── styles/
│
├── server/                     # Backend (Node + Express)
│   ├── package.json
│   ├── .env.example
│   ├── server.js
│   └── src/
│       ├── config/            # MongoDB connection
│       ├── middleware/        # JWT middleware
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       └── utils/
│
├── .gitignore
├── README.md
└── package.json

```

## Installation

1. Clone the repository:
2. Install dependencies:

```bash
npm install
cd client && npm install
cd ../server && npm install
```

3. Create a .env file inside server/ based on .env.example:

```bash
cd server
cp .env.example .env
```

4. Set your MongoDB connection string in server/.env.

## Running the Project

### Run client and server together:
```bash
npm run dev
```

### Run separately:
```bash
# Client only
npm run client

# Server only
npm run server
```

### Run server in production mode:
```bash
cd server
npm start
```

## API Endpoints

Basic test endpoint:
- `GET /api/test` - `{message: "API working"}`

## Technologies Used

### Frontend:
- React 18
- Vite
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios

### Server:
- Node.js
- Express
- MongoDB + Mongoose
- JWT
- express-validator
- dotenv

### Roadmap

- Knowledge Hub (topics, categories, markdown content)
- AI Assistant (explanations, notes, summaries)
- User avatar upload
- User Settings page
- Nested topic structure
- Dark / Light mode
- Admin panel for managing content
