# Android build 16: failure

Disk: /dev/root        72G   68G  4.6G  94% /

- Commit: 5f36a0e3955f4bb694487515a8afbc43f568624b
- Run: https://github.com/agiasotellis/ergo/actions/runs/39680096723
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-16

| Step | Result |
|---|---|
| install | success |
| typecheck | success |
| prebuild | success |
| gradle | success |
| collect | failure |
| launch test | skipped |
| release | skipped |

Files:
    total 8
    drwxr-xr-x  2 runner runner 4096 Oct 21 21:43 .
    drwxr-xr-x 14 runner runner 4096 Oct 21 21:43 ..

## Launch test
```
(skipped for test builds)
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 838 packages, and audited 839 packages in 27s

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
find: ‘android/app/build/outputs/bundle’: No such file or directory
```

## Gradle
```
977:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1038:BUILD SUCCESSFUL in 5m 40s
---
> Task :react-native-masked-view_masked-view:assembleRelease
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
> Task :react-native-worklets:bundleReleaseAar
> Task :react-native-worklets:mergeReleaseResources FROM-CACHE
> Task :react-native-worklets:verifyReleaseResources FROM-CACHE
> Task :react-native-worklets:assembleRelease

> Task :app:createBundleReleaseJsAndAssets
Android Bundled 63464ms node_modules/expo-router/entry.js (2113 modules)
Writing bundle output to: /home/runner/work/ergo/ergo/android/app/build/generated/assets/react/release/index.android.bundle
Writing sourcemap output to: /home/runner/work/ergo/ergo/android/app/build/intermediates/sourcemaps/react/release/index.android.bundle.packager.map
Copying 66 asset files
Done writing bundle output
Done writing sourcemap output

> Task :app:buildCMakeRelWithDebInfo[arm64-v8a]
> Task :app:generateReleaseResValues
> Task :app:generateReleaseResources FROM-CACHE
> Task :app:packageReleaseResources
> Task :app:mergeReleaseNativeLibs
> Task :app:processReleaseNavigationResources FROM-CACHE
> Task :app:stripReleaseDebugSymbols
> Task :app:extractReleaseNativeSymbolTables FROM-CACHE
> Task :app:parseReleaseLocalResources
> Task :app:generateReleaseRFile FROM-CACHE
> Task :app:mergeReleaseNativeDebugMetadata
> Task :app:javaPreCompileRelease FROM-CACHE
> Task :app:checkReleaseAarMetadata
> Task :app:mapReleaseSourceSetPaths
> Task :app:compileReleaseNavigationResources FROM-CACHE

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:compileReleaseJavaWithJavac
> Task :app:createReleaseCompatibleScreenManifests
> Task :app:extractDeepLinksRelease FROM-CACHE

> Task :app:processReleaseMainManifest
/home/runner/work/ergo/ergo/android/app/src/main/AndroidManifest.xml:6:3-88 Warning:
	uses-permission#android.permission.RECORD_AUDIO was tagged at AndroidManifest.xml:6 to remove other declarations but no other declaration present
/home/runner/work/ergo/ergo/android/app/src/main/AndroidManifest.xml Warning:
	provider#expo.modules.filesystem.FileSystemFileProvider@android:authorities was tagged at AndroidManifest.xml:0 to replace other declarations but no other declaration present
/home/runner/work/ergo/ergo/android/app/src/main/AndroidManifest.xml Warning:
	activity#expo.modules.imagepicker.ExpoCropImageActivity@android:exported was tagged at AndroidManifest.xml:0 to replace other declarations but no other declaration present

> Task :app:expoReleaseOverrideMaxSdkConflicts
[33m---------- Expo Max Sdk Override Plugin ----------[0m
[32m>>> No 'android:maxSdkVersion' conflicts found[0m
[33m--------------------------------------------------[0m

> Task :app:processReleaseManifest
> Task :app:processReleaseManifestForPackage
> Task :app:desugarReleaseFileDependencies FROM-CACHE
> Task :app:mergeReleaseStartupProfile
> Task :app:mergeReleaseResources
> Task :app:mergeExtDexRelease
> Task :app:mergeReleaseArtProfile
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseAssets
> Task :app:processReleaseResources
> Task :app:compressReleaseAssets
> Task :app:dexBuilderRelease
> Task :app:mergeReleaseGlobalSynthetics FROM-CACHE
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
> Task :app:generateReleaseLintVitalReportModel
> Task :app:mergeDexRelease
> Task :app:compileReleaseArtProfile
> Task :app:processReleaseJavaRes
> Task :app:mergeReleaseJavaResource
> Task :app:lintVitalAnalyzeRelease
> Task :app:optimizeReleaseResources
> Task :app:collectReleaseDependencies
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease
> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792618665965.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 5m 40s
729 actionable tasks: 472 executed, 257 from cache
Cacheable calls:   348 / 353 (98.58%)
  Hits:            348 / 348 (100.0%)
    Direct:        348 / 348 (100.0%)
    Preprocessed:    0 / 348 ( 0.00%)
  Misses:            0 / 348 ( 0.00%)
Uncacheable calls:   5 / 353 ( 1.42%)
Local storage:
  Cache size (GB): 0.1 / 3.0 ( 4.86%)
  Hits:            348 / 348 (100.0%)
  Misses:            0 / 348 ( 0.00%)
```
