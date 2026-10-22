import type { ExpoConfig } from 'expo/config';

const PACKAGE = 'com.agiasotellis.ergo';
// Share links (https://<LINK_HOST>/t/<task id>) open the app. Keep in sync with src/lib/env.ts;
// the site in web/ serves /.well-known/assetlinks.json so Android trusts these links.
const LINK_HOST = 'ergo-tasks.vercel.app';

const config: ExpoConfig = {
  name: 'ergo',
  slug: 'ergo',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'ergo',
  userInterfaceStyle: 'automatic',
  ios: {
    bundleIdentifier: PACKAGE,
    supportsTablet: false,
    infoPlist: {
      NSLocationWhenInUseUsageDescription: 'Το ergo χρησιμοποιεί την τοποθεσία σου για να δείχνει εργασίες κοντά σου.',
    },
  },
  android: {
    package: PACKAGE,
    // Firebase (push notifications). Not secret: identifies the app to Firebase.
    googleServicesFile: './google-services.json',
    // CI passes the GitHub run number so every APK can be installed over the previous one.
    versionCode: Number(process.env.ERGO_VERSION_CODE ?? 1),
    adaptiveIcon: {
      backgroundColor: '#FFFFFF',
      foregroundImage: './assets/images/adaptive-foreground.png',
      monochromeImage: './assets/images/adaptive-monochrome.png',
    },
    permissions: ['ACCESS_COARSE_LOCATION', 'ACCESS_FINE_LOCATION'],
    blockedPermissions: ['android.permission.RECORD_AUDIO'],
    predictiveBackGestureEnabled: false,
    intentFilters: [
      {
        action: 'VIEW',
        autoVerify: true,
        data: [{ scheme: 'https', host: LINK_HOST, pathPrefix: '/t/' }],
        category: ['BROWSABLE', 'DEFAULT'],
      },
    ],
  },
  web: {
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#FFFFFF',
        image: './assets/images/splash-icon.png',
        imageWidth: 180,
        dark: { backgroundColor: '#0F1F3D', image: './assets/images/splash-icon.png' },
      },
    ],
    // Free OpenStreetMap maps via MapLibre + OpenFreeMap: no API key needed.
    '@maplibre/maplibre-react-native',
    ['expo-notifications', { icon: './assets/images/notification-icon.png', color: '#2563EB', defaultChannel: 'default' }],
    ['expo-local-authentication', { faceIDPermission: 'Το ergo χρησιμοποιεί το Face ID για να ξεκλειδώνει την εφαρμογή.' }],
    // Keystore-backed storage for the session encryption key; excluded from Android backups.
    ['expo-secure-store', { configureAndroidBackup: true }],
    [
      'expo-location',
      { locationWhenInUsePermission: 'Το ergo χρησιμοποιεί την τοποθεσία σου για να δείχνει εργασίες κοντά σου.' },
    ],
    [
      'expo-image-picker',
      {
        photosPermission: 'Το ergo χρειάζεται πρόσβαση στις φωτογραφίες σου για να προσθέσεις εικόνες σε εργασίες και μηνύματα.',
        cameraPermission: 'Το ergo χρειάζεται την κάμερα για να στείλεις φωτογραφίες σε μηνύματα.',
      },
    ],
    [
      '@react-native-google-signin/google-signin',
      // Only used by iOS builds. Replace with the reversed iOS client ID when you add iOS.
      { iosUrlScheme: process.env.GOOGLE_IOS_URL_SCHEME ?? 'com.googleusercontent.apps.ergo-ios-not-configured' },
    ],
    'expo-font',
    // Code shrinking (R8) stays off until it's verified with every native library; it can strip
    // classes that are looked up by reflection and crash the app on launch.
    ['expo-build-properties', { android: { enableMinifyInReleaseBuilds: false, enableShrinkResourcesInReleaseBuilds: false } }],
    './plugins/withReleaseSigning',
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
};

export default config;
