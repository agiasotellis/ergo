# Android build 23: success

Disk: /dev/root        72G   59G   14G  82% /

- Commit: 4128aa7846c4aa164e6c18b39c7a2b026e366c34
- Run: https://github.com/agiasotellis/ergo/actions/runs/39753138806
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-23

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
    drwxr-xr-x  2 runner runner      4096 Oct 22 09:17 .
    drwxr-xr-x 14 runner runner      4096 Oct 22 09:17 ..
    -rw-r--r--  1 runner runner 105416671 Oct 22 09:17 ergo-1.0.0-build23.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-22 09:20:49.114 D/AndroidRuntime( 3506): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-22 09:20:49.139 I/AndroidRuntime( 3506): Using default boot image
10-22 09:20:49.142 I/AndroidRuntime( 3506): Leaving lock profiling enabled
10-22 09:20:49.614 D/AndroidRuntime( 3506): Calling main entry com.android.commands.monkey.Monkey
10-22 09:20:49.839 I/AndroidRuntime( 3506): VM exiting with result code 0.

=== React Native / Expo ===
10-22 09:21:16.094 W/SnapshotHandler( 3084): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:21:16.191 W/etl     ( 3073): FenceOperationException(errorCode=TIMEOUT_ERROR, gmsCoreApiException=null, gmsCoreApiAvailabilityException=null, cause=lnc: Timed out: iiu@1f9c103[status=PENDING, info=[hun@b784880]])
10-22 09:21:16.369 W/SnapshotHandler( 3084): java.io.FileNotFoundException: /data/user/0/com.google.android.googlequicksearchbox/files/phenotype/shared/com.google.android.libraries.consentverifier#com.google.android.googlequicksearchbox.pb: open failed: ENOENT (No such file or directory)
10-22 09:21:16.369 W/SnapshotHandler( 3084): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:21:16.739 W/AsyncOperation( 4010): OperationException[Status{statusCode=unknown status code: 29503, resolution=null}]
10-22 09:21:16.791 W/SnapshotHandler( 3084): java.io.FileNotFoundException: /data/user/0/com.google.android.googlequicksearchbox/files/phenotype/shared/com.google.android.libraries.notifications.platform#com.google.android.googlequicksearchbox.pb: open failed: ENOENT (No such file or directory)
10-22 09:21:16.791 W/SnapshotHandler( 3084): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:21:18.366 W/Conscrypt( 4010): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:21:19.524 W/AsyncOperation( 4010): OperationException[Status{statusCode=unknown status code: 29503, resolution=null}]
10-22 09:21:19.816 W/Conscrypt( 3505): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:21:21.273 W/Conscrypt( 4010): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:21:21.624 W/WellbeingSettingsProvid( 3073): java.util.concurrent.TimeoutException: Waited 5000 milliseconds (plus 156552 nanoseconds delay) for lki@88cc262[status=PENDING, info=[inputFuture=[lkh@f4cff3[status=PENDING, setFuture=[ljp@88ac4b0[status=PENDING, info=[inputFuture=[lki@b238f29[status=PENDING, info=[inputFuture=[lki@678a2ae[status=PENDING, info=[inputFuture=[lld@382784f[status=PENDING, info=[futures=[lki@b4f7bdc[status=PENDING, info=[inputFuture=[lki@bcf4e5[status=PENDING, info=[inputFuture=[lmb@1303bba[status=PENDING, info=[delegate=[lng@f984a6b[status=PENDING, info=[task=[running=[NOT STARTED YET], propagating=[bwh@44679c8]]]]]]]], function=[propagating=[bvr@3ccfa61]]]]], function=[propagating=[cur@a965986]]]]]]]], function=[propagating=[dce@b32b78f]]]]], function=[propagating=[bvq@4ef2247]]]]], exceptionType=[class java.lang.Throwable], fallback=[propagating=[bwc@4936625]]]]]]], function=[propagating=[bvq@2d6a74]]]]
10-22 09:21:21.691 W/Conscrypt( 3505): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:21:26.639 W/WellbeingSettingsProvid( 3073): java.util.concurrent.TimeoutException: Waited 5000 milliseconds (plus 1 milliseconds, 417911 nanoseconds delay) for lki@f14f2[status=PENDING, info=[inputFuture=[lkh@3f9d743[status=PENDING, setFuture=[ljp@1c941c0[status=PENDING, info=[inputFuture=[lki@f39aef9[status=PENDING, info=[inputFuture=[lki@c758e3e[status=PENDING, info=[inputFuture=[lld@158a49f[status=PENDING, info=[futures=[lki@6e0b9ec[status=PENDING, info=[inputFuture=[lki@edd41b5[status=PENDING, info=[inputFuture=[lmb@538504a[status=PENDING, info=[delegate=[lng@4acebbb[status=PENDING, info=[task=[running=[NOT STARTED YET], propagating=[bwh@b1588d8]]]]]]]], function=[propagating=[bvr@6ed4431]]]]], function=[propagating=[cur@cb32716]]]]]]]], function=[propagating=[dce@b32b78f]]]]], function=[propagating=[bvq@f348897]]]]], exceptionType=[class java.lang.Throwable], fallback=[propagating=[bwc@4936625]]]]]]], function=[propagating=[bvq@6c65a84]]]]
10-22 09:21:29.712 W/Icing   ( 3505): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:21:29.857 E/SystemServiceRegistry(  952): android.os.ServiceManager$ServiceNotFoundException: No service published for: ethernet
10-22 09:21:30.215 W/Icing   ( 3505): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:21:30.717 W/Icing   ( 3505): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:21:31.220 W/Icing   ( 3505): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:21:31.423 E/BatteryInfoBroadcast( 4154): java.lang.SecurityException: Failed to find provider com.google.android.apps.turbo.estimated_time_remaining for user 0; expected to find a valid ContentProvider for this authority
10-22 09:21:31.423 E/BatteryInfoBroadcast( 4154): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3057)
10-22 09:21:31.423 E/BatteryInfoBroadcast( 4154): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 09:21:31.423 E/BatteryInfoBroadcast( 4154): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 09:21:31.423 E/BatteryInfoBroadcast( 4154): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 09:21:31.423 E/BatteryInfoBroadcast( 4154): Caused by: android.os.RemoteException: Remote stack trace:
10-22 09:21:31.947 W/WellbeingSettingsProvid( 3073): java.util.concurrent.TimeoutException: Waited 5000 milliseconds (plus 138644 nanoseconds delay) for lki@4cc2092[status=PENDING, info=[inputFuture=[lkh@fc28a63[status=PENDING, setFuture=[ljp@7914660[status=PENDING, info=[inputFuture=[lki@a8c6719[status=PENDING, info=[inputFuture=[lki@b87b3de[status=PENDING, info=[inputFuture=[lld@d4969bf[status=PENDING, info=[futures=[lki@f34688c[status=PENDING, info=[inputFuture=[lki@9735bd5[status=PENDING, info=[inputFuture=[lmb@7d72fea[status=PENDING, info=[delegate=[lng@34e2db[status=PENDING, info=[task=[running=[NOT STARTED YET], propagating=[bwh@4058178]]]]]]]], function=[propagating=[bvr@e9ae051]]]]], function=[propagating=[cur@7f060b6]]]]]]]], function=[propagating=[dce@b32b78f]]]]], function=[propagating=[bvq@194d1b7]]]]], exceptionType=[class java.lang.Throwable], fallback=[propagating=[bwc@4936625]]]]]]], function=[propagating=[bvq@ecd3d24]]]]
10-22 09:21:32.595 W/AsyncOperation( 4010): OperationException[Status{statusCode=unknown status code: 29503, resolution=null}]
10-22 09:21:33.205 W/A       ( 3084): Exception while fetching versionCode for package[com.google.android.apps.tv.dreamx].
10-22 09:21:33.205 W/A       ( 3084): android.content.pm.PackageManager$NameNotFoundException: com.google.android.apps.tv.dreamx
10-22 09:21:33.275 W/A       ( 3084): Exception while fetching versionCode for package[com.google.android.apps.tv.launcherx].
10-22 09:21:33.275 W/A       ( 3084): android.content.pm.PackageManager$NameNotFoundException: com.google.android.apps.tv.launcherx
10-22 09:21:33.488 E/cr_CronetUrlRequestContext( 3084): Exception in upload method
10-22 09:21:33.488 E/cr_CronetUrlRequestContext( 3084): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-22 09:21:33.494 E/A       ( 3084): onError
10-22 09:21:34.973 E/dlpn    ( 4010): RuntimeException while executing runnable dlqc{qze@c89372f} with executor MoreExecutors.directExecutor()
10-22 09:21:34.973 E/dlpn    ( 4010): java.lang.NullPointerException: Attempt to get length of null array
10-22 09:21:35.757 E/SystemServiceRegistry(  952): android.os.ServiceManager$ServiceNotFoundException: No service published for: ethernet
10-22 09:21:37.056 W/Icing   ( 3505): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:21:37.978 I/NearbyDiscovery( 4010): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:21:38.235 E/GmsCoreLogger( 4010): java.util.concurrent.ExecutionException: java.util.concurrent.TimeoutException
10-22 09:21:38.235 E/GmsCoreLogger( 4010): Caused by: java.util.concurrent.TimeoutException
10-22 09:21:39.040 E/constellation( 3505): java.io.IOException: AUTHENTICATION_FAILED
10-22 09:21:40.502 W/ModernMediaScanner( 1590): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 09:21:40.606 W/Conscrypt( 3505): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:21:41.008 W/ConfigFileUtils( 3505): Failed to read asset ChimeraModuleSetList.pb: java.io.FileNotFoundException: ChimeraModuleSetList.pb
10-22 09:21:41.433 W/FileUtils(  515): android.system.ErrnoException: chmod failed: ENOENT (No such file or directory)
10-22 09:21:42.033 W/Conscrypt( 3505): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:21:42.098 E/PhoneInterfaceManager( 1022): isVoNrEnabled: CommandException: com.android.internal.telephony.CommandException: REQUEST_NOT_SUPPORTED
10-22 09:21:42.112 E/PhoneInterfaceManager( 1022): isVoNrEnabled: CommandException: com.android.internal.telephony.CommandException: REQUEST_NOT_SUPPORTED
10-22 09:21:42.249 I/NearbyDiscovery( 4010): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:21:43.980 I/NearbyDiscovery( 4010): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:21:44.057 E/PhenotypeFlagCommitter( 3505): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:21:44.420 W/Icing   ( 3505): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:21:45.322 W/BugleRcs( 4957): android.content.pm.PackageManager$NameNotFoundException: com.google.android.ims
10-22 09:21:46.568 W/SemanticLocation( 4010): java.util.concurrent.TimeoutException: Waited 5000 milliseconds (plus 180283 nanoseconds delay) for dlnx@9608a75[status=PENDING, info=[function=[bzrs@3c8ca0a]]]
10-22 09:21:47.351 W/Looper  ( 4010): java.lang.RuntimeException: Handler (acdu) {47ec6be} sendMessageAtTime() called with no mQueue
10-22 09:21:47.564 W/AiAiFed ( 1599): java.lang.IllegalArgumentException: Unsupported response code3
10-22 09:21:49.845 E/A       ( 3084): onError
10-22 09:21:49.878 E/JavaBinder( 4992): *** Uncaught remote exception! Exceptions are not yet supported across processes. Client PID 4044 UID 10118.
10-22 09:21:49.878 E/JavaBinder( 4992): android.database.StaleDataException: Attempted to access a cursor after it has been closed.
10-22 09:21:50.027 E/cr_CronetUrlRequestContext( 3084): Exception in upload method
10-22 09:21:50.027 E/cr_CronetUrlRequestContext( 3084): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-22 09:21:50.604 W/PhenotypeRegOp( 3505): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:21:51.325 I/SemanticLocation( 4010): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/default_model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 09:21:51.325 I/SemanticLocation( 4010): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:21:51.352 W/PhenotypeCommitHelper( 4010): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:21:51.352 E/PhenotypeFlagCommitter( 4010): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:21:51.458 I/SemanticLocation( 4010): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 09:21:51.458 I/SemanticLocation( 4010): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:21:52.618 I/SemanticLocation( 4010): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 09:21:52.618 I/SemanticLocation( 4010): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:21:53.030 W/Conscrypt( 4010): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:21:53.210 W/Conscrypt( 3505): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:21:53.480 W/GCM-GMS ( 3505): Failed to get registration: java.io.IOException: AUTHENTICATION_FAILED
10-22 09:21:53.552 W/Conscrypt( 4010): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:21:53.625 W/Conscrypt( 3505): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:21:53.855 W/GLSUser ( 4010): [AppCertManager] Exception while requesting key: 
10-22 09:21:53.855 W/GLSUser ( 4010): java.io.IOException: Invalid device key response.
10-22 09:21:54.178 W/Conscrypt( 4010): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:21:54.189 W/GCM-GMS ( 3505): Failed to get direct boot token: java.io.IOException: AUTHENTICATION_FAILED
10-22 09:21:54.625 W/Conscrypt( 4010): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:21:55.258 W/FontLog ( 4010): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 347797 nanoseconds delay) for dlrl@408f37a[status=PENDING]
10-22 09:21:55.271 W/Bugle   ( 4957): java.lang.RuntimeException: fetchFonts result is not OK. (2)
10-22 09:21:56.100 W/SnapshotHandler( 5156): java.io.FileNotFoundException: /data/user_de/0/com.google.android.googlequicksearchbox/files/phenotype/shared/com.google.android.libraries.performance.primes#com.google.android.googlequicksearchbox.pb: open failed: ENOENT (No such file or directory)
10-22 09:21:56.100 W/SnapshotHandler( 5156): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:21:56.557 E/bwel    ( 4010): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:21:56.693 E/RecoverySnapshotStorage(  515): Error reading snapshot for 10130 from disk
10-22 09:21:56.693 E/RecoverySnapshotStorage(  515): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10130.xml: open failed: ENOENT (No such file or directory)
10-22 09:21:56.693 E/RecoverySnapshotStorage(  515): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:21:57.104 E/Vision  ( 3505): Couldn't read checkbot setting: android.provider.Settings$SettingNotFoundException: multi_cb
10-22 09:21:57.436 E/RecoverySnapshotStorage(  515): Error reading snapshot for 10130 from disk
10-22 09:21:57.436 E/RecoverySnapshotStorage(  515): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10130.xml: open failed: ENOENT (No such file or directory)
10-22 09:21:57.436 E/RecoverySnapshotStorage(  515): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:21:57.439 E/keystore2(  145):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 09:21:57.440 W/RecoverableKeyStoreGms( 3505): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 09:21:57.440 W/RecoverableKeyStoreGms( 3505): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 09:21:57.440 W/RecoverableKeyStoreGms( 3505): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 09:21:57.440 W/RecoverableKeyStoreGms( 3505): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 09:21:57.440 W/RecoverableKeyStoreGms( 3505): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 09:21:57.440 W/RecoverableKeyStoreGms( 3505): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 09:21:57.440 W/RecoverableKeyStoreGms( 3505): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 09:21:57.440 W/RecoverableKeyStoreGms( 3505): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 09:21:58.281 W/NetworkScheduler( 4010): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 09:22:00.699 W/PhenotypeRegOp( 3505): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:22:00.789 E/RecoverySnapshotStorage(  515): Error reading snapshot for 10130 from disk
10-22 09:22:00.789 E/RecoverySnapshotStorage(  515): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10130.xml: open failed: ENOENT (No such file or directory)
10-22 09:22:00.789 E/RecoverySnapshotStorage(  515): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 09:22:00.792 E/keystore2(  145):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 09:22:00.793 W/RecoverableKeyStoreGms( 3505): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 09:22:00.793 W/RecoverableKeyStoreGms( 3505): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 09:22:00.793 W/RecoverableKeyStoreGms( 3505): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 09:22:00.793 W/RecoverableKeyStoreGms( 3505): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 09:22:00.793 W/RecoverableKeyStoreGms( 3505): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 09:22:00.793 W/RecoverableKeyStoreGms( 3505): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 09:22:00.793 W/RecoverableKeyStoreGms( 3505): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 09:22:00.793 W/RecoverableKeyStoreGms( 3505): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 09:22:00.975 W/RcsClientLib( 4957): Error while stopping RCS engine.
10-22 09:22:00.975 W/RcsClientLib( 4957): java.lang.IllegalStateException: JibeService Not Initialized
10-22 09:22:00.975 W/RcsClientLib( 4957): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 09:22:00.975 W/RcsClientLib( 4957): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 09:22:00.975 W/RcsClientLib( 4957): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 09:22:00.975 W/RcsClientLib( 4957): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 09:22:00.975 W/RcsClientLib( 4957): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 09:22:01.476 W/RcsClientLib( 4957): Error while stopping RCS engine.
10-22 09:22:01.476 W/RcsClientLib( 4957): java.lang.IllegalStateException: JibeService Not Initialized
10-22 09:22:01.476 W/RcsClientLib( 4957): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 09:22:01.476 W/RcsClientLib( 4957): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 09:22:01.476 W/RcsClientLib( 4957): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 09:22:01.476 W/RcsClientLib( 4957): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 09:22:01.476 W/RcsClientLib( 4957): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 09:22:02.039 W/Conscrypt( 4010): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:22:02.057 W/Conscrypt( 4010): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:22:02.184 W/Conscrypt( 4010): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:22:02.486 E/BugleRcsEngine( 5297): [2] JibeService.onDestroy: JibeService: onDestroy() unregister factory exception: java.lang.IllegalArgumentException: Receiver not registered: com.google.android.ims.receiver.sip.DebugOptionsReceiver@9a0f75a
10-22 09:22:02.873 W/Conscrypt( 4010): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:22:02.934 W/Conscrypt( 4010): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:22:02.968 W/Conscrypt( 4010): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 09:22:02.984 E/enyj    ( 3505): java.lang.RuntimeException: ManagedChannel allocation site
10-22 09:22:03.099 E/enyj    ( 3505): java.lang.RuntimeException: ManagedChannel allocation site
10-22 09:22:03.291 E/PhenotypeFlagCommitter( 3505): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:22:03.302 W/PeoplePU( 3505): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 09:22:03.302 W/PeoplePU( 3505): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 09:22:03.302 W/PeoplePU( 3505): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 09:22:03.302 W/PeoplePU( 3505): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 09:22:03.302 W/PeoplePU( 3505): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 09:22:03.302 W/PeoplePU( 3505): Caused by: android.os.RemoteException: Remote stack trace:
10-22 09:22:03.324 W/PeoplePU( 3505): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-22 09:22:03.414 W/CardCollectorTask( 5400): android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-22 09:22:05.998 I/NearbyDiscovery( 4010): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 09:22:06.734 E/PhenotypeFlagCommitter( 3505): java.util.concurrent.TimeoutException: Timed out waiting for Task
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
total 102956
drwxr-xr-x  2 runner runner      4096 Oct 22 09:17 .
drwxr-xr-x 14 runner runner      4096 Oct 22 09:17 ..
-rw-r--r--  1 runner runner 105416671 Oct 22 09:17 ergo-1.0.0-build23.apk
```

## Gradle
```
584:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1040:BUILD SUCCESSFUL in 6m 58s
---
> Task :react-native-google-signin_google-signin:writeReleaseLintModelMetadata
> Task :react-native-reanimated:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-safe-area-context:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-safe-area-context:writeReleaseLintModelMetadata
> Task :react-native-masked-view_masked-view:writeReleaseLintModelMetadata
> Task :react-native-screens:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-svg:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-worklets:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-screens:writeReleaseLintModelMetadata
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
> Task :react-native-worklets:bundleReleaseAar
> Task :react-native-worklets:mergeReleaseResources FROM-CACHE
> Task :react-native-worklets:verifyReleaseResources FROM-CACHE
> Task :react-native-worklets:assembleRelease
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792660257295.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 6m 58s
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
