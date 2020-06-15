const request = require('request');

const timeout = millis =>
  new Promise((resolve, reject) => setTimeout(resolve, millis));

const infinite = async () => {
  while (true) {
    request('http://localhost:8091/ping', () => {});
    await timeout(500);
  }
};

infinite();
