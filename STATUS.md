# Android build 4: cancelled

- Commit: bd493655f71217d1e56732b328d7772a0b2449dd
- Run: https://github.com/agiasotellis/ergo/actions/runs/39555560872
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-4

| Step | Result |
|---|---|
| install | success |
| typecheck | success |
| prebuild | success |
| gradle | cancelled |
| collect | skipped |
| artifact | skipped |
| release | skipped |

Files:

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 820 packages, and audited 821 packages in 28s

174 packages are looking for funding
  run `npm fund` for details

29 vulnerabilities (8 moderate, 21 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
- Creating native directory (./android)
✔ Created native directory
- Updating package.json
✔ Updated package.json | no changes
- Running prebuild
✔ Finished prebuild
```

## Gradle
```
---
To honour the JVM settings for this build a single-use Daemon process will be forked. For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/gradle_daemon.html#sec:disabling_the_daemon in the Gradle documentation.
Daemon will be stopped at the end of the build 
```
