# Android build 34: success

Disk: /dev/root       145G   61G   85G  42% /

- Commit: 2adacceed2821a2e4763c964443549979910113f
- Run: https://github.com/agiasotellis/ergo/actions/runs/39834731539
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-34

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
    drwxr-xr-x  2 runner runner      4096 Oct 22 18:54 .
    drwxr-xr-x 15 runner runner      4096 Oct 22 18:54 ..
    -rw-r--r--  1 runner runner 107536896 Oct 22 18:54 ergo-1.0.0-build34.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-22 18:56:33.854 D/AndroidRuntime( 4216): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-22 18:56:33.857 I/AndroidRuntime( 4216): Using default boot image
10-22 18:56:33.857 I/AndroidRuntime( 4216): Leaving lock profiling enabled
10-22 18:56:33.932 D/AndroidRuntime( 4216): Calling main entry com.android.commands.monkey.Monkey
10-22 18:56:34.068 I/AndroidRuntime( 4216): VM exiting with result code 0.

=== React Native / Expo ===
10-22 18:57:00.251 W/CorpusConfigHelper( 1788): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:57:00.251 W/CorpusConfigHelper( 1788): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:57:00.562 W/ModernMediaScanner( 1614): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb.metadata
10-22 18:57:00.574 W/ModernMediaScanner( 1614): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb
10-22 18:57:00.636 W/CorpusConfigHelper( 1788): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:57:00.636 W/CorpusConfigHelper( 1788): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:57:00.672 W/ModernMediaScanner( 1614): Failed to visit /data/data/com.android.providers.downloads/cache/en.model.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model.metadata
10-22 18:57:00.676 W/ModernMediaScanner( 1614): Failed to visit /data/data/com.android.providers.downloads/cache/en.model: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model
10-22 18:57:00.695 W/CorpusConfigHelper( 1788): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:57:00.695 W/CorpusConfigHelper( 1788): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:57:00.711 W/ActivityManager(  518): android.os.DeadObjectException
10-22 18:57:00.712 W/BroadcastQueue(  518): Failed to schedule BroadcastRecord{56bd1eb com.google.android.chimera.MODULE_CONFIGURATION_CHANGED/u0} to BroadcastFilter{11abbe0 10128/u0 ReceiverList{b5a65e3 3918 com.google.android.gms.ui/10128/u0 remote:db43a12}} via ProcessRecord{ca8d17d 3918:com.google.android.gms.ui/u0a128}: android.os.DeadObjectException
10-22 18:57:00.786 W/AsyncOperation( 5238): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustlet_onbody(change count changed - expected 1  but was 0), resolution=null}]
10-22 18:57:00.801 W/ConfigFileUtils( 5295): Failed to read asset ChimeraModuleSetList.pb: java.io.FileNotFoundException: ChimeraModuleSetList.pb
10-22 18:57:00.966 W/GmsPipelineLogger( 5238): java.lang.NullPointerException
10-22 18:57:01.355 I/SemanticLocation( 5238): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 18:57:01.355 I/SemanticLocation( 5238): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 18:57:01.382 I/SemanticLocation( 5238): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 18:57:01.382 I/SemanticLocation( 5238): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 18:57:01.398 W/Conscrypt( 5238): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:57:01.422 W/Conscrypt( 5238): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:57:01.457 W/GCM-GMS ( 5295): Failed to get direct boot token: java.io.IOException: QUOTA_EXCEEDED
10-22 18:57:02.275 W/GLSUser ( 5238): [AppCertManager] Exception while requesting key: 
10-22 18:57:02.275 W/GLSUser ( 5238): java.util.concurrent.ExecutionException: avvw: Parse Proto Exception.
10-22 18:57:02.275 W/GLSUser ( 5238): Caused by: avvw: Parse Proto Exception.
10-22 18:57:02.313 W/Conscrypt( 5238): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:57:02.345 W/Conscrypt( 5238): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:57:02.969 W/PhenotypeFlagCommitter( 5295): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 18:57:03.253 W/AsyncOperation( 5238): OperationException[Status{statusCode=Stale snapshot for com.google.android.libraries.consentverifier#com.google.android.gms(change count changed - expected 4  but was 0), resolution=null}]
10-22 18:57:03.255 W/AsyncOperation( 5238): OperationException[Status{statusCode=Stale snapshot for com.google.android.libraries.consentverifier#com.google.android.gms(change count changed - expected 4  but was 0), resolution=null}]
10-22 18:57:03.387 E/dlpn    ( 5238): RuntimeException while executing runnable dlqc{qze@2e9a6eb} with executor MoreExecutors.directExecutor()
10-22 18:57:03.387 E/dlpn    ( 5238): java.lang.NullPointerException: Attempt to get length of null array
10-22 18:57:03.406 E/RecoverySnapshotStorage(  518): Error reading snapshot for 10128 from disk
10-22 18:57:03.406 E/RecoverySnapshotStorage(  518): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10128.xml: open failed: ENOENT (No such file or directory)
10-22 18:57:03.406 E/RecoverySnapshotStorage(  518): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 18:57:03.408 E/keystore2(  157):     3: Error::Rc(r#SYSTEM_ERROR)
10-22 18:57:03.411 W/RecoverableKeyStoreGms( 5295): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-22 18:57:03.411 W/RecoverableKeyStoreGms( 5295): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-22 18:57:03.411 W/RecoverableKeyStoreGms( 5295): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-22 18:57:03.411 W/RecoverableKeyStoreGms( 5295): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-22 18:57:03.411 W/RecoverableKeyStoreGms( 5295): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-22 18:57:03.411 W/RecoverableKeyStoreGms( 5295): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 18:57:03.411 W/RecoverableKeyStoreGms( 5295): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 18:57:03.411 W/RecoverableKeyStoreGms( 5295): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 18:57:04.146 W/PeoplePU( 5295): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 18:57:04.146 W/PeoplePU( 5295): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 18:57:04.146 W/PeoplePU( 5295): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 18:57:04.146 W/PeoplePU( 5295): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 18:57:04.146 W/PeoplePU( 5295): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 18:57:04.652 I/SemanticLocation( 5238): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 18:57:04.652 I/SemanticLocation( 5238): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 18:57:04.845 I/SemanticLocation( 5238): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-22 18:57:04.845 I/SemanticLocation( 5238): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-22 18:57:04.930 W/Conscrypt( 5295): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:57:04.940 W/Conscrypt( 5295): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:57:04.959 W/Conscrypt( 5295): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:57:04.969 W/Conscrypt( 5295): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:57:05.307 W/PhenotypeFlagCommitter( 5295): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 18:57:05.548 E/PhenotypeFlagCommitter( 5295): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-22 18:57:06.417 W/AsyncOperation( 5238): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
10-22 18:57:06.417 W/AsyncOperation( 5238): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.maps#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
10-22 18:57:06.418 W/AsyncOperation( 5238): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.dtdi#com.google.android.gms(change count changed - expected 3  but was 1), resolution=null}]
10-22 18:57:06.418 W/AsyncOperation( 5238): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.magictether(change count changed - expected 1  but was 0), resolution=null}]
10-22 18:57:06.419 W/AsyncOperation( 5238): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.personalsafety(change count changed - expected 1  but was 0), resolution=null}]
10-22 18:57:06.419 W/AsyncOperation( 5238): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.phonesky_recovery(change count changed - expected 1  but was 0), resolution=null}]
10-22 18:57:06.420 W/AsyncOperation( 5238): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.vision(change count changed - expected 1  but was 0), resolution=null}]
10-22 18:57:06.438 W/AsyncOperation( 5238): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.trustagent.activeunlock.primary#com.google.android.gms(change count changed - expected 3  but was 0), resolution=null}]
10-22 18:57:06.521 E/ctbc    ( 3915): RuntimeException while executing runnable ctdz{cnpz@f1c5f84} with executor MoreExecutors.directExecutor()
10-22 18:57:06.521 E/ctbc    ( 3915): java.lang.NullPointerException: Attempt to read from field 'java.lang.String cayk.b' on a null object reference in method 'void ccdw.b(java.lang.Object)'
10-22 18:57:06.521 E/ctbc    ( 3915): RuntimeException while executing runnable ctdz{cnpz@17caba2} with executor MoreExecutors.directExecutor()
10-22 18:57:06.521 E/ctbc    ( 3915): java.lang.NullPointerException: Attempt to read from field 'java.lang.String cayk.b' on a null object reference in method 'void ccdw.b(java.lang.Object)'
10-22 18:57:06.521 E/ctbc    ( 3915): RuntimeException while executing runnable ctdz{cnpz@fc1eff0} with executor MoreExecutors.directExecutor()
10-22 18:57:06.521 E/ctbc    ( 3915): java.lang.NullPointerException: Attempt to read from field 'java.lang.String cayk.b' on a null object reference in method 'void ccdw.b(java.lang.Object)'
10-22 18:57:06.521 E/ctbc    ( 3915): RuntimeException while executing runnable ctdz{cnpz@a9ddfee} with executor MoreExecutors.directExecutor()
10-22 18:57:06.521 E/ctbc    ( 3915): java.lang.NullPointerException: Attempt to read from field 'java.lang.String cayk.b' on a null object reference in method 'void ccdw.b(java.lang.Object)'
10-22 18:57:06.521 E/ctbc    ( 3915): RuntimeException while executing runnable ctdz{cnpz@7ee1b1c} with executor MoreExecutors.directExecutor()
10-22 18:57:06.521 E/ctbc    ( 3915): java.lang.NullPointerException: Attempt to read from field 'java.lang.String cayk.b' on a null object reference in method 'void ccdw.b(java.lang.Object)'
10-22 18:57:06.521 E/ctbc    ( 3915): RuntimeException while executing runnable ctdz{cnpz@8c0cfa} with executor MoreExecutors.directExecutor()
10-22 18:57:06.521 E/ctbc    ( 3915): java.lang.NullPointerException: Attempt to read from field 'java.lang.String cayk.b' on a null object reference in method 'void ccdw.b(java.lang.Object)'
10-22 18:57:06.521 E/ctbc    ( 3915): RuntimeException while executing runnable ctdz{cnpz@74fcd08} with executor MoreExecutors.directExecutor()
10-22 18:57:06.521 E/ctbc    ( 3915): java.lang.NullPointerException: Attempt to read from field 'java.lang.String cayk.b' on a null object reference in method 'void ccdw.b(java.lang.Object)'
10-22 18:57:06.538 W/PeoplePU( 5295): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 18:57:06.538 W/PeoplePU( 5295): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 18:57:06.538 W/PeoplePU( 5295): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 18:57:06.538 W/PeoplePU( 5295): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 18:57:06.538 W/PeoplePU( 5295): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 18:57:06.538 W/PeoplePU( 5295): Caused by: android.os.RemoteException: Remote stack trace:
10-22 18:57:06.546 W/PeoplePU( 5295): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 18:57:06.546 W/PeoplePU( 5295): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 18:57:06.546 W/PeoplePU( 5295): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 18:57:06.546 W/PeoplePU( 5295): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 18:57:06.546 W/PeoplePU( 5295): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 18:57:06.549 W/PeoplePU( 5295): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 18:57:06.549 W/PeoplePU( 5295): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 18:57:06.549 W/PeoplePU( 5295): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 18:57:06.549 W/PeoplePU( 5295): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 18:57:06.549 W/PeoplePU( 5295): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 18:57:06.647 E/AppOps  (  518): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-22 18:57:06.647 E/AppOps  (  518): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-22 18:57:06.647 E/AppOps  (  518): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-22 18:57:06.647 E/AppOps  (  518): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-22 18:57:12.117 W/Vision  ( 5295): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 18:57:12.132 W/Vision  ( 5295): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 18:57:12.252 W/NetworkScheduler( 5238): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 18:57:12.600 W/Conscrypt( 5295): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:57:12.628 W/Conscrypt( 5295): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:57:12.638 W/TapAndPay( 5238): java.lang.NullPointerException: NfcAdapter is null
10-22 18:57:13.322 W/Conscrypt( 5295): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:57:13.363 W/Conscrypt( 5295): Could not set socket write timeout: java.net.SocketException: Socket closed
10-22 18:57:14.186 W/Vision  ( 5295): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 18:57:14.187 W/Vision  ( 5295): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 18:57:14.199 W/NetworkScheduler( 5238): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 18:57:14.549 W/AsyncOperation( 5238): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.auth_account(change count changed - expected 5  but was 4), resolution=null}]
10-22 18:57:14.549 W/PhenotypeFlagCommitter( 5238): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.auth_account(change count changed - expected 5  but was 4)
10-22 18:57:14.549 W/PhenotypeCommitHelper( 5238): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.auth_account(change count changed - expected 5  but was 4)
10-22 18:57:14.928 W/PeoplePU( 5295): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 18:57:14.928 W/PeoplePU( 5295): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 18:57:14.928 W/PeoplePU( 5295): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 18:57:14.928 W/PeoplePU( 5295): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 18:57:14.928 W/PeoplePU( 5295): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 18:57:14.928 W/PeoplePU( 5295): Caused by: android.os.RemoteException: Remote stack trace:
10-22 18:57:14.929 W/PeoplePU( 5295): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-22 18:57:14.929 W/PeoplePU( 5295): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 18:57:14.929 W/PeoplePU( 5295): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 18:57:14.929 W/PeoplePU( 5295): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 18:57:14.929 W/PeoplePU( 5295): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 18:57:14.929 W/PeoplePU( 5295): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-22 18:57:14.929 W/PeoplePU( 5295): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-22 18:57:14.929 W/PeoplePU( 5295): 	at android.os.Parcel.createException(Parcel.java:3041)
10-22 18:57:14.929 W/PeoplePU( 5295): 	at android.os.Parcel.readException(Parcel.java:3024)
10-22 18:57:14.929 W/PeoplePU( 5295): 	at android.os.Parcel.readException(Parcel.java:2966)
10-22 18:57:14.988 W/CorpusConfigHelper( 1788): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:57:14.988 W/CorpusConfigHelper( 1788): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:57:15.190 W/CorpusConfigHelper( 1788): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:57:15.190 W/CorpusConfigHelper( 1788): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:57:15.284 W/CorpusConfigHelper( 1788): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-22 18:57:15.284 W/CorpusConfigHelper( 1788): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-22 18:57:15.399 W/Vision  ( 5295): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 18:57:15.408 W/Vision  ( 5295): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-22 18:57:15.425 W/NetworkScheduler( 5238): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-22 18:57:17.998 E/cr_CronetUrlRequestContext( 1788): Exception in upload method
10-22 18:57:17.998 E/cr_CronetUrlRequestContext( 1788): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-22 18:57:17.999 E/A       ( 1788): onError
10-22 18:57:41.823 E/d       ( 1788): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@7638eaa} with executor MoreExecutors.directExecutor()
10-22 18:57:41.823 E/d       ( 1788): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-22 18:57:41.825 E/d       ( 1788): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@41c3c50} with executor MoreExecutors.directExecutor()
10-22 18:57:41.825 E/d       ( 1788): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-22 18:57:41.827 E/d       ( 1788): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@84c9a67} with executor MoreExecutors.directExecutor()
10-22 18:57:41.827 E/d       ( 1788): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-22 18:57:43.667 W/TapAndPay( 5238): java.lang.NullPointerException: NfcAdapter is null
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 845 packages, and audited 846 packages in 13s

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
drwxr-xr-x  2 runner runner      4096 Oct 22 18:54 .
drwxr-xr-x 15 runner runner      4096 Oct 22 18:54 ..
-rw-r--r--  1 runner runner 107536896 Oct 22 18:54 ergo-1.0.0-build34.apk
```

## Gradle
```
448:w: file:///home/runner/work/ergo/ergo/node_modules/react-native-keyboard-controller/android/src/main/java/com/reactnativekeyboardcontroller/extensions/ReactContext.kt:18:27 'fun getEventDispatcher(context: ReactContext, uiManagerType: Int): EventDispatcher?' is deprecated. UIManagerType is no longer needed.
1077:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1141:BUILD SUCCESSFUL in 3m 29s
---
> Task :react-native-reanimated:stripReleaseDebugSymbols
> Task :react-native-reanimated:syncReleaseLibJars FROM-CACHE
> Task :react-native-reanimated:writeReleaseLintModelMetadata
> Task :react-native-reanimated:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-reanimated:copyReleaseJniLibsProjectAndLocalJars
> Task :react-native-reanimated:generateReleaseLintVitalModel
> Task :react-native-gesture-handler:generateReleaseLintModel
> Task :react-native-gesture-handler:checkReleaseAarMetadata
> Task :react-native-gesture-handler:extractReleaseAnnotations FROM-CACHE
> Task :react-native-gesture-handler:mergeReleaseGeneratedProguardFiles
> Task :react-native-gesture-handler:mergeReleaseConsumerProguardFiles
> Task :react-native-gesture-handler:mergeReleaseJavaResource
> Task :react-native-gesture-handler:stripReleaseDebugSymbols
> Task :react-native-gesture-handler:syncReleaseLibJars FROM-CACHE
> Task :react-native-gesture-handler:copyReleaseJniLibsProjectAndLocalJars
> Task :react-native-gesture-handler:generateReleaseLintVitalModel
> Task :react-native-gesture-handler:bundleReleaseLocalLintAar
> Task :react-native-reanimated:bundleReleaseLocalLintAar
> Task :react-native-gesture-handler:bundleReleaseAar
> Task :react-native-gesture-handler:lintVitalAnalyzeRelease SKIPPED
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
> Task :app:processReleaseNavigationResources FROM-CACHE
> Task :app:javaPreCompileRelease FROM-CACHE
> Task :app:parseReleaseLocalResources
> Task :app:generateReleaseRFile FROM-CACHE
> Task :app:checkReleaseAarMetadata
> Task :app:mapReleaseSourceSetPaths
> Task :app:compileReleaseNavigationResources FROM-CACHE
> Task :app:mergeReleaseNativeLibs

> Task :app:compileReleaseKotlin
w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.

> Task :app:compileReleaseJavaWithJavac
> Task :app:createReleaseCompatibleScreenManifests
> Task :app:extractDeepLinksRelease FROM-CACHE
> Task :app:stripReleaseDebugSymbols

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
> Task :app:mergeReleaseResources
> Task :app:processReleaseManifestForPackage
> Task :app:mergeReleaseArtProfile
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseAssets
> Task :app:compressReleaseAssets
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
> Task :app:generateReleaseLintVitalReportModel
> Task :app:extractReleaseNativeSymbolTables
> Task :app:processReleaseResources
> Task :app:dexBuilderRelease
> Task :app:mergeReleaseNativeDebugMetadata
> Task :app:mergeReleaseGlobalSynthetics FROM-CACHE
> Task :app:processReleaseJavaRes
> Task :app:mergeReleaseJavaResource
> Task :app:collectReleaseDependencies
> Task :app:sdkReleaseDependencyData
> Task :app:validateSigningRelease
> Task :app:writeReleaseAppMetadata
> Task :app:writeReleaseSigningConfigVersions
> Task :app:optimizeReleaseResources
> Task :app:mergeExtDexRelease
> Task :app:lintVitalAnalyzeRelease
> Task :app:lintVitalReportRelease
> Task :app:lintVitalRelease
> Task :app:mergeDexRelease
> Task :app:compileReleaseArtProfile
> Task :app:packageRelease
> Task :app:createReleaseApkListingFileRedirect
> Task :app:assembleRelease
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1792695082169.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 3m 29s
784 actionable tasks: 519 executed, 265 from cache
Cacheable calls:   724 / 736 (98.37%)
  Hits:            694 / 724 (95.86%)
    Direct:        692 / 694 (99.71%)
    Preprocessed:    2 / 694 ( 0.29%)
  Misses:           30 / 724 ( 4.14%)
Uncacheable calls:  12 / 736 ( 1.63%)
Local storage:
  Cache size (GB): 0.6 / 3.0 (19.62%)
  Hits:            694 / 724 (95.86%)
  Misses:           30 / 724 ( 4.14%)
```
