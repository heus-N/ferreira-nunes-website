import React from 'react'

function NavbarMenu( {onSelect} ) {
  return (
    <div className='navbar_menu'>
        <nav>
            <ul className='navbar_menu__list'>
                <li><button className='option' onClick={() => onSelect('Inicio')}>Inicio</button></li>
                <li><button className='option' onClick={() => onSelect('Galeria')}>Galeria</button></li>
                <li><button className='option' onClick={() => onSelect('Sobre')}>Sobre</button></li>
                <li><button className='option' onClick={() => onSelect('Contato')}>Contato</button></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavbarMenu