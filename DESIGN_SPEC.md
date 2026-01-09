# ME1100 DESIGN SPECIFICATION
## Professional Visual-First Thermodynamics Learning Platform

### CORE PHILOSOPHY (NON-NEGOTIABLE)

✅ **Visual > Text** - Every concept must have a diagram, animation, slider, or simulation
✅ **One Concept = One Visual Story** - No cluttered pages
✅ **User Learns by Playing** - Sliders, toggles, draggable points everywhere
✅ **Engineering-Accurate** - Equations and visuals must be physically correct

---

## 🎨 DESIGN SYSTEM (LOCKED)

### COLOR PALETTE

| Purpose | Color | Hex | Usage |
|---------|-------|-----|-------|
| Background | Warm Off-White | #F6F4EF | Main page background |
| Heat/Work/Energy | Deep Orange | #FF6B35 | Heat arrows, work, activity |
| Cold/Entropy/Reference | Cool Blue | #2563EB | Entropy, ideal reference |
| Reversible/Success | Emerald Green | #10B981 | Ideal processes, reversible |
| Irreversible/Loss | Crimson Red | #EF4444 | Losses, irreversibility |
| Main Text | Dark Navy | #1A1A2E | Body text |
| Muted Labels | Gray | #6B7280 | Secondary text |
| Diagram Axes | Black | #111827 | Axes, grid structure |
| Gridlines | Light Gray | #D1D5DB | Graph gridlines |

**RULE:** Every color must mean something physically. No random colors.

### TYPOGRAPHY
- **Headings:** Inter / Poppins (Bold, Large)
- **Body:** Inter (Regular, Readable)
- **Equations:** KaTeX / MathJax
- **Numbers/Axes:** Monospace clarity
- **General:** Large font sizes, NOT dense PDF

---

## 🧱 SITE STRUCTURE (MANDATORY)

```
Home
├── 1. Fundamental Concepts
├── 2. First Law
├── 3. Second Law
├── 4. Pure Substances
├── 5. Ideal & Real Gases
├── 6. Property Relations
├── 7. Power Cycles
├── 8. Reacting & Multicomponent Systems
└── Master Calculator (All-in-one tool)
```

Each section = visual lessons, NOT notes.

---

## 🎯 IMPLEMENTATION REQUIREMENTS BY TOPIC

### 1. FUNDAMENTAL THERMODYNAMIC CONCEPTS

**Systems & Surroundings**
- Drag-and-drop system boundary
- Toggle: Closed / Open / Isolated
- Animated arrows: Heat 🔥, Work ⚙️, Mass 🌬️

**Properties (Extensive vs Intensive)**
- Mass slider
- Bar graphs for V, U, H (scale with mass)
- P, T stay constant visually

**Equilibrium**
- Three dials: Temperature, Pressure, Concentration
- Non-aligned → system animates
- Aligned → system freezes

**Gibbs Phase Rule**
- Interactive phase diagram
- Sliders for components (c) and phases (φ)
- Live calculation of degrees of freedom (f = c - φ + 2)

---

### 2. FIRST LAW OF THERMODYNAMICS

**Energy Balance**
```
Q → [SYSTEM] → W
      ↓
     ΔU
```
- Sliders for Q and W
- ΔU updates live
- Visual feedback with colors

**PdV Work**
- PV diagram with draggable endpoints
- Area under curve fills dynamically
- Work value displayed in real-time

**SFEE (Steady Flow Energy Equation)**
- Control volume with inlet/outlet
- Velocity arrows
- KE/PE toggles
- Enthalpy bars at inlet/outlet

---

### 3. SECOND LAW OF THERMODYNAMICS

**Directionality**
- Hot → Cold animation
- Reverse button → BLOCKED with explanation

**Entropy**
- Entropy bar (only increases)
- Reversible toggle → stays constant
- Irreversible toggle → jumps up visually

**Carnot Engine**
- PV + TS diagrams side-by-side
- Th, Tc sliders
- Efficiency updates: η = 1 - Tc/Th

**Exergy (Availability)**
- Useful work vs destroyed work bars
- Dead state reference line
- Losses highlighted in RED

---

### 4. PURE SUBSTANCES (CRITICAL TOPIC)

**Vapor Dome**
- Full Ts AND Pv diagrams
- Quality slider (x)
- State point moves inside dome
- Phase label updates (liquid, wet, vapor)

**Quality Measurement**
- Throttling calorimeter animation
- Enthalpy stays constant (isenthalpic)

---

### 5. IDEAL & REAL GASES

**Ideal Gas Law**
- Piston-cylinder diagram
- P, V, T sliders
- Molecules speed up/slow down visually

**Real Gas Behavior**
- Z vs Pr graph
- Reduced property sliders
- Deviation from ideal (highlighted)

---

### 6. PROPERTY RELATIONS

**Maxwell Relations**
- Thermodynamic square (U, H, F, G)
- Click one → highlights derivatives

**Joule–Thomson Effect**
- Throttle valve animation
- Pressure drop slider
- Temperature change indicator
- Inversion curve plot

---

### 7. POWER CYCLES (HEAVY VISUAL FOCUS)

**Rankine Cycle**
- Component flow diagram (boiler → turbine → condenser → pump)
- PV + TS diagrams animated
- Losses shaded in RED
- Efficiency changes live

**Otto / Diesel / Brayton**
- Cylinder animation
- State points (1,2,3,4) animated
- Compression ratio slider
- Efficiency live calculation

---

### 8. REACTING & MULTICOMPONENT SYSTEMS

**Combustion**
- Mole balance bars
- Flame temperature rise animation
- Excess air slider

**Chemical Potential**
- Mixing animation
- Gibbs free energy slope
- Equilibrium condition (visual)

---

## 🧮 MASTER CALCULATOR (MANDATORY)

One hub with tabs for:
- First Law (Q = ΔU + W)
- Entropy
- Pure Substances (properties)
- Gases (ideal & real)
- Cycles (efficiency)
- Units converter

Every calculator links back to visuals.

---

## ✅ FINAL QUALITY BAR

Ensure:
- ✅ No page without interaction
- ✅ No formula without a visual
- ✅ No visualization without physical meaning
- ✅ Smooth animations (Framer Motion / SVG)
- ✅ Mobile-friendly
- ✅ Fast performance

---

## 🚀 SUCCESS CRITERIA

If a first-year ME student can:
1. **Drag sliders**
2. **Watch diagrams change**
3. **Predict outcomes before equations**

Then the job is DONE.
