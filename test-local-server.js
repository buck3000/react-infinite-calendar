import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3333;

// Serve static files
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use(express.static(__dirname));

// Main test page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Local Test Server - React Calendar</title>
      <style>
        body { font-family: system-ui; padding: 40px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; }
        .test-link { display: block; padding: 15px; margin: 10px 0; background: #007bff; color: white; text-decoration: none; border-radius: 6px; }
        .test-link:hover { background: #0056b3; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🧪 Local Test Server Running</h1>
        <p>Server running at: <strong>http://localhost:${PORT}</strong></p>
        
        <h2>Available Tests:</h2>
        <a href="/test-implementation-working.html" class="test-link">📊 Full Implementation Test</a>
        <a href="/test-rails-scenario.html" class="test-link">🚂 Rails Integration Test</a>
        <a href="/test-backward-compatible.html" class="test-link">🔄 Backward Compatibility Test</a>
        <a href="/test-your-exact-code.html" class="test-link">💯 Your Exact Code Test</a>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`
  🚀 Local Test Server Running!
  ================================
  
  📍 URL: http://localhost:${PORT}
  
  Available tests:
  • http://localhost:${PORT}/test-implementation-working.html
  • http://localhost:${PORT}/test-rails-scenario.html
  • http://localhost:${PORT}/test-backward-compatible.html
  • http://localhost:${PORT}/test-your-exact-code.html
  
  Press Ctrl+C to stop the server
  `);
});