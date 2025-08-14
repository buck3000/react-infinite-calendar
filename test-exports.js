const { createRequire } = require('module');
const require = createRequire(import.meta.url);

try {
  const calendarModule = require('./dist/react-infinite-calendar.cjs.js');
  console.log('✅ CJS module loads successfully');
  console.log('Available exports:');
  console.log('- Default export:', typeof calendarModule.default);
  console.log('- Named exports:', Object.keys(calendarModule).filter(k => k !== 'default'));
  
  // Test if we can access the Calendar component
  if (calendarModule.default || calendarModule.Calendar) {
    console.log('✅ Calendar component is accessible');
  } else {
    console.log('❌ Calendar component is not accessible');
  }
  
} catch (error) {
  console.log('❌ Module loading failed:', error.message);
  console.log('Error details:', error.stack);
}