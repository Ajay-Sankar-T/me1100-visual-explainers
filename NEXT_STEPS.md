# ME1100 Visual Explainers - NEXT STEPS (Your Action Plan)

## 🎯 Current Status
✅ **Phase 1 Complete:** Foundation setup done
- Next.js project structure created
- package.json with all dependencies configured
- next.config.js setup for MDX and images
- Color tokens and design system defined (lib/constants/colors.ts)
- Design specifications locked (DESIGN_SPEC.md)
- Home page design blueprint ready (HOME_PAGE_DESIGN.md)
- Development guide created (DEVELOPMENT_SETUP.md)
- Master Calculator guide documented (IMPLEMENTATION_GUIDE.md)

## 📋 Immediate Next Steps (Do This First)

### Step 1: Clone and Setup (5 minutes)
```bash
git clone https://github.com/Ajay-Sankar-T/me1100-visual-explainers.git
cd me1100-visual-explainers
npm install
npm run dev
# Open http://localhost:3000
```

### Step 2: Create Global Styles (10 minutes)
Create `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap');

:root {
  --color-heat: #FF6B35;
  --color-cold: #2563EB;
  --color-ideal: #10B981;
  --color-loss: #EF4444;
  --color-bg: #F6F4EF;
  --color-text: #1A1A2E;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}

h1, h2, h3 { font-family: 'Poppins', sans-serif; }
```

### Step 3: Create Root Layout (15 minutes)
Create `app/layout.tsx`:
```typescript
import './globals.css';

export const metadata = {
  title: 'ME1100 Visual Explainers',
  description: 'Interactive visual explanations for thermodynamics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">ME1100 Visual Explainers</nav>
        <main>{children}</main>
        <footer>Built for engineering students</footer>
      </body>
    </html>
  );
}
```

### Step 4: Create Home Page with 6 Sections (1-2 hours)
Create `app/page.tsx` with:

**Section 1: Hero**
- Large title: "Thermodynamics, finally explained visually."
- Subtitle: "ME1100 concepts explained with interactive diagrams"
- Two CTAs: "Start Learning" (orange) + "Open Master Calculator" (blue)
- Animated PV diagram morphing (use Plotly.js)

**Section 2: How This Site Works**
- 3 cards: SEE (👁️ Blue) | PLAY (🎚️ Orange) | UNDERSTAND (🧠 Green)
- Each with simple one-liner explanation

**Section 3: Core Modules Grid**
- 2 columns × 4 rows grid
- 8 module cards:
  1. 🌡️ Fundamental Concepts
  2. ⚡ First Law
  3. 🔥 Second Law & Entropy
  4. 💧 Pure Substances
  5. 🌬️ Ideal & Real Gases
  6. 📐 Property Relations
  7. 🔄 Power Cycles
  8. ⚗️ Reacting Systems

**Section 4: Master Calculator Callout**
- Wide card highlighting calculator
- "Master Thermodynamics Calculator"
- Solve ME1100 problems using the same visuals
- CTA: "Open Calculator"

**Section 5: How to Use Timeline**
- 5 steps:
  1. Learn the visual
  2. Play with sliders
  3. Read the equation
  4. Use the calculator
  5. Solve exam problems

**Section 6: Footer**
- About | GitHub | Contact
- Built for ME1100 @ IIT Madras

## 🚀 Priority Implementation Order

### Tier 1 (Highest Impact) - Week 1
1. **Home Page** (all 6 sections) - Your first visual success
2. **PropertyFinder Component** - Most reusable
   - Input: P, T, Quality (x)
   - Output: Property table (v, h, s, etc.)
   - Uses steam table data (JSON)
3. **Vapor Dome** - Pure Substances foundation
   - TS Diagram with quality slider
   - Pv Diagram
   - Phase region highlighting

### Tier 2 (Core Content) - Week 2-3
1. **First Law Module**
   - Energy balance visualization
   - PdV work diagram
   - SFEE (Steady Flow Energy Equation)
2. **Second Law Module**
   - Entropy bar chart
   - Directionality arrow (reversible vs irreversible)
   - Carnot engine efficiency
3. **Ideal Gases Module**
   - Piston-cylinder with molecule animation
   - PVT relationship sliders
   - Real gas Z-factor comparison
4. **Power Cycles Module** (Optional for Week 3)
   - Otto cycle animation
   - Rankine cycle visualization
   - Efficiency calculator

### Tier 3 (Advanced) - Week 4+
1. Fundamental Concepts (Complex, many definitions)
2. Property Relations (Maxwell relations interactive square)
3. Reacting Systems (Combustion, adiabatic flame temp)

## 📊 Key Utilities to Create

### lib/utils/calculations.ts
```typescript
// Steam properties interpolation
export function getWaterProperties(P_kPa: number, T_C: number) {
  // Returns: {v, h, s, u, cp, cv}
}

// Thermodynamic calculations
export function firstLaw(Q: number, W: number): {U_change: number} {}
export function carnotEfficiency(Th: number, Tc: number): number {}
export function entropy_change(T1: number, T2: number): number {}
```

### lib/utils/formatters.ts
```typescript
export function formatNumber(val: number, decimals: number) {}
export function formatProperty(name: string, value: number) {}
```

## 🎨 Component Hierarchy

Each module follows this pattern:
```
Module (e.g., FirstLaw)
├── ConceptOverview (text + definition)
├── Interactive Visualization
│   ├── Diagram (SVG or Plotly)
│   ├── Sliders
│   └── Real-time updates
├── Key Equations (LaTeX via KaTeX)
├── Example Problem
└── Quiz (multiple choice)
```

## 🔗 Reference Links
- NotebookLM (thermodynamics concepts): https://notebooklm.google.com/notebook/e522e4c6-be02-43e5-a28e-a240b98e6783
- Design System: DESIGN_SPEC.md
- Home Page Design: HOME_PAGE_DESIGN.md
- Implementation Details: IMPLEMENTATION_GUIDE.md
- MLU-Explain (inspiration): https://mlu-explain.github.io/

## ✅ Quality Checklist Before Each Commit

- [ ] No page without interaction (sliders, buttons, etc.)
- [ ] No equation without corresponding visual
- [ ] All colors match design system (#FF6B35, #2563EB, #10B981, #EF4444)
- [ ] Smooth animations (no jumpy transitions)
- [ ] Mobile responsive (test on phone)
- [ ] No console errors
- [ ] Code follows naming conventions
- [ ] Components are reusable

## 🎯 Success Metrics

**Week 1:**
- Home page fully functional with hero animation
- PropertyFinder working with real steam table data
- Vapor dome TS/Pv diagrams interactive

**Week 2:**
- 2-3 core modules (First Law, Second Law, Ideal Gases) live
- Master Calculator with tabs working
- 80%+ code coverage for visualizations

**Week 3:**
- 6-7 modules complete
- All calculations verified against textbook
- Mobile responsive throughout

**Week 4+:**
- All 8 modules + Master Calculator complete
- Deployed to Vercel
- GitHub Pages mirror
- README updated with usage guide

## 💪 You've Got This!

The foundation is solid. The hardest part (planning and setup) is done.
Now it's about implementation: one component at a time, following the design system.

Each time you finish a section, commit with a clear message:
```bash
git add .
git commit -m "Add [ComponentName]: [brief description]"
git push origin main
```

**Start with the home page. Make it beautiful. Then move to PropertyFinder.**

Good luck! 🚀
