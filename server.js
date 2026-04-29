const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const selfsigned = require('selfsigned');

const app = express();
app.use(express.static(path.join(__dirname)));

// Generate self-signed certificates
const attrs = [{ name: 'commonName', value: 'localhost' }];
const pems = selfsigned.generate(attrs, { days: 365 });

const options = {
  key: pems.private,
  cert: pems.cert
};

const server = https.createServer(options, app);

server.listen(8443, () => {
  console.log('⚡ Electronics Lab running at https://localhost:8443');
  console.log('📱 Access from Quest: https://<YOUR_LOCAL_IP>:8443');
  console.log('⚠️  Accept the self-signed certificate warning in browser');
});