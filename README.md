# nethmishoues

Next.js coming-soon landing for **Nethmi Shoes** — powered by Clever Project.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Google Fonts: Fraunces (display) + JetBrains Mono (labels)

## Get started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Customize

- **Launch date** — edit `LAUNCH` at the top of `app/page.tsx`.
- **Brand palette** — `ink`, `cream`, `oxblood`, `muted` are defined in `tailwind.config.ts`.
- **Copy** — headline and subtitle live in `app/page.tsx`.
- **Email capture** — currently shows a local success state. Wire `submit()` in `app/page.tsx` to your backend / Mailchimp / ConvertKit / Resend endpoint.

## Deploy

Push to GitHub and deploy on Vercel:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/thelllmike/nethmishoues.git
git push -u origin main
```
