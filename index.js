const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
    <div style="text-align: center; padding: 50px; font-family: sans-serif;">
      <h1 style="color: #2c3e50;">🚀 Deployment Successful!</h1>
      <p style="font-size: 1.2em;">โปรเจกต์ Node.js ของคุณรันอยู่บน AWS EC2 เรียบร้อยแล้ว</p>
      <div style="background: #ecf0f1; padding: 20px; border-radius: 10px; display: inline-block;">
        <p><strong>Status:</strong> Online</p>
        <p><strong>Port:</strong> ${port}</p>
      </div>
      <footer style="margin-top: 30px; color: #7f8c8d;">
        <p>สร้างโดย Terraform Practice Lab</p>
      </footer>
    </div>
  `);
});

app.listen(port, () => {
    console.log(`Application is running at http://localhost:${port}`);
});