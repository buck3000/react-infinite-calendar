# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern React 18/19 infinite scrolling calendar component library. Fully modernized with:
- React 18/19 compatibility with Concurrent Features
- Modern virtual scrolling using @tanstack/react-virtual  
- TypeScript support with gradual migration path
- Enhanced accessibility (WCAG 2.1 AA)
- Modern build tooling and testing
- Functional components with hooks and forwardRef patterns

The calendar supports date selection, range selection, multiple dates, keyboard navigation, localization, theming, and comprehensive accessibility features.

## Development Commands

- `npm run dev` - Start Vite development server
- `npm run build` - Build library for distribution (creates ES and CJS formats with source maps)
- `npm run preview` - Preview the built library
- `npm test` - Run Vitest test suite with jsdom environment
- `npm run lint` - Run modern ESLint (v9) with auto-fix on src/**/*.{js,jsx,ts,tsx}

## React 18/19 Compatibility

- **Peer Dependencies**: Supports React 18.x and 19.x
- **Concurrent Features**: Uses useDeferredValue for smooth scrolling performance
- **Modern Patterns**: forwardRef, useImperativeHandle, useId for accessibility
- **No Legacy**: Removed defaultProps in favor of default parameters

## Architecture

### Core Components Structure
- **Calendar** (`src/Calendar/index.jsx`) - Main calendar component with React 18/19 features:
  - Uses `useId` for accessibility
  - Uses `useDeferredValue` for smooth scrolling
  - ARIA compliant with live regions
- **MonthList** (`src/MonthList/index.jsx`) - Modern virtual scrolling with `@tanstack/react-virtual`:
  - Uses `forwardRef` for ref forwarding
  - Exposes imperative API via `useImperativeHandle`
- **Higher-Order Components** - Extensibility through HOCs:
  - `withDateSelection` - Single date selection
  - `withKeyboardSupport` - Keyboard navigation with focus management
  - `withMultipleDates` - Multiple date selection
  - `withRange` - Date range selection with visual feedback

### Custom Hooks (Modern Architecture)
The codebase has been refactored to use three main custom hooks for better separation of concerns:

- **useCalendarControls** (`src/hooks/useCalendarControls.jsx`) - Manages scrolling, date navigation, and disabled dates
- **useCalendarMonths** (`src/hooks/useCalendarMonths.jsx`) - Handles month calculations and date ranges
- **useCalendarDisplay** (`src/hooks/useCalendarDisplay.jsx`) - Manages display modes, themes, and localization

### Component Hierarchy
- **MonthList** - Virtual scrolling container for months
- **Header** - Navigation and date display with animation support
- **Day** - Individual day cells with theming
- **Years** - Year selection component
- **Weekdays** - Week header display
- **Today** - Helper for quick navigation to current date

### Key Features Implementation  
- **React 18-Compatible Virtual Scrolling**: Custom `SimpleVirtualizer` implementation (no React Scheduler API dependencies)
- **Accessibility**: WCAG 2.1 AA compliant with:
  - ARIA live regions and proper roles
  - Screen reader support with announcements
  - Focus management and keyboard navigation
  - High contrast theme support
- **CSS Modules**: SCSS modules with camelCase conversion and modern Sass syntax
- **Date Handling**: Uses `date-fns` v4 for reliable date operations
- **Theming**: Comprehensive theming system with CSS custom properties
- **Localization**: Full i18n support with locale objects and RTL support

## Build Configuration

- **Vite 6.x** with library mode and source maps
- **TypeScript** support with gradual migration (allowJs: true)
- **Modern ESLint 9** with flat config format:
  - React hooks rules and accessibility rules
  - TypeScript-aware import resolution
  - Vitest globals support
- **Vitest 3.x** with:
  - jsdom environment for DOM testing
  - Modern React Testing Library patterns
  - No deprecated react-hooks testing
- **CSS Modules** with SCSS preprocessing and modern syntax
- **Library Output**: ES and CJS formats optimized for tree-shaking

## Testing

- **Modern Testing Stack**: Vitest 3.x + React Testing Library 16.x
- **Test Locations**: `src/__tests__/` and `src/hooks/__tests__/`
- **Setup**: `vitest.setup.js` with proper globals and cleanup
- **Hook Testing**: Uses `renderHook` from `@testing-library/react` (no deprecated react-hooks)
- **Commands**:
  - `npm test` - Run all tests
  - `npm test -- --coverage` - With coverage reports
  - `npm test -- --watch` - Watch mode

## Modern React Patterns Used

- `forwardRef` and `useImperativeHandle` for component refs
- `useId` for stable accessibility IDs
- `useDeferredValue` for performance optimization
- Default parameters instead of defaultProps
- Proper dependency arrays in useCallback/useEffect
- Modern JSX transform (no React import needed)

## Accessibility Features

- ARIA roles: `application`, `gridcell`, `grid`
- Live regions for screen reader announcements
- Focus management with proper tabIndex
- Keyboard navigation (arrow keys, Enter, Escape)
- High contrast theme support
- Screen reader only content with `.sr-only` class

## File Extensions & TypeScript

- **Current**: `.jsx` for React components, `.js` for utilities
- **TypeScript Ready**: `tsconfig.json` configured for gradual migration
- **Migration Path**: Can gradually convert files to `.tsx`/`.ts`
- **Type Checking**: Uses TypeScript in allowJs mode for gradual adoption
- **When Creating New Files**: Use `.jsx`/`.js` or `.tsx`/`.ts` as preferred

## React Scheduler API Compatibility Fix

**RESOLVED**: The React 18 Scheduler API issue has been completely fixed by:
- Removing `@tanstack/react-virtual` dependency (which used deprecated scheduler APIs)
- Implementing custom `SimpleVirtualizer` with no scheduler dependencies  
- Maintaining 100% of original functionality
- Reducing bundle size by ~17KB (144KB → 127KB)
- All 15 tests still passing

## Important Notes for Development

- All tests must pass before commits
- Run `npm run lint` to ensure code quality
- Virtual scrolling uses custom implementation - see `src/utils/SimpleVirtualizer.jsx`
- Accessibility features must be preserved in any changes
- React 18/19 concurrent features are used - be aware of double rendering in dev mode
- **No React Scheduler API dependencies** - fully compatible with React 18/19