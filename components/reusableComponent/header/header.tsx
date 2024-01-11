"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import cartIcon from '../../../assets/cartIcon.gif'
import userIcon from '../../../assets/userIcon.gif'
import Image from 'next/image'
import logo from '../../../assets/logo6.png'
import { IoIosNotificationsOutline } from "react-icons/io";
import profilePic from '@/assets/profilePic.jpg'
import useSidebarActive from '@/zustand/zustandStore'

export const Header = () => {

    const [isMobileNav, setIsMobileNav] = useState(false);
    const [isShowNav, setIsShowNav] = useState(false)
    const [isSideBar, setIsSidebar] = useState(false)
    const { sideBarValue, toggleSidebar } = useSidebarActive();

    // useEffect(()=>{
    //     console.log(sideBarValue, 'sideee');
    // },[sideBarValue])
    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            if (window.innerWidth < 1200) {
                setIsMobileNav(true);
            } else {
                setIsMobileNav(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <React.Fragment>

            <header className='cus-header'>
            <div className="container">
                <div className="headerInner">
                    <Link href="/shop" className="logo">
                        <Image src={logo} alt="logo" />
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
                                        <Link href='/shop'>
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
                                    <li>
                                        <Link className='cartImageClass userImageClass' href='/login'>
                                            <Image src={userIcon} alt='userImage' />
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        )

                    }
                </div>
            </div>
        </header>
            {/* <header>
                    <div className="ad-adminHeader">
                        <div className="ad-dashboardLeft">
                            <button className='ad-burgerMenu' onClick={()=>toggleSidebar()}>
                                <RxHamburgerMenu />
                            </button>
                            <div className="ad-pageName">
                                Dashboard
                            </div>
                        </div>
                        <div className="ad-dashboardRight">
                            <div className="ad-searchBar">
                                <input type="text" placeholder='Search...' />
                                <BsSearch  />
                            </div>
                            <div className="ad-notification">
                                <IoIosNotificationsOutline />
                            </div>
                            <div className="ad-profileIcon">
                                <Image src={profilePic} alt="profilePic" />
                            </div>
                            <div className="ad-profileName">
                                <p>Burhan Shaikh</p>
                                <p>Admin</p>
                            </div>
                        </div>
                    </div>
      
            </header> */}
        </React.Fragment>





    )
}
