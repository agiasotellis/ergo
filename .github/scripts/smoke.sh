#!/usr/bin/env bash
# Installs the release APK on the CI emulator, launches it and records what happens.
# Output: $RUNNER_TEMP/smoke/{result.txt,logcat.txt,screen-*.png}
set -u
OUT="$RUNNER_TEMP/smoke"
mkdir -p "$OUT"
PKG=com.agiasotellis.ergo
APK=$(ls dist/*.apk | head -1)

adb wait-for-device
adb install -r -g "$APK" > "$OUT/install.txt" 2>&1 || { echo "INSTALL_FAILED" > "$OUT/result.txt"; cat "$OUT/install.txt" >> "$OUT/result.txt"; exit 0; }
adb logcat -c
adb shell monkey -p "$PKG" -c android.intent.category.LAUNCHER 1 > /dev/null 2>&1
sleep 12
adb exec-out screencap -p > "$OUT/screen-1.png"
sleep 18
adb exec-out screencap -p > "$OUT/screen-2.png"

if adb shell pidof "$PKG" > /dev/null 2>&1; then echo "APP_RUNNING after 30s" > "$OUT/result.txt"; else echo "APP_NOT_RUNNING (crashed or exited)" > "$OUT/result.txt"; fi

{
  echo "=== crash / fatal ==="
  adb logcat -d -v time | grep -E "FATAL EXCEPTION|AndroidRuntime|Fatal signal|SIGABRT|libc  +:|DEBUG +:|abort_message" | tail -120
  echo
  echo "=== React Native / Expo ==="
  adb logcat -d -v time | grep -E "ReactNativeJS|ReactNative|unknown:React|Expo|expo|Hermes|SoLoader|JSApp|Error|Exception" | grep -v "GooglePlayServicesUtil" | tail -150
} > "$OUT/logcat.txt"
exit 0
