import { skeleton } from '@skeletonlabs/tw-plugin';
import type { Config } from 'tailwindcss';
import { join } from 'path';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		skeleton({
			themes: { preset: [ 'seafoam' ] }
		})
	]
} satisfies Config;;