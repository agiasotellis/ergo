# Android build 33: success

Disk: /dev/root       145G   61G   84G  43% /

- Commit: 11ea377eca2e6bbc4fee318989301c7af5e2da01
- Run: https://github.com/agiasotellis/ergo/actions/runs/39828362949
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-33

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
    drwxr-xr-x  2 runner runner      4096 Oct 22 18:10 .
    drwxr-xr-x 15 runner runner      4096 Oct 22 18:10 ..
    -rw-r--r--  1 runner runner 106469358 Oct 22 18:10 ergo-1.0.0-build33.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-22 18:12:11.577 D/AndroidRuntime( 3975): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-22 18:12:11.585 I/AndroidRuntime( 3975): Using default boot image
10-22 18:12:11.590 I/AndroidRuntime( 3975): Leaving lock profiling enabled
10-22 18:12:11.740 D/AndroidRuntime( 3975): Calling main entry com.android.commands.monkey.Monkey
10-22 18:12:11.944 I/AndroidRuntime( 3975): VM exiting with result code 0.

=== React Native / Expo ===
10-22 18:12:54.603 W/CorpusConfigHelper( 1712): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:12:54.603 W/CorpusConfigHelper( 1712): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:12:55.314 W/CorpusConfigHelper( 1712): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:12:55.314 W/CorpusConfigHelper( 1712): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:12:55.392 W/WifiService(  521): Permission violation - getConfiguredNetworks not allowed for uid=10118, packageName=com.google.android.settings.intelligence, reason=java.lang.SecurityException: UID 10118 has no location permission
10-22 18:12:55.685 W/CorpusConfigHelper( 1712): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:12:55.685 W/CorpusConfigHelper( 1712): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:12:56.131 W/CorpusConfigHelper( 1712): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:12:56.131 W/CorpusConfigHelper( 1712): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:12:58.496 E/A       ( 1712): onError
10-22 18:13:00.308 W/CorpusConfigHelper( 1712): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:13:00.308 W/CorpusConfigHelper( 1712): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:13:00.593 W/Vision  ( 1458): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 18:13:00.597 W/Vision  ( 1458): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 18:13:00.993 W/CorpusConfigHelper( 1712): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:13:00.993 W/CorpusConfigHelper( 1712): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:13:01.066 W/NetworkScheduler( 1405): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 18:13:01.342 W/CorpusConfigHelper( 1712): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:13:01.342 W/CorpusConfigHelper( 1712): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:13:01.484 W/TapAndPay( 1405): java.lang.NullPointerException: NfcAdapter is null
10-22 18:13:01.656 W/AsyncOperation( 1405): OperationException[Status{statusCode=Stale snapshot for com.google.android.apps.search.lens.device#com.google.android.googlequicksearchbox(change count changed - expected 4  but was 3), resolution=null}]
10-22 18:13:01.694 W/AsyncOperation( 1405): OperationException[Status{statusCode=Stale snapshot for com.google.android.dialershared.directboot#com.google.android.dialer(change count changed - expected 5  but was 4), resolution=null}]
10-22 18:13:01.715 W/AsyncOperation( 1405): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.usagereporting(change count changed - expected 2  but was 1), resolution=null}]
10-22 18:13:01.715 W/PhenotypeFlagCommitter( 1405): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.usagereporting(change count changed - expected 2  but was 1)
10-22 18:13:01.715 W/PhenotypeCommitHelper( 1405): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.usagereporting(change count changed - expected 2  but was 1)
10-22 18:13:01.730 W/AsyncOperation( 1405): OperationException[Status{statusCode=Stale snapshot for com.google.android.googlequicksearchbox(change count changed - expected 3  but was 2), resolution=null}]
10-22 18:13:01.895 W/PeoplePU( 1458): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-22 18:13:01.900 W/PeoplePU( 1458): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 18:13:01.900 W/PeoplePU( 1458): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 18:13:01.900 W/PeoplePU( 1458): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 18:13:01.900 W/PeoplePU( 1458): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 18:13:01.900 W/PeoplePU( 1458): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 18:13:01.900 W/PeoplePU( 1458): Caused by: android.os.RemoteException: Remote stack trace:
10-22 18:13:01.931 W/PeoplePU( 1458): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 18:13:01.931 W/PeoplePU( 1458): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 18:13:01.931 W/PeoplePU( 1458): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 18:13:01.931 W/PeoplePU( 1458): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 18:13:01.931 W/PeoplePU( 1458): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 18:13:02.222 W/PeoplePU( 1458): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 18:13:02.222 W/PeoplePU( 1458): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 18:13:02.222 W/PeoplePU( 1458): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 18:13:02.222 W/PeoplePU( 1458): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 18:13:02.222 W/PeoplePU( 1458): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 18:13:02.921 W/ModernMediaScanner( 1643): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-metadata.txt
10-22 18:13:02.941 W/CorpusConfigHelper( 1712): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:13:02.941 W/CorpusConfigHelper( 1712): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:13:03.018 W/ModernMediaScanner( 1643): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-pins.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-pins.txt
10-22 18:13:03.183 W/ModernMediaScanner( 1643): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt
10-22 18:13:03.200 W/ModernMediaScanner( 1643): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt
10-22 18:13:03.379 W/CorpusConfigHelper( 1712): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:13:03.379 W/CorpusConfigHelper( 1712): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:13:03.455 W/ModernMediaScanner( 1643): Failed to visit /data/data/com.android.providers.downloads/cache/model.smfb.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/model.smfb.metadata
10-22 18:13:03.456 W/ModernMediaScanner( 1643): Failed to visit /data/data/com.android.providers.downloads/cache/model.smfb: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/model.smfb
10-22 18:13:03.636 W/ModernMediaScanner( 1643): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb.metadata
10-22 18:13:03.656 W/ModernMediaScanner( 1643): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb
10-22 18:13:04.020 W/ModernMediaScanner( 1643): Failed to visit /data/data/com.android.providers.downloads/cache/en.model.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model.metadata
10-22 18:13:04.022 W/ModernMediaScanner( 1643): Failed to visit /data/data/com.android.providers.downloads/cache/en.model: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model
10-22 18:13:04.038 W/CorpusConfigHelper( 1712): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:13:04.038 W/CorpusConfigHelper( 1712): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:13:04.371 W/CorpusConfigHelper( 1712): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:13:04.371 W/CorpusConfigHelper( 1712): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:13:06.059 W/GmsPipelineLogger( 1458): java.lang.NullPointerException
10-22 18:13:06.492 W/ActivityManager(  521): Exception when unbinding service com.google.android.gms/.lockbox.service.LockboxBrokerService
10-22 18:13:06.492 W/ActivityManager(  521): android.os.DeadObjectException
10-22 18:13:06.497 W/ActivityManager(  521): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureMatchingService in 180996ms for start-requested
10-22 18:13:07.076 W/GmsPipelineLogger( 5344): java.lang.NullPointerException
10-22 18:13:07.412 I/SemanticLocation( 5344): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 18:13:07.412 I/SemanticLocation( 5344): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 18:13:07.459 W/Binder  ( 4258): Caught a RuntimeException from the binder stub implementation.
10-22 18:13:07.799 I/SemanticLocation( 5344): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 18:13:07.799 I/SemanticLocation( 5344): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 18:13:07.926 W/ConfigFileUtils( 5429): Failed to read asset ChimeraModuleSetList.pb: java.io.FileNotFoundException: ChimeraModuleSetList.pb
10-22 18:13:08.323 E/ChimeraUPLUtils( 5429): Failed to invoke updateComplete: android.os.DeadObjectException
10-22 18:13:08.615 E/ChimeraUPLUtils( 5429): Failed to invoke updateComplete: android.os.DeadObjectException
10-22 18:13:08.705 E/ChimeraUPLUtils( 5429): Failed to invoke updateComplete: android.os.DeadObjectException
10-22 18:13:09.475 W/GLSUser ( 5344): [AppCertManager] Exception while requesting key: 
10-22 18:13:09.475 W/GLSUser ( 5344): java.util.concurrent.ExecutionException: avvw: Parse Proto Exception.
10-22 18:13:09.475 W/GLSUser ( 5344): Caused by: avvw: Parse Proto Exception.
10-22 18:13:09.494 W/Conscrypt( 5344): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:13:09.518 W/Conscrypt( 5344): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:13:10.516 E/bwel    ( 5344): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 18:13:14.722 W/AsyncOperation( 5344): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 3  but was 1), resolution=null}]
10-22 18:13:14.756 W/AsyncOperation( 5344): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.tron.metrics(change count changed - expected 3  but was 1), resolution=null}]
10-22 18:13:14.761 W/AsyncOperation( 5344): OperationException[Status{statusCode=Stale snapshot for com.google.android.libraries.consentverifier#com.google.android.gms(change count changed - expected 4  but was 1), resolution=null}]
10-22 18:13:14.932 E/RecoverySnapshotStorage(  521): Error reading snapshot for 10131 from disk
10-22 18:13:14.932 E/RecoverySnapshotStorage(  521): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10131.xml: open failed: ENOENT (No such file or directory)
10-22 18:13:14.932 E/RecoverySnapshotStorage(  521): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 18:13:14.934 E/keystore2(  157):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 18:13:14.934 W/RecoverableKeyStoreGms( 5429): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 18:13:14.934 W/RecoverableKeyStoreGms( 5429): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 18:13:14.934 W/RecoverableKeyStoreGms( 5429): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 18:13:14.934 W/RecoverableKeyStoreGms( 5429): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 18:13:14.934 W/RecoverableKeyStoreGms( 5429): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 18:13:14.934 W/RecoverableKeyStoreGms( 5429): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 18:13:14.934 W/RecoverableKeyStoreGms( 5429): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 18:13:14.934 W/RecoverableKeyStoreGms( 5429): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 18:13:14.992 E/dlpn    ( 5344): RuntimeException while executing runnable dlqc{qze@9fcfe13} with executor MoreExecutors.directExecutor()
10-22 18:13:14.992 E/dlpn    ( 5344): java.lang.NullPointerException: Attempt to get length of null array
10-22 18:13:15.716 W/AsyncOperation( 5344): OperationException[Status{statusCode=Stale snapshot for com.google.android.metrics(change count changed - expected 5  but was 4), resolution=null}]
10-22 18:13:15.717 W/PhenotypeFlagCommitter( 5344): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.metrics(change count changed - expected 5  but was 4)
10-22 18:13:15.717 W/PhenotypeCommitHelper( 5344): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.metrics(change count changed - expected 5  but was 4)
10-22 18:13:16.627 E/d       ( 1712): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@65de45d} with executor MoreExecutors.directExecutor()
10-22 18:13:16.627 E/d       ( 1712): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-22 18:13:16.634 E/d       ( 1712): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@c83e9a0} with executor MoreExecutors.directExecutor()
10-22 18:13:16.634 E/d       ( 1712): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-22 18:13:16.642 W/PeoplePU( 5429): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 18:13:16.642 W/PeoplePU( 5429): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 18:13:16.642 W/PeoplePU( 5429): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 18:13:16.642 W/PeoplePU( 5429): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 18:13:16.642 W/PeoplePU( 5429): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 18:13:16.642 W/PeoplePU( 5429): Caused by: android.os.RemoteException: Remote stack trace:
10-22 18:13:16.674 E/d       ( 1712): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@7c1291e} with executor MoreExecutors.directExecutor()
10-22 18:13:16.674 E/d       ( 1712): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-22 18:13:17.374 W/CorpusConfigHelper( 1712): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:13:17.374 W/CorpusConfigHelper( 1712): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:13:17.525 W/CorpusConfigHelper( 1712): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:13:17.525 W/CorpusConfigHelper( 1712): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:13:17.719 I/SemanticLocation( 5344): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 18:13:17.719 I/SemanticLocation( 5344): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 18:13:17.950 W/Conscrypt( 5429): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:13:17.998 I/SemanticLocation( 5344): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 18:13:17.998 I/SemanticLocation( 5344): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 18:13:18.057 W/Conscrypt( 5429): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:13:19.740 W/Conscrypt( 5429): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:13:19.759 W/Conscrypt( 5429): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:13:19.776 W/Vision  ( 5429): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 18:13:19.806 W/Vision  ( 5429): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 18:13:20.013 W/NetworkScheduler( 5344): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 18:13:20.644 W/TapAndPay( 5344): java.lang.NullPointerException: NfcAdapter is null
10-22 18:13:20.754 W/Conscrypt( 5429): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:13:20.831 W/Conscrypt( 5429): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:13:20.890 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:20.890 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:20.901 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:20.902 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:20.928 E/AmbientMusicServiceMana( 1637): oxe: java.lang.reflect.InvocationTargetException
10-22 18:13:20.928 E/AmbientMusicServiceMana( 1637): Caused by: java.lang.reflect.InvocationTargetException
10-22 18:13:20.928 E/AmbientMusicServiceMana( 1637): Caused by: java.lang.IllegalStateException: No underlying SoundTriggerModule available
10-22 18:13:20.962 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:20.962 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:20.963 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:20.963 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:22.621 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:22.621 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:22.621 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:22.622 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:22.714 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:22.715 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:22.715 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
10-22 18:13:22.717 E/AppOps  (  521): java.lang.SecurityException: Specified package "android" under uid 10184 but it is not
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
drwxr-xr-x  2 runner runner      4096 Oct 22 18:10 .
drwxr-xr-x 15 runner runner      4096 Oct 22 18:10 ..
-rw-r--r--  1 runner runner 106469358 Oct 22 18:10 ergo-1.0.0-build33.apk
```

## Gradle
```
1020:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1046:BUILD SUCCESSFUL in 3m 2s
---
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

> Task :app:expoReleaseOverrideMaxSdkConflicts
[33m---------- Expo Max Sdk Override Plugin ----------[0m
[32m>>> No 'android:maxSdkVersion' conflicts found[0m
[33m--------------------------------------------------[0m

> Task :app:processReleaseManifest
> Task :app:processReleaseManifestForPackage
> Task :app:desugarReleaseFileDependencies FROM-CACHE
> Task :app:mergeReleaseStartupProfile
> Task :app:mergeReleaseResources
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
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792692443028.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 3m 2s
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
