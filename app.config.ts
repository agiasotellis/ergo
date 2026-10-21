import type { ExpoConfig } from 'expo/config';

const PACKAGE = 'com.agiasotellis.ergo';

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
    ['react-native-maps', { androidGoogleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY ?? '' }],
    [
      'expo-location',
      { locationWhenInUsePermission: 'Το ergo χρησιμοποιεί την τοποθεσία σου για να δείχνει εργασίες κοντά σου.' },
    ],
    [
      'expo-image-picker',
      { photosPermission: 'Το ergo χρειάζεται πρόσβαση στις φωτογραφίες σου για να προσθέσεις εικόνες σε εργασίες.' },
    ],
    [
      '@react-native-google-signin/google-signin',
      // Only used by iOS builds. Replace with the reversed iOS client ID when you add iOS.
      { iosUrlScheme: process.env.GOOGLE_IOS_URL_SCHEME ?? 'com.googleusercontent.apps.ergo-ios-not-configured' },
    ],
    'expo-font',
    // Code shrinking (R8) stays off until it's verified with every native library; it can strip
    // classes that are looked up by reflection and crash the app on launch.
    'expo-build-properties',
    './plugins/withReleaseSigning',
  ],
  extra: {
    // Google Maps crashes on Android when its API key is missing, so screens only mount a
    // MapView when the build was given a key.
    mapsEnabled: !!process.env.GOOGLE_MAPS_API_KEY,
  },
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
};

export default config;
