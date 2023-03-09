import React from 'react'

export default function SocialMediaIcons() {
  return (
    <>
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a href="https://www.linkedin.com/in/kartik-sen-22300a137/" className='hover:opacity-50 transition duration-500'
      target="_blank"
      rel='noreferrer'>
        <img src="../src/assets/linkedin.png" alt="Linkedin-Link" />
      </a>

      <a href="https://twitter.com/imkartiksen" className='hover:opacity-50 transition duration-500'
      target="_blank"
      rel='noreferrer'>
        <img src="../src/assets/twitter.png" alt="Twitter-Link" />
      </a>

      <a href="https://github.com/ksen21" className='hover:opacity-50 transition duration-500'
      target="_blank"
      rel='noreferrer'>
        <img src="../src/assets/github.png" alt="Linkedin-Link" />
      </a>

      <a href="https://www.instagram.com/mr_kartikey/" className='hover:opacity-50 transition duration-500'
      target="_blank"
      rel='noreferrer'>
        <img src="../src/assets/instagram.png" alt="Linkedin-Link" />
      </a>

      
    </div>
    </>
    
  )
}
