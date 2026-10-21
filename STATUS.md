# Android build 9: success

- Commit: 9e4aabaa73d09a9581169e055def1477c30753f3
- Run: https://github.com/agiasotellis/ergo/actions/runs/39582141228
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-9

| Step | Result |
|---|---|
| install | success |
| typecheck | success |
| prebuild | success |
| gradle | success |
| collect | success |
| launch test | failure |
| release | success |

Files:
    total 204036
    drwxr-xr-x  2 runner runner      4096 Oct 21 10:52 .
    drwxr-xr-x 13 runner runner      4096 Oct 21 10:52 ..
    -rw-r--r--  1 runner runner  83691353 Oct 21 10:52 ergo-1.0.0-build9.aab
    -rw-r--r--  1 runner runner 125226780 Oct 21 10:52 ergo-1.0.0-build9.apk

## Launch test
```
(no result) emulator log:
+ SDK=/usr/local/lib/android/sdk
+ SDKM=/usr/local/lib/android/sdk/cmdline-tools/latest/bin/sdkmanager
+ AVDM=/usr/local/lib/android/sdk/cmdline-tools/latest/bin/avdmanager
+ IMG='system-images;android-34;google_apis;x86_64'
+ ls -la /dev/kvm
crw-rw-rw- 1 root kvm 10, 232 Oct 21 10:52 /dev/kvm
+ yes
+ /usr/local/lib/android/sdk/cmdline-tools/latest/bin/sdkmanager --licenses
yes: standard output: Broken pipe
+ /usr/local/lib/android/sdk/cmdline-tools/latest/bin/sdkmanager --install platform-tools emulator 'system-images;android-34;google_apis;x86_64'
+ echo SDKMANAGER_FAILED
SDKMANAGER_FAILED
+ tail -40 /home/runner/work/_temp/smoke/sdkmanager.log
Warning: This version only understands SDK XML versions up to 3 but an SDK XML file of version 4 was encountered. This can happen if you use versions of Android Studio and the command-line tools that were released at different times.
Loading package information...                                                  Loading local repository...                                                     [                                       ] 3% Loading local repository...        [                                       ] 3% Fetch remote repository...         [=                                      ] 3% Fetch remote repository...         [=                                      ] 4% Fetch remote repository...         [=                                      ] 5% Fetch remote repository...         [==                                     ] 5% Fetch remote repository...         [==                                     ] 6% Fetch remote repository...         [==                                     ] 7% Fetch remote repository...         [==                                     ] 7% Computing updates...               [===                                    ] 8% Computing updates...               [===                                    ] 10% Computing updates...              [===                                    ] 10% Installing Android Emulator       [===                                    ] 10% Downloading emulator-linux_x64-164[====                                   ] 10% Downloading emulator-linux_x64-164[====                                   ] 11% Downloading emulator-linux_x64-164[====                                   ] 12% Downloading emulator-linux_x64-164[=====                                  ] 13% Downloading emulator-linux_x64-164[=====                                  ] 14% Downloading emulator-linux_x64-164[=====                                  ] 15% Downloading emulator-linux_x64-164[======                                 ] 15% Downloading emulator-linux_x64-164[======                                 ] 16% Downloading emulator-linux_x64-164[======                                 ] 17% Downloading emulator-linux_x64-164[=======                                ] 18% Downloading emulator-linux_x64-164[=======                                ] 19% Downloading emulator-linux_x64-164[=======                                ] 20% Downloading emulator-linux_x64-164[========                               ] 20% Downloading emulator-linux_x64-164[========                               ] 21% Downloading emulator-linux_x64-164[========                               ] 21% Unzipping...                      [========                               ] 21% Unzipping... emulator/            [========                               ] 21% Unzipping... emulator/resources/  [========                               ] 21% Unzipping... emulator/qsn         [========                               ] 21% Unzipping... emulator/emulator    [========                               ] 21% Unzipping... emulator/netsimd     [========                               ] 22% Unzipping... emulator/netsimd     [========                               ] 22% Unzipping... emulator/bin64/      [========                               ] 22% Unzipping... emulator/qemu/       [========                               ] 22% Unzipping... emulator/NOTICE.txt  [========                               ] 22% Unzipping... emulator/crashpad_han[========                               ] 22% Unzipping... emulator/source.prope[========                               ] 22% Unzipping... emulator/nimble_bridg[========                               ] 22% Unzipping... emulator/LICENSE     [========                               ] 22% Unzipping... emulator/lib/        [========                               ] 22% Unzipping... emulator/qemu-img    [========                               ] 22% Unzipping... emulator/include/    [========                               ] 22% Unzipping... emulator/NOTICE.csv  [========                               ] 22% Unzipping... emulator/lib64/      [========                               ] 22% Unzipping... emulator/emulator-che[========                               ] 22% Unzipping... emulator/crashreport [========                               ] 22% Unzipping... emulator/mksdcard    [========                               ] 22% Unzipping... emulator/resources/To[========                               ] 22% Unzipping... emulator/resources/de[========                               ] 22% Unzipping... emulator/resources/To[========                               ] 22% Unzipping... emulator/resources/de[========                               ] 22% Unzipping... emulator/resources/To[========                               ] 22% Unzipping... emulator/resources/ma[========                               ] 22% Unzipping... emulator/resources/de[========                               ] 22% Unzipping... emulator/resources/sk[========                               ] 22% Unzipping... emulator/resources/de[========                               ] 22% Unzipping... emulator/resources/ma[========                               ] 22% Unzipping... emulator/resources/po[========                               ] 22% Unzipping... emulator/resources/ma[=========                              ] 23% Unzipping... emulator/resources/ma[=========                              ] 23% Unzipping... emulator/resources/sk[=========                              ] 23% Unzipping... emulator/resources/ma[=========                              ] 23% Unzipping... emulator/bin64/e2fsck[=========                              ] 23% Unzipping... emulator/bin64/fsck.e[=========                              ] 23% Unzipping... emulator/bin64/tune2f[=========                              ] 23% Unzipping... emulator/bin64/resize[=========                              ] 23% Unzipping... emulator/bin64/mkfs.e[=========                              ] 23% Unzipping... emulator/qemu/linux-x[=========                              ] 24% Unzipping... emulator/qemu/linux-x[=========                              ] 25% Unzipping... emulator/qemu/linux-x[==========                             ] 25% Unzipping... emulator/qemu/linux-x[==========                             ] 25% Unzipping... emulator/lib/emulator[==========                             ] 25% Unzipping... emulator/lib/rtc_serv[==========                             ] 25% Unzipping... emulator/lib/advanced[==========                             ] 25% Unzipping... emulator/lib/cmake/  [==========                             ] 25% Unzipping... emulator/lib/emulator[==========                             ] 25% Unzipping... emulator/lib/control_[==========                             ] 25% Unzipping... emulator/lib/emulated[==========                             ] 25% Unzipping... emulator/lib/rtc_serv[==========                             ] 25% Unzipping... emulator/lib/emu-orig[==========                             ] 25% Unzipping... emulator/lib/hardware[==========                             ] 25% Unzipping... emulator/lib/pkgconfi[==========                             ] 25% Unzipping... emulator/lib/pc-bios/[==========                             ] 25% Unzipping... emulator/lib/snapshot[==========                             ] 25% Unzipping... emulator/lib/adb_serv[==========                             ] 25% Unzipping... emulator/lib/hostapd.[==========                             ] 25% Unzipping... emulator/lib/grpc_end[==========                             ] 25% Unzipping... emulator/lib/ca-bundl[==========                             ] 25% Unzipping... emulator/lib/ui_contr[==========                             ] 25% Unzipping... emulator/lib/snapshot[==========                             ] 25% Unzipping... emulator/lib/ice_conf[==========                             ] 25% Unzipping... emulator/lib/libflatb[==========                             ] 26% Unzipping... emulator/lib/libflatb[==========                             ] 26% Unzipping... emulator/lib/emulator[==========                             ] 26% Unzipping... emulator/lib/waterfal[==========                             ] 26% Unzipping... emulator/lib/emulated[==========                             ] 26% Unzipping... emulator/lib/cmake/fl[==========                             ] 26% Unzipping... emulator/lib/pkgconfi[==========                             ] 26% Unzipping... emulator/lib/pc-bios/[==========                             ] 26% Unzipping... emulator/include/flat[==========                             ] 26% Unzipping... emulator/lib64/libgli[==========                             ] 26% Unzipping... emulator/lib64/libpro[==========                             ] 26% Unzipping... emulator/lib64/qt/   [==========                             ] 26% Unzipping... emulator/lib64/liband[==========                             ] 26% Unzipping... emulator/lib64/libgfx[==========                             ] 26% Unzipping... emulator/lib64/gles_l[==========                             ] 26% Unzipping... emulator/lib64/liband[==========                             ] 26% Unzipping... emulator/lib64/vulkan[==========                             ] 26% Unzipping... emulator/lib64/gles_s[==========                             ] 26% Unzipping... emulator/lib64/libemu[==========                             ] 26% Unzipping... emulator/lib64/libpro[==========                             ] 26% Unzipping... emulator/lib64/liband[==========                             ] 26% Unzipping... emulator/lib64/libtcm[==========                             ] 26% Unzipping... emulator/lib64/libima[==========                             ] 26% Unzipping... emulator/lib64/libc++[==========                             ] 26% Unzipping... emulator/lib64/liband[==========                             ] 26% Unzipping... emulator/lib64/libabs[==========                             ] 26% Unzipping... emulator/lib64/gles_a[==========                             ] 26% Unzipping... emulator/lib64/libsha[==========                             ] 26% Unzipping... emulator/lib64/libc++[==========                             ] 26% Unzipping... emulator/lib64/qt/res[==========                             ] 26% Unzipping... emulator/lib64/qt/lib[==========                             ] 26% Unzipping... emulator/lib64/qt/tra[==========                             ] 26% Unzipping... emulator/lib64/qt/plu[==========                             ] 26% Unzipping... emulator/lib64/qt/res[==========                             ] 27% Unzipping... emulator/lib64/qt/res[==========                             ] 27% Unzipping... emulator/lib64/qt/lib[===========                            ] 28% Unzipping... emulator/lib64/qt/lib[===========                            ] 29% Unzipping... emulator/lib64/qt/lib[=============                          ] 33% Unzipping... emulator/lib64/qt/lib                                                                                Warning: An error occurred while preparing SDK package Android Emulator: No space left on device.
[=============                          ] 33% Unzipping... emulator/lib64/qt/lib+ export PATH=/usr/local/lib/android/sdk/platform-tools:/usr/local/lib/android/sdk/emulator:/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/17.0.20-1/x64/bin:/opt/hostedtoolcache/node/22.23.3/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
+ PATH=/usr/local/lib/android/sdk/platform-tools:/usr/local/lib/android/sdk/emulator:/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/17.0.20-1/x64/bin:/opt/hostedtoolcache/node/22.23.3/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
+ echo no
+ /usr/local/lib/android/sdk/cmdline-tools/latest/bin/avdmanager create avd -n ci -k 'system-images;android-34;google_apis;x86_64' --force -d pixel_6
Loading local repository...                                                     Warning: This version only understands SDK XML versions up to 3 but an SDK XML file of version 4 was encountered. This can happen if you use versions of Android Studio and the command-line tools that were released at different times.
[=========                              ] 25% Loading local repository...       [=========                              ] 25% Fetch remote repository...        [=======================================] 100% Fetch remote repository...       
Error: Package path is not valid. Valid system image paths are:
null
+ echo no
+ /usr/local/lib/android/sdk/cmdline-tools/latest/bin/avdmanager create avd -n ci -k 'system-images;android-34;google_apis;x86_64' --force
Loading local repository...                                                     Warning: This version only understands SDK XML versions up to 3 but an SDK XML file of version 4 was encountered. This can happen if you use versions of Android Studio and the command-line tools that were released at different times.
[=========                              ] 25% Loading local repository...       [=========                              ] 25% Fetch remote repository...        [=======================================] 100% Fetch remote repository...       
Error: Package path is not valid. Valid system image paths are:
null
+ adb wait-for-device
+ emulator -avd ci -no-window -gpu swiftshader_indirect -no-snapshot -noaudio -no-boot-anim -accel auto -memory 4096
* daemon not running; starting now at tcp:5037
* daemon started successfully
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 820 packages, and audited 821 packages in 22s

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
Build outputs:
android/app/build/outputs/bundle/release/app-release.aab
android/app/build/outputs/apk/release/app-release.apk
total 204032
drwxr-xr-x  2 runner runner      4096 Oct 21 10:52 .
drwxr-xr-x 13 runner runner      4096 Oct 21 10:52 ..
-rw-r--r--  1 runner runner  83691353 Oct 21 10:52 ergo-1.0.0-build9.aab
-rw-r--r--  1 runner runner 125226780 Oct 21 10:52 ergo-1.0.0-build9.apk
```

## Gradle
```
292:Note: Some input files use or override a deprecated API.
293:Note: Recompile with -Xlint:deprecation for details.
294:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-google-signin/google-signin/android/src/main/java/com/reactnativegooglesignin/RNGoogleSigninModule.java uses unchecked or unsafe operations.
295:Note: Recompile with -Xlint:unchecked for details.
323:Note: Some input files use or override a deprecated API.
324:Note: Recompile with -Xlint:deprecation for details.
325:Note: Some input files use unchecked or unsafe operations.
326:Note: Recompile with -Xlint:unchecked for details.
341:Note: Some input files use or override a deprecated API.
342:Note: Recompile with -Xlint:deprecation for details.
343:Note: Some input files use unchecked or unsafe operations.
344:Note: Recompile with -Xlint:unchecked for details.
380:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:83:17 'constructor(name: String, className: String, canOverrideExistingModule: Boolean, needsEagerInit: Boolean, hasConstants: Boolean, isCxxModule: Boolean, isTurboModule: Boolean): ReactModuleInfo' is deprecated. This constructor is deprecated and will be removed in the future. Use ReactModuleInfo(String, String, boolean, boolean, boolean, boolean)].
417:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/gamma/modals/formsheet/FormSheetContentView.kt:39:33 'fun getEventDispatcher(context: ReactContext, uiManagerType: Int): EventDispatcher?' is deprecated. UIManagerType is no longer needed.
472:Note: Some input files use or override a deprecated API.
473:Note: Recompile with -Xlint:deprecation for details.
474:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-async-storage/async-storage/android/src/javaPackage/java/com/reactnativecommunity/asyncstorage/AsyncStoragePackage.java uses unchecked or unsafe operations.
475:Note: Recompile with -Xlint:unchecked for details.
486:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-masked-view/masked-view/android/src/main/java/org/reactnative/maskedview/RNCMaskedViewPackage.java uses or overrides a deprecated API.
487:Note: Recompile with -Xlint:deprecation for details.
570:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NodesManager.kt:58:95 'fun resolveCustomDirectEventName(eventName: String): String?' is deprecated.
571:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NodesManager.kt:232:29 'fun receiveEvent(surfaceId: Int, targetTag: Int, eventName: String, canCoalesceEvent: Boolean, customCoalesceKey: Int, params: WritableMap?, category: Int): Unit' is deprecated. Use the overload with eventTimestamp parameter instead.
626:Note: Some input files use or override a deprecated API.
627:Note: Recompile with -Xlint:deprecation for details.
636:w: file:///home/runner/work/ergo/ergo/node_modules/@expo/dom-webview/android/src/main/java/expo/modules/webview/DomWebView.kt:254:18 'fun executeOnJavaScriptThread(runnable: Runnable): Unit' is deprecated. Use RuntimeContext.schedule instead.
1167:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1247:BUILD SUCCESSFUL in 42m 57s
---
> Task :react-native-maps:verifyReleaseResources
> Task :react-native-maps:assembleRelease
> Task :react-native-masked-view_masked-view:bundleReleaseAar
> Task :react-native-masked-view_masked-view:mergeReleaseResources
> Task :react-native-masked-view_masked-view:verifyReleaseResources
> Task :react-native-masked-view_masked-view:assembleRelease
> Task :react-native-reanimated:bundleReleaseAar
> Task :react-native-reanimated:mergeReleaseResources
> Task :react-native-reanimated:verifyReleaseResources
> Task :react-native-reanimated:assembleRelease
> Task :react-native-safe-area-context:bundleReleaseAar
> Task :react-native-safe-area-context:mergeReleaseResources
> Task :react-native-safe-area-context:verifyReleaseResources
> Task :react-native-safe-area-context:assembleRelease
> Task :react-native-screens:bundleReleaseAar
> Task :react-native-screens:mergeReleaseResources
> Task :react-native-screens:verifyReleaseResources
> Task :react-native-screens:assembleRelease
> Task :react-native-svg:bundleReleaseAar
> Task :react-native-svg:mergeReleaseResources
> Task :react-native-svg:verifyReleaseResources
> Task :react-native-svg:assembleRelease
> Task :react-native-worklets:bundleReleaseAar
> Task :react-native-worklets:mergeReleaseResources
> Task :react-native-worklets:verifyReleaseResources
> Task :react-native-worklets:assembleRelease
> Task :app:configureCMakeRelWithDebInfo[x86]
> Task :app:buildCMakeRelWithDebInfo[x86]
> Task :app:configureCMakeRelWithDebInfo[x86_64]
> Task :app:buildCMakeRelWithDebInfo[x86_64]
> Task :app:generateReleaseResValues
> Task :app:generateReleaseResources
> Task :app:packageReleaseResources
> Task :app:processReleaseNavigationResources
> Task :app:parseReleaseLocalResources
> Task :app:generateReleaseRFile

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:javaPreCompileRelease
> Task :app:compileReleaseJavaWithJavac
> Task :app:checkReleaseAarMetadata
> Task :app:mapReleaseSourceSetPaths
> Task :app:compileReleaseNavigationResources
> Task :app:mergeReleaseNativeLibs
> Task :app:mergeReleaseResources
> Task :app:createReleaseCompatibleScreenManifests
> Task :app:extractDeepLinksRelease

> Task :app:processReleaseMainManifest
/home/runner/work/ergo/ergo/android/app/src/main/AndroidManifest.xml:6:3-88 Warning:
	uses-permission#android.permission.RECORD_AUDIO was tagged at AndroidManifest.xml:6 to remove other declarations but no other declaration present
/home/runner/work/ergo/ergo/android/app/src/main/AndroidManifest.xml Warning:
	provider#expo.modules.filesystem.FileSystemFileProvider@android:authorities was tagged at AndroidManifest.xml:0 to replace other declarations but no other declaration present
/home/runner/work/ergo/ergo/android/app/src/main/AndroidManifest.xml Warning:
	activity#expo.modules.imagepicker.ExpoCropImageActivity@android:exported was tagged at AndroidManifest.xml:0 to replace other declarations but no other declaration present

> Task :app:stripReleaseDebugSymbols

> Task :app:expoReleaseOverrideMaxSdkConflicts
[33m---------- Expo Max Sdk Override Plugin ----------[0m
[32m>>> No 'android:maxSdkVersion' conflicts found[0m
[33m--------------------------------------------------[0m

> Task :app:processReleaseManifest
> Task :app:processReleaseManifestForPackage
> Task :app:extractReleaseNativeSymbolTables
> Task :app:processReleaseResources
> Task :app:dexBuilderRelease
> Task :app:desugarReleaseFileDependencies
> Task :app:mergeReleaseStartupProfile
> Task :app:mergeReleaseNativeDebugMetadata
> Task :app:mergeExtDexRelease
> Task :app:mergeReleaseArtProfile
> Task :app:mergeReleaseGlobalSynthetics
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseAssets
> Task :app:mergeDexRelease
> Task :app:compressReleaseAssets
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
> Task :app:generateReleaseLintVitalReportModel
> Task :app:compileReleaseArtProfile
> Task :app:processReleaseJavaRes
> Task :app:mergeReleaseJavaResource
> Task :app:optimizeReleaseResources
> Task :app:collectReleaseDependencies
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease
> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :app:processApplicationManifestReleaseForBundle
> Task :app:bundleReleaseResources
> Task :app:buildReleasePreBundle
> Task :app:configureReleaseDependencies
> Task :app:parseReleaseIntegrityConfig
> Task :app:lintVitalAnalyzeRelease
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
> Task :app:packageReleaseBundle
> Task :app:signReleaseBundle
> Task :app:produceReleaseBundleIdeListingFile
> Task :app:createReleaseBundleListingFileRedirect
> Task :app:bundleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792577376597.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 42m 57s
770 actionable tasks: 770 executed
```
