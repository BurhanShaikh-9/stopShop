"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import itemImg1 from '../../assets/shirtBlack.png'
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



export const CartItemDescription = () => {

  const mainContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedItemRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section1 = section1Ref.current;

    if (section1) {
      gsap.to(pinnedItemRef.current, {
        y: 650,
        duration: 8,
        scrollTrigger: {
          trigger: section1,
          start: "10%",
          end: () => `+=${section1.clientHeight}`,
          scrub: 1,
          toggleActions: "restart none none none",
          markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "2rem"
          }
        }
      });
    }
  }, [pinnedItemRef.current]);





  useEffect(() => {
    
    let panels: gsap.DOMTarget[] = gsap.utils.toArray(".panel"), observer = ScrollTrigger.normalizeScroll(true), scrollTween: any;


    // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
    document.addEventListener("touchstart", e => {
      if (scrollTween) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }, { capture: true, passive: false })

    function goToSection(i: number) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false },
        onStart: () => {
          observer?.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
          observer?.enable();
        },
        duration: 1,
        onComplete: () => scrollTween = null,
        overwrite: true
      });
    }

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=199%",
        onToggle: self => self.isActive && !scrollTween && goToSection(i)
      });
    });

    // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1)
    })
  }, [])



  return (
    <React.Fragment>
      <div ref={containerRef} className="cartItemDescInner">
        <section className="section panel" style={{backgroundColor:'green'}} ref={section1Ref}>
          <div className="cartDescHeading ">
            <p>BLACK SHIRT</p>
          </div>
          <div className="ItemPicture" ref={pinnedItemRef}>
            <Image src={itemImg1} alt="Item Image" />
          </div>
        </section>
        <section className="section panel" style={{backgroundColor:'blue'}} ref={section2Ref}>
          <div className="cartDescHeading ">
            <p>QUALITY</p>
          </div>
        </section>
        <section className="section panel" ref={section3Ref}>
          <div className="cartDescHeading " >
            <p>Grey SHIRT</p>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}
