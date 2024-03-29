import React from 'react'
import { Header } from '@/components/reusableComponent/header/header'
import { Footer } from '@/components/reusableComponent/footer/footer'
import SideBar from '@/components/adminComponent/sideBarComponent/sidebar'
import AdminLayout from '@/components/adminComponent/adminLayout/adminLayout'


export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode
}) {



    return (
        // <React.Fragment>
        //     <div className="adminPanel">
        //         <SideBar />
        //         <div className="rightBody">
        //             <Header />
        //             {children}
        //             <Footer />
        //         </div>
        //     </div>
        // </React.Fragment>
        <AdminLayout >
            <div className="dashboardLayoutInner">
                {children}
            </div>
        </AdminLayout>
    )
}
