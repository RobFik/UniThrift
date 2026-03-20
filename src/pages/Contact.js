import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section
        style={{
          padding: '100px 0 80px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255,107,53,0.1) 0%, transparent 60%), var(--darker-bg)',
          textAlign: 'center',
        }}
      >
        <div className="section-inner" style={{ maxWidth: '600px' }}>
          <span className="section-label">Get In Touch</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '20px' }}>
            Let's plan your launch
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Book a free 30-minute strategy session. We'll identify your biggest growth
            opportunities and sketch out a flight plan — no commitment required.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section">
        <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '80px', alignItems: 'start' }}>
          {/* Form */}
          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '20px', padding: '48px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
                  <svg width="64" height="64" viewBox="0 0 120 260" style={{ filter: 'drop-shadow(0 0 20px rgba(255,107,53,0.5))' }}>
                    <defs>
                      <linearGradient id="succNose" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#c0d4f0" />
                        <stop offset="100%" stopColor="#e8f2ff" />
                      </linearGradient>
                      <linearGradient id="succBody" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c8d8f0" />
                        <stop offset="40%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#a0bce0" />
                      </linearGradient>
                      <linearGradient id="succFin" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF8C35" />
                        <stop offset="100%" stopColor="#c94a10" />
                      </linearGradient>
                    </defs>
                    <path d="M60,8 Q44,18 40,70 L80,70 Q76,18 60,8 Z" fill="url(#succNose)" />
                    <rect x="38" y="68" width="44" height="105" rx="5" fill="url(#succBody)" />
                    <rect x="38" y="112" width="44" height="10" rx="2" fill="#FF6B35" opacity="0.75" />
                    <circle cx="60" cy="93" r="15" fill="#00b8e0" opacity="0.8" />
                    <path d="M38,140 L14,182 L38,168 Z" fill="url(#succFin)" />
                    <path d="M82,140 L106,182 L82,168 Z" fill="url(#succFin)" />
                  </svg>
                </div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}>You're on the launch pad!</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  We've received your message and will reach out within 24 hours to
                  schedule your free strategy call. Prepare for liftoff.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Book your free strategy call</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '32px' }}>
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                  {[
                    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Smith' },
                    { name: 'email', label: 'Work Email', type: 'email', placeholder: 'jane@company.com' },
                    { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Acme Corp' },
                  ].map((f) => (
                    <div key={f.name}>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '0.3px' }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        value={form[f.name]}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid var(--card-border)',
                          borderRadius: '10px',
                          color: 'white',
                          fontSize: '0.95rem',
                          outline: 'none',
                          transition: 'border-color 0.2s ease',
                          fontFamily: 'Inter, sans-serif',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(255,107,53,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '0.3px' }}>
                      What's your biggest growth challenge?
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us about where you're stuck or what growth goal you're trying to hit..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--card-border)',
                        borderRadius: '10px',
                        color: 'white',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'Inter, sans-serif',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(255,107,53,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--card-border)')}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '16px' }}>
                    Submit & Book My Call
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '24px' }}>What happens next?</h3>
            {[
              { step: '01', title: 'We review your submission', desc: 'Within 24 hours, a senior strategist reviews your information and growth challenges.' },
              { step: '02', title: 'We schedule your call', desc: "You'll receive a calendar link to book a time that works for you — typically within 2-3 business days." },
              { step: '03', title: 'Your free strategy session', desc: 'A 30-minute call where we identify your biggest opportunities and sketch a growth roadmap — yours to keep, no strings attached.' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', marginBottom: '32px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B35, #FF8C00)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.75rem', flexShrink: 0 }}>
                  {s.step}
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '6px' }}>{s.title}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}

            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '28px', marginTop: '40px' }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Direct contact
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>hello@growthai.com</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>+1 (415) 555-0198</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
