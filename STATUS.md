# Android build 47: failure

Disk: /dev/root       145G   46G   99G  32% /

- Commit: c4737603fc6063f62364d5e01483a0df1ffb2aa1
- Run: https://github.com/agiasotellis/ergo/actions/runs/41240752549
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-47

| Step | Result |
|---|---|
| install | success |
| typecheck | success |
| prebuild | success |
| gradle | skipped |
| collect | skipped |
| launch test | skipped |
| release | skipped |

Files:

## Launch test
```
(skipped for test builds)
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 845 packages, and audited 846 packages in 47s

180 packages are looking for funding
  run `npm fund` for details

31 vulnerabilities (1 low, 27 moderate, 3 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
- Creating native directory (./android)
✔ Created native directory
- Updating package.json
✔ Updated package.json | no changes
- Running prebuild
✔ Finished prebuild
keystore sha256: 119e896ee5b2afd0  size: 4322
lengths: store_pw=28 alias=12 key_pw=28
KEYSTORE_FAILED: Keystore type: PKCS12
Keystore provider: SUN
```

## Gradle
```
Gradle did not run.
```
