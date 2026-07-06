# Kakao Login Fix - 2026-07-06

## Summary

2026-07-06에 카카오 로그인 callback 처리 중 Supabase Edge Function에서 503이 발생하는 문제를 확인하고 수정했다.

문제 응답:

```json
{
  "error": "Kakao login is not configured on the server."
}
```

문제 엔드포인트:

```text
POST https://xpvuwatoahkbfkeytyig.supabase.co/functions/v1/make-server-53dba95c/auth/kakao/token
```

## Root Cause

프론트엔드는 `utils/supabase/info.tsx`에서 기본 Kakao REST API key를 fallback으로 가지고 있어서 OAuth 인증 요청까지 정상 진행됐다.

하지만 Supabase Edge Function은 `KAKAO_REST_API_KEY` 환경변수만 보고 있었고, 값이 비어 있으면 `/auth/kakao/token`에서 바로 503을 반환했다.

관련 서버 코드:

```ts
const KAKAO_REST_API_KEY = Deno.env.get("KAKAO_REST_API_KEY") || "";
```

추가로, Supabase secret이 존재하지만 빈 문자열 또는 공백이면 단순 fallback 처리로는 해결되지 않을 수 있어 trim 후 fallback하도록 보강했다.

## Code Change

수정 파일:

```text
supabase/functions/make-server-53dba95c/index.ts
```

변경 내용:

```ts
const DEFAULT_KAKAO_REST_API_KEY = "f1f1ee7feb6098a7bc74cd41e7d787cc";
const KAKAO_REST_API_KEY = Deno.env.get("KAKAO_REST_API_KEY")?.trim() || DEFAULT_KAKAO_REST_API_KEY;
```

효과:

- Supabase secret `KAKAO_REST_API_KEY`가 설정되어 있으면 해당 값을 우선 사용
- secret이 없거나 빈 값이거나 공백이면 기본 Kakao REST API key 사용
- 기존 `/auth/kakao/token`의 503 조건을 피하고 Kakao token exchange 단계까지 진행 가능

## Verification

프론트 빌드 확인:

```bash
npm run build
```

결과:

```text
vite v6.3.5 building for production...
✓ 109 modules transformed.
✓ built
```

빌드 중 대용량 chunk warning은 있었지만 실패는 아니며, 이번 로그인 수정과 직접 관련 없는 기존 번들 크기 경고다.

## Deployment

처음에는 `npx supabase ...` 실행 시 npm 쪽 에러가 발생했다.

```text
npm error Class extends value undefined is not a constructor or null
```

이후 Windows에 설치된 Supabase CLI binary로 배포했다.

사용한 배포 명령:

```powershell
& "$env:USERPROFILE\bin\supabase\supabase.exe" functions deploy make-server-53dba95c --project-ref xpvuwatoahkbfkeytyig
```

배포 결과:

```text
WARNING: Docker is not running
Uploading asset (make-server-53dba95c): supabase/functions/make-server-53dba95c/index.ts
Uploading asset (make-server-53dba95c): supabase/functions/make-server-53dba95c/kv_store.ts
Deployed Functions on project xpvuwatoahkbfkeytyig: make-server-53dba95c
```

배포 대상:

```text
Supabase project ref: xpvuwatoahkbfkeytyig
Function: make-server-53dba95c
```

## Git

수정 커밋:

```text
cdde951 Fix Kakao login server config fallback
```

푸시 대상:

```text
origin/main
https://github.com/twoegg888/centbox-production.git
```

## How To Continue On Another PC

집 PC에서 새로 받을 때:

```bash
git clone https://github.com/twoegg888/centbox-production.git
cd centbox-production
npm install
```

이미 clone 되어 있으면:

```bash
git pull origin main
npm install
```

Supabase Edge Function을 다시 배포해야 할 때는 `npx supabase` 대신 설치된 binary를 사용하는 것이 현재 환경에서는 더 안정적이다.

```powershell
& "$env:USERPROFILE\bin\supabase\supabase.exe" functions deploy make-server-53dba95c --project-ref xpvuwatoahkbfkeytyig
```

## Next Check If Login Still Fails

같은 503이 계속 나오면 배포된 함수 버전 또는 Supabase secret 상태를 먼저 확인한다.

503이 사라지고 Kakao token 관련 400 에러가 나오면 다음 항목을 확인한다.

- Kakao Developers 콘솔의 Redirect URI
- 실제 접속 도메인의 `/login/callback`
- 프론트에서 전달하는 `redirectUri`

이 세 값이 정확히 일치해야 한다.
