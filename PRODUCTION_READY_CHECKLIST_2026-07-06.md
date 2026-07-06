# Production Ready Checklist - 2026-07-06

## User-Provided Links Needed

### Box Images

Provide final production image URLs if the current Cafe24 URLs should be replaced.

| Usage | Current URL | Needed From User |
| --- | --- | --- |
| Legendary box home image | `https://dbase01.cafe24.com/centbox/dia%20box.png` | Final "전설의 상자" square/card image URL |
| Mystery box home image | `https://dbase01.cafe24.com/centbox/gold%20box.png` | Final "미스터리 상자" square/card image URL |
| Lucky box home image | `https://dbase01.cafe24.com/centbox/pla%20box.png` | Final "행운의 상자" square/card image URL |
| Starlight box home image | `https://dbase01.cafe24.com/centbox/rubybox.png` | Final "별빛 상자" square/card image URL |

### Box Detail Images

| Usage | Current URL | Needed From User |
| --- | --- | --- |
| Legendary detail image | `https://dbase01.cafe24.com/Centbox/diamond_detail1.png` | Final "전설의 상자" detail image URL |
| Mystery detail image | `https://dbase01.cafe24.com/Centbox/gold_detail1.png` | Final "미스터리 상자" detail image URL |
| Lucky detail image | `https://dbase01.cafe24.com/Centbox/platinum_detail1.png` | Final "행운의 상자" detail image URL |
| Starlight detail image | `https://dbase01.cafe24.com/Centbox/ruby_detail1.png` | Final "별빛 상자" detail image URL |

### Brand And Home Images

| Usage | Current URL | Needed From User |
| --- | --- | --- |
| Brand logo | `https://dbase01.cafe24.com/box_logo.png` | Final logo URL |
| Home banner 1 | `https://dbase01.cafe24.com/Centbox/banner1.png` | Final first banner URL |
| Home banner 2 | `https://dbase01.cafe24.com/Centbox/banner2.png` | Final second banner URL |

### Product Images

Product images are not hardcoded in the app. They come from Admin product registration.

Needed from user:
- One image URL per product.
- Public HTTPS URL only.
- Prefer square or near-square images for product cards.

### Font Links

Current font imports are already present in `src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
```

No new font link was added by the current Supabase/home-product change.

Needed from user only if changing typography:
- Font family name.
- CSS import URL or `.woff2` file URL.
- Required weights.
- Scope: whole app, public pages only, home only, admin excluded, etc.

## Current Code Status

### Build

`npm run build` passed on 2026-07-06.

Non-blocking warning:
- Main JS chunk is larger than Vite's default warning threshold.
- This does not block deployment.
- Code splitting can be handled later.

### Current Working Tree Changes

Main changed areas:
- Home public product display.
- Ticket type naming migration:
  - Public canonical names: `legendary`, `mystery`, `lucky`, `starlight`.
  - Existing storage keys preserved: `diamond`, `gold`, `platinum`, `ruby`.
- Admin product/home product compatibility with old and new ticket type keys.
- Supabase Edge Function product endpoints and ticket draw endpoint compatibility.

## Frontend Checklist

Before production push:
- Confirm home has no admin-only empty-state copy.
- Confirm home has no `Product_name`, `User_id`, or `Product_price` placeholders.
- Confirm box images are visible.
- Confirm box card click routes to the correct ticket detail.
- Confirm ticket detail pages show new public names:
  - `전설의 상자`
  - `미스터리 상자`
  - `행운의 상자`
  - `별빛 상자`
- Confirm bottom navigation still works.
- Confirm `/points` opens the charge modal.
- Confirm `/payment/success` returns to `/points` after successful credit.
- Confirm `/admin/login` works.
- Confirm Admin product list loads each box type.
- Confirm Admin product create, edit, delete works.
- Confirm Admin home product add/remove works.

## Backend And Supabase Checklist

### Required Tables

Already documented and previously confirmed by user:
- `charge_requests`
- `payment_events`
- `point_ledger`
- `order_mappings`
- `reconciliation_jobs`

Verification SQL:
- `supabase/verify_cafe24_order_linked_schema.sql`

Schema SQL:
- `supabase/cafe24_order_linked_schema.sql`

### Edge Function

Changed file:
- `supabase/functions/make-server-53dba95c/index.ts`

Because this file changed, Supabase Edge Function deployment is required separately from Netlify.

Deploy target:
- Project ID: `xpvuwatoahkbfkeytyig`
- Function: `make-server-53dba95c`

Must verify after deploy:
- `GET /products/diamond`
- `GET /products/legendary`
- `GET /admin/products/legendary`
- `POST /admin/products/legendary`
- `POST /user/:kakaoId/tickets/draw` with canonical box type.

### Required Supabase Secrets

Server-only:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_SECRET`
- `TOSS_SECRET_KEY`
- `KAKAO_REST_API_KEY`
- `ALLOWED_ORIGINS`

If Cafe24 payment path is used:
- `CAFE24_MALL_ID`
- `CAFE24_CLIENT_ID`
- `CAFE24_CLIENT_SECRET`
- `CAFE24_REDIRECT_URI`
- `CAFE24_ADMIN_ACCESS_TOKEN`
- `CAFE24_REFRESH_TOKEN`
- `CAFE24_ACCESS_TOKEN_EXPIRES_AT`
- `CAFE24_REFRESH_TOKEN_EXPIRES_AT`
- `CAFE24_SHOP_NO`
- `CAFE24_RETURN_BASE_URL`
- `CAFE24_CHARGE_URL_100`
- `CAFE24_CHARGE_URL_10000`
- `CAFE24_CHARGE_URL_30000`
- `CAFE24_CHARGE_URL_50000`
- `CAFE24_CHARGE_URL_100000`
- `CAFE24_CHARGE_URL_200000`
- `CAFE24_CHARGE_URL_300000`
- `CAFE24_CHARGE_URL_400000`
- `CAFE24_CHARGE_URL_500000`

## Netlify Checklist

Required frontend env vars:
- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_KAKAO_REST_API_KEY`
- `VITE_TOSS_CLIENT_KEY`

Build:
- Command: `npm run build`
- Publish directory: `dist`
- Branch: `main`

Post-deploy checks:
- Netlify build succeeds.
- Hard refresh production home URL.
- Check `/admin/login`.
- Check `/points`.
- Check `/payment/success` redirect behavior after a test payment.

## Toss Payments Test Status

### What Is Implemented

Frontend:
- `src/app/pages/Points.tsx`
  - Uses `@tosspayments/payment-sdk`.
  - Uses `VITE_TOSS_CLIENT_KEY`, with a fallback test client key.
  - Creates an internal order through `/payment/create-order`.
  - Calls Toss `requestPayment("CARD", ...)`.
  - Stores pending order in `localStorage` under `pending_toss_charge`.
  - Sends success users to `/payment/success`.

Backend:
- `supabase/functions/make-server-53dba95c/index.ts`
  - `POST /payment/create-order`
  - `POST /payment/confirm`
  - Confirms Toss payment through `https://api.tosspayments.com/v1/payments/confirm`.
  - Requires `TOSS_SECRET_KEY`.
  - Checks saved order amount against returned amount.
  - Credits points through `appendChargeLedgerAndBalance`.
  - Stores confirmed payment in KV as `payment:{orderId}`.
  - Prevents duplicate credit if the payment was already credited.

Success page:
- `src/app/pages/PaymentSuccess.tsx`
  - Detects Toss query params: `paymentKey`, `orderId`, `amount`.
  - Calls `/payment/confirm`.
  - Refreshes user data.
  - Redirects to `/points`.

Charge products:
- `src/app/constants/chargeProducts.ts`
  - Includes a `100원 / 100P` test product labeled `TEST`.

### What Is Not Fully Proven From Local Code Alone

Toss test flow is code-connected, but production readiness still requires one real test transaction after deployment:
- Netlify `VITE_TOSS_CLIENT_KEY` must be the Toss test client key.
- Supabase `TOSS_SECRET_KEY` must be the matching Toss test secret key.
- The deployed Edge Function must include the current `/payment/create-order` and `/payment/confirm` code.
- `/payment/success` and `/payment/fail` must be reachable on the deployed domain.
- A test card payment must successfully credit points once.
- Re-opening `/payment/success` or retrying confirm must not duplicate points.

Conclusion:
- Toss Payments test version is implemented in code.
- It is not "operationally complete" until a deployed test payment is run and confirmed in the user balance and ledger.

## Deployment Order

1. Confirm final image/font links or keep current links.
2. Run `npm run build`.
3. Deploy Supabase Edge Function `make-server-53dba95c`.
4. Commit and push frontend/backend code to GitHub.
5. Wait for Netlify production deploy.
6. Run smoke tests:
   - Home.
   - Ticket detail.
   - Admin login.
   - Admin product CRUD.
   - Admin home product management.
   - Toss test payment.
   - Point balance refresh.
   - Ticket purchase/draw.
7. If all pass, remove or hide the `100원 TEST` charge product before real production unless it is intentionally kept for QA.

## Decisions Needed From User

Required:
- Keep current image URLs or provide final image URLs.
- Keep current fonts or provide final font link and scope.
- Decide whether the `100원 TEST` Toss charge product remains visible in production.
- Confirm final production domain for `ALLOWED_ORIGINS`.

Recommended before live real payments:
- Replace Toss test keys with live keys only after test flow passes.
- Remove the `100원 TEST` product for public users.
- Confirm refund/cancel handling policy.
- Confirm admin recovery process for failed or pending payments.
