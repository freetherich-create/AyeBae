// Simple deterministic scoring function for matching
function score(a, b, weights = { interests: 0.5, sameSchool: 0.2, recentActivity: 0.2, positive: 0.1 }) {
  let s = 0;
  // interests: intersection / union
  const aInterests = new Set(a.interests || []);
  const bInterests = new Set(b.interests || []);
  const inter = [...aInterests].filter(x => bInterests.has(x)).length;
  const union = new Set([...aInterests, ...bInterests]).size || 1;
  s += (inter / union) * (weights.interests || 0);
  if (a.school && b.school && a.school === b.school) s += (weights.sameSchool || 0);
  if (a.lastActive && b.lastActive) {
    const diff = Math.abs(new Date(a.lastActive) - new Date(b.lastActive));
    const recentScore = diff < 1000 * 60 * 60 * 24 ? (weights.recentActivity || 0) : 0; // active within a day
    s += recentScore;
  }
  if (a.positiveInteractions && b.positiveInteractions) {
    s += Math.min(a.positiveInteractions, b.positiveInteractions) * (weights.positive || 0);
  }
  return +s.toFixed(4);
}

export { score };
