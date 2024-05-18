
import './App.css';
import './index.js'
import NavbarComponents from './components/NavbarComponents';
import Inicio from './components/Inicio';
import Galeria from './components/Galeria';
import Contact from './components/Contact';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState('Inicio');
  const renderContent = () => {
    switch (selected) {
      case 'Inicio':
        return <Inicio />;

      case 'Galeria':
        return <Galeria />;

      case 'About':
        return <About />;

      case 'Contact':
        return <Contact />;

      default:
        return <Inicio />;
    }
  }
  return (
    <>
      <NavbarComponents onSelect={setSelected} />
      <div className='info_table'>
        {renderContent()}
      </div>
    </>
  );
}

export default App; 
