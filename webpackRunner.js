const { spawn } = require('child_process');
const child = spawn('./node_modules/.bin/webpack', ['-d', '--watch']);

if (child.error) {
  console.log('error', child.error);
} else {
  console.log('rebuilt bundle')
}
