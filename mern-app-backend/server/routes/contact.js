import express from 'express';
import Contact from '../models/Contact.js';

// const express = require('express');
const router = express.Router();
// const Contact = require('../models/Contact');

// Route to handle incoming user data
router.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    res.status(200).json({ message: "User data received and saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;