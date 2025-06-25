# Cultural Autopsy Studios

> We kept the tape running.

A stylized, emotionally intelligent media network built with SvelteKit and Tailwind CSS.

## 🎬 About

Cultural Autopsy Studios is a digital media platform featuring:
- VHS/2000s aesthetic design
- Multiple show formats (The Boardroom, Matrix Deep Dive, Memory Glitch Series)
- Interactive avatars representing different perspectives
- Episode archive with emotional tagging
- Integrated video content with custom CRT TV styling

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/lojak57/CulturalAutopsyStudios.git
cd CulturalAutopsyStudios

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

### Environment Setup

Create a `.env` file based on `.env.example`:

```env
# TrueForm CRM Integration (if using lead capture)
VITE_TRUEFORM_API_URL=https://api.trueform.app
VITE_TRUEFORM_API_KEY=your-api-key-here

# Site Configuration
VITE_SITE_URL=https://culturalautopsystudios.com

# Analytics (optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_PLAUSIBLE_DOMAIN=culturalautopsystudios.com
```

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy with these settings:
   - Framework Preset: SvelteKit
   - Build Command: `npm run build`
   - Output Directory: `.vercel`

### Manual Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

The site features a custom VHS-inspired design system:

- **Colors**: VCR Blue, Post-it Yellow, Trauma Red, Tape Gray
- **Typography**: IBM Plex Mono, Space Grotesk, System Serif
- **Effects**: Glitch animations, scanlines, VHS flicker

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable components
│   ├── config/         # Site configuration
│   └── utils/          # Helper functions
├── routes/            # SvelteKit routes
│   ├── +page.svelte   # Homepage
│   ├── manifesto/     # Manifesto page
│   ├── episodes/      # Episode archive
│   └── blog/          # Blog/tape section
└── app.css           # Global styles
```

## 🛠 Development

```bash
# Run development server
npm run dev

# Type checking
npm run check

# Linting
npm run lint

# Format code
npm run format
```

## 📼 Features

- **Responsive Design**: Optimized for all devices
- **Video Integration**: Custom CRT TV player with controls
- **Dynamic Content**: Episode filtering by show and emotion
- **Performance**: Lazy loading and optimized assets
- **Type Safety**: Full TypeScript support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 🔗 Links

- [Live Site](https://culturalautopsystudios.com)
- [Substack](https://culturalautopsy.substack.com)

---

Built with 💙 by Cultural Autopsy Studios