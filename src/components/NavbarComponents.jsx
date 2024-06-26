import React from 'react'
import NavbarMenu from './NavbarMenu';
import NavbarImages from './NavbarImages';

function NavbarComponents({ onSelect, selected }) {
  return (
    <div className='navbar__components'>
      <NavbarImages />
      <NavbarMenu onSelect={onSelect} selected={selected} />
    </div>
  )
}

export default NavbarComponents