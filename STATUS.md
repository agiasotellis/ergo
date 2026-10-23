# Android build 38: success

Disk: /dev/root       145G   61G   85G  42% /

- Commit: 47467fd3368bb366a25a9d7d2246444a795a70c4
- Run: https://github.com/agiasotellis/ergo/actions/runs/40001207209
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-38

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
    total 105028
    drwxr-xr-x  2 runner runner      4096 Oct 23 18:15 .
    drwxr-xr-x 15 runner runner      4096 Oct 23 18:15 ..
    -rw-r--r--  1 runner runner 107539364 Oct 23 18:15 ergo-1.0.0-build38.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-23 18:17:27.551 D/AndroidRuntime( 4054): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-23 18:17:27.558 I/AndroidRuntime( 4054): Using default boot image
10-23 18:17:27.564 I/AndroidRuntime( 4054): Leaving lock profiling enabled
10-23 18:17:27.754 D/AndroidRuntime( 4054): Calling main entry com.android.commands.monkey.Monkey
10-23 18:17:27.953 I/AndroidRuntime( 4054): VM exiting with result code 0.

=== React Native / Expo ===
10-23 18:17:58.414 W/PhenotypeCommitHelper( 1416): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.wallet(change count changed - expected 3  but was 2)
10-23 18:17:58.966 W/CorpusConfigHelper( 1767): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 18:17:58.966 W/CorpusConfigHelper( 1767): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 18:17:59.197 W/CorpusConfigHelper( 1767): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 18:17:59.197 W/CorpusConfigHelper( 1767): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 18:17:59.266 W/PeoplePU( 1465): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-23 18:17:59.266 W/PeoplePU( 1465): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 18:17:59.266 W/PeoplePU( 1465): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 18:17:59.266 W/PeoplePU( 1465): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 18:17:59.266 W/PeoplePU( 1465): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 18:17:59.266 W/PeoplePU( 1465): Caused by: android.os.RemoteException: Remote stack trace:
10-23 18:17:59.268 W/PeoplePU( 1465): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-23 18:17:59.268 W/PeoplePU( 1465): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 18:17:59.268 W/PeoplePU( 1465): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 18:17:59.268 W/PeoplePU( 1465): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 18:17:59.268 W/PeoplePU( 1465): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 18:17:59.268 W/PeoplePU( 1465): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-23 18:17:59.268 W/PeoplePU( 1465): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 18:17:59.268 W/PeoplePU( 1465): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 18:17:59.268 W/PeoplePU( 1465): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 18:17:59.268 W/PeoplePU( 1465): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 18:17:59.391 W/Vision  ( 1465): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-23 18:17:59.401 W/Vision  ( 1465): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-23 18:17:59.452 W/NetworkScheduler( 1416): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-23 18:18:00.310 W/TapAndPay( 1416): java.lang.NullPointerException: NfcAdapter is null
10-23 18:18:01.085 W/AsyncOperation( 1416): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.nearby(change count changed - expected 5  but was 4), resolution=null}]
10-23 18:18:01.086 W/PhenotypeFlagCommitter( 1416): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.nearby(change count changed - expected 5  but was 4)
10-23 18:18:01.087 W/PhenotypeCommitHelper( 1416): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.nearby(change count changed - expected 5  but was 4)
10-23 18:18:01.288 W/CorpusConfigHelper( 1767): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 18:18:01.288 W/CorpusConfigHelper( 1767): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 18:18:01.294 W/GmsPipelineLogger( 1465): java.lang.NullPointerException
10-23 18:18:01.478 W/CorpusConfigHelper( 1767): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 18:18:01.478 W/CorpusConfigHelper( 1767): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 18:18:01.561 W/Vision  ( 1465): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-23 18:18:01.567 W/Vision  ( 1465): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-23 18:18:01.626 W/NetworkScheduler( 1416): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-23 18:18:01.718 W/PeoplePU( 1465): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-23 18:18:01.718 W/PeoplePU( 1465): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 18:18:01.718 W/PeoplePU( 1465): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 18:18:01.718 W/PeoplePU( 1465): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 18:18:01.718 W/PeoplePU( 1465): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 18:18:01.718 W/PeoplePU( 1465): Caused by: android.os.RemoteException: Remote stack trace:
10-23 18:18:01.721 W/PeoplePU( 1465): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-23 18:18:01.721 W/PeoplePU( 1465): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 18:18:01.721 W/PeoplePU( 1465): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 18:18:01.721 W/PeoplePU( 1465): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 18:18:01.721 W/PeoplePU( 1465): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 18:18:01.727 W/PeoplePU( 1465): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-23 18:18:01.727 W/PeoplePU( 1465): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 18:18:01.727 W/PeoplePU( 1465): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 18:18:01.727 W/PeoplePU( 1465): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 18:18:01.727 W/PeoplePU( 1465): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 18:18:01.794 W/ActivityManager(  527): Exception when unbinding service com.google.android.gms/.lockbox.service.LockboxBrokerService
10-23 18:18:01.794 W/ActivityManager(  527): android.os.DeadObjectException
10-23 18:18:01.794 W/ActivityManager(  527): Exception when unbinding service com.google.android.gms/.chimera.PersistentApiService
10-23 18:18:01.794 W/ActivityManager(  527): android.os.DeadObjectException
10-23 18:18:01.795 W/ActivityManager(  527): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.WakeUpService in 31000ms for connection
10-23 18:18:01.809 W/ActivityManager(  527): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureNotificationInternalService in 220986ms for start-requested
10-23 18:18:01.814 W/ActivityManager(  527): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureMatchingService in 260981ms for start-requested
10-23 18:18:02.082 E/PackageManager(  527): java.util.concurrent.TimeoutException: [Optimistic Bind] Didn't bind to resolver in time!
10-23 18:18:02.092 W/CorpusConfigHelper( 1767): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 18:18:02.092 W/CorpusConfigHelper( 1767): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 18:18:02.652 W/ConfigFileUtils( 5045): Failed to read asset ChimeraModuleSetList.pb: java.io.FileNotFoundException: ChimeraModuleSetList.pb
10-23 18:18:02.734 W/GmsPipelineLogger( 4991): java.lang.NullPointerException
10-23 18:18:03.032 I/SemanticLocation( 4991): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-23 18:18:03.032 I/SemanticLocation( 4991): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-23 18:18:03.047 E/ChimeraUPLUtils( 5045): Failed to invoke updateComplete: android.os.DeadObjectException
10-23 18:18:03.153 E/ChimeraUPLUtils( 5045): Failed to invoke updateComplete: android.os.DeadObjectException
10-23 18:18:03.372 E/ChimeraUPLUtils( 5045): Failed to invoke updateComplete: android.os.DeadObjectException
10-23 18:18:03.520 I/SemanticLocation( 4991): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-23 18:18:03.520 I/SemanticLocation( 4991): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-23 18:18:03.800 W/Conscrypt( 5045): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 18:18:03.861 W/Conscrypt( 5045): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 18:18:03.988 W/GLSUser ( 4991): [AppCertManager] Exception while requesting key: 
10-23 18:18:03.988 W/GLSUser ( 4991): java.util.concurrent.ExecutionException: avvw: Parse Proto Exception.
10-23 18:18:03.988 W/GLSUser ( 4991): Caused by: avvw: Parse Proto Exception.
10-23 18:18:04.014 W/Conscrypt( 4991): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 18:18:04.314 W/Conscrypt( 5045): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 18:18:04.317 W/Conscrypt( 4991): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 18:18:04.341 W/Conscrypt( 5045): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 18:18:06.006 W/AsyncOperation( 4991): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 3  but was 1), resolution=null}]
10-23 18:18:06.014 W/AsyncOperation( 4991): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 3  but was 1), resolution=null}]
10-23 18:18:06.018 W/AsyncOperation( 4991): OperationException[Status{statusCode=Stale snapshot for com.google.android.libraries.consentverifier#com.google.android.gms(change count changed - expected 5  but was 3), resolution=null}]
10-23 18:18:06.097 E/RecoverySnapshotStorage(  527): Error reading snapshot for 10131 from disk
10-23 18:18:06.097 E/RecoverySnapshotStorage(  527): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-23 18:18:06.097 E/RecoverySnapshotStorage(  527): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-23 18:18:06.099 E/keystore2(  161):     3: Error::Rc(r#SYSTEM_ERROR)
10-23 18:18:06.100 W/RecoverableKeyStoreGms( 5045): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-23 18:18:06.100 W/RecoverableKeyStoreGms( 5045): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-23 18:18:06.100 W/RecoverableKeyStoreGms( 5045): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-23 18:18:06.100 W/RecoverableKeyStoreGms( 5045): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-23 18:18:06.100 W/RecoverableKeyStoreGms( 5045): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-23 18:18:06.100 W/RecoverableKeyStoreGms( 5045): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 18:18:06.100 W/RecoverableKeyStoreGms( 5045): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 18:18:06.100 W/RecoverableKeyStoreGms( 5045): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 18:18:06.148 E/dlpn    ( 4991): RuntimeException while executing runnable dlqc{qze@b4a0a02} with executor MoreExecutors.directExecutor()
10-23 18:18:06.148 E/dlpn    ( 4991): java.lang.NullPointerException: Attempt to get length of null array
10-23 18:18:06.655 W/PeoplePU( 5045): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-23 18:18:06.655 W/PeoplePU( 5045): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 18:18:06.655 W/PeoplePU( 5045): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 18:18:06.655 W/PeoplePU( 5045): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 18:18:06.655 W/PeoplePU( 5045): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 18:18:06.708 W/TapAndPay( 4991): java.lang.NullPointerException: NfcAdapter is null
10-23 18:18:06.758 W/Conscrypt( 5045): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 18:18:06.894 I/SemanticLocation( 4991): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-23 18:18:06.894 I/SemanticLocation( 4991): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-23 18:18:06.920 I/SemanticLocation( 4991): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-23 18:18:06.920 I/SemanticLocation( 4991): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-23 18:18:07.002 W/Conscrypt( 5045): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 18:18:07.640 W/Conscrypt( 5045): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 18:18:08.146 W/Conscrypt( 5045): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 18:18:08.238 E/PhenotypeFlagCommitter( 5045): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-23 18:18:09.759 E/bwel    ( 4991): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-23 18:18:11.651 W/AsyncOperation( 4991): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.pay(change count changed - expected 6  but was 5), resolution=null}]
10-23 18:18:11.651 W/PhenotypeFlagCommitter( 4991): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.pay(change count changed - expected 6  but was 5)
10-23 18:18:11.651 W/PhenotypeCommitHelper( 4991): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.pay(change count changed - expected 6  but was 5)
10-23 18:18:11.915 E/cr_CronetUrlRequestContext( 1767): Exception in upload method
10-23 18:18:11.915 E/cr_CronetUrlRequestContext( 1767): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-23 18:18:11.918 E/A       ( 1767): onError
10-23 18:18:12.016 W/CorpusConfigHelper( 1767): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 18:18:12.016 W/CorpusConfigHelper( 1767): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 18:18:12.193 W/PeoplePU( 5045): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-23 18:18:12.193 W/PeoplePU( 5045): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 18:18:12.193 W/PeoplePU( 5045): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 18:18:12.193 W/PeoplePU( 5045): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 18:18:12.193 W/PeoplePU( 5045): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 18:18:12.193 W/PeoplePU( 5045): Caused by: android.os.RemoteException: Remote stack trace:
10-23 18:18:12.194 W/PeoplePU( 5045): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-23 18:18:12.194 W/PeoplePU( 5045): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 18:18:12.194 W/PeoplePU( 5045): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 18:18:12.194 W/PeoplePU( 5045): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 18:18:12.194 W/PeoplePU( 5045): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 18:18:12.196 W/PeoplePU( 5045): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-23 18:18:12.196 W/PeoplePU( 5045): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 18:18:12.196 W/PeoplePU( 5045): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 18:18:12.196 W/PeoplePU( 5045): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 18:18:12.196 W/PeoplePU( 5045): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 18:18:12.260 W/CorpusConfigHelper( 1767): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 18:18:12.260 W/CorpusConfigHelper( 1767): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 18:18:12.401 W/CorpusConfigHelper( 1767): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 18:18:12.401 W/CorpusConfigHelper( 1767): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 18:18:14.243 W/Vision  ( 5045): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-23 18:18:14.248 W/Vision  ( 5045): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-23 18:18:14.294 W/NetworkScheduler( 4991): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-23 18:18:25.425 E/d       ( 1767): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@5f813dc} with executor MoreExecutors.directExecutor()
10-23 18:18:25.425 E/d       ( 1767): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-23 18:18:25.428 E/d       ( 1767): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@ce091c8} with executor MoreExecutors.directExecutor()
10-23 18:18:25.428 E/d       ( 1767): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-23 18:18:25.434 E/d       ( 1767): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@4510274} with executor MoreExecutors.directExecutor()
10-23 18:18:25.434 E/d       ( 1767): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 845 packages, and audited 846 packages in 12s

180 packages are looking for funding
  run `npm fund` for details

9 vulnerabilities (3 moderate, 6 high)

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
total 105028
drwxr-xr-x  2 runner runner      4096 Oct 23 18:15 .
drwxr-xr-x 15 runner runner      4096 Oct 23 18:15 ..
-rw-r--r--  1 runner runner 107539364 Oct 23 18:15 ergo-1.0.0-build38.apk
```

## Gradle
```
1063:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1090:BUILD SUCCESSFUL in 2m 24s
---
> Task :react-native-gesture-handler:bundleLibRuntimeToJarRelease
> Task :react-native-gesture-handler:copyReleaseJniLibsProjectOnly
> Task :react-native-gesture-handler:processReleaseJavaRes
> Task :react-native-gesture-handler:createFullJarRelease
> Task :react-native-gesture-handler:generateReleaseLintModel
> Task :react-native-gesture-handler:checkReleaseAarMetadata
> Task :react-native-gesture-handler:extractDeepLinksForAarRelease FROM-CACHE
> Task :react-native-gesture-handler:stripReleaseDebugSymbols
> Task :react-native-gesture-handler:extractReleaseAnnotations FROM-CACHE
> Task :react-native-gesture-handler:mergeReleaseGeneratedProguardFiles
> Task :react-native-gesture-handler:mergeReleaseConsumerProguardFiles
> Task :react-native-gesture-handler:copyReleaseJniLibsProjectAndLocalJars
> Task :react-native-gesture-handler:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-gesture-handler:writeReleaseLintModelMetadata
> Task :react-native-gesture-handler:mergeReleaseJavaResource
> Task :react-native-gesture-handler:generateReleaseLintVitalModel
> Task :react-native-gesture-handler:syncReleaseLibJars FROM-CACHE
> Task :react-native-gesture-handler:bundleReleaseLocalLintAar
> Task :react-native-gesture-handler:bundleReleaseAar
> Task :react-native-gesture-handler:mergeReleaseResources FROM-CACHE
> Task :react-native-gesture-handler:verifyReleaseResources FROM-CACHE
> Task :react-native-gesture-handler:assembleRelease
> Task :react-native-reanimated:bundleReleaseAar
> Task :react-native-reanimated:mergeReleaseResources FROM-CACHE
> Task :react-native-reanimated:verifyReleaseResources FROM-CACHE
> Task :react-native-reanimated:assembleRelease
> Task :app:configureCMakeRelWithDebInfo[arm64-v8a]
> Task :app:buildCMakeRelWithDebInfo[arm64-v8a]
> Task :app:configureCMakeRelWithDebInfo[x86_64]
> Task :app:buildCMakeRelWithDebInfo[x86_64]
> Task :app:generateReleaseResValues
> Task :app:generateReleaseResources FROM-CACHE
> Task :app:processReleaseGoogleServices FROM-CACHE
> Task :app:packageReleaseResources
> Task :app:mergeReleaseNativeLibs
> Task :app:processReleaseNavigationResources FROM-CACHE
> Task :app:javaPreCompileRelease FROM-CACHE
> Task :app:parseReleaseLocalResources
> Task :app:stripReleaseDebugSymbols
> Task :app:checkReleaseAarMetadata
> Task :app:extractReleaseNativeSymbolTables FROM-CACHE
> Task :app:generateReleaseRFile FROM-CACHE
> Task :app:mapReleaseSourceSetPaths
> Task :app:compileReleaseNavigationResources FROM-CACHE
> Task :app:mergeReleaseNativeDebugMetadata
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
> Task :app:mergeReleaseResources
> Task :app:mergeExtDexRelease FROM-CACHE
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseArtProfile
> Task :app:mergeReleaseAssets
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
> Task :app:compressReleaseAssets
> Task :app:collectReleaseDependencies
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease
> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :app:processReleaseResources

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:compileReleaseJavaWithJavac
> Task :app:dexBuilderRelease
> Task :app:mergeReleaseGlobalSynthetics FROM-CACHE
> Task :app:generateReleaseLintVitalReportModel
> Task :app:optimizeReleaseResources
> Task :app:processReleaseJavaRes
> Task :app:mergeReleaseJavaResource
> Task :app:lintVitalAnalyzeRelease
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :app:mergeDexRelease
> Task :app:compileReleaseArtProfile
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792779195956.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 2m 24s
784 actionable tasks: 503 executed, 281 from cache
Cacheable calls:   724 / 736 (98.37%)
  Hits:            724 / 724 (100.0%)
    Direct:        724 / 724 (100.0%)
    Preprocessed:    0 / 724 ( 0.00%)
  Misses:            0 / 724 ( 0.00%)
Uncacheable calls:  12 / 736 ( 1.63%)
Local storage:
  Cache size (GB): 0.6 / 3.0 (19.62%)
  Hits:            724 / 724 (100.0%)
  Misses:            0 / 724 ( 0.00%)
```
