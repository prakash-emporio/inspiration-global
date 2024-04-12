import express from 'express';
import path from 'path';

const app = express();
const PORT = 5173;

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Route all requests to the React app's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
