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
                    <nav>
                        <ul>
                            <li>
                                Categories
                            </li>
                            <li>
                                About Us
                            </li>
                            <li>
                                Contact Us
                            </li>
                            <li>
                                Cart
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}
