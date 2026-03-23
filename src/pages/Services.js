import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: '◈',
    title: 'AI Growth Strategy',
    tagline: 'The foundation of your liftoff',
    desc: 'We deploy proprietary AI models to analyze your business from every angle — market position, funnel performance, customer segments, competitive gaps — and produce a prioritized, 90-day growth roadmap.',
    bullets: ['Full business AI audit', '90-day execution roadmap', 'Weekly sprint planning', 'OKR alignment framework'],
    variant: '',
  },
  {
    icon: '⬡',
    title: 'Revenue Acceleration',
    tagline: 'More fuel, faster',
    desc: 'Our AI-driven sales intelligence platform identifies your highest-value prospects, optimizes your pricing model, and automates the personalized outreach that converts leads into loyal, high-LTV customers.',
    bullets: ['AI prospect scoring', 'Dynamic pricing optimization', 'Automated outreach sequences', 'Pipeline velocity analysis'],
    variant: 'blue',
  },
  {
    icon: '◆',
    title: 'Predictive Analytics',
    tagline: 'See the future, act now',
    desc: 'Our machine-learning models surface market trends 6–12 months before they become obvious. Stop reacting and start positioning your business ahead of the curve.',
    bullets: ['Trend forecasting models', 'Churn prediction & prevention', 'Demand planning AI', 'Competitive signal monitoring'],
    variant: 'purple',
  },
  {
    icon: '▲',
    title: 'Market Expansion',
    tagline: 'New orbits, new revenue',
    desc: 'We map untapped market segments, score geographic and vertical expansion opportunities, and design go-to-market strategies grounded in real-time data and competitive intelligence.',
    bullets: ['Market sizing & scoring', 'Segment opportunity mapping', 'GTM strategy design', 'Competitive landscape analysis'],
    variant: '',
  },
  {
    icon: '⬟',
    title: 'AI Automation',
    tagline: 'Eliminate drag, maximize thrust',
    desc: 'We identify bottlenecks that are slowing your team and implement AI-powered workflows that handle repetitive processes 10x faster — freeing your people for high-leverage work.',
    bullets: ['Process audit & mapping', 'AI workflow implementation', 'Team productivity optimization', 'ROI measurement'],
    variant: 'blue',
  },
  {
    icon: '◉',
    title: 'Executive Advisory',
    tagline: 'Mission control in your corner',
    desc: 'Monthly 1:1 advisory sessions with former C-suite operators and AI scientists who\'ve scaled companies from seed to IPO. Get direct access to the wisdom that only comes from having been there.',
    bullets: ['Monthly strategy sessions', 'Board meeting prep', 'Fundraising narrative coaching', 'On-call advisory access'],
    variant: 'purple',
  },
];

export default function Services() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section
        style={{
          padding: '100px 0 80px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(123,47,190,0.15) 0%, transparent 60%), var(--darker-bg)',
          textAlign: 'center',
        }}
      >
        <div className="section-inner" style={{ maxWidth: '700px' }}>
          <span className="section-label">Our Services</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '20px' }}>
            Everything you need to reach orbit
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Six specialized services, each designed to work independently or as a
            fully integrated growth engine. Pick your launchpad.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="section">
        <div className="section-inner">
          <div style={{ display: 'grid', gap: '32px' }}>
            {services.map((s, i) => (
              <div
                key={i}
                className={`service-card ${s.variant}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.5fr',
                  gap: '48px',
                  alignItems: 'center',
                  padding: '48px',
                }}
              >
                <div>
                  <div className="service-icon" style={{ width: '64px', height: '64px', fontSize: '1.8rem', marginBottom: '20px' }}>
                    {s.icon}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>
                    {s.tagline}
                  </p>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '16px' }}>{s.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
                    What's included
                  </p>
                  <ul style={{ listStyle: 'none', display: 'grid', gap: '12px' }}>
                    {s.bullets.map((b, bi) => (
                      <li key={bi} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--primary)', fontSize: '0.7rem' }}>▶</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" style={{ display: 'inline-block', marginTop: '28px' }}>
                    <button className="btn-primary">Get Started</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
