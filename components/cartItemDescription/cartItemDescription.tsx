"use client"
import React, { use, useEffect, useRef } from 'react'
import gsap from 'gsap';
import itemImg1 from '../../assets/shirtBlack.png'
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



export const CartItemDescription = () => {

  const mainContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedItemRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(pinnedItemRef.current, {
      y: 500,
      duration: 8,
      scrollTrigger: {
        trigger: pinnedItemRef.current,
        start: "top 10",
        end: "top 80%",
        scrub: 10,
        toggleActions: "restart none none none",
        markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "2rem"
        }
      }
    })
  }, [])

  return (
    <React.Fragment>
      <div ref={mainContainerRef} className="cartItemDescContainer">

        <div className="ItemPicture" ref={pinnedItemRef}>
          <Image src={itemImg1} alt="Item Image" />
        </div>
        <div ref={containerRef} className="cartItemDescInner">
          <section className="section" style={{ backgroundColor: 'red' }} ref={sectionRef}>
            <div className="cartDescHeading">
              <p>BLACK SHIRT</p>
            </div>
            {/* <div className="ItemPicture" ref={pinnedItemRef}>
              <Image src={itemImg1} alt="Item Image" />
            </div> */}
          </section>
          <section className="section" style={{ backgroundColor: 'blue' }} >
            <div className="cartDescHeading">
              <p>QUALITY</p>
            </div>
          </section>
          <section className="section"  >
            <div className="cartDescHeading">
              <p>Grey SHIRT</p>
            </div>
          </section>

        </div>
      </div>

    </React.Fragment>
  )
}
