# Android build 32: success

Disk: /dev/root       145G   60G   85G  42% /

- Commit: 05e7329bb0e126652cbe4ca8cd21a64cec26d50e
- Run: https://github.com/agiasotellis/ergo/actions/runs/39820246059
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-32

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
    total 103984
    drwxr-xr-x  2 runner runner      4096 Oct 22 17:47 .
    drwxr-xr-x 15 runner runner      4096 Oct 22 17:47 ..
    -rw-r--r--  1 runner runner 106469354 Oct 22 17:47 ergo-1.0.0-build32.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-22 17:49:05.037 D/AndroidRuntime( 3969): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-22 17:49:05.041 I/AndroidRuntime( 3969): Using default boot image
10-22 17:49:05.041 I/AndroidRuntime( 3969): Leaving lock profiling enabled
10-22 17:49:05.163 D/AndroidRuntime( 3969): Calling main entry com.android.commands.monkey.Monkey
10-22 17:49:06.069 I/AndroidRuntime( 3969): VM exiting with result code 0.

=== React Native / Expo ===
10-22 17:49:44.860 W/PeoplePU( 1462): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 17:49:44.864 W/PeoplePU( 1462): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 17:49:44.864 W/PeoplePU( 1462): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 17:49:44.864 W/PeoplePU( 1462): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 17:49:44.864 W/PeoplePU( 1462): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 17:49:44.864 W/PeoplePU( 1462): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 17:49:44.908 W/CorpusConfigHelper( 1862): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 17:49:44.908 W/CorpusConfigHelper( 1862): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 17:49:45.162 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 17:49:45.163 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 17:49:45.163 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 17:49:45.163 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 17:49:45.198 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 17:49:45.199 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 17:49:45.199 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 17:49:45.199 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 17:49:45.231 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 17:49:45.231 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 17:49:45.232 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 17:49:45.232 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10173 but it is not
10-22 17:49:47.747 E/cr_CronetUrlRequestContext( 1862): Exception in upload method
10-22 17:49:47.747 E/cr_CronetUrlRequestContext( 1862): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-22 17:49:47.748 E/A       ( 1862): onError
10-22 17:49:49.995 W/Vision  ( 1462): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 17:49:50.004 W/Vision  ( 1462): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 17:49:50.024 W/NetworkScheduler( 1402): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 17:49:50.380 W/TapAndPay( 1402): java.lang.NullPointerException: NfcAdapter is null
10-22 17:49:51.025 W/TapAndPay( 1402): java.lang.NullPointerException: NfcAdapter is null
10-22 17:49:52.931 W/GmsPipelineLogger( 1462): java.lang.NullPointerException
10-22 17:49:53.018 W/AsyncOperation( 1402): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.nearby(change count changed - expected 5  but was 4), resolution=null}]
10-22 17:49:53.021 W/PhenotypeFlagCommitter( 1402): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.nearby(change count changed - expected 5  but was 4)
10-22 17:49:53.024 W/PhenotypeCommitHelper( 1402): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.nearby(change count changed - expected 5  but was 4)
10-22 17:49:53.408 W/PeoplePU( 1462): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 17:49:53.408 W/PeoplePU( 1462): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 17:49:53.408 W/PeoplePU( 1462): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 17:49:53.408 W/PeoplePU( 1462): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 17:49:53.408 W/PeoplePU( 1462): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 17:49:53.408 W/PeoplePU( 1462): Caused by: android.os.RemoteException: Remote stack trace:
10-22 17:49:53.411 W/PeoplePU( 1462): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 17:49:53.411 W/PeoplePU( 1462): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 17:49:53.411 W/PeoplePU( 1462): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 17:49:53.411 W/PeoplePU( 1462): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 17:49:53.411 W/PeoplePU( 1462): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 17:49:53.413 W/PeoplePU( 1462): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 17:49:53.413 W/PeoplePU( 1462): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 17:49:53.413 W/PeoplePU( 1462): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 17:49:53.413 W/PeoplePU( 1462): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 17:49:53.413 W/PeoplePU( 1462): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 17:49:53.697 W/ActivityManager(  519): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureMatchingService in 191000ms for start-requested
10-22 17:49:53.703 W/GmsClient( 1862): android.os.DeadObjectException
10-22 17:49:53.710 W/MobStoreFlagStore( 2612): java.util.concurrent.ExecutionException: qaw: 20: 20: The connection to Google Play services was lost due to service disconnection. Last reason for disconnect: Timing out service connection.
10-22 17:49:53.727 W/ClearcutLoggerApiImpl( 2063): android.os.DeadObjectException
10-22 17:49:53.751 W/ClearcutLoggerApiImpl( 1862): android.os.DeadObjectException
10-22 17:49:54.323 W/AsyncOperation( 4978): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustlet_onbody(change count changed - expected 1  but was 0), resolution=null}]
10-22 17:49:54.431 W/ConfigFileUtils( 5030): Failed to read asset ChimeraModuleSetList.pb: java.io.FileNotFoundException: ChimeraModuleSetList.pb
10-22 17:49:54.572 W/GmsPipelineLogger( 4978): java.lang.NullPointerException
10-22 17:49:54.905 E/ChimeraUPLUtils( 5030): Failed to invoke updateComplete: android.os.DeadObjectException
10-22 17:49:55.072 E/ChimeraUPLUtils( 5030): Failed to invoke updateComplete: android.os.DeadObjectException
10-22 17:49:55.165 E/ChimeraUPLUtils( 5030): Failed to invoke updateComplete: android.os.DeadObjectException
10-22 17:49:55.432 I/SemanticLocation( 4978): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 17:49:55.432 I/SemanticLocation( 4978): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 17:49:55.635 I/SemanticLocation( 4978): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 17:49:55.635 I/SemanticLocation( 4978): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 17:49:55.973 W/TapAndPay( 4978): java.lang.NullPointerException: NfcAdapter is null
10-22 17:49:56.325 W/GLSUser ( 4978): [AppCertManager] Exception while requesting key: 
10-22 17:49:56.325 W/GLSUser ( 4978): java.util.concurrent.ExecutionException: avvw: Parse Proto Exception.
10-22 17:49:56.325 W/GLSUser ( 4978): Caused by: avvw: Parse Proto Exception.
10-22 17:49:56.342 W/Conscrypt( 4978): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 17:49:56.846 W/Conscrypt( 4978): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 17:49:57.716 E/bwel    ( 4978): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 17:49:59.017 E/RecoverySnapshotStorage(  519): Error reading snapshot for 10128 from disk
10-22 17:49:59.017 E/RecoverySnapshotStorage(  519): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10128.xml: open failed: ENOENT (No such file or directory)
10-22 17:49:59.017 E/RecoverySnapshotStorage(  519): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 17:49:59.023 E/keystore2(  156):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 17:49:59.024 W/RecoverableKeyStoreGms( 5030): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 17:49:59.024 W/RecoverableKeyStoreGms( 5030): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 17:49:59.024 W/RecoverableKeyStoreGms( 5030): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 17:49:59.024 W/RecoverableKeyStoreGms( 5030): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 17:49:59.024 W/RecoverableKeyStoreGms( 5030): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 17:49:59.024 W/RecoverableKeyStoreGms( 5030): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 17:49:59.024 W/RecoverableKeyStoreGms( 5030): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 17:49:59.024 W/RecoverableKeyStoreGms( 5030): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 17:49:59.110 E/dlpn    ( 4978): RuntimeException while executing runnable dlqc{qze@fd483f8} with executor MoreExecutors.directExecutor()
10-22 17:49:59.110 E/dlpn    ( 4978): java.lang.NullPointerException: Attempt to get length of null array
10-22 17:49:59.569 W/CardCollectorTask( 4741): android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-22 17:49:59.732 W/AsyncOperation( 4978): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 1  but was 0), resolution=null}]
10-22 17:49:59.753 W/AsyncOperation( 4978): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 1  but was 0), resolution=null}]
10-22 17:49:59.802 W/PeoplePU( 5030): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 17:49:59.802 W/PeoplePU( 5030): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 17:49:59.802 W/PeoplePU( 5030): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 17:49:59.802 W/PeoplePU( 5030): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 17:49:59.802 W/PeoplePU( 5030): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 17:50:00.137 I/SemanticLocation( 4978): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 17:50:00.137 I/SemanticLocation( 4978): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 17:50:00.147 I/SemanticLocation( 4978): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 17:50:00.147 I/SemanticLocation( 4978): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 17:50:00.308 W/Conscrypt( 5030): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 17:50:00.381 W/Conscrypt( 5030): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 17:50:00.978 W/Conscrypt( 5030): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 17:50:01.189 E/PhenotypeFlagCommitter( 5030): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 17:50:01.396 W/Conscrypt( 5030): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 17:50:03.214 E/d       ( 1862): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@457ebf6} with executor MoreExecutors.directExecutor()
10-22 17:50:03.214 E/d       ( 1862): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-22 17:50:03.215 E/d       ( 1862): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@8b10093} with executor MoreExecutors.directExecutor()
10-22 17:50:03.215 E/d       ( 1862): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-22 17:50:03.216 E/d       ( 1862): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@c6e171e} with executor MoreExecutors.directExecutor()
10-22 17:50:03.216 E/d       ( 1862): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-22 17:50:11.130 W/AsyncOperation( 4978): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.auth.easyunlock(change count changed - expected 1  but was 0), resolution=null}]
10-22 17:50:11.312 W/AsyncOperation( 4978): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.dtdi#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
10-22 17:50:11.312 W/AsyncOperation( 4978): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
10-22 17:50:11.314 W/AsyncOperation( 4978): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
10-22 17:50:11.317 W/AsyncOperation( 4978): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.maps#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
10-22 17:50:11.322 W/AsyncOperation( 4978): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.personalsafety(change count changed - expected 1  but was 0), resolution=null}]
10-22 17:50:11.323 W/AsyncOperation( 4978): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.phonesky_recovery(change count changed - expected 1  but was 0), resolution=null}]
10-22 17:50:11.323 W/AsyncOperation( 4978): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.vision(change count changed - expected 1  but was 0), resolution=null}]
10-22 17:50:11.800 W/PeoplePU( 5030): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 17:50:11.800 W/PeoplePU( 5030): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 17:50:11.800 W/PeoplePU( 5030): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 17:50:11.800 W/PeoplePU( 5030): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 17:50:11.800 W/PeoplePU( 5030): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 17:50:11.800 W/PeoplePU( 5030): Caused by: android.os.RemoteException: Remote stack trace:
10-22 17:50:11.806 W/PeoplePU( 5030): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 17:50:11.806 W/PeoplePU( 5030): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 17:50:11.806 W/PeoplePU( 5030): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 17:50:11.806 W/PeoplePU( 5030): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 17:50:11.806 W/PeoplePU( 5030): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 17:50:11.813 W/PeoplePU( 5030): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 17:50:11.813 W/PeoplePU( 5030): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 17:50:11.813 W/PeoplePU( 5030): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 17:50:11.813 W/PeoplePU( 5030): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 17:50:11.813 W/PeoplePU( 5030): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 17:50:13.268 W/AsyncOperation( 4978): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.pay(change count changed - expected 7  but was 6), resolution=null}]
10-22 17:50:13.269 W/PhenotypeFlagCommitter( 4978): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.pay(change count changed - expected 7  but was 6)
10-22 17:50:13.270 W/PhenotypeCommitHelper( 4978): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.pay(change count changed - expected 7  but was 6)
10-22 17:50:13.570 W/PeoplePU( 5030): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 17:50:13.570 W/PeoplePU( 5030): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 17:50:13.570 W/PeoplePU( 5030): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 17:50:13.570 W/PeoplePU( 5030): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 17:50:13.570 W/PeoplePU( 5030): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 17:50:13.570 W/PeoplePU( 5030): Caused by: android.os.RemoteException: Remote stack trace:
10-22 17:50:13.576 W/PeoplePU( 5030): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 17:50:13.576 W/PeoplePU( 5030): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 17:50:13.576 W/PeoplePU( 5030): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 17:50:13.576 W/PeoplePU( 5030): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 17:50:13.576 W/PeoplePU( 5030): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 17:50:13.577 W/PeoplePU( 5030): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 17:50:13.577 W/PeoplePU( 5030): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 17:50:13.577 W/PeoplePU( 5030): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 17:50:13.577 W/PeoplePU( 5030): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 17:50:13.577 W/PeoplePU( 5030): 	at android.os.Parcel.readException(Parcel.java:2966)
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 844 packages, and audited 845 packages in 17s

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
total 103984
drwxr-xr-x  2 runner runner      4096 Oct 22 17:47 .
drwxr-xr-x 15 runner runner      4096 Oct 22 17:47 ..
-rw-r--r--  1 runner runner 106469354 Oct 22 17:47 ergo-1.0.0-build32.apk
```

## Gradle
```
1020:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1046:BUILD SUCCESSFUL in 3m 5s
---
> Task :react-native-gesture-handler:createFullJarRelease
> Task :react-native-gesture-handler:extractProguardFiles
> Task :react-native-gesture-handler:generateReleaseLintModel
> Task :react-native-gesture-handler:prepareLintJarForPublish
> Task :react-native-gesture-handler:checkReleaseAarMetadata
> Task :react-native-gesture-handler:extractDeepLinksForAarRelease FROM-CACHE
> Task :react-native-gesture-handler:extractReleaseAnnotations FROM-CACHE
> Task :react-native-gesture-handler:mergeReleaseGeneratedProguardFiles
> Task :react-native-gesture-handler:mergeReleaseConsumerProguardFiles
> Task :react-native-gesture-handler:mergeReleaseJavaResource
> Task :react-native-gesture-handler:syncReleaseLibJars FROM-CACHE
> Task :react-native-gesture-handler:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-gesture-handler:stripReleaseDebugSymbols
> Task :react-native-gesture-handler:writeReleaseLintModelMetadata
> Task :react-native-gesture-handler:copyReleaseJniLibsProjectAndLocalJars
> Task :react-native-gesture-handler:generateReleaseLintVitalModel
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
> Task :app:checkReleaseAarMetadata
> Task :app:parseReleaseLocalResources
> Task :app:stripReleaseDebugSymbols
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

> Task :app:mergeReleaseResources

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
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792691056093.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 3m 5s
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
