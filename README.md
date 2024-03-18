# Personal Blog

Tried rebuilding my Outstatic blog with Next.js Partial Prerendering.

Outstatic content is only available during build time, therefore the part of the app that needs to access Outstatic content must be statically prerendered.

As of 3/17/2024, I have not found a way to do this with Outstatic.

Reasons:

- Client-side routing triggers server-side render which is not possible with Outstatic.
- `cookies()` function in the dynamic part of the page triggers re-render of the static content.

## Tech Stack

<div>
	<a href="https://nextjs.org/" >
		<img alt="Next.js" title="Next.js" src="https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" width=100 height=100>
	</a>
  <a href="https://www.outstatic.com/" >
    <img alt="Outstatic" title="Outstatic" src="https://github.com/avitorio/outstatic/blob/3b2eb5db1770b75b640a37cbafdaf4a3eeac5e16/apps/docs/public/favicon/android-chrome-512x512.png?raw=true" width=100 height=100>
  </a>
	<a href="https://www.typescriptlang.org/" >
		<img alt="Typescript" title="Typescript" src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" width=100 height=100>
	</a>
	<a href="https://tailwindcss.com/" >
		<img alt="Tailwind CSS" title="Tailwind CSS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" width=100 height=100>
	</a>
  <a href="https://www.vercel.com/" >
    <img alt="Vercel" title="Vercel" src="https://icon.icepanel.io/Technology/svg/Vercel.svg" width=100 height=100>
  </a>
</div>
