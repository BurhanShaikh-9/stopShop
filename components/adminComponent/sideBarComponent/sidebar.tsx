"use client"

import React from 'react'
import logo from '../../../assets/logo6.png'
import Image from 'next/image'
import { MdOutlineDashboard } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { FaBox } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const SideBar = () => {

 const pathname = usePathname()

  return (
    <div className='ad-sideBar'>
      <div className="brandLogo">
        <Image src={logo} alt="logo" />
      </div>
      <ul className='ad-sideBarList'>
        <li className={`ad-sideBarListInner ${pathname === '/dashboard' && 'ad-active' }`}><Link href='/dashboard'><MdOutlineDashboard /> <span>Dashboard</span> </Link></li>
        <li className={`ad-sideBarListInner ${pathname === '/admin' && 'ad-active' }`}><Link href='/admin'> <RiAdminLine /> <span>Admin</span></Link>  </li>
        <li className={`ad-sideBarListInner ${pathname === '/product' && 'ad-active' }`}><Link href='/product'> <FaBox /> <span>Products</span></Link> </li>
        <li className={`ad-sideBarListInner ${pathname === '/user' && 'ad-active' }`}><Link href='/user'> <FaRegUser /> <span>Users</span></Link> </li>
        <li className={`ad-sideBarListInner ${pathname === '/order' && 'ad-active' }`}><Link href='/order'> <CiDeliveryTruck /> <span>Orders</span></Link> </li>
      </ul>
    </div>
  )
}

export default SideBar