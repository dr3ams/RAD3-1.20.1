# Development tasks for the RAD3 KubeJS scripts.
# Run `just setup` once after cloning.

# Bootstrap the local environment: install dependencies and activate git hooks.
setup:
    @echo "==> Checking prerequisites"
    node -e 'process.exit(+process.versions.node.split(".")[0] >= 20 ? 0 : 1)' || { echo "Node.js 20+ is required"; exit 1; }
    npm --version
    @echo "==> Installing dependencies and Husky hooks"
    npm install
    @echo "==> Git hooks path (expect .husky/_):"
    git config --get core.hooksPath

# Format all KubeJS sources (JS, JSON, .mcmeta).
format:
    npm run format

# Check formatting without modifying files.
check:
    npm run format:check

# List available recipes.
default:
    @just --list
