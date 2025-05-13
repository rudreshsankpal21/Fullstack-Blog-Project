📝 This is a simple blog application (My first fullstack project) built using **MongoDB**, **Express.js**, **Node.js**, and **EJS** (also known as the MEN stack with EJS templating). 
The app allows users to register, log in, write blog posts, comment on others’ posts, edit their own comments, 
update their profile (bio, name, profile picture), and even delete their account.

---

## 🌟 Main Features

* ✅ User registration and login with Passport.js
* 📝 Create, edit, and view blog posts
* 💬 Add, edit and delete comments on posts
* 👤 Update user profile (name, bio, profile picture)
* ❌ Delete your own account
* ☁️ Image uploads handled using Cloudinary

---

## 🛠️ Tech Stack Used

| Technology  | Purpose                                        |
| ----------- | ---------------------------------------------- |
| MongoDB     | To store users, blog posts, and comments       |
| Express.js  | Web framework to handle routing and middleware |
| Node.js     | JavaScript runtime environment                 |
| EJS         | Template engine to render HTML with data       |
| Passport.js | For user authentication and login sessions     |
| Multer      | Middleware to handle file uploads              |
| Cloudinary  | To upload and store images like profile pics   |

---

## 🚀 How to Run This Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Required Packages

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root folder with the following content:

```
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
SESSION_SECRET=your_session_secret
```

> Replace the values with your actual credentials.

### 4. Start the Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to see the app running.

---

## 📁 Project Structure (Simplified)

```
/models       → Mongoose models (User, Post, Comment)
/routes       → All app routes (auth, posts, comments)
/views        → EJS templates
/controllers  → Logic for handling routes
/config       → Passport and Cloudinary setup
app.js        → Main app entry point
```

---

## 🧠 What I Learned from This Project

* How to structure a full-stack Node.js app
* How to use EJS to render dynamic content
* How to add user authentication using Passport.js
* How to handle file uploads securely with Cloudinary
* How to connect to MongoDB and use Mongoose models

---


Thank you..
