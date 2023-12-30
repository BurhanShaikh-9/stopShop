// import Image from 'next/image'
import styles from './styles/page.module.css'
import React, { Suspense } from 'react'
// import LoginPage from './login/page'
import Loader from '../loading'
import { MainPage } from '@/components/clientComponent/mainPage/mainPage'



const CustomerShop = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<Loader />}>

        <MainPage />

      </Suspense>
    </React.Fragment>
  )
}

export default CustomerShop
