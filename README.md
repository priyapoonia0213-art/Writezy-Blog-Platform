# Writezy - AI-Powered Blog Platform

A full-stack blog platform with AI-powered content generation, image management, and admin dashboard.

🌐 **Live Demo:** [writezy-blog-platform-g2ky-lc2y0ityk.vercel.app](https://writezy-blog-platform-g2ky-lc2y0ityk.vercel.app)

---

## 🔐 Demo Login

| Field | Value |
|-------|-------|
| **Email** | admin@example.com |
| **Password** | TripleShot |

> Click **Login** button on the top right to access the admin dashboard.

---

## 🚀 Features

- 📝 AI-powered blog content generation using Groq (LLaMA 3.3)
- 🖼️ Image upload and management via ImageKit
- 🔐 Admin dashboard with JWT authentication
- 🌙 Light / Dark mode toggle
- 📱 Fully responsive design
- 🗄️ MongoDB Atlas database

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React + Vite | Frontend framework |
| Tailwind CSS v4 | Styling |
| Axios | API calls |
| React Router DOM | Routing |
| React Quill | Rich text editor |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js + Express | Server |
| MongoDB + Mongoose | Database |
| JWT | Authentication |
| ImageKit | Image storage |
| Groq API (LLaMA 3.3) | AI content generation |

---

## 📁 Project Structure

```
WRITEZY/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   ├── BlogCard.jsx
│   │   │   ├── BlogList.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Newsletter.jsx
│   │   ├── context/
│   │   │   ├── AppContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   ├── Blog.jsx
│   │   │   ├── Home.jsx
│   │   │   └── NotFound.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── vercel.json
│   └── vite.config.js
│
├── server/
│   ├── configs/
│   │   ├── db.js
│   │   ├── groq.js
│   │   └── imageKit.js
│   ├── controllers/
│   │   ├── adminController.js
│   │   └── blogController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── multer.js
│   ├── models/
│   │   ├── Blog.js
│   │   └── Comment.js
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   └── blogRoutes.js
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── vercel.json
│
└── .gitignore
```

---
## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Groq API account
- ImageKit account

---

### 1. Clone the Repository

```bash
git clone https://github.com/priyapoonia0213-art/Writezy-Blog-Platform.git
cd Writezy-Blog-Platform
```

---

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server/` folder:

```env
# Server
PORT=3000

# JWT
JWT_SECRET=your_jwt_secret

# Admin Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password

# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/writezy?retryWrites=true&w=majority

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_endpoint

# Groq AI
GROQ_API_KEY=your_groq_api_key
```

Start the backend:
```bash
nodemon server.js
# or
node server.js
```

---

### 3. Setup Frontend

```bash
cd client
npm install
```

Create a `.env` file in the `client/` folder:
```env
VITE_BACKEND_URL=http://localhost:3000
```

Start the frontend:
```bash
npm run dev
```

---

## 🔑 Environment Variables

### Backend (`server/.env`)

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 3000) |
| `JWT_SECRET` | Secret key for JWT tokens |
| `ADMIN_EMAIL` | Admin login email |
| `ADMIN_PASSWORD` | Admin login password |
| `MONGODB_URI` | MongoDB Atlas connection string |
| `IMAGEKIT_PUBLIC_KEY` | ImageKit public key |
| `IMAGEKIT_PRIVATE_KEY` | ImageKit private key |
| `IMAGEKIT_URL_ENDPOINT` | ImageKit URL endpoint |
| `GROQ_API_KEY` | Groq API key for AI generation |

---

## 🌐 API Endpoints

### Blog Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/blog` | Get all blogs |
| `POST` | `/api/blog/generate` | Generate AI blog content |

### Admin Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/admin/login` | Admin login |
| `POST` | `/api/admin/blog` | Create new blog |
| `DELETE` | `/api/admin/blog/:id` | Delete a blog |

---

## 🚀 Deployment

### Backend → Render
1. Push code to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your GitHub repo
4. Set build command: `npm install`
5. Set start command: `node server.js`
6. Add all environment variables
7. Deploy!

### Frontend → Vercel
1. Go to [vercel.com](https://vercel.com) → New Project
2. Connect your GitHub repo
3. Add environment variable:
   ```
   VITE_BACKEND_URL=https://your-render-url.onrender.com
   ```
4. Deploy!

### MongoDB Atlas
- Go to **Network Access** → Add `0.0.0.0/0` to allow all IPs

---

## 🌙 Dark Mode

Writezy supports light and dark mode toggle via:
- `ThemeContext.jsx` — manages theme state
- Saved in `localStorage` — persists on refresh
- Toggle button in Navbar — sun/moon icon

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 👩‍💻 Authors

This project was collaboratively built by:

| **Priya** |
| **Saloni** | 
| **Bhawana** | 

---

*Built with ❤️ by Priya, Saloni & Bhawana*
