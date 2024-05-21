
import './App.css';
import './index.js'
import { useState } from 'react';
import NavbarComponents from './components/NavbarComponents';
import InfoComponents from './components/InfoComponents.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [selected, setSelected] = useState('Home');

  return (
    <>
      <NavbarComponents onSelect={setSelected} selected={selected}/>
      <InfoComponents />
      <Footer />
    </>
  );
}

export default App; 
