import assert from 'assert';
import http from 'http';
import fetch from 'node-fetch';
import './setup.js';

// basic smoke tests using the running local server started in setup
const base = 'http://localhost:3001';

describe('Auth service', () => {
  it('signs up and logs in a user', async () => {
    const signup = await fetch(base + '/auth/signup', { method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify({ email: 'test@example.com', password: 'pass', displayName: 'Test' }) });
    const js = await signup.json();
    assert(js.token, 'expected token on signup');

    const login = await fetch(base + '/auth/login', { method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify({ email: 'test@example.com', password: 'pass' }) });
    const lj = await login.json();
    assert(lj.token, 'expected token on login');
  });
});
