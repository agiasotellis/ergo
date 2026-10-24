# Android build 39: success

Disk: /dev/root       145G   61G   85G  42% /

- Commit: c7abc6d86a94e3687b7d881fa18a0873580f9710
- Run: https://github.com/agiasotellis/ergo/actions/runs/40084707030
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-39

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
    drwxr-xr-x  2 runner runner      4096 Oct 24 10:13 .
    drwxr-xr-x 15 runner runner      4096 Oct 24 10:13 ..
    -rw-r--r--  1 runner runner 107539484 Oct 24 10:13 ergo-1.0.0-build39.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-24 10:15:53.474 D/AndroidRuntime( 4027): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-24 10:15:53.476 I/AndroidRuntime( 4027): Using default boot image
10-24 10:15:53.476 I/AndroidRuntime( 4027): Leaving lock profiling enabled
10-24 10:15:53.575 D/AndroidRuntime( 4027): Calling main entry com.android.commands.monkey.Monkey
10-24 10:15:54.254 I/AndroidRuntime( 4027): VM exiting with result code 0.

=== React Native / Expo ===
10-24 10:16:15.453 W/CorpusConfigHelper( 1748): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-24 10:16:16.247 W/CorpusConfigHelper( 1748): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-24 10:16:16.247 W/CorpusConfigHelper( 1748): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-24 10:16:16.613 W/AsyncOperation( 1408): OperationException[Status{statusCode=Stale snapshot for com.google.android.libraries.user.profile.photopicker#com.google.android.youtube(change count changed - expected 2  but was 1), resolution=null}]
10-24 10:16:16.809 W/CorpusConfigHelper( 1748): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-24 10:16:16.809 W/CorpusConfigHelper( 1748): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-24 10:16:16.950 W/CorpusConfigHelper( 1748): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-24 10:16:16.950 W/CorpusConfigHelper( 1748): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-24 10:16:17.050 W/CorpusConfigHelper( 1748): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-24 10:16:17.050 W/CorpusConfigHelper( 1748): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-24 10:16:17.155 E/AppOps  (  523): java.lang.SecurityException: Specified package "android" under uid 10190 but it is not
10-24 10:16:17.155 E/AppOps  (  523): java.lang.SecurityException: Specified package "android" under uid 10190 but it is not
10-24 10:16:17.155 E/AppOps  (  523): java.lang.SecurityException: Specified package "android" under uid 10190 but it is not
10-24 10:16:17.155 E/AppOps  (  523): java.lang.SecurityException: Specified package "android" under uid 10190 but it is not
10-24 10:16:17.400 W/CorpusConfigHelper( 1748): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-24 10:16:17.400 W/CorpusConfigHelper( 1748): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-24 10:16:17.439 W/ModernMediaScanner( 1635): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-metadata.txt
10-24 10:16:17.505 W/ModernMediaScanner( 1635): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-pins.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-pins.txt
10-24 10:16:17.829 W/ModernMediaScanner( 1635): Failed to visit /data/data/com.android.providers.downloads/cache/ifw-empty-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/ifw-empty-metadata.txt
10-24 10:16:17.833 W/ModernMediaScanner( 1635): Failed to visit /data/data/com.android.providers.downloads/cache/ifw-empty.xml: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/ifw-empty.xml
10-24 10:16:17.834 W/CorpusConfigHelper( 1748): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-24 10:16:17.834 W/CorpusConfigHelper( 1748): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-24 10:16:18.044 W/ModernMediaScanner( 1635): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt
10-24 10:16:18.075 W/PeoplePU( 1461): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-24 10:16:18.077 W/PeoplePU( 1461): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-24 10:16:18.077 W/PeoplePU( 1461): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-24 10:16:18.077 W/PeoplePU( 1461): 	at android.os.Parcel.createException(Parcel.java:3041)
10-24 10:16:18.077 W/PeoplePU( 1461): 	at android.os.Parcel.readException(Parcel.java:3024)
10-24 10:16:18.077 W/PeoplePU( 1461): 	at android.os.Parcel.readException(Parcel.java:2966)
10-24 10:16:18.077 W/PeoplePU( 1461): Caused by: android.os.RemoteException: Remote stack trace:
10-24 10:16:18.087 W/PeoplePU( 1461): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-24 10:16:18.087 W/PeoplePU( 1461): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-24 10:16:18.087 W/PeoplePU( 1461): 	at android.os.Parcel.createException(Parcel.java:3041)
10-24 10:16:18.087 W/PeoplePU( 1461): 	at android.os.Parcel.readException(Parcel.java:3024)
10-24 10:16:18.087 W/PeoplePU( 1461): 	at android.os.Parcel.readException(Parcel.java:2966)
10-24 10:16:18.095 W/ModernMediaScanner( 1635): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt
10-24 10:16:18.099 W/PeoplePU( 1461): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-24 10:16:18.099 W/PeoplePU( 1461): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-24 10:16:18.099 W/PeoplePU( 1461): 	at android.os.Parcel.createException(Parcel.java:3041)
10-24 10:16:18.099 W/PeoplePU( 1461): 	at android.os.Parcel.readException(Parcel.java:3024)
10-24 10:16:18.099 W/PeoplePU( 1461): 	at android.os.Parcel.readException(Parcel.java:2966)
10-24 10:16:18.263 W/CorpusConfigHelper( 1748): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-24 10:16:18.263 W/CorpusConfigHelper( 1748): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-24 10:16:18.715 W/ModernMediaScanner( 1635): Failed to visit /data/data/com.android.providers.downloads/cache/model.smfb.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/model.smfb.metadata
10-24 10:16:18.735 W/ModernMediaScanner( 1635): Failed to visit /data/data/com.android.providers.downloads/cache/model.smfb: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/model.smfb
10-24 10:16:18.859 W/ModernMediaScanner( 1635): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb.metadata
10-24 10:16:18.920 W/ModernMediaScanner( 1635): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb
10-24 10:16:19.143 W/ModernMediaScanner( 1635): Failed to visit /data/data/com.android.providers.downloads/cache/en.model.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model.metadata
10-24 10:16:19.157 W/ModernMediaScanner( 1635): Failed to visit /data/data/com.android.providers.downloads/cache/en.model: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model
10-24 10:16:20.043 W/ActivityManager(  523): Exception when unbinding service com.google.android.gms/.chimera.PersistentApiService
10-24 10:16:20.043 W/ActivityManager(  523): android.os.DeadObjectException
10-24 10:16:20.043 W/ActivityManager(  523): Exception when unbinding service com.google.android.gms/.lockbox.service.LockboxBrokerService
10-24 10:16:20.043 W/ActivityManager(  523): android.os.DeadObjectException
10-24 10:16:20.043 W/ActivityManager(  523): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.WakeUpService in 21000ms for connection
10-24 10:16:20.046 W/ActivityManager(  523): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureNotificationInternalService in 80998ms for start-requested
10-24 10:16:20.047 W/ActivityManager(  523): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureMatchingService in 220997ms for start-requested
10-24 10:16:20.474 W/GmsPipelineLogger( 4940): java.lang.NullPointerException
10-24 10:16:20.729 I/SemanticLocation( 4940): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-24 10:16:20.729 I/SemanticLocation( 4940): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-24 10:16:20.888 W/ConfigFileUtils( 5022): Failed to read asset ChimeraModuleSetList.pb: java.io.FileNotFoundException: ChimeraModuleSetList.pb
10-24 10:16:21.046 I/SemanticLocation( 4940): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-24 10:16:21.046 I/SemanticLocation( 4940): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-24 10:16:21.224 W/Conscrypt( 4940): Could not set socket write timeout: java.net.SocketException: Socket closed
10-24 10:16:21.288 W/Conscrypt( 4940): Could not set socket write timeout: java.net.SocketException: Socket closed
10-24 10:16:21.669 E/ChimeraUPLUtils( 5022): Failed to invoke updateComplete: android.os.DeadObjectException
10-24 10:16:21.745 E/ChimeraUPLUtils( 5022): Failed to invoke updateComplete: android.os.DeadObjectException
10-24 10:16:21.896 E/ChimeraUPLUtils( 5022): Failed to invoke updateComplete: android.os.DeadObjectException
10-24 10:16:22.164 W/GLSUser ( 4940): [AppCertManager] Exception while requesting key: 
10-24 10:16:22.164 W/GLSUser ( 4940): java.util.concurrent.ExecutionException: avvw: Parse Proto Exception.
10-24 10:16:22.164 W/GLSUser ( 4940): Caused by: avvw: Parse Proto Exception.
10-24 10:16:22.182 W/Conscrypt( 4940): Could not set socket write timeout: java.net.SocketException: Socket closed
10-24 10:16:22.311 W/Conscrypt( 4940): Could not set socket write timeout: java.net.SocketException: Socket closed
10-24 10:16:23.040 E/bwel    ( 4940): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-24 10:16:24.013 W/AsyncOperation( 4940): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustlet_onbody(change count changed - expected 1  but was 0), resolution=null}]
10-24 10:16:25.701 W/AsyncOperation( 4940): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 1  but was 0), resolution=null}]
10-24 10:16:25.704 W/AsyncOperation( 4940): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 1  but was 0), resolution=null}]
10-24 10:16:25.802 E/dlpn    ( 4940): RuntimeException while executing runnable dlqc{qze@31121ad} with executor MoreExecutors.directExecutor()
10-24 10:16:25.802 E/dlpn    ( 4940): java.lang.NullPointerException: Attempt to get length of null array
10-24 10:16:25.814 E/RecoverySnapshotStorage(  523): Error reading snapshot for 10131 from disk
10-24 10:16:25.814 E/RecoverySnapshotStorage(  523): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-24 10:16:25.814 E/RecoverySnapshotStorage(  523): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-24 10:16:25.817 E/keystore2(  157):     3: Error::Rc(r#SYSTEM_ERROR)
10-24 10:16:25.822 W/RecoverableKeyStoreGms( 5022): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-24 10:16:25.822 W/RecoverableKeyStoreGms( 5022): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-24 10:16:25.822 W/RecoverableKeyStoreGms( 5022): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-24 10:16:25.822 W/RecoverableKeyStoreGms( 5022): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-24 10:16:25.822 W/RecoverableKeyStoreGms( 5022): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-24 10:16:25.822 W/RecoverableKeyStoreGms( 5022): 	at android.os.Parcel.createException(Parcel.java:3041)
10-24 10:16:25.822 W/RecoverableKeyStoreGms( 5022): 	at android.os.Parcel.readException(Parcel.java:3024)
10-24 10:16:25.822 W/RecoverableKeyStoreGms( 5022): 	at android.os.Parcel.readException(Parcel.java:2966)
10-24 10:16:26.257 W/CardCollectorTask( 4756): android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-24 10:16:26.444 W/PeoplePU( 5022): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-24 10:16:26.444 W/PeoplePU( 5022): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-24 10:16:26.444 W/PeoplePU( 5022): 	at android.os.Parcel.createException(Parcel.java:3041)
10-24 10:16:26.444 W/PeoplePU( 5022): 	at android.os.Parcel.readException(Parcel.java:3024)
10-24 10:16:26.444 W/PeoplePU( 5022): 	at android.os.Parcel.readException(Parcel.java:2966)
10-24 10:16:26.807 I/SemanticLocation( 4940): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-24 10:16:26.807 I/SemanticLocation( 4940): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-24 10:16:26.947 I/SemanticLocation( 4940): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-24 10:16:26.947 I/SemanticLocation( 4940): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-24 10:16:26.991 W/Conscrypt( 5022): Could not set socket write timeout: java.net.SocketException: Socket closed
10-24 10:16:27.002 W/Conscrypt( 5022): Could not set socket write timeout: java.net.SocketException: Socket closed
10-24 10:16:27.018 W/Conscrypt( 5022): Could not set socket write timeout: java.net.SocketException: Socket closed
10-24 10:16:27.030 W/Conscrypt( 5022): Could not set socket write timeout: java.net.SocketException: Socket closed
10-24 10:16:27.913 E/PhenotypeFlagCommitter( 5022): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-24 10:16:28.661 W/AsyncOperation( 4940): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.auth.easyunlock(change count changed - expected 1  but was 0), resolution=null}]
10-24 10:16:28.664 W/AsyncOperation( 4940): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.dtdi#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
10-24 10:16:28.666 W/AsyncOperation( 4940): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
10-24 10:16:28.666 W/AsyncOperation( 4940): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
10-24 10:16:28.667 W/AsyncOperation( 4940): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.maps#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
10-24 10:16:28.698 W/AsyncOperation( 4940): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.personalsafety(change count changed - expected 1  but was 0), resolution=null}]
10-24 10:16:28.702 W/AsyncOperation( 4940): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.vision(change count changed - expected 1  but was 0), resolution=null}]
10-24 10:16:28.704 W/AsyncOperation( 4940): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.phonesky_recovery(change count changed - expected 1  but was 0), resolution=null}]
10-24 10:16:28.707 W/AsyncOperation( 4940): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustagent.activeunlock.primary#com.google.android.gms(change count changed - expected 3  but was 0), resolution=null}]
10-24 10:16:28.710 W/AsyncOperation( 4940): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.backup(change count changed - expected 3  but was 2), resolution=null}]
10-24 10:16:28.711 W/PhenotypeFlagCommitter( 4940): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.backup(change count changed - expected 3  but was 2)
10-24 10:16:28.711 W/PhenotypeCommitHelper( 4940): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.backup(change count changed - expected 3  but was 2)
10-24 10:16:29.129 W/CorpusConfigHelper( 1748): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-24 10:16:29.129 W/CorpusConfigHelper( 1748): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-24 10:16:29.369 W/CorpusConfigHelper( 1748): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-24 10:16:29.369 W/CorpusConfigHelper( 1748): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-24 10:16:29.469 W/CorpusConfigHelper( 1748): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-24 10:16:29.469 W/CorpusConfigHelper( 1748): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-24 10:16:30.128 W/Vision  ( 5022): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-24 10:16:30.137 W/Vision  ( 5022): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-24 10:16:30.236 W/NetworkScheduler( 4940): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-24 10:16:30.471 W/Conscrypt( 5022): Could not set socket write timeout: java.net.SocketException: Socket closed
10-24 10:16:30.632 W/TapAndPay( 4940): java.lang.NullPointerException: NfcAdapter is null
10-24 10:16:30.977 W/Conscrypt( 5022): Could not set socket write timeout: java.net.SocketException: Socket closed
10-24 10:16:31.681 W/Conscrypt( 5022): Could not set socket write timeout: java.net.SocketException: Socket closed
10-24 10:16:31.792 W/AsyncOperation( 4940): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.icing(change count changed - expected 3  but was 2), resolution=null}]
10-24 10:16:31.792 W/PhenotypeFlagCommitter( 4940): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.icing(change count changed - expected 3  but was 2)
10-24 10:16:31.792 W/PhenotypeCommitHelper( 4940): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.icing(change count changed - expected 3  but was 2)
10-24 10:16:32.018 W/CorpusConfigHelper( 1748): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-24 10:16:32.018 W/CorpusConfigHelper( 1748): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-24 10:16:32.112 W/Conscrypt( 5022): Could not set socket write timeout: java.net.SocketException: Socket closed
10-24 10:16:32.216 W/CorpusConfigHelper( 1748): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-24 10:16:32.216 W/CorpusConfigHelper( 1748): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-24 10:16:32.319 W/CorpusConfigHelper( 1748): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-24 10:16:32.319 W/CorpusConfigHelper( 1748): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-24 10:16:33.459 W/Vision  ( 5022): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-24 10:16:33.464 W/Vision  ( 5022): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-24 10:16:33.473 W/NetworkScheduler( 4940): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-24 10:16:37.347 E/A       ( 1748): onError
10-24 10:16:59.397 E/d       ( 1748): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@d668c06} with executor MoreExecutors.directExecutor()
10-24 10:16:59.397 E/d       ( 1748): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-24 10:16:59.403 E/d       ( 1748): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@ecd9a8c} with executor MoreExecutors.directExecutor()
10-24 10:16:59.403 E/d       ( 1748): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-24 10:16:59.425 E/d       ( 1748): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@62244bb} with executor MoreExecutors.directExecutor()
10-24 10:16:59.425 E/d       ( 1748): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 845 packages, and audited 846 packages in 15s

180 packages are looking for funding
  run `npm fund` for details

10 vulnerabilities (3 moderate, 7 high)

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
drwxr-xr-x  2 runner runner      4096 Oct 24 10:13 .
drwxr-xr-x 15 runner runner      4096 Oct 24 10:13 ..
-rw-r--r--  1 runner runner 107539484 Oct 24 10:13 ergo-1.0.0-build39.apk
```

## Gradle
```
1064:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1096:BUILD SUCCESSFUL in 3m 2s
---
> Task :react-native-gesture-handler:bundleLibRuntimeToJarRelease
> Task :react-native-gesture-handler:bundleLibRuntimeToDirRelease
> Task :react-native-gesture-handler:processReleaseJavaRes
> Task :react-native-gesture-handler:createFullJarRelease
> Task :react-native-gesture-handler:generateReleaseLintModel
> Task :react-native-gesture-handler:checkReleaseAarMetadata
> Task :react-native-gesture-handler:extractDeepLinksForAarRelease FROM-CACHE
> Task :react-native-gesture-handler:extractReleaseAnnotations FROM-CACHE
> Task :react-native-gesture-handler:mergeReleaseGeneratedProguardFiles
> Task :react-native-gesture-handler:mergeReleaseConsumerProguardFiles
> Task :react-native-gesture-handler:mergeReleaseJavaResource
> Task :react-native-gesture-handler:syncReleaseLibJars FROM-CACHE
> Task :react-native-gesture-handler:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-gesture-handler:writeReleaseLintModelMetadata
> Task :react-native-gesture-handler:stripReleaseDebugSymbols
> Task :react-native-gesture-handler:generateReleaseLintVitalModel
> Task :react-native-gesture-handler:copyReleaseJniLibsProjectAndLocalJars
> Task :react-native-gesture-handler:mergeReleaseResources FROM-CACHE
> Task :react-native-gesture-handler:bundleReleaseLocalLintAar
> Task :react-native-gesture-handler:bundleReleaseAar
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
> Task :app:mapReleaseSourceSetPaths
> Task :app:checkReleaseAarMetadata
> Task :app:compileReleaseNavigationResources FROM-CACHE
> Task :app:stripReleaseDebugSymbols
> Task :app:parseReleaseLocalResources
> Task :app:extractReleaseNativeSymbolTables FROM-CACHE
> Task :app:generateReleaseRFile FROM-CACHE
> Task :app:createReleaseCompatibleScreenManifests
> Task :app:extractDeepLinksRelease FROM-CACHE
> Task :app:mergeReleaseResources

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
> Task :app:mergeReleaseNativeDebugMetadata
> Task :app:mergeExtDexRelease FROM-CACHE
> Task :app:processReleaseManifestForPackage
> Task :app:mergeReleaseArtProfile
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseAssets
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
> Task :app:compressReleaseAssets
> Task :app:processReleaseResources

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:collectReleaseDependencies
> Task :app:compileReleaseJavaWithJavac
> Task :app:dexBuilderRelease
> Task :app:mergeReleaseGlobalSynthetics FROM-CACHE
> Task :app:generateReleaseLintVitalReportModel
> Task :app:processReleaseJavaRes
> Task :app:mergeReleaseJavaResource
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease
> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :app:optimizeReleaseResources
> Task :app:mergeDexRelease
> Task :app:compileReleaseArtProfile
> Task :app:lintVitalAnalyzeRelease
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792836655969.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 3m 2s
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
