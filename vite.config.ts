import { defineConfig } from 'vite'
// import { fileURLToPath } from 'url'
// import path from 'path'

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export default defineConfig({
	build: {
		lib: {
			entry: 'src/code.ts',
			name: 'plugin',
			fileName: 'code',
			formats: ['iife']
		},
		outDir: 'dist/code',
		rollupOptions: {
			output: {
				entryFileNames: 'code.js'
			}
		},
	},
	resolve: {
		alias: {
			'@': './src',
		},
	},
})
