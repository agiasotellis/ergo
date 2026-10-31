# Android build 51: cancelled

Disk: /dev/root       145G   56G   89G  39% /

- Commit: 10a5b460e831bb1762679bc24a3e70ac5b8c08fc
- Run: https://github.com/agiasotellis/ergo/actions/runs/41243350695
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-51

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
    total 105028
    drwxr-xr-x  2 runner runner      4096 Oct 31 21:27 .
    drwxr-xr-x 15 runner runner      4096 Oct 31 21:27 ..
    -rw-r--r--  1 runner runner 107539820 Oct 31 21:27 ergo-1.0.0-build51.apk

## Launch test
```
(skipped for test builds)
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 845 packages, and audited 846 packages in 13s

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
lengths: store_pw=28 alias=11 key_pw=28
	 SHA1: 93:3A:08:AD:39:71:83:9D:66:7F:79:10:D7:54:0A:FE:26:40:2D:C4
	 SHA256: 00:38:A8:32:2C:3B:F4:D1:A2:0E:1F:EC:8C:D4:56:3A:9D:88:0B:5E:5A:D7:16:CF:D4:17:75:9D:CC:EE:7C:AE
KEYSTORE_OK
Build outputs:
android/app/build/outputs/apk/release/app-release.apk
total 105028
drwxr-xr-x  2 runner runner      4096 Oct 31 21:27 .
drwxr-xr-x 15 runner runner      4096 Oct 31 21:27 ..
-rw-r--r--  1 runner runner 107539820 Oct 31 21:27 ergo-1.0.0-build51.apk
```

## Gradle
```
1067:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1093:BUILD SUCCESSFUL in 2m 39s
---
> Task :react-native-gesture-handler:bundleLibCompileToJarRelease
> Task :react-native-gesture-handler:bundleLibRuntimeToJarRelease
> Task :react-native-gesture-handler:processReleaseJavaRes
> Task :react-native-gesture-handler:createFullJarRelease
> Task :react-native-gesture-handler:generateReleaseLintModel
> Task :react-native-gesture-handler:checkReleaseAarMetadata
> Task :react-native-gesture-handler:extractDeepLinksForAarRelease FROM-CACHE
> Task :react-native-gesture-handler:extractReleaseAnnotations FROM-CACHE
> Task :react-native-gesture-handler:mergeReleaseGeneratedProguardFiles
> Task :react-native-gesture-handler:mergeReleaseConsumerProguardFiles
> Task :react-native-gesture-handler:mergeReleaseJavaResource
> Task :react-native-gesture-handler:syncReleaseLibJars FROM-CACHE
> Task :react-native-gesture-handler:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-gesture-handler:writeReleaseLintModelMetadata
> Task :react-native-gesture-handler:stripReleaseDebugSymbols
> Task :react-native-gesture-handler:generateReleaseLintVitalModel
> Task :react-native-gesture-handler:copyReleaseJniLibsProjectAndLocalJars
> Task :react-native-gesture-handler:mergeReleaseResources FROM-CACHE
> Task :react-native-gesture-handler:bundleReleaseLocalLintAar
> Task :react-native-gesture-handler:bundleReleaseAar
> Task :react-native-gesture-handler:verifyReleaseResources FROM-CACHE
> Task :react-native-gesture-handler:assembleRelease
> Task :react-native-reanimated:bundleReleaseAar
> Task :react-native-reanimated:mergeReleaseResources FROM-CACHE
> Task :react-native-reanimated:verifyReleaseResources FROM-CACHE
> Task :react-native-reanimated:assembleRelease
> Task :app:configureCMakeRelWithDebInfo[arm64-v8a]
> Task :app:buildCMakeRelWithDebInfo[arm64-v8a]
> Task :app:configureCMakeRelWithDebInfo[x86_64]
> Task :app:buildCMakeRelWithDebInfo[x86_64]
> Task :app:generateReleaseResValues
> Task :app:generateReleaseResources FROM-CACHE
> Task :app:processReleaseGoogleServices FROM-CACHE
> Task :app:packageReleaseResources
> Task :app:mergeReleaseNativeLibs
> Task :app:processReleaseNavigationResources FROM-CACHE
> Task :app:javaPreCompileRelease FROM-CACHE
> Task :app:mapReleaseSourceSetPaths
> Task :app:checkReleaseAarMetadata
> Task :app:compileReleaseNavigationResources FROM-CACHE
> Task :app:parseReleaseLocalResources
> Task :app:stripReleaseDebugSymbols
> Task :app:extractReleaseNativeSymbolTables FROM-CACHE
> Task :app:generateReleaseRFile FROM-CACHE
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
> Task :app:mergeReleaseNativeDebugMetadata
> Task :app:mergeExtDexRelease FROM-CACHE
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseArtProfile
> Task :app:mergeReleaseAssets
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
> Task :app:collectReleaseDependencies
> Task :app:compressReleaseAssets
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease
> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :app:processReleaseResources
> Task :app:optimizeReleaseResources

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:compileReleaseJavaWithJavac
> Task :app:dexBuilderRelease
> Task :app:mergeReleaseGlobalSynthetics FROM-CACHE
> Task :app:generateReleaseLintVitalReportModel
> Task :app:processReleaseJavaRes
> Task :app:mergeReleaseJavaResource
> Task :app:lintVitalAnalyzeRelease
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :app:mergeDexRelease
> Task :app:compileReleaseArtProfile
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1793481901217.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 2m 39s
784 actionable tasks: 503 executed, 281 from cache
Cacheable calls:   724 / 736 (98.37%)
  Hits:            724 / 724 (100.0%)
    Direct:        724 / 724 (100.0%)
    Preprocessed:    0 / 724 ( 0.00%)
  Misses:            0 / 724 ( 0.00%)
Uncacheable calls:  12 / 736 ( 1.63%)
Local storage:
  Cache size (GB): 0.3 / 3.0 ( 9.74%)
  Hits:            724 / 724 (100.0%)
  Misses:            0 / 724 ( 0.00%)
```
