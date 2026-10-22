# Android build 27: success

Disk: /dev/root        72G   61G   12G  84% /

- Commit: daa2e226341285ee3a16b02afcf242d6692a7251
- Run: https://github.com/agiasotellis/ergo/actions/runs/39777860994
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-27

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
    total 103928
    drwxr-xr-x  2 runner runner      4096 Oct 22 12:31 .
    drwxr-xr-x 14 runner runner      4096 Oct 22 12:31 ..
    -rw-r--r--  1 runner runner 106406806 Oct 22 12:31 ergo-1.0.0-build27.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-22 12:34:50.979 D/AndroidRuntime( 3599): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-22 12:34:50.988 I/AndroidRuntime( 3599): Using default boot image
10-22 12:34:50.990 I/AndroidRuntime( 3599): Leaving lock profiling enabled
10-22 12:34:51.202 D/AndroidRuntime( 3599): Calling main entry com.android.commands.monkey.Monkey
10-22 12:34:52.394 I/AndroidRuntime( 3599): VM exiting with result code 0.

=== React Native / Expo ===
10-22 12:35:33.123 D/StrictMode( 3799): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-22 12:35:33.155 I/SemanticLocation( 4109): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 12:35:33.155 I/SemanticLocation( 4109): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:35:33.442 W/Conscrypt( 4109): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:35:33.978 W/Conscrypt( 4109): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:35:35.195 E/RecoverySnapshotStorage(  508): Error reading snapshot for 10130 from disk
10-22 12:35:35.195 E/RecoverySnapshotStorage(  508): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10130.xml: open failed: ENOENT (No such file or directory)
10-22 12:35:35.195 E/RecoverySnapshotStorage(  508): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:35:35.393 E/Vision  ( 3111): Couldn't read checkbot setting: android.provider.Settings$SettingNotFoundException: multi_cb
10-22 12:35:35.657 W/Conscrypt( 4109): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:35:35.786 I/SemanticLocation( 4109): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 12:35:35.786 I/SemanticLocation( 4109): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:35:35.967 E/RecoverySnapshotStorage(  508): Error reading snapshot for 10130 from disk
10-22 12:35:35.967 E/RecoverySnapshotStorage(  508): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10130.xml: open failed: ENOENT (No such file or directory)
10-22 12:35:35.967 E/RecoverySnapshotStorage(  508): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:35:35.977 E/keystore2(  146):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 12:35:35.978 W/RecoverableKeyStoreGms( 3111): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 12:35:35.978 W/RecoverableKeyStoreGms( 3111): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 12:35:35.978 W/RecoverableKeyStoreGms( 3111): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 12:35:35.978 W/RecoverableKeyStoreGms( 3111): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 12:35:35.978 W/RecoverableKeyStoreGms( 3111): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 12:35:35.978 W/RecoverableKeyStoreGms( 3111): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 12:35:35.978 W/RecoverableKeyStoreGms( 3111): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 12:35:35.978 W/RecoverableKeyStoreGms( 3111): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 12:35:36.011 W/Conscrypt( 4109): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:35:36.277 W/Conscrypt( 4109): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:35:36.455 W/Conscrypt( 4109): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:35:36.832 W/NetworkScheduler( 4109): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 12:35:37.016 W/Conscrypt( 4109): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:35:37.096 W/Conscrypt( 4109): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:35:37.875 W/Conscrypt( 4109): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:35:38.048 W/Conscrypt( 4109): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:35:38.709 W/ApkChecksums(  508): android.os.DeadObjectException
10-22 12:35:39.705 E/bwel    ( 4109): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 12:35:40.380 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:40.694 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:40.704 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:40.740 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:41.076 W/AiAiFed ( 1523): java.lang.IllegalArgumentException: Unsupported response code3
10-22 12:35:41.494 W/AiAiFed ( 1523): java.lang.IllegalArgumentException: Unsupported response code3
10-22 12:35:41.853 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:41.889 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:41.999 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.006 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.009 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.015 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.020 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.026 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.026 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.026 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.027 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.038 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.072 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.098 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.206 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.214 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.230 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.269 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.274 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.287 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.289 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:42.605 W/PhenotypeRegOp( 3111): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 12:35:43.009 E/RecoverySnapshotStorage(  508): Error reading snapshot for 10130 from disk
10-22 12:35:43.009 E/RecoverySnapshotStorage(  508): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10130.xml: open failed: ENOENT (No such file or directory)
10-22 12:35:43.009 E/RecoverySnapshotStorage(  508): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:35:43.011 E/keystore2(  146):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 12:35:43.012 W/RecoverableKeyStoreGms( 3111): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 12:35:43.012 W/RecoverableKeyStoreGms( 3111): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 12:35:43.012 W/RecoverableKeyStoreGms( 3111): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 12:35:43.012 W/RecoverableKeyStoreGms( 3111): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 12:35:43.012 W/RecoverableKeyStoreGms( 3111): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 12:35:43.012 W/RecoverableKeyStoreGms( 3111): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 12:35:43.012 W/RecoverableKeyStoreGms( 3111): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 12:35:43.012 W/RecoverableKeyStoreGms( 3111): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 12:35:45.134 E/PhenotypeFlagCommitter( 3111): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 12:35:45.471 E/A       ( 1603): onError
10-22 12:35:45.472 E/cr_CronetUrlRequestContext( 1603): Exception in upload method
10-22 12:35:45.472 E/cr_CronetUrlRequestContext( 1603): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-22 12:35:46.063 W/PeoplePU( 3111): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 12:35:46.063 W/PeoplePU( 3111): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 12:35:46.063 W/PeoplePU( 3111): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 12:35:46.063 W/PeoplePU( 3111): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 12:35:46.063 W/PeoplePU( 3111): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 12:35:46.063 W/PeoplePU( 3111): Caused by: android.os.RemoteException: Remote stack trace:
10-22 12:35:46.109 W/PeoplePU( 3111): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-22 12:35:46.435 E/enyj    ( 3111): java.lang.RuntimeException: ManagedChannel allocation site
10-22 12:35:46.503 E/enyj    ( 3111): java.lang.RuntimeException: ManagedChannel allocation site
10-22 12:35:47.140 I/SemanticLocation( 4109): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 12:35:47.140 I/SemanticLocation( 4109): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:35:47.308 I/SemanticLocation( 4109): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 12:35:47.308 I/SemanticLocation( 4109): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:35:47.493 W/Conscrypt( 3111): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:35:47.773 W/Conscrypt( 3111): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:35:48.314 W/ModernMediaScanner( 1520): Failed to visit /data/data/com.android.providers.downloads/cache/ifw-empty-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/ifw-empty-metadata.txt
10-22 12:35:48.358 W/ModernMediaScanner( 1520): Failed to visit /data/data/com.android.providers.downloads/cache/ifw-empty.xml: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/ifw-empty.xml
10-22 12:35:48.444 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:48.476 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:48.480 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:48.533 W/ModernMediaScanner( 1520): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 12:35:48.690 W/ModernMediaScanner( 1520): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 12:35:48.889 W/ModernMediaScanner( 1520): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-metadata.txt
10-22 12:35:48.971 E/PhenotypeFlagCommitter( 3111): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 12:35:49.098 W/ModernMediaScanner( 1520): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-pins.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-pins.txt
10-22 12:35:49.182 E/RecoverySnapshotStorage(  508): Error reading snapshot for 10130 from disk
10-22 12:35:49.182 E/RecoverySnapshotStorage(  508): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10130.xml: open failed: ENOENT (No such file or directory)
10-22 12:35:49.182 E/RecoverySnapshotStorage(  508): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:35:49.187 E/keystore2(  146):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 12:35:49.188 W/RecoverableKeyStoreGms( 3111): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 12:35:49.188 W/RecoverableKeyStoreGms( 3111): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 12:35:49.188 W/RecoverableKeyStoreGms( 3111): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 12:35:49.188 W/RecoverableKeyStoreGms( 3111): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 12:35:49.188 W/RecoverableKeyStoreGms( 3111): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 12:35:49.188 W/RecoverableKeyStoreGms( 3111): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 12:35:49.188 W/RecoverableKeyStoreGms( 3111): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 12:35:49.188 W/RecoverableKeyStoreGms( 3111): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 12:35:49.290 W/ModernMediaScanner( 1520): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt
10-22 12:35:49.306 W/ModernMediaScanner( 1520): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt
10-22 12:35:49.436 W/NetworkScheduler( 4109): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 12:35:50.008 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:50.332 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:50.339 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:50.343 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:50.345 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:50.353 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:50.438 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:50.447 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:50.638 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:50.640 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:51.189 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:51.209 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:52.837 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:53.115 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:53.121 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:53.122 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:53.123 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:53.124 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:53.128 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:53.132 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:53.133 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:53.135 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:53.135 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:53.136 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:53.137 E/NotificationListeners(  508): android.os.DeadObjectException
10-22 12:35:56.445 W/ModernMediaScanner( 1520): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 12:35:56.743 W/MediaProvider( 1520): java.io.IOException: Failed to update quota type for /storage/emulated/0/Android
10-22 12:35:56.756 W/MediaProvider( 1520): java.io.IOException: Failed to update quota type for /storage/emulated/0/Android/media
10-22 12:36:01.204 W/A       ( 1603): Exception while fetching versionCode for package[com.google.android.apps.tv.dreamx].
10-22 12:36:01.204 W/A       ( 1603): android.content.pm.PackageManager$NameNotFoundException: com.google.android.apps.tv.dreamx
10-22 12:36:01.211 W/A       ( 1603): Exception while fetching versionCode for package[com.google.android.apps.tv.launcherx].
10-22 12:36:01.211 W/A       ( 1603): android.content.pm.PackageManager$NameNotFoundException: com.google.android.apps.tv.launcherx
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 843 packages, and audited 844 packages in 15s

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
total 103924
drwxr-xr-x  2 runner runner      4096 Oct 22 12:31 .
drwxr-xr-x 14 runner runner      4096 Oct 22 12:31 ..
-rw-r--r--  1 runner runner 106406806 Oct 22 12:31 ergo-1.0.0-build27.apk
```

## Gradle
```
999:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1041:BUILD SUCCESSFUL in 5m 17s
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
> Task :app:buildCMakeRelWithDebInfo[arm64-v8a]
> Task :react-native-worklets:bundleReleaseAar
> Task :react-native-worklets:mergeReleaseResources FROM-CACHE
> Task :react-native-worklets:verifyReleaseResources FROM-CACHE
> Task :react-native-worklets:assembleRelease
> Task :app:buildCMakeRelWithDebInfo[x86_64]
> Task :app:generateReleaseResValues
> Task :app:generateReleaseResources FROM-CACHE
> Task :app:processReleaseGoogleServices FROM-CACHE
> Task :app:packageReleaseResources
> Task :app:mergeReleaseNativeLibs
> Task :app:processReleaseNavigationResources FROM-CACHE
> Task :app:stripReleaseDebugSymbols
> Task :app:parseReleaseLocalResources
> Task :app:extractReleaseNativeSymbolTables FROM-CACHE
> Task :app:generateReleaseRFile FROM-CACHE
> Task :app:mergeReleaseNativeDebugMetadata
> Task :app:javaPreCompileRelease FROM-CACHE
> Task :app:checkReleaseAarMetadata
> Task :app:mapReleaseSourceSetPaths
> Task :app:compileReleaseNavigationResources FROM-CACHE
> Task :app:mergeReleaseResources
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

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:compileReleaseJavaWithJavac
> Task :app:desugarReleaseFileDependencies FROM-CACHE
> Task :app:mergeReleaseStartupProfile
> Task :app:mergeExtDexRelease FROM-CACHE
> Task :app:processReleaseResources
> Task :app:dexBuilderRelease
> Task :app:mergeReleaseArtProfile
> Task :app:mergeReleaseGlobalSynthetics FROM-CACHE
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseAssets
> Task :app:compressReleaseAssets
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
> Task :app:generateReleaseLintVitalReportModel
> Task :app:mergeDexRelease
> Task :app:compileReleaseArtProfile
> Task :app:processReleaseJavaRes
> Task :app:mergeReleaseJavaResource
> Task :app:optimizeReleaseResources
> Task :app:collectReleaseDependencies
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease
> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :app:lintVitalAnalyzeRelease
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792671988598.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 5m 17s
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
