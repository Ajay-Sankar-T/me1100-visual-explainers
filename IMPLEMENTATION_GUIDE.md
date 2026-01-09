# ME1100 Visual Explainers - Complete Implementation Guide
## Master Calculator & Thermodynamic Visualizations

## CREATED COMPONENTS (Ready to Use)

### 1. MasterCalculator.jsx - Main Hub
- 5 calculator tabs (First Law, Properties, Entropy, Cycles, Units)
- Dark/Light mode toggle  
- Calculation history with localStorage
- Quick reference sidebar with formula hints
- Responsive grid layout (mobile-friendly)
- Dark mode: Full gray theme
- Light mode: Cream background with orange accents

### 2. FirstLawCalculator.jsx - Thermodynamic Energy
- Solves Q = DeltaU + W for any unknown
- Visual tab selection for unknown variable
- Color-coded input highlighting
- Real-time explanation generation
- Input validation and error messages
- Clear button to reset form

Formula Logic:
- Solve for DeltaU: U = Q - W
- Solve for Q: Q = U + W
- Solve for W: W = Q - U

### 3. PVDiagram.jsx - Interactive Pressure-Volume
- SVG-based interactive diagram
- 4 process types selector:
  * Isobaric (P=const): W = P(V2 - V1)
  * Isothermal (T=const): W = P1V1 * ln(V2/V1)
  * Isochoric (V=const): W = 0
  * Isentropic (S=const): W = (P2V2 - P1V1)/(1 - gamma)
- Shaded area shows work visualization
- Real-time state property display
- Grid-based coordinate system

## SETUP INSTRUCTIONS

### Step 1: Install Dependencies
npm install plotly.js recharts framer-motion katex react-katex

### Step 2: File Structure
src/components/calculators/
  - MasterCalculator.jsx
  - FirstLawCalculator.jsx
  - PropertyFinder.jsx (TODO)
  - EntropyCalculator.jsx (TODO)
  - CycleEfficiencyCalculator.jsx (TODO)
  - UnitConverter.jsx (TODO)

src/components/visualizations/
  - PVDiagram.jsx
  - TSDiagram.jsx (TODO)
  - PhDiagram.jsx (TODO)
  - CycleVisualizer.jsx (TODO)

## HIGH PRIORITY COMPONENTS (Next)

### PropertyFinder.jsx
Features needed:
- Steam table interpolation
- Input modes: P-T, P-h, T-s
- Output: v, u, h, s, x (quality)
- Property visualization charts

### CycleVisualizer.jsx  
- 4 cycle selector: Otto, Diesel, Rankine, Carnot
- PV & TS diagram overlay
- State points (1,2,3,4) markers
- Efficiency calculation
- Heat/Work display

Cycle Formulas:
- Otto: n = 1 - 1/r^(k-1)
- Diesel: n = 1 - (1/r^(k-1)) * (rc^k - 1)/(k(rc - 1))
- Rankine: n = Wnet / Qin
- Carnot: n = 1 - Tc/Th

### TSDiagram.jsx
- Temperature-Entropy axes
- Saturation dome for water
- Isobar lines (const P)
- Isoenthalpic lines (const h)
- Quality lines (x=const)
- Interactive state points

## UTILITY FUNCTIONS NEEDED

### thermodynamics.js
- Polytropic calculations
- Entropy calculations  
- Efficiency calculations
- Saturation pressure formula

### unitConverter.js
- Temperature: K, C, F, R
- Pressure: Pa, kPa, MPa, bar, atm, psi
- Energy: J, kJ, MJ, BTU, kcal
- Power: W, kW, MW, hp

## COLOR SCHEME (MLU-Explain inspired)
- Primary Orange: #FF6B35
- Secondary Red: #FF4757
- Accent Blue: #3B82F6  
- Background: #F5F1E8 (cream)
- Text Dark: #1A1A2E

## DEPLOYMENT
npm run build
vercel --prod

For more detailed code, check the commented files in this repo!
