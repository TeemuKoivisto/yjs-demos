import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve('prosemirror-versions.js'),
      fileName: 'index',
      formats: ['es']
    },
    minify: false,
    rollupOptions: {
      input: {
        'index': path.resolve('./index.html')
      },
    }
  },
})
