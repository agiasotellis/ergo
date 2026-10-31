# Android build 52: success

Disk: /dev/root       145G   57G   89G  39% /

- Commit: f0a0c411d9a3dc5ba12794ef79b943bb2ce5947d
- Run: https://github.com/agiasotellis/ergo/actions/runs/41243790476
- Release: https://github.com/agiasotellis/ergo/releases/tag/build-52

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
    drwxr-xr-x  2 runner runner      4096 Oct 31 21:33 .
    drwxr-xr-x 15 runner runner      4096 Oct 31 21:33 ..
    -rw-r--r--  1 runner runner 107539820 Oct 31 21:33 ergo-1.0.0-build52.apk

## Launch test
```
APP_RUNNING after ~70s
=== crash / fatal ===
10-31 21:35:13.233 D/AndroidRuntime( 3966): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-31 21:35:13.239 I/AndroidRuntime( 3966): Using default boot image
10-31 21:35:13.240 I/AndroidRuntime( 3966): Leaving lock profiling enabled
10-31 21:35:13.400 D/AndroidRuntime( 3966): Calling main entry com.android.commands.monkey.Monkey
10-31 21:35:13.660 I/AndroidRuntime( 3966): VM exiting with result code 0.

=== React Native / Expo ===
10-31 21:35:29.195 W/RecoverableKeyStoreGms( 4635): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-31 21:35:29.195 W/RecoverableKeyStoreGms( 4635): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:35:29.195 W/RecoverableKeyStoreGms( 4635): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:35:29.195 W/RecoverableKeyStoreGms( 4635): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:35:29.284 E/dlpn    ( 4597): RuntimeException while executing runnable dlqc{qze@eb5aafd} with executor MoreExecutors.directExecutor()
10-31 21:35:29.284 E/dlpn    ( 4597): java.lang.NullPointerException: Attempt to get length of null array
10-31 21:35:29.681 W/PeoplePU( 4635): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-31 21:35:29.681 W/PeoplePU( 4635): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:35:29.681 W/PeoplePU( 4635): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:35:29.681 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:35:29.681 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:35:29.681 W/PeoplePU( 4635): Caused by: android.os.RemoteException: Remote stack trace:
10-31 21:35:29.687 W/PeoplePU( 4635): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-31 21:35:29.811 W/Conscrypt( 4635): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:35:29.813 I/SemanticLocation( 4597): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-31 21:35:29.813 I/SemanticLocation( 4597): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:35:29.827 I/SemanticLocation( 4597): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-31 21:35:29.827 I/SemanticLocation( 4597): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-31 21:35:29.936 W/Conscrypt( 4635): Could not set socket write timeout: java.net.SocketException: Socket closed
10-31 21:35:32.436 E/AmbientMusicServiceMana( 1689): oxe: java.lang.reflect.InvocationTargetException
10-31 21:35:32.436 E/AmbientMusicServiceMana( 1689): Caused by: java.lang.reflect.InvocationTargetException
10-31 21:35:32.436 E/AmbientMusicServiceMana( 1689): Caused by: java.lang.IllegalStateException: No underlying SoundTriggerModule available
10-31 21:35:32.690 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:32.690 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:32.800 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:32.800 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:32.990 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:32.990 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:33.163 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:33.163 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:33.306 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:33.306 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:33.344 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:35:33.344 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:35:33.344 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:35:33.344 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:35:33.434 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:33.434 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:33.545 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:35:33.545 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:35:33.545 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:35:33.545 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:35:33.569 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:33.569 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:33.736 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:33.736 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:33.972 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:33.972 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:34.133 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:34.133 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:34.189 W/PeoplePU( 4635): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-31 21:35:34.189 W/PeoplePU( 4635): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:35:34.189 W/PeoplePU( 4635): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:35:34.189 W/PeoplePU( 4635): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:35:34.189 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:35:34.189 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:35:34.189 W/PeoplePU( 4635): Caused by: android.os.RemoteException: Remote stack trace:
10-31 21:35:34.192 W/PeoplePU( 4635): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:35:34.192 W/PeoplePU( 4635): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:35:34.192 W/PeoplePU( 4635): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:35:34.192 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:35:34.192 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:35:34.193 W/PeoplePU( 4635): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-31 21:35:34.193 W/PeoplePU( 4635): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:35:34.193 W/PeoplePU( 4635): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:35:34.193 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:35:34.193 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:35:34.217 W/WifiService(  519): Permission violation - getConfiguredNetworks not allowed for uid=10118, packageName=com.google.android.settings.intelligence, reason=java.lang.SecurityException: UID 10118 has no location permission
10-31 21:35:34.751 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:34.751 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:35.142 W/ModernMediaScanner( 1673): Failed to visit /data/data/com.android.providers.downloads/cache/model.smfb.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/model.smfb.metadata
10-31 21:35:35.218 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:35.218 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:35.427 W/ModernMediaScanner( 1673): Failed to visit /data/data/com.android.providers.downloads/cache/model.smfb: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/model.smfb
10-31 21:35:35.740 W/ModernMediaScanner( 1673): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb.metadata
10-31 21:35:35.821 W/ModernMediaScanner( 1673): Failed to visit /data/data/com.android.providers.downloads/cache/en.fb: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.fb
10-31 21:35:36.309 W/ModernMediaScanner( 1673): Failed to visit /data/data/com.android.providers.downloads/cache/en.model.metadata: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model.metadata
10-31 21:35:36.323 W/ModernMediaScanner( 1673): Failed to visit /data/data/com.android.providers.downloads/cache/en.model: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/en.model
10-31 21:35:36.490 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:35:36.490 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:35:36.491 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:35:36.491 E/AppOps  (  519): java.lang.SecurityException: Specified package "android" under uid 10179 but it is not
10-31 21:35:38.542 W/ModernMediaScanner( 1673): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt
10-31 21:35:38.544 W/ModernMediaScanner( 1673): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt
10-31 21:35:38.553 W/ModernMediaScanner( 1673): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-metadata.txt
10-31 21:35:38.556 W/ModernMediaScanner( 1673): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-pins.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-pins.txt
10-31 21:35:38.565 W/ModernMediaScanner( 1673): Failed to visit /data/data/com.android.providers.downloads/cache/ifw-empty-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/ifw-empty-metadata.txt
10-31 21:35:38.566 W/ModernMediaScanner( 1673): Failed to visit /data/data/com.android.providers.downloads/cache/ifw-empty.xml: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/ifw-empty.xml
10-31 21:35:39.761 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:39.761 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:39.774 W/PeoplePU( 4635): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:35:39.774 W/PeoplePU( 4635): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:35:39.774 W/PeoplePU( 4635): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:35:39.774 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:35:39.774 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:35:39.774 W/PeoplePU( 4635): Caused by: android.os.RemoteException: Remote stack trace:
10-31 21:35:39.776 W/PeoplePU( 4635): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:35:39.776 W/PeoplePU( 4635): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:35:39.776 W/PeoplePU( 4635): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:35:39.776 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:35:39.776 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:35:39.776 W/PeoplePU( 4635): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-31 21:35:39.776 W/PeoplePU( 4635): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:35:39.776 W/PeoplePU( 4635): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:35:39.776 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:35:39.776 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:35:39.902 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:39.902 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:40.312 W/Vision  ( 4635): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:35:40.315 W/Vision  ( 4635): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:35:40.345 W/NetworkScheduler( 4597): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-31 21:35:40.542 W/TapAndPay( 4597): java.lang.NullPointerException: NfcAdapter is null
10-31 21:35:41.374 W/AsyncOperation( 4597): OperationException[Status{statusCode=Stale snapshot for com.google.android.gms.smartdevice(change count changed - expected 3  but was 2), resolution=null}]
10-31 21:35:41.376 W/PhenotypeFlagCommitter( 4597): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.smartdevice(change count changed - expected 3  but was 2)
10-31 21:35:41.376 W/PhenotypeCommitHelper( 4597): java.util.concurrent.ExecutionException: aard: 29501: Stale snapshot for com.google.android.gms.smartdevice(change count changed - expected 3  but was 2)
10-31 21:35:41.628 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:41.628 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:41.718 W/PeoplePU( 4635): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:35:41.718 W/PeoplePU( 4635): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:35:41.718 W/PeoplePU( 4635): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:35:41.718 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:35:41.718 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:35:41.718 W/PeoplePU( 4635): Caused by: android.os.RemoteException: Remote stack trace:
10-31 21:35:41.719 W/PeoplePU( 4635): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-31 21:35:41.719 W/PeoplePU( 4635): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:35:41.719 W/PeoplePU( 4635): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:35:41.719 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:35:41.719 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:35:41.719 W/PeoplePU( 4635): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-31 21:35:41.719 W/PeoplePU( 4635): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-31 21:35:41.719 W/PeoplePU( 4635): 	at android.os.Parcel.createException(Parcel.java:3041)
10-31 21:35:41.719 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:3024)
10-31 21:35:41.719 W/PeoplePU( 4635): 	at android.os.Parcel.readException(Parcel.java:2966)
10-31 21:35:41.781 W/CorpusConfigHelper( 1734): android.util.MalformedJsonException: Use JsonReader.setLenient(true) to accept malformed JSON at line 123 column 2
10-31 21:35:41.781 W/CorpusConfigHelper( 1734): 	at android.util.JsonReader.syntaxError(JsonReader.java:1162)
10-31 21:35:42.120 W/Vision  ( 4635): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:35:42.121 W/Vision  ( 4635): Error loading optional module com.google.android.gms.vision.ocr: ahbb: No acceptable module com.google.android.gms.vision.ocr found. Local version is 0 and remote version is 0.
10-31 21:35:42.140 W/NetworkScheduler( 4597): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-31 21:36:00.062 E/cr_CronetUrlRequestContext( 1734): Exception in upload method
10-31 21:36:00.062 E/cr_CronetUrlRequestContext( 1734): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-31 21:36:00.063 E/A       ( 1734): onError
10-31 21:36:18.407 W/TapAndPay( 4597): java.lang.NullPointerException: NfcAdapter is null
10-31 21:36:18.493 W/YouTubeMusic( 1715): Caused by: biqk: Exception in CronetUrlRequest: net::ERR_CONNECTION_CLOSED, ErrorCode=5, InternalErrorCode=-100, Retryable=true
10-31 21:36:18.493 W/YouTubeMusic( 1715): 	at org.chromium.net.impl.CronetUrlRequest.onError(PG:6)
10-31 21:36:18.590 E/d       ( 1734): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@a07ded7} with executor MoreExecutors.directExecutor()
10-31 21:36:18.590 E/d       ( 1734): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-31 21:36:18.590 E/d       ( 1734): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@844a071} with executor MoreExecutors.directExecutor()
10-31 21:36:18.590 E/d       ( 1734): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
10-31 21:36:18.594 E/d       ( 1734): RuntimeException while executing runnable cb{com.google.apps.tiktok.tracing.ej@53599e2} with executor MoreExecutors.directExecutor()
10-31 21:36:18.594 E/d       ( 1734): java.lang.NullPointerException: Attempt to read from field 'java.lang.String com.google.android.libraries.mdi.download.ae.b' on a null object reference in method 'void com.google.android.libraries.mdi.download.h.bq.gH(java.lang.Object)'
```

## Other steps (tail)
```
npm warn deprecated uuid@7.0.3: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).
npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 845 packages, and audited 846 packages in 9s

180 packages are looking for funding
  run `npm fund` for details

31 vulnerabilities (1 low, 27 moderate, 3 high)

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
drwxr-xr-x  2 runner runner      4096 Oct 31 21:33 .
drwxr-xr-x 15 runner runner      4096 Oct 31 21:33 ..
-rw-r--r--  1 runner runner 107539820 Oct 31 21:33 ergo-1.0.0-build52.apk
```

## Gradle
```
1064:w: file:///home/runner/work/ergo/ergo/android/app/src/main/java/com/agiasotellis/ergo/MainActivity.kt:40:20 'constructor(activity: ReactActivity, mainComponentName: String, fabricEnabled: Boolean): DefaultReactActivityDelegate' is deprecated. Creating DefaultReactActivityDelegate with flags is deprecated.
1090:BUILD SUCCESSFUL in 2m 25s
---
> Task :react-native-gesture-handler:bundleLibCompileToJarRelease
> Task :react-native-gesture-handler:bundleLibRuntimeToDirRelease
> Task :react-native-gesture-handler:bundleLibRuntimeToJarRelease
> Task :react-native-gesture-handler:processReleaseJavaRes
> Task :react-native-gesture-handler:createFullJarRelease
> Task :react-native-gesture-handler:generateReleaseLintModel
> Task :react-native-gesture-handler:extractReleaseAnnotations FROM-CACHE
> Task :react-native-gesture-handler:mergeReleaseGeneratedProguardFiles
> Task :react-native-gesture-handler:mergeReleaseConsumerProguardFiles
> Task :react-native-gesture-handler:mergeReleaseJavaResource
> Task :react-native-gesture-handler:syncReleaseLibJars FROM-CACHE
> Task :react-native-gesture-handler:stripReleaseDebugSymbols
> Task :react-native-gesture-handler:generateReleaseLintVitalModel
> Task :react-native-gesture-handler:copyReleaseJniLibsProjectAndLocalJars
> Task :react-native-gesture-handler:bundleReleaseLocalLintAar
> Task :react-native-reanimated:bundleReleaseLocalLintAar
> Task :react-native-gesture-handler:bundleReleaseAar
> Task :react-native-gesture-handler:assembleRelease
> Task :react-native-reanimated:writeReleaseLintModelMetadata
> Task :react-native-reanimated:lintVitalAnalyzeRelease SKIPPED
> Task :react-native-reanimated:generateReleaseLintVitalModel
> Task :react-native-gesture-handler:lintVitalAnalyzeRelease SKIPPED
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

> Task :app:mergeReleaseResources
> Task :app:processReleaseManifest
> Task :app:desugarReleaseFileDependencies FROM-CACHE
> Task :app:mergeReleaseStartupProfile
> Task :app:mergeReleaseNativeDebugMetadata
> Task :app:mergeExtDexRelease FROM-CACHE
> Task :app:generateReleaseAssets UP-TO-DATE
> Task :app:mergeReleaseArtProfile
> Task :app:mergeReleaseAssets
> Task :app:processReleaseManifestForPackage
> Task :app:compressReleaseAssets
> Task :app:extractReleaseVersionControlInfo
> Task :app:extractProguardFiles
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
gradle/actions: Writing build results to /home/runner/work/_temp/.gradle-actions/build-results/gradle-1793482267179.json

[Incubating] Problems report is available at: file:///home/runner/work/ergo/ergo/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 2m 25s
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
