const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();

// Example database of user credentials (for demonstration purposes)
const users = {
  admin: {
    password: 'admin123',
    userType: 'admin',
  },
  hr: {
    password: 'hr456',
    userType: 'hr',
  },
};

const secretKey = 'yourSecretKey'; // Replace this with your actual secret key

app.use(bodyParser.json());

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists and credentials match
  const user = users[username];
  if (user && user.password === password) {
    // User authenticated; generate token
    const token = jwt.sign({ userType: user.userType }, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
