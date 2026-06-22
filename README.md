# Designsystem Tab SSR Demo

This project demonstrates two SSR-related bugs with the [`@digdir/designsystemet-react`](https://github.com/digdir/designsystemet) `Tabs` component in a [Next.js](https://nextjs.org) App Router setup where tab content is fetched asynchronously.

## The Problems

1. **Content flash below tabs** — Tab panel content is initially rendered stacked on top of each other before being moved into the correct hidden tab. This causes content from other tabs (e.g. an image from "Timeplan") to briefly appear below the active tab's content.

2. **Wrong tab selected on load** — When the page is loaded with a non-default tab active (e.g. `?tab=timetable`), the "Om" tab is briefly marked as active before the URL param is applied. This causes a visible jump where "Om" content appears in the wrong tab panel before snapping to the correct one.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
