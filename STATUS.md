# Android build 25: success

Disk: /dev/root        72G   61G   12G  85% /

- Commit: 53e32cdd404acd78be90912cc727e0a16155250e
- Run: https://github.com/agiasotellis/ergo/actions/runs/39763732285
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-25

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
    total 103908
    drwxr-xr-x  2 runner runner      4096 Oct 22 11:08 .
    drwxr-xr-x 14 runner runner      4096 Oct 22 11:08 ..
    -rw-r--r--  1 runner runner 106388342 Oct 22 11:08 ergo-1.0.0-build25.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-22 11:11:53.936 D/AndroidRuntime( 3385): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-22 11:11:53.947 I/AndroidRuntime( 3385): Using default boot image
10-22 11:11:53.949 I/AndroidRuntime( 3385): Leaving lock profiling enabled
10-22 11:11:54.215 D/AndroidRuntime( 3385): Calling main entry com.android.commands.monkey.Monkey
10-22 11:11:55.923 I/AndroidRuntime( 3385): VM exiting with result code 0.

=== React Native / Expo ===
10-22 11:12:50.711 E/HardwareInfoFeatureProviderImpl( 5236): java.lang.NumberFormatException: For input string: "E"
10-22 11:12:50.734 E/SystemServiceRegistry( 5236): android.os.ServiceManager$ServiceNotFoundException: No service published for: ethernet
10-22 11:12:51.005 W/Conscrypt( 4378): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 11:12:51.118 W/BaseSearchIndex( 5236): Error initial controller
10-22 11:12:51.655 E/PhoneInterfaceManager( 1012): isVoNrEnabled: CommandException: com.android.internal.telephony.CommandException: REQUEST_NOT_SUPPORTED
10-22 11:12:51.656 E/PhoneInterfaceManager( 1012): isVoNrEnabled: CommandException: com.android.internal.telephony.CommandException: REQUEST_NOT_SUPPORTED
10-22 11:12:52.555 W/Conscrypt( 4378): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 11:12:52.964 E/IndexablesProvider( 5410): java.lang.IllegalStateException: We should initialize FormFactorUtils before getting instance.
10-22 11:12:53.247 W/GLSUser ( 4378): [AppCertManager] Exception while requesting key: 
10-22 11:12:53.247 W/GLSUser ( 4378): java.io.IOException: Invalid device key response.
10-22 11:12:54.025 W/Conscrypt( 4378): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 11:12:54.727 I/SemanticLocation( 4378): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/default_model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 11:12:54.727 I/SemanticLocation( 4378): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 11:12:54.868 W/BugleRcs( 5376): android.content.pm.PackageManager$NameNotFoundException: com.google.android.ims
10-22 11:12:55.245 W/Conscrypt( 4378): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 11:12:55.404 I/SemanticLocation( 4378): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 11:12:55.404 I/SemanticLocation( 4378): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 11:12:57.005 W/PhenotypeCommitHelper( 4378): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 11:12:57.012 E/PhenotypeFlagCommitter( 4378): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 11:12:57.461 W/WellbeingSettingsProvid( 3493): java.util.concurrent.TimeoutException: Waited 5000 milliseconds (plus 145421 nanoseconds delay) for lki@9f2bbbc[status=PENDING, info=[inputFuture=[lkh@f56745[status=PENDING, setFuture=[ljp@2522e9a[status=PENDING, info=[inputFuture=[lki@c4cf3cb[status=PENDING, info=[inputFuture=[lki@90dd7a8[status=PENDING, info=[inputFuture=[lld@68a32c1[status=PENDING, info=[futures=[lki@6949a66[status=PENDING, info=[inputFuture=[lki@53501a7[status=PENDING, info=[inputFuture=[lmb@c3cc654[status=PENDING, info=[delegate=[lng@34639fd[status=PENDING, setFuture=[lki@13ff6f2[status=PENDING, info=[inputFuture=[lkh@6a61143[status=PENDING, info=[inputFuture=[lmb@ac9f3c0[status=PENDING, info=[delegate=[lng@6c178f9[status=PENDING, setFuture=[lkh@cd2903e[status=PENDING, info=[function=[propagating=[cac@b8e7e9f]]]]]]]]]], function=[propagating=[bwd@43a8bec]]]]], function=[propagating=[bwc@f65ff04]]]]]]]]]], function=[propagating=[bvr@817abb5]]]]], function=[propagating=[cur@b63724a]]]]]]]], function=[propagating=[dce@65c65b3]]]]], function=[propagating=[bvq@56665bb]]]]], exceptionType=[class java.lang.Throwable], fallback=[propagating=[bwc@6357ae9]]]]]]], function=[propagating=[bvq@93a7ad8]]]]
10-22 11:12:58.206 I/SemanticLocation( 4378): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 11:12:58.206 I/SemanticLocation( 4378): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 11:12:58.418 W/PhenotypeRegOp( 3021): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 11:12:58.581 E/RecoverySnapshotStorage(  510): Error reading snapshot for 10131 from disk
10-22 11:12:58.581 E/RecoverySnapshotStorage(  510): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 11:12:58.581 E/RecoverySnapshotStorage(  510): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 11:12:59.373 E/Vision  ( 3021): Couldn't read checkbot setting: android.provider.Settings$SettingNotFoundException: multi_cb
10-22 11:12:59.905 E/RecoverySnapshotStorage(  510): Error reading snapshot for 10131 from disk
10-22 11:12:59.905 E/RecoverySnapshotStorage(  510): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 11:12:59.905 E/RecoverySnapshotStorage(  510): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 11:12:59.908 E/keystore2(  146):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 11:12:59.909 W/RecoverableKeyStoreGms( 3021): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 11:12:59.909 W/RecoverableKeyStoreGms( 3021): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 11:12:59.909 W/RecoverableKeyStoreGms( 3021): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 11:12:59.909 W/RecoverableKeyStoreGms( 3021): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 11:12:59.909 W/RecoverableKeyStoreGms( 3021): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 11:12:59.909 W/RecoverableKeyStoreGms( 3021): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 11:12:59.909 W/RecoverableKeyStoreGms( 3021): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 11:12:59.909 W/RecoverableKeyStoreGms( 3021): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 11:13:00.558 W/Looper  ( 4378): java.lang.RuntimeException: Handler (acdu) {9f3e5cd} sendMessageAtTime() called with no mQueue
10-22 11:13:00.880 E/RecoverySnapshotStorage(  510): Error reading snapshot for 10131 from disk
10-22 11:13:00.880 E/RecoverySnapshotStorage(  510): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 11:13:00.880 E/RecoverySnapshotStorage(  510): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 11:13:00.882 E/keystore2(  146):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 11:13:00.882 W/RecoverableKeyStoreGms( 3021): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 11:13:00.882 W/RecoverableKeyStoreGms( 3021): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 11:13:00.882 W/RecoverableKeyStoreGms( 3021): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 11:13:00.882 W/RecoverableKeyStoreGms( 3021): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 11:13:00.882 W/RecoverableKeyStoreGms( 3021): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 11:13:00.882 W/RecoverableKeyStoreGms( 3021): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 11:13:00.882 W/RecoverableKeyStoreGms( 3021): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 11:13:00.882 W/RecoverableKeyStoreGms( 3021): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 11:13:01.230 E/bwel    ( 4378): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 11:13:01.691 W/Conscrypt( 4378): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 11:13:02.249 W/NetworkScheduler( 4378): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 11:13:02.736 W/Conscrypt( 4378): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 11:13:03.304 E/enyj    ( 4378): java.lang.RuntimeException: ManagedChannel allocation site
10-22 11:13:03.402 E/PhenotypeFlagCommitter( 3021): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 11:13:03.757 W/Conscrypt( 4378): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 11:13:03.823 W/ApkChecksums(  510): android.os.DeadObjectException
10-22 11:13:04.581 W/Conscrypt( 4378): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 11:13:04.731 W/FontLog ( 4378): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 402601 nanoseconds delay) for dlrl@5e6b3c3[status=PENDING]
10-22 11:13:04.733 W/Bugle   ( 5376): java.lang.RuntimeException: fetchFonts result is not OK. (2)
10-22 11:13:04.794 W/SliceDataConverter( 5236): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.NetworkProviderSimsCategoryController
10-22 11:13:04.794 W/SliceDataConverter( 5236): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.NetworkProviderSimsCategoryController.<init> [class android.content.Context, class java.lang.String]
10-22 11:13:04.986 W/SliceDataConverter( 5236): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.credentials.CredentialManagerPreferenceController
10-22 11:13:04.986 W/SliceDataConverter( 5236): Caused by: java.lang.reflect.InvocationTargetException
10-22 11:13:04.986 W/SliceDataConverter( 5236): Caused by: java.lang.RuntimeException: Can't create handler inside thread Thread[binder:5236_7,5,main] that has not called Looper.prepare()
10-22 11:13:05.202 W/SliceDataConverter( 5236): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.telephony.CallsDefaultSubscriptionController
10-22 11:13:05.202 W/SliceDataConverter( 5236): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.telephony.CallsDefaultSubscriptionController.<init> [class android.content.Context, class java.lang.String]
10-22 11:13:05.206 E/HardwareInfoFeatureProviderImpl( 5236): java.lang.NumberFormatException: For input string: "E"
10-22 11:13:05.225 W/SliceDataConverter( 5236): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 11:13:05.225 W/SliceDataConverter( 5236): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 11:13:05.225 W/SliceDataConverter( 5236): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 11:13:05.277 E/SystemServiceRegistry( 5236): android.os.ServiceManager$ServiceNotFoundException: No service published for: ethernet
10-22 11:13:05.308 W/SliceDataConverter( 5236): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 11:13:05.308 W/SliceDataConverter( 5236): Caused by: java.lang.ClassNotFoundException: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 11:13:05.308 W/SliceDataConverter( 5236): Caused by: java.lang.ClassNotFoundException: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 11:13:05.311 W/SliceDataConverter( 5236): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 11:13:05.311 W/SliceDataConverter( 5236): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 11:13:05.311 W/SliceDataConverter( 5236): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 11:13:05.318 W/SliceDataConverter( 5236): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.fuelgauge.batteryusage.BatteryChartPreferenceController
10-22 11:13:05.318 W/SliceDataConverter( 5236): Caused by: java.lang.NoSuchMethodException: com.android.settings.fuelgauge.batteryusage.BatteryChartPreferenceController.<init> [class android.content.Context, class java.lang.String]
10-22 11:13:05.321 W/SliceDataConverter( 5236): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.accessibility.VibrationMainSwitchPreferenceController
10-22 11:13:05.321 W/SliceDataConverter( 5236): Caused by: java.lang.reflect.InvocationTargetException
10-22 11:13:05.321 W/SliceDataConverter( 5236): Caused by: java.lang.RuntimeException: Can't create handler inside thread Thread[binder:5236_7,5,main] that has not called Looper.prepare()
10-22 11:13:05.326 W/SliceDataConverter( 5236): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.telephony.CallsDefaultSubscriptionController
10-22 11:13:05.326 W/SliceDataConverter( 5236): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.telephony.CallsDefaultSubscriptionController.<init> [class android.content.Context, class java.lang.String]
10-22 11:13:05.803 E/enyj    ( 3021): java.lang.RuntimeException: ManagedChannel allocation site
10-22 11:13:06.006 E/enyj    ( 3021): java.lang.RuntimeException: ManagedChannel allocation site
10-22 11:13:06.270 W/PeoplePU( 3021): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 11:13:06.270 W/PeoplePU( 3021): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 11:13:06.270 W/PeoplePU( 3021): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 11:13:06.270 W/PeoplePU( 3021): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 11:13:06.270 W/PeoplePU( 3021): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 11:13:06.297 W/PeoplePU( 3021): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-22 11:13:07.146 W/Conscrypt( 3021): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 11:13:07.676 I/NearbyDiscovery( 4378): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 11:13:07.691 W/Conscrypt( 3021): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 11:13:08.583 I/SemanticLocation( 4378): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 11:13:08.583 I/SemanticLocation( 4378): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 11:13:09.044 E/PhenotypeFlagCommitter( 3021): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 11:13:09.139 W/RcsClientLib( 5376): Error while stopping RCS engine.
10-22 11:13:09.139 W/RcsClientLib( 5376): java.lang.IllegalStateException: JibeService Not Initialized
10-22 11:13:09.139 W/RcsClientLib( 5376): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 11:13:09.139 W/RcsClientLib( 5376): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 11:13:09.139 W/RcsClientLib( 5376): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 11:13:09.139 W/RcsClientLib( 5376): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 11:13:09.139 W/RcsClientLib( 5376): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 11:13:09.140 W/RcsClientLib( 5376): Error while stopping RCS engine.
10-22 11:13:09.140 W/RcsClientLib( 5376): java.lang.IllegalStateException: JibeService Not Initialized
10-22 11:13:09.140 W/RcsClientLib( 5376): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 11:13:09.140 W/RcsClientLib( 5376): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 11:13:09.140 W/RcsClientLib( 5376): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 11:13:09.140 W/RcsClientLib( 5376): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 11:13:09.140 W/RcsClientLib( 5376): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 11:13:09.217 I/SemanticLocation( 4378): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 11:13:09.217 I/SemanticLocation( 4378): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 11:13:09.695 E/BugleRcsEngine( 5765): [2] JibeService.onDestroy: JibeService: onDestroy() unregister factory exception: java.lang.IllegalArgumentException: Receiver not registered: com.google.android.ims.receiver.sip.DebugOptionsReceiver@db6bae2
10-22 11:13:10.786 W/Conscrypt( 4378): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 11:13:10.934 W/Conscrypt( 4378): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 11:13:12.557 E/RecoverySnapshotStorage(  510): Error reading snapshot for 10131 from disk
10-22 11:13:12.557 E/RecoverySnapshotStorage(  510): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 11:13:12.557 E/RecoverySnapshotStorage(  510): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 11:13:12.558 E/keystore2(  146):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 11:13:12.559 W/RecoverableKeyStoreGms( 3021): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 11:13:12.559 W/RecoverableKeyStoreGms( 3021): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 11:13:12.559 W/RecoverableKeyStoreGms( 3021): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 11:13:12.559 W/RecoverableKeyStoreGms( 3021): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 11:13:12.559 W/RecoverableKeyStoreGms( 3021): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 11:13:12.559 W/RecoverableKeyStoreGms( 3021): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 11:13:12.559 W/RecoverableKeyStoreGms( 3021): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 11:13:12.559 W/RecoverableKeyStoreGms( 3021): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 11:13:13.688 W/AiAiFed ( 4633): java.lang.IllegalArgumentException: Unsupported response code3
10-22 11:13:14.029 E/A       ( 3761): java.util.concurrent.CancellationException: Task was cancelled.
10-22 11:13:14.333 E/BgTaskExecutorImpl( 3761): java.util.concurrent.CancellationException: Task was cancelled.
10-22 11:13:14.658 W/CorpusConfigHelper( 3761): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 11:13:14.658 W/CorpusConfigHelper( 3761): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 11:13:14.854 E/NotificationListeners(  510): android.os.DeadObjectException
10-22 11:13:14.897 E/NotificationListeners(  510): android.os.DeadObjectException
10-22 11:13:14.915 E/NotificationListeners(  510): android.os.DeadObjectException
10-22 11:13:14.930 E/NotificationListeners(  510): android.os.DeadObjectException
10-22 11:13:15.129 E/NotificationListeners(  510): android.os.DeadObjectException
10-22 11:13:15.136 E/NotificationListeners(  510): android.os.DeadObjectException
10-22 11:13:15.160 E/NotificationListeners(  510): android.os.DeadObjectException
10-22 11:13:15.199 E/NotificationListeners(  510): android.os.DeadObjectException
10-22 11:13:15.210 E/NotificationListeners(  510): android.os.DeadObjectException
10-22 11:13:15.270 E/NotificationListeners(  510): android.os.DeadObjectException
10-22 11:13:15.371 E/VS.BluetoothShim( 4343): Error locating SCO method
10-22 11:13:15.371 E/VS.BluetoothShim( 4343): java.lang.NoSuchMethodException: android.bluetooth.BluetoothHeadset.startScoUsingVirtualVoiceCall [class android.bluetooth.BluetoothDevice]
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 843 packages, and audited 844 packages in 29s

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
total 103904
drwxr-xr-x  2 runner runner      4096 Oct 22 11:08 .
drwxr-xr-x 14 runner runner      4096 Oct 22 11:08 ..
-rw-r--r--  1 runner runner 106388342 Oct 22 11:08 ergo-1.0.0-build25.apk
```

## Gradle
```
126:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-worklets/android/build.gradle.kts:162:1: 'fun Project.android(configure: Action<LibraryExtension>): Unit' is deprecated. Replaced by com.android.build.api.dsl.LibraryExtension.
161:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/build.gradle.kts:168:1: 'fun Project.android(configure: Action<LibraryExtension>): Unit' is deprecated. Replaced by com.android.build.api.dsl.LibraryExtension.
297:w: file:///home/runner/work/ergo/ergo/node_modules/@maplibre/maplibre-react-native/android/src/main/java/org/maplibre/reactnative/components/AbstractEvent.kt:16:25 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
322:Note: Some input files use or override a deprecated API.
323:Note: Recompile with -Xlint:deprecation for details.
344:Note: Some input files use or override a deprecated API.
345:Note: Recompile with -Xlint:deprecation for details.
346:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-google-signin/google-signin/android/src/main/java/com/reactnativegooglesignin/RNGoogleSigninModule.java uses unchecked or unsafe operations.
347:Note: Recompile with -Xlint:unchecked for details.
374:Note: Some input files use or override a deprecated API.
375:Note: Recompile with -Xlint:deprecation for details.
376:Note: Some input files use unchecked or unsafe operations.
377:Note: Recompile with -Xlint:unchecked for details.
421:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:83:17 'constructor(name: String, className: String, canOverrideExistingModule: Boolean, needsEagerInit: Boolean, hasConstants: Boolean, isCxxModule: Boolean, isTurboModule: Boolean): ReactModuleInfo' is deprecated. This constructor is deprecated and will be removed in the future. Use ReactModuleInfo(String, String, boolean, boolean, boolean, boolean)].
458:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/gamma/modals/formsheet/FormSheetContentView.kt:39:33 'fun getEventDispatcher(context: ReactContext, uiManagerType: Int): EventDispatcher?' is deprecated. UIManagerType is no longer needed.
541:Note: Some input files use or override a deprecated API.
542:Note: Recompile with -Xlint:deprecation for details.
558:w: file:///home/runner/work/ergo/ergo/node_modules/@expo/dom-webview/android/src/main/java/expo/modules/webview/DomWebView.kt:254:18 'fun executeOnJavaScriptThread(runnable: Runnable): Unit' is deprecated. Use RuntimeContext.schedule instead.
601:Note: Some input files use or override a deprecated API.
602:Note: Recompile with -Xlint:deprecation for details.
603:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-async-storage/async-storage/android/src/javaPackage/java/com/reactnativecommunity/asyncstorage/AsyncStoragePackage.java uses unchecked or unsafe operations.
604:Note: Recompile with -Xlint:unchecked for details.
615:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-masked-view/masked-view/android/src/main/java/org/reactnative/maskedview/RNCMaskedViewPackage.java uses or overrides a deprecated API.
616:Note: Recompile with -Xlint:deprecation for details.
651:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NodesManager.kt:58:95 'fun resolveCustomDirectEventName(eventName: String): String?' is deprecated.
652:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NodesManager.kt:232:29 'fun receiveEvent(surfaceId: Int, targetTag: Int, eventName: String, canCoalesceEvent: Boolean, customCoalesceKey: Int, params: WritableMap?, category: Int): Unit' is deprecated. Use the overload with eventTimestamp parameter instead.
1181:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1250:BUILD SUCCESSFUL in 34m 57s
---
> Task :react-native-gesture-handler:assembleRelease
> Task :react-native-google-signin_google-signin:bundleReleaseAar
> Task :react-native-google-signin_google-signin:mergeReleaseResources
> Task :react-native-google-signin_google-signin:verifyReleaseResources
> Task :react-native-google-signin_google-signin:assembleRelease
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
> Task :app:buildCMakeRelWithDebInfo[x86_64]
> Task :app:generateReleaseResValues
> Task :app:generateReleaseResources
> Task :app:processReleaseGoogleServices
> Task :app:packageReleaseResources
> Task :app:processReleaseNavigationResources
> Task :app:parseReleaseLocalResources
> Task :app:generateReleaseRFile

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:mergeReleaseNativeLibs
> Task :app:javaPreCompileRelease FROM-CACHE
> Task :app:stripReleaseDebugSymbols
> Task :app:compileReleaseJavaWithJavac
> Task :app:checkReleaseAarMetadata
> Task :app:mapReleaseSourceSetPaths
> Task :app:compileReleaseNavigationResources
> Task :app:extractReleaseNativeSymbolTables
> Task :app:mergeReleaseResources
> Task :app:createReleaseCompatibleScreenManifests
> Task :app:extractDeepLinksRelease
> Task :app:mergeReleaseNativeDebugMetadata

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
> Task :app:desugarReleaseFileDependencies
> Task :app:mergeReleaseStartupProfile
> Task :app:processReleaseManifestForPackage
> Task :app:mergeExtDexRelease
> Task :app:processReleaseResources
> Task :app:mergeReleaseArtProfile
> Task :app:dexBuilderRelease
> Task :app:mergeReleaseGlobalSynthetics
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseAssets
> Task :app:compressReleaseAssets
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
> Task :app:generateReleaseLintVitalReportModel
> Task :app:mergeDexRelease
> Task :app:compileReleaseArtProfile
> Task :app:processReleaseJavaRes
> Task :app:lintVitalAnalyzeRelease
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :app:mergeReleaseJavaResource
> Task :app:collectReleaseDependencies
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease
> Task :app:optimizeReleaseResources
> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792665234997.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 34m 57s
742 actionable tasks: 643 executed, 99 from cache
Cacheable calls:   696 / 706 (98.58%)
  Hits:             28 / 696 ( 4.02%)
    Direct:         28 /  28 (100.0%)
    Preprocessed:    0 /  28 ( 0.00%)
  Misses:          668 / 696 (95.98%)
Uncacheable calls:  10 / 706 ( 1.42%)
Local storage:
  Cache size (GB): 0.6 / 3.0 (19.27%)
  Hits:             28 / 696 ( 4.02%)
  Misses:          668 / 696 (95.98%)
```
