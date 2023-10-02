import Link from 'next/link'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="headerInner">
                    <div className="logo">
                        STOP SHOP
                    </div>
                    <div className="searchBox">
                        <input type="text" placeholder="Search anything" className="searchInput" />
                        <a href="#" className="searchBtn">
                            <BsSearch/>
                        </a>
                    </div>
                    <nav className='desktopNav'>
                        <ul>
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
                                Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                Cart
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}
