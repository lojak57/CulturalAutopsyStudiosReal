# Deployment Fix Instructions

The deployment is showing old code. Here's what needs to be updated:

## 1. Navigation Component
In `src/lib/components/layout/Navigation.svelte`, line 11 should be:
```javascript
{ label: 'Manifesto', href: '/manifesto', special: true }
```
NOT "Exit"

## 2. Video Configuration
The video ID is already set correctly in `src/lib/config/videos.config.ts`

## 3. Missing Components
The following components need to be created but seem to be missing from the deployment:
- Avatar components in `src/lib/components/avatars/`
- Profile components

## To Force Update on Vercel:

1. Make a small change to trigger rebuild:
```bash
echo "// Deploy trigger $(date)" >> src/app.css
git add src/app.css
git commit -m "Trigger deployment"
git push
```

2. Or in Vercel Dashboard:
- Go to your project
- Click "Redeploy" 
- Select "Redeploy with existing Build Cache" OFF

## Environment Variables Needed:
- VITE_TRUEFORM_API_URL
- VITE_TRUEFORM_API_KEY