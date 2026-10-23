# Android build 36: success

Disk: /dev/root       145G   61G   85G  42% /

- Commit: 71d77df9888ae069c865ca018e13f119fe3a912d
- Run: https://github.com/agiasotellis/ergo/actions/runs/39913413112
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-36

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
    drwxr-xr-x  2 runner runner      4096 Oct 23 06:50 .
    drwxr-xr-x 15 runner runner      4096 Oct 23 06:50 ..
    -rw-r--r--  1 runner runner 107537872 Oct 23 06:50 ergo-1.0.0-build36.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-23 06:52:43.417 D/AndroidRuntime( 4170): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-23 06:52:43.422 I/AndroidRuntime( 4170): Using default boot image
10-23 06:52:43.422 I/AndroidRuntime( 4170): Leaving lock profiling enabled
10-23 06:52:43.620 D/AndroidRuntime( 4170): Calling main entry com.android.commands.monkey.Monkey
10-23 06:52:44.005 I/AndroidRuntime( 4170): VM exiting with result code 0.

=== React Native / Expo ===
10-23 06:53:09.940 W/CorpusConfigHelper( 1733): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 06:53:09.940 W/CorpusConfigHelper( 1733): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 06:53:10.229 W/CorpusConfigHelper( 1733): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 06:53:10.229 W/CorpusConfigHelper( 1733): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 06:53:10.323 W/ModernMediaScanner( 1636): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-metadata.txt
10-23 06:53:10.483 W/ModernMediaScanner( 1636): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-pins.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-pins.txt
10-23 06:53:10.619 W/AsyncOperation( 1418): OperationException[Status{statusCode=Stale snapshot for com.google.android.googlequicksearchbox(change count changed - expected 3  but was 2), resolution=null}]
10-23 06:53:10.707 W/CorpusConfigHelper( 1733): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 06:53:10.707 W/CorpusConfigHelper( 1733): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 06:53:10.913 W/ActivityManager(  521): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.WakeUpService in 1000ms for connection
10-23 06:53:10.964 W/ActivityManager(  521): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureNotificationInternalService in 90949ms for start-requested
10-23 06:53:10.965 W/ActivityManager(  521): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureMatchingService in 160948ms for start-requested
10-23 06:53:11.268 E/PackageManager(  521): java.util.concurrent.TimeoutException: [Optimistic Bind] Didn't bind to resolver in time!
10-23 06:53:11.865 W/ModernMediaScanner( 1636): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt
10-23 06:53:11.929 W/CorpusConfigHelper( 1733): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 06:53:11.929 W/CorpusConfigHelper( 1733): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 06:53:11.984 W/ModernMediaScanner( 1636): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt
10-23 06:53:12.097 W/ModernMediaScanner( 1636): Failed to visit /data/data/com.android.providers.downloads/cache/model.smfb.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/model.smfb.metadata
10-23 06:53:12.126 W/ModernMediaScanner( 1636): Failed to visit /data/data/com.android.providers.downloads/cache/model.smfb: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/model.smfb
10-23 06:53:12.301 W/ModernMediaScanner( 1636): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb.metadata
10-23 06:53:12.340 W/ModernMediaScanner( 1636): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb
10-23 06:53:12.411 W/CorpusConfigHelper( 1733): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 06:53:12.411 W/CorpusConfigHelper( 1733): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 06:53:12.484 W/ConfigFileUtils( 5003): Failed to read asset ChimeraModuleSetList.pb: java.io.FileNotFoundException: ChimeraModuleSetList.pb
10-23 06:53:12.568 W/ModernMediaScanner( 1636): Failed to visit /data/data/com.android.providers.downloads/cache/en.model.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model.metadata
10-23 06:53:12.589 W/AsyncOperation( 4957): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustlet_onbody(change count changed - expected 1  but was 0), resolution=null}]
10-23 06:53:12.606 W/ModernMediaScanner( 1636): Failed to visit /data/data/com.android.providers.downloads/cache/en.model: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model
10-23 06:53:12.708 W/CorpusConfigHelper( 1733): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 06:53:12.708 W/CorpusConfigHelper( 1733): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 06:53:12.853 W/GmsPipelineLogger( 4957): java.lang.NullPointerException
10-23 06:53:13.212 W/Conscrypt( 4957): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 06:53:13.374 W/Conscrypt( 4957): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 06:53:13.376 I/SemanticLocation( 4957): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-23 06:53:13.376 I/SemanticLocation( 4957): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-23 06:53:13.409 I/SemanticLocation( 4957): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-23 06:53:13.409 I/SemanticLocation( 4957): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-23 06:53:14.440 W/GLSUser ( 4957): [AppCertManager] Exception while requesting key: 
10-23 06:53:14.440 W/GLSUser ( 4957): java.util.concurrent.ExecutionException: avvw: Parse Proto Exception.
10-23 06:53:14.440 W/GLSUser ( 4957): Caused by: avvw: Parse Proto Exception.
10-23 06:53:14.463 W/Conscrypt( 4957): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 06:53:14.658 W/Conscrypt( 4957): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 06:53:15.106 E/bwel    ( 4957): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-23 06:53:15.241 W/AsyncOperation( 4957): OperationException[Status{statusCode=Stale snapshot for com.google.android.libraries.consentverifier#com.google.android.gms(change count changed - expected 3  but was 0), resolution=null}]
10-23 06:53:15.319 W/AsyncOperation( 4957): OperationException[Status{statusCode=Stale snapshot for com.google.android.libraries.consentverifier#com.google.android.gms(change count changed - expected 3  but was 0), resolution=null}]
10-23 06:53:15.420 E/RecoverySnapshotStorage(  521): Error reading snapshot for 10131 from disk
10-23 06:53:15.420 E/RecoverySnapshotStorage(  521): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-23 06:53:15.420 E/RecoverySnapshotStorage(  521): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-23 06:53:15.434 E/keystore2(  157):     3: Error::Rc(r#SYSTEM_ERROR)
10-23 06:53:15.435 W/RecoverableKeyStoreGms( 5003): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-23 06:53:15.435 W/RecoverableKeyStoreGms( 5003): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-23 06:53:15.435 W/RecoverableKeyStoreGms( 5003): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-23 06:53:15.435 W/RecoverableKeyStoreGms( 5003): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-23 06:53:15.435 W/RecoverableKeyStoreGms( 5003): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-23 06:53:15.435 W/RecoverableKeyStoreGms( 5003): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 06:53:15.435 W/RecoverableKeyStoreGms( 5003): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 06:53:15.435 W/RecoverableKeyStoreGms( 5003): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 06:53:15.502 E/dlpn    ( 4957): RuntimeException while executing runnable dlqc{qze@11b879c} with executor MoreExecutors.directExecutor()
10-23 06:53:15.502 E/dlpn    ( 4957): java.lang.NullPointerException: Attempt to get length of null array
10-23 06:53:16.313 W/PeoplePU( 5003): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-23 06:53:16.313 W/PeoplePU( 5003): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 06:53:16.313 W/PeoplePU( 5003): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 06:53:16.313 W/PeoplePU( 5003): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 06:53:16.313 W/PeoplePU( 5003): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 06:53:16.323 W/PeoplePU( 5003): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-23 06:53:16.372 W/Conscrypt( 5003): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 06:53:16.433 W/Conscrypt( 5003): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 06:53:16.511 I/SemanticLocation( 4957): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-23 06:53:16.511 I/SemanticLocation( 4957): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-23 06:53:16.514 I/SemanticLocation( 4957): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-23 06:53:16.514 I/SemanticLocation( 4957): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-23 06:53:17.189 W/Conscrypt( 5003): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 06:53:17.457 W/Conscrypt( 5003): Could not set socket write timeout: java.net.SocketException: Socket closed
10-23 06:53:17.614 E/PhenotypeFlagCommitter( 5003): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-23 06:53:18.810 W/AsyncOperation( 4957): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.dtdi#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
10-23 06:53:18.811 W/AsyncOperation( 4957): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
10-23 06:53:18.812 W/AsyncOperation( 4957): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.maps#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
10-23 06:53:18.813 W/AsyncOperation( 4957): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
10-23 06:53:18.835 W/AsyncOperation( 4957): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.personalsafety(change count changed - expected 1  but was 0), resolution=null}]
10-23 06:53:18.838 W/AsyncOperation( 4957): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.vision(change count changed - expected 1  but was 0), resolution=null}]
10-23 06:53:18.839 W/AsyncOperation( 4957): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.phonesky_recovery(change count changed - expected 1  but was 0), resolution=null}]
10-23 06:53:18.850 W/AsyncOperation( 4957): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustagent.activeunlock.primary#com.google.android.gms(change count changed - expected 3  but was 0), resolution=null}]
10-23 06:53:20.839 W/AsyncOperation( 4957): OperationException[Status{statusCode=Stale snapshot for com.google.android.westworld(change count changed - expected 2  but was 1), resolution=null}]
10-23 06:53:20.839 W/PhenotypeFlagCommitter( 5003): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.westworld(change count changed - expected 2  but was 1)
10-23 06:53:21.351 W/CorpusConfigHelper( 1733): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 06:53:21.351 W/CorpusConfigHelper( 1733): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 06:53:21.387 W/PeoplePU( 5003): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-23 06:53:21.387 W/PeoplePU( 5003): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-23 06:53:21.387 W/PeoplePU( 5003): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 06:53:21.387 W/PeoplePU( 5003): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 06:53:21.387 W/PeoplePU( 5003): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 06:53:21.387 W/PeoplePU( 5003): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 06:53:21.387 W/PeoplePU( 5003): Caused by: android.os.RemoteException: Remote stack trace:
10-23 06:53:21.396 W/PeoplePU( 5003): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-23 06:53:21.396 W/PeoplePU( 5003): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 06:53:21.396 W/PeoplePU( 5003): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 06:53:21.396 W/PeoplePU( 5003): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 06:53:21.396 W/PeoplePU( 5003): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 06:53:21.397 W/PeoplePU( 5003): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-23 06:53:21.397 W/PeoplePU( 5003): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 06:53:21.397 W/PeoplePU( 5003): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 06:53:21.397 W/PeoplePU( 5003): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 06:53:21.397 W/PeoplePU( 5003): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 06:53:21.531 W/CorpusConfigHelper( 1733): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 06:53:21.531 W/CorpusConfigHelper( 1733): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 06:53:21.633 W/CorpusConfigHelper( 1733): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 06:53:21.633 W/CorpusConfigHelper( 1733): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 06:53:21.820 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10170 but it is not
10-23 06:53:21.820 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10170 but it is not
10-23 06:53:21.820 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10170 but it is not
10-23 06:53:21.820 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10170 but it is not
10-23 06:53:21.861 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10170 but it is not
10-23 06:53:21.861 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10170 but it is not
10-23 06:53:21.862 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10170 but it is not
10-23 06:53:21.862 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10170 but it is not
10-23 06:53:27.383 W/Vision  ( 5003): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-23 06:53:27.392 W/Vision  ( 5003): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-23 06:53:27.452 W/NetworkScheduler( 4957): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-23 06:53:27.931 E/cr_CronetUrlRequestContext( 1733): Exception in upload method
10-23 06:53:27.931 E/cr_CronetUrlRequestContext( 1733): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-23 06:53:27.932 E/A       ( 1733): onError
10-23 06:53:28.195 W/TapAndPay( 4957): java.lang.NullPointerException: NfcAdapter is null
10-23 06:53:31.180 W/PeoplePU( 5003): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-23 06:53:31.180 W/PeoplePU( 5003): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 06:53:31.180 W/PeoplePU( 5003): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 06:53:31.180 W/PeoplePU( 5003): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 06:53:31.180 W/PeoplePU( 5003): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 06:53:31.180 W/PeoplePU( 5003): Caused by: android.os.RemoteException: Remote stack trace:
10-23 06:53:31.187 W/PeoplePU( 5003): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-23 06:53:31.187 W/PeoplePU( 5003): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 06:53:31.187 W/PeoplePU( 5003): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 06:53:31.187 W/PeoplePU( 5003): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 06:53:31.187 W/PeoplePU( 5003): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 06:53:31.198 W/PeoplePU( 5003): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-23 06:53:31.198 W/PeoplePU( 5003): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-23 06:53:31.198 W/PeoplePU( 5003): 	at android.os.Parcel.createException(Parcel.java:3041)
10-23 06:53:31.198 W/PeoplePU( 5003): 	at android.os.Parcel.readException(Parcel.java:3024)
10-23 06:53:31.198 W/PeoplePU( 5003): 	at android.os.Parcel.readException(Parcel.java:2966)
10-23 06:53:31.620 W/CorpusConfigHelper( 1733): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 06:53:31.620 W/CorpusConfigHelper( 1733): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 06:53:31.639 W/Vision  ( 5003): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-23 06:53:31.643 W/Vision  ( 5003): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-23 06:53:31.659 W/NetworkScheduler( 4957): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-23 06:53:31.939 W/CorpusConfigHelper( 1733): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-23 06:53:31.939 W/CorpusConfigHelper( 1733): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-23 06:53:44.434 E/d       ( 1733): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@27dfbf1} with executor MoreExecutors.directExecutor()
10-23 06:53:44.434 E/d       ( 1733): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-23 06:53:44.447 E/d       ( 1733): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@c0a2de5} with executor MoreExecutors.directExecutor()
10-23 06:53:44.447 E/d       ( 1733): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-23 06:53:44.522 E/d       ( 1733): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@8e8b423} with executor MoreExecutors.directExecutor()
10-23 06:53:44.522 E/d       ( 1733): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 845 packages, and audited 846 packages in 15s

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
drwxr-xr-x  2 runner runner      4096 Oct 23 06:50 .
drwxr-xr-x 15 runner runner      4096 Oct 23 06:50 ..
-rw-r--r--  1 runner runner 107537872 Oct 23 06:50 ergo-1.0.0-build36.apk
```

## Gradle
```
1067:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1093:BUILD SUCCESSFUL in 2m 57s
---
> Task :react-native-gesture-handler:processReleaseJavaRes
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
> Task :app:stripReleaseDebugSymbols
> Task :app:checkReleaseAarMetadata
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
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseArtProfile
> Task :app:mergeReleaseAssets
> Task :app:processReleaseManifestForPackage
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
> Task :app:compressReleaseAssets
> Task :app:processReleaseResources
> Task :app:collectReleaseDependencies
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease
> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :app:optimizeReleaseResources

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:compileReleaseJavaWithJavac
> Task :app:dexBuilderRelease
> Task :app:mergeReleaseGlobalSynthetics FROM-CACHE
> Task :app:generateReleaseLintVitalReportModel
> Task :app:processReleaseJavaRes
> Task :app:mergeReleaseJavaResource
> Task :app:mergeDexRelease
> Task :app:compileReleaseArtProfile
> Task :app:lintVitalAnalyzeRelease
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792738070616.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 2m 57s
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
