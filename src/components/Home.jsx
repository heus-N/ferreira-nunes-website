import React from 'react'

function Home({ active }) {
  return (
    <div className={`${active}`}>
      <p>Home</p>
    </div>
  )
}

export default Home