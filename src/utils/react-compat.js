/**
 * React 18/19 Compatibility Layer
 * Handles potential scheduler API compatibility issues
 */

import { flushSync } from 'react-dom';

/**
 * Safe flushSync wrapper that handles React 18/19 compatibility
 * @param {Function} fn - Function to execute synchronously
 * @returns {any} - Result of the function
 */
export function safeFlushSync(fn) {
  try {
    // In React 18+, flushSync is available and works correctly
    return flushSync(fn);
  } catch (error) {
    // Fallback: execute immediately without sync flushing
    console.warn('flushSync failed, falling back to immediate execution:', error.message);
    return fn();
  }
}

/**
 * Check if we're running in React 18+ with proper flushSync support
 * @returns {boolean}
 */
export function hasFlushSyncSupport() {
  try {
    // Test if flushSync is available and functional
    flushSync(() => {});
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Get React version information for debugging
 * @returns {string}
 */
export function getReactVersion() {
  try {
    return require('react').version;
  } catch (error) {
    return 'unknown';
  }
}

/**
 * Batch state updates safely across React versions
 * @param {Function} fn - Function containing state updates
 */
export function safeBatchedUpdates(fn) {
  try {
    // React 18+ automatically batches updates
    if (hasFlushSyncSupport()) {
      fn();
    } else {
      // Fallback for older versions or compatibility issues
      fn();
    }
  } catch (error) {
    console.warn('Batched updates failed, executing immediately:', error.message);
    fn();
  }
}

export default {
  safeFlushSync,
  hasFlushSyncSupport,
  getReactVersion,
  safeBatchedUpdates
};