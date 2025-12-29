import assert from 'assert';
import { score } from '../src/score.js';

const a = { interests: ['movies', 'sci-fi'], school: 'UniA', lastActive: new Date().toISOString(), positiveInteractions: 2 };
const b = { interests: ['movies', 'music'], school: 'UniA', lastActive: new Date().toISOString(), positiveInteractions: 1 };

describe('score', () => {
  it('computes expected score', () => {
    const s = score(a,b);
    assert(s > 0, 'score should be positive');
  });
});
