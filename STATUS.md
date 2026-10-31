# Android build 48: success

Disk: /dev/root       145G   57G   89G  39% /

- Commit: 24f8306e0edce101019993f0a00fdfe726340471
- Run: https://github.com/agiasotellis/ergo/actions/runs/41241030947
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-48

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
    drwxr-xr-x  2 runner runner      4096 Oct 31 21:03 .
    drwxr-xr-x 15 runner runner      4096 Oct 31 21:03 ..
    -rw-r--r--  1 runner runner 107539820 Oct 31 21:03 ergo-1.0.0-build48.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-31 21:05:13.368 D/AndroidRuntime( 4038): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-31 21:05:13.372 I/AndroidRuntime( 4038): Using default boot image
10-31 21:05:13.372 I/AndroidRuntime( 4038): Leaving lock profiling enabled
10-31 21:05:13.510 D/AndroidRuntime( 4038): Calling main entry com.android.commands.monkey.Monkey
10-31 21:05:14.138 I/AndroidRuntime( 4038): VM exiting with result code 0.

=== React Native / Expo ===
10-31 21:05:40.269 W/ModernMediaScanner( 1647): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt
10-31 21:05:40.357 W/ModernMediaScanner( 1647): Failed to visit /data/data/com.android.providers.downloads/cache/model.smfb.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/model.smfb.metadata
10-31 21:05:40.365 W/ModernMediaScanner( 1647): Failed to visit /data/data/com.android.providers.downloads/cache/model.smfb: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/model.smfb
10-31 21:05:40.587 W/ModernMediaScanner( 1647): Failed to visit /data/data/com.android.providers.downloads/cache/en.model.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model.metadata
10-31 21:05:40.599 W/ModernMediaScanner( 1647): Failed to visit /data/data/com.android.providers.downloads/cache/en.model: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model
10-31 21:05:40.669 W/ModernMediaScanner( 1647): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb.metadata
10-31 21:05:40.674 W/ModernMediaScanner( 1647): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb
10-31 21:05:40.695 E/AppOps  (  518): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:05:40.696 E/AppOps  (  518): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:05:40.696 E/AppOps  (  518): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:05:40.696 E/AppOps  (  518): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:05:40.814 W/CorpusConfigHelper( 1823): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:05:40.814 W/CorpusConfigHelper( 1823): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:05:40.925 W/CorpusConfigHelper( 1823): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:05:40.925 W/CorpusConfigHelper( 1823): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:05:41.775 W/CorpusConfigHelper( 1823): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:05:41.775 W/CorpusConfigHelper( 1823): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:05:41.897 W/PeoplePU( 1472): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-31 21:05:41.897 W/PeoplePU( 1472): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:05:41.897 W/PeoplePU( 1472): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:05:41.897 W/PeoplePU( 1472): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:05:41.897 W/PeoplePU( 1472): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:05:41.897 W/PeoplePU( 1472): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:05:41.897 W/PeoplePU( 1472): Caused by: android.os.RemoteException: Remote stack trace:
10-31 21:05:41.905 W/PeoplePU( 1472): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:05:41.905 W/PeoplePU( 1472): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:05:41.905 W/PeoplePU( 1472): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:05:41.905 W/PeoplePU( 1472): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:05:41.905 W/PeoplePU( 1472): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:05:41.922 W/PeoplePU( 1472): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-31 21:05:41.922 W/PeoplePU( 1472): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:05:41.922 W/PeoplePU( 1472): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:05:41.922 W/PeoplePU( 1472): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:05:41.922 W/PeoplePU( 1472): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:05:42.112 W/CorpusConfigHelper( 1823): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:05:42.112 W/CorpusConfigHelper( 1823): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:05:42.283 E/AppOps  (  518): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:05:42.283 E/AppOps  (  518): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:05:42.283 E/AppOps  (  518): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:05:42.283 E/AppOps  (  518): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:05:43.252 W/ActivityManager(  518): Exception when unbinding service com.google.android.gms/.chimera.PersistentApiService
10-31 21:05:43.252 W/ActivityManager(  518): android.os.DeadObjectException
10-31 21:05:43.252 W/ActivityManager(  518): Exception when unbinding service com.google.android.gms/.lockbox.service.LockboxBrokerService
10-31 21:05:43.252 W/ActivityManager(  518): android.os.DeadObjectException
10-31 21:05:43.255 W/ActivityManager(  518): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.WakeUpService in 11000ms for connection
10-31 21:05:43.266 W/ActivityManager(  518): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureMatchingService in 170989ms for start-requested
10-31 21:05:43.266 W/ActivityManager(  518): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureNotificationInternalService in 220988ms for start-requested
10-31 21:05:43.769 W/GmsPipelineLogger( 4928): java.lang.NullPointerException
10-31 21:05:43.838 W/AsyncOperation( 4928): OperationException[Status{statusCode=Stale snapshot for com.google.android.libraries.consentverifier#com.google.android.gms(change count changed - expected 4  but was 1), resolution=null}]
10-31 21:05:44.264 I/SemanticLocation( 4928): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-31 21:05:44.264 I/SemanticLocation( 4928): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:05:44.441 I/SemanticLocation( 4928): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-31 21:05:44.441 I/SemanticLocation( 4928): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:05:44.600 W/ConfigFileUtils( 5039): Failed to read asset ChimeraModuleSetList.pb: java.io.FileNotFoundException: ChimeraModuleSetList.pb
10-31 21:05:45.520 E/ChimeraUPLUtils( 5039): Failed to invoke updateComplete: android.os.DeadObjectException
10-31 21:05:45.589 E/ChimeraUPLUtils( 5039): Failed to invoke updateComplete: android.os.DeadObjectException
10-31 21:05:45.660 E/ChimeraUPLUtils( 5039): Failed to invoke updateComplete: android.os.DeadObjectException
10-31 21:05:46.155 W/GLSUser ( 4928): [AppCertManager] Exception while requesting key: 
10-31 21:05:46.155 W/GLSUser ( 4928): java.util.concurrent.ExecutionException: avvw: Parse Proto Exception.
10-31 21:05:46.155 W/GLSUser ( 4928): Caused by: avvw: Parse Proto Exception.
10-31 21:05:46.206 W/Conscrypt( 4928): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:05:46.227 W/Conscrypt( 4928): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:05:46.236 W/Conscrypt( 4928): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:05:46.257 W/Conscrypt( 4928): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:05:48.876 W/AsyncOperation( 4928): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustlet_onbody(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:05:51.352 W/AsyncOperation( 4928): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 2  but was 0), resolution=null}]
10-31 21:05:51.365 W/AsyncOperation( 4928): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 2  but was 0), resolution=null}]
10-31 21:05:51.541 E/RecoverySnapshotStorage(  518): Error reading snapshot for 10131 from disk
10-31 21:05:51.541 E/RecoverySnapshotStorage(  518): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-31 21:05:51.541 E/RecoverySnapshotStorage(  518): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:05:51.542 E/keystore2(  157):     3: Error::Rc(r#SYSTEM_ERROR)
10-31 21:05:51.543 W/RecoverableKeyStoreGms( 5039): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-31 21:05:51.543 W/RecoverableKeyStoreGms( 5039): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-31 21:05:51.543 W/RecoverableKeyStoreGms( 5039): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-31 21:05:51.543 W/RecoverableKeyStoreGms( 5039): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-31 21:05:51.543 W/RecoverableKeyStoreGms( 5039): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-31 21:05:51.543 W/RecoverableKeyStoreGms( 5039): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:05:51.543 W/RecoverableKeyStoreGms( 5039): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:05:51.543 W/RecoverableKeyStoreGms( 5039): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:05:51.578 E/dlpn    ( 4928): RuntimeException while executing runnable dlqc{qze@b58d268} with executor MoreExecutors.directExecutor()
10-31 21:05:51.578 E/dlpn    ( 4928): java.lang.NullPointerException: Attempt to get length of null array
10-31 21:05:52.074 W/CardCollectorTask( 4747): android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
10-31 21:05:52.359 W/PeoplePU( 5039): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-31 21:05:52.359 W/PeoplePU( 5039): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:05:52.359 W/PeoplePU( 5039): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:05:52.359 W/PeoplePU( 5039): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:05:52.359 W/PeoplePU( 5039): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:05:52.532 I/SemanticLocation( 4928): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-31 21:05:52.532 I/SemanticLocation( 4928): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:05:52.553 I/SemanticLocation( 4928): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-31 21:05:52.553 I/SemanticLocation( 4928): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:05:52.574 W/Conscrypt( 5039): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:05:52.682 W/Conscrypt( 5039): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:05:53.327 W/Conscrypt( 5039): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:05:53.693 W/Conscrypt( 5039): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:05:53.695 E/PhenotypeFlagCommitter( 5039): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-31 21:05:54.321 E/bwel    ( 4928): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-31 21:05:59.053 W/AsyncOperation( 4928): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.auth.easyunlock(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:05:59.057 W/AsyncOperation( 4928): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.dtdi#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
10-31 21:05:59.065 W/AsyncOperation( 4928): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:05:59.069 W/AsyncOperation( 4928): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.maps#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
10-31 21:05:59.100 W/AsyncOperation( 4928): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:05:59.104 W/AsyncOperation( 4928): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.personalsafety(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:05:59.107 W/AsyncOperation( 4928): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.phonesky_recovery(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:05:59.112 W/AsyncOperation( 4928): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustagent.activeunlock.primary#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
10-31 21:05:59.113 W/AsyncOperation( 4928): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.vision(change count changed - expected 1  but was 0), resolution=null}]
10-31 21:06:00.061 W/Vision  ( 5039): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:06:00.098 W/Vision  ( 5039): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:06:00.158 W/NetworkScheduler( 4928): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-31 21:06:00.267 W/AsyncOperation( 4928): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.pay(change count changed - expected 3  but was 2), resolution=null}]
10-31 21:06:00.268 W/PhenotypeFlagCommitter( 4928): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.pay(change count changed - expected 3  but was 2)
10-31 21:06:00.268 W/PhenotypeCommitHelper( 4928): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.pay(change count changed - expected 3  but was 2)
10-31 21:06:00.517 E/A       ( 1823): onError
10-31 21:06:00.518 E/cr_CronetUrlRequestContext( 1823): Exception in upload method
10-31 21:06:00.518 E/cr_CronetUrlRequestContext( 1823): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-31 21:06:00.860 W/CorpusConfigHelper( 1823): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:06:00.860 W/CorpusConfigHelper( 1823): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:06:01.211 W/CorpusConfigHelper( 1823): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:06:01.211 W/CorpusConfigHelper( 1823): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:06:01.252 W/TapAndPay( 4928): java.lang.NullPointerException: NfcAdapter is null
10-31 21:06:01.546 W/CorpusConfigHelper( 1823): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:06:01.546 W/CorpusConfigHelper( 1823): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:06:03.752 W/CorpusConfigHelper( 1823): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:06:03.752 W/CorpusConfigHelper( 1823): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:06:03.934 W/PeoplePU( 5039): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:06:03.934 W/PeoplePU( 5039): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:06:03.934 W/PeoplePU( 5039): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:06:03.934 W/PeoplePU( 5039): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:06:03.934 W/PeoplePU( 5039): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:06:03.934 W/PeoplePU( 5039): Caused by: android.os.RemoteException: Remote stack trace:
10-31 21:06:03.939 W/PeoplePU( 5039): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:06:03.939 W/PeoplePU( 5039): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:06:03.939 W/PeoplePU( 5039): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:06:03.939 W/PeoplePU( 5039): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:06:03.939 W/PeoplePU( 5039): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:06:03.940 W/PeoplePU( 5039): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-31 21:06:03.940 W/PeoplePU( 5039): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:06:03.940 W/PeoplePU( 5039): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:06:03.940 W/PeoplePU( 5039): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:06:03.940 W/PeoplePU( 5039): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:06:03.971 W/CorpusConfigHelper( 1823): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:06:03.971 W/CorpusConfigHelper( 1823): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:06:04.069 W/CorpusConfigHelper( 1823): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:06:04.069 W/CorpusConfigHelper( 1823): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:06:09.884 E/d       ( 1823): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@3989bba} with executor MoreExecutors.directExecutor()
10-31 21:06:09.884 E/d       ( 1823): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-31 21:06:09.886 E/d       ( 1823): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@ad5d9c8} with executor MoreExecutors.directExecutor()
10-31 21:06:09.886 E/d       ( 1823): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-31 21:06:09.888 E/d       ( 1823): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@52ca74} with executor MoreExecutors.directExecutor()
10-31 21:06:09.888 E/d       ( 1823): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 845 packages, and audited 846 packages in 38s

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
drwxr-xr-x  2 runner runner      4096 Oct 31 21:03 .
drwxr-xr-x 15 runner runner      4096 Oct 31 21:03 ..
-rw-r--r--  1 runner runner 107539820 Oct 31 21:03 ergo-1.0.0-build48.apk
```

## Gradle
```
126:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-worklets/android/build.gradle.kts:162:1: 'fun Project.android(configure: Action<LibraryExtension>): Unit' is deprecated. Replaced by com.android.build.api.dsl.LibraryExtension.
162:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/build.gradle.kts:168:1: 'fun Project.android(configure: Action<LibraryExtension>): Unit' is deprecated. Replaced by com.android.build.api.dsl.LibraryExtension.
351:Note: Some input files use or override a deprecated API.
352:Note: Recompile with -Xlint:deprecation for details.
353:Note: Some input files use unchecked or unsafe operations.
354:Note: Recompile with -Xlint:unchecked for details.
363:Note: Some input files use or override a deprecated API.
364:Note: Recompile with -Xlint:deprecation for details.
365:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-google-signin/google-signin/android/src/main/java/com/reactnativegooglesignin/RNGoogleSigninModule.java uses unchecked or unsafe operations.
366:Note: Recompile with -Xlint:unchecked for details.
398:w: file:///home/runner/work/ergo/ergo/node_modules/@maplibre/maplibre-react-native/android/src/main/java/org/maplibre/reactnative/components/AbstractEvent.kt:16:25 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
421:Note: Some input files use or override a deprecated API.
422:Note: Recompile with -Xlint:deprecation for details.
434:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-keyboard-controller/android/src/main/java/com/reactnativekeyboardcontroller/extensions/ReactContext.kt:18:27 'fun getEventDispatcher(context: ReactContext, uiManagerType: Int): EventDispatcher?' is deprecated. UIManagerType is no longer needed.
548:Note: Some input files use or override a deprecated API.
549:Note: Recompile with -Xlint:deprecation for details.
550:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-async-storage/async-storage/android/src/javaPackage/java/com/reactnativecommunity/asyncstorage/AsyncStoragePackage.java uses unchecked or unsafe operations.
551:Note: Recompile with -Xlint:unchecked for details.
563:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-masked-view/masked-view/android/src/main/java/org/reactnative/maskedview/RNCMaskedViewPackage.java uses or overrides a deprecated API.
564:Note: Recompile with -Xlint:deprecation for details.
585:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:83:17 'constructor(name: String, className: String, canOverrideExistingModule: Boolean, needsEagerInit: Boolean, hasConstants: Boolean, isCxxModule: Boolean, isTurboModule: Boolean): ReactModuleInfo' is deprecated. This constructor is deprecated and will be removed in the future. Use ReactModuleInfo(String, String, boolean, boolean, boolean, boolean)].
622:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/gamma/modals/formsheet/FormSheetContentView.kt:39:33 'fun getEventDispatcher(context: ReactContext, uiManagerType: Int): EventDispatcher?' is deprecated. UIManagerType is no longer needed.
632:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NodesManager.kt:58:95 'fun resolveCustomDirectEventName(eventName: String): String?' is deprecated.
633:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NodesManager.kt:232:29 'fun receiveEvent(surfaceId: Int, targetTag: Int, eventName: String, canCoalesceEvent: Boolean, customCoalesceKey: Int, params: WritableMap?, category: Int): Unit' is deprecated. Use the overload with eventTimestamp parameter instead.
830:Note: Some input files use or override a deprecated API.
831:Note: Recompile with -Xlint:deprecation for details.
846:w: file:///home/runner/work/ergo/ergo/node_modules/@expo/dom-webview/android/src/main/java/expo/modules/webview/DomWebView.kt:254:18 'fun executeOnJavaScriptThread(runnable: Runnable): Unit' is deprecated. Use RuntimeContext.schedule instead.
1277:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1353:BUILD SUCCESSFUL in 7m 20s
---
> Task :react-native-google-signin_google-signin:mergeReleaseResources
> Task :maplibre_maplibre-react-native:syncReleaseLibJars
> Task :maplibre_maplibre-react-native:bundleReleaseLocalLintAar
> Task :maplibre_maplibre-react-native:bundleReleaseAar
> Task :maplibre_maplibre-react-native:assembleRelease
> Task :react-native-masked-view_masked-view:bundleReleaseAar
> Task :react-native-masked-view_masked-view:mergeReleaseResources
> Task :app:generateReleaseResValues
> Task :react-native-keyboard-controller:verifyReleaseResources
> Task :react-native-keyboard-controller:assembleRelease
> Task :app:generateReleaseResources
> Task :app:processReleaseGoogleServices
> Task :react-native-google-signin_google-signin:verifyReleaseResources
> Task :react-native-google-signin_google-signin:assembleRelease
> Task :react-native-masked-view_masked-view:verifyReleaseResources
> Task :react-native-masked-view_masked-view:assembleRelease
> Task :react-native-safe-area-context:bundleReleaseAar
> Task :app:packageReleaseResources
> Task :react-native-safe-area-context:mergeReleaseResources
> Task :app:processReleaseNavigationResources
> Task :app:parseReleaseLocalResources
> Task :app:generateReleaseRFile
> Task :app:mergeReleaseNativeDebugMetadata
> Task :app:javaPreCompileRelease FROM-CACHE
> Task :app:checkReleaseAarMetadata
> Task :app:mapReleaseSourceSetPaths
> Task :app:compileReleaseNavigationResources
> Task :react-native-safe-area-context:verifyReleaseResources
> Task :react-native-safe-area-context:assembleRelease
> Task :react-native-screens:bundleReleaseAar

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :react-native-svg:bundleReleaseAar
> Task :react-native-screens:mergeReleaseResources
> Task :react-native-svg:mergeReleaseResources
> Task :react-native-reanimated:bundleReleaseAar
> Task :react-native-reanimated:mergeReleaseResources
> Task :app:compileReleaseJavaWithJavac
> Task :app:createReleaseCompatibleScreenManifests
> Task :app:extractDeepLinksRelease
> Task :react-native-reanimated:verifyReleaseResources
> Task :react-native-reanimated:assembleRelease

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
> Task :app:desugarReleaseFileDependencies
> Task :app:mergeReleaseStartupProfile
> Task :react-native-screens:verifyReleaseResources
> Task :react-native-screens:assembleRelease
> Task :app:mergeReleaseResources
> Task :react-native-worklets:bundleReleaseAar
> Task :react-native-worklets:mergeReleaseResources
> Task :react-native-svg:verifyReleaseResources
> Task :react-native-svg:assembleRelease
> Task :app:mergeExtDexRelease
> Task :react-native-worklets:verifyReleaseResources
> Task :react-native-worklets:assembleRelease
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseArtProfile
> Task :app:mergeReleaseAssets
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
> Task :app:compressReleaseAssets
> Task :app:generateReleaseLintVitalReportModel
> Task :app:processReleaseJavaRes
> Task :app:processReleaseResources
> Task :app:dexBuilderRelease
> Task :app:mergeReleaseGlobalSynthetics
> Task :app:mergeReleaseJavaResource
> Task :app:collectReleaseDependencies
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease
> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :app:optimizeReleaseResources
> Task :app:lintVitalAnalyzeRelease
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :app:mergeDexRelease
> Task :app:compileReleaseArtProfile
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1793480168335.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 7m 20s
784 actionable tasks: 690 executed, 94 from cache
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
