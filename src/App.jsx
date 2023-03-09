
import React, { useState } from 'react'
import { useEffect } from 'react';
import useMediaQuery from './Hooks/useMediaQuery'
import Navbar from './Screens/Navbar';
import Dotgroup from './Screens/Dotgroup';
import Landing from './Screens/Landing';
import LineGradient from './components/LineGradient';
import MySkills from './Screens/MySkills';
import Projects from './Screens/Projects';
import ProjectGit from './Screens/ProjectGit';
import SkillsGit from './Screens/SkillsGit';




export default function App() {

  const [selectedpage, setSelectedPage] = useState('home');
  const [isTopOfPage, setisTopOfPage] = useState(true);
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setisTopOfPage(true);
      if (window.scrollY !== 0) setisTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <>
      <div className='app bg-deep-blue'>
        <Navbar isTopOfPage={isTopOfPage} selectedpage={selectedpage} setSelectedPage={setSelectedPage}/>

        <div className='w-5/6 mx-auto md:h-full  '>
          {isAboveMediumScreen && (
            <Dotgroup
              selectedpage={selectedpage}
              setSelectedPage={setSelectedPage}
            />
          )}

          <Landing setSelectedPage = {setSelectedPage}/>
        </div>
        <LineGradient/>

        <div className='w-5/6 mx-auto md:h-full '>
          <SkillsGit/>
        </div>
        <LineGradient/>

        <div className='w-5/6 mx-auto md:h-full '>
          {/* <Projects/> */}
          <ProjectGit/>
        </div>

     
        


      </div>



    </>
  )
}

