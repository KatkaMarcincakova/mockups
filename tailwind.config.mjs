/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        screens: {
            xxs: "340px",
            xs: "410px",
            sm: "480px",
            s: "590px",
            md: "720px",
            m: "820px",
            lg: "976px",
            l: "1200px",
            xl: "1440px",
        },
        extend: {
            colors: {
                primary: "#626937",
                secondary: "#E8E1DB",
                yellow: "#D9A928",
                coral: "#EC9577",
                brown: "#BB9763",
                text: "#42481D",
            },
        },
    },
	plugins: [],
}
