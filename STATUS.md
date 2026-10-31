# Android build 50: success

Disk: /dev/root       145G   57G   89G  39% /

- Commit: 35fe3a8e4e0d9990a23e1c8f3790ec6d8c8424d7
- Run: https://github.com/agiasotellis/ergo/actions/runs/41242621910
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-50

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
    total 105032
    drwxr-xr-x  2 runner runner      4096 Oct 31 21:19 .
    drwxr-xr-x 15 runner runner      4096 Oct 31 21:19 ..
    -rw-r--r--  1 runner runner 107539820 Oct 31 21:19 ergo-1.0.0-build50.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-31 21:21:12.613 D/AndroidRuntime( 4098): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-31 21:21:12.620 I/AndroidRuntime( 4098): Using default boot image
10-31 21:21:12.620 I/AndroidRuntime( 4098): Leaving lock profiling enabled
10-31 21:21:12.788 D/AndroidRuntime( 4098): Calling main entry com.android.commands.monkey.Monkey
10-31 21:21:13.240 I/AndroidRuntime( 4098): VM exiting with result code 0.

=== React Native / Expo ===
10-31 21:21:58.191 W/Vision  ( 1459): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:21:58.195 W/Vision  ( 1459): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:21:58.251 W/NetworkScheduler( 1338): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-31 21:21:58.445 W/TapAndPay( 1338): java.lang.NullPointerException: NfcAdapter is null
10-31 21:21:58.849 W/TapAndPay( 1338): java.lang.NullPointerException: NfcAdapter is null
10-31 21:22:00.308 W/ActivityManager(  520): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.WakeUpService in 41000ms for connection
10-31 21:22:00.347 W/ActivityManager(  520): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureNotificationInternalService in 270961ms for start-requested
10-31 21:22:00.347 W/ActivityManager(  520): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureMatchingService in 280961ms for start-requested
10-31 21:22:00.386 W/ActivityManager(  520): Rescheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureNotificationInternalService in 200960ms for other
10-31 21:22:00.386 W/ActivityManager(  520): Rescheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureMatchingService in 210960ms for other
10-31 21:22:00.821 W/ConfigFileUtils( 5076): Failed to read asset ChimeraModuleSetList.pb: java.io.FileNotFoundException: ChimeraModuleSetList.pb
10-31 21:22:01.480 W/GmsPipelineLogger( 5077): java.lang.NullPointerException
10-31 21:22:02.131 E/ChimeraUPLUtils( 5076): Failed to invoke updateComplete: android.os.DeadObjectException
10-31 21:22:02.171 I/SemanticLocation( 5077): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-31 21:22:02.171 I/SemanticLocation( 5077): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:22:02.369 E/ChimeraUPLUtils( 5076): Failed to invoke updateComplete: android.os.DeadObjectException
10-31 21:22:02.424 I/SemanticLocation( 5077): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-31 21:22:02.424 I/SemanticLocation( 5077): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:22:02.442 E/ChimeraUPLUtils( 5076): Failed to invoke updateComplete: android.os.DeadObjectException
10-31 21:22:03.672 W/GLSUser ( 5077): [AppCertManager] Exception while requesting key: 
10-31 21:22:03.672 W/GLSUser ( 5077): java.util.concurrent.ExecutionException: avvw: Parse Proto Exception.
10-31 21:22:03.672 W/GLSUser ( 5077): Caused by: avvw: Parse Proto Exception.
10-31 21:22:03.710 W/Conscrypt( 5077): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:22:04.039 W/Conscrypt( 5077): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:22:05.268 E/bwel    ( 5077): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-31 21:22:06.087 W/AsyncOperation( 5077): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 2  but was 0), resolution=null}]
10-31 21:22:06.190 E/dlpn    ( 5077): RuntimeException while executing runnable dlqc{qze@baa5502} with executor MoreExecutors.directExecutor()
10-31 21:22:06.190 E/dlpn    ( 5077): java.lang.NullPointerException: Attempt to get length of null array
10-31 21:22:06.278 E/RecoverySnapshotStorage(  520): Error reading snapshot for 10131 from disk
10-31 21:22:06.278 E/RecoverySnapshotStorage(  520): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-31 21:22:06.278 E/RecoverySnapshotStorage(  520): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:22:06.284 E/keystore2(  156):     3: Error::Rc(r#SYSTEM_ERROR)
10-31 21:22:06.285 W/RecoverableKeyStoreGms( 5076): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-31 21:22:06.285 W/RecoverableKeyStoreGms( 5076): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-31 21:22:06.285 W/RecoverableKeyStoreGms( 5076): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-31 21:22:06.285 W/RecoverableKeyStoreGms( 5076): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-31 21:22:06.285 W/RecoverableKeyStoreGms( 5076): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-31 21:22:06.285 W/RecoverableKeyStoreGms( 5076): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:22:06.285 W/RecoverableKeyStoreGms( 5076): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:22:06.285 W/RecoverableKeyStoreGms( 5076): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:22:06.361 E/A       ( 1681): onError
10-31 21:22:06.365 E/cr_CronetUrlRequestContext( 1681): Exception in upload method
10-31 21:22:06.365 E/cr_CronetUrlRequestContext( 1681): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-31 21:22:07.615 W/PeoplePU( 5076): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-31 21:22:07.615 W/PeoplePU( 5076): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:22:07.615 W/PeoplePU( 5076): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:22:07.615 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:22:07.615 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:22:07.615 W/PeoplePU( 5076): Caused by: android.os.RemoteException: Remote stack trace:
10-31 21:22:07.782 W/Conscrypt( 5076): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:22:07.812 W/AsyncOperation( 5077): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 2  but was 0), resolution=null}]
10-31 21:22:07.814 W/AsyncOperation( 5077): OperationException[Status{statusCode=Stale snapshot for com.google.android.libraries.consentverifier#com.google.android.gms(change count changed - expected 2  but was 0), resolution=null}]
10-31 21:22:07.878 I/SemanticLocation( 5077): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-31 21:22:07.878 I/SemanticLocation( 5077): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:22:07.885 W/Conscrypt( 5076): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:22:07.939 I/SemanticLocation( 5077): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-31 21:22:07.939 I/SemanticLocation( 5077): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:22:08.593 E/PhenotypeFlagCommitter( 5076): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-31 21:22:08.752 W/Conscrypt( 5076): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:22:08.768 W/TapAndPay( 5077): java.lang.NullPointerException: NfcAdapter is null
10-31 21:22:08.871 W/Conscrypt( 5076): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:22:10.568 E/d       ( 1681): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@af48b3d} with executor MoreExecutors.directExecutor()
10-31 21:22:10.568 E/d       ( 1681): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-31 21:22:10.572 E/d       ( 1681): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@485e483} with executor MoreExecutors.directExecutor()
10-31 21:22:10.572 E/d       ( 1681): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-31 21:22:10.581 E/d       ( 1681): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@296e4f5} with executor MoreExecutors.directExecutor()
10-31 21:22:10.581 E/d       ( 1681): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-31 21:22:14.875 W/AsyncOperation( 5077): OperationException[Status{statusCode=Stale snapshot for com.google.android.libraries.consentverifier#com.google.android.gms(change count changed - expected 2  but was 0), resolution=null}]
10-31 21:22:17.872 W/AsyncOperation( 5077): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.auth.easyunlock(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:22:18.108 W/AsyncOperation( 5077): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:22:18.109 W/AsyncOperation( 5077): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.dtdi#com.google.android.gms(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:22:18.111 W/AsyncOperation( 5077): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:22:18.113 W/AsyncOperation( 5077): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.maps#com.google.android.gms(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:22:18.160 W/AsyncOperation( 5077): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.personalsafety(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:22:18.163 W/AsyncOperation( 5077): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.phonesky_recovery(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:22:18.173 W/AsyncOperation( 5077): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.vision(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:22:18.183 W/AsyncOperation( 5077): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustagent.activeunlock.primary#com.google.android.gms(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:22:20.334 W/PhenotypeFlagCommitter( 5076): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-31 21:22:20.346 W/PhenotypeFlagCommitter( 5077): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-31 21:22:20.424 E/PhenotypeFlagCommitter( 5076): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-31 21:22:21.709 W/CorpusConfigHelper( 1681): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:22:21.709 W/CorpusConfigHelper( 1681): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:22:22.009 W/PeoplePU( 5076): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:22:22.009 W/PeoplePU( 5076): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:22:22.009 W/PeoplePU( 5076): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:22:22.009 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:22:22.009 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:22:22.009 W/PeoplePU( 5076): Caused by: android.os.RemoteException: Remote stack trace:
10-31 21:22:22.019 W/PeoplePU( 5076): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:22:22.019 W/PeoplePU( 5076): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:22:22.019 W/PeoplePU( 5076): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:22:22.019 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:22:22.019 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:22:22.022 W/PeoplePU( 5076): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-31 21:22:22.022 W/PeoplePU( 5076): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:22:22.022 W/PeoplePU( 5076): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:22:22.022 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:22:22.022 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:22:22.106 W/CorpusConfigHelper( 1681): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:22:22.106 W/CorpusConfigHelper( 1681): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:22:22.280 W/CorpusConfigHelper( 1681): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:22:22.280 W/CorpusConfigHelper( 1681): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:22:22.747 W/Vision  ( 5076): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:22:22.757 W/Vision  ( 5076): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:22:22.782 W/NetworkScheduler( 5077): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-31 21:22:23.541 W/Vision  ( 5076): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:22:23.554 W/Vision  ( 5076): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:22:23.579 W/NetworkScheduler( 5077): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-31 21:22:24.124 W/AsyncOperation( 5077): OperationException[Status{statusCode=Stale snapshot for com.google.android.westworld(change count changed - expected 4  but was 3), resolution=null}]
10-31 21:22:24.125 W/PhenotypeFlagCommitter( 5077): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.westworld(change count changed - expected 4  but was 3)
10-31 21:22:24.358 W/CorpusConfigHelper( 1681): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:22:24.358 W/CorpusConfigHelper( 1681): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:22:24.517 W/PeoplePU( 5076): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:22:24.517 W/PeoplePU( 5076): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:22:24.517 W/PeoplePU( 5076): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:22:24.517 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:22:24.517 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:22:24.517 W/PeoplePU( 5076): Caused by: android.os.RemoteException: Remote stack trace:
10-31 21:22:24.520 W/PeoplePU( 5076): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:22:24.520 W/PeoplePU( 5076): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:22:24.520 W/PeoplePU( 5076): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:22:24.520 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:22:24.520 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:22:24.521 W/PeoplePU( 5076): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-31 21:22:24.521 W/PeoplePU( 5076): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:22:24.521 W/PeoplePU( 5076): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:22:24.521 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:22:24.521 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:22:24.719 W/CorpusConfigHelper( 1681): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:22:24.719 W/CorpusConfigHelper( 1681): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:22:29.413 W/PeoplePU( 5076): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:22:29.413 W/PeoplePU( 5076): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:22:29.413 W/PeoplePU( 5076): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:22:29.413 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:22:29.413 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:22:29.413 W/PeoplePU( 5076): Caused by: android.os.RemoteException: Remote stack trace:
10-31 21:22:29.417 W/PeoplePU( 5076): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:22:29.417 W/PeoplePU( 5076): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:22:29.417 W/PeoplePU( 5076): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:22:29.417 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:22:29.417 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:22:29.418 W/PeoplePU( 5076): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-31 21:22:29.418 W/PeoplePU( 5076): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:22:29.418 W/PeoplePU( 5076): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:22:29.418 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:22:29.418 W/PeoplePU( 5076): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:22:29.442 W/CorpusConfigHelper( 1681): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:22:29.442 W/CorpusConfigHelper( 1681): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:22:29.622 W/CorpusConfigHelper( 1681): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:22:29.622 W/CorpusConfigHelper( 1681): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 845 packages, and audited 846 packages in 14s

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
android/app/build/outputs/apk/release/app-release.apk
total 105028
drwxr-xr-x  2 runner runner      4096 Oct 31 21:19 .
drwxr-xr-x 15 runner runner      4096 Oct 31 21:19 ..
-rw-r--r--  1 runner runner 107539820 Oct 31 21:19 ergo-1.0.0-build50.apk
```

## Gradle
```
1069:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1095:BUILD SUCCESSFUL in 3m 3s
---
> Task :react-native-gesture-handler:bundleLibRuntimeToDirRelease
> Task :react-native-gesture-handler:copyReleaseJniLibsProjectOnly
> Task :react-native-gesture-handler:bundleLibCompileToJarRelease
> Task :react-native-gesture-handler:bundleLibRuntimeToJarRelease
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
> Task :app:configureCMakeRelWithDebInfo[x86_64]
> Task :react-native-gesture-handler:copyReleaseJniLibsProjectAndLocalJars
> Task :react-native-gesture-handler:mergeReleaseResources FROM-CACHE
> Task :react-native-gesture-handler:bundleReleaseLocalLintAar
> Task :react-native-gesture-handler:bundleReleaseAar
> Task :react-native-gesture-handler:verifyReleaseResources FROM-CACHE
> Task :react-native-gesture-handler:assembleRelease
> Task :app:buildCMakeRelWithDebInfo[x86_64]
> Task :app:generateReleaseResValues
> Task :app:generateReleaseResources FROM-CACHE
> Task :app:processReleaseGoogleServices FROM-CACHE
> Task :react-native-reanimated:bundleReleaseAar
> Task :react-native-reanimated:mergeReleaseResources FROM-CACHE
> Task :react-native-reanimated:verifyReleaseResources FROM-CACHE
> Task :react-native-reanimated:assembleRelease
> Task :app:packageReleaseResources
> Task :app:mergeReleaseNativeLibs
> Task :app:processReleaseNavigationResources FROM-CACHE
> Task :app:javaPreCompileRelease FROM-CACHE
> Task :app:checkReleaseAarMetadata
> Task :app:mapReleaseSourceSetPaths
> Task :app:compileReleaseNavigationResources FROM-CACHE
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

> Task :app:expoReleaseOverrideMaxSdkConflicts
[33m---------- Expo Max Sdk Override Plugin ----------[0m
[32m>>> No 'android:maxSdkVersion' conflicts found[0m
[33m--------------------------------------------------[0m

> Task :app:processReleaseManifest
> Task :app:processReleaseManifestForPackage
> Task :app:desugarReleaseFileDependencies FROM-CACHE
> Task :app:mergeReleaseStartupProfile
> Task :app:mergeExtDexRelease FROM-CACHE
> Task :app:mergeReleaseResources
> Task :app:mergeReleaseNativeDebugMetadata
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
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1793481360771.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 3m 3s
784 actionable tasks: 503 executed, 281 from cache
Cacheable calls:   724 / 736 (98.37%)
  Hits:            724 / 724 (100.0%)
    Direct:        724 / 724 (100.0%)
    Preprocessed:    0 / 724 ( 0.00%)
  Misses:            0 / 724 ( 0.00%)
Uncacheable calls:  12 / 736 ( 1.63%)
Local storage:
  Cache size (GB): 0.3 / 3.0 ( 9.74%)
  Hits:            724 / 724 (100.0%)
  Misses:            0 / 724 ( 0.00%)
```
