"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import itemImg1 from '../../assets/shirtBlack.png'
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger);

export const CartItemDescription = () => {

  const containerRef = useRef(null);

 useEffect(()=>{
  gsap.to(".cartItemDescInner", {
    y:1000,
    duration:6,
    scrollTrigger:{
      trigger:".ItemPicture",
      start: "top 10%",
      end: "top ",
      scrub:4,
      toggleActions: "restart none none none",
      pin: ".ItemPicture",
      markers:{
        startColor:"purple",
        endColor:"fuchsia",
        fontSize: '3rem'
      }
    }
  })
 },[])

  return (
    <React.Fragment>
      <div  ref={containerRef} className="cartItemDescInner">
        <div className="section">
          <div className="cartDescHeading">
            <p>BLACK SHIRT</p>
        <div className="ItemPicture">
          <Image src={itemImg1} alt="Item Image" />
        </div>
          </div>
        </div>
        <div className="section">
          <div className="cartDescHeading">
            <p>White SHIRT</p>
          </div>
        </div>
        <div className="section">
          <div className="cartDescHeading">
            <p>Grey SHIRT</p>
          </div>
        </div>
       
      </div>
    </React.Fragment>
  )
}
