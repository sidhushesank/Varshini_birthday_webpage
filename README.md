# 🌙 Varshini’s Day — A Private Birthday Web Experience

> *A little galaxy made just for her.*

This project is a **deeply personal birthday website** created to celebrate Varshini — not just for one day, but as a space that holds memories, secrets, and messages revealed over time.

It combines a **beautiful front-end experience** with a **secure backend** that stores private messages and delivers scheduled emails — ensuring privacy, intention, and care.

---

## ✨ Features

### 🎁 Birthday Web Experience
- Cinematic, calm UI designed like a private galaxy
- Sections for:
  - Home
  - Memory Lane
  - Gallery
  - Voice Note
  - Secret of the Day
  - A Completely Private Message

---

### 🔐 Private Message System
- Visitors can write a **private message**
- Optional **scheduled read time**
- Message is:
  - Stored securely in MongoDB
  - Never displayed publicly
  - Delivered only to the owner via email

---

### ⏰ Secret Scheduler (Core Concept)
- A curated set of personal “secrets”
- Designed to be revealed:
  - On specific days
  - Or at controlled intervals (daily / weekly)
- No randomness — intention over automation

---

### 📧 Email Automation
- Uses **Node.js + Nodemailer**
- Messages are emailed automatically when their scheduled time arrives
- Gmail App Passwords used for secure delivery
- Powered by a cron-based background scheduler

---

## 🧠 Tech Stack

### Frontend
- HTML
- CSS
- Vanilla JavaScript
- Live Server (for local development)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Nodemailer
- node-cron
- dotenv

---

## 📁 Project Structure
# 🌙 Varshini’s Day — A Private Birthday Web Experience

> *A little galaxy made just for her.*

This project is a **deeply personal birthday website** created to celebrate Varshini — not just for one day, but as a space that holds memories, secrets, and messages revealed over time.

It combines a **beautiful front-end experience** with a **secure backend** that stores private messages and delivers scheduled emails — ensuring privacy, intention, and care.

---

## ✨ Features

### 🎁 Birthday Web Experience
- Cinematic, calm UI designed like a private galaxy
- Sections for:
  - Home
  - Memory Lane
  - Gallery
  - Voice Note
  - Secret of the Day
  - A Completely Private Message

---

### 🔐 Private Message System
- Visitors can write a **private message**
- Optional **scheduled read time**
- Message is:
  - Stored securely in MongoDB
  - Never displayed publicly
  - Delivered only to the owner via email

---

### ⏰ Secret Scheduler (Core Concept)
- A curated set of personal “secrets”
- Designed to be revealed:
  - On specific days
  - Or at controlled intervals (daily / weekly)
- No randomness — intention over automation

---

### 📧 Email Automation
- Uses **Node.js + Nodemailer**
- Messages are emailed automatically when their scheduled time arrives
- Gmail App Passwords used for secure delivery
- Powered by a cron-based background scheduler

---

## 🧠 Tech Stack

### Frontend
- HTML
- CSS
- Vanilla JavaScript
- Live Server (for local development)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Nodemailer
- node-cron
- dotenv

---

## 📁 Project Structure

Varshini_birthday_webpage/
│
├── index.html
├── var1.jpg
├── var2.jpg
├── var3.jpg
├── voice-for-varshini.m4a
│
├── birthday-backend/
│ ├── models/
│ │ └── Message.js
│ ├── middleware/
│ │ └── auth.js
│ ├── server.js
│ ├── .env
│ ├── package.json
│ └── package-lock.json
│
└── README.md

---

## 🔐 Environment Variables

Create a `.env` file inside `birthday-backend/`:


MONGO_URL=mongodb://127.0.0.1:27017/birthday_messages
PORT=5000

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_SERVICE=gmail

NOTIFY_TO=your_email@gmail.com
FROM_NAME=Varshini Website


▶️ Running the Project Locally
Backend
cd birthday-backend
npm install
node server.js


You should see:

MongoDB Connected
Backend running on port 5000

Frontend

Open index.html using Live Server

Or open directly in browser

🛡️ Privacy & Ethics

No analytics

No tracking

No public storage of messages

All messages are:

Private

Intentional

Delivered only to the owner

This project is not built for scale —
it’s built for meaning.

💛 Why This Exists

Some things aren’t meant to be rushed.
Some feelings aren’t meant to be loud.
This website exists to say what words sometimes cannot —
slowly, honestly, and respectfully.

📌 Author

Sheshank (sidhuSheshank)
Built with patience, care, and a lot of overthinking.

If you ever find this repository, know this:
this was never about code — it was about intention.


---

If you want next, I can help you with:
- 🔐 Making the repo **private**
- 🌍 Deploying frontend (GitHub Pages / Vercel)
- 🕰️ Finalizing the **Feb 14, 2026 secret schedule**
- 📝 Writing a **soft note** she might read someday

Just say the word.

