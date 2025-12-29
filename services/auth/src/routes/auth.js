const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Placeholder in-memory users store for initial dev
const users = new Map();

router.post('/signup', async (req, res) => {
  const { email, password, displayName } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email and password required' });
  if (users.has(email)) return res.status(409).json({ error: 'user exists' });
  const hash = await bcrypt.hash(password, 10);
  const user = { id: Date.now().toString(), email, displayName, passwordHash: hash };
  users.set(email, user);
  const token = jwt.sign({ sub: user.id, email }, process.env.JWT_SECRET || 'devsecret');
  res.json({ token, user: { id: user.id, email: user.email, displayName } });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.get(email);
  if (!user) return res.status(401).json({ error: 'invalid credentials' });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: 'invalid credentials' });
  const token = jwt.sign({ sub: user.id, email }, process.env.JWT_SECRET || 'devsecret');
  res.json({ token, user: { id: user.id, email: user.email, displayName: user.displayName } });
});

module.exports = router;
