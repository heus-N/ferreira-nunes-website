import React from 'react'
import NavbarMenu from './NavbarMenu';
import NavbarImages from './NavbarImages';

function NavbarComponents({ onSelect }) {
  return (
    <div className='navbar_components'>
      <NavbarImages />
      <NavbarMenu onSelect={onSelect}/>
    </div>
  )
}

export default NavbarComponents