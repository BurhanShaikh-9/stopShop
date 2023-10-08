import Image from 'next/image'
import styles from './styles/page.module.css'
import React from 'react'
import { HeroSection } from '@/components/heroSection/heroSection'
import { CartItem } from '@/components/cartItem/cartItem'


export default function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <HeroSection />
        <CartItem />
      </div>
    </React.Fragment>
  )
}
