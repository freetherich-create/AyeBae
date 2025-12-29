const { spawn } = require('child_process');
const process = require('process');
const path = require('path');
let child;

before(function (done) {
  this.timeout(10000);
  const serviceRoot = path.resolve(__dirname, '..');
  child = spawn('node', ['src/index.js'], { cwd: serviceRoot, env: { ...process.env, PORT: '3001' }, stdio: 'inherit' });
  // give server time to start
  setTimeout(done, 2000);
});

after(function () {
  if (child) child.kill();
});
