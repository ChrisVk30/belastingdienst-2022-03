/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [tsconfigPaths(), svelte()],

	// @sveltestack/svelte-query needs these: https://github.com/vitejs/vite/issues/6007
	optimizeDeps: {
		exclude: ['@sveltestack/svelte-query'],
		include: ['broadcast-channel'],
	},

	test: {
		globals: true,
		environment: 'jsdom',
	},
});
