import React from 'react';

function Movers() {
  const submit = e => {
    e.preventDefault();
    alert('Thanks, we will contact you about student moving gigs');
  };

  return (
    <div className="container">
      <h2>Student Movers Program</h2>
      <p>Get paid to help fellow students move items. Flexible hours, real local jobs.</p>
      <form onSubmit={submit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Your .edu email" required />
        <button type="submit">Sign Up to Move</button>
      </form>
    </div>
  );
}

export default Movers;
