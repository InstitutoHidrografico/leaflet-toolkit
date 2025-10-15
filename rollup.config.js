import typescript from "@rollup/plugin-typescript"
import postcss from "rollup-plugin-postcss"
import url from '@rollup/plugin-url'

export default {
	input: 'src/index.ts',
	output: {
		file: 'dist/index.js',
		format: 'es',
		sourcemap: true
	},
	external: ['react', 'leaflet', 'tslib', /^react\/.*/, /^leaflet\/.*/],
	plugins: [
		url({
			include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif', '**/*.webp'],
			limit: Infinity,
      		emitFiles: false
		}),
		postcss({
			extract: false,
			inject: true,
			minimize: true
		}),
		typescript({
			tsconfig: './tsconfig.json'
		})
	]
}