import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!email.toLowerCase().endsWith('.edu')) {
      setMessage('Error, use a .edu email to join');
    } else {
      setMessage('Verification email sent, check your inbox');
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your .edu email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p style={{ marginTop: 8 }}>{message}</p>}
      <p style={{ marginTop: 8, fontSize: ".9rem", color: "#666" }}>
        Only verified students can create accounts and list items, anyone can browse.
      </p>
    </div>
  );
}

export default SignUp;
