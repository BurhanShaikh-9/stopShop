// import Image from 'next/image'
import styles from './styles/page.module.css'
import React from 'react'
import { HeroSection } from '@/components/heroSection/heroSection'
import { CartItem } from '@/components/cartItem/trendingItems'
import { MainPage } from '@/components/mainPage/mainPage'


export default function Home() {

  return (
    <React.Fragment>
      <MainPage />
    </React.Fragment>
  )
}
