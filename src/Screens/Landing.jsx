




import useMediaQuery from '../Hooks/useMediaQuery';

import React from 'react';


import { motion } from 'framer-motion';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import SocialMediaIcons from '../components/SocialMediaIcons';




export default function Landing({ setSelectedPage }) {

    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

    return (
        <>
            <section id='home' className='md:flex md:justify-between md:items-center md:h-full g-16 py-10  '>

                {/* Image Section */}

                <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
                    {isAboveMediumScreen ? (
                        <div className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]'>
                            <img src='./src/assets/ksgg.png' alt="Profile"
                                className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[300px]  ' />
                        </div>
                    ) :
                        (
                            <img src="./src/assets/ksgg.png" alt="Profile"
                                className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[300px]  ' />
                        )}
                </div>



                {/* MAIN SECTION */}

                <div className='z-30 basis-2/5 mt-12 md:mt-32'>
                    {/* HEADINGS */}
                    <motion.div initial="hidden"
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>

                        <p className='text-6xl font-playfair z-10 text-center md:text-start '>
                            Kartik {" "}
                            <span className='xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]'>
                                Sen
                            </span>
                        </p>

                        <p className='mt-10 mb-7 text-sm text-center md:text-start '>
                            Combining ReactJS Expertise and Blockchain Passion for Unmatched Development Solutions
                        </p>
                    </motion.div>

                    {/* CALL TO ACTION */}

                    <motion.div className='flex mt-5 justify-center md:justify-start'

                        initial="hidden"
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
                    >
                        <AnchorLink className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold'
                            onClick={() => setSelectedPage('contact')}
                            href="contact" id='contactt'
                        >
                            Contact Me
                        </AnchorLink>

                        <AnchorLink className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
                            onClick={() => setSelectedPage('contact')}
                            href="contact"
                        >

                            <div className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10 '>
                                Let's talk
                            </div>

                        </AnchorLink>
                       
                    </motion.div>

                    <motion.div
                        className='flex mt-5 justify-center md:justify-start'

                        initial="hidden"
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
                    >
                         <a
                            className="p-2 cursor-pointer bg-gradient-rainblue   absolute  mt-[6rem] px-10 w-max flex items-center m-auto space-x-4 md:mb-8 sm:mb-4 bg-slate-200"
                            href={""}
                            target={'_blanck'}
                            rel="noreferrer"
                        >
                            <div>Resume</div>
                            <img
                                className="h-6 w-6"
                                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
                                alt=""
                            ></img>
                        </a>
                        <SocialMediaIcons />

                    </motion.div>
                </div>
            </section>
        </>
    )
}
