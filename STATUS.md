# Android build 35: success

Disk: /dev/root       145G   60G   85G  42% /

- Commit: 19c3ed43d313d0cf87708deb050422abed1b6ad3
- Run: https://github.com/agiasotellis/ergo/actions/runs/39845885310
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-35

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
    drwxr-xr-x  2 runner runner      4096 Oct 22 20:11 .
    drwxr-xr-x 15 runner runner      4096 Oct 22 20:11 ..
    -rw-r--r--  1 runner runner 107536896 Oct 22 20:11 ergo-1.0.0-build35.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-22 20:12:49.217 D/AndroidRuntime( 3951): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-22 20:12:49.220 I/AndroidRuntime( 3951): Using default boot image
10-22 20:12:49.223 I/AndroidRuntime( 3951): Leaving lock profiling enabled
10-22 20:12:49.472 D/AndroidRuntime( 3951): Calling main entry com.android.commands.monkey.Monkey
10-22 20:12:49.913 I/AndroidRuntime( 3951): VM exiting with result code 0.

=== React Native / Expo ===
10-22 20:13:29.280 W/PeoplePU( 1478): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 20:13:29.280 W/PeoplePU( 1478): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 20:13:29.280 W/PeoplePU( 1478): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 20:13:29.308 W/PeoplePU( 1478): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 20:13:29.308 W/PeoplePU( 1478): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 20:13:29.308 W/PeoplePU( 1478): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 20:13:29.308 W/PeoplePU( 1478): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 20:13:29.308 W/PeoplePU( 1478): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 20:13:31.653 W/AsyncOperation( 1402): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms(change count changed - expected 4  but was 3), resolution=null}]
10-22 20:13:31.653 W/PhenotypeFlagCommitter( 1402): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms(change count changed - expected 4  but was 3)
10-22 20:13:31.653 W/PhenotypeCommitHelper( 1402): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms(change count changed - expected 4  but was 3)
10-22 20:13:31.750 W/ActivityManager(  524): Exception when unbinding service com.google.android.gms/.chimera.PersistentBoundBrokerService
10-22 20:13:31.750 W/ActivityManager(  524): android.os.DeadObjectException
10-22 20:13:31.750 W/ActivityManager(  524): Exception when unbinding service com.google.android.gms/.chimera.PersistentApiService
10-22 20:13:31.750 W/ActivityManager(  524): android.os.DeadObjectException
10-22 20:13:31.750 W/ActivityManager(  524): Exception when unbinding service com.google.android.gms/.lockbox.service.LockboxBrokerService
10-22 20:13:31.750 W/ActivityManager(  524): android.os.DeadObjectException
10-22 20:13:31.754 W/ActivityManager(  524): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureMatchingService in 50996ms for start-requested
10-22 20:13:31.758 W/ActivityManager(  524): Exception when starting service com.google.android.gms/.chimera.PersistentBoundBrokerService
10-22 20:13:31.758 W/ActivityManager(  524): android.os.DeadObjectException
10-22 20:13:32.059 E/PackageManager(  524): java.util.concurrent.TimeoutException: [Optimistic Bind] Didn't bind to resolver in time!
10-22 20:13:32.869 W/GmsPipelineLogger( 4873): java.lang.NullPointerException
10-22 20:13:33.284 I/SemanticLocation( 4873): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 20:13:33.284 I/SemanticLocation( 4873): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 20:13:33.412 W/ConfigFileUtils( 4963): Failed to read asset ChimeraModuleSetList.pb: java.io.FileNotFoundException: ChimeraModuleSetList.pb
10-22 20:13:33.541 I/SemanticLocation( 4873): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 20:13:33.541 I/SemanticLocation( 4873): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 20:13:34.260 E/ChimeraUPLUtils( 4963): Failed to invoke updateComplete: android.os.DeadObjectException
10-22 20:13:34.310 E/ChimeraUPLUtils( 4963): Failed to invoke updateComplete: android.os.DeadObjectException
10-22 20:13:34.562 W/GLSUser ( 4873): [AppCertManager] Exception while requesting key: 
10-22 20:13:34.562 W/GLSUser ( 4873): java.util.concurrent.ExecutionException: avvw: Parse Proto Exception.
10-22 20:13:34.562 W/GLSUser ( 4873): Caused by: avvw: Parse Proto Exception.
10-22 20:13:34.587 W/Conscrypt( 4873): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 20:13:35.095 W/Conscrypt( 4873): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 20:13:40.143 W/AsyncOperation( 4873): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 4  but was 0), resolution=null}]
10-22 20:13:40.151 W/AsyncOperation( 4873): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 4  but was 0), resolution=null}]
10-22 20:13:40.299 E/RecoverySnapshotStorage(  524): Error reading snapshot for 10132 from disk
10-22 20:13:40.299 E/RecoverySnapshotStorage(  524): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10132.xml: open failed: ENOENT (No such file or directory)
10-22 20:13:40.299 E/RecoverySnapshotStorage(  524): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 20:13:40.304 E/keystore2(  159):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 20:13:40.305 W/RecoverableKeyStoreGms( 4963): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 20:13:40.305 W/RecoverableKeyStoreGms( 4963): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 20:13:40.305 W/RecoverableKeyStoreGms( 4963): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 20:13:40.305 W/RecoverableKeyStoreGms( 4963): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 20:13:40.305 W/RecoverableKeyStoreGms( 4963): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 20:13:40.305 W/RecoverableKeyStoreGms( 4963): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 20:13:40.305 W/RecoverableKeyStoreGms( 4963): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 20:13:40.305 W/RecoverableKeyStoreGms( 4963): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 20:13:40.417 E/dlpn    ( 4873): RuntimeException while executing runnable dlqc{qze@b6d254} with executor MoreExecutors.directExecutor()
10-22 20:13:40.417 E/dlpn    ( 4873): java.lang.NullPointerException: Attempt to get length of null array
10-22 20:13:40.863 W/CardCollectorTask( 4722): android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-22 20:13:41.182 W/PeoplePU( 4963): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 20:13:41.182 W/PeoplePU( 4963): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 20:13:41.182 W/PeoplePU( 4963): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 20:13:41.182 W/PeoplePU( 4963): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 20:13:41.182 W/PeoplePU( 4963): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 20:13:41.306 E/A       ( 1686): onError
10-22 20:13:41.309 E/cr_CronetUrlRequestContext( 1686): Exception in upload method
10-22 20:13:41.309 E/cr_CronetUrlRequestContext( 1686): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-22 20:13:41.534 I/SemanticLocation( 4873): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 20:13:41.534 I/SemanticLocation( 4873): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 20:13:41.569 I/SemanticLocation( 4873): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 20:13:41.569 I/SemanticLocation( 4873): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 20:13:42.098 W/Conscrypt( 4963): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 20:13:42.123 W/Conscrypt( 4963): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 20:13:42.135 W/Conscrypt( 4963): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 20:13:42.170 W/Conscrypt( 4963): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 20:13:42.308 W/TapAndPay( 4873): java.lang.NullPointerException: NfcAdapter is null
10-22 20:13:42.491 E/PhenotypeFlagCommitter( 4963): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 20:13:44.982 W/AsyncOperation( 4873): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.auth.easyunlock(change count changed - expected 1  but was 0), resolution=null}]
10-22 20:13:45.029 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.030 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.030 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.030 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.177 W/AsyncOperation( 4873): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustagent.activeunlock.primary#com.google.android.gms(change count changed - expected 1  but was 0), resolution=null}]
10-22 20:13:45.466 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.466 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.466 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.466 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.486 E/AmbientMusicServiceMana( 1604): oxe: java.lang.reflect.InvocationTargetException
10-22 20:13:45.486 E/AmbientMusicServiceMana( 1604): Caused by: java.lang.reflect.InvocationTargetException
10-22 20:13:45.486 E/AmbientMusicServiceMana( 1604): Caused by: java.lang.IllegalStateException: No underlying SoundTriggerModule available
10-22 20:13:45.553 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.553 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.554 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.554 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.729 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.729 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.729 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:45.729 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:46.628 W/PeoplePU( 4963): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 20:13:46.628 W/PeoplePU( 4963): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 20:13:46.628 W/PeoplePU( 4963): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 20:13:46.628 W/PeoplePU( 4963): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 20:13:46.628 W/PeoplePU( 4963): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 20:13:46.628 W/PeoplePU( 4963): Caused by: android.os.RemoteException: Remote stack trace:
10-22 20:13:46.633 W/PeoplePU( 4963): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 20:13:46.633 W/PeoplePU( 4963): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 20:13:46.633 W/PeoplePU( 4963): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 20:13:46.633 W/PeoplePU( 4963): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 20:13:46.633 W/PeoplePU( 4963): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 20:13:46.634 W/PeoplePU( 4963): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 20:13:46.634 W/PeoplePU( 4963): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 20:13:46.634 W/PeoplePU( 4963): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 20:13:46.634 W/PeoplePU( 4963): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 20:13:46.634 W/PeoplePU( 4963): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 20:13:46.662 W/CorpusConfigHelper( 1686): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 20:13:46.662 W/CorpusConfigHelper( 1686): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 20:13:46.857 W/CorpusConfigHelper( 1686): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 20:13:46.857 W/CorpusConfigHelper( 1686): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 20:13:47.010 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:47.012 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:47.012 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:47.012 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:47.106 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:47.106 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:47.106 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:47.107 E/AppOps  (  524): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 20:13:47.472 E/d       ( 1686): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@4652e2f} with executor MoreExecutors.directExecutor()
10-22 20:13:47.472 E/d       ( 1686): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-22 20:13:47.473 E/d       ( 1686): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@d6b531a} with executor MoreExecutors.directExecutor()
10-22 20:13:47.473 E/d       ( 1686): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-22 20:13:47.631 E/d       ( 1686): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@bd4467c} with executor MoreExecutors.directExecutor()
10-22 20:13:47.631 E/d       ( 1686): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-22 20:13:52.237 W/PeoplePU( 4963): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 20:13:52.237 W/PeoplePU( 4963): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 20:13:52.237 W/PeoplePU( 4963): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 20:13:52.237 W/PeoplePU( 4963): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 20:13:52.237 W/PeoplePU( 4963): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 20:13:52.237 W/PeoplePU( 4963): Caused by: android.os.RemoteException: Remote stack trace:
10-22 20:13:52.247 W/PeoplePU( 4963): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 20:13:52.247 W/PeoplePU( 4963): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 20:13:52.247 W/PeoplePU( 4963): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 20:13:52.247 W/PeoplePU( 4963): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 20:13:52.247 W/PeoplePU( 4963): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 20:13:52.250 W/PeoplePU( 4963): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 20:13:52.250 W/PeoplePU( 4963): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 20:13:52.250 W/PeoplePU( 4963): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 20:13:52.250 W/PeoplePU( 4963): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 20:13:52.250 W/PeoplePU( 4963): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 20:13:52.463 W/CorpusConfigHelper( 1686): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 20:13:52.463 W/CorpusConfigHelper( 1686): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 20:13:52.892 W/CorpusConfigHelper( 1686): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 20:13:52.892 W/CorpusConfigHelper( 1686): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 20:13:53.936 W/Vision  ( 4963): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 20:13:53.944 W/Vision  ( 4963): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 20:13:54.036 W/NetworkScheduler( 4873): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 20:13:54.906 W/Vision  ( 4963): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 20:13:54.915 W/Vision  ( 4963): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 20:13:54.938 W/NetworkScheduler( 4873): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 845 packages, and audited 846 packages in 18s

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
total 105028
drwxr-xr-x  2 runner runner      4096 Oct 22 20:11 .
drwxr-xr-x 15 runner runner      4096 Oct 22 20:11 ..
-rw-r--r--  1 runner runner 107536896 Oct 22 20:11 ergo-1.0.0-build35.apk
```

## Gradle
```
1072:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1098:BUILD SUCCESSFUL in 3m 9s
---
> Task :react-native-gesture-handler:bundleLibRuntimeToDirRelease
> Task :react-native-gesture-handler:createFullJarRelease
> Task :react-native-gesture-handler:extractProguardFiles
> Task :react-native-gesture-handler:generateReleaseLintModel
> Task :react-native-gesture-handler:prepareLintJarForPublish
> Task :react-native-gesture-handler:checkReleaseAarMetadata
> Task :react-native-gesture-handler:extractDeepLinksForAarRelease FROM-CACHE
> Task :react-native-gesture-handler:extractReleaseAnnotations FROM-CACHE
> Task :react-native-gesture-handler:stripReleaseDebugSymbols
> Task :react-native-gesture-handler:mergeReleaseGeneratedProguardFiles
> Task :react-native-gesture-handler:mergeReleaseConsumerProguardFiles
> Task :react-native-gesture-handler:copyReleaseJniLibsProjectAndLocalJars
> Task :react-native-gesture-handler:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-gesture-handler:mergeReleaseJavaResource
> Task :react-native-gesture-handler:writeReleaseLintModelMetadata
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
> Task :app:mapReleaseSourceSetPaths
> Task :app:compileReleaseNavigationResources FROM-CACHE
> Task :app:stripReleaseDebugSymbols
> Task :app:checkReleaseAarMetadata
> Task :app:parseReleaseLocalResources
> Task :app:extractReleaseNativeSymbolTables FROM-CACHE
> Task :app:generateReleaseRFile FROM-CACHE
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
> Task :app:desugarReleaseFileDependencies FROM-CACHE
> Task :app:mergeReleaseResources
> Task :app:mergeReleaseStartupProfile
> Task :app:mergeReleaseNativeDebugMetadata
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
> Task :app:optimizeReleaseResources

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:compileReleaseJavaWithJavac
> Task :app:dexBuilderRelease
> Task :app:mergeReleaseGlobalSynthetics FROM-CACHE
> Task :app:generateReleaseLintVitalReportModel
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
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792699675077.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 3m 9s
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
