"use client"

import React, { ReactNode, useEffect } from 'react'
import SideBar from '../sideBarComponent/sidebar'
import { Header } from '@/components/reusableComponent/header/header'
import { Footer } from '@/components/reusableComponent/footer/footer'
import useSidebarActive from '@/zustand/zustandStore';

interface AdminLayoutProps {
    children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {

    const { sideBarValue, toggleSidebar } = useSidebarActive();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 991 && sideBarValue) {
                toggleSidebar();
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [sideBarValue, toggleSidebar]);

    return (
        <React.Fragment>
            <div className="adminPanel">
                <SideBar />
                <div className={`rightBody ${!sideBarValue ? 'bodyFull' : ''}`}>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default AdminLayout