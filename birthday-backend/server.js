require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cron = require("node-cron");

const Message = require("./models/Message");

const app = express();
app.use(cors());
app.use(express.json());

// -------------------------------
// MongoDB Connection
// -------------------------------
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// -------------------------------
// Email Transporter
// -------------------------------
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // gmail
  auth: {
    user: process.env.EMAIL_USER,     // your gmail
    pass: process.env.EMAIL_PASS,     // your app password
  },
});

// -------------------------------
// Save Message Endpoint
// -------------------------------
app.post("/api/messages", async (req, res) => {
  try {
    const { name, email, when, message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Message is required" });
    }

    const msg = new Message({
      name,
      email,
      when,
      message,
    });

    await msg.save();

    res.status(201).json({ success: true });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ error: "Failed to save message" });
  }
});

// -------------------------------
// Cron Job — runs every minute
// -------------------------------
cron.schedule("* * * * *", async () => {
  try {
    const now = new Date();

    const dueMessages = await Message.find({
      delivered: false,
      when: { $lte: now }
    });

    for (let msg of dueMessages) {
      await transporter.sendMail({
        from: `${process.env.FROM_NAME} <${process.env.EMAIL_USER}>`,
        to: process.env.NOTIFY_TO,
        subject: `A new private message from ${msg.name}`,
        text: `
You received a message scheduled for: ${msg.when}

From: ${msg.name}

Message:
${msg.message}

Sent automatically by your Varshini Birthday Website 💛
        `,
      });

      msg.delivered = true;
      await msg.save();
    }
  } catch (err) {
    console.log("Cron Error:", err);
  }
});

// -------------------------------
// Start Server
// -------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
