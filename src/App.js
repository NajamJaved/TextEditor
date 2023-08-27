import { useState } from 'react';
import './App.css';
import Navbar from './Componants/Navbar';
import Textfile from './Componants/Textfile';

function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light'); 
      document.body.style.backgroundColor='white'

    } else {
      setMode('dark'); // Corrected syntax
      document.body.style.backgroundColor='gray'
    }
  }
  
  return (
    <> 
      <Navbar title="Textutals" abouttext="About us" mode={mode} toggleMode={toggleMode}/>
      <Textfile heading="Enter your text here" mode={mode}/>
    </>
  );
}

export default App;
