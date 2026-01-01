import express from 'express';
import { score } from './score.js';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'matching' });
});

// Get match score
app.post('/api/match/score', (req, res) => {
  const { userA, userB, weights } = req.body;
  if (!userA || !userB) {
    return res.status(400).json({ error: 'Missing user data' });
  }
  const matchScore = score(userA, userB, weights);
  res.json({ score: matchScore });
});

app.listen(PORT, () => {
  console.log(`Matching service listening on ${PORT}`);
});
