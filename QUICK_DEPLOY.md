# Quick Deploy Instructions

Since the video file is causing issues, here's the fastest way to deploy:

## Option 1: Fresh Clone (Recommended)
```bash
# In a new terminal/folder:
git clone https://github.com/lojak57/Cultural-Autopsy-Studios-2.git cas-fresh
cd cas-fresh
git init
cp -r /Users/mitchmechelay/CulturalAutopsyStudios/* .
rm -rf .git
rm -f static/videos/*.mp4
git init
git add .
git commit -m "Initial commit - Cultural Autopsy Studios"
git remote add origin https://github.com/lojak57/Cultural-Autopsy-Studios-2.git
git push -u origin main --force
```

## Option 2: Direct to Vercel
1. Create account at vercel.com
2. Import from Git → Add GitHub account
3. Import the repository
4. Deploy!

## Video Setup
1. Upload your videos to YouTube as "Unlisted"
2. Get the video IDs
3. Update `/src/lib/config/videos.config.ts`:
   ```typescript
   hero: {
     videoId: 'YOUR_VIDEO_ID_HERE',
   }
   ```

## Environment Variables in Vercel
Add these in Vercel dashboard → Settings → Environment Variables:
- `VITE_TRUEFORM_API_URL`
- `VITE_TRUEFORM_API_KEY`

That's it! Site will be live at your-project.vercel.app