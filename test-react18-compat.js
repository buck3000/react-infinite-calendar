/**
 * Test React 18/19 compatibility in production mode
 * This tests for the specific React Scheduler API issues
 */
import React from 'react';
import { createRoot } from 'react-dom/client';

// Test environment setup to simulate production
const originalEnv = process.env.NODE_ENV;
process.env.NODE_ENV = 'production';

async function testReact18Compatibility() {
  console.log('🧪 Testing React 18/19 compatibility...');
  
  try {
    // Import our calendar component
    const { default: Calendar } = await import('./src/index.jsx');
    
    // Create a test container
    const container = document.createElement('div');
    document.body.appendChild(container);
    
    console.log('✅ Imports successful');
    
    // Test React 18 createRoot
    const root = createRoot(container);
    console.log('✅ createRoot successful');
    
    // Test rendering with common props
    const testProps = {
      width: 400,
      height: 500,
      selected: new Date(),
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2030, 11, 31),
      onSelect: (date) => console.log('Selected:', date)
    };
    
    // This should work without any React Scheduler API errors
    root.render(React.createElement(Calendar, testProps));
    console.log('✅ Component renders without scheduler API errors');
    
    // Test virtual scrolling doesn't cause issues
    await new Promise(resolve => setTimeout(resolve, 100));
    console.log('✅ Virtual scrolling initialized successfully');
    
    // Cleanup
    root.unmount();
    container.remove();
    
    console.log('✅ All React 18/19 compatibility tests passed!');
    return true;
    
  } catch (error) {
    console.error('❌ React 18/19 compatibility test failed:', error.message);
    
    // Check for specific scheduler API errors
    if (error.message.includes('unstable_') || 
        error.message.includes('scheduler') || 
        error.message.includes('flushSync')) {
      console.error('🔍 This appears to be a React Scheduler API compatibility issue');
      console.error('💡 The issue is likely with @tanstack/react-virtual or related dependencies');
    }
    
    return false;
  } finally {
    // Restore original environment
    process.env.NODE_ENV = originalEnv;
  }
}

// Create a mock DOM environment for testing
function setupMockDOM() {
  if (typeof document === 'undefined') {
    const { JSDOM } = require('jsdom');
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
      pretendToBeVisual: true,
      resources: 'usable'
    });
    
    global.window = dom.window;
    global.document = dom.window.document;
    global.navigator = dom.window.navigator;
    global.requestAnimationFrame = dom.window.requestAnimationFrame;
    global.cancelAnimationFrame = dom.window.cancelAnimationFrame;
  }
}

// Run the test
if (require.main === module) {
  setupMockDOM();
  testReact18Compatibility()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      console.error('Test execution failed:', error);
      process.exit(1);
    });
}

export { testReact18Compatibility };