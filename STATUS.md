# Android build 24: success

Disk: /dev/root        72G   58G   15G  81% /

- Commit: 9363921f1d47552768d9e345e8eb978b96c220c0
- Run: https://github.com/agiasotellis/ergo/actions/runs/39756365347
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-24

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
    total 102976
    drwxr-xr-x  2 runner runner      4096 Oct 22 09:41 .
    drwxr-xr-x 14 runner runner      4096 Oct 22 09:41 ..
    -rw-r--r--  1 runner runner 105436927 Oct 22 09:41 ergo-1.0.0-build24.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-22 09:44:43.614 D/AndroidRuntime( 3451): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-22 09:44:43.619 I/AndroidRuntime( 3451): Using default boot image
10-22 09:44:43.626 I/AndroidRuntime( 3451): Leaving lock profiling enabled
10-22 09:44:43.895 D/AndroidRuntime( 3451): Calling main entry com.android.commands.monkey.Monkey
10-22 09:44:45.540 I/AndroidRuntime( 3451): VM exiting with result code 0.

=== React Native / Expo ===
10-22 09:45:44.717 W/PeoplePU( 3826): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 09:45:44.717 W/PeoplePU( 3826): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 09:45:44.717 W/PeoplePU( 3826): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 09:45:44.717 W/PeoplePU( 3826): Caused by: android.os.RemoteException: Remote stack trace:
10-22 09:45:45.160 E/RecoverySnapshotStorage(  513): Error reading snapshot for 10131 from disk
10-22 09:45:45.160 E/RecoverySnapshotStorage(  513): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 09:45:45.160 E/RecoverySnapshotStorage(  513): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:45:45.864 E/A       ( 2769): onError
10-22 09:45:46.074 E/RecoverySnapshotStorage(  513): Error reading snapshot for 10131 from disk
10-22 09:45:46.074 E/RecoverySnapshotStorage(  513): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 09:45:46.074 E/RecoverySnapshotStorage(  513): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:45:46.078 E/keystore2(  146):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 09:45:46.079 W/RecoverableKeyStoreGms( 3826): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 09:45:46.079 W/RecoverableKeyStoreGms( 3826): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 09:45:46.079 W/RecoverableKeyStoreGms( 3826): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 09:45:46.079 W/RecoverableKeyStoreGms( 3826): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 09:45:46.079 W/RecoverableKeyStoreGms( 3826): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 09:45:46.079 W/RecoverableKeyStoreGms( 3826): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 09:45:46.079 W/RecoverableKeyStoreGms( 3826): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 09:45:46.079 W/RecoverableKeyStoreGms( 3826): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 09:45:46.602 W/Looper  ( 3558): java.lang.RuntimeException: Handler (acdu) {2e10b90} sendMessageAtTime() called with no mQueue
10-22 09:45:47.312 W/AiAiAutofill( 1525): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-22 09:45:47.566 I/SemanticLocation( 3558): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 09:45:47.566 I/SemanticLocation( 3558): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:45:48.036 E/RecoverySnapshotStorage(  513): Error reading snapshot for 10131 from disk
10-22 09:45:48.036 E/RecoverySnapshotStorage(  513): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 09:45:48.036 E/RecoverySnapshotStorage(  513): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:45:48.042 E/keystore2(  146):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 09:45:48.042 W/RecoverableKeyStoreGms( 3826): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 09:45:48.042 W/RecoverableKeyStoreGms( 3826): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 09:45:48.042 W/RecoverableKeyStoreGms( 3826): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 09:45:48.042 W/RecoverableKeyStoreGms( 3826): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 09:45:48.042 W/RecoverableKeyStoreGms( 3826): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 09:45:48.042 W/RecoverableKeyStoreGms( 3826): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 09:45:48.042 W/RecoverableKeyStoreGms( 3826): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 09:45:48.042 W/RecoverableKeyStoreGms( 3826): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 09:45:48.099 I/SemanticLocation( 3558): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 09:45:48.099 I/SemanticLocation( 3558): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:45:48.188 W/Icing   ( 3826): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:45:49.110 W/FontLog ( 3558): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 1 milliseconds, 377297 nanoseconds delay) for dlrl@605ab25[status=PENDING]
10-22 09:45:49.193 W/Bugle   ( 4976): java.lang.RuntimeException: fetchFonts result is not OK. (2)
10-22 09:45:49.373 W/SliceDataConverter( 1017): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.accessibility.VibrationMainSwitchPreferenceController
10-22 09:45:49.373 W/SliceDataConverter( 1017): Caused by: java.lang.reflect.InvocationTargetException
10-22 09:45:49.373 W/SliceDataConverter( 1017): Caused by: java.lang.RuntimeException: Can't create handler inside thread Thread[binder:1017_3,5,main] that has not called Looper.prepare()
10-22 09:45:49.397 W/SliceDataConverter( 1017): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 09:45:49.397 W/SliceDataConverter( 1017): Caused by: java.lang.ClassNotFoundException: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 09:45:49.397 W/SliceDataConverter( 1017): Caused by: java.lang.ClassNotFoundException: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 09:45:49.406 E/HardwareInfoFeatureProviderImpl( 1017): java.lang.NumberFormatException: For input string: "E"
10-22 09:45:49.408 W/SliceDataConverter( 1017): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.telephony.CallsDefaultSubscriptionController
10-22 09:45:49.408 W/SliceDataConverter( 1017): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.telephony.CallsDefaultSubscriptionController.<init> [class android.content.Context, class java.lang.String]
10-22 09:45:49.421 W/SliceDataConverter( 1017): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 09:45:49.421 W/SliceDataConverter( 1017): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 09:45:49.421 W/SliceDataConverter( 1017): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 09:45:49.443 W/SliceDataConverter( 1017): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.telephony.CallsDefaultSubscriptionController
10-22 09:45:49.443 W/SliceDataConverter( 1017): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.telephony.CallsDefaultSubscriptionController.<init> [class android.content.Context, class java.lang.String]
10-22 09:45:49.487 W/SliceDataConverter( 1017): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 09:45:49.487 W/SliceDataConverter( 1017): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 09:45:49.487 W/SliceDataConverter( 1017): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 09:45:49.493 W/SliceDataConverter( 1017): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.NetworkProviderSimsCategoryController
10-22 09:45:49.493 W/SliceDataConverter( 1017): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.NetworkProviderSimsCategoryController.<init> [class android.content.Context, class java.lang.String]
10-22 09:45:49.500 E/SystemServiceRegistry( 1017): android.os.ServiceManager$ServiceNotFoundException: No service published for: ethernet
10-22 09:45:49.512 W/SliceDataConverter( 1017): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.credentials.CredentialManagerPreferenceController
10-22 09:45:49.512 W/SliceDataConverter( 1017): Caused by: java.lang.reflect.InvocationTargetException
10-22 09:45:49.512 W/SliceDataConverter( 1017): Caused by: java.lang.RuntimeException: Can't create handler inside thread Thread[binder:1017_3,5,main] that has not called Looper.prepare()
10-22 09:45:49.526 W/SliceDataConverter( 1017): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.fuelgauge.batteryusage.BatteryChartPreferenceController
10-22 09:45:49.526 W/SliceDataConverter( 1017): Caused by: java.lang.NoSuchMethodException: com.android.settings.fuelgauge.batteryusage.BatteryChartPreferenceController.<init> [class android.content.Context, class java.lang.String]
10-22 09:45:49.595 W/AiAiFed ( 1525): java.lang.IllegalArgumentException: Unsupported response code3
10-22 09:45:50.099 W/AiAiAutofill( 1525): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-22 09:45:50.602 E/enyj    ( 3558): java.lang.RuntimeException: ManagedChannel allocation site
10-22 09:45:50.678 W/NetworkScheduler( 3558): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 09:45:50.715 W/Conscrypt( 3558): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:45:50.931 W/Conscrypt( 3558): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:45:51.255 W/NetworkScheduler( 3558): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 09:45:51.466 W/Conscrypt( 3826): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:45:51.765 W/Conscrypt( 3826): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:45:53.249 E/RecoverySnapshotStorage(  513): Error reading snapshot for 10131 from disk
10-22 09:45:53.249 E/RecoverySnapshotStorage(  513): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 09:45:53.249 E/RecoverySnapshotStorage(  513): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:45:53.257 E/keystore2(  146):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 09:45:53.299 W/RecoverableKeyStoreGms( 3826): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 09:45:53.299 W/RecoverableKeyStoreGms( 3826): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 09:45:53.299 W/RecoverableKeyStoreGms( 3826): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 09:45:53.299 W/RecoverableKeyStoreGms( 3826): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 09:45:53.299 W/RecoverableKeyStoreGms( 3826): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 09:45:53.299 W/RecoverableKeyStoreGms( 3826): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 09:45:53.299 W/RecoverableKeyStoreGms( 3826): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 09:45:53.299 W/RecoverableKeyStoreGms( 3826): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 09:45:53.606 W/NetworkScheduler( 3558): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 09:45:54.407 W/RcsClientLib( 4976): Error while stopping RCS engine.
10-22 09:45:54.407 W/RcsClientLib( 4976): java.lang.IllegalStateException: JibeService Not Initialized
10-22 09:45:54.407 W/RcsClientLib( 4976): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 09:45:54.407 W/RcsClientLib( 4976): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 09:45:54.407 W/RcsClientLib( 4976): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 09:45:54.407 W/RcsClientLib( 4976): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 09:45:54.407 W/RcsClientLib( 4976): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 09:45:55.061 E/BugleRcsEngine( 5319): [2] JibeService.onDestroy: JibeService: onDestroy() unregister factory exception: java.lang.IllegalArgumentException: Receiver not registered: com.google.android.ims.receiver.sip.DebugOptionsReceiver@7034e19
10-22 09:45:55.212 W/Conscrypt( 3558): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:45:55.213 W/Conscrypt( 3558): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:45:55.640 W/Conscrypt( 3558): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:45:55.649 W/Conscrypt( 3558): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:45:55.977 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.423 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.425 W/Conscrypt( 3826): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:45:56.426 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.436 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.447 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.449 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.462 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.466 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.475 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.477 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.492 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.514 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.526 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.528 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.557 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:45:56.762 W/Conscrypt( 3826): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:45:57.227 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:00.154 W/ModernMediaScanner( 1527): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 09:46:00.175 W/ModernMediaScanner( 1527): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 09:46:00.939 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:00.944 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:00.945 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:01.119 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:01.122 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:01.123 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:01.124 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:01.125 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:01.196 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:01.227 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:01.237 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:01.243 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:01.244 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:01.245 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:01.247 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:01.248 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:02.328 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:02.332 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:02.586 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:02.778 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:02.860 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:02.863 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:02.872 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:02.874 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:02.880 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:04.261 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:04.338 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:04.611 E/NotificationListeners(  513): android.os.DeadObjectException
10-22 09:46:04.778 W/ModernMediaScanner( 1527): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-metadata.txt
10-22 09:46:05.236 W/ModernMediaScanner( 1527): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-pins.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-pins.txt
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 838 packages, and audited 839 packages in 21s

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
total 102976
drwxr-xr-x  2 runner runner      4096 Oct 22 09:41 .
drwxr-xr-x 14 runner runner      4096 Oct 22 09:41 ..
-rw-r--r--  1 runner runner 105436927 Oct 22 09:41 ergo-1.0.0-build24.apk
```

## Gradle
```
609:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1041:BUILD SUCCESSFUL in 6m 10s
---
> Task :react-native-google-signin_google-signin:writeReleaseLintModelMetadata
> Task :react-native-reanimated:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-masked-view_masked-view:writeReleaseLintModelMetadata
> Task :react-native-safe-area-context:lintVitalAnalyzeRelease SKIPPED
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
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792661741802.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 6m 10s
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
