# Launch test of build-9: success

```
APP_RUNNING after 30s
=== crash / fatal ===
10-21 11:21:40.880 D/AndroidRuntime( 3448): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
10-21 11:21:40.886 I/AndroidRuntime( 3448): Using default boot image
10-21 11:21:40.890 I/AndroidRuntime( 3448): Leaving lock profiling enabled
10-21 11:21:41.119 D/AndroidRuntime( 3448): Calling main entry com.android.commands.monkey.Monkey
10-21 11:21:43.278 I/AndroidRuntime( 3448): VM exiting with result code 0.

=== React Native / Expo ===
10-21 11:21:41.201 W/WellbeingSettingsProvid( 1468): java.util.concurrent.TimeoutException: Waited 5000 milliseconds (plus 139768 nanoseconds delay) for lki@5a487c3[status=PENDING, info=[inputFuture=[lkh@c3d6840[status=PENDING, setFuture=[ljp@d691379[status=PENDING, info=[inputFuture=[lki@24258be[status=PENDING, info=[inputFuture=[lki@e3ddd1f[status=PENDING, info=[inputFuture=[lld@eb0c86c[status=PENDING, info=[futures=[lki@dde6e35[status=PENDING, info=[inputFuture=[lki@f4742ca[status=PENDING, info=[inputFuture=[lmb@9ed2c3b[status=PENDING, info=[delegate=[lng@e17ff58[status=PENDING, info=[task=[running=[NOT STARTED YET], propagating=[bwh@614b8b1]]]]]]]], function=[propagating=[bvr@fec196]]]]], function=[propagating=[cur@b785117]]]]]]]], function=[propagating=[dce@5a9eea]]]]], function=[propagating=[bvq@9b9b904]]]]], exceptionType=[class java.lang.Throwable], fallback=[propagating=[bwc@b40878]]]]]]], function=[propagating=[bvq@78b2eed]]]]
10-21 11:21:43.835 W/SoLoader( 3478): Initializing SoLoader: 0
10-21 11:21:43.839 W/SoLoader( 3478): Recording new base apk path: /data/app/~~_mwZDUMdzUJbRFKFjX73MA==/com.agiasotellis.ergo-1vg5XPo0VVNoorarBV6iBg==/base.apk
10-21 11:21:43.839 W/SoLoader( 3478): Previously recorded 0 base apk paths.
10-21 11:21:43.859 I/SoLoader( 3478): Preparing SO source: DirectorySoSource[root = /vendor/lib64 flags = 2]
10-21 11:21:43.873 I/SoLoader( 3478): Preparing SO source: DirectorySoSource[root = /system/lib64 flags = 2]
10-21 11:21:43.873 I/SoLoader( 3478): Preparing SO source: DirectApkSoSource[root = [/data/app/~~_mwZDUMdzUJbRFKFjX73MA==/com.agiasotellis.ergo-1vg5XPo0VVNoorarBV6iBg==/base.apk!/lib/x86_64]]
10-21 11:21:43.889 I/SoLoader( 3478): Preparing SO source: ApplicationSoSource[DirectorySoSource[root = /data/app/~~_mwZDUMdzUJbRFKFjX73MA==/com.agiasotellis.ergo-1vg5XPo0VVNoorarBV6iBg==/lib/x86_64 flags = 0]]
10-21 11:21:43.890 I/SoLoader( 3478): init finish: 4 SO sources prepared
10-21 11:21:43.891 W/SoLoader( 3478): SoLoader initialized: 8
10-21 11:21:44.268 E/ActivityManager(  509): ErrorId: 4f0aeaec-f4ef-448c-9cee-d49bce7fbad5
10-21 11:21:45.945 I/ExpoModulesCore( 3478): ✅ AppContext was initialized
10-21 11:21:46.263 I/ExpoModulesCore( 3478): ✅ JSI interop was installed
10-21 11:21:46.279 W/ExpoModulesV2( 3478): expo.modules.haptics.arguments.NotificationType does not implement io.github.expo.modules.v2.Enumerable. It crosses to JavaScript here, but R8 keeps an enum's entries and its property only when it does, so a release build may fail on it or send its entry names instead
10-21 11:21:46.283 W/ExpoModulesV2( 3478): expo.modules.haptics.arguments.ImpactStyle does not implement io.github.expo.modules.v2.Enumerable. It crosses to JavaScript here, but R8 keeps an enum's entries and its property only when it does, so a release build may fail on it or send its entry names instead
10-21 11:21:46.289 W/ExpoModulesV2( 3478): expo.modules.haptics.arguments.HapticType does not implement io.github.expo.modules.v2.Enumerable. It crosses to JavaScript here, but R8 keeps an enum's entries and its property only when it does, so a release build may fail on it or send its entry names instead
10-21 11:21:46.298 I/ExpoModulesCore( 3478): ✅ Expo Modules v2 installed 1 module(s) on globalThis.expo.modules
10-21 11:21:46.719 I/ExpoModulesCore( 3478): ✅ Constants were exported
10-21 11:21:46.947 W/unknown:ViewManagerPropertyUpdater( 3478): Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-21 11:21:47.047 W/ActivityManager(  509): Exception when unbinding service com.google.android.gms/com.google.android.location.fused.FusedLocationService
10-21 11:21:47.047 W/ActivityManager(  509): android.os.DeadObjectException
10-21 11:21:47.114 E/TaskWorkerFactory( 2983): java.lang.NoSuchMethodException: com.android.devicelockcontroller.provision.worker.DeviceCheckInWorker.<init> [class android.content.Context, class androidx.work.WorkerParameters, interface com.google.common.util.concurrent.ListeningExecutorService]
10-21 11:21:47.189 W/ActivityManager(  509): Exception when destroying service com.google.android.gms/com.google.android.location.fused.FusedLocationService
10-21 11:21:47.189 W/ActivityManager(  509): android.os.DeadObjectException
10-21 11:21:47.241 W/GmsClient( 3478): android.os.DeadObjectException
10-21 11:21:47.286 W/MobStoreFlagStore( 3048): java.util.concurrent.ExecutionException: qaw: 20: 20: The connection to Google Play services was lost due to service disconnection.
10-21 11:21:47.300 W/MobStoreFlagStore( 3048): java.util.concurrent.ExecutionException: qaw: 20: 20: The connection to Google Play services was lost due to service disconnection.
10-21 11:21:47.307 W/MobStoreFlagStore( 3048): java.util.concurrent.ExecutionException: qaw: 20: 20: The connection to Google Play services was lost due to service disconnection.
10-21 11:21:47.451 W/MobStoreFlagStore( 2071): java.util.concurrent.ExecutionException: lwg: 20: 20: The connection to Google Play services was lost due to service disconnection.
10-21 11:21:47.457 W/MobStoreFlagStore( 2071): java.util.concurrent.ExecutionException: lwg: 20: 20: The connection to Google Play services was lost due to service disconnection.
10-21 11:21:47.460 W/MobStoreFlagStore( 2071): java.util.concurrent.ExecutionException: lwg: 20: 20: The connection to Google Play services was lost due to service disconnection.
10-21 11:21:47.615 W/MobStoreFlagStore( 1593): java.util.concurrent.ExecutionException: com.google.android.libraries.phenotype.client.a.h: 20: 20: The connection to Google Play services was lost due to service disconnection.
10-21 11:21:47.617 W/MobStoreFlagStore( 1593): java.util.concurrent.ExecutionException: com.google.android.libraries.phenotype.client.a.h: 20: 20: The connection to Google Play services was lost due to service disconnection.
10-21 11:21:47.731 I/ReactNativeJS( 3478): Running "main"
10-21 11:21:47.779 I/ExpoModulesCore( 3478): ✅ JSI interop was installed
10-21 11:21:47.855 V/AsyncStorageExpoMigration( 3478): No scoped database found
10-21 11:21:47.874 W/ReactNativeJS( 3478): GoTrueClient@sb-qczfeaibovqzgcnsedks-auth-token:0 (2.118.0) 2026-10-21T11:21:47.874Z The "lock" option is deprecated and will be removed in v3. The client now coordinates session refreshes without a lock, so most apps can drop the option. See https://github.com/supabase/supabase-js/blob/master/packages/core/auth-js/migrations/lockless-coordination.md
10-21 11:21:47.881 W/ActivityManager(  509): Scheduling restart of crashed service com.google.android.gms/.nearby.exposurenotification.service.ExposureNotificationInternalService in 127931ms for start-requested
10-21 11:21:47.906 W/FontsProvider( 1662): android.os.DeadObjectException
10-21 11:21:48.500 W/InputMethodManagerService(  509): android.os.DeadObjectException
10-21 11:21:48.501 W/InputMethodManagerService(  509): android.os.DeadObjectException
10-21 11:21:48.592 W/ExpoModulesCore( 3478): Introspectable data is missing for class expo.modules.location.records.LocationTaskOptions. Falling back to reflection-based conversion, which may have performance implications. To fix this, ensure that the Record class is properly annotated with expo.modules.kotlin.types.Introspectable and that the necessary metadata is available at runtime.
10-21 11:21:48.634 I/ReactNative( 3478): [GESTURE HANDLER] Initialize gesture handler for root view com.facebook.react.runtime.ReactSurfaceView{f10ff07 V.E...... ......ID 0,0-1080,2400 #1}
10-21 11:21:50.890 I/WellbeingModel( 1071): retrieveActions(): DeadObjectException
10-21 11:21:52.464 E/PhenotypeFlagCommitter( 3621): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 11:21:54.364 W/ActivityManager(  509): Exception when unbinding service com.google.android.gms/.chimera.GmsBoundBrokerService
10-21 11:21:54.364 W/ActivityManager(  509): android.os.DeadObjectException
10-21 11:21:54.521 E/FA      ( 1629): Failed to get app instance id: android.os.DeadObjectException: gfd.my(PG:2)
10-21 11:21:54.521 E/FA      ( 1629): Failed to send default event parameters to service: android.os.DeadObjectException: gfd.mz(PG:2)
10-21 11:21:54.521 E/FA      ( 1629): Failed to send measurementEnabled to the service: android.os.DeadObjectException: gfd.mz(PG:2)
10-21 11:21:54.576 W/c       ( 1071): io.grpc.StatusException: UNAVAILABLE
10-21 11:21:54.576 W/c       ( 1071): Caused by: android.os.DeadObjectException
10-21 11:21:54.599 E/OneSearchSuggestProvider( 1071): io.grpc.StatusRuntimeException: UNAVAILABLE: binderDied
10-21 11:21:56.050 I/WM-WorkerWrapper( 3504): java.util.concurrent.CancellationException: Task was cancelled.
10-21 11:21:57.154 I/ReactNativeJNI( 3478): instanceHandle is null, event of type topAttached will be dropped
10-21 11:21:57.998 E/AiAiWallpaperEffectsGen( 3504): java.io.FileNotFoundException: midasnet_mobilenetv2_dptmqn_dec128_full_082421_384_384_fp16_opt.tflite
10-21 11:21:59.618 W/AiAiFed ( 3504): java.lang.IllegalArgumentException: Unsupported response code3
10-21 11:21:59.828 I/AiAiAdaptiveAudio( 3504): AdaptiveAudio config updated, new config=AdaptiveAudioConfig{shouldEnableAdaptiveAudio=false, shouldBypassQprCheck=false, shouldLimitCalibration=true, shouldShowDebugNotification=false, userSettingDefaultValue=false, crashOnError=true, shouldShowPromoNotification=false, useSilenceDetectorStateBugFix=false}
10-21 11:22:01.427 W/Conscrypt( 3666): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 11:22:01.747 W/ConfigFileUtils( 3868): Failed to read asset ChimeraModuleSetList.pb: java.io.FileNotFoundException: ChimeraModuleSetList.pb
10-21 11:22:02.133 W/Conscrypt( 3666): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 11:22:02.362 E/PhenotypeFlagCommitter( 3965): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 11:22:02.741 W/AiAiFed ( 3504): java.lang.IllegalArgumentException: Unsupported response code3
10-21 11:22:03.364 W/AiAiFed ( 3504): java.lang.IllegalArgumentException: Unsupported response code3
10-21 11:22:04.464 W/AiAiFed ( 3504): java.lang.IllegalArgumentException: Unsupported response code3
10-21 11:22:04.641 W/BaseSearchIndex( 1020): Error initial controller
10-21 11:22:04.718 W/FileUtils(  509): android.system.ErrnoException: chmod failed: ENOENT (No such file or directory)
10-21 11:22:04.740 E/HardwareInfoFeatureProviderImpl( 1020): java.lang.NumberFormatException: For input string: "E"
10-21 11:22:05.000 E/dlpn    ( 3666): RuntimeException while executing runnable dlqc{qze@2bd8ab6} with executor MoreExecutors.directExecutor()
10-21 11:22:05.000 E/dlpn    ( 3666): java.lang.NullPointerException: Attempt to get length of null array
10-21 11:22:05.327 W/WellbeingSettingsProvid( 3808): java.util.concurrent.TimeoutException: Waited 5000 milliseconds (plus 118747 nanoseconds delay) for lki@1a92a1d[status=PENDING, info=[inputFuture=[lkh@f49f492[status=PENDING, setFuture=[ljp@5edce63[status=PENDING, info=[inputFuture=[lki@eb53a60[status=PENDING, info=[inputFuture=[lki@1334b19[status=PENDING, info=[inputFuture=[lld@20ec7de[status=PENDING, info=[futures=[lki@4e4edbf[status=PENDING, info=[inputFuture=[lki@6a39c8c[status=PENDING, info=[inputFuture=[lmb@da47fd5[status=PENDING, info=[delegate=[lng@1bb83ea[status=PENDING, setFuture=[lki@4a6db[status=PENDING, info=[inputFuture=[lkh@533f578[status=PENDING, info=[inputFuture=[lmb@eba4451[status=PENDING, info=[delegate=[lng@dc5f4b6[status=PENDING, setFuture=[lkh@89cd5b7[status=PENDING, info=[function=[propagating=[cac@66ef124]]]]]]]]]], function=[propagating=[bwd@8dd48d]]]]], function=[propagating=[bwc@534a642]]]]]]]]]], function=[propagating=[bvr@b1f1653]]]]], function=[propagating=[cur@c3bfb90]]]]]]]], function=[propagating=[dce@d902c89]]]]], function=[propagating=[bvq@eeae48e]]]]], exceptionType=[class java.lang.Throwable], fallback=[propagating=[bwc@f7ac4af]]]]]]], function=[propagating=[bvq@d8d40bc]]]]
10-21 11:22:05.332 E/SystemServiceRegistry( 1020): android.os.ServiceManager$ServiceNotFoundException: No service published for: ethernet
10-21 11:22:05.616 W/AiAiFed ( 3504): java.lang.IllegalArgumentException: Unsupported response code3
10-21 11:22:05.873 E/PhoneInterfaceManager( 1019): isVoNrEnabled: CommandException: com.android.internal.telephony.CommandException: REQUEST_NOT_SUPPORTED
10-21 11:22:05.875 E/PhoneInterfaceManager( 1019): isVoNrEnabled: CommandException: com.android.internal.telephony.CommandException: REQUEST_NOT_SUPPORTED
10-21 11:22:05.887 W/BaseSearchIndex( 1020): Error initial controller
10-21 11:22:06.812 I/NearbyDiscovery( 3666): java.util.concurrent.TimeoutException: Timed out waiting for Task
10-21 11:22:07.627 E/IndexablesProvider( 4518): java.lang.IllegalStateException: We should initialize FormFactorUtils before getting instance.
10-21 11:22:07.952 W/AiAiFed ( 3504): java.lang.IllegalArgumentException: Unsupported response code3
10-21 11:22:08.333 W/FontLog ( 3666): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 12 milliseconds, 952611 nanoseconds delay) for dlrl@50afe71[status=PENDING]
10-21 11:22:09.069 W/AsyncOperation( 3666): OperationException[Status{statusCode=unknown status code: 29503, resolution=null}]
10-21 11:22:09.391 W/BugleRcs( 4499): android.content.pm.PackageManager$NameNotFoundException: com.google.android.ims
10-21 11:22:10.209 E/A       ( 1593): java.util.concurrent.CancellationException: Task was cancelled.
10-21 11:22:10.350 W/WellbeingSettingsProvid( 3808): java.util.concurrent.TimeoutException: Waited 5000 milliseconds (plus 1 milliseconds, 543972 nanoseconds delay) for lki@52a7fda[status=PENDING, info=[inputFuture=[lkh@2a90c0b[status=PENDING, setFuture=[ljp@f27aae8[status=PENDING, info=[inputFuture=[lki@166a501[status=PENDING, info=[inputFuture=[lki@ec0bfa6[status=PENDING, info=[inputFuture=[lld@2da5de7[status=PENDING, info=[futures=[lki@7408d94[status=PENDING, info=[inputFuture=[lki@617903d[status=PENDING, info=[inputFuture=[lmb@2293032[status=PENDING, info=[delegate=[lng@e4f183[status=PENDING, setFuture=[lki@162ef00[status=PENDING, info=[inputFuture=[lkh@5f1f339[status=PENDING, info=[inputFuture=[lmb@7361d7e[status=PENDING, info=[delegate=[lng@c7b22df[status=PENDING, setFuture=[lkh@c87fb2c[status=PENDING, info=[inputFuture=[llh@47589f5[status=PENDING, info=[futures=[lkh@e92938a[status=SUCCESS, result=[cgd@4190dfb]], lmb@c0f9e18[status=PENDING, info=[delegate=[lng@361d071[status=PENDING, setFuture=[lkh@68e5e56[status=PENDING, setFuture=[lkh@7e08ed7[status=PENDING, info=[inputFuture=[lki@76c83c4[status=PENDING, info=[inputFuture=[lkh@6f202ad[status=PENDING, info=[inputFuture=[lkh@aa09e2[status=PENDING, setFuture=[lmm@e354173[Not completed]]]], function=[propagating=[cac@8901830]]]]], function=[propagating=[bwc@1d91ca9]]]]], function=[propagating=[bzp@3e2e22e]]]]]]]]]]]]]]], function=[propagating=[cac@61881cf]]]]]]]]]], function=[propagating=[bwd@516875c]]]]], function=[propagating=[bwc@534a642]]]]]]]]]], function=[propagating=[bvr@4fdda65]]]]], function=[propagating=[cur@7bef33a]]]]]]]], function=[propagating=[dce@d902c89]]]]], function=[propagating=[bvq@3456beb]]]]], exceptionType=[class java.lang.Throwable], fallback=[propagating=[bwc@f7ac4af]]]]]]], function=[propagating=[bvq@e32bd48]]]]
10-21 11:22:12.523 W/Conscrypt( 3868): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 11:22:12.847 W/AsyncOperation( 3666): OperationException[Status{statusCode=Empty (package not registered?) or malformed snapshot token for null: , resolution=null}]
10-21 11:22:12.937 W/FontLog ( 3666): java.util.concurrent.TimeoutException: Waited 10000 milliseconds (plus 1 milliseconds, 256515 nanoseconds delay) for dlrl@423f27[status=PENDING]
10-21 11:22:13.034 W/AiAiFed ( 3504): java.lang.IllegalArgumentException: Unsupported response code3
10-21 11:22:13.144 W/SnapshotHandler( 4236): java.io.FileNotFoundException: /data/user_de/0/com.google.android.googlequicksearchbox/files/phenotype/shared/com.google.android.libraries.performance.primes#com.google.android.googlequicksearchbox.pb: open failed: ENOENT (No such file or directory)
10-21 11:22:13.144 W/SnapshotHandler( 4236): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 11:22:13.201 W/AsyncOperation( 3666): OperationException[Status{statusCode=unknown status code: 29503, resolution=null}]
10-21 11:22:14.030 W/AiAiFed ( 3504): java.lang.IllegalArgumentException: Unsupported response code3
10-21 11:22:14.450 W/AsyncOperation( 3666): OperationException[Status{statusCode=unknown status code: 29503, resolution=null}]
10-21 11:22:14.549 W/A       ( 4236): Exception while fetching versionCode for package[com.google.android.apps.tv.dreamx].
10-21 11:22:14.549 W/A       ( 4236): android.content.pm.PackageManager$NameNotFoundException: com.google.android.apps.tv.dreamx
10-21 11:22:14.552 W/A       ( 4236): Exception while fetching versionCode for package[com.google.android.apps.tv.launcherx].
10-21 11:22:14.552 W/A       ( 4236): android.content.pm.PackageManager$NameNotFoundException: com.google.android.apps.tv.launcherx
10-21 11:22:14.616 W/AsyncOperation( 3666): OperationException[Status{statusCode=unknown status code: 29503, resolution=null}]
10-21 11:22:14.819 W/Conscrypt( 3868): Could not set socket write timeout: java.net.SocketException: Socket closed
10-21 11:22:14.864 W/SnapshotHandler( 4236): java.io.FileNotFoundException: /data/user/0/com.google.android.googlequicksearchbox/files/phenotype/shared/com.google.android.libraries.consentverifier#com.google.android.googlequicksearchbox.pb: open failed: ENOENT (No such file or directory)
10-21 11:22:14.864 W/SnapshotHandler( 4236): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 11:22:14.912 W/SingleHostAsyncVerifier( 3868): Error performing check:  [CONTEXT service_id=244 ]
10-21 11:22:15.389 W/WellbeingSettingsProvid( 3808): java.util.concurrent.TimeoutException: Waited 5000 milliseconds (plus 109893 nanoseconds delay) for lki@5931276[status=PENDING, info=[inputFuture=[lkh@c830077[status=PENDING, setFuture=[ljp@f5a4e4[status=PENDING, info=[inputFuture=[lki@d2cdd4d[status=PENDING, info=[inputFuture=[lki@e15e002[status=PENDING, info=[inputFuture=[lld@d1d2d13[status=PENDING, info=[futures=[lki@8da2b50[status=PENDING, info=[inputFuture=[lki@df70149[status=PENDING, info=[inputFuture=[lmb@c05fa4e[status=PENDING, info=[delegate=[lng@723876f[status=PENDING, info=[task=[running=[NOT STARTED YET], propagating=[bwh@c3eac7c]]]]]]]], function=[propagating=[bvr@3256905]]]]], function=[propagating=[cur@bcb6d5a]]]]]]]], function=[propagating=[dce@d902c89]]]]], function=[propagating=[bvq@e8b2b8b]]]]], exceptionType=[class java.lang.Throwable], fallback=[propagating=[bwc@f7ac4af]]]]]]], function=[propagating=[bvq@1081468]]]]
10-21 11:22:15.781 W/SnapshotHandler( 4236): java.io.FileNotFoundException: /data/user/0/com.google.android.googlequicksearchbox/files/phenotype/shared/com.google.android.libraries.notifications#com.google.android.googlequicksearchbox.pb: open failed: ENOENT (No such file or directory)
10-21 11:22:15.781 W/SnapshotHandler( 4236): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
10-21 11:22:16.502 W/SnapshotHandler( 4236): java.io.FileNotFoundException: /data/user/0/com.google.android.googlequicksearchbox/files/phenotype/shared/com.google.android.libraries.notifications.platform#com.google.android.googlequicksearchbox.pb: open failed: ENOENT (No such file or directory)
10-21 11:22:16.502 W/SnapshotHandler( 4236): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
```
