import React from 'react'

function Footer() {
  return (
    <div className='footer__content'>
        <footer className='footer__socials'>
            <p>Criado por</p>
            <a href="https://github.com/heus-N" target='_blank' rel='noopener noreferrer'><img src="/resources/icons/github.png" alt="github_icon" /></a>
            <a href="https://www.instagram.com/__heus/" target='_blank' rel='noopener noreferrer'><img src="/resources/icons/instagram.png" alt="instagram_icon" /></a>
            <a href="https://www.linkedin.com/in/marciano-matheus-nunes-dos-santos-72bb00242/" target='_blank' rel='noopener noreferrer'><img src="/resources/icons/linkedln.png" alt="linkedln_icon" /></a>
        </footer>
    </div>
  )
}

export default Footer