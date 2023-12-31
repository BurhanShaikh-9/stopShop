import React, { Suspense } from 'react'
import Loader from '../loading'
import DashboardComp from '@/components/adminComponent/dashboardComponent/dashboard'


const AdminPage = () => {
    return (
        <React.Fragment>
            <Suspense fallback={<Loader />}>
                <DashboardComp />
            </Suspense>
        </React.Fragment>
    )
}

export default AdminPage