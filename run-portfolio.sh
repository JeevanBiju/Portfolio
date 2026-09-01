#!/usr/bin/env bash
# Instrumented Editorial portfolio launcher — ensures a compatible local Node.js setup, installs dependencies, then starts Vite.
set -Eeuo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

say() { printf '\n\033[1;36m%s\033[0m\n' "$1"; }
fail() { printf '\n\033[1;31mError: %s\033[0m\n' "$1" >&2; exit 1; }

say "Jeevan Biju Portfolio — local launcher"

command -v node >/dev/null 2>&1 || fail "Node.js is not installed. Install Node.js 20.19+ or 22.12+ from https://nodejs.org, then run this script again."
command -v npm >/dev/null 2>&1 || fail "npm is not available. Reinstall Node.js from https://nodejs.org, then run this script again."

if ! node -e '
  const [major, minor] = process.versions.node.split(".").map(Number);
  const supported = (major === 20 && minor >= 19) || (major === 22 && minor >= 12) || major > 22;
  process.exit(supported ? 0 : 1);
'; then
  fail "Node.js $(node --version) is too old for this project. Install Node.js 20.19+ or 22.12+, then run this script again."
fi

if [[ ! -d "node_modules" ]] || [[ ! -x "node_modules/.bin/vite" ]]; then
  say "Installing the project dependencies (this is needed only once, unless dependencies change)…"
  npm install --legacy-peer-deps --no-audit --no-fund || fail "Dependency installation failed. Confirm that you have an internet connection and try again."
fi

if [[ ! -f "client/public/local-assets/Jeevan_Biju_Resume.pdf" ]]; then
  printf '\033[1;33mWarning: The bundled local visual assets are missing. Extract the entire ZIP before running the project.\033[0m\n'
fi

say "Starting the local portfolio…"
printf 'Open the URL shown below in your browser. Press Ctrl+C to stop the server.\n\n'
exec npm run dev
