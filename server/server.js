const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
const data = require("./data.json")
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the data.json file
app.get('/api/userdata', (req, res) => {
  // res.sendFile(path.join(__dirname, 'data.json'));
  res.send(data)
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
