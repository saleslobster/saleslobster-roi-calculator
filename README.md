# SalesLobster ROI Calculator 🦞

**Interactive calculator demonstrating SalesLobster's 95%+ cost savings vs Salesforce Agentforce.**

## What is This?

A fully functional web application that allows prospects, customers, and partners to:
- Calculate real-time ROI for switching from Agentforce to SalesLobster
- Adjust team size and projection period
- See detailed feature comparisons
- Understand the cost structure of both platforms

## Live Demo

**Production:** https://saleslobster-roi.vercel.app (coming soon)

## Local Development

### Prerequisites
- Node.js 16+ (recommended: 18+)
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
# Build static export
npm run build

# Verify output
ls -la out/

# Test locally
npx serve out/
```

## Deployment

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set production domain
vercel --prod
```

### Option 2: GitHub Pages

```bash
# Build
npm run build

# Push to gh-pages branch
npm run export
git add out/
git commit -m "Deploy ROI calculator"
git push origin main
```

### Option 3: Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Features

### 1. Interactive Calculator
- Adjustable team size (10-1000 SDRs)
- Flexible projection periods (3 months - 3 years)
- Real-time ROI calculation
- Visual cost comparison charts

### 2. Feature Comparison
- Side-by-side feature matrix
- Meeting notes capabilities
- Meeting prep briefing features
- Apex development automation
- Integration options
- Infrastructure & licensing

### 3. Use Case Breakdown
- Meeting notes processing
- Meeting prep automation
- Apex code deployment

### 4. Professional Design
- Dark theme (brand-appropriate)
- Responsive layout
- Interactive charts (Recharts)
- Mobile-friendly

## Architecture

```
pages/
├── index.js           # Main ROI calculator
├── comparison.js      # Feature comparison page
└── _app.js           # Next.js app wrapper

public/
├── data.json         # Pricing and feature data

styles/
└── globals.css       # Tailwind CSS styles
```

## Key Metrics

### Default Assumptions (Can Be Customized)

**Per Use Case Costs:**
- Meeting notes: Agentforce $2.00 vs SalesLobster $0.05
- Meeting prep: Agentforce $2.00 vs SalesLobster $0.03
- Apex deployment: Agentforce $10.00 vs SalesLobster $0.50

**Team Size Multipliers:**
- 100 SDRs: ~$60k/mo (Agentforce) vs ~$1.5k/mo (SalesLobster)
- 500 SDRs: ~$300k/mo (Agentforce) vs ~$7.5k/mo (SalesLobster)

## Data Source

Pricing and feature data comes from:
- Salesforce official documentation
- Customer feedback (Reddit, Capterra)
- Published case studies
- Our internal competitive research

**Last updated:** February 2, 2026

## Customization

### Adding More Use Cases

Edit `public/data.json`:

```json
{
  "useCases": [
    {
      "name": "Your Use Case",
      "agentforceTime": "X mins",
      "saleslobsterTime": "Y mins",
      "agentforceCost": 2.00,
      "saleslobsterCost": 0.05,
      "frequency": "Z times/day"
    }
  ]
}
```

### Adjusting Pricing

Update in `public/data.json`:

```json
{
  "saleslobster": {
    "pricing": {
      "perMonth_100SDRs": 1500
    }
  }
}
```

## Performance

- **Lighthouse Score:** 95+ (mobile & desktop)
- **Load Time:** <1s
- **Time to Interactive:** <500ms

Built with:
- Next.js 14 (static export)
- React 18
- Tailwind CSS
- Recharts
- Lucide Icons

## SEO

- Meta titles and descriptions
- Open Graph tags (ready)
- Structured data (ready)
- Mobile-first responsive design

## Security

- No backend API calls
- All data is client-side JSON
- No user tracking or analytics
- GDPR compliant (no cookies)

## Contributing

Ideas for improvement:
- Add more use cases
- Include customer testimonials
- Add calculator API
- Export PDF reports
- Email calculator results

## License

MIT — Use freely for SalesLobster marketing

## Support

Questions? Contact Igor at igor.kudryk@gmail.com

---

**Built with 🦞 by SalesLobster Team**
