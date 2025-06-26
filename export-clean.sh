#!/bin/bash
# Export clean version of the project without git history

echo "Creating clean export..."

# Create a temporary directory
EXPORT_DIR="/tmp/cultural-autopsy-studios-export"
rm -rf $EXPORT_DIR
mkdir -p $EXPORT_DIR

# Copy all files except .git and build directories
rsync -av --exclude='.git' \
          --exclude='node_modules' \
          --exclude='.svelte-kit' \
          --exclude='.vercel' \
          --exclude='static/videos/*.mp4' \
          --exclude='.DS_Store' \
          ./ $EXPORT_DIR/

# Create a clean git repo
cd $EXPORT_DIR
git init
git add .
git commit -m "Initial commit - Cultural Autopsy Studios"

echo "Clean export created at: $EXPORT_DIR"
echo ""
echo "To push to GitHub:"
echo "cd $EXPORT_DIR"
echo "git remote add origin https://github.com/lojak57/Cultural-Autopsy-Studios-2.git"
echo "git push -u origin main --force"