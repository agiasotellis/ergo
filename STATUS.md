# Android build 28: success

Disk: /dev/root        72G   60G   13G  83% /

- Commit: ee446c5cc12820d2ea573b3e0dc07e01c8fb5bd0
- Run: https://github.com/agiasotellis/ergo/actions/runs/39796219639
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-28

| Step | Result |
|---|---|
| install | success |
| typecheck | success |
| prebuild | success |
| gradle | success |
| collect | success |
| launch test | success |
| release | success |

Files:
    total 103940
    drwxr-xr-x  2 runner runner      4096 Oct 22 14:39 .
    drwxr-xr-x 14 runner runner      4096 Oct 22 14:39 ..
    -rw-r--r--  1 runner runner 106422038 Oct 22 14:39 ergo-1.0.0-build28.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-22 14:42:59.228 D/AndroidRuntime( 3389): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-22 14:42:59.237 I/AndroidRuntime( 3389): Using default boot image
10-22 14:42:59.237 I/AndroidRuntime( 3389): Leaving lock profiling enabled
10-22 14:42:59.403 D/AndroidRuntime( 3389): Calling main entry com.android.commands.monkey.Monkey
10-22 14:43:00.452 I/AndroidRuntime( 3389): VM exiting with result code 0.

=== React Native / Expo ===
10-22 14:43:47.123 W/RecoverableKeyStoreGms( 2977): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 14:43:48.456 W/BugleRcs( 5281): android.content.pm.PackageManager$NameNotFoundException: com.google.android.ims
10-22 14:43:49.159 E/PhenotypeFlagCommitter( 2977): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 14:43:49.196 W/PeoplePU( 2977): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-22 14:43:49.197 W/PeoplePU( 2977): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 14:43:49.197 W/PeoplePU( 2977): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 14:43:49.197 W/PeoplePU( 2977): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 14:43:49.197 W/PeoplePU( 2977): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 14:43:49.197 W/PeoplePU( 2977): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 14:43:49.197 W/PeoplePU( 2977): Caused by: android.os.RemoteException: Remote stack trace:
10-22 14:43:49.358 E/enyj    ( 2977): java.lang.RuntimeException: ManagedChannel allocation site
10-22 14:43:49.512 E/enyj    ( 2977): java.lang.RuntimeException: ManagedChannel allocation site
10-22 14:43:50.687 I/SemanticLocation( 3699): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 14:43:50.687 I/SemanticLocation( 3699): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 14:43:51.206 I/SemanticLocation( 3699): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 14:43:51.206 I/SemanticLocation( 3699): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 14:43:52.111 W/Conscrypt( 2977): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 14:43:52.152 W/AiAiAutofill( 3934): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-22 14:43:52.154 W/Conscrypt( 2977): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 14:43:52.185 W/Conscrypt( 2977): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 14:43:52.263 E/PhenotypeFlagCommitter( 2977): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 14:43:52.660 W/Conscrypt( 2977): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 14:43:52.841 W/CorpusConfigHelper( 3759): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 14:43:52.841 W/CorpusConfigHelper( 3759): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 14:43:53.004 E/VS.BluetoothShim( 1585): Error locating SCO method
10-22 14:43:53.004 E/VS.BluetoothShim( 1585): java.lang.NoSuchMethodException: android.bluetooth.BluetoothHeadset.startScoUsingVirtualVoiceCall [class android.bluetooth.BluetoothDevice]
10-22 14:43:54.153 E/RecoverySnapshotStorage(  513): Error reading snapshot for 10131 from disk
10-22 14:43:54.153 E/RecoverySnapshotStorage(  513): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 14:43:54.153 E/RecoverySnapshotStorage(  513): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 14:43:54.161 E/keystore2(  148):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 14:43:54.162 W/RecoverableKeyStoreGms( 2977): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 14:43:54.162 W/RecoverableKeyStoreGms( 2977): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 14:43:54.162 W/RecoverableKeyStoreGms( 2977): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 14:43:54.162 W/RecoverableKeyStoreGms( 2977): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 14:43:54.162 W/RecoverableKeyStoreGms( 2977): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 14:43:54.162 W/RecoverableKeyStoreGms( 2977): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 14:43:54.162 W/RecoverableKeyStoreGms( 2977): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 14:43:54.162 W/RecoverableKeyStoreGms( 2977): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 14:43:54.482 W/NetworkScheduler( 3699): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 14:43:54.490 W/AiAiFed ( 3934): java.lang.IllegalArgumentException: Unsupported response code3
10-22 14:43:54.677 W/SliceDataConverter( 5217): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.credentials.CredentialManagerPreferenceController
10-22 14:43:54.677 W/SliceDataConverter( 5217): Caused by: java.lang.reflect.InvocationTargetException
10-22 14:43:54.677 W/SliceDataConverter( 5217): Caused by: java.lang.RuntimeException: Can't create handler inside thread Thread[binder:5217_5,5,main] that has not called Looper.prepare()
10-22 14:43:54.689 W/SliceDataConverter( 5217): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.accessibility.VibrationMainSwitchPreferenceController
10-22 14:43:54.689 W/SliceDataConverter( 5217): Caused by: java.lang.reflect.InvocationTargetException
10-22 14:43:54.689 W/SliceDataConverter( 5217): Caused by: java.lang.RuntimeException: Can't create handler inside thread Thread[binder:5217_5,5,main] that has not called Looper.prepare()
10-22 14:43:54.692 W/SliceDataConverter( 5217): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.fuelgauge.batteryusage.BatteryChartPreferenceController
10-22 14:43:54.692 W/SliceDataConverter( 5217): Caused by: java.lang.NoSuchMethodException: com.android.settings.fuelgauge.batteryusage.BatteryChartPreferenceController.<init> [class android.content.Context, class java.lang.String]
10-22 14:43:54.698 W/SliceDataConverter( 5217): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 14:43:54.698 W/SliceDataConverter( 5217): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 14:43:54.698 W/SliceDataConverter( 5217): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 14:43:54.724 W/AiAiFed ( 3934): java.lang.IllegalArgumentException: Unsupported response code3
10-22 14:43:54.735 W/SliceDataConverter( 5217): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 14:43:54.735 W/SliceDataConverter( 5217): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 14:43:54.735 W/SliceDataConverter( 5217): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 14:43:54.736 W/SliceDataConverter( 5217): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.telephony.CallsDefaultSubscriptionController
10-22 14:43:54.736 W/SliceDataConverter( 5217): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.telephony.CallsDefaultSubscriptionController.<init> [class android.content.Context, class java.lang.String]
10-22 14:43:54.737 W/SliceDataConverter( 5217): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.telephony.CallsDefaultSubscriptionController
10-22 14:43:54.737 W/SliceDataConverter( 5217): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.telephony.CallsDefaultSubscriptionController.<init> [class android.content.Context, class java.lang.String]
10-22 14:43:54.747 E/HardwareInfoFeatureProviderImpl( 5217): java.lang.NumberFormatException: For input string: "E"
10-22 14:43:55.040 W/SliceDataConverter( 5217): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.NetworkProviderSimsCategoryController
10-22 14:43:55.040 W/SliceDataConverter( 5217): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.NetworkProviderSimsCategoryController.<init> [class android.content.Context, class java.lang.String]
10-22 14:43:55.049 E/SystemServiceRegistry( 5217): android.os.ServiceManager$ServiceNotFoundException: No service published for: ethernet
10-22 14:43:55.053 W/SliceDataConverter( 5217): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 14:43:55.053 W/SliceDataConverter( 5217): Caused by: java.lang.ClassNotFoundException: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 14:43:55.053 W/SliceDataConverter( 5217): Caused by: java.lang.ClassNotFoundException: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 14:43:55.234 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:55.267 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:55.298 W/ModernMediaScanner( 1549): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 14:43:55.317 W/ModernMediaScanner( 1549): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 14:43:55.336 W/AiAiAutofill( 3934): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-22 14:43:56.380 W/Conscrypt( 2977): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 14:43:56.472 W/Conscrypt( 2977): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 14:43:56.545 W/AiAiAutofill( 3934): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-22 14:43:56.585 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:56.599 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:56.611 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:56.617 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:56.627 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:56.628 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:56.628 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:56.631 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:56.632 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:56.884 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:56.892 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:56.906 W/AiAiAutofill( 3934): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-22 14:43:57.072 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:57.080 W/ModernMediaScanner( 1549): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-metadata.txt
10-22 14:43:57.087 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:57.087 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:57.095 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:57.102 W/ModernMediaScanner( 1549): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-pins.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-pins.txt
10-22 14:43:57.109 W/AiAiAutofill( 3934): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-22 14:43:57.164 W/ModernMediaScanner( 1549): Failed to visit /data/data/com.android.providers.downloads/cache/ifw-empty-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/ifw-empty-metadata.txt
10-22 14:43:57.172 W/ModernMediaScanner( 1549): Failed to visit /data/data/com.android.providers.downloads/cache/ifw-empty.xml: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/ifw-empty.xml
10-22 14:43:57.367 W/AiAiFed ( 3934): java.lang.IllegalArgumentException: Unsupported response code3
10-22 14:43:57.673 W/RingtonePlayer( 4776): java.io.IOException: setDataSource failed.: status=0x80000000
10-22 14:43:57.820 W/ModernMediaScanner( 1549): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt
10-22 14:43:57.869 W/ModernMediaScanner( 1549): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt
10-22 14:43:58.490 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:58.504 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:58.517 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:59.127 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:59.134 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:59.137 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:59.137 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:59.137 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:43:59.440 E/cr_CronetUrlRequestContext( 3759): Exception in upload method
10-22 14:43:59.440 E/cr_CronetUrlRequestContext( 3759): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-22 14:43:59.443 E/A       ( 3759): onError
10-22 14:44:00.419 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:00.421 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:00.430 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:00.435 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:00.437 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:00.438 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:00.447 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:00.456 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:00.496 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:00.497 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:01.128 W/RcsClientLib( 5281): Error while stopping RCS engine.
10-22 14:44:01.128 W/RcsClientLib( 5281): java.lang.IllegalStateException: JibeService Not Initialized
10-22 14:44:01.128 W/RcsClientLib( 5281): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 14:44:01.128 W/RcsClientLib( 5281): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 14:44:01.128 W/RcsClientLib( 5281): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 14:44:01.128 W/RcsClientLib( 5281): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 14:44:01.128 W/RcsClientLib( 5281): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 14:44:01.718 E/BugleRcsEngine( 5700): [2] JibeService.onDestroy: JibeService: onDestroy() unregister factory exception: java.lang.IllegalArgumentException: Receiver not registered: com.google.android.ims.receiver.sip.DebugOptionsReceiver@2c38540
10-22 14:44:02.437 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.402 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.406 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.408 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.409 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.409 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.413 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.414 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.414 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.415 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.415 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.576 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.712 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.718 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.719 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.721 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.721 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.727 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:03.730 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 14:44:05.219 W/ModernMediaScanner( 1549): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 14:44:05.412 W/MediaProvider( 1549): java.io.IOException: Failed to update quota type for /storage/emulated/0/Android
10-22 14:44:05.417 W/MediaProvider( 1549): java.io.IOException: Failed to update quota type for /storage/emulated/0/Android/media
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 843 packages, and audited 844 packages in 16s

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
total 103936
drwxr-xr-x  2 runner runner      4096 Oct 22 14:39 .
drwxr-xr-x 14 runner runner      4096 Oct 22 14:39 ..
-rw-r--r--  1 runner runner 106422038 Oct 22 14:39 ergo-1.0.0-build28.apk
```

## Gradle
```
980:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1041:BUILD SUCCESSFUL in 6m
---
> Task :react-native-google-signin_google-signin:bundleReleaseAar
> Task :react-native-google-signin_google-signin:mergeReleaseResources FROM-CACHE
> Task :react-native-google-signin_google-signin:verifyReleaseResources FROM-CACHE
> Task :react-native-google-signin_google-signin:assembleRelease
> Task :react-native-masked-view_masked-view:bundleReleaseAar
> Task :react-native-masked-view_masked-view:mergeReleaseResources FROM-CACHE
> Task :react-native-masked-view_masked-view:verifyReleaseResources FROM-CACHE
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
> Task :app:buildCMakeRelWithDebInfo[arm64-v8a]
> Task :app:buildCMakeRelWithDebInfo[x86_64]
> Task :app:generateReleaseResValues
> Task :app:generateReleaseResources FROM-CACHE
> Task :app:processReleaseGoogleServices FROM-CACHE
> Task :app:packageReleaseResources
> Task :app:processReleaseNavigationResources FROM-CACHE
> Task :app:parseReleaseLocalResources
> Task :app:generateReleaseRFile FROM-CACHE
> Task :app:mergeReleaseNativeLibs
> Task :app:stripReleaseDebugSymbols
> Task :app:extractReleaseNativeSymbolTables FROM-CACHE
> Task :app:mergeReleaseNativeDebugMetadata
> Task :app:javaPreCompileRelease FROM-CACHE
> Task :app:checkReleaseAarMetadata
> Task :app:mapReleaseSourceSetPaths
> Task :app:compileReleaseNavigationResources FROM-CACHE

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:mergeReleaseResources
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
> Task :app:desugarReleaseFileDependencies FROM-CACHE
> Task :app:mergeReleaseStartupProfile
> Task :app:mergeExtDexRelease FROM-CACHE
> Task :app:processReleaseManifestForPackage
> Task :app:mergeReleaseArtProfile
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseAssets
> Task :app:compressReleaseAssets
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
> Task :app:generateReleaseLintVitalReportModel
> Task :app:processReleaseResources
> Task :app:dexBuilderRelease
> Task :app:lintVitalAnalyzeRelease
> Task :app:mergeReleaseGlobalSynthetics FROM-CACHE
> Task :app:mergeDexRelease
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :app:processReleaseJavaRes
> Task :app:mergeReleaseJavaResource
> Task :app:compileReleaseArtProfile
> Task :app:collectReleaseDependencies
> Task :app:optimizeReleaseResources
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease
> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792679628691.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 6m
742 actionable tasks: 478 executed, 264 from cache
Cacheable calls:   696 / 706 (98.58%)
  Hits:            696 / 696 (100.0%)
    Direct:        696 / 696 (100.0%)
    Preprocessed:    0 / 696 ( 0.00%)
  Misses:            0 / 696 ( 0.00%)
Uncacheable calls:  10 / 706 ( 1.42%)
Local storage:
  Cache size (GB): 0.6 / 3.0 (19.27%)
  Hits:            696 / 696 (100.0%)
  Misses:            0 / 696 ( 0.00%)
```
