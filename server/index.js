const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const port = 50077;
const { log } = console;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(port, () => {
  log(`Started on ${port}`);
  const localhostURL = `http://localhost:${port}`;

  if (process.platform === 'win32') {
    exec(`start ${localhostURL}`);
  } else {
    exec(`open ${localhostURL}`);
  }
});
