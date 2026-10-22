# Android build 20: success

Disk: /dev/root        72G   59G   14G  82% /

- Commit: 40aee7c444fade7c481386429fa0219a04e52e73
- Run: https://github.com/agiasotellis/ergo/actions/runs/39727984545
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-20

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
    total 102956
    drwxr-xr-x  2 runner runner      4096 Oct 22 05:33 .
    drwxr-xr-x 14 runner runner      4096 Oct 22 05:33 ..
    -rw-r--r--  1 runner runner 105410583 Oct 22 05:33 ergo-1.0.0-build20.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-22 05:37:19.416 D/AndroidRuntime( 4019): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-22 05:37:19.425 I/AndroidRuntime( 4019): Using default boot image
10-22 05:37:19.425 I/AndroidRuntime( 4019): Leaving lock profiling enabled
10-22 05:37:20.145 D/AndroidRuntime( 4019): Calling main entry com.android.commands.monkey.Monkey
10-22 05:37:21.405 I/AndroidRuntime( 4019): VM exiting with result code 0.

=== React Native / Expo ===
10-22 05:38:19.186 W/Conscrypt( 3264): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 05:38:19.378 W/Conscrypt( 3264): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 05:38:19.698 W/NetworkScheduler( 4453): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 05:38:20.014 W/CorpusConfigHelper( 3271): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 05:38:20.014 W/CorpusConfigHelper( 3271): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 05:38:20.409 W/NetworkScheduler( 4453): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 05:38:20.444 E/VS.BluetoothShim( 1566): Error locating SCO method
10-22 05:38:20.444 E/VS.BluetoothShim( 1566): java.lang.NoSuchMethodException: android.bluetooth.BluetoothHeadset.startScoUsingVirtualVoiceCall [class android.bluetooth.BluetoothDevice]
10-22 05:38:22.225 W/Conscrypt( 4453): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 05:38:22.231 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:22.235 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:22.244 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:22.253 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:22.253 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:22.259 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:22.259 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:22.261 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:22.261 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:22.325 W/Conscrypt( 4453): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 05:38:22.369 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:23.286 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:23.290 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:23.290 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:23.292 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:23.301 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:23.909 W/PhenotypeCommitHelper( 4453): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 05:38:23.911 E/PhenotypeFlagCommitter( 4453): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 05:38:23.974 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:24.338 W/ModernMediaScanner( 1545): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 05:38:24.347 W/ModernMediaScanner( 1545): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 05:38:24.391 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:24.395 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:24.396 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:24.881 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:24.882 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:24.882 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:24.882 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:24.885 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:24.893 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:24.894 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:24.921 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:25.187 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:25.189 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:25.222 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:25.274 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:25.662 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.322 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.326 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.327 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.328 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.453 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.454 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.454 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.454 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.455 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.457 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.461 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.465 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.465 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.466 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.468 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.468 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.608 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:26.609 E/NotificationListeners(  511): android.os.DeadObjectException
10-22 05:38:35.023 W/ModernMediaScanner( 1545): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 05:38:35.129 W/MediaProvider( 1545): java.io.IOException: Failed to update quota type for /storage/emulated/0/Android
10-22 05:38:35.137 W/MediaProvider( 1545): java.io.IOException: Failed to update quota type for /storage/emulated/0/Android/media
10-22 05:38:39.292 W/AsyncOperation( 4453): OperationException[Status{statusCode=Stale snapshot for com.google.android.googlequicksearchbox(change count changed - expected 3  but was 1), resolution=null}]
10-22 05:38:39.331 E/ApplicationPropertiesBu( 3271): Error when converting version: messages.android_20230529_03_RC01_alldpi.x86_64.phone
10-22 05:38:39.331 E/ApplicationPropertiesBu( 3271): java.lang.NumberFormatException: For input string: "messages"
10-22 05:38:39.345 W/A       ( 3271): Exception while fetching versionCode for package[com.google.android.apps.tv.dreamx].
10-22 05:38:39.345 W/A       ( 3271): android.content.pm.PackageManager$NameNotFoundException: com.google.android.apps.tv.dreamx
10-22 05:38:39.345 W/A       ( 3271): Exception while fetching versionCode for package[com.google.android.apps.tv.launcherx].
10-22 05:38:39.345 W/A       ( 3271): android.content.pm.PackageManager$NameNotFoundException: com.google.android.apps.tv.launcherx
10-22 05:38:39.515 W/AsyncOperation( 4453): OperationException[Status{statusCode=Stale snapshot for com.google.android.apps.messaging#com.google.android.apps.messaging(change count changed - expected 3  but was 2), resolution=null}]
10-22 05:38:39.546 W/AsyncOperation( 4453): OperationException[Status{statusCode=Stale snapshot for com.google.android.apps.messaging#com.google.android.apps.messaging(change count changed - expected 3  but was 2), resolution=null}]
10-22 05:38:39.875 E/A       ( 3271): onError
10-22 05:38:39.880 E/cr_CronetUrlRequestContext( 3271): Exception in upload method
10-22 05:38:39.880 E/cr_CronetUrlRequestContext( 3271): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-22 05:38:43.404 W/PhenotypeFlagCommitter( 4453): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 05:38:43.919 W/RcsClientLib( 4439): Error while stopping RCS engine.
10-22 05:38:43.920 W/RcsClientLib( 4439): java.lang.IllegalStateException: JibeService Not Initialized
10-22 05:38:43.920 W/RcsClientLib( 4439): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 05:38:43.920 W/RcsClientLib( 4439): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 05:38:43.920 W/RcsClientLib( 4439): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 05:38:43.920 W/RcsClientLib( 4439): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 05:38:43.920 W/RcsClientLib( 4439): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 05:38:44.508 E/BugleRcsEngine( 5103): [2] JibeService.onDestroy: JibeService: onDestroy() unregister factory exception: java.lang.IllegalArgumentException: Receiver not registered: com.google.android.ims.receiver.sip.DebugOptionsReceiver@10388f4
10-22 05:38:45.470 E/PhenotypeFlagCommitter( 4453): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 05:38:46.144 W/RcsClientLib( 4439): Error while stopping RCS engine.
10-22 05:38:46.144 W/RcsClientLib( 4439): java.lang.IllegalStateException: JibeService Not Initialized
10-22 05:38:46.144 W/RcsClientLib( 4439): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 05:38:46.144 W/RcsClientLib( 4439): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 05:38:46.144 W/RcsClientLib( 4439): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 05:38:46.144 W/RcsClientLib( 4439): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 05:38:46.144 W/RcsClientLib( 4439): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 05:38:46.713 E/BugleRcsEngine( 5103): [2] JibeService.onDestroy: JibeService: onDestroy() unregister factory exception: java.lang.IllegalArgumentException: Receiver not registered: com.google.android.ims.receiver.sip.DebugOptionsReceiver@10388f4
10-22 05:38:46.902 W/Conscrypt( 4453): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 05:38:46.924 W/RcsClientLib( 4439): Error while stopping RCS engine.
10-22 05:38:46.924 W/RcsClientLib( 4439): java.lang.IllegalStateException: JibeService Not Initialized
10-22 05:38:46.924 W/RcsClientLib( 4439): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 05:38:46.924 W/RcsClientLib( 4439): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 05:38:46.924 W/RcsClientLib( 4439): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 05:38:46.924 W/RcsClientLib( 4439): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 05:38:46.924 W/RcsClientLib( 4439): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 05:38:47.190 W/Conscrypt( 4453): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 05:38:47.453 E/BugleRcsEngine( 5103): [2] JibeService.onDestroy: JibeService: onDestroy() unregister factory exception: java.lang.IllegalArgumentException: Receiver not registered: com.google.android.ims.receiver.sip.DebugOptionsReceiver@10388f4
10-22 05:38:48.292 E/bwel    ( 4453): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 05:38:50.269 W/PeoplePU( 3264): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-22 05:38:50.271 W/PeoplePU( 3264): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 05:38:50.271 W/PeoplePU( 3264): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 05:38:50.271 W/PeoplePU( 3264): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 05:38:50.271 W/PeoplePU( 3264): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 05:38:50.271 W/PeoplePU( 3264): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 05:38:50.271 W/PeoplePU( 3264): Caused by: android.os.RemoteException: Remote stack trace:
10-22 05:38:50.274 W/PeoplePU( 3264): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 05:38:50.274 W/PeoplePU( 3264): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 05:38:50.274 W/PeoplePU( 3264): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 05:38:50.274 W/PeoplePU( 3264): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 05:38:50.274 W/PeoplePU( 3264): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 05:38:50.274 W/PeoplePU( 3264): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 05:38:50.274 W/PeoplePU( 3264): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 05:38:50.274 W/PeoplePU( 3264): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 05:38:50.274 W/PeoplePU( 3264): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 05:38:50.274 W/PeoplePU( 3264): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 05:38:50.846 I/SemanticLocation( 4453): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 05:38:50.846 I/SemanticLocation( 4453): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 05:38:50.920 W/NetworkScheduler( 4453): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 05:38:50.971 I/SemanticLocation( 4453): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 05:38:50.971 I/SemanticLocation( 4453): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 05:38:50.972 W/AsyncOperation( 4453): OperationException[Status{statusCode=Stale snapshot for com.google.android.dialershared.directboot#com.google.android.dialer(change count changed - expected 4  but was 3), resolution=null}]
10-22 05:38:51.485 W/CorpusConfigHelper( 3271): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 05:38:51.485 W/CorpusConfigHelper( 3271): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 05:38:51.489 W/CorpusConfigHelper( 3271): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 05:38:51.489 W/CorpusConfigHelper( 3271): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 05:38:53.698 E/RecoverySnapshotStorage(  511): Error reading snapshot for 10128 from disk
10-22 05:38:53.698 E/RecoverySnapshotStorage(  511): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10128.xml: open failed: ENOENT (No such file or directory)
10-22 05:38:53.698 E/RecoverySnapshotStorage(  511): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 05:38:53.704 E/keystore2(  148):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 05:38:53.705 W/RecoverableKeyStoreGms( 3264): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 05:38:53.705 W/RecoverableKeyStoreGms( 3264): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 05:38:53.705 W/RecoverableKeyStoreGms( 3264): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 05:38:53.705 W/RecoverableKeyStoreGms( 3264): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 05:38:53.705 W/RecoverableKeyStoreGms( 3264): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 05:38:53.705 W/RecoverableKeyStoreGms( 3264): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 05:38:53.705 W/RecoverableKeyStoreGms( 3264): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 05:38:53.705 W/RecoverableKeyStoreGms( 3264): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 05:38:53.995 W/NetworkScheduler( 4453): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 05:38:57.611 W/PhenotypeFlagCommitter( 4453): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 05:38:57.622 W/PhenotypeCommitHelper( 4453): java.util.concurrent.TimeoutException: Timed out waiting for Task
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 838 packages, and audited 839 packages in 16s

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
drwxr-xr-x  2 runner runner      4096 Oct 22 05:33 .
drwxr-xr-x 14 runner runner      4096 Oct 22 05:33 ..
-rw-r--r--  1 runner runner 105410583 Oct 22 05:33 ergo-1.0.0-build20.apk
```

## Gradle
```
977:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1038:BUILD SUCCESSFUL in 5m 36s
---
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
> Task :app:buildCMakeRelWithDebInfo[x86_64]
> Task :react-native-worklets:bundleReleaseAar
> Task :app:generateReleaseResValues
> Task :app:generateReleaseResources FROM-CACHE
> Task :app:packageReleaseResources
> Task :app:processReleaseNavigationResources FROM-CACHE
> Task :app:parseReleaseLocalResources
> Task :app:generateReleaseRFile FROM-CACHE
> Task :app:mergeReleaseNativeLibs
> Task :react-native-worklets:mergeReleaseResources FROM-CACHE
> Task :react-native-worklets:verifyReleaseResources FROM-CACHE
> Task :react-native-worklets:assembleRelease
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
> Task :app:processReleaseManifestForPackage
> Task :app:mergeExtDexRelease FROM-CACHE
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
> Task :app:lintVitalAnalyzeRelease
> Task :app:mergeReleaseJavaResource
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
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792646900950.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 5m 36s
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
