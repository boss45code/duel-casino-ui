import React from 'react';
import GameTable from './components/GameTable';
import BetForm from './components/BetForm';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Duel Casino 🎰</h1>
      <GameTable />
      <BetForm />
    </div>
  );
}

export default App;
