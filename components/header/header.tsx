"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import cartIcon from '../../assets/cartIcon.gif'
import Image from 'next/image'
import logo from '../../assets/logo6.png'
export const Header = () => {

    const [isMobileNav, setIsMobileNav] = useState(false);
    const [isShowNav, setIsShowNav] = useState(false)
    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            // Check the window width and update the state accordingly
            if (window.innerWidth < 1200) {
                setIsMobileNav(true);
            } else {
                setIsMobileNav(false);
            }
        };

        // Add a resize event listener
        window.addEventListener('resize', handleResize);

        // Call the handleResize function once to set the initial state
        handleResize();

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <header>
            <div className="container">
                <div className="headerInner">
                    <Link href="/" className="logo">
                        <Image src={logo} alt="logo"/>
                    </Link>
                    <div className="searchBox">
                        <input type="text" placeholder="Search anything" className="searchInput" />
                        <a href="#" className="searchBtn">
                            <BsSearch />
                        </a>
                    </div>
                    {isMobileNav &&
                        <div className={`burgerMenuButton ${isShowNav && 'isShowNavActive'}`}>
                            <button onClick={() => setIsShowNav(!isShowNav)}>
                                <RxHamburgerMenu />
                            </button>
                        </div>
                    }
                    {
                        (!isMobileNav || (isMobileNav && isShowNav)) && (
                            <nav className={` ${!isMobileNav ? 'desktopNav' : `mobilenav ${isShowNav ? 'showMobileNav' : ''}`}`}>
                                <ul>
                                    <li>
                                        <Link href='#'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='#'>
                                            Sale
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='#'>
                                            Categories
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='#'>
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='#'>
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='cartImageClass' href='#'>
                                            <Image src={cartIcon} alt='cartImage' />
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        )

                    }


                </div>
            </div>
        </header>

    )
}
