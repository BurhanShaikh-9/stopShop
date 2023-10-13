import Image from 'next/image'
import styles from './styles/page.module.css'
import React from 'react'
import { HeroSection } from '@/components/heroSection/heroSection'
import { CartItem } from '@/components/cartItem/trendingItems'


export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <div className="container">
        <CartItem />
      </div>
    </React.Fragment>
  )
}
