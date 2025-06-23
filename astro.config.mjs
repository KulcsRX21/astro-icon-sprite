// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	// Enable Vue to support Vue components.
	integrations: [icon(), vue()],
});
