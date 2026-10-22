# ergo

**Μικρές δουλειές. Μεγάλη κοινότητα.** A neighbourhood task marketplace for Greece: post a small job, find helpers nearby on the map, agree a price in chat, and review each other afterwards.

- **App:** Expo SDK 58 · React Native · Expo Router · TypeScript
- **Backend:** Supabase (Postgres + RLS, Auth, Realtime, Storage) — project `taskmate`
- **Map:** MapLibre with free OpenStreetMap tiles from [OpenFreeMap](https://openfreemap.org) (no API key, no billing), worldwide, with pinch / double-tap zoom and two-finger rotate; labels follow the app language
- **Sign-in:** Google (native) and email + password, via Supabase Auth
- **Languages:** Greek (default) and English · light and dark mode

## Project structure

```
src/
  app/                 Screens (Expo Router: every file is a route)
    index.tsx          Entry gate: welcome → onboarding → auth → app
    welcome.tsx, onboarding.tsx, auth.tsx
    (tabs)/            Home, Map, Messages, Profile + floating tab bar
    post.tsx           New task (modal)
    task/[id].tsx      Task detail, offers, accept, complete, review
    chat/[id].tsx      Realtime chat
  components/          Logo, buttons, inputs, cards, tab bar, icons
  i18n/                Greek/English strings and language provider
  lib/                 Supabase client, API calls, auth, location, formatting
  theme/               Brand tokens and light/dark theme provider
plugins/               Expo config plugins (release signing)
supabase/migrations/   SQL changes made for the app
.github/workflows/     Android APK/AAB build
```

## Run locally

```bash
npm install
cp .env.example .env      # fill in the keys
npx expo run:android      # needs Android Studio / an emulator or a USB-connected phone
```

Google sign-in and the map use native code, so they don't work in Expo Go. Use `expo run:android` or the APK from GitHub.

Checks: `npm run typecheck` and `npm run lint`.

## Download a test APK

Every push to `main` runs **Actions → Android build**. When it finishes:

- **Releases** → `build-<n>` → download `ergo-1.0.0-build<n>.apk` and open it on your phone (allow "install unknown apps").
- The `.aab` file next to it is the one you upload to Google Play.

The result of the latest build (and the end of the log if it failed) is also written to the [`ci-status`](../../tree/ci-status) branch.

## One-time setup

### 1. GitHub secrets (Settings → Secrets and variables → Actions)

| Secret | Value |
|---|---|
| `ERGO_UPLOAD_KEYSTORE_BASE64` | Your upload keystore, base64-encoded (`base64 -w0 ergo-upload.jks`) |
| `ERGO_UPLOAD_STORE_PASSWORD` | Keystore password |
| `ERGO_UPLOAD_KEY_PASSWORD` | Same password |
| `ERGO_UPLOAD_KEY_ALIAS` | `ergo-upload` |
| `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID` | Web OAuth client ID (step 3) |
| `EXPO_PUBLIC_SUPABASE_URL` / `EXPO_PUBLIC_SUPABASE_KEY` | Optional; defaults point at the `taskmate` project |

Without the keystore secrets the APK is signed with the standard debug key. That's fine for testing, but every Google Play upload must use the same upload key. **Back up `ergo-upload.jks` and its password somewhere safe; if you lose it you can't update the app on Google Play.**

### 2. Maps

Nothing to set up. The map uses MapLibre with free OpenStreetMap vector tiles from [OpenFreeMap](https://openfreemap.org) (no API key, no billing, commercial use allowed). Keep the map's attribution button visible: OpenFreeMap requires the OpenMapTiles / OpenStreetMap credit.

### 3. Google sign-in

In the same Google Cloud project (APIs & Services → Credentials, after setting up the OAuth consent screen):

1. **Web application** OAuth client → copy the client ID and secret.
2. **Android** OAuth client → package `com.agiasotellis.ergo` + the same SHA-1 fingerprints as above.
3. Supabase → Authentication → Providers → **Google**: enable it, paste the **Web** client ID and secret, and turn on **Skip nonce check** (needed for the native Android flow).
4. The Web client ID is set in `src/lib/env.ts` (it is public). The `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID` secret can override it.

The debug key's SHA-1 is `5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25`. Add it too if you test builds signed with the debug key.

### 4. Database

In-app account deletion (required by Google Play) is the `delete-account` Edge Function in `supabase/functions/`. It verifies the caller, re-opens tasks they were helping with, deletes their photos and then their auth user; the database cascades the rest.

### 5. Email (sign-up & password reset)

Emails are sent as **ergo** from a Gmail account through Supabase custom SMTP (Supabase's built-in sender only reaches your own team, max 2/hour).

1. Gmail: turn on 2-Step Verification, then create an app password at https://myaccount.google.com/apppasswords.
2. Supabase → Authentication → Emails → SMTP Settings: sender name `ergo`, host `smtp.gmail.com`, port `465`, username = sender email = the Gmail address, password = the app password.
3. Supabase → Authentication → Emails → Templates: paste `supabase/templates/confirm_signup.html` into **Confirm sign up** (subject `{{ .Token }} · Ο κωδικός σου για το ergo`) and `supabase/templates/reset_password.html` into **Reset password** (subject `{{ .Token }} · Επαναφορά κωδικού ergo`).

Both emails carry a 6-digit code (`{{ .Token }}`) that the app asks for; there are no links to open.

## Security & privacy

- **Database:** row-level security on every table. Users only see their own messages, offers and notifications; status changes go through checked server functions; other users see only name/photo/bio of a profile; task locations are rounded to ~100 m. See `supabase/migrations/`.
- **On the phone:** the session is AES-256 encrypted, with the key in the Android Keystore (`src/lib/secureStorage.ts`). Optional fingerprint / face / PIN lock (Profile → Biometric lock).
- **Account deletion:** in-app (Profile → Delete account), as Google Play requires.
- **Cookies:** the app uses none, so no cookie banner is needed. A website for ergo would need one only if it adds analytics/ads cookies.
- **Recommended Supabase settings:** Authentication → Providers → Email: *Prevent use of leaked passwords* (paid plans), minimum password length 8; Authentication → Rate Limits: keep defaults.
- **Before Google Play:** a public privacy policy URL, the Data safety form (email, name, photos, approximate location, messages; encrypted in transit; users can delete their account), and an account-deletion URL or in-app path.

## Google Play checklist

- [ ] Upload keystore in GitHub secrets, and a backup kept offline
- [ ] Privacy policy URL (required for location, accounts and photos)
- [ ] Data safety form: location, name, email, photos, messages
- [ ] Account deletion: in-app (Profile → Delete account) plus a web link
- [ ] Store listing in Greek and English, screenshots, 512×512 icon (`ergo-brand-kit/png/ergo-icon-512.png`)
- [ ] Internal testing track first, then production
