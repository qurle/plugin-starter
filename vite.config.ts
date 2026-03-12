import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/code.ts'),
			name: 'FigmaPlugin',
			fileName: () => 'code.js',
			formats: ['iife']
		},
		outDir: 'dist/code',
		emptyOutDir: true,
		minify: 'terser',
		sourcemap: false
	},
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
