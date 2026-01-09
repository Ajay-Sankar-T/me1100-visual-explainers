DEVELOPMENT_# ME1100 Visual Explainers - DEVELOPMENT SETUP GUIDE

## Quick Start (Local Development)

This guide provides complete instructions for building and deploying the ME1100 thermodynamics visual explainer website.

### Prerequisites
- Node.js >= 16
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Ajay-Sankar-T/me1100-visual-explainers.git
cd me1100-visual-explainers

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## Project Structure

```
me1100-visual-explainers/
├── app/                          # Next.js 14 app directory
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page (6 sections)
│   ├── modules/                  # 8 learning modules
│   │   ├── [moduleId]/
│   │   └── page.tsx
│   └── calculator/               # Master Calculator
│       └── page.tsx
├── components/
│   ├── common/                   # Reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── Hero.tsx
│   ├── visualizations/           # Interactive visualizations
│   │   ├── PVDiagram.tsx
│   │   ├── TSDiagram.tsx
│   │   ├── VaporDome.tsx
│   │   ├── PropertyFinder.tsx
│   │   └── MasterCalculator.tsx
│   └── modules/                  # Module-specific components
│       ├── FundamentalConcepts.tsx
│       ├── FirstLaw.tsx
│       ├── SecondLaw.tsx
│       ├── PureSubstances.tsx
│       ├── IdealGases.tsx
│       ├── PropertyRelations.tsx
│       ├── PowerCycles.tsx
│       └── ReactingSystems.tsx
├── lib/
│   ├── constants/
│   │   ├── colors.ts             # Design system colors
│   │   ├── modules.ts            # Module metadata
│   │   └── properties.ts         # Thermodynamic property data
│   ├── utils/
│   │   ├── calculations.ts       # Thermodynamic calculations
│   │   ├── formatters.ts         # Value formatting
│   │   └── physics.ts            # Physical constants
│   └── data/
│       ├── steam-tables.json     # Steam table data
│       └── air-properties.json   # Air properties
├── styles/
│   ├── globals.css               # Global styles
│   └── tailwind.config.js        # Tailwind configuration
├── public/                       # Static assets
├── docs/                         # Documentation
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
└── next.config.js                # Next.js config
```

## Core Implementation Tasks

### Phase 1: Foundation (Current) ✅
- [x] Next.js project setup
- [x] package.json configuration
- [x] next.config.js setup
- [x] Color tokens and design system
- [ ] Global styles (Tailwind CSS configuration)
- [ ] Layout component with navigation
- [ ] Basic utility functions

### Phase 2: Home Page (Priority)
Create app/page.tsx with 6 sections:
1. **Hero Section** - Animated PV diagram morphing
2. **How This Site Works** - SEE / PLAY / UNDERSTAND cards
3. **Core Modules Grid** - 8 module cards (2x4)
4. **Master Calculator Callout** - Wide card with CTA
5. **How to Use Timeline** - 5-step learning process
6. **Footer** - Minimal, professional

### Phase 3: Tier-1 Components (Highest Impact)
1. **PropertyFinder** (Tier-1) - Find properties from P,T,x inputs
2. **Vapor Dome** (Tier-1) - Interactive TS and Pv diagrams
3. **Master Calculator** - Hub with tabs for:
   - First Law Calculator
   - Entropy Calculator
   - Property Finder
   - Cycle Efficiency
   - Units Converter

### Phase 4: Module Implementation
Build 8 learning modules with visualizations:
- Fundamental Concepts
- First Law
- Second Law
- Pure Substances
- Ideal & Real Gases
- Property Relations
- Power Cycles
- Reacting Systems

## Key Component Examples

### 1. Color Usage (from lib/constants/colors.ts)
```typescript
// Heat/Work/Energy
#FF6B35 (HEAT_ORANGE)

// Cold/Entropy/Reference
#2563EB (COOL_BLUE)

// Reversible/Success/Ideal
#10B981 (EMERALD_GREEN)

// Losses/Irreversibility
#EF4444 (CRIMSON_RED)
```

### 2. Calculation Utilities Needed
```typescript
// lib/utils/calculations.ts
- steamTable(P, T, quality)
- compressibilityFactor(Pr, Tr)
- carnotEfficiency(Th, Tc)
- entropy(P1, T1, x1, T2, P2)
- pv_work(P, V_initial, V_final)
- firstLaw(Q, W, U_initial, U_final)
```

### 3. Interactive Visualization Pattern
```typescript
// components/visualizations/ComponentName.tsx
import { useState } from 'react';
import { COLORS } from '@/lib/constants/colors';
import Plot from 'react-plotly.js';

export function InteractiveVisualization() {
  const [value, setValue] = useState(initial);
  const handleSliderChange = (newValue) => {
    setValue(newValue);
    // Recalculate and redraw
  };
  
  return (
    <div className="interactive-component">
      <div className="visualization">
        <Plot data={calculatePlotData(value)} />
      </div>
      <div className="controls">
        <input
          type="range"
          value={value}
          onChange={(e) => handleSliderChange(e.target.value)}
        />
      </div>
    </div>
  );
}
```

## Deployment

### To Vercel
```bash
# Push to GitHub first
git add .
git commit -m "Implementation message"
git push origin main

# Then deploy to Vercel
vercel
```

### Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://me1100-visual-explainers.vercel.app
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Design System Checklist

- [ ] All colors used match DESIGN_SPEC.md
- [ ] No gradients except physics-meaningful ones
- [ ] Heat/Work always HEAT_ORANGE (#FF6B35)
- [ ] Entropy/Cold always COOL_BLUE (#2563EB)
- [ ] Reversible/Ideal always EMERALD_GREEN (#10B981)
- [ ] Losses/Irreversible always CRIMSON_RED (#EF4444)
- [ ] Typography: Inter/Poppins for headings
- [ ] Mobile responsive (tested on mobile)
- [ ] Smooth animations (Framer Motion / CSS)
- [ ] No page without interaction
- [ ] No equation without visual

## Next Steps

1. Clone this repo locally
2. Run `npm install`
3. Run `npm run dev`
4. Start implementing components following the structure above
5. Deploy to Vercel when ready

For complete component code, see individual module documentation in `/docs`.
SETUP.md
