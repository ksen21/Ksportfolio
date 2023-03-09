import React from 'react'


import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Dotgroup({selectedpage,setSelectedPage}) {

    const selectedStyle = 'relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]'

  return (
    <>
        <div className='flex flex-col gap-6 fixed top-[60%] right-7'>

        <AnchorLink className={`${selectedpage === 'home' ? selectedStyle : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
            href="#home" onClick={() => setSelectedPage('home')}>
        </AnchorLink>

        <AnchorLink className={`${selectedpage === 'skills' ? selectedStyle : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
            href="#skills" onClick={() => setSelectedPage('skills')}>
        </AnchorLink>

        <AnchorLink className={`${selectedpage === 'projects' ? selectedStyle : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
            href="#projects" onClick={() => setSelectedPage('projects')}>
        </AnchorLink>

        <AnchorLink className={`${selectedpage === 'contact' ? selectedStyle : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
            href="#contact" onClick={() => setSelectedPage('contact')}>
        </AnchorLink>

        </div>

    </>
  )
}
