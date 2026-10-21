/**
 * Adds a `release` signing config to android/app/build.gradle that reads the
 * upload keystore from environment variables (set in CI from GitHub secrets).
 * Without those variables the release build falls back to the debug key, so
 * local `expo run:android --variant release` still works.
 *
 *   ERGO_UPLOAD_STORE_FILE      absolute path to the .jks/.keystore file
 *   ERGO_UPLOAD_STORE_PASSWORD
 *   ERGO_UPLOAD_KEY_ALIAS
 *   ERGO_UPLOAD_KEY_PASSWORD
 */
const { withAppBuildGradle } = require('expo/config-plugins');

const RELEASE_SIGNING = `
        release {
            if (System.getenv('ERGO_UPLOAD_STORE_FILE')) {
                storeFile file(System.getenv('ERGO_UPLOAD_STORE_FILE'))
                storePassword System.getenv('ERGO_UPLOAD_STORE_PASSWORD')
                keyAlias System.getenv('ERGO_UPLOAD_KEY_ALIAS')
                keyPassword System.getenv('ERGO_UPLOAD_KEY_PASSWORD')
            }
        }`;

module.exports = function withReleaseSigning(config) {
  return withAppBuildGradle(config, (cfg) => {
    let src = cfg.modResults.contents;
    if (src.includes("System.getenv('ERGO_UPLOAD_STORE_FILE')")) return cfg;

    src = src.replace(/signingConfigs\s*\{/, (m) => m + RELEASE_SIGNING);

    // Inside buildTypes.release, use the release config when the keystore is provided.
    src = src.replace(
      /(buildTypes\s*\{[\s\S]*?release\s*\{[\s\S]*?)signingConfig\s+signingConfigs\.debug/,
      "$1signingConfig System.getenv('ERGO_UPLOAD_STORE_FILE') ? signingConfigs.release : signingConfigs.debug"
    );

    cfg.modResults.contents = src;
    return cfg;
  });
};
