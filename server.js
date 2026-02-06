const express = require('express');
const path = require('path');
const app = express();

// 1. Serve everything inside /public (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// 2. 404 handler (should be last)
app.use((req, res) => {
  res.status(404).sendFile('website.html', { root: path.join(__dirname, 'public') });
});

// 3. Start the server ONCE
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
