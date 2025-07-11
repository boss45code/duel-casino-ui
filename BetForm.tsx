import React, { useState } from 'react';

const BetForm = () => {
  const [betAmount, setBetAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Bet placed: ${betAmount} ETH`);
    setBetAmount('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <input
        type="number"
        placeholder="Enter bet amount"
        value={betAmount}
        onChange={(e) => setBetAmount(e.target.value)}
        required
      />
      <button type="submit">Place Bet</button>
    </form>
  );
};

export default BetForm;
