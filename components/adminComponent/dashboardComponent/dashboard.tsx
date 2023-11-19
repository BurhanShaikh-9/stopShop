"use client"

import React, { useEffect } from 'react'
// import AuthenticationService from '../../../services/authentication' 
import TokenService from '@/services/tokenService'

const DashboardComp = () => {
const {isAuthenticated} = TokenService();
    // useEffect(() => {
    //     console.log(isAuthenticated(), 'DashboardComp');
    // }, [[]])

    return (
        <div>DashboardComp</div>
    )
}

export default DashboardComp