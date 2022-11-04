import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Heroes from './Heroes';
import Main from './Main';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/heroes" element={<Heroes />} />
      </Routes>
    </div>
  );
}
export default App;
