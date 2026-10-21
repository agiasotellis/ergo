#!/usr/bin/env bash
# Boots an Android emulator on the CI runner, then runs smoke.sh against it.
# Everything is logged to $RUNNER_TEMP/smoke/emulator.log so failures are visible on the ci-status branch.
set -x
OUT="$RUNNER_TEMP/smoke"
mkdir -p "$OUT"
exec > >(tee -a "$OUT/emulator.log") 2>&1

SDK="${ANDROID_HOME:-$ANDROID_SDK_ROOT}"
SDKM="$SDK/cmdline-tools/latest/bin/sdkmanager"
AVDM="$SDK/cmdline-tools/latest/bin/avdmanager"
IMG="system-images;android-34;google_apis;x86_64"
ls -la /dev/kvm || true

yes | "$SDKM" --licenses > /dev/null 2>&1 || true
"$SDKM" --install "platform-tools" "emulator" "$IMG" > "$OUT/sdkmanager.log" 2>&1 || { echo "SDKMANAGER_FAILED"; tail -40 "$OUT/sdkmanager.log"; }
export PATH="$SDK/platform-tools:$SDK/emulator:$PATH"

echo no | "$AVDM" create avd -n ci -k "$IMG" --force -d pixel_6 || echo no | "$AVDM" create avd -n ci -k "$IMG" --force
emulator -avd ci -no-window -gpu swiftshader_indirect -no-snapshot -noaudio -no-boot-anim -accel auto -memory 4096 > "$OUT/emulator-process.log" 2>&1 &

adb wait-for-device
for i in $(seq 1 120); do
  [ "$(adb shell getprop sys.boot_completed 2>/dev/null | tr -d '\r')" = "1" ] && break
  sleep 5
done
if [ "$(adb shell getprop sys.boot_completed 2>/dev/null | tr -d '\r')" != "1" ]; then
  echo "EMULATOR_DID_NOT_BOOT" > "$OUT/result.txt"
  tail -60 "$OUT/emulator-process.log" >> "$OUT/result.txt"
  exit 0
fi
adb shell settings put global window_animation_scale 0
adb shell settings put global transition_animation_scale 0
adb shell settings put global animator_duration_scale 0
adb shell input keyevent 82

bash .github/scripts/smoke.sh
adb emu kill || true
