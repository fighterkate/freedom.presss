# README

- Live preview link: [https://freedom-press-sample.netlify.app/](https://freedom-press-sample.netlify.app/)
- Presentation on the code detail

## Why Radix UI, tailwind and Next.js

- Html code with tailwind looks messy at first sight yet it is very powerful
  - customize our own theme using directives and [tailwind.config.js](./tailwind.config.js)
  - generate code on demand, not used dead code are removed in compiled css code
  - organize code systematically
    - by reusable [utilities](./styles/utilities)
    - by [ui components](./components/ui/seperator.tsx)
    - by grouping tailwind utility classnames via [tailwind merge](./components/ui/cn.ts)
- Radix UI is a great React cornerstone component system
  - we can use it compose other components based upon it
  - Headless, we can apply theming on it using our design system
  - copycats code snippets by [`shadcn/ui`](https://github.com/shadcn-ui/ui)
- Why `Next.js`: Server side rendering, uses React
  - Three of our websites are customer facing that requires good loading speed and SEO
  - working with React components, and component systems means isolation on need, which could boost maintainability
