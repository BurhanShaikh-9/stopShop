"use client"

import React, { useEffect, useState } from 'react'
// import AuthenticationService from '../../../services/authentication' 
import TokenService from '@/services/tokenService'
// import ReactApexChart from 'react-apexcharts';
import DashboardService from '@/services/apiRoutes/dashboard';
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DashboardComp = () => {
  
    const { isAuthenticated } = TokenService();
    const { GetAllProductData } = DashboardService();
    const [productsData, setProductsData] = useState<number[]>([])

    useEffect(() => {
        GetAllProductData()
            .then((res) => res.json())
            .then((data) => {
                let products = [data?.activeProducts, data?.deactiveProducts]
                setProductsData(products);
            }).catch((err: any) => {
                console.log(err, 'error')
            })
    }, [])

    const chartData = {
        series: productsData,
        options: {
            labels: ['Active Products', 'Deactive Products'],
        },
    };

    return (
        <React.Fragment>
            <div className="dashboard">
                <div className="card">

                    <ReactApexChart type="pie" options={chartData.options} series={chartData.series} height={200} width={500} />
                </div>


            </div>
        </React.Fragment>
    )
}

export default DashboardComp