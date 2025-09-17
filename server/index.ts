import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '..', 'dist', 'public')));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'StarRDP API is running' });
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 StarRDP server running on port ${PORT}`);
  console.log(`🌐 Open http://localhost:${PORT} to view it in the browser`);
});