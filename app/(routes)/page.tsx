// import Image from 'next/image'
import styles from './styles/page.module.css'
import React, { Suspense } from 'react'
import { HeroSection } from '../../components/clientComponent/heroSection/heroSection'
import { CartItem } from '../../components/clientComponent/cartItem/trendingItems'
import { MainPage } from '../../components/clientComponent/mainPage/mainPage'
import { LoginComponent } from '../../components/clientComponent/registration/login'
import LoginPage from './login/page'
import Loader from './loading'
import LoaderComponent from '@/components/reusableComponent/loader/loader'



export default function Home() {

  return (
    <React.Fragment>
      <Suspense fallback={<Loader />}>
       
        <LoginPage />
        {/* <LoaderComponent/> */}

      </Suspense>
    </React.Fragment>
  )
}
