# Launch test of build-11: success

```
APP_RUNNING after ~70s
=== crash / fatal ===
10-21 13:39:43.474 D/AndroidRuntime( 3373): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-21 13:39:43.480 I/AndroidRuntime( 3373): Using default boot image
10-21 13:39:43.482 I/AndroidRuntime( 3373): Leaving lock profiling enabled
10-21 13:39:43.800 D/AndroidRuntime( 3373): Calling main entry com.android.commands.monkey.Monkey
10-21 13:39:44.173 I/AndroidRuntime( 3373): VM exiting with result code 0.

=== React Native / Expo ===
10-21 13:40:40.828 E/RecoverySnapshotStorage(  508): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 13:40:40.832 E/keystore2(  145):     3: Error::Rc(r#SYSTEM_ERROR)
10-21 13:40:40.833 W/RecoverableKeyStoreGms( 2407): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-21 13:40:40.833 W/RecoverableKeyStoreGms( 2407): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-21 13:40:40.833 W/RecoverableKeyStoreGms( 2407): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-21 13:40:40.833 W/RecoverableKeyStoreGms( 2407): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-21 13:40:40.833 W/RecoverableKeyStoreGms( 2407): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-21 13:40:40.833 W/RecoverableKeyStoreGms( 2407): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 13:40:40.833 W/RecoverableKeyStoreGms( 2407): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 13:40:40.833 W/RecoverableKeyStoreGms( 2407): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 13:40:40.833 E/RecoverySnapshotStorage(  508): Error reading snapshot for 10130 from disk
10-21 13:40:40.833 E/RecoverySnapshotStorage(  508): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10130.xml: open failed: ENOENT (No such file or directory)
10-21 13:40:40.833 E/RecoverySnapshotStorage(  508): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 13:40:40.834 E/keystore2(  145):     3: Error::Rc(r#SYSTEM_ERROR)
10-21 13:40:40.835 W/RecoverableKeyStoreGms( 2407): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-21 13:40:40.835 W/RecoverableKeyStoreGms( 2407): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-21 13:40:40.835 W/RecoverableKeyStoreGms( 2407): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-21 13:40:40.835 W/RecoverableKeyStoreGms( 2407): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-21 13:40:40.835 W/RecoverableKeyStoreGms( 2407): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-21 13:40:40.835 W/RecoverableKeyStoreGms( 2407): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 13:40:40.835 W/RecoverableKeyStoreGms( 2407): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 13:40:40.835 W/RecoverableKeyStoreGms( 2407): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 13:40:41.120 W/Looper  ( 4617): java.lang.RuntimeException: Handler (acdu) {4b2b52c} sendMessageAtTime() called with no mQueue
10-21 13:40:41.120 W/Looper  ( 4617): java.lang.RuntimeException: Handler (acdu) {4b2b52c} sendMessageAtTime() called with no mQueue
10-21 13:40:41.153 E/Vision  ( 2407): Couldn't read checkbot setting: android.provider.Settings$SettingNotFoundException: multi_cb
10-21 13:40:41.346 W/Looper  ( 4617): java.lang.RuntimeException: Handler (acdu) {4b2b52c} sendMessageAtTime() called with no mQueue
10-21 13:40:41.446 W/Conscrypt( 4617): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:41.559 I/SemanticLocation( 4617): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/default_model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 13:40:41.559 I/SemanticLocation( 4617): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 13:40:41.918 W/Icing   ( 2407): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 13:40:41.973 I/SemanticLocation( 4617): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 13:40:41.973 I/SemanticLocation( 4617): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 13:40:42.194 W/Looper  ( 4617): java.lang.RuntimeException: Handler (acdu) {4a5edd6} sendMessageAtTime() called with no mQueue
10-21 13:40:42.352 W/Conscrypt( 4617): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:42.379 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:42.380 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:42.422 W/Icing   ( 2407): Failed to get Lockbox signed-in status: java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 13:40:42.592 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:42.665 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:42.713 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:43.114 E/JavaBinder( 5161): *** Uncaught remote exception! Exceptions are not yet supported across processes. Client PID 4355 UID 10118.
10-21 13:40:43.114 E/JavaBinder( 5161): android.database.StaleDataException: Attempted to access a cursor after it has been closed.
10-21 13:40:43.143 W/GLSUser ( 4617): [AppCertManager] Exception while requesting key: 
10-21 13:40:43.143 W/GLSUser ( 4617): java.io.IOException: Invalid device key response.
10-21 13:40:43.343 W/Conscrypt( 4617): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:43.702 I/SemanticLocation( 4617): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 13:40:43.702 I/SemanticLocation( 4617): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 13:40:43.894 W/Conscrypt( 4617): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:44.069 W/Conscrypt( 4617): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:44.207 W/Conscrypt( 4617): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:44.417 E/PhenotypeFlagCommitter( 2407): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 13:40:44.614 W/Conscrypt( 4617): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:44.967 W/Conscrypt( 4617): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:45.354 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:45.674 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:45.754 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:45.801 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:45.802 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:45.802 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:45.874 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:45.934 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:46.006 E/enyj    ( 2407): java.lang.RuntimeException: ManagedChannel allocation site
10-21 13:40:46.108 E/enyj    ( 2407): java.lang.RuntimeException: ManagedChannel allocation site
10-21 13:40:46.328 W/Conscrypt( 4617): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:47.040 E/A       ( 1676): onError
10-21 13:40:47.044 E/cr_CronetUrlRequestContext( 1676): Exception in upload method
10-21 13:40:47.044 E/cr_CronetUrlRequestContext( 1676): com.google.android.apps.gsa.shared.r.d: Error code: 262182
10-21 13:40:47.089 W/Conscrypt( 4617): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:47.184 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:47.214 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:47.249 E/NotificationListeners(  508): android.os.DeadObjectException
10-21 13:40:47.353 W/NetworkScheduler( 4617): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-21 13:40:47.372 W/PeoplePU( 2407): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-21 13:40:47.372 W/PeoplePU( 2407): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-21 13:40:47.372 W/PeoplePU( 2407): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 13:40:47.372 W/PeoplePU( 2407): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 13:40:47.372 W/PeoplePU( 2407): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 13:40:47.372 W/PeoplePU( 2407): Caused by: android.os.RemoteException: Remote stack trace:
10-21 13:40:47.388 W/PeoplePU( 2407): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-21 13:40:48.009 W/AiAiAutofill( 3321): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-21 13:40:48.346 I/SemanticLocation( 4617): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 13:40:48.346 I/SemanticLocation( 4617): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 13:40:48.731 I/SemanticLocation( 4617): java.io.FileNotFoundException: /data/user/0/com.google.android.gms/files/model_bundle_metadata.pb: open failed: ENOENT (No such file or directory)
10-21 13:40:48.731 I/SemanticLocation( 4617): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 13:40:49.098 E/PhenotypeFlagCommitter( 2407): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 13:40:49.896 W/AiAiAutofill( 3321): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-21 13:40:50.453 W/Conscrypt( 2407): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:51.112 W/Conscrypt( 2407): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:51.328 W/AiAiAutofill( 3321): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-21 13:40:52.256 E/bwel    ( 4617): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 13:40:52.780 W/AiAiAutofill( 3321): java.lang.SecurityException: caller is not user's Augmented Autofill Service
10-21 13:40:53.016 W/AiAiFed ( 3321): java.lang.IllegalArgumentException: Unsupported response code3
10-21 13:40:53.495 W/AiAiFed ( 3321): java.lang.IllegalArgumentException: Unsupported response code3
10-21 13:40:53.898 W/FontLog ( 4617): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 885676 nanoseconds delay) for dlrl@11421de[status=PENDING]
10-21 13:40:53.968 W/Bugle   ( 5153): java.lang.RuntimeException: fetchFonts result is not OK. (2)
10-21 13:40:54.100 W/RcsClientLib( 5153): Error while stopping RCS engine.
10-21 13:40:54.100 W/RcsClientLib( 5153): java.lang.IllegalStateException: JibeService Not Initialized
10-21 13:40:54.100 W/RcsClientLib( 5153): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-21 13:40:54.100 W/RcsClientLib( 5153): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 13:40:54.100 W/RcsClientLib( 5153): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 13:40:54.100 W/RcsClientLib( 5153): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 13:40:54.100 W/RcsClientLib( 5153): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-21 13:40:54.108 W/RcsClientLib( 5153): Error while stopping RCS engine.
10-21 13:40:54.108 W/RcsClientLib( 5153): java.lang.IllegalStateException: JibeService Not Initialized
10-21 13:40:54.108 W/RcsClientLib( 5153): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3065)
10-21 13:40:54.108 W/RcsClientLib( 5153): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 13:40:54.108 W/RcsClientLib( 5153): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 13:40:54.108 W/RcsClientLib( 5153): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 13:40:54.108 W/RcsClientLib( 5153): 	at com.google.android.aidl.BaseProxy.transactAndReadExceptionReturnVoid(PG:3)
10-21 13:40:54.491 E/RecoverySnapshotStorage(  508): Error reading snapshot for 10130 from disk
10-21 13:40:54.491 E/RecoverySnapshotStorage(  508): java.io.FileNotFoundException: /data/system/recoverablekeystore/snapshots/10130.xml: open failed: ENOENT (No such file or directory)
10-21 13:40:54.491 E/RecoverySnapshotStorage(  508): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 13:40:54.511 E/keystore2(  145):     3: Error::Rc(r#SYSTEM_ERROR)
10-21 13:40:54.512 W/RecoverableKeyStoreGms( 2407): [WrappingKeyManager] InternalRecoveryServiceException during wrapping key generation [CONTEXT service_id=172 ]
10-21 13:40:54.512 W/RecoverableKeyStoreGms( 2407): android.security.keystore.recovery.InternalRecoveryServiceException: Failed to import secret key.
10-21 13:40:54.512 W/RecoverableKeyStoreGms( 2407): 	at android.security.keystore.recovery.RecoveryController.wrapUnexpectedServiceSpecificException(RecoveryController.java:783)
10-21 13:40:54.512 W/RecoverableKeyStoreGms( 2407): Caused by: android.os.ServiceSpecificException: Failed to import secret key. (code 22)
10-21 13:40:54.512 W/RecoverableKeyStoreGms( 2407): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3071)
10-21 13:40:54.512 W/RecoverableKeyStoreGms( 2407): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 13:40:54.512 W/RecoverableKeyStoreGms( 2407): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 13:40:54.512 W/RecoverableKeyStoreGms( 2407): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 13:40:54.615 E/BugleRcsEngine( 5600): [2] JibeService.onDestroy: JibeService: onDestroy() unregister factory exception: java.lang.IllegalArgumentException: Receiver not registered: com.google.android.ims.receiver.sip.DebugOptionsReceiver@b4e8b9f
10-21 13:40:55.129 W/AiAiFed ( 3321): java.lang.IllegalArgumentException: Unsupported response code3
10-21 13:40:55.813 W/Conscrypt( 4617): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:55.903 W/Conscrypt( 4617): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:56.023 W/ModernMediaScanner( 1559): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-metadata.txt
10-21 13:40:56.304 W/ModernMediaScanner( 1559): Failed to visit /data/data/com.android.providers.downloads/cache/08202014-pins.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/08202014-pins.txt
10-21 13:40:56.494 W/ApkChecksums(  508): android.os.DeadObjectException
10-21 13:40:57.255 W/ModernMediaScanner( 1559): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist-metadata.txt
10-21 13:40:57.301 W/ModernMediaScanner( 1559): Failed to visit /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt: java.nio.file.NoSuchFileException: /data/data/com.android.providers.downloads/cache/09252026-sms-denylist.txt
10-21 13:40:58.175 W/Conscrypt( 2407): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:40:58.306 W/NetworkScheduler( 4617): java.lang.IllegalArgumentException: Only the following extra parameter types are supported: Integer, Long, Double, String, Boolean, and nested Bundles with the same restrictions.
10-21 13:40:58.523 W/Conscrypt( 2407): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 13:41:00.797 W/PeoplePU( 2407): android.content.pm.PackageManager$NameNotFoundException: ComponentInfo{com.google.android.gms/com.google.android.gms.people.sync.focus.ContactsSyncAdapterService}
10-21 13:41:00.799 W/PeoplePU( 2407): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-21 13:41:00.799 W/PeoplePU( 2407): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-21 13:41:00.799 W/PeoplePU( 2407): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 13:41:00.799 W/PeoplePU( 2407): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 13:41:00.799 W/PeoplePU( 2407): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 13:41:00.799 W/PeoplePU( 2407): Caused by: android.os.RemoteException: Remote stack trace:
10-21 13:41:00.801 W/PeoplePU( 2407): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ContactsSyncAdapterService}
10-21 13:41:00.801 W/PeoplePU( 2407): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-21 13:41:00.801 W/PeoplePU( 2407): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 13:41:00.801 W/PeoplePU( 2407): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 13:41:00.801 W/PeoplePU( 2407): 	at android.os.Parcel.readException(Parcel.java:2966)
10-21 13:41:00.802 W/PeoplePU( 2407): java.lang.IllegalArgumentException: Unknown component: ComponentInfo{com.google.android.syncadapters.contacts/com.google.android.syncadapters.contacts.ProxyGalProvider}
10-21 13:41:00.802 W/PeoplePU( 2407): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3061)
10-21 13:41:00.802 W/PeoplePU( 2407): 	at android.os.Parcel.createException(Parcel.java:3041)
10-21 13:41:00.802 W/PeoplePU( 2407): 	at android.os.Parcel.readException(Parcel.java:3024)
10-21 13:41:00.802 W/PeoplePU( 2407): 	at android.os.Parcel.readException(Parcel.java:2966)
```
