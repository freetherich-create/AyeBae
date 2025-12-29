import { spawn } from 'child_process';
import process from 'process';
let child;

before(function (done) {
  this.timeout(5000);
  child = spawn('node', ['src/index.js'], { env: { ...process.env, PORT: '3001' }, stdio: 'inherit' });
  // give server time to start
  setTimeout(done, 1200);
});

after(function () {
  if (child) child.kill();
});
