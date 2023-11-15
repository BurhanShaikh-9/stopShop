// import { Header } from '@/components/header/header'
// import { Footer } from '@/components/footer/footer'
import '../_styles/globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'




export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='adminDashboard'>
            {/* <Sidebar /> */}
            {children}
        </div>


    )
}
