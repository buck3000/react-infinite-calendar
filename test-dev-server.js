// Simple test server to serve the calendar locally
import { createServer } from 'vite';
import { fileURLToPath, URL } from 'node:url';

const server = await createServer({
  root: '.',
  server: {
    port: 3001,
    open: '/test-rails-integration.html'
  }
});

await server.listen();

console.log('🚀 Test server running at http://localhost:3001');
console.log('📅 Calendar test: http://localhost:3001/test-rails-integration.html');
console.log('🔧 Scheduler fix test: http://localhost:3001/test-scheduler-fix.html');