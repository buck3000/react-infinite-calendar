/**
 * React Scheduler API Compatibility Layer
 * Handles the transition from React 17 to React 18+ scheduler changes
 */

let flushSync;

// Safely import flushSync with fallbacks
try {
  // React 18+ approach
  const ReactDOM = require('react-dom');
  flushSync = ReactDOM.flushSync;
} catch (error) {
  try {
    // Alternative import method
    flushSync = require('react-dom').flushSync;
  } catch (error2) {
    // Fallback: create a no-op flushSync
    flushSync = (fn) => fn();
    console.warn('flushSync not available, using synchronous fallback');
  }
}

/**
 * Safe flushSync that works across React versions
 * @param {Function} fn Function to execute synchronously
 * @returns {any} Result of the function
 */
export function safeFlushSync(fn) {
  if (typeof flushSync === 'function') {
    try {
      return flushSync(fn);
    } catch (error) {
      // If flushSync fails, fall back to immediate execution
      console.warn('flushSync failed, executing immediately:', error.message);
      return fn();
    }
  } else {
    // No flushSync available, execute immediately
    return fn();
  }
}

/**
 * Check if the current React version supports the new scheduler APIs
 * @returns {boolean}
 */
export function hasModernScheduler() {
  try {
    return typeof flushSync === 'function';
  } catch (error) {
    return false;
  }
}

/**
 * Batch updates safely across React versions
 * In React 18+, this is automatic. In earlier versions, we can use unstable_batchedUpdates
 * @param {Function} fn Function containing state updates
 */
export function safeBatchedUpdates(fn) {
  if (hasModernScheduler()) {
    // React 18+ automatically batches updates
    fn();
  } else {
    // Fallback for React 17 and earlier
    try {
      const ReactDOM = require('react-dom');
      if (ReactDOM.unstable_batchedUpdates) {
        ReactDOM.unstable_batchedUpdates(fn);
      } else {
        fn();
      }
    } catch (error) {
      fn();
    }
  }
}

/**
 * Create a scheduler-compatible update function
 * @param {Function} fn Function to schedule
 * @param {Object} options Options for scheduling
 */
export function scheduleUpdate(fn, options = {}) {
  const { priority = 'normal', timeout = 5000 } = options;
  
  if (hasModernScheduler()) {
    // Use React 18+ patterns
    if (priority === 'immediate') {
      return safeFlushSync(fn);
    } else {
      // Let React handle the scheduling
      return fn();
    }
  } else {
    // Fallback for older React versions
    if (priority === 'immediate') {
      return fn();
    } else {
      // Use setTimeout as fallback
      return setTimeout(fn, 0);
    }
  }
}

export default {
  safeFlushSync,
  hasModernScheduler,
  safeBatchedUpdates,
  scheduleUpdate
};