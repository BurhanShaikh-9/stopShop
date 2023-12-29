import Dashboard from './dashboard/page'
import React, { Suspense } from 'react'
import Loader from '../loading'


const AdminPage = () => {
    return (
        <React.Fragment>
            <Suspense fallback={<Loader />}>
                <Dashboard />
            </Suspense>
        </React.Fragment>
    )
}

export default AdminPage