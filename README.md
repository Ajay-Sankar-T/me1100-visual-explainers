# ME1100 Visual Explainers

> Interactive, concept-driven learning modules for **Thermodynamics (ME1100)** based on Prof. S.K. Som's lecture series from IIT Kanpur. Similar to [MLU-Explain](https://mlu-explain.github.io/) but for core mechanical engineering concepts.

## Overview

This project transforms 32 comprehensive thermodynamics lectures into **visual, interactive explanations** that build intuition through diagrams, animations, and hands-on widgets.

### Vision

- **Visual Learning**: Interactive plots, animations, and diagrams instead of just equations
- **Concept-Driven**: Understand the "why" before the "how"
- **Self-Paced**: Learn at your own speed with detailed explanations
- **Exam Ready**: Each module includes practice problems and key takeaways

## Module Structure

The course is organized into **5 main modules** with **32 lectures**:

### Module 1: Fundamentals (Lectures 1-5)
- [x] Introduction & Fundamental Concepts
- [ ] Zeroth Law & Fundamental Concepts
- [ ] Different Kinds of Energy & First Law-I
- [ ] First Law-II
- [ ] First Law-III

### Module 2: Second Law (Lectures 6-12)
- [ ] Second Law & Its Corollaries-I
- [ ] Second Law & Its Corollaries-II
- [ ] Second Law & Its Corollaries-III
- [ ] Second Law & Its Corollaries-IV
- [ ] Available Energy-I
- [ ] Available Energy-II
- [ ] Available Energy-III

### Module 3: Thermodynamic Relations (Lectures 13-19)
- [ ] Property Relations-I
- [ ] Property Relations-II
- [ ] Joule-Kelvin Expansion & Pure Substances
- [ ] Pure Substances-I
- [ ] Pure Substances-II
- [ ] Ideal Gases
- [ ] Properties of Ideal Gases

### Module 4: Power Cycles (Lectures 20-26)
- [ ] Vapor Power Cycle-I
- [ ] Vapor Power Cycle-II
- [ ] Vapor Power Cycle-III
- [ ] Vapor Power Cycle-IV
- [ ] Gas Power Cycle-I
- [ ] Gas Power Cycle-II
- [ ] Gas Power Cycle-III

### Module 5: Advanced Topics (Lectures 27-32)
- [ ] Reacting Systems-I
- [ ] Reacting Systems-II
- [ ] Reacting Systems-III
- [ ] Multi-Component Systems-I
- [ ] Multi-Component Systems-II
- [ ] Multi-Component Systems-III

## Quick Start

### Prerequisites

- Node.js >= 16
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Ajay-Sankar-T/me1100-visual-explainers.git
cd me1100-visual-explainers

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Navigate to http://localhost:3000
```

## Tech Stack

- **Frontend**: Next.js + React
- **Styling**: Tailwind CSS
- **Visualizations**: Plotly.js (interactive charts)
- **Markdown**: MDX (markdown + React components)
- **Hosting**: GitHub Pages + Vercel
- **Version Control**: Git & GitHub

## Project Structure

```
me1100-visual-explainers/
├── README.md
├── package.json
├── next.config.js
├── public/
│   ├── images/
│   └── data/
│       └── lectures.json          # Lecture metadata
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── ExplainerCard.jsx
│   │   └── InteractiveWidget.jsx
│   ├── pages/
│   │   ├── _app.jsx              # Root layout
│   │   ├── index.jsx             # Homepage
│   │   ├── about.jsx
│   │   └── lectures/
│   │       ├── [id].jsx          # Dynamic lecture pages
│   │       └── [id]/
│   │           ├── notes.mdx     # Concept notes
│   │           ├── visual.jsx    # Interactive plots
│   │           └── practice.jsx  # Practice problems
│   ├── styles/
│   └── lib/
│       ├── lectureData.js
│       ├── plotGenerators.js
│       └── utils.js
├── docs/
│   ├── LECTURES.md
│   ├── CONTRIBUTING.md
│   └── DEVELOPMENT.md
└── .gitignore
```

## Features

### Each Lecture Module Includes:

1. **Concept Overview** (2-3 min read)
   - Key definitions
   - Why it matters
   - Real-world applications

2. **Visual Explanation**
   - Interactive diagrams
   - Animations
   - Process visualizations

3. **Key Equations**
   - LaTeX-rendered formulas
   - Step-by-step derivations
   - Sign conventions

4. **Practice Problems**
   - Multiple choice questions
   - Numerical problems
   - Conceptual thinking exercises

5. **Further Reading**
   - Links to textbook sections
   - Related concepts
   - External resources

## Example: Zeroth Law of Thermodynamics

Each explainer page has:

- **Visual**: Two objects at different temperatures reaching equilibrium (interactive animation)
- **Definition**: "If A=B and B=C, then A=C" explained with temperature analogy
- **Key Equations**: Q_transfer in isolated system = 0
- **Application**: Thermometer design and temperature measurement
- **Quiz**: "What happens if we remove the insulation?"

## Roadmap

### Phase 1: Foundation (Weeks 1-4)
- [ ] Set up Next.js project structure
- [ ] Create lecture metadata system
- [ ] Build reusable component library
- [ ] Develop 2 flagship modules (Zeroth Law + First Law)

### Phase 2: Expansion (Weeks 5-12)
- [ ] Create all Module 1 explainers
- [ ] Implement practice problem system
- [ ] Add dark/light theme
- [ ] Deploy GitHub Pages

### Phase 3: Full Course (Weeks 13+)
- [ ] Complete all 32 lectures
- [ ] Add search functionality
- [ ] Create printable study guides
- [ ] Build mobile-responsive design

## Contributing

We welcome contributions! See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

### Ways to Contribute:

1. **Add Explainers**: Create visual explanations for unlisted lectures
2. **Fix Bugs**: Report issues and submit fixes
3. **Improve Visuals**: Enhance diagrams and animations
4. **Add Problems**: Contribute practice problems and solutions
5. **Documentation**: Improve guides and tutorials

## Inspiration

This project is inspired by:

- [MLU-Explain](https://mlu-explain.github.io/) - Visual ML explainers
- [3Blue1Brown](https://www.youtube.com/c/3blue1brown) - Mathematical visualization
- [Desmos](https://www.desmos.com/) - Interactive graphing

## License

MIT License - See LICENSE file for details

## Acknowledgments

- Prof. S.K. Som (IIT Kanpur) for excellent thermodynamics lectures
- NPTEL platform for making quality education accessible
- The open-source community for amazing tools

## Contact & Feedback

- **Author**: Ajay Sankar
- **GitHub**: [@Ajay-Sankar-T](https://github.com/Ajay-Sankar-T)
- **Issues**: [Report a bug](https://github.com/Ajay-Sankar-T/me1100-visual-explainers/issues)
- **Discussions**: [Ask a question](https://github.com/Ajay-Sankar-T/me1100-visual-explainers/discussions)

---

**Made with ❤️ for engineering students learning thermodynamics**
