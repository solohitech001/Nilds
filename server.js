const express = require('express');
const path = require('path');

const app = express();

// Set the port
const PORT = process.env.PORT || 5000;

// Serve the `dist` folder as static files
app.use(express.static(path.join(__dirname, 'dist')));

// Handle root request
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Fallback for other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
