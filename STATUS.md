# Android build 49: success

Disk: /dev/root       145G   59G   87G  41% /

- Commit: 24f8306e0edce101019993f0a00fdfe726340471
- Run: https://github.com/agiasotellis/ergo/actions/runs/41241038812
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-49

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
    total 269784
    drwxr-xr-x  2 runner runner      4096 Oct 31 21:05 .
    drwxr-xr-x 15 runner runner      4096 Oct 31 21:05 ..
    -rw-r--r--  1 runner runner 103505942 Oct 31 21:05 ergo-1.0.0-build49.aab
    -rw-r--r--  1 runner runner 172736640 Oct 31 21:05 ergo-1.0.0-build49.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-31 21:07:54.620 D/AndroidRuntime( 4382): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-31 21:07:54.623 I/AndroidRuntime( 4382): Using default boot image
10-31 21:07:54.623 I/AndroidRuntime( 4382): Leaving lock profiling enabled
10-31 21:07:54.724 D/AndroidRuntime( 4382): Calling main entry com.android.commands.monkey.Monkey
10-31 21:07:54.792 I/AndroidRuntime( 4382): VM exiting with result code 0.

=== React Native / Expo ===
10-31 21:08:25.651 W/CorpusConfigHelper( 1759): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:08:25.651 W/CorpusConfigHelper( 1759): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:08:26.016 W/ModernMediaScanner( 1646): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb.metadata
10-31 21:08:26.019 W/ModernMediaScanner( 1646): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb
10-31 21:08:26.064 W/ModernMediaScanner( 1646): Failed to visit /data/data/com.android.providers.downloads/cache/en.model.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model.metadata
10-31 21:08:26.067 W/ModernMediaScanner( 1646): Failed to visit /data/data/com.android.providers.downloads/cache/en.model: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model
10-31 21:08:26.482 W/CorpusConfigHelper( 1759): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:08:26.482 W/CorpusConfigHelper( 1759): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:08:26.812 W/CorpusConfigHelper( 1759): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:08:26.812 W/CorpusConfigHelper( 1759): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:08:26.921 W/PeoplePU( 1467): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-31 21:08:26.922 W/PeoplePU( 1467): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:08:26.922 W/PeoplePU( 1467): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:08:26.922 W/PeoplePU( 1467): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:08:26.922 W/PeoplePU( 1467): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:08:26.922 W/PeoplePU( 1467): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:08:26.922 W/PeoplePU( 1467): Caused by: android.os.RemoteException: Remote stack trace:
10-31 21:08:26.932 W/PeoplePU( 1467): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:08:26.932 W/PeoplePU( 1467): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:08:26.932 W/PeoplePU( 1467): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:08:26.932 W/PeoplePU( 1467): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:08:26.932 W/PeoplePU( 1467): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:08:26.954 W/CorpusConfigHelper( 1759): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:08:26.954 W/CorpusConfigHelper( 1759): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:08:26.993 W/PeoplePU( 1467): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-31 21:08:26.993 W/PeoplePU( 1467): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:08:26.993 W/PeoplePU( 1467): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:08:26.993 W/PeoplePU( 1467): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:08:26.993 W/PeoplePU( 1467): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:08:27.157 W/CorpusConfigHelper( 1759): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:08:27.157 W/CorpusConfigHelper( 1759): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:08:27.235 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10172 but it is not
10-31 21:08:27.236 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10172 but it is not
10-31 21:08:27.237 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10172 but it is not
10-31 21:08:27.237 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10172 but it is not
10-31 21:08:27.260 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10172 but it is not
10-31 21:08:27.260 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10172 but it is not
10-31 21:08:27.260 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10172 but it is not
10-31 21:08:27.261 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10172 but it is not
10-31 21:08:27.277 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10172 but it is not
10-31 21:08:27.278 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10172 but it is not
10-31 21:08:27.278 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10172 but it is not
10-31 21:08:27.278 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10172 but it is not
10-31 21:08:29.431 W/ActivityManager(  522): Exception when unbinding service com.google.android.gms/.nearby.exposurenotification.WakeUpService
10-31 21:08:29.431 W/ActivityManager(  522): android.os.DeadObjectException
10-31 21:08:29.434 W/ActivityManager(  522): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureMatchingService in 50998ms for start-requested
10-31 21:08:29.434 W/ActivityManager(  522): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureNotificationInternalService in 80998ms for start-requested
10-31 21:08:30.097 W/GmsPipelineLogger( 5231): java.lang.NullPointerException
10-31 21:08:30.174 W/AsyncOperation( 5231): OperationException[Status{statusCode=Stale snapshot for com.google.android.libraries.consentverifier#com.google.android.gms(change count changed - expected 4  but was 1), resolution=null}]
10-31 21:08:30.559 I/SemanticLocation( 5231): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-31 21:08:30.559 I/SemanticLocation( 5231): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:08:30.767 W/ConfigFileUtils( 5323): Failed to read asset ChimeraModuleSetList.pb: java.io.FileNotFoundException: ChimeraModuleSetList.pb
10-31 21:08:30.788 I/SemanticLocation( 5231): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-31 21:08:30.788 I/SemanticLocation( 5231): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:08:30.879 E/cr_CronetUrlRequestContext( 1759): Exception in upload method
10-31 21:08:30.879 E/cr_CronetUrlRequestContext( 1759): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-31 21:08:30.882 E/A       ( 1759): onError
10-31 21:08:31.619 E/ChimeraUPLUtils( 5323): Failed to invoke updateComplete: android.os.DeadObjectException
10-31 21:08:31.706 E/ChimeraUPLUtils( 5323): Failed to invoke updateComplete: android.os.DeadObjectException
10-31 21:08:31.751 E/ChimeraUPLUtils( 5323): Failed to invoke updateComplete: android.os.DeadObjectException
10-31 21:08:31.862 W/Conscrypt( 5231): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:08:31.892 W/Conscrypt( 5231): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:08:31.925 W/GLSUser ( 5231): [AppCertManager] Exception while requesting key: 
10-31 21:08:31.925 W/GLSUser ( 5231): java.util.concurrent.ExecutionException: avvw: Parse Proto Exception.
10-31 21:08:31.925 W/GLSUser ( 5231): Caused by: avvw: Parse Proto Exception.
10-31 21:08:31.942 W/Conscrypt( 5231): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:08:32.089 W/Conscrypt( 5231): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:08:35.152 W/AsyncOperation( 5231): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustlet_onbody(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:08:37.592 W/AsyncOperation( 5231): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:08:37.608 W/AsyncOperation( 5231): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:08:37.754 E/RecoverySnapshotStorage(  522): Error reading snapshot for 10128 from disk
10-31 21:08:37.754 E/RecoverySnapshotStorage(  522): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10128.xml: open failed: ENOENT (No such file or directory)
10-31 21:08:37.754 E/RecoverySnapshotStorage(  522): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:08:37.758 E/dlpn    ( 5231): RuntimeException while executing runnable dlqc{qze@1c5388c} with executor MoreExecutors.directExecutor()
10-31 21:08:37.758 E/dlpn    ( 5231): java.lang.NullPointerException: Attempt to get length of null array
10-31 21:08:37.761 E/keystore2(  158):     3: Error::Rc(r#SYSTEM_ERROR)
10-31 21:08:37.762 W/RecoverableKeyStoreGms( 5323): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-31 21:08:37.762 W/RecoverableKeyStoreGms( 5323): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-31 21:08:37.762 W/RecoverableKeyStoreGms( 5323): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-31 21:08:37.762 W/RecoverableKeyStoreGms( 5323): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-31 21:08:37.762 W/RecoverableKeyStoreGms( 5323): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-31 21:08:37.762 W/RecoverableKeyStoreGms( 5323): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:08:37.762 W/RecoverableKeyStoreGms( 5323): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:08:37.762 W/RecoverableKeyStoreGms( 5323): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:08:38.328 W/CardCollectorTask( 5061): android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-31 21:08:38.623 W/PeoplePU( 5323): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-31 21:08:38.623 W/PeoplePU( 5323): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:08:38.623 W/PeoplePU( 5323): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:08:38.623 W/PeoplePU( 5323): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:08:38.623 W/PeoplePU( 5323): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:08:38.887 I/SemanticLocation( 5231): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-31 21:08:38.887 I/SemanticLocation( 5231): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:08:38.933 I/SemanticLocation( 5231): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-31 21:08:38.933 I/SemanticLocation( 5231): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:08:39.434 W/Conscrypt( 5323): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:08:39.436 W/Conscrypt( 5323): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:08:39.451 W/Conscrypt( 5323): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:08:39.457 W/Conscrypt( 5323): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:08:39.912 E/PhenotypeFlagCommitter( 5323): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-31 21:08:41.921 W/AsyncOperation( 5231): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.auth.easyunlock(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:08:44.707 W/AsyncOperation( 5231): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:08:44.707 W/AsyncOperation( 5231): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.dtdi#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
10-31 21:08:44.709 W/AsyncOperation( 5231): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.maps#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
10-31 21:08:44.711 W/AsyncOperation( 5231): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:08:44.712 W/AsyncOperation( 5231): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.personalsafety(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:08:44.713 W/AsyncOperation( 5231): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.phonesky_recovery(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:08:44.722 W/AsyncOperation( 5231): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustagent.activeunlock.primary#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
10-31 21:08:44.725 W/AsyncOperation( 5231): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.vision(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:08:46.628 E/d       ( 1759): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@ce223d0} with executor MoreExecutors.directExecutor()
10-31 21:08:46.628 E/d       ( 1759): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-31 21:08:46.635 E/d       ( 1759): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@a1c9f94} with executor MoreExecutors.directExecutor()
10-31 21:08:46.635 E/d       ( 1759): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-31 21:08:46.664 E/d       ( 1759): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@e9d7cdf} with executor MoreExecutors.directExecutor()
10-31 21:08:46.664 E/d       ( 1759): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-31 21:08:46.781 W/CorpusConfigHelper( 1759): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:08:46.781 W/CorpusConfigHelper( 1759): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:08:47.257 W/CorpusConfigHelper( 1759): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:08:47.257 W/CorpusConfigHelper( 1759): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:08:47.452 W/Vision  ( 5323): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:08:47.458 W/Vision  ( 5323): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:08:47.559 W/NetworkScheduler( 5231): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-31 21:08:47.866 W/TapAndPay( 5231): java.lang.NullPointerException: NfcAdapter is null
10-31 21:08:52.897 W/Vision  ( 5323): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:08:52.915 W/Vision  ( 5323): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:08:52.943 W/NetworkScheduler( 5231): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-31 21:08:53.589 W/AsyncOperation( 5231): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.thunderbird(change count changed - expected 4  but was 3), resolution=null}]
10-31 21:08:53.592 W/PhenotypeFlagCommitter( 5231): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.thunderbird(change count changed - expected 4  but was 3)
10-31 21:08:53.592 W/PhenotypeCommitHelper( 5231): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.thunderbird(change count changed - expected 4  but was 3)
10-31 21:08:54.000 W/CorpusConfigHelper( 1759): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:08:54.000 W/CorpusConfigHelper( 1759): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:08:54.283 W/CorpusConfigHelper( 1759): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:08:54.283 W/CorpusConfigHelper( 1759): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:08:54.470 W/PeoplePU( 5323): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:08:54.470 W/PeoplePU( 5323): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:08:54.470 W/PeoplePU( 5323): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:08:54.470 W/PeoplePU( 5323): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:08:54.470 W/PeoplePU( 5323): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:08:54.470 W/PeoplePU( 5323): Caused by: android.os.RemoteException: Remote stack trace:
10-31 21:08:54.480 W/PeoplePU( 5323): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:08:54.480 W/PeoplePU( 5323): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:08:54.480 W/PeoplePU( 5323): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:08:54.480 W/PeoplePU( 5323): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:08:54.480 W/PeoplePU( 5323): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:08:54.483 W/PeoplePU( 5323): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-31 21:08:54.483 W/PeoplePU( 5323): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:08:54.483 W/PeoplePU( 5323): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:08:54.483 W/PeoplePU( 5323): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:08:54.483 W/PeoplePU( 5323): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:08:54.502 W/CorpusConfigHelper( 1759): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:08:54.502 W/CorpusConfigHelper( 1759): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 845 packages, and audited 846 packages in 47s

180 packages are looking for funding
  run `npm fund` for details

31 vulnerabilities (1 low, 27 moderate, 3 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
- Creating native directory (./android)
✔ Created native directory
- Updating package.json
✔ Updated package.json | no changes
- Running prebuild
✔ Finished prebuild
keystore sha256: 119e896ee5b2afd0  size: 4322
lengths: store_pw=28 alias=11 key_pw=28
	 SHA1: 93:3A:08:AD:39:71:83:9D:66:7F:79:10:D7:54:0A:FE:26:40:2D:C4
	 SHA256: 00:38:A8:32:2C:3B:F4:D1:A2:0E:1F:EC:8C:D4:56:3A:9D:88:0B:5E:5A:D7:16:CF:D4:17:75:9D:CC:EE:7C:AE
KEYSTORE_OK
Build outputs:
android/app/build/outputs/bundle/release/app-release.aab
android/app/build/outputs/apk/release/app-release.apk
total 269784
drwxr-xr-x  2 runner runner      4096 Oct 31 21:05 .
drwxr-xr-x 15 runner runner      4096 Oct 31 21:05 ..
-rw-r--r--  1 runner runner 103505942 Oct 31 21:05 ergo-1.0.0-build49.aab
-rw-r--r--  1 runner runner 172736640 Oct 31 21:05 ergo-1.0.0-build49.apk
```

## Gradle
```
126:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-worklets/android/build.gradle.kts:162:1: 'fun Project.android(configure: Action<LibraryExtension>): Unit' is deprecated. Replaced by com.android.build.api.dsl.LibraryExtension.
162:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/build.gradle.kts:168:1: 'fun Project.android(configure: Action<LibraryExtension>): Unit' is deprecated. Replaced by com.android.build.api.dsl.LibraryExtension.
351:Note: Some input files use or override a deprecated API.
352:Note: Recompile with -Xlint:deprecation for details.
353:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-google-signin/google-signin/android/src/main/java/com/reactnativegooglesignin/RNGoogleSigninModule.java uses unchecked or unsafe operations.
354:Note: Recompile with -Xlint:unchecked for details.
360:Note: Some input files use or override a deprecated API.
361:Note: Recompile with -Xlint:deprecation for details.
362:Note: Some input files use unchecked or unsafe operations.
363:Note: Recompile with -Xlint:unchecked for details.
396:w: file:///home/runner/work/ergo/ergo/node_modules/@maplibre/maplibre-react-native/android/src/main/java/org/maplibre/reactnative/components/AbstractEvent.kt:16:25 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
435:Note: Some input files use or override a deprecated API.
436:Note: Recompile with -Xlint:deprecation for details.
455:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-keyboard-controller/android/src/main/java/com/reactnativekeyboardcontroller/extensions/ReactContext.kt:18:27 'fun getEventDispatcher(context: ReactContext, uiManagerType: Int): EventDispatcher?' is deprecated. UIManagerType is no longer needed.
555:Note: Some input files use or override a deprecated API.
556:Note: Recompile with -Xlint:deprecation for details.
557:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-async-storage/async-storage/android/src/javaPackage/java/com/reactnativecommunity/asyncstorage/AsyncStoragePackage.java uses unchecked or unsafe operations.
558:Note: Recompile with -Xlint:unchecked for details.
569:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-masked-view/masked-view/android/src/main/java/org/reactnative/maskedview/RNCMaskedViewPackage.java uses or overrides a deprecated API.
570:Note: Recompile with -Xlint:deprecation for details.
596:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:83:17 'constructor(name: String, className: String, canOverrideExistingModule: Boolean, needsEagerInit: Boolean, hasConstants: Boolean, isCxxModule: Boolean, isTurboModule: Boolean): ReactModuleInfo' is deprecated. This constructor is deprecated and will be removed in the future. Use ReactModuleInfo(String, String, boolean, boolean, boolean, boolean)].
633:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/gamma/modals/formsheet/FormSheetContentView.kt:39:33 'fun getEventDispatcher(context: ReactContext, uiManagerType: Int): EventDispatcher?' is deprecated. UIManagerType is no longer needed.
910:Note: Some input files use or override a deprecated API.
911:Note: Recompile with -Xlint:deprecation for details.
920:w: file:///home/runner/work/ergo/ergo/node_modules/@expo/dom-webview/android/src/main/java/expo/modules/webview/DomWebView.kt:254:18 'fun executeOnJavaScriptThread(runnable: Runnable): Unit' is deprecated. Use RuntimeContext.schedule instead.
1031:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NodesManager.kt:58:95 'fun resolveCustomDirectEventName(eventName: String): String?' is deprecated.
1032:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NodesManager.kt:232:29 'fun receiveEvent(surfaceId: Int, targetTag: Int, eventName: String, canCoalesceEvent: Boolean, customCoalesceKey: Int, params: WritableMap?, category: Int): Unit' is deprecated. Use the overload with eventTimestamp parameter instead.
1172:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1396:BUILD SUCCESSFUL in 9m 59s
---
> Task :app:extractReleaseNativeSymbolTables
> Task :expo-log-box:mergeReleaseResources
> Task :expo:verifyReleaseResources
> Task :expo:assembleRelease
> Task :app:mergeReleaseArtProfile
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseAssets
> Task :app:processReleaseResources
> Task :app:compressReleaseAssets
> Task :app:dexBuilderRelease
> Task :expo-modules-core:bundleReleaseAar
> Task :expo-log-box:verifyReleaseResources
> Task :expo-log-box:assembleRelease
> Task :app:mergeReleaseGlobalSynthetics
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
> Task :app:mergeReleaseNativeDebugMetadata
> Task :maplibre_maplibre-react-native:bundleReleaseAar
> Task :app:generateReleaseLintVitalReportModel
> Task :expo-modules-core:mergeReleaseResources
> Task :maplibre_maplibre-react-native:mergeReleaseResources
> Task :app:processReleaseJavaRes
> Task :app:mergeReleaseJavaResource
> Task :expo-modules-core:verifyReleaseResources
> Task :app:collectReleaseDependencies
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease
> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :expo-modules-core:assembleRelease
> Task :app:optimizeReleaseResources
> Task :react-native-async-storage_async-storage:bundleReleaseAar
> Task :app:lintVitalAnalyzeRelease
> Task :react-native-async-storage_async-storage:mergeReleaseResources
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :maplibre_maplibre-react-native:verifyReleaseResources
> Task :maplibre_maplibre-react-native:assembleRelease
> Task :react-native-google-signin_google-signin:bundleReleaseAar
> Task :react-native-gesture-handler:bundleReleaseAar
> Task :react-native-async-storage_async-storage:verifyReleaseResources
> Task :react-native-async-storage_async-storage:assembleRelease
> Task :react-native-keyboard-controller:bundleReleaseAar
> Task :react-native-gesture-handler:mergeReleaseResources
> Task :react-native-google-signin_google-signin:mergeReleaseResources
> Task :react-native-keyboard-controller:mergeReleaseResources
> Task :react-native-gesture-handler:verifyReleaseResources
> Task :react-native-gesture-handler:assembleRelease
> Task :react-native-masked-view_masked-view:bundleReleaseAar
> Task :react-native-google-signin_google-signin:verifyReleaseResources
> Task :react-native-google-signin_google-signin:assembleRelease
> Task :react-native-masked-view_masked-view:mergeReleaseResources
> Task :react-native-keyboard-controller:verifyReleaseResources
> Task :react-native-keyboard-controller:assembleRelease
> Task :react-native-safe-area-context:bundleReleaseAar
> Task :react-native-safe-area-context:mergeReleaseResources
> Task :react-native-masked-view_masked-view:verifyReleaseResources
> Task :react-native-masked-view_masked-view:assembleRelease
> Task :react-native-screens:bundleReleaseAar
> Task :react-native-safe-area-context:verifyReleaseResources
> Task :react-native-safe-area-context:assembleRelease
> Task :react-native-svg:bundleReleaseAar
> Task :react-native-svg:mergeReleaseResources
> Task :react-native-svg:verifyReleaseResources
> Task :react-native-svg:assembleRelease
> Task :react-native-screens:mergeReleaseResources
> Task :app:mergeDexRelease
> Task :react-native-screens:verifyReleaseResources
> Task :react-native-screens:assembleRelease
> Task :app:processApplicationManifestReleaseForBundle
> Task :react-native-worklets:bundleReleaseAar
> Task :react-native-worklets:mergeReleaseResources
> Task :react-native-worklets:verifyReleaseResources
> Task :react-native-worklets:assembleRelease
> Task :app:configureReleaseDependencies
> Task :app:parseReleaseIntegrityConfig
> Task :react-native-reanimated:bundleReleaseAar
> Task :app:bundleReleaseResources
> Task :react-native-reanimated:mergeReleaseResources
> Task :app:buildReleasePreBundle
> Task :app:compileReleaseArtProfile
> Task :react-native-reanimated:verifyReleaseResources
> Task :react-native-reanimated:assembleRelease
The Daemon will expire after the build after running out of JVM Metaspace.
The project memory settings are likely not configured or are configured to an insufficient value.
The daemon will restart for the next build, which may increase subsequent build times.
These settings can be adjusted by setting 'org.gradle.jvmargs' in 'gradle.properties'.
The currently configured max heap space is '2 GiB' and the configured max metaspace is '512 MiB'.
For more information on how to set these values, please refer to https://docs.gradle.org/9.4.1/userguide/build_environment.html#sec:configuring_jvm_memory in the Gradle documentation.
To disable this warning, set 'org.gradle.daemon.performance.disable-logging=true'.
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
> Task :app:packageReleaseBundle
> Task :app:signReleaseBundle
> Task :app:produceReleaseBundleIdeListingFile
> Task :app:createReleaseBundleListingFileRedirect
> Task :app:bundleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1793480160775.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 9m 59s
817 actionable tasks: 723 executed, 94 from cache
Cacheable calls:   1448 / 1472 (98.37%)
  Hits:            1448 / 1448 (100.0%)
    Direct:        1448 / 1448 (100.0%)
    Preprocessed:     0 / 1448 ( 0.00%)
  Misses:             0 / 1448 ( 0.00%)
Uncacheable calls:   24 / 1472 ( 1.63%)
Local storage:
  Cache size (GB):  0.6 /  3.0 (19.32%)
  Hits:            1448 / 1448 (100.0%)
  Misses:             0 / 1448 ( 0.00%)
```
