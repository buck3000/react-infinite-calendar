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
    console.log('Full module keys:', Object.keys(calendarModule));
  }
  
} catch (error) {
  console.log('❌ Module loading failed:', error.message);
  if (error.message.includes('flushSync') || error.message.includes('scheduler')) {
    console.log('🔍 This is likely the React Scheduler API compatibility issue');
  }
}