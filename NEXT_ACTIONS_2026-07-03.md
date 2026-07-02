# Centbox Production Next Actions - 2026-07-03

## Current State

- Repository: `https://github.com/twoegg888/centbox-production.git`
- Branch: `main`
- Latest local commit: `c6cb5a9 Remove admin product weight summary`
- Working tree was clean when this file was written.
- Netlify site currently used for stable access:
  - `https://bright-crepe-68ab1d.netlify.app/`
- Supabase project id:
  - `xpvuwatoahkbfkeytyig`
- Edge Function:
  - `make-server-53dba95c`

## Deployment Notes

Frontend deploy:

```bash
npm run build
git status --short
git add .
git commit -m "..."
git push
```

Netlify should auto-build from GitHub using:

```text
Build command: npm run build
Publish directory: dist
Branch: main
```

Supabase Edge Function deploy is separate from Netlify. If `supabase/functions/make-server-53dba95c/index.ts` or `kv_store.ts` changes, redeploy both files in Supabase Edge Functions.

Required Edge Function files:

```text
supabase/functions/make-server-53dba95c/index.ts
supabase/functions/make-server-53dba95c/kv_store.ts
```

## Secrets And Origins

Admin password is Supabase Edge Function secret:

```text
ADMIN_SECRET
```

It is not a Netlify env var.

`ALLOWED_ORIGINS` should include the stable Netlify domain and local dev:

```text
https://centbox.netlify.app,https://bright-crepe-68ab1d.netlify.app,http://localhost:5173
```

Temporary deploy URLs can be added if testing a deploy-specific URL, but prefer the stable URL:

```text
https://bright-crepe-68ab1d.netlify.app/admin/login
```

Frontend Netlify env vars:

```text
VITE_SUPABASE_PROJECT_ID
VITE_SUPABASE_ANON_KEY
VITE_KAKAO_REST_API_KEY
VITE_TOSS_CLIENT_KEY
```

Server-only Supabase secrets:

```text
ADMIN_SECRET
TOSS_SECRET_KEY
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
ALLOWED_ORIGINS
KAKAO_REST_API_KEY
```

## What Was Done Today

- Supabase required tables were confirmed by user:
  - `charge_requests`
  - `payment_events`
  - `point_ledger`
  - `order_mappings`
  - `reconciliation_jobs`
- Toss Payments test flow was connected in frontend/server code.
- `ADMIN_SECRET` based admin login is active.
- GitHub repo was created and initial production app was pushed.
- Netlify auto-publish from GitHub was set up or prepared.
- Admin product management "현재 가중치 설정" summary box was removed.
- Build passed after the admin UI change.

## Immediate Priority Tomorrow

### 1. Fix Home Page Public UI

Live URL inspected:

```text
https://bright-crepe-68ab1d.netlify.app/
```

Visible production issues:

- Public home shows admin-oriented empty state:
  - "관리자 페이지에서 홈 메인 상품을 등록하면 여기에 자동으로 표시됩니다."
- Box cards under "상자를 열어보세요!" show empty white image areas with only shadows.
- "가장 많이 교환한 제품" still shows Figma placeholders:
  - `Product_name`
  - `User_id`
  - `Product_price`
- Frontend concept names and backend legacy box names are mixed.

Main file:

```text
src/app/pages/Home.tsx
```

Related Figma import:

```text
src/figma-make/imports/Home-1/index.tsx
```

Recommended implementation:

- Create a home-facing box config, keeping backend keys stable:

```ts
const HOME_BOX_CONFIG = {
  diamond: {
    displayName: "전설의 상자",
    legacyName: "다이아 박스",
  },
  gold: {
    displayName: "미스터리 상자",
    legacyName: "골드 박스",
  },
  platinum: {
    displayName: "행운의 상자",
    legacyName: "플래티넘 박스",
  },
  ruby: {
    displayName: "별빛 상자",
    legacyName: "루비 박스",
  },
};
```

- Do not rename persisted backend keys like `diamond`, `gold`, `platinum`, `ruby`.
- Hide public dynamic sections when data is empty, or use user-facing copy only.
- Remove all Figma placeholder product cards unless real data is available.
- Add real/fallback box images so home cards are never blank.

### 2. Admin Product Management Optimization

Current issue:

- Product management fetches and renders the full selected product list at once.
- With many products, the page can become slow or error-prone.
- All product images load together.

Main file:

```text
src/app/pages/Admin.tsx
```

Recommended first pass, frontend-only:

- Add search input.
- Add page size selector: 20 / 50 / 100.
- Render only current page.
- Add `loading="lazy"` to product images.
- Add active/inactive filter.
- Show count summary:
  - total
  - filtered
  - current page

Recommended admin naming:

```text
전설의 상자
기존 내부 타입: 다이아 박스 / diamond
```

This prevents admin confusion while keeping old backend data safe.

### 3. Longer-Term Backend Product Migration

Current backend storage:

```text
products:diamond
products:gold
products:platinum
products:ruby
```

Each key stores a full JSON array. This is workable for now but not ideal for large product counts.

Long-term recommendation:

- Create Supabase `products` table.
- Store each product as a row.
- Query with `ticket_type`, `limit`, `offset`, `search`, `is_active`.
- Keep old KV endpoints until migration is verified.

Do not do this before the home UI and admin frontend optimization unless product volume makes it urgent.

## Files To Check First Tomorrow

```text
src/app/pages/Home.tsx
src/app/pages/Admin.tsx
src/app/components/HomeProductsTab.tsx
src/app/utils/ticketDetailMeta.ts
src/app/types/index.ts
supabase/functions/make-server-53dba95c/index.ts
```

## Verification Checklist

Before pushing:

```bash
npm run build
```

After pushing:

- Netlify deploy succeeds.
- Hard refresh stable URL:
  - `https://bright-crepe-68ab1d.netlify.app/`
- Check:
  - Home has no admin-only text.
  - Home has no `Product_name` placeholder.
  - Box card images are visible.
  - Bottom nav still works.
  - `/admin/login` works with current `ADMIN_SECRET`.
  - Admin product list does not freeze with many items.

## Useful Local Screenshot Files

Screenshots captured during review:

```text
C:\Users\daehy\Desktop\centbox-home.png
C:\Users\daehy\Desktop\centbox-home-full.png
```

These are not committed to the repo.
