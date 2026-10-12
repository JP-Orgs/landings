#!/usr/bin/env sh
set -eu

# Deploya kraftohome-astro/dist a la branch gh-pages del repo (sirve en
# https://jp-orgs.github.io/landings/). Correr desde kraftohome-astro/.

cd "$(dirname "$0")"

echo "Building..."
npm run build

WORKTREE_DIR="$(mktemp -d)"
trap 'rm -rf "$WORKTREE_DIR"' EXIT

git fetch origin gh-pages 2>/dev/null || true

if git show-ref --verify --quiet refs/remotes/origin/gh-pages; then
  git worktree add "$WORKTREE_DIR" gh-pages
else
  git worktree add --detach "$WORKTREE_DIR"
  (cd "$WORKTREE_DIR" && git checkout --orphan gh-pages && git rm -rf . >/dev/null 2>&1 || true)
fi

find "$WORKTREE_DIR" -maxdepth 1 ! -name .git ! -name "$(basename "$WORKTREE_DIR")" -exec rm -rf {} +
cp -r dist/. "$WORKTREE_DIR"/
touch "$WORKTREE_DIR"/.nojekyll

cd "$WORKTREE_DIR"
git add -A
if git diff --cached --quiet; then
  echo "Nada para deployar (sin cambios)."
else
  git commit -m "deploy: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  git push origin gh-pages
  echo "Deployado. Pages: https://jp-orgs.github.io/landings/"
fi

cd - >/dev/null
git worktree remove "$WORKTREE_DIR" --force 2>/dev/null || true
