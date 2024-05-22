import React from 'react';

function NavbarMenu({ onSelect, selected }) {
  return (
    <div className='navbar_menu'>
      <nav>
        <ul className='navbar_menu__list'>
          <li><button className={`option ${selected === 'Home' ? 'active' : ''}`} onClick={() => onSelect('Home')}>Inicio</button></li>
          <li><button className={`option ${selected === 'Galery' ? 'active' : ''}`} onClick={() => onSelect('Galery')}>Galeria</button></li>
          <li><button className={`option ${selected === 'About' ? 'active' : ''}`} onClick={() => onSelect('About')}>Sobre</button></li>
          <li><button className={`option ${selected === 'Contact' ? 'active' : ''}`} onClick={() => onSelect('Contact')}>Contato</button></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarMenu;
