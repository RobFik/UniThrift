import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Deterministic star positions (avoids re-render flicker from Math.random)
const STARS = Array.from({ length: 160 }, (_, i) => ({
  id: i,
  left: `${((i * 73.1 + 11.3) % 97) + 1}%`,
  top: `${((i * 47.7 + 23.8) % 95) + 1}%`,
  size: `${((i * 0.7) % 2.5) + 0.5}px`,
  delay: `${((i * 0.13) % 4).toFixed(2)}s`,
  dur: `${((i * 0.31) % 3 + 2).toFixed(1)}s`,
}));

const SMOKE_PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: `${((i * 7 + 10) % 18) + 8}px`,
  left: `${((i * 23 + 35) % 30) + 35}%`,
  delay: `${(i * 0.25).toFixed(2)}s`,
  dur: `${((i * 0.4) % 1.5 + 1.5).toFixed(1)}s`,
  distance: `${-((i * 17 + 60) % 80) - 40}px`,
  drift: `${((i % 3) - 1) * 20}px`,
}));

const TRAIL_PARTICLES = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  size: `${((i * 3 + 4) % 6) + 3}px`,
  left: `${((i * 19 + 42) % 20) + 42}%`,
  delay: `${(i * 0.1).toFixed(2)}s`,
  dur: `${((i * 0.2) % 0.6 + 0.6).toFixed(1)}s`,
}));

function RocketSVG() {
  return (
    <svg
      viewBox="0 0 120 260"
      className="rocket-svg"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Rocket"
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c8d8f0" />
          <stop offset="40%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#a0bce0" />
        </linearGradient>
        <linearGradient id="noseGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#c0d4f0" />
          <stop offset="100%" stopColor="#e8f2ff" />
        </linearGradient>
        <linearGradient id="finGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF8C35" />
          <stop offset="100%" stopColor="#c94a10" />
        </linearGradient>
        <radialGradient id="windowGrad" cx="38%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#aaf4ff" />
          <stop offset="60%" stopColor="#00b8e0" />
          <stop offset="100%" stopColor="#004d80" />
        </radialGradient>
        <linearGradient id="nozzleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#999" />
          <stop offset="100%" stopColor="#555" />
        </linearGradient>
        <filter id="rocketGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="windowGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Nose cone */}
      <path d="M60,8 Q44,18 40,70 L80,70 Q76,18 60,8 Z" fill="url(#noseGrad)" filter="url(#rocketGlow)" />

      {/* Body */}
      <rect x="38" y="68" width="44" height="105" rx="5" fill="url(#bodyGrad)" />

      {/* Accent stripe */}
      <rect x="38" y="112" width="44" height="10" rx="2" fill="#FF6B35" opacity="0.75" />

      {/* Panel lines */}
      <line x1="60" y1="72" x2="60" y2="168" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />

      {/* Porthole window */}
      <circle cx="60" cy="93" r="15" fill="url(#windowGrad)" filter="url(#windowGlow)" />
      <circle cx="60" cy="93" r="12" fill="rgba(0,30,80,0.25)" />
      <circle cx="54" cy="87" r="4" fill="rgba(255,255,255,0.65)" />
      <circle cx="66" cy="99" r="2" fill="rgba(255,255,255,0.3)" />

      {/* Left fin */}
      <path d="M38,140 L14,182 L38,168 Z" fill="url(#finGrad)" />
      <path d="M38,140 L24,174 L38,165 Z" fill="rgba(255,255,255,0.12)" />

      {/* Right fin */}
      <path d="M82,140 L106,182 L82,168 Z" fill="url(#finGrad)" />
      <path d="M82,140 L96,174 L82,165 Z" fill="rgba(0,0,0,0.1)" />

      {/* Nozzle */}
      <path d="M44,170 L40,184 L80,184 L76,170 Z" fill="url(#nozzleGrad)" rx="3" />
      <ellipse cx="60" cy="184" rx="20" ry="4" fill="#444" />

      {/* GrowthAI text on body */}
      <text x="60" y="160" textAnchor="middle" fill="rgba(0,50,120,0.5)" fontSize="5" fontWeight="800" fontFamily="Inter, sans-serif">GROWTHAI</text>
    </svg>
  );
}

function RocketScene({ launched }) {
  return (
    <div className="rocket-stage">
      {/* Orbit rings */}
      <div className="orbit-ring orbit-ring-1">
        <div className="orbit-dot" />
      </div>
      <div className="orbit-ring orbit-ring-2">
        <div className="orbit-dot orbit-dot-2" />
      </div>

      <div className={`rocket-wrapper ${launched ? 'launching' : 'floating'}`}>
        <div className="rocket-body">
          <div className="rocket-glow" />
          <RocketSVG />
        </div>

        {/* Flame */}
        <div className="flame-container">
          <div className="flame flame-outer" />
          <div className="flame flame-mid" />
          <div className="flame flame-inner" />
        </div>

        {/* Smoke particles */}
        {SMOKE_PARTICLES.map((p) => (
          <div
            key={p.id}
            className="smoke-particle"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              bottom: '-30px',
              '--dur': p.dur,
              '--delay': p.delay,
              '--distance': p.distance,
              '--drift': p.drift,
            }}
          />
        ))}

        {/* Launch trail particles */}
        {TRAIL_PARTICLES.map((p) => (
          <div
            key={p.id}
            className="trail-particle"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: '100%',
              '--dur': p.dur,
              '--delay': p.delay,
            }}
          />
        ))}
      </div>

      {/* Launchpad */}
      <div className="launchpad" />
    </div>
  );
}

function StarField() {
  return (
    <div className="stars-bg">
      {STARS.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            '--delay': s.delay,
            '--dur': s.dur,
          }}
        />
      ))}
    </div>
  );
}

function HeroSection() {
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    // Auto-launch after 1.8s, then loop every 9s
    const doLaunch = () => {
      setLaunched(true);
      setTimeout(() => setLaunched(false), 1600);
    };

    const initial = setTimeout(doLaunch, 1800);
    const interval = setInterval(doLaunch, 9000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="hero">
      <StarField />

      {/* Nebula blobs */}
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />

      <div className="hero-inner">
        {/* Left: Copy */}
        <div className="hero-text">
          <div className="hero-badge">
            <div className="badge-dot" />
            AI-Powered Growth Consulting
          </div>

          <h1 className="hero-title">
            Launch Your Business<br />
            <span className="highlight">Beyond the Horizon</span>
          </h1>

          <p className="hero-subtitle">
            GrowthAI Consulting uses cutting-edge artificial intelligence to
            propel your company into its next orbit — more revenue, faster
            growth, and a trajectory that reaches the stars.
          </p>

          <div className="hero-buttons">
            <Link to="/contact">
              <button className="btn-primary">
                Start Your Launch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
            <Link to="/services">
              <button className="btn-secondary">
                Explore Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>

          <div className="hero-social-proof">
            <div className="avatars">
              {['JM', 'SR', 'KL', 'AP'].map((initials, i) => (
                <div className="avatar" key={i}>{initials}</div>
              ))}
            </div>
            <div className="proof-text">
              <strong>200+ companies launched</strong>
              Trusted by startups and Fortune 500s
            </div>
          </div>
        </div>

        {/* Right: Rocket */}
        <RocketScene launched={launched} />
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { number: '200+', label: 'Companies Launched' },
    { number: '3.8x', label: 'Average Revenue Growth' },
    { number: '$2.4B', label: 'Client Revenue Generated' },
    { number: '94%', label: 'Client Retention Rate' },
  ];

  return (
    <div className="stats-strip">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: '◈',
      title: 'AI Growth Strategy',
      desc: 'We analyze your entire business with AI to identify the highest-leverage growth levers — then build a 90-day playbook to execute them at speed.',
      variant: '',
    },
    {
      icon: '⬡',
      title: 'Revenue Acceleration',
      desc: 'Our AI-driven sales intelligence tools find your best prospects, optimize pricing, and automate the outreach that converts leads into loyal customers.',
      variant: 'blue',
    },
    {
      icon: '◆',
      title: 'Predictive Analytics',
      desc: 'Stop reacting to the market and start anticipating it. Our machine-learning models surface trends 6–12 months before they become obvious.',
      variant: 'purple',
    },
    {
      icon: '▲',
      title: 'Market Expansion',
      desc: 'We map untapped markets, score expansion opportunities, and design market-entry strategies backed by real-time data and competitive intelligence.',
      variant: '',
    },
    {
      icon: '⬟',
      title: 'AI Automation',
      desc: 'Eliminate bottlenecks and free your team for high-impact work. We implement AI workflows that handle repetitive processes 10x faster.',
      variant: 'blue',
    },
    {
      icon: '◉',
      title: 'Executive Advisory',
      desc: "Monthly strategic advisory sessions with former C-suite operators and AI scientists who've scaled companies from seed to IPO.",
      variant: 'purple',
    },
  ];

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Six engines of<br />unstoppable growth
          </h2>
          <p className="section-subtitle">
            Every service is purpose-built for one goal: putting your business on
            an upward trajectory that compounds over time.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className={`service-card ${s.variant}`} key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link to="/services" className="service-link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      cls: 'step-1',
      title: 'Diagnose',
      desc: 'We run a deep AI audit of your business — your data, funnels, team, and market position — to find exactly where growth is stalling.',
    },
    {
      num: '02',
      cls: 'step-2',
      title: 'Strategize',
      desc: 'Our AI models generate a ranked, prioritized growth roadmap. You get clarity on the 20% of actions that will drive 80% of your results.',
    },
    {
      num: '03',
      cls: 'step-3',
      title: 'Launch',
      desc: 'We embed with your team to execute the plan at rocket speed — tracking every metric and iterating until your growth is in orbit.',
    },
  ];

  return (
    <section className="section how-it-works">
      <div className="section-inner">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">Our Process</span>
          <h2 className="section-title">Three stages to liftoff</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A focused, repeatable system that takes you from grounded to orbit in 90 days.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, i) => (
            <div className={`process-step ${step.cls}`} key={i}>
              <div className="step-number-wrap">
                <div className="step-number">{step.num}</div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      text: '"GrowthAI didn\'t just give us a strategy deck — they embedded with our team and helped us execute. Revenue grew 4.2x in 8 months. We went from Series A to Series B in a year."',
      name: 'Jordan Mitchell',
      role: 'CEO, NovaTech Solutions',
      initials: 'JM',
      avatar: 'avatar-orange',
    },
    {
      text: '"Their AI-powered market analysis identified a segment we\'d completely overlooked. That one insight is now responsible for 40% of our new ARR. Incredible return on investment."',
      name: 'Sarah Reid',
      role: 'VP Growth, Elevate Commerce',
      initials: 'SR',
      avatar: 'avatar-blue',
    },
    {
      text: '"The team at GrowthAI is the real deal. Former operators who\'ve been in the trenches, backed by AI tools that surface insights no human analyst could find alone. Game-changer."',
      name: 'Amir Patel',
      role: 'Co-Founder, PulseMetrics',
      initials: 'AP',
      avatar: 'avatar-purple',
    },
  ];

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">Companies already in orbit</h2>
          <p className="section-subtitle">
            Real results from real businesses that chose to launch with GrowthAI.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="stars-row">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} className="star-icon" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className={`author-avatar ${t.avatar}`}>{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-bg" />
      <div className="cta-glow" />
      <div className="cta-inner">
        <div>
          <h2 className="cta-title">
            Ready to launch?<br />
            <span style={{ color: 'var(--primary)' }}>Your orbit awaits.</span>
          </h2>
          <p className="cta-subtitle">
            Book a free 30-minute strategy call. We'll show you exactly where
            your biggest growth opportunities are hiding — no strings attached.
          </p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link to="/contact">
              <button className="btn-primary" style={{ fontSize: '1rem', padding: '16px 32px' }}>
                Book Free Strategy Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
            <Link to="/about">
              <button className="btn-secondary" style={{ fontSize: '1rem', padding: '16px 32px' }}>
                Meet the Team
              </button>
            </Link>
          </div>
        </div>
        <div className="cta-rocket-mini" role="img" aria-label="rocket">
          {/* Inline SVG mini rocket */}
          <svg width="120" height="180" viewBox="0 0 120 260" style={{ filter: 'drop-shadow(0 0 30px rgba(255,107,53,0.5))' }}>
            <defs>
              <linearGradient id="ctaNose" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#c0d4f0" />
                <stop offset="100%" stopColor="#e8f2ff" />
              </linearGradient>
              <linearGradient id="ctaBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c8d8f0" />
                <stop offset="40%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#a0bce0" />
              </linearGradient>
              <linearGradient id="ctaFin" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF8C35" />
                <stop offset="100%" stopColor="#c94a10" />
              </linearGradient>
            </defs>
            <path d="M60,8 Q44,18 40,70 L80,70 Q76,18 60,8 Z" fill="url(#ctaNose)" />
            <rect x="38" y="68" width="44" height="105" rx="5" fill="url(#ctaBody)" />
            <rect x="38" y="112" width="44" height="10" rx="2" fill="#FF6B35" opacity="0.75" />
            <circle cx="60" cy="93" r="15" fill="#00b8e0" opacity="0.8" />
            <circle cx="54" cy="87" r="4" fill="rgba(255,255,255,0.65)" />
            <path d="M38,140 L14,182 L38,168 Z" fill="url(#ctaFin)" />
            <path d="M82,140 L106,182 L82,168 Z" fill="url(#ctaFin)" />
            <path d="M44,170 L40,184 L80,184 L76,170 Z" fill="#777" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
