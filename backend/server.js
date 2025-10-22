const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// POST route to handle form submission
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: "Your Portfolio <onboarding@resend.dev>", // sender name & verified domain or default address
      to: process.env.RECEIVER_EMAIL, // your Gmail or any address to receive messages
      subject: `New message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    console.log("Email sent:", response);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
