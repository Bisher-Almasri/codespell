
#!/usr/bin/env bash
# open_armory_arc.sh
# Opens Siege Armory URLs in Arc Browser (macOS)
# Usage: ./open_armory_arc.sh START [DELAY_SECONDS]

set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Usage: $0 START [DELAY_SECONDS]"
  exit 1
fi

START=$((10#$1))
DELAY=${2:-0.3}
END=$((START + 10))
BASE="https://siege.hackclub.com/armory/6"

# Check if Arc is installed
if [ ! -d "/Applications/Arc.app" ]; then
  echo "❌ Arc.app not found in /Applications."
  exit 1
fi

echo "🚀 Opening Siege Armory pages $START → $END in Arc..."

for ((n = START; n <= END; n++)); do
  URL="${BASE}${n}"
  echo "→ $URL"
  open -b "company.thebrowser.Browser" "$URL"
  sleep "$DELAY"
done

echo "✅ Done."
