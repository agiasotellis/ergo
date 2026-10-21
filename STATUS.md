# Android build 19: success

Disk: /dev/root        72G   58G   15G  81% /

- Commit: 1f0dedb87b2b99bcfc629e2ba096684c002c637d
- Run: https://github.com/agiasotellis/ergo/actions/runs/39684260918
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-19

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
    drwxr-xr-x  2 runner runner      4096 Oct 21 22:38 .
    drwxr-xr-x 14 runner runner      4096 Oct 21 22:38 ..
    -rw-r--r--  1 runner runner 105410951 Oct 21 22:38 ergo-1.0.0-build19.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-21 22:41:13.084 D/AndroidRuntime( 3335): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-21 22:41:13.105 I/AndroidRuntime( 3335): Using default boot image
10-21 22:41:13.105 I/AndroidRuntime( 3335): Leaving lock profiling enabled
10-21 22:41:13.413 D/AndroidRuntime( 3335): Calling main entry com.android.commands.monkey.Monkey
10-21 22:41:14.713 I/AndroidRuntime( 3335): VM exiting with result code 0.

=== React Native / Expo ===
10-21 22:41:46.467 E/dlpn    ( 3528): java.lang.NullPointerException: Attempt to get length of null array
10-21 22:41:46.980 E/constellation( 3065): java.io.IOException: AUTHENTICATION_FAILED
10-21 22:41:47.166 W/Conscrypt( 3065): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:41:49.545 W/ChimeraSrvcProxy( 3528): Failed to read the buffer size file. Using default NullBinder reply size. java.io.FileNotFoundException: /data/user_de/0/com.google.android.gms/files/binder_buffer_size.txt: open failed: ENOENT (No such file or directory)
10-21 22:41:50.026 E/PhenotypeFlagCommitter( 4450): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:41:50.093 I/ChimeraSrvcProxy( 3528): NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl
10-21 22:41:50.264 W/AsyncOperation( 3528): OperationException[Status{statusCode=unknown status code: 29503, resolution=null}]
10-21 22:41:51.353 W/WellbeingSettingsProvid( 2824): java.util.concurrent.TimeoutException: Waited 5000 milliseconds (plus 199543 nanoseconds delay) for lki@3e2a477[status=PENDING, info=[inputFuture=[lkh@a678e4[status=PENDING, setFuture=[ljp@40f214d[status=PENDING, info=[inputFuture=[lki@524d402[status=PENDING, info=[inputFuture=[lki@4d31113[status=PENDING, info=[inputFuture=[lld@4c43f50[status=PENDING, info=[futures=[lki@ab98549[status=PENDING, info=[inputFuture=[lki@7102e4e[status=PENDING, info=[inputFuture=[lmb@e53ab6f[status=PENDING, info=[delegate=[lng@eb6007c[status=PENDING, info=[task=[running=[NOT STARTED YET], propagating=[bwh@38c2d05]]]]]]]], function=[propagating=[bvr@f44e15a]]]]], function=[propagating=[cur@2998f8b]]]]]]]], function=[propagating=[dce@502b46a]]]]], function=[propagating=[bvq@5a0a868]]]]], exceptionType=[class java.lang.Throwable], fallback=[propagating=[bwc@193d9f8]]]]]]], function=[propagating=[bvq@1279481]]]]
10-21 22:41:51.381 I/ChimeraSrvcProxy( 3528): NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to Service without Chimera impl
10-21 22:41:51.606 I/NearbyDiscovery( 3528): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:41:53.736 W/PhenotypeRegOp( 3065): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:41:53.845 W/AlarmManager( 3528): java.lang.IllegalArgumentException: alarm "NetworkLocationLocator" has short window length
10-21 22:41:54.449 W/FileUtils(  511): android.system.ErrnoException: chmod failed: ENOENT (No such file or directory)
10-21 22:41:54.859 W/ConfigFileUtils( 3065): Failed to read asset ChimeraModuleSetList.pb: java.io.FileNotFoundException: ChimeraModuleSetList.pb
10-21 22:41:54.901 W/AlarmManager( 3528): java.lang.IllegalArgumentException: alarm "NetworkLocationLocator" has short window length
10-21 22:41:55.182 W/Conscrypt( 3528): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:41:55.951 W/Looper  ( 3528): java.lang.RuntimeException: Handler (acdu) {24a9d48} sendMessageAtTime() called with no mQueue
10-21 22:41:55.952 W/Looper  ( 3528): java.lang.RuntimeException: Handler (acdu) {24a9d48} sendMessageAtTime() called with no mQueue
10-21 22:41:55.954 W/Looper  ( 3528): java.lang.RuntimeException: Handler (acdu) {24a9d48} sendMessageAtTime() called with no mQueue
10-21 22:41:55.954 W/Looper  ( 3528): java.lang.RuntimeException: Handler (acdu) {24a9d48} sendMessageAtTime() called with no mQueue
10-21 22:41:55.954 W/Looper  ( 3528): java.lang.RuntimeException: Handler (acdu) {24a9d48} sendMessageAtTime() called with no mQueue
10-21 22:41:55.954 W/Looper  ( 3528): java.lang.RuntimeException: Handler (acdu) {24a9d48} sendMessageAtTime() called with no mQueue
10-21 22:41:55.955 W/Looper  ( 3528): java.lang.RuntimeException: Handler (acdu) {24a9d48} sendMessageAtTime() called with no mQueue
10-21 22:41:56.337 W/AlarmManager( 3528): java.lang.IllegalArgumentException: alarm "NetworkLocationLocator" has short window length
10-21 22:41:56.484 W/Looper  ( 3528): java.lang.RuntimeException: Handler (acdu) {b9dcfd9} sendMessageAtTime() called with no mQueue
10-21 22:41:56.486 W/Looper  ( 3528): java.lang.RuntimeException: Handler (acdu) {b9dcfd9} sendMessageAtTime() called with no mQueue
10-21 22:41:56.583 W/SnapshotHandler( 3623): java.io.FileNotFoundException: /data/user/0/com.google.android.googlequicksearchbox/files/phenotype/shared/com.google.android.libraries.notifications#com.google.android.googlequicksearchbox.pb: open failed: ENOENT (No such file or directory)
10-21 22:41:56.583 W/SnapshotHandler( 3623): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 22:41:56.700 I/NearbyDiscovery( 3528): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:41:56.781 W/Conscrypt( 3528): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:41:56.966 E/PhenotypeFlagCommitter( 3065): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:41:57.079 W/SnapshotHandler( 3623): java.io.FileNotFoundException: /data/user/0/com.google.android.googlequicksearchbox/files/phenotype/shared/com.google.android.libraries.notifications.platform#com.google.android.googlequicksearchbox.pb: open failed: ENOENT (No such file or directory)
10-21 22:41:57.079 W/SnapshotHandler( 3623): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 22:41:58.050 W/Icing   ( 3065): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:41:58.162 I/NearbyDiscovery( 3528): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:42:00.667 W/SemanticLocation( 3528): java.util.concurrent.TimeoutException: Waited 5000 milliseconds (plus 299146 nanoseconds delay) for dlnx@19976bd[status=PENDING, info=[function=[bzrs@3b354b2]]]
10-21 22:42:01.557 E/ActivityTaskManager(  511): android.os.DeadObjectException
10-21 22:42:01.610 E/NotificationListeners(  511): android.os.DeadObjectException
10-21 22:42:01.762 E/SystemServiceRegistry(  944): android.os.ServiceManager$ServiceNotFoundException: No service published for: ethernet
10-21 22:42:02.030 E/NotificationListeners(  511): android.os.DeadObjectException
10-21 22:42:02.575 I/SemanticLocation( 3528): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/default_model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 22:42:02.575 I/SemanticLocation( 3528): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 22:42:02.828 W/AlarmManager( 3528): java.lang.IllegalArgumentException: alarm "NetworkLocationLocator" has short window length
10-21 22:42:03.183 I/SemanticLocation( 3528): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 22:42:03.183 I/SemanticLocation( 3528): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 22:42:03.321 E/BatteryInfoBroadcast( 4165): java.lang.SecurityException: Failed to find provider com.google.android.apps.turbo.estimated_time_remaining for user 0; expected to find a valid ContentProvider for this authority
10-21 22:42:03.321 E/BatteryInfoBroadcast( 4165): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3057)
10-21 22:42:03.321 E/BatteryInfoBroadcast( 4165): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 22:42:03.321 E/BatteryInfoBroadcast( 4165): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 22:42:03.321 E/BatteryInfoBroadcast( 4165): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 22:42:03.321 E/BatteryInfoBroadcast( 4165): Caused by: android.os.RemoteException: Remote stack trace:
10-21 22:42:03.343 W/ModernMediaScanner( 1559): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-21 22:42:03.602 W/FontLog ( 3528): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 137766 nanoseconds delay) for dlrl@8f29dd3[status=PENDING]
10-21 22:42:03.607 D/StrictMode( 4425): 	at android.os.Parcel.readExceptionCode(Parcel.java:3002)
10-21 22:42:03.607 D/StrictMode( 4425): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-21 22:42:03.607 D/StrictMode( 4425): 	at android.os.Parcel.readExceptionCode(Parcel.java:3002)
10-21 22:42:03.607 D/StrictMode( 4425): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-21 22:42:03.607 D/StrictMode( 4425): 	at android.os.Parcel.readExceptionCode(Parcel.java:3002)
10-21 22:42:03.607 D/StrictMode( 4425): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-21 22:42:03.844 W/GCM-GMS ( 3065): Failed to get registration: java.io.IOException: AUTHENTICATION_FAILED
10-21 22:42:04.976 I/SemanticLocation( 3528): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 22:42:04.976 I/SemanticLocation( 3528): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 22:42:05.431 W/GCM-GMS ( 3065): Failed to get direct boot token: java.io.IOException: AUTHENTICATION_FAILED
10-21 22:42:06.273 W/PhenotypeRegOp( 3065): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:42:06.291 W/Conscrypt( 3065): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:42:08.008 W/A       ( 3623): Exception while fetching versionCode for package[com.google.android.apps.tv.dreamx].
10-21 22:42:08.008 W/A       ( 3623): android.content.pm.PackageManager$NameNotFoundException: com.google.android.apps.tv.dreamx
10-21 22:42:08.149 W/A       ( 3623): Exception while fetching versionCode for package[com.google.android.apps.tv.launcherx].
10-21 22:42:08.149 W/A       ( 3623): android.content.pm.PackageManager$NameNotFoundException: com.google.android.apps.tv.launcherx
10-21 22:42:08.426 W/Conscrypt( 3065): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:42:09.291 E/bwel    ( 3528): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:42:09.969 E/PhenotypeFlagCommitter( 3065): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:42:12.336 E/SystemServiceRegistry(  944): android.os.ServiceManager$ServiceNotFoundException: No service published for: ethernet
10-21 22:42:13.339 W/Icing   ( 3065): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:42:13.610 W/PeoplePU( 3065): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-21 22:42:13.610 W/PeoplePU( 3065): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-21 22:42:13.610 W/PeoplePU( 3065): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 22:42:13.610 W/PeoplePU( 3065): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 22:42:13.610 W/PeoplePU( 3065): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 22:42:13.610 W/PeoplePU( 3065): Caused by: android.os.RemoteException: Remote stack trace:
10-21 22:42:13.615 W/PeoplePU( 3065): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-21 22:42:13.794 W/FontLog ( 3528): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 239368 nanoseconds delay) for dlrl@d378561[status=PENDING]
10-21 22:42:13.807 D/StrictMode( 4425): 	at android.os.Parcel.readExceptionCode(Parcel.java:3002)
10-21 22:42:13.807 D/StrictMode( 4425): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-21 22:42:13.807 D/StrictMode( 4425): 	at android.os.Parcel.readExceptionCode(Parcel.java:3002)
10-21 22:42:13.807 D/StrictMode( 4425): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-21 22:42:13.952 E/AiAiWallpaperEffectsGen( 4997): java.io.FileNotFoundException: midasnet_mobilenetv2_dptmqn_dec128_full_082421_384_384_fp16_opt.tflite
10-21 22:42:14.444 W/Icing   ( 3065): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:42:14.789 E/enyj    ( 3065): java.lang.RuntimeException: ManagedChannel allocation site
10-21 22:42:14.946 W/Icing   ( 3065): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:42:15.047 I/NearbyDiscovery( 3528): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:42:15.102 W/AiAiFed ( 4997): java.lang.IllegalArgumentException: Unsupported response code3
10-21 22:42:15.500 I/AiAiAdaptiveAudio( 4997): AdaptiveAudio config updated, new config=AdaptiveAudioConfig{shouldEnableAdaptiveAudio=false, shouldBypassQprCheck=false, shouldLimitCalibration=true, shouldShowDebugNotification=false, userSettingDefaultValue=false, crashOnError=true, shouldShowPromoNotification=false, useSilenceDetectorStateBugFix=false}
10-21 22:42:15.608 W/Conscrypt( 3528): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:42:15.970 W/Looper  ( 3528): java.lang.RuntimeException: Handler (acdu) {42d2468} sendMessageAtTime() called with no mQueue
10-21 22:42:16.130 W/AiAiFed ( 4997): java.lang.IllegalArgumentException: Unsupported response code3
10-21 22:42:16.135 W/AiAiFed ( 4997): java.lang.IllegalArgumentException: Unsupported response code3
10-21 22:42:16.180 W/Conscrypt( 3528): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:42:16.928 W/Conscrypt( 3528): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:42:17.438 W/Conscrypt( 3528): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:42:17.537 W/AiAiFed ( 4997): java.lang.IllegalArgumentException: Unsupported response code3
10-21 22:42:18.091 I/SemanticLocation( 3528): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 22:42:18.091 I/SemanticLocation( 3528): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 22:42:18.178 W/GLSUser ( 3528): [AppCertManager] Exception while requesting key: 
10-21 22:42:18.178 W/GLSUser ( 3528): java.io.IOException: Invalid device key response.
10-21 22:42:18.429 E/PhenotypeFlagCommitter( 3065): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 22:42:18.539 W/AlarmManager( 3528): java.lang.IllegalArgumentException: alarm "NetworkLocationLocator" has short window length
10-21 22:42:18.679 W/AiAiFed ( 4997): java.lang.IllegalArgumentException: Unsupported response code3
10-21 22:42:18.723 W/Conscrypt( 3528): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:42:18.833 I/SemanticLocation( 3528): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 22:42:18.833 I/SemanticLocation( 3528): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 22:42:19.588 W/Conscrypt( 3528): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:42:20.202 W/Conscrypt( 3065): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:42:20.314 W/AlarmManager( 3528): java.lang.IllegalArgumentException: alarm "NetworkLocationLocator" has short window length
10-21 22:42:20.822 W/Conscrypt( 3065): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:42:21.026 W/AiAiFed ( 4997): java.lang.IllegalArgumentException: Unsupported response code3
10-21 22:42:21.422 W/AiAiFed ( 4997): java.lang.IllegalArgumentException: Unsupported response code3
10-21 22:42:21.515 E/HardwareInfoFeatureProviderImpl( 5121): java.lang.NumberFormatException: For input string: "E"
10-21 22:42:21.537 E/SystemServiceRegistry( 5121): android.os.ServiceManager$ServiceNotFoundException: No service published for: ethernet
10-21 22:42:21.541 W/BaseSearchIndex( 5121): Error initial controller
10-21 22:42:21.545 W/BaseSearchIndex( 5121): Error initial controller
10-21 22:42:22.028 E/PhoneInterfaceManager( 1017): isVoNrEnabled: CommandException: com.android.internal.telephony.CommandException: REQUEST_NOT_SUPPORTED
10-21 22:42:22.041 E/PhoneInterfaceManager( 1017): isVoNrEnabled: CommandException: com.android.internal.telephony.CommandException: REQUEST_NOT_SUPPORTED
10-21 22:42:22.359 W/AiAiFed ( 4997): java.lang.IllegalArgumentException: Unsupported response code3
10-21 22:42:23.286 E/IndexablesProvider( 5350): java.lang.IllegalStateException: We should initialize FormFactorUtils before getting instance.
10-21 22:42:23.743 W/ApkChecksums(  511): android.os.DeadObjectException
10-21 22:42:24.586 W/BugleRcs( 5304): android.content.pm.PackageManager$NameNotFoundException: com.google.android.ims
10-21 22:42:27.917 E/RecoverySnapshotStorage(  511): Error reading snapshot for 10131 from disk
10-21 22:42:27.917 E/RecoverySnapshotStorage(  511): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-21 22:42:27.917 E/RecoverySnapshotStorage(  511): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 22:42:28.753 E/RecoverySnapshotStorage(  511): Error reading snapshot for 10131 from disk
10-21 22:42:28.753 E/RecoverySnapshotStorage(  511): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-21 22:42:28.753 E/RecoverySnapshotStorage(  511): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 22:42:28.760 E/keystore2(  143):     3: Error::Rc(r#SYSTEM_ERROR)
10-21 22:42:28.769 W/RecoverableKeyStoreGms( 3065): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-21 22:42:28.769 W/RecoverableKeyStoreGms( 3065): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-21 22:42:28.769 W/RecoverableKeyStoreGms( 3065): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-21 22:42:28.769 W/RecoverableKeyStoreGms( 3065): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-21 22:42:28.769 W/RecoverableKeyStoreGms( 3065): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-21 22:42:28.769 W/RecoverableKeyStoreGms( 3065): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 22:42:28.769 W/RecoverableKeyStoreGms( 3065): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 22:42:28.769 W/RecoverableKeyStoreGms( 3065): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 22:42:30.976 W/Conscrypt( 3528): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:42:30.990 W/SP.AiAi ( 4997): Error downloading: manifests:webref-2-en-us-19071200
10-21 22:42:32.461 W/NetworkScheduler( 3528): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-21 22:42:32.692 I/VoiceDataManager( 5519): Caused by: java.util.concurrent.CancellationException: Task was cancelled.
10-21 22:42:33.315 W/Conscrypt( 3528): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 22:42:34.002 W/FontLog ( 3528): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 164288 nanoseconds delay) for dlrl@1bbeb41[status=PENDING]
10-21 22:42:34.006 W/Bugle   ( 5304): java.lang.RuntimeException: fetchFonts result is not OK. (2)
10-21 22:42:35.498 W/AiAiAutofill( 4997): java.lang.SecurityException: caller is not user's Augmented Autofill Service
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 838 packages, and audited 839 packages in 22s

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
drwxr-xr-x  2 runner runner      4096 Oct 21 22:38 .
drwxr-xr-x 14 runner runner      4096 Oct 21 22:38 ..
-rw-r--r--  1 runner runner 105410951 Oct 21 22:38 ergo-1.0.0-build19.apk
```

## Gradle
```
1002:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1038:BUILD SUCCESSFUL in 27m 36s
---
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
> Task :app:buildCMakeRelWithDebInfo[x86_64]
> Task :app:mergeReleaseNativeLibs
> Task :app:stripReleaseDebugSymbols
> Task :app:extractReleaseNativeSymbolTables
> Task :app:mergeReleaseNativeDebugMetadata
> Task :app:checkReleaseAarMetadata

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
> Task :app:mergeReleaseArtProfile
> Task :app:mergeReleaseAssets
> Task :app:compressReleaseAssets
> Task :app:processReleaseResources
> Task :app:generateReleaseLintVitalReportModel
> Task :app:dexBuilderRelease
> Task :app:mergeReleaseGlobalSynthetics FROM-CACHE
> Task :app:mergeDexRelease
> Task :app:lintVitalAnalyzeRelease
> Task :app:compileReleaseArtProfile
> Task :app:processReleaseJavaRes
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
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792620636664.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 27m 36s
741 actionable tasks: 479 executed, 262 from cache
Cacheable calls:   696 / 706 (98.58%)
  Hits:              0 / 696 ( 0.00%)
    Direct:          0
    Preprocessed:    0
  Misses:          696 / 696 (100.0%)
Uncacheable calls:  10 / 706 ( 1.42%)
Local storage:
  Cache size (GB): 0.3 / 3.0 ( 9.64%)
  Hits:              0 / 696 ( 0.00%)
  Misses:          696 / 696 (100.0%)
```
