import './globals.css';

export const metadata = {
  title: 'ME1100 Visual Explainers - Thermodynamics',
  description: 'Interactive visual explanations for thermodynamics. Learn thermodynamic concepts through interactive diagrams, sliders, and calculators.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%23FF6B35'>Θ</text></svg>" />
      </head>
      <body>
        {/* Navigation Bar */}
        <nav style={{
          background: 'var(--color-heat)',
          color: 'white',
          padding: '1rem 2rem',
          boxShadow: '0 2px 8px rgba(255, 107, 53, 0.1)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>🌡️ ME1100 Visual Explainers</h2>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Home</a>
              <a href="#calculator" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Calculator</a>
              <a href="https://github.com/Ajay-Sankar-T/me1100-visual-explainers" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>GitHub</a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer style={{
          background: '#1A1A2E',
          color: 'white',
          padding: '2rem',
          marginTop: '4rem',
          textAlign: 'center',
          fontSize: '0.875rem',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p>Built for ME1100 @ IIT Madras | Visual Learning, Engineering Excellence ©2026</p>
            <p style={{ marginTop: '0.5rem', color: '#9CA3AF' }}>Inspired by <a href="https://mlu-explain.github.io" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-heat)', textDecoration: 'none' }}>MLU-Explain</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
