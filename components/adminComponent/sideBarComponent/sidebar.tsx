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
import useSidebarActive from '@/zustand/zustandStore';
import { FiTruck } from "react-icons/fi";
import { PiPackageDuotone } from "react-icons/pi";

const SideBar = () => {


  const { sideBarValue, toggleSidebar } = useSidebarActive();

  const pathname = usePathname()

  return (
    <div className={`ad-sideBar ${sideBarValue ? 'sidebarActive' : ''}`}>
      <div className="brandLogo">
        <Link href='/'>
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <ul className='ad-sideBarList'>
        <li className={`ad-sideBarListInner ${pathname === '/' && 'ad-active'}`}><Link href='/' className='ad-outerLink'><MdOutlineDashboard /> <span>Dashboard</span> </Link></li>
        <li className={`ad-sideBarListInner ${pathname === '/admin' && 'ad-active'}`}>
          <Link href='/admin' className='ad-outerLink'> <RiAdminLine /> <span>Admin</span></Link>
          <ul className='ad-innerMenu'>
            <li className='ad-innerMenuWrapper'>Add Admin</li>
            <li className='ad-innerMenuWrapper'>Manage Admin</li>
          </ul>
        </li>
        <li className={`ad-sideBarListInner ${(pathname === '/add-product' || pathname === '/manage-product') && 'ad-active'}`}>
          <Link href='/add-product' className='ad-outerLink'> <PiPackageDuotone /> <span>Products</span></Link>
          <ul className='ad-innerMenu'>
            <li className={`ad-innerMenuWrapper ${pathname === '/add-product'  && 'ad-innerActive'}`}><Link className='ad-innerLink' href='/add-product'> Add Products </Link></li>
            <li className={`ad-innerMenuWrapper ${pathname === '/manage-product'  && 'ad-innerActive'}`}><Link className='ad-innerLink' href='/manage-product'> Manage Products </Link></li>
          </ul>
        </li>
        <li className={`ad-sideBarListInner ${pathname === '/user' && 'ad-active'}`}>
          <Link className='ad-outerLink' href='/user'> <FaRegUser /> <span>Users</span></Link>
        </li>
        <li className={`ad-sideBarListInner ${pathname === '/order' && 'ad-active'}`}>
          <Link className='ad-outerLink' href='/order'> <FiTruck /> <span>Orders</span></Link>
        </li>
        <li className={`ad-sideBarListInner ${pathname === '/profile' && 'ad-active'}`}>
          <Link className='ad-outerLink' href='/profile'> <FiTruck /> <span>Profile</span></Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar