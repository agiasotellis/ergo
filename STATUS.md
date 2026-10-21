# Android build 14: success

Disk: /dev/root        72G   57G   15G  80% /

- Commit: e601afd6cd365e0f9a99bb7d2d1165c5d924e627
- Run: https://github.com/agiasotellis/ergo/actions/runs/39666030419
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-14

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
    total 264628
    drwxr-xr-x  2 runner runner      4096 Oct 21 20:31 .
    drwxr-xr-x 13 runner runner      4096 Oct 21 20:31 ..
    -rw-r--r--  1 runner runner 101510429 Oct 21 20:31 ergo-1.0.0-build14.aab
    -rw-r--r--  1 runner runner 169451070 Oct 21 20:31 ergo-1.0.0-build14.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-21 20:34:57.052 D/AndroidRuntime( 4129): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-21 20:34:57.060 I/AndroidRuntime( 4129): Using default boot image
10-21 20:34:57.060 I/AndroidRuntime( 4129): Leaving lock profiling enabled
10-21 20:34:57.287 D/AndroidRuntime( 4129): Calling main entry com.android.commands.monkey.Monkey
10-21 20:34:58.233 I/AndroidRuntime( 4129): VM exiting with result code 0.

=== React Native / Expo ===
10-21 20:35:36.518 I/SemanticLocation( 4409): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/default_model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 20:35:36.518 I/SemanticLocation( 4409): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 20:35:36.586 W/Conscrypt( 4409): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 20:35:36.686 I/SemanticLocation( 4409): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 20:35:36.686 I/SemanticLocation( 4409): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 20:35:36.805 W/PhenotypeRegOp( 2928): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 20:35:36.971 E/RecoverySnapshotStorage(  507): Error reading snapshot for 10131 from disk
10-21 20:35:36.971 E/RecoverySnapshotStorage(  507): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-21 20:35:36.971 E/RecoverySnapshotStorage(  507): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 20:35:36.976 E/keystore2(  146):     3: Error::Rc(r#SYSTEM_ERROR)
10-21 20:35:36.978 W/RecoverableKeyStoreGms( 2928): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-21 20:35:36.978 W/RecoverableKeyStoreGms( 2928): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-21 20:35:36.978 W/RecoverableKeyStoreGms( 2928): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-21 20:35:36.978 W/RecoverableKeyStoreGms( 2928): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-21 20:35:36.978 W/RecoverableKeyStoreGms( 2928): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-21 20:35:36.978 W/RecoverableKeyStoreGms( 2928): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 20:35:36.978 W/RecoverableKeyStoreGms( 2928): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 20:35:36.978 W/RecoverableKeyStoreGms( 2928): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 20:35:37.444 I/SemanticLocation( 4409): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 20:35:37.444 I/SemanticLocation( 4409): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 20:35:37.447 W/SP.AiAi ( 1532): Error downloading: manifests:webref-2-en-us-19071200
10-21 20:35:39.265 E/PhenotypeFlagCommitter( 2928): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 20:35:39.704 W/PeoplePU( 2928): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-21 20:35:39.704 W/PeoplePU( 2928): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-21 20:35:39.704 W/PeoplePU( 2928): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 20:35:39.704 W/PeoplePU( 2928): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 20:35:39.704 W/PeoplePU( 2928): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 20:35:39.704 W/PeoplePU( 2928): Caused by: android.os.RemoteException: Remote stack trace:
10-21 20:35:39.711 W/PeoplePU( 2928): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-21 20:35:40.306 E/enyj    ( 2928): java.lang.RuntimeException: ManagedChannel allocation site
10-21 20:35:40.309 E/enyj    ( 2928): java.lang.RuntimeException: ManagedChannel allocation site
10-21 20:35:40.754 I/SemanticLocation( 4409): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 20:35:40.754 I/SemanticLocation( 4409): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 20:35:41.366 I/SemanticLocation( 4409): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 20:35:41.366 I/SemanticLocation( 4409): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 20:35:42.049 W/Conscrypt( 2928): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 20:35:42.269 W/Conscrypt( 2928): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 20:35:42.572 W/AiAiAutofill( 1532): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-21 20:35:43.031 E/PhenotypeFlagCommitter( 2928): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 20:35:43.780 E/RecoverySnapshotStorage(  507): Error reading snapshot for 10131 from disk
10-21 20:35:43.780 E/RecoverySnapshotStorage(  507): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-21 20:35:43.780 E/RecoverySnapshotStorage(  507): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 20:35:43.784 E/keystore2(  146):     3: Error::Rc(r#SYSTEM_ERROR)
10-21 20:35:43.824 W/RecoverableKeyStoreGms( 2928): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-21 20:35:43.824 W/RecoverableKeyStoreGms( 2928): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-21 20:35:43.824 W/RecoverableKeyStoreGms( 2928): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-21 20:35:43.824 W/RecoverableKeyStoreGms( 2928): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-21 20:35:43.824 W/RecoverableKeyStoreGms( 2928): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-21 20:35:43.824 W/RecoverableKeyStoreGms( 2928): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 20:35:43.824 W/RecoverableKeyStoreGms( 2928): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 20:35:43.824 W/RecoverableKeyStoreGms( 2928): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 20:35:43.998 W/AiAiAutofill( 1532): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-21 20:35:44.079 W/ModernMediaScanner( 1551): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-metadata.txt
10-21 20:35:44.153 W/ModernMediaScanner( 1551): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-pins.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-pins.txt
10-21 20:35:44.222 W/NetworkScheduler( 4409): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-21 20:35:44.237 W/ModernMediaScanner( 1551): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt
10-21 20:35:44.265 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:44.266 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:44.268 W/ModernMediaScanner( 1551): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt
10-21 20:35:44.347 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:44.421 W/AiAiAutofill( 1532): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-21 20:35:44.761 W/AiAiAutofill( 1532): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-21 20:35:44.903 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:45.217 W/AiAiFed ( 1532): java.lang.IllegalArgumentException: Unsupported response code3
10-21 20:35:46.387 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:46.397 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:46.399 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:46.400 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:46.401 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:46.882 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:46.885 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:47.050 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:47.059 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:47.071 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:47.072 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:47.077 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:47.098 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:47.100 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:47.117 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:47.125 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:47.725 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:47.733 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.335 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.366 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.696 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.720 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.722 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.722 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.726 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.726 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.730 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.733 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.734 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.735 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.735 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.736 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.736 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.739 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.739 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.742 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.742 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:48.743 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:49.281 W/ModernMediaScanner( 1551): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-21 20:35:49.297 W/ModernMediaScanner( 1551): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-21 20:35:49.602 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:49.604 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:49.947 E/NotificationListeners(  507): android.os.DeadObjectException
10-21 20:35:59.967 W/CorpusConfigHelper( 4673): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-21 20:35:59.967 W/CorpusConfigHelper( 4673): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-21 20:36:00.098 E/VS.BluetoothShim( 1554): Error locating SCO method
10-21 20:36:00.098 E/VS.BluetoothShim( 1554): java.lang.NoSuchMethodException: android.bluetooth.BluetoothHeadset.startScoUsingVirtualVoiceCall [class android.bluetooth.BluetoothDevice]
10-21 20:36:00.458 W/CorpusConfigHelper( 4673): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-21 20:36:00.458 W/CorpusConfigHelper( 4673): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-21 20:36:00.937 E/ApplicationPropertiesBu( 4673): Error when converting version: messages.android_20230529_03_RC01_alldpi.x86_64.phone
10-21 20:36:00.937 E/ApplicationPropertiesBu( 4673): java.lang.NumberFormatException: For input string: "messages"
10-21 20:36:00.972 W/A       ( 4673): Exception while fetching versionCode for package[com.google.android.apps.tv.dreamx].
10-21 20:36:00.972 W/A       ( 4673): android.content.pm.PackageManager$NameNotFoundException: com.google.android.apps.tv.dreamx
10-21 20:36:00.987 W/A       ( 4673): Exception while fetching versionCode for package[com.google.android.apps.tv.launcherx].
10-21 20:36:00.987 W/A       ( 4673): android.content.pm.PackageManager$NameNotFoundException: com.google.android.apps.tv.launcherx
10-21 20:36:01.880 W/RingtonePlayer( 4714): java.io.IOException: setDataSource failed.: status=0x80000000
10-21 20:36:02.109 W/ModernMediaScanner( 1551): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-21 20:36:02.183 W/MediaProvider( 1551): java.io.IOException: Failed to update quota type for /storage/emulated/0/Android
10-21 20:36:02.192 W/MediaProvider( 1551): java.io.IOException: Failed to update quota type for /storage/emulated/0/Android/media
10-21 20:36:02.377 W/AsyncOperation( 4409): OperationException[Status{statusCode=Stale snapshot for com.google.android.libraries.consentverifier#com.google.android.googlequicksearchbox(change count changed - expected 2  but was 1), resolution=null}]
10-21 20:36:04.680 E/A       ( 4673): onError
10-21 20:36:05.797 E/PhenotypeFlagCommitter( 4409): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 20:36:06.943 W/AsyncOperation( 4409): OperationException[Status{statusCode=Stale snapshot for com.google.android.inputmethod.latin#com.google.android.inputmethod.latin(change count changed - expected 2  but was 1), resolution=null}]
10-21 20:36:07.140 W/CorpusConfigHelper( 4673): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-21 20:36:07.140 W/CorpusConfigHelper( 4673): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-21 20:36:09.110 W/CorpusConfigHelper( 4673): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-21 20:36:09.110 W/CorpusConfigHelper( 4673): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-21 20:36:11.021 W/AsyncOperation( 4409): OperationException[Status{statusCode=Stale snapshot for com.google.android.googlequicksearchbox(change count changed - expected 3  but was 2), resolution=null}]
10-21 20:36:11.075 W/AsyncOperation( 4409): OperationException[Status{statusCode=Stale snapshot for com.google.android.libraries.user.profile.photopicker#com.google.android.apps.youtube.music(change count changed - expected 2  but was 1), resolution=null}]
10-21 20:36:11.499 W/PeoplePU( 2928): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-21 20:36:11.501 W/PeoplePU( 2928): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-21 20:36:11.501 W/PeoplePU( 2928): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-21 20:36:11.501 W/PeoplePU( 2928): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 20:36:11.501 W/PeoplePU( 2928): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 20:36:11.501 W/PeoplePU( 2928): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 20:36:11.501 W/PeoplePU( 2928): Caused by: android.os.RemoteException: Remote stack trace:
10-21 20:36:11.502 W/PeoplePU( 2928): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-21 20:36:11.502 W/PeoplePU( 2928): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-21 20:36:11.502 W/PeoplePU( 2928): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 20:36:11.502 W/PeoplePU( 2928): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 20:36:11.502 W/PeoplePU( 2928): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 20:36:11.502 W/PeoplePU( 2928): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-21 20:36:11.502 W/PeoplePU( 2928): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-21 20:36:11.502 W/PeoplePU( 2928): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 20:36:11.502 W/PeoplePU( 2928): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 20:36:11.502 W/PeoplePU( 2928): 	at android.os.Parcel.readException(Parcel.java:2966)
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 833 packages, and audited 834 packages in 34s

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
android/app/build/outputs/bundle/release/app-release.aab
total 264620
drwxr-xr-x  2 runner runner      4096 Oct 21 20:31 .
drwxr-xr-x 13 runner runner      4096 Oct 21 20:31 ..
-rw-r--r--  1 runner runner 101510429 Oct 21 20:31 ergo-1.0.0-build14.aab
-rw-r--r--  1 runner runner 169451070 Oct 21 20:31 ergo-1.0.0-build14.apk
```

## Gradle
```
289:w: file:///home/runner/work/ergo/ergo/node_modules/@maplibre/maplibre-react-native/android/src/main/java/org/maplibre/reactnative/components/AbstractEvent.kt:16:25 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
315:Note: Some input files use or override a deprecated API.
316:Note: Recompile with -Xlint:deprecation for details.
337:Note: Some input files use or override a deprecated API.
338:Note: Recompile with -Xlint:deprecation for details.
339:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-google-signin/google-signin/android/src/main/java/com/reactnativegooglesignin/RNGoogleSigninModule.java uses unchecked or unsafe operations.
340:Note: Recompile with -Xlint:unchecked for details.
368:Note: Some input files use or override a deprecated API.
369:Note: Recompile with -Xlint:deprecation for details.
370:Note: Some input files use unchecked or unsafe operations.
371:Note: Recompile with -Xlint:unchecked for details.
404:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:83:17 'constructor(name: String, className: String, canOverrideExistingModule: Boolean, needsEagerInit: Boolean, hasConstants: Boolean, isCxxModule: Boolean, isTurboModule: Boolean): ReactModuleInfo' is deprecated. This constructor is deprecated and will be removed in the future. Use ReactModuleInfo(String, String, boolean, boolean, boolean, boolean)].
441:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/gamma/modals/formsheet/FormSheetContentView.kt:39:33 'fun getEventDispatcher(context: ReactContext, uiManagerType: Int): EventDispatcher?' is deprecated. UIManagerType is no longer needed.
544:Note: Some input files use or override a deprecated API.
545:Note: Recompile with -Xlint:deprecation for details.
561:w: file:///home/runner/work/ergo/ergo/node_modules/@expo/dom-webview/android/src/main/java/expo/modules/webview/DomWebView.kt:254:18 'fun executeOnJavaScriptThread(runnable: Runnable): Unit' is deprecated. Use RuntimeContext.schedule instead.
604:Note: Some input files use or override a deprecated API.
605:Note: Recompile with -Xlint:deprecation for details.
606:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-async-storage/async-storage/android/src/javaPackage/java/com/reactnativecommunity/asyncstorage/AsyncStoragePackage.java uses unchecked or unsafe operations.
607:Note: Recompile with -Xlint:unchecked for details.
618:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-masked-view/masked-view/android/src/main/java/org/reactnative/maskedview/RNCMaskedViewPackage.java uses or overrides a deprecated API.
619:Note: Recompile with -Xlint:deprecation for details.
1126:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NodesManager.kt:58:95 'fun resolveCustomDirectEventName(eventName: String): String?' is deprecated.
1127:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NodesManager.kt:232:29 'fun receiveEvent(surfaceId: Int, targetTag: Int, eventName: String, canCoalesceEvent: Boolean, customCoalesceKey: Int, params: WritableMap?, category: Int): Unit' is deprecated. Use the overload with eventTimestamp parameter instead.
1208:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1268:BUILD SUCCESSFUL in 31m 52s
---
> Task :react-native-gesture-handler:compileReleaseJavaWithJavac
> Task :react-native-gesture-handler:bundleLibRuntimeToDirRelease
> Task :react-native-reanimated:bundleLibRuntimeToDirRelease
> Task :react-native-gesture-handler:bundleLibCompileToJarRelease
> Task :react-native-reanimated:writeReleaseAarMetadata
> Task :react-native-reanimated:extractDeepLinksRelease
> Task :react-native-reanimated:processReleaseManifest
> Task :react-native-reanimated:mapReleaseSourceSetPaths
> Task :react-native-reanimated:compileReleaseLibraryResources
> Task :react-native-reanimated:prepareReleaseArtProfile
> Task :react-native-gesture-handler:bundleLibRuntimeToJarRelease
> Task :react-native-reanimated:bundleLibRuntimeToJarRelease
> Task :react-native-reanimated:generateReleaseAssets UP-TO-DATE
> Task :react-native-reanimated:mergeReleaseAssets
> Task :react-native-gesture-handler:processReleaseJavaRes
> Task :react-native-gesture-handler:createFullJarRelease
> Task :react-native-reanimated:processReleaseJavaRes
> Task :react-native-reanimated:createFullJarRelease
> Task :react-native-reanimated:extractProguardFiles
> Task :react-native-reanimated:generateReleaseLintModel
> Task :react-native-reanimated:prepareLintJarForPublish
> Task :react-native-gesture-handler:generateReleaseLintModel
> Task :react-native-gesture-handler:checkReleaseAarMetadata
> Task :react-native-gesture-handler:stripReleaseDebugSymbols
> Task :react-native-gesture-handler:copyReleaseJniLibsProjectAndLocalJars
> Task :react-native-gesture-handler:extractReleaseAnnotations
> Task :react-native-gesture-handler:mergeReleaseGeneratedProguardFiles
> Task :react-native-gesture-handler:mergeReleaseConsumerProguardFiles
> Task :react-native-gesture-handler:mergeReleaseJavaResource
> Task :react-native-gesture-handler:syncReleaseLibJars
> Task :react-native-gesture-handler:bundleReleaseLocalLintAar
> Task :react-native-reanimated:checkReleaseAarMetadata
> Task :react-native-reanimated:stripReleaseDebugSymbols
> Task :react-native-reanimated:copyReleaseJniLibsProjectAndLocalJars
> Task :react-native-reanimated:extractDeepLinksForAarRelease
> Task :react-native-reanimated:extractReleaseAnnotations
> Task :react-native-reanimated:mergeReleaseGeneratedProguardFiles
> Task :react-native-reanimated:mergeReleaseConsumerProguardFiles
> Task :react-native-reanimated:mergeReleaseJavaResource
> Task :react-native-reanimated:syncReleaseLibJars
> Task :react-native-reanimated:bundleReleaseLocalLintAar
> Task :react-native-reanimated:writeReleaseLintModelMetadata
> Task :react-native-gesture-handler:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-reanimated:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-gesture-handler:generateReleaseLintVitalModel
> Task :react-native-reanimated:generateReleaseLintVitalModel
> Task :react-native-gesture-handler:bundleReleaseAar
> Task :react-native-gesture-handler:verifyReleaseResources
> Task :react-native-gesture-handler:assembleRelease
> Task :react-native-reanimated:bundleReleaseAar
> Task :react-native-reanimated:mergeReleaseResources
> Task :react-native-reanimated:verifyReleaseResources
> Task :react-native-reanimated:assembleRelease
> Task :app:buildCMakeRelWithDebInfo[armeabi-v7a]
> Task :app:buildCMakeRelWithDebInfo[x86]
> Task :app:buildCMakeRelWithDebInfo[x86_64]

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:compileReleaseJavaWithJavac
> Task :app:checkReleaseAarMetadata
> Task :app:mergeReleaseNativeLibs

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
> Task :app:stripReleaseDebugSymbols
> Task :app:extractReleaseNativeSymbolTables
> Task :app:processReleaseResources
> Task :app:dexBuilderRelease
> Task :app:mergeReleaseNativeDebugMetadata
> Task :app:mergeDexRelease
> Task :app:mergeReleaseArtProfile
> Task :app:mergeReleaseAssets
> Task :app:mergeReleaseGlobalSynthetics
> Task :app:compressReleaseAssets
> Task :app:generateReleaseLintVitalReportModel
> Task :app:compileReleaseArtProfile
> Task :app:processReleaseJavaRes
> Task :app:mergeReleaseJavaResource
> Task :app:optimizeReleaseResources
> Task :app:processApplicationManifestReleaseForBundle
> Task :app:lintVitalAnalyzeRelease
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :app:bundleReleaseResources
> Task :app:buildReleasePreBundle
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
> Task :app:packageReleaseBundle
> Task :app:signReleaseBundle
> Task :app:produceReleaseBundleIdeListingFile
> Task :app:createReleaseBundleListingFileRedirect
> Task :app:bundleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792612790773.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 31m 52s
774 actionable tasks: 774 executed
```
