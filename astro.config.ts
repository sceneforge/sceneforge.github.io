import { defineConfig } from 'astro/config';
import starlight from "@astrojs/starlight";
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
	output: 'static',
	site: "https://sceneforge.org",
	integrations: [
		starlight({
			plugins: [
				starlightImageZoom()
			],
			title: "Scene Forge",
			description: "Unleash your creativity with our cutting-edge Progressive Web Application that empowers you to craft, visualise, and manipulate stunning 3D scenes.",
			logo: {
				light: "@assets/site-header-logo-light.svg",
				dark: "@assets/site-header-logo-dark.svg",
				replacesTitle: true,
			},
			social: {
				github: "https://github.com/sceneforge",
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
			},
			sidebar: [
				{
					label: "Home",
					link: "/"
				},
				{
					label: "About",
					link: "/about",
				},
			],
			customCss: [
				"./src/styles/custom.css",
			],
		}),
	],
	prefetch: {
		prefetchAll: true,
	},
	vite: {
		css: {
			transformer: "lightningcss",
		},
	},
});
