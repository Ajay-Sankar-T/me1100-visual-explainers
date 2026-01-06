# Contributing to ME1100 Visual Explainers

Thank you for your interest in contributing! We welcome all kinds of contributions to make this learning resource better.

## How to Contribute

### 1. Create Visual Explainers

Want to create a visual explanation for a lecture? Great! Here's how:

- **Pick a lecture** from the [module structure](../README.md)
- **Create an interactive widget** using Plotly.js or D3.js
- **Write concept notes** in markdown
- **Add practice problems** with solutions
- **Submit a PR** with your changes

### 2. Fix Bugs

Found a bug or typo?

- **Report it**: Open an issue with details
- **Fix it**: Submit a PR with the fix

### 3. Improve Existing Explainers

- Enhance visualizations
- Add more examples
- Improve explanations
- Create better diagrams

### 4. Add Practice Problems

- Contribute numerical problems
- Add conceptual questions
- Create quiz modules

### 5. Documentation

- Improve guides and tutorials
- Fix broken links
- Update outdated information

## Getting Started

### Prerequisites

```bash
# Install Node.js (v16 or higher)
# Install Git

# Clone the repo
git clone https://github.com/Ajay-Sankar-T/me1100-visual-explainers.git
cd me1100-visual-explainers

# Install dependencies
npm install

# Start development server
npm run dev
```

## Development Guidelines

### Code Style

- Use **functional components** with React hooks
- Write **clear, descriptive variable names**
- Add **comments** for complex logic
- Follow **ESLint** rules (auto-formatted with Prettier)

### File Structure

```
src/pages/lectures/
├── [id].jsx              # Main lecture page
└── [id]/
    ├── notes.mdx        # Concept explanations
    ├── visual.jsx       # Interactive visualizations
    └── practice.jsx     # Practice problems
```

### Creating a Visualization

```jsx
// Example: Interactive First Law visualization
import Plotly from 'plotly.js'

export default function FirstLawVisual() {
  return (
    <div id="plot" style={{ width: '100%', height: '600px' }}>
      {/* Interactive widget here */}
    </div>
  )
}
```

### Writing Concept Notes (MDX)

```mdx
# Zeroth Law of Thermodynamics

If A = B and B = C, then A = C

## Key Idea

Temperature is a fundamental property that allows...

## Real-World Application

Thermometers work because of this law...
```

## Commit Message Convention

Use conventional commits:

```
feat: add interactive PV diagram
fix: correct entropy equation typo
docs: update thermal processes guide
style: format component files
test: add tests for plotly utilities
```

## Pull Request Process

1. **Fork** the repository
2. **Create a feature branch**: `git checkout -b feature/your-feature`
3. **Make your changes** and test locally
4. **Commit with clear messages**
5. **Push to your fork**
6. **Open a PR** with a description of changes
7. **Address review feedback**
8. **Merge** when approved

## Testing

```bash
# Run tests
npm test

# Run linting
npm run lint

# Build for production
npm run build
```

## Content Guidelines

### For Visualizations

- ✅ Interactive, not just static
- ✅ Color-coded for clarity
- ✅ Works on mobile
- ✅ Accessible (labels, alt text)

### For Explanations

- ✅ Clear and concise
- ✅ Avoid jargon without explanation
- ✅ Include real-world examples
- ✅ Cite reference materials

## Questions or Need Help?

- **Discussions**: Start a [discussion](https://github.com/Ajay-Sankar-T/me1100-visual-explainers/discussions)
- **Issues**: Create an [issue](https://github.com/Ajay-Sankar-T/me1100-visual-explainers/issues)
- **Email**: Check README for contact

## Code of Conduct

Be respectful, inclusive, and constructive. We're all here to learn!

---

Happy contributing! 🎉
