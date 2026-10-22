# Android build 31: success

Disk: /dev/root        72G   60G   13G  83% /

- Commit: 6ddc3cc838866b97dada7af67c891cfaae74e9ad
- Run: https://github.com/agiasotellis/ergo/actions/runs/39813676753
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-31

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
    total 103968
    drwxr-xr-x  2 runner runner      4096 Oct 22 16:32 .
    drwxr-xr-x 14 runner runner      4096 Oct 22 16:32 ..
    -rw-r--r--  1 runner runner 106450258 Oct 22 16:32 ergo-1.0.0-build31.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-22 16:35:49.232 D/AndroidRuntime( 3248): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-22 16:35:49.235 I/AndroidRuntime( 3248): Using default boot image
10-22 16:35:49.235 I/AndroidRuntime( 3248): Leaving lock profiling enabled
10-22 16:35:49.578 D/AndroidRuntime( 3248): Calling main entry com.android.commands.monkey.Monkey
10-22 16:35:50.860 I/AndroidRuntime( 3248): VM exiting with result code 0.

=== React Native / Expo ===
10-22 16:36:36.327 W/SemanticLocation( 3614): java.util.concurrent.TimeoutException: Waited 5000 milliseconds (plus 191917 nanoseconds delay) for dlnx@b65c89a[status=PENDING, info=[function=[bzrs@e9185cb]]]
10-22 16:36:36.664 W/Icing   ( 2863): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:36:36.981 W/ModernMediaScanner( 1517): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 16:36:37.681 W/PhenotypeRegOp( 2863): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:36:38.572 W/Icing   ( 2863): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:36:38.622 W/AsyncOperation( 3614): OperationException[Status{statusCode=Stale snapshot for com.google.android.partnersetup(change count changed - expected 1  but was 0), resolution=null}]
10-22 16:36:39.076 W/Icing   ( 2863): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:36:42.043 W/WellbeingSettingsProvid( 4350): java.util.concurrent.TimeoutException: Waited 5000 milliseconds (plus 190165 nanoseconds delay) for lki@a4b1d58[status=PENDING, info=[inputFuture=[lkh@efc7eb1[status=PENDING, setFuture=[ljp@e020f96[status=PENDING, info=[inputFuture=[lki@ba48717[status=PENDING, info=[inputFuture=[lki@900b704[status=PENDING, info=[inputFuture=[lld@e2954ed[status=PENDING, info=[futures=[lki@bc78f22[status=PENDING, info=[inputFuture=[lki@7e07db3[status=PENDING, info=[inputFuture=[lmb@c543f70[status=PENDING, info=[delegate=[lng@bd352e9[status=PENDING, setFuture=[lki@5737b6e[status=PENDING, info=[inputFuture=[lkh@6db420f[status=PENDING, info=[inputFuture=[lmb@15e29c[status=PENDING, info=[delegate=[lng@50534a5[status=PENDING, setFuture=[lkh@5dfe07a[status=PENDING, info=[function=[propagating=[cac@f13f02b]]]]]]]]]], function=[propagating=[bwd@aec8c88]]]]], function=[propagating=[bwc@886b673]]]]]]]]]], function=[propagating=[bvr@2b97621]]]]], function=[propagating=[cur@97b8a46]]]]]]]], function=[propagating=[dce@2669b2e]]]]], function=[propagating=[bvq@5df6407]]]]], exceptionType=[class java.lang.Throwable], fallback=[propagating=[bwc@867685c]]]]]]], function=[propagating=[bvq@501e934]]]]
10-22 16:36:42.222 E/bwel    ( 3614): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:36:42.655 W/PhenotypeCommitHelper( 3614): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:36:42.655 E/PhenotypeFlagCommitter( 3614): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:36:42.961 W/Conscrypt( 3614): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:36:44.166 W/Conscrypt( 3614): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:36:44.523 W/GLSUser ( 3614): [AppCertManager] Exception while requesting key: 
10-22 16:36:44.523 W/GLSUser ( 3614): java.io.IOException: Invalid device key response.
10-22 16:36:44.920 W/Conscrypt( 3614): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:36:45.708 I/SemanticLocation( 3614): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/default_model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 16:36:45.708 I/SemanticLocation( 3614): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 16:36:45.809 W/FontLog ( 3614): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 147481 nanoseconds delay) for dlrl@130fbb7[status=PENDING]
10-22 16:36:45.818 D/StrictMode( 4075): 	at android.os.Parcel.readExceptionCode(Parcel.java:3002)
10-22 16:36:45.818 D/StrictMode( 4075): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-22 16:36:45.818 D/StrictMode( 4075): 	at android.os.Parcel.readExceptionCode(Parcel.java:3002)
10-22 16:36:45.818 D/StrictMode( 4075): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-22 16:36:45.837 W/FontLog ( 3614): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 7 milliseconds, 302086 nanoseconds delay) for dlrl@124f783[status=PENDING]
10-22 16:36:45.865 W/Bugle   ( 4828): java.lang.RuntimeException: fetchFonts result is not OK. (2)
10-22 16:36:46.014 W/Conscrypt( 3614): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:36:46.076 I/SemanticLocation( 3614): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 16:36:46.076 I/SemanticLocation( 3614): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 16:36:46.765 W/GCM-GMS ( 2863): Failed to get registration: java.io.IOException: AUTHENTICATION_FAILED
10-22 16:36:46.934 I/SemanticLocation( 3614): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 16:36:46.934 I/SemanticLocation( 3614): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 16:36:47.100 E/A       ( 3777): onError
10-22 16:36:47.881 W/PhenotypeRegOp( 2863): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:36:49.050 E/CCTFlatFileLogStore( 3614): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:36:49.244 E/dlpn    ( 3614): RuntimeException while executing runnable dlqc{qze@7ad85b1} with executor MoreExecutors.directExecutor()
10-22 16:36:49.244 E/dlpn    ( 3614): java.lang.NullPointerException: Attempt to get length of null array
10-22 16:36:49.329 W/A       ( 3777): Exception while fetching versionCode for package[com.google.android.apps.tv.dreamx].
10-22 16:36:49.329 W/A       ( 3777): android.content.pm.PackageManager$NameNotFoundException: com.google.android.apps.tv.dreamx
10-22 16:36:49.405 W/A       ( 3777): Exception while fetching versionCode for package[com.google.android.apps.tv.launcherx].
10-22 16:36:49.405 W/A       ( 3777): android.content.pm.PackageManager$NameNotFoundException: com.google.android.apps.tv.launcherx
10-22 16:36:49.857 W/Conscrypt( 2863): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:36:50.019 W/SliceDataConverter( 1036): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 16:36:50.019 W/SliceDataConverter( 1036): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 16:36:50.019 W/SliceDataConverter( 1036): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 16:36:50.135 W/SliceDataConverter( 1036): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 16:36:50.135 W/SliceDataConverter( 1036): Caused by: java.lang.ClassNotFoundException: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 16:36:50.135 W/SliceDataConverter( 1036): Caused by: java.lang.ClassNotFoundException: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 16:36:50.152 W/SliceDataConverter( 1036): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.fuelgauge.batteryusage.BatteryChartPreferenceController
10-22 16:36:50.152 W/SliceDataConverter( 1036): Caused by: java.lang.NoSuchMethodException: com.android.settings.fuelgauge.batteryusage.BatteryChartPreferenceController.<init> [class android.content.Context, class java.lang.String]
10-22 16:36:50.177 E/SystemServiceRegistry( 1036): android.os.ServiceManager$ServiceNotFoundException: No service published for: ethernet
10-22 16:36:50.182 W/SliceDataConverter( 1036): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.credentials.CredentialManagerPreferenceController
10-22 16:36:50.182 W/SliceDataConverter( 1036): Caused by: java.lang.reflect.InvocationTargetException
10-22 16:36:50.182 W/SliceDataConverter( 1036): Caused by: java.lang.RuntimeException: Can't create handler inside thread Thread[binder:1036_7,5,main] that has not called Looper.prepare()
10-22 16:36:50.193 W/SliceDataConverter( 1036): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.accessibility.VibrationMainSwitchPreferenceController
10-22 16:36:50.193 W/SliceDataConverter( 1036): Caused by: java.lang.reflect.InvocationTargetException
10-22 16:36:50.193 W/SliceDataConverter( 1036): Caused by: java.lang.RuntimeException: Can't create handler inside thread Thread[binder:1036_7,5,main] that has not called Looper.prepare()
10-22 16:36:50.200 W/SliceDataConverter( 1036): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 16:36:50.200 W/SliceDataConverter( 1036): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 16:36:50.200 W/SliceDataConverter( 1036): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 16:36:50.216 E/HardwareInfoFeatureProviderImpl( 1036): java.lang.NumberFormatException: For input string: "E"
10-22 16:36:50.218 W/SliceDataConverter( 1036): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.telephony.CallsDefaultSubscriptionController
10-22 16:36:50.218 W/SliceDataConverter( 1036): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.telephony.CallsDefaultSubscriptionController.<init> [class android.content.Context, class java.lang.String]
10-22 16:36:50.266 W/SliceDataConverter( 1036): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.telephony.CallsDefaultSubscriptionController
10-22 16:36:50.266 W/SliceDataConverter( 1036): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.telephony.CallsDefaultSubscriptionController.<init> [class android.content.Context, class java.lang.String]
10-22 16:36:50.286 W/SliceDataConverter( 1036): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.NetworkProviderSimsCategoryController
10-22 16:36:50.286 W/SliceDataConverter( 1036): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.NetworkProviderSimsCategoryController.<init> [class android.content.Context, class java.lang.String]
10-22 16:36:50.583 E/PhenotypeFlagCommitter( 2863): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:36:50.798 W/Conscrypt( 2863): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:36:51.277 W/Bugle   ( 4828): java.io.IOException: AUTHENTICATION_FAILED
10-22 16:36:51.829 W/AiAiFed ( 1519): java.lang.IllegalArgumentException: Unsupported response code3
10-22 16:36:52.100 W/RcsClientLib( 4828): Error while stopping RCS engine.
10-22 16:36:52.100 W/RcsClientLib( 4828): java.lang.IllegalStateException: JibeService Not Initialized
10-22 16:36:52.100 W/RcsClientLib( 4828): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 16:36:52.100 W/RcsClientLib( 4828): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 16:36:52.100 W/RcsClientLib( 4828): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 16:36:52.100 W/RcsClientLib( 4828): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 16:36:52.100 W/RcsClientLib( 4828): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 16:36:52.108 W/RcsClientLib( 4828): Error while stopping RCS engine.
10-22 16:36:52.108 W/RcsClientLib( 4828): java.lang.IllegalStateException: JibeService Not Initialized
10-22 16:36:52.108 W/RcsClientLib( 4828): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 16:36:52.108 W/RcsClientLib( 4828): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 16:36:52.108 W/RcsClientLib( 4828): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 16:36:52.108 W/RcsClientLib( 4828): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 16:36:52.108 W/RcsClientLib( 4828): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 16:36:52.109 W/RcsClientLib( 4828): Error while stopping RCS engine.
10-22 16:36:52.109 W/RcsClientLib( 4828): java.lang.IllegalStateException: JibeService Not Initialized
10-22 16:36:52.109 W/RcsClientLib( 4828): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 16:36:52.109 W/RcsClientLib( 4828): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 16:36:52.109 W/RcsClientLib( 4828): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 16:36:52.109 W/RcsClientLib( 4828): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 16:36:52.109 W/RcsClientLib( 4828): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 16:36:52.284 W/PeoplePU( 2863): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 16:36:52.284 W/PeoplePU( 2863): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 16:36:52.284 W/PeoplePU( 2863): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 16:36:52.284 W/PeoplePU( 2863): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 16:36:52.284 W/PeoplePU( 2863): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 16:36:52.284 W/PeoplePU( 2863): Caused by: android.os.RemoteException: Remote stack trace:
10-22 16:36:52.304 W/PeoplePU( 2863): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-22 16:36:52.601 W/RcsClientLib( 4828): Error while stopping RCS engine.
10-22 16:36:52.601 W/RcsClientLib( 4828): java.lang.IllegalStateException: JibeService Not Initialized
10-22 16:36:52.601 W/RcsClientLib( 4828): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 16:36:52.601 W/RcsClientLib( 4828): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 16:36:52.601 W/RcsClientLib( 4828): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 16:36:52.601 W/RcsClientLib( 4828): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 16:36:52.601 W/RcsClientLib( 4828): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 16:36:52.610 W/RcsClientLib( 4828): Error while stopping RCS engine.
10-22 16:36:52.610 W/RcsClientLib( 4828): java.lang.IllegalStateException: JibeService Not Initialized
10-22 16:36:52.610 W/RcsClientLib( 4828): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 16:36:52.610 W/RcsClientLib( 4828): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 16:36:52.610 W/RcsClientLib( 4828): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 16:36:52.610 W/RcsClientLib( 4828): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 16:36:52.610 W/RcsClientLib( 4828): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 16:36:52.618 W/RcsClientLib( 4828): Error while stopping RCS engine.
10-22 16:36:52.618 W/RcsClientLib( 4828): java.lang.IllegalStateException: JibeService Not Initialized
10-22 16:36:52.618 W/RcsClientLib( 4828): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 16:36:52.618 W/RcsClientLib( 4828): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 16:36:52.618 W/RcsClientLib( 4828): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 16:36:52.618 W/RcsClientLib( 4828): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 16:36:52.618 W/RcsClientLib( 4828): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 16:36:52.898 E/enyj    ( 2863): java.lang.RuntimeException: ManagedChannel allocation site
10-22 16:36:53.379 I/NearbyDiscovery( 3614): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:36:53.656 E/BugleRcsEngine( 5141): [2] JibeService.onDestroy: JibeService: onDestroy() unregister factory exception: java.lang.IllegalArgumentException: Receiver not registered: com.google.android.ims.receiver.sip.DebugOptionsReceiver@188c464
10-22 16:36:54.317 I/SemanticLocation( 3614): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 16:36:54.317 I/SemanticLocation( 3614): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 16:36:54.616 I/SemanticLocation( 3614): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 16:36:54.616 I/SemanticLocation( 3614): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 16:36:55.586 W/BugleNetwork( 4828): RegistrationProvider: Got error in StatusRuntimeException. Notifying tachyon registration error listeners, error: 1, status: INVALID_ARGUMENT
10-22 16:36:56.171 E/PhenotypeFlagCommitter( 2863): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 16:36:58.039 E/RecoverySnapshotStorage(  522): Error reading snapshot for 10131 from disk
10-22 16:36:58.039 E/RecoverySnapshotStorage(  522): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 16:36:58.039 E/RecoverySnapshotStorage(  522): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 16:36:58.721 E/RecoverySnapshotStorage(  522): Error reading snapshot for 10131 from disk
10-22 16:36:58.721 E/RecoverySnapshotStorage(  522): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 16:36:58.721 E/RecoverySnapshotStorage(  522): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 16:36:58.779 E/keystore2(  158):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 16:36:58.780 W/RecoverableKeyStoreGms( 2863): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 16:36:58.780 W/RecoverableKeyStoreGms( 2863): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 16:36:58.780 W/RecoverableKeyStoreGms( 2863): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 16:36:58.780 W/RecoverableKeyStoreGms( 2863): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 16:36:58.780 W/RecoverableKeyStoreGms( 2863): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 16:36:58.780 W/RecoverableKeyStoreGms( 2863): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 16:36:58.780 W/RecoverableKeyStoreGms( 2863): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 16:36:58.780 W/RecoverableKeyStoreGms( 2863): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 16:36:58.917 W/ApkChecksums(  522): android.os.DeadObjectException
10-22 16:37:00.355 W/Conscrypt( 3614): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:37:00.665 W/NetworkScheduler( 3614): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 16:37:00.750 W/Conscrypt( 3614): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:37:01.146 W/SP.AiAi ( 1519): Error downloading: manifests:webref-2-en-us-19071200
10-22 16:37:02.091 W/Conscrypt( 2863): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 16:37:02.301 W/Conscrypt( 2863): Could not set socket write timeout: java.net.SocketException: Socket closed
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 844 packages, and audited 845 packages in 27s

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
total 103964
drwxr-xr-x  2 runner runner      4096 Oct 22 16:32 .
drwxr-xr-x 14 runner runner      4096 Oct 22 16:32 ..
-rw-r--r--  1 runner runner 106450258 Oct 22 16:32 ergo-1.0.0-build31.apk
```

## Gradle
```
648:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1053:BUILD SUCCESSFUL in 6m 50s
---
> Task :react-native-google-signin_google-signin:writeReleaseLintModelMetadata
> Task :react-native-reanimated:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-safe-area-context:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-masked-view_masked-view:writeReleaseLintModelMetadata
> Task :react-native-screens:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-safe-area-context:writeReleaseLintModelMetadata
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
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
> Task :react-native-worklets:bundleReleaseAar
> Task :react-native-worklets:mergeReleaseResources FROM-CACHE
> Task :react-native-worklets:verifyReleaseResources FROM-CACHE
> Task :react-native-worklets:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792686368173.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 6m 50s
742 actionable tasks: 482 executed, 260 from cache
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
