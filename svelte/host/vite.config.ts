import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
//import federation from '@originjs/vite-plugin-federation';
import { federation } from '@module-federation/vite';
import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import { sveltePlugin } from './module-federation/esbuild-svelte-plugin'; 
/**
 * federation({
            name: 'host',
            // Modules to expose
            remotes: {
                "remote": "http://localhost:4173/assets/remoteEntry.js" ,
            },
            shared: ["svelte"]
        }),
 */
/* import { federation } from '@module-federation/vite';
import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import { sveltePlugin } from './module-federation/esbuild-svelte-plugin'; */
/**
 * await federation({
			options: {
				workspaceRoot: __dirname,
				outputPath: './.svelte-kit',
				tsConfig: 'tsconfig.json',
				federationConfig: 'module-federation/federation.config.cjs',
				verbose: false,
				dev: command === 'serve',
			},
			adapter: createEsBuildAdapter({
				plugins: [sveltePlugin],
			}),
		}),
 */
export default defineConfig(async ({ command })=>({
	server: {
		fs: {
			allow: ['.', '../shared'],
		},
	},
	plugins: [
		await federation({
			options: {
				workspaceRoot: __dirname,
				outputPath: './.svelte-kit',
				tsConfig: 'tsconfig.json',
				federationConfig: 'module-federation/federation.config.cjs',
				verbose: false,
				dev: command === 'serve',
			},
			adapter: createEsBuildAdapter({
				plugins: [sveltePlugin],
			}),
		}),
		sveltekit(),
		
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
	},
}));
