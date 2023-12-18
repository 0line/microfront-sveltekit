import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
//import federation from '@originjs/vite-plugin-federation';
import { federation } from '@module-federation/vite';
 import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import { sveltePlugin } from './module-federation/esbuild-svelte-plugin'; 
const dep = require('./package.json').dependencies;
/* 
federation(
			{
				options: {
					workspaceRoot: __dirname,
					outputPath: './.svelte-kit/output/client',
					tsConfig: 'tsconfig.json',
					federationConfig: 'module-federation/federation.config.cjs',
					verbose: false,
					dev: command === 'serve',
				},
				adapter: createEsBuildAdapter({
					plugins: [sveltePlugin],
				}),
			}
		)
		server: {
		fs: {
			allow: ['.', './shared'],
		},
	}, */
export default defineConfig(async ({ command }) =>({
	server: {
		fs: {
			allow: ['.', './shared'],
		},
	},
	plugins: [
		sveltekit(),	
		federation(
			{
				options: {
					workspaceRoot: __dirname,
					outputPath: './.svelte-kit/output/client',
					tsConfig: 'tsconfig.json',
					federationConfig: 'module-federation/federation.config.cjs',
					verbose: false,
					dev: command === 'serve',
				},
				adapter: createEsBuildAdapter({
					plugins: [sveltePlugin],
				}),
			}
		)
	],
}));
