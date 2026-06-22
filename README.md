# Designsystem Tab SSR Demo

This project demonstrates two SSR-related bugs with the [`@digdir/designsystemet-react`](https://github.com/digdir/designsystemet) `Tabs` component in a [Next.js](https://nextjs.org) App Router setup where tab content is fetched asynchronously.

**Live demo:** https://designsystem-demo-3qla.vercel.app/

> **Note:** The live demo may be too fast to reproduce issue 1 (content flash below tabs). To observe it reliably, run the project locally with `pnpm dev` where the mock server delay is more noticeable.

## The Problems

1. **Content flash below tabs** — Tab panel content is initially rendered stacked on top of each other before being moved into the correct hidden tab. This causes content from other tabs (e.g. an image from "Timeplan") to briefly appear below the active tab's content.

2. **Wrong tab selected on load** — When the page is loaded with a non-default tab active (e.g. `?tab=timetable`), the "Om" tab is briefly marked as active before the URL param is applied. This causes a visible jump where "Om" content appears in the wrong tab panel before snapping to the correct one.

## Getting Started

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
