# Android build 3: cancelled

- Commit: 596ffd684ca3e1b5d1a8899f6bf0c15d76992dbc
- Run: https://github.com/agiasotellis/ergo/actions/runs/39551631428
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-3

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

added 820 packages, and audited 821 packages in 32s

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
382:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:83:17 'constructor(name: String, className: String, canOverrideExistingModule: Boolean, needsEagerInit: Boolean, hasConstants: Boolean, isCxxModule: Boolean, isTurboModule: Boolean): ReactModuleInfo' is deprecated. This constructor is deprecated and will be removed in the future. Use ReactModuleInfo(String, String, boolean, boolean, boolean, boolean)].
419:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/gamma/modals/formsheet/FormSheetContentView.kt:39:33 'fun getEventDispatcher(context: ReactContext, uiManagerType: Int): EventDispatcher?' is deprecated. UIManagerType is no longer needed.
475:Note: Some input files use or override a deprecated API.
476:Note: Recompile with -Xlint:deprecation for details.
477:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-async-storage/async-storage/android/src/javaPackage/java/com/reactnativecommunity/asyncstorage/AsyncStoragePackage.java uses unchecked or unsafe operations.
478:Note: Recompile with -Xlint:unchecked for details.
490:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-masked-view/masked-view/android/src/main/java/org/reactnative/maskedview/RNCMaskedViewPackage.java uses or overrides a deprecated API.
491:Note: Recompile with -Xlint:deprecation for details.
577:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NodesManager.kt:58:95 'fun resolveCustomDirectEventName(eventName: String): String?' is deprecated.
578:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NodesManager.kt:232:29 'fun receiveEvent(surfaceId: Int, targetTag: Int, eventName: String, canCoalesceEvent: Boolean, customCoalesceKey: Int, params: WritableMap?, category: Int): Unit' is deprecated. Use the overload with eventTimestamp parameter instead.
635:Note: Some input files use or override a deprecated API.
636:Note: Recompile with -Xlint:deprecation for details.
645:w: file:///home/runner/work/ergo/ergo/node_modules/@expo/dom-webview/android/src/main/java/expo/modules/webview/DomWebView.kt:254:18 'fun executeOnJavaScriptThread(runnable: Runnable): Unit' is deprecated. Use RuntimeContext.schedule instead.
---
> Task :expo-dom-webview:syncReleaseLibJars
> Task :expo-dom-webview:bundleReleaseLocalLintAar
> Task :expo-constants:checkReleaseAarMetadata
> Task :expo-constants:stripReleaseDebugSymbols NO-SOURCE
> Task :expo-constants:copyReleaseJniLibsProjectAndLocalJars
> Task :expo-constants:extractDeepLinksForAarRelease
> Task :expo-constants:extractReleaseAnnotations
> Task :expo-constants:mergeReleaseConsumerProguardFiles
> Task :expo-constants:mergeReleaseJavaResource
> Task :expo-constants:syncReleaseLibJars
> Task :expo-constants:bundleReleaseLocalLintAar
> Task :expo-constants:writeReleaseLintModelMetadata
> Task :expo-dom-webview:writeReleaseLintModelMetadata
> Task :expo-log-box:writeReleaseLintModelMetadata
> Task :expo-modules-core:writeReleaseLintModelMetadata
> Task :react-native-worklets:writeReleaseLintModelMetadata
> Task :expo:lintVitalAnalyzeRelease SKIPPED
> Task :expo:writeReleaseLintModelMetadata
> Task :expo-constants:lintVitalAnalyzeRelease SKIPPED
> Task :expo-dom-webview:lintVitalAnalyzeRelease SKIPPED
> Task :expo-log-box:lintVitalAnalyzeRelease SKIPPED
> Task :expo-modules-core:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-async-storage_async-storage:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-async-storage_async-storage:writeReleaseLintModelMetadata
> Task :react-native-reanimated:writeReleaseLintModelMetadata
> Task :react-native-svg:writeReleaseLintModelMetadata
> Task :react-native-gesture-handler:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-gesture-handler:writeReleaseLintModelMetadata
> Task :react-native-google-signin_google-signin:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-google-signin_google-signin:writeReleaseLintModelMetadata
> Task :react-native-maps:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-maps:writeReleaseLintModelMetadata
> Task :react-native-masked-view_masked-view:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-masked-view_masked-view:writeReleaseLintModelMetadata
> Task :react-native-reanimated:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-safe-area-context:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-safe-area-context:writeReleaseLintModelMetadata
> Task :react-native-screens:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-screens:writeReleaseLintModelMetadata
> Task :react-native-svg:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-worklets:lintVitalAnalyzeRelease SKIPPED
> Task :expo:generateReleaseLintVitalModel
> Task :expo-constants:generateReleaseLintVitalModel
> Task :expo-dom-webview:generateReleaseLintVitalModel
> Task :expo-log-box:generateReleaseLintVitalModel
> Task :expo-modules-core:generateReleaseLintVitalModel
> Task :react-native-async-storage_async-storage:generateReleaseLintVitalModel
> Task :react-native-gesture-handler:generateReleaseLintVitalModel
> Task :react-native-google-signin_google-signin:generateReleaseLintVitalModel
> Task :react-native-maps:generateReleaseLintVitalModel
> Task :react-native-masked-view_masked-view:generateReleaseLintVitalModel
> Task :react-native-reanimated:generateReleaseLintVitalModel
> Task :react-native-safe-area-context:generateReleaseLintVitalModel
> Task :react-native-screens:generateReleaseLintVitalModel
> Task :react-native-svg:generateReleaseLintVitalModel
> Task :react-native-worklets:generateReleaseLintVitalModel
> Task :expo:bundleReleaseAar
> Task :expo:mergeReleaseResources
> Task :expo:verifyReleaseResources
> Task :expo:assembleRelease
> Task :expo-constants:bundleReleaseAar
> Task :expo-constants:mergeReleaseResources
> Task :expo-constants:verifyReleaseResources
> Task :expo-constants:assembleRelease
> Task :expo-dom-webview:bundleReleaseAar
> Task :expo-dom-webview:mergeReleaseResources
> Task :expo-dom-webview:verifyReleaseResources
> Task :expo-dom-webview:assembleRelease
> Task :expo-log-box:bundleReleaseAar
> Task :expo-log-box:mergeReleaseResources
> Task :expo-log-box:verifyReleaseResources
> Task :expo-log-box:assembleRelease
> Task :expo-modules-core:bundleReleaseAar
> Task :expo-modules-core:mergeReleaseResources
> Task :expo-modules-core:verifyReleaseResources
> Task :expo-modules-core:assembleRelease
> Task :react-native-async-storage_async-storage:bundleReleaseAar
> Task :react-native-async-storage_async-storage:mergeReleaseResources
> Task :react-native-async-storage_async-storage:verifyReleaseResources
> Task :react-native-async-storage_async-storage:assembleRelease
> Task :react-native-gesture-handler:bundleReleaseAar
> Task :react-native-gesture-handler:mergeReleaseResources
> Task :react-native-gesture-handler:verifyReleaseResources
> Task :react-native-gesture-handler:assembleRelease
> Task :react-native-google-signin_google-signin:bundleReleaseAar
> Task :react-native-google-signin_google-signin:mergeReleaseResources
> Task :react-native-google-signin_google-signin:verifyReleaseResources
> Task :react-native-google-signin_google-signin:assembleRelease
> Task :react-native-maps:bundleReleaseAar
> Task :react-native-maps:mergeReleaseResources
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
```
