# Android build 26: success

Disk: /dev/root        72G   60G   13G  83% /

- Commit: 43b21bde112f55b36f93e4d63aee5f10a36ac9bd
- Run: https://github.com/agiasotellis/ergo/actions/runs/39774932590
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-26

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
    drwxr-xr-x  2 runner runner      4096 Oct 22 12:08 .
    drwxr-xr-x 14 runner runner      4096 Oct 22 12:08 ..
    -rw-r--r--  1 runner runner 106390586 Oct 22 12:08 ergo-1.0.0-build26.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-22 12:11:44.239 D/AndroidRuntime( 3154): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-22 12:11:44.251 I/AndroidRuntime( 3154): Using default boot image
10-22 12:11:44.257 I/AndroidRuntime( 3154): Leaving lock profiling enabled
10-22 12:11:44.613 D/AndroidRuntime( 3154): Calling main entry com.android.commands.monkey.Monkey
10-22 12:11:45.926 I/AndroidRuntime( 3154): VM exiting with result code 0.

=== React Native / Expo ===
10-22 12:12:35.474 E/IndexablesProvider( 5253): java.lang.IllegalStateException: We should initialize FormFactorUtils before getting instance.
10-22 12:12:35.507 W/Conscrypt( 4676): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:36.447 W/BugleRcs( 5233): android.content.pm.PackageManager$NameNotFoundException: com.google.android.ims
10-22 12:12:36.533 W/Conscrypt( 4676): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:36.741 W/AiAiFed ( 1569): java.lang.IllegalArgumentException: Unsupported response code3
10-22 12:12:36.988 W/GLSUser ( 4676): [AppCertManager] Exception while requesting key: 
10-22 12:12:36.988 W/GLSUser ( 4676): java.io.IOException: Invalid device key response.
10-22 12:12:37.358 W/PhenotypeRegOp( 2365): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 12:12:37.708 W/Conscrypt( 4676): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:38.108 E/bwel    ( 4676): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 12:12:38.158 I/SemanticLocation( 4676): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/default_model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 12:12:38.158 I/SemanticLocation( 4676): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:12:38.472 I/SemanticLocation( 4676): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 12:12:38.472 I/SemanticLocation( 4676): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:12:38.503 W/Conscrypt( 4676): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:38.809 W/FontLog ( 4676): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 104854 nanoseconds delay) for dlrl@3dc4923[status=PENDING]
10-22 12:12:38.820 D/StrictMode( 4372): 	at android.os.Parcel.readExceptionCode(Parcel.java:3002)
10-22 12:12:38.820 D/StrictMode( 4372): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-22 12:12:38.820 D/StrictMode( 4372): 	at android.os.Parcel.readExceptionCode(Parcel.java:3002)
10-22 12:12:38.820 D/StrictMode( 4372): 	at android.database.DatabaseUtils.readExceptionFromParcel(DatabaseUtils.java:139)
10-22 12:12:39.458 W/Conscrypt( 4676): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:39.924 E/A       ( 3244): onError
10-22 12:12:40.173 I/SemanticLocation( 4676): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 12:12:40.173 I/SemanticLocation( 4676): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:12:40.420 W/Conscrypt( 4676): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:41.679 E/RecoverySnapshotStorage(  512): Error reading snapshot for 10131 from disk
10-22 12:12:41.679 E/RecoverySnapshotStorage(  512): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 12:12:41.679 E/RecoverySnapshotStorage(  512): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:12:41.823 E/Vision  ( 2365): Couldn't read checkbot setting: android.provider.Settings$SettingNotFoundException: multi_cb
10-22 12:12:42.701 E/RecoverySnapshotStorage(  512): Error reading snapshot for 10131 from disk
10-22 12:12:42.701 E/RecoverySnapshotStorage(  512): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 12:12:42.701 E/RecoverySnapshotStorage(  512): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:12:42.704 E/keystore2(  147):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 12:12:42.704 W/RecoverableKeyStoreGms( 2365): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 12:12:42.704 W/RecoverableKeyStoreGms( 2365): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 12:12:42.704 W/RecoverableKeyStoreGms( 2365): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 12:12:42.704 W/RecoverableKeyStoreGms( 2365): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 12:12:42.704 W/RecoverableKeyStoreGms( 2365): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 12:12:42.704 W/RecoverableKeyStoreGms( 2365): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 12:12:42.704 W/RecoverableKeyStoreGms( 2365): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 12:12:42.704 W/RecoverableKeyStoreGms( 2365): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 12:12:44.148 W/NetworkScheduler( 4676): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 12:12:45.014 W/Conscrypt( 4676): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:45.240 W/Conscrypt( 4676): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:45.452 W/Conscrypt( 2365): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:45.673 W/Conscrypt( 2365): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:46.050 W/FontLog ( 4676): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 668814 nanoseconds delay) for dlrl@a5f328c[status=PENDING]
10-22 12:12:46.067 W/Bugle   ( 5233): java.lang.RuntimeException: fetchFonts result is not OK. (2)
10-22 12:12:46.166 W/AsyncOperation( 4676): OperationException[Status{statusCode=unknown status code: 29503, resolution=null}]
10-22 12:12:46.501 W/SliceDataConverter( 1027): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.telephony.CallsDefaultSubscriptionController
10-22 12:12:46.501 W/SliceDataConverter( 1027): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.telephony.CallsDefaultSubscriptionController.<init> [class android.content.Context, class java.lang.String]
10-22 12:12:46.508 W/SliceDataConverter( 1027): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.credentials.CredentialManagerPreferenceController
10-22 12:12:46.508 W/SliceDataConverter( 1027): Caused by: java.lang.reflect.InvocationTargetException
10-22 12:12:46.508 W/SliceDataConverter( 1027): Caused by: java.lang.RuntimeException: Can't create handler inside thread Thread[binder:1027_2,5,main] that has not called Looper.prepare()
10-22 12:12:46.528 E/SystemServiceRegistry( 1027): android.os.ServiceManager$ServiceNotFoundException: No service published for: ethernet
10-22 12:12:46.663 W/SliceDataConverter( 1027): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.telephony.CallsDefaultSubscriptionController
10-22 12:12:46.663 W/SliceDataConverter( 1027): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.telephony.CallsDefaultSubscriptionController.<init> [class android.content.Context, class java.lang.String]
10-22 12:12:46.671 E/HardwareInfoFeatureProviderImpl( 1027): java.lang.NumberFormatException: For input string: "E"
10-22 12:12:46.697 W/SliceDataConverter( 1027): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.fuelgauge.batteryusage.BatteryChartPreferenceController
10-22 12:12:46.697 W/SliceDataConverter( 1027): Caused by: java.lang.NoSuchMethodException: com.android.settings.fuelgauge.batteryusage.BatteryChartPreferenceController.<init> [class android.content.Context, class java.lang.String]
10-22 12:12:46.710 W/SliceDataConverter( 1027): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 12:12:46.710 W/SliceDataConverter( 1027): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 12:12:46.710 W/SliceDataConverter( 1027): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 12:12:46.717 W/SliceDataConverter( 1027): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 12:12:46.717 W/SliceDataConverter( 1027): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 12:12:46.717 W/SliceDataConverter( 1027): Caused by: java.lang.ClassNotFoundException: com.android.settings.applications.appinfo.ManageAppLocalePreferenceController
10-22 12:12:46.718 W/SliceDataConverter( 1027): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.accessibility.VibrationMainSwitchPreferenceController
10-22 12:12:46.718 W/SliceDataConverter( 1027): Caused by: java.lang.reflect.InvocationTargetException
10-22 12:12:46.718 W/SliceDataConverter( 1027): Caused by: java.lang.RuntimeException: Can't create handler inside thread Thread[binder:1027_2,5,main] that has not called Looper.prepare()
10-22 12:12:46.720 W/SliceDataConverter( 1027): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 12:12:46.720 W/SliceDataConverter( 1027): Caused by: java.lang.ClassNotFoundException: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 12:12:46.720 W/SliceDataConverter( 1027): Caused by: java.lang.ClassNotFoundException: com.android.settings.development.DevelopmentMemtagFooterPreferenceController
10-22 12:12:46.721 W/SliceDataConverter( 1027): java.lang.IllegalStateException: Invalid preference controller: com.android.settings.network.NetworkProviderSimsCategoryController
10-22 12:12:46.721 W/SliceDataConverter( 1027): Caused by: java.lang.NoSuchMethodException: com.android.settings.network.NetworkProviderSimsCategoryController.<init> [class android.content.Context, class java.lang.String]
10-22 12:12:47.400 W/PhenotypeRegOp( 2365): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 12:12:47.593 E/RecoverySnapshotStorage(  512): Error reading snapshot for 10131 from disk
10-22 12:12:47.593 E/RecoverySnapshotStorage(  512): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 12:12:47.593 E/RecoverySnapshotStorage(  512): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:12:47.595 E/keystore2(  147):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 12:12:47.596 W/RecoverableKeyStoreGms( 2365): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 12:12:47.596 W/RecoverableKeyStoreGms( 2365): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 12:12:47.596 W/RecoverableKeyStoreGms( 2365): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 12:12:47.596 W/RecoverableKeyStoreGms( 2365): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 12:12:47.596 W/RecoverableKeyStoreGms( 2365): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 12:12:47.596 W/RecoverableKeyStoreGms( 2365): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 12:12:47.596 W/RecoverableKeyStoreGms( 2365): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 12:12:47.596 W/RecoverableKeyStoreGms( 2365): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 12:12:48.220 W/Conscrypt( 2365): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:48.348 W/CorpusConfigHelper( 3244): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 12:12:48.348 W/CorpusConfigHelper( 3244): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 12:12:48.549 E/RecoverySnapshotStorage(  512): Error reading snapshot for 10131 from disk
10-22 12:12:48.549 E/RecoverySnapshotStorage(  512): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 12:12:48.549 E/RecoverySnapshotStorage(  512): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:12:48.552 E/keystore2(  147):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 12:12:48.553 W/RecoverableKeyStoreGms( 2365): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 12:12:48.553 W/RecoverableKeyStoreGms( 2365): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 12:12:48.553 W/RecoverableKeyStoreGms( 2365): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 12:12:48.553 W/RecoverableKeyStoreGms( 2365): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 12:12:48.553 W/RecoverableKeyStoreGms( 2365): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 12:12:48.553 W/RecoverableKeyStoreGms( 2365): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 12:12:48.553 W/RecoverableKeyStoreGms( 2365): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 12:12:48.553 W/RecoverableKeyStoreGms( 2365): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 12:12:48.589 W/Conscrypt( 2365): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:48.627 W/PhenotypeCommitHelper( 4676): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 12:12:48.627 E/PhenotypeFlagCommitter( 4676): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 12:12:49.378 E/VS.BluetoothShim( 3527): Error locating SCO method
10-22 12:12:49.378 E/VS.BluetoothShim( 3527): java.lang.NoSuchMethodException: android.bluetooth.BluetoothHeadset.startScoUsingVirtualVoiceCall [class android.bluetooth.BluetoothDevice]
10-22 12:12:50.125 E/PhenotypeFlagCommitter( 2365): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 12:12:50.131 W/NetworkScheduler( 4676): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 12:12:50.549 W/Icing   ( 2365): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 12:12:51.594 W/PeoplePU( 2365): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 12:12:51.594 W/PeoplePU( 2365): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 12:12:51.594 W/PeoplePU( 2365): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 12:12:51.594 W/PeoplePU( 2365): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 12:12:51.594 W/PeoplePU( 2365): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 12:12:51.594 W/PeoplePU( 2365): Caused by: android.os.RemoteException: Remote stack trace:
10-22 12:12:51.638 W/PeoplePU( 2365): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-22 12:12:51.972 W/RcsClientLib( 5233): Error while stopping RCS engine.
10-22 12:12:51.972 W/RcsClientLib( 5233): java.lang.IllegalStateException: JibeService Not Initialized
10-22 12:12:51.972 W/RcsClientLib( 5233): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-22 12:12:51.972 W/RcsClientLib( 5233): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 12:12:51.972 W/RcsClientLib( 5233): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 12:12:51.972 W/RcsClientLib( 5233): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 12:12:51.972 W/RcsClientLib( 5233): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-22 12:12:52.382 E/enyj    ( 2365): java.lang.RuntimeException: ManagedChannel allocation site
10-22 12:12:52.479 E/BugleRcsEngine( 5629): [2] JibeService.onDestroy: JibeService: onDestroy() unregister factory exception: java.lang.IllegalArgumentException: Receiver not registered: com.google.android.ims.receiver.sip.DebugOptionsReceiver@9b3831d
10-22 12:12:52.508 E/enyj    ( 2365): java.lang.RuntimeException: ManagedChannel allocation site
10-22 12:12:52.671 W/Icing   ( 2365): Usage reports not received in time.: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 12:12:52.872 W/Conscrypt( 4676): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:52.967 W/Conscrypt( 4676): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:53.235 W/Conscrypt( 2365): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:53.637 I/NearbyDiscovery( 4676): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 12:12:53.763 W/Conscrypt( 2365): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 12:12:53.943 I/SemanticLocation( 4676): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 12:12:53.943 I/SemanticLocation( 4676): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:12:54.231 W/ApkChecksums(  512): android.os.DeadObjectException
10-22 12:12:54.292 I/SemanticLocation( 4676): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 12:12:54.292 I/SemanticLocation( 4676): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 12:12:55.053 E/PhenotypeFlagCommitter( 2365): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 12:12:55.823 W/ModernMediaScanner( 1530): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 12:12:55.837 W/ModernMediaScanner( 1530): android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: files._data (code 2067 SQLITE_CONSTRAINT_UNIQUE)
10-22 12:12:56.328 E/NotificationListeners(  512): android.os.DeadObjectException
10-22 12:12:56.370 E/NotificationListeners(  512): android.os.DeadObjectException
10-22 12:12:56.442 E/NotificationListeners(  512): android.os.DeadObjectException
10-22 12:12:57.690 E/NotificationListeners(  512): android.os.DeadObjectException
10-22 12:12:58.484 W/RingtonePlayer( 4303): java.io.IOException: setDataSource failed.: status=0x80000000
10-22 12:12:58.766 W/AiAiFed ( 1569): java.lang.IllegalArgumentException: Unsupported response code3
10-22 12:12:59.026 W/AiAiFed ( 1569): java.lang.IllegalArgumentException: Unsupported response code3
10-22 12:12:59.957 E/NotificationListeners(  512): android.os.DeadObjectException
10-22 12:13:00.869 E/NotificationListeners(  512): android.os.DeadObjectException
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
total 103908
drwxr-xr-x  2 runner runner      4096 Oct 22 12:08 .
drwxr-xr-x 14 runner runner      4096 Oct 22 12:08 ..
-rw-r--r--  1 runner runner 106390586 Oct 22 12:08 ergo-1.0.0-build26.apk
```

## Gradle
```
996:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1040:BUILD SUCCESSFUL in 5m 56s
---
> Task :react-native-gesture-handler:assembleRelease
> Task :react-native-google-signin_google-signin:bundleReleaseAar
> Task :react-native-google-signin_google-signin:mergeReleaseResources FROM-CACHE
> Task :react-native-google-signin_google-signin:verifyReleaseResources FROM-CACHE
> Task :react-native-google-signin_google-signin:assembleRelease
> Task :react-native-masked-view_masked-view:bundleReleaseAar
> Task :react-native-masked-view_masked-view:mergeReleaseResources FROM-CACHE
> Task :react-native-masked-view_masked-view:verifyReleaseResources FROM-CACHE
> Task :react-native-masked-view_masked-view:assembleRelease
> Task :app:buildCMakeRelWithDebInfo[arm64-v8a]
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
> Task :react-native-worklets:mergeReleaseResources FROM-CACHE
> Task :react-native-worklets:verifyReleaseResources FROM-CACHE
> Task :react-native-worklets:assembleRelease
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

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:processReleaseManifest
> Task :app:compileReleaseJavaWithJavac
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
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :app:processReleaseJavaRes
> Task :app:mergeDexRelease
> Task :app:mergeReleaseJavaResource
> Task :app:optimizeReleaseResources
> Task :app:compileReleaseArtProfile
> Task :app:collectReleaseDependencies
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease
> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792670582301.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 5m 56s
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
