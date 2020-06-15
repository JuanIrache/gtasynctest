const express = require('express');
const { readFileSync } = require('fs');
const gt = require('gopro-telemetry');

const app = express();

app.get('/process', async (req, res) => {
  const rawData = readFileSync('./gopro.bin');
  console.log('before processing');
  const processed = await gt({ rawData }, { promisify: true });
  console.log('processing done');
  res.send('processing done');
});

app.get('/process-with-timeout', (req, res) => {
  const rawData = readFileSync('./gopro.bin');
  console.log('before processing');
  setTimeout(async () => {
    const processed = await gt({ rawData }, { promisify: true });
    console.log('processing done');
    res.send('processing done');
  }, 1000);
});

app.get('/ping', async (req, res) => {
  console.log('ping');
  res.send('ping done');
});

app.listen(8091, () => console.log(`Listening`));
