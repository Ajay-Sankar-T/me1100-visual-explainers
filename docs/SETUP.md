# Setup Instructions for ME1100 Visual Explainers

## Quick Start (5 minutes)

### 1. Clone the Repository

```bash
git clone https://github.com/Ajay-Sankar-T/me1100-visual-explainers.git
cd me1100-visual-explainers
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Development Server

```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:3000`

## Full Setup Guide

### Prerequisites

- **Node.js**: v16 or higher
- **npm** or **yarn**: Latest version
- **Git**: For version control
- **Code Editor**: VS Code recommended

### Installation Steps

#### Step 1: Set Up Node.js

```bash
# Check Node.js version
node --version
npm --version

# Should output v16+ and 8+
```

#### Step 2: Clone & Navigate

```bash
git clone https://github.com/Ajay-Sankar-T/me1100-visual-explainers.git
cd me1100-visual-explainers
```

#### Step 3: Install Dependencies

```bash
npm install
```

#### Step 4: Create Environment File (Optional)

```bash
cp .env.example .env.local
# Edit .env.local with any required variables
```

#### Step 5: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### Development

```bash
npm run dev          # Start dev server with hot reload
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

### Production

```bash
npm run build        # Build for production
npm run start        # Start production server
```

### Testing

```bash
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## Project Structure

```
me1100-visual-explainers/
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/             # Next.js pages (routes)
│   │   ├── index.jsx      # Homepage
│   │   └── lectures/      # Lecture pages
│   ├── styles/            # CSS modules
│   ├── lib/               # Utility functions
│   └── mdx/               # MDX content files
├── public/
│   ├── images/            # Static images
│   └── data/              # JSON data files
├── docs/                  # Documentation
├── .github/               # GitHub config
├── package.json
└── next.config.js
```

## Creating Your First Explainer

### 1. Create Lecture Folder

```bash
mkdir src/pages/lectures/zeroth-law
cd src/pages/lectures/zeroth-law
```

### 2. Add Files

Create these files:
- `notes.mdx` - Concept explanation
- `visual.jsx` - Interactive visualization
- `practice.jsx` - Practice problems

### 3. Add to Lecture List

Update `public/data/lectures.json`:

```json
{
  "id": "zeroth-law",
  "title": "Zeroth Law of Thermodynamics",
  "module": 1,
  "order": 2,
  "youtubeUrl": "https://youtube.com/..."
}
```

## Deployment

### GitHub Pages

GitHub Pages is already configured. Every push to `main` branch automatically deploys.

Your site: `https://ajay-sankar-t.github.io/me1100-visual-explainers/`

### Vercel (Optional)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Deploy

## Troubleshooting

### Port 3000 Already in Use

```bash
# Use different port
PORT=3001 npm run dev
```

### Module Not Found Error

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

```bash
# Check for syntax errors
npm run lint

# Clear Next.js cache
rm -rf .next
npm run build
```

## Getting Help

- **Documentation**: See [README.md](../README.md)
- **Contributing**: See [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Issues**: [Create an issue](https://github.com/Ajay-Sankar-T/me1100-visual-explainers/issues)
- **Discussions**: [Start a discussion](https://github.com/Ajay-Sankar-T/me1100-visual-explainers/discussions)

## Next Steps

1. ✅ Set up local development environment
2. 📚 Read the [README](../README.md) for project overview
3. 📝 Check [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines
4. 🚀 Create your first visual explainer!

---

Happy coding! 🎉
