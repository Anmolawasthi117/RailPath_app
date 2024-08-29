// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DummyMapComponent from './Components/DummyMapComponent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DummyMapComponent />} />
        <Route path="/train-status" element={<DummyMapComponent selectedMap="Train status" />} />
        <Route path="/ticket-counter" element={<DummyMapComponent selectedMap="Ticket counter" />} />
        <Route path="/waiting-room" element={<DummyMapComponent selectedMap="Waiting Room" />} />
        <Route path="/luggage-room" element={<DummyMapComponent selectedMap="Luggage Room" />} />
        <Route path="/cafeteria" element={<DummyMapComponent selectedMap="Cafeteria" />} />
      </Routes>
    </Router>
  );
};

export default App;
