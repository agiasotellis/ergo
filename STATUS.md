# Android build 53: success

Disk: /dev/root       145G   57G   89G  39% /

- Commit: b037ba0f4db80b55ec8434bbf223ec61bf669c56
- Run: https://github.com/agiasotellis/ergo/actions/runs/45131616744
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-53

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
    drwxr-xr-x  2 runner runner      4096 Nov 23 07:52 .
    drwxr-xr-x 15 runner runner      4096 Nov 23 07:52 ..
    -rw-r--r--  1 runner runner 107539820 Nov 23 07:52 ergo-1.0.0-build53.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
11-23 07:54:38.560 D/AndroidRuntime( 4466): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
11-23 07:54:38.565 I/AndroidRuntime( 4466): Using default boot image
11-23 07:54:38.565 I/AndroidRuntime( 4466): Leaving lock profiling enabled
11-23 07:54:38.696 D/AndroidRuntime( 4466): Calling main entry com.android.commands.monkey.Monkey
11-23 07:54:39.112 I/AndroidRuntime( 4466): VM exiting with result code 0.

=== React Native / Expo ===
11-23 07:55:09.105 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10187 but it is not
11-23 07:55:09.105 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10187 but it is not
11-23 07:55:09.106 E/AppOps  (  522): java.lang.SecurityException: Specified package "android" under uid 10187 but it is not
11-23 07:55:09.350 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:09.350 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:09.570 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:09.570 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:09.849 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:09.849 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:10.236 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:10.236 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:10.437 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:10.437 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:10.667 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:10.667 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:11.410 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:11.410 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:11.466 W/PeoplePU( 1452): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
11-23 07:55:11.466 W/PeoplePU( 1452): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
11-23 07:55:11.466 W/PeoplePU( 1452): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
11-23 07:55:11.466 W/PeoplePU( 1452): 	at android.os.Parcel.createException(Parcel.java:3041)
11-23 07:55:11.466 W/PeoplePU( 1452): 	at android.os.Parcel.readException(Parcel.java:3024)
11-23 07:55:11.466 W/PeoplePU( 1452): 	at android.os.Parcel.readException(Parcel.java:2966)
11-23 07:55:11.466 W/PeoplePU( 1452): Caused by: android.os.RemoteException: Remote stack trace:
11-23 07:55:11.482 W/PeoplePU( 1452): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
11-23 07:55:11.482 W/PeoplePU( 1452): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
11-23 07:55:11.482 W/PeoplePU( 1452): 	at android.os.Parcel.createException(Parcel.java:3041)
11-23 07:55:11.482 W/PeoplePU( 1452): 	at android.os.Parcel.readException(Parcel.java:3024)
11-23 07:55:11.482 W/PeoplePU( 1452): 	at android.os.Parcel.readException(Parcel.java:2966)
11-23 07:55:11.714 W/PeoplePU( 1452): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
11-23 07:55:11.714 W/PeoplePU( 1452): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
11-23 07:55:11.714 W/PeoplePU( 1452): 	at android.os.Parcel.createException(Parcel.java:3041)
11-23 07:55:11.714 W/PeoplePU( 1452): 	at android.os.Parcel.readException(Parcel.java:3024)
11-23 07:55:11.714 W/PeoplePU( 1452): 	at android.os.Parcel.readException(Parcel.java:2966)
11-23 07:55:11.839 W/ModernMediaScanner( 1641): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt
11-23 07:55:11.970 W/ModernMediaScanner( 1641): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt
11-23 07:55:12.119 W/ModernMediaScanner( 1641): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-metadata.txt
11-23 07:55:12.176 W/ModernMediaScanner( 1641): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-pins.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-pins.txt
11-23 07:55:12.184 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:12.184 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:12.378 W/ModernMediaScanner( 1641): Failed to visit /data/data/com.android.providers.downloads/cache/model.smfb.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/model.smfb.metadata
11-23 07:55:12.397 W/ModernMediaScanner( 1641): Failed to visit /data/data/com.android.providers.downloads/cache/model.smfb: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/model.smfb
11-23 07:55:12.561 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:12.561 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:12.746 W/ModernMediaScanner( 1641): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb.metadata
11-23 07:55:12.764 W/ModernMediaScanner( 1641): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb
11-23 07:55:12.802 W/AsyncOperation( 1405): OperationException[Status{statusCode=Stale snapshot for com.google.android.googlequicksearchbox(change count changed - expected 5  but was 4), resolution=null}]
11-23 07:55:12.827 W/ModernMediaScanner( 1641): Failed to visit /data/data/com.android.providers.downloads/cache/en.model.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model.metadata
11-23 07:55:12.848 W/ModernMediaScanner( 1641): Failed to visit /data/data/com.android.providers.downloads/cache/en.model: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model
11-23 07:55:13.235 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:13.235 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:13.648 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:13.648 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:13.793 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:13.793 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:15.270 W/ActivityManager(  522): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.WakeUpService in 21000ms for connection
11-23 07:55:15.289 W/ActivityManager(  522): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureMatchingService in 100981ms for start-requested
11-23 07:55:15.290 W/ActivityManager(  522): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureNotificationInternalService in 150980ms for start-requested
11-23 07:55:15.891 W/ConfigFileUtils( 5481): Failed to read asset ChimeraModuleSetList.pb: java.io.FileNotFoundException: ChimeraModuleSetList.pb
11-23 07:55:16.332 W/GmsPipelineLogger( 5448): java.lang.NullPointerException
11-23 07:55:16.727 E/ChimeraUPLUtils( 5481): Failed to invoke updateComplete: android.os.DeadObjectException
11-23 07:55:16.819 I/SemanticLocation( 5448): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
11-23 07:55:16.819 I/SemanticLocation( 5448): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
11-23 07:55:16.856 I/SemanticLocation( 5448): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
11-23 07:55:16.856 I/SemanticLocation( 5448): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
11-23 07:55:16.940 E/ChimeraUPLUtils( 5481): Failed to invoke updateComplete: android.os.DeadObjectException
11-23 07:55:17.007 E/ChimeraUPLUtils( 5481): Failed to invoke updateComplete: android.os.DeadObjectException
11-23 07:55:17.039 W/Conscrypt( 5448): Could not set socket write timeout: java.net.SocketException: Socket closed
11-23 07:55:17.075 W/Conscrypt( 5448): Could not set socket write timeout: java.net.SocketException: Socket closed
11-23 07:55:17.847 W/GLSUser ( 5448): [AppCertManager] Exception while requesting key: 
11-23 07:55:17.847 W/GLSUser ( 5448): java.util.concurrent.ExecutionException: avvw: Parse Proto Exception.
11-23 07:55:17.847 W/GLSUser ( 5448): Caused by: avvw: Parse Proto Exception.
11-23 07:55:17.872 W/Conscrypt( 5448): Could not set socket write timeout: java.net.SocketException: Socket closed
11-23 07:55:18.377 W/Conscrypt( 5448): Could not set socket write timeout: java.net.SocketException: Socket closed
11-23 07:55:19.547 W/AsyncOperation( 5448): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustlet_onbody(change count changed - expected 1  but was 0), resolution=null}]
11-23 07:55:19.709 E/RecoverySnapshotStorage(  522): Error reading snapshot for 10131 from disk
11-23 07:55:19.709 E/RecoverySnapshotStorage(  522): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
11-23 07:55:19.709 E/RecoverySnapshotStorage(  522): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
11-23 07:55:19.711 E/keystore2(  157):     3: Error::Rc(r#SYSTEM_ERROR)
11-23 07:55:19.714 W/RecoverableKeyStoreGms( 5481): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
11-23 07:55:19.714 W/RecoverableKeyStoreGms( 5481): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
11-23 07:55:19.714 W/RecoverableKeyStoreGms( 5481): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
11-23 07:55:19.714 W/RecoverableKeyStoreGms( 5481): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
11-23 07:55:19.714 W/RecoverableKeyStoreGms( 5481): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
11-23 07:55:19.714 W/RecoverableKeyStoreGms( 5481): 	at android.os.Parcel.createException(Parcel.java:3041)
11-23 07:55:19.714 W/RecoverableKeyStoreGms( 5481): 	at android.os.Parcel.readException(Parcel.java:3024)
11-23 07:55:19.714 W/RecoverableKeyStoreGms( 5481): 	at android.os.Parcel.readException(Parcel.java:2966)
11-23 07:55:19.752 E/dlpn    ( 5448): RuntimeException while executing runnable dlqc{qze@c4d1e1e} with executor MoreExecutors.directExecutor()
11-23 07:55:19.752 E/dlpn    ( 5448): java.lang.NullPointerException: Attempt to get length of null array
11-23 07:55:20.326 W/CardCollectorTask( 5189): android.os.DeadObjectException: Transaction failed on small parcel; remote process probably died, but this could also be caused by running out of binder buffer space
11-23 07:55:20.551 W/PeoplePU( 5481): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
11-23 07:55:20.551 W/PeoplePU( 5481): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
11-23 07:55:20.551 W/PeoplePU( 5481): 	at android.os.Parcel.createException(Parcel.java:3041)
11-23 07:55:20.551 W/PeoplePU( 5481): 	at android.os.Parcel.readException(Parcel.java:3024)
11-23 07:55:20.551 W/PeoplePU( 5481): 	at android.os.Parcel.readException(Parcel.java:2966)
11-23 07:55:20.747 E/cr_CronetUrlRequestContext( 1715): Exception in upload method
11-23 07:55:20.747 E/cr_CronetUrlRequestContext( 1715): com.google.android.apps.gsa.shared.r.d: Error code: 262182
11-23 07:55:20.747 E/A       ( 1715): onError
11-23 07:55:20.773 E/cr_CronetUrlRequestContext( 1715): Exception in upload method
11-23 07:55:20.773 E/cr_CronetUrlRequestContext( 1715): com.google.android.apps.gsa.shared.r.d: Error code: 262182
11-23 07:55:21.150 I/SemanticLocation( 5448): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
11-23 07:55:21.150 I/SemanticLocation( 5448): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
11-23 07:55:21.155 I/SemanticLocation( 5448): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
11-23 07:55:21.155 I/SemanticLocation( 5448): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
11-23 07:55:21.290 W/Conscrypt( 5481): Could not set socket write timeout: java.net.SocketException: Socket closed
11-23 07:55:21.376 W/Conscrypt( 5481): Could not set socket write timeout: java.net.SocketException: Socket closed
11-23 07:55:21.378 W/Conscrypt( 5481): Could not set socket write timeout: java.net.SocketException: Socket closed
11-23 07:55:21.420 W/Conscrypt( 5481): Could not set socket write timeout: java.net.SocketException: Socket closed
11-23 07:55:21.878 E/PhenotypeFlagCommitter( 5481): java.util.concurrent.TimeoutException: Timed out waiting for Task
11-23 07:55:27.395 W/AsyncOperation( 5448): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.dtdi#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
11-23 07:55:27.400 W/AsyncOperation( 5448): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
11-23 07:55:27.401 W/AsyncOperation( 5448): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.maps#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
11-23 07:55:27.402 W/AsyncOperation( 5448): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
11-23 07:55:27.405 W/AsyncOperation( 5448): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.personalsafety(change count changed - expected 1  but was 0), resolution=null}]
11-23 07:55:27.409 W/AsyncOperation( 5448): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.vision(change count changed - expected 1  but was 0), resolution=null}]
11-23 07:55:27.409 W/AsyncOperation( 5448): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.phonesky_recovery(change count changed - expected 1  but was 0), resolution=null}]
11-23 07:55:27.413 W/AsyncOperation( 5448): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustagent.activeunlock.primary#com.google.android.gms(change count changed - expected 3  but was 0), resolution=null}]
11-23 07:55:28.379 W/Vision  ( 5481): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
11-23 07:55:28.383 W/Vision  ( 5481): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
11-23 07:55:28.437 W/NetworkScheduler( 5448): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
11-23 07:55:28.618 W/TapAndPay( 5448): java.lang.NullPointerException: NfcAdapter is null
11-23 07:55:28.969 W/TapAndPay( 5448): java.lang.NullPointerException: NfcAdapter is null
11-23 07:55:31.701 W/PeoplePU( 5481): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
11-23 07:55:31.701 W/PeoplePU( 5481): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
11-23 07:55:31.701 W/PeoplePU( 5481): 	at android.os.Parcel.createException(Parcel.java:3041)
11-23 07:55:31.701 W/PeoplePU( 5481): 	at android.os.Parcel.readException(Parcel.java:3024)
11-23 07:55:31.701 W/PeoplePU( 5481): 	at android.os.Parcel.readException(Parcel.java:2966)
11-23 07:55:31.701 W/PeoplePU( 5481): Caused by: android.os.RemoteException: Remote stack trace:
11-23 07:55:31.702 W/PeoplePU( 5481): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
11-23 07:55:31.702 W/PeoplePU( 5481): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
11-23 07:55:31.702 W/PeoplePU( 5481): 	at android.os.Parcel.createException(Parcel.java:3041)
11-23 07:55:31.702 W/PeoplePU( 5481): 	at android.os.Parcel.readException(Parcel.java:3024)
11-23 07:55:31.702 W/PeoplePU( 5481): 	at android.os.Parcel.readException(Parcel.java:2966)
11-23 07:55:31.703 W/PeoplePU( 5481): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
11-23 07:55:31.703 W/PeoplePU( 5481): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
11-23 07:55:31.703 W/PeoplePU( 5481): 	at android.os.Parcel.createException(Parcel.java:3041)
11-23 07:55:31.703 W/PeoplePU( 5481): 	at android.os.Parcel.readException(Parcel.java:3024)
11-23 07:55:31.703 W/PeoplePU( 5481): 	at android.os.Parcel.readException(Parcel.java:2966)
11-23 07:55:31.866 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:31.866 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:32.062 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:32.062 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:32.195 W/CorpusConfigHelper( 1715): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
11-23 07:55:32.195 W/CorpusConfigHelper( 1715): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
11-23 07:55:33.818 E/d       ( 1715): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@f15cdbd} with executor MoreExecutors.directExecutor()
11-23 07:55:33.818 E/d       ( 1715): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
11-23 07:55:33.823 E/d       ( 1715): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@5688b9} with executor MoreExecutors.directExecutor()
11-23 07:55:33.823 E/d       ( 1715): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
11-23 07:55:33.856 E/d       ( 1715): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@6af97a4} with executor MoreExecutors.directExecutor()
11-23 07:55:33.856 E/d       ( 1715): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 845 packages, and audited 846 packages in 53s

180 packages are looking for funding
  run `npm fund` for details

18 vulnerabilities (15 moderate, 3 high)

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
keystore sha256: 119e896ee5b2afd0  size: 4322
lengths: store_pw=28 alias=11 key_pw=28
	 SHA1: 93:3A:08:AD:39:71:83:9D:66:7F:79:10:D7:54:0A:FE:26:40:2D:C4
	 SHA256: 00:38:A8:32:2C:3B:F4:D1:A2:0E:1F:EC:8C:D4:56:3A:9D:88:0B:5E:5A:D7:16:CF:D4:17:75:9D:CC:EE:7C:AE
KEYSTORE_OK
Build outputs:
android/app/build/outputs/apk/release/app-release.apk
total 105028
drwxr-xr-x  2 runner runner      4096 Nov 23 07:52 .
drwxr-xr-x 15 runner runner      4096 Nov 23 07:52 ..
-rw-r--r--  1 runner runner 107539820 Nov 23 07:52 ergo-1.0.0-build53.apk
```

## Gradle
```
138:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-worklets/android/build.gradle.kts:162:1: 'fun Project.android(configure: Action<LibraryExtension>): Unit' is deprecated. Replaced by com.android.build.api.dsl.LibraryExtension.
174:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/build.gradle.kts:168:1: 'fun Project.android(configure: Action<LibraryExtension>): Unit' is deprecated. Replaced by com.android.build.api.dsl.LibraryExtension.
324:Note: Some input files use or override a deprecated API.
325:Note: Recompile with -Xlint:deprecation for details.
326:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-google-signin/google-signin/android/src/main/java/com/reactnativegooglesignin/RNGoogleSigninModule.java uses unchecked or unsafe operations.
327:Note: Recompile with -Xlint:unchecked for details.
366:Note: Some input files use or override a deprecated API.
367:Note: Recompile with -Xlint:deprecation for details.
368:Note: Some input files use unchecked or unsafe operations.
369:Note: Recompile with -Xlint:unchecked for details.
406:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-keyboard-controller/android/src/main/java/com/reactnativekeyboardcontroller/extensions/ReactContext.kt:18:27 'fun getEventDispatcher(context: ReactContext, uiManagerType: Int): EventDispatcher?' is deprecated. UIManagerType is no longer needed.
452:w: file:///home/runner/work/ergo/ergo/node_modules/@maplibre/maplibre-react-native/android/src/main/java/org/maplibre/reactnative/components/AbstractEvent.kt:16:25 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
514:Note: Some input files use or override a deprecated API.
515:Note: Recompile with -Xlint:deprecation for details.
526:Note: Some input files use or override a deprecated API.
527:Note: Recompile with -Xlint:deprecation for details.
528:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-async-storage/async-storage/android/src/javaPackage/java/com/reactnativecommunity/asyncstorage/AsyncStoragePackage.java uses unchecked or unsafe operations.
529:Note: Recompile with -Xlint:unchecked for details.
541:Note: /home/runner/work/ergo/ergo/node_modules/@react-native-masked-view/masked-view/android/src/main/java/org/reactnative/maskedview/RNCMaskedViewPackage.java uses or overrides a deprecated API.
542:Note: Recompile with -Xlint:deprecation for details.
705:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:83:17 'constructor(name: String, className: String, canOverrideExistingModule: Boolean, needsEagerInit: Boolean, hasConstants: Boolean, isCxxModule: Boolean, isTurboModule: Boolean): ReactModuleInfo' is deprecated. This constructor is deprecated and will be removed in the future. Use ReactModuleInfo(String, String, boolean, boolean, boolean, boolean)].
742:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/gamma/modals/formsheet/FormSheetContentView.kt:39:33 'fun getEventDispatcher(context: ReactContext, uiManagerType: Int): EventDispatcher?' is deprecated. UIManagerType is no longer needed.
903:Note: Some input files use or override a deprecated API.
904:Note: Recompile with -Xlint:deprecation for details.
925:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NodesManager.kt:58:95 'fun resolveCustomDirectEventName(eventName: String): String?' is deprecated.
926:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NodesManager.kt:232:29 'fun receiveEvent(surfaceId: Int, targetTag: Int, eventName: String, canCoalesceEvent: Boolean, customCoalesceKey: Int, params: WritableMap?, category: Int): Unit' is deprecated. Use the overload with eventTimestamp parameter instead.
943:w: file:///home/runner/work/ergo/ergo/node_modules/@expo/dom-webview/android/src/main/java/expo/modules/webview/DomWebView.kt:254:18 'fun executeOnJavaScriptThread(runnable: Runnable): Unit' is deprecated. Use RuntimeContext.schedule instead.
1335:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1368:BUILD SUCCESSFUL in 20m 19s
---
> Task :expo-constants:assembleRelease
> Task :expo-dom-webview:bundleReleaseAar
> Task :expo-dom-webview:mergeReleaseResources
> Task :expo-dom-webview:verifyReleaseResources
> Task :expo-dom-webview:assembleRelease
> Task :expo-log-box:bundleReleaseAar
> Task :expo-log-box:mergeReleaseResources
> Task :expo:mergeReleaseResources
> Task :maplibre_maplibre-react-native:extractReleaseAnnotations
> Task :expo-log-box:verifyReleaseResources
> Task :expo-log-box:assembleRelease
> Task :expo:verifyReleaseResources
> Task :expo:assembleRelease
> Task :expo-modules-core:bundleReleaseAar
> Task :maplibre_maplibre-react-native:mergeReleaseResources
> Task :expo-modules-core:mergeReleaseResources
> Task :maplibre_maplibre-react-native:verifyReleaseResources
> Task :react-native-async-storage_async-storage:bundleReleaseAar
> Task :expo-modules-core:verifyReleaseResources
> Task :expo-modules-core:assembleRelease
> Task :react-native-gesture-handler:bundleReleaseAar
> Task :react-native-async-storage_async-storage:mergeReleaseResources
> Task :react-native-gesture-handler:mergeReleaseResources
> Task :react-native-gesture-handler:verifyReleaseResources
> Task :react-native-gesture-handler:assembleRelease
> Task :react-native-google-signin_google-signin:bundleReleaseAar
> Task :react-native-async-storage_async-storage:verifyReleaseResources
> Task :react-native-async-storage_async-storage:assembleRelease
> Task :react-native-keyboard-controller:bundleReleaseAar
> Task :react-native-google-signin_google-signin:mergeReleaseResources
> Task :react-native-keyboard-controller:mergeReleaseResources
> Task :react-native-keyboard-controller:verifyReleaseResources
> Task :react-native-keyboard-controller:assembleRelease
> Task :react-native-masked-view_masked-view:bundleReleaseAar
> Task :react-native-google-signin_google-signin:verifyReleaseResources
> Task :react-native-google-signin_google-signin:assembleRelease
> Task :react-native-masked-view_masked-view:mergeReleaseResources
> Task :maplibre_maplibre-react-native:syncReleaseLibJars
> Task :maplibre_maplibre-react-native:bundleReleaseLocalLintAar
> Task :react-native-masked-view_masked-view:verifyReleaseResources
> Task :react-native-masked-view_masked-view:assembleRelease
> Task :react-native-safe-area-context:bundleReleaseAar
> Task :maplibre_maplibre-react-native:bundleReleaseAar
> Task :maplibre_maplibre-react-native:assembleRelease
> Task :react-native-screens:bundleReleaseAar
> Task :react-native-safe-area-context:mergeReleaseResources
> Task :react-native-safe-area-context:verifyReleaseResources
> Task :react-native-safe-area-context:assembleRelease
> Task :react-native-svg:bundleReleaseAar
> Task :react-native-screens:mergeReleaseResources
> Task :react-native-reanimated:bundleReleaseAar
> Task :react-native-svg:mergeReleaseResources
> Task :react-native-reanimated:mergeReleaseResources
> Task :react-native-svg:verifyReleaseResources
> Task :react-native-svg:assembleRelease
> Task :react-native-reanimated:verifyReleaseResources
> Task :react-native-reanimated:assembleRelease
> Task :react-native-screens:verifyReleaseResources
> Task :react-native-screens:assembleRelease
> Task :react-native-worklets:bundleReleaseAar
> Task :react-native-worklets:mergeReleaseResources
> Task :react-native-worklets:verifyReleaseResources
> Task :react-native-worklets:assembleRelease
> Task :app:buildCMakeRelWithDebInfo[x86_64]
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseArtProfile
> Task :app:mergeReleaseAssets
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
> Task :app:compressReleaseAssets
> Task :app:collectReleaseDependencies
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :app:mergeReleaseNativeLibs
> Task :app:compileReleaseJavaWithJavac
> Task :app:stripReleaseDebugSymbols
> Task :app:dexBuilderRelease
> Task :app:optimizeReleaseResources
> Task :app:mergeReleaseGlobalSynthetics
> Task :app:generateReleaseLintVitalReportModel
> Task :app:processReleaseJavaRes
> Task :app:extractReleaseNativeSymbolTables
> Task :app:mergeReleaseJavaResource
> Task :app:mergeReleaseNativeDebugMetadata
> Task :app:lintVitalAnalyzeRelease
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :app:mergeDexRelease
> Task :app:compileReleaseArtProfile
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1795419154296.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 20m 19s
784 actionable tasks: 690 executed, 94 from cache
Cacheable calls:   724 / 736 (98.37%)
  Hits:              0 / 724 ( 0.00%)
    Direct:          0
    Preprocessed:    0
  Misses:          724 / 724 (100.0%)
Uncacheable calls:  12 / 736 ( 1.63%)
Local storage:
  Cache size (GB): 0.3 / 3.0 ( 9.74%)
  Hits:              0 / 724 ( 0.00%)
  Misses:          724 / 724 (100.0%)
```
