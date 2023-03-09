import { useState } from "react";

import AnchorLink from 'react-anchor-link-smooth-scroll';

import useMediaQuery from "../Hooks/useMediaQuery";
import Hamburger from 'hamburger-react'

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
        hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
            {page}
        </AnchorLink>
    )
}


const Navbar = ({isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveMediumScreen = useMediaQuery('(min-width:768px)');
    const [isOpen, setOpen] = useState(false)
    const navbarBackground = isTopOfPage ? "":'bg-red';


    return (
        <>
            <nav className={` ${navbarBackground} z-40 w-full fixed top-0 py-6`}>
                <div className="flex items-center justify-between mx-auto w-5/6">
                    <h4 className="font-playfair text-3xl font-bold">KS</h4>


                    {/* This Is the Desktop navbar */}
                    {isAboveMediumScreen ? (
                        <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                            <Link
                                page='Home'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page='Skills'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page='Projects'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page='Contact'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />

                        </div>
                    ) : (<button className="rounded-full bg-red p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <img src="../src/assets/menu-icon.svg" alt="menu-icon" />
                        {/* <Hamburger /> */}
                    </button>)}

                    {/* Mobile Menu Popup */}
                    {!isAboveMediumScreen && isMenuToggled && (
                        <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px] ">
                            {/* close Icon */}

                            <div className="flex justify-end p-12 ">
                                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <img src="../src/assets/close-icon.svg" alt="close-icon" />
                                </button>
                            </div>


                            {/* MENU ITEMS */}
                            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue ">
                            <Link
                                page='Home'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page='Skills'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page='Projects'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page='Contact'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            </div>
                        </div>
                    )}

                </div>
            </nav>
        </>
    )

}

export default Navbar;
