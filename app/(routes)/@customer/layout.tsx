import React from 'react'
import { Header } from '@/components/reusableComponent/header/header'
import { Footer } from '@/components/reusableComponent/footer/footer'


export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <React.Fragment>
            <Header />
            <div className="mainCustomer">
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}
