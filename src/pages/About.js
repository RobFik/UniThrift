import React from 'react';
import { Link } from 'react-router-dom';

const team = [
  {
    initials: 'AK',
    name: 'Alex Kim',
    role: 'Founder & CEO',
    bio: 'Former VP Growth at two unicorn startups. Built AI-first go-to-market systems that generated $800M in revenue across 5 industries.',
    avatar: 'avatar-orange',
  },
  {
    initials: 'MP',
    name: 'Maya Patel',
    role: 'Chief AI Officer',
    bio: 'Ex-Google AI researcher with a PhD in machine learning. Designed predictive models used by 3 Fortune 100 companies.',
    avatar: 'avatar-blue',
  },
  {
    initials: 'CL',
    name: 'Chris Lawson',
    role: 'Head of Strategy',
    bio: 'Former McKinsey consultant and startup operator. Has led 40+ market expansion strategies across North America and Europe.',
    avatar: 'avatar-purple',
  },
  {
    initials: 'JW',
    name: 'Jamie Wu',
    role: 'Head of Revenue',
    bio: 'Built sales orgs from 0 to $50M ARR three times. Expert in AI-powered outbound systems and enterprise deal velocity.',
    avatar: 'avatar-orange',
  },
];

const values = [
  { icon: '◈', title: 'Velocity Over Perfection', desc: 'We bias toward action and iteration. A good strategy executed fast beats a perfect strategy executed slowly.' },
  { icon: '◆', title: 'Data Before Opinion', desc: 'Every recommendation we make is backed by data. We let the numbers point the way, then bring human judgment to interpret them.' },
  { icon: '⬡', title: 'Clients Win First', desc: "Our success is measured by your results, not our deliverables. If you're not growing, we're not doing our job." },
  { icon: '▲', title: 'Transparency Always', desc: 'No black boxes. We show our work, explain our models, and give you full visibility into every recommendation.' },
];

export default function About() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section
        style={{
          padding: '100px 0 80px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.1) 0%, transparent 60%), var(--darker-bg)',
          textAlign: 'center',
        }}
      >
        <div className="section-inner" style={{ maxWidth: '700px' }}>
          <span className="section-label">About GrowthAI</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '20px' }}>
            We're the mission control<br />for your growth
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            GrowthAI was founded on one belief: every company has an untapped orbit waiting for them.
            We exist to find it, build the engine, and launch you there — fast.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Built by operators,<br />powered by AI</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              GrowthAI was born in 2019 when our founders kept seeing the same problem: brilliant companies with
              broken growth engines. The problem wasn't effort — it was clarity. They didn't know which levers
              to pull, or in what order.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              We combined 40+ years of operator experience with cutting-edge AI to build a system that surfaces
              the right moves, at the right time, with the confidence to act on them.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Today we've helped 200+ companies across 12 industries achieve compound growth — not a spike,
              not a quarter, but a trajectory that keeps climbing.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[
              { n: '2019', l: 'Founded' },
              { n: '200+', l: 'Companies Served' },
              { n: '$2.4B', l: 'Revenue Generated' },
              { n: '12', l: 'Industries' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)' }}>
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our values</h2>
          </div>
          <div className="services-grid">
            {values.map((v, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-label">The Team</span>
            <h2 className="section-title">Meet mission control</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Former founders, operators, and AI researchers who've been in the trenches.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {team.map((t, i) => (
              <div key={i} className="testimonial-card" style={{ textAlign: 'center' }}>
                <div
                  className={`author-avatar ${t.avatar}`}
                  style={{ width: '72px', height: '72px', fontSize: '1rem', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 800 }}
                >
                  {t.initials}
                </div>
                <div className="author-name" style={{ fontSize: '1rem', marginBottom: '4px' }}>{t.name}</div>
                <div className="author-role" style={{ marginBottom: '16px', color: 'var(--primary)' }}>{t.role}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="section-inner">
          <h2 className="section-title">Ready to meet the team in person?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1rem' }}>
            Book a free 30-minute strategy call. No pitch, just conversation.
          </p>
          <Link to="/contact">
            <button className="btn-primary" style={{ fontSize: '1rem', padding: '16px 32px' }}>
              Book a Free Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
