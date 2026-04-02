import { defineConfig } from 'astro/config'

export default defineConfig({
	outDir: './dist/ui',
	build: {
		inlineStylesheets: 'always',
	}
})
