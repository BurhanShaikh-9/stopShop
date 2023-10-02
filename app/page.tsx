import Image from 'next/image'
import styles from './styles/page.module.css'
import React from 'react'
import { HeroSection } from '@/components/heroSection/heroSection'


export default function Home() {
  return (
    <React.Fragment>
      <div className="container">
      <HeroSection />
      </div>
    </React.Fragment>
  )
}
