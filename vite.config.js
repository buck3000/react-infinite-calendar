import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,js}',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        implementation: {
          compileString: (args) => {
            return { css: args.data };
          },
        },
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.jsx'),
      name: 'ReactInfiniteCalendar',
      formats: ['es', 'cjs'],
      fileName: (fmt) => `react-infinite-calendar.${fmt}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'prop-types'],
      output: [
        {
          format: 'es',
          exports: 'named',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'prop-types': 'PropTypes'
          }
        },
        {
          format: 'cjs',
          exports: 'named',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'prop-types': 'PropTypes'
          }
        }
      ],
    },
    target: 'es2020',
    sourcemap: true,
  },
});
