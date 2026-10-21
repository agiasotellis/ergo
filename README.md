# ergo

**Μικρές δουλειές. Μεγάλη κοινότητα.** A neighbourhood task marketplace for Greece: post a small job, find helpers nearby on the map, agree a price in chat, and review each other afterwards.

- **App:** Expo SDK 58 · React Native · Expo Router · TypeScript
- **Backend:** Supabase (Postgres + RLS, Auth, Realtime, Storage) — project `taskmate`
- **Map:** MapLibre with free OpenStreetMap tiles from [OpenFreeMap](https://openfreemap.org) (no API key, no billing), limited to Greece, with pinch / double-tap zoom and two-finger rotate; labels follow the app language
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
4. Add the Web client ID as the `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID` secret.

The debug key's SHA-1 is `5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25`. Add it too if you test builds signed with the debug key.

### 4. Database

`supabase/migrations/20261021000200_delete_my_account.sql` adds in-app account deletion, which Google Play requires. Run it in the Supabase SQL editor if it hasn't been applied yet.

## Google Play checklist

- [ ] Upload keystore in GitHub secrets, and a backup kept offline
- [ ] Privacy policy URL (required for location, accounts and photos)
- [ ] Data safety form: location, name, email, photos, messages
- [ ] Account deletion: in-app (Profile → Delete account) plus a web link
- [ ] Store listing in Greek and English, screenshots, 512×512 icon (`ergo-brand-kit/png/ergo-icon-512.png`)
- [ ] Internal testing track first, then production
