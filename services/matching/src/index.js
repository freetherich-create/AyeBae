const express = require('express');
const { calculateScore } = require('./score');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'matching' });
});

// Calculate match score between two users
app.post('/match/score', (req, res) => {
  try {
    const { user1, user2 } = req.body;
    
    if (!user1 || !user2) {
      return res.status(400).json({ 
        error: 'Both user1 and user2 are required' 
      });
    }
    
    const score = calculateScore(user1, user2);
    
    res.json({
      score,
      compatibility: score >= 70 ? 'high' : score >= 40 ? 'medium' : 'low'
    });
  } catch (error) {
    console.error('Error calculating score:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Find potential matches for a user
app.post('/match/find', (req, res) => {
  try {
    const { user, candidates } = req.body;
    
    if (!user || !candidates || !Array.isArray(candidates)) {
      return res.status(400).json({ 
        error: 'User and candidates array are required' 
      });
    }
    
    const matches = candidates
      .map(candidate => ({
        ...candidate,
        score: calculateScore(user, candidate)
      }))
      .sort((a, b) => b.score - a.score)
      .filter(match => match.score >= 30);
    
    res.json({ matches });
  } catch (error) {
    console.error('Error finding matches:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Matching service listening on ${PORT}`);
});
