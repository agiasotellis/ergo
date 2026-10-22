# Android build 21: cancelled

Disk: /dev/root        72G   53G   20G  74% /

- Commit: 4890ef8c25f489e5eeaa982509b0d0b3445bd585
- Run: https://github.com/agiasotellis/ergo/actions/runs/39746725330
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-21

| Step | Result |
|---|---|
| install | success |
| typecheck | success |
| prebuild | success |
| gradle | success |
| collect | success |
| launch test | cancelled |
| release | success |

Files:
    total 102952
    drwxr-xr-x  2 runner runner      4096 Oct 22 08:26 .
    drwxr-xr-x 14 runner runner      4096 Oct 22 08:26 ..
    -rw-r--r--  1 runner runner 105410631 Oct 22 08:26 ergo-1.0.0-build21.apk

## Launch test
```
(skipped for test builds)
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 838 packages, and audited 839 packages in 22s

180 packages are looking for funding
  run `npm fund` for details

24 vulnerabilities (3 moderate, 21 high)

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
Build outputs:
android/app/build/outputs/apk/release/app-release.apk
total 102952
drwxr-xr-x  2 runner runner      4096 Oct 22 08:26 .
drwxr-xr-x 14 runner runner      4096 Oct 22 08:26 ..
-rw-r--r--  1 runner runner 105410631 Oct 22 08:26 ergo-1.0.0-build21.apk
```

## Gradle
```
606:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1038:BUILD SUCCESSFUL in 6m 12s
---
> Task :react-native-google-signin_google-signin:writeReleaseLintModelMetadata
> Task :react-native-reanimated:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-safe-area-context:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-masked-view_masked-view:writeReleaseLintModelMetadata
> Task :react-native-screens:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-safe-area-context:writeReleaseLintModelMetadata
> Task :react-native-svg:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-screens:writeReleaseLintModelMetadata
> Task :react-native-worklets:lintVitalAnalyzeRelease SKIPPED
> Task :expo:generateReleaseLintVitalModel
> Task :expo-constants:generateReleaseLintVitalModel
> Task :expo-dom-webview:generateReleaseLintVitalModel
> Task :expo-log-box:generateReleaseLintVitalModel
> Task :expo-modules-core:generateReleaseLintVitalModel
> Task :maplibre_maplibre-react-native:generateReleaseLintVitalModel
> Task :react-native-async-storage_async-storage:generateReleaseLintVitalModel
> Task :react-native-gesture-handler:generateReleaseLintVitalModel
> Task :react-native-google-signin_google-signin:generateReleaseLintVitalModel
> Task :react-native-masked-view_masked-view:generateReleaseLintVitalModel
> Task :react-native-reanimated:generateReleaseLintVitalModel
> Task :react-native-safe-area-context:generateReleaseLintVitalModel
> Task :react-native-screens:generateReleaseLintVitalModel
> Task :react-native-svg:generateReleaseLintVitalModel
> Task :react-native-worklets:generateReleaseLintVitalModel
> Task :app:processReleaseJavaRes
> Task :app:mergeReleaseJavaResource
> Task :app:optimizeReleaseResources
> Task :app:collectReleaseDependencies
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease
> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :expo:bundleReleaseAar
> Task :expo:mergeReleaseResources FROM-CACHE
> Task :expo:verifyReleaseResources FROM-CACHE
> Task :expo:assembleRelease
> Task :expo-constants:bundleReleaseAar
> Task :expo-constants:mergeReleaseResources FROM-CACHE
> Task :expo-constants:verifyReleaseResources FROM-CACHE
> Task :expo-constants:assembleRelease
> Task :expo-dom-webview:bundleReleaseAar
> Task :expo-dom-webview:mergeReleaseResources FROM-CACHE
> Task :expo-dom-webview:verifyReleaseResources FROM-CACHE
> Task :expo-dom-webview:assembleRelease
> Task :expo-log-box:bundleReleaseAar
> Task :expo-log-box:mergeReleaseResources FROM-CACHE
> Task :expo-log-box:verifyReleaseResources FROM-CACHE
> Task :expo-log-box:assembleRelease
> Task :expo-modules-core:bundleReleaseAar
> Task :expo-modules-core:mergeReleaseResources FROM-CACHE
> Task :expo-modules-core:verifyReleaseResources FROM-CACHE
> Task :expo-modules-core:assembleRelease
> Task :maplibre_maplibre-react-native:bundleReleaseAar
> Task :maplibre_maplibre-react-native:mergeReleaseResources FROM-CACHE
> Task :maplibre_maplibre-react-native:verifyReleaseResources FROM-CACHE
> Task :maplibre_maplibre-react-native:assembleRelease
> Task :react-native-async-storage_async-storage:bundleReleaseAar
> Task :react-native-async-storage_async-storage:mergeReleaseResources FROM-CACHE
> Task :react-native-async-storage_async-storage:verifyReleaseResources FROM-CACHE
> Task :react-native-async-storage_async-storage:assembleRelease
> Task :react-native-gesture-handler:bundleReleaseAar
> Task :react-native-gesture-handler:mergeReleaseResources FROM-CACHE
> Task :react-native-gesture-handler:verifyReleaseResources FROM-CACHE
> Task :react-native-gesture-handler:assembleRelease
> Task :react-native-google-signin_google-signin:bundleReleaseAar
> Task :react-native-google-signin_google-signin:mergeReleaseResources FROM-CACHE
> Task :react-native-google-signin_google-signin:verifyReleaseResources FROM-CACHE
> Task :react-native-google-signin_google-signin:assembleRelease
> Task :react-native-masked-view_masked-view:bundleReleaseAar
> Task :react-native-masked-view_masked-view:mergeReleaseResources FROM-CACHE
> Task :react-native-masked-view_masked-view:verifyReleaseResources FROM-CACHE
> Task :react-native-masked-view_masked-view:assembleRelease
> Task :app:lintVitalAnalyzeRelease
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :react-native-reanimated:bundleReleaseAar
> Task :react-native-reanimated:mergeReleaseResources FROM-CACHE
> Task :react-native-reanimated:verifyReleaseResources FROM-CACHE
> Task :react-native-reanimated:assembleRelease
> Task :react-native-safe-area-context:bundleReleaseAar
> Task :react-native-safe-area-context:mergeReleaseResources FROM-CACHE
> Task :react-native-safe-area-context:verifyReleaseResources FROM-CACHE
> Task :react-native-safe-area-context:assembleRelease
> Task :react-native-screens:bundleReleaseAar
> Task :react-native-screens:mergeReleaseResources FROM-CACHE
> Task :react-native-screens:verifyReleaseResources FROM-CACHE
> Task :react-native-screens:assembleRelease
> Task :react-native-svg:bundleReleaseAar
> Task :react-native-svg:mergeReleaseResources FROM-CACHE
> Task :react-native-svg:verifyReleaseResources FROM-CACHE
> Task :react-native-svg:assembleRelease
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
> Task :react-native-worklets:bundleReleaseAar
> Task :react-native-worklets:mergeReleaseResources FROM-CACHE
> Task :react-native-worklets:verifyReleaseResources FROM-CACHE
> Task :react-native-worklets:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792657241718.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 6m 12s
741 actionable tasks: 478 executed, 263 from cache
Cacheable calls:   696 / 706 (98.58%)
  Hits:            696 / 696 (100.0%)
    Direct:        696 / 696 (100.0%)
    Preprocessed:    0 / 696 ( 0.00%)
  Misses:            0 / 696 ( 0.00%)
Uncacheable calls:  10 / 706 ( 1.42%)
Local storage:
  Cache size (GB): 0.3 / 3.0 ( 9.64%)
  Hits:            696 / 696 (100.0%)
  Misses:            0 / 696 ( 0.00%)
```
