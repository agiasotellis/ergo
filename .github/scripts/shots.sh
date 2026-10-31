#!/usr/bin/env bash
# Store screenshots: installs the APK on the CI emulator, signs in with the reviewer account
# and captures the main screens through deep links. Output: $RUNNER_TEMP/shots/*.png
set -u
OUT="$RUNNER_TEMP/shots"
mkdir -p "$OUT"
PKG=com.agiasotellis.ergo
APK=$(ls dist/*.apk | head -1)
UI=/tmp/ui.xml

dismiss() { adb shell am broadcast -a android.intent.action.CLOSE_SYSTEM_DIALOGS > /dev/null 2>&1; }
dump() { for i in 1 2 3 4 5; do adb shell uiautomator dump /sdcard/ui.xml > /dev/null 2>&1 && adb pull /sdcard/ui.xml "$UI" > /dev/null 2>&1 && return 0; sleep 2; done; return 1; }
# tap <regex> [first|last]: taps the centre of a node whose text or content-desc matches.
tap() {
  dump || return 1
  local xy
  xy=$(python3 - "$UI" "$1" "${2:-first}" <<'PY'
import re, sys, xml.etree.ElementTree as ET
path, pat, which = sys.argv[1], re.compile(sys.argv[2]), sys.argv[3]
hits = []
for n in ET.parse(path).iter('node'):
    label = (n.get('text') or '') + '|' + (n.get('content-desc') or '')
    if pat.search(label):
        x1, y1, x2, y2 = map(int, re.findall(r'\d+', n.get('bounds')))
        if x2 > x1 and y2 > y1:
            hits.append(((x1 + x2) // 2, (y1 + y2) // 2))
if hits:
    x, y = max(hits, key=lambda h: h[1]) if which == 'last' else hits[0]
    print(x, y)
PY
)
  [ -n "$xy" ] || { echo "tap: no match for $1"; return 1; }
  adb shell input tap $xy
}
# field <index>: taps the n-th EditText (0-based).
field() {
  dump || return 1
  local xy
  xy=$(python3 - "$UI" "$1" <<'PY'
import re, sys, xml.etree.ElementTree as ET
nodes = [n for n in ET.parse(sys.argv[1]).iter('node') if n.get('class') == 'android.widget.EditText']
n = nodes[int(sys.argv[2])]
x1, y1, x2, y2 = map(int, re.findall(r'\d+', n.get('bounds')))
print((x1 + x2) // 2, (y1 + y2) // 2)
PY
)
  adb shell input tap $xy
}
shot() { dismiss; sleep 1; adb exec-out screencap -p > "$OUT/$1.png"; echo "shot $1"; }
open() { adb shell am start -W -a android.intent.action.VIEW -d "$1" "$PKG" > /dev/null; sleep "${2:-8}"; }

adb wait-for-device
adb shell settings put secure location_mode 3
adb emu geo fix 23.7445 37.9685
adb install -r -g "$APK" || { echo "INSTALL_FAILED"; exit 0; }
adb shell pm grant "$PKG" android.permission.POST_NOTIFICATIONS 2>/dev/null || true
adb shell monkey -p "$PKG" -c android.intent.category.LAUNCHER 1 > /dev/null 2>&1
sleep 25; dismiss
adb emu geo fix 23.7445 37.9685

tap 'Ξεκίνα'; sleep 4
tap 'Παράλειψη'; sleep 5
shot 00-auth
field 0; sleep 1; adb shell input text 'agiasotellis+review@gmail.com'; sleep 1
field 1; sleep 1; adb shell input text "$REVIEW_PASSWORD"; sleep 1
adb shell input keyevent 4; sleep 2
tap '^Σύνδεση' last; sleep 15
adb emu geo fix 23.7445 37.9685
sleep 5
shot 01-home

open 'ergo://map' 15;                                             shot 02-map
open 'ergo://task/e0000000-0000-4000-8000-000000000001';          shot 03-task
open 'ergo://task/e0000000-0000-4000-8000-000000000010';          shot 04-own-task-offers
adb shell input swipe 540 1700 540 700 400; sleep 2;               shot 05-own-task-offers-scrolled
open 'ergo://chat/c0000000-0000-4000-8000-000000000001';          shot 06-chat
open 'ergo://post';                                               shot 07-post
open 'ergo://profile';                                            shot 08-profile
adb shell input swipe 540 1700 540 900 400; sleep 2;               shot 09-profile-scrolled
open 'ergo://alerts';                                             shot 10-alerts
open 'ergo://messages';                                           shot 11-messages
ls -la "$OUT"
exit 0
