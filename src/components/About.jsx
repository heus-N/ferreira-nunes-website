import React from 'react'

function About({ active }) {
  return (
    <div className={`${active}`}>
      <p>About</p>
    </div>
  )
}

export default About