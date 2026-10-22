# Android build 30: success

Disk: /dev/root        72G   61G   12G  84% /

- Commit: d61f5171ca18383023d38401abac2eee68e4f22a
- Run: https://github.com/agiasotellis/ergo/actions/runs/39808859412
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-30

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
    total 103948
    drwxr-xr-x  2 runner runner      4096 Oct 22 16:03 .
    drwxr-xr-x 14 runner runner      4096 Oct 22 16:03 ..
    -rw-r--r--  1 runner runner 106426858 Oct 22 16:03 ergo-1.0.0-build30.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-22 16:06:53.420 D/AndroidRuntime( 3257): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-22 16:06:53.437 I/AndroidRuntime( 3257): Using default boot image
10-22 16:06:53.439 I/AndroidRuntime( 3257): Leaving lock profiling enabled
10-22 16:06:53.806 D/AndroidRuntime( 3257): Calling main entry com.android.commands.monkey.Monkey
10-22 16:06:55.501 I/AndroidRuntime( 3257): VM exiting with result code 0.

=== React Native / Expo ===
10-22 16:07:26.722 W/RecoverableKeyStoreGms( 1671): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 16:07:26.722 W/RecoverableKeyStoreGms( 1671): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 16:07:27.371 W/SliceDataConverter( 1008): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.telephony.CallsDefaultSubscriptionController
10-22 16:07:27.371 W/SliceDataConverter( 1008): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.telephony.CallsDefaultSubscriptionController.<init> [class android.content.Context, class java.lang.String]
10-22 16:07:27.383 E/SystemServiceRegistry( 1008): android.os.ServiceManager$ServiceNotFoundException: No service published for: ethernet
10-22 16:07:27.387 W/SliceDataConverter( 1008): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.fuelgauge.batteryusage.BatteryChartPreferenceController
10-22 16:07:27.387 W/SliceDataConverter( 1008): Caused by: java.lang.NoSuchMethodException: com.android.settings.fuelgauge.batteryusage.BatteryChartPreferenceController.<init> [class android.content.Context, class java.lang.String]
10-22 16:07:27.388 W/SliceDataConverter( 1008): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 16:07:27.388 W/SliceDataConverter( 1008): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 16:07:27.388 W/SliceDataConverter( 1008): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 16:07:27.392 W/SliceDataConverter( 1008): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 16:07:27.392 W/SliceDataConverter( 1008): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 16:07:27.392 W/SliceDataConverter( 1008): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 16:07:27.500 W/SliceDataConverter( 1008): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.accessibility.VibrationMainSwitchPreferenceController
10-22 16:07:27.500 W/SliceDataConverter( 1008): Caused by: java.lang.reflect.InvocationTargetException
10-22 16:07:27.500 W/SliceDataConverter( 1008): Caused by: java.lang.RuntimeException: Can't create handler inside thread Thread[binder:1008_1,5,main] that has not called Looper.prepare()
10-22 16:07:27.528 W/SliceDataConverter( 1008): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.NetworkProviderSimsCategoryController
10-22 16:07:27.528 W/SliceDataConverter( 1008): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.NetworkProviderSimsCategoryController.<init> [class android.content.Context, class java.lang.String]
10-22 16:07:27.530 W/SliceDataConverter( 1008): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 16:07:27.530 W/SliceDataConverter( 1008): Caused by: java.lang.ClassNotFoundException: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 16:07:27.530 W/SliceDataConverter( 1008): Caused by: java.lang.ClassNotFoundException: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 16:07:27.537 E/HardwareInfoFeatureProviderImpl( 1008): java.lang.NumberFormatException: For input string: "E"
10-22 16:07:27.584 W/PhenotypeRegOp( 1671): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:07:27.595 W/SliceDataConverter( 1008): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.telephony.CallsDefaultSubscriptionController
10-22 16:07:27.595 W/SliceDataConverter( 1008): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.telephony.CallsDefaultSubscriptionController.<init> [class android.content.Context, class java.lang.String]
10-22 16:07:27.608 W/SliceDataConverter( 1008): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.credentials.CredentialManagerPreferenceController
10-22 16:07:27.608 W/SliceDataConverter( 1008): Caused by: java.lang.reflect.InvocationTargetException
10-22 16:07:27.608 W/SliceDataConverter( 1008): Caused by: java.lang.RuntimeException: Can't create handler inside thread Thread[binder:1008_1,5,main] that has not called Looper.prepare()
10-22 16:07:27.732 W/Conscrypt( 4124): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:07:27.815 W/Conscrypt( 4124): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:07:27.915 W/NetworkScheduler( 4124): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 16:07:27.990 W/GCM-GMS ( 1671): Failed to get registration: java.io.IOException: QUOTA_EXCEEDED
10-22 16:07:28.320 I/SemanticLocation( 4124): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/default_model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 16:07:28.320 I/SemanticLocation( 4124): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 16:07:28.426 I/SemanticLocation( 4124): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 16:07:28.426 I/SemanticLocation( 4124): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 16:07:28.587 W/FontLog ( 4124): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 120762 nanoseconds delay) for dlrl@415903a[status=PENDING]
10-22 16:07:28.591 D/StrictMode( 3924): 	at android.os.Parcel.readExceptionCode(Parcel.java:3002)
10-22 16:07:28.591 D/StrictMode( 3924): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-22 16:07:28.591 D/StrictMode( 3924): 	at android.os.Parcel.readExceptionCode(Parcel.java:3002)
10-22 16:07:28.591 D/StrictMode( 3924): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-22 16:07:28.591 D/StrictMode( 3924): 	at android.os.Parcel.readExceptionCode(Parcel.java:3002)
10-22 16:07:28.591 D/StrictMode( 3924): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-22 16:07:28.668 W/FontLog ( 4124): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 268563 nanoseconds delay) for dlrl@bcc6765[status=PENDING]
10-22 16:07:28.676 W/Bugle   ( 4365): java.lang.RuntimeException: fetchFonts result is not OK. (2)
10-22 16:07:28.874 W/Conscrypt( 4124): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:07:29.047 I/SemanticLocation( 4124): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 16:07:29.047 I/SemanticLocation( 4124): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 16:07:29.083 W/Conscrypt( 1671): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:07:29.083 W/Conscrypt( 4124): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:07:29.207 W/Conscrypt( 1671): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:07:29.279 W/GCM-GMS ( 1671): Failed to get registration: java.io.IOException: QUOTA_EXCEEDED
10-22 16:07:29.322 W/SP.AiAi ( 1515): Error downloading: manifests:webref-2-en-us-19071200
10-22 16:07:29.753 W/RcsClientLib( 4365): Error while stopping RCS engine.
10-22 16:07:29.753 W/RcsClientLib( 4365): java.lang.IllegalStateException: JibeService Not Initialized
10-22 16:07:29.753 W/RcsClientLib( 4365): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 16:07:29.753 W/RcsClientLib( 4365): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 16:07:29.753 W/RcsClientLib( 4365): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 16:07:29.753 W/RcsClientLib( 4365): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 16:07:29.753 W/RcsClientLib( 4365): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 16:07:29.754 W/RcsClientLib( 4365): Error while stopping RCS engine.
10-22 16:07:29.754 W/RcsClientLib( 4365): java.lang.IllegalStateException: JibeService Not Initialized
10-22 16:07:29.754 W/RcsClientLib( 4365): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 16:07:29.754 W/RcsClientLib( 4365): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 16:07:29.754 W/RcsClientLib( 4365): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 16:07:29.754 W/RcsClientLib( 4365): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 16:07:29.754 W/RcsClientLib( 4365): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 16:07:30.262 E/BugleRcsEngine( 4671): [2] JibeService.onDestroy: JibeService: onDestroy() unregister factory exception: java.lang.IllegalArgumentException: Receiver not registered: com.google.android.ims.receiver.sip.DebugOptionsReceiver@30c099e
10-22 16:07:30.917 E/bwel    ( 4124): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:07:31.104 E/RecoverySnapshotStorage(  513): Error reading snapshot for 10123 from disk
10-22 16:07:31.104 E/RecoverySnapshotStorage(  513): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10123.xml: open failed: ENOENT (No such file or directory)
10-22 16:07:31.104 E/RecoverySnapshotStorage(  513): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 16:07:31.109 E/keystore2(  146):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 16:07:31.129 W/RecoverableKeyStoreGms( 1671): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 16:07:31.129 W/RecoverableKeyStoreGms( 1671): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 16:07:31.129 W/RecoverableKeyStoreGms( 1671): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 16:07:31.129 W/RecoverableKeyStoreGms( 1671): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 16:07:31.129 W/RecoverableKeyStoreGms( 1671): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 16:07:31.129 W/RecoverableKeyStoreGms( 1671): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 16:07:31.129 W/RecoverableKeyStoreGms( 1671): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 16:07:31.129 W/RecoverableKeyStoreGms( 1671): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 16:07:31.463 W/NetworkScheduler( 4124): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 16:07:34.214 D/StrictMode( 3924): 	at android.os.Parcel.readExceptionCode(Parcel.java:3002)
10-22 16:07:34.214 D/StrictMode( 3924): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-22 16:07:34.214 D/StrictMode( 3924): 	at android.os.Parcel.readExceptionCode(Parcel.java:3002)
10-22 16:07:34.214 D/StrictMode( 3924): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-22 16:07:34.216 W/AiAiFed ( 1515): java.lang.IllegalArgumentException: Unsupported response code3
10-22 16:07:34.264 W/ApkChecksums(  513): android.os.DeadObjectException
10-22 16:07:34.639 W/SP.AiAi ( 1515): Error downloading: manifests:webref-2-en-us-19071200
10-22 16:07:34.897 W/AiAiFed ( 1515): java.lang.IllegalArgumentException: Unsupported response code3
10-22 16:07:37.496 E/A       ( 1727): onError
10-22 16:07:37.521 E/cr_CronetUrlRequestContext( 1727): Exception in upload method
10-22 16:07:37.521 E/cr_CronetUrlRequestContext( 1727): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-22 16:07:37.598 W/PhenotypeRegOp( 1671): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:07:38.302 E/RecoverySnapshotStorage(  513): Error reading snapshot for 10123 from disk
10-22 16:07:38.302 E/RecoverySnapshotStorage(  513): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10123.xml: open failed: ENOENT (No such file or directory)
10-22 16:07:38.302 E/RecoverySnapshotStorage(  513): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 16:07:38.315 E/keystore2(  146):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 16:07:38.316 W/RecoverableKeyStoreGms( 1671): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 16:07:38.316 W/RecoverableKeyStoreGms( 1671): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 16:07:38.316 W/RecoverableKeyStoreGms( 1671): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 16:07:38.316 W/RecoverableKeyStoreGms( 1671): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 16:07:38.316 W/RecoverableKeyStoreGms( 1671): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 16:07:38.316 W/RecoverableKeyStoreGms( 1671): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 16:07:38.316 W/RecoverableKeyStoreGms( 1671): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 16:07:38.316 W/RecoverableKeyStoreGms( 1671): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 16:07:39.343 E/enyj    ( 1671): java.lang.RuntimeException: ManagedChannel allocation site
10-22 16:07:39.410 E/enyj    ( 1671): java.lang.RuntimeException: ManagedChannel allocation site
10-22 16:07:40.389 E/PhenotypeFlagCommitter( 1671): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:07:40.423 W/PeoplePU( 1671): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 16:07:40.423 W/PeoplePU( 1671): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 16:07:40.423 W/PeoplePU( 1671): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 16:07:40.423 W/PeoplePU( 1671): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 16:07:40.423 W/PeoplePU( 1671): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 16:07:40.423 W/PeoplePU( 1671): Caused by: android.os.RemoteException: Remote stack trace:
10-22 16:07:40.480 W/PeoplePU( 1671): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-22 16:07:41.065 W/Conscrypt( 1671): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:07:41.276 W/Conscrypt( 1671): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:07:41.393 I/SemanticLocation( 4124): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 16:07:41.393 I/SemanticLocation( 4124): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 16:07:41.408 W/ModernMediaScanner( 1513): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 16:07:41.440 W/ModernMediaScanner( 1513): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 16:07:41.480 I/SemanticLocation( 4124): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 16:07:41.480 I/SemanticLocation( 4124): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 16:07:41.837 E/PhenotypeFlagCommitter( 1671): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:07:42.860 W/ModernMediaScanner( 1513): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt
10-22 16:07:42.941 W/ModernMediaScanner( 1513): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt
10-22 16:07:43.032 W/ModernMediaScanner( 1513): Failed to visit /data/data/com.android.providers.downloads/cache/ifw-empty-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/ifw-empty-metadata.txt
10-22 16:07:43.039 W/ModernMediaScanner( 1513): Failed to visit /data/data/com.android.providers.downloads/cache/ifw-empty.xml: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/ifw-empty.xml
10-22 16:07:43.093 W/ModernMediaScanner( 1513): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-metadata.txt
10-22 16:07:43.104 W/ModernMediaScanner( 1513): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-pins.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-pins.txt
10-22 16:07:43.267 W/ApkChecksums(  513): android.os.DeadObjectException
10-22 16:07:49.314 W/ModernMediaScanner( 1513): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 16:07:49.562 W/MediaProvider( 1513): java.io.IOException: Failed to update quota type for /storage/emulated/0/Android
10-22 16:07:49.575 W/MediaProvider( 1513): java.io.IOException: Failed to update quota type for /storage/emulated/0/Android/media
10-22 16:07:57.326 W/SP.AiAi ( 1515): Error downloading: manifests:webref-2-en-us-19071200
10-22 16:08:05.494 W/BaseSearchIndex( 1008): Error initial controller
10-22 16:08:05.558 W/BaseSearchIndex( 1008): Error initial controller
10-22 16:08:05.589 W/BaseSearchIndex( 1008): Error initial controller
10-22 16:08:05.602 E/HardwareInfoFeatureProviderImpl( 1008): java.lang.NumberFormatException: For input string: "E"
10-22 16:08:05.708 W/BaseSearchIndex( 1008): Error initial controller
10-22 16:08:05.780 E/HardwareInfoFeatureProviderImpl( 1008): java.lang.NumberFormatException: For input string: "E"
10-22 16:08:05.810 E/SystemServiceRegistry( 1008): android.os.ServiceManager$ServiceNotFoundException: No service published for: ethernet
10-22 16:08:05.904 E/JavaBinder( 1008): *** Uncaught remote exception! Exceptions are not yet supported across processes. Client PID 4072 UID 10118.
10-22 16:08:05.904 E/JavaBinder( 1008): android.database.StaleDataException: Attempted to access a cursor after it has been closed.
10-22 16:08:06.364 E/PhoneInterfaceManager( 1006): isVoNrEnabled: CommandException: com.android.internal.telephony.CommandException: REQUEST_NOT_SUPPORTED
10-22 16:08:06.365 E/PhoneInterfaceManager( 1006): isVoNrEnabled: CommandException: com.android.internal.telephony.CommandException: REQUEST_NOT_SUPPORTED
10-22 16:08:06.687 E/JavaBinder( 1008): *** Uncaught remote exception! Exceptions are not yet supported across processes. Client PID 4072 UID 10118.
10-22 16:08:06.687 E/JavaBinder( 1008): android.database.StaleDataException: Attempted to access a cursor after it has been closed.
10-22 16:08:07.001 W/WifiService(  513): Permission violation - getConfiguredNetworks not allowed for uid=10118, packageName=com.google.android.settings.intelligence, reason=java.lang.SecurityException: UID 10118 has no location permission
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 843 packages, and audited 844 packages in 17s

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
total 103944
drwxr-xr-x  2 runner runner      4096 Oct 22 16:03 .
drwxr-xr-x 14 runner runner      4096 Oct 22 16:03 ..
-rw-r--r--  1 runner runner 106426858 Oct 22 16:03 ergo-1.0.0-build30.apk
```

## Gradle
```
986:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1044:BUILD SUCCESSFUL in 6m
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
> Task :app:mergeReleaseResources
> Task :app:createReleaseCompatibleScreenManifests
> Task :app:extractDeepLinksRelease FROM-CACHE

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:processReleaseMainManifest
/home/runner/work/ergo/ergo/android/app/src/main/AndroidManifest.xml:6:3-88 Warning:
	uses-permission#android.permission.RECORD_AUDIO was tagged at AndroidManifest.xml:6 to remove other declarations but no other declaration present
/home/runner/work/ergo/ergo/android/app/src/main/AndroidManifest.xml Warning:
	provider#expo.modules.filesystem.FileSystemFileProvider@android:authorities was tagged at AndroidManifest.xml:0 to replace other declarations but no other declaration present
/home/runner/work/ergo/ergo/android/app/src/main/AndroidManifest.xml Warning:
	activity#expo.modules.imagepicker.ExpoCropImageActivity@android:exported was tagged at AndroidManifest.xml:0 to replace other declarations but no other declaration present

> Task :app:compileReleaseJavaWithJavac

> Task :app:expoReleaseOverrideMaxSdkConflicts
[33m---------- Expo Max Sdk Override Plugin ----------[0m
[32m>>> No 'android:maxSdkVersion' conflicts found[0m
[33m--------------------------------------------------[0m

> Task :app:processReleaseManifest
> Task :app:desugarReleaseFileDependencies FROM-CACHE
> Task :app:processReleaseManifestForPackage
> Task :app:mergeReleaseStartupProfile
> Task :app:mergeExtDexRelease FROM-CACHE
> Task :app:mergeReleaseArtProfile
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseAssets
> Task :app:compressReleaseAssets
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
> Task :app:processReleaseResources
> Task :app:generateReleaseLintVitalReportModel
> Task :app:dexBuilderRelease
> Task :app:mergeReleaseGlobalSynthetics FROM-CACHE
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
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792684655733.json

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
