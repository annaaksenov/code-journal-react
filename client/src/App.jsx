import Journal from './Journal';
import './App.css';
import './Journal.css';
import { useState } from 'react';

function App() {
  const [currentView, setCurrentView] = useState(false);
  return (
    <>
      <Journal currentView={currentView} setCurrentView={setCurrentView} />
    </>
  );
}

export default App;
