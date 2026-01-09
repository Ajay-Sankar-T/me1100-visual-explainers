'use client';

const MODULES = [
  { icon: '🌡️', title: 'Fundamental Concepts', subtitle: 'Systems, properties, equilibrium, phase rule', weight: 3 },
  { icon: '⚡', title: 'First Law', subtitle: 'Energy balance, work, SFEE', weight: 3 },
  { icon: '🔥', title: 'Second Law & Entropy', subtitle: 'Direction, irreversibility, Carnot', weight: 3 },
  { icon: '💧', title: 'Pure Substances', subtitle: 'Vapor dome, quality, phase change', weight: 3 },
  { icon: '🌬️', title: 'Ideal & Real Gases', subtitle: 'Equations of state, compressibility', weight: 2 },
  { icon: '📐', title: 'Property Relations', subtitle: 'Maxwell relations, Tds equations', weight: 2 },
  { icon: '🔄', title: 'Power Cycles', subtitle: 'Otto, Diesel, Rankine, Brayton', weight: 3 },
  { icon: '⚗️', title: 'Reacting Systems', subtitle: 'Combustion, mixtures, chemical potential', weight: 2 },
];

export default function Home() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      {/* SECTION 1: HERO */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--color-heat)', marginBottom: '1rem' }}>Thermodynamics, finally explained visually.</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          ME1100 concepts explained with interactive diagrams, sliders, and calculators — not memorization.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>▶ Start Learning</button>
          <button className="btn-secondary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>🧮 Open Master Calculator</button>
        </div>
        <div style={{ marginTop: '3rem', height: '250px', background: 'white', border: '2px solid var(--color-border)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)' }}>
          [Animated PV Diagram - Coming Soon]
        </div>
      </section>

      {/* SECTION 2: HOW THIS SITE WORKS */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem', background: 'white' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>How This Site Works</h2>
        <div className="grid-2col">
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'var(--color-cold)' }}>👁️ SEE</h3>
            <p>Every concept starts with a diagram. No equations first.</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'var(--color-heat)' }}>🎚️ PLAY</h3>
            <p>Change pressure, temperature, volume — see what changes.</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'var(--color-ideal)' }}>🧠 UNDERSTAND</h3>
            <p>Equations come after intuition. Now they make sense.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE MODULES GRID */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <h2 style={{ marginBottom: '3rem' }}>Core Learning Modules</h2>
        <div className="grid-4col">
          {MODULES.map((mod, idx) => (
            <div key={idx} className="card" style={{ cursor: 'pointer', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{mod.icon}</div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{mod.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{mod.subtitle}</p>
              <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--color-heat)', fontWeight: 'bold' }}>{'⭐'.repeat(mod.weight)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: MASTER CALCULATOR CALLOUT */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem', background: 'linear-gradient(135deg, var(--color-heat) 0%, #FF8555 100%)', color: 'white', borderRadius: '1rem', marginTop: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>🧮 Master Thermodynamics Calculator</h2>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '600px' }}>Solve ME1100 problems using the same visuals you learn with. One calculator. Five tabs. Unlimited possibilities.</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button id="calculator" className="btn-primary" style={{ background: 'white', color: 'var(--color-heat)', fontSize: '1rem', padding: '0.875rem 2rem', fontWeight: 'bold' }}>▶ Open Calculator</button>
          <button className="btn-secondary" style={{ borderColor: 'white', color: 'white', fontSize: '1rem', padding: '0.875rem 2rem' }}>View Supported Calculations</button>
        </div>
      </section>

      {/* SECTION 5: HOW TO USE TIMELINE */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem', background: 'white' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>How to Use This for ME1100</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {[
            { num: 1, title: 'LEARN THE VISUAL', desc: 'Start with the diagram. Move sliders. See what happens.' },
            { num: 2, title: 'PLAY WITH SLIDERS', desc: 'Predict the outcome. Then check if you were right.' },
            { num: 3, title: 'READ THE EQUATION', desc: 'Now the formula makes sense.' },
            { num: 4, title: 'USE THE CALCULATOR', desc: 'Solve practice problems. Verify with Master Calculator.' },
            { num: 5, title: 'SOLVE EXAM PROBLEMS', desc: 'You now have intuition, not just formulas.' },
          ].map((step, idx) => (
            <div key={idx} style={{ display: 'flex', marginBottom: '2rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--color-heat)', color: 'white', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '1.5rem', flexShrink: 0 }}>{step.num}</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>{step.desc}</p>
              </div>
              {idx < 4 && <div style={{ width: '2px', background: 'var(--color-border)', height: '60px', margin: '2rem 0 0 calc(1.5rem + 1.5rem)', position: 'relative', left: '-3rem' }} />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
